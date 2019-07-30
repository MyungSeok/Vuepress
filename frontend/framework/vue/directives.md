# Directives

Vue 프레임워크에서 Directives (지시문) 은 vue 엘리먼트에 적용되는 특별한 속성이다.

[`Vue JS` 공식문서](https://vuejs.org/v2/api/#directives)에서도 확인 가능하다.

## `v-text`

vue 내부값이 vue 엘리먼트 변수로 지정된다.

## `v-html`

## `v-show`

## `v-if`

## `v-else`

## `v-else-if`

## `v-for`

## `v-on`

가장 많이 사용하는 지시문이다.
`@` 으로 축약해서 사용한다.

* `.stop`
  * event.stopPropagation() 호출
* `.prevent`
  * event.preventDefault() 호출
* `.capture`
  * 캡쳐모드의 이벤트리스너 추가 (?)
* `.self`
  * 이 엘리멘트에서 event가 dispatched 됐을 때만 트리거
* `.{keyCode | keyAlias}`
  * 특정 키에서만 trigger
* `.native`
  * root element의 native event를 listen (?)
* `.once`
  * 한번만 트리거!
* `.left`
  * 마우스 왼쪽클릭에만 트리거
* `.right`
  * 마우스 오른쪽클릭에만 트리거
* `.middle`
  * 마우스 가운데클릭에만 트리거
* `.passive`
  * attacheds a DOM event with {passive: true}

## `v-bind`

`v-on` 과 더불어 가장 많이 쓰는 directive 이다.
`:` 축약해서 많이 사용한다.

* `.prop`
  * vue 속성대신 DOM 프로퍼티를 바인딩해준다.
* `.camel`
  * kebab-case 속성을 camel-case 로 변경해준다. (`app-blog` -> `appBlog`)
* `.sync`

## `v-model`

데이터 바인딩시에 사용하며 `<input>` `<select>` `<textarea>` 에서 사용가능하다.

modifiers 는 아래 3가지 이다.

* `.lazy`
  * input 대신에 change event 를 listen 한다.
  * 입력할 때 마다 값이 바인딩되지 않고 나중에 변경
* `.number`
  * 문자열을 숫자로 바꿔준다.
* `.trim`
  * 입력값이 공백을 제거한다.

## `v-pre`

엘리먼트의 compile 을 건더뛴다. \`\` 을 그대로 출력 가능하다.

## `v-cloak`

`[v-cloak]{ display: none }` 과 함께 사용하며 `js` 를 모두 불러올때까지 un-compiled 된 html 을 모두 숨겨준다.

## `v-once`

뷰 엘리먼트 혹은 컴포넌트를 한번만 랜더한다.

:::tip 참고자료
<https://seulcode.tistory.com/264>
:::
