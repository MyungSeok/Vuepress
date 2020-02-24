# 02. 엘라스틱서치 살펴보기

엘라스틱 서치의 기본용어와 API 를 알아본다.

## 2.1 엘라스틱서치를 구성하는 개념

![엘라스틱 서치 데이터 구조](/img/A112.png)

### 2.1.1 기본 용어

#### 인덱스

* 데이터의 저장공간
* 하나의 인덱스는 하나의 타입만 가지며 하나의 물리적인 노드에 여려개의 논리적인 인덱스를 생성할 수 있다.
* 검색시 인덱스 이름으로 문서 데이터를 검색하며, 여러개의 인덱스를 동시에 검색하는것도 가능

#### 샤드

* 색인된 문서는 하나의 인덱스에 담기며 인덱스 내부에 색인된 데이터는 물리적 공간에 여려개의 파티션으로 나뉘어 구성되는데 이를 샤드라고 불린다.
* 엘라스틱 서치는 다수의 샤드로 문서를 분산 저장하고 있어 데이터 손실 위험을 최소화 한다.

#### 타입

* 인덱스의 논리적 구조를 의미
* 엘라스틱 서치 6.1 이상 버전에서는 하나의 인덱스당 하나의 타입만 설정가능

#### 문서

* 엘라스틱 서치에서 데이터가 저장되는 최소 단위
* 기본적으로 JSON 포맷

#### 필드

* 문서를 구성하기위한 속성
* 데이터베이스의 컬럼보다는 좀더 다이나믹 하며 유연하다.

#### 매핑

* 문서의 필드와 필드 속성을 정의하고 그에 따른 색인 방법을 정의하는 프로세스이다.

### 2.1.2 노드의 종류

#### 마스터 노드

* 인덱스를 생성, 삭제 하는등의 클러스터와 관련된 전반적인 작업을 담당한다.
* 네트워크 속도가 빠르고 지연이 없는 노드를 선택해야 함

#### 데이터 노드

* 문서가 실제로 저장되는 노드
* 색인 작업은 CPU, 메모리, 스토리지와 같은 컴퓨팅 리소스를 많이 소모하기 때문에 리소스 모니터링이 필요

#### 코디네이팅 노드

* 들어온 요청을 라운드로빈으로 분산시켜주는 도구

#### 인제스트 노드

* 색인에 앞서서 전처리하는 도구

### 2.1.3 클러스터, 노드, 샤드

레플리카 샤드를 통하여 장애 극복이 가능하다.

## 2.2. 엘라스틱서치에서 제공하는 주요 API

* 인덱스 관리 API (Indices API)
* 문서 관리 API (Document API)
* 검색 API (Search API)
* 집계 API (Aggregation API)

:::tip Index vs Indices

* Index : 색인 데이터
* Indexing : 색인을 하는 과정
* Indices : 매핑 정보를 저장하는 논리적인 데이터 공간
:::

**스키마리스 (Schemaless) 기능**

문서를 색인하기 위해서는 기본적으로 인덱스를 색성하는 과정이 필요한데 인덱스를 생성하는 과정 없이 문서를 추가하더라도 문서가 색인되도록 지원하는 일종의 편의 기능이다.

하지만 이는 _**성능과 밀접한 연관이 있기 때문에 특수한 상황에서만 사용**_ 해야 한다.

### 2.2.1 인덱스 관리 API

인덱스 관리 API 는 인덱스를 관리하기 위한 API 이다. 이를 이용하여 인덱스를 추가하거나 삭제할 수 있다.

인덱스 관리 API는 HTTP 메서드를 지정하는 방식을 통하여 사용할 수 있다.

#### 인덱스 생성

인덱스를 생성할 때는 매핑이라는 세부 설정을 이용할 수 있다.

매핑은 문서와 문서에 포함된 필드, 필드 타입을 세세하게 지정하는 것이 가능한 설정 방식이다.

한번 설정된 매핑 정보는 변경할 수 없으며 잘못 생성하거나 혹은 변경이 필요한 경우 데이터를 삭제하고 다시 색인해야 한다.

#### 인덱스 삭제

### 2.2.2 문서 관리 API

