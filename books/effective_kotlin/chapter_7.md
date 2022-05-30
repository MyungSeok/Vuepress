# Chapter 7 비용

오늘날의 코드의 효을성(efficiency) 를 관대하게 바라본다.

이는 메모리가 저렴해지고 개발자는 비싸졌기 때문이고 많은 서버를 운영한다고 가정할 때최적화를 하면 이러한 비용을 줄일수 있다.

프로그램을 효율적으로 만들 때 활용할 수 있는, 잃는 것이 거의 없는 몇가지 고정된 규칙이 있다.

이를 활용하면 비용을 들이지 않고도 성능을 크게 향상시킬 수 있다.

가독성과 성능 사이에 트레이드 오프(trade-off)가 발생할 때, 개발하는 컴포넌트에서 무엇이 더 중요한지 스스로 답할 수 있어야 한다.

## Item 45 불필요한 객체 생성을 피하라

객체 생성은 언제나 비용이 들어간다.

불필요한 객체 생성을 피하는 것이 최적화의 관점에서 좋다.

JVM 에서는 하나의 가상 머신에서 동일한 문자열을 처리하는 코드가 여러개 있다면, 기존의 문자열을 재사용 한다.

```kotlin
val str1 = "Lorem ipsum dolor sit amet"
val str2 = "Lorem ipsum dolor sit amet"

println(str1 == str2)   // true
println(str1 === str2)  // true
```

Integer와 Long처럼 박스화한 기본 자료형도 작은 경우에는 재사용된다. (Int는 -127 ~ 127 범위를 캐시해 둔다)

```kotlin
val num1: Int? = 1
val num2: Int? = 1

println(num1 == num2)   // true 
println(num1 === num2)  // true
```

위 코드는 Integer가 재사용 되므로, `===` 로 비교했을 때 `true` 가 뜨지만

-128 ~ 127 범위를 벗어나는 숫자는 캐시되지 않습니다.

```kotlin
val num3: Int? = 1234
val num4: Int? = 1234

println(num3 == num4)   // true 
println(num3 === num4)  // false
```

nullable 타입은 int 자료형 대신 Integer 자료형 사용을 강제하게 된다.

기본 자료형은 null 일 수 없고, 타입 아규먼트로 사용할 수 없기 때문이다.

### 객체 생성 비용은 항상 클까?

객체를 랩(Wrap) 하게 되면, 크게 세가지 비용이 발생된다.

* 객체는 더 많은 용량을 차지한다.
  * 헤더 및 레퍼런스를 위한 추가공간이 필요하다.
* 요소가 캡슐화 되어 있다면, 접근에 추가적인 함수 호출이 필요하다.
* 객체를 생성은 필수지만, 이를 재사용하면 불필요한 비용을 제거할 수 있다.

### 객체 선언

매 순간 객체를 생성하지 않고, 객체를 재사용하는 방법은 객체선언을 사용하는 것이다.(싱글톤)

```kotlin
sealed class LinkedList<T>

class Node<T>(
  val head: T,
  val tail: ListedList<T>
): LinkedList<T>()

class Empty<T>: LinkedList<T>()
```

```kotlin
val list1: LinkedList<Int> = Node(1, Node(2, Empty()))
val list2: LinkedList<String> = Node("A", Node("B", Empty()))
```

위 구현 코드에서의 문제점은 리스트를 만들 때마다 Empty 인스턴스를 만들어야 한다.

Empty 인스턴스를 하나만 만들고, 다른 모든 리스트에서 활용할 수 있게 한다면, 제네릭 타입이 일치 하지 않아 문제가 발생할 수 있다.

이를 해결하려면 모든 타입의 서브타입인 `Nothing` 을 이용하는것이다.

```kotlin
sealed class LinkedList<T>

class Node<T>(
  val head: T,
  val tail: ListedList<T>
): LinkedList<T>()

class Empty<T>: LinkedList<Noting>()
```

```kotlin
val list1: LinkedList<Int> = Node(1, Node(2, Empty))
val list2: LinkedList<String> = Node("A", Node("B", Empty))
```

