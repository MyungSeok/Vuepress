# Nested Class

중첩 (nested) 클래스는 클래스 안에 있는 클래스로 정적인 중첩 클래스를 말한다.
아래 코드에서 말하는 Outer Class 내부에 있는 Nested Class 와 같은걸 말한다.

```kotlin
class OuterClass {
  // statement
  class NestedClass {
    // statement
  }
}
```

중첩 클래스는 크게 두 종류로 나뉠수 있다.

* Static Nested Class (정적 중첩 클래스)
* Non-Static Nested Class (비 정적 중첩 클래스 :: Inner Class)

## Static Nested Class (정적 중첩 클래스)

정적 중첩 클래스의 특징은 다음과 같다.

* Outer Class 의 지역변수 접근이 불가능
* 외부에서 `OuterClass.NestedClass` 로 객체 생성 가능

자바에서 사용할 경우 아래와 같이 사용

```java
class OuterClass {
  // statement
  static class StaticNestedClass {
    // statement
  }
}
```

코틀린에서 사용할 경우 아래와 같이 사용

```kotlin
class OuterClass {
  // statement
  class StaticNestedClass {
    // statement
  }
}
```

위 스켈레톤코드에서 구현 내용을 추가하면 아래와 같다.

```kotlin
class OuterClass {
  val outerValue = 10
  class StaticNestedClass {
    private val innerValue = 20
    fun printItems() {
      println("value: $innerValue")
    }
  }
}

fun main(args: Array<String>) {
  val nested = OuterClass.StaticNestedClass()
  nested.printItems()
}
```

## Non-Static Nested Class

비 정적 중첩 클래스는 일반적으로 Inner Class 라고 하며 특징은 다음과 같다.

* OuterClass 의 지역변수 접근이 가능
* 외부에서 `OuterClass.NestedClass` 로 객체 생성이 불가능

자바의 사용할 경우 아래와 같이 사용

```java
class OuterClass {
  // statement
  class InnerClass {
    // statement
  }
}
```

코틀린에서는 아래와 같이 사용

```kotlin
class OuterClass {
  // statement
  inner class InnerClass {
    // statement
  }
}
```

코틀린에서는 `inner class` 로 사용하려면 `inner` 키워드를 꼭 붙여줘야 한다.

위 스켈레톤 코드에서 구현 코드를 추가하면 다음과 같다.

```kotlin
class OuterClass {
  val outerValue = 10
  
  inner class InnerClass {
    private val innerValue = 20
    fun printItems() {
      println("inner: $innerValue, outer: $OuterValue")
    }
  }

  fun printItems() {
    val inner = InnerClass()
    inner.printItems()
  }
}

fun main(args: Array<String>) {
  val outer = OuterClass()
  outer.printItems()
}
```

:::tip 참고자료
<https://codechacha.com/ko/kotlin-nested-classes/>
:::
