
# Chapter 6 열거 타입과 애너테이션

열거 (enum) 타입과 애너테이션 (annotation) 을 올바르게 사용하는 방법을 알아보자.

## Item 34 int 상수대신 열거타입을 사용하라

정수형 혹은 문자열 열거타입은 오타 혹은 프로그램 작성상에 하드코딩 때문에 깨지기 쉽다.

때문에 열거 (enum) 타입을 지향하여 사용하며 이 또한 데이터와 메서드를 갖는 형태로 사용하는 것을 권장한다.

```java
public enum Planet {
  MERCURY (3.302e+23, 2.439e6),
  VENUS (4.869e+24, 6.052e6),
  EARTH (5.975e+24, 6.378e6),
  MARS (6.419e+23, 3.393e6),
  JUPITER (1.899e+27, 7.149e7),
  SATURN (5.685e+26, 6.027e7),
  URANUS (8.683e+25, 2.556e7),
  NEPTUNE (1.024e+26, 2.477e7);

  // 질량 (단위: 킬로그램)
  private final double mass;

  // 반지름 (단위: 미터)
  private final double radius;

  // 표면중력 (단위: m / s^2)
  private final double surfaceGravity;
  
  // 중력 단위 상수
  private static final double G = 6.67300E-11;

  Planet(double mass, double radius) {
    this.mass = mass;
    this.radius = radius;
    surfaceGravity = G * mass / (radius * radius);
  }

  public double mass() { return mass; }
  public double radius() { return radius; }
  public double surfaceGravity() { return surfaceGravity; }

  public double surfaceWeight(double mass) {
    // F = m * a
    return mass * surfaceGravity;
  }
}
```

```java
public class WeightTable {
  public static void main(String[] args) {
    double earthWeight = Double.parseDouble(args[0]);
    double mass = earthWeight / Planet.EARTH.surfaceGravity(); for (Planet p : Planet.values())
    System.out.printf("%s에서의 무게는 %f이다.%n", p, p.surfaceWeight(mass));
  }
}
```

```bash
MERCURY에서의 무게는 69.912739이다.
VENUS에서의 무게는 167.434436이다.
EARTH에서의 무게는 185.000000이다.
MARS에서의 무게는 70.226739이다.
JUPITER에서의 무게는 467.990696이다.
SATURN에서의 무게는 197.120111이다.
URANUS에서의 무게는 167.398264이다.
NEPTUNE에서의 무게는 210.208751이다.
```

상수별 메서드를 구현하는 열거 타입 형태로도 사용 가능하다.

```java
public enum Operation {
  PLUS, MINUS, TIMES, DIVIDE;

  public double apply(double x, double y) {
    switch(this) {
      case PLUS: return x + y;
      case MINUS: return x - y;
      case TIMES: return x * y;
      case DIVIDE: return x / y;
    }

    throw new AssertionError("알 수 없는 에러 : " + this);
  }
}
```

위와 같은 코드는 동작은 되지만 깨지기 쉬우며 불편하다.

때문에 아래와 같이 _**상수별 메서드 구현 (constrant-specific method implementation)**_ 리펙토링이 가능하다.

```java
public enum Operation {
  PLUS {public double apply(double x, double y) { return x + y; }},
  MINUS {public double apply(double x, double y) { return x - y; }},
  TIMES {public double apply(double x, double y) { return x * y; }},
  DIVIDE {public double apply(double x, double y) { return x / y; }};

  public abstract double apply(double x, double y);
}
```

## Item 35 ordinal 메서드 대신 인스턴스 필드를 사용하라

대부분의 열거 타입 상수는 자연스럽게 하나의 정수값에 대응된다.

이는 해당 열거타입의 상수가 몇번째인지 반환하는 `ordinal` 이라는 메서드를 제공한다.

```java
public enum Ensemble {
  SOLO, DUET, TRIO, QUARTET, QUINTET, SEXTET, SEPTET, OCTET, NONET, DECTET;

  public int numberOfMusicians() { return ordinal() + 1;}
}
```

위 코드는 상수의 선언 순서를 바꾸면 바로 에러가 나는 위함한 코드이다.

따라서 열거 타입 상수의 값을 ordinal 메서드로 얻지 말고 인스턴스 필드에 저장하자.

```java
public enum Ensemble {
  SOLO(1), DUET(2), TRIO(3), QUARTET(4), QUINTET(5), SEXTET(6), SEPTET(7), OCTET(8), NONET(9), DECTET(10);

  private final int numberOfMusicians;
  
  Ensemble(int size) { this.numberOfMesicians = size; }
  
  public int numberOfMusicians() { return numberOfMusicians; }
}
```

## Item 36 비트대신 EnumSet 을 사용하라

```java
public class Text {
  public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }
  public void applyStyles(Set<Style> style) { ... }
}
```

```java
text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));
```

## Item 37 ordinal 인덱싱 대신 EnumMap을 사용하라

## Item 38 확장할 수 있는 열거 타입이 필요하면 인터페이스를 사용하라

## Item 39 명명 패턴보다 애너테이션을 사용하라

## Item 40 @Override 애너테이션을 일관되게 사용하라

## Item 41 정의하려는 것이 타입이라면 마커 인터페이스를 사용하라
