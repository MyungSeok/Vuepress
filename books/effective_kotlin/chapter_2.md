# Chapter 2 가독성

> **마틴 파울러(Martin Flowler), <리펙터링>**<br/>
> 컴퓨터가 인식할 수 있는 코드는 바보라도 작성할 수 있지만, <br/>인간이 이해할 수 있는 코드는 실력 있는 프로그래머만 작성할 수 있다.

코틀린은 간결성을 목표로 설계된 프로그래밍 언어가 아니라, 가독성(readability)을 좋게 하는 데 목표를 두고 설계된 프로그래밍 언어이다.

코틀린을 사용하면 깨끗하고 의미 있는 코드와 API를 쉽게 작성할 수 있다.

코틀린은 우리가 원하는 것을 숨기거나 강조할 수 있게 하는 기능을 많이 제공한다.

## Item 11 가독성을 목표로 설계하라

> **로버트 C 마틴(Robert C. Martin)**<br/>
> 개발자가 코드를 작성하는 데는 1분 걸리지만,<br/> 이를 읽는데는 10분이 걸린다.

프로그래밍은 쓰기보다 읽기가 더 중요하다.

### 인식 부하 감소

가독성은 사람에 따라 다르게 느낄 수 있다.

:::tip 인지부하(cognitive load)
학습이나 과제 해결 과정에서 인지적 요구량이 요구된다.<br/>
어떤 정보가 학습되기 위해서는 동작상의 기억 안에서 정보가 처리되어야 하는데<br/>
이는 동작상 기억이 처리해 낼 수 있는 정보의 양보다 처리해야 할 정보가 많으면 문제가 생기며,<br/>
이 때 인지부하가 발생한다.
:::

#### Code A

```kotlin {1}
if (person != null && person.isAdult) {
  view.showPerson(person)
} else {
  view.showError()
}
```

#### Code B

```kotlin
person?.takeIf { it.isAdult }
  ?.let(view::showPerson)
  ?: view.showError()
```

`Code A` 가 `Code B` 보다 읽기 쉬운 이유

* 일반적인 관용구(if/else, &&, 메서드 호출)을 사용하고 있다.
* 코틀링에서 사용중인 관용구(안전호출 `?.`, `takeIf`, let, Elvis 연산자, 함수 레퍼런스) 등을 사용함으로써 코틀린 숙련자들만을 위한 코드이다.
* `Code A` 가 구현을 이해하는것이 쉽고, 수정 및 디버깅이 쉽다.

위 두 코드는 동작상 실행 결과도 다르다.(`Code B` 는 showPerson 에서 `null` 을 반환하면 `showError` 를 호출한다.)

**인지부하**를 줄이는 방향으로 코드를 작성하라.

### 극단적이 되지 않기

가변 프로퍼티는 쓰레드와 관련된 문제를 발생시킬 수 있으므로, 스마트 캐스팅이 불가능하다.

이를 해결하기 위해서 안전호출(`?.`) `let`을 사용한다. 이 외에도 `let`을 사용하는 경우는 다음과 같다.

* 연산을 아규먼트로 처리 후로 이동할 때

```kotlin
print(students.filter{}.joinToString{})
```

```kotlin
students.filter{}.joinToString{}.let{::print}
```

* 데코레이터를 사용해서 객체를 랩(포장)할 때

### 컨벤션

:::tip invoke 함수
이름 없이 간편하게 호출될 수 있는 함수

```kotlin
class Test {
  operator fun invoke(str: String) {
    print(str)
  }
}

fun main() {
  val test = Test()
  test("wow")
}
```

위와 같이 `test.invoke(str)` 로 사용해야 할 것 같지만,<br/>이를 무시하고 `test(str)` 로 사용 가능하듯이 이름을 생략할 수 있다.
:::

* 연산자는 의미에 맞게 사용해야 한다.
* 람다를 마지막 아규먼트로 사용한다.

