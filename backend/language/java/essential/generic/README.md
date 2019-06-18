# Generics

하나 이상의 매개변수 타입 (Paramter Type) 을 선언하고 있는 클래스나 인터페이스를 제네릭 타입 이라 한다.

제네릭의 사용 코드는 다음 이점을 가진다.

**컴파일 시점에 코드를 체크**

Java 의 컴파일러는 타입의 안정이 보장된 (Typesafe) 한 코드를 지향한다.

컴파일시에 오류를 수정하는것이 런타임 시 오류를 수정하는것이 찾기 쉽기 때문이다.

**별도의 클래스 캐스팅의 제거**

제네릭의 사용한 코드와 사용하지 않는 코드를 비교해보자

```java {3}
List list = new ArrayList();
list.add("Hello");
String str = (String) list.get(0);
```

```java {3}
List<String> list = new ArrayList<>();
list.add("Hello");
String str = list.get(0);   // no cast
```

**제네릭한 프로그래밍 알고리즘의 구현**

타입이 안정적이면서 가독성이 있는 제네릭 알고리즘의 코드를 구현가능하다.
