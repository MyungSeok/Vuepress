# Chapter 6 클래스 설계

클래스는 객체 지향 프로그래밍(Object Oriented Programming, OOP) 패러다임에서 가장 중요한 추상화이다.

이 장에서는 다음과 같은 내용을 알아 보기로 한다.

* 상속은 언제 어떻게 활용해야 할지?
* 하나의 메서드를 가진 인터페이스 함수타입은 언제 사용해야 할지
* `equals` `hashCode` `compareTo` 는 어떤 규약을 갖고 있는지?
* 멤버와 확장 함수는 어떻게 구분해서 사용해야 할지?

규약을 깨면 심각한 문제가 발생하고, 규약을 잘 따르면 안전하고 클린한 코드를 만드는데 도움이 된다.

## Item 36 상속보다는 컴포지션을 사용하라

상속은 매우 강력한 기능으로 'is-a' 관계의 객체 계층 구조를 만들기 위해 설계되었다.

:::tip 객체 지향 관점에서 is-a vs has-a
'is-a' 관계를 통해 생성된 클래스 및 객체는 상속 관계(inheritance)에서 둘은 밀접하게 결합되므로<br/>
부모 또는 기저 클래스의 명세에서 변경이 발생하면 코드가 손상될 위험이 있다.

'has-a' 관계를 통해 생성된 클래스 및 객체는 포함 관계(composite)의 일종으로 느슨하게 결합된다.<br/>
이는 상속에 비해 명세에 변경이 발생하는 경우에도 구성요소를 쉽게 변경할 수 있다는 의미이다.
:::

객체 관계가 명확하지 않을경우에는 상속 보다는 컴포지션을 사용하는 것이 좋다.

### 간단한 행위 재사용

```kotlin
class ProfileLoader {
  fun load() {
    // Progress bar 노출
    // Profile 읽기
    // Progress bar 숨김
  }
}

class ImageLoader {
  fun load() {
    // Progress bar 노출
    // Image 읽기
    // Progress bar 숨김
  }
}
```

위와 같은 경우 대부분의 개발자가 슈퍼 클래스를 만들어서 공통된 행위를 아래와 같이 추출하려 할것이다.

```kotlin
abstract class LoaderWithProgress {
  fun load() {
    // Progress bar 노출
    innerLoad()
    // Progress bar 숨김
  }

  abstract fun innerLoad()
}

class ProfileLoader: LoaderWithProgress() {
  override fun innerLoad() {
    // Profile 읽기
  }
}

class ImageLoader: LoaderWithProgress() {
  override fun innerLoad() {
    // Image 읽기
  }
}
```

이런 간단한 코드는 문제없이 동작하지만 몇가지 단점이 있다.

#### 상속은 하나의 클래스만 대상으로 할 수 있다.

* 상속으로 행위를 추출하다 보면 나중에는 거대한 슈퍼 클래스 혹은 다양한 Base 클래스를 만들 우려가 있다.
* 굉장히 깊고 복잡한 계층구조를 만들 수 있다.

#### 상속은 클래스의 모든 것을 가져오게 된다.

* 불필요한 함수를 갖는 클래스가 만들어 질 수 있다. (ISP 위반)

#### 상속을 이해하기 어렵다

* 메서드의 작동 방식을 이해하기 위해 복잡도가 높은 슈퍼클래스를 여러번 확인해야 한다면 이에 따른 이해 비용이 증가된다.

이러한 이유들로 인해 컴포지션(composition) 을 사용하여 구성하는것을 권장한다.

> 컴포지션(Composition)<br/>
> 객체를 프로퍼티로 갖고, 함수를 호출하는 형태로 재사용하는 것을 의미

```kotlin
class Progress {
  fun showProgress() { /* Progress 노출 */ }
  fun hideProgress() { /* Progress 숨김 */ }
}

class ProfileLoader {
  val progress = Progress()

  fun load() {
    progress.showProgress()
    // Profile 읽기
    progress.hideProgress()
  }
}

class ImageLoader {
  val progress = Progress()

  fun load() {
    progress.showProgress()
    // Image 읽기
    progress.hideProgress()
  }
}
```

하나의 클래스 내부에서 여러 기능을 재사용할수 있고 부가적인 기능들을 추가할 수 있다.

예를들면 아래와 같이 이미지를 읽고 나서 경고창을 출력하는 방식이다.

```kotlin {3,9}
class ImageLoader {
  private val progress = Progress()
  private val finishedAlert = FinishedAlert()

  fun load() {
    progress.showProgress()
    // Image 읽기
    progress.hideProgress()
    finishedAlert.show()
  }
}
```

하나이상의 클래스를 상속할 수 없으므로 이를 상속으로 구현하려면 복잡한 계층 관계를 만들어질수 있다.

이러한 계층 관계는 복잡하며, 이해하기도 어렵고, 수정하기도 어렵다.

### 모든것을 가져올 수밖에 없는 상속

상속은 슈퍼클래스의 메서드, 제약, 행위 등의 모든것을 가져온다.

상속은 개게의 계층 구조를 나타낼 때 굉장히 좋은 구조이지만 일부분만 재사용하기 위한 목적으로는 적합하지 않다.

일부분만 재사용하고 싶다면 컴포지션을 사용하라.

