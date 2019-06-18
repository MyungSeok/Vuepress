# Wildcards

제네릭 코드에서 물음표 (question mark : ?) 를 와일드 카드라고 부린다.

이 와일드 카드는 규정되지 않은 타입을 의미하는데 아래와 같은 다양한 상황에서 사용 가능하다.

* 타입 파라메터
* 필드
* 지역 변수
* 반환 타입

위 경우 외에도 많은 곳에서 사용 가능하다.

Java 를 포함한 Morden Language 들은 일반적으로 아래 3가지의 _**Type Bounded**_ 한 개념을 지원한다.

## Upper Bounded

구체적인 방향으로 타입 변환을 허용한다.

자기 자신의 자식 객체만 허용된다. (리스코프 법칙 허용)

```java {1}
public static double sumOfList(List<? extends Number> list) {
  double s = 0.0;
  for (Number n : list)
    s += n.doubleValue();
  return s;
}
```

```java
List<Integer> li = Arrays.asList(1, 2, 3);
```

```java
List<Double> li = Arrays.asList(1.2, 2.3, 3.5);
```

## Lower Bounded

추상적인 방향으로만 타입이 허용된다.

자기 자신과 부모의 객체만 허용한다.

```java {1}
public static void addNumber(List<? super Integer> list) {
  for (int i = 1; i <= 10; i++) {
    list.add(i);
  }
}
```

## Unbounded

자기 자신의 타입만 허용한다.

```java
List<Integer> listInteger = Arrays.asList(1, 2, 3);

List<String> listString = Arrays.asList("one", "two", "three");
```
