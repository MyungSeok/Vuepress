# Chapter 5 객체 생성

코틀린의 코드는 순수 함수형 스타일로 작성할 수 있지만, 자바처럼 객체 지향 프로그래밍(Object Oriented Programming, OOP) 스타일로도 작성할 수 있다.

OOP는 객체를 생성해서 사용하므로, 객체를 생성하는 방법을 정의해야 하고, 이에 대한 방법들과 장단점을 살펴봐야 한다.

또한 코틀린은 정적 메서드를 사용할 수 없다.

그래서 일반적으로 톱레벨 함수와 companion 객체 함수 등을 대신 활용한다.

이들의 작동방식에는 큰 차이가 있으므로 알아보도록 하자.

## Item 33 생성자 대신 팩토리 함수를 사용하라

클래스의 인스턴스를 만드는 가장 기본적인 방법은 기본 생성자(primary constructor) 를 사용하여 만드는 방법이다.

```kotlin
class MyLinkedList<T>(
  val head: T,
  val tail: MyLinkedList<T>?
)

val list = MyLinkedList(1, MyLinkedList(2, null))
```

생성자가 객체를 만들 수 있는 유일한 방법은 아니며, 디자인 패턴 중 생성 패턴(creational pattern)을 이용하여 만들 수 있다.

생성 패턴은 객체를 생성자로 직접 생성하지 않고, 별도의 함수를 통해 생성한다.

```kotlin
fun <T> myLinkedListOf(
  vararg elements: T
): MyLinkedList<T>? {
  if (elements.isEmpty()) return null
  val head = elements.first()
  val elementsTail = elements.copyOfRange(1, elements.size)
  val tail = myLinkedListOf(*elementsTail)
  return MyLinkedList(head, tail)
}

val list = myLinkedListOf(1, 2)
```

객체 인스턴스 생성을 위한 패턴 중 팩토리 메서드 클래스에서 생성자의 역활을 대신 해 주는 함수를 팩토리 함수라고 한다.

팩토리 메서드를 이용했을 때의 다음과 같은 장점이 있다.

* 함수의 이름을 붙일수 있다
  * 생성자를 이용하여 생성하는것 보다 훨씬 이해하기 쉽다.(`ArrayList.withSize(3)`)
  * 동일한 파라미터 타입을 갖는 생성자의 충돌을 줄일 수 있다.
* 원하는 타입의 객체를 리턴할 수 있다.
  * 생성자와 다르게 함수가 원하는 형태의 타입을 리턴할 수 있다.
* 객체 생성에 따른 전략을 세울 수 있다.
  * 생성자와 다르게 호출될 때마다 새 객체를 만들 필요가 없다.
  * 싱글턴 패턴처럼 객체를 하나만 생성하게 강제 하거나, 최적화를 위해 캐싱 메커니즘을 사용할 수 있다.
  * 객체를 만들 수 없을 경우 `null` 을 리턴하게 만들 수 있다.
* 팩토리 함수는 아직 존재하지 않는 객체를 리턴할 수 있다.
  * 프로젝트를 빌드하지 않고 앞으로 만들어질 객체를 사용할 수 있다.
  * 프록시를 통해 만들어지는 객체를 사용할 수 있다.
* 객체 외부에 팩토리 함수를 만들면, 그 가시성을 원하는대로 제어할 수 있다.
* 팩토리 함수는 인라인으로 만들수 있으며, 그 파라미터를 `reified` 로 만들수 있다.
* 팩토리 함수는 생성자로 만들기 복잡한 객체도 생성이 가능하다.
* 사용자가 원하는 시점에 객체를 만들수 있다.

팩토리 함수 내부에서는 생성자를 이용하여 사용해야 한다.

팩토리 함수는 기본 생성자가 아닌 추가 생성자(secondary constructor) 와 경쟁관계 이다.

### Companion 객체 팩토리 함수

팩토리 함수를 정의하는 가장 일반적인 방법은 companion 객체를 사용하는 것이다.

```kotlin
class MyLinkedList<T>(
  val head: T,
  val tail: MyLinkedList<T>?
) {
  companion object {
    fun <T> of(vararg elements: T): MyLinkedList<T>? {
      /*...*/
    }
  }
}

val list = MyLinkedList.of(1, 2)
```

이러한 방법은 인터페이스에도 구현할 수 있다.

```kotlin
class MyLinkedList<T>(
  val head: T,
  val tail: MyLinkedList<T>?
): MyList<T> {
  //...
}

interface MyList<T> {
  //...

  companion object {
    fun <T> of(vararg elements: T): MyList<T>? {
      //...
    }
  }
}

val list = MyList.of(1, 2)
```

팩토리 함수에서는 다음과 같은 이름이 주로 사용된다.

