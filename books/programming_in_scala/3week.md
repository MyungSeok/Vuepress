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

## Chapter 12 트레이트

스칼라에서 트레이트는 코드 재사용의 근간을 이루는 단위다.

하나의 슈퍼클래스만 갖는 클래스의 상속과는 달리, 트레이트의 경우 몇개라도 혼합해 사용할 수 있다.

### 12.1 트레이트의 동작 원리

트레이트를 정의하고 나면 `extends` 나 `with` 키워드를 사용해 클래스에 조합하여 사용할 수 있다.

스칼라 프로그래머는 트레이트를 사용할 때 상속보다는 믹스인 (mix in) 을 사용하려한다.

```scala
class Frog extends Philosophical {
  override def to String = "green"
}
```

트레이트를 믹스인할 때는 `extends` 키워드를 사용한다.

`extends` 키워드를 사용하면 트레이트의 슈퍼클래스를 암시적으로 상속한다.

여러 트레이트를 믹스인 하려면 `with` 구문을 추가하면 된다.

```scala
class Frog extends Animal with Philosophical {
  override def toString = "green"
}
```

```scala
class Frog extends Animal with Philosophical HasLegs {
  override def toString = "green"
}
```

클래스와 트레이트의 차이점은 다음과 같다.

* 트레이트는 클래스 파라미터 (클래스의 주 생성자에 전달할 파라미터) 를 가질 수 없다.
* 클래스에서는 `super` 호출을 정적으로 바인딩하지만, 트레이트에서는 동적으로 바인딩한다는 점이다.

### 12.2 간결한 인터페이스와 풍부한 인터페이스

트레이트의 주된 사용방법은 **어떤 클래스에 그 클래스가 이미 갖고 있는 메서드를 기반으로 하는 새로운 메서드를 추가하는 법**이다.

간결한 인터페이스 (thin interface) 를 풍부한 인터페이스 (rich interface) 로 만들 때 트레이트를 사용할 수 있다.

구체적인 메서드 구현을 트레이트에 더할 수 있으면 풍부한 인터페이스 쪽의 비용대비 효용이 더 좋아진다.

### 12.3 예제: 직사각형 객체

풍부한 트레이트를 사용해 코드의 반복을 피할 수 있다.

```scala
trait Rectangular {
  def topLeft: Point
  def bottomRight: Point

  def left = topLeft.x
  def right = bottomRight.x
  def width = right - left
  // 여러 기하 관련 메서드...
}
```

### 12.4 Ordered 트레이트

스칼라에서 제공하는 `Ordered` 라는 트레이트를 사용할 경우 하나의 비교 연산자만 작성하면 모든 비교 연산자 구현을 대신할 수 있다.

`Ordered` 트레이트가 그 하나의 메서드 구현을 기반으로 `<`, `>`, `<=`, `=>` 를 제공한다.

`compare` 메서드만 구현하면 `Ordered` 트레이트가 비교 메서드를 제공해 클래스를 풍부하게 해준다.

`Ordered` 트레이트가 `equals` 를 정의하지 않는다. 이는 비교관점에서 `equals` 를 구현하려면 전달 받을 객체의 타입을 알아야 한다.

하지만 타입 소거 (type erasure) 때문에 Ordered 트레이트는 이러한 검사를 수행할 수 없다.

### 12.5 트레이트를 이용해 변경 쌓아 올리기

클래스에 쌓을 수 있는 변경을 적용해보자.



![Cat 클래스의 상속 계층과 선형화](/img/A119.png)