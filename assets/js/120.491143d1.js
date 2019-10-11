(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{404:function(e,t,v){"use strict";v.r(t);var _=v(1),a=Object(_.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"chapter-12-직렬화"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chapter-12-직렬화","aria-hidden":"true"}},[e._v("#")]),e._v(" Chapter 12 직렬화")]),e._v(" "),v("p",[e._v("객체의 직렬화란 자바가 객체를 바이트 스트림으로 인코딩 (직렬화) 하고 그 바이트 스트림으로 부터 다시 객체를 재구성 (역직렬화) 하는 메커니즘이다.")]),e._v(" "),v("p",[e._v("직렬화된 긱체는 다른 VM 에 전송하거나 디스크에 저장한 후 나중에 역직렬화를 할 수 있다.")]),e._v(" "),v("h2",{attrs:{id:"item-85-자바-직렬화의-대안을-찾으라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-85-자바-직렬화의-대안을-찾으라","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 85 자바 직렬화의 대안을 찾으라")]),e._v(" "),v("p",[e._v("직렬화의 위험을 회피하는 가장 좋은 방법은 아무것도 역직렬화하지 않는것이다.")]),e._v(" "),v("p",[e._v("신뢰할 수 없는 데이터는 절대 역직렬화 하지 않는 것이다.")]),e._v(" "),v("p",[e._v("직력화를 피할수 없고 역직렬화한 데이터가 안전한지 완전히 확신할 수 없다면 객체 역직렬화 필터링 ("),v("code",[e._v("java.io.ObjectInputFilter")]),e._v(") 를 사용하자"),v("br"),e._v("\n이는 데이터 스트림이 역직렬화 되기 전에 필터를 설치하는 기능이다.")]),e._v(" "),v("p",[e._v("블랙리스트 보다는 화이트리스트 방식으로 사용하자.")]),e._v(" "),v("h2",{attrs:{id:"item-86-serializable을-구현할지는-신중히-결정하라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-86-serializable을-구현할지는-신중히-결정하라","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 86 Serializable을 구현할지는 신중히 결정하라")]),e._v(" "),v("p",[e._v("특정 클래스의 인스턴스를 직렬화할 수 있게 하려면 클래스 선언에 "),v("code",[e._v("implements Serializable")]),e._v(" 만 덧붙이면 된다.")]),e._v(" "),v("p",[e._v("너무 쉽게 적용가능 하지만 큰 문제점이 있다.")]),e._v(" "),v("p",[v("code",[e._v("Serializable")]),e._v(" 을 구현 이후 릴리즈한 뒤에는 수정하기 어렵다")]),e._v(" "),v("p",[e._v("상속용으로 설계된 클래스는 대부분 "),v("code",[e._v("Serializable")]),e._v(" 을 구현하면 안되며, 인터페이스도 대부분 "),v("code",[e._v("Serializable")]),e._v(" 을 확장해서도 안된다.")]),e._v(" "),v("h2",{attrs:{id:"item-87-커스텀-직렬화-형태를-고려해보라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-87-커스텀-직렬화-형태를-고려해보라","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 87 커스텀 직렬화 형태를 고려해보라")]),e._v(" "),v("p",[e._v("먼저 고민해보고 괜찮다고 판단될 때만 기본 직렬화 형태를 사용하라.")]),e._v(" "),v("p",[e._v("직렬화의 형태는 "),v("strong",[e._v("유연성")]),e._v(", "),v("strong",[e._v("성능")]),e._v(", "),v("strong",[e._v("정확성")]),e._v(" 측면에서 "),v("strong",[e._v("신중히 고민한 후 합당할 때만 사용")]),e._v("해야 한다.")]),e._v(" "),v("p",[e._v("객체의 물리적 표현과 논리적 내용이 같다면 기본 직력화 형태라도 무방하다.")]),e._v(" "),v("p",[e._v("만약 객체의 물리적 표현과 논리적 내용이 크게 상이하다면 기본 직렬화 형태를 사용했을경우 문제는 다음과 같다.")]),e._v(" "),v("ol",[v("li",[e._v("공개 API 가 현재의 내부 표현 방식에 영구히 묶인다.")]),e._v(" "),v("li",[e._v("너무 많은 공간을 차지할 수 있다.")]),e._v(" "),v("li",[e._v("시간이 너무 많이 걸리수 있다.")]),e._v(" "),v("li",[e._v("스택오버플로를 일이킬 수 있다.")])]),e._v(" "),v("p",[v("em",[v("strong",[e._v("어떤 직렬화 형태를 택하든 직렬화 가능 클래스에 모두 직렬 버전의 UID를 명시적으로 부여하자")])])]),e._v(" "),v("p",[v("strong",[e._v("구버전으로 직렬화된 인스턴스들과의 호환성을 끊으려는 경우를 제외하고는 직렬버전 UID 를 절대 수정하지 말라")])]),e._v(" "),v("h2",{attrs:{id:"item-88-readobject-메서드는-방어적으로-작성하라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-88-readobject-메서드는-방어적으로-작성하라","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 88 readObject 메서드는 방어적으로 작성하라")]),e._v(" "),v("p",[v("code",[e._v("private")]),e._v(" 이여야 하는 객체 참조 필드는 각 필드가 가르키는 객체를 방어적으로 복사하라")]),e._v(" "),v("p",[e._v("모든 불변식을 검사하여 어긋나는게 발견되면 InvalidObjectException 을 던진다.")]),e._v(" "),v("p",[e._v("방어적으로 복사한 이후에는 반드시 불변식 검사가 뒤따라야 한다.")]),e._v(" "),v("p",[e._v("역직렬화 후 객체 그래프 전체의 유효성을 검사해야 한다면 ObjectInputValidation 인터페이스를 사용하라.")]),e._v(" "),v("p",[e._v("직접적 혹은 간접적 재정의 가능한 메서드는 호출하지 말자.")]),e._v(" "),v("h2",{attrs:{id:"item-89-인스턴스-수를-통제해야-한다면-readresolve-보다는-열거타입을-사용하라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-89-인스턴스-수를-통제해야-한다면-readresolve-보다는-열거타입을-사용하라","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 89 인스턴스 수를 통제해야 한다면 readResolve 보다는 열거타입을 사용하라")]),e._v(" "),v("p",[v("code",[e._v("readResolve")]),e._v(" 를 인스턴스 통제목적으로 사용한다면 객체 참조타입 인스턴스 필드는 모두 transient 로 선언해야 한다.")]),e._v(" "),v("p",[e._v("불변식을 지키기 위해 인스턴스를 통제해야 한다면 가능한 열거 타입을 사용하자.")]),e._v(" "),v("p",[e._v("여의치 않는 상황에서 직렬화와 인스턴스 통제가 모두 필요하다면 "),v("code",[e._v("readResolve")]),e._v(" 메서드를 작성해 넣어야 하고, 그 클래스에서 모든 참조 타입 인스턴스 필드를 "),v("code",[e._v("transient")]),e._v(" 로 선언해야 한다.")]),e._v(" "),v("h2",{attrs:{id:"item-90-직렬화된-인스턴스-대신-직렬화-프록시-사용을-검토하라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-90-직렬화된-인스턴스-대신-직렬화-프록시-사용을-검토하라","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 90 직렬화된 인스턴스 대신 직렬화 프록시 사용을 검토하라")]),e._v(" "),v("p",[e._v("제 3자가 확장할 수 없는 클래스라면 가능한 한 직렬화 프록시 패턴을 사용하자.")]),e._v(" "),v("p",[e._v("이 패턴이 아마도 중요한 불변식을 안정적으로 직렬화 해주는 가장 중요한 벙법이다.")])])},[],!1,null,null,null);t.default=a.exports}}]);