* from: 파라미터를 하나 받고 같은 타입의 인스턴스 하나를 리턴하는 변환 함수

  ```kotlin
  val date: Date = Date.from(instant)
  ```

* of: 파라미터를 여려개 받고, 이를 통합해서 인스턴스를 만들어 주는 함수

  ```kotlin
  val faceCards = Set<Rank> = EnumSet.of(JACK, QUEEN, KING)
  ```

* valueOf: from 또는 of와 비슷한 기능을 하면서도, 의미를 조금 더 쉽게 읽을수 있게 이름을 붙인 함수
  
  ```kotlin
  val prime: BigInteger = BigInteger.valueOf(Integer.MAX_VALUE)
  ```

* instance/getInstance: 싱글턴으로 하나의 인스턴스를 리턴하는 함수

  ```kotlin
  val luke: StackWalker = StackWalker.getInstance(options)
  ```

* createdInstance/newInstance: instance/getInstance 처럼 동작 하지만 함수를 호출할 때마다 새로운 인스턴스를 만들어서 리턴

  ```kotlin
  val newArray = Array.newInstance(classObject, arrayLen)
  ```

* getType: instance/getInstance 처럼 동작하지만 팩토리 함수가 다른 클래스에 있을대 사용하며, 타입은 팩토리 함수에서 리턴하는 타입

  ```kotlin
  val fs: FileStore = Files.getFileStore(path)
  ```

* newType: createdInstance/newInstance 처럼 동작하지만 팩토리 함수가 다른 클래스에 있을대 사용하며, 타입은 팩토리 함수에서 리턴하는 타입

  ```kotlin
  val br: BufferedReader = Files.newBufferedReader(path)
  ```

경험이 없는 코틀린 개발자들은 companion 객체 멤버를 단순한 정적 멤버처럼 다루는 경우가 많다.

하지만 companion 객체는 더 많은 기능을 가지고 있으며, companion 객체는 인터페이스를 구현할 수 있고, 클래스를 상속받을 수도 있다.

예를 들어 코틀린의 코루틴 내부에서는 코루틴 컨텍스트의 companion 객체들이 `CoroutineContext.Key` 인터페이스를 구현하고 있다.

```kotlin
public interface ContinuationInterceptor : CoroutineContext.Element {
    /**
     * The key that defines *the* context interceptor.
     */
    companion object Key : CoroutineContext.Key<ContinuationInterceptor>
}
```

### 확장 팩토리 함수

이미 companion 객체가 존재할 때, 이 companion 객체를 직접 수정할 수는 없고, 다른 파일에 함수를 만들어야 할 때 사용한다.

다음과 같이 Tool 인터페이스를 교체할 수 없다고 가정해보자

```kotlin
interface Tool {
  companion object { /*...*/ }
}
```

companion 객체를 활용해서 확장 함수를 정의할 수 있다.

```kotlin
fun Tool.Companion.createBigTool(/*...*/): BigTool {
  //...
}

// 사용
Tool.createBigTool()
```

### 톱레벨 팩토리 함수

객체를 만드는 방법 중 하나로 `listOf`, `setOf`, `mapOf` 등과 같은 톱레벨 팩토리 함수를 이용하는 방법이 있다.

톱레벨 함수는 굉장히 광범위하게 사용하지만 public 톱레벨 함수는 모든 곳에서 사용할 수 있으므로 IDE의 팁을 복잡하게 만드는 단점이 있다. 

따라서 톱레벨 함수를 만들 때는 이름을 신중하게 잘 지정해야 한다.

### 가짜 생성자

일반적인 코틀린의 생성자는 톱레벨 함수와 같은 형태로 사용된다.

```kotlin
class A
val a = A()
```

일반적인 관점에서 대문자로 시작하는지 아닌지는 생성자와 함수를 구분하는 기준이 되기도 한다.

함수도 대문자로 시작될 수 있지만, 이는 특수한 다른 용도로 사용된다.

```kotlin
public inline fun <T> List(
  size: Int,
  init: (index: Int) -> T
): List<T> = MutableList(size, init)
```

```kotlin
public inline fun <T> MutableList(
  size: Int,
  init: (index: Int) -> T
): MutableList<T> {
  val list = ArrayList<T>(size)
  repeat(size) { index -> list.add(init(index))}
  return list
}
```

위와 같은 톱레벨 함수는 생성자처럼 보이고, 생성자처럼 동작된다.

하지만 팩토리 함수와 같은 모든 장점을 갖는다.

많은 코틀린 개발자가 이를 톱레벨 함수인지 잘 몰르며, 이를 가짜 생성자(fake constructor) 라고 부른다.

가짜 생성자를 만드는 이유는 다음과 같다.

* 인터페이스를 위한 생성자를 만들고 싶을때
* refried 타입 아규먼트를 작게하고 싶을때

가짜 생성자는 진짜 생성자처럼 동작되어야 하며 진짜 생성자와 같은 동작을 해야 한다.

가짜 생성자를 선언하는 또 다른 방법은 `invoke` 연산자를 갖는 companion 객체를 사용하면 비슷한 결과를 얻을 수 있다.

```kotlin
class Tree<T> {
  companion object {
    operator fun <T> invoke(size: Int, generator: (Int) -> T): Tree<T> {
      //...
    }
  }
}

// 사용
Tree(10) { "$it" }
```

이와 같은 방식은 거의 사용되지 않으며 권장하지 않는다.

### 팩토리 클래스의 메서드

팩토리 클래스와 관련된 추상 팩토리, 프로토타입 등의 수많은 생성 패턴이 있다.

이런 패턴 중 일부는 코틀린에서는 적합하지 않으며, 일부 패턴(점층적 생성자 패턴, 빌더 패턴)은 코틀린에서는 의미가 없다.

```kotlin
data class Student(
  val id: Int,
  val name: String,
  val surname: String
)

class StudentsFactory {
  var nextId = 0
  fun next(name: String, surname: String) = Student(nextId++, name, surname)
}

val factory = StudentsFactory()
val s1 = factory.next("Marcin", "Moskala")
println(s1) // Student(id=0, name=Marcin, Surname=Moskala)
val s2 = factory.next("Igor", "Wojda")
println(s2) // Student(id=1, name=Igor, Surname=Wojda)
```

팩토리 클래스는 프로퍼티를 가질 수 있고, 이를 활용하면 다양한 종류로 최적화 하거나 기능을 도입할 수 있다.

### 정리

코틀린은 팩토리 함수를 만들 수 있는 다양한 방법들을 제공하며 각각의 방법들은 여러 특징을 갖고 있다.

객체를 생성할때는 이런 특징을 잘 파악하고 사용해야 하며, 팩토리 함수를 사용하는 가장 일반적인 방법은 companion 객체를 활용하는 것이다.

## Item 34 기본 생성자에 이름 있는 옵션 아규먼트를 사용하라

객체를 정의하고 생성하는 방법을 지정할 때 사용하는 가장 기본적인 방법은 기본 생성자(primary constructor)를 사용하는 것이다.

```kotlin
class User(var name: String, var surname: String)
val user = User("Blue", "Berry")
```

기본 생성자로 객체를 만들 때는 객체의 초기 상태를 나타내는 아규먼트들을 전달한다.

```kotlin
data class Student(
  val name: String,
  val surname: String,
  val age: Int
)
```

다음 예는 인덱스가 붙어 있는 글을 출력하는 프레젠터 객체이다.

이 객체는 기본 생성자를 사용해서 종속성을 주입할 수 있다.

```kotlin
class QuotationPresenter(
  private val view: QuotationView,
  private val repo: QuotationRepository
) {
  private var nextQuoteId = -1

  fun onStart() {
    onNext()
  }

  fun onNext() {
    nextQuoteId = (nextQuoteId + 1) % repo.quotesNumber
    val quote = repo.getQuote(nextQuoteId)
    view.showQuote(quote)
  }
}
```

`QuotationPresenter` 는 기본 생성자에 선언되어 있는 프로퍼티보다 더 많은 프로퍼티를 갖고 있다.

위 코드에서 `nextQuoteId` 프로퍼티는 항상 -1 로 초기화 된다.

기본 생성자가 좋은 이유를 설명하기 위해 다음 두기지 예시를 살펴본다.

### 점증적 생성자 패턴

점증적 생성자 패턴은 여러가지 종류의 생성자를 사용하는 굉장히 간단한 패턴이다.

```kotlin
class Pizza {
    val size: String
    val cheese: Int
    val olives: Int
    val bacon: Int
​
    constructor(size: String, cheess: Int, olives: Int, bacon: Int) {
        this.size = size
        this.cheess = cheess
        this.olives = olives
        this.bacon = bacon
    }
    constructor(size: String, cheese: Int, olives: Int): this(size, cheese, olives, 0)
    constructor(size: String, cheese: Int): this(size, cheese, 0)
    constructor(size: String): this(size, 0)
}
```

위 코드는 좋은 코드가 아니다.

코틀린에서는 일반적으로 아래와 같이 디폴트 아규먼트(default argument)를 사용한다.

```kotlin
class Pizza(
    val size: String,
    val cheese: Int = 0,
    val olives: Int = 0,
    val bacon: Int = 0
)
```

위와 같은 디폴트 아규먼트는 코드를 단순하고 깔끔하게 만들어줄 뿐만 아니라 다양한 기능도 제공한다.

* 파라미터들의 값을 원하는 대로 지정할 수 있다.
* 아규먼트를 원하는 순서로 지정할 수 있다.
* 명시적으로 이름을 붙여서 아규먼트를 지정하므로 의미가 훨씬 명확하다.

이름 있는 아규먼트(named argument)를 활용하여 명시적으로 이름을 붙여주어 의미가 명확해진다.

### 빌더 패턴

자바에서는 이름 있는 아규먼트와 디폴트 아규먼트를 사용할 수 없지만 빌더 패턴을 사용한다.

자바의 빌더 패턴은 아래와 같은 장점을 제공한다.

* 파라미터에 이름을 붙일 수 있다.
* 파라미터를 원하는 순서대로 지정할 수 있다.
* 디폴트 값을 지정할 수 있다.

빌더 패턴을 코틀린으로 만들어보면 다음과 같이 작성할 수 있다.

```kotlin
class Pizza private constructor(
    val size: String,
    val cheese: Int,
    val olives: Int,
    val bacon: Int
) {
    class Builder(private val size: String) {
        private var cheese: Int = 0
        private var olives: Int = 0
        private var bacon: Int = 0
        
        fun setCheese(value: Int): Builder = apply {
            cheese = value
        }
        
        fun setOlives(value: Int): Builder = apply {
            olives = value
        }

        fun setBacon(value: Int): Builder = apply {
            bacon = value
        }
        
        fun build() = Pizza(size, cheese, olives, bacon)
    }
}
```

빌더 패턴을 사용하면 디폴트 아규먼트를 사용하는것과 같은 효과를 볼 수 있다.

하지만 빌더패턴을 사용하는것 보다 이름 있는 아규먼트를 사용하는것이 더 좋은 이유는 다음과 같다.

* 더 짧다
* 더 명확하다
* 더 사용하기 쉽다
* 동시성과 관련된 문제가 없다
  * 코틀린의 함수 파라미터는 항상 immutable 이지만 대부분의 빌더 패턴은 mutable 이다
  * 따라서 빌더 패턴의 함수를 thread-safe 하게 구현하는 것은 까다로운 일이다

다만 빌더 패턴이 더 유용한 경우도 있다.

* 값의 의미를 묶어서 지정해야 하는 경우

  ```kotlin
  val dialog = AlertDialog.Builder(context)
    .setMessage(R.string.fire_missiles)
    .setPositiveButton(R.string.fire, { d, id ->
      // 미사일 발사!
    })
    .setNegativeButton(R.string.cancel, { d, id -> 
      // 사용자가 대화상자에서 취소를 누른 경우
    })
    .create()
  ```

* 특정 값을 누적형태로 사용해야 한는 경우

  ```kotlin
  val router = Router.Builder()
      .addRoute(path = "/home", ::showHome)
      .addRoute(path = "/users", ::showUsers)
      .build()
  ```

위와 같은 경우에 빌더패턴을 만들지 않고 추가적인 타입을 만들고 활용하면 오히려 더 복잡해질수있다.

하지만 이런 특수한 경우라면 DSL(Domain Specific Language) 빌더를 사용해서 구현하기도 한다.

### 정리

일반적인 프로젝트에서 기본 생성자를 사용해 객체를 만든다.

코틀린에서는 점층적 생성자 패턴을 사용하지 않는다.

대신 디폴트 아규먼트를 활용하여 사용하는것이 더 좋다.

디폴트 아규먼트는 더 짧고, 더 명확하고, 더 사용하기 쉽다.

## Item 35 복잡한 객체를 생성하기 위한 DSL을 정의하라

코틀린을 활용하면 DSL(Domain Specific Language)을 직접 만들 수 있다.

이는 복잡한 객체, 계층 구조를 갖고 있는 객체들을 정의할 때 굉장히 유용하다.

DSL 을 만드는 일은 힘든일이지만, 한 번 만들고 나면 보일러플레이트(boilerplate)와 복잡성을 숨기면서 개발자의 의도를 명확하게 표현 가능하다.

### 사용자 정의 DSL 만들기

사용자 정의 DSL을 만드는 방법을 이해하려면, 리시버를 사용하는 함수 타입에 대한 개념을 이해해야 한다.

> 책 참고

### 언제 사용해야 할까?

DSL 은 정보를 정의하는 방법을 제공한다.

* 복잡한 자료 구조
* 계층적인 구조
* 거대한 양의 데이터

많이 사용되는 반복되는 코드가 있고, 이를 간단하게 만들 수 있는 별도의 코틀린 기능이나 라이브러리가 없다면 DSL 사용을 고려해보아도 좋을것 같다.

### 정리

DSL은 언어 내부에서 사용할 수 있는 특벼한 언어이다.

복잡한 객체는 물론 HTML 코드, 복잡한 설정 등의 계층구조를 갖는 객체를 간단하게 표현할수 있게 해준다.

잘 정의된 DSL은 프로젝트에 굉장히 큰 도움을 주지만, 좋은 DSL을 만드는 작업은 굉장히 힘이 든다.
