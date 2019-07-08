# Chapter 7 람다와 스트림

## Item 42 익명 클래스보다는 람다를 사용하라

* 익명 클래스의 인스턴스를 함수 객체로 사용

```java
Collections.sort(words, new Comparator<String>() {
  public int compare(String s1, String s2) {
    return Integer.compare(s1.length(), s2.length());
  }
});
```

```java
Collections.sort(words,
  (s1, s2) -> Integer.compare(s1.length(), s2.length());
);
```

```java
Collections.sort(words, comparingInt(String::length));
```

```java
words.sort(comparingInt(String::length));
```

* Operation 열거 타입 리팩토링

```java
public enum Operation {
  PLUS("+") {
    public double apply(double x, double y) { return x + y; }
  },
  MINUS("-") {
    public double apply(double x, double y) { return x - y; }
  },
  TIMES("*") {
    public double apply(double x, double y) { return x * y; }
  },
  DIVIDE("/") {
    public double apply(double x, double y) { return x / y; }
  };

  private final String symbol;
  
  Operation(String symbol) { this.symbol = symbol; }

  @Override public String toString() { return symbol; }
  public abstract double apply(double x, double y);
}
```

```java
public enum Operation {
  PLUS("+", (x, y) -> x + y),
  MINUS("-", (x, y) -> x - y),
  TIMES("*", (x, y) -> x * y),
  DIVIDE("/", (x, y) -> x / y);

  private final String symbol;
  private final DoubleBinaryOperator op;

  Operation(String symbol, DoubleBinaryOperator op) {
    this.symbol = symbol;
    this.op = op;
  }

  @Override public String toString() { return symbol; }
  
  public double apply(double x, double y) {
    return op.applyAsDouble(x, y);
  }
}
```

> 익명 클래스는 함수형 인터페이스가 아닌 타입의 인스턴스로 만들 때만 사용하라.

## Item 43 람다보다는 메서드 참조를 이용하라

