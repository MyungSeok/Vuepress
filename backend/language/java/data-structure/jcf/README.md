# 자바 콜렉션 프레임워크 (JCF) 란 ?

JCF (Java Collection Framework) 는 Java 에서 데이터를 저장하는 기본적인 자료구조들을 한곳에 모아 관리하고 편하게 사용하기 위해서 제공하는 통일된 아키텍처이다.  
JCF 의 상속 구조이며 사용용도에 따랄 `List` `Set` `Map` 으로 나뉜다.

모든 콜렉션의 상위 인터페이스로써 콜렉션들이 갖고 있는 핵심 메소드를 선언 (add, contain, isEmpty, remove, size, iterator ...)

| 인터페이스 | 구현체(클래스) | 특징 |
|:--:|:--:|---|
|List|LinkedList<br>Stack<br>Vector<br>ArrayList|순서가 있는 데이터의 집합|
|Set|HashSet<br>TreeSet|순서를 유지하지 않는 집합<br>데이터의 중복이 허용되지 않는다.|
|Map|HashMap<br>TreeMap<br>HashTable<br>Properites|키 와 값의 쌍으로 이루어진 데이터 집합이며 순서를 유지하지 않는 집합이다.<br>데이터의 중복이 허용되지 않지만 값의 중복은 허용한다.|

:::tip 참고자료  
<http://hackersstudy.tistory.com/26>
:::

`Collection` 인터페이스를 상속 받은 구현체 `List` 와 `Set` 을 기준으로 나뉜다.

<!-- ![자바 자료구조](/img/A034.png) -->

![콜렉션](/img/A051.png)

![맵](/img/A082.png)

:::tip 참고자료
<http://withwani.tistory.com/150>  
<https://www.toolsqa.com/java/data-structure/>  
<http://blog.naver.com/PostView.nhn?blogId=da91love&logNo=221006752027&categoryNo=0&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView>
:::

## 불변 컬렉션의 생성

`Java SE 9` 버전에서는 불변 컬렉션을 생성하기 위한 JCF 인터페이스에 새로운 Factory Method 가 추가되었다.

### 불변 컬렉션 ?

불변 컬렉션 (Immutable Collection) 은 아이템의 추가, 수정, 삭제가 불가능합니다.

따라서 기본 아이템을 수정 혹은 변경하려 하면 `java.lang.UnsupportedOperationException` 이 발생된다.

이는 컬렉션 생성 이후 원하지 않거나 예기치 못한 컬렉션 변경예방에 도움이 된다.

### Java SE 8 이전

```java {8}
List<String> fruits = new ArrayList<>();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Cherry");
fruits = Collections.unmodifiableList(fruits);

fruits.add("Lemon");  // java.lang.UnsupportedOperationException
```

불변 (Immutable) 리스트를 만들기 위해서는 가변 (mutable) 리스트를 먼저 만들고  
`Collections.unmodifiableList` 의 정적 메서드를 이용하여 불변 리스트로 변환시켜줘야 했다.

### Java SE 8 지원사항

**`Arrays` API**

`Arrays` 의 정적 메서드인 `asList()` 를 활용하는법이다.

```java
List<String> fruits = Arrays.asList("Apple", "Banana", "Cherry");
```

**`Stream` API**

`Stream` API 를 활용하는 법이다.

```java
List<String> fruits = Stream.of("Apple", "Banana", "Cherry")
  .collect(collectingAndThen(toList(), Collections::unmodifiableList));
```

**`Guava` API**

**Google Guava** 라이브러리를 이용하는 방법이다.

```java
import com.google.common.collect.ImmutableList;

List<String> fruits = ImmutableList.of("Apple", "Banana", "Cherry");

fruits.add("Lemon"); // UnsupportedOperationException
```

### Java SE 9 지원사항

* `List.of()`

```java
List<String> fruits = List.of("Apple", "Banana", "Cherry"); // [Apple, Banana, Cherry]

fruits.add("Lemon"); // UnsupportedOperationException
```

* `Set.of()`

중복을 허용하지 않는 인자를 넘기면 된다.

중복된 값을 넘기면 `IllegalArgumentException` 예외가 발생한다.

```java
Set<String> fruits = Set.of("Apple", "Banana", "Cherry");
```

* `Map.of()`

Key 와 Value 를 번갈아 넘긴다.

```java
// {1=Apple, 2=Banana, 3=Cherry}
Map<Integer, String> fruits = Map.of(1, "Apple", 2, "Banana", 3, "Cherry");
```

* `Map.ofEntries()`

Key 와 Value 를 묶어서 넘긴다.

```java
Map<Integer, String> fruits = Map.ofEntries(
  Map.entry(1, "Apple"),
  Map.entry(2, "Banana"),
  Map.entry(3, "Cherry")
);
```

```java
// UnsupportedOperationException
fruits.put(4, "Lemon");
```

:::tip 참고자료
<https://www.daleseo.com/java9-immutable-collections/>
:::
