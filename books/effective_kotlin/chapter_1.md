# Chapter 1 안정성

## Item 1 가변성을 제한하라

코틀린은 모듈로 프로그램을 설계합니다.

모듈은 클래스, 객체, 함수, 타입별칭 (type alias), 톱레벨 (top-level) 프로퍼티등 다양한 요소로 구성됩니다.

일부는 상태 (state) 를 가질 수는데, 읽고 쓸 수 있는 프로퍼티 (read-write property) <br/>
`var` 를 사용하거나, `mutable` 객체를 사용하면 상태를 가질 수 있다.

```kotlin
var a = 0
var list: MutableList<Int> = mutableListOf()
```

요소가 상태를 갖는 경우, 해당 요소의 동작은 사용 방법뿐만 아니라 그 이력 (history)에도 의존하게 된다.

```kotlin
class BankAccount {
  var balence = 0.0
    private set

  fun deposit(depositAmount: Double) {
    balance += depositAmount
  }

  @Throw(InsufficientFunds::class)
  fun withdraw(withdrawAmount: Double) {
    if (balance < withdrawAmount) {
      throw InsufficientFunds()
    }

    balance -= withdrawAmount
  }
}

class InsufficientFunds: Exception()
```

```kotlin
val account = BankAccount()

val expectInitialAmount = 0.0
val expectDepositAmount = 100.0
val expectWithdrawAmount = 50.0

assertThat(account.balance)
    .`as`("초기값은 $expectInitialAmount 일것이다.")
    .isEqualTo(expectInitialAmount)

// 계좌 잔액의 상태를 변경
account.deposit(expectDepositAmount)

assertThat(account.balance)
    .`as`("$expectDepositAmount 을 적재하였으니 현재 값은 $expectDepositAmount 일것이다.")
    .isEqualTo(expectDepositAmount)

// 계좌 잔액의 상태를 변경
account.withdraw(expectWithdrawAmount)

assertThat(account.balance)
    .`as`("$expectDepositAmount 값에서 $expectWithdrawAmount 을 제외하였으니 ${expectDepositAmount - expectWithdrawAmount} 일것이다.")
    .isEqualTo(expectDepositAmount - expectWithdrawAmount)
```

상태를 갖게 하는 것은 양날의 검입니다.

시간의 변화에 따라서 변하는 요소를 표한할 수 있다는 것에는 유용하지만, 상태를 적절하게 관리하는 것이 매우 어렵습니다.

1. 프로그램을 이해하고 디버그하기 힘들어진다.
   * 상태를 추적하면서 디버깅하기 원활하지 않다.
   * 코드를 추가하거나 수정하기 어렵다.
   * 예상치 못한 상황 또는 오류를 발생시켰을때 해결이 쉽지 않다.

2. 가변성(mutableility)이 있으면, 코드의 실행을 추론하기 어렵다.
   * 실행하는 시점의 값이 달라질 수 있다.
   * 코드 실행을 예측하기 위해 값을 추정해야 한다.
   * 디버깅 할 때 마다 동일한 값을 유지한다고 확신할 수 없다.

3. 멀티스레드 프로그램일 때 적절한 동기화가 필요하다.
   * 변경이 일어나는 모든 부분에 대해서 충돌이 발생할 수 있다.

4. 테스트하기 어렵다.
   * 모든 상태에 대해서 테스트가 필요하여 변경이 많으면 더 많은 테스트 조합이 필요하다.

5. 상태 변경이 일어날 때, 변경을 다른 부분에 알려줘야 하는 케이스가 있다.
   * 정렬되어 있는 리스트에 가변요소를 추가한다면, 요소에 변경이 일어날때 재 정렬이 필요하다.

다음 코드의 `println` 되는 값은 1000 이 아닐 확률이 매우 높다.

```kotlin
var num = 0
for (i in 1..1000) {
  thread {
    Thread.sleep(10)
    num += 1
  }
}

Thread.sleep(5000)

println(num)
```

코루틴을 사용한다고 해서 일부 해소가 가능하지만, 문제가 사라지는 것은 아니다.