```kotlin
abstract class Dog {
  open fun bark() { /*...*/ }
  open fun sniff() { /*...*/ }
}
```

아래 로봇 강아지처럼 짖기는 하지만 냄새를 맡을수 없다면 문제가 생긴다.

```kotlin
class RobotDog: Dog() {
  override fun sniff() {
    // ISP(Interface Segregation Principle) 에 어긋남
    throw Error("지원하지 않는 동작입니다.")
  }
}
```

또한 슈퍼클래스의 동작을 서브클래스에서 깨버리기 때문에 리스코프 치환 원칙(LSP: Liskov Substitution Principle) 에도 어긋난다.

> **인터페이스 분리 원칙 (ISP: Interface Segregation Principle)**<br/>
> 객체는 자신이 호출하지 메소드에 의존하지 않아야 하는 원칙<br/>
> 최소한의 의미에 맞는 인터페이스만 구현해야 한다.<br/>
> 시스템의 내부 의존성을 약회시켜 리펙토링, 수정, 배포등을 쉽게 할 수 있다.

<!--  -->

> **리스코프 치환 원칙(LSP: Liskov Substitution Principle)**<br/>
> 자식 (파생) 클래스는 언제나 부모 (기반) 타입과 호환이 되어야 한다.<br/>
> 서브타입은 언제나 기반 타입과 호환될 수 있어야 한다.<br/>
> 하위 클래스가 상위 클래스의 역할을 대신할 때 논리적으로 맞아 떨어져야 한다.

### 캡슐화를 깨는 상속

상속을 활용할 때는 외부에서 이를 어떻게 활용하는지도 중요하지만, 내부적으로 이를 어떻게 활용하는지도 중요하다.

내부적인 구현 방법 방법 변경에 의해서 클래스의 캡슐화가 깨질수 있다.

```kotlin
class CounterSet<T>: HashSet<T>() {
  var elementsAdded: Int = 0
    private set

  override fun add(element: T): Boolean {
    elementsAdded++
    return super.add(element)
  }

  override fun addAll(elements: Collection<T>): Boolean {
    elementsAdded += elements.size
    return super.addAll(elements)
  }
}
```

```kotlin
val counterList = CounterSet<String>()
counterList.addList(listOf("A", "B", "C"))
print(counterList.elementsAdded)  // 6
```

위 코드에서 요소를 3개 추가 했는데 결과는 6이 출력이 된다.

이는 `HashSet` 에서 `addAll` 내부에서 `add`를 사용하기 때문에 발생하는 문제이다.

물론 `addAll` 을 제거하거나 상속 대신 컴포지션을 사용하여 구현을 한다면 문제 해결이 가능하다.

```kotlin {2}
class CounterSet<T> {
  private val innerSet = HashSet<T>()
  var elementsAdded: Int = 0
    private set
  
  fun add(element: T) {
    elementsAdded++
    innerSet.add(element)
  }
  
  fun addAll(elements: Collection<T>) {
    elementsAdded += elements.size
    innerSet.addAll(elements)
  }
}
```

```kotlin
val counterList = CounterSet<String>()
counterList.addList(listOf("A", "B", "C"))
print(counterList.elementsAdded)  // 3
```

위와 같이 수정하였을때 발생될수 있는 문제는 다형성이 사라진다는것이다. (CounterSet 은 더이상 Set 이 아님)

이러한 예외적인 상황을 위해 위임패턴을 사용할 수 있다.

위임 패턴은 클래스가 인터페이스를 상속받게 하고, 포함한 객체의 메서드들을 활용해서 인터페이스에서 정의한 메서드를 구현하는 패턴이다.

이렇게 구현된 메서드를 포워딩 메서드(forwarding method) 라고 한다.

```kotlin
class CounterSet<T>: MutableSet<T> {
  private val innerSet = HashSet<T>()
  var elementsAdded: Int = 0
    private set

  override fun add(element: T): Boolean {
    elementsAdded++
    return innerSet.add(element)
  }

  override fun addAll(elements: Collection<T>): Boolean {
    elementsAdded += elements.size
    return innerSet.addAll(elements)
  }

  override val size: Int
    get() = innerSet.size

  /*...*/
  /* 인터페이스에서 정의한 메서들들 재구현 */
  /*...*/
  
  override fun retainAll(elements: Collection<T>): Boolean = 
    innerSet.retainAll(elements)
}
```

위와 같이 만들면 포워딩하는 메서드가 너무 많아진다.

하지만 코틀린에서는 인터페이스 위임을 활용하여 다음과 같이 짧게 작성할 수 있다.

```kotlin
class CounterSet<T> (
  private val innerSet: MutableSet<T> = mutableSetOf()
): MutableSet<T> by innerSet {
  var elementsAdded: Int = 0
    private set

  override fun add(element: T): Boolean {
    elementsAdded++
    return innerSet.add(element)
  }

  override fun addAll(elements: Collection<T>): Boolean {
    elementsAdded += elements.size
    return innerSet.addAll(elements)
  }
}
```

위와 같이 코드를 작성하면 컴파일하는 시점에 포워딩 메서드들이 자동으로 만들어진다.

### 오버라이딩 제한하기

