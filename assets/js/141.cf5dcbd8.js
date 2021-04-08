(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{340:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_03-데이터-모델링"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-데이터-모델링"}},[s._v("#")]),s._v(" 03. 데이터 모델링")]),s._v(" "),a("p",[s._v("엘라스틱 서치에서는 색인할 때 문서의 데이터 유형에 따라 필드에 적절한 데이터 타입을 지정하는것을 "),a("strong",[s._v("매핑")]),s._v("이라 한다.")]),s._v(" "),a("p",[a("strong",[s._v("매핑")]),s._v("은 색인될 문서의 데이터 모델링이라고 할 수 있다.")]),s._v(" "),a("p",[s._v("사전에 매핑을 설정하면 자동으로 지정된 데이터 타입으로 색인되지만 매핑을 설정해 두지 않으면 엘라스틱 서치가 자동으로 필드를 생성하고 필드타입까지 결정한다.")]),s._v(" "),a("p",[s._v("이는 예기치 않는 문제를 야기시킬수 있기 때문에 "),a("strong",[s._v("매핑")]),s._v(" 과정은 매우 중요한 과정이라 할 수 있다.")]),s._v(" "),a("h2",{attrs:{id:"_3-1-매핑-api-이해하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-매핑-api-이해하기"}},[s._v("#")]),s._v(" 3.1 매핑 API 이해하기")]),s._v(" "),a("p",[a("strong",[s._v("매핑")]),s._v("은 색인시 데이터가 어떻게 저장될지 결정하는 설정")]),s._v(" "),a("p",[s._v("문서에서 존재하는 필드의 속성을 정의할 때 각 필드 속성에는 데이터 타입과 메타데이터가 포함되는데\n이를 통해 색인 과정에서 문서가 역색인 (Inverted Index) 으로 변환되는지 상세하게 정의할 수 있다.")]),s._v(" "),a("p",[s._v("엘라스틱은 기본적으로 스키마리스이기 때문에 자동으로 매핑정보가 생성된다.\n또한 엘라스틱 서치는 수정이 불가하여 삭제하고 재생성해야 하기 때문에 이를 통해 장애가 발생할 수 있다.")]),s._v(" "),a("p",[s._v("예시는 다음과 같다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 문서 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"movieCd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20173732")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moiveNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"캡틴 아메리카"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 문서 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"movieCd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"XT001"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moiveNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"아이언 맨"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("첫번째 문서를 매핑설정없이 색인하면 "),a("code",[s._v("moiveCd")]),s._v(" 필드는 숫자 타입으로 매핑되지만 두번째 문서를 색인하면 "),a("code",[s._v("moiveCd")]),s._v(" 값은 문자열이기 때문에 색인이 불가능하다.")]),s._v(" "),a("p",[s._v("때문에 인덱스를 수정이 불가하니 삭제하고 다시 생성하거나 매핑을 다시 정의해야 한다.")]),s._v(" "),a("p",[s._v("매핑정보를 설정할 때는 다음과 같은 사항을 고민해야 한다.")]),s._v(" "),a("ul",[a("li",[s._v("문자열을 분석할 것인가?")]),s._v(" "),a("li",[a("code",[s._v("_source")]),s._v(" 에 어떤 필드를 정의할 것인가")]),s._v(" "),a("li",[s._v("날짜 필드를 가지는 필드는 무엇인가")]),s._v(" "),a("li",[s._v("매핑에 정의되지 않고 유입되는 필드는 어떻게 처리할 것인가?")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-1-매핑-인덱스-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-매핑-인덱스-만들기"}},[s._v("#")]),s._v(" 3.1.1 매핑 인덱스 만들기")]),s._v(" "),a("p",[s._v("하기와 같이 매핑 인덱스 생성")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT movie_search\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"movieCd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"movieNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"analyzer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"standard"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"movieNmEn"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"analyzer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"standard"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prdtYear"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"openDt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typeNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prdtStatNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nationAlt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"genreAlt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repNationNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repGenreNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"companies"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"companyCd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"companyNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"directors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"peopleNm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("결과는 다음과 같다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shards_acknowledged"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"movie_search"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3-1-2-매핑-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-매핑-확인"}},[s._v("#")]),s._v(" 3.1.2 매핑 확인")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("GET movie_search/_mapping\n")])])]),a("h3",{attrs:{id:"_3-1-3-매핑-파라미터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-매핑-파라미터"}},[s._v("#")]),s._v(" 3.1.3 매핑 파라미터")]),s._v(" "),a("p",[s._v("매핑 파라미터는 색인할 필드의 데이터를 어떻게 저장할 것인지에 대한 다양한 옵션을 제공한다.")]),s._v(" "),a("ul",[a("li",[s._v("analyzer\n"),a("ul",[a("li",[s._v("해당 필드의 데이터를 형태소 분석하겠다는 의미")]),s._v(" "),a("li",[s._v("text 데이터 타입의 필드는 analyzer 매핑 파라미터를 기본적으로 사용")]),s._v(" "),a("li",[s._v("별도의 분석기 지정하지 않으면 Standard Analyzer로 형태소 분석")])])]),s._v(" "),a("li",[s._v("normalizer\n"),a("ul",[a("li",[s._v("term query에 분석기 사용하기 위해 사용")]),s._v(" "),a("li",[s._v("일반적으로 대소문자를 구분하여 다른 문서로 인지하지만, normalizer를 통해 asciifolding 과 같은 필터를 사용해 하나의 문서로 인지할 수 있다.")])])]),s._v(" "),a("li",[s._v("boost\n"),a("ul",[a("li",[s._v("필드에 가중치 부여")]),s._v(" "),a("li",[s._v("가중치에 따라 유사도 점수(_score)가 달라지기 때문에 설정 시 검색 결과의 노출 순서에 영향을 줌")]),s._v(" "),a("li",[s._v("최근 엘라스틱서치는 색인 시 boost 설정을 할 수 없도록 바뀜")])])]),s._v(" "),a("li",[s._v("coerce\n"),a("ul",[a("li",[s._v("색인 시 자동 변환을 허용할지 여부를 설정")]),s._v(" "),a("li",[s._v("ex) “10”과 같은 숫자 형태의 문자열이 integer 타입의 필드에 들어오면 엘라스틱서치는 자동으로 형변환을 수행해 정상적으로 처리. 하지만, coerce 설정 미사용 하면 색인에 실패")])])]),s._v(" "),a("li",[s._v("copy_to\n"),a("ul",[a("li",[s._v("매핑 파라미터를 추가한 필드의 값을 지정한 필드로 복사")]),s._v(" "),a("li",[s._v("ex) keyword 타입 필드에 copy_to 매핑 파라미터 사용해 다른 필드로 값을 복사하면 복사된 필드에서는 text 타입을 지정할 수 있음")]),s._v(" "),a("li",[s._v("여러 개의 필드 데이터를 하나의 필드에 모아서 전체 검색 용도로 사용 (_all 칼럼과 동일한 기능)")])])]),s._v(" "),a("li",[s._v("fielddata\n"),a("ul",[a("li",[s._v("엘라스틱서치가 힙 공간에 생성하는 메모리 캐시")]),s._v(" "),a("li",[s._v("반복적인 메모리 부족 현상과 잦은 GC로 현재는 거의 사용되지 않음  -> 최신 버전에서는 doc_values 라는 새로운 형태의 캐시 제공")]),s._v(" "),a("li",[s._v("부득이하게 text 타입 필드에서 사용할 수 있지만, 최소한으로만 사용해야 함")])])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT movie_search_mapping/_mapping\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nationAltEn"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fielddata"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("doc_values\n"),a("ul",[a("li",[s._v("엘라스틱서치에서 사용하는 기본 캐시 -> 루씬을 기반으로 하는 캐시 방식")]),s._v(" "),a("li",[s._v("text 타입을 제외한 모든 타입에서 기본적으로 사용")]),s._v(" "),a("li",[s._v("필드를 정렬, 집계할 필요 없고 스크립트에서 필드 값에 액세스할 필요 없다면 디스크 공간 절약을 위해 doc_values 비활성화 가능하지만, 한 번 비활성화 된 필드는 인덱스를 재색인하지 않는 한 변경이 불가능함.")])])]),s._v(" "),a("li",[s._v("dynamic\n"),a("ul",[a("li",[s._v("매핑에 필드를 추가할 때 동적으로 생성할 지, 생성하지 않을지 결정")]),s._v(" "),a("li",[s._v("옵션 (p.71 표3.2)")])])]),s._v(" "),a("li",[s._v("enabled\n"),a("ul",[a("li",[s._v("검색 결과에는 포함하지만 색인은 하고 싶지 않는 경우 사용")])])]),s._v(" "),a("li",[s._v("format\n"),a("ul",[a("li",[s._v("엘라스틱 서치는 날짜/시간을 문자열로 표시함. 미리 구성된 포맷을 사용 가능.")]),s._v(" "),a("li",[s._v("p72 표3.3 참고")])])]),s._v(" "),a("li",[s._v("ignore_above\n"),a("ul",[a("li",[s._v("필드에 저장되는 문자열이 지정한 크기를 넘어서면 빈 값으로 색인함")]),s._v(" "),a("li",[s._v("지정한 크기만큼만 색인되는 것이 아니라 빈 값으로 저장되므로 주의 필요")])])]),s._v(" "),a("li",[s._v("ignore_malformed\n"),a("ul",[a("li",[s._v("잘못된 데이터 타입을 색인하려고 하면 예외 발생하고 전부 색인되지 않음")]),s._v(" "),a("li",[s._v("해당 매핑 파라미터 사용하면 해당 필드만 무시하고 문서는 색인 가능")])])]),s._v(" "),a("li",[s._v("index\n"),a("ul",[a("li",[s._v("필드값을 색인할지를 결정")]),s._v(" "),a("li",[s._v("기본값은 true")])])]),s._v(" "),a("li",[s._v("fields\n"),a("ul",[a("li",[s._v("다중 필드를 설정할 수 있는 옵션")]),s._v(" "),a("li",[s._v("필드 안에 또 다른 필드 정보를 추가할 수 있어 같은 string 값을 각각 다른 분석기로 처리하도록 설정 가능")])])])]),s._v(" "),a("p",[s._v("요청  (_doc 제거 후 실행)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT movie_search_mapping  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_doc"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"awards"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fields"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("결과 ---\x3e error 남 (확인 필요)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root_cause"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"illegal_argument_exception"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The mapping definition cannot be nested under a type [_doc] unless include_type_name is set to true."')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"illegal_argument_exception"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The mapping definition cannot be nested under a type [_doc] unless include_type_name is set to true."')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("결과 --\x3e error 안났을 때")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shards_acknowledged"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moive_search_mapping"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("norms")]),s._v(" "),a("ul",[a("li",[s._v("문서의 _score 값 계산에 필요한 정규화 인수를 사용할 지 여부를 설정")]),s._v(" "),a("li",[s._v("기본값은 true")])])]),s._v(" "),a("li",[a("p",[s._v("null_value")]),s._v(" "),a("ul",[a("li",[s._v("색인 시 문서에 필드가 없거나 필드의 값이 null이면 색인 시 필드를 생성하지 않음")]),s._v(" "),a("li",[s._v("null_value 설정 시 문서의 값이 null이어도 필드를 생성 및 해당하는 값으로 저장")])])])]),s._v(" "),a("p",[s._v("요청")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT movie_search_mapping/_mapping/_doc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"audiCnt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"null_value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("결과 ---\x3e 역시 error")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root_cause"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"illegal_argument_exception"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"illegal_argument_exception"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("결과")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("position_increment_gap\n"),a("ul",[a("li",[s._v("배열 형태의 데이터를 색인 시 검색의 정확도를 높이기 위해 제공하는 옵션")]),s._v(" "),a("li",[s._v("필드 데이터 중 단어와 단어 사이의 간격을 허용할 지 설정")])])]),s._v(" "),a("li",[s._v("properties\n"),a("ul",[a("li",[s._v("오브젝트 타입이나 중첩 타입의 스키마를 정의할 때 사용되는 옵션으로 필드의 타입을 매핑")])])]),s._v(" "),a("li",[s._v("search_analyzer\n"),a("ul",[a("li",[s._v("일반적으로는 색인과 검색 시 같은 분석기를 사용하지만, 다른 분석기를 사용하고 싶은 경우 별도 지정을 하기 위한 타입")])])]),s._v(" "),a("li",[s._v("similarity\n"),a("ul",[a("li",[s._v("유사도 측정 알고리즘을 지정")]),s._v(" "),a("li",[s._v("기본 알고리즘인 BM25에서 다른 알고리즘으로 변경 가능")]),s._v(" "),a("li",[s._v("p75 표3.4 참고")])])]),s._v(" "),a("li",[s._v("store\n"),a("ul",[a("li",[s._v("필드의 값을 저장해 검색 결과에 값을 포함하기 위한 매핑 파라미터")]),s._v(" "),a("li",[s._v("기본적으로 _source에 색인된 문서가 저장되지만 store 매핑 파라미터를 사용하면 해당 필드를 자체적으로 저장 가능함 ( 대신 디스크를 더 많이 사용 )")])])]),s._v(" "),a("li",[s._v("term_vector\n"),a("ul",[a("li",[s._v("루씬에서 분석된 용어의 정보를 포함할지 여부를 결정")])])])]),s._v(" "),a("h2",{attrs:{id:"_3-2-메타-필드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-메타-필드"}},[s._v("#")]),s._v(" 3.2 메타 필드")]),s._v(" "),a("h2",{attrs:{id:"_3-3-필드-데이터-타입"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-필드-데이터-타입"}},[s._v("#")]),s._v(" 3.3 필드 데이터 타입")]),s._v(" "),a("h2",{attrs:{id:"_3-4-엘라스틱서치-분석기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-엘라스틱서치-분석기"}},[s._v("#")]),s._v(" 3.4 엘라스틱서치 분석기")]),s._v(" "),a("h2",{attrs:{id:"_3-5-document-api-이해하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-document-api-이해하기"}},[s._v("#")]),s._v(" 3.5 Document API 이해하기")])])}),[],!1,null,null,null);t.default=e.exports}}]);