```kotlin
suspend fun main() {
  var num = 0
  coroutineScope {
    for (i in 1..1000) {
      launch {
        delay(10)
        num += 1
      }
    }
  }
  println(num)
}
```

위 코드는 실행할 때마다 다른 숫자가 나온다.

`synchronized` 블럭을 사용하여도 문제는 해결되지 않는다.

변할 수 있는 지점은 줄일수록 좋다. (변경이 일어나야 하는 부분은 확실하게 결정하고 사용하도록 하자)

### 코틀린에서 가변성 제한하기

코틀린은 가변성을 제한할 수 있게 설계되어 있다.

#### 읽기 전용 프로퍼티(val)

코틀린은 `val` 을 사용해 읽기 전용 프로퍼티로 만들 수 있다.

```kotlin
val a = 10
a = 20 // Error
```

읽기 전용 프로퍼티가 완전히 불가능한것은 아니다.

_**읽기 전용 프로퍼티가 `mutable` 객체를 담고 있다면 내부적으로 변할 수 있다.**_

```kotlin
val list = mutableListOf(1, 2, 3)
list.add(4)

println(list) // [1, 2, 3, 4]
```

읽기 전용 프로퍼티는 다른 프로퍼티를 활용하는 사용자 정의 `getter` 로도 정의할 수 있습니다.

```kotlin
var name: String = "Marcin"
var surname: String = "Moskala"

val fullName
  get() = "$name $surname"

fun main() {
  println(fullName) // Marcin Moskala

  name = "Maja"
  println(fullName) // Maja Moskala
}
```

이렇게 `var` 프로퍼티를 사용하는 `val` 프로퍼티는 `var` 프로퍼티가 변할 때 변할 수 있습니다.

**값을 추출할 때마다 사용자 정의 게터가 호출**되므로 이러한 코드를 사용할 수 있다.

```kotlin
fun calculate(): Int {
  println("Calculating... ")
  return 42
}

val fizz = calculate()
val buzz
  get() = calculate()

@Test
fun `읽기 전용 프로퍼티(val)`() {
  println(fizz)
  println(fizz)
  println(buzz)
  println(buzz)
}
```

```kotlin
42
42
Calculating... 
42
Calculating... 
42
```

코틀린의 프로퍼티는 기본적으로 캡슐화되어 있고, 추가적으로 사용자 정의 접근자 (`getter`, `setter`) 를 가질 수 있습니다.

`var` 는 `getter` 와 `setter` 를 제공하지만 `val` 은 변경이 불가능하므로 `getter` 만 제공합니다. 그래서 **`val` 을 `var` 로 오버라이드 할 수 있습니다.**

```kotlin
interface Element {
  val active: Boolean
}

class ActualElement: Element {
  override var active: Boolean = false
}
```

> `val` 은 읽기 전용 프로퍼티지만, 변경할 수 없음 (불변: immutable) 을 의미하는 것은 아니다.

```kotlin
val name: String? = "Marton"
val surname: String = "Braun"

val fullName: String?
  get() = name?.let { "$it $surname" }

val fullName2: String? = name?.let { "$it $surname" }

fun main() {
  if (fullName != null) {
    println(fullName.length) // ERROR
  }
  
  if (fullName2 != null) {
    println(fullName2.length)
  }
}
```

`fullName` 은 `getter` 로 정의했으므로 스마트 캐스트 (smart-cast) 를 할 수 없다.

 > **스마트 캐스트 (smart-cast)** <br/>
 > 컴파일러가 자동으로 타입을 확인해주거나 `null` 체크 등을 지원해준다.

#### 가변 컬렉션과 읽기 전용 컬렉션 구분하기

`Iterable`, `Collection`, `Set`, `List` 인터페이스는 읽기 전용이다.

때문에 변경을 위한 메서드는 없다.

반면에 `MutableIterable`, `MutableCollection`, `MutableSet`, `MutableList` 인터페이스는 읽고 쓸 수 있는 컬렉션이다.

이처럼 **mutable 이 붙은 인터페이스는 대응되는 읽기 전용 인터페이스를 상속받아 변경을 위한 메서드를 추가한 것**이다.

!['코틀린 컬렉션 인터페이스'](/img/A130.png)

