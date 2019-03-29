(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{428:function(e,r,t){"use strict";t.r(r);var a=t(1),l=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"메모리-누수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메모리-누수","aria-hidden":"true"}},[e._v("#")]),e._v(" 메모리 누수")]),e._v(" "),t("p",[e._v("웹 페이지 내에서 무거운 자바스크립트 코드 사용사에 페이지 성능에 영향을 미치는 메모리 문제를 찾아내는 방법을 알아본다."),t("br"),e._v(" "),t("em",[t("strong",[e._v("메모리 누수")])]),e._v(", "),t("em",[t("strong",[e._v("메모리 팽창")])]),e._v(", "),t("em",[t("strong",[e._v("잦은 가비지 수집")])]),e._v(" 등이 대표적인 원인으로 꼽힌다.")]),e._v(" "),t("h2",{attrs:{id:"메모리-팽창과-누수의-판별"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메모리-팽창과-누수의-판별","aria-hidden":"true"}},[e._v("#")]),e._v(" 메모리 팽창과 누수의 판별")]),e._v(" "),t("p",[e._v("단순히 사이트의 점점 더 많은 메모리를 사용하게 된다면 누수가 발생된다고 볼 수 있다."),t("br"),e._v("\n여기서 많은 메모리의 기준은 RAIL 모델을 사용하여 사용자에게 주안점을 두는것이다.")]),e._v(" "),t("h3",{attrs:{id:"rail-모델"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rail-모델","aria-hidden":"true"}},[e._v("#")]),e._v(" RAIL 모델")]),e._v(" "),t("p",[e._v("사용자 중심의 성능 모델로 다음 네가지의 측면을 반영한다.")]),e._v(" "),t("ul",[t("li",[e._v("Response\n"),t("ul",[t("li",[e._v("사용자의 입력은 100ms 내에 인지해야 함")])])]),e._v(" "),t("li",[e._v("Animation\n"),t("ul",[t("li",[e._v("애니메이션의 스크롤 시간을 10ms 이내에 프레임을 생성해야 함")])])]),e._v(" "),t("li",[e._v("Idle\n"),t("ul",[t("li",[e._v("메인 스레드의 유휴시간을 극대화 해야 함")])])]),e._v(" "),t("li",[e._v("Load\n"),t("ul",[t("li",[e._v("대화형 콘텐츠의 경우 1000ms 이내에 전달해야 함")])])])]),e._v(" "),t("h2",{attrs:{id:"메모리-누수-예방-및-분석"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메모리-누수-예방-및-분석","aria-hidden":"true"}},[e._v("#")]),e._v(" 메모리 누수 예방 및 분석")]),e._v(" "),t("ul",[t("li",[e._v("크롬 (Chrome) 의 작업 관리자로 메모리 사용량을 실시간 모니터링\n"),t("ul",[t("li",[e._v("타임라인 (Timeline) 기록으로 메모리 누수의 시각화")]),e._v(" "),t("li",[e._v("힙 스냅샷으로 분리된 DOM 트리 메모리 누수의 발견")]),e._v(" "),t("li",[e._v("Javascript 힙 (Heap) 메모리 누수 파악 (Allocation Timeline)")]),e._v(" "),t("li",[e._v("함수별 메모리 할당 관측")]),e._v(" "),t("li",[e._v("잦은 가비지 수집 관측")])])])]),e._v(" "),t("h2",{attrs:{id:"해결방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#해결방법","aria-hidden":"true"}},[e._v("#")]),e._v(" 해결방법")]),e._v(" "),t("ul",[t("li",[e._v("크롬 작업관리자를 사용하여 확인 가능")]),e._v(" "),t("li",[e._v("시간의 흐름에 따른 메모리 사용량을 타임라인으로 기록하여 시각화한다.")]),e._v(" "),t("li",[e._v("분리된 DOM 트리 (일반적인 메모리 누수 원인) 을 힙 스냅샷으로 식별할 수 있다.")]),e._v(" "),t("li",[e._v("JS 힙에 새 메모리가 할당될 때 할당 타임라인 기록을 확인하여 알아낼 수 있다.")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"참고자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고자료","aria-hidden":"true"}},[e._v("#")]),e._v(" 참고자료")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/memory-problems/?hl=ko",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/web/tools/chrome-devtools/memory-problems/?hl=ko"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rail?hl=ko",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/web/fundamentals/performance/rail?hl=ko"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=l.exports}}]);