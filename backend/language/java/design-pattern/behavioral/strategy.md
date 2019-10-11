# 전략

객체들이 할 수 있는 행위 각각에 대해 전략 클래스를 생성하고, _**유사한 행위들을 캡슐화 하는 인터페이스를 정의**_ 하여  
행위를 바꾸고 싶은 경우 직접적으로 행위를 수행하지 않고 전략을 바꿔줌으로서 _**행위를 유연하게 확장**_ 시키는 방법이다.

디자인 패턴의 가장 중요한 패턴으로 다음 3가지의 요소로 구성된다.

## 전략객체를 가진 전략 객체

```java
public interface Action {
    void move();
}
```

## 전략 객체의 구현

```java
public class Walking implements Action {
  @Override
  public void move() {
    System.out.println("Walking road");
  }
}
```

```java
public class Running implements Action {
  @Override
  public void move() {
    System.out.println("Running road");
  }
}
```

## 전략 객체를 사용하는 컨텍스트 (소비)

```java
public class Human {
  void start(Action action) {
    System.out.println("Start Action");
    action.move();
    System.out.println("End Action");
  }
}
```

## 전략 객체를 생성해 컨텍스트에 주입하는 클라이언트 (공급)

```java
public class Client {
  public static void main (String[] args) {
    Human human = new Human();

    Walking walk = new Walking();
    human.start(walk);

    Running run = new Running();
    human.start(run);
  }
}
```

```sh
Start Action
Walking road
End Action
Start Action
Running road
End Action
```

> 클라이언트가 전략을 생성하여 전략을 실행 (소비) 할 컨텍스트에게 주입하는 패턴이다.

템플릿 메소드 패턴과 유사하지만 다양한 전략을 변경하면서 컨텍스트에게 주입할 수 있다. (템플릿 메소드보다 우수)
