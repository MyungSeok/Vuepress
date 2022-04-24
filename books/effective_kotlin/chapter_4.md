# Chapter 4 추상화 설계

추상화(abstraction) 는 프로그래밍 세계에서 가장 중요한 개념중 하나이다.

OOP(Object-Oriented Programming)에서 추상화는 세 가지 주요 개념중에 하나이다.

> 컴퓨터 과학에서 추상화(abstraction)는 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것을 말한다.

대표적인 예로 인터페이스가 있다.

인터페이스는 클래스라는 복잡한 것에서 메서드와 프로퍼티만 추출해서 간단하게 만들었으므로, 클래스의 추상화라고 할 수 있다.

추상화를 하려면 객체에서 무엇을 감추고 무엇을 노출해야 하는지를 결정해야 한다.

### 프로그래밍의 추상화

강력한 프로그래밍 언어들이 당연히 갖고 있는 기능 중 하나는 공통패턴에 이름을 붙여서 추상화를 만드는 기능이다.

예를 들면 함수, 델리게이트, 클래스가 대표적인 예이다.

### 추상화와 자동차

자동차는 잘 만들어진 인터페이스 이다.

내부적으로는 복잡한 요소들이 많지만, 굉장히 쉽게 사용할 수 있다.

내부적으로 일어나는 일을 마법처럼 숨겨줘서 운전자는 자동차의 내부 구성을 몰라도 운전자는 운전하는 방법만 알면 된다.

프로그래밍에서는 다음과 같은 목적으로 추상화를 사용한다.

* 복잡성을 숨기기 위해
* 코드를 체계화 하기 위해
* 만드는 사람에게 변화의 자유를 주기 위해

## Item 26 함수 내부의 추상화 레벨을 통일하라

컴퓨터는 복잡한 장치이지만 이 복잡함이 여러 계층에 다양한 요소로서 분할되어 있어 쉽게 사용할 수 있다.

계층이 잘 분리되면 다른 계층은 이미 완성되어 있으므로 필요한 계층만 생각하면 된다.

개발자는 일반적으로 특정한 계층에서만 작업하며 가끔 추가로 계층을 올려서 사용한다.

![컴퓨터의 계층](/img/A136.png)

### 추상화 레벨

높은 레벨로 올라갈 수록 물리장치로부터 멀어진다.

높은 레벨일수록 걱정해야 하는 세부적인 내용들이 적다.

### 추상화 레벨 통일

컴퓨터 과학과 마찬가지로 코드도 추상화를 계층처럼 만들어서 사용할 수 있다.

이 역활을 하는 도구는 함수이며, 함수 또한 높은 레벨과 낮은 레벨을 구분해서 사용해야 한다는 원칙이 있다.

이를 **추상화 레벨 통일 (Single Level of Abstraction, SLA)** 이라고 부른다.

함수 내부에는 아래와 같이 여러 로직들을 구현할 수 있다.

```kotlin
class CoffeeMachine {
  fun makeCoffee() {
    // 수백 개의 변수를 선언합니다.
    // 복잡한 로직을 처리합니다.
    // 낮은 수준의 최적화도 여기서 잔뜩 합니다.
  }
}
```

위와 같이 코드를 작성할 경우 `makeCoffee` 함수가 수백줄이 될 수 있어 다음과 같이 함수를 계층처럼 나누어서 사용하는 것이다.

```kotlin
class CoffeeMachine {
  fun makeCoffee() {
    boilWater()
    brewCoffee()
    pourCoffee()
    pourMilk()
  }

  private fun boilWater() { /***/ }
  private fun brewCoffee() { /***/ }
  private fun pourCoffee() { /***/ }
  private fun pourMilk() { /***/ }
}
```

위와 같이 함수를 계층으로 나뉘어서 사용하면 읽기 쉽고, 이해하기 쉽니다.

매우 간단한 추상화를 추출해서 가독성을 크게 향상시킨 것이다.

함수는 간단해야 한다. 이는 함수는 작아야 하며, 최소한의 책임만 가져야 한다는 일반적인 규칙이다.