## Item 12 연산자 오버로드를 할 때 의미에 맞게 사용하라

코틀린에서는 다음과 같이 대응되는 연산자와 오버로딩을 지원한다.

|연산자|대응되는 함수|
|:-:|:-|
|+a|a.unaryPlus()|
|-a|a.unaryMinus()|
|!a|a.not()|
|++a|a.inc()|
|--a|a.dec()|
|a+b|a.plus(b)|
|a-b|a.minus(b)|
|a*b|a.times(b)|
|a/b|a.div(b)|
|a..b|a.rangeTo(b)|
|a in b|b.contains(a)|
|a+=b|a.plusAssign(b)|
|a-=b|a.minusAssign(b)|
|a*=b|a.timesAssign(b)|
|a/=b|a.divAssign(b)|
|a==b|a.equals(b)|
|a>b|a.compareTo(b)>0|
|a<b|a.compareTo(b)<0|
|a>=b|a.compreTo(b)>=0|
|a<=b|a.compareTo(b)<=0|

팩토리얼을 계산하기 위해 ! 연산자를 사용하면 안된다. (관례에 어긋남)

### 분명하지 않은 경우

의미가 명확하지 않다면 `infix` 를 활용한 확장함수를 사용하는 것이 좋다.

:::tip 중위(infix) 함수
두개의 변수 가운데 오는 함수

```kotlin
infix fun String.add(other:String): String {
  return this + other
}
```

```kotlin
val string = "Hello" add "World"
System.out.println(string)        // HelloWorld
```

:::

```kotlin
operator fun Int.times(operation: () -> Unit): () -> Unit = {
  repeat(this) { operation() }
}

3 * { print("Hello") }              // HelloHelloHello
```

함수가 관례를 충족할 지 아닌지 확실하지 않을 때는 `infix` 함수로 사용하라

```kotlin
infix fun Int.timesRepeated(operation: () -> Unit) = {
  repeat(this) { operation() }
}

val tripledHello = 3 timesRepeated { print("Hello") }
tripledHello()                    // HelloHelloHello
```

### 규칙을 무시해도 되는 경우

도메인 특화 언어(Domain Specific Language, DSL)를 설계할 때는 사용해도 된다.

### 정리

연산자 오버로딩은 그 이름의 의미에 맞게 사용하라.
연산자 의미가 명확하지 않다면, 연산자 오버로딩은 사용하지 않는 것이 좋다.

연산자의 형태로 사용하려면, `infix` 확장 함수 또는 톱레벨 함수를 활용하라.

## Item 13 Unit?을 리턴하지 말라

기본적으로 Unit? 을 리턴하거나, 이를 기반으로 연산하지 않는 것이 좋다.

## Item 14 변수 타입이 명확하지 않은 경우 확실하게 지정하라

코틀린은 개발자가 타입을 지정하지 않아도, 타입을 지정해서 넣어 주는 굉장히 수준 높은 타입 추론 시스템을 갖추고 있다.

```kotlin
val num = 10
val name = "Marcin"
val dis = listOf(12, 112, 554, 997)
```

위와 같은 코드는 개발 시간을 줄여 줄 뿐만 아니라, 유형이 명확할 때 코드가 짧아지므로 코드의 가독성이 향상된다.

유형이 명확하지 않을 때는 남용하면 좋지 않다.

```kotlin
val data = getSomeData()
```

**가독성을 위해 코드를 설계할 때 읽는 사람에게 중요한 정보를 숨겨서는 안된다.**

가독성 향상 이외의 안전을 위해서도 타입을 지정하는 것이 좋다.

## Item 15 리시버를 명시적으로 참조하라

### 여러 개의 리시버

스코프 내부의 둘 이상의 리시버가 잇는 경우, 명시적으로 나타내면 좋다.

```kotlin
class Node(val name: String) {
  fun makeChild(childName: String) = 
    create("$name.$childName")
      .apply { print("Created ${name}") }

  fun create(name: String): Node? = Node(name)
}

fun main() {
  val node = Node("parent")
  node.makeChild("child")         // Created parent
}
```