아래와 같이 컬렉션 인터페이스의 다운캐스팅은 사용하면 안된다.

이는 추상화를 무시하는 행위이며, 예측 불가능한 결과를 초래한다.

```kotlin
val list = listOf(1, 2, 3)

if (list is MutableList) {
  list.add(4)
}
```

하지만 위 코드의 실행 결과는 플랫폼에 따라 다른 결과를 보여준다.

만약 읽기 전용에서 mutable 로 변경해야 한다면, **복제(copy)** 를 통해서 새로운 mutable 컬렉션으로 만드는 `list.toMutableList` 를 활용해야 한다.

```kotlin
val list = listOf(1, 2, 3)

val mutableList = list.toMutableList()
mutableList.add(4)
```

위와 같이 복제 (copy) 를 통해서 작성한 코드는 기존의 객체에 어떠한 영향을 주지 않으며 여전히 immutable 이라 수정할수 없으므로, 안전하다고 할 수 있다.

#### 데이터 클래스의 copy

immutable 객체를 사용하면 다음과 같은 장점이 있다.

1. 한 번 정의된 상태가 유지되므로, 코드를 이해하기 쉽다.
2. immutable 객체는 공유했을 때도 충돌이 따로 이루어지지 않으프로, 병렬 처리를 안전하게 할 수 있다.
3. immutable 객체에 대한 참조는 변경되지 않으므로, 쉽게 캐시할 수 있다.
4. immutable 객체는 방어적 복사본 (defensive copy) 를 만들 필요가 없다. (깊은 복사도 필요 없음)
5. immutable 객체는 다른 객체를 만들때 활용하기 좋으며, 예측하기 쉽다.
6. immutable 객체는 셋 (Set) 혹은 맵 (Map) 의 키로 활용할 수 있다.

> 셋 (Set) 혹은 맵 (Map) 은 내부적으로 해시 테이블 (Hash-table) 을 사용하고 <br/>
> 처음 요소를 넣을때 요소의 값을 기반으로 버킷을 결정하기 때문이다.

만약 immutable 한 객체에 변경 가능한 기능을 넣어야 한다고 가정했을때 다음과 같이 immutable 하게 작동해야 한다.

```kotlin
class User(
  val name: String,
  val surname: String
) {
  fun withSurname(surname: String) = User(name, surname)

  override fun toString(): String {
    return """
      User (
        name: $name
        surname: $surname
      )
    """.trimIndent()
  }
}

var user = User("Blue", "Berry")
user = user.withSurname("Verry")
println(user)
```

```kotlin
User (
  name: Blue
  surname: Verry
)
```

`withSurname` 와 같이 변경 가능한 부분 에 대해 방어적 복사본을 제공하기 어렵다면 `data` 한정자를 사용하자

`data` 한정자에서 제공하는 `copy` 라는 이름의 메서드를 만들어 준다.

`copy` 메서드를 활용하면, 모든 기본 생성자 프로퍼티가 같은 새로운 객체를 만들어 낼 수 있다.

```kotlin
data class User(
  val name: String,
  val surname: String
) {
  override fun toString(): String {
    return """
      User (
        name: $name
        surname: $surname
      )
    """.trimIndent()
  }
}

var user = User("Blue", "Berry")
user = user.copy(surname = "Verry")
println("user")
```

```kotlin
User (
  name: Blue
  surname: Verry
)
```

### 다른 종류의 변경 가능 지점

변경 가능한 지점을 만들어야 한다고 할 때 두가지 방법이 있다.

아래 코드와 같이 두가지 선택지가 있다.

`list1` 은 mutable 컬렉션을 만드는 것이고<br/>
`list2` 은 `var` 로 읽고 쓰는 프로퍼티를 만드는것 이다.

```kotlin
val list1: MutableList<Int> = mutableListOf()
var list2: List<Int> = listOf()
```

아래와 같이 두 객체의 변경을 요할때 두가지 모두 변경 가능 지점 (mutating point) 이 있지만,<br/>
그 위치가 다르다.

```kotlin
list1.add(1)
list2 = list2 + 1
```

