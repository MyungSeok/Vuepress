(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{432:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[a._v("#")]),a._v(" Map")]),a._v(" "),s("p",[a._v("검색의 개념이 가미된 인터페이스로 데이터를 삽입할 때 "),s("code",[a._v("Key")]),a._v(" 와 "),s("code",[a._v("Value")]),a._v(" 의 형태로 관리한다.")]),a._v(" "),s("p",[a._v("때문에 해당 "),s("code",[a._v("Key")]),a._v(" 를 이용해서 "),s("code",[a._v("Value")]),a._v(" 값을 얻을수 있다.")]),a._v(" "),s("h2",{attrs:{id:"hashtable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashtable","aria-hidden":"true"}},[a._v("#")]),a._v(" Hashtable "),s("Badge",{attrs:{text:"1.0"}})],1),a._v(" "),s("p",[a._v("가장 처음에 나온 해시테이블을 가진 맵 클래스")]),a._v(" "),s("ul",[s("li",[a._v("Key & Value 에 "),s("code",[a._v("null")]),a._v(" 이 허용된다.")]),a._v(" "),s("li",[a._v("확장성이 떨어진다.")]),a._v(" "),s("li",[a._v("동시성 보장이 된다.\n"),s("ul",[s("li",[s("code",[a._v("synchronized")]),a._v(" 키워드를 Method 전체에 Lock 을 적용한다.")]),a._v(" "),s("li",[s("code",[a._v("Hashtable")]),a._v(" 을 참조하는 "),s("code",[a._v("Thread")]),a._v(" 의 갯수가 많아질수록 Lock 을 획득하기 위한 시간비용이 많이 들어 성능이 급격히 낮아진다.")])])]),a._v(" "),s("li",[s("code",[a._v("HashMap")]),a._v(" 보다 성능이 떨어진다.\n"),s("ul",[s("li",[a._v("2차 해시함수 사용불가")]),a._v(" "),s("li",[a._v("단일스레드에서 사용시 Locking 이 느림")])])])]),a._v(" "),s("h2",{attrs:{id:"hashmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" HashMap "),s("Badge",{attrs:{text:"1.2"}})],1),a._v(" "),s("ul",[s("li",[a._v("멀티스레드 기반에서 동시성 보장할 수 없다. (Thread-not-safe)\n"),s("ul",[s("li",[a._v("단일 스레드 기반에서는 우선으로 사용")])])]),a._v(" "),s("li",[a._v("Key & Value 에 "),s("code",[a._v("null")]),a._v(" 허용\n"),s("ul",[s("li",[a._v("정렬 기능을 지원함")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("탐색을 위한 시간복잡도는 O(1) 로 보장된다.")])]),a._v(" "),s("p",[a._v("동시성 보장을 원하면 아래와 같이 변형해서 사용가능하다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("synchronizedMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("하지만 동시성 이슈가 있다면 "),s("code",[a._v("ConcurrentHashMap")]),a._v(" 을 추천함")]),a._v(" "),s("h2",{attrs:{id:"concurrenthashmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" ConcurrentHashMap "),s("Badge",{attrs:{text:"1.5"}})],1),a._v(" "),s("p",[s("code",[a._v("HashMap")]),a._v(" 을 thread-safe 하도록 만든 클래스가 ConcurrentHashMap 이며, key & value 에 null 을 허용하지 않는다."),s("br"),a._v("\n둘 다 동기화 보장을 하는 특징이 있지만 구조적으로 작은 차이가 있다.")]),a._v(" "),s("ul",[s("li",[a._v("동시성 보장을 한다.\n"),s("ul",[s("li",[a._v("내부적으로 여러개의 세그먼트를 두고 각 세그먼트마다 별도의 락을 가지고 있다.")]),a._v(" "),s("li",[a._v("동시에 데이터를 삽입, 참조 하더라도 그 데이터가 다른 세그먼트에 위치하면 서로 Lock 을 얻기 위해 경쟁하지 않는다.")]),a._v(" "),s("li",[a._v("이러한 방식을 "),s("em",[s("strong",[a._v("Lock Striping")])]),a._v(" 이라고 한다.")])])]),a._v(" "),s("li",[a._v("Key & Value 에 "),s("code",[a._v("null")]),a._v(" 허용 불가")])]),a._v(" "),s("h2",{attrs:{id:"treemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treemap","aria-hidden":"true"}},[a._v("#")]),a._v(" TreeMap "),s("Badge",{attrs:{text:"1.2"}})],1),a._v(" "),s("ul",[s("li",[a._v("정렬기능을 지원함")])]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://egloos.zum.com/Agbird/v/4849046",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://egloos.zum.com/Agbird/v/4849046"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"hash-를-이용한-map-관리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash-를-이용한-map-관리","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("Hash")]),a._v(" 를 이용한 Map 관리")]),a._v(" "),s("p",[a._v("데이터를 저장 혹은 조회해오는 키 값을 "),s("code",[a._v("Hash")]),a._v(" 값을 이용하며"),s("br"),a._v("\n저장되는 데이터의 "),s("strong",[a._v("Key & Value")]),a._v(" 의 개수에 따라 동적으로 크기가 증가하기도 한다.")]),a._v(" "),s("h3",{attrs:{id:"해시함수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해시함수","aria-hidden":"true"}},[a._v("#")]),a._v(" 해시함수")]),a._v(" "),s("p",[a._v("해시값을 이용한 자료형은 "),s("strong",[a._v("해시 함수")]),a._v("를 통해서 나오는 인덱스 값으로 관리되는데 이 해시 함수는 해시 키값을 입력을 받아 해시 테이블상의 주소를 리턴해줘야 한다.")]),a._v(" "),s("p",[a._v("이는 해시함수를 작성시에는 다음 두가지의 조건을 만족하는것이 제일 좋다.")]),a._v(" "),s("ol",[s("li",[a._v("입력둰소가 해시 테이블 전체에 고루 저장되어야 한다. (해시 분포)")]),a._v(" "),s("li",[a._v("계산이 간단해야 한다 (성능)")])]),a._v(" "),s("p",[a._v("첫번째 조건을 잘 만족해야만 "),s("strong",[a._v("서로 다른 두 원소가 하나의 해시 주소를 가지고 충돌날 확률이 적어지기 때문")]),a._v("이다. (해시충돌)")]),a._v(" "),s("p",[a._v("대부분 아래와 같은 해시 함수를 사용한다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" hashIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("X")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hashCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("M")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("이 코드와 같은 방식을 사용하면 서로 다른 객체가 "),s("code",[a._v("1/M")]),a._v(" 의 확률로 같은 버킷을 가지게 된다.")]),a._v(" "),s("p",[a._v("해시를 이용한 인덱싱 사용으로 관리되는 이 Key 는 기본적으로 각 객체의 "),s("code",[a._v("hashCode()")]),a._v(" 가 반환하는 값을 사용하는데 이 자료형은 "),s("code",[a._v("int")]),a._v(" 다")]),a._v(" "),s("blockquote",[s("p",[a._v("32 bit 자료형으로는 완전한 자료의 해시 함수를 만들 수 없다."),s("br"),a._v("\n논리적으로 2^32 보다 많을수도 있기 때문이며 "),s("s",[a._v("해시를 이용한 Map 객체에서 랜덤 접근이 가능하게 하려면 원소가 2^32 인 배열을 모든 Map 이 가지고 있어야 하기 때문이다.")])])]),a._v(" "),s("h3",{attrs:{id:"해시-충돌-hash-colision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해시-충돌-hash-colision","aria-hidden":"true"}},[a._v("#")]),a._v(" 해시 충돌 (Hash Colision)")]),a._v(" "),s("p",[a._v("해시 충돌 (Hash Colision) 을 잘 회피하도록 구현해 놓았더라도 해시 충돌이 발행할 경우 회피할 수 있는 방법이 다음 대표적으로 두가지 방법이 사용된다.")]),a._v(" "),s("blockquote",[s("p",[a._v("다른 해시 회피방법이 있지만 이 두가지를 응용한 방법이다.")])]),a._v(" "),s("p",[s("strong",[a._v("개방 주소법 (Open Address)")])]),a._v(" "),s("p",[a._v("해시충돌이 발생하면 다른 버킷 (데이터 주소 공간) 을 찾아 자료를 삽입하는 방식이다.")]),a._v(" "),s("p",[a._v("비어있는 버킷을 탐색하거나 혹은 "),s("strong",[a._v("2차 해시함수")]),a._v("를 이용하여 새로운 주소를 할당하는데"),s("br"),a._v("\n이 과정에서 새로운 해시 버킷을 찾는 방법을 "),s("strong",[a._v("Linear Probing")]),a._v(", "),s("strong",[a._v("Quadratic Probing")]),a._v(" 등의 방법이 사용된다.")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("장점")]),a._v(" "),s("ul",[s("li",[a._v("데이터 크기가 적다면 성능이 뛰어나다.")])])]),a._v(" "),s("li",[s("strong",[a._v("단점")]),a._v(" "),s("ul",[s("li",[a._v("연속된 공간에 데이터를 저장하기 때문에 캐시 효율이 높다.")]),a._v(" "),s("li",[a._v("크키가 커질수록 적중률 (hit ratio) 이 낮아지기 때문에 캐시 효율이 현저히 낮아진다.")])])])]),a._v(" "),s("p",[s("strong",[a._v("분리 연결법 (Seperate Chaining)")])]),a._v(" "),s("p",[a._v("Java HashMap 에서 사용중인 대표적인 방식으로 일반적으로 "),s("strong",[a._v("개방주소법보다는 성능상에 이점")]),a._v("이 있다.")]),a._v(" "),s("h3",{attrs:{id:"보조-해시-함수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#보조-해시-함수","aria-hidden":"true"}},[a._v("#")]),a._v(" 보조 해시 함수")]),a._v(" "),s("p",[a._v("저장하려는 두 개가 같은 인덱스로 해싱 (hashing : hash 함수를 통해 계산됨을 의미) 하게 되면 같은곳에 저장할 수 없게 된다."),s("br"),a._v("\n때문에 해싱된 인덱스에 이미 다른 값들이 들어있다면 데이터를 저장할 다른 위치를 찾은뒤에야 저장할 수 있다.")]),a._v(" "),s("p",[a._v("이 외에도 "),s("em",[s("strong",[a._v("해시 버킷의 동적 확장")])]),a._v(" 등과 같은 방법도 있다.")]),a._v(" "),s("h3",{attrs:{id:"해시-버킷의-동적-확장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해시-버킷의-동적-확장","aria-hidden":"true"}},[a._v("#")]),a._v(" 해시 버킷의 동적 확장")]),a._v(" "),s("p",[a._v("해시 버킷의 개수가 작다면 메모리 사용을 아낄수 있지만 해시 충돌로 인한 성능상의 비용이 더 발생할 수 있다.")]),a._v(" "),s("p",[a._v("때문에 "),s("code",[a._v("HashMap")]),a._v(" 은 Key & Value 의 쌍 데이터가 일정 개수 이상 되면 해시 버킷의 개수를 두배로 늘린다.")]),a._v(" "),s("p",[a._v("이 일정 개수는 기본 약 75% 정도로 "),s("code",[a._v("load factor")]),a._v(" 로 "),s("code",[a._v("HashMap")]),a._v(" 의 생성자에서 지정가능하다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * The load factor used when none specified in constructor.\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" DEFAULT_LOAD_FACTOR "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.75f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"해시의-단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해시의-단점","aria-hidden":"true"}},[a._v("#")]),a._v(" 해시의 단점")]),a._v(" "),s("p",[a._v("데이터를 정렬된 순서로 접근하는것에 엄청난 비용이 발생한다.")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://asfirstalways.tistory.com/332",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://asfirstalways.tistory.com/332"),s("OutboundLink")],1),s("br"),a._v(" "),s("a",{attrs:{href:"https://d2.naver.com/helloworld/831311",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://d2.naver.com/helloworld/831311"),s("OutboundLink")],1),s("br"),a._v(" "),s("a",{attrs:{href:"http://egloos.zum.com/sweeper/v/925740",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://egloos.zum.com/sweeper/v/925740"),s("OutboundLink")],1),s("br"),a._v(" "),s("a",{attrs:{href:"https://itstory.tk/entry/%ED%95%B4%EC%8A%81Hashing-%ED%95%B4%EC%89%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%95%B4%EC%89%AC-%ED%95%A8%EC%88%98",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://itstory.tk/entry/해슁Hashing-해쉬-알고리즘-해쉬-함수"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);