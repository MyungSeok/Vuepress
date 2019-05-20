---
sidebar: auto
---
# CSS

## 스타일 태그 위치

`<head>` 태그에 위치 시켜야 한다.

하단에 위치 시키게 되면 HTML 파일을 두 번 읽어서 적용 시키기 때문

## Selector

* 하위 조합자 (Descendant Combinator)

먼저 지정한 선택자의 자식 요소가 뒤에오는 선택자인 경우 자식요소들을 선택 합니다.  
각각의 선택자를 공백으로 구분한다.

```css
h1 em {
    ...
}
```

* 자식 조합자 (Child Combinator)

먼저 지정한 선택자의 자식 요소가 뒤에 오는 선택자인 경우 해당하는 자식 요소들을 선택합니다.  
각각의 선택자를 부등호 (`>`) 로 구분한다. (CSS2)

```css
body > p {
    ...
}
```

* 인접 형제 조합자 (Adjacent Sibling Combinator)

더하기 (`+`) 기호로 이루어진 두개의 선택자에 해당하는 요소가 서로 부모요소가 같은 형제 요소이며 첫번째 요소의 바로 뒤에오는 두번째 요소를 선택한다. (CSS2)

```css
h1.opener + h2 {
    ...
}
```

* 일반 형제 조합자 (General Sibling Combinator)
물결 (`~`) 기호로 구분된 두 선택자에 해당되는 요소가 서로 부모가 동일한 형제요소이며, 첫번째 요소의 뒤에 이어지는 두번째 요소들을 선택한다. (CSS3)

```css
h1 ~ pre {
    ...
}
```

:::tip 참고자료
<https://css.elex.pe.kr/2012/09/Combinators.html>
:::

## inline & inline block

* `{ display: inline; }`

대표적으로는 `<span>` 태그의 성질로 content/text 크기만큼만 점유하고 동일 라인에 붙는 성질이다.

* `width` `height` 적용 불가
* `margin` `padding-top` `padding-bottom` 적용 불가
* line-height 원하는대로 적용 불가 \(`<span>` 에 적용 안되고 감싸고 있는  `<div>` 전체 크기에만 영향을 줌\)

* `{ display: block; }`

무조건 한줄을 점유한다.

* `{ display: inline-block; }`

`{display: inline;}` 과 `{display: block}` 의 혼합된 형태로 대부분의 inline 특성을 가져갑니다.

* width/height 적용 가능
* margin/padding-top/padding-bottom 적용 가능
* line-height 적용 가능

`{display: block}` 끼리 공백이 생기게 되는데  
이는 상위 `<div>` 에 `{font-size: 0}` 를 적용하면 해결 가능하다.

:::tip 참고자료
<https://blog.naver.com/leesd88/220682157303>
:::

## Keyframes

```css
@keyframes ANIMATION_NAME_1 {
    from {opacity: 0;}
    to {opacity: 1;}
}

@keyframes ANIMATION_NAME_2 {
    0% {opacity: 0;}
    25% {opacity: 0.25;}
    50% {opacity: 0.5;}
    75% {opacity: 0.75;}
    100% {opacity: 1;}
}

.CLASS_NAME {animation: ANIMATION_NAME_1 3s infinite;}
```

:::tip Animation 에 대한 적정한 사용
CSS Animation : 간단한 UI 요소  
JS Animation : 바운스, 중지, 일시정지, 되감기, 가속 등과 같은 고급효과
:::