개발자가 상속용으로 설계되지 않은 클래스를 상속하지 못하게 하려면 `final`을 사용하면 된다.

상속은 허용하지만 메서드는 오버라이드 하지 못하게 만들고 싶은 경우에는 `open` 키워드를 사용하면 된다.

```kotlin
open class Parent {
  fun a() {}
  open fun b() {}
}

class Child: Parent() {
  override fun a() {} // 오류
  override fun b() {}
}
```

상속용으로 설계된 메서드에만 `open` 을 붙이면 된다.

메서드 오버라이드를 할때, 서브 클래스에서 해당 메서드에 final 을 붙일 수 있다.

```kotlin
open class ProfileLoader: InternetLoader() {
  final override fun loadFormInterner() {
    // 프로파일 읽음
  }
}
```

이를 활용하면 서브 클래스에서 오버라이드 할 수 있는 메서드를 제한할 수 있다.

### 정리

컴포지션과 상속은 다음과 같은 차이점이 있다.

#### 컴포지션은 더 안전하다.

* 다른 클래스의 내부적인 구현에 의존하지 않고, 외부에서 관찰되는 동작에만 의존하므로 안전하다.

#### 컴포지션은 더 유연하다.

* 상속은 한 클래스 에서만 가능하지만, 컴포지션은 여러 클래스를 대상으로 할 수 있다.
* 상속은 모든것을 받아야 하지만, 컴포지션은 필요한 부분만 받을 수 있다.
* 상속은 서브클래스가 슈퍼클래스의 영향을 받지만, 컴포지션에서는 받는 영향이 제한적이다.

#### 컴포지션은 더 명시적이다.

* 상속은 메서드가 오는지 확인하는것이 번거롭지만, 컴포지션은 명시적으로 활용하기 때문에 확실히 알 수 있다.

#### 컴포지션은 생각보다 번거롭다.

* 컴포지션은 객체를 명시적으로 사용해야 하므로, 사용하는 클래스를 일일이 수정하는 경우가 많다.

#### 상속은 다형성을 활용할 수 있다.

* 상속을 사용하는 경우 슈퍼클래스와 서브클래스의 규약을 항상 잘 지켜야 한다.

## Item 37 데이터 집합 표현에 data 한정자를 사용하라

클래스를 데이터를 전달하는 목적으로 사용해야 하는 경우에는 `data` 한정자가 제공하는 편의를 이용하는것이 좋다.

```kotlin
data class Player(
  val id: Int,
  val name: String,
  val points: Int
)

val player = Player(0, "Blue", 3)
```

`data` 한정자를 붙이면, 다음 몇가지 함수가 자동으로 생성된다.

#### toString

클래스의 이름과 기본 생성자 형태로 모든 프로퍼티와 값을 출력해준다.

```kotlin
print(player) // Player(id = 0, name=Blue, point=3)
```

#### equals

기본 생성자의 프로퍼티가 같은지 확인해준다.

hashCode 는 equals 와 같은 결과를 낸다.

```kotlin
player == Player(0, "Blue", 3)  // true
player == Player(0, "Berry", 5) // false
```

#### copy

immutable 데이터 클래스를 만들 때 편리하다

copy는 기본 생성자 프로퍼티가 같은 새로운 객체를 복제한다.

새로 만들어진 객체의 값은 이름있는 아규먼트를 활용해서 변경할 수 있다.

```kotlin
val newObj = player.copy(name = "Thor")
print(newObj) // Player(id=0, name=Thor, points=3)
```

이러한 copy 메서드는 data 한정자만 붙이면 자동으로 만들어져서 내부구현을 자세히 알 필요는 없지만 대충(?) 다음과 같이 구현되어 있을것이다.

```kotlin
fun copy(
  id: Int = this.id,
  name: String = this.name,
  points: Int = this.points
) = Player(id, name, points)
```

copy 메서드는 객체를 얕은복사를 하지만 이는 immutable 이라면 상관이 없다. immutable 객체는 깊은 복사한 객체가 필요없기 때문이다.

componentN 함수(component1, component2 등)는 위치를 기반으로 객체를 해제할 수 있게 해준다.

```kotlin
val (id, name, points) = player
```

위와 같이 객체를 해제하는 코드를 작성하면, 코틀린은 내부적으로 componentN 함수를 사용하는 다음과 같은 코드로 변환한다.

```kotlin
// 컴파일 후
val id: Int = player.component1()
val name: String = player.component2()
val points: Int = player.component3()
```

componentN 함수만 있다면 `List` 와 `Map.Entity` 등 원하는 형태로도 객체를 해제할 수 있다.

```kotlin
val visited = listOf("China", "Russia", "India")
val (first, second, third) = visited

println("$first $second $third")
// China Russia India
```

```kotlin
val trip = mapOf(
  "China" to "Tianjin",
  "Russia" to "Petersburg",
  "India" to "Rishikesh"
)

for ((country, city) in trip) {
  println("We loved $city in $country")
  // We loved Tianjin in China
  // We loved Petersburg in Russia
  // We loved Rishikesh in India
}
```

위치를 잘못 지정한다면 다양한 문제가 발생할 수 있다.

때문에 객체를 해제할 때는 데이터 클래스의 기본 성성자에 프로퍼티 이름과 같은 이름을 사용하는것이 좋다.

