# Chapter 10 예외

예외를 제대로 활용한다면 프로그램의 가독성, 신뢰성, 유지보수성이 높아지지만 반대로 잘못 사용하면 반대의 효과만 나타난다.

## Item 69 예외는 진짜 예외 상황에서만 사용하라

예외는 예외상황에서만 사용해야 하며 절대로 일상적인 제어 흐름용으로 쓰여서는 안된다.

예를 들면 일반적인 반복문의 경우 try-catch 문에 넣으면 JVM 이 적용 가능한 최적화가 제한된다. (성능이 2배이상 느림)

잘 설계된 API 라면 클라이언트가 정상적인 제어의 흐름에서 예외를 사용할 일이 없게 해야 한다.

## Item 70 복구할 수 있는 상황에는 검사 예외를, 프로그래밍 오류에는 런타임 예외를 사용하라

자바는 문제 상황을 알리는 타입 (throwable) 으로 _**검사 예외, 런타임 예외, 에러**_ 이렇게 세가지 유형을 제공한다.

_**호출하는 쪽에서 복구해야 한다 여겨지는 상황이라면 검사 예외를 사용하라**_ (검사와 비검사 예외를 구분하는 기본 규칙이다)

프로그래밍 오류를 나타낼때는 런타임 예외를 사용하라.

대부분의 비 검사 `throwable` 은 모두 `RuntimeException` 의 하위 클래스여야 한다.

`throwable` 클래스는 대부분의 오류를 상세히 기술하지 않는데 이는 다시 말해 JVM 릴리즈 버전 별로 메세지 포맷이 다를수 있다는 뜻이다.

되도록이면 `throwable` 은 정의하지 않도록 하자

## Item 71 필요 없는 검사 예외 사용은 피하라

꼭 필요한 곳에서만 사용한다면 검사 예외는 프로그램의 안전성을 높여주지만, 남용하면 쓰기 고통스러운 API 를 낳는다.

API 호출자가 예외 상황에서 복수할 방법이 없다면 비검사 예외를 던지자.

## Item 72 표준 예외를 사용하라

표준 예외를 재사용 하여 얻는 이득은 익히고 사용하기 쉽다는 점이다.

가장 많이 사용되는 예외는 `IllegalArgumentException` 이다.  
호출자가 _**인수로 부적절한 값을 넘길 때**_ 던지는 예외로 사용한다.

`IllegalStateException` 도 자주 사용된다. 이 예외는 _**대상 객체의 상태가 호출된 메서드를 수행하기에 적합하지 않을 때**_ 주로 던진다.

`Exception` `RuntimeException` `Throwable` `Error` 등은 직접 재사용 하지 말자  
이 클래스는 추상 클래스라고 생각하며 다른 예외들의 상위 클래스이기 때문에 여러 성격의 예외들에 대해서 포괄적으로 적용되어 안정적으로 테스하기 어렵다.

아래는 주요 사용되는 예외 유형을 정리한 것이다.

|예외|주요 쓰임|
|:--:|:-:|
|IllegalArgumentException|허용하지 않는 값이 인수로 건네졌을 때<br>(null은 따로 NullPointerException으로 처리)|
|IllegalStateException|객체가 메서드를 수행하기에 적절하지 않은 상태일 때|
|NullPointerException|null을 허용하지 않는 메서드에 null을 건넸을 때|
|IndexOutOfBoundsException|인덱스가 범위를 넘어섰을 때|
|ConcurrentModificationException|허용하지 않는 동시 수정이 발견됐을 때|
|UnsupportedOperationException|호출한 메서드를 지원하지 않을 때|

## Item 73 추상화 수준에 맞는 예외를 던지라

메서드가 저수준의 예외를 처리하지 않고 바깥으로 전파해버릴 때 내부구현 방식을 드러내어 윗 레벨의 API 를 오염시킨다.

이 문제를 피하려면 상위 계층에서는 저수준의 예외를 잡아 자신의 추상화 수준에 맞는 예외로 던져야 한다. (Exception translation : 예외 번역)

하지만 예외번역은  우수한 방법이나 무턱대고 예외를 전파하는것은 위험하니 명심하도록 하자.

## Item 74 메서드가 던지는 모든 예외를 문서화 하라

검사 예외는 항상 따로따로 선언하고, 각 예외가 발생하는 상황을 자바독의 `@throw` 태그를 사용하여 정확히 문서화 하자

