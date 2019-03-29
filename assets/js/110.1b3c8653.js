(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{377:function(a,e,r){"use strict";r.r(e);var t=r(1),v=Object(t.a)({},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"thread"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thread","aria-hidden":"true"}},[a._v("#")]),a._v(" THREAD")]),a._v(" "),r("h2",{attrs:{id:"process-thread-의-차이"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#process-thread-의-차이","aria-hidden":"true"}},[a._v("#")]),a._v(" Process & Thread 의 차이")]),a._v(" "),r("p",[a._v("프로세스와 스레드는 서로 밀접한 관계에 있으나 서로 다른 개체이다.")]),a._v(" "),r("h3",{attrs:{id:"process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#process","aria-hidden":"true"}},[a._v("#")]),a._v(" Process")]),a._v(" "),r("ul",[r("li",[a._v("실행중인 프로세스 객체")]),a._v(" "),r("li",[r("em",[r("strong",[a._v("CPU 시간이나 메모리 등의 시스템 자원이 할당되는 독립적인 개체")])])]),a._v(" "),r("li",[a._v("각 프로세스는 별도의 주소 공간에서 실행 되며, "),r("em",[r("strong",[a._v("한 프로세스는 다른 프로세스의 변수나 자료구조에 접근할 수 없음")])])]),a._v(" "),r("li",[a._v("같은 메모리를 읽고 쓰는 프로세스는 생성 가능")]),a._v(" "),r("li",[a._v("프로세스간의 통신은 Pipe, Socket, File 등으로 통신한다.")])]),a._v(" "),r("h3",{attrs:{id:"thread-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thread-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread")]),a._v(" "),r("ul",[r("li",[a._v("프로세스가 할당받은 자원을 이용하는 실행의 단위")]),a._v(" "),r("li",[a._v("프로세스와 같은 공간의 Stack 공간을 사용하며 여러 Thread 는 그 상태의 일부를 공유한다.")])]),a._v(" "),r("blockquote",[r("p",[r("em",[r("strong",[a._v("Multi Thread")])]),a._v(" 환경의 작업시에는 Therad 간의 자원 공유의 "),r("em",[r("strong",[a._v("동기화 문제")])]),a._v(" 에 신경을 써야 한다.")])]),a._v(" "),r("h2",{attrs:{id:"구조"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구조","aria-hidden":"true"}},[a._v("#")]),a._v(" 구조")]),a._v(" "),r("p",[a._v("@TODO")]),a._v(" "),r("h2",{attrs:{id:"생명주기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#생명주기","aria-hidden":"true"}},[a._v("#")]),a._v(" 생명주기")]),a._v(" "),r("p",[a._v("@TODO")]),a._v(" "),r("h2",{attrs:{id:"생성방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#생성방법","aria-hidden":"true"}},[a._v("#")]),a._v(" 생성방법")]),a._v(" "),r("p",[a._v("아래와 같이 크게 3가지 방법이 있다.")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("Thread")]),a._v(" 클래스를 확장 한다.")]),a._v(" "),r("li",[r("code",[a._v("Runnable")]),a._v(" 인터페이스를 구현")]),a._v(" "),r("li",[a._v("Thread Pool 을 생성하기 위해, 어플리케이션에서 "),r("code",[a._v("Executor")]),a._v(" 프레임워크를 사용한다.")])]),a._v(" "),r("blockquote",[r("p",[a._v("'Runnable' 인터페이스는 상속 객체를 필요로 하지 않기 때문에 인터페이스로 적절하다.")])]),a._v(" "),r("p",[a._v("이러한 방법들은 대부분 멀티스레드를 만들어 작업을 수행하는 과정으로"),r("br"),a._v(" "),r("router-link",{attrs:{to:"/book/03.-back-end/01.-java/02.-references/thread/multi_thread.html"}},[a._v("여기")]),a._v("서 자세한 방법들을 소개한다.")],1),a._v(" "),r("h2",{attrs:{id:"thread-상태"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thread-상태","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread 상태")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("NEW")]),a._v(" : Thread 가 실행 준비가 되었습니다.")]),a._v(" "),r("li",[r("code",[a._v("RUNNABLE")]),a._v(" : JVM (Java Virtual Machine) 이 Thread 코드를 수행중입니다.")]),a._v(" "),r("li",[r("code",[a._v("BLOCKED")]),a._v(" : Thread 가 차단되어 있는 상태 입니다.")]),a._v(" "),r("li",[r("code",[a._v("WAITING")]),a._v(" : Thread 다른 Thread 의 작업이 수행되기를 기다립니다.")]),a._v(" "),r("li",[r("code",[a._v("TIMED_WAITING")]),a._v(" : Thread 가 다른 Thread 의 지정된 대기시간의 특정 작업을 수행하기까지 기다립니다.")]),a._v(" "),r("li",[r("code",[a._v("TERMIATED")]),a._v(" : Thread 의 실행을 완료했습니다.")])])])},[],!1,null,null,null);e.default=v.exports}}]);