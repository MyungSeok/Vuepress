# Factory Method

직접 객체를 생성하지 않고 **팩토리 메서드 클래스에서 객체를 대신 생성**시킨다.

```java
public abstract class Product {
  public abstract String getName();
  public abstract int getPrice();
}
```

```java
public class Computer extends Product {
  private String name;
  private int price;

  public Computer (String name, int price) {
      this.name = name;
      this.price = price;
  }

  @Override
  public String getName() {
      return this.name;
  }

  @Override
  public int getPrice() {
      return this.price;
  }
}
```

```java
public class Ticket extends Product {
  private String name;
  private int price;

  public Ticket (String name, int price) {
      this.name = name;
      this.price = price;
  }

  @Override
  public String getName() {
      return this.name;
  }
  @Override
  public int getPrice () {
      return this.price;
  }
}
```

```java
public class ProductFactory {
  public static Product getInstance(String, type, String name, int price) {
    if ("computer".equals(type)) {
      return new Computer(name, price);
    } else if ("ticket".equals(type)) {
      return new Ticket(name, price);
    }
  }
}
```

```java
public class FactoryTestCode {
  public static void main(String[] args) {
    Product p1 = ProductFactory.getInstance("computer", "pc", 500);
    Product p2 = ProductFactory.getInstance("ticket", "여행", 300)
  }
}
```

## 장점

유지보수가 용이하다.

:::tip 참고자료
<http://limkydev.tistory.com/83?category=957882>
<https://blog.seotory.com/post/2016/08/java-factory-pattern>
:::