Java SE 8 에 Map 에 추가된 [`merge`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#merge-K-V-java.util.function.BiFunction-) 메서드를 살펴보자

```java
map.merge(key, 1, (count, increment) -> count + increment);
```

위 코드의 merge 메서드는 키, 값, 함수를 인수로 받으며 주어진 키가 없으면 주어진 값을 그대로 저장하며 키가 있다면 세번째 인수로 받은 함수의 결과 값을 저장한다.

이는 아래와 같이 더 보기 좋은 코드로 수정 가능하다.

```java
map.merge(key, 1, Integer::sum);
```

Integer 클래스의 정적 메서드인 [`sum`](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#sum-int-int-) 을 이용하여 메서드 참조 형태로 작성하였다.

_**람다로 할 수 없는 일이라면 메서드 참조로도 할 수 없다.**_ (대부분의 경우를 말하며 일부 예외사항을 제외한다)

다음은 다섯가지 유형의 메서드 참조를 하는 경우이다.

|Method Reference Type|Sample Example|Same Feature|
|:-:|:-:|:-:|
|static|`Integer::parseInt`|`str -> Integer.parseInt(str)`|
|bounded instance|`Instant.now()::isAfter`|`Instant then = Instance.now();`<br/>`t -> then.isAfter(t)`|
|unbounded instance|`String::toLowerCase`|`str -> str.toLowerCase()`|
|class constructor|`TreeMap<K, V>::new`|`() -> new TreeMap<K, V>()`|
|array constructor|`int[]::now`|`len -> new int[len]`|

> 메서드 참조는 람다의 간단명료한 대안이 될 수 있으며  
> _**메서드 참조쪽이 짧고 명확하다면 메서드 참조를 사용**_ 하고 그렇지 않으면 람다를 사용하라.

:::danger 람다로 불가능하나 메서드 참조로 가능한 예
제네릭 함수 타입 (Generic Function Type) 의 구현이다.  

```java
interface G1 {
  <E extends Exception> Object m() throws E;
}

interface G2 {
  <F extends Exception> String m() throws Exception;
}
```

위 코드를 함수형 인터페이스 G 로 작성하면 다음과 같다.

```java
<F extends Exception> () -> String throws F
```

함수형 인터페이스를 위한 제네릭 함수 타입은 메서드 참조 표현식으로는 구현할 수 있지만 람다식으로는 불가능하다.  
_**제네릭 람다식이라는 문법은 존재하지 않는다.**_
:::

## Item 44 표준 함수형 인터페이스를 사용하라

함수 인터페이스는 총 43개의 인터페이스가 담겨 있으며 대표적인 _**기본 인터페이스는 6개**_ 로 다음과 같다.

|Interface|Function Signature|Example|
|:-:|:-:|:-:|
|`UnaryOperator<T>`|T apply(T t)|String::toLowerCase|
|`BinaryOperator<T>`|T apply(T t1, T t2)|BigInteger::add|
|`Predicate<T>`|boolean test(T t)|Collection::isEmpty|
|`Function<T, R>`|R apply(T t)|Arrays::asList|
|`Supplier<T>`|T get()|Instant::now|
|`Consumer<T>`|void accept(T t)|System.out::println|

다음 세가지중 하나 이상을 만족한다면 전용 함수형 인터페이스를 구현해야 하는것도 고려하자.

* 자주 사용하며, 이름 자체가 용도를 명확히 설명해준다.
* 반드시 따라야 하는 규약이 있다.
* 유용한 디폴트 메서드를 제공할 수 있다.

직접 만든 함수형 인터페이스에는 항상 _**@FunctionalInterface**_ 애너테이션을 사용해야 한다.

서로 다른 함수형 인터페이스를 같은 위치의 인수로 받는 메서드들을 다중 정의해서는 안된다.  
이는 실제로 사용중인 클라이언트에게 모호함만 안겨줄 뿐이며 이 모호함으로 인해 문제가 일어나기도 한다.

## Item 45 스트림은 주의해서 사용하라

스트림 (Stream) 의 파이프라인 (pipeline) 은 원소들로 수행하는 연산단계를 대표하는 개념이다.

스트림 파이프라인은 소스 스트림에서 종단 연산 (terminal operation) 으로 끝나며, 그 사이에 중간연산 (intermediate operation) 이 있을수 있다.  
각 중간 연산은 스트림을 어떠한 방식으로 변환 (transform) 한다.

종단 연산은 마지막 중간 연산이 내놓은 스트림에 마지막 연산을 가하여 원소를 정렬해 컬렉션에 담거나 특정 원소 하나를 선택하여 반환하거나 혹은 모든 원소를 출력하는 형태이다.

다음은 스트림을 사용하였을때 효과적인 조건들이다.

* 원소들의 시퀀스를 일관되게 변환한다.
* 원소들의 시퀀스를 필터링 한다.
* 원소들의 시퀀스를 하나의 연산을 사용하여 계산한다.
* 원소들의 시퀀스를 하나의 컬렉션에 모은다.
* 원소들의 시퀀스에 특정 조건을 만족하는 원소를 찾는다.

스트림을 처음 사용하기 시작하면 모든 반복문을 스트림으로 바꾸고 싶은 유혹이 일겠지만 다음을 명심하자

_**기존 코드는 스트림을 사용하도록 리팩토링 하되, 새 코드가 더 나아보일때만 반영하자.**_

## Item 46 스트림에서는 부작용 없는 함수를 사용하라

스트림 패러다임의 핵심은 계산의 일련의 변환 (transformation) 으로 재구성 하는 부분이다.

각 변환 단계는 가능한 한 이전 단계의 결과를 받아 처리하는 순수 함수여야 한다.

> _**순수함수란 ?**_  
> 오직 입력만이 결과에 영향을 주는 함수  
> 다른 가변상태를 참조하지 않고 함수 스스로도 다른 상태를 변경하지도 않는다.

`forEach` 연산은 스트림 계산 결과를 보고할 때만 사용하고 계산하는 용도로는 사용하지 말자.

스트림을 올바르게 사용하려면 수집기 (collector) 를 잘 알아둬야 하며 가장 빈번하게 사용되는 수집기 유형은 다음 다섯가지이다.

* `toList`
* `toSet`
* `toMap`
* `groupingBy`
* `joining`

## Item 47 반환 타입으로는 스트림보다 컬렉션이 낫다

`Collection` 인터페이스는 `Iterable` 하위 타입이고 스트림 메서드도 제공하니 반복과 스트림을 동시에 지원한다.  
따라서 원소 시퀀스를 반환하는 공개 API 의 반환 타입에는 `Collection` 이나 그 하위 타입을 쓰는 것이 일반적으로 최선이다.

## Item 48 스트림의 병렬화는 주의해서 적용하라

자바는 동시성 측면에서 처음 릴리즈 했을 때부터 스레드, 동기화, wait/notify 를 지원 했다.

`Java SE 5` 부터는 동시성 컬렉션인 java.util.concurrent 라이브러리와 실행자 (Excutor) 프레임워크를 지원했다.  
`Java SE 7` 부터는 고성능 병렬 분해 (parallel decom-position) 프레임워크인 포크-조인 (fork-join) 패키지를 추가했다.

`Java SE 8` 부터는 `parallel` 메서드만 한번 호출하면 파이프라인을 병렬 실행할 수 있는 스트림을 지원한다.

데이터 소스가 Stream.iterate거나 중간 연산으로 `limit` 를 쓰면 파이프라인 병렬화로는 성능 개선을 기대할 수 없다.  
때문에 스트림 파이프라인을 함부로 병렬화하면 성능이 더 나빠질 수 있다.
반면에 조건이 잘 갖춰지면 `parallel` 메서드 호출 하나로 거의 모든 프로세서 코어 수에 비례하는 성능 향상을 만끽할 수 있다.

대체적으로 스트림 소스가 `ArrayList` `HashMap` `HashSet` `ConcurrentHashMap` 의 인스턴스이거나 배열, int 범위, long 범위일 때 병렬화의 효과각 가장 좋다.

아래는 소스 계산 스트림 파이프라인으로 병렬화에 적합한 코드이다.

```java
static long pi(long) {
  return LongStream.rangClosed(2, n)
    .mapToObj(BigInteger::valueOf)
    .filter(i -> i.isProbablePrime(50))
    .count();
}
```

```java {3}
static long pi(long) {
  return LongStream.rangClosed(2, n)
    .parallel()
    .mapToObj(BigInteger::valueOf)
    .filter(i -> i.isProbablePrime(50))
    .count();
}
```