첫번째 `list1.add(1)` 은 구체적인 구현이 리스트 내부에 있지만 <br/>
두번째 `list2 = list2 + 1` 는 프로퍼티 자체가 변경 가능 지점이다.

따라서 변경 가능지점을 직접적으로 제어가능한 두번째가 멀티스레드 기반에서는 더 안정성이 좋다고 할 수 있다.

만약 mutable 리스트 대신 mutable 프로퍼티를 사용하는 경우 사용자 정의 `setter` 를 활용 (혹은 이를 사용하는 Delegates) 하여 변경을 추적 할 수 있다.

```kotlin
var names by Delegates.observable(listOf<String>()) { _, old, new ->
  println("Names changed form $old to $new")
}

names += "Fabio"

println(names)

names += "Bill"

println(names)
```

```kotlin
Names changed form [] to [Fabio]
[Fabio]
Names changed form [Fabio] to [Fabio, Bill]
[Fabio, Bill]
```

mutable 컬렉션도 이처럼 관찰 (observe) 할 수 있게 만드려면, 이처럼 추가적인 구현이 필요하다.

mutable 프로퍼티에 읽기 전용 컬렉션을 넣어 사용하는것이 가장 쉽다.

`private` 으로 제한할 수 있기 때문이다.

```kotlin
var announcements = listOf<Announcement>()
  private set
```

**상태를 변경하는 모든 방법은 코드를 이해하고 유지해야 하므로 비용이 발생**한다.

따라서 **가변성을 제한하는것이 가장 좋다.**

### 변경 가능 지점 노출하지 않기

```kotlin
data class User(val name: String)
    
class UserRepository {
  private val storedUser: MutableMap<Int, String> = mutableMapOf()
  
  fun loadAll(): MutableMap<Int, String> {
    return storedUser
  }
}
```

`loadAll` 을 사용하여 `private` 상태인 `UserRepository` 를 수정할 수 있다.

```kotlin
val userRepository = UserRepository()

val storedUsers = userRepository.loadAll()
storedUsers[4] = "Kirill"

println(userRepository.loadAll()) // {4=Kirill}
```

위 코드는 갑작스럽게 수정이 일어나면 위험할 수 있다.

이는 다음 두가지 방법으로 해결이 가능하다.

#### 방어적 복제

다음과 같이 리턴되는 mutable 객체를 복제하여 방어적 복제 (defensive coping) 를 수행한다.

이 때 `data` 한정자로 만들어지는 `copy` 메서드를 활용하면 좋다.

```kotlin
class UserHolder {
  private val user: MutableUser()

  fun get(): MutableUser {
    return user.copy()
  }
}
```

#### 가변성 제어

컬렉션은 객체를 **읽기 전용 슈퍼타입으로 업캐스트** 하여 가변성을 제한할 수 있다.

```kotlin
data class User(val name: String)

class UserRepository {
  private val storedUsers: MutableMap<Int, String> = 
    mutableMapOf()

  fun loadAll(): Map<Int, String> {
    return storedUsers
  }
}
```

### 정리

가변성을 제한한 immutable 객체를 사용하는 것이 좋은 이유를 정리해보면 다음과 같다.

* `var` 보다는 `val` 을 사용하라
* mutable 프로퍼티 보다는 immutable 프로퍼티를 사용하라
* mutable 객체나 클래스 보다는 immutable 객체나 클래스를 사용하라
* 변경이 필요한 대상을 만들어야 한다면, immutable data 클래스로 만들고 copy 메서드를 활용하라
* 컬렉션에 상태를 저장해야 한다면, 읽기 전용 컬렉션을 사용하라
* 변이 지점을 적절하게 설계하고, 불필요한 변이 지점은 만들지 마라
* mutable 객체를 외부에 노출하지 마라

immutable 객체와 mutable 객체를 구분하는 기준은 가변성이다.

## Item 2 변수의 스코프를 최소화 하라

상태를 정의할 때는 변수와 프로퍼티의 스코프를 최소화 하는것이 좋다.

* 프로퍼티 보다는 지역변수를 사용하는것이 좋다.
* 최대한 좁은 스코프를 갖게 변수를 사용한다.