### 튜플 대신 데이터 클래스 사용하기

데이터 클래스는 튜플보다 많은 것을 제공한다.

코틀린의 튜플은 `Serializable` 기반으로 만들어지며, `toString` 을 사용할 수 있는 제네릭 데이터 클래스이다.

```kotlin
public data class Pair<out A, out B> (
  public val first: A,
  public val second: B
): Serializable {
  public override fun toString(): String =
    "($first, $second)"
}

public data class Triple<out A, out B, out C>(
  public val first: A,
  public val second: B,
  public val third: C
): Serializable {
  public override fun toString(): String =
    "($first, $second, $third)"
}
```

튜플은 데이터 클래스와 같은 역할을 하지만 훨씬 가독성이 나쁘며, 튜플만 보고는 어떤 타입을 나타내는지 예측할 수 없다.

대부분의 경우 데이터 클래스가 더 좋기는 하지만 Pair와 Triple 은 몇 가지 지역적인 목적으로 존재한다.

* 값에 간단하게 이름을 붙일 때
  
  ```kotlin
    val (description, color) = when {
      degrees < 5 -> "cold" to Color.BLUE
      degrees < 23 -> "mild" to Color.YELLOW
      else -> "hot" to Color.RED
    }
  ```

* 표준 라이브러리에서 볼 수 있는 것처럼 미리 알 수 없는 집합(aggregation)을 표현할 때
  
  ```kotlin
    val (odd, even) = numbers.partition { it % 2 == 1 }
    val map = mapOf(1 to "San Francisco", 2 to "Amsterdam")
  ```

위 두 경우를 제외하면 무조건 데이터 클래스를 사용하는것이 좋다.

데이터 클래스를 사용하면 다음과 같은 효과가 있다.

* 함수의 리턴타입이 더 명확해진다.
* 리턴 타입이 더 짧아지며, 전달하기 쉽다.
* 사용자가 데이터 클래스에 적혀 있는 것과 다른 이름을 활용해 변수를 해제하면, 경고가 출력된다.

데이터 클래스는 좋은 도구이다.

## Item 38 연산 또는 액션을 전달할 때는 인터페이스 대신 함수 타입을 사용하라

연산 또는 액션을 전달할 때 메서드가 하나만 있는 인터페이스를 활용한다.

이러한 인터페이스를 SAM(Single-Abstract Method) 이라고 한다.

```kotlin
interface OnClick {
  fun clicked(view: View)
}
```

함수가 SAM을 받는다면, 이러한 인터페이스를 구현한 객체를 전달받는다는 의미이다.

```kotlin
fun setOnclickListener(listener: Onclick) {
  // ...
}

setOnClickListener(object: Onclick {
  override fun clicked(view: View) {
    // ...
  }
})
```

이런 코드를 함수 타입을 사용하는 코드로 변경하면, 더 많은 자유를 얻을 수 있다.

```kotlin
fun setOnClickListener(listener: (View) -> Unit) {
  // ...
}
```

### 언제 SAM을 사용해야 할까?

코틀린이 아닌 다른 언어에서 사용할 클래스를 설계할 때이다.

자바에서는 인터페이스가 더 명확하다. 함수 타입을 만들어진 클래스는 자바에서 타입 별칭과 IDE의 도움을 제대로 받을 수 없다.

다른 언어에서 코틀린의 함수 타입을 사용하려면, Unit을 명시적으로 리턴하는 함수가 필요하다.

```kotlin
class CalendarView() {
  var onDateClicked: ((date: Date) -> Unit?) = null
  var onPageChanged: onDateClicked = null
}

interface ONDateClicked {
  fun onClick(date: Date)
}
```

```java
CalendarView c = new CalendarView();
c.setOnDateClicked(date -> Unit.INSTANCE);
c.setOnPageChanged(date -> {});
```

자바에서 사용하는 API 설계할 때는 함수타입보다 SAM을 사용하는것이 합리적이다.

하지만 이외의 경우에는 **함수타입을 사용하는것이 좋다.**

## Item 39 태그 클래스보다는 클래스 계층을 사용하라

상수 모드를 태그(tag)라고 부르며, 태그를 포함한 클래스를 태그클래스(tagged class)라고 부른다.

태그 클래스는 다양한 문제를 내포하고 있다.

서로 다른 책임을 한 클래스에 태그로 구분해서 넣는다는 것이다.

```kotlin
class ValueMatcher<T> private constructor(
  private val value: T? = null,
  private val matcher: Matcher
) {
  fun match(value: T?) = when(matcher) {
    Matcher.EQUAL -> value == this.value
    Matcher.NOT_EQUAL -> value != this.value
    Matcher.LIST_EMPTY -> value is List<*> && value.isEmpty()
    Matcher.LIST_NOT_EMPTY -> value is List<*> && value.isNotEmpty()
  }

  empty class Matcher {
    EQUAL,
    NOT_EQUAL,
    LIST_EMTPY,
    LIST_NOT_EMPTY
  }

  companion object {
    fun <T> equal(value: T) =
      ValueMatcher<T>(value = value, mather = Matcher.EQUAL)

    fun <T> notEqual(value: T) = 
      ValueMatcher<T>(value = value, mather = Matcher.NOT_EQUAL)

    fun <T> emptyList() =
      ValueMatcher<T>(mather = Matcher.LIST_EMPTY)

    fun <T> notEmptyList() =
      ValueMatcher<T>(mather = Matcher.LIST_NOT_EMPTY)
  }
}
```

