# Class

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

:::tip 참고자료
<https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary>
:::

## Immutable

생성후 변경 불가능한 객체로서 대표적으로 _`String`_, _`Boolean`_, _`Integer`_, _`Float`_, _`Long`_ 등등이 있다.

> HEAP 영역에서의 값이 바뀌는건 아니다.

### String vs StringBuffer 비교

String 은 Immutable 이고 StringBuffer 는 아니다.
이는 객체를 새로 생성할 필요가 없는 StringBuffer 가 더 빠르다는 이야기이다.

```java
StringBuffer b = new StringBuffer();
StringBuffer a = b.append("test");

System.out.println(a == b);     // true
```

:::tip 참고자료
<https://hashcode.co.kr/questions/727/자바에서-immutable이-뭔가요>
:::