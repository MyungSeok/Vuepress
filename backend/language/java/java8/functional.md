# Functional Interface

자바에서 제공되는 표준 API 에서 한 개의 추상메서드를 가지는 인터페이스들은 모두 람다식을 이용하여 익명 구현 객체로 표현이 가능하다.  
예를 들면 스레드 작업을 정의하는 [`Runnable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html) 인터페이스는 매개변수와 리턴값이 없는 `run()` 메서드만 조재하기 때문에 다름과 같이 람다식을 이용한 `Runnable` 인스턴스를 생성시킬수 있다.

```java
public static void main(String[] args) {
  Runnable runnable = () -> {
    for (int i = 0; i < 10; ++i) {
      System.out.println(i);
    }
  };

  Thread thread = new Thread(runnable);
  thread.start();
}
```

## `@FunctionalInterface`

모든 인터페이스를 람다식의 타겟 타입으로 사용할 수 없다.

람다식이 하나의 메소드를 정의하기 때문에 _**두개 이상의 추상메서드가 선언된 인터페이스는 람다식을 이용하애 구현 객체를 생성할 수 없다.**_

> _**하나의 abstract method 만이 선언**_ 된 인터페이스 만이 _**lamda**_ 식의 Target Type 이 될 수 있다.

`FunctionalInterface` 를 작성할 때 `@FunctionalInterface` 어노테이션을 붙여주면 명시적으로 `FunctionalInterface` 이라는 것을 알수 있으며 또한 두개이상의 _**추상 메서드가 선언되지 않도록 컴파일러가 체크**_ 를 한다.

아래와 같이 두개 이상의 메서드를 선언한 `FunctionalInterface` 은 컴파일 에러가 난다.

```java {4}
@FunctionalInterface
public interface MyFunctionalInterface {
    public void method();
    public void otherMethod(); // Compile Error
}
```

아래와 같이 간단히 만들어 사용가능하다.

**매개변수가 있는 함수형 인터페이스**

```java
@FunctionalInterface
public interface MyFuncInterface {
  public int method(int x, int y);
}
```

```java
public static void main(String[] args) {
  MyFuncInterface func = (x, y) => {
    return x + y;
  };

  int result = func(3, 5);

  System.out.println(result);
}
```

```bash
5
```

:::tip 참고자료
<https://palpit.tistory.com/671>
:::

Java SE 8 부터는 빈번하게 사용되는 함수적 인터페이스 (Functional Interface) 는 `java.util.function` 표준 API 패키지로 제공합니다.  
이 패키지에서 제공하는 _**함수적 인터페이스의 목적은 메서드 또는 생성자의 매개타입으로 사용되어 람다식을 대입**_ 할 수 있도록 하기 위해서 이다.

`java.util.function` 패키지의 함수적 인터페이스는 크게 `Consumer` `Supplier` `Function` `Operator` `Predicate` 로 구분된다.

## [Consumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html)

`Consumer` 인터페이스의 특징은 리턴값이 없는 `accept()` 메서드를 가지고 있다.  
`accept()` 메서드는 매개값을 소비하는 역활만 한다.

|Interface Name|Abstract Method|Description|
|:-|:-|--|
|`Consumer<T>`|void accept(T t)|객체 `T` 를 받아와 소비|
|`BiConsumer<T, U>`|void accept(T t, U u)|객체 `T` 와 `U` 를 받아 소비|
|`DoubleConsumer`|void accpet(double value)|`double` 값을 받아 소비|
|`IntConsumer`|void accept(int value)|`int` 값을 받아 소비|
|`LongConsumer`|void accept(long value)|`long` 값을 받아 소비|
|`ObjDoubleConsumer<T>`|void accpet(T t, double value)|객체 `T` 와 `double` 값을 받아 소비|
|`ObjIntConsumer<T>`|void accept(T t, int value)|객체 `T` 와 `int` 값을 받아 소비|
|`ObjLongConsumer<T>`|void accept(T t, long value)|객체 `T` 와 `long` 값을 받아 소비|

`Consumer<T>` 인터페이스를 타겟 타입으로 하는 람다식은 다음과 같이 작성할 수 있다.

```java
Consumer<String> consumer = t -> {
  /* t 를 소비하는 실행구문 */
};
```

위 구문을 이용한 예제는 다음과 같다.

```java
public static void main(String[] args) {
  Consumer<String> consumer = t -> System.out.println(t + "8");
  consumer.accept("Java SE ");

  BiConsumer<String, String> biConsumer = (t, u) -> System.out.println(t + u);
  biConsumer.accept("Java SE ", "8");

  DoubleConsumer doubleConsumer = d -> System.out.println("Java SE " + d);
  doubleConsumer.accept(8.0);

  ObjIntConsumer<String> objIntConsumer = (t, i) -> System.out.println(t + i);
  objIntConsumer.accept("Java SE ", 8);
}
```

```sh
Java SE 8
Java SE 8
Java SE 8.0
Java SE 8
```

`forEach()` 를 이용한 `Consumer` 인터페이스의 소비 방법이다.

소비자의 관점으로 `forEach(Consumer<? super T> action)` 로 사용한다.

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

또한 정렬 알고리즘을 이용한 생산자 관점에서 사용하는 메서드이다. (`sort(Comparator<? super E> c)`)

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

## [Supplier](https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html)

`Supplier` 인터페이스의 특징은 매개변수가 없고 리턴값이 있다.  
_**get**_ 으로 시작하는 이름의 메서드를 가지고 있으며 이 메서드는 실행한 후 호출한 곳으로 데이터를 리턴하는 역활을 한다.

리턴 타입에 따른 `Supplier` 인터페이스들이 있다.

|Interface Name|Abstract Method|Description|
|:-|:-|--|
|`Supplier<T>`|T get()|`T` 객체를 리턴|
|`BooleanSupplier`|Boolean getAsBoolean()|`Boolean` 값을 리턴|
|`DoubleSupplier`|double getAsDouble()|`double` 값을 리턴|
|`IntSupplier`|int getAsInt()|`int` 값을 리턴|
|`LongSupplier`|long getAsLong()|`long` 값을 리턴|

`Supplier<T>` 인터페이스를 타겟 타입으로 하는 람다식은 다음과 같이 작성할 수 있다.

```java
IntSupplier supplier = () -> {
  /* statement */
  return int_value;
}
```

다음 예제는 주사위의 숫자를 랜덤하게 공급하는 `IntSupplier` 인터페이스를 타겟으로 하는 람다식이다.

```java
public static void main(String[] args) {
  IntSupplier intSupplier = () -> {
    int num = (int) (Math.random() * 6) + 1;

    return num;
  }

  int num = intSupplier.getAsInt();
  System.out.println("눈의 수 : " + num);
}
```

## [Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)

`Function` 인터페이스의 특징은 매개값이 리턴값이 있는 _**apply**_ 로 시작하는 메서드를 가지고 있다.  
이 메서드들은 매개값을 리턴값으로 매핑하는 역활을 합니다.

매개변수와 리턴 타입에 따라 아래와 같은 `Function` 인터페이스가 잇다.

|Interface Name|Abstract Method|Description|
|:-|:-|--|
|`Function<T, R>`|R apply(T t)|객체 `T` 를 객체 `R` 로 매핑|
|`BiFunction<T, U, R>`|R apply(T t, U u)|객체 `T` 와 `U` 를 객체 `R` 로 매핑|
|`DoubleFunction<R>`|R apply(double value)|`double` 을 객체 `R` 로 매핑|
|`IntFunction<R>`|R apply(int value)|`int` 을 객체 `R` 매핑|
|`IntToDoubleFunction`|double applyAsDouble(int value)|`int` 을 `double` 로 매핑|
|`IntToLongFunction`|long applyAsLong(int value)|`int` 을 `long` 으로 매핑|
|`LongToDoubleFunction`|double applyAsDouble(long value)|`long` 을 `double` 로 매핑|
|`LongToIntFunction`|ins applyAsInt(long value)|`long` 을 `int` 로 매핑|
|`ToDoubleBiFunction<T, U>`|double applyAsDouble(T t, U u)|객체 `T` 와 `U` 를 `double` 로 매핑|
|`ToDoubleFunction<T>`|double applyAsDouble(T value)|객체 `T` 를 `double` 로 매핑|
|`ToIntBiFunction<T, U>`|int applyAsDouble(T t, U u)|객체 `T` 와 `U` 를 `int` 로 매핑|
|`ToIntFunction<T>`|int applyAsDouble(T value)|객체 `T` 를 `int` 로 매핑|
|`ToLongBiFunction<T, U>`|long applyAsDouble(T t, U u)|객체 `T` 와 `U` 를 `long` 로 매핑|
|`ToLongFunction<T>`|long applyAsDouble(T value)|객체 `T` 를 `long` 로 매핑|

`Function<T, R>` 인터페이스를 타겟 타입으로 하는 람다식은 다음과 같이 작성 가능합니다.

```java
Function<Student, String> function = t -> { return t.getName(); };
```

```java
Function<Student, String> function = t -> return t.getName();
```

아래 예제는 `List` 에 저장된 `Student` 객체를 하나씩 꺼내서 평균점수를 출력한다.

```java
class Student {
  private String name;
  private int englishScore;
  private int mathScore;

  public Student(String name, int englishScore, int mathScore) {
      super();
      this.name = name;
      this.englishScore = englishScore;
      this.mathScore = mathScore;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
  }

  public int getEnglishScore() {
      return englishScore;
  }

  public void setEnglishScore(int englishScore) {
      this.englishScore = englishScore;
  }

  public int getMathScore() {
      return mathScore;
  }

  public void setMathScore(int mathScore) {
    this.mathScore = mathScore;
  }
}
```

```java
private static List<Student> lint = Arrays.asList(
  new Student("Jolie", 100, 89),
  new Student("Martin", 77, 94),
  new Student("Pierre", 49, 100),
  new Student("Paul", 80, 78)
);

public static double avg(ToIntFunction<Student> function) {
  int sum = 0;

  for (Student std : list ) {
    sum += function.applyAsInt(std);
  }

  double avg = (double) sum / list.size();

  return avg;
}

public static void main(String[] args) {
  double englishAvg = avg(s -> s.getEnglishScore());
  System.out.println("영어 평균 점수 : " + englishAvg);

  double mathAvg = avg(s -> s.getMathScore());
  System.out.println("수학 평균 점수 : " + mathAvg);
}
```

```bash
영어 평균 점수 : 76.5
수학 평균 점수 : 90.25
```

## Operator

`Operator` 인터페이스는 `Function` 과 동일하게 매개변수와 리턴값이 있는 _**apply**_ 이름으로 시작하는 메서드를 가지고 있다.

|Interface Name|Abstract Method|Description|
|:-|:-|--|
|`BinaryOperator<T>`|`BiFunction<T, U, R>` 의 하위 인터페이스|`T` 와 `U` 를 연산 후 `R` 을 리턴|
|`UnaryOperator<T>`|`Function<T, R>` 의 하위 인터페이스|`T` 를 연산한 후 R 을 리턴|
|`DoubleBinaryOperator`|double applyAsDouble(double, double)|두개의 `double` 을 연산|
|`DoubleUnaryOperator`|double applyAsDouble(double)|한개의 `double` 을 연산|
|`IntBinaryOperator`|int applyAsInt(int, int)|두개의 `int` 을 연산|
|`IntUnaryOperator`|int applyAsInt(int)|한개의 `int` 를 연산|
|`LongBinaryOperator`|long applyAsLong(long, long)|두 개의 `long` 을 연산|
|`LongUnaryOperator`|long applyAsLong(long)|한 개의 `long` 을 연산|

다음은 `int[]` 배열의 최대값과 최소값을 얻습니다.

```java
private static int[] scores = {100, 92, 81, 78, 88, 96, 55, 94};

public static int compareNum(IntBinaryOperator operator) {
  int result = scores[0];

  for (int score : scores) {
    result = operator.applyAsInt(result, score);
  }

  return result;
}

public static void main(String[] args) {
  int max = compareNum((a, b) -> (a >= b ? a : b));
  System.out.println("최대값 : " + max);

  int min = compareNum((a, b) -> (a <= b ? a : b));
  System.out.println("최솟값 : " + min);
}
```

다음은 `replaceAll(UnaryOperator operator)` 을 이용한 문자열을 `concatenate` 연산 과정이다.

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

## [Predicate](https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html)

`Predicate` 인터페이스는 매개변수와 `boolean` 리턴값이 있으며  _**test**_ 로 시작하는 메서드 명을 가지고 있다.  
이 메서드는 매개값을 조사해서 `true` 혹은 `false` 을 리턴하는 역활을 한다.

매개변수타입과 수에 따라서 아래와 같은 `Predicate` 함수 인터페이스를 가지고 있다.

|Interface Name|Abstract Method|Description|
|:-|:-|--|
|`Predicate<T>`|Boolean test(T t)|객체 `T` 를 조사|
|`BiPredicate<T, U>`|Boolean test(T t, U u)|객체 `T` 와 `U` 를 조사|
|`DoublePredicate`|Boolean test(double value)|`double` 값을 조사|
|`IntPredicate`|Boolean test(int value)|`int` 값을 조사|
|`LongPredicate`|Boolean test(long value)|`long` 값을 조사|

다음은 `removeIf()` 을 이용한 값을 리스트를 제거하는 소비자의 코드이다. (`removeIf(Predicate<? super E> filter)`)

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

:::tip 참고자료
<https://palpit.tistory.com/673>
<https://www.concretepage.com/java/jdk-8/java-8-list-example-with-foreach-removeif-replaceall-and-sort>
:::

## `andThen()` 과 `compose()` 의 디폴트 메서드

`andThen()` 과 `compose()` 메서드는 두개의 Functional Interface 를 순차적으로 연결하고 첫번째 처리 결과를 두번째 매개값으로 전달하여 최종 결과값을 얻을때 사용한다.

`andThen()` 과 `compose()` 메서드는 처리순서에 따라 다르다.

```java
InterfaceAB = InterfaceA.compose(Interface B)
Output = InterfaceAB.method()
```

@flowstart
stage1=>operation: Interface AB
stage2=>operation: Interface A
stage3=>operation: Interface B
stage4=>operation: Output
sub=>subroutine: andThen()

stage1(right)->stage2(right)->sub(right)->stage3(right)->stage4
@flowend

```java
InterfaceAB = InterfaceA.compose(Interface B)
Output = InterfaceAB.method()
```

@flowstart ant
stage1=>operation: Interface AB
stage2=>operation: Interface B
stage3=>operation: Interface A
stage4=>operation: Output
sub=>subroutine: compose()

stage1(right)->stage2(right)->sub(right)->stage3(right)->stage4
@flowend

|Types|Functional Interface|andThen()|compose()|
|:-:|:-|:-:|:-:|
|Consumer|`Consumer<T>`|O||
||`BiConsumer<T, U>`|O||
||`DoubleConsumer`|O||
||`IntConsumer`|O||
||`LongConsumer`|O||
|Function|`Function<T, R>`|O|O|
||`BiFunction<T, U, R>`|O||
|Operator|`BinaryOperator<T>`|O||
||DoubleUnaryOperator|O|O|
||IntUnaryOperator|O|O|
||LongUnaryOperator|O|O|

## `and()` `or()` `negate()` 디폴트 메소드와 `isEqual()` 정적 메소드

두 개 이상의 `Predicate` 연산을 생성합니다.

```java
public static void main(String[] args) {
  IntPredicate predicateA = a -> a % 2 == 0;
  IntPredicate predicateB = b -> b % 3 == 0;

  boolean result;
  IntPredicate predicateAB = predicateA.and(predicateB);
  result = predicateAB.test(9);
  System.out.println("9는 2와 3의 배수입니까? : " + result);

  predicateAB = predicateA.or(predicateB);
  result = predicateAB.test(9);
  System.out.println("9는 2또는 3의 배수입니까? : " + result);

  predicateAB = predicateA.negate();
  result = predicateAB.test(9);
  System.out.println("9는 홀수입니까? : " + result);
}
```

다음은 `isEquals()` 를 이용한 문자열 비교이다.

```java
public static void main(String[] args) {
  Predicate<String> predicate;

  predicate = Predicate.isEqual(null);
  System.out.println("null, null: " + predicate.test(null));

  predicate = Predicate.isEqual("Java");
  System.out.println("Java, null: " + predicate.test(null));

  predicate = Predicate.isEqual(null);
  System.out.println("null, Java: " + predicate.test("Java"));

  predicate = Predicate.isEqual("Java");
  System.out.println("Java, Java: " + predicate.test("Java"));
}
```

```bash
null, null: true
Java, null: false
null, Java: false
Java, Java: true
```

:::tip 참고자료
<https://palpit.tistory.com/674>
:::