위와 같은 접근 방법은 많은 단점이 있다.

* 한 클래스에 여러 모드를 처리하기 위한 상용구(boilerplate)가 추가된다.
* 여러 목적으로 사용해야 하므로 프로퍼티가 일관적이지 않게 사용될 수 있으며, 더 많은 프로퍼티가 추가될 수 있다.
* 상태의 일관성과 정확성을 지키기 어렵다.
* 객체가 제대로 생성되었는지 확인하는게 어렵기 때문에 팩토리 메서드를 사용해야 하는 경우가 많다.

이러한 이유로 코틀린에서는 `sealed` 한정자를 붙여서 서브클래스 정의를 제한한다.

```kotlin
sealed class ValueMatcher<T> {
    abstract fun match(value: T): Boolean
    
    class Equal<T>(val value: T): ValueMatcher<T>() {
        override fun match(value: T): Boolean =
            value == this.value
    }
    
    class NotEqual<T>(val value: T): ValueMatcher<T>() {
        override fun match(value: T): Boolean =
            value != this.value
    }
    
    class EmptyList<T>(): ValueMatcher<T>() {
        override fun match(value: T): Boolean =
            value is List<*> && value.isEmpty()
    }
    
    class NotEmptyList<T>(): ValueMatcher<T>() {
        override fun match(value: T): Boolean =
            value is List<*> && value.isNotEmpty()
    }
}
```

위와 같이 구현하면 책임이 분산되므로 깔끔하다. 각각의 객체들은 자신에게 필요한 데이터만 있으며, 적절한 파라미터를 갖는다.

### sealed 한정자

`sealed` 한정자는 외부 파일에서 서브클래스를 만드는 행위 자체를 모두 제한한다.

외부에서 추가적인 서브 클래스를 만들 수 없으므로, 타입이 추가되지 않을 거라는게 보장된다.

이러한 이유로 `when` 을 사용할 때 `else` 브랜치를 만들 필요가 없으며, 이를 활용하여 새로운 기능을 쉽게 추가도 가능하다.

### 태그 클래스와 상태 패턴의 차이

태그 클래스와 상태 패턴(state pattern)을 혼동하면 안된다.

> 상태 패턴 (state pattern)<br/>
> 객체 지향 디자인 패턴중 행동 패턴중의 일종<br/>
> 객체가 특정 상태에 따라 행위를 달리하는 상황에서 **직접 상태를 체크하지 않고 상태를 객체화하여 행동을 위임**할 수 있는 패턴을 말한다.

### 정리

코틀린에서는 태그 클래스보다 타입 계층을 사용하는 것이 좋다.

일반적으로 이런 타입 계층을 만들 때는 sealed 클래스를 사용한다.

하나의 뷰를 가지는 경우 보다는, 여러 상태로 구분할 수 있는 뷰를 가질때 활용도가 높다.

## Item 40 equals의 규약을 지켜라

코틀린의 `Any` 에는 다음과 같이 잘 설정된 규약들을 가진 메서드들이 있다.

* equals
* hashCode
* toString

`Any` 클래스를 상속받는 모든 메서드는 이러한 규약을 잘 지켜주는 것이 좋다.

규약을 위반하면 일부 객체 또는 기능들이 제대로 동작하지 않을 수 있다.

### 동등성

코틀린에는 두 가지 종류의 동등성(equality)가 있다.

#### 구조적 동등성(structural equality)

`equals` 메서드와 이를 기반으로 만들어진 == 연산자(!= 포함)로 확인한다.

`a` 가 nullable 이 아니라면 a == b 는 a.equals(b) 로 변환되고 `a` 가 nullable 이라면 a?.equals(b) ?: (b === null) 로 변환된다.

#### 레퍼런스적 동등성(referential equality)

=== 연산자(!== 포함)로 확인한다.

두 피 연산자가 같은 객체를 가르키면, `true` 를 리턴한다.

`equals`는 모든 클래스의 슈퍼클래스인 `Any` 에 구현되어 있으니, 모든 객체에서 사용할 수 있다.

### equals가 필요한 이유

Any 클래스에 구현되어 있는 equals 메서드는 디폴트로 === 처럼 두 인스턴스가 완전히 같은 객체인지 비교한다.

```kotlin
class Name(val name: String)

val name1 = Name("Marcin")
val name2 = Name("Marcin")
val name1Ref = name1

name1 == name1    // true
name1 == name2    // false
name1 == name1Ref // true

name1 === name1     // true
name1 === name2     // false
name1 === name1Ref  // true
```

이러한 동작은 DB Connection, Repository, Thread 등의 활동요소(active element)를 활용할 때 굉장히 유용하다.

하지만 일부 동등성을 약간 다른 형태로 표현해야 하는 객체가 있다.

