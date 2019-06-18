# Polymorphism

Java 의 Polymorphism (다형성) 은 하나의 객체를 여러 타입으로 나타내게 하여 다양한 기능으로 이용할 수 있도록 하는것이다.

이는 코드의 유연하며 재사용이 가능하도록 구현되며 크게 Dispatch 방법에 따라 Static Dispatch 와 Dynamic Dispatch 로 나뉜다.

:::tip Dispatch 란?
프로그램이 어떤 메서드를 호출할 것인가를 결정하여 그것을 실행하는 과정을 말한다.
:::

## Static Dispatch

Static Dispatch 는 프로그램이 컴파일 시점에 알수 있으며 대표적으로 Method Overriding 이 있다.

**Method Overloading**

같은 이름의 메서드를 여러개 정의하고 매개변수의 유형과 개수를 다르게 하여 다양한 유형의 호출에 응답하는 방법이다.

이는 _**Function Signature 를 다르게 하여 사용하는 방법**_ 으로 Method Signature 가 동일하면 사용이 불가하다.

**Method Signature**

메서드의 이름 (Method Name) 과 매개변수의 타입 (Parameter Types) 이 같으면 메서드 시그니쳐가 같다고 한다.

::: warning
반환값의 타입 (Return Type) 은 메서드 시그니쳐에 포함되지 않는다.
:::

**Function Signature**

함수의 원형에 명시되는 매개변수의 리스트를 가르킨다.  
두 함수의 _**매개변수의 갯수**_ 와 _**타입**_ 이 같으면 두 함수의 시그니처는 같다고 할 수 있습니다.

```java
int sum (int a, int b, double c);

int sum2 (int, int, double);
```

위 두 함수의 시그니처가 같다.  
시그니처가 같은 함수는 같은 함수 포인터에 의해 상호호환이 가능하다.

## Dynamic Dispatch

**Method Overriding**

상의 클래스가 가지고 있는 메소드를 하위 클래스가 _**재 정의**_ 하여 사용하는 것

## Double Dispatch