예를 들면 반복문 같은 경우 변수를 내부에서만 사용가능하게 작성하는것이 좋다.

```kotlin
val a = 1

fun fizz() {
  val b = 2
  println(a + b)
}

fun buzz() {
  val c = 3
  println(a + c)
}
```

위의 예제인 경우 `fizz` 와 `buzz` 함수의 스코프에서 외부 스코프에 있는 변수에 접근 가능하지만 외부에서 내부의 스코프에는 접근이 불가능하다.

```kotlin
/** 
 * BAD
 **/
var user: User
for (i in users.indices) {
  user = users[i]
  println("User at $i is $user")
}

/** 
 * Good
 **/
for (i in user.indices) {
  val user = users[i]
  println("User at $i is $user")
}

/** 
 * BEST
 **/
for ((i, user) in users.withIndex()) {
  println("User at $i is $user")
}
```

스코프를 좁게 만드는 것이 좋은 이유는 프로그램을 추적하고 관리하기 쉽기 때문이다.

변수는 읽기 전용 또는 읽고 쓰기 전용 여부와 상관없이, **변수를 정의할 때 초기화되는 것이 좋습니다.**

```kotlin
/** 
 * BAD
 **/
val user: User
if (hasValue) {
  user = getValue()
} else {
  user = User()
}

/** 
 * Good
 **/
val user: User = if (hasValue) {
  getValue()
} else {
  User()
}
```

여러 프로퍼티를 한꺼번에 설정해야 하는 경우에는 구조분해 선언 (destructuring declaration) 을 활용하는것이 좋다.

```kotlin
/** 
 * BAD
 **/
fun updateWeather(degrees: Int) {
  val description: String
  val color: Int
  if (degrees < 5) {
    description = "cold"
    color = Color.BLUE
  } else if (degrees < 23) {
    description = "mild"
    color = Color.YELLOW
  } else {
    description = "hot"
    color = Color.RED
  }
  // other codes...
}

/** 
 * Good
 **/
fun updateWeather(degrees: Int) {
  val (description, color) = when {
    degrees < 5 -> "cold" to Color.BLUE
    degrees < 23 -> "mild" to Color.YELLOW
    else -> "hot" to Color.RED
  }
  // other codes...
}

```

결론적으로 변수의 스코프가 넓으면 매우 위험하다.

### 캡처링

만약 변경 가능한 변수의 유효범위가 넓으면 이를 참조하는 외부 로직에서 해당 변수의 상태값을 캡처하여 변경하기 때문에 의도하지 않은 결과가 나오게 되버린다.

다음은 소수를 구하는 알고리즘의 구현예제이다.

```kotlin {4}
val primes: Sequence<Int> = sequence {
  var numbers = generateSequence(2) { it + 1 }

  var prime: Int
  while (true) {
    prime = number.first()
    yield(prime)
    numbers = numbers.drop(1)
      .filter { it % prime != 0 }
  }
}
```

위 코드를 실행하면 다음 결과가 나온다.

```kotlin
print(primes.take(10).toList())
// [2, 3, 5, 6, 7, 8, 10, 11, 12]
```

이러한 잘못된 결과는 **4번째 라인**의 `prime` 이라는 변수를 캡처했기 때문이다.

때문에 변수의 유효범위가 넓으면 항상 잠재적인 캡처문제를 주의해야 한다.

가변성을 최대한 피하고 스코프 범위를 좁게 만들면 이러한 문제를 간단히 피할 수 있다.

### 정리

여러가지 이유로 변수의 스코프는 좁게 만들어서 활용하는 것이 좋다.

람다를 사용하는 경우 변수를 캡쳐한다는 것을 기억해야 한다.

## Item 3 최대한 플랫폼 타입을 사용하지 말라

자바에서 `String` 은 nullable 타입 (`null` 을 허용하는 타입) 이기 때문에

코틀린에서의 자바 코드를 사용할 경우에는 플래폼 타입 (platform type) 으로 변환하는 과정을 거친다.

> **플랫폼 타입 (platform type)** <br/>
> 다른 프로그래밍 언어에서 전달되어 `nullable` 인지 아닌지 알 수 없는 타입