예를 들면 두 객체가 기본 생성자의 프로퍼티가 같다면, 같은 객체로 보는 경우가 있다. `data` 한정자를 사용하여 데이터 클래스로 정의하면 자동으로 이와 같은 동등성으로 동작한다.

```kotlin
data class FullName(val name: String, val surname: String)

val name1 = FullName("Blue", "Berry")
val name2 = FullName("Blue", "Berry")
val name3 = FullName("Blue", "Verry")

name1 == name1  // true
name1 == name2  // true - 데이터가 같기 때문
name1 == name3  // false

name1 === name1 // true
name1 === name2 // false
name1 === name3 // false
```

데이터 클래스는 내부에 어떤 값을 가지고 있는지 중요하므로, 이와 같은 동작을 하는것이 좋다.

```kotlin
data class DateTime(
  private var millis: Long = 0L
  private var timeZone: TimeZone? = null
) {
  private var asStringCache = ""
  private var changed = false

  //...
}
```

위와 같은 코드에서 `copy` 메서드를 이용하여 객체 복사를 사용했을 경우 기본 생성자에 선언되지 않는 프로퍼티는 복사되지 않는다. (Item 37)

`data` 한정자를 이용한 클래스에서 동등성을 조작할 수 있으므로, 일반적으로는 코틀린에서 `equals` 를 직접 구현할 필요가 없다.

단 예외적으로 `equals` 를 직접 구현해야 하는 경우를 정리해보면 다음과 같다.

* 기본적으로 제공되는 동작과 다른 동작을 해야 하는 경우
* 일부 프로퍼티만으로 비교해야 하는 경우
* data 한정자를 붙이는 것을 원하지 않거나, 비교해야 하는 프로퍼티가 기본 생성자에 없는 경우

### equals의 규약

코틀린 1.4.31 기준으로 `equals` 에는 다음과 같은 주석이 달려 있다.

어떤 다른 객체가 이 객체와 '같은지(equal to)' 확인할 때 사용한다. 구현은 반드시 다음과 같은 요구 사항을 충족해야 한다.

#### 반사적 동작

`x`가 `null` 이 아닌 값이라면 `x.equals(x)` 는 `true` 를 반환해야 한다.

#### 대칭적

동작 `x` 와 `y` 가 `null` 이 아닌 값이라면, `x.equals(y)` 는 `y.equals(x)` 와 같은 결과를 출력해야 한다.

#### 연속적

`x`, `y`, `z` 가 `null` 이 아닌 값이고 `x.equals(y)` 와 `y.equals(x)` 이 `true` 이면 `x.equals(z)` 도 `true` 여야 한다.

#### 널과 관련된 동작

`x` 가 `null` 이 아닌 값이라면, `x.equals(null)` 은 항상 `false` 를 반환해야 한다.

추가적으로 `equals`, `toString`, `hashCode` 의 동작은 매우 빠를것으로 기대하므로, 빠르게 동작되어야 한다.

### URL과 관련된 equals 문제

`equals` 를 잘못 설계한 예가 `java.net.URL` 이다.

`java.net.URL` 객체 2개를 비교하면 동일한 IP 주소로 해석될 때는 `true` 아니면 `false` 결과를 나타내지만, 네트워크 상황에 따라 결과가 달라지는 일관성이 무시된다.

### equals 구현하기

특별한 이유가 없는 이상 직접 equals 를 구혀하는 것은 좋지 않다.

완벽한 사용자 `equals` 함수를 만드는 것은 거의 불가능에 가깝다.

## Item 41 hashCode의 규약을 지켜라

`hashCode` 함수는 수많은 컬렉션과 알고리즘에 사용되는 자료구조인 해시 테이블(hash table)을 구축할 때 사용된다.

### 해시 테이블

컬렉션의 셋과 맵은 중복을 허용하지 않아서 요소를 추가할 때 동일한 요소가 이미 들어있는지 확인해야 한다.

컬렉션내에 추가하려는 요소가 포함되어어 있는지 모든 요소를 비교해봐야 하며, 이를 비교하는 과정에서 많은 비용이 들 것이다.

이 비용(성능)을 효과적으로 해결하는 방법이 해시테이블이다.

해시테이블은 각 요소에 숫자를 할당하는 함수를 해시 함수이며, 해시 함수는 다음 특성을 갖고 있으면 좋다.

* 빠르다
* 충돌이 적다

### 해시함수

해시값을 이용한 자료형은 해시 함수를 통해서 나오는 인덱스 값으로 관리되는데 이 해시 함수는 해시 키값을 입력을 받아 해시 테이블상의 주소를 리턴해줘야 한다.

이는 해시함수를 작성시에는 다음 두가지의 조건을 만족하는것이 제일 좋다.

1. 입력되는 원소가 해시 테이블 전체에 고루 저장되어야 한다. (해시 분포)
2. 계산이 간단해야 한다 (성능)

첫번째 조건을 잘 만족해야만 **서로 다른 두 원소가 하나의 해시 주소를 가지고 충돌날 확률이 적어지기 때문**이다. (해시충돌)

대부분 아래와 같은 해시 함수를 사용한다.

```java
int hashIndex = X.hashCode() % M;
```

이 코드와 같은 방식을 사용하면 서로 다른 객체가 1/M 의 확률로 같은 버킷을 가지게 된다.

