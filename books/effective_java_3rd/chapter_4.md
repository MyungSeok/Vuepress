
# Chapter 4 클래스와 인터페이스

클래스와 인터페이스 설계에 강력한 요소를 적절히 활용하여 견고하고 유연한 코드를 만드는 방법을 안내한다.

## Item 15 클래스와 멤버의 접근 권한을 최소화 하라

정보은닉, 캡슐화는 소프트웨어의 근간이 되는 원리로 시스템을 구성하는 컴포넌트를 서로 독립시켜 개발, 테스트, 최적화, 수정을 개별적으로 할수 있게 해주는 것과 연관되어 있으며 이는 다음과 같은 장점을 가진다.

* 시스템 개발 속도를 높인다.
  * 여러 컴포넌트를 병렬로 개발
* 시스템 관리 비용을 낮춘다.
  * 컴포넌트 모듈의 대체와 오류 트래킹이 용이하여 더 빠른 대처가 가능하다.
* 성능 최적화에 도움을 준다.
  * 컴포넌트 독립적으로 영향을 줄 수 있기 때문이다.
* 소프트웨어의 재사용성을 높인다.
  * 독립적으로 동작 가능한 컴포넌트라면 낮선 환경에서도 유용하게 쓰일수 있기 때문이다.

이 외에도 접근 제어자 (`public` `protected` `default` `private`) 를 통해서도 접근권한을 최소화 할 수 있다.

즉 프로그램 요소의 접근성은 가능한 한 최소한의 `public` API 설계를 해야 한다.

## Item 16 `public` 클래스에서는 `public` 필드가 아닌 접근자 메서드를 사용하라

캡슐화 및 은닉화는 클래스 설계에서 가장 중요한 일이다.

```java
class Point {
  public double x;
  public double y;
}
```

위 예제는 클래스의 데이터필드에 직접 접근 할 수 있으니 캡슐화의 이점을 제공하지 못한다.

때문에 아래와 같이 수정하여 외부에서 필드 접근을 제한하여 사용하는것을 권장 한다.

```java
class Point {
  private double x;
  private double y;
  
  public Point(double x, double y) {
    this.x = x;
    this.y = y;
  }

  public double getX() { return x; }
  public double getY() { return y; }
  public void setX(double x) { this.x = x; }
  public void setY(double y) { this.y = y; }
}
```

`public` 클래스는 절대 가변 필드를 직접 노출해서는 안된다.  
불변 필드라면 노출해도 덜 위험 하지만 완전히 안심할수는 없다.

## Item 17 변경 가능성을 최소화하라

자바 내부에는 다양한 불변 클래스가 있다.  
`String`, 기본 타입의 박싱된 클래스, `BigInteger`, `BigDecimal` 이 여기에 속한다.

불변 클래스는 가변 클래스보다 설계하고 구현하고 사용하기가 용이하며, 오류가 생길 여지가 상대적으로 적어 안전하다.

불변 클래스를 설계하는데는 다음 다섯가지 원칙이 있다.

* 객체의 상태를 변경하는 메서드 (변경자) 를 제공하지 않는다.
* 클래스를 확장할 수 없도록 한다.
  * 하위 클래스에서 부주의 하게 혹은 의도적으로 객체의 상태를 변하게 만드는 사태를 막아준다.
* 모든 필드를 `final` 로 선언한다.
  * 시스템이 강제하는 수단을 이용해 설계자의 의도를 명확히 드러내는 방법이다.
  * 새로 생성된 인스턴스를 동기화 없이 다른 스레드로 건내도 문제없이 동작하게끔 보장하는 데도 필요하다.
* 모든 필드를 `private` 로 선언한다.
  * 필드가 참조하는 가변 객체를 클라이언트에서 직접 접근해 수정하는 일을 막아준다.
* 자신외에는 내부의 가변 컴포넌트에 접근할 수 없도록 한다.

불변 객체는 근본적으로 **Thread Safe** 하여 따로 동기화할 필요가 없다. 따라서 여러 Thread 가 동시에 사용해도 절대 훼손되지 않는다.  
이는 Thread 를 안전하게 만드는데 가장 쉬운 방법이다.  
어떤 Thread 도 다른 Thread 에게 영향을 주지 않으니 **불변객체는 안심하고 공유** 할 수 있다.

또한 불변 객체는 정적 팩토리 메서드 사용으로 메모리의 사용량과 가비지 컬렉션 비용을 줄일수 있다.

불변 객체는 그 자체로 실패 원자성을 제공한다. 상태가 절대 변하지 않으니 잠깐이라도 불일치 상태에 빠질 가능성이 없다.  
이는 메서드에서 예외가 발생한 후에도 그 객체는 여전히 메서드 호출 전과 똑같은 유효한 상태여야 한다는 성질이다.