### 캐시를 활용하는 팩토리 함수

팩토리 함수는 캐시(cache)를 가질 수 있다.

그래서 팩토리 함수는 항상 같은 객체를 리턴하게 만들 수도 있다.

실제로 `stdlib` 의 `emptyList` 는 이를 활용해서 구현되어 있다.

```kotlin
fun <T> List<T> emptyList() {
  return EMPTY_LIST
}
```

코틀린 라이브러리에 있는 디폴트 디스패쳐인 `Dispatchers.Default` 는 쓰레드 풀을 갖고 있으며, 어떤 처리를 시작할 때 사용하지 않는 쓰레드 하나를 사용해 명령을 수행한다.

참고로 데이터베이스도 비슷한 형태로 커넥션풀을 사용한다.

객체 생성이 무겁거나 여러 mutable 객체를 사용해야 하는 경우에는 이처럼 객체 풀을 사용하는 것이 좋다.

모든 순수 함수는 메모이제이션(memoization) 을 활용하여 캐싱을 활용할 수 있다.

> **메모이제이션 (Memoization)**<br/>
> 이전에 연산된 결과를 저장하고 사용하는 패턴  
> 메모리 상에 임시 저장값을 저장하여 사용할 수 있어 시간 복잡도를 많이 줄인다

메모리가 필요할 때 가비지 컬렉터(Garbage Collector, GC)가 자동으로 메모리를 해제해 주는 SoftReference를 사용하면 더 좋다.

* WeakReference: 가비지 컬렉터가 값을 정리하는 것을 막지 않는다. 다른 레퍼런스가 이를 사용하지 않으면 곧바로 제거된다.
* SoftReference: 가비자 컬렉터가 값을 정리할 수 있고, 정리하지 않을수도 있다. 메모리가 부족해서 추가로 필요한 경우에만 정리한다.

캐시는 언제나 메모리와 성능의 트레이드 오프가 발생하므로, 캐시를 잘 설계하는것은 쉽지 않다.

여러가지 상황을 잘 고려하여 현명하게 사용하도록 하자.

### 무거운 객체를 외부 스코프로 보내기

성능을 위한 유용한 방법으로는 무거운 객체를 외부 스코프로 보내는 방법이 있다.

Iterable 내부의 확장 함수를 이용하여 최댓값을 나타내는 max 를 countMax 함수의 레벨로 옮겼다.

```kotlin
fun <T: Comparable<T>> Iterable<T>.countMax(): Int {
  val max = this.max()
  return count = { it == max }
}
```

확장 리시버로 max 를 호출하는 형태가 확실하게 보이므로 가독성이 향상된다.

반복 처리중에 max 값을 한번만 확인하므로 코드의 성능이 좋아진다.

### 지연 초기화

무거운 클래스를 만들 때 지연되게 만드는 것이 좋다.

하지만 무거운 객체를 가졌지만 응답은 빨라야 하는 경우 좋지 않는 케이스가 될 수 있다.

지연 초기화는 상황에 맞게 사용해야 한다.

### 기본 자료형 사용하기

코틀린/JVM 컴파일러의 내부적으로는 기본 자료형을 사용한다.

하지만 다음과 같은 케이스에서는 기본 자료형을 랩(Wrap) 한 자료형을 사용한다.

* nullable 타입을 연산할 때 (기본 자료형은 null 일 수 없다.)
* 타입을 제네릭으로 사용할 때

|코틀린의 자료형|자바의 자료형|
|:-:|:-:|
|`Int`|`int`|
|`Int?`|`Integer`|
|`List<Int>`|`List<Integer>`|

숫자와 관련된 연산은 어떤 형태의 자료형을 사용하나 성능적으로 큰 차이는 없다.

굉장히 큰 컬렉션을 처리할 때 차이를 확인할 수 있다.

기존 코드에서 사용되던 자료형을 일괄 변경하면, 코드의 가독성이 떨어질 수 있다.

### 정리

객체를 생성할 때 문제를 피하는 방법에 대해 살펴보았다.

몇가지는 코드의 가독성을 향상시켜 주는 장점도 있으므로 적극적으로 사용하는 것이 좋다.