때문에 `null` 이 아니라고 생각 되는것이 `null` 일 가능성이 있기 때문에 위험하다는 것이다.

설계자가 명시적으로 어노테이션으로 표시하거나, 주석으로 달아놓지 않으면, 언제든지 동작이 변경될 가능성이 있다.

자바를 코틀린과 같이 사용할 때, 자바 코드를 직접 조작할 수 있다면, 가능한 `@Nullable` 과 `@NotNull` 어노테이션을 붙여서 사용하도록 하자

```java
import org.jetbrains.annotations.NotNull;

public class UserRepo {
  public @NotNull User getUser() {
    // codes...
  }
}
```

각 플랫폼 별로 지원되는 관련 어노테이션은 다음과 같다.

|Platform|Library|Annotation|
|:-:|:-:|:-:|
|JetBrains|org.jetbraions.annotations|`@Nullable` `@NotNull`|
|Android|androidx.annotation<br/>com.android.annotations<br/>android.support.annotations|`@Nullable` `@NonNull`|
|JSR-305|javax.annotation|`@Nullable` `@CheckForNull` `@Nonnull`|
|JavaX|javax.annotation|`@Nullable` `@CheckForNull` `@Nonnull`|
|FindBugs|edu.umd.cs.findbugs.annotations|`@Nullable` `@CheckForNull` `@PossiblyNull` `@Nonnull`|
|ReactiveX|io.reactivex.annotations|`@Nullable` `@CheckForNull` `@Nonnull`|
|Eclipse|org.eclipse.jdt.annotation|`@Nullable` `@Nonnull`|
|Lombock|lombock.NonNull|`@NonNull`|

또한 플랫폼 타입을 사용할 경우, 이를 사용하는 다른 코드까지 전파위험성이 있기 때문에 문제가 될 수 있다.

```kotlin {9}
class RepoImpl: UserRepo {
  overrid fun getUserName(): String? {
    return null
  }
}

fun main() {
  val repo: UserRepo = RepoImpl()
  val text: String = repo.getUserName() 
  println("User name length is ${text.length}")
}
```

위 코드에서는 **9번째 라인**에서 Runtime 시에 NPE 에러가 발생 한다.

### 정리

플랫폼 타입을 사용하는 코드는 해당 부분만 위험할 뿐 아니라, 이를 사용하는 곳까지 영향을 줄 수 있는 위험한 코드이다.

## Item 4 inferred 타입으로 리턴하지 말라

코틀린의 타입 추론 (type inference)은 JVM 세계에서 가장 널리 알려진 코틀린의 특징이다.

타입을 할당할때 inferred 타입은 오른쪽에 있는 피 연산자에 맞게 설정해야 한다.

```kotlin {6}
open class Animal
class Zebra: Animal()

fun main() {
  var animal = Zebra()
  animal = Animal() // 오류: Type mismatch 
}
```

이럴 경우 타입을 명시적으로 지정하여 문제 해결이 가능하다.

`animal` 객체는 `Zebra` 타입으로 제한 (bounded) 되기 때문에 부모 타입의 객체를 수용할 수 없다.

```kotlin {5}
open class Animal
class Zebra: Animal()

fun main() {
  var animal: Animal = Zebra()
  animal = Animal()
}
```

모듈 (혹은 라이브러리) 를 직접적으로 조작할 수 없는 경우 문제 해결이 불가능하다.

리턴 타입은 외부에서 확인할 수 있게 명시적으로 지정해 주는 것이 좋다.

### 정리

타입을 확실하게 지정해야 하는 경우에는 명시적으로 타입을 지정해야 한다는 원칙만 갖고 있으면 된다.

때문에 이는 중요한 정보로써 숨기지 않아도 된다.

외부에서 참조하는 API 를 만들 경우 반드시 타입을 지정하라.

inferred 타입은 프로젝트 진행 시, 제한이 너무 많아지거나 예측하지 못한 결과를 낼 수 없다는 것을 명심하라.

## Item 5 예외를 활용하여 코드에 제한을 걸어라

코틀린에서는 동작에 제한을 걸 때 다음과 같은 방법을 사용할 수 있다.

