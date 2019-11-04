(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{268:function(t,s,a){"use strict";a.r(s);var n=a(1),e=function(t){t.options.__data__block__={flowchart_64a56f38:"stage1=>operation: Rectangle\nstage2=>operation: Square\n\nstage1->stage2"}},r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"solid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solid","aria-hidden":"true"}},[t._v("#")]),t._v(" SOLID")]),t._v(" "),a("p",[t._v("Robert C. Martin 이 2000년대 초 명명한 객체지향의 다섯가지 프로그래밍 및 설계의 원칙들을 두문자어 기억술로 소개한것이다.")]),t._v(" "),a("p",[t._v("이는 객체지향 4대 특성인 캡슐화, 상속, 추상화, 다형성 등을 이용하여 객체지향 프로그래밍 설계를 도와주는 원칙들이 있다.")]),t._v(" "),a("p",[t._v("자기 자신의 "),a("em",[a("strong",[t._v("클래스의 응집도를 높이고, 타 클래스의 결합도를 낮추는 (High-Cohesion - Loose Coupling)")])]),t._v(" 원칙을 객체 지향관점에서 도입한것이다.")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("SOLID")])]),t._v(" 5대 원칙 (객체 지향 설계 5원칙)")]),t._v(" "),a("ul",[a("li",[t._v("SRP (Single Reponsibility Principle : 단일 책임의 원칙)")]),t._v(" "),a("li",[t._v("OCP (Open Closed Principle : 개방 폐쇄의 원칙)")]),t._v(" "),a("li",[t._v("LSP (Liskov Substitution Principle : 리스코프 치환의 원칙)")]),t._v(" "),a("li",[t._v("ISP (Interface Segregation Principle : 인터페이스 분리의 원칙)")]),t._v(" "),a("li",[t._v("DIP (Dependency Inversion Principle : 의존 역전의 원칙)")])]),t._v(" "),a("h2",{attrs:{id:"단일-책임의-원칙-srp-single-reponsibility-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단일-책임의-원칙-srp-single-reponsibility-principle","aria-hidden":"true"}},[t._v("#")]),t._v(" 단일 책임의 원칙 (SRP : Single Reponsibility Principle)")]),t._v(" "),a("p",[t._v("작성된 "),a("em",[a("strong",[t._v("클래스는 하나의 기능만 가지며")])]),t._v(" 클래스가 제공하는 모든 서비스는 그 "),a("em",[a("strong",[t._v("하나의 책임을 수행하는데 집중")])]),t._v(" 되어야 한다는것")]),t._v(" "),a("ul",[a("li",[t._v("소프트웨어의 설계 부품 (클래스, 함수) 는 단 하나의 책임 (기능) 만 가져야 한다.")])]),t._v(" "),a("p",[t._v("새로운 요구사항에 대해 프로그램이 영향 받는 부분이 적어야 한다. 다시 말하면 "),a("em",[a("strong",[t._v("응집도는 높고 결합도는 낮아야 한다")])]),t._v(" 라는 말이다."),a("br"),t._v("\n만약 한 프로그램이 책임(기능을 담당) 지고 있는 부분이 많아지면 클래스 내부의 함수끼리 강한 결합도를 가질수 있는 가능성이 높기 때문에 요구사항의 수정이 발생할 경우 유지보수 비용이 증가한다."),a("br"),t._v("\n따라서 책임 (기능) 을 분리 할 수 있는 구조로 설계되어야 한다.")]),t._v(" "),a("blockquote",[a("p",[t._v("리팩토링 (Refactoring) 을 통하여 해당 책임을 최상의 상태로 분배")])]),t._v(" "),a("h2",{attrs:{id:"개방-폐쇄-원칙-ocp-open-closed-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개방-폐쇄-원칙-ocp-open-closed-principle","aria-hidden":"true"}},[t._v("#")]),t._v(" 개방 폐쇄 원칙 (OCP : Open Closed Principle)")]),t._v(" "),a("p",[t._v("소프트웨어의 구성요소 (컴포넌트, 클래스, 모듈, 함수) 는 확장에는 열려 있고, 변경에는 닫혀 있어야 한다는 의미이다."),a("br"),t._v("\n기존의 구성요소는 수정이 일어나지 말아야 하며, 기존의 구소요소를 쉽게 확장하여 재 사용 가능해야 한다는 뜻이다.")]),t._v(" "),a("ul",[a("li",[t._v("확장 될것과 불변의 속성을 엄격히 구분한다.")]),t._v(" "),a("li",[t._v("두 모듈이 만나는 지점에 인터페이스를 정의한다.")]),t._v(" "),a("li",[t._v("구현에 의존하기보다 정의한 인터페이스에 의존하도록 코드를 작성한다.")])]),t._v(" "),a("h3",{attrs:{id:"정의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정의","aria-hidden":"true"}},[t._v("#")]),t._v(" 정의")]),t._v(" "),a("ul",[a("li",[t._v("소프트웨어의 구성요소 (컴포넌트, 클래스, 모듈, 함수) 는 확장에는 열려 있고, 변경에는 닫혀 있어야 한다.")])]),t._v(" "),a("p",[t._v("이는 기존의 구성요소는 수정이 일어나지 말아야 하며, "),a("em",[a("strong",[t._v("기존의 구성요소를 쉽게 확장하여 재사용 가능")])]),t._v(" 해야 한다는 뜻이며, 프로그램 설계 과정에서 많은 고민이 되어 있어야 하고 이를 위해 자주 사용되는 문법이 "),a("code",[t._v("interface")]),t._v(" 를 활용한 방법이다.")]),t._v(" "),a("p",[t._v("아래 예시를 통하여 OCP 의 위배 사항을 살펴 보자")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoundPlayer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"play wav"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoundPlayer")]),t._v(" sp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoundPlayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("상기 코드에서 "),a("code",[t._v("play()")]),t._v(" 를 다른 파일 포맷의 재생을 원한다면 OCP 원칙에 위배된다.")]),t._v(" "),a("p",[t._v("이러한 경우에는 "),a("code",[t._v("interface")]),t._v(" 를 구성하여 OCP 를 만족한다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" playAlgorithm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wav")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" playAlgorithm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Play Wav"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mp3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" playAlgorithm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Play Mp3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위와 같이 재생하고자 하는 "),a("code",[t._v("playAlgorithm")]),t._v(" 인터페이스의 "),a("code",[t._v("play()")]),t._v(" 를 재정의 하도록 설계한다.")]),t._v(" "),a("p",[t._v("이와 같은 설계 방식을 디자인 패턴에서는 "),a("em",[a("strong",[t._v("전략 패턴 (Strategy Pattern)")])]),t._v(" 이라고 한다.")]),t._v(" "),a("p",[t._v("OCP 를 만족한 설계는 다음과 같은 장점이 있다.")]),t._v(" "),a("ul",[a("li",[t._v("변경에 유연하게 대처 가능하다.")]),t._v(" "),a("li",[t._v("유지보수 비용이 감소된다.")]),t._v(" "),a("li",[t._v("코드의 가독성이 높아진다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://code.tutsplus.com/tutorials/solid-part-2-the-openclosed-principle--net-36600",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.tutsplus.com/tutorials/solid-part-2-the-openclosed-principle--net-36600"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"리스코프-치환-원칙-lsp-liskov-substitution-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리스코프-치환-원칙-lsp-liskov-substitution-principle","aria-hidden":"true"}},[t._v("#")]),t._v(" 리스코프 치환 원칙 (LSP : Liskov Substitution Principle)")]),t._v(" "),a("p",[t._v("OCP (Open Close Principle : 개방 폐쇠의 법칙) 과 밀접한 연관이 있으며 OCP 를 바탕으로 구현한 템플릭 설계의 하나의 예라고 할 수 있다."),a("br"),t._v("\n즉 LSP 는 OCP 의 해결책 중 하나이다.")]),t._v(" "),a("h3",{attrs:{id:"정의-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정의-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 정의")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("자식 (파생) 클래스는 언제나 부모 (기반) 타입과 호환")]),t._v("이 되어야 한다.")]),t._v(" "),a("li",[a("strong",[t._v("서브타입은 언제나 기반 타입과 호환")]),t._v("될 수 있어야 한다.")]),t._v(" "),a("li",[a("strong",[t._v("하위 클래스가 상위 클래스의 역할을 대신")]),t._v("할 때 "),a("strong",[t._v("논리적으로 맞아 떨어져야 한다.")])])]),t._v(" "),a("p",[t._v("다음 예는 이를 설명하기 위한 가장 유명한 예 이다.")]),t._v(" "),a("FlowChart",{attrs:{id:"flowchart_64a56f38",code:t.$dataBlock.flowchart_64a56f38,preset:"vue"}}),a("p",[t._v("최초에 기반타입을 담당할 "),a("code",[t._v("Rectagle")]),t._v(" 클래스를 선언한다.")]),t._v(" "),a("p",[t._v("여기에는 너비와 높이 등이 선언되어 있으며 도형의 넓이를 반환하는 "),a("code",[t._v("area")]),t._v(" 함수까지 구현되어 있다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Rectangle")]),t._v(" 클래스를 상속 받는 "),a("code",[t._v("Square")]),t._v(" 클래스가 있다.\n"),a("code",[t._v("Square")]),t._v(" 클래스는 "),a("em",[a("strong",[t._v("정사각형")])]),t._v(" 의 도형 처리를 담당하는 클래스이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Square")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위의 두개의 클래스를 소비할 메인 함수이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkAreaSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bad Area"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkAreaSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkAreaSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error Exception")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이를 실행하면 두개의 클래스가 전혀 다른 결과를 가져온다.")]),t._v(" "),a("p",[t._v("하나는 "),a("code",[t._v("Rectangle")]),t._v(" 클래스는 "),a("em",[a("strong",[t._v("넓이가 20 으로 연산")])]),t._v(" 되는데 반해 "),a("code",[t._v("Square")]),t._v(" 클래스는 오류를 반환한다.")]),t._v(" "),a("p",[t._v("이것이 바로 "),a("em",[a("strong",[t._v("리스코프의 치환 원칙")])]),t._v(" 을 벗어난 대표적인 예이다.")]),t._v(" "),a("p",[t._v("다시 정리하면 "),a("em",[a("strong",[t._v("상위 타입의 객체를 하위타입의 객체로 치환해도 상위 타입을 사용하는 프로그램은 정상적으로 동작")])]),t._v(" 해야 한다.")]),t._v(" "),a("p",[t._v("리스코프 치환을 벗어나는 위반사례는 대표적으로 다음과 같다.")]),t._v(" "),a("ol",[a("li",[t._v("명시된 명세에서 벗어난 "),a("em",[a("strong",[t._v("값")])]),t._v(" 을 반환한다.")]),t._v(" "),a("li",[t._v("명시된 명세에서 벗어난 "),a("em",[a("strong",[t._v("오류")])]),t._v(" 를 발생한다.")]),t._v(" "),a("li",[t._v("명시된 명세에서 벗어난 "),a("em",[a("strong",[t._v("기능")])]),t._v(" 을 수행한다.")])]),t._v(" "),a("h3",{attrs:{id:"해결-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" 해결 방법")]),t._v(" "),a("ul",[a("li",[t._v("상속관계를 제거한다.")]),t._v(" "),a("li",[t._v("문제가 되는 "),a("code",[t._v("area()")]),t._v(" 를 "),a("code",[t._v("Square")]),t._v(" 로 이동한다.")]),t._v(" "),a("li",[t._v("LSP 를 통하여 "),a("em",[a("strong",[t._v("자식 클래스가 상속받은 부모 클래스의 역활을 충실히 하면서 확장")])]),t._v(" 해나가야 한다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://code.tutsplus.com/tutorials/solid-part-3-liskov-substitution-interface-segregation-principles--net-36710",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.tutsplus.com/tutorials/solid-part-3-liskov-substitution-interface-segregation-principles--net-36710"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"인터페이스-분리-원칙-isp-interface-segregation-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#인터페이스-분리-원칙-isp-interface-segregation-principle","aria-hidden":"true"}},[t._v("#")]),t._v(" 인터페이스 분리 원칙 (ISP : Interface Segregation Principle)")]),t._v(" "),a("p",[t._v("최소한의 의미에 맞는 인터페이스만 구현해야 한다.")]),t._v(" "),a("ul",[a("li",[t._v("하나의 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 않아야 한다.")]),t._v(" "),a("li",[t._v("하나의 인터페이스보다는 여러개의 구체적인 인터페이스가 낫다")])]),t._v(" "),a("p",[t._v("시스템의 내부 의존성을 약화시켜 리펙토링, 수정, 재배포를 쉽게할 수 있다.")]),t._v(" "),a("h2",{attrs:{id:"의존-역전-원칙-dip-dependency-inversion-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#의존-역전-원칙-dip-dependency-inversion-principle","aria-hidden":"true"}},[t._v("#")]),t._v(" 의존 역전 원칙 (DIP : Dependency Inversion Principle)")]),t._v(" "),a("p",[t._v("하위 레벨모듈의 변경이 상위 레벨 모듈의 변경을 요구하는 역전현상")]),t._v(" "),a("ul",[a("li",[t._v("의존 관계를 맺을 때, 변화하기 쉬운것 (클래스) 보단 변화하기 어려운 것 (추상클래스, 인터페이스) 에 의존해야 한다")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A102.png",alt:"DIP"}})]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Policy")]),t._v(" policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlPolicyImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위와 같이 구상 클래스에 의존하는걸 추상클래스에 의존하는 것이다.")]),t._v(" "),a("p",[a("code",[t._v("UrlPolicyImpl")]),t._v(" 클래스는 "),a("code",[t._v("Policy")]),t._v(" 인터페이스를 구현하는데 "),a("code",[t._v("new Factory(policy);")]),t._v(" 와 같이 실제로 "),a("code",[t._v("Policy")]),t._v(" 인터페이스에게 의존하여 초기화를 한다.")]),t._v(" "),a("p",[t._v("이는 변화하기 쉬운 실제 구현 클래스 "),a("code",[t._v("UrlPolicyImpl")]),t._v(" 보다 "),a("code",[t._v("Policy")]),t._v(" 인터페이스에게 의존함으로써 안정적으로 가져갈 수 있다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.nextree.co.kr/p6960/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.nextree.co.kr/p6960/"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://limkydev.tistory.com/77",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://limkydev.tistory.com/77"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://choipattern.blogspot.com/2013/08/solid.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://choipattern.blogspot.com/2013/08/solid.html"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);"function"==typeof e&&e(r);s.default=r.exports}}]);