# DTD (Document Type Definition)

## 호환 모드와 표준 모드

웹 브라우저의 레이아웃 엔진은 다음 세가지 방식의 랜더링 모드를 지원한다.

> _**랜더링 모드**_ 란 브라우저가 웹 페이지를 해석 및 읽는 방식이다.

* Quirks Mode (호환 / 비표준 모드)
  * 내비게이터 (Navigator 4) 와 IE5 의 비표준 동작들을 에뮬레이션 한다.
* Almost Standards Mode (거의 표준 모드)
  * 일부 (Table Cell 등과 같은) 에서만 비표준을 따르고 대부분은 표준모드를 따른다.
* Standards Mode (표준 모드)
  * HTML 과 CSS 를 표준 명세에 따라 읽는다.

따라서 사용자가 작성한 HTML 문서를 의도에 맞게 표현하기 위해서 _**반드시 표준모드로 실행**_ 해야 한다.

## DOCTYPE

_**HTML**_ 에서의 문서형식을 지정하는 것으로 _**Document Type Definition**_ 줄여서 _**DTD**_ 라고 하며 _**DTD**_ 는 _**HTML 문서에 첫번째에 위치**_ 해야 한다.

이는 문서형식은 HTML 버전과 종류를 명시함으로써, _**브라우저가 문서를 해석하고 출력하는데 직접적으로 영향**_ 을 준다.

올바르게 문서형식이 지정된 경우에는 표준 (Standards Mode) 방식, 그렇지 않는 경우에는 호환 (Quirks Mode) 방식으로 출력한다.

### 호환 출력 방식 (Quirks Rendering Mode) 특징

* 브라우저가 HTML 을 랜더링 (읽기, 해석, 출력) 하는 시간이 더 걸린다.
* 브라우저마다 HTML 출력을 각각 다르게 출력한다.

### 사용 예

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

:::tip 참고자료
<https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode>  
<https://aboooks.tistory.com/169>
:::