메서드가 던질 수 있는 예외를 @throws 태그로 문서화하되 비검사 예외는 메서드 선언의 throws 목록에 넣지 말자

한 클래스에 정의된 많은 메서드가 같은 이유로 같은 예외를 던진다면 그 예외를 각각의 메서드가 아닌 클래스 설명에 추가하는 방법도 있다.  
이는 `NullPointerException` 이 가장 흔한 사례이다.

## Item 75 예외의 상세 메시지에 실패 관련 정보를 담으라

실패 순간을 포착하려면 발생한 예외에 관련된 모든 매개변수와 필드값을 실패 메세지에 담아야 한다.

예를 들면 `IndexOutOfBoundsException` 의 상세 메세지는 범위의 최솟값과 최대값, 그리고 그 범위를 벗어났다는 인덱스 값등을 제공해줘야 한다. (물론 보안정보같은 것들은 예외다)

실패의 메시지를 적절히 포착하려면 필요한 정보를 예외 생성자에서 모두 받아서 상세 메세지까지 미리 생성해 놓는 방법도 괜찮다.

예를들면 현재의 `IndexOutOfBoundsException` 생성자는 String 도 받지만 다음과 같이 구현해도 좋다.

```java
/**
 * IndexOutOfBoundsException을 생성한다. *
 * @param lowerBound 인덱스의 최솟값
 * @param upperBound 인덱스의 최댓값 + 1 * @param index 인덱스의 실젯값
 */
public IndexOfOutOfBoundsException(int lowerBound, int upperBound, int index) {
  // 실패를 포착하는 상세 메시지를 생성한다.
  super(String.format("최솟값: %d, 최댓값: %d, 인덱스: %d", lowerBound, upperBound, index));

  // 프로그램에서 이용할 수 있도록 실패 정보를 저장해둔다.
  this.lowerBound = lowerBound;
  this.upperBound = upperBound;
  this.index = index;
}
```

## Item 76 가능한 한 실패 원자적으로 만들라

호출된 메서드가 실패하더라도 해당 객체는 메서드 호출 전 상태를 유지해야 한다.

이러한 특성을 실패 원자적 (failure-atomic) 이라고 한다.

메서드를 실패 원자적으로 만드는 방법은 불변 객체로 설계하는 것이다.  
_**불변 객체는 태생적으로 실패 원자적**_ 이며 _**메서드가 실패하면 새로운 객체가 만들어지지는 않을수 잇으나 기존의 객체가 불안정한 상태에 빠지는 일은 없다.**_

또한 가변 객체의 메서드를 실패 원자적으로 만드는 방법은 아래와 같이 작업수행에 앞서 매개변수의 유효성을 검증하는 것이다.

```java
public Object pop() {
  if (size == 0)
    throw new EmptyStackException();
  
  Object result = elements[--size];
  elements[size] = null;
  return result;
}
```

임시 복사본에서 작업을 수행한 후 작업이 성공적으로 완료되면 원래 객체와 교체하는 것이다.

메서드 명세에 기술한 예외라면 설령 예외가 발생하더라도 객체의 상태는 메서드 호출전과 똑같이 유지되어야 한다는것이 기본 규칙이다.  
이 규칙이 지켜지지 않는다면 API 설명에 명시해야 한다.

## Item 77 예외를 무시하지 말라

간혹 아래 코드 처럼 `try-catch` 구문에서 `catch` 블럭을 비워두는 경우가 많다.

```java
try {
  /* statement */
} catch(SomeException e) {
}
```

이는 `catch` 블럭을 비워두면 존재할 이유가 없으며 에러가 발생해도 알지 못하게 하는것과 같으니 반드시 수정해야 한다.

예외를 무시하기로 했다면 `catch` 블럭 안에 그렇게 결정한 이유에 대해서 주석으로 남기고 예외 변수의 이름도 `ignored` 로 바꿔놓도록 하자.

```java
Future<Integer> f = exec.submit(planarMap::chromaticNumber);
int numColor = 4 // 기본값. 어떤 지도라도 이 값이면 충분하다.
try {
  numColor = f.get(1L, TimeUnit.SECONDS);
} catch (TimeoutException | ExcutionException ignored) {
  // 기본값을 사용한다 (색상 수를 최소화하면 좋지만, 필수는 아니다.)
}
```