문서 관리 API는 한건의 문서를 처리하는 `Single document API` 와 다수의 문서를 처리하는 `Multi document API` 로 나뉜다.

#### Single Document API

* Index API : 한건의 문서를 색인한다.
* Get API : 한건의 문서를 조회한다.
* Delete API : 한건의 문서를 삭제한다.
* Update API : 한건의 문서를 업데이트한다.

#### Multi Document API

* Multi Get API : 다수의 문서를 조회한다.
* Bulk API : 대랑의 문서를 색인한다.
* Delete By Query API : 다수의 문서를 삭제한다.
* Update By Query API : 다수의 문서를 업데이트 한다.
* Reindex API : 인덱스 문서를 다시 색인한다.


#### 문서의 생성

moive 인덱스에 문서를 추가해본다.

문서의 Id 는 1로 지정

```bash
PUT /movie/_doc/1
{
  "movieCd": "1",
  "movieNm": "살아남은 아이",
  "movieNmEn": "Last Child",
  "prdtYear": "2017",
  "openDt": "",
  "typeNm": "장편",
  "prdtStatNm": "기타",
  "nationAlt": "한국",
  "genreAlt": "드라마,가족",
  "repNationNm": "한국",
  "regGenreNm": "드라마"
}
```

생성이 완료된 문서는 하기와 같이 출력

```bash {6}
{
  "_index" : "movie",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 2,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "_seq_no" : 6,
  "_primary_term" : 2
}

```

#### 문서의 조회

```bash
GET /movie/_doc/1
```

실행 결과는 하기와 같다.

```bash
{
  "_index" : "movie",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 2,
  "_seq_no" : 6,
  "_primary_term" : 2,
  "found" : true,
  "_source" : {
    "movieCd" : "1",
    "movieNm" : "살아남은 아이",
    "movieNmEn" : "Last Child",
    "prdtYear" : "2017",
    "openDt" : "",
    "typeNm" : "장편",
    "prdtStatNm" : "기타",
    "nationAlt" : "한국",
    "genreAlt" : "드라마,가족",
    "repNationNm" : "한국",
    "regGenreNm" : "드라마"
  }
}
```

#### 문서의 삭제

생성된 문서의 Id 를 지어하고 DELETE 메서드를 이용하여 삭제한다.

```bash
DELETE /movie/_doc/1
```

문서 삭제 결과는 하기와 같다.

```bash {6}
{
  "_index" : "movie",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 3,
  "result" : "deleted",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "_seq_no" : 7,
  "_primary_term" : 2
}

```

#### Id 를 지정하지 않고 문서의 생성

```bash
POST /movie/_doc
{
    "movieCd": "1",
    "movieNm": "살아남은 아이",
    "movieNmEn": "Last Child",
    "prdtYear": "2017",
    "openDt": "2017-10-20",
    "typeNm": "장편",
    "prdtStatNm": "기타",
    "nationAlt": "한국",
    "genreAlt": "드라마,가족",
    "repNationNm": "한국",
    "repGenreNm": "드라마"
}
```

moive 인덱스의 _id 값이 `NZEkd3ABtF6-scSgoPvm` 인 데이터 1건이 성공적으로 생성되었음을 알 수 있다.

이때 _id 값은 UUID 를 통해 무작위로 생성된다.

```bash {4}
{
  "_index" : "movie",
  "_type" : "_doc",
  "_id" : "NZEkd3ABtF6-scSgoPvm",
  "_version" : 1,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "_seq_no" : 8,
  "_primary_term" : 2
}

```

### 2.2.3 검색 API

엘라스틱 서치 검색 API 사용법

* HTTP URI 형태의 파라미터를 URI에 추가해 검색하는 방법
* RESTful API 방식인 QueryDSL 을 사용해 본문 (Request Body) 에 질의 내용을 추가해 검색하는 방법

현업에서는 Request Body 에 추가하여 사용하는 방식을 선호한다. (제약사항이 상대적으로 적기 때문)

#### URL 방식의 검색 질의 

```bash
GET /movie/_doc/NZEkd3ABtF6-scSgoPvm?pretty=true
```

검색 결과는 다음과 같다.

