# Class

## Immutable

생성후 변경 불가능한 객체로서 대표적으로 _`String`_, _`Boolean`_, _`Integer`_, _`Float`_, _`Long`_ 등등이 있다.

> HEAP 영역에서의 값이 바뀌는건 아니다.

불편클래스의 예시는 아래가 대표적이다.

### String / StringBuffer / StringBuilder 의 사용

문자열을 더하는 식에는 `string` 보다는 `stringBuffer` 나 `stringBuilder` 을 사용해야 한다.

`string` 은 새로운 값을 할당할 때마다 새로 생성되기 때문 \(클래스의 메모리 참조 주소가 바뀜\)

`stringBuffer` 나 `stringBuilder` 는 값을 메모리에 append 하는 방식으로 클래스를 별도로 생성하지 않는다.

`stringBuilder` 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.

`stringBuffer` 는 _**멀티쓰레드 환경에서 안정적**_ 이다.

## AutoCloseable

파일 또는 소켓 핸들 등의 자원들을 종료할 때까지 보관하는 객체이다.  
AutoCloseable 객체의 `close` 메소드는 `try-with-resources` 블럭을 종료할 때 자동으로 호출 된다.

이 구조는 리소스의 고갈 및 다른 예외들까지 발생할 수 있는 에러들의 해소를 즉각적으로 보장한다.

`try-with-resource` 구문과 같이 사용한다.

```java
public class MyResource implements AutoCloseable {
  public void close() throws Exception {
    System.out.println("Closeing!");
  }
}
```

```java
try (MyResource res = new MyResource()){
  // use the code
}
```

### try-finally 보다는 try-with-resources 를 사용 (Java 7)

향샹된 예외처리문으로 입출력 처리시 예외가 발생하면 JVM 이 자동으로 `close` 메소드를 호출하여 자원을 반납시켜 줍니다.

이때 `try()` 구문안에는 `AutoCloseable` 인터페이스를 구현한 객체여야 한다.

```java
public class MyResource implements AutoCloseable {
  public void close() throws Exception {
    System.out.println("Closeing!");
  }
}
```

```java
try (MyResource res = new MyResource()){
  // use the code
}
```

:::tip 참고자료
<https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary>
:::