추가적으로 이런 형태로 함수를 추출하면, 재사용과 테스트가 쉬워진다.

### 프로그램 아키텍처의 추상 레벨

추상화 계층이라는 개념은 함수보다 높은 레벨에서도 적용할 수 있다.

추상화를 구분하는 이유는 서브 시스템의 세부사항을 숨김으로써 상호 운영성(interoperability) 와 독립성을 얻기 위함이다.

모듈 시스템(modular system) 을 설계할 때도 중요하다.

모듈을 분리하면 계층 고유의 요소를 숨길수 있다.

계층이 잘 분리된 프로젝트는 좋은 프로젝트라고 부를수 있으며, 어떤 계층의 위치에서 코드를 보아도, 일반적인 관점을 얻을수 있다.

### 정리

별도의 추상화 계층을 만드는 것은 프로그래밍에서 일반적으로 사용되는 개념이다.

이는 knowledge 를 체계화 하고, 서브 시스템에서 세부 사항을 숨김으로 상호 운영성(interoperability)과 플랫폼 독립성을 얻게 한다.

함수, 클래스, 모듈 등으로 다양한 방식을 통해 추상화를 분리한다.

## Item 27 변화로부터 코드를 보호하려면 추상화를 사용하라

> 물 위를 걷는 것과 명세서로 소프트웨어를 개발하는 것은 쉽다. 둘 다 동결되어 있다면...

함수와 클래스 등의 추상화로 실질적인 코드를 숨기면, 사용자가 세부 사항을 알지 못해도 괜찮다는 장점이 있다.

여러 추상화의 균형을 맞추는 방법을 알아본다.

### 상수

리터럴은 아무것도 설명하지 않는다. 따라서 코드에서 반복적으로 등장할 때 문제가 된다.

리터럴한 상수 프로퍼티로 변경하면 해당 값에 의미 있는 이름을 붙일 수 있으며, 상수 값을 변경해야 할 때 훨씬 쉽게 변경할 수 있다.

```kotlin
fun isPasswordValid(text: String): Boolean {
  if (text.length < 7) return false
  // ...
}
```

여기서 숫자 `7` 은 아마도 비밀번호의 최소 길이를 나타내겠지만, 이해하는데 시간이 걸린다.

상수로 빼낸다면 훨씬 쉽게 이해할 수 있을것이다.

```kotlin
const val MIN_PASSWORD_LENGTH = 7

fun isPasswordValid(text: String): Boolean {
  if (text.length < MIN_PASSWORD_LENGTH) return false
  // ...
}
```

이렇게 하면 비밀번호의 최소 길이를 변경하기도 쉽다.

이러한 숫자가 프로젝트 전체에 퍼져잇다면 변경하기 힘들것이다.

상수로 추출하면 다음과 같은 장점이 있다.

* 이름을 붙일 수 있다.
* 나중에 해당 값을 쉽게 변경할 수 있다.

### 함수

많이 사용되는 알고리즘은 다음과 같이 확장함수로 만들어서 사용할 수 있다.

```kotlin
fun Context.toast(
  message: String,
  duration: Int = Toast.LENGHT_LONG
) {
  Toast.makeText(this, message, duration).show()
}

// 사용
context.toast(message)

// 액티비티 또는 컨텍스트의 서브클래스에서 사용할 경우
toast(message)
```

만약 토스트가 아니라 스낵바라는 다른 형태의 방식으로 출력해야 한다면 기존의 `Context.toast()` 를 `Context.snackbar()` 로 한꺼번에 수정하면 된다.

```kotlin
fun Context.snackbar(
  message: String,
  length: Int = Toast.LENGTH_LONG
) {
  //...
}
```

하지만 이런 해결 방법은 좋지 않다.

함수의 이름을 바꾸는 것은 위험할 수 있다. 다른 모듈이 이 함수에 의존하고 있다면, 다른 모듈에 큰 문제가 발생할 것이다.

따라서, 메세지를 출력하는 더 추상적인 방법이 필요하다.

토스트 출력을 토스트라는 개념과 무관한 `showMessage` 라는 높은 레벨의 함수로 옮긴다.

