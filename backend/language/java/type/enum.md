# Enum

한정된 값만 갖는 데이터 타입을 열거 타입 (Enumeration Type) 이라고 한다.

## 선언

열거 타입을 선언하기 위해서는 먼저 열거 타입의 이름을 정하고 열거 상수를 값으로 지정해야 한다.

```java
public enum Week { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY }
```

## 사용

타입 선언시 `enum` 키워드를 삽입해야 하며, String 타입 필드를 선언 해야 한다. (이때는 final private 키워드를 선언)

```java
enum Season {
  Spring("봄"), SUMMER("여름"), FALL("가을"), WINTER("겨울");

  final private String name;

  Season (String part) {
    name = part;
  }

  String getName() {
    return name;
  }
}
```

```java
class Test {
  public static void main(String arg[]) {
    show(Season.SPRING);
    show(Season.WINTER);
  }

  static void show (Season season) {
    System.out.println(season.getName());
  }
}
```

```md
봄
겨울
```

:::tip 참고자료
<https://programmer-seva.tistory.com/74>
<https://sdw8001.tistory.com/7>
:::