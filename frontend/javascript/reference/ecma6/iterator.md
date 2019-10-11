# Iterable & Iterator

## For Loop

자바스크립트의 반복문의 `for loop` 는 다음 몇가지로 나뉜다.

* for
  * 가장 기본적인 `for loop`
* forEach
  * 배열을 순회하며 `value` 와 `index` 를 매개변수로 전달한다.
  * `break`, `return` 으로 루프를 중단할 수 없다.
* for in
  * 배열의 인덱스만 순환 하는것이 아닌 프로토타입 체인을 포함한 모든 속성을 순회한다.
  * _**배열보다는 객체를 순회**_ 하기 위해 만들어진 루프이다.
* for of
  * `for in` 으로 배열을 순회할 때 생기는 문제점들을 해소하였다.

> `for of` 는 _**순회가능한 (iterable) 객체를 상대로 사용 가능**_ 하다.

순회가능한 (Iterable) 한 객체는 _**`Symbol.iterator` 심볼을 속성으로 가지고 있으며 이터레이터 객체를 반환하는 객체**_ 를 뜻한다.  
해당 스팩을 _**이터러블 프로토콜**_ 이라고 하며 _**해당 스팩을 구현한 객체를 이터러블 객체**_ 라고 한다.

## Iterable

ECMA6 에서 도입된 이터레이션 프로토콜 (Iteration Protocal) 은 데이터 컬렉션을 순회하기 위한 프로토콜 (규칙) 이다.

![이터레이터 프로토콜](/img/A100.png)

이 객체는 `for...of` 로 순회 가능하며 `Spread` 문법의 피연산자 (대상) 가 될 수 있다.

이터러블 프로토콜을 준수한 객체를 이터러블 객체라고 한다.

즉 다시 말해 이터러블은 `Symbol.iterator` 메서드를 구현하거나 프로토타입 체인에 의해 상속한 객체를 말한다.

일반적으로 배열은 `Symbol.iterator` 메서드를 반환한다. 그러므로 이터러블한 객체이다.

> 이터러블 = 이터러블 프로토콜을 준수한 객체

```javascript
const array = [1, 2, 3];

// 배열은 Symbol.iterator 메서드를 소유
console.log(Symbol.iterator in array);  // true

for (const num of array) {
  console.log(num);
}
```

```javascript
const obj = {a: 1, b: 2};

// 일반적인 객체는 Symbol.iterator 메서드를 소유하지 않는다.
console.log(Symbol.iterator in obj);  // false

// TypeError: obj is not iterable
// -> obj 는 이터러블 하지 않다. 즉 순환 가능하지 않다.
// -> Symbol.iterator 메서드가 없기 때문이다.
for (const p of obj) {
  console.log(p);
}
```

`Symbol.iterator` 의 키를 가지고 있는 객체로써 다음 스펙을 구현한 객체이다.

> `Iterator` 인터페이스를 구현 하고 있는 객체를 `Iterable` 객체라고 한다.

* `Symbol.iterator` 의 키를 갖고 있다.
* 값으로 인자를 받지 않고 _**Iterator Object**_ 를 반환하는 함수가 온다.

```javascript
{
  [Symbol.iterator]: function () {
    return {
      next: function {
        return { value: 1, done: false };
      }
    };
  }
}
```

## Iterator

이터러블과 밀접한 관련이 있는 이터레이터는 이터레이터 프로토콜을 준수한 객체이다.

이터레이터 프로토콜은 이터러블 객체가 반환하는 `Symbol.iterator` 를 말한다.

이 `Symbol.iterator` 는 다음과 같은 특징을 갖는다.

* `next()` 메서드를 가지고 있다.
* `next()` 메서드를 호출하면 이터러블 객체를 순회하는 구조를 가진다.
* 이터러블 객체를 순회하면서 `value`, `done` 프로퍼티를 가지는 객체를 반환한다. (Iterator Result)

```javascript
const array = [1, 2, 3];

// 이터레이터를 반환
const iterator = array[Symbol.iterator]();

// next() 메서드를 호출할때 마다 이터러블을 순회한다.
// next() 메서드를 호출하면 value, done 프로퍼티를 갖는 Iterator Result 객체를 반환
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

이는 _**TC39**_ 에서 정의한 _**Iterator Interface**_ 정의를 따른 `Object` 로써 내용은 다음과 같다.

* `next` 라는 키를 갖고 있으며 값으로 인자를 받지 않고 _**Iterator Result Object**_ 를 반환하는 함수가 온다.
* _**Iterator Result Object**_ 는 `value` 와 `done` 이라는 키를 갖고 있다.
  * `value` 는 실제 값을 의미
  * `done` 는 계속 반복 할 수 있는지 따른 `boolean` 값

영원히 `0` 을 반환하는 Iterator

```javascript
{
  next: function () {
    return {
      value: 0,
      done: false
    };
  }
}
```

각 배열을 순회하며 배열의 끝 값을 반환하는 Iterator

```javascript
{
  data: [1, 2, 3, 4]
  next: function () {
    return {
      done: this.data.length === 0,
      value: this.data.pop()
    };
  }
}
```

> ECMA6 에서는 _**객체 리터럴 작성 순서에 따라 파싱**_ 한다.  
>
> 예를 들면 위 코드의 `done` 과 `value` 중에서 `done` 이 먼저 작성되어 있기 때문에 `done` 을 먼저 파싱한다.  
> ECMA5 에서는 `done` 이든 `value` 든 어느것을 먼저 파싱할지 보장이 안됨

:::tip 요약
* 이터러블 프로토콜을 준수 -> 이터러블 객체
  * Symbol.iterator 메서드를 소유한 객체
  * 혹은 프로토타입 체인에 상속한 객체
* 이터레이터 프로토콜을 준수 -> 이터레이터 객체
  * Symbol.iterator 메서드를 구현한 객체
  * `next()` 메서드를 가지고 있고 `next()` 메서드를 호출하면 이터러블을 순회하며 `value`, `done` 프로퍼티를 갖는 결과 객체를 반환하는 동작구조를 가지는 객체
:::

:::tip 참고자료
[ECMA-262 - Iterable Interface](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)  
[GDG 2016 발표자료](http://www.bsidesoft.com/?p=2913)  
[GDG DevFest Seoul 2016 - Iterable & Iterator](https://youtu.be/CY_2mFxQwzc)  
<https://poiemaweb.com/es6-iteration-for-of>
:::
