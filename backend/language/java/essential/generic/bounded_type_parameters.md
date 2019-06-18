# Bounded Type Parameters

매개변수화된 타입 (Parameterized Type) 을 인수로 사용하려는 경우에는 해당 타입을 제한하기 위한 경우가 있을 수 있다.

가령 숫자로만 작용하는 메서드의 경우 Number 타입의 인스턴스 혹은 그에 대한 하위 클래스만 허용하려고 할 때 효과적이다.

```java {12,20}
public class Box<T> {
  private T t;

  public void set(T t) {
    this.t = t;
  }

  public T get() {
    return t;
  }

  public <U extends Number> void inspect(U u) {
    System.out.println("T: " + t.getClass().getName());
    System.out.println("U: " + u.getClass().getName());
  }

  public static void main(String[] args) {
    Box<Integer> integerBox = new Box<>();
    integerBox.set(new Integer(10));
    integerBox.set("some text");      // error: this is still String!
  }
}
```

위 코드는 `Number` 의 하위 클래스만 받게 끔 파라메터 타입을 제한해놓았는데 문자열 유형의 매개변수를 넘겨서 에러가 발생하였다.

추가적으로 아래와 같이 제네릭 타입을 표현할 수 있다.

```java {9}
public class NaturalNumber<T extends Integer> {
  private T n;

  public NaturalNumber(T n) {
    this.n = n;
  }

  public boolean isEven() {
    return n.intValue() % 2 == 0;
  }
}
```

`isEven()` 메서드에서 사용중인 `n` 변수는  `Integer` 클래스에 정의된 메서드를 호출하여 사용가능하다.

## Multiple Bounds

매개변수 유형을 두개이상 제한적으로 사용할 경우에는 다음과 같이 사용한다.

```java
<T extends A & B & C>
```

위의 `T` 는 `A` `B` `C` 의 각각의 모든 서브타입이다.

만약 `A` `B` `C` 중 하나가 클래스인 경우에는 반드시 해당 클래스를 먼저 기입해야 한다.

```java {6}
Class A { /* statement */ }
interface B { /* statement */ }
interface C { /* statement */ }

class D <T extends A & B & C> { /* ... */ }
class E <T extends C & B & A> { /* ... */ }   // compile error
```

위 코드의 `E` 클래스는 `A` 가 먼저 사용되어야 한다.
