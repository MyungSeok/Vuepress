(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{316:function(t,a,e){"use strict";e.r(a);var r=e(1),v=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"collection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collection","aria-hidden":"true"}},[t._v("#")]),t._v(" Collection")]),t._v(" "),e("h2",{attrs:{id:"자바-콜렉션-프레임워크-jcf-란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자바-콜렉션-프레임워크-jcf-란","aria-hidden":"true"}},[t._v("#")]),t._v(" 자바 콜렉션 프레임워크 (JCF) 란 ?")]),t._v(" "),e("p",[t._v("JCF (Java Collection Framework) 는 Java 에서 데이터를 저장하는 기본적인 자료구조들을 한곳에 모아 관리하고 편하게 사용하기 위해서 제공하는 것"),e("br"),t._v("\nJCF 의 상속 구조이며 사용용도에 따랄 "),e("code",[t._v("List")]),t._v(" "),e("code",[t._v("Set")]),t._v(" "),e("code",[t._v("Map")]),t._v(" 으로 나뉜다.")]),t._v(" "),e("p",[t._v("모든 콜렉션의 상위 인터페이스로써 콜렉션들이 갖고 있는 핵심 메소드를 선언 (add, contain, isEmpty, remove, size, iterator ...)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("인터페이스")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("구현체(클래스)")]),t._v(" "),e("th",[t._v("특징")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("List")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LinkedList"),e("br"),t._v("Stack"),e("br"),t._v("Vector"),e("br"),t._v("ArrayList")]),t._v(" "),e("td",[t._v("순서가 있는 데이터의 집합")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Set")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("HashSet"),e("br"),t._v("TreeSet")]),t._v(" "),e("td",[t._v("순서를 유지하지 않는 집합"),e("br"),t._v("데이터의 중복이 허용되지 않는다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Map")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("HashMap"),e("br"),t._v("TreeMap"),e("br"),t._v("HashTable"),e("br"),t._v("Properites")]),t._v(" "),e("td",[t._v("키 와 값의 쌍으로 이루어진 데이터 집합이며 순서를 유지하지 않는 집합이다."),e("br"),t._v("데이터의 중복이 허용되지 않지만 값의 중복은 허용한다.")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://hackersstudy.tistory.com/26",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hackersstudy.tistory.com/26"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("code",[t._v("Collection")]),t._v(" 인터페이스를 상속 받은 구현체 "),e("code",[t._v("List")]),t._v(" 와 "),e("code",[t._v("Set")]),t._v(" 을 기준으로 나뉜다.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/A051.png",alt:"자바 콜렉션"}})]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://withwani.tistory.com/150",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://withwani.tistory.com/150"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://www.toolsqa.com/java/data-structure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.toolsqa.com/java/data-structure/"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list","aria-hidden":"true"}},[t._v("#")]),t._v(" List")]),t._v(" "),e("p",[t._v("순서가 있는 "),e("code",[t._v("Collectaion")]),t._v(" (삽입된 순서)"),e("br"),t._v("\nData 를 중복해서 포함할 수 있다.")]),t._v(" "),e("ul",[e("li",[t._v("Linked List")]),t._v(" "),e("li",[t._v("Stack\n"),e("ul",[e("li",[t._v("후입선출 (LIFO : Last-In First-Out) 구조로 되어 있다.")])])]),t._v(" "),e("li",[t._v("ArrayList\n"),e("ul",[e("li",[t._v("동기화를 보장하지 않는다.")]),t._v(" "),e("li",[t._v("배열의 동적 메모리 증가 기능을 구현한 클래스")])])]),t._v(" "),e("li",[t._v("Vector\n"),e("ul",[e("li",[t._v("자동으로 동기화를 보장해 준다.")]),t._v(" "),e("li",[t._v("ArrayList 의 동기화가 보장되도록 최적화한 클래스")]),t._v(" "),e("li",[t._v("JDK 5.0 이후부터 Auto Boxing / UnBoxing 기능을 지원")])])]),t._v(" "),e("li",[t._v("Tree Set\n"),e("ul",[e("li",[t._v("정렬 기능을 지원 (데이터들이 자동으로 오름차순으로 정렬)")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("AutoBoxing")]),t._v(" "),e("p",[t._v("기본 데이터 타입을 Wrapper 클래스형의 객체로 자동 변환해주는 기능")])]),t._v(" "),e("h3",{attrs:{id:"array-arraylist-의-차이점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-arraylist-의-차이점","aria-hidden":"true"}},[t._v("#")]),t._v(" Array & ArrayList 의 차이점")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Array")]),t._v(" "),e("th",[t._v("ArrayList")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Resize 여부")]),t._v(" "),e("td",[t._v("고정크기")]),t._v(" "),e("td",[t._v("가변크기")])])])]),t._v(" "),e("h3",{attrs:{id:"arraylist-와-linkedlist-의-차이점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-와-linkedlist-의-차이점","aria-hidden":"true"}},[t._v("#")]),t._v(" ArrayList 와 LinkedList 의 차이점")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("ArrayList")]),t._v(" "),e("th",[t._v("LinkedList")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("데이터 구조")]),t._v(" "),e("td",[t._v("인덱스 기반")]),t._v(" "),e("td",[t._v("이전과 다음 요소를 가르키는 포인터 기반")])])])]),t._v(" "),e("h2",{attrs:{id:"set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[t._v("#")]),t._v(" Set")]),t._v(" "),e("p",[t._v("집합적인 개념의 Collection"),e("br"),t._v("\n순서의 의미가 없다."),e("br"),t._v("\nData 를 중복해서 포함할 수 없다.")]),t._v(" "),e("ul",[e("li",[t._v("Hash Set\n"),e("ul",[e("li",[t._v("Hash 기법을 사용하지만 Set 인터페이스를 구현하고 있다.")])])]),t._v(" "),e("li",[t._v("Sorted Set\n"),e("ul",[e("li",[t._v("정렬 기능을 지원함")])])])]),t._v(" "),e("h2",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[t._v("#")]),t._v(" Map")]),t._v(" "),e("p",[e("code",[t._v("Key")]),t._v(" 와 "),e("code",[t._v("Value")]),t._v(" 의 형태로 데이터를 관리한다.")]),t._v(" "),e("h3",{attrs:{id:"hashmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap","aria-hidden":"true"}},[t._v("#")]),t._v(" HashMap")]),t._v(" "),e("p",[t._v("HashMap 은 Map 인터페이스 계열의 대표적인 클래스이며 "),e("code",[t._v("get")]),t._v(", "),e("code",[t._v("put")]),t._v(" 등의 메서드를 사용하여 데이터를 관리한다.")]),t._v(" "),e("p",[t._v("HashMap 계열은 각각의 특징에 따라 아래와 같인 차이점으로 나뉜다.")]),t._v(" "),e("ul",[e("li",[t._v("HashMap\n"),e("ul",[e("li",[t._v("동기화 보장이 안된다. (Thread-not-safe)")]),t._v(" "),e("li",[t._v("Key & Value 에 Null 허용")])])]),t._v(" "),e("li",[t._v("Hashtable\n"),e("ul",[e("li",[t._v("동기화 보장이 된다. (Thread-safe : 멀티스레드 환경에서 안정적)")]),t._v(" "),e("li",[t._v("Key & Value 에 Null 허용 불가")])])]),t._v(" "),e("li",[t._v("TreeMap\n"),e("ul",[e("li",[t._v("정렬 기능을 지원함")])])])]),t._v(" "),e("h3",{attrs:{id:"hashtable-concurrenthashmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashtable-concurrenthashmap","aria-hidden":"true"}},[t._v("#")]),t._v(" Hashtable & ConcurrentHashMap")]),t._v(" "),e("p",[e("code",[t._v("HashMap")]),t._v(" 을 thread-safe 하도록 만든 클래스가 ConcurrentHashMap 이며, key & value 에 null 을 허용하지 않는다."),e("br"),t._v("\n둘 다 동기화 보장을 하는 특징이 있지만 구조적으로 작은 차이가 있다.")]),t._v(" "),e("ul",[e("li",[t._v("Hashtable\n"),e("ul",[e("li",[e("code",[t._v("synchronized")]),t._v(" 키워드를 Method 전체에 Lock 을 적용한다.")]),t._v(" "),e("li",[t._v("상대적으로 안정하지만 확장성이 떨어진다.")]),t._v(" "),e("li",[t._v("Hashtable 을 참조하는 Thread 의 갯수가 많아질수록 Lock 을 획득하기 위한 시간비용이 많이 들어 성능이 급격히 낮아진다.")])])]),t._v(" "),e("li",[t._v("ConcurrentHashMap\n"),e("ul",[e("li",[t._v("내부적으로 여러개의 세그먼트를 두고 각 세그먼트마다 별도의 락을 가지고 있다.")]),t._v(" "),e("li",[t._v("동시에 데이터를 삽입, 참조 하더라도 그 데이터가 다른 세그먼트에 위치하면 서로 Lock 을 얻기 위해 경쟁하지 않는다.")]),t._v(" "),e("li",[t._v("이러한 방식을 "),e("em",[e("strong",[t._v("Lock Striping")])]),t._v(" 이라고 한다.")]),t._v(" "),e("li",[t._v("Key & Value 에 Null 허용 불가")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://egloos.zum.com/Agbird/v/4849046",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://egloos.zum.com/Agbird/v/4849046"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"hashmap-의-동작-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-의-동작-과정","aria-hidden":"true"}},[t._v("#")]),t._v(" HashMap 의 동작 과정")]),t._v(" "),e("p",[t._v("Java 에서의 HashMap 은 Key & Value 를 쌍으로 저장한다."),e("br"),t._v("\n이는 Hash 함수를 필요로 hashCode 를 통하여 값을 저장하고 불러내는 과정을 거친다.")]),t._v(" "),e("p",[t._v("HashMap 과 HashTable 은 Map 인터페이스를 구현하고 있기 때문에 HashMap 과 HashTable 의 제공하고 있는 기능은 거의 같다."),e("br"),t._v("\n다만 HashMap 은 "),e("em",[e("strong",[t._v("보조해시함수 (Additional Hash Function)")])]),t._v(" 를 사용하고 있기 때문에 보조 해시함수를 사용하고 있지 않는 HashTable 에 비하여 해시 충돌 (Hash Colision) 이 덜 발생하고 있어 상대적으로 성능상의 이점을 보인다.")]),t._v(" "),e("h4",{attrs:{id:"보조-해시-함수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보조-해시-함수","aria-hidden":"true"}},[t._v("#")]),t._v(" 보조 해시 함수")]),t._v(" "),e("p",[t._v("저장하려는 두 개가 같은 인덱스로 해싱 (hashing : hash 함수를 통해 계산됨을 의미) 하게 되면 같은곳에 저장할 수 없게 된다."),e("br"),t._v("\n때문에 해싱된 인덱스에 이미 다른 값들이 들어있다면 데이터를 저장할 다른 위치를 찾은뒤에야 저장할 수 있다.")]),t._v(" "),e("p",[t._v("해시 충돌을 회피하는 방법들은 다음과 같다.")]),t._v(" "),e("ul",[e("li",[t._v("개방 주소법 (Open Address)\n"),e("ul",[e("li",[t._v("해시충돌이 발생하면 다른 버킷 (데이터 주소 공간) 을 찾아 자료를 삽입하는 방식")]),t._v(" "),e("li",[t._v("비어있는 버킷을 탐색하거나 혹은 2차 해시함수를 이용하여 새로운 주소를 할당한다.")])])]),t._v(" "),e("li",[t._v("분리 연결법 (Seperate Chaining)\n"),e("ul",[e("li",[t._v("Java HashMap 에서 사용중인 대표적인 방식")]),t._v(" "),e("li",[t._v("??????????")])])])]),t._v(" "),e("p",[t._v("이 외에도 "),e("em",[e("strong",[t._v("해시 버킷의 동적 확장")])]),t._v(" 등과 같은 방법도 있다.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://asfirstalways.tistory.com/332",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://asfirstalways.tistory.com/332"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://d2.naver.com/helloworld/831311",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d2.naver.com/helloworld/831311"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=v.exports}}]);