해시를 이용한 인덱싱 사용으로 관리되는 이 Key 는 기본적으로 각 객체의 `hashCode()` 가 반환하는 값을 사용하는데 이 자료형은 int 다

> 32 bit 자료형으로는 완전한 자료의 해시 함수를 만들 수 없다.<br/>
> 논리적으로 2^32 보다 많을수도 있기 때문이며 해시를 이용한 Map 객체에서 랜덤 접근이 가능하게 하려면<br/>
> 원소가 2^32 인 배열을 모든 Map 이 가지고 있어야 하기 때문이다.

### 해시 충돌 (Hash Colision)

해시 충돌 (Hash Colision) 을 잘 회피하도록 구현해 놓았더라도 해시 충돌이 발행할 경우 회피할 수 있는 방법이 다음 대표적으로 두가지 방법이 사용된다.

> 다른 해시 회피방법이 있지만 이 두가지를 응용한 방법이다.

#### 개방 주소법 (Open Address)

해시충돌이 발생하면 다른 버킷 (데이터 주소 공간) 을 찾아 자료를 삽입하는 방식이다.

비어있는 버킷을 탐색하거나 혹은 2차 해시함수를 이용하여 새로운 주소를 할당하는데
이 과정에서 새로운 해시 버킷을 찾는 방법을 Linear Probing, Quadratic Probing 등의 방법이 사용된다.

* 장점
  * 데이터 크기가 적다면 성능이 뛰어나다.
* 단점
  * 연속된 공간에 데이터를 저장하기 때문에 캐시 효율이 높다.
  * 크키가 커질수록 적중률 (hit ratio) 이 낮아지기 때문에 캐시 효율이 현저히 낮아진다.
  * 분리 연결법 (Seperate Chaining)

Java HashMap 에서 사용중인 대표적인 방식으로 일반적으로 개방주소법보다는 성능상에 이점이 있다.

#### 보조 해시 함수

저장하려는 두 개가 같은 인덱스로 해싱 (hashing : hash 함수를 통해 계산됨을 의미) 하게 되면 같은곳에 저장할 수 없게 된다.
때문에 해싱된 인덱스에 이미 다른 값들이 들어있다면 데이터를 저장할 다른 위치를 찾은뒤에야 저장할 수 있다.

이 외에도 **해시 버킷의 동적 확장** 등과 같은 방법도 있다.

### 해시 버킷의 동적 확장

해시 버킷의 개수가 작다면 메모리 사용을 아낄수 있지만 해시 충돌로 인한 성능상의 비용이 더 발생할 수 있다.

때문에 HashMap 은 Key & Value 의 쌍 데이터가 일정 개수 이상 되면 해시 버킷의 개수를 두배로 늘린다.

이 일정 개수는 기본 약 75% 정도로 load factor 로 HashMap 의 생성자에서 지정가능하다.

```java
/**
 * The load factor used when none specified in constructor.
 */
static final float DEFAULT_LOAD_FACTOR = 0.75f;
```

### hashCode의 규약

코틀린 `1.3.11` 을 기준으로 공식적인 규약을 정리해보면 다음과 같다.

* 어떤 객체를 변경하지 않았다면, `hashCode`는 여러번 호출해도 그 결과가 항상 같아야 한다.
* equals 메서드의 실행 결과로 두 객체가 같다고 나온다면, hashCode 메서드의 호출 결과도 같다고 나와야 한다.

코틀린은 equals 구현을 오버라이드할 때, hashCode도 함께 오버라이드 하는것을 추천한다.

### hashCode 구현하기

일반적으로 `data` 한정자를 붙이면, 코틀린이 알아서 적당한 `equals`, `hashCode` 를 정의해주므로 직접 정의할 일은 거의 없다.

`hashCode` 는 기본적으로 `equals` 에서 비교에 사용되는 프로퍼티를 기반으로 해시코드를 만들어야 한다.

일반적으로 모든 해시코드의 값을 더하며, 더하는 과정에서 결과에 `31` 을 곱한뒤 더해준다.

```kotlin
class DateTime(
  private val millis: Long = 0L,
  private val timeZone: TimeZone? = null
) {

  //...

  override fun hashCode(): Int {
    var result = millis.hashCode()
    result = result * 31 + timeZone.hashCode()
    return result
  }
}
```

위 코드에서 곱하는 숫자를 31 로 정하는 기준은 31은 홀수(odd) 이면서 소수(prime) 이기 때문이며, 관례적으로 31을 많이 사용한다.

해시 충돌이 우려된다면 구아바(Guava) 의 `com.google.com.hash.Hashing` 을 참고하도록 하자.

`hashCode` 를 구현할 때 가장 중요한 규칙은 언제나 `equals`와 일관된 결과가 나와야 하기 때문에, 같은 객체라면 언제나 같은 값을 반환하게 만들어줘야 한다.

## Item 42 compareTo 규약을 지켜라

`compareTo` 메서드는 `Comparable<T>` 인터페이스에도 들어있다.

`compareTo` 는 다음과 같이 동작되어야 한다.

* 비 대칭적 동작
  * `a >= b` 이고, `b <= a` 이면, `a == b` 여야 한다.
