(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{402:function(t,e,s){"use strict";s.r(e);var n=s(1),o=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),s("p",[t._v("자바스크립트는 단일 스레드 (Single Thread) 기반이기 때문에 이벤트 루프를 사용하여 작업을 스케쥴링 한다.")]),t._v(" "),s("p",[t._v("이것은 시간에 흐름에 따라 코드의 수행을 처리하며 그때마다 "),s("em",[s("strong",[t._v("JS Engine")])]),t._v(" 을 실행하며 아래 그림과 같은 구조적 특성을 띈다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A031.png",alt:"JS Engine"}})]),t._v(" "),s("p",[t._v("이에 따른 이벤트 루프는 단 한가지의 임무만 가지고 있는데 "),s("code",[t._v("Call Stack")]),t._v(" 와 "),s("code",[t._v("Callback Queue")]),t._v(" 을 감시하는 것 이다.\n만약 콜스택이 비어 있으면 이벤트 루프에서는 큐에서 첫번째 이벤트를 가져다가 "),s("code",[t._v("Call Stack")]),t._v(" 에 밀어넣는것이며 결과적으로 해당 이벤트가 실행되는 것이다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A032.png",alt:"이벤트 루프"}})]),t._v(" "),s("p",[t._v("대표적인 예로 "),s("code",[t._v("setTimeout")]),t._v(" 동작이 있다.")]),t._v(" "),s("p",[s("code",[t._v("setTimeout")]),t._v(" 이 자동으로 콜백을 이벤트 루프 큐 안에 넣어주지는 않는다. "),s("code",[t._v("setTimeout")]),t._v(" 은 타이머를 설정하며 타이머가 만료되면 호스팅 환경이 콜백을 이벤트 루프에 위치시켜 미래의 "),s("em",[s("strong",[t._v("Tick")])]),t._v(" 이 이를 가져다 수행할 수 있도록 한다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Callback Func'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("즉 위에 코드는 "),s("code",[t._v("setTimeout")]),t._v(" 은 1,000ms 후에 실행이 아닌 1,000ms 이후에 "),s("code",[t._v("Callback Queue")]),t._v(" 에 추가되는 것이다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A033.gif",alt:"이벤트 루프"}})]),t._v(" "),s("ol",[s("li",[t._v("콜스택, 콜백큐 등의 모든것이 비워져있다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('Hi')")]),t._v(" 가 콜스택에 추가되었다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('Hi')")]),t._v(" 가 실행된다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('Hi')")]),t._v(" 가 콜 스택에서 제거되었다.")]),t._v(" "),s("li",[s("code",[t._v("setTimeout(function cb1() {...})")]),t._v(" 가 콜스택에 추가되었다.")]),t._v(" "),s("li",[s("code",[t._v("setTimeout(function cb1() {...})")]),t._v(" 이 실행되면서 브라우저가 웹 API 의 일환인 타이머를 생성한다."),s("br"),t._v("\n이 타이머는 카운트 다운을 처리한다.")]),t._v(" "),s("li",[s("code",[t._v("setTimeout(function cb1() {...})")]),t._v(" 가 실행이 완료되고 콜스택에서 제거된다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('Bye')")]),t._v(" 가 콜스택에 추가되었다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('Bye')")]),t._v(" 이 실행되었다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('Bye')")]),t._v(" 가 콜스택에서 제거되었다.")]),t._v(" "),s("li",[t._v("타이머가 완료되면 "),s("code",[t._v("cb1")]),t._v(" 을 콜백큐에 밀어 넣는다.")]),t._v(" "),s("li",[t._v("이벤트 루프가 "),s("code",[t._v("cb1")]),t._v(" 을 콜백큐에서 가져다 콜스택에 밀어 넣는다.")]),t._v(" "),s("li",[s("code",[t._v("cb1")]),t._v(" 이 실행되고 "),s("code",[t._v("console.log('cb1')")]),t._v(" 이 콜스택에 추가된다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('cb1')")]),t._v(" 이 실행된다.")]),t._v(" "),s("li",[s("code",[t._v("console.log('cb1')")]),t._v(" 이 콜 스택에서 제거된다.")]),t._v(" "),s("li",[t._v("'cb1` 이 콜스택에서 제거된다.")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%98-%EB%B6%80%EC%83%81-async-await%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%BD%94%EB%94%A9-%ED%8C%81-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-df65ffb4e7e",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://engineering.huiseoul.com/자바스크립트는-어떻게-작동하는가-이벤트-루프와-비동기-프로그래밍의-부상-async-await을-이용한-코딩-팁-다섯-가지-df65ffb4e7e"),s("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=o.exports}}]);