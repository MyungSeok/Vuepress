# Generic Types

제네릭 타입은 제네릭 클래스나 인터페이스의 형식에 따라 매개변수로 표시된다.

```java
class name <T1, T2, ..., Tn> { ... }
```

## Naming Conversion

제네릭 타입은 아무 문자열이나 사용가능하지만 가독성을 위해 일반적으로 다음 규칙을 따른다.

|키|설명|
|:--|:--|
|E|요소(Element)|
|K|키(Key)|
|N|숫자(Number)|
|T|타입(Type)|
|V|값(Value)|
|S, U, V|두번째, 세번째, 네번째에 선언된 타입|

:::tip 참고자료
<https://docs.oracle.com/javase/tutorial/java/generics/types.html>
:::

## The Diamond <Badge text="Java SE 1.7+"/>

Java SE 7 이후 버전에서는 다이아몬드 연산자로 인한 초기화가 가능하다.

이는 제네릭 인스턴스의 생성을 자동으로 적용해준다.

아래와 같은 익명 클래스에서의 인스턴스화는 사용 불가능

```java
List<String> list = new ArrayList<>() {};
```

## Multiple Type Parameters

일반 클래스는 다중 클래스의 매개변수로 가질수 있다.

```java
public interface Pair<K, V> {
  public K getKey();
  public V getValue();
}

public class OrderedPair<K, V> implements Pair<K, V> {
  private K key;
  private V value;

  public OrderedPair(K key, V value) {
    this.key = key;
    this.value = value;
  }

  public K getKey() { return key; }
  public V getValue() { return value; }
}

```

## Parameterized Types

매개변수화 타입 (Parameterized Type) 사용시에는 다음 두가지로 나뉘어진다.

* Actual Type Parameter

실 타입 매개변수 (Actual Type Parameter) 는 `<>` 안에 _**실사용 타입 자체를 명시**_ 해주는 방식이다.

```java
List<String> list = new ArrayList<>();
```

* Formal Type Parameter

형식 타입 매개변수 (Formal Type Parameter) 타입 매개변수는 `<>` 안에 _**명시적 타입을 주는 방식**_ 이다.

```java
List<E> list = new ArrayList<>();
```

아래와 같이 매개변수를 매개변수화 타입으로 대체 가능하다.

```java
OrderedPair<String, Box<Integer>> p = new OrderedPair<>("primes", new Box<Integer>(...));
```

## Raw Types

_**Raw Type**_ 은 타입 파라메터가 없는 제네릭 타입을 말한다.

```java {7}
public class Message<T> {
  public List<String> getMessage() {
    return Arrays.asList("MESSAGE");
  }

  public static void main(String[] args) {
    Message message = new Message();

    for (String str : message.getMessage()) {
      System.out.println(str);
    }
  }
}
```

위 코드에서 `message` 변수가 `Raw Type` 변수인데  
`Message` 클래스는 제네릭 타입으로 정의되었지만 변수 `message` 는 타입 파라메터 없이 정의되었다.

이는 _**제네릭의 타입 소거로 인하여**_ `List<String>` 이 아닌 Raw Type `List` 로 된것이다.

타입 소거는 Java SE 5 제네릭 출현 이전의 코드의 호환성을 보장하기 위한 것으로 Raw Type 을 사용하지 말아야 한다.

:::tip 참고자료
<https://docs.oracle.com/javase/tutorial/java/generics/types.html>  
<https://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html#jls-4.8>
:::
