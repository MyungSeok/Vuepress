(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{357:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date","aria-hidden":"true"}},[t._v("#")]),t._v(" Date")]),t._v(" "),s("p",[t._v("Java 에서 날짜/시간을 표시하는 방법으로 주로 사용되나 이는 아래의 문제점을 가지고 있다.")]),t._v(" "),s("h2",{attrs:{id:"문제점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제점","aria-hidden":"true"}},[t._v("#")]),t._v(" 문제점")]),t._v(" "),s("p",[t._v("기존 자바에서 Calendar, Date 클래스는 여러 문제점을 가지고 있다")]),t._v(" "),s("p",[t._v("이는 "),s("a",{attrs:{href:"https://d2.naver.com/helloworld/645609",target:"_blank",rel:"noopener noreferrer"}},[t._v("Naver D2"),s("OutboundLink")],1),t._v(" 에서도 내용을 다루고 있다.")]),t._v(" "),s("p",[t._v("이를 요약하자면 다음과 같다.")]),t._v(" "),s("ul",[s("li",[t._v("불변 객체가 아니다.\n"),s("ul",[s("li",[s("code",[t._v("set")]),t._v(" 으로 변경 가능함")]),t._v(" "),s("li",[t._v("이는 악의적인 코드로 사용가능 하기 때문에 직접 Date 클래스에서 사용하는것은 위험하다.")])])]),t._v(" "),s("li",[t._v("상수 필드의 남용\n"),s("ul",[s("li",[s("code",[t._v("calendar.add(Calendar.SECOND, 2)")])])])]),t._v(" "),s("li",[t._v("혼란스러운 월 지정\n"),s("ul",[s("li",[t._v("1월을 "),s("code",[t._v("0")]),t._v("으로 표현")])])]),t._v(" "),s("li",[t._v("일관성 없는 요일 상수\n"),s("ul",[s("li",[t._v("일요일이 "),s("code",[t._v("0")]),t._v(" 혹은 "),s("code",[t._v("1")]),t._v(" 로 사용하는 객체에 따라 다르다.")])])]),t._v(" "),s("li",[s("code",[t._v("Date")]),t._v(" 와 "),s("code",[t._v("Calendar")]),t._v(" 객체의 역활분담\n"),s("ul",[s("li",[t._v("년/월/일 계산은 "),s("code",[t._v("Date")]),t._v(" 클래스만으로 부족")]),t._v(" "),s("li",[t._v("Calendar 객체를 생성하고 Date 객체를 생성하는 프로세스를 거치기 때문에 생성비용이 비싸다")])])]),t._v(" "),s("li",[s("code",[t._v("java.util.Date")]),t._v(" 의 하위 클래스 문제\n"),s("ul",[s("li",[t._v("오픈소스 라이브러리 "),s("code",[t._v("joda.time")]),t._v(" 사용을 추천")])])])]),t._v(" "),s("h3",{attrs:{id:"방어적-복사본"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#방어적-복사본","aria-hidden":"true"}},[t._v("#")]),t._v(" 방어적 복사본")]),t._v(" "),s("p",[t._v("Effective Java 3rd 에서는 "),s("em",[s("strong",[t._v("적시에 방어적 복사본을 만들라")])]),t._v(" 라고 명시되어 있으며 다음은 사용예를 보여준다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Period")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" after "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("이는 매개변수가 "),s("code",[t._v("Date")]),t._v(" 처럼 "),s("em",[s("strong",[t._v("제 3자에 의해 확장될수 있는 타입이라면 방어적 복사본을 만들때 "),s("code",[t._v("clone()")]),t._v(" 메서드를 사용해서는 안된다.")])])]),t._v(" "),s("h2",{attrs:{id:"localdate-localtime-localdatetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localdate-localtime-localdatetime","aria-hidden":"true"}},[t._v("#")]),t._v(" LocalDate, LocalTime, LocalDateTime "),s("Badge",{attrs:{text:"Java SE 1.8+"}})],1),t._v(" "),s("p",[t._v("이러한 문제를 사용하기 위해 Java SE 8 에서는 LocalDate, LocalTime, LocalDateTime 이라는 클래스를 만들었다.")]),t._v(" "),s("h3",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법","aria-hidden":"true"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 현재 날짜 정보")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),t._v(" currentDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 년/월/일")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),t._v(" myDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" dateOfMonth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 현재 시각을 문자열로 변환")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatetimeFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofPattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd HH:mm:ss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문자열을 LocalDateTime 으로 변환")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-11 10:15:30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatetimeFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofPattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd HH:mm:ss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jeong-pro.tistory.com/163",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jeong-pro.tistory.com/163"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://d2.naver.com/helloworld/645609",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d2.naver.com/helloworld/645609"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);