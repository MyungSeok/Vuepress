# 3주차 (11 ~ 15 Chapter)

## Chapter 11 스칼라의 계층구조

모든 클래스가 Any 의 서브클래스이기 때문에, Any 가 정의해둔 메서드는 모두 '보편적인' 메서드다.

### 11.1 스칼라의 클래스 계층구조

![스칼라의 클래스 계층구조](/img/A118.png)

계층의 최상위에는 Any 클래스가 있다.

루트 (root) 클래스 Any 에는 서브클래스가 둘 있는데, 바로 `AnyVal` 과 `AnyRef` 다.

* AnyVal : 모든 스칼라값 클래스 (value class) 의 부모 클래스
* AnyRef : 모든 스칼라의 참조 클래스 (reference class) 의 기반 클래스

스칼라가 기본적으로 제공하는 값 클래스는 다음과 같다.

* `Byte`, `Short`, `Char`, `Int`, `Long`, `Float`, `Double`, `Boolean`, `Unit`

예를 들면 `42` 는 `Int` 의 인스턴스이고, `'x'` 는 `Char` 의 인스턴스이고, `false` 는 `Boolean`의 인스턴스이다.

이 값 클래스는 `new` 를 사용하여 인스턴스화 할 수 없다. 모든 값 클래스를 추상 클래스인 동시에 파이널 클래스 (final class) 로 만드는 기법을 사용하여 제약을 가했다.

### 11.2 여러 기본 클래스를 어떻게 구현했는가?

```java
boolean isEqual(Integer x, Integer y) {
  return x == y;
}

System.out.println(isEqual(421, 421));
```

위 자바 코드는 래퍼 (wrapper) 클래스에 대입된 값은 비교 연산자 (==, !=) 를 통하여 비교가 불가능하다.

`Integer` 가 참조 타입이 아니기 때문에 언박싱하여 값을 비교해야 한다.

```bash
scala> def isEqual(x: Int, y: Int) = x == y
isEqual: (x: Int, y:Int)Boolean

scala> isEqual(421, 421)
res10: Boolean = true

scala> def isEqual(x: Any, y: Any) = x == y
isEqual: (x: Any, y:Any)Boolean

scala> isEqual(421, 421)
res11: Boolean = true
```

스칼라는 자바 코드와는 다르게 마땅히 그래야 하는 방식대로 동작된다.

하지만 사용자가 정의한 **동일성** 대신 **참조 동일성**이 필요한 경우도 있다.

이러한 경우에는 해시 콘즈 (hash cons) 를 사용하고 싶을 경우가 있다. 참조 동일성을 사용하게 만들어둔 `eq` 라는 메서드가 있다.

```bash
scala> val x = new String("abc")
x: String = abc

scala> val y = new String("abc")
y: String = abc

scala> x == y
res13: Boolean = true

scala> x eq y
res13: Boolean = false

scala> x ne y
res13: Boolean = true
```

스칼라의 동일성에 대해서 30장에서 자세히 다룰것이다.

### 11.3 바닥에 있는 타입

`Nothing` 타입은 스칼라 클래스 계층의 맨 밑바닥에 존재한다.

`Nothing` 은 비정상적 종료를 표시하는것이다.

`Nothing` 은 모든 타입의 서브타입이기 때문에, `error` 와 같은 메서드를 다양한 곳에서 유연하게 사용가능하다.

```scala
def divide(x: Int, y: Int): Int = 
  if (y != 0) x / y
  else sys.error("can't divide by zero")
```

위 코드에서 반환 타입이 `Int` 이지만 `Nothing` 의 모든 타입의 서브타입이기 때문에 메서드의 반환타입에서 요구하는 대로 `Int` 가 될 수 있다.

### 11.4 자신만의 값 클래스 정의

값 클래스를 정의하고 싶으면 `AnyVal` 의 서브클래스로 만들면 된다.

```scala
class Dollars(val amount: Int) extends AnyVal {
  override def toString() = "$" + amount
}
```

#### 한 가지 타입만 남용하는 것을 막기

스칼라 클래스 계층을 가장 잘 활용하고 싶다면, 문제 영역에 잘 들어맞는 새로운 클래스를 정의하라.

```scala
class Anchor(val value: String) extends AnyVal
class Style(val value: String) extends AnyVal
class Text(val value: String) extends AnyVal
class Html(val value: String) extends AnyVal
```

위 같은 클래스가 있다면 좀 더 자세한 타입 시그니처를 갖는 title 함수를 만들 수 있다.

```scala
def title(title: Text, anchor: Anchor, style: Style): Html =
  new Html(
    s"<a id='${anchor.value}'>" + 
      s"<h1 class='${style.value}'>" + 
        text.value + 
        "</h1></a>"
  )
```

### 11.5 결론

다음 장에서 믹스인 (mix in) 합성을 이해할 준비가 되었다.