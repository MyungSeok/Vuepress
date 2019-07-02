# Thread Local <Badge text="Java SE 1.2"/>

Thread 영역에 변수를 설정하여 특정 Thread 가 실행되는 모든 코드에서 해당 Thread 에 설정된 변수값을 사용할 수 있다.

## Syntax

**생성**

```java
ThreadLocal thread = new ThreadLocal();
```

**사용**

```java
thread.set("String");
```

```java
thread.get();
```

**제네릭**

```java
ThreadLocal thread = new ThreadLocal<String>();

thread.set("Generic Variable");
String message = (String) thread.get();
```

**초기화**

```java
ThreadLocal thread = new ThreadLocal<String>() {
  @Override
  protected String initialValue() {
    return "This is initial value";
  }
}
```

## Usage

* 사용자 인증 데이터 전파
* Transection 컨텍스트 전파
* Thread Safe 한 데이터의 보관

## 주의사항

TheadPool 환경에서 `ThreadLocal` 을 사용하는 경우 ThreadLocal 변수에 보관된 데이터의 사용이 끝나면 반드시 해당 데이터를 삭제해주어야 한다.

그렇지 않는 경우 _**재사용되는 `Thread` 가 올바르지 않는 데이터를 참조**_ 할 수 있다.

:::tip 참고자료
<https://javacan.tistory.com/entry/ThreadLocalUsage>  
<https://parkcheolu.tistory.com/17>  
<http://wonwoo.ml/index.php/post/907>
:::
