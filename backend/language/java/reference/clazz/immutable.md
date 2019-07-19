# Immutable Class

불변 클래스는 말 그대로 _**불변**_ 값이 변경되지 않는 클래스이다.

이는 다시 말해 가변적이지 않으며 생성후 변경 불가능한 객체이다.

대표적으로 _`String`_, _`Boolean`_, _`Integer`_, _`Float`_, _`Long`_ 등등이 있다.

```java
String str = "문자";
str = "숫자";
```

변수 `str` 은 JVM 의 Heap 영역에서 값이 변경되는것이 아니라 `숫자` 라는 값으로 재할당이 되는것이다.

이는 다시 말해 `숫자` 라는 값이 새로 생성되어 대체되는 것으로 _**Heap 영역의 참조대는 객체 대상이 바뀌는것이다.**_

## 장점

* 생성자, 접근메서드에 대한 [방어적 복사 (Defensive Copy)](/books/effective_java_3rd/chapter_8.html#item-50-적시에-방어적-복사본을-만들라) 가 필요가 없다.
* 멀티스레드 환경에서 동기화 처리 없이 객체를 공유할 수 있다.
* Thread-Safe 하기 때문에 객체가 안전하다.

## 단점

* 객체가 가지는 값마다 새로운 객체가 필요하다.
* 메모리 누수와 새로운 객체를 계속해서 생성해야 한다는 점 때문에 성능저하를 야기시킬 수 있다.

## String / StringBuffer / StringBuilder 의 사용

문자열을 더하는 식에는 `String` 보다는 `StringBuffer` 나 `StringBuilder` 을 사용해야 한다.

`String` 은 새로운 값을 할당할 때마다 새로 생성되기 때문 \(클래스의 메모리 참조 주소가 바뀜\)

`StringBuffer` 나 `stringBuilder` 는 값을 메모리에 append 하는 방식으로 클래스를 별도로 생성하지 않는다.

`StringBuilder` 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.

`StringBuffer` 는 _**멀티쓰레드 환경에서 안정적**_ 이다.

:::tip 참고자료
<https://limkydev.tistory.com/68>
:::