* 연속적 동작
  * `a >= b` 이고 `b >= c` 이면, `a >= c` 여야 한다.
  * 이 동작을 만족하지 못하면 무한 루프에 빠질수 있다.
* 코넥스적 동작
  * `a >= b` 또는 `b >= a` 중에 적어도 하나는 항상 `true` 여야 한다.

> **코넥스 관계**<br/>
> 수학적으로 이항관계(순서쌍으로 이어지는 집합)에서 뽑은 쌍 사이의 관계를 연관짓는 경우를 말한다.

### compareTo 를 따로 정의해야 할까?

일반적으로 어떤 프로퍼티 하나를 기반으로 순서를 지정하는 것으로 충분하기 때문에 따로 정의해야 하는 상황은 거의 없다.

`sortedBy` 를 통해 원하는 프로퍼티로 컬렉션 정렬을 할 수 있다.

프로퍼티 기반으로 정렬해야 한다면 아래와 같이 `sortedWith` 함수를 사용할 수 있다.

```kotlin
val sorted = names
  .sortedWith(compareBy({ it.surname }, { it.name }))
```

### compareTo 구현하기

`compareValues` 톱레벨 함수를 활용하여 `compareTo` 를 구현할 때 유용하게 활용할 수 있다.

```kotlin
class User {
  val name: String,
  val surname: String
} : Comparable<User> {
  override fun compareTo(other: User): Int =
    compareValues(surname, other.surname)
}
```

선택기(selector)를 활용해서 비교하고 싶다면 `compareValuesBy` 를 사용하라

```kotlin
class User {
  val name: String,
  val surname: String
} : Comparable<User> {
  override fun compareTo(other: User): Int =
    compareValuesBy(this, other { it.surname }, { it.name })
}
```

특별한 논리를 구현해야 하는 경우에는 이 함수가 다음값을 리턴해야 한다는 것을 기억하라.

* 0: 리시버와 other가 같은 경우
* 양수: 리시버가 other보다 큰 경우
* 음수: 리시버가 other보다 작은 경우

`compareTo` 를 구현한 뒤에는 반드시 비대칭적 동작, 연속적 동작, 코넥스적 동작을 확인하라.

## Item 43 API의 필수적이지 않는 부분을 확장 함수로 추출하라

확장 함수는 가상 멤버 함수와 다르게 동작한다.

상속을 목적으로 설계된 요소는 확장 함수로 만들면 안된다

### 멤버 함수와 확장 함수의 차이

1. 확장 함수는 읽어들어야 한다.
2. 확장 함수는 virtual 이 아니다.
3. 멤버는 높은 우선순위를 갖는다
4. 확장 함수는 클래스 위가 아니라 타입 위에 만들어진다.
5. 확장 함수는 클래스 레퍼런스에 나오지 않는다.

확장 함수는 더 높은 자유도와 유연함을 준다.

확장 함수는 상속, 어노테이션 처리 등을 지원하지 않고, 클래스 내부에 없으므로 혼동을 줄 수 있다는것을 명심하라.

API 에 필수적이지 않은 부분은 확장함수로 만드는것이 여러가지로 좋다.

## Item 44 멤버 확장 함수의 사용을 피하라

아규먼트로 리시버를 받는 단순한 일반 함수로 컴파일 된다.

```kotlin
fun String.isPhoneNumber(): Boolean = 
  length == 7 && all { it.isDigit() }
```

위 코드가 컴파일 되면 아래와 같이 변한다.

```kotlin
fun String.isPhoneNumber(): Boolean = 
  '$this'.length == 7 && '$this'.all { it.isDigit() }
```

DSL 을 만들때를 제외하면 사용하지 않는것을 권장한다.

### 멤버 확장 함수를 피해야 하는 이유

* 가시성 제한을 할 수 없으며 사용성이 떨어진다.

  ```kotlin
  PhoneBookIncorrect().apply { "1234567890".test() }
  ```

* 레퍼런스를 지원하지 않는다.

  ```kotlin
  val ref = String::isPhoneNumber
  val str = "1234567890"
  val boundedRef = str::isPhoneNumber

  val refX = PhoneBookIncorrect::isPhoneNumber // 오류
  val book = PhoneBookIncorrect() 
  val bookRefX = book::isPhoneNumber // 오류
  ```

* 암묵적 접근시 어떠한 리시버가 선택될 지 불명확함

  ```kotlin
  class A {
    val a = 10
  }

  class B {
    val a = 20
    val b = 30

    fun A.test() = a + b // 40? or 50?
  }

  fun main() {    
    B().apply { println(A().test()) }
  }
  ```

* 확장 함수가 외부에 있는 다른 클래스를 리시버로 받을 때, 해당 함수가 어떠한 동작을 하는지 명확하지 않음

  ```kotlin
  class A {
    //...
  }

  class B {
    //...

    fun A.update() = ...
  }
  ```

* 경험이 적거나, 익숙하지 않는 개발자가 코드에 참여했을때 직관적이지 않으며 가독성이 떨어질수 있다.

멤버 확장 함수를 사용하는 것이 의미있는 경우는사용해도 되지만, 단점을 인지하고 사용하지 않는 것이 좋다.

가시성을 제한하려면 멤버로 만들지 말고 가시성과 관련된 한정자를 사용하자.