## Item 46 함수 타입 파라미터를 갖는 함수에 inline 한정자를 붙여라

코틀린 표준 라이브러리의 고차 함수(higher-order function)를 살펴보면, 대부분 inline 한정자가 붙어 있는 것을 확인할 수 있다.

```kotlin
inline fun repeat(times: Int, action: (Int) -> Unit) {
  for (index in 0 until times) {
    action(index)
  }
}
```

```kotlin
repeat(10) {
  println(it)
}
```

컴파일 시점에 다음과 같이 대체된다.

```kotlin
for (index in 0 until times) {
  println(index)
}
```

일반적인 함수를 호출하면 함수 본문으로 점프하고, 본문의 모든 문장을 호출한 후, 함수를 호출했던 위치로 다시 점프하는 과정을 거친다.

`inline` 한정자를 사용하면 다음과 같은 장점이 있다.

1. 타입 아규먼트에 reified 한정자를 붙여서 사용할 수 있다.
2. 함수 타입 파라미터를 가진 함수가 훨씬 빠르게 동작한다.
3. 비지역(non-local) 리턴을 사용할 수 있다.

### 타입 아규먼트를 reified로 사용할 수 있다.

reified 한정자를 지정하면, 타입 파라미터를 사용한 부분이 타입 아규먼트로 대체된다.

```kotlin
inline fun <reified T> printTypeName() {
  print(T::class.simpleName)
}
```

```kotlin
printTypeName<Int>()      // Int
printTypeName<Char>()     // Char
printTypeName<String>()   // String
```

컴파일 하는 동안 `printTypeName` 의 본문이 다음과 같이 대체된다.

```kotlin
print(Int::class.simpleName)    // Int 
print(Char::class.simpleName)   // Char
print(String::class.simpleName) // String
```

### 함수 타입 파라미터를 가진 함수가 훨씬 빠르게 동작한다.

모든 함수는 inline 한정자를 붙이면 조금더 빠르게 동작한다.

함수 호출과 리턴을 위해 점프하는 과정과 백스택을 추적하는 과정이 없기 때문이다.

그래서 표준 라이브러리에 있는 간단한 함수들에는 대부분 inline 한정자가 붙어 있다.

```kotlin
inline fun print(message: Any?) {
  System.out.print(message)
}
```

코틀린/JVM 에서는 JVM 익명 클래스 또는 일반 클래스를 기반으로, 함수를 객체로 만들어 낸다.

```kotlin
val lambda: () -> Unit = {
  // Codes
}
```

위와 같은 람다 표현식은 클래스로 컴파일 된다.

```java
Function0(Unit) lambda = new Function0<Unit>() {
  public Unit invoke() {
    // Codes
  }
}
```

별도의 파일에 정의되어 있는 일반 클래스로 컴파일하면, 다음과 같다.

```java
public class Test$lambda implements Function0<Unit> {
  public Unit invoke() {
    // Codes
  }
}
```

```java
Function0 lambda = new Test$lambda()
```

두 방식의 큰 차이는 없으며 JVM 에서 아규먼트가 없는 함수타입은 `Function0` 타입으로 변환된다.

* `() -> Unit` 은 `Function0<Unit>` 로 컴파일
* `() -> Int` 은 `Function0<Int>` 로 컴파일
* `(Int) -> Int` 은 `Function0<Int, Int>` 로 컴파일
* `(Int, Int) -> Int` 은 `Function0<Int, Int, Int>` 로 컴파일

이러한 모든 인터페이스는 모두 코틀린 컴파일러에 의해 생성된다.

요청이 있을때 생성되므로, 명시적으로 사용할 수 없으며, 대신 함수타입으로 사용할 수 있다.

### 비지역적 리턴(non-local return) 을 사용할 수 있다.

```kotlin
fun repeatNoinline(times: Int, action: (Int) -> Unit) {
  for (index in 0 until times) {
    action(index)
  }
}
```

`repeatNoinline` 은 내부에서 리턴을 사용할 수 없다.