* require 블럭 : Arguments 를 제한할 수 있다.
* check 블럭 : 상태와 관련된 동작을 제한할 수 있다.
* assert 블럭 : 테스트 모드에서만 작동하며, 값의 진위여부 판단을 할 수 있다.
* return 또는 throw 와 함께하는 Elvis 연산자

사용예시는 다음과 같다.

```kotlin
fun pop(num: Int = 1): List<T> {
  require(num <= size) {
    "Can't remove more elements than current size"
  }
  check(isOpen) { 
    "Can't pop from close stack"
  }
  val ret = collection.take(num)
  collection = collection.drop(num)
  assert(ret.size == num)
  return ret
}
```

위와 같이 코드상에서 제한을 걸어주면 다음과 같은 장점있다.

1. 제한을 걸면 문서를 읽지 않는 개발자도 문제를 확인할 수 있다.
2. 문제가 있는 경우 함수가 예상하지 못한 동작을 하지 않고 예외를 `throw` 한다.
3. 코드가 어느정도 자체적으로 검사가 된다.
4. 스마트 케스트를 활용할 수 있고, 캐스팅 (타입변환) 을 적게 할 수 있다.

### 아규먼트

함수를 정의할 때 타입 시스템을 이용해서 Arguments 에 제한을 거는 코드를 많이 사용

```kotlin
/**
 * 숫자를 아규먼트로 받아 팩토리얼을 계산
 * @param n 숫자(양의 정수)
 **/
fun factorial(n: Int): Long {
  require(n >= 0)
  return if (n <= 1) 1
    else factorial(n - 1) * n
}
```

```kotlin
/**
 * 좌표 목록을 구한다.
 * @param points 좌표 목록(빈 값이 아님)
 **/
fun findClusters(points: List<Point>): List<Cluster> {
  require(points.isNotEmpty())
  /**
   * Other codes...
   **/
}
```

```kotlin
/**
 * 메일 보내기
 * @param user 사용자 정보 (이메일 정보가 포함되어야 함)
 * @param message 메세지
 **/
fun sendEmail(user: User, message: String) {
  requireNotNull(user.email)
  require(isValidEmail(user.email))
  /**
   * Other codes...
   **/
}
```

위와 같이 유효성 코드는 맨 앞에 배치되어야 한다.

`require` 함수는 조건을 만족하지 못할 때, 무조건적으로 `IllegalArgumentException` 을 발생

다음과 같이 람다 형태로 메세지를 정의할 수 있다.

```kotlin
fun factorial(n: Int): Long {
  require(n >= 0) {
    "Can't calculate factorial of $n because it is smaller than 0"
  }
  
  return if (n <= 1) 1 else factorial(n - 1) * n
}
```

### 상태

어떤 **구체적인 조건을 만족**할 때만 함수를 사용할 수 있게 해야 할때가 있다.

예를 들면 다음과 같은 경우

위와 같은 특정 상태를 만족했을때에는 `check` 함수를 사용합니다.

```kotlin
/**
 * 객체를 미리 초기화되어 있는 상태에만 실행하고 싶은 함수 
 **/
fun speak(text: String) {
  check(isInitialized)
  /**
   * Other codes...
   **/
}
```

```kotlin
/**
 * 사용자가 로그인되어 있을때에만 처리하고 싶은 함수
 **/
fun getUserInfo(text: String) {
  checkNotNull(token)
  /**
   * Other codes...
   **/
}
```

```kotlin
/**
 * 객체의 사용 준비가 완료되어 있을때만 사용하고 싶은 함수
 **/
fun next(): T {
  check(isOpen)
  /**
   * Other codes...
   **/
}
```

`check` 함수는 require 와 비슷하지만, 조건을 만족하지 못할 때 `IllegalStateException` 을 발생시킨다.

일반적으로 `require` 블럭을 뒤에 배치 시킨다.

### Assert 계열의 함수 사용

함수의 올바른 구현 확인을 위해 검증하는 함수

구현문제로 발생할 수 있는 추가적인 문제를 예방하려면, 단위테스트를 사용하는 것이 좋다.

