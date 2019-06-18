# Generic Methods

제네릭 메서드는 유형 매개변수를 사용하여 작성한다.  
이는 반환 유형 앞에 유형 매개변수로 선언해준다.

```java
접근제어자 <타입 파라메터> 리턴타입 메소드명 (매개변수, ...) {
  /* statement */
}
```

정적 및 비 정적인 제네릭 방법은 물론 제네릭한 클래스 생성자도 허용한다.

```java
public class Util {
    public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
               p1.getValue().equals(p2.getValue());
    }
}

public class Pair<K, V> {

    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
    public K getKey()   { return key; }
    public V getValue() { return value; }
}
```

제네릭 메서드의 경우 아래와 같은 구문 형태로 사용 가능하다.

```java {4}
Pair<Integer, String> p1 = new Pair<>(1, "apple");
Pair<Integer, String> p2 = new Pair<>(2, "pear");

boolean same1 = Util.<Integer, String>compare(p1, p2);
```

아래와 같이 [타입 추론](https://docs.oracle.com/javase/tutorial/java/generics/genTypeInference.html)을 이용하여 `<>` 없이 사용 가능하다.

```java
boolean same1 = Util.compare(p1, p2);
```

:::tip 타입 추론
각 메서드의 호출과 해당 선언을 검토하여 호출이 가능하도록 하는 Java 컴파일러의 기능이다.
:::