```kotlin
fun main() {
  repeatNninline(10) {
    print(it)
    return    // 오류: 허용되지 않는다. 
  }
}
```

이는 함수 리터럴이 컴파일될 때, 함수가 객체로 래핑되어 발생하는 문제이다.

인라인이라면 이러한 제한이 없다. 함수가 `main` 함수 내부에 박히기 때문이다.

```kotlin
fun main() {
  repeat(10) {
    print(it)
    return    // OK
  }
}
```

덕분에 제어문처럼 보이면서도 잘 동작한다.

```kotlin
fun getSomeMoney(): Money? {
  repeat(100) {
    val money = searchForMoney()
    if (money != null) return money
  }
  return null
}
```

### inline 한정자의 비용

`inline` 한정자는 유용하지만 모든곳이 사용할 수 없다.

대표적으로는 재귀적으로 동작할 수 없다. 만약 재귀로 사용하게 되면 무한히 대체되는 상황이 발생하며, 이러한 오류를 IDE 에서 잡아줄 수 없어 굉장히 위험하다.

inline 한정자를 남용하면, 코드의 크리가 쉽게 커진다.

서로 호출하는 인라인 함수가 많아지면 코드가 기하급수적으로 증가하므로 위험하다.

### crossinline 과 oninline

함수를 인라인으로 만들고 싶지만, 어떤 이유로 일부 함수 타입 파라미터는 inline으로 받고 싶지 않는 경우가 있을 수도 있다.

* crossinline: 아규먼트로 인라인 함수를 받지만, 비지역적 리턴을 하는 함수를 받을수 없게 만든다. 인라인으로 만들지 않은 다른 람다 표현식과 조합해서 사용할 때 문제가 발생하는 경우 활용합니다.
* noinline: 아규먼트로 인라인 함수를 받을 수 없게 만든다. 인라인 함수가 아닌 함수를 아규먼트로 사용하고 싶을 때 활용한다.

다행스럽게도 두 한정자에 대해서는 IDE 에서 제안해준다. (대충 알기만 해도 된다함)

### 정리

인라인 함수가 사용되는 주요 사례를 정리해 보면 다음과 같다.

* `print` 함수처럼 매우 많이 사용되는 경우
* `filterIsInstance` 함수처럼 타입 아규먼트로 reified 타입을 전달받는 경우
* 함수 타입을 파라미터를 갖는 톱레벨 합수를 정의해야 하는 경우

API 를 정의할 때 인라인 함수를 사용하는 경우는 거의 없다.

한 인라인 함수가 다른 인라인 함수를 호출하는 경우, 코드가 기하급수적으로 많아질 수 있으므로 주의하라

## Item 47 인라인 클래스의 사용을 고려하라

인라인은 함수 뿐만이 아니라, 하나의 값을 보유하는 객체도 인라인으로 만들수 있다.

코틀린 1.3 부터 도입된 이 기능은 기본 생성자 프로퍼티가 하나인 클래스 앞에 inline 을 붙이면, 해당 객체를 사용하는 위치가 모두 프로퍼티로 교체된다.

```kotlin
inline class Name(private val value: String)
```

이러한 inline 클래스는 타입만 맞다면, 다음과 같이 그냥 값을 곧바로 집어넣는 것도 허용된다.

```kotlin
val name: Name = Name("Marcin")

// 컴파일때 다음과 같은 형태로 바뀐다.
val name: String = "Marcin"
```

인라인 클래스는 다른 자료형을 래핑해서 새로운 자료형으로 만들 때 많이 사용된다. 이때 어떠한 오버레드도 발생하지 않는다 (Item 45)

인라인 클래스는 다음과 같은 상황에서 많이 발생한다.

* 측정 단위를 표현할 때
* 타입 오용으로 발생하는 문제를 막을 때

### 측정 단위를 표현할 때

```kotlin
interface Timer {
  fun callAfter(time: Int, callback: () -> Unit)
}
```

위 `callAfter` 함수의 파라미터의 time 단위가 불명확하여 오해가 생길 수 있다.

이를 위해 파라미터 이름에 측정 단위를 붙여주는것이 문제해결을 위한 가장 쉬운 방법이다.

