# Immutable.js

객체의 불변셩의 유지하면서 데이터를 쉽게 핸들링 가능하게끔 도와주는 라이브러리이다.

대부분의 컬렉션을 지원 하며 사용법 또한 쉽다.

```javascript
var fromJS = Immutable.fromJS;

var data = fromJS({
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: 5
  }
})
```

```javascript
data.toJS(); // { a:1, b:2, c: { d: 3, e: 4 } }
```

:::tip 참고자료
<https://immutable-js.github.io/immutable-js/>  
<https://velopert.com/3354>
:::