```bash
{
  "_index" : "movie",
  "_type" : "_doc",
  "_id" : "NZEkd3ABtF6-scSgoPvm",
  "_version" : 1,
  "_seq_no" : 8,
  "_primary_term" : 2,
  "found" : true,
  "_source" : {
    "movieCd" : "1",
    "movieNm" : "살아남은 아이",
    "movieNmEn" : "Last Child",
    "prdtYear" : "2017",
    "openDt" : "2017-10-20",
    "typeNm" : "장편",
    "prdtStatNm" : "기타",
    "nationAlt" : "한국",
    "genreAlt" : "드라마,가족",
    "repNationNm" : "한국",
    "repGenreNm" : "드라마"
  }
}
```

다음은 q 파라미터를 이용하여 해당 용어와 일치하는 문서만 조회한다.

```bash
POST /movie/_search?q=장편
```

`typeNm` 필드 값이 `장편`인 문자열만 조회

```bash
POST /movie/_search?q=typeNm:장편
```

#### Request Body 방식의 검색 질의 

기본 구문은 아래와 같다.

```bash
POST /{index 명}/_search
{
  JSON 쿼리 구문
}
```

moive 인덱스의 `typeNm` 필드를 검색하는 예는 다음과 같다.

```bash
POST /movie/_search
{
  "query": {
    "term": {
      "typeNm": "장편"
    }
  }
}
```

쿼리구문은 다음과 같이 여러개의 키를 조합해 객체의 키 값으로 사용할 수 있다.

|필드명|설명|기본값|
|:-:|:-|:-:|
|size|몇 개의 결과를 반환할지 결정한다.|10|
|from|어느 위치부터 반환할지 결정한다<br/>0부터 시작하면 상위 0~10건의 데이터를 반환한다.|0|
|_source|특정 필드만 결과로 반환하고 싶을 때 사용한다.||
|sort|특정 필드를 기준으로 정렬한다.<br/>`ASC` `DESC` 정렬이 가능하다.||
|query|검색될 조건을 정의한다.||
|filter|검색 결과 중 특정한 값을 다시 보여준다<br/>결과 내에서 재검색 할 때 사용하는 기능중 하나다.<br/>다만 필터를 사용하게 되며 자동으로 score 값이 정렬되지 않는다.||


### 2.2.4 집계 API

과거 통계작업에는 패싯 (Facets) 기능을 많이 활용했다.

이는 디스크 기반으로 동작 하였고, 분산환경에 최적화되지 않았기 때문에 대용량 데이터의 통계 작업에는 적합하지 않아 많은 장애가 발생했다.

엘라스틱서치 5.0 이후에는 패싯 방식의 통계 기능을 과감히 제거하고 독자적인 집계 (Aggregation) API 를 내놓았다.

기본적으로 메모리 기반으로 동작하기 때문에 대용량의 데이터 통계 작업이 가능해졌다.


#### 데이터 집계

moive 인덱스의 문서를 장르별로 집계해본다.

_search API 를 사용하여 집계 쿼리를 만들고 terms 키워드를 이용하여 generAlt 라는 필드의 데이터를 그룹화 한다.

```bash
POST /movie/_search?size=0
{
  "aggs": {
    "genre": {
      "terms": {
        "field": "genreAlt"
      },
      "aggs": {
        "nation": {
          "terms": {
            "field": "nationAlt"
          }
        }
      }
    }
  }
}
```

#### 데이터 집계 타입

집계 기능은 4가지 API 형태로 제공된다.

이를 조합하여 사용할 수 있다.

* 버킷 집계 (Bucket Aggregation)
  * 집계 중 가장 많이 사용한다.
  * 문서의 필드를 기준으로 버킷을 집계한다.
* 메트릭 집계 (Metric Aggregation)
  * 문서에서 추출된 값을 가지고 Sum, Max, Min, Avg 를 계산한다.
* 매트릭스 집계 (Matrix Aggregation)
  * 행렬의 값을 합하거나 곱한다.
* 파이프라인 집계 (Pipiline Aggregation)
  * 버킷에서 도출된 결과 문서를 다른 필드 값으로 재분류한다.
  * 다른 집계에서 생성된 출력 결과를 다시한번 집계한다.
  * 집계가 패싯보다 강력한 이유가 여기에 있다.
