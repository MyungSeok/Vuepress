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

`class` 에 동적으로 추가 하기 위한 Intersection Type

하나의 클래스를 기준으로 데이터를 공유하며 비지니스 로직 사용이 가능하게끔 구현하였다.

```java
public class IntersectionType {
  interface Pair<T> {
      T getFirst();
      T getSecond();
      void setFirst(T first);
      void setSecond(T second);
  }

  interface DelegateTo<T> {
      T delegate();
  }

  interface ForwardingPair<T> extends DelegateTo<Pair<T>>, Pair<T> {
      default T getFirst() { return delegate().getFirst(); }
      default T getSecond() { return delegate().getSecond(); }
      default void setFirst(T first) { delegate().getFirst(); }
      default void setSecond(T second) { delegate().getSecond(); }
  }

  static class Name implements Pair<String> {
      String firstName;
      String lastName;

      public Name(String firstName, String lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
      }

      @Override
      public String getFirst() { return firstName; }

      @Override
      public String getSecond() { return lastName; }

      @Override
      public void setFirst(String first) { this.firstName = first; }

      @Override
      public void setSecond(String second) { this.lastName = second; }
  }

  public static <T extends DelegateTo<S>, S> void run(T t, Consumer<T> consumer) {
      consumer.accept(t);
  }

  public static void main(String[] args) {
      Pair<String> name = new Name("Kim", "Sudal");

      run((ForwardingPair<String> & Convertable<String> & Printable<String>) () -> name, o -> {
          o.print();
          o.convert(s -> s.toUpperCase());
          o.print();
          o.convert(s -> s.toLowerCase());
          o.print();
      });
  }

  interface Convertable<T> extends DelegateTo<Pair<T>> {
      default void convert(Function<T, T> mapper) {
          Pair<T> pair = delegate();
          pair.setFirst(mapper.apply(pair.getFirst()));
          pair.setSecond(mapper.apply(pair.getSecond()));
      }
  }

  interface Printable<T> extends DelegateTo<Pair<T>> {
      default void print() {
          System.out.println(delegate().getFirst() + " " + delegate().getSecond());
      }
  }
}
```

```java
Kim Sudal
KIM SUDAL
kim sudal
```

:::tip 참고자료
<https://soohyeon317.tistory.com/entry/토비의-봄-TV-4회-2-Generics에서-와일드카드-활용법-람다와-인터섹션-타입을-이용한-동적인-기능확장법>
:::
