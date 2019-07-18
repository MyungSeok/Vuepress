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

## Covariant & Contravariant <Badge text="Generic"/>

### 공변 (covariant)

_**함께(共) 변한(變)다**_ 라는 뜻으로 `a` 가 `A` 의 하위 타입이라면 `a[]` 는 `A[]` 하위 타입이 된다.

_**리스코프 치환 원칙**_ 이 적용된 사례로 자식 (파생) 클래스는 언제나 부모 (기반) 타입과 호환이 되어야 한다라는 특징이 있다. `<? extends T>`

이는 예를 들면 배열은 공변 타입으로 부모의 `Super[]` 의 타입이 상속되는 `Sub[]` 과 타입호환이 가능하다.

### 반공변 (contravariant)

추상적인 방향으로 타입 변환을 허용 하는것 `<? super T>`

### 무공변 (불공변 : invariant)

오로지 자기 타입만 허용하는 것이다. `<T>`

제네릭 (매개변수화 타입 : Parameterized Types) 이 대표적이며 서로 다른 타입 `List<Type1>` 은 `List<Type2>` 의 상위타입도 하위타입도 아니다.

이는 _**제네릭의 소거 타입 (Type Erasure) 에 의해 나타나는 현상**_ 이다.

:::tip 참고자료
<https://ojava.tistory.com/32>
:::

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
