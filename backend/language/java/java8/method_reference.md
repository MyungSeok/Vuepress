# Method Reference

Method 의 Reference 를 전달하는다는 의미이기 때문에 Lamda 보다 축약된 문법이다.

Java 의 Method 는 일급 객체가 아니기 때문에 객체의 Reference 를 전달하는 방식으로 동작된다.

```java
Function<String, Integer> func = Integer.parseInt(str);
```

`Function` 인터페이스는 하나의 인자를 받아 다른타입의 리턴 타입을 갖는 `apply()` Method 를 갖고 있는 함수형 인터페이스이다.

위 코드를 아래와 같이 Method Reference 형태로 바꿔서 사용 가능하다.

```java
Function<String, Integer> func = Integer::parseInt;
Integer result = f.apply("123");
```

또한 아래와 같이 선언적 코딩을 통하여 간략화 할 수 있다.

```java
Function<String, Boolean> func = String::isEmpty;
Boolean result = func.apply("123");
```

`isEmpty()` 는 static method 는 아니지만 인자로 놈어오는 타입이 `String` 이기 때문에 해당 타입의 메서드를 호출해준다.

## 레퍼런스별 타입 추론 (Type Inference) 방법

* Static Method Reference

```java
Function<String, Integer> func = Integer::parseInt;
Integer result = func.apply("123");
```

* Instance Method Reference

```java
Function<String, Boolean> func = String::isEmpty;
Boolean result = func.apply("123");
```

* Constructor Method Reference

생성자도 메서드 레퍼런스로 작성 가능하다.

`Supplier` 는 인자 없이 `return` 만 하는 메서드를 가지고 있으며 메서드 호출시 `new` 로 생성된 `String` 객체를 리턴한다.  
이는 물론 기본 생성자를 호출하게 된다.

```java
Supplier<String> str = String::new;
```

* 바깥 인스턴스 메서드 레퍼런스

```java
String str = "Hello";
Predicate<String> pre = str::equals;
pre.test("world");
```

```java
Comparator<String> compare = String::compareTo;
```

**자주 사용하는 함수형 인터페이스**

|Functional Interface|Parameter Type|Return Type|Abstract Method|Description|Other Method|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Runnable|없음|void|run|인자나 반환 값 없이 액션을 수행한다.|없음|
|Supplier|없음|T|get|T|타입 값을 공급한다.|없음|
|Consumer|T|void|accept|T|타입 값을 소비한다.|andThen|
|BiConsumer<T, U>|T, U|void|accept|T와 U타입 값을 소비한다.|andThen|
|Function<T, R>|T, R|apply|T|타입 인자를 받는 함수다.|compose<br/>andThen<br/>identity|
|BiFunction<T, U, R>|T, U, R|apply|T와 U타입 인자를 받는 함수다.|andThen|
|UnaryOperator|T|T|apply|T 타입에 적용하는 단항 연산자다.|compose<br/>andThen<br/>identity|
|BinaryOperator|T, T|T|apply|T 타입에 적용하는 이항 연산자다.|andThen<br/>maxBy<br/>minBy|
|Predicate|T|boolean|test|Boolean 값을 반환하는 함수다.|and<br/>or<br/>negate<br/>isEqual|
|BiPredicate<T, U>|T, U|boolean|test|두 가지 인자를 받고 boolean 값을 반환하는 함수다.|and<br/>or<br/>negate|

:::tip 참고자료
<https://multifrontgarden.tistory.com/126>  
<https://imcts.github.io/java-method-reference/>
:::
