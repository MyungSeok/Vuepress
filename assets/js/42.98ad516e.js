(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{270:function(t,a,s){"use strict";s.r(a);var n=s(1),e=function(t){t.options.__data__block__={flowchart_382ee148:"stage1=>operation: 기본 (원시) 타입\nstage2=>operation: Boxing\nstage3=>operation: 참조 자료형\n\nstage1(right)->stage2(right)->stage3",flowchart_382ee165:"stage1=>operation: 참조 자료형\nstage2=>operation: Unboxing\nstage3=>operation: 기본 (원시) 타입\n\nstage1(right)->stage2(right)->stage3",flowchart_64a570a8:"stage1=>operation: 값 타입을 힙에 생성하기 위해 메모리를 힙 영역에 생성\nstage2=>operation: 값을 힙 영역에 할당된 메모리로 복사\nstage3=>operation: 참조할 변수에 할당된 메모리 주소를 할당\n\nstage1->stage2->stage3",flowchart_64a570a0:"stage1=>operation: Boxing 값인지 확인\nstage2=>operation: Boxing 된 값이면 값유형의 변수에 복사\nstage3=>operation: 박싱한 메모리와 언박싱한 메모리 2개 존재\n\nstage1->stage2->stage3"}},r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"boxing-unboxing-박싱-언방식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boxing-unboxing-박싱-언방식","aria-hidden":"true"}},[t._v("#")]),t._v(" Boxing & Unboxing (박싱 & 언방식)")]),t._v(" "),s("p",[t._v("Java 의 데이터는 클래스나 객체와 같은 "),s("em",[s("strong",[t._v("참조자료형")])]),t._v(" 과 기본적인 "),s("em",[s("strong",[t._v("원시타입")])]),t._v(" 을 가질 수 있다."),s("br"),t._v("\n이는 다시 말해 각각의 기초 자료형을 포장되어 있는 "),s("code",[t._v("Wrapper Class")]),t._v(" 로 변환이 가능하다.")]),t._v(" "),s("ul",[s("li",[t._v("Boxing : 값 (기초 타입) 을 참조 형식으로 변환")])]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_382ee148",code:t.$dataBlock.flowchart_382ee148,preset:"vue"}}),s("ul",[s("li",[t._v("Unboxing : 참조 형식을 값 형식으로 변환")])]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_382ee165",code:t.$dataBlock.flowchart_382ee165,preset:"vue"}}),s("table",[s("thead",[s("tr",[s("th",[t._v("기본형 타입")]),t._v(" "),s("th",[t._v("참조 자료형 (Wrapper Class)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("byte")]),t._v(" "),s("td",[t._v("Byte")])]),t._v(" "),s("tr",[s("td",[t._v("short")]),t._v(" "),s("td",[t._v("Short")])]),t._v(" "),s("tr",[s("td",[t._v("int")]),t._v(" "),s("td",[t._v("Integer")])]),t._v(" "),s("tr",[s("td",[t._v("long")]),t._v(" "),s("td",[t._v("Long")])]),t._v(" "),s("tr",[s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Float")])]),t._v(" "),s("tr",[s("td",[t._v("double")]),t._v(" "),s("td",[t._v("Double")])]),t._v(" "),s("tr",[s("td",[t._v("char")]),t._v(" "),s("td",[t._v("Character")])]),t._v(" "),s("tr",[s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("Boolean")])]),t._v(" "),s("tr",[s("td",[t._v("void")]),t._v(" "),s("td",[t._v("Void")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Boxing")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UnBoxing")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"boxing-과정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boxing-과정","aria-hidden":"true"}},[t._v("#")]),t._v(" Boxing 과정")]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_64a570a8",code:t.$dataBlock.flowchart_64a570a8,preset:"vue"}}),s("h2",{attrs:{id:"unboxing-과정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unboxing-과정","aria-hidden":"true"}},[t._v("#")]),t._v(" Unboxing 과정")]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_64a570a0",code:t.$dataBlock.flowchart_64a570a0,preset:"vue"}}),s("p",[s("strong",[t._v("문제점")])]),t._v(" "),s("ul",[s("li",[t._v("모든 객체가 값 형식으로 언박싱 될 수 없고, 이전에 박싱된 데이터에 한하여 언박싱이 가능하다.")]),t._v(" "),s("li",[t._v("또한 박싱된 데이터의 타입을 따라야 한다.")]),t._v(" "),s("li",[t._v("박싱 작업은 완전히 새로운 객체가 만들어져야 하며 이러한 작업은 할당 작업보다 "),s("em",[s("strong",[t._v("최대 20배의 시간")])]),t._v(" 이 걸린다고 한다")]),t._v(" "),s("li",[t._v("언박싱의 캐스팅 시간은 할당작업보다 "),s("em",[s("strong",[t._v("4배이상")])]),t._v(" 의 시간이 걸린다고 한다.")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 캐스팅 시간 4배, 박싱 작업 20배 느려짐 예제")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// long sum = 0L;")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://grayt.tistory.com/87",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://grayt.tistory.com/87"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);"function"==typeof e&&e(r);a.default=r.exports}}]);