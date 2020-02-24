# 03. 데이터 모델링

엘라스틱 서치에서는 색인할 때 문서의 데이터 유형에 따라 필드에 적절한 데이터 타입을 지정하는것을 **매핑**이라 한다.

**매핑**은 색인될 문서의 데이터 모델링이라고 할 수 있다.

사전에 매핑을 설정하면 자동으로 지정된 데이터 타입으로 색인되지만 매핑을 설정해 두지 않으면 엘라스틱 서치가 자동으로 필드를 생성하고 필드타입까지 결정한다.

이는 예기치 않는 문제를 야기시킬수 있기 때문에 **매핑** 과정은 매우 중요한 과정이라 할 수 있다.

## 3.1 매핑 API 이해하기

**매핑**은 색인시 데이터가 어떻게 저장될지 결정하는 설정

문서에서 존재하는 필드의 속성을 정의할 때 각 필드 속성에는 데이터 타입과 메타데이터가 포함되는데
이를 통해 색인 과정에서 문서가 역색인 (Inverted Index) 으로 변환되는지 상세하게 정의할 수 있다.

엘라스틱은 기본적으로 스키마리스이기 때문에 자동으로 매핑정보가 생성된다.
또한 엘라스틱 서치는 수정이 불가하여 삭제하고 재생성해야 하기 때문에 이를 통해 장애가 발생할 수 있다.

예시는 다음과 같다.

```bash
# 문서 1
{
  "movieCd": 20173732,
  "moiveNm": "캡틴 아메리카"
}

# 문서 2
{
  "movieCd": "XT001",
  "moiveNm": "아이언 맨"
}
```

첫번째 문서를 매핑설정없이 색인하면 `moiveCd` 필드는 숫자 타입으로 매핑되지만 두번째 문서를 색인하면 `moiveCd` 값은 문자열이기 때문에 색인이 불가능하다.

때문에 인덱스를 수정이 불가하니 삭제하고 다시 생성하거나 매핑을 다시 정의해야 한다.

매핑정보를 설정할 때는 다음과 같은 사항을 고민해야 한다.

* 문자열을 분석할 것인가?
* `_source` 에 어떤 필드를 정의할 것인가
* 날짜 필드를 가지는 필드는 무엇인가
* 매핑에 정의되지 않고 유입되는 필드는 어떻게 처리할 것인가?

### 3.1.1 매핑 인덱스 만들기

하기와 같이 매핑 인덱스 생성

```bash
PUT movie_search
{
  "settings": {
    "number_of_shards": 5,
    "number_of_replicas": 1
  },
  "mappings": {
      "properties": {
        "movieCd": {
          "type": "keyword"
        },
        "movieNm": {
          "type": "text",
          "analyzer": "standard"
        },
        "movieNmEn": {
          "type": "text",
          "analyzer": "standard"
        },
        "prdtYear": {
          "type": "integer"
        },
        "openDt": {
          "type": "integer"
        },
        "typeNm": {
          "type": "keyword"
        },
        "prdtStatNm": {
          "type": "keyword"
        },
        "nationAlt": {
          "type": "keyword"
        },
        "genreAlt": {
          "type": "keyword"
        },
        "repNationNm": {
          "type": "keyword"
        },
        "repGenreNm": {
          "type": "keyword"
        },
        "companies": {
          "properties": {
            "companyCd": {
              "type": "keyword"
            },
            "companyNm": {
              "type": "keyword"
            }
          }
        },
        "directors": {
          "properties": {
            "peopleNm": {
              "type": "keyword"
            }
          }
        }
      }
  }
}
```

결과는 다음과 같다.

```bash
{
  "acknowledged" : true,
  "shards_acknowledged" : true,
  "index" : "movie_search"
}
```

### 3.1.2 매핑 확인

```bash
GET movie_search/_mapping
```

### 3.1.3 매핑 파라미터

매핑 파라미터는 색인할 필드의 데이터를 어떻게 저장할 것인지에 대한 다양한 옵션을 제공한다.

* analyzer
  * 해당 필드의 데이터를 형태소 분석하겠다는 의미
  * text 데이터 타입의 필드는 analyzer 매핑 파라미터를 기본적으로 사용
  * 별도의 분석기 지정하지 않으면 Standard Analyzer로 형태소 분석
* normalizer
  * term query에 분석기 사용하기 위해 사용
  * 일반적으로 대소문자를 구분하여 다른 문서로 인지하지만, normalizer를 통해 asciifolding 과 같은 필터를 사용해 하나의 문서로 인지할 수 있다.
* boost
  * 필드에 가중치 부여
  * 가중치에 따라 유사도 점수(_score)가 달라지기 때문에 설정 시 검색 결과의 노출 순서에 영향을 줌
  * 최근 엘라스틱서치는 색인 시 boost 설정을 할 수 없도록 바뀜
* coerce
  * 색인 시 자동 변환을 허용할지 여부를 설정
  * ex) “10”과 같은 숫자 형태의 문자열이 integer 타입의 필드에 들어오면 엘라스틱서치는 자동으로 형변환을 수행해 정상적으로 처리. 하지만, coerce 설정 미사용 하면 색인에 실패 
* copy_to
  * 매핑 파라미터를 추가한 필드의 값을 지정한 필드로 복사
  * ex) keyword 타입 필드에 copy_to 매핑 파라미터 사용해 다른 필드로 값을 복사하면 복사된 필드에서는 text 타입을 지정할 수 있음
  * 여러 개의 필드 데이터를 하나의 필드에 모아서 전체 검색 용도로 사용 (_all 칼럼과 동일한 기능)
