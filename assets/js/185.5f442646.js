(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{359:function(e,t,a){"use strict";a.r(t);var _=a(1),r=Object(_.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"큐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#큐","aria-hidden":"true"}},[e._v("#")]),e._v(" 큐")]),e._v(" "),a("ul",[a("li",[e._v("처음에 저장한 데이터를 가장 먼저 꺼내는 선입선출 (FIFO : First In First Out) 구조로 되어 있다.")]),e._v(" "),a("li",[e._v("입출력이 양방향에서 이루어지는 데이터 구조이다.")]),e._v(" "),a("li",[e._v("삽입 연산을 "),a("em",[a("strong",[e._v("Enqueue")])]),e._v(" 삭제 연산을 "),a("em",[a("strong",[e._v("Dequeue")])]),e._v(" 라고 한다.")])]),e._v(" "),a("h2",{attrs:{id:"단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단점","aria-hidden":"true"}},[e._v("#")]),e._v(" 단점")]),e._v(" "),a("ul",[a("li",[e._v("데이터 삽입 후 계속 항목 삭제를 하면 REAR 와 FRONT 가 만나게 되어 공백 Queue 가 됨에도 불구하고 오버 플로우 현상이 생겨 메모리낭비 현상이 생기게 된다.")])]),e._v(" "),a("h2",{attrs:{id:"용도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#용도","aria-hidden":"true"}},[e._v("#")]),e._v(" 용도")]),e._v(" "),a("ul",[a("li",[e._v("OS 의 작업 스케쥴링")]),e._v(" "),a("li",[e._v("대기행렬 처리")])]),e._v(" "),a("h2",{attrs:{id:"유의사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유의사항","aria-hidden":"true"}},[e._v("#")]),e._v(" 유의사항")]),e._v(" "),a("p",[e._v("Queue 에서 데이터를 추출할 때는 첫번째 저장된 데이터를 삭제하므로 배열리스트와 같은 배열 기반 "),a("code",[e._v("Collection Class")]),e._v(" 를 사용하면 데이터를 꺼낼때마다 빈공간을 채우기 위해 데이터의 복사가 발생한다.")]),e._v(" "),a("p",[e._v("이는 성능저하를 야기 시키기 때문에 "),a("em",[a("strong",[e._v("연결 리스트 (Linked List) 로 구현")])]),e._v(" 하는것이 적합하다.")]),e._v(" "),a("h2",{attrs:{id:"priority-queue-우선순위-큐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priority-queue-우선순위-큐","aria-hidden":"true"}},[e._v("#")]),e._v(" Priority Queue (우선순위 큐)")]),e._v(" "),a("p",[e._v("우선순위가 높은 데이터가 먼저 작업 된다.")]),e._v(" "),a("h3",{attrs:{id:"구현-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구현-방법","aria-hidden":"true"}},[e._v("#")]),e._v(" 구현 방법")]),e._v(" "),a("ul",[a("li",[e._v("배열을 기반으로 구현")]),e._v(" "),a("li",[e._v("연결리스트를 기반으로 구현")]),e._v(" "),a("li",[e._v("힙 (Heap) 이용하여 구현")])]),e._v(" "),a("blockquote",[a("p",[e._v("데이터가 적을때는 문제가 없지만 _"),a("strong",[e._v("데이터가 많을 경우에는 노드 수에 비례해서 비교를 하기 때문에 성능저하의 이슈")]),e._v("_가 있다."),a("br"),e._v("\n따라서 "),a("em",[a("strong",[e._v("주로 힙 (Heap) 을 이용하여 구현")])]),e._v(" 하는 것이 일반적이다.")])]),e._v(" "),a("h2",{attrs:{id:"데큐-디큐-덱-deque-double-end-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데큐-디큐-덱-deque-double-end-queue","aria-hidden":"true"}},[e._v("#")]),e._v(" 데큐 / 디큐 / 덱 (Deque : Double-End Queue)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Queue")]),e._v(" 와 "),a("code",[e._v("Stack")]),e._v(" 을 합쳐놓은 형태이다.")]),e._v(" "),a("li",[e._v("두개의 포인터를 사용하여 양쪽에서 삽입과 삭제를 발생시킬수 있다.")])]),e._v(" "),a("h3",{attrs:{id:"특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#특징","aria-hidden":"true"}},[e._v("#")]),e._v(" 특징")]),e._v(" "),a("ul",[a("li",[e._v("크기가 가변적이다.\n"),a("ul",[a("li",[e._v("리스트와 같이 데이터를 담을 수 있는 크기가 가변적이다.")])])]),e._v(" "),a("li",[e._v("앞과 뒤에서 삽입과 삭제가 가능하다.")]),e._v(" "),a("li",[e._v("구현이 쉽지 않다.")]),e._v(" "),a("li",[e._v("랜덤 접근이 가능하다.")]),e._v(" "),a("li",[e._v("중간에 데이터의 삽입 및 삭제가 용이하지 않다.\n"),a("ul",[a("li",[e._v("되도록이면 중간에 데이터를 삽입하거나 삭제하는 것은 피해야 하며, 삽입과 삭제를 중간에 한다면 삽입과 삭제한 위치의 데이터를 모두 이동해야 한다.")])])])]),e._v(" "),a("h3",{attrs:{id:"중간에-데이터-삽입-시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#중간에-데이터-삽입-시","aria-hidden":"true"}},[e._v("#")]),e._v(" 중간에 데이터 삽입 시")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A018.png",alt:"데큐_삽입"}})]),e._v(" "),a("h3",{attrs:{id:"중간에-데이터-삭제-시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#중간에-데이터-삭제-시","aria-hidden":"true"}},[e._v("#")]),e._v(" 중간에 데이터 삭제 시")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A019.png",alt:"데큐_삭제"}})]),e._v(" "),a("h3",{attrs:{id:"deque-를-사용하는-경우"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deque-를-사용하는-경우","aria-hidden":"true"}},[e._v("#")]),e._v(" Deque 를 사용하는 경우")]),e._v(" "),a("p",[e._v("다음과 같은 경우 Deque 를 사용하면 효과적이다.")]),e._v(" "),a("ul",[a("li",[e._v("앞과 뒤에서 삽입 혹은 삭제를 한다.\n"),a("ul",[a("li",[a("em",[a("strong",[e._v("STL Container")])]),e._v(" 라이브러리 중에서 Deque 사용할때 성능이 가장 좋다.")])])]),e._v(" "),a("li",[e._v("저장할 데이터의 개수가 가변적이다.\n"),a("ul",[a("li",[e._v("Deque 는 동적으로 크기가 변하므로 유연하게 사용 가능하다.")])])]),e._v(" "),a("li",[e._v("검색을 거의 하지 않는다.\n"),a("ul",[a("li",[e._v("많은 데이터를 저장하며 검색이 필요한 경우라면  "),a("code",[e._v("Map")]),e._v(", "),a("code",[e._v("Set")]),e._v(", "),a("code",[e._v("HashMap")]),e._v(" 중 하나를 선택해서 사용하는편이 효과적이다.")])])]),e._v(" "),a("li",[e._v("데이터 접근을 랜덤하게 하고 싶다.\n"),a("ul",[a("li",[a("code",[e._v("Vector")]),e._v(" 와 같이 랜덤 접근이 가능하다. (사용방법도 같음)")])])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS3942847236",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS3942847236"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);