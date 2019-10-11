# 방문자

![비지터 패턴](/img/A083.png)

* 데이터 구조를 돌아다니며 처리하는 구조
* 알고리즘을 이 패턴을 사용하는 한 객체 구조에서 분리 시키는 방법
* 구조의 수정 없이 **새로운 동작을 기존 객체 구조에 추가** 가능

```java
interface CarElementVisitor {
    void visit(Wheel wheel);
    void visit(Engine engine);
    void visit(Body body);
    void visit(Car car);
}
```

```java
interface CarElement {
  void accept(CarElementVisitor visitor);
}
```

```java
class Wheel implements CarElement {
  private String name;

  public Wheel(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public void accept(CarElementVisitor visitor) {
    visitor.visit(this);
  }
}

class Engine implements CarElement {
  public void accept(CarElementVisitor visitor) {
    visitor.visit(this);
  }
}

class Body implements CarElement {
  public void accept(CarElementVisitor visitor) {
    visitor.visit(this);
  }
}

class Car implements CarElement {
  CarElement[] elements;
  
  public Car() {
    this.elements = new CarElements[] {
      new Wheel("front left"),
      new Wheel("front right"),
      new Wheel("back left"),
      new Wheel("back right"),
      new Body(),
      new Engine()
    };
  }

  public void accept(CarElementVisitor visitor) {
    for(CarElement elem : elements) {
      elem.accept(visitor);
    }
    visitor.visit(this);
  }
}
```

```java
class CarElementPrintVisitor implements CarElementVisitor {
  public void visit(Wheel wheel) {
    System.out.println("Visiting " + wheel.getName() + " wheel");
  }

  public void visit(Engine engine) {
      System.out.println("Visiting engine");
  }

  public void visit(Body body) {
    System.out.println("Visiting body");
  }

  public void visit(Car car) {
    System.out.println("Visiting car");
  }
}

class CarElementDoVisitor implements CarElementVisitor {
  public void visit(Wheel wheel) {
    System.out.println("Kicking my " + wheel.getName() + " wheel");
  }

  public void visit(Engine engine) {
      System.out.println("Starting my engine");
  }

  public void visit(Body body) {
      System.out.println("Moving my body");
  }

  public void visit(Car car) {
      System.out.println("Starting my car");
  }
}
```

```java
public class VisitorDemo {
  static public void main(String[] args) {
    CarElement car = new Car();
    car.accept(new CarElementPrintVisitor());
    car.accept(new CarElementDoVisitor());
  }
}
```

:::tip 참고자료
<https://zetawiki.com/wiki/Visitor_패턴>  
<https://lktprogrammer.tistory.com/58>  
<http://wonwoo.ml/index.php/post/1490>
:::
