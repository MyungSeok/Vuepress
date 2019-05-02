---
sidebar: auto
---
# Effective Java 3rd

## Intro

## Chapter 1 들어가기

### 새로운 기능 목록

|기능|아이템 번호|JDK Version|
|:-:|:-:|:-:|
|Lamda|42~44|8|
|Stream|45~48|8|
|Optional|55|8|
|Interface, default method|21|8|
|try-with-resources|9|7|
|@SafeVarargs|32|7|
|module|15|9|

### Java API Docs

* [Java SE 7 API](https://docs.oracle.com/javase/7/docs/api/)
* [Java SE 8 API](https://docs.oracle.com/javase/8/docs/api/)
* [Java SE 9 API](https://docs.oracle.com/javase/9/docs/api/)
* [Java SE 10 API](https://docs.oracle.com/javase/10/docs/api/)

## Chapter 2 객체 생성과 파괴

### Item 1 생성자대신 정적 팩터리 메서드를 고려하라

클라이언트가 클래스 인스턴스를 얻는 수단중에 정적 팩터리 메서드를 사용하는 방법이 있는데 간단한 코드는 다음과 같다.

```java
public static Boolean valueOf(boolean b) {
  return b ? Boolean.TRUE : Boolean.FALSE;
}
```

:::tip Boolean vs boolean
`boolean` 은 자료형이기 때문에 `true` 혹은 `false` 만 들어갈수 있다.
`null` 을 사용하기 위해서는 참조형은 `Boolean` 으로 적어야 한다.

다른 예로는 `int` 는 `null` 할당이 불가하지만 `Integer` 는 `null` 할당이 가능하다.
:::

정적 팩터리 메서드가 생성자와 비교했을때 장단점은 다음과 같다.

**장점**

* 이름을 가질수 있다.
* 호출될 때마다 인스턴스를 새로 생성하지 않아도 된다.
* 반환 타입의 하위 타입 객체를 반환할 수 있는 능력이 있다.
* 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.
* 정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 된다.

**단점**

* 상속을 하려면 `public` 이나 `protected` 생성자가 필요하니 정적 팩터리 메서드만 제공하면 하위 클래스를 만들수 없다.
* 정적 팩터리 메서드는 프로그래머가 찾기 어렵다.

### Items 2 생성자에 매개변수가 많다면 빌더를 고려하라

**점층적 생성자 패턴 (Telescoping Constructor Pattern)**

```java
public class NutritionFacts {
  private final int servingSize;  // (ml, 1회 제공량) 필수
  private final int servings;     //(회,총n회제공량) 필수
  private final int calories;     // (1회 제공량당) 선택
  private final int fat;          // (g/1회 제공량) 선택
  private final int sodium;       // (mg/1회 제공량) 선택
  private final int carbohydrate; // (g/1회 제공량) 선택

  public NutritionFacts(int servingSize, int servings) {
    this(servingSize, servings, 0);
  }

  public NutritionFacts(int servingSize, int servings, int calories) {
    this(servingSize, servings, calories, 0);
  }

  public NutritionFacts(int servingSize, int servings,int calories, int fat) {
    this(servingSize, servings, calories, fat, 0);
  }

  public NutritionFacts(int servingSize, int servings, int calories, int fat, int sodium) {
    this(servingSize, servings, calories, fat, sodium, 0);
  }

  public NutritionFacts(int servingSize, int servings, int calories, int fat, int sodium, int carbohydrate) {
    this.servingSize = servingSize;
    this.servings = servings;
    this.calories = calories;
    this.fat = fat;
    this.sodium = sodium;
    this.carbohydrate = carbohydrate;
  }
}
```

점층적 생성자 패턴은 매개변수가 많으면 코드를 작성하거나 읽기가 어렵다.  

때문에 매개변수가 많을때 활용할 수 있는 두번째 대안인 자바빈즈 패턴으로 구성할 수 있다.

이는 매개변수가 없는 생성자로 객체를 만든 후 세터 (setter) 메서드를 이용하여 호출해 매개변수 값을 설정하는 방식이다.

**자바 빈즈 패턴 (Java Beans Pattern)**

```java
public class NutritionFacts {
  private final int servingSize = -1;  // 필수; 기본값 없음
  private final int servings = -1;     // 필수; 기본값 없음
  private final int calories = 0;
  private final int fat = 0;
  private final int sodium = 0;
  private final int carbohydrate = 0;

  public NutritionFacts() { }

  // setter methods
  private void setServingSize(int val) = { servingSize = val; }
  private void setServings(int val) { servings = val; }
  private void setCalories(int val) { calories = val; }
  private void setFat(int val) { fat = val; }
  private void setSodium(int val) { sodium = val; }
  private void setCarbohydrate(int val) { carbohydrate = val; }
}
```

```java
NutritionFacts cocaCola = new NutritionFacts();

cocaCola.setServingSize(240);
cocaCola.setServings(8);
cocaCola.setCalories(100);
cocaCola.setSodium(35);
cocaCola.setCarbohydrate(27);
```

자바 빈즈 패턴은 객체 하나를 만드려면 여러 메서드를 호출해야 하고, 객체가 완전히 생성되기 전까지는 일관성 (consistency) 가 무너진 상태로 놓이게 된다.

이는 런타임에 문제를 일으킬 가능성이 높으며 일관성이 무너지는 문제 때문에 자바빈즈 패턴에서는 클래스를 불변으로 만들 수 없고 스레드의 안전성을 얻으려면 프로그래머가 추가 작업을 해줘야 하는 번거로움이 있다.

이러한 단점을 위해서 객체 생성이 완전히 끝나기 전에는 객체를 수동으로 **freezing** 하여 객체를 사용 불가 하게 만들기도 한다. (freeze method 를 컴파일러가 보증하기 어려워 런타임 오류에 취약하다.)

위 자바 빈즈 패턴의 단점을 보안한 빌더 패턴이 있다.

**빌더 패턴 (Builder Pattern)**

```java

public class NutritionFacts {
  private final int servingSize;
  private final int servings;
  private final int calories;
  private final int fat;
  private final int sodium;
  private final int carbohydrate;

  public static class Builder {
  // 필수 매개변수
    private final int servingSize;
    private final int servings;

    // 선택 매개변수 - 기본값으로 초기화한다.
    private int calories = 0;
    private int fat = 0;
    private int sodium = 0;
    private int carbohydrate = 0;

    public Builder calories(int val) { calories = val; return this; }
    public Builder fat(int val) { fat = val; return this; }
    public Builder sodium(int val) { sodium = val; return this; }
    public Builder carbohydrate(int val) { carbohydrate = val; return this; }

    public NutritionFacts build() {
      return new NutritionFacts(this);
    }
  }

  private NutritionFacts(Builder builder) {
    servingSize = builder.servingSize;
    servings = builder.servings;
    calories = builder.calories;
    fat = builder.fat;
    sodium = builder.sodium;
    carbohydrate = builder.carbohydrate;
  }
}
```

`NutritionFacts` 클래스는 불변이며 모든 매개변수의 기본값들을 한곳에 모아뒀다.

빌더의 세터 메서드들은 빌더 자신을 반환하기 때문에 연쇄적으로 호출 가능하며 이러한 구성 방식을 플루언트 API (fluent API) 혹은 메서드 연쇄 (Method Chaining) 이라 한다.

```java
NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8)
                              .calories(100)
                              .sodium(35)
                              .carbohydrate(27)
                              .build();
```

이 클라이언트 코드는 쓰기 쉽고 무엇보다도 읽기 쉽다.

빌더 패턴은 명명된 선택적 매개변수 (Named Optional Parameters) 를 흉내낸것이다.

추가적으로 이 코드는 유효성 검사를 포함해야 하며 필드들의 대한 검사도 실행해야 한다.  
어떤 매개변수가 잘못되었는지를 자세히 알려주는 메세지를 담아 `IllegalArgumentException` 을 던지면 된다.

### Item 3 `private` 생성자나 열거 타입으로 싱글턴임을 보증하라

싱글턴의 주된 사용은 무상태 객체 (Stateless Object) 나 설계상 유일해야 하는 시스템 컴포넌트들이다.

싱글턴을 만드는 대표적은 방법은 다음과 같다.

**싱글턴 인스턴스 생성**

```java
public class Elvis {
  public static final Elvis INSTANCE = new Elvis();
  private Elvis() { ... }

  public void leaveTheBuilding() { ... }
}
```

private 생성자는 public static final 필드인 Elvis.INSTANCE 를 초기화할 때 딱 한번만 호출된다.

이는 클라이언트가 예외적으로 리플렉션 API 인 `AccessibleObject.setAccessible` 을 사용하여 private 생성자를 호출 할수 있는데 이러한 공격성 코드를 방어하려면 생성자를 수정하여 두번 호출할 때 `Exception` 을 던지면 된다.

**정적 팩토리 방식의 싱글턴**

```java
public class Elvis {
  private static final Elvis INSTANCE = new Elvis();
  private Elvis() { ... }
  public static Elvis getInstance() { return INSTANCE; }

  public void leaveTheBuilding() { ... }
}
```

`Elvis.getInstance` 는 항상 같은 객체의 참조를 반환하므로 제 2의 Elvis 인스턴스는 만들어 지지 않는다.

단. 직렬화 및 역 직렬화를 통하면 가짜 `Elvis` 가 탄생되는데 readResolve 메서드의 추가를 통하여 해결 가능하다.

```java
// 싱글턴임을 보장해주는 readResolve 메서드
private Object readResolve() {
  return INSTANCE;
}
```

**열거 타입 방식의 싱글턴**

```java
public enum Elvis {
  INSTANCE;

  public void leaveTheBuilding() { ... }
}
```

대부분 상황에서는 원소가 하나뿐인 열거 타입이 싱글턴을 만드는 가장 좋은 방법이다.

단, 만들려는 싱글턴이 Enum 외의 클래스를 상속해야 한다면 이 방법은 사용할 수 없다 (열거 타입이 다른 인터페이스를 구현하도록 선언할 수는 있다).

### Item 4 인스턴스화를 막으려거든 `private` 생성자를 사용하라

상속 혹은 정적 메서드로만 사용할 목적으로 만든 클래스들이 있다. (`java.lang.Math`, `java.util.Arrays`)

이들은 인스턴스화 해서 사용할 목적이 아니기 때문에 인스턴스화를 막을 장치가 필요하다.

`private` 생성자를 추가하면 간단하게 인스턴스화를 막을 수 있다.

**인스턴스를 만들 수 없는 유틸리티 클래스**

```java
public class UtilityClass {
  private UtilityClass() {
    throw new AssertionError();
  }
  ...
}
```

명시적 생성자의 접근제어자가 `private` 이니 클래스 바깥에서는 접근할 수 없다.

반드시 `AssertionError` 를 던질 필요는 없지만 클래스 안에서 실수로라도 생성자를 호출하지 않도록 해준다.

이는 상속을 불가능 하게끔 하는 효과도 동시에 적용된다.

### Item 5 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

클래스가 하나 이상의 자원에 의존적이며, 그 자원이 클래스 동작에 영향을 준다면 싱글턴이나 정적 팩토리 메서드 방식의 클래스는 적합하지 않다.

여러 자원을 지원해야 하는 경우에는 인스턴스를 생성할 때 생성자에 필요한 자원을 넘겨주는 방식이다.

```java
public class SpellChecker {
  private final Lexicon dictionary;

  public SpellChecker(Lexicon dictionary) {
    this.dictionary = Objects.requireNonNull(dictionary);
  }

  public boolean isValid(String word) { ... }
  public List<String> suggestions(String typo) { ... }
}
```

이 외에도 생성자에 자원 팩토리를 넘겨주는 방식이 있다.

팩토리란 호출할 때 마다 특정 타입의 인스턴스를 반복해서 만들어주는 객체를 말한다. (Factory Method Pattern)

이 팩토리 자원을 의존 객체에 주입시켜 사용하면 유연성 및 재사용성을 크게 개선시키는 효과가 있다.

### Item 6 불필요한 객체 생성을 피하라

성능 개선에 있어 객체 하나를 재사용하는 편이 나을때가 많다.

**안티 패턴**

```java
String str = new String("Bikini");
```

**권장 패턴**

```java
String str = "Bikini";
```

생성자 대신 정적 팩터리 메서드를 제공하는 불변 클래스에서는 정적 팩터리 메서드를 사용해 불필요한 객체 생성을 피할 수 있다.

예를 들면 `Boolean(String)` 생성자 대신 `Boolean.valueOf(String)` 팩터리 메서드를 사용하는 것이 좋다.

생성자는 호출할 때마다 새로운 객체를 만들지만, 팩터리 메서드는 전혀 그렇지 않다.  
불변 객체 뿐만이 아니라 가변 객체라고 해도 사용 중에 변경되지 않을 것임을 안다면 재사용할 수 있다.

불필요한 객체를 만드는 가장 큰 예는 **오토박싱** 이다.

**오토박싱 (Auto Boxing) 의 잘못된 예**

```java
private static long sum() {
  Long sum = 0L;

  for (long i = 0; i <= Integer.MAX_VALUE; i++) {
    sum += i;
  }

  return sum;
}
```

위 코드에서는 `sum` 변수의 타입을 오토박싱 하는 과정에서 Long 인스턴스가 **231** 개나 만들어진다.

즉 박싱된 기본타입 보다는 기본타입을 사용하고 의도치 않는 오토박싱이 숨어들지 않도록 주의하도록 한다.

### Item 7 다 쓴 객체 참조를 해제하라

객체 참조의 해제는 가비지 컬렉션 (GC : Garbege Collection) 과의 밀접한 영향이 있다.

```java
public class Stack {
  private Object[] elements;
  private int size = 0;
  private static final int DEFAULT_INITIAL_CAPACITY = 16;
  
  public Stack() {
    elements = new Object[DEFAULT_INITIAL_CAPACITY]; 
  }
  
  public void push(Object e) {
    ensureCapacity();
    elements[size++] = e;
  }
  public Object pop() {
    if (size == 0) throw new EmptyStackException();
    return elements[--size];
  }

  /**
  * 원소를 위한 공간을 적어도 하나 이상 확보한다.
  * 배열 크기를 늘려야 할 때마다 대략 두 배씩 늘린다. */
  private void ensureCapacity() {
    if (elements.length == size) elements = Arrays.copyOf(elements, 2 * size + 1);
  }
}
```

위 코드를 활용하여 사용하다보면 `OutOfMemoryError` 를 일으켜 프로그램이 예기치 않게 종료되기도 한다.

이는 `elements` 배열의 활성 영역 밖의 참조들이 다 사용한 참조를 (obsolete reference) 를 여전히 가지고 있기 때문이다.

위 코드를 해결하기 위해서는 아래와 같이 참조를 해제 시켜줘야 한다.

```java
public Object pop() {
  if (size == 0) throw new EmptyStackException();

  Object result = elements[-size];
  
  elements[size] = null;  // 사용이 완료된 참조 객체 해제

  return result;
}
```

사용이 완료된 참조객체를 `null` 처리하면 다른 이점도 따라온다. null 처리한 참조를 실수로 참조하려하면 `NullPointerException` 을 던지며 종료된다.

사용이 완료된 참조 객체를 해제하는 가장 좋은 방법은 그 참조 변수를 담은 변수를 유효범위 (scope) 밖으로 밀어내는 것이다.

다른 방법은 캐시성 데이터를 사용하는 경우에는 `WeakHashMap` 을 사용하여 캐시를 만드는 법이다.  
단 이방법은 제한적이기 때문에 특정한 상황에서만 유효하다.

### Item 8 `finalizer` 와 `cleaner` 사용을 피하라

자바에서 제공하는 객체 소멸자 `finalizer` 와 `cleaner` 는 되도록이면 지양한다.

`finalizer` 는 예측이 불가능 하며 `cleaner` 는 `finalizer` 에 비해 덜 위험 하지만 여전히 예측이 불가능 하며 느리며 불편하다.

이 두 객체 소멸자는 수행을 보장할 수 없으며 수행이 된다해도 수행시간을 예측할 수 없기 때문에 얼마나 시간적인 소요가 되는지 알 수 없다.

이 두 소멸자에 대한 대안은 `AutoCloseable` 을 구현해주고 클라이언트에 인스턴스를 다 쓰고 나면 `close` 메서드를 호출하면 된다.

`close` 메서드는 이 객체가 더이상 유효하지 않음을 말해주며 이 객체가 닫힌후에 불렀다면 `IllegalStateException` 을 던질 것입니다.

### Item 9 `try-finally` 보다는 `try-with-resources` 를 사용하라

자바 라이브러리에서는 `close` 메서드를 호출하여 직접 닫아줘야 하는 자원이 많다.

`InputStream` `OutputStream` `java.sql.Connection` 등이 대표적인 예이다.

전통적으로 자원이 제대로 닫힘을 보장하는 수단으로 `try-finally` 이 사용되었다.  
이는 예외가 발생되거나 혹은 메서드에서 반환되는 경우를 포함한다.

이는 두개 이상의 자원 사용시에 발생할수 있는 맹점을 가지고 있는데 다음과 같다.

**자원이 두개 이상일 경우**

```java
static void copy(String src, String dst) throws IOException {
  InputStream in = new FileInputStream(src);

  try {
    OutputStream out = new FileOutputStream(dst);

    try {
      byte[] buf = new byte[BUFFER_SIZE];
      int n;
      while ((n = in.read(buf)) >= 0) out.write(buf, 0, n);
    } finally {
      out.close();
    }
  } finally {
    in.close();
  }
}
```

위 코드에서 입력 기기에 문제가 생긴다면 `firstLineOfFile` 메서드 안에 readLine 메서드가 예외를 던지고 두번째 예외가 첫번째 예외를 집어 삼킨다.  
이는 실제 디버깅 상황을 몹시 어렵게 한다. 또한 케이스 별로 오류를 남기려 수정하면 코드가 너무 지저분해져서 가독성이 떨어진다.

이러한 문제점을 해결하기 위하여 Java 7 에서는 `try-with-resources` 를 지원해 해결하였다.

이를 사용하려면 `AutoCloseable` 인터페이스를 사용하여 구현해야 한다.  
다음을 이를 사용한 예이다.

**`try-with-resources` 사용**

```java
static void copy(String src, String dst) throws IOException {
  try (
    InputStream in = new FileInputStream(src);
    OutputStream out = new FileOutputStream(dst)
  ) {
    byte[] buf = new byte[BUFFER_SIZE];
    int n;
    while ((n = in.read(buf)) >= 0) out.write(buf, 0, n); 
  }
}
```

위 코드는 가독성이 뛰어날 뿐만 아니라 문제를 진단 하기도 훨씬 수월하다.

반드시 회수해야 할 자원을 다룰 때는 `try-with-resources` 를 사용하여 작성하도록 한다.

## Chapter 3 모든 객체의 공동 메서드

### Item 13 `clone` 재정의는 주의해서 진행 하라

`Cloneable` 은 복제해도 되는 클래스 임을 명시하는 용도의 믹스인 인터페이스 (Mixin Interface) 이다.

:::tip Mixin Interface ?
믹스인 인터페이스에서의 믹스인 (Mixin) 이란 그 기능을 제공받는 클래스에 선언하여 원본타입에 있는 기능을 구현할 수 있도록 선택적 기능을 제공하는것이다.

이는 추상 클래스보다 인터페이스를 사용할때 효과적으로 적용 가능 하다.
:::

배열은 `clone` 은 Runtime 과 Compile 타입 모두가 원본 배열과 똑같은 배열을 반환하기 때문에 `clone` 을 제대로 사용하는 유일한 예이며 권장한다.

그 외에 `Cloneable` 을 구현하는 모든 클래스는 `clone` 을 재정의 해줘야 한다.

* 접근 제어자는 `public` 로 한다.
* 반환타입은 자기 자신으로 한다.
* **복사 생성자** 와 **복사 팩터리** 방식으로 제공한다.
* 객체 내부의 **깊은 구조** 에 숨어있는 모든 가변 객체를 복사하며 그 내부의 참조 객체 모드 그 복사 객체를 가르키도록 한다.

이는 대부분의 객체 복사에서 지키기 어려운 일이며 이를 지키키 어려울시 아래와 같이 `clone` 를 제한한다.

**하위 클래스에서 Cloneable 을 지원하지 못하게 하는 `clone` 메서드**

```java
@Override
protected final Object clone() throws CloneNotSuppertedException {
  throw new CloneNotSupportedException();
}
```

### Item 14 Comparable 구현할지 고려하라

## Chapter 4 클래스와 인터페이스

### Item 15 클래스와 멤버의 접근 권한을 최소화 하라

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

### Item 16 `public` 클래스에서는 `public` 필드가 아닌 접근자 메서드를 사용하라