```kotlin
class Node(val name: String) {
        fun makeChild(childName: String) =
                create("$name.$childName")
                        .apply { print("Created ${this?.name} in ${this@Node.name}") }

        fun create(name: String): Node? = Node(name)
    }

fun main() {
  val node = Node("parent")
  node.makeChild("child")         // Created parent.child in parent
}
```

리시버를 명확하게 작성하면, 코드를 안전하게 사용할 수 있을 뿐만 아니라 가독성도 향상된다.

### DSL 마커

DSL 마커는 가장 가까운 리시버만을 사용하거나, 명시적으로 외부 리시버를 사용하지 못하게 할 때 활용할 수 있는 굉장히 중요한 메커니즘이다.

### 정리

여러개의 리시버가 있는 상황 등에서는 리시버를 명시적으로 적어 주는 것이 좋다.

리시버를 명시적으로 적게 강제하고 싶다면, `@DslMarker` 메타 어노테이션을 사용한다.

## Item 16 프로퍼티는 동작이 아니라 상태를 나타내야 한다.

기본적으로 프로퍼티는 사용자 정의 `Getter` 와 `Setter` 를 가질 수 있다.

```kotlin
val name: String? = null
  get() = field?.toUpperCase()
  set(value) {
    if (!value.isNullOrBlank()) {
      field = value
    }
  }
```

위 코드의 `field` 식별자는 프로퍼티의 데이터를 저장해 두는 백킹 필드(backing field) 에 대한 레퍼런스이다.

읽기 전용 프로퍼티는 `field` 가 만들어지지 않는다.

```kotlin
val fullName: String
  get() = "$name $surname"
```

`var` 을 사용해서 만든 읽고 쓸 수 있는 프로퍼티는 게터와 세터를 정의할 수 있다.

이를 파생 프로퍼티(derived property) 라고 부른다.

원칙적으로 프로퍼티는 상태를 나타내거나 설정하기 위한 목적으로만 사용해야 하기 때문에 아래와 같이 다른 로직을 포함하지 않아야 한다.

```kotlin
val Tree<Int>.sum: Int
  get() = when (this) {
    is Leaf -> value
    is Node -> left.sum + right.sum
  }
```

프로퍼티 대신 함수를 사용하는 것이 좋은 경우는 다음과 같다.

* 연산 비용이 높거나, 복잡도가 `O(1)` 보다 큰 경우
  * 함수를 활용하여 사용한다면 사용자가 연산비용을 예측하기 쉽고 이를 기반으로한 캐싱등을 고려할 수 있다.
* 비지니스 로직(애플리케이션의 동작) 을 포함하는 경우
  * 프로퍼티는 단순 동작 이상을 수행할 것이라고 예상하지 않기 때문이다.
* 결정적이지 않은 경우
  * 함수의 실행 시점에 다른 값을 나오는 경우
* 변환의 경우
  * 해당 프로퍼티를 사용하는 사용자로 하여금 오해를 불러 일으킬 수 있다.
* `Getter` 에서 프로퍼티 상태의 변경이 일어나야 하는 경우
  * 프로퍼티에서 상태변화를 일으키게 끔 기대하지 않는다

프로퍼티는 상태 집합을 나타내고, 함수는 행동을 나타낸다.

## Item 17 이름 있는 아규먼트를 사용하라

파라미터가 명확하지 않는 경우 이를 직접 지정해서 명확하게 만들어 줄 수 있다.

아래 코드처럼 이름 있는 아규먼트(named argument)를 사용하라

```kotlin
val text = (1..10).joinToString(separator = "|")
```

또한 다음과 같이 변수를 사용하여 의미를 명확히 할 수 있다.

```kotlin
val separator = "|"
val text = (1..10).joinToString(separator)
```

### 이름 있는 아규먼트는 언제 사용해야 할까?

