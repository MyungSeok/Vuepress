(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{291:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"scope-closure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope-closure","aria-hidden":"true"}},[t._v("#")]),t._v(" Scope & Closure")]),t._v(" "),s("h2",{attrs:{id:"scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope","aria-hidden":"true"}},[t._v("#")]),t._v(" Scope")]),t._v(" "),s("p",[t._v("Javascript 의 스코프는 "),s("em",[s("strong",[t._v("변수 (객체) 가 참조가능한 유효범위")])]),t._v(" 를 뜻하며 대표적으로 아래 두개로 구분된다.")]),t._v(" "),s("ul",[s("li",[t._v("렉시컬 스코프 (Lexical Scope)")]),t._v(" "),s("li",[t._v("동적 스코프 (Dynamic Scope)")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("기본적으로 Javascript 는 렉시컬 스코프 (Lexical Scope) 를 따른다.")])])]),t._v(" "),s("h3",{attrs:{id:"렉시컬-스코프-lexical-scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#렉시컬-스코프-lexical-scope","aria-hidden":"true"}},[t._v("#")]),t._v(" 렉시컬 스코프 (Lexical Scope)")]),t._v(" "),s("p",[t._v("스코프는 함수를 호출할 때가 아니라 "),s("em",[s("strong",[t._v("선언할 때 생성")])]),t._v(" 된다."),s("br"),t._v("\n이것은 렉시컬 스코프의 특징이며 동적 스코프와 비교된다.")]),t._v(" "),s("p",[t._v("아래 예시에서는 선언할 때 생성되는 것을 확인할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("blue\n")])])]),s("ul",[s("li",[t._v("ES5는 함수레벨의 렉시컬 스코프를 가진다.")]),t._v(" "),s("li",[t._v("ES6는 함수레벨과 블록레벨의 렉시컬 스코프를 가진다.")])]),t._v(" "),s("h3",{attrs:{id:"동적-스코프-dynamic-scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동적-스코프-dynamic-scope","aria-hidden":"true"}},[t._v("#")]),t._v(" 동적 스코프 (Dynamic Scope)")]),t._v(" "),s("p",[t._v("함수가 어디서 호출되었는지에 따라 상위 스코프가 결정")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("렉시컬 스코프 가정시")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("p",[s("strong",[t._v("동적 스코프 가정시")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://bestalign.github.io/2015/07/12/Lexical-Scope-and-Dynamic-Scope/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bestalign.github.io/2015/07/12/Lexical-Scope-and-Dynamic-Scope/"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"순환참조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#순환참조","aria-hidden":"true"}},[t._v("#")]),t._v(" 순환참조")]),t._v(" "),s("p",[t._v("이는 잘못된 클로저 사용시 "),s("em",[s("strong",[t._v("서로가 서로를 참조하는 순환 참조 현상이 발생")])]),t._v(" 될 수 있다.")]),t._v(" "),s("p",[t._v("순환참조가 발생되면 GC (Gabege Collection) 대상에서 벗어나기 때문에 메모리 누수의 원인으로 잔여하게 된다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hyunseob.github.io/2016/08/30/javascript-closure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hyunseob.github.io/2016/08/30/javascript-closure/"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://meetup.toast.com/posts/86",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://meetup.toast.com/posts/86"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-4%EA%B0%80%EC%A7%80-%ED%9D%94%ED%95%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%8C%80%EC%B2%98%EB%B2%95-5b0d217d788d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://engineering.huiseoul.com/자바스크립트는-어떻게-작동하는가-메모리-관리-4가지-흔한-메모리-누수-대처법-5b0d217d788d"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"http://www.nextree.co.kr/p7363/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.nextree.co.kr/p7363/"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);