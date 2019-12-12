(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{287:function(e,_,t){"use strict";t.r(_);var r=t(1),v=Object(r.a)({},function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),t("h2",{attrs:{id:"html-랜더링-순서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-랜더링-순서","aria-hidden":"true"}},[e._v("#")]),e._v(" HTML 랜더링 순서")]),e._v(" "),t("p",[e._v("HTML 속도 개선을 위해서는 기본적인 먼저 랜더링 순서를 파악하고 이를 개선해야 한다.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A059.png",alt:"HTML 랜더링 순서"}})]),e._v(" "),t("ol",[t("li",[e._v("사용자가 브라우저에 URL을 입력하거나 이동을 한다.")]),e._v(" "),t("li",[e._v("브라우저 인터페이스 엔진에서 해당 작업을 분석 한다.")]),e._v(" "),t("li",[e._v("페이지 이동이 확인되면 해당 서버에 정보를 요청 한다.\n"),t("ol",[t("li",[e._v("도메인의 경우 "),t("code",[e._v("DNS Lookup")]),e._v(" 을 통하여 서버 IP 경로를 얻어온다.")]),e._v(" "),t("li",[e._v("얻어온 서버 경로로 필요한 경로 정보를 요청 한다. (3 Way Handshake)")]),e._v(" "),t("li",[e._v("HTTP 요청 응답이 MIME 타입을 확인하여 해당 자원을 다운로드 한다.")])])]),e._v(" "),t("li",[e._v("다운로드 된 HTML 및 CSS 문서를 해석하는 과정을 거친다\n"),t("ol",[t("li",[e._v("HTML 을 해석하여 DOM Tree 구성을 한다.")]),e._v(" "),t("li",[e._v("CSS 를 해석하여 "),t("code",[e._v("CSSOM")]),e._v(" (Cascading Style Sheets Object Model) 을 구성한다.")]),e._v(" "),t("li",[e._v("위 두 구성이 모두 완료 하여야만 다음 진행이 가능하다. (CSS : 랜더링 블록킹 요소)")]),e._v(" "),t("li",[e._v("이후 자바스크립트 태그 혹은 구문을 만나면 약속된 프로세스 (비차단 스크립트) 대로 진행 한다.")])])]),e._v(" "),t("li",[t("code",[e._v("DOM Tree")]),e._v(" & "),t("code",[e._v("CSSOM")]),e._v(" 이 완료 되면 "),t("code",[e._v("Render Tree")]),e._v(" 구성을 진행한다.\n"),t("ol",[t("li",[e._v("CSS 규칙중 "),t("code",[e._v("{display:none}")]),e._v(" 을 만나면 "),t("code",[e._v("Render Tree")]),e._v(" 구성에서는 빠진다. ("),t("code",[e._v("DOM Tree")]),e._v(" 에는 존재)")])])]),e._v(" "),t("li",[t("code",[e._v("Render Tree")]),e._v(" 구성이 완료되면 "),t("code",[e._v("Reflow")]),e._v(" 작업을 통하여 필요한 레이아웃을 화면에 배치한다.")]),e._v(" "),t("li",[t("code",[e._v("Reflow")]),e._v(" 작업이 완료 되면 "),t("code",[e._v("Repaint")]),e._v(" 과정을 통하여 화면에 배치한 레이아웃을 그린다.")])]),e._v(" "),t("h2",{attrs:{id:"html-랜더링-속도-개선-방안"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-랜더링-속도-개선-방안","aria-hidden":"true"}},[e._v("#")]),e._v(" HTML 랜더링 속도 개선 방안")]),e._v(" "),t("p",[e._v("HTML 랜더링 속도를 올리는 방법에는 다음과 같은 방법이 있다.")]),e._v(" "),t("h3",{attrs:{id:"http-request-최소화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-request-최소화","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP Request 최소화")]),e._v(" "),t("p",[e._v("서버에 자원의 요청을 최소화 하는 방법으로 네트워크 레이턴시를 줄여 성능을 개선한다.")]),e._v(" "),t("h3",{attrs:{id:"resource-압축"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-압축","aria-hidden":"true"}},[e._v("#")]),e._v(" Resource 압축")]),e._v(" "),t("p",[e._v("정적 리소스 (HTML, JS, CSS) 의 소스를 압축 (manifest) 하여 제공하는데"),t("br"),e._v("\nJS, CSS 는 "),t("em",[t("strong",[e._v("모듈 번들러")])]),e._v(" (webpack, manifest ... ) 를 통하여 제공하고"),t("br"),e._v("\nHTML 은 "),t("em",[t("strong",[e._v("gzip")])]),e._v(" 전송을 한다.")]),e._v(" "),t("h3",{attrs:{id:"reflow-repaint-최소화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflow-repaint-최소화","aria-hidden":"true"}},[e._v("#")]),e._v(" Reflow, Repaint 최소화")]),e._v(" "),t("p",[e._v("추가적으로 브라우저에서 Reflow 를 일으킬만한 요소들을 최소화 하기 위하여 다음 가이드라인을 참고한다.")]),e._v(" "),t("p",[e._v("사용자의 브라우저 별로 리플루우 (Reflow) 가 걸리는 시간도 상이 하지만 대부분의 리플로우를 일으키는 조건은 동일하여 아래의 가이드라인을 통하여 충분히 개선이 가능하다.")]),e._v(" "),t("ul",[t("li",[e._v("불필요한 DOM Depth를 줄인다.\n"),t("ul",[t("li",[e._v("DOM Tree 의 Depth 하나를 변경하면 트리의 모든 Depth 에 따라 더 많은 시간이 소요된다.")]),e._v(" "),t("li",[e._v("부모로는 Root, 자식은 Update 된 Node 까지 변경 될 가능성이 있음")])])]),e._v(" "),t("li",[e._v("CSS 규칙을 최소화 하고 사용하지 않는 CSS 규칙을 삭제한다.")]),e._v(" "),t("li",[e._v("애니메이션과 같이 복잡한 랜더링 요소는 흐름의 밖에서 변경한다.\n"),t("ul",[t("li",[e._v("변경시에는 절대 위치 혹은 고정 위치를 사용한다.")])])]),e._v(" "),t("li",[e._v("불필요하거나 복잡한 CSS 선택기 하위요소 선택기를 사용하지 않는다.\n"),t("ul",[t("li",[e._v("선택기와 일치시키기 위해서 더 높은 GPU 처리량의 필요가 요구된다.")])])])]),e._v(" "),t("h3",{attrs:{id:"그-외-방법들"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#그-외-방법들","aria-hidden":"true"}},[e._v("#")]),e._v(" 그 외 방법들")]),e._v(" "),t("ul",[t("li",[e._v("이미지 최적화\n"),t("ul",[t("li",[e._v("큰 이미지를 CSS 로 잘라서 사용")]),e._v(" "),t("li",[e._v("BASE 64 Encoding 전송")])])]),e._v(" "),t("li",[e._v("브라우저 캐싱 사용")]),e._v(" "),t("li",[e._v("방문 리다이렉션 사용 안함")])]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developers.google.com/speed/docs/insights/browser-reflow?hl=ko",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/speed/docs/insights/browser-reflow?hl=ko"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0030/Reflow_____________________________Tip.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0030/Reflow_____________________________Tip.pdf"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/"),t("OutboundLink")],1)])])])},[],!1,null,null,null);_.default=v.exports}}]);