```kotlin
interface Timer {
  fun callAfter(timeMillis: Int, callback: () -> Unit)
}
```

더 좋은 방법은 타입에 제한을 거는 것이다.

```kotlin
inline class Minutes(val minutes: Int) {
  fun toMillis(): Millis = Millis(minutes * 60 * 1000)
  // ...
}

inline class Millis(val milliseconds: Int) {
  // ...
}

interface User {
  fun decideAboutTime(): Minutes
  fun wakeUp()
}

interface Timer {
  fun callAfter(timeMillis: Millis, callback: () -> Unit)
}

fun setUpUserWakeUpUser(user: User, timer: Timer) {
  val time: Int = user.decideAboutTime()
  timer.callAfter(time) {   // 오류: Type mismatch
    user.wakeUp()
  }
}
```

아래와 같이 올바른 타입을 강제할 수 있다.

```kotlin
fun setUpUserWakeUpUser(user: User, timer: Timer) {
  val time: Int = user.decideAboutTime()
    timer.callAfter(time.toMillis()) {
      user.wakeUp()
    }
}
```

객체생성을 위해 미리 확장 프로퍼티를 만들어 두어도 좋다.

```kotlin
inline val Int.min
  get() = Minutes(this)
    
inline val Int.ms
  get() = Millis(this)
    
val timeMin: Minutes = 10.min
```

### 타입 오용으로 발생하는 문제를 막을 때

```kotlin
@Entity(tableName="grades")
classGrades(
  @ColumnInfo(name = "studentId")
  val studentId: Int,

  @ColumnInfo(name = "teacherId")
  val teacherId: Int,

  @ColumnInfo(name = "schoolId")
  val schoolId: Int,

  // ...
)
```

모든 ID 가 Int 자료형이기 때문에, 실수로 잘못된 값을 넣을 수 있다.

다음과 같이 Int 자료형 값을 inline 클래스를 활용하여 래핑하자

```kotlin
inline class StudentId(val studentId: Int)
inline class TeachetId(val teacherId: Int)
inline class SchoolId(val schoolId: Int)

@Entity(tableName="grades")
classGrades(
  @ColumnInfo(name = "studentId")
  val studentId: Int,

  @ColumnInfo(name = "teacherId")
  val teacherId: Int,

  @ColumnInfo(name = "schoolId")
  val schoolId: Int,

  // ...
)
```

### 인라인 클래스와 인터페이스

인라인 클래스와 마찬가지로 인터페이스를 구현할 수 있다.

인터페이스를 통해 타입을 나타내려면, 객체를 래핑해서 사용해야 하기 때문에 인터페이스를 구현하는 인라인 클래스는 아무런 의미가 없다.

### typealias

typealias 사용하면, 타입에 새로운 이름을 붙여 줄 수 있다.

### 정리

인라인 클래스를 사용하면 성능적인 오버헤드 없이 타입을 래핑할 수 있다.

인라인 클래스는 타입 시스템을 통해 실수로 코드를 잘못 작성하는 것을 막아주므로, 코드의 안정성을 향상시켜준다.

## Item 48 더이상 사용하지 않는 객체의 레퍼런스를 제거하라

메모리 관리를 자동으로 해주는 프로그래밍 언어에 익숙한 개발자는 객체 해제(free)를 따로 생각하지 않는다.

그렇다고 메모리를 관리를 완전히 무시해버리면, 메모리 누수(불필요한 메모리 소비)가 발생해서, 상황에 따라 OOM(Out Of Memory Error)이 발생하기도 한다.

따라서 더 이상 사용하지 않는 객체의 레퍼런스를 유지하면 안된다의 규칙은 지켜주는 것이 좋다.

특히 어떤 객체가 메모리를 많이 차지하거나, 인스턴스가 많이 생성될 경우에는 반드시 지켜줘야 한다.

상태를 유지할 때는 메모리 관리를 염두해 두어야 한다. 코드를 작성할 때는 메모리와 성능 뿐만이 아니라 가독성과 확장성을 항상 고려해야 한다.
