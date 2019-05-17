# Optional

Java 8 에서 처음 등장한 개념으로 null 의 접근 방식에 대한 해결책으로 등장 하였다.

## NPE (Null Pointer Exception)

전통적인 NPE 방어 패턴은 다음 두가지로 나뉜다.

**중첩 `null` 체크하기**

```java
public String getCityOfMemberFromOrder(Order order) {
  if (order != null) {
    Member member = order.getMember();
      if (member != null) {
      Address address = member.getAddress();
        if (address != null) {
        String city = address.getCity();
        if (city != null) { return city; }
      }
    }
  }
return "Seoul"; // default
}
```

**사방에서 `return` 하기**

```java
public String getCityOfMemberFromOrder(Order order) {
  if (order == null) {
    return "Seoul";
  }

  Member member = order.getMember();
  
  if (member == null) {
    return "Seoul";
  }

  Address address = member.getAddress();

  if (address == null) {
    return "Seoul";
  }

  String city = address.getCity();
  
  if (city == null) {
    return "Seoul";
  }
  
  return city;
}
```

## `Optional` 이란?

`Optional` 은 존재할 수도 있지만 안 할수도 있는 객체, 즉 `null` 이 될 수도 있는 객체 를 감싸고 있는 일종의 `Wrapper Class` 이다.

## `Optional` 사용법

`Generic` 을 제공하기 때문에 변수 선언할 때 명시한 타입에 따라서 감쌀수 있는 객체의 타입이 결정된다.

### 선언

```java
// Order 타입의 객체를 감쌀 수 있는 Optional 타입 변수
Optional<Order> maybeOrder;

// Member 타입의 객체를 감쌀 수 있는 Optional 타입 변수
Optional<Member> optMember;

// Address 타입의 객체를 감쌀 수 있는 Optional 타입 변수
Optional<Address> address;
```

### 생성

`Optional` 클래스는 간편한게 객체를 생성할 수 있는 3가지의 정적 팩토리 메소드를 제공합니다.

* `Optional.empty()`

`null` 을 담고있는 비어있는 Optional 객체를 얻어옵니다.  
이 객체는 `Optional` 내부적으로 미리 생성해놓은 싱글턴 인스턴스입니다.

```java
Optional<Member> maybeMember = Optional.empty();
```

* `Optional.of(value)`

`null` 이 아닌 객체를 담고있는 `Optional` 객체를 생성합니다.  
`null` 이 넘어올때 NPE 를 던지기 때문에 주의해서 사용해야 한다.

```java
Optional<Member> maybeMember = Optional.of(aMember);
```

* `Optional.ofNullable(value)`

`null` 인지 아닌지 확신할 수 없는 객체를 담고있는 Optional 객체를 생성합니다.

`Optional.empty()` 와 `Optional.ofNullable(value)` 를 합쳐놓은 메소드라고 생각하면 쉽다.

해당 객체가 `null` 인지 아닌지 확신이 없는 상황에서 해당 메서드를 사용해야 한다.

```java
Optional<Member> maybeMember = Optional.ofNullable(aMember);
```

```java
Optional<Member> maybeMember = Optional.ofNullable(null);
```

### 객체 접근

`Optional` 이 담고 있는 객체를 반환하며 `Optional` 이 비어있는 경우 (null 인 경우) 에는 다르게 작동한다.

* `get()`

비어있는 Optional 객체에 대해서, `NoSuchElementException` 을 던진다.

* `orElse(T other)`

비어있는 `Optional` 객체에 대해서, 넘어온 인자를 반환한다.

* `orElseGet(Supplier<? extends T> other)`

비어있는 `Optional` 객체에 대해서, 넘어온 함수형 인자를 통해 생성된 객체를 반환한다.
`orElse(T other)` 의 게으른 버전이다.

비어 있는 경우에만 함수가 호출되기 때문에 `orElse(T other)` 의 대비 성능상의 이점을 기대할 수 있다.

* `orElseThrow(Supplier<? extends X> exceptionSupplier)`

비어있는 Optional 객체에 대해서, 넘어온 함수형 인자를 통해 생성된 예외를 던진다.

### Stream 처럼 사용

* `map()`

```java
public String getCityOfMemberFromOrder(Order order) {
  return order.getMember().getAddress().getCity();
}
```

위 코드를 아래와 같이 변경

```java
public String getCityOfMemberFromOrder(Order order) {
  return Optional.ofNullable(order)
    .map(Order::getMember)
    .map(Member::getAddress)
    .map(Address::getCity)
    .orElse("Seoul");
}
```

* `filter()`

```java
public Member getMemberIfOrderWithin(Order order, int min) {
  if (order != null && order.getDate().getTime() > System.currentTimeMillis() - min * 1000) {
    return order.getMember();
  }
}
```

위와 같이 `null` 처리하는 부분 혹은 `boolean` 으로 체크하는 부분을 아래와 같이 변경

```java
public Optional<Member> getMemberIfOrderWithin(Order order, int min) {
  return Optional.ofNullable(order)
    .filter(o -> o.getDate().getTime() > System.currentTimeMillis() - min * 1000)
    .map(Order::getMember);
}
```

* `isParent()`

값이 비어있는지 체크

```java
Optional<String> type = Optional.of(null);

if (type.isParent()) {
  System.out.println("type is null");
}
```

* `ifPresent`

특정 결과를 반환하는 대신에 `Optional` 객체가 감싸고 있는 값이 존재할 경우 실행될 로직을 함수형 인자로 넘기는것이 가능하다.

마치 비동기 메서드의 콜백 함수처럼 동작된다.

```java
Optional<String> maybeCity = getAsOptional(cities, 3); // Optional

maybeCity.ifPresent(city -> {
  System.out.println("length : " + city.length());
});
```

:::tip 참고자료
<https://futurecreator.github.io/2018/08/26/java-8-streams/>  
<http://www.daleseo.com/java8-optional-before/>
:::