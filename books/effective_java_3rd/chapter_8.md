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

## Item 50 적시에 방어적 복사본을 만들라

클라이언트가 불변식을 깨드리려고 혈안이 되어 있다는 가정아하에 방어적으로 프로그래밍 해야 한다.

```java
public final class Period {
  private final Date start;
  private final Date end;

  public Period(Date start, Date end) {
    if (start.compareTo(end) > 0) {
      throw new IllegalArgumentException(start + " after " + end);
    }

    this.start = start;
    this.end = end;
  }

  public Date start() {
    return start;
  }

  public Date end() {
    return end;
  }
}
```

위 코드에서 내부를 수정하려면 다음과 같이 작성 가능하다.

```java {4}
Date start = new Date();
Date end = new Date();
Period p = new Period(start, end);
end.setYear(78);
```

외부 공격으로 `Period` 인스턴스 내부를 보호하려면 생성자에게 받은 가변 매개변수를 각각 _**방어적으로 복사 (Defensive Copy)**_ 해야 한다.

이후에는 `Period` 인스턴스 안에서는 원본이 아닌 복사본을 허용해야 한다.

```java {2,3}
public Period(Date start, Date end) {
  this.start = new Date(start.getTime());
  this.end = new Date(end.getTime());

  if (this.start.compareTo(this.end) > 0) {
    throw new IllegalArgumentException(this.start + " after " + this.end);
  }
}
```

매개변수의 유효성을 검사하기 전에 방어적 복사본을 만들고, 이 복사본으로 유효성을 검사한다.

매개변수가 제 3자에 의해 확장될 수 있는 타입이라면 방어적 복사본을 만들 때 `clone()` 을 사용해서는 안된다.

```java {4}
Date start = new Date();
Date end = new Date();
Period p = new Period(start, end);
p.end().setYear(78)
```

필드의 반환에도 _**방어적 복사본을 반환**_ 한다.

```java {2,6}
public Date start() {
  return new Date(this.start.getTime());
}

public Date end() {
  return new Date(this.end.getTime());
}
```

:::tip
_**클래스가 클라이언트로 받은 혹은 클라이언트로 반환하는 요소가 구성요소가 가변이라면 그 요소는 반드시 방어적으로 복사 (Depensive Copy) 해서 사용**_ 해야 한다.  
단 방어적 복사를 수행하는데 많은 비용이 소요가 된다면 해당 구성요소를 수정했을때 그에 대한 책임은 클라이언트에 있음을 문서에 명시하도록 하자
:::

## Item 51 메서드 시그니처를 신중히 설계하라

* 메서드 이름을 신중히 짓자
  * 같은 패키지에 속한 다른 이름들과 일관되게 짓는다.
* 편의 메서드를 많이 만들지 말자
  * 클래스나 인터페이스는 자신의 각 기능을 완벽히 수행하는 메서드로 제공해야 한다.
* 매개변수 목록을 짧게 유지하자
  * 매개변수 갯수는 4개 이하로 유지하자
  * 같은 타입의 매개변수가 여러개 연달아 나오는 경우는 해롭다.

## Item 52 다중정의는 신중히 사용하라

_**다중정의 (Overloading : 오버로딩)**_ 은 어떤 메서드를 호출할지는 컴파일 타임에 결정 _**(Static Dispatch : 정적 디스패치)**_ 된다.

_**재정의 (Overriding : 오버라이딩)**_ 은 동적으로 결정 _**(Dynamic Dispatch : 동적 디스패치)**_ 된다.

매개변수가 같을 때는 다중정의를 피하는것이 좋다.  
기존 클래스를 수정하여 새로운 인터페이스를 구현해야 할 때는 같은 객체를 입력 받는 다중 정의 메서드들이 모두 동일하게 동작되어야 한다.

## Item 53 가변인수는 신중히 사용하라

합을 구하는 메서드

```java
static int sum (int... args) {
  int sum = 0;
  for (int arg : args) {
    sum += arg;
  }

  return sum;
}
```

```java
static int min (int... args) {
  if (args.length === 0) {
    throw new IllegalArgumentException("인수가 1개 이상 필요합니다.");
  }
  
  int min = args[0];

  for (int i = 1; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }

  return min;
}
```

위 코드는 인수를 0개로 넘기면 런타임 에러가 발생한다. (코드도 너저분 하다.)

때문에 아래와 같이 리펠토링이 필요하다.

```java
static int min (int firstArg, int... remainingArgs) {
  int min = firstArg;
  
  for (int arg : remainingArgs) {
    if (arg < min) {
      min = arg;
    }
  }

  return min;
}
```

인수의 개수가 일정하지 않을때에도 메서드를 정의해야 한다면 가변인수가 반드시 필요하다.

메서드를 정의할때는 필수 매개변수는 가변인수 앞에 두고, 가변인수를 사용할 때는 성능문제까지 고려하자