```kotlin
fun Context.showMessage(
  message: String,
  duration: MessageLength = MessageLength.LONG
) {
  val toastDuration = when(duration) {
    SHORT -> Length.LENGTH_SHORT,
    LONG -> Length.LENGTH_LONG
  }
  Toast.makeText(this, message, toastDuration).show()
}

enum class MessageLength { SHORT, LONG }
```

### 클래스

```kotlin
class MessageDisplay(val context: Context) {
  fun show(
    message: String,
    duration: MessageLength = MessageLength.LONG
  ) {
    val toastDuration = when(duration) {
      SHORT -> Length.LENGTH_SHORT,
      LONG -> Length.LENGTH_LONG
    }
    Toast.makeText(this, message, toastDuration)
      .show()
  }
}

enum class MessageLength { SHORT, LONG }
```

클래스가 함수보다 더 강력한 이유는 상태를 가질수 있므며, 많은 함수를 가질 수 있다는 점 때문이다(클래스 멤버 함수를 메서드라고 부른다).

클래스의 상태인 context는 기본 생성자를 통해 주입(inject)된다.

의존성 주입 프레임워크를 사용하면, 클래스 생성을 위임할 수 있다.

```kotlin
@Inject lateinit var messageDisplay: MessageDisplay
```

또한 mock 객체를 활용해서 해당 클래스에 의존하는 다른 클래스의 기능을 테스트할 수 있다.

```kotlin
val messageDisplay: MessageDisplay = mock()
```

게다가 메세지를 출력하는 더 다양한 종류의 메서드를 만들 수 있다.

```kotlin
messageDisplay.setCharistmasMode(true)
```

이처럼 클래스는 훨씬 더 많은 자유를 보장해 준다.

하지만 여전한 한계가 존재한다. 예를 들면 클래스가 `final` 이면, 해당 클래스 타입 아래에 어떤 구현이 있는지 알 수 있다.

`open` 클래스를 활용하면 서브 클래스를 활용하여 조금은 더 자유롭게 사용할 수 있다.

더 많은 자유를 얻으려면, 인터페이스 뒤에 클래스를 숨기는 방식으로 추상화 하면 된다.

### 인터페이스

코틀린 표준 라이브러리를 읽어보면, 거의 모든것이 인터페이스로 표현된다는 것을 확인할 수 있다.

인터페이스 뒤에 객체를 숨김으로써 실질적인 구현을 추상화하고, 사용자가 추상화된 것에만 의존하게 만들수 있는것 이다.

즉 결합(coupling)을 줄일수 있는 것이다.

코틀린이 클래스가 아니라 인터페이스를 리턴하는 이유는 코틀린은 멀티 플랫폼 언어이며, 각 플랫폼의 서로 다른 구현에 따른 리스트를 리턴해도 공통적인 인터페이스에 맞춰져 있으므로 차이없이 사용할 수 있다.

다음은 **클래스를 인터페이스 뒤에 숨긴다는 것** 은 다음 예시로 보여주고 있다.

```kotlin
interface MessageDisplay {
  fun show(
    message: String,
    duration: MessageLength = LONG
  )
}

class ToastDisplay(val context: Context): MessageDisplay {
  override fun show(
    message: String,
    duration: MessageLength
  ) {
    val toastDuration = when(duration) {
      SHORT -> Length.SHORT
      LONG -> Length.LONG
    }
    Toast.makeText(context, message, toastDuration)
      .show()
  }
}

enum class MessageLength { SHORT, LONG }
```

이렇게 구성하면 더 많은 자유를 얻을 수 있다.

이러한 클래스는 다른 플랫폼에서 공유하여 사용하는 공통 모듈에서도 `MessageDisplay` 를 사용할 수 있다.

```kotlin
val messageDisplay: MessageDisplay = TestMessageDisplay()
```

마지막으로 위와 같이 선언과 사용이 분리되어 있으므로, ToastDisplay 등의 실제 클래스를 자유롭게 변경할 수 있다.

다만 사용방법을 변경하려면, MessageDisplay 인터페이스를 변경하고, 이를 구현하는 모든 클래스를 변경해야 한다.
