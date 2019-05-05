---
sidebar: auto
---

# 자바스크립트 성능 최적화

## Chapter 1 로딩과 실행

프론트 개발에서 가장 중요하게 생각되는 사용성 문제는 브라우저의 자바스크립트 성능이다.

브라우저는 싱글스레드 기반이기 때문에 자바스크립트가 실행되는 동안에는 다른 작업은 할 수 없는 차단성 때문이다.

예를 들면 `<script>` 태그가 있기만 해도 스크립트를 부넉하고 실행해야 하기 때문에 대기해야 한다.

### 스크립트 위치

스크립트를 아래와 같이 `<head>` 위치에 하게 되면 스크립트를 다운로드 받고 실행하는 동안 브라우져는 아무 작업을 할 수 없다.

때문에 사용자는 스크립트를 해석하는 시간동안 빈 화면을 봐야 한다.

```html
<html>
  <head>
    <title>Script Example</title>
    <script type="text/javascript" src="file1.js"></script>
    <script type="text/javascript" src="file2.js"></script>
    <script type="text/javascript" src="file3.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>
```

이러한 문제점을 해결하기 위하여 아래와 같이 스크립트의 위치를 `<body>` 내의 가장 아래 부분에 위치하도록 한다.

```html
<html>
  <head>
    <title>Script Example</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <p>Hello World</p>
    <script type="text/javascript" src="file1.js"></script>
    <script type="text/javascript" src="file2.js"></script>
    <script type="text/javascript" src="file3.js"></script>
  </body>
</html>
```

### 스크립트 묶기

* `<script>` 태그의 수를 최소한으로 제한한다.
  * `<script>` 태그를 만날때마다 페이지 랜더링이 차단된다.
* 다운받는 스크립트 파일들도 갯수를 줄인다.
  * 여러개의 파일을 압축 및 암호화 과정을 거친다.

### 비차단 스크립트

브라우저 프로세스를 차단하지 않으면서 자바스크립트를 점진적으로 불러오는 방법이 필요하다.

**지연 스크립트**

HTML 4 는 `<script>` 태그에 defer 속성을 정의했다.  
이 속성은 DOM 을 조작하지 않으니 나중에 실행해도 문제가 없다는 뜻으로 DOM 랜더링에 전혀 영향을 주지 않는다.

```html
<script type="text/javascript" src="file1.js"></script>
```

동적으로 만든 스크립트 코드는 바로 실행되지만 `defer` 속성이 적용된 스크립트는 다른 자원도 동시에 내려받기 가능하다.

**동적 `<script>` 태그**

DOM 접근을 통해 자바스크립트의 대부분의 HTML 요소를 아래와 같이 동적으로 만들수 있다.

```javascript
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "file1.js";
document.getElementsByTagName("head")[0].appendChild(script);
```

 위 코드는 `<script>` 태그를 추가하는 순간부터 **file1.js** 파일을 내려받기 시작한다.  
이는 파일을 내려받는 위치에 관계없이 페이지의 다른 작업을 차단하지 않으면서 내려받고 실행한다. (HTTP 요청이 일어남)

또한 일부 모던 브라우저는 스크립트의 다운로드 완료후 실행 시점을 특정 지을수 있는데 다음 예시 코드를 참고한다.

```javascript
var script = document.createElement('script');
script.type = "text/javascript";
script.onload = function () {
  alert('Script loaded');
}

script.src = 'file1.js';
document.getElementsByTagName('head')[0].appendChild(script);
```

외부 스크립트 파일을 내려받은 상태에 따라 `<script>` 태그의 **readyState** 속성이 달라지는데 아래와 같다.

* uninitialized
  * 기본 상태
* loading
  * 파일을 내려받기 시작한 상태
* loaded
  * 파일을 완전히 내려받은 상태
* interactive
  * 데이터를 완전히 내려받았지만 아직은 이용할 수 없는 상태
* complete
  * 모든 데이터를 이용할 수 있는 상태

IE 는 구현 방식이 달라 `readystatechange` 이벤트를 사용하며  
IE 는 `readyState` 의 최종상태를 일관성 없이 사용하기 때문에 `<script>` 태그가 `loaded` 상태에서 멈추고 `complete` 상태에 도달하지 않는 경우도 있고 혹은 그 반대의 경우도 있다.

따라서 `readystatechange` 이벤트를 가장 안전하게 사용하려면 두 상태를 모두 점검해서 둘 중 한가지 상태로 전환되면 중복으로 호출되지 않도록 이벤트 핸들러를 제거해야 한다.

```javascript
var script = document.createElement('script');
script.type = 'text/javascript';

script.onreadystatechange = function () {
  if (script.readyState == 'loaded' || script.readyState == 'complete') {
    script.onreadystatechange = null;
    alert('Script loaded');
  }
};

script.src = 'file1.js';
document.getElementsByTagName('head')[0].appendChild(script);
```

위 방식은 IE 에서만 동작 가능한 방식으로 표준 모던 브라우저와 IE 를 혼용하면 아래와 같다.

```javascript
function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    }
  }
}
```

```javascript
loadScript('file1.js', function () {
  alert('File is loaded !!');
});
```

위 방식으로 순차적 로딩이 필요한 스크립트는 다음과 같이 사용한다.

```javascript
loadScript('file1.js', function () {
  loadScript('file2.js', function () {
    loadScript('file3.js', function () {
      alert('All files are loaded !!');
    })
  });
});
```

**XMLHttpRequest 스크립트 삽입**

XHR (XMLHttpRequest) 객체를 통해서도 다른 작업을 방해하지 않고 자바스크립트 파일을 내려받을수 있다.

이 방법은 XHR 객체를 만들고 스크립트 파일 내용을 동적 `<script>` 태그를 써서 페이지에 코드를 삽입 한다.

```javascript
var xhr = new XMLHttpRequest();
xhr.open('get', 'file1.js', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = xhr.responseText;
      document.body.appendChild(script);
    }
  }
}
```

???

## Chapter 2 데이터 접근

## Chapter 3 DOM 스크립팅

## Chapter 4 알고리즘과 흐름 제어

## Chapter 5 문자열과 정규 표현식

## Chapter 6 응답성 좋은 인터페이스

## Chapter 7 Ajax

## Chapter 8 프로그래밍 사례

## Chapter 9 고성능 자바스크립트 애플리케이션 빌드와 배포

## Chapter 10 도구