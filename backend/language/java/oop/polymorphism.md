# Polymorphism

Java 의 Polymorphism (다형성) 은 하나의 객체를 여러 타입으로 나타내게 하여 다양한 기능으로 이용할 수 있도록 하는것이다.

이는 코드의 유연하며 재사용이 가능하도록 구현되며 크게 _**Dispatch**_ 방법에 따라 _**Static Dispatch**_ 와 _**Dynamic Dispatch**_ 로 나뉜다.

## Dispatch

프로그램이 어떤 메서드를 호출할 것인가를 결정하여 그것을 실행하는 과정을 말한다.

### Static Dispatch

Static Dispatch 는 프로그램이 컴파일 시점에 알수 있으며 대표적으로 Method Overloading 이 있다.

:::tip Method Overloading (메서드 오버로딩)
같은 이름의 메서드를 여러개 정의하고 매개변수의 유형과 개수를 다르게 하여 다양한 유형의 호출에 응답하는 방법이다.

이는 _**Function Signature 를 다르게 하여 사용하는 방법**_ 으로 _**Method Signature**_ 가 동일하면 사용이 불가하다.
:::

```java {4,13}
public class Dispatch {
  static class Service {
    void run() {
      System.out.println("run");
    }

    void run(String msg) {
      System.out.println(msg);
    }
  }

  public static void main(String[] args) {
    new Service().run();
  }
}
```

위 코드의 `main()` 메서드를 실행하게 되면 `Service` 클래스의 `run()` 메서드중 어느것이 실행되는지는 런타임이 아닌 컴파일 시점에 알 수 있다.

컴파일 시점에 알 수 있으므로 어떤 메서드가 호출될지는 컴파일이 종료된 후 바이트 코드에도 드러나게 되어 있다.

### Dynamic Dispatch

특정 메서드나 함수 구현이 프로그램의 런타임에 결정되는 것으로 대표적으로는 Method Overriding 이 있다.

정적 디스패치 (static dispatch) 에 비해서는 느리고 컴파일러의 최적화를 막아 비용이 더 크게 발생될 수 있다.

:::tip Method Overriding (메서드 오버라이딩)
상위 클래스가 가지고 있는 메소드를 하위 클래스가 _**재 정의**_ 하여 사용하는 것
:::

```java
public class Dispatch {
  static abstract class Service {
    abstract void run();
  }

  static class MyServcie1 extends Service {
    @Overried
    void run() {
      System.out.println("MyService 1");
     }
  }

  static class MyService2 extends Service {
    @Overried
    void run() {
      System.out.println("MyService 2");
     }
  }

  public static void main(String[] args) {
    Service svc = new MyService1();
    svc.run()
  }
}
```

위 코드의 어떤 클래스의 `run()` 메서드가 실행될지는 컴파일 시점에는 알 수 없다.

다이나믹 디스패칭은 리시버 파라메터에 의한 _**메소드 호출을 사용하는 객체 변수에 의해 결정**_ 되는것으로 _**파라메터 타입에 의해 결정되는 것이 아니다.**_

**Method Signature (메서드 시그니처)**

메서드의 이름 (Method Name) 과 매개변수의 타입 (Parameter Types) 이 같으면 메서드 시그니쳐가 같다고 한다.

:::warning
반환값의 타입 (Return Type) 은 메서드 시그니쳐에 포함되지 않는다.
:::

**Function Signature (함수 시그니처)**

함수의 원형에 명시되는 매개변수의 리스트를 가르킨다.  
두 함수의 _**매개변수의 갯수**_ 와 _**타입**_ 이 같으면 두 함수의 시그니처는 같다고 할 수 있습니다.

```java
int sum (int a, int b, double c);

int sum2 (int, int, double);
```

위 두 함수의 시그니처가 같다.  
시그니처가 같은 함수는 같은 함수 포인터에 의해 상호호환이 가능하다.

### Double Dispatch

싱글 디스패칭이 여러번 일어나는 것이 더블 디스패칭이다.

```java
interface Game {
  void play(Play play);
}

static class Init implements Game{
  @Override
  public void play(Play play) {
    play.run(this);
  }
}

static class Score implements Game {
  @Override
  public void play(Play play) {
    play.run(this);
  }
}

interface Play {
  void run(Init init);
  void run(Score score);
}

static class Puzzle implements Play {
  @Override
  public void run(Init init) {
    System.out.println("Init Puzzle");
  }

  @Override
  public void run(Score score) {
    System.out.println("Score Puzzle");
  }
}

static class Action implements Play {
  @Override
  public void run(Init init) {
    System.out.println("Init Action");
  }

  @Override
  public void run(Score score) {
    System.out.println("Score Action");
  }
}

@Test
public void doubleDispatch() {
  List<Game> games = Arrays.asList(new Init(), new Score());
  List<Play> play = Arrays.asList(new Puzzle(), new Action());

  games.forEach(g -> play.forEach(p -> g.play(p)));
}
```

:::tip 참고자료
[토비의 봄 TV 1회 - 재사용성과 다이나믹 디스패치, 더블 디스패치](https://www.youtube.com/watch?v=s-tXAHub6vg)  
<https://multifrontgarden.tistory.com/133>  
<http://wonwoo.ml/index.php/post/1490>
:::
