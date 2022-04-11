# Chapter 3 재사용성

재사용성은 그만큼의 힘이 있는 만큼 굉장히 위험할 수도 있다.

> A 와 B에서 공통 부분을 추출한다면, 이후에 공통 부분을 수정할 일이 있을때 한꺼번에 수정할 수 있다.
> 하지만 A를 대상으로 수정한것이 B에서 문제가 될 수 있고, 그 반대로 B를 대상으로 수정한 것이 A에서 문제가 될 수 있다.

재사용성을 고려하는 일은 생각보다 어렵고, 다양한 오류를 발생시킬 수 있다.

## Item 19 knowledge 를 반복하여 사용하지 말라

> 프로젝트에서 이미 있던 코드를 복사/붙여넣기 하고 있다면, 무언가가 잘못된 것이다.

### knowledge

프로그래밍에서는 knowledge는 넓은 의미로 '의도적인 정보'를 뜻함

우리가 사용하는 프로그램에서 knowledge 를 뽑는다면 다음 두가지로 나뉠수 있음

* 로직(logic): 프로그램이 어떠한 식으로 동작하는지 프로그램이 어떻게 보이는지
* 공통 알고리즘(common algorithm): 원하는 동작을 하기 위한 알고리즘

위 둘의 가장 큰 차이점은 시간에 따른 변화이다.

**비지니스 로직**은 시간이 지나면서 계속 변하지만, **공통 알고리즘**은 한번 정의된 이후에는 크게 변하지 않는다.

### 모든 것은 변화한다

프로그램에서 유일하게 유지되는 것은 '변화한다는 속성' 이다.

오늘날의 대부분의 프로젝트는 몇 달마다 요구 사항과 내부적인 구조를 계쏙해서 변경한다.

모든것은 변화하고 우리는 이에 대비해야 한다. 변화할 때 가장 큰 적은 knowledge가 반복되어 있는 부분이다.

#### 버튼 디자인의 변경 건

> 프로젝트 여러 곳에서 사용되고 있는 범용적인 버튼이 있다.
> 그래픽 디자이너가 이 버튼 모양으로 변경해야 한다고 결정하였다.
> 이 버튼모양이 적용된 모든 부분을 하나하나 수정해야 한다.
> 또한 적용 과정에 실수한 부분을 찾기 위해 테스터에게 테스트를 요청해야 한다.

#### 데이터베이스 테이블 이름 변경 건

> 데이터베이스를 사용하는 프로젝트에서 테이블 이름을 변경해야 한다
> 이 테이블에 의존하고 있는 모든 SQL구문을 변경이 필요하다
> 혹시나 한 부서에서 이를 놓치고 있다면 매우 위험할 수 있다.

knowledge 반복이 얼마나 위험하고 문제가 있는지 알 수 있다.
knowledge 반복은 확장성(scalable)을 막고, 쉽게 깨지게(fragile) 만든다.

개발자는 knowledge 반 복을 줄일 수 있는 도구와 기능들을 활용해야 한다.

ORM(Object Relational Mapping), DAO(Data Access Object) 를 활용하는 방법이 있다.

여러 추상화를 표현할 수 있는 수많은 솔루션이 있으며 이를 활용하면 반복을 줄일 수 있다.

### 언제 코드를 반복해도 될까?

knowledge 를 추출하여 반복을 제거하는 경우, 올바르지(신중하지) 못한 추출은 변경을 더 어렵게 만든다.

비지니스 규칙이 다른 곳(source) 에서 왔는지 확인하는 방법이 있다.
다른곳에서 왔다면, 독립적으로 변경될 가능성이 높다.

단일 책임 원칙 (SRP: Single Responsibility Principle)을 활용하면 잘못된 코드 추출로 부터 보호할 수 있다.

### 단일 책임 원칙

단일 책임 원칙이란 '클래스를 변경하는 이유는 단 한가지여야 한다(A class should have only one reason to change)'

단일 책임이 알려주는 두가지 사실은 다음과 같다.

* 서로 다른 곳에서 사용하는 knowledge는 독립적으로 변경할 가능성이 많다.<br/>비슷한 처리를 하더라도, 완전히 다른 knowledge로 취급하는 것이 좋다.
* 다른 knowledge로 분리해두는 것이 좋다.<br/>그렇지 않으면, 재사용해서 안되는 부분을 재사용하려는 유혹(위험)이 발생할 수 있다.

### 정리

모든것은 변화한다. 공통 knowledge가 있다면, 이를 추출해서 이러한 변화에 대비해야 한다.