## Item 18 상속보다는 컴포지션을 사용하라

메서드의 호출과는 달리 상속은 캡슐화를 깨뜨린다.

때문에 기존 클래스를 확장하는 대신, 새로운 클래스가 새로운 클래스의 구성요소로 쓰인다는 뜻으로 구성 (Composition) 해야 한다.

상속은 반드시 하위 클래스가 상위 클래스의 '진짜' 하위 타입인 상황에서만 쓰여야 한다. 이와 같은 설계 오류는 자바 플랫폼 라이브러리에서도 찾아볼수 있으며 Stack 과 Vector가 대표적이다.

상속은 확장하려는 클래스의 문제점까지 승계하기 때문에 확장하려는 클래스 API 의 결함여부를 확인해봐야 한다.

## Item 19 상속을 고려해 설계하고 문서화하라. 그렇지 않았다면 상속을 금지하라

상속용 클래스는 재정의할 수 있는 메서드들을 내부적으로 어떻게 이용하는지 문서로 남겨야 한다.

이는 클래스의 내부 동작 과정 중간에 끼어들 수 있는 훅(hook) 을 잘 선별하여 `protected` 메서드 형태로 공개해야 한다.

상속용 클래스를 테스트 하는 방법은 하위 클래스를 만들어 확인해보는것이 제일 정확 하다.

그렇지 않다면 상속용으로 설계하지 않은 클래스는 상속을 금지하는 것이 제일 좋다. 상속을 금지 하는 방법은 두 가지다. 한쪽 클래스를 `final` 로 선언하는 방법이고 다른 하나는 모든 생성자를 `private` 혹은 `package-private` 으로 선언하고 `public` 정적 팩터리 메서드를 만들어 주는 방법이다. 이중 정적 팩터리 메서드 방법은 내부에서 다양한 하위 클래스를 만들어 쓸 수 있는 유연성을 준다.

## Item 20 추상 클래스보다는 인터페이스를 우선하라

기존 클래스 위에 새로운 추상 클래스를 끼워 넣기는 어려운 일이다.

두 클래스가 같은 추상클래사를 확장하기 원한다면, 그 추상 클래스는 계층구조상 두 클래스의 공통 조상이여야 한다. 안타깝게도 이 방식은 클래스 계층 구조에 커다란 혼란을 일으킨다.

따라서 인터페이스를 우선시 해야 하며 이는 계층구조가 없는 타입 프레임워크를 만들 수 있는 장점이 있다.

상속해서 만든 클래스는 래퍼 클래스보다 활용도가 떨어지고 깨지기는 더 쉽다. 반면에 인터페이스 메서드중 구현 방법이 명백한게 있다면, 그 구현을 디폴트 메서드로 만들어 제공할 수 있다.

## Item 21 인터페이스는 구현하는 쪽을 생각해 설계하라

자바 라이브러리의 디폴트 메서드는 코드 품질이 높고 범용적이라 대부분의 상황에서 잘 작동된다.

하지만 모든 상황에서 불변식을 해치지 않는 디폴트 메서드를 작성하기란 어려운 일이므로 기존 구현에 런타임 오류를 야기시킬수 있다.

따라서 인터페이스 설계를 할때는 세심한 주의를 기울여야 한다. 인터페이스 릴리즈 후라도 결함을 수정하는게 가능한 경우도 있지만 그 가능성에 혹은 기회에 기대서는 안된다.

인터페이스 릴리즈 이전에는 반드시 많은 검증 및 테스트 과정을 거쳐야 한다.

## Item 22 인터페이스는 타입을 정의하는 용도로만 사용하라

상수 인터페이스는 안티패턴이며 잘못된 예이다

```java
public interface PhysicalConstants {
  // 아보가드로 수 (1/몰)
  static final double AVOGADROS_NUMBER = 6.022_140_857e23;
  // 볼츠만 상수 (J/K)
  static final double BOLTZMANN_CONSTANT = 1.380_648_52e-23;
  // 전자 질량 (kg)
  static final double ELECTRON_MASS = 9.109_383_56e-31;
}
```

이는 더이상 사용하지 않더라도 바이너리 호환성을 위해 여전히 다음 릴리즈때까지 해당 인터페이스를 구현해야 하는 유지성을 보여야 한다.

유틸리티 클래스에서 정의된 상수를 클라이언트에 사용하려면 클래스 이름까지 사용하라 사용빈도가 많다면 `PhysicalConstants.BOLTZMANN_CONSTANT` 와 같이 사용 혹은 정적 임포트 (static import) 를 사용한다.

인터페이스는 되도록 타입을 정의하는 용도로만 사용해야 하며 상수를 공개하는 수단을 사용하는것은 좋지 않다.

## Item 23 태그 달린 클래스보다는 클래스 계층구조를 활용하라

