(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{228:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[t._v("#")]),t._v(" Gradle")]),t._v(" "),a("h2",{attrs:{id:"개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),a("p",[t._v("기존 Ant / Maven 과 유사하지만 진화된 빌드 툴로써 빌드, 테스트, 배포, 개발 등의 자동화를 실행할 수 있다.")]),t._v(" "),a("p",[t._v("Ant 빌드는 유연성이 뛰어난 빌드 툴로서 개발자가 자유롭게 빌드단위 (target) 을 지정하고 빌드 단위간의 의존관계를 자유롭게 설정할 수 있다는 것이다."),a("br"),t._v("\n자유도가 높다는것은 좋은 도구이지만 제대로 쓰지 못하면 애물단지나 다름없다.")]),t._v(" "),a("p",[t._v("Maven 의 가장 큰 장점은 "),a("em",[a("strong",[t._v("Convention Over Configuration")])]),t._v(" 의 전략에 따라 관례로 정해져 있다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Convention Over Configuration ?")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.lesstif.com/pages/viewpage.action?pageId=28607056",target:"_blank",rel:"noopener noreferrer"}},[t._v("Convention Over Configuration(CoC)"),a("OutboundLink")],1),t._v("는 설정 보다는 관례라고도 하며 소프트웨어 개발자가 정해야 하는 수많은 결정들을 줄여주고"),a("br"),t._v("\n단순성을 확보하면서 유연함을 잃지 않게 하기 위한 설계 패러다임이다.")]),t._v(" "),a("p",[t._v("프레임워크가 복잡하고 방대해 짐에 따라 복잡한 수많은 설정 파일과 세팅에 대한 부담이 늘어났고"),a("br"),t._v("\nCoC 는 이를 해결해주기 위해 자주 사용되는 부분들은 관례를 정하여 생략하고 이를 따르지 않는 경우에만 설정을 하도록 하고 있다.")]),t._v(" "),a("p",[t._v("CoC 패러다임을 적용하면 상대적으로 자유도가 떨어진다는 의견이 있지만"),a("br"),t._v("\n팀으로 일하게 되는 특성상 표준화와 규격화가 정해지지 않는다면"),a("br"),t._v("\n공유와 협업이 힘들어지기 때문에 이 CoC 패러다임을 적용하는 사례도 늘고 있다.")])]),t._v(" "),a("h2",{attrs:{id:"특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),a("ul",[a("li",[t._v("Groovy 기반의 DSL (Domain Specific Language) 채용")]),t._v(" "),a("li",[t._v("의존성 기반 프로그래밍을 위한 언어")]),t._v(" "),a("li",[t._v("빌드의 구조화")]),t._v(" "),a("li",[t._v("API 제공")]),t._v(" "),a("li",[t._v("Multi Project 빌드")]),t._v(" "),a("li",[t._v("의존성 관리의 다양한 방법 제공")]),t._v(" "),a("li",[t._v("Migration 의 편의성")]),t._v(" "),a("li",[t._v("Build Script 는 Groovy 로 작성")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.slideshare.net/sup2rior/gradle-guide-v-01-31412469",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle Guide - Slidershare"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용"}},[t._v("#")]),t._v(" 사용")]),t._v(" "),a("h3",{attrs:{id:"gradle-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-설치"}},[t._v("#")]),t._v(" Gradle 설치")]),t._v(" "),a("h4",{attrs:{id:"mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[t._v("#")]),t._v(" Mac")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# brew gradle")]),t._v("\n")])])]),a("h4",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 저장소 추가")]),t._v("\n$ add-apt-repository ppa:cwchien/gradle\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apt-get 업데이트")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gradle 설치")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gradle\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zetawiki.com/wiki/%EC%9A%B0%EB%B6%84%ED%88%AC_Gradle_%EC%B5%9C%EC%8B%A0%EB%B2%84%EC%A0%84_%EC%84%A4%EC%B9%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zetawiki.com/wiki/우분투_Gradle_최신버전_설치"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"gradle-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-빌드"}},[t._v("#")]),t._v(" Gradle 빌드")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gradle build")]),t._v("\n")])])]),a("h3",{attrs:{id:"gradle-build-시에-실행가능한-jar-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-build-시에-실행가능한-jar-만들기"}},[t._v("#")]),t._v(" Gradle Build 시에 실행가능한 jar 만들기")]),t._v(" "),a("p",[t._v("manifest 파일을 생성하여 등록 해야 한다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://theeye.pe.kr/archives/2075",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://theeye.pe.kr/archives/2075"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"gradle-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-task"}},[t._v("#")]),t._v(" Gradle Task")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://kwonnam.pe.kr/wiki/gradle/task",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kwonnam.pe.kr/wiki/gradle/task"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"gradle-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-dependencies"}},[t._v("#")]),t._v(" Gradle Dependencies")]),t._v(" "),a("p",[a("code",[t._v("api")]),t._v(" (:=="),a("code",[t._v("compile")]),t._v(") 와 "),a("code",[t._v("implementation")]),t._v(" 의존성 차이가 크다")]),t._v(" "),a("p",[t._v("@flowstart\nstage1=>operation: A\nstage2=>operation: B\nstage3=>operation: C")]),t._v(" "),a("p",[t._v("stage1(right)->stage2(right)->stage3\n@flowend")]),t._v(" "),a("p",[a("code",[t._v("api")]),t._v(" 는 빌드후에 외부에 필요한 "),a("strong",[t._v("의존성을 노출")]),t._v("하고")]),t._v(" "),a("p",[a("code",[t._v("implementation")]),t._v(" 은 빌드 후에도 "),a("strong",[t._v("외부에 의존성이 노출되지 않도록")]),t._v(" 한다.")]),t._v(" "),a("p",[t._v("이는 의존성 노출이 되는 점의 차이도 있겠지만 아래와 의존도에 따른 같이 빌드 차이점도 존재한다.")]),t._v(" "),a("p",[a("code",[t._v("api")]),t._v(" 는 "),a("code",[t._v("C")]),t._v(" 가 수정시에 해당 라이브러리를 의존하고 있는 "),a("code",[t._v("B")]),t._v(" "),a("code",[t._v("A")]),t._v(" 모두 재 빌드 한다.")]),t._v(" "),a("p",[a("code",[t._v("implementation")]),t._v(" 은 "),a("code",[t._v("C")]),t._v(" 가 수정시에 해당 라이브러리를 직접적으로 의존하고 있는 "),a("code",[t._v("B")]),t._v(" 만 재 빌드 한다.")]),t._v(" "),a("h4",{attrs:{id:"java-library-plugin-의존성-선언-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-library-plugin-의존성-선언-설정"}},[t._v("#")]),t._v(" Java Library plugin - 의존성 선언 설정")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("설정명")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Role")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Consumable")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Resolvable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("api")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("API 의존성 선언")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("컴파일을 위해서 필요한 의존성을 선언한다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("implementation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("구현화 의존성 선언")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("외부에 노출되지 않도록 의존성을 설정한다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("compileOnly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("runtimeOnly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("testImplementation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("testCompileOnly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("testRuntimeOnly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_separation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_separation"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://jongmin92.github.io/2019/05/09/Gradle/gradle-api-vs-implementation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jongmin92.github.io/2019/05/09/Gradle/gradle-api-vs-implementation/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);