여러 요소에 비슷한 부분이 있는 경우, 변경이 필요할때 실수가 발행할 수 있는 부분은 추출하는것이 좋다.

의도하지 않는 수정을 피하려면, 혹은 다른곳에서 조작하는 부분이 있다면 분리해서 사용하는 것이 좋다.

## Item 20 일반적인 알고리즘을 반복해서 구현하지 말라

이미 있는 라이브러리 혹은 알고리즘을 활용하면 다음과 같은 이점이 있다.

* 코드 작성이 빨라진다.<br/> 호출을 한번 하는것이 알고리즘을 만드는 시간 대비 빠르다.
* 구현을 따로 하지 않아도, 함수의 이름을 보고 무엇을 하는지 확실하게 알 수 있다.
* 직접 구현할 때 발생할 수 잇는 실수를 줄일수 있다.
* 한번의 최적화로 이를 사용하는 모든 함수에서 동일한 최적화 혜택을 받을 수 있다.

### 표준 라이브러리 살펴보기

```kotlin
override fun saveCallResult(item: SourceResponse) {
  var sourceList = ArrayList<SourceEntity>() 
  item.sources.forEach {
    var sourceEntity = SourceEntity()
    sourceEntity.id = it.id
    sourceEntity.category = it.category
    sourceEntity.country = it.country
    sourceEntity.description = it.description
    sourceEntity.add(sourceEntity)
  }
}
```

위 형태보다는 팩토리 메서드를 활용하거나, 기본 생성자를 활용하는 것이 좋다.

그래도 써야 겠다면 `.apply` 로 활용해서 모든 단일 객체들의 프로퍼티를 암묵적으로 설정하는 것이 좋다.

```kotlin
override fun saveCallResult(item: SourceResponse) {
  val srouceEntries = item.sources.map(::sourceToEntry)
  db.insertSources(srouceEntries)
}

private fun sourceToEntry(source: Source) = SourceEntity()
  .apply {
    id = source.id
    category = source.category
    country = source.country
    description = source.description
  }
```

### 나만의 유틸리티 구현하기

동일한 결과를 얻는 함수를 여러 번 만드는 것은 잘못된 일이다.

모든 함수는 테스트되어야 하고, 기억되어야 하며, 유지보수되어야 한다.

필요없는 함수를 중복해서 만들지 않게, 기존에 관련된 함수가 있는지 탐색하는 과정이 필요하다.

:::tip 확장함수 (Extension Function)

클래스를 확장하면서 새로운 함수들을 마치 외부 라이브러리 클래스가 제공하는 원래 함수인 것 마냥 사용할 수 있다.

* 수취인 타입(receiver type) : 확장 함수를 추가할 클래스
* 수취인 객체(receiver object) : 확장 함수 내부를 구현할 때 receiver type 이 가지고 있는 인스턴스에 접근한 객체

```kotlin
fun Iterable<Int>.product() = 
  fold(1) { acc, i -> acc * i }
```

확장함수를 이용하여 만든 코드는 정적 바인딩이 된다.

:::

확장함수의 이점은 다음과 같다.

* 함수는 상태를 유지하지 않으므로, 행위를 나타내기 좋다.<br/>특히 부수 효과(side-effect) 없는 경우 더 좋다.
* 확장함수는 구체적인 타입이 잇는 객체에만 사용을 제한할 수 있으므로 좋다.
* 수정할 객체를 아규먼트로 전달받아 사용하는 것보다는 확장 리시버로 사용하는 것이 가독성 측면에서 좋다.
* 확장 함수는 객체에 정의한 함수보다 객체를 사용할 때, 자동 완성 기능등으로 제안이 이루어지므로 쉽게 찾을 수 있다.

### 정리

일반적인 알고리즘을 반복해서 만들지 말라.

특정 알고리즘을 반복해서 사용해야 하는 경우에는 프로젝트 내부에 정의하라. 이러한 코드는 확장 함수로 정의하는 것이 좋다.

## Item 21 일반적인 프로퍼티 패턴은 프로퍼티 위임으로 만들어라

코틀린에서는 코드 재사용과 관련해서 프로퍼티 위임기능을 제공한다.

프로퍼티 위임을 사용하면 일반적인 프로퍼티의 행위를 추출해서 재사용할 수 있다.

프로퍼티 위임은 클래스 위임과 비슷하게 프로퍼티 값의 `get`/`set` 위임을 사용할 수 있다.

`by` 키워드를 이용하여 위임할 객체를 프로퍼티 뒤에 명시한다.

