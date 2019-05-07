# Performance

## 비 차단 스크립트

HTML Parsing 작업의 중단 없이 동시에 내려받게 됨

![비 차단 스크립트](/img/A002.png)

* aync  
  * HTML 파싱과 동시에 다운 받으며 스크립트 다운로드가 끝났을 경우 HTML 파싱을 중지 시키고 스크립트 파싱한다.
* defer
  * HTML 파싱과 동시에 다운 받으며 스크립트 다운로드가 끝나도 HTML 파싱이 완료된 이후에 스크립트 파싱을 시작한다.

## 쿼리스트링 (리소스 파일 캐쉬 방지)

브라우저에서 캐의 동작은 기존에 동일한 URL 에 요청한 적이 있었는지 판단한다.  
따라서 수정 배포된 리소스파일 \(js, css, image 등등 ...\) 이 수정되면 _**URL 경로의 변경**_ 혹은 _**쿼리스트링으로 파일 캐시를 방지**_한다.

```markup
<script src="/js/bundle.js?ver=20180628"></script>
<link rel="stylesheet" href="/css/bundle.css?ver=20180628">
<img src="/img/image.png?ver=20180628">
```

* 코드적 장점
  * 매번 캐시를 삭제해야 하는 불편함을 피할 수 있다.
* 관리적 장점
  * 파일의 릴리즈 \(release\) 버전의 정보를 알기 쉽게 구분한다.