* fielddata
  * 엘라스틱서치가 힙 공간에 생성하는 메모리 캐시
  * 반복적인 메모리 부족 현상과 잦은 GC로 현재는 거의 사용되지 않음  -> 최신 버전에서는 doc_values 라는 새로운 형태의 캐시 제공
  * 부득이하게 text 타입 필드에서 사용할 수 있지만, 최소한으로만 사용해야 함

```bash
PUT movie_search_mapping/_mapping
{
  "properties": {
    "nationAltEn": {
      "type": "text",
      "fielddata": true
    }
  }
}
```

```bash
{
  "acknowledged" : true
}
```

* doc_values
  * 엘라스틱서치에서 사용하는 기본 캐시 -> 루씬을 기반으로 하는 캐시 방식
  * text 타입을 제외한 모든 타입에서 기본적으로 사용
  * 필드를 정렬, 집계할 필요 없고 스크립트에서 필드 값에 액세스할 필요 없다면 디스크 공간 절약을 위해 doc_values 비활성화 가능하지만, 한 번 비활성화 된 필드는 인덱스를 재색인하지 않는 한 변경이 불가능함.
* dynamic
  * 매핑에 필드를 추가할 때 동적으로 생성할 지, 생성하지 않을지 결정
  * 옵션 (p.71 표3.2)
* enabled
  * 검색 결과에는 포함하지만 색인은 하고 싶지 않는 경우 사용
* format
  * 엘라스틱 서치는 날짜/시간을 문자열로 표시함. 미리 구성된 포맷을 사용 가능.
  * p72 표3.3 참고
* ignore_above
  * 필드에 저장되는 문자열이 지정한 크기를 넘어서면 빈 값으로 색인함
  * 지정한 크기만큼만 색인되는 것이 아니라 빈 값으로 저장되므로 주의 필요
* ignore_malformed
  * 잘못된 데이터 타입을 색인하려고 하면 예외 발생하고 전부 색인되지 않음
  * 해당 매핑 파라미터 사용하면 해당 필드만 무시하고 문서는 색인 가능
* index
  * 필드값을 색인할지를 결정
  * 기본값은 true
* fields
  * 다중 필드를 설정할 수 있는 옵션
  * 필드 안에 또 다른 필드 정보를 추가할 수 있어 같은 string 값을 각각 다른 분석기로 처리하도록 설정 가능

요청  (_doc 제거 후 실행)

```bash
PUT movie_search_mapping  
{
  "mappings": {
    "_doc": {
      "properties": {
        "awards": {
          "type": "text",
          "fields": {
            "name": {
              "type":  "keyword"
            }
          }
        }
      }
    }
  }
}
```

결과 ---> error 남 (확인 필요)

```bash
{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "The mapping definition cannot be nested under a type [_doc] unless include_type_name is set to true."
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "The mapping definition cannot be nested under a type [_doc] unless include_type_name is set to true."
  },
  "status": 400
}
```
 
 
 
결과 --> error 안났을 때

```bash
{
  "acknowledged" : true,
  "shards_acknowledged" : true,
  "index" : "moive_search_mapping"
}
```

* norms
  * 문서의 _score 값 계산에 필요한 정규화 인수를 사용할 지 여부를 설정
  * 기본값은 true

* null_value
  * 색인 시 문서에 필드가 없거나 필드의 값이 null이면 색인 시 필드를 생성하지 않음
  * null_value 설정 시 문서의 값이 null이어도 필드를 생성 및 해당하는 값으로 저장


요청

```bash
PUT movie_search_mapping/_mapping/_doc
{
  "properties": {
    "audiCnt": {
          "type": "integer",
          "null_value": "0"
    }
  }
}
``` 
 
결과 ---> 역시 error

```bash
{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."
  },
  "status": 400
}
```
 
결과

```bash
{
  "acknowledged" : true
}
```

* position_increment_gap
  * 배열 형태의 데이터를 색인 시 검색의 정확도를 높이기 위해 제공하는 옵션
  * 필드 데이터 중 단어와 단어 사이의 간격을 허용할 지 설정
* properties
  * 오브젝트 타입이나 중첩 타입의 스키마를 정의할 때 사용되는 옵션으로 필드의 타입을 매핑
* search_analyzer
  * 일반적으로는 색인과 검색 시 같은 분석기를 사용하지만, 다른 분석기를 사용하고 싶은 경우 별도 지정을 하기 위한 타입
* similarity
  * 유사도 측정 알고리즘을 지정
  * 기본 알고리즘인 BM25에서 다른 알고리즘으로 변경 가능
  * p75 표3.4 참고
* store
  * 필드의 값을 저장해 검색 결과에 값을 포함하기 위한 매핑 파라미터
  * 기본적으로 _source에 색인된 문서가 저장되지만 store 매핑 파라미터를 사용하면 해당 필드를 자체적으로 저장 가능함 ( 대신 디스크를 더 많이 사용 )
* term_vector
  * 루씬에서 분석된 용어의 정보를 포함할지 여부를 결정

## 3.2 메타 필드


## 3.3 필드 데이터 타입


## 3.4 엘라스틱서치 분석기


## 3.5 Document API 이해하기