```kotlin
import kotlin.reflect.KProperty

class PropertyDelegate(var value: String) {
  operator fun getValue(thisRef: Any?, property: KProperty<*>): String {
    println("${property.name} get value ${this.value}")

    return value
  }

  operator fun setValue(thisRef: Any?, property: KProperty<*>, newValue: String) {
    println("${property.name} set value ${this.value} -> $newValue")

    this.value = newValue
  }
}

class Person {
  var name: String by PropertyDelegate("no name")
  val age: String by PropertyDelegate("31")
}

fun main() {
  val person = Person()

  println("person name is ${person.name}")  // person name is no name

  person.name = "jin"

  println("person name is ${person.name}")  // person name is jin

  println("person age is ${person.age}")    // person age is 31
}

```

코틀린의 `stdlib`는 lazy 프로퍼티 패턴을 쉽게 구현할 수 있게 lazy 함수를 제공한다.

```kotlin
fun getPostListFromServer(id: Int): List<Post> {
    println("get big data from server")
    return listOf(Post())
}

class Post

class Board(val id: Int) {
    val list: List<Post> by lazy { getPostListFromServer(this.id) }
}

fun main() {
    val board = Board(1)
    println("lazy init board list :: ${board.list}") // lazy init board list :: [Post@a09ee92]
    println("board list :: ${board.list}") // board list :: [Post@a09ee92]
}

// get big data from server
// lazy init board list :: [Post@2f4d3709]
// board list :: [Post@2f4d3709]
```

프로퍼티 위임을 사용하면, 이외의 변화가 있을 때 이를 감지하는 observable 패턴을 쉽게 만들 수 있다.

```kotlin
var items: List<Item> by 
  Delegates.observable(listOf()) { _, _, _ ->
    notifyDataSetChanged()
  }

val key: String? by 
  Delegates.observable(null) { _, old, new ->
    Log.e("key changed from $old to $new")
  }
```

혹은 일정 조건을 만족하지 못하면 값 할당을 제한하는 거부권(vetoable)을 행사할 수 있다.

```kotlin
import kotlin.properties.Delegates

class Person {
    // 200살 이상은 값 오류로 판단 값 셋팅을 거부한다.
    var age: Int by Delegates.vetoable(0) { property, oldValue, newValue ->
        newValue < 200
    }
}

fun main() {
    val person = Person()
    person.age = 31
    println("person age is ${person.age}")  // person age is 31

    person.age = 9999                       // 거부됨
    println("person age is ${person.age}")  // person age is 31
}

```

코틀린 `stdlib` 에서 다음과 같은 프로퍼티 델리게이터를 알아두면 좋다.

* lazy
* Delegates.observable
* Delegates.vetoable
* Delegates.notNull

### 정리

프로퍼티 델리게이트는 프로퍼티와 관련된 다양한 조작을 할 수 있으며, 컨텍스트와 관련된 대부분의 ㅈ니다.

이러한 특징을 이용해서 다양한 프로퍼티의 동작을 추출해서 재사용할 수 있다.

이를 잘 활용하면 일반적인 패턴을 추출하거나 더 좋은 API 를 만들 때 활용할 수 있다.

:::tip 참고자료
<https://jinn-blog.tistory.com/27>
:::

## Item 22 일반적인 알고리즘을 구현할 때 제네릭을 사용하라

### 제네릭 제한

타입 파라미터의 중요한 기능 중 하나는 구체적인 타입의 서브타입만 사용하게 타입을 제한하는 기능이다.

```kotlin
fun <T: Compareable<T>> Iterable<T>.sorted(): List<T> {
  /*...*/
}

fun <T, C: MutableCollection<in T>> Iterable<T>.toCollection(destination: C): C {
  /*...*/
}

class ListAdapter<T: ItemAdapter>(/*...*/) { /*...*/ }
```

타입에 제한이 걸리므로, 내부에서 해당 타입이 제공하는 메서드를 사용할 수 있다.

### 정리

코틀린 자료형 시스템에서 타입 파라미터는 굉장히 중요한 부분이다.

일반적으로 이를 사용해서 type-safe 제네릭 알고리즘과 제네릭 객체를 구현한다.

또한 타입 파라미터는 구체 자료형(concrete type)의 서브타입을 제한할 수 있다.

## Item 23 타입 파라미터의 섀도잉을 피하라

아래 코드 처럼 프로퍼티와 파라미터가 같은 이름을 가질 수 있다.

```kotlin
class Forest(val name: String) {
  fun addTree(name: String) {
    // ...
  }
}
```

위와 같은 코드에서 외부에 있는 프로퍼티가 지역 파라미터에 의해 가려지게 되는데 이를 섀도잉(shadowing) 이라 부른다.

