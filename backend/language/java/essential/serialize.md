# Serialize

## 직렬화란 ?

직렬화는 `Java` 시스템 내부에서 사용되는 `Object` 또는 `Data` 를 외부의 `Java` 기반 시스템에서도 사용할 수 있도록 `byte` 형태의 데이터로 변환하는 기술

이는 JVM (Java Virtual Machine) 이 메모리에 상주 (Heap 또는 Stack) 되어 있는 `Object` 데이터를 byte 형태로 변환한다.

## 역직렬화

`byte` 코드로 되어 있는 Data 를 원래대로 Object 혹은 Data 로 변환하는 기술을 말한다.

이는 다시 말해 직렬화된 데이터를 Object 로 변환해서 JVM 내부에 상주 시키는것 이다.

## 직렬화 하기

Serializable 이라는 마커 인터페이스를 상속하여 구현한다.

### 직렬화 조건

`java.io.Serializable` 인터페이스를 구현한 형태로 작업한다.

```java
public class Member implements Serializable {
  private String name;
  private String email;
  private int age;

  public Member(String name, String email, int age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  @Override
  public String toString() {
    return String.format
  }

}
```

:::tip 참고자료
<https://nesoy.github.io/articles/2018-04/Java-Serialize>
:::
