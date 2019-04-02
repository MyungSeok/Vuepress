# General

## onload 이벤트

페이지 리소스가 로드되었을때 발생되는 이벤트로 대표적으로 다음 3가지로 나뉜다.

### document.ready

DOM 이 로드되고 Element 의 접근이 안정될 때 발생한다.

**IE 9 이상**

```javascript
document.addEventListener('DOMContentLoaded', function () {
    /* statement */
});
```

**IE8 이하**

`IE8` 이하에서는 아래와 같이 사용해야 한다.

```javascript
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        /* statement */
    }
};
```

**jQuery Library 사용**

```javascript
$(document).ready(function () {
    /* statement */
});
```

|readyState|Description|
|:--:|:--|
|uninitialized|아직 로딩이 시작되지 않음|
|loading|로딩중|
|interactive|어느정도 로드가 되었으며 사용자가 상호작용 할 수 있음|
|complete|로딩 완료|

### window.ready

페이지내의 모든 리소스가 모두 로딩된 이후 실행

### window.onload

DOM 과 모든 Asset (이미지, 문서 등등...) 들이 로드된 이후에 발생한다.

`window.onload` 는 `<body onload="">` 와 같은 기능이다.

`window.onload` 는 `<body onload="">` 동시에 사용시 `<body onload="">` 가 실행

`window.onload` 가 두개 이상 사용시 마지막 함수만 실행된다.

**Javascript 에서 사용**

```javascript
window.onload = function () {
    /* statement */
}
```

**Tag 속성으로 사용**

```html
<body onload=""></body>
```

**jQuery Library 사용**

```javascript
$(window).load(function () {
    /* statement */
});
```

### Object onload

object 가 로드 되었을 때 발생 합니다.  
웹 페이지가 모든 컨텐츠 (이미지, 스크립트 파일, 스타일시트) 등을 완전히 로드한 후 실행 합니다.

**Syntax**

```html
<tag onload="myScript"></tag>
```

```html
<tag onload="script"></tag>
```

```javascript
object.onload = function () {/* script */};
```

```javascript
object.addEventListener('load', script);
```

| Feature | Description |
| :---: | :---: |
| 이벤트 버블링 | NO |
| 중단 가능 여부 | NO |
| 이벤트 유형 | UI 생성시 |
| 지원 태그 | `<body>`, `<frame>`, `<iframe>`, `<img>`, `<input type="image">`, `<link>`, `<script>`, `<style>`  |
| DOM 버전 | Level 2 이벤트 |

:::tip 참고자료
<https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload>
:::

## 시맨틱 (Semantic) 마크업

브라우저가 웹 문서 (HTML) 를 정확히 읽어내기 위하여 _**정보의 의미에 맞는 HTML Tag**_ 를 이용하여 작성하는 것  
출력 형태는 `<div>` 와 별 차이는 없다.

### 장점

* 웹 접근성이 좋아짐
* SEO (Search Engine Optimization) 개선 효과
* 코드 가독성, 재사용성이 높아짐

대표적으로 `<header>` `<nav>` `<section>` `<article>` `<footer>` 가 있다.

| 태그 | 설명 |
| :---: | --- |
| section | 문서의 구획 \(예: 장, 절\) |
| article | 독립된 콘텐츠 영역 \(예: 개별 신문기사\) |
| nav | 네비게이션 메뉴 영역 |
| aside | 부가 콘텐츠\(예: 사이드바, 광고 등\) 본문 내용과 비교적 관련성이 적은 것 |
| header | 헤더글. 본문 위에 첨가하는 짧은 글 영역 |
| footer | 바닥글. 본문 아래에 첨가하는 짧은 글 영역 |
| hgroup | 제목\(h1 ~ h6\) 을 그룹화하는 요소 |