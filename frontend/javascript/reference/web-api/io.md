# Intersection Observer

타겟 요소와 상위 요소 또는 최상의 `document` 의 `viewport` 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법입니다.

* 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩
* 스크롤 시에, 더 많은 컨텐츠가 로드 및 랜더링 되어 사용자가 페이지를 이동하지 않아도 되게 하는 `infinite-scroll` 구현
* 사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할 지 여부를 결정

## 전통적인 스크롤 방식

과거에는 intersection 감지를 구현하면 영향받는 요소를 알기 위해 [Element.getBoundingClientRect()](https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect) 와 같은 메서드를 호출

이 코드는 메인 스레드에서 실행되기 때문에 다른 코드와 얽히게 되면 성능이 매우 떨어질 수 있습니다

```javascript
function setWindowScroll() {
  document.addEventListener('scroll', () => {
    boxs.forEach(box => {
      if (isShowElement(box)) {
        box.classList.add('show')
      } else {
        box.classList.remove('show')
      }

      console.count('Window Scroll')
    })
  })

  function isShowElement(target) {
    var rect = target.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
}
```

## 인터섹션 옵저버


```javascript
function setIntersectionObserver() {
  const options = { }

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      
      const { isIntersecting, target } = entry

      if (isIntersecting) {
        target.classList.add('show')
      } else {
        target.classList.remove('show')
      }

      console.count('Intersection Observer')
    })
  }

  const io = new IntersectionObserver(callback, options)

  boxs.forEach(box => {
    io.observe(box)
  })
}
```

## Performance

![Window Scroll](/img/A114.png)

![Intersection Observer](/img/A115.png)

## Parameter

```javascript
const instance = new IntersectionObserver(callback [, options])

instance.observe(domElement)
```

### Callback

* entries
  * 인터섹션 옵저버 엔트리를 배열형태로 반환
* observer
  * 인터섹션 옵저버 인스턴스 객체

### Options

옵저버가 시작되는 시점에서 설정하는 옵션
필수값은 아니다.

* root
  * 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소입니다
* rootMargin
  * root 가 가진 여백입니다. 이 속성의 값은 CSS의 margin 속성과 유사합니다.
* threshold
  * observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열입니다

## Method

### observe

관찰 시작

### unobserve

관찰 종료

### disconnect

관찰 일시 중지

## Polyfill

`@@TODO`

:::tip 참고자료
<https://velog.io/@yejinh/Intersection-Observer로-무한-스크롤-구현하기>
<https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API>
<https://github.com/w3c/IntersectionObserver/tree/master/polyfill>
<https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433>
<https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations?hl=ko>
<https://www.html5rocks.com/en/tutorials/speed/scrolling/#toc-reflowrepaint>
:::