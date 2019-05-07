# Cookie

## 목적

HTTP Cookie 는 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각이다.

이는 대개 세 가지 목적을 위해 사용된다.

* 세션 관리 (Session Management)
  * 서버에 저장할 로그인 정보, 데이터셋 등과 같은 정보관리
* 개인화 (Personalization)
  * 사용자의 선호 혹은 세팅 값
* 트래킹 (Tracking)
  * 사용자의 행동을 기록하고 분석하는 기준 용도

과거에는 클라이언트에 저장하는 유일한 수단이였으나 HTTP 요청시 오버헤드가 커질 우려가 있기 때문에 _**Modern Storage APIs**_ 의 종류인 Web Storage API(`localStorage` `sessionStorage`) 를 사용하는것을 권장한다.

## 특징

* 클라이언트에 저장되는 키와 값이 들어있는 작은 데이터 파일 \(하나당 4KB 이하\)
* 이름, 값, 만료날짜 \(쿠키의 저장시간\), 경로정보 등이 포함되어 있으며 반드시 자료형은 String 으로 구성된다.
* 사용자가 임의로 쿠키 데이터를 저장, 수정, 삭제할 수 있다.
* 사용자가 브라우저 설정으로 쿠키의 사용유무를 설정할 수 있다.

> HTTP 전송시에 요청 헤더에 쿠키 값이 들어 있어 쿠키의 자료량 \(데이터 사이즈\) 이 큰 경우  
> _**오버헤드로 인한 웹서버 에러가 발생**_ 할 수 있다.

## 생성

```javascript
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
```

## 조회

**Pollyfill**

```javascript
function getCookie(name) {
    if (typeof $.cookie === 'function') {
        return $.cookie(name);
    } else {
        var cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return (cookie ? cookie[2] : '');
    }
}
```

```javascript
getCookie('userID');
```

## 변경

**jQuery Library 사용시**

```javascript
$.cookie('userID', '오리', { domain : '.sudals.com', path: '/'});
```

## 삭제

**jQuery Library 사용시**

```javascript
$.cookie('userID', null, { domain : '.sudals.com', path: '/'});
```

## 옵션

### HttpOnly

`HttpOnly` 옵션 사용시에 XSS (Cross-Site Scripting) 를 방지하기 위하여 사용한다.

이 옵션을 설정하면 `Document.cookie` API 에 접근할 수 없으며 서버에 전송되는 용도로만 사용가능하다.

> 세션 쿠키 (Session Cookie) 는 Javascript 에서 사용할 필요성이 없기 때문에 HttpOnly 플래그가 설정되는것이 바람직하다.

:::tip 참고자료
<https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies>  
<https://www.w3schools.com/js/js_cookies.asp>
:::