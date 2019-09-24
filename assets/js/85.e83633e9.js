(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{429:function(t,e,r){"use strict";r.r(e);var a=r(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"exception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exception","aria-hidden":"true"}},[t._v("#")]),t._v(" Exception")]),t._v(" "),r("p",[t._v("Java 에서는 기본적으로 2가지의 에러 유형이 있다.")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("`Error` 와 `Exception` 의 차이")]),t._v(" "),r("p",[t._v("Error와 Exception은 같다고 생각할 수도 있지만, 사실 큰 차이가 있다.")]),t._v(" "),r("p",[t._v("에러는 메모리 부족이나 스택오버플로우와 같이 발생하면 복구할 수 없는 심각한 오류이고,"),r("br"),t._v("\n예외는 발생하더라도 수습할 수 있는 비교적 덜 심각한 오류이다.")])]),t._v(" "),r("h2",{attrs:{id:"checked-exception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#checked-exception","aria-hidden":"true"}},[t._v("#")]),t._v(" Checked Exception")]),t._v(" "),r("p",[r("code",[t._v("Checked Exception")]),t._v(" 는 외부 환경에 의해 미리 예상 되는 오류이다.")]),t._v(" "),r("p",[t._v("예를 들면 "),r("code",[t._v("IOException")]),t._v(" "),r("code",[t._v("ClassNotFoundException")]),t._v(" 등과 같이 "),r("em",[r("strong",[t._v("반드시 예외처리가 필요하다.")])])]),t._v(" "),r("h3",{attrs:{id:"ioexception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ioexception","aria-hidden":"true"}},[t._v("#")]),t._v(" IOException")]),t._v(" "),r("h3",{attrs:{id:"sqlexception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sqlexception","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLException")]),t._v(" "),r("h3",{attrs:{id:"assertionerror"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assertionerror","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/AssertionError.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AssertionError"),r("OutboundLink")],1),t._v(" "),r("Badge",{attrs:{text:"1.4"}})],1),t._v(" "),r("p",[t._v("선언이 실패한것을 나타내기 위해서 발생된다.")]),t._v(" "),r("h2",{attrs:{id:"unchecked-exception-runtime-exception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unchecked-exception-runtime-exception","aria-hidden":"true"}},[t._v("#")]),t._v(" Unchecked Exception (Runtime Exception)")]),t._v(" "),r("p",[r("code",[t._v("Unchecked Exception")]),t._v(" 는 프로그램 로직상의 문제로 일어나는 로직상의 오류로써 미리 예상할 수 없다.")]),t._v(" "),r("p",[t._v("대표적으로 "),r("code",[t._v("RuntimeException")]),t._v(" 과 같이 프로그램 실행중에 일어나며 "),r("em",[r("strong",[t._v("반드시 예외처리를 필요로 하지 않는다.")])])]),t._v(" "),r("h3",{attrs:{id:"nullpointerexception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nullpointerexception","aria-hidden":"true"}},[t._v("#")]),t._v(" NullPointerException")]),t._v(" "),r("h3",{attrs:{id:"illegalargumentexception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#illegalargumentexception","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/IllegalArgumentException.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IllegalArgumentException"),r("OutboundLink")],1),t._v(" "),r("Badge",{attrs:{text:"1.0"}})],1),t._v(" "),r("p",[t._v("부정한 인수 또는 부적절한 인수를 메서드에 겆내준것을 나타내기 위해 발생된다.")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("IllegalArgumentException ()")]),t._v(" "),r("ul",[r("li",[t._v("상세 메세지를 가지지 않는 IllegalArgumentException을 구축합니다.")])])]),t._v(" "),r("li",[r("code",[t._v("IllegalArgumentException (String s)")]),t._v(" "),r("ul",[r("li",[t._v("지정된 상세 메세지를 가지는 IllegalArgumentException을 구축합니다.")])])]),t._v(" "),r("li",[r("code",[t._v("IllegalArgumentException (String message, Throwable cause)")]),t._v(" "),r("Badge",{attrs:{text:"1.5"}}),t._v(" "),r("ul",[r("li",[t._v("지정된 상세 메세지 및 원인을 사용해 새로운 예외를 구축합니다.")])])],1),t._v(" "),r("li",[r("code",[t._v("IllegalArgumentException (Throwable cause)")]),t._v(" "),r("Badge",{attrs:{text:"1.5"}}),t._v(" "),r("ul",[r("li",[t._v("지정된 원인 및 상세 메세지를 사용해 새로운 예외를 구축합니다.")])])],1)]),t._v(" "),r("h3",{attrs:{id:"indexoutofboundexception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#indexoutofboundexception","aria-hidden":"true"}},[t._v("#")]),t._v(" IndexOutOfBoundException")]),t._v(" "),r("h3",{attrs:{id:"systemexception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#systemexception","aria-hidden":"true"}},[t._v("#")]),t._v(" SystemException")]),t._v(" "),r("blockquote",[r("p",[t._v("예외처리한 객체는 작업이 끝난후 모드 GC 의 대상이 된다.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}}),t._v(" "),r("th",[t._v("Checked Exception")]),t._v(" "),r("th",[t._v("Unchecked Exception")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("처리여부")]),t._v(" "),r("td",[t._v("반드시 예외처리가 필요")]),t._v(" "),r("td",[t._v("명시적인 처리를 강제하지 않음")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("확인시점")]),t._v(" "),r("td",[t._v("컴파일 단계")]),t._v(" "),r("td",[t._v("실행단계")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("예외 발생 시"),r("br"),t._v("트랜잭션 여부")]),t._v(" "),r("td",[t._v("roll-back 하지 않음")]),t._v(" "),r("td",[t._v("roll-back 처리")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("대표적인 예외")]),t._v(" "),r("td",[r("code",[t._v("Exception")]),t._v(" 의 상속을 받는 하위 클래스 중"),r("br"),r("code",[t._v("Runtime Exception")]),t._v("을 제외한 모든 예외")]),t._v(" "),r("td",[r("code",[t._v("Runtime Exception")]),t._v(" 의 하위 예외 클래스")])])])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.nextree.co.kr/p3239/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.nextree.co.kr/p3239/"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://jdh5202.tistory.com/103",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jdh5202.tistory.com/103"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=n.exports}}]);