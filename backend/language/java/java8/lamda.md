# Lamda

JDK 8 (Java Development Kit 8) 에서 제공하는 람다 표현식 (Lamda Expression) 을 다룬다.

람다 표현식은 고차함수를 이용하여 더 쉽게 프로그래밍 할 수 있다.

**Exmaple**

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
```

**Case 1**

모든 수를 합치기

```java
public int sumAll(List<Integer> numbers) {
  int total = 0;
  for (int number : numbers) {
    total += number;
  }

  return total;
}
```

짝수만 더하기

```java
public int sumEven(List<Integer> numbers) {
  int total = 0;
  for (int number : numbers) {
    if (number % 2 == 0) {
      total += number;
    }
  }

  return total;
}
```

**Case 2 : 람다 표현식을 이용**

```java
public int sumAll(List<Integer> numbers, Predicate<Integer> p) {
  int total = 0;
  for (int number : numbers) {
    if (p.test(number)) {
      total += number;
    }
  }

  return total;
}
```

내부에서 함수형 인터페이스인 `Predicate` 의 인자를 받아 결과를 인자로 반환하는 _**고차함수의 방식**_ 을 사용한다. (JS 의 일급객체의 속성과 유사함)

:::tip 참고자료
<https://gist.github.com/ihoneymon/3a98ea468766d6ff3678>
:::

```java
// 모든수를 더함
sumAll(numbers, n -> true);
// 짝수만 더함
sumAll(numbers, n -> n % 2 == 0);
// 홀수만 더함
sumAll(numbers, n -> n % 2 == 1);
```

:::tip 참고자료
<http://cyberx.tistory.com/55>  
<http://cyberx.tistory.com/79>
<https://futurecreator.github.io/2018/08/26/java-8-streams/>
:::

## lamda 의 특징

자바의 람다는 익명 클래스와 유사하게 사용되지만 기술적으로는 차이가 있습니다.

* 익명 클래스는 인스턴스를 생성해야 하지만, 함수는 평가될때마다 새로 생성되지 않는다.
* 함수를 위함 메모리 할당은 Java Heap 영역의 Permanent 영역에 한번 저장된다.
* 객체는 데이터와 밀접하게 연관해서 동작하는데 반해 함수는 데이터와 분리되어 있다.
* 상태를 보존하지 않아 여러번 적용해도 결과가 달라지지 않는다. (멱등성)
* 클래스의 static method 와 유사한 개념이다.

> 멱등성 : 연산의 성질으로 여러번 적용하도 결과가 동일하여 달라지지 않는 성질을 말한다.

:::tip 참고자료
<https://futurecreator.github.io/2018/07/19/java-lambda-basics/>
:::

람다식의 형태는 _**매개변수를 가진 코드 블럭**_ 이기 때문에 마치 자바의 메서드를 선언하는것처럼 보여집니다.

자바는 메서드를 단독으로 선언할 수 없고 항상 클래스의 구성멤버로 선언하기 때문에 _**람다식은 단순히 메서드를 선언하는 것이 아닌 메서드를 가고 있는 객체를 생성**_ 해 낸다.

람다식은 `FunctionalInterface` 을 가지고 사용해야 하기 때문에 [Functional Interface](/backend/language/java/java8/functional.html) 내용을 참고하자.
