# Interface

## Marker Interface

마커 인터페이스의 특징은 다음과 같다.

* 메서드 선언이 없는 인터페이스이다.
* 대표적으로는 `Serializable` 과 `Cloneable` 이 있다.

> 어노테이션으로도 사용가능하다.

:::tip 참고자료
<https://programmingfbf7290.tistory.com/entry/안드로이드-마커Marker-인터페이스-어노테이션Annotation-활용>
:::

## Cloneable

클래스가 `Cloneable` 인터페이스를 구현함으로써 `Object.clone()` 메서드가 해당 클래스의 인스턴스에 대한 필드 복사본을 만들수 있음을 나타낸다.

`Cloneable` 인터페이스에는 `clone` 메소드가 포함되어 있지 않으며 `clone` 인터페이스를 구현한다는 사실만으로도 객체의 복사를 보장할 수 없다.

이는 `Object` 클래스에 정의되어 있는 아래 메서드를 `public` 으로 재정의 하여 사용해야 한다.

```java
protected native Object clone() throws CloneNotSupportedException;
```

원본 `Object` 클래스의 `clone()` 메서드는 `protected` 메서드이기 때문에 외부 패키지 클래스에서 호출할 수 없다.

::: tip 배열의 `clone` 메서드
이와 예외적으로 배열의 `clone` 은 런타임 타입과 컴파일시 타입 모두가 원본 배열과 동일한 배열을 반환한다.  
사실상 `clone` 메서드를 완벽하게 사용하는 _**유일한 예**_ 이다.
:::

:::tip 참고자료
<https://gyrfalcon.tistory.com/entry/Java-Tip-clone과-Cloneable>
:::

## Map

**Spac**

```java
Interface Map <K, V>
```

**Type Parameters**

* K
  * 키의 유형
* V
  * 값의 유형

**Implementing Classes**

`HashMap` `HashTable` `EnumMap` `ConcurrentHashMap` `TreeMap` `WeakHashMap`

**Since**

[1.2](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)

---

키를 값에 매핑하는 객체 입니다.

중복된 키를 값에 매핑할 수 없으며 각 키는 최대 한개의 값에만 매핑이 가능 합니다.

`Map` 인터페이스는 세가지의 컬렉션 뷰를 제공합니다. (키 집합, 값의 집합, 키 & 값의 집합)

`TreeMap` 클래스와 같은 일부 `Map` 인터페이스의 구현체들은 순서를 보장한다.

## AutoCloseable

**Since**

[1.7](https://docs.oracle.com/javase/8/docs/api/java/lang/AutoCloseable.html)

---

향샹된 예외처리문으로 입출력 처리시 예외가 발생하면 JVM 이 자동으로 `close` 메소드를 호출하여 자원을 반납시켜 줍니다.

파일 또는 소켓 핸들 등의 자원들을 종료할 때까지 보관하는 객체이다.  
AutoCloseable 객체의 `close` 메소드는 `try-with-resources` 블럭을 종료할 때 자동으로 호출 된다.

이 구조는 리소스의 고갈 및 다른 예외들까지 발생할 수 있는 에러들의 해소를 즉각적으로 보장한다.

이때 `try()` 구문안에는 `AutoCloseable` 인터페이스를 구현한 객체여야 한다.

> _**try-finally**_ 보다는 _**try-with-resources**_ 를 사용

```java
public class MyResource implements AutoCloseable {
  public void close() throws Exception {
    System.out.println("Closeing!");
  }
}
```

```java
try (MyResource res = new MyResource()){
  // use the code
}
```

:::tip 참고자료
<https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary>
:::

## Comparable

정렬 수행시 기본적으로 적용이 되는 정렬기준 메서드를 정의하는 인터페이스

`Comparable` 인터페이스를 구현시에 `compareTo()` 를 오버라이드 하여 구현한다.

`compareTo()` 메서드의 작성 규칙은 다음과 같다.

* `<` : 음수 반환
* `>` : 양수 반환
* `==` : 0 반환

이후 `Arrays.sort()` 혹은 `Collections.sort()` 를 통하여 정렬

```java
// x좌표가 증가하는 순, x좌표가 같으면 y좌표가 감소하는 순으로 정렬하라.
class Point implements Comparable<Point> {
    int x, y;

    @Override
    public int compareTo(Point p) {
        if(this.x > p.x) {
            return 1; // x에 대해서는 오름차순
        }
        else if(this.x == p.x) {
            if(this.y < p.y) { // y에 대해서는 내림차순
                return 1;
            }
        }
        return -1;
    }
}
```

```java
List<Point> pointList = new ArrayList<>();
pointList.add(new Point(x, y));
Collections.sort(pointList);
```

:::tip 참고자료
<https://gmlwjd9405.github.io/2018/09/06/java-comparable-and-comparator.html>
:::