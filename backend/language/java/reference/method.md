# Method

## instanceof

참조변수가 참조하는 인스턴스의 실제 타입을 알아보기 위해 사용

```java
class Car {
  String color;
  int door;
}

class Sedan extends Car {
  void driveSedan() {
    System.out.println("Start Sedan");
  }
}
class SportsCar extends Car {
  void driveSportCar() {
    System.out.println("Start Sports Car");
  }
}
```

```java
Sedan sedan = new Sedan();
SportsCar sportsCar = new SportsCar();

isCar(sedan);
isCar(sportsCar);
```

```java
void isCar(Car car) {
  if (car instanceof Sedan) {
    Sedan s = (Sedan) car;
    s.driveSedan();
  } else if (car instanceof SportsCar) {
    SportsCar p = (SportsCar) car;
    p.driveSportCar();
  }
}
```

**결과**

```java
// Start Sedan
// Start Sports Car
```

:::tip 참고자료
<https://arabiannight.tistory.com/entry/301>
:::

## Reflection

리플렉션이란 객체의 클래서 정보를 분석해 내는 프로그램 기법을 말한다.

> _**reflection**_ 의 사전적인 의미투영 및 반사입니다.

이는 실행중인 자바 프로그램의 내부를 검사하고 그 속성을 수정할 수 있도록 한다.

쉽게 말해 _**객체를 통하여 클래스의 정보를 역으로 분석해내는 프로그래밍 기법**_ 을 말한다.

```java
Class aClass = Test.class;

Class myObjClass = Class.forName(className);
Package pkgOfAClass = aClass.getPackage();
```

**사용**

동적으로 로딩하고 동적으로 실행하고 싶을때 주로 사용된다.

재사용성, 확장성, 생산성, 유연성 등이 극대화될 수 있는 곳이여야 효과적이다.

**이슈**

Runtime 시에 동적으로 원하는 라이브러리를 로딩할 수 잇는 장점이 있지만  
컴파일시에 탐색 (Detection) 이 안되어 Runtime Exception 이 생길수 있는 단점이 존재 한다.

보통은 동적로딩이 느리다고 전해진다 (확인불가)

:::tip 참고자료
<https://gyrfalcon.tistory.com/entry/Java-Reflection>  
<https://asfirstalways.tistory.com/221>
:::

## Exception

Java 에서는 기본적으로 2가지의 에러 유형이 있다.

### Checked Exception

`Checked Exception` 는 외부 환경에 의해 미리 예상 되는 오류이다.

예를 들면 `IOException` `ClassNotFoundException` 등과 같이 _**반드시 예외처리가 필요하다.**_

* IOException
* SQLException

### Unchecked Exception (Runtime Exception)

`Unchecked Exception` 는 프로그램 로직상의 문제로 일어나는 로직상의 오류로써 미리 예상할 수 없다.

대표적으로 `RuntimeException` 과 같이 프로그램 실행중에 일어나며 _**반드시 예외처리를 필요로 하지 않는다.**_

* NullPointerException
* IllegalArgumentException
* IndexOutOfBoundException
* SystemException

> 예외처리한 객체는 작업이 끝난후 모드 GC 의 대상이 된다.

||Checked Exception|Unchecked Exception|
|:--:|--|--|
|처리여부|반드시 예외처리가 필요|명시적인 처리를 강제하지 않음|
|확인시점|컴파일 단계|실행단계|
|예외 발생 시<br>트랜잭션 여부|roll-back 하지 않음|roll-back 처리|
|대표적인 예외|`Exception` 의 상속을 받는 하위 클래스 중<br>`Runtime Exception`을 제외한 모든 예외|`Runtime Exception` 의 하위 예외 클래스|

:::tip 참고자료
<http://www.nextree.co.kr/p3239/>
:::

## Generic

**Syntax**

```java
public <타입 파라메터> 리턴타입 메소드명 (매개변수, ...) {
  /* statement */
}
```

**타입의 이름**

아무 문자열이나 사용가능하지만 가독성을 위해 일반적으로 다음 규칙을 따른다.

|키|설명|
|:--|:--|
|E|요소(Element)|
|K|키(Key)|
|N|숫자(Number)|
|T|타입(Type)|
|V|값(Value)|
|S, U, V|두번째, 세번째, 네번째에 선언된 타입|

:::tip 참고자료
<https://onsil-thegreenhouse.github.io/programming/java/2018/02/17/java_tutorial_1-21/>
:::

## Static Factory Method

기본적으로 Class 의 Instance 를 얻는 전통적인 수단은 public 생성자이다.

클래스는 생성자와 별도로 정적 팩토리 메서드 (static factory method) 를 생성할 수 있다.

**사용**

```java
class Character() {
  int strength, dexterity, consitution, intelligence;

  public Character(int strength, int dexterity, int consitution, int intelligence) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.consitution = consitution;
    this.intelligence = intelligence;
  }

  public static Character newWarrior() {
    return new Character(15, 5, 10, 3);
  }

  public static Character newMage() {
    return new Character(3, 10, 5, 15);
  }
}
```

```java
Character warrior = Character.newWarrior();
Character mage = Character.newMage();
```

위 코드는 정적 팩토리 메서드를 호출할 때 마다 `new` 연산을 하게 되는데  
`immutable` 객체를 캐시해서 쓰고 있거나 혹은 아래와 같이 _**singleton design pattern**_ 을 이용하여 사용도 가능하다.

```java
class Person {
  private final Person p = new Person();

  public static Person getInstance() {
    return this.p;
  }
}
```

아래와 같이 리턴하는 클래스의 타입을 유연하게 지정가능하다.

```java
class OrderUtil {
  public static Discount createDiscountItem(String code) throws Exception {
    if (!isValidCode(code)) {
      throw new Exception("Wrong discount code !!");
    }

    if (isCoupon(code)) {
      return new Coupon(1000);
      return new Point(500);
    }
  }
}

class Coupon extends Discount { ... }
class Point extends Discount { ... }
```

**단점**

* 상속을 하려면 `public` 이나 `protected` 생성자각 필요하니 정적 팩토리 메서드만 지원하면 하위 클래스를 만들수 없다.
* 정적 팩토리 메서드는 프로그래머가 찾기 어렵다.
  * 암묵적으로 대표적인 명명 규칙들에 의해 메서드 네이밍을 하는것이 일반적이다.
  * `from`, `of`, `valueOf`, `instance`, `getInstance`, `create`, `getType` ...

:::tip 관련출처 - Effective Java 3rd
<https://johngrib.github.io/wiki/static-factory-method-pattern/>  
<https://mommoo.tistory.com/53>
:::