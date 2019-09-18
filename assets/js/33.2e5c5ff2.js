(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{449:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ioc-inversion-of-control-제어의-역전"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioc-inversion-of-control-제어의-역전","aria-hidden":"true"}},[t._v("#")]),t._v(" IoC (Inversion of Control : 제어의 역전)")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("프로그램의 제어의 흐름 구조가 바뀌는 것")])]),t._v(" 이다.")]),t._v(" "),a("p",[t._v("일반적인 객체의 흐름은 다음과 같다.")]),t._v(" "),a("ol",[a("li",[t._v("객체 생성")]),t._v(" "),a("li",[t._v("의존성 객체 생성 (클래스 내부)")]),t._v(" "),a("li",[t._v("의존성 객체 메소드 호출")])]),t._v(" "),a("p",[t._v("하지만 스프링 내부에서는 다음과 같은 순서로 생성 및 실행된다.")]),t._v(" "),a("ol",[a("li",[t._v("객체 생성")]),t._v(" "),a("li",[t._v("의존성 객체 주입 (스프링에게 위임하여 만들어놓은 객체)")]),t._v(" "),a("li",[t._v("의존성 객체 메소드 호출")])]),t._v(" "),a("p",[t._v("스프링이 모든 의존성 객체를 스프링이 실행될때 다 만들어 주고 필요한 곳에 주입시켜줌으로써"),a("br"),t._v(" "),a("em",[a("strong",[t._v("Bean")])]),t._v(" 들은 "),a("em",[a("strong",[t._v("싱글턴 패턴의 특징")])]),t._v(" 을 가진다.")]),t._v(" "),a("p",[t._v("제어의 흐름을 사용자가 컨트롤 하는것이 아닌 "),a("em",[a("strong",[t._v("스프링에게 맏겨 작업을 처리(스프링이 처리)")])]),t._v(" 하게 된다. (일반적인 Java 소스들은 스스로 제어 및 소비함)")]),t._v(" "),a("p",[t._v("사용자는 자신이 만든 객체가 어디에 사용되는지 알 수 없고 제어 권한을 위임받는 특별한 객체에 의해서 만들어지고 사용된다. (자신들이 만든 Java 소스가 프레임워크에 의해 소비됨)")]),t._v(" "),a("p",[t._v("이는 다음 두가지의 구현 방법으로는 다음과 같다.")]),t._v(" "),a("h2",{attrs:{id:"dl-dependency-lookup-의존성-검색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dl-dependency-lookup-의존성-검색","aria-hidden":"true"}},[t._v("#")]),t._v(" DL (Dependency Lookup : 의존성 검색)")]),t._v(" "),a("p",[t._v("저장소에 저장되어 있는 "),a("em",[a("strong",[t._v("빈 (Bean)")])]),t._v(" 에 접근하기 위해 개발자들이 컨테이너에서 제공하는 API 를 이용하여 사용하고자 빈을 Lookup 하는 것")]),t._v(" "),a("h2",{attrs:{id:"di-dependency-injection-의존성-주입"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#di-dependency-injection-의존성-주입","aria-hidden":"true"}},[t._v("#")]),t._v(" DI (Dependency Injection : 의존성 주입)")]),t._v(" "),a("p",[t._v("각 계층 사이와 각 클래스 사이의 필요로 하는 의존 관계를 컨테이너가 자동으로 연결해 주는것")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("DL")])]),t._v(" 을 사용시 컨테이너의 종속성이 증가하여, 이를 줄이기 위해서 "),a("em",[a("strong",[t._v("DI")])]),t._v(" 를 사용")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Child")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Child")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("스프링에서는 객체의 생성과 소멸에 관련된 작업을 자동으로 수행해 주는데 객체가 생성되는곳을 "),a("em",[a("strong",[t._v("Bean Container")])]),t._v(" 라고 한다.")]),t._v(" "),a("p",[t._v("스프링에서는 객체를 "),a("em",[a("strong",[t._v("Bean")])]),t._v(" 이라고 부르며, 프로젝트가 실행될 때 사용자가 "),a("em",[a("strong",[t._v("Bean")])]),t._v(" 으로 관리하는 객체들을 자동으로 생성해 준다.")]),t._v(" "),a("p",[t._v("스프링에서 실행할 때 생성했던 "),a("em",[a("strong",[t._v("Bean")])]),t._v(" 을 주입시켜주는 과정을 "),a("em",[a("strong",[t._v("DI")])]),t._v(" 라고 한다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://isstory83.tistory.com/m/91",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://isstory83.tistory.com/m/91"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://private.tistory.com/39",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://private.tistory.com/39"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);