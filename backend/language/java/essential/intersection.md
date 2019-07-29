# Intersection Type

이미 존재하는 여러 타입을 모두 만족하는 타입을 표현하기 위한 수단으로 **인터섹션 타입** 을 사용한다.

이는 새로운 클래스를 정의하지 않고 여러개의 인터페이스를 조합하여 사용하는 형태로 아래와 같다.

```java {1}
public static <T extends Function & Serializable & Cloneable> void getData(T t) {
  /* statement */
}
```

**Lambda Expresstion** 으로 아래와 같이 여러 인터페이스를 조합하여 사용할 수 있다.

```java
public class IntersectionType {
  interface Hello extends Function {
    default void hello(){ System.out.println("Hello"); }
  }

  interface Hi extends Function {
    default void hi() { System.out.println("Hi"); }
  }

  interface Printer {
    default void print(String str) { System.out.println(str); }
  }

  public static void main(String[] args) {
    run((Function & Hello & Hi & Printer) s -> s, o -< {
      o.hello();
      o.hi();
      o.println("Lambda");
    });
  }

  public static <T extends Function> void run (T t, Consumer<T> consumer) { consumer.accpet(t); }
}
```

:::tip 참고자료
<https://soohyeon317.tistory.com/entry/토비의-봄-TV-4회-2-Generics에서-와일드카드-활용법-람다와-인터섹션-타입을-이용한-동적인-기능확장법>
:::
