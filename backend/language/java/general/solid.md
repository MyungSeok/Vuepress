# SOLID 란 ?

객체지향 4대 특성인 캡슐화, 상속, 추상화, 다형성 등을 이용하여 객체지향 프로그래밍 설계를 도와주는 원칙들이 있다.  
이를 SOLID 원칙들이라 하며 자기 자신의 클래스의 응집도를 높이고, 타 클래스의 결합도를 낮추는 _**High-Cohesion - Loose Coupling**_ 원칙을 객체 지향관점에서 도입한것이다.

_**SOLID**_ 5대 원칙 (객체 지향 설계 5원칙)

* SRP (Single Reponsibility Principle : 단일 책임의 원칙)
* OCP (Open Closed Principle : 개방 폐쇄의 원칙)
* LSP (Liskov Substitution Principle : 리스코프 치환의 원칙)
* ISP (Interface Segregation Principle : 인터페이스 분리의 원칙)
* DIP (Dependency Inversion Principle : 의존 역전의 원칙)

## 단일 책임의 원칙 (SRP : Single Reponsibility Principle)

작성된 _**클래스는 하나의 기능만 가지며**_ 클래스가 제공하는 모든 서비스는 그 _**하나의 책임을 수행하는데 집중**_ 되어야 한다는것

* 소프트웨어의 설계 부품 (클래스, 함수) 는 단 하나의 책임 (기능) 만 가져야 한다.

새로운 요구사항에 대해 프로그램이 영향 받는 부분이 적어야 한다. 다시 말하면 _**응집도는 높고 결합도는 낮아야 한다**_ 라는 말이다.  
만약 한 프로그램이 책임(기능을 담당) 지고 있는 부분이 많아지면 클래스 내부의 함수끼리 강한 결합도를 가질수 있는 가능성이 높기 때문에 요구사항의 수정이 발생할 경우 유지보수 비용이 증가한다.  
따라서 책임 (기능) 을 분리 할 수 있는 구조로 설계되어야 한다.

> 리팩토링 (Refactoring) 을 통하여 해당 책임을 최상의 상태로 분배

## 개방 폐쇄 원칙 (OCP : Open Closed Principle)

소프트웨어의 구성요소 (컴포넌트, 클래스, 모듈, 함수) 는 확장에는 열려 있고, 변경에는 닫혀 있어야 한다는 의미이다.  
기존의 구성요소는 수정이 일어나지 말아야 하며, 기존의 구소요소를 쉽게 확장하여 재 사용 가능해야 한다는 뜻이다.

* 확장 될것과 불변의 속성을 엄격히 구분한다.
* 두 모듈이 만나는 지점에 인터페이스를 정의한다.  
* 구현에 의존하기보다 정의한 인터페이스에 의존하도록 코드를 작성한다.

### 정의

* 소프트웨어의 구성요소 (컴포넌트, 클래스, 모듈, 함수) 는 확장에는 열려 있고, 변경에는 닫혀 있어야 한다.

이는 기존의 구성요소는 수정이 일어나지 말아야 하며, _**기존의 구성요소를 쉽게 확장하여 재사용 가능**_ 해야 한다는 뜻이며, 프로그램 설계 과정에서 많은 고민이 되어 있어야 하고 이를 위해 자주 사용되는 문법이 `interface` 를 활용한 방법이다.

아래 예시를 통하여 OCP 의 위배 사항을 살펴 보자

```java
class SoundPlayer {
  void play() {
    System.out.println("play wav");
  }
}
public class Client {
  public static void main(String[] args) {
    SoundPlayer sp = new SoundPlayer();
    sp.play();
  }
}
```

상기 코드에서 `play()` 를 다른 파일 포맷의 재생을 원한다면 OCP 원칙에 위배된다.

이러한 경우에는 `interface` 를 구성하여 OCP 를 만족한다.

```java
interface playAlgorithm {
  public void play();
}

class Wav implements playAlgorithm {
  @Override
  public void play() {
    System.out.println("Play Wav");
  }
}

class Mp3 implements playAlgorithm {
  @Override
  public void play() {
    System.out.println("Play Mp3");
  }
}
```

위와 같이 재생하고자 하는 `playAlgorithm` 인터페이스의 `play()` 를 재정의 하도록 설계한다.

이와 같은 설계 방식을 디자인 패턴에서는 _**전략 패턴 (Strategy Pattern)**_ 이라고 한다.

OCP 를 만족한 설계는 다음과 같은 장점이 있다.

* 변경에 유연하게 대처 가능하다.
* 유지보수 비용이 감소된다.
* 코드의 가독성이 높아진다.

:::tip 참고자료
<https://code.tutsplus.com/tutorials/solid-part-2-the-openclosed-principle--net-36600>
:::

## 리스코프 치환 원칙 (LSP : Liskov Substitution Principle)

OCP (Open Close Principle : 개방 폐쇠의 법칙) 과 밀접한 연관이 있으며 OCP 를 바탕으로 구현한 템플릭 설계의 하나의 예라고 할 수 있다.  
즉 LSP 는 OCP 의 해결책 중 하나이다.

### 정의

* 자식 (파생) 클래스는 언제나 부모 (기반) 타입과 호환이 되어야 한다.
* 서브타입은 언제나 기반 타입과 호환될 수 있어야 한다.
* 하위 클래스가 상위 클래스의 역할을 대신할 때 논리적으로 맞아 떨어져야 한다.

다음 예는 이를 설명하기 위한 가장 유명한 예 이다.

@flowstart
stage1=>operation: Rectangle
stage2=>operation: Square

stage1->stage2
@flowend

최초에 기반타입을 담당할 `Rectagle` 클래스를 선언한다.

여기에는 너비와 높이 등이 선언되어 있으며 도형의 넓이를 반환하는 `area` 함수까지 구현되어 있다.

```java
class Rectangle {
  private int width;
  private int height;

  public void setHeight(int height) {
    this.height = height;
  }

  public int getHeight() {
    return this.height;
  }

  public void setWidth(int width) {
    this.width = width;
  }

  public int getWidth() {
    return this.width;
  }

  public int area() {
    return this.width * this.height;
  }
}
```

`Rectangle` 클래스를 상속 받는 `Square` 클래스가 있다.
`Square` 클래스는 _**정사각형**_ 의 도형 처리를 담당하는 클래스이다.

```java
class Square extends Rectangle {
  @Override
  public void setHeight(int value) {
    this.width = value;
    this.height = value;
  }

  @Override
  public void setWidth(int value) {
    this.width = value;
    this.height = value;
  }
}
```

위의 두개의 클래스를 소비할 메인 함수이다.

```java
public class MyClass {
  static boolean checkAreaSize(Rectangle r) {
    r.setWidth(5);
    r.setHeight(4);

    if (r.area() != 20 ) {
      throw new RuntimeException("Bad Area");
    }

    return true
  }

  public static void main(String[] args) {
    checkAreaSize(new Rectangle());
    checkAreaSize(new Square()); // Error Exception
  }
}
```

이를 실행하면 두개의 클래스가 전혀 다른 결과를 가져온다.

하나는 `Rectangle` 클래스는 _**넓이가 20 으로 연산**_ 되는데 반해 `Square` 클래스는 오류를 반환한다.

이것이 바로 _**리스코프의 치환 원칙**_ 을 벗어난 대표적인 예이다.

다시 정리하면 _**상위 타입의 객체를 하위타입의 객체로 치환해도 상위 타입을 사용하는 프로그램은 정상적으로 동작**_ 해야 한다.

리스코프 치환을 벗어나는 위반사례는 대표적으로 다음과 같다.

1. 명시된 명세에서 벗어난 _**값**_ 을 반환한다.
2. 명시된 명세에서 벗어난 _**오류**_ 를 발생한다.
3. 명시된 명세에서 벗어난 _**기능**_ 을 수행한다.

### 해결 방법

* 상속관계를 제거한다.
* 문제가 되는 `area()` 를 `Square` 로 이동한다.
* LSP 를 통하여 _**자식 클래스가 상속받은 부모 클래스의 역활을 충실히 하면서 확장**_ 해나가야 한다.

:::tip 참고자료
<https://code.tutsplus.com/tutorials/solid-part-3-liskov-substitution-interface-segregation-principles--net-36710>
:::

## 인터페이스 분리 원칙 (ISP : Interface Segregation Principle)

최소한의 의미에 맞는 인터페이스만 구현해야 한다.

* 하나의 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 않아야 한다.
* 하나의 인터페이스보다는 여러개의 구체적인 인터페이스가 낫다

시스템의 내부 의존성을 약화시켜 리펙토링, 수정, 재배포를 쉽게할 수 있다.

## 의존 역전 원칙 (DIP : Dependency Inversion Principle)

하위 레벨모듈의 변경이 상위 레벨 모듈의 변경을 요구하는 역전현상

* 읜존 관계를 맺을 때, 변화하기 쉬운것 (클래스) 보단 변화하기 어려운 것 (추상클래스, 인터페이스) 에 의존해야 한다는 원칙이다.

:::tip 참고자료
<http://www.nextree.co.kr/p6960/>  
<http://limkydev.tistory.com/77>  
<http://choipattern.blogspot.com/2013/08/solid.html>
:::