태그가 달린 클래스 (두가지 이상의 기능을 커버하는 클래스) 라고 한다

아래가 태그가 달린 클래스의 예이다.

```java
class Figure {
  enum Shape { RECTANGLE, CLRCLE };

  // 현재모양
  final Shape shape;

  // 사각형일 때만 사용하는 필드
  double lengh;
  double width;

  // 원 일때만 사용하는 필드
  double radius;

  Figure(double radius) {
    shape = Shape.CIRCLE;
    this.radius = radius;
  }

  Figure(double length, double widht) {
    shape = Shape.RECTANGLE;
    this.length = length;
    this.width = width;
  }

  double area() {
    switch (shape) {
      case RECTANGLE :
        return length * width;
      case CIRCLE :
        return Math.PI * (radius * radius);
      default :
        throw new AssertionError();
    }
  }
}
```

태그가 달린 클래스는 장황하고 오류를 내기 쉽고 비 효율적이다.

* 하나의 클래스나 객체에서 구현하는 객체 지향적 관점에서 벗어난다
* 반복성의 코드가 많다
* 하나의 기능을 구현 혹은 수정시에 다른 기능의 필드들도 자동생성되서 메모리도 많이 소비한다
* 코드 가독성이 떨어진다

위 코드는 클래스 계층구조를 활용하는 서브타이핑 (subtyping) 형태 임에도 불구하고 클래스 계층 구조를 어설프게 흉내내는 아류일 뿐이다.

위 코드를 가독성 있게 계층구조를 바꾸면 아래와 같다.

```java
abstract class Figure {
  abstract double area();
}

class Circle extends Figure {
  final double radius;

  Clrcle(double radius) {
    this.radius = radius;
  }

  @Override
  double area() {
    return Math.PI * radius * radius;
  }
}

class Ractangle extends Figure {
  double lengh;
  double width;

  Ractangle(double length, double, width) {
    this.length = length;
    this.width = width;
  }

  @Override
  double area() {
    return length * width;
  }
}
```

위 코드는 이전 코드가 가진 태그가 가진 클래스의 단점을 모두 날려버렸다.

* 간결하고 명확하다.
* 쓸데없는 코드들까지 모두 사라졌다.
* `case` 문에서 사용하는 런타임 오류가 발생할 일도 없다.
* 다른 코드의 유연성까지 고려가 가능하다.

위 코드에서 클래스의 계층 구조를 활용한 정사각형의 도형을 추가하면 다음과 같다.

```java
class Square extends Rectangle {
  Square(double side) {
    super(side, side);
  }
}
```

태그가 달린 클래스를 사용해야 하는 일은 거의 없으나 새로운 클래스를 작성하는데 태그 필드가 등장한다면 태그를 없애고 계층구조로 대체하는 방법을 생각해 보자

기존 코드에서 태그 필드를 사용하고 있다면 계층 구조로 리팩터링 하는것을 고민해 보자

## Item 24 멤버 클래스는 되도록 `static` 으로 만들자

**중첩 클래스 (ndested class) 의 종류**

* 정적 멤버 클래스
* (비정적) 멤버 클래스
* 익명 클래스
* 지역 클래스

비 정적 멤버 클래스의 인스턴스 메서드에서 정규화된 this 를 사용해 바깥 인스턴스의 메서드를 호출하거나 바깥 인스턴스의 참조를 가져올 수 있다. (정규화된 `this` 란 `{클래스명}.this`)

따라서 개념상 중첩 클래스의 인스턴스가 바깥 인스턴스와 독립적으로 존재할 수 있다면 정적 멤버 클래스로 만들어야 한다.

`static` 을 생략하여 사용하면 바깥 인스턴스로의 숨은 외부 참조를 갖게되며 이 참조를 저장하려면 시간과 공간이 소비된다.

이는 가비지 컬렉션이 바깥 클래스의 인스턴스를 수거하지 못하여 메모리 누수가 생길수 있는 단점이 있다.

:::tip 참고자료
<https://docstore.mik.ua/orelly/java-ent/jnut/ch03_09.htm>
:::

## Item 25 톱레벨 클래스는 한 파일에 하나만 담으라

```java
class Utensil {
  static final String NAME = "pot";
}

class Dessert {
  static final String NAME = "pie";
}
```

컴파일러에 어느 소스파일을 먼저 전달 했으냐에 따라 결과가 뒤바뀌기 때문에

한파일에는 톱 클래스를 하나만 명시하도록 한다.

위 코드는 아래와 같이 수정하여 사용이 가능하다.

```java
public class Text {
  public static void main(String[] args) {
    System.out.println(Utensil.NAME + Dessert.NAME);
  }

  private static class Utensil {
    static final String NAME = "pan";
  }

  private static class Dessert {
    static final String NAME = "cake";
  }
}
```