이름 있는 아규먼트를 사용하면 코드가 길어지지만, 다음과 같은 장점이 있다.

* 이름을 기반으로 값이 무엇을 나타내는지 알 수 있다.
* 파라미터 입력 순서와 상관 없으므로 안전하다.

아래와 같이 `100` 값의 의미가 모호하다.

```kotlin
sleep(100)
```

이름있는 아규먼트 사용

```kotlin
sleep(timeMillis = 100)
```

함수로 시간단위를 표현

```kotlin
sleep(Millis(100))
```

확장 프로퍼티로 DSL과 유사한 문법

```kotlin
sleep(100.ms)
```

이름있는 아규먼트를 사용하는 경우

* 디폴트 아규먼트 경우
* 같은 타입의 파라미터가 많은 경우
* 함수 타입의 파라미터가 있는 경우

### 디폴트 아규먼트 경우

프로퍼티가 디폴트 아규먼트를 가질 경우, 항상 이름을 붙여서 사용하는 것이 좋다.

함수 이름은 필수 파라미터들과 관련이 있으며, 디폴트 값을 갖는 옵션 파라미터 (optional parameter) 의 설명이 명확하지 않기 때문에, 이름을 붙여서 사용하는 것이 좋다.

### 같은 타입의 파라미터가 많은 경우

```kotlin
fun sendEmail(to: String, message: String) {
  /**
   * other codes
   **/
}
```

위와 같이 함수의 같은 데이터 타입의 파라미터를 사용할 경우 이름 있는 아규먼트를 사용하는 것이 좋다.

```kotlin
sendEmail(
  to = "blue.berry@kakaopaycorp.com",
  message = "Hello, ..."
)
```

### 함수 타입 파라미터

일반적으로 함수 타입 파라미터는 마지막 위치에 배치하는 것이 좋다.

함수 이름이 아규먼트를 설명해 주기도 한다.

다음과 같이 `repeat` 인 경우 뒤에 오는 람다는 반복될 블럭을 나타낸다.

```kotlin
repeat {
  /**
   * other codes
   **/
}
```

다음은 리엑티브 라이브러리에서 자주 볼 수 있는 형태이다.

RxJava 에서 Observable 를 구독할 때 함수를 설정한다.

* 각각의 아이템을 받을 때 (onNext)
* 오류가 발생했을 때 (onError)
* 전체가 완료되었을 때 (onComplete)

```kotlin
observable.getuser()
  .subscribeBy {
    onNext = { user: List<User> -> 
      /**
       * other codes
       **/
    },
    onError = { throwable: Throwable ->
      /**
       * other codes
       **/
    },
    onCompleted = { 
      /**
       * other codes
       **/
    }
  }
```

### 정리

이름 있는 아규먼트는 개발자가 코드를 읽을 때도 편리하게 활용되며, 안정성도 향상시킬 수 있다.

## Item 18 코딩 컨벤션을 지켜라

코딩컨벤션을 지키면 다음과 같은 이점이 있다.

* 어떤 프로젝트를 접해도 쉽게 이해할 수 있다.
* 다른 외부 개발자도 프로젝트의 코드를 쉽게 이해할 수 있다.
* 다른 개발자도 코드의 작동 방식을 쉽게 유추할 수 있다.
* 코드를 병합하고, 한 프로젝트의 코드 일부를 다른 코드로 이동하는 것이 쉽다.

IDE 에서는 여러 플러그인을 통해서 이를 지원한다.

* IntelliJ Formatter
* ktlink

많은 파라미터를 가지고 있는 경우에는 다음과 같이 한줄씩 작성하는 것을 권장한다.

```kotlin
class Person(
  val id: Int = 0,
  val name: String = "",
  val surname: String = ""
): Human(id, name) {
  // 본문
}
```

마치 한 개발자가 작성한 것과 같이 코딩 컨벤션을 준수하면 코드의 일관성있는 품질을 유지할 수 있다.
