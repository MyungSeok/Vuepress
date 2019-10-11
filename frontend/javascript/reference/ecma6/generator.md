# Generator

ECMA6 에서 도입된 함수로써 이터러블을 생성하는 함수이다.

제너레이터 함수를 사요하면 이터레이션 프로토콜을 준수하여 이터러블을 생성하는 방식보다 _**간편하게 이터러블을 구현**_ 할 수 있다.

일반적인 함수의 실행 구조와는 다르게 함수의 코드 블럭을 한꺼번에 실행하지 않고 일시 중지 했다가 필요한 시점에 재시작 할 수 잇는 특징이 있다.

## 함수의 정의

제너레이터 함수는 `function*` 키워드로 선언한다. 또한 하나이상의 `yield` 문을 포함한다.

```javascript
// 제너레이터 함수 선언문
function* genDec() {
  yield 1;
}

// 제너레이터 함수 표현식
const genExp = function* () {
  yield 1;
};

// 제네레이터 메서드
const obj = {
  * genObjMethod() {
    yield 1;
  }
}

// 제네레이터 클래스 메서드
const MyClass {
  * genClazzMethod() {
    yield 1;
  }
}
```

_**Iterator Interface**_ 를 구현한 확장형 함수

```javascript {10}
function* foo() {
  yield '첫번째 호출';
  yield '두번째 호출';
  yield '세번째 호출';
  yield '네번째 호출';
}

var _foo = foo();
for (var i = 0; i < 10; ++i) {
  console.log(_foo.next());
}
```

네번째 까지만 정상 로그가 찍히며 이후로는 `{ value: undefined, done: true }` 로 나온다.

```javascript {1,2,3,4}
// Object { value: '첫번째 호출', done: false }
// Object { value: '두번째 호출', done: false }
// Object { value: '세번째 호출', done: false }
// Object { value: '네번째 호출', done: false }
// Object { value: undefined, done: true }
// Object { value: undefined, done: true }
// Object { value: undefined, done: true }
// Object { value: undefined, done: true }
// Object { value: undefined, done: true }
// Object { value: undefined, done: true }
```

## yield

제너레이터 함수를 중지 시키거나 재개하는데 사용한다.

**Syntax**

```javascript
[rv] = yield [expression];
```

**Parameters**

* rv
  * 제너레이터 실행을 재개 하기 위해서, optional value을 제너레이터의 `next()` 메서드로 전달하여 반환
* expression
  * 제너레이터 함수에서 제너레이터 프로토콜을 통해 반환값을 정의 한다. (기본값 : `undefined`)

:::tip 참고자료
<http://hacks.mozilla.or.kr/2015/08/es6-in-depth-generators/>  
<https://gist.github.com/qodot/ecf8d90ce291196817f8cf6117036997>
:::
