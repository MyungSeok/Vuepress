# Chapter 8 메서드

## Item 49 매개변수가 유효한지 검사하라

메서드와 생성자 대부분은 입력 매개변수 값이 특정 조건을 만족하기를 바란다.

* 인덱스 값은 음수를 제외한 정수이다
* 객체 참조는 `null` 이 아니여야 한다

위 두가지 예가 대표적인 제약 사항이다.

이러한 제약 사항은 반드시 문서화 해야 하며 메서드의 `body` 가 실행하기 이전에 검증되는것이 좋다

메서드 `body` 가 실행되기 전에 매개변수값을 확인한다면 잘못된 값이 넘어왔을때 즉각적이고 깔끔한 방식으로 예외를 던질수 있다.

_**매개변수 검사에 실패하면 실패 원자성 (failure atomicity) 을 어기는 결과**_ 를 낳을수 있다.

```java
public BigInteger mod(BigInteger m) {
  if (m.signum() <= 0) {
    throw new ArithmeticException("계수(m)는 양수여야 합니다. " + m);
  }

  /* statement */
}
```

위 메서드는 `m` 이 `null` 이면 `m.signum()` 을 호출하면 NPE (Null Pointer Exception) 을 던진다.

하지만 NPE 검사를 수행한다는 말은 전혀 없지만 `BigInteger` 클래스 관점에서 기술하였으니 문제가 없다.
