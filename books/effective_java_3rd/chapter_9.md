# Chapter 9 일반적인 프로그래밍 원칙

## Item 57 지역변수의 범위를 최소화하라

지역변수의 범위를 줄이는데 가장 강력한 기법은 _**가장 처음 쓰일 때 선언하기**_ 이다.

거의 모든 지역변수는 선언과 동시에 초기화 해야 한다.

`try-catch` 블록에서는 예외이다.

변수를 초기화 하는 표현식에서 검사 예외를 던질 가능성이 있다면 try 블록 안에서 초기화 해야 한다. (그렇지 않으면 예외가 블록 바깥으로 전파될 가능성이 있다.)

변수의 값을 try 바깥에서도 사용해야 한다면 try 블록 앞에서 선언해야 한다.

반복자를 써야할 경우라면 `while` 구문보다는 `for` 구문을 사용하여 지역변수를 제한하고 메서드는 가능한 작게 유지하며 한가지 기능에만 집중해야 한다.

## Item 58 전통적인 for 문보다는 for-each 문을 사용하라.

`for-each` 의 정식 명칭은 _**향상된 for 문 (enhanced for statement)**_ 이며 반복자와 인덱스 변수를 사용하지 않으니 코드가 깔끔해지고 오류가 날 일도 적다.

`for-each` 문을 사용할 수 없는 경우는 다음과 같다.

* 파괴적인 필터링 (destructive filtering)
  * 컬렉션을 순회하면서 선택된 원소를 제거해야 한다면 반복자의 remove 메서드를 호출해야 한다.
  * `Java SE 8` 부터는 Collection 의 removeIf 메서드를 사용하여 컬렉션을 명시적으로 순회하는 일을 피할수 있다.
* 변형 (transforming)
  * 리스트나 배열을 순회하면서 그 원소의 값 일부 혹은 전체를 교체해야 한다면 리스트의 반복자나 배열의 인덱스를 활용해야 한다.
* 병렬 반복 (parallel iteration)
  * 여러 컬렉션을 병렬로 순회해야 한다면 각각의 반복자와 인덱스 변수를 사용하여 엄격하고 명시적으로 제어해야 한다.

`for-each` 문은 컬렉션과 배열을 물론 Interable 인터페이스를 구현한 객체라면 순회 가능하다.

```java
public interface Iterable<E> {
  Iterator<E> iterator();
}
```

Iterable 을 처음부터 구현하기는 까다롭지만 원소들의 묶음을 표한하는 타입을 작성해야 한다면 Iterable 을 구현하는 쪽으로 고민하도록 하자

## Item 59 라이브러리를 사용하고 익히라

표준 라이브러리를 사용하면 그 코드를 작성한 전문가의 지식과 여러분보다 앞서 사용한 다른 프로그래머의 경험들을 활용 할 수 있다.

Random 함수가 대표적으로 Java SE 7 이상에서는 `Random` 대신에 `ThreadLocalRandom` 으로 대체하면 대부분 잘 동작 한다. (3.6 배 이상의 성능향상)

또한 따로 노력하지 않다도 성능이 지속적으로 개선된다는 이점이 있다.

메이저 릴리즈에는 수많은 기능들이 추가되니 꼭 확인하자.

Java SE 9 에서는 `InputStream` 에 추가된 `transferTo` 메서드를 통하여 리눅스의 curl 명령을 구현할 수 있다.

```java {4}
public static void main(String[] args) throw IOException {
  try(
    InputStream in = new URL(args[0]).openStream(){
      in.transferTo(System.out)
    })
}
```

자바 프로그래머라면 `java.lang` `java.util` `java.io` 와 그 하위에 있는 패키지들에 익숙해져야 한다.

`java.util.concurrent` 또한 동시성 작업에 큰 도움이 된다.  
멀티스레딩 작업을 단순화 해주는 고수준의 편의기능은 물론, 능숙한 개발자가 자신만의 고수준 개념을 직점 구현할 수 있도록 도와주는 저수준의 요소들을 제공한다.

## Item 60 정확한 답이 필요하다면 float 와 double 은 피하라

금융계산시 `float` 와 `double` 은 지양하고 `BigDecimal` 혹은 `int` 혹은 `long` 을 사용해야 한다.

단 `BigDecimal` 은 기본타입보다 훨씬 불편하고 느리다 (`int` 혹은 `long` 의 대안이 있다.)

## Item 61 박싱된 기본 타입 보다는 기본 타입을 사용하라

자바의 데이터 타입은 크게 두가지로 나뉜다.

* 기본타입
  * `int` `double` `boolean`

* 참조타입
  * `String` `List`

* 박싱된 기본타입
  * `Integer` `Double` `Boolean`

박싱된 기본타입에 `==` 연산자를 사용하면 오류가 일어난다. (언박싱 과정에서 NPE 오류를 던질 수 있다.)

기본타입과 박싱된 기본타입을 혼용한 연산에서는 박싱된 기본타입의 박싱이 자동으로 풀린다. (언박싱)

```java
public static void main(String[] args) {
  Long sum = 0L;
  for (long i = 0; i <= Integer.MAX_VALUE; i++) {
    sum += i;
  }
  System.out.println(sum);
}
```
