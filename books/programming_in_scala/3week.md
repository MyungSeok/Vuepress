# 3주차 (11 ~ 15 Chapter)

## Chapter 11 스칼라의 계층구조

모든 클래스가 `Any` 의 서브클래스이기 때문에, `Any` 가 정의해둔 메서드는 모두 '보편적인' 메서드다.

### 11.1 스칼라의 클래스 계층구조

![스칼라의 클래스 계층구조](/img/A118.png)

계층의 최상위에는 `Any` 클래스가 있다.

루트 (root) 클래스 `Any` 에는 서브클래스가 둘 있는데, 바로 `AnyVal` 과 `AnyRef` 다.

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
class Frog extends Animal with Philosophical with HasLegs {
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

하지만 타입 소거 (type erasure) 때문에 `Ordered` 트레이트는 이러한 검사를 수행할 수 없다.

### 12.5 트레이트를 이용해 변경 쌓아 올리기

클래스에 쌓을 수 있는 변경을 적용해보자.

```scala
abstract class IntQueue {
  def get(): Int
  def put(x: Int): Unit
}
```

```scala
import scala.collection.mutable.ArrayBuffer

class BasicIntQueue extends IntQueue {
  private val bu = new ArrayBuffer[int]
  def get() = buf.remove(0)
  def put(x: Int) = { buf += x }
}
```

쌓을수 잇는 변경을 나타내는 `Doubling` 트레이트

```scala
trait Doubling extends IntQueue {
  abstract override def put(x: Int) = { super.put(2 * x) }
}
```

이 선언은 `Doubling` 트레이트가 `IntQueue` 를 상속한 클래스에만 믹스인 될 수 있다는 점이다.

믹스인은 순서가 중요한데, 믹스인한 클래스의 메서드를 호출하면 **가장 오른쪽에 있는 트레이트의 메서드를 먼저 호출한다.**

### 12.6 왜 다중상속은 안되는가 ?

트레이트를 사용할 때에는 특정 클래스에 믹스인한 클래스와 트레이트를 선형화 (linearization) 해서 어떤 메서드를 호출할지 결정한다.

모든 선형화에서 어떤 클래스는 자신의 슈퍼클래스나 믹스인해 넣은 트레이트보다 앞에 위치 한다는 점이다.

아래와 같이 여러 트레이트를 믹스인 한 `Cat` 클래스가 있다고 가정하자.

```scala
class Animal
trait Furry extends Animal
trait HasLegs extends Animal
trait FourLegged extends Animal
class Cat extends Animal with Furry with FourLegged
```

![Cat 클래스의 상속 계층과 선형화](/img/A119.png)

`Cat` 클래스 선형화의 마지막 부분은 `Cat` 의 슈퍼클래스인 `Animal` 을 선형화한 결과이다.

### 12.7 트레이트냐 아니냐, 이것이 문제로다.

확고한 규칙은 없지만 몇가지 가이드라인을 제시하면 다음과 같다.

* 클래스를 사용할 때 
  * 어떤 행위를 재사용하지 않을거라면
* 트레이트를 사용할 때
  * 서로 관련이 없는 클래스에서 어떤 행위를 여러 번 재사용해야 한다면
* 추상클래스를 사용할 때
  * 스칼라에서 정의한 내용을 자바 코드에서 상속해야 한다면

### 12.8 결론

트레이트는 상속을 통해 재사용할 수 잇는 기본 코드 단위다.

## Chapter 13 패키지와 임포트

규모가 큰 프로그램을 작성할 때는 프로그램의 여러 부분이 서로 의존하는 정도를 나타내는 커플링 (coupling) 을 최소화하는 것이 중요하다.

### 13.1 패키지 안에 코드 작성하기

지금까지 봤던 코드 예제들은 이름 없는 패키지 안에서 작성했었다.

`package` 절 다음에 중괄호가 있으면, 그 중괄호 안에 있는 정의는 모드 구 패키지에 속한다.

이런 문법을 패키징 (packaging) 이라 부른다.

```scala
package bobsrockets.navigation {
  class Navigator
}
```

안에 여러 패키지를 넣을 때는 아래와 같이 사용한다.

```scala
package bobsrockets {
  package navigation {
    class Naviator
    package tests {
      class NavigaorSuite
    }
  }
}
```

### 13.2 관련 코드에 간결하게 접근하기

코드를 패키지 계층올 나누는 이유는 사람들이 코드를 훑어볼 때 도움을 주기 위한 목적도 있지만,

컴파일러도 같은 패키지 안에 있는 코드가 서로 관련 있음을 알 수 있다.

```scala
package bobsrockets {
  package navigation {
    class Navigator {
      // bobsrockets.navigation.StarMap 을 쓸 필요가 없다.
      val map = new StarMap
    }
    class StarMap
  }

  class Ship {
    // bobsrockets.navigation.Navigator 를 쓸 필요가 없다.
    val nav = new navigation.Navigator
  }

  package fleets {
    class Fleet {
      // bobsrockets.Ship 을 쓸 필요가 없다.
      def addShip() = { new Ship }
    }
  }
}

```

위 코드는 다음 세가지 규칙을 따른다.

1. 어떤 클래스가 속한 패키지 안에서는 접두사가 없어도 해당 클래스에 접근할 수 있다.
2. 어떤 패캐지를 포함하는 (부모) 패키지 안에서는 해당 패키지에 어떤 접두어도 붙이지 않고 접근할 수 있다.
3. 중괄호 패키지 문법을 사용하면 그 패키지 스코프 밖에서 접근 가능한 모든 이름을 그 패키지 안에서도 쓸 수 있다.

또한 추가적으로 스칼라에서 제공하는 `_root_` 패키지 문법을 통해 하위 패키지에서 다른 패키지로 접근이 가능하다.

```scala
package launch {
  class Booster3
}

package bobsrockets {
  package navigation {
    package launch {
      class Booster1
    }

    class MissionControl {
      val booster1 = new launch.Booster1
      val booster2 = new bobsrockets.launch.Booster2
      val booster3 = new _root_.launch.Booster3
    }
  }
}
```

모든 최상위 패키지는 `_root_` 패키지의 멤버로 취급한다.

### 13.3 임포트 

```scala
package bobsdelights

abstract class Fruit(
  val name: String,
  val color: String
)

object Fruits {
  object Apple extends Fruit("apple", "red")
  object Orange extends Fruit("orange", "orange")
  orbject Pear extends Fruit("pear", "yellowish")

  val menu = List(Apple, Orange, Pear)
}
```

```scala
// Fruit 에 접근
import bobsdelights.Fruit

// bobsdelights 의 모든 멤버에 접근
import bobsdelights._

// Fruits 의 모든 멤버에 접근
import bobsdelights.Fruit._
```

임포트 셀렉터 (import selector) 사용

```scala
// Fruits 의 Apple 과 Orange 만을 불러온다.
import Fruit.{Apple, Orange}

// Apple 을 McIntosh 로 이름을 바꾼다.
import Fruit.{Apple => McIntosh, Orange}

// Fruits 의 Pear 를 제외한 모든 멤버를 불러온다.
import Fruits.{Pear => _, _}
```

### 13.4 암시적 임포트

스칼라는 모든 프로그램에서 몇가지 임포트를 항상 기본적으로 추가된다.

```scala
import java.lang._
import scala._
import Predef._
```

Predef 객체는 타입, 메서드 그리고 스칼라에서 사용하는 암시적 변환 (implicit conversion) 을 포함한다.

스칼라에서는 나중에 임포트한 패키지가 더 앞에서 임포트한 것을 가린다

때문에 `StringBuilder` 를 사용하면 `java.lang.StringBuilder` 가 아니라 `scala.StringBuilder` 를 암시적으로 가르킨다.

### 13.5 접근 수식자

패키지, 클래스, 객체 멤버 앞에 `private`, `protected` 등의 접근 수식자를 둘 수 있다.

#### 비공개 멤버 (private)

오직 그 정의를 포함한 클래스나 객체 내부에서만 접근할 수 있다.
#### 보호 멤버 (protedted)

스칼라에서는 보호 멤버를 정의한 클래스의 서브 클래서에서만 그 멤버에 접근 할 수 있다.
#### 공개 멤버 (public)

`private` 나 `protected` 가 없는 멤버는 공개 멤버이다.

#### 보호 스코프 

접근 수식자를 지정자로 확장 할 수 있다.

```scala
package bobsrockets

package navigation {
  private[bobsrockets] class Navigator {
    protected[navigation] def useStarChart() = {}

    class LegOfJourney {
      private[Navigator] val distance = 100
    }
    private[this] var speed = 200
  }
}

package launch {
  import navigation._
  object Vehicle {
    private[launch] val guide = new Navigator
  }
}
```

#### 가시성과 동반 객체

```scala
class Rocket {
  import Rocket.fuel
  private def canGoHomeAgain = fuel > 20
}

object Rocket {
  private def fuel = 10
  def chooseStrategy(rocket: Rocket) = {
    if (rocket.canGoHomeAgain)
      goHome()
    else 
      pickAStar()
  }

  def goHome() = {}
  def pickAStar() = {}
}
```

`Rocket` 클래스는 `Rocket` 객체의 `fuel` 비공개 메서드에 접근할 수 있다.

### 13.6 패키지 객체

스칼라에서는 패키지 전체에 도우미 메서드 (helper method) 를 두고 싶다면, 패키지의 최상위 수준에 넣으면 된다.

```scala
package object bobsdelights {
  def showFruit(fruit: Fruit) = {
    import fruit._
    println(name + "s are " + color)
  }
}
```

```scala
package printmneu
import bobsdelights.Fruits
import bobsdelights.showFruit

object PrintMenu {
  def main(args: Array[String]) = {
    for (fruit <- Fruits.menu) {
      showFruit(fruit)
    }
  }
}
```

패키지 객체를 사용하는 다른 용도는 타입 별명 (type alias) 와 암시적 변환 (implicit conversion) 을 넣기 위해 사용하는 경우가 많다.

### 13.7 결론

패키지를 사용하면 쉽고 쓸모 있게 모듈화가 가능하다.

## Chapter 14 단언문과 테스트

이 장에서는 작성한 소프트웨어가 제대로 동작하는지 확인할 수 있는 두가지 방법을 보여준다.

### 14.1 단언문

스칼라에서는 `assert` 메서드를 호출하는 방법으로 단언문을 작성한다.

단언문의 조건이 충족되지 않는 경우에는 `AssertionError` 를 발생시킨다.

인자를 2개 받는 단언문도 있는데 `assert(조건, 설명)` 으로 구성된다.

이 설명의 데이터 타입은 `Any` 이며 어떤 객체라도 넘길수 있다.

```scala
def above(that: Element): Element = {
  val this1 = this widen that.width
  val that1 = that widen this.width
  assert(this1.width == that1.width)
  elem(this1.contents ++ that1.contents)
}
```

위와 동일한 기능으로 `ensuring` 을 사용하여 함수의 결과 확인하기가 있다.

```scala
private def widen(w: Int): Element = 
  if (w <= width)
    this
  else {
    val left = elem(' ', (w - width) / 2, height)
    val right = elem(' ', w - width - left.width, height)
    left beside this beside right
  } ensuring (w <= _.width)
```

> JVM 에서 `-ea` 나 `-da` 명령행 옵션을 사용하면 `assert` 와 `ensuring` 동작을 켜거나 끌수가 있다.

### 14.2 스칼라에서 테스트하기

스칼라에서는 여러 테스트 도구가 존재한다.

* 스칼라 테스트 (Scala Test)
* 스칼라 스팩스2 (Scala Spec2)
* 스칼라 체크 (Scala Check)


스칼라 테스트는 가장 유연한 테스트 프레임워크이다. <br/>
다른 문제를 풀기 위해 쉽게 커스터마이징 할 수 있다.

`AnyFunSuite` 로 작성하며 JUnit 을 경험해본 개발자는 익술할 것이다.

```scala
import org.scalatest.funsuite.AnyFunSuite
import Element.elem

class ElementSuite extends AnyFunSuite {
  test("elem result should have passed width") {
    val ele = elem('x', 2, 3)
    assert(ele.width == 2)
  }
}
```

**스칼라 테스트에서 중심적인 개념은 테스트 집합인 스위트 (suite)** 이다.

테스트는 시작해서 성공 혹은 실패, 대기, 취소 할 수 있는 이름이 있는 어떤것들이다.<br/>
트레이트 스위트 (trait suite) 는 테스트를 실행하기 위해 사전에 준비된 **생명주기 메서드 (life cycle) 를 지원**한다.

이러한 메서드들은 테스트 작성과 실행 방법을 커스터마이징 하기 위해 오버라이드 할 수 있다.

`AnyFunSuite` 를 포함한 모든 스칼라 테스트 스타일은 서술적인 이름을 갖는 테스트 작성을 권장하고자 설계됬다.

### 14.3 충분한 정보를 제공하는 실패 보고

단언문이 실패한다면 **파일이름, 실패한 단언문 줄 번호, 정보가 담긴 오류메세지가 오류 보고에 포함**되어야 한다.

```bash
scala> val width = 3
width: Int = 3

scala> assert(width == 2)
org.scalatest.exceptions.TestFailedException: 
    3 did not equal 2
```

단언문 실패에 더 상세한 정보를 원한다면, 스칼라 테스트에 Diagrams 를 사용할 수 있다.

```bash
scala> assert(List(1, 2, 3).contains(4))
org.scalatest.exceptions.TestFailedException:

  assert(List(1, 2, 3).contains(4))
         |    |  |  |  |        |
         |    1  2  3  false    4
         List(1, 2, 3)
```

스칼라테스트의 `assert` 메서드는 오류 메세지에서 실제 결과와 기대되는 결과의 차이를 보여주지 않는다.

만약 어떤 메서드가 발생시킬 수 있는 예외를 검사하고 싶다면, 스칼라테슽트의 assertThrows 메서드를 다음과 같이 사용할 수 있다.

```scala
assertThrows[IllegalArgumentException] {
  elem('x', -2, 3)
}
```

중괄호 내의 코드가 다른 예외를 발생시키거나, 어떤 예외도 발생시키지 않는다면, assertThrows 는 TestFailedException 과 함께 즉시 끝날것이다.

### 14.4 명세로 테스트하기

동작 주도 개발 (BDD: Behavior Driven Development) 테스트는 코드의 동작이 사람이 읽을 수 있는 명세로 작성하고, 코드가 그 명세에 따라 장동하는지 확인하는 테스트를 작성하는데 중점을 둔다.

```scala
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class ElementSpec extends AnyFlatSpec with Matchers {
  "A UniformElement" should
    "have a width equal to the passed value" in {
      val ele = elem ('x', 2, 3)
      elem.width should be (2)
    }

    it should "have a height equal to the passed value" in {
      val ele = elem('x', 2, 3)
      ele.height should be (3)
    }

    it should "throw an IAE if passed a negative width" in {
      an [IllegalArgumentException] should be thrownBy {
        elem('x', -2, 3)
      }
    }
}
```

`AnyFlatSpec` 에서는 명세 절 (specifier clause) 을 사용해 테스트를 작성한다.

먼저 테스트 할 주제에 대해 이름을 문자열로 붙이는 것부터 시작한다.<br/>
그 뒤에 `should` 를 넣고, 그 뒤에 주제의 작동을 설명하는 문자열이 오고, 그 다음에 `in` 이 따라온다.

`in` 다음에는 중괄호 안에 지정한 동작을 테스트하는 코드를 작성한다.

> 에릭 토레보르 (Eric Torreborrre) 가 스칼라로 작성한 오픈소스 도구인 스펙스2 (specs2) 테스트 프레임워크도 BDD 를 지원한다.

BDD 의 가장 큰 아이디어 중 하나는 어떤 소프트웨어 시스템을 만들지 경정하는 사람, 그 소프트웨어를 구현하는 사람, 그리고 그 소프트웨어가 잘 마무리 되어 동작하는지를 결정하는 사람 사이의 의사소통을 테스트가 도와줄 수 있다는 것이다.

```scala
import org.scalatest._
import org.scalatest.featurespec.AnyFeatureSpec

class TVSetSpec extends AnyFeatureSpec with GivenWhenThen{
  Feature("TV power button")
    Scenario("User presses power button when TV is off") {
      Given("a TV set that is switched off")
      When("the power button is pressed")
      Then("the TV should switch on)
      pending
    }
}
```

`AnyFeatureSpec` 은 소프트웨어 요구사항에 대한 대화를 돕기 위해 설계되었다.

이는 구체적인 특징 (feature) 은 밝혀야 하고, 그런 특징을 시나리오 (scenario) 에 명시해야 한다.<br/>
Given, When, Then 은 구체적인 개별 시나리오에 대한 대화의 초점을 맞추는데 도움을 줄 수 있다.

> `pending` 호출은 테스트나 실제 동작이 아직 구현되지 않았다는 사실을 명시한다.

### 14.5 프로퍼티 기반 테스트

리커드 닐슨 (Rickard Nilsson) 이 작성한 오픈소스 프레임워크인 스칼라체크 (Scala Check) 는 스칼라로 만들어진 또 다른 유용한 테스트 도구이다.

스칼라 체크는 코드가 준수해야 하는 프로퍼티를 명시하게 해준다.

```scala 3
import org.scalatest.wordspec.AnyWordSpec
import org.scalatestplus.scalacheck.ScalaCheckPropertyChecks
import org.scalatest.matchers.must.Matchers._

class ElementSpec extends AnyWorldSpec with ScalaCheckPropertyChecks {
  "elem result" must {
    "have passed width" in {
      forAll { (w: Int) =>
        whenever (x > 0) {
          elem('x', w % 100, 3).width must equal (w % 100)
        }
      }
    }
  }
}
```

`forAll` 메서드 내부에 elem 팩토리가 지켜야 하는 프로퍼티를 검사한다.

```scala
whenever (w > 0) {
  elem('x', w % 100, 3).width must equal (w % 100)
}
```

`whenever` 절은 왼쪽 편에 있는 식이 `true` 일 때마다 오른쪽에 있는 식이 `true` 가 되어야 함을 명시한다.

스칼라 체크는 프로퍼티에 맞지 않는 값을 찾기 위해 `w` 에 들어갈 수 있는 값을 여러개 생성하고 각각을 테스트한다.<br/>
스칼라 체크가 시도하는 모든 값을 프로티가 만족하는 경우 테스트를 통과하고, 그렇지 않으면 실패의 원인이 된 값이 들어있는 `TestFailedException` 을 뿜으며 테스트가 종료된다.

```scala
abstract class Element {
  def contents: Array[String]
  def height: Int = contents.length
  def width: Int = if (height == 0) 0 else contents(0).length
}
```

> Element 클래스는 10.3 예제를 따른다.

### 14.6 테스트 조직과 실행

스칼라 테스트에서는 스위트 (suite) 안에 스위트를 포함 시킴으로써 큰 테스트를 조직화 한다.

이는 어떤 스위트가 실행되면 그 안에 테스트 뿐만이 아니라 내부에 있는 스위트의 테스트도 실행함으로써 내포된 모든 스위트를 실행한다.

큰 스위트는 Suite 객체 트리로 표현할 수 있다.

수동 혹은 자동으로 스위트를 포함 시킬수 있다.

#### 수동

* `nestedSuites` 메스드를 오버라이드 하거나 포함시키고 싶은 생성자에 `Suite` 클래스의 생성자에 전달
* 스위트간의 포함관계를 위해서 추가 생성자를 제공

#### 자동

* 스칼라 테스트의 `Runner` 에 패키지 이름을 전달

### 14.7 결론

자바에서의 익숙한 테스트 도구의 장점을 살릴수도 있고, 스칼라테스트, 스칼라체크, 스팩스2 등의 스칼라만을 위해 설계한 새로운 도구의 이점도 취할 수 있다.

## Chapter 15 케이스 클래스와 패턴 매치

케이스 클래스 (Case Class) 와 패턴 매치 (Pattern Match) 는 일반적이고 캡슐화되지 않는 데이터 구조를 작성할 때 쓰인다.

### 15.1 간단한 예

케이스 클래스의 정의 

```scala
abstract class Expr 
case class Var(name: String) extends Expr
case class Number(num: Double) extends Expr
case class UnOp(operator: String, arg: Expr) extends Expr
case class BinOp(operator: String, left: Expr, right: Expr) extends Expr
```

#### 케이스 클래스 

클래스 선언에서 각 서브 클래스 앞에 case 라는 수식자가 있음을 주의한다.

`case` 수식자는 스칼라 컴파일러에게 해당 클래스에 문법적으로 편리한 기능 몇가지를 추가하라고 지시한다.

1. 컴파일러는 클래스 이름과 같은 팩토리 메서드를 추가한다.

```bash
scala> val v = Var("x")
v: Var = Var(x)
```

팩토리 메서드는 중첩해서 객체를 생성할 때 좋다.

2. 케이스 클래스의 파라미터 목록에 있는 모든 인자의 암시적으로 `val` 접두사를 붙인다.

```bash
scala> v.name
res0: String = x

scala> op.left
res1: Expr = Number(1.0)
```

각 파라미터가 클래스의 필드도 된다.

3. 컴파일러는 케이스 클래스에 `toString`, `hashCode`, `equals` 메서드의 **일반적인 구현**을 추가한다.

```bash
scala> println(op)
BinOp(+,Number(1.0),Var)

scala> op.right == Var("x")
res3: Boolean = true
```

스칼라에서는 `==` 을 사용한 비교를 항상 `equals` 에 위임한다.

4. 컴파일러는 어떤 케이스 클래스에서 일부를 변형한 복사본을 생성하는 `copy` 메서드를 추가한다.

이 `copy` 메서드는 **디폴트 파라미터**와 **이름을 붙인 파라미터를 제공**한다.

```bash
scala> op.copy(operator = "-")
BinOp(-,Number(1.0),Var)
```

**하지만 케이스 클래스의 가장 큰 장점은 패턴 매치를 지원한다는 점이다.**

#### 패턴 매치

패턴 매치는 스칼라에서 함수를 단순화 시키는것이 핵심

```scala
 def simplifyTop(expr: Expr): Expr = expr match { 
  case UnOp("-", UnOp("-", e))  => e
  case BinOp("+", e, Number(0)) => e
  case BinOp("*", e, Number(1)) => e
  case _ => expr 
}

simplifyTop(UnOp("-", UnOp("-", Var("x")))) 
// Var(x)

simplifyTop(BinOp("+", UnOp("-", Var("x")), Number(3))) 
// BinOp(+,UnOp(-,Var(x)),Number(3.0))  ???
```

:::tip TODO
[방문자 패턴](/backend/language/java/design-pattern/behavioral/visitor) 을 사용하여 동일한 기능을 구현해보자
:::

#### switch 와 match 의 비교

match 식은 자바 스타일의 switch 를 일반화한 것이다.

스칼라의 match 와 자바 switch 차이점은 다음과 같다.

* 스칼라의 match 는 표현식이다. 따라서 결괏값을 내놓는다.
* 스칼라의 대안 표현식은 다음 케이스로 빠지지 않는다.
* match 에 성공하지 못한 경우 MatchError 예외가 발생한다.

### 15.2 패턴의 종류

#### 와일드 카드 패턴

#### 상수 패턴

#### 변수 패턴

##### 변수 또는 상수?

#### 생성자 패턴

#### 시퀀스 패턴

#### 튜플 패턴

#### 타입 지정 패턴

##### 타입 소거

#### 변수 바인딩

### 15.3 패턴 가드

한 패턴 안에 오직 한번만 나와야 한다. 이는 스칼라가 선형 패턴으로 제한하기 때문이다.

```scala
scala> def simplifyAdd(e: Expr) = e match { 
          case BinOp("+", x, x) => BinOp("*", x, Number(2)) 
          case _ => e 
      } 

// error: x is already defined as value x
```

하지만 패턴 가드 (pattern guard) 를 사용하면 match 표현식을 다시 쓸 수 있다.

```bash
scala> def simplifyAdd(e: Expr) = e match { 
        case BinOp("+", x, y) if x == y => 
        BinOp("*", x, Number(2)) 
        case _ => e 
      } 
```

패턴 가드는 패턴 뒤에 오고 `if` 로 시작한다.

### 15.4 패턴 겹침

패턴 매치는 코드에 있는 순서를 따른다.

따라서 모든 경우를 처리하는 case 문이 더 구체적인 규칙 다음에 와야 한다. (더 좁은 범위를 처리하는 규칙이 선행되어야 한다.)

```scala
def simplifyBad(expr: Expr): Expr = expr match { 
  case UnOp(op, e) => UnOp(op, simplifyBad(e)) 
  case UnOp("-", UnOp("-", e)) => e 
} 

// case UnOp("-", UnOp("-", e)) => e 코드는 도달할 수 없다.
```

### 15.5 봉인된 클래스

컴파일러의 도움을 얻어 모든 케이스의 매치를 가능하도록 놓친 패턴 조합이 있으면 알려준다.

케이스 클래스를 **봉인된 클래스 (sealed class)** 로 만들면 그 클래스와 같은 파일이 아닌 다른 곳에서 새로운 서브 클래스를 만들 수 없다.

봉인된 클래스를 만드려는 클래스 앞에 `sealed` 라는 키워드를 넣으면 된다.

```scala
sealed abstract class Expr 
case class Var(name: String) extends Expr 
case class Number(num: Double) extends Expr 
case class UnOp(operator: String, arg: Expr) extends Expr 
case class BinOp(operator: String, left: Expr, right: Expr) extends Expr
```

위와 같이 봉인된 클래스를 정의해놓고 아래와 같이 매치 케이스를 작성한다.

```scala
def describe(e: Expr): String = e match { 
    case Number(_) => "a number" 
    case Var(_)    => "a variable" 
} 
```

다음과 같은 경고가 노출 된다.

```bash
warning: match is not exhaustive!
missing combination         UnOp 
missing combination         BinOp
```

만약 경고를 없애고 싶다면 나머지 케이스를 다 매치시켜놓는다.

```scala
def describe(e: Expr): String = e match { 
  case Number(_) => "a number" 
  case Var(_) => "a variable" 
  case _ => throw new RuntimeException
}
```

더 세련된 방법은 `@unchecked` 어노테이션을 추가하는 것이다.

이 `@unchecked` 어노테이션은 패턴 매치시 모든 패턴을 다 다루는지 검사하는 일을 생략한다.

### 15.6 Options 타입

스칼라에는 Option 이라는 표준 타입이 있다. 이 타입은 선택적인 값을 표현하며 두가지 형태가 있다.

만약 `x` 가 실제 값이라면 `Some(x)` 라는 형태로 값이 있음을 표현할 수 있다. 반대로 값이 없으면 `None` 이라는 객체가 된다.

```scala
scala> def show(x: Option[String]) = x match { 
        case Some(s) => s 
        case None => "?" 
      } 
```

스칼라에서는 선택적인 값을 나타내기 위해 `Option` 을 사용하도록 권장한다.

### 15.7 패턴은 어디에서나

독립적인 match 표현식뿐 아니라, 스칼라의 여러곳에서 패턴을 사용할 수 있다.

#### 변수 정의에서 패턴 사용하기

`val` 이나 `var` 를 정의할 때 식별자 대신에 패턴을 사용할 수 있다.

```bash
scala> val myTuple = (123, "abc") 
myTuple: (Int, java.lang.String) = (123,abc) 

scala> val (number, string) = myTuple 
number: Int = 123 
string: java.lang.String = abc
```

다음과 같이 구조해체 구문과 같이(?) 사용 가능하다.

```bash
scala> val exp = new BinOp("*", Number(5), Number(1)) 
exp: BinOp = BinOp(*,Number(5.0),Number(1.0)) 

scala> val BinOp(op, left, right) = exp 
op: String = * 
left: Expr = Number(5.0) 
right: Expr = Number(1.0)
```

#### case 나열해서 부분 함수 만들기

```scala
val withDefault: Option[Int] => Int = {
  case Some(x) => x
  case None => 0
}
```

아래 `case` 문은 부분 함수처럼 사용 가능하다.

```scala
scala> withDefault(Some(10)) 
// Int = 10 

scala> withDefault(None) 
// Int = 0
```

이러한 기능은 아카 액터 (akka actors) 라이브러리에서 유용한데, case 를 나열하여 receive 메서드 정의를 가능케 한다.

유의할 점은 case 나열은 부분 함수 (partial function) 이 처리하지 않는 값을 전달해서 호출하면 실행 시점에 예외가 발생한다.

```scala
val second: List[Int] => Int = {
  case x :: y :: _ => y 
}

// warning: match is not exhaustive!
// missing combination      Nil
```

위 코드는 원소를 3개를 넘기면 통과하지만 빈 리스트를 넘기면 실패한다.

이러한 이슈 해결을 위해 `isDefinedAt` 메서드를 제공하는데, `isDefinedAt` 메서드는 부분 함수가 어떤 값에 대해 결괏값을 정의하고 있는지 알려준다.

```scala
second.isDefinedAt(List(5,6,7))
// Boolean = true                             

second.isDefinedAt(List()) 
// Boolean = false
```

#### for 표현식에서 패턴 사용하기

```scala
for ((country, city) <- capitals) 
  println("The capital of "+ country +" is "+ city) 

// The capital of France is Paris 
// The capital of Japan is Tokyo
```

위와 같이 `for` 표현식 안에 패턴을 사용할 수 있다.

### 15.8 복잡한 예제

> 예제 코드 설명

### 15.9 결론

케이스 클래스와 패턴매치를 사용하면 객체지향에서 지원하지 않는 간결한 표현법의 이점을 누릴수 있다.
