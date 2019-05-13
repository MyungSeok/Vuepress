# Functional Interface

## `forEach()`

`forEach(Consumer<? super T> action)`

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ForEach {
  public static void main(String[] args) {
    List<Person> list = new ArrayList<>();
    list.add(new Persion(1, "KIM"));
    list.add(new Persion(2, "LEE"));
    list.add(new Persion(3, "PARK"));

    Consumer<Person> style = (Person p) -> System.out.println("id: " + p.getPid() + ", Name: " + p.getName());

    list.forEach(style);
  }
}
```

```java
public class Person {
  private int pid;
  private String name;
  public Person() {}
  public Person(int pid, String name){
    this.pid = pid;
    this.name = name;
  }
  public int getPid() {
    return pid;
  }
  public void setPid(int pid) {
    this.pid = pid;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
}
```

```java
id:1, Name:KIM
id:2, Name:LEE
id:3, Name:PARK
```

## `removeIf()`

`removeIf(Predicate<? super E> filter)`

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ForEach {
  public static void main(String[] args) {
    List<Person> list = new ArrayList<>();
    list.add(new Persion(1, "KIM"));
    list.add(new Persion(2, "LEE"));
    list.add(new Persion(3, "PARK"));

    Consumer<Person> style = (Person p) -> System.out.println("id: " + p.getPid() + ", Name: " + p.getName());

    int pid = 2;
    Predicate<Person> predicate = p -> p.getPid() == pid;

    list.removeIf(predicate);

    list.forEach(style);
  }
}
```

```java
id:1, Name:KIM
id:3, Name:PARK
```

## `replaceAll()`

`replaceAll(UnaryOperator operator)`

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ForEach {
  public static void main(String[] args) {
    List<Person> list = new ArrayList<>();
    list.add(new Persion(1, "KIM"));
    list.add(new Persion(2, "LEE"));
    list.add(new Persion(3, "PARK"));

    Consumer<Person> style = (Person p) -> System.out.println("id: " + p.getPid() + ", Name: " + p.getName());

    UnaryOperator<Person> unaryOpt = pn -> pn.getName(pn.getName().concat(" -God"));
    list.replaceAll(unaryOpt);

    list.forEach(style);
  }
}
```

```java
id:1, Name:KIM -God
id:2, Name:LEE -God
id:3, Name:PARK -God
```

## sort()

`sort(Comparator<? super E> c)`

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ForEach {
  public static void main(String[] args) {
    List<Person> list = new ArrayList<>();
    list.add(new Persion(1, "KIM"));
    list.add(new Persion(2, "LEE"));
    list.add(new Persion(3, "PARK"));

    Consumer<Person> style = (Person p) -> System.out.println("id: " + p.getPid() + ", Name: " + p.getName());

    list.sort(new PersonComparatorByName());

    list.forEach(style);
  }
}
```

```java
import java.util.Comparator;
public class PersonComparatorByName implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getName().compareTo(p2.getName());
    }
}
```

```java
// 오름차순 정렬
id:1, Name:KIM
id:2, Name:LEE
id:3, Name:PARK
```

:::tip 참고자료
<https://www.concretepage.com/java/jdk-8/java-8-list-example-with-foreach-removeif-replaceall-and-sort>
:::