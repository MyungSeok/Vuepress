(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{322:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"aop-aspect-oriented-programming-관점-지향-프로그래밍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aop-aspect-oriented-programming-관점-지향-프로그래밍","aria-hidden":"true"}},[t._v("#")]),t._v(" AOP (Aspect Oriented Programming : 관점 지향 프로그래밍)")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("어플리케이션 전체에 사용되는 기능을 재사용 하도록 지원")])]),t._v(" 하도록 도와주는 것")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("관심의 분리 (Seperation of Concerns) 를 통하여 핵심 관심 사항 (입금, 출금, 이체) 에 집중")])]),t._v(" 하는것이다.")]),t._v(" "),n("p",[t._v("기능을 핵식 비지니스 로직과 공통 모듈로 분리하고, 핵심 로직에 영향을 미치지 않고 사이사이에 공통 모듈을 효과적으로 잘 끼워 넣도록 코드밖에서 설정된다는 것이 핵심이다.")]),t._v(" "),n("p",[t._v("프로그램 파악이 힘들기 때문에 AOP 의 사용이 많을 경우에는 유지보수의 관리적인 측면이 어려움이 많다.")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/A009.png",alt:"AOP 횡단분리"}})]),t._v(" "),n("h2",{attrs:{id:"장점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#장점","aria-hidden":"true"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),n("ul",[n("li",[t._v("중복되는 코드 제거")]),t._v(" "),n("li",[t._v("효율적인 유지보수")]),t._v(" "),n("li",[t._v("높은 생산성")]),t._v(" "),n("li",[t._v("재활용성 극대화")]),t._v(" "),n("li",[t._v("유연한 변화 수용")])]),t._v(" "),n("h2",{attrs:{id:"사용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#사용","aria-hidden":"true"}},[t._v("#")]),t._v(" 사용")]),t._v(" "),n("p",[t._v("다음은 사용 방법을 알아보자 (Spring Boot 기준)")]),t._v(" "),n("h3",{attrs:{id:"주요개념"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#주요개념","aria-hidden":"true"}},[t._v("#")]),t._v(" 주요개념")]),t._v(" "),n("ul",[n("li",[t._v("Aspect\n"),n("ul",[n("li",[t._v("여러 객체에 공통으로 적용되는 횡단 관심 모듈을 정의")])])]),t._v(" "),n("li",[t._v("Joinpoint\n"),n("ul",[n("li",[t._v("Advice 를 적용 가능한 지점으로 Method 를 호출")]),t._v(" "),n("li",[t._v("필드 값 변경이 해당")]),t._v(" "),n("li",[t._v("Spring 에서는 Method 호출만 지원")])])]),t._v(" "),n("li",[t._v("Interceptor\n"),n("ul",[n("li",[t._v("Interceptor Chain 방식의 AOP 툴에서 사용되는 용어로서 주로 한개의 호출 Method 를 가지는 Advice")])])]),t._v(" "),n("li",[t._v("Advice\n"),n("ul",[n("li",[t._v("언제, 어떤 공통 관심 기능을 핵심 관심 모듈에 적용할 지를 정의")])])]),t._v(" "),n("li",[t._v("Weaving\n"),n("ul",[n("li",[t._v("Advice 를 핵심 관심 모듈에 적용하는 것을 정의")])])]),t._v(" "),n("li",[t._v("Pointcut\n"),n("ul",[n("li",[t._v("횡단 관심 모듈이 적용될 메소드를 선정하는 방법으로 스프링에서는 정규 표현식이나 Aspect J 문법을 통해 정의")])])])]),t._v(" "),n("h3",{attrs:{id:"advice-의-종류"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advice-의-종류","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("Advice")]),t._v(" 의 종류")]),t._v(" "),n("ul",[n("li",[t._v("Before\n"),n("ul",[n("li",[t._v("대상 객체의 Method 호출 전 실행")])])]),t._v(" "),n("li",[t._v("After Returning\n"),n("ul",[n("li",[t._v("대상 객체가 "),n("code",[t._v("Exception")]),t._v(" 없이 정상적으로 실행된 후 실행")])])]),t._v(" "),n("li",[t._v("After Throwing\n"),n("ul",[n("li",[t._v("대상 객체의 "),n("code",[t._v("Exception")]),t._v(" 과 상관없이 실행")]),t._v(" "),n("li",[n("code",[t._v("finally")]),t._v(" 의 기능과 비슷함")])])]),t._v(" "),n("li",[t._v("Around\n"),n("ul",[n("li",[t._v("대상 객체의 메서드 호출 전, 후 또는 "),n("code",[t._v("Exception")]),t._v(" 발생 시점에 실행")])])])]),t._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("square"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("advice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProceedingJoinPoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("After")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aspect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Aspect")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerAdvice")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerAdvice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logger Advice Before"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@After")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logger Advice After"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pointcut"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returning"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessAfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Returning is "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logger Advice AfterReturning"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logServiceAccessPointcut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice Before"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@After")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logServiceAccessPointcut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice After"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logServiceAccessPointcut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returning"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutAfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Returning is "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice AfterReturning"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutAround")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProceedingJoinPoint")]),t._v(" processedJoinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice Around Before"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" processedJoinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("proceed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice Around After"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("AOP 적용 대상 페이지를 호출하면 다음과 같이 로그가 남는다.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice Around Before\nLogger Advice Before\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice Before\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice Around After\nLogger Advice After\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 컨트롤러 로직 처리")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice After\nReturning is index\nLogger Advice AfterReturning\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Returning is index\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice AfterReturning\n")])])]),n("blockquote",[n("h3",{attrs:{id:"참고자료"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#참고자료","aria-hidden":"true"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://heowc.github.io/2018/02/07/spring-boot-aop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://heowc.github.io/2018/02/07/spring-boot-aop/"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"http://jyh1536.tistory.com/66",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jyh1536.tistory.com/66"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"http://addio3305.tistory.com/86",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://addio3305.tistory.com/86"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://jojoldu.tistory.com/27",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jojoldu.tistory.com/27"),n("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);