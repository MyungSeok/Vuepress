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