### 정리

타입 파라미터의 섀도잉은 이해하기도 어렵기 때문에 반드시 피해야 한다.

## Item 24 제네릭 타입과 variance 한정자를 활용하라.

다음과 같은 코드가 있다.

```kotlin
class Cup<T>
```

여기서 타입 파라미터 `T` 는 `variance` 한정자(in 혹은 out)가 없으므로 invariant(불공변) 타입이다.

invariant 타입은 제네릭 타입으로 만들어지는 타입들이 서로 관련이 없다.

만약 어떠한 관련성을 원한다면 variance 한정자를 붙이며 `out` 은 타입 파라미터를 covariant(공변성) 타입으로 만든다.

`in` 은 타입 파라미터를 contravariant(반공변)으로 만든다.

[PECS](/backend/language/java/essential/generic/pecs) 가 이 성격을 따른다.

### 함수 타입

파라미터 유형과 리턴타입에 따라 서로 어떠한 관계를 갖는다.

![코틀린의 계층구조](/img/A135.png)

위 그림에서 계층 구조의 아래로 가면, 타이핑 시스템 계층에서 파라미터 타입이 더 높은 타입으로 이동하고, 리턴 타입은 계층 구조의 더 낮은 타입으로 이동한다.

![코틀린의 타입계층](/img/A134.png)

코틀린의 함수 타입의 모든 파라미터 타입은 contravariant 이다.

모든 리턴 타입은 covariant 이다.

![코틀린의 in/out](/img/A133.png)

### variance 한정자의 안정성

자바의 배열은 covariant 이다.

다음 코드는 컴파일은 되나 런타임때 에러가 난다.

```java
Integer[] numbers = {1, 4, 2, 1};
Object[] objects = numbers;
objects[2] = "B"            // Runtime Exception
```

코틀린에서는 위와 같은 코드 결함을 해소하기 위해 Array(IntArray, CharArray 등)를 invariant 로 만들었다.

파라미터 타입을 예측할 수 있다면, 어떤 서브타입이라도 전달할 수 있다.

아래와 같이 아규먼트를 전달할 때, 암묵적으로 업캐스팅 할 수 있다.

```kotlin
open class Dog
class Puppy: Dog()
class Hound: Dog()

fun takeDog(dog: Dog) {}

takeDog(Dog())
takeDog(Puppy())
takeDog(Hound())
```

아래와 같은 상황은 안전하지 않다.

캐스팅 후 실질적인 객체가 그대로 유지되고, 타이핑 시스템에서만 다르게 처리되기 때문이다.

```kotlin
class Box<out T> {
  private var value: T? = null

  // 코틀린에서 불가능한 코드
  fun set(value: T) {
    this.value = value
  }

  fun get(): T = value ?: error("Value not set")
}

val puppyBox = Box<Puppy>()
val dogBox: Box<Dog> = puppyBox
dogBox.set(Hound())                 // Puppy 만 가능

val dogHouse = Box<Dog>()
val box: Box<Any> = dogHouse
box.set("Some string")              // Dog 만 가능
box.set(42)                         // Dog 만 가능
```

### variance 한정자 위치

varinace 한정자는 크게 두 위치에 사용할 수 있다.

첫번째는 선언부로 일반적으로 이 위치에 사용된다.

이는 클래스와 인터페이스가 사용되는 모든곳에 영향을 준다.

```kotlin
class Box<out T>(val value: T)
val boxStr: Box<String> = Box("Str")
val boxAny: Box<Any> = boxStr
```

두번째는 클래스와 이터페이스를 활용하는 위치이다.

이 위치에 variance 한정자를 사용하면 특정한 변수에만 variance 한정자가 적용된다.

```kotlin
class Box<T>(val value: T)
val boxStr: Box<String> = Box("Str")
val boxAny: Box<out Any> = boxStr
```

### 정리

* 타입 파라미터의 기본적인 동작은 invariant 타입이다.
* in 한정자는 타입 파라미터를 covariant 하게 만든다.
* out 한정자는 타입 파라미터를 contravariant 하게 만든다.
* `List`와 `Set`의 타입 파라미터는 covariant(out 한정자)이고, `Array`, `MutableList`, `MutableSet`, `MutableMap` 타입 파라미터는 invariant(무공변) 이다.
* 함수 타입의 파라미터 타입은 contravariant(in 한정자) 타입이고 리턴 타입은 covariant(out 한정자)타입이다.

## Item 25 공통 모듈을 추출해서 여러 플랫폼에서 재사용하라

TL;DR - 공통 모듈을 재사용하자
