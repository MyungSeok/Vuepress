# 1주차 (1 ~ 4 Chapter)

## Chapter 01 확장 가능한 언어

스칼라(Scala) 라는 이름은 확장 가능한 언어(Scalable) 라는 뜻이다.
이렇게 이름을 지은 이유는 스칼라를 사용자의 요구에 따라 자랄 수 있는 언어로 설계했기 때문이다.

> `scalable` 은 규모를 늘이고 줄이는게 자유롭다는 뜻이며, <br/>보통 규모가 늘어나거나 줄어들어도 성능이나 비용이 선형적으로 증가한다는 뜻이다.

스칼라는 객체지향 (Object Oriented) 과 함수형 (Functional) 프로그래밍 개념을 정적 타입 언어 (Statically Typed Language) 에 합쳐놓은 언어이다.

### 1.1  여러분의 마음에서 점점 자라나는 언어 (a language that grows on you)

```scala
var captial = Map("US" -> "Washington", "France" -> "Paris)
capital += ("Japan" -> "Tokyo")
println(capital("France"))
```

위와 같이 높은 수준의 간결하고, 불필요한 세미콜론이나 타입 지정으로 인해 지저분하지 않게 코드 작성이 가능하다.

이들의 공통적인 특징은 **연관맵**을 언어수준에서 지원한다는 점이다.

#### 새로운 타입을 키워가기

스칼라는 스칼라를 사용하는 사람들이 확장하고 변경할 수 있도록 설계했다. (Growing a language)

```scala
def factorial(x: BigInt): BigInt = 
  if (x == 0)
    1
  else 
    x * factorial(x - 1)
```

`factorial(30)` 을 호출하면 다음과 같은 결과를 볼 수 있다.

```scala
265252859812191058636308480000000
```

반환 타입인 `BigInt` 는 마치 내장 타입인것 처럼 보이지만 **스칼라 표준 라이브러리에 들어있는 평범한 클래스**일 뿐이다.

예를 들어 Java 에서 지원하는 `BigInteger` 를 사용한다면 다음과 같이 표현될 것 이다.

```scala
import java.math.BigInteger

def factorial(x: BigInteger): BigInteger = 
  if (x == BigInteger.ZERO)
    BigInteger.ONE
  else
    x.multiply(factorial(x.subtract(BigInteger.ONE)))
```

위와 같은 코드는 내장타입이 그에 맞는 메서드나 기능을 제공해줘야 하기 때문에 다양한 환경에서 유연하게 적용하기 어려울 것이다.

가령 십진수, 복소수, 유리수, 신뢰구간, 다항식 등의 모든 기능을 하나의 언어에서 모든것을 제공하는 것은 확장성이 좋지 않다.<br/>
스칼라는 언어가 기본적으로 지원하는것 처럼 사용자가 쉽게 사용할 수 있는 라이브러리를 제공하는 방식으로 사용자가 필요한 방향으로 확장하고 고칠 수 있게 허용한다.

### 새로운 제어 구조 키워가기

스칼라의 확장성 원칙을 제어 구조에도 마찬가지로 적용된다.

이러한 확정성을 **액터 기반 동시선 프로그래밍 (Actor-based concurrent programming)** 스칼라 API 인 아카(Akka) 에서 볼 수 있다.

동시성 프로그래밍을 작성하는 일은 꽤 어려우며 자바의 스레드 모델은 공유 메모리 (Shared Memory) 와 락 (Lock) 기반으로 하며 코드를 보고 논리적으로 추론하기가 어렵다.<br/>코드에 숨어있는 경합 조건 (race condition) 이나 교착 상태 (deadlock) 이 없다고 확신하기는 어렵다.

안전한 대안은 얼랭 (Erlang) 프로그래밍에서 사용하는 **액터** 같은 메세지 전달 아키텍쳐이다.

