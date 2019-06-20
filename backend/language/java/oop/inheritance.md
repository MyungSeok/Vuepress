# Inheritance

기존의 클래스를 재 사용하여 새로운 클래스로 작성하는 것  
코드를 재사용하여 새로운 클래스로 작성할 수 있으며 다형성을 구현한 것이다.

Java 는 구조적으로 다중 상속이 불가능 하다. 각 클래스는 하나의 클래스에서만 상속이 가능하지만 두 개이상의 인터페이스의 구현은 가능하다.

## Covariant 조건을 만족하면 리턴타입이 달라도 상속이 가능하다.

```java
abstract class Parent {
  Number run() {
    System.out.println("Parent Run");
    return 0;
  }
}

class Child extends Parent {
  Integer run() {
    System.out.println("Child Run");
    return 1;
  }
}
```

위 코드에서는 `Number` 클래스가 `Integer` 클래스의 슈퍼 클래스이니 가능하다.  
결과는 아래와 같다.

```java
Child Run
1
```

> 메서드의 공변 반환 타입이란 그 메서드가 오버라이딩 될때 더 좁은 (narrower) 타입으로 교체할 수 있다는 것이다.

:::tip
<http://blog.naver.com/PostView.nhn?blogId=bluerein_&logNo=221288112925&parentCategoryNo=&categoryNo=83&viewDate=&isShowPopularPosts=true&from=search>
:::
