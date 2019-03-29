(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{300:function(e,t,a){"use strict";a.r(t);var r=a(1),i=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),a("h2",{attrs:{id:"http-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-header","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP Header")]),e._v(" "),a("h3",{attrs:{id:"request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Request Header")]),e._v(" "),a("p",[e._v("클라이언트 브라우저에서 HTTP 프로토콜을 이용하여 "),a("em",[a("strong",[e._v("요청 정보를 웹 서버로 전송할 때")])]),e._v(" HTTP 요청 헤더에 부가적인 정보를 담아 전송한다.")]),e._v(" "),a("ul",[a("li",[e._v("Accept\n"),a("ul",[a("li",[e._v("클라이언트가 처리하는 미디어 타입")])])]),e._v(" "),a("li",[e._v("Accept-encoding\n"),a("ul",[a("li",[e._v("클라이언트가 해석할 수 있는 인코딩 방식")])])]),e._v(" "),a("li",[e._v("Accept-language\n"),a("ul",[a("li",[e._v("클라이언트가 지원하는 언어")])])]),e._v(" "),a("li",[e._v("Connection\n"),a("ul",[a("li",[e._v("클라이언트와 서버의 연결 방식\n"),a("ul",[a("li",[e._v("keep-alive : 클라이언트와 접속 유지")]),e._v(" "),a("li",[e._v("close : 클라이언트와 접속 중단")])])])])]),e._v(" "),a("li",[e._v("Host\n"),a("ul",[a("li",[e._v("호스트 이름 URI 와 PORT 번호 정보")])])]),e._v(" "),a("li",[e._v("User-agent\n"),a("ul",[a("li",[e._v("클라이언트 브라우저 정보")])])])]),e._v(" "),a("h3",{attrs:{id:"response-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Response Header")]),e._v(" "),a("p",[e._v("서버가 HTTP 프로토콜을 이용하여 클라이언트의 요청에 대해 응답할 때 부가적인 정보를 응답 헤더에 담아 전송한다.")]),e._v(" "),a("ul",[a("li",[e._v("Connection\n"),a("ul",[a("li",[e._v("클라이언트와 서버의 연결 방식 설정\n"),a("ul",[a("li",[e._v("keep-alive : 클라이언트와 접속 유지")]),e._v(" "),a("li",[e._v("close : 클라이언트와 접속 중단")])])])])]),e._v(" "),a("li",[e._v("Content-Length\n"),a("ul",[a("li",[e._v("요청한 파일의 데이터 길이")])])]),e._v(" "),a("li",[e._v("Content-Type\n"),a("ul",[a("li",[e._v("헤더 응답 문서의 mime 타입")])])]),e._v(" "),a("li",[e._v("Date\n"),a("ul",[a("li",[e._v("현재 일시를 GMT 형식으로 지정")])])]),e._v(" "),a("li",[e._v("Server\n"),a("ul",[a("li",[e._v("웹 서버 정보")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("CORS 관련으로 "),a("em",[e._v("**Access-Control-Allow-Origin: ***")]),e._v(" 으로 설정되면 도메인 구분없이 XHR 호출이 가능해진다.")])]),e._v(" "),a("h2",{attrs:{id:"keep-alive-관련"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-관련","aria-hidden":"true"}},[e._v("#")]),e._v(" Keep-alive 관련")]),e._v(" "),a("ul",[a("li",[a("em",[a("strong",[e._v("디바이스 간의 커넥션을 유지하는 기법")])]),e._v(" 으로 TCP 와 HTTP 가 전혀 다르다.\n"),a("ul",[a("li",[a("em",[a("strong",[e._v("TCP 는 OS가 제어")])]),e._v(" 하고, "),a("em",[a("strong",[e._v("HTTP 는 웹 서버가 제어")])]),e._v(" 한다.")])])]),e._v(" "),a("li",[e._v("HTTP 1.1 이상에서 지원되는 스팩으로 "),a("em",[a("strong",[e._v("헤더에 설정")])]),e._v(" 하면 된다.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("max 요청수")])]),e._v(" 와 "),a("em",[a("strong",[e._v("유효시간(timeout)")])]),e._v(" 으로 구성된다.")])]),e._v(" "),a("h2",{attrs:{id:"timeout-종류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeout-종류","aria-hidden":"true"}},[e._v("#")]),e._v(" Timeout 종류")]),e._v(" "),a("h3",{attrs:{id:"connection-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-timeout","aria-hidden":"true"}},[e._v("#")]),e._v(" Connection Timeout")]),e._v(" "),a("p",[e._v("Connection 을 구성하는데 소요되는 시간")]),e._v(" "),a("h4",{attrs:{id:"read-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-timeout","aria-hidden":"true"}},[e._v("#")]),e._v(" Read Timeout")]),e._v(" "),a("p",[e._v("Server 에서 데이터를 완전히 받을때 까지 걸리는 시간")]),e._v(" "),a("h2",{attrs:{id:"mime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime","aria-hidden":"true"}},[e._v("#")]),e._v(" MIME")]),e._v(" "),a("p",[e._v("서버가 클라이언트에게 전송되는 문서에 대한 유형을 지칭하는 타입")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax","aria-hidden":"true"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[e._v("[파일의종류]/[파일타입]\n")])])]),a("h4",{attrs:{id:"type-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Type List")]),e._v(" "),a("ul",[a("li",[e._v("text\n"),a("ul",[a("li",[e._v("텍스트 파일")]),e._v(" "),a("li",[e._v("text/plain, text/html, text/css, text/javascript")])])]),e._v(" "),a("li",[e._v("multipart\n"),a("ul",[a("li",[e._v("이미지 파일 (비디오 제외)")]),e._v(" "),a("li",[e._v("audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav")])])]),e._v(" "),a("li",[e._v("audio\n"),a("ul",[a("li",[e._v("오디오 파일")]),e._v(" "),a("li",[e._v("audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav")])])]),e._v(" "),a("li",[e._v("video\n"),a("ul",[a("li",[e._v("비디오 파일")]),e._v(" "),a("li",[e._v("video/webm, video/ogg")])])]),e._v(" "),a("li",[e._v("application\n"),a("ul",[a("li",[e._v("모든 바이너리 타입")]),e._v(" "),a("li",[e._v("application/octet-stream, application/pkcs12, application/vnd.mspowerpoint, application/xhtml+xml, application/xml,  application/pdf")])])])]),e._v(" "),a("h2",{attrs:{id:"cookie-session-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-cache","aria-hidden":"true"}},[e._v("#")]),e._v(" Cookie & Session & Cache")]),e._v(" "),a("p",[e._v("HTTP 프로토콜의 상태 유지를 하기 위해 Server 가 Client 를 식별할 수 있도록 사용하는 방식")]),e._v(" "),a("h3",{attrs:{id:"공통점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공통점","aria-hidden":"true"}},[e._v("#")]),e._v(" 공통점")]),e._v(" "),a("p",[e._v("사용자에게 빠르게 서비스를 전달하기 위해 데이터를 저장해서 사용한다.")]),e._v(" "),a("h3",{attrs:{id:"차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#차이점","aria-hidden":"true"}},[e._v("#")]),e._v(" 차이점")]),e._v(" "),a("h4",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),a("p",[e._v("클라이언트에 저장되는 키와 값이 들어있는 작은 데이터 파일 (하나당 4KB 이하)")]),e._v(" "),a("p",[e._v("이름, 값, 만료날짜 (쿠키의 저장시간), 경로정보 등이 포함되어 있으며 반드시 자료형은 String 으로 구성된다.")]),e._v(" "),a("p",[e._v("사용자가 임의로 쿠키 데이터를 저장, 수정, 삭제할 수 있다.")]),e._v(" "),a("p",[e._v("사용자가 브라우저 설정으로 쿠키의 사용유무를 설정할 수 있다.")]),e._v(" "),a("blockquote",[a("p",[e._v("HTTP 전송시에 요청 헤더에 쿠키 값이 들어 있어 쿠키의 자료량 (데이터 사이즈) 이 큰 경우"),a("br"),e._v(" "),a("em",[a("strong",[e._v("오버헤드로 인한 웹서버 에러가 발생")])]),e._v(" 할 수 있다.")])]),e._v(" "),a("h4",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[e._v("#")]),e._v(" Session")]),e._v(" "),a("p",[e._v("서버에서 사용하는 클라이언트 인증 정보이다.")]),e._v(" "),a("p",[e._v("서버는 접속 클라이언트 별로 세션을 생성해서 세션의 해당하는 쿠키 (Session ID) 를 클라이언트에게 생성하게 하고 이 클라이언트는 서버에 접속할 때마다 해당 쿠키의 값 (Session ID) 을 서버에 전송하여 세션을 유지하게 한다.")]),e._v(" "),a("p",[e._v("브라우저의 설정에 관계없이 동작하며, 세선 졍보로 Java 객체를 저장할 수 있다.")]),e._v(" "),a("h4",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache","aria-hidden":"true"}},[e._v("#")]),e._v(" Cache")]),e._v(" "),a("p",[e._v("정적 자원들을 안정적으로 서비스하기 위해 데이터를 미리 저장해두고 제공하는 방식")]),e._v(" "),a("p",[e._v("프록시 (Proxy) 서버에서 제공")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://blog.kurien.co.kr/544",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.kurien.co.kr/544"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"http://brownbears.tistory.com/34",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://brownbears.tistory.com/34"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"http://asfirstalways.tistory.com/68",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://asfirstalways.tistory.com/68"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"sendredirect-forward-의-차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendredirect-forward-의-차이점","aria-hidden":"true"}},[e._v("#")]),e._v(" sendRedirect & forward 의 차이점")]),e._v(" "),a("h3",{attrs:{id:"sendredirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendredirect","aria-hidden":"true"}},[e._v("#")]),e._v(" sendRedirect")]),e._v(" "),a("p",[e._v("새로운 요청을 작성하여 넘긴다."),a("br"),e._v(" "),a("code",[e._v("forward")]),e._v(" 에 비해 느리다.")]),e._v(" "),a("h3",{attrs:{id:"forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward","aria-hidden":"true"}},[e._v("#")]),e._v(" forward")]),e._v(" "),a("p",[e._v("요청 대상을 새로운 대상으로 전달한다."),a("br"),e._v(" "),a("code",[e._v("sendRedirect")]),e._v(" 에 비해 빠르다.")]),e._v(" "),a("h2",{attrs:{id:"servlet-life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servlet-life-cycle","aria-hidden":"true"}},[e._v("#")]),e._v(" Servlet Life Cycle")]),e._v(" "),a("ol",[a("li",[e._v("Client 의 Request 에 따라 Servlet Engine 이 Servlet 을 로드한다.")]),e._v(" "),a("li",[e._v("로드된 Servlet 을 초기화 하기 위해 Servlet 의 "),a("code",[e._v("init method")]),e._v(" 를 호출한다.")]),e._v(" "),a("li",[e._v("Servlet 객체는 각 Request 에 따른 처리를 한다.")]),e._v(" "),a("li",[e._v("최종적으로는 "),a("code",[e._v("distroy method")]),e._v(" 를 호출하여 Servlet 을 제거한다.")])]),e._v(" "),a("h2",{attrs:{id:"http-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-method","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP METHOD")]),e._v(" "),a("ul",[a("li",[e._v("GET\n"),a("ul",[a("li",[e._v("URL로 파일 및 자원등을 가져올 수 있도록 요청")])])]),e._v(" "),a("li",[e._v("POST\n"),a("ul",[a("li",[e._v("Request 로 전달된 데이터를 기반으로 서버에 요청")]),e._v(" "),a("li",[e._v("수행의 목적이 강함")])])]),e._v(" "),a("li",[e._v("DELETE\n"),a("ul",[a("li",[e._v("데이터 삭제의 요청")])])]),e._v(" "),a("li",[e._v("PUT\n"),a("ul",[a("li",[e._v("Request 로 전달되는 데이터를 기반으로 서버에 요청")]),e._v(" "),a("li",[e._v("기준 데이터가 없을때는 생성, 있을때는 수정")])])]),e._v(" "),a("li",[e._v("PATCH\n"),a("ul",[a("li",[e._v("변경된 데이터만 전달하여 업데이트를 요청함")])])])]),e._v(" "),a("h2",{attrs:{id:"network-handshaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-handshaking","aria-hidden":"true"}},[e._v("#")]),e._v(" Network Handshaking")]),e._v(" "),a("ul",[a("li",[e._v("ARC (Acknowledgement) : 송신된 메세지가 정상적으로 수신 되었음을 송신측으로 응답하는 것")]),e._v(" "),a("li",[e._v("SYN (Synchronize) : 연결시작 및 회선의 개선 용도로 사용")]),e._v(" "),a("li",[e._v("FIN (Finish) : 연결해제 및 회선 종결의 용도로 사용")])]),e._v(" "),a("h3",{attrs:{id:"연결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#연결","aria-hidden":"true"}},[e._v("#")]),e._v(" 연결")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A053.png",alt:"3Way 연결"}})]),e._v(" "),a("h3",{attrs:{id:"해제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해제","aria-hidden":"true"}},[e._v("#")]),e._v(" 해제")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A054.png",alt:"3Way 연결"}})])])},[],!1,null,null,null);t.default=i.exports}}]);