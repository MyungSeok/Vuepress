# Fundamental

## 자료형

Java 의 자료형은 기본 (원시) 타입과 참조 타입으로 크게 나뉜다.

기본 타입은 아래와 같다.

|데이터형|예약어|비트수(바이트수)|범위|
|:-:|:-:|:-:|:-:|
|논리형|boolean|8 Bit (1 Byte)|true or false|
|문자형|char|16 Bit<br>유니코드 (2 Byte)|수치로는 0 ~ 65535('\u0000'~'\uFFFF')<br>유니코드:영어,숫자-1바이트, 그외 다국어-2바이트|
|수치형(정수)|byte|8 Bit (1 Byte)|-128 ~ 127(-2의7제곱~2의7제곱-1)<br>2^8|
|수치형(정수)|short|16 Bit (2 Byte)|-32,768 ~ 32,767(-2의15제곱~2의15제곱-1)<br>2^16|
|수치형(정수)|int|32 Bit (4 Byte)|-2,147,483,648 ~ 2,147,483,647(-2의31제곱~2의31제곱-1)<br>2^32|
|수치형(정수)|long|64 Bit (8 Byte)|-9,223,372,036,854,775,808~9,223,372,036,854,775,807<br>(-2^63 ~ 2^63-1)<br>2^64|
|수치형(실수)|float|32 Bit (4 Byte)|±3.40282347E+38, ±1.40239846E-45<br>IEEE 754-1985표준|
|수치형(실수)|double|64 Bit (8 Byte)|-1.79769313486231570E308~+1.79769313486231570E308|

기본타입의 가장 큰 특징은 변하지 않는다는 불변 (immutable) 속성을 가지고 있으며 값 자체를 가지고 있다.

참조 데이터형은 배열, 클래스, 인터페이스 등등으로 기본타입을 제외한 이외의 것들을 가르키며 값이 아닌 _**데이터에 대한 참조 주소를 가지고 있다.**_

:::tip 참고자료
<https://aventure.tistory.com/59>
:::

## JDK & JRE 차이점

### JDK (Java Development Kit)

Java 의 응용프로그램을 개발할 수 있는 소프트웨어 개발 키트이다.

### JRE (Java Runtime Environment)

Java 프로그램 코드가 실행되는 JVM 을 지칭함

## `static` 키워드의 의미

Java Class 의 멤버 변수 또는 메소드가 속한 클래스의 인스턴스화를 요구하지 않고 액세스 할 수 있는 _**접근제어자**_ 입니다.  
`static` 접근 제어자로 지정된 변수 혹은 메서드는 Java Runtime 시에 Compile 시에 정적으로 바인딩 되기 때문에 재정의 (수정) 이 불가 합니다.

## 인터페이스 (interface) 와 추상 클래스(abstract) 의 공통점 & 차이점

인터페이스 (interface) 와 추상 클래스 (abstract) 는 근본적으로 다른 목적에 의해 구현된다.

||interface|abstract|
|--|--|--|
|목적|함수의 구현을 강제화|상속을 통하여 기능을 이용하고 확장함|
|구현 방식|반드시 모든 메소드를 구현|모든 메소드를 구현하지 않아도 됨|
|다중 상속|가능|불가|
|접근 제어자|`public`|`private`, `protected`, `public`|
|변수|기본적으로 `final` 로써 최종 변수임|비 최종 변수를 포함할 수 있음|

:::warning Java 8 이전까지는 Interface 안에 static 메서드를 선언할 수 없었다.
이는 static 클래스인 경우에는 클래스 자체가 JVM 기동하면서 바로 로딩 된다.  
Interface 나 Abstract Class 인 경우 클래스가 생성되어진 이후에 해당 객체를 Reference 하게 된다.  
상대적으로 로딩시간이 앞서 있는 static 클래스에 대해서는 interface 나 Abstract 클래스의 구현이 불가하다
:::

:::tip 참고자료
<https://groups.google.com/forum/#!topic/ksug/XJAznUUFQl4>
:::

## Call By Value & Reference 의 차이

Java 에서 _**Call By Value**_ 를 통한 값 전달 방식은 객체의 복사본이 전달된다는 것을 의미한다.  
즉 _**원본 데이터에 영향을 주지 않는다.**_ 객체가 참조로 전달되면 이는 실제 객체가 전달되지 않는 _**참조객체의 전달**_ 을 의미한다.

CBV (Call By Value) 와 CBR (Call By Reference) 의 비교예로는 흔히 다음과 같다.

### `equals` 와 `==` 의 차이

문자열 비교에서 흔하게 사용하지만 반환값이 `boolean` 이라는 공통점이 있지만 다음과 같은 차이점이 있다.

* `equals`  
  * _**메서드**_
  * 대상의 내용을 비교
* `==`
  * _**연산자**_
  * 대상의 주소값을 비교

```java
String A = "abc";
String B = A;
String C = new String("abc");

System.out.println(A == B); // true
System.out.println(A == C); // false
System.out.println(B == C); // false

System.out.println(A.equals(B));  // true
System.out.println(A.equals(C));  // true
System.out.println(B.equals(C));  // true
```

:::tip 참고자료
<https://kmj1107.tistory.com/entry/JAVA-문자열string-비교-equals와-의-차이점-equals의-반대>
:::

### `equals` 에서 같음을 정의할 때 hashCode 도 같이 정의해줘야 한다.

객체를 `equals` 메서드로 내용의 같음을 정의하였음에도 불구하고 서로 다른 객체 참조에서 이루어졌을때의 예외처리가 필요한 경우도 있기 때문이다.

즉 다른 부작용이 생길 여지가 있기 때문이다.

```java
Set<Person> set = new HashSet<>();

Person p1 = new Person("JDK", 27);
Person p2 = new Person("JDK", 27);

System.out.println("Person 1 : " + p1.hashCode()); // 2018699554
System.out.println("Person 2 : " + p2.hashCode()); // 1311053135

set.add(p1);
set.add(p2);

System.out.println(set.size());  // 2
```

위에서 같은 내용을 가진 `Object` 임에도 불구하고 `Set` 에 2건이 중복으로 입력되었다.

즉 반드시 _**`equals` 로도 같은 객체라면 반드시 hashCode 도 같은 값**_ 이여야만 한다.

:::tip 참고자료
<https://jeong-pro.tistory.com/172>
:::

## 객체 재사용

대표적으로 `Singleton` 디자인 패턴과 같이 미리 사전에 생성된 `Instance` 를 재사용하는 방식으로 일반적으로 `ThreadPool` 이나 `Connection Pool` 등의 방식으로 주로 사용한다.

## 초기화 블럭 (Initialization Block)

클래스 초기화 블럭과 인스턴스 초기화 블럭이 있다.

```java
public class TEST {
  static int a;
  int b;

  static {
    System.out.println("Static initialization"); // 1
  }

  {
    System.out.println("Instance initialization"); // 2 // 4
  }

  public TEST() {
    System.out.println("Constructor"); // 3 // 5
  }

  public static void main(String[] args) {
    new TEST();
    new TEST();
  }
}
```

```java
Static initialization
Instance initialization
Constructor
Instance initialization
Constructor
```

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