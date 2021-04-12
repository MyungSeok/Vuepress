# 2주차 (6 ~ 12 Chapter)

## Chapter 06 함수형 객체

지금까지 스칼라의 기본적인 내용을 이해했다면, 이제는 좀 더 완전한 기능을 갖춘 스칼라의 클래스 작성법을 알아볼 차례이다.

클래스 파라미터, 생성자, 메서드, 연산자, 비공개 멤버, 오버라이드, 선결 조건 확인, 오버로드, 자기 참조 같은 스칼라의 객체지향 프로그래밍 요소를 설명할 것이다.

### 6.1 분수 클래스 명세

이번장 부터는 분모 클래스를 만들어 진행해보겠다.

일반적으로 수학에서의 분수의 연산을 살펴보면 각 분모의 일치하는 작업을 통해 연산을 수행한다.

따라서 수학의 분수를 코드적으로 해석하면 **변경 가능한 상태가 없음**을 알 수 있다.

다음은 이를 코드로 표현한 방식이다.

```scala
val oneHalf = new Rational(1, 2)

val twoThirds = new Rational(2, 3)

(oneHalf / 7) + (1 - twoThireds)
```

### 6.2 Rational 생성

수학의 분수에서 처럼 `Rational` 객체를 사용하도록 변경 불가능한 객체로 사용하자.

```scala
class Rational(n: Int, d: Int)
```

클래스 이름인 `Rational` 뒤에 그 안에는 `n`, `d` 이라는 식별자가 있다.

이를 클래스 파라미터 (class parameter) 라고 부른다.

클래스 파라미터와 같은 둥 인자를 받는 주 생성자 (primary constructor) 를 만든다.

> **변경 불가능한 객체의 장단점**<br/>
> 변경 불가능한 객체의 장점은 많지만 가장 큰 단점은 그 자리에서 상태를 바로 변경하면 간단한데 <br/>
> 거대 그래프 객체를 복사해야 하는 경우처럼 많은 **비용이 드는 작업을 수행할 때 해당 알고리즘을 표현**하기에도 어려우며 **성능상의 이슈**가 발생하기도 한다.<br/>
> 때문에 스칼라에서는 **변경 불가능한것과 변경 가능한것을 항상 같이 제공**한다.

### 6.3 toString 메서드 다시 구현하기

자바와 같이 `toString` 메서드를 Rational 클래스에 추가하면 기존 구현을 오버라이딩 할 수 있다.

```scala
class Rational(n: Int, d: Int) {
  override def toString = s"$n/$d"
}
```

인터프리터에서는 다음과 같이 확인이 가능하다.

```scala
val x = new Rational(1, 3)
// x: Rational = 1/3

val y = new Rational(5/7)
// y: Rational = 5/7
```

### 6.4 선결 조건 확인

`require` 는 선결조건을 만들기 위한 여러가지 방법 중 하나이며

주 생성자에 있는 파라미터를 검증할 때 유용하다.

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  override def toString = s"$n/$d"
}
```

`require` 메서드는 인자로 `Boolean` 값을 받는데, 이 값이 참 (true) 이면 `require` 값이 정상적으로 끝나고 다음으로 진행한다.

만약 전달 받은 값이 거짓 (false) 이라면 `IllegalArgumentException` 예외가 발생하여 객체 생성을 막는다.

### 6.5 필드 추가

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  override def toString = s"$n/$d"
  def add(that: Rational): Rational = 
    new Rational(n * that.d + that.n * d, d * that.d)
}
```

위 코드는 컴파일 오류가 발생한다.

Rational 객체 분모, 분자 값에 접근하기 위해서는 필드로 만들어야 한다.

필드를 추가하여 해결한 형태는 다음과 같다.

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)

  val numer: Int = n
  val denom: Int = d

  override def toString = s"$n/$d"

  def add(that: Rational): Rational = 
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom
    )
}
```

이전과 달리 객체 바깥에서 필드를 통해 분자와 분모값에 접근할 수 있다.

### 6.6 자기 참조

실행중인 메서드의 호출 대상 인스턴스에 대한 참조를 자기 참조 (self reference) 라고 한다.

```scala
def lessThan(that: Rational) = 
  this.numer * that.denom < that.numer * this.denom
```

위 코드에서 `this` 를 빼고 `numer` 라고 써도 같다.

### 6.7 보조 생성자

스칼라에서 주 생성자가 아닌 다른 생성자를 보조 생성자 (auxiliary constructor) 라고 한다.

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  
  val numer: Int = n
  val denom: Int = d
  
  def this(n: Int) = this(n, 1) // 보조 생성자

  override def toString = s"$n/$d"

  def add(that: Rational): Rational = 
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom
    )
}
```

스칼라에서 보조 생성자는 `def this(...)` 라고 시작한다.

**모든 생성자 호출을 거슬러 올라가면 결국 주 생성자를 호출하게 만드는 효과가 있다.**

### 6.8 비공개 필드와 메서드