```kotlin
@Test
fun `Stack pops correct number of elements`() {
  val stack = Stack(20) { it }
  val ret = stack.pop(10)
  assertEquals(10, ret.size)
}
```

테스트 코드가 아닌 실행 코드에서 `assert` 를 사용할수도 있으며 다음과 같은 장점이 있다.

* Assert 계열의 함수는 코드 자체를 점검하며, 더 효율적으로 테스트할 수 있다.
* 특정 상황이 아닌 모든 상황에 대해 테스트 할 수 있다.
* 실행 시점에 정확하게 확인할 수 있다.
* 실제 코드가 더 빠른 시점에 실패하기 만들며, 언제 어디서 실행했는지 쉽게 찾을수 있다.

실행시점에 `assert` 는 예외를 `throw` 하지 않는다는 것을 명심

### nullability와 스마트 캐스팅

코틀린에서는 `require` 와 `check` 블럭으로 특정 조건을 확인해서 `true` 가 나왔다면, 해당 조건은 이후로도 `true` 일꺼라고 가정한다.

```kotlin
@kotlin.internal.InlineOnly
public inlin fun require(value: Boolean): Unit {
  contract {
    returns() implies value
  }
  require(value) { "Failed requirement." }
}
```

이를 활용해서 타입 비교를 했다면, **스마트 캐스트** 가 작동된다.

```kotlin {3}
fun changeDress(person: Person) {
  require(person.outfit is Dress)
  val dress: Dress = person.outfit
}
```

이러한 특징은 대상이 `null` 인지 확인할 때 매우 유용하다.

```kotlin
class Person(val email: String?)

fun sendEmail(person: Person, message: String) {
  require(person.email != null)
  val email: String = person.email
  /**
   * Other codes...
   **/
}
```

이렇게 null 인지 아닌지 확인하는 케이스는 `requireNotNull`, `checkNotNull` 이라는 특수한 함수를 사용하도 괜찮다.

둘다 스마트 캐스트를 지원하므로, 변수를 언팩 (unpack) 하는 용도로 사용할 수 있다.

```kotlin
class Person(val email: String?)
fun validateEmail(email: String) { /*...*/ }
```

```kotlin
fun sendEmail(person: Person, text: String) {
  val email = requireNotNull(person.email)
  validateEmail(email)
  /**
   * Other codes...
   **/
}
```

```kotlin
fun sendEmail(person: Person, text: String) {
  requireNotNull(person.email)
  validateEmail(person.email)
  /**
   * Other codes...
   **/
}
```

`nullability` 를 목적으로 throw 또는 return 을 두고 Elvis 연산자 (?:) 를 활용하는 경우가 많다.

```kotlin
fun sendEmail(person: Person, text: String) {
  val email: String = person.email ?: return
}
```

위와 같이 오류를 발생시키지 않고 단순하게 함수를 중지 시키거나

아래와 같이 로그를 노출 시킨후에 종료시킨다.

```kotlin
fun sendEmail(person: Person, text: String) {
  val email: String = person.email ?: run {
    log("Email not sent, no email address")

    return
  }
}
```

Elvis 연산자는 nullable 을 확인할 때 굉장히 많이 사용되는 관용적인 방법이다.

### 정리

예외를 사용하여 코드에 제한을 거는 방법은 다음과 같은 이득을 얻을수 있다.

* 제한을 더 쉽게 걸 수 있다.
* 애플리케이션을 더 안정적으로 지킬 수 있다.
* 코드를 잘못 쓰는 상황을 막을 수 있다.
* 스마트 캐스팅을 활용할 수 있다.

또한 이를 위한 활용방안의 매커니즘은 다음과 같다.

* `require` 블럭 : 아규먼트와 관련된 예측을 정의할 때 사용하는 범용적인 방법
* `check` 블럭 : 상태와 관련된 예측을 정의할 때 사용하는 범용적인 방법
* `assert` 블럭 : 테스트 모드에서 테스트할 때 사용하는 범용적인 방법
* 그 외 : `return` 혹은 `throw` 와 함께 `Elvis` 연산자와 사용하기

이외에도 다른 오류들을 발생 시킬때 `throw` 를 활용할 수 있다.
