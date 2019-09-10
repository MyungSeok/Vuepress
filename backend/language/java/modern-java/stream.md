# Stream <Badge text="JavaSE8+" />

`Stream` 은 Java 8 에서 지원하는 `Lambda` 를 이용한 기술이다.

스트림은 `Array` 혹은 `Collection Instance` 를 이용하여 사용하며 기존의 `for` / `foreach` 문을 돌면서 하나씩 꺼내서 다루는 방법은 코드의 양이 많아져 여러 로직이 섞이게 되고 메서드를 나눌경우 루프를 여러번 도는 경우가 발생될 수 있다.

스트림은 데이터의 흐름이며 `Array` 또는 `Collection Instance` 의 함수 여러개를 조합해서 원하는 결과를 필터링하고 가공된 결과를 얻을수 있다.

가장 큰 장점은 병렬처리 (multi-threading) 이 가능하여 하나의 작업을 둘 이상의 작업으로 작게 나눠 동시에 처리하는 병렬처리가 가능하다.  
Thread 를 이용하여 많은 요소들을 빠르게 처리 가능하다.

## Stream Lifecycle

@flowstart
stage1=>operation: 생성
stage2=>operation: 매핑
stage3=>operation: 필터링
stage4=>operation: 필터링
stage5=>operation: 조합

stage1(right)->stage2(right)->stage3(right)->stage4(right)->stage5
@flowend

## 생성 하기

`Stream Instance` 를 생성하는 과정으로 최초의 `Array` 혹 `Collction Instance` 를 이용하여 생성할 수 있다.

### Array Stream

```java {2}
String[] arrayStr = new String[]{"a", "b", "c"};
Stream<String> stream = Arrays.stream(arrayStr);

stream.forEach(System.out::println); // [a, b, c]
```

```java {2}
String[] arrayStr = new String[]{"a", "b", "c"};
Stream<String> streamOfPart = Arrays.stream(arrayStr, 1, 3);

streamOfPart.forEach(System.out::println); // [b, c]
```

### Collection Stream

```java {3,4}
List<String> list = Arrays.asList("a", "b", "c");

Stream<String> stream = list.stream();
Stream<String> parallelStream = list.parallelStream(); // 병렬처리 스트림
```

### 기본 타입형 스트림

```java
IntStream intStream = InsStream.range(1, 5); // [1, 2, 3, 4]
LongStream intStream = LongStream.range(1, 5); // [1, 2, 3, 4, 5]
```

제네릭을 사용하지 않기 때문에 불필요한 Auto-Boxing 이 일어나지 않는다.  
필요한 경우 `boxed` 메서드를 이용하여 박싱하여 사용한다.

```java
Stream<Integer> boxedIntStream = IntStream.range(1, 5).boxed();
```

### 문자열 스트림

각 문자를 `char` 로 IntStream 으로 변환한다.

```java
IntStream charsStream = "Stream".chars(); //[83, 116, 114, 101, 97, 109]
```

정규표현식을 이용하여 각 요소들을 구성한다.

```java
Stream<String> regExStream = Pattern.compile(", ").splitAsStream("Eric, Elena, Java");  // [Eric, Elena, Java]
```

### 파일 스트림

해당 파일의 각 라인을 스트림으로 만들어준다.

```java
Stream<String> lineStream = File.lines(Paths.get("file.txt"), Charset.forName("UTF-8"));
```

### 병렬 스트림

일반적으로 스트림을 생성하는 `stream` 메서드 대신 `parallelStream` 메서드를 사용하여 병렬 스트림을 쉽게 생성할 수 있다.

```java
// 병렬 스트림 생성
Stream<Product> parallelStream = productList.parallelStream();

// 병렬 여부 확인
boolean isParallel = parallelStream.isParallel();
```

아래 코드는 각 작업을 쓰레드를 이용하여 병렬처리 됩니다.

```java
boolean isMany = parallelStream
  .map(product -> product.getAmount() * 10)
  .anyMatch(amount -> amount > 200);
```

다음은 배열을 이용하여 병렬 스트림을 생성하는 경우입니다.

```java
Arrays.stream(array).parallel();
```

컬렉션과 배열이 아닌 경우에도 `parallel` 메서드를 이용해 처리한다.

```java
IntStream intStream = IntStream.range(1, 150).parallel();
boolean isParallel = intStream.isParallel();
```

다시 시퀀셜 (Sequential) 모드로 돌리고 싶다면 `sequential` 메서드를 사용한다.

```java
IntStream intStream = intStream.sequential();
boolean isParallel = intStream.isParallel();
```

### 그 외 방법

**비어있는 스트림**

Stream 요소가 없을때 `null` 대신 사용

```java
public Stream<String> streamOf(List<String> list) {
  return (list == null || list.isEmpty())
    ? Stream.empty()
    : list.stream()
}
```

**Stream.builder()**

빌더 (Builder) 를 사용하여 스트림에 직접적으로 원하는 값을 넣을수 있다.  
마지막으로 `builder` 메서드로 스트림을 리턴한다.

```java
Stream<String> builder = Stream.<String>builder()
  .add("Eric").add("Elena").add("Java")
  .build();
```

**Stream.generate**

스트림의 크기가 지정되지 않고 무한히 확장하니 `limit` 으로 크기를 제한해줘야 한다.

```java
Stream<String> generatedStream = Stream.generate(() -> "gen").limit(5); // [gen, gen, gen, gen, gen]
```

**Stream.iterate()**

```java
Stream<Integer> iteratedStream = Stream.iterate(30, n -> n + 2).limit(5); // [30, 32, 34, 36, 38]
```

### 스트림 연결하기

`Stream.concat` 두 개의 스트림을 연결해서 새로운 스트림을 생성한다.

```java
Stream<String> stream1 = Stream.of("Java", "Scala", "Groovy");
Stream<String> stream2 = Stream.of("Python", "Go", "Swift");

Stream<String> concatStream = Stream.concat(stream1, stream2);
// [Java, Scala, Groovy, Python, Go, Swift]
```

## 가공하기

### Filtering

스트림내의 요소들을 걸러내는 작업입니다.

인자로 받는 `Predicate` 는 `boolean` 타입을 반환하는 함수형 인터페이스로 평가식이 들어가게 됩니다.

```java
Stream<String> stream = names.stream()
  .filter(name -> name.contains("a"));
  // [Elena, Java]
```

각 요소에서 "a" 문자열이 들어간 이름만 들어간 스트림이 반환됩니다.

### Mapping

스트림내의 요소들을 하나씩 특정 값으로 반환해줍니다.

```java
Stream<String> stream = names.stream()
  .map(String::toUpperCase);
  // [ERIC, ELENA, JAVA]
```

아래와 같이 객체 요소에서 꺼내올수도 있습니다.

```java
Stream<Integer> stream = productList.stream()
  .map(Product::getAmount);
  // [23, 14, 13, 23, 13]
```

`flatMap` 은 중첩구조를 제거한 후 작업할 수 있습니다.

```java
List<List<String>> list = Arrays.asList(
  Arrays.asList("a"),
  Arrays.asList("b")
); // [[a], [b]]
```

```java
List<String> flatList = list.stream()
  .flatMap(Collection::stream)
  .collect(Collectors.toList());
  // [a, b]
```

실제로 적용시에는 아래 예시와 같이 사용합니다.

```java
students.stream()
  .flatMapToInt(student -> IntStream.of(student.getKor(), student.getEng(), student.getMath()))
  .average().ifPresent(avg -> System.out.println(Math.round(avg * 10)/10.0));
```

### Sorting

정렬방법은 다른 정렬과 마찬가지로 `Comparator` 을 이용한다.

인자 없이 호출할 경우 오름차순으로 정렬합니다.

```java {2}
IntStream.of(14, 11, 20, 39, 23)
  .sorted()
  .boxed()
  .collect(Collectors.toList());
  // [11, 14, 20, 23, 39]
```

문자열 리스트를 알파멧 순서대로 정렬하는 코드예시는 다음과 같다.

```java
List<String> lang =
  Arrays.asList("Java", "Scala", "Groovy", "Python", "Go", "Swift");

// 오름차순
lang.stream()
  .sorted()
  .collect(Collectors.toList());  // [Go, Groovy, Java, Python, Scala, Swift]

// 내림차순
lang.stream()
  .sorted(Comparator.reverseOrder())
  .collect(Collectors.toList());  // [Swift, Scala, Python, Java, Groovy, Go]
```

문자열 길이를 기준으로 정렬하는 코드예시는 다음과 같다.

```java
lang.stream()
  .sorted(Comparator.comparingInt(String::length))
  .collect(Collectors.toList());  // [Go, Java, Scala, Swift, Groovy, Python]

lang.stream()
  .sorted((s1, s2) -> s2.length() - s1.length())
  .collect(Collectors.toList());  // [Groovy, Python, Scala, Swift, Java, Go]
```

### Iterating

스트림내의 요소들을 각각의 대상으로 _**특정 연산을 수행하지 않는**_ 메서드로는 `peek` 이 있다.

`peek` 은 그냥 확인만 해보는 메서드로 특졍 결과를 반환하지 않는 함수형 인터페이스 `Consumer` 를 인자로 받는다.

```java
int sum = IntStream.of(1, 3, 5, 7, 9)
  .peek(System.out::println)
  .sum();
```

## 조합하기

### Calculating

최대, 최소, 합계, 평균 등 기본형 타입으로 다양한 결과를 만들어낼 수 있다.

```java
long count = IntStream.of(1, 3, 5, 7, 9).count();
long sum = LongStream.of(1, 3, 5, 7, 9).sum();
```

스트림이 비어있는 경우 `count` 와 `sum` 은 0 을 출력하면 되지만  
평균, 최대, 최소인 경우에는 표현불가하기 때문에 [Optional](/backend/language/java/modern-java/optional) 을 이용하여 리턴한다.

```java
OptionalInt min = IntStream.of(1, 3, 5, 7, 9).min();
OptionalInt max = IntStream.of(1, 3, 5, 7, 9).min();
```

스트림에서 `ifPresent` 메서드를 이용해서 Optional 을 처리할 수 있다.

```java
DoubleStream.of(1.1, 2.2, 3.3, 4.4, 5.5)
  .average()
  .ifPresent(System.out::println);
```

### Reduction

스트림에서 `reduce` 메서드를 이용할 수 있다.  
`reduce` 메서드는 총 세가지의 파라미터를 받을수 있다.

* accmulator
  * 각 요소를 처리하는 계산 로직
  * 각 요소가 중간결과를 처리하여 생성하는 로직
* identity
  * 계산을 위해 초기값
* combiner
  * 병렬 스트림에서만 사용가능하며 계산결과를 합치는 로직

```java
OptionalInt reduced = IntStream.range(1, 4) // [1, 2, 3]
  .reduce((a, b) -> {
    return Integer.sum(a, b);
  }); // 6 (1 + 2 + 3)
```

```java
int reducedTwoParams = IntStream.range(1, 4) // [1, 2, 3]
  .reduce(10, Integer::sum); // 16 (10 + 1 + 2 + 3)
```

```java
Integer reducedParallel = Arrays.asList(1, 2, 3)
  .parallelStream()
  .reduce(10,
    Integer::sum,
    (a, b) -> {
      System.out.println("combiner was called");
      return a + b;
    }); // 36 (10 + 1 = 11, 10 + 2 = 12, 10 + 3 = 13)
```

### Collecting

스트림을 종료하는 또다른 작업으로 `Collector` 타입의 인자를 받아서 처리한다.

**Collectors.toList()**

스트림에서 작업한 결과를 리스트로 반환한다.

```java
List<String> collectorCollection = productList.stream()
  .map(Product::getName)
  .collect(Collectors.toList());
// [potatoes, orange, lemon, bread, sugar]
```

**Collectors.joining()**

스트림에 작업한 결과를 하나의 문자열로 이어 붙인다.

```java
String listToString = productList.stream()
  .map(Product::getName)
  .collect(Collectors.joining());
// potatoesorangelemonbreadsugar
```

* delimiter
  * 각 요소 중간에 들어가 요소를 구분시켜주는 구분자
* prefix
  * 결과 맨 앞에 붙는 문자
* suffix
  * 결과 맨 뒤에 붙는 문자

```java
String listToString = productList.stream()
  .map(Product::getName)
  .collect(Collectors.joining(", ", "<", ">"));
// <potatoes, orange, lemon, bread, sugar>
```

**Collectors.averageingInt()**

숫자값의 평균 (avg) 을 낸다.

```java
Double averageAmount = productList.stream()
  .collect(Collectors.averagingInt(Product::getAmount));
// 17.2
```

**Collectors.summingInt()**

숫자값의 합 (sum) 을 낸다.

```java
Integer summingAmount = productList.stream()
  .collect(Collectors.summingInt(Product::getAmount));
// 86
```

```java
Integer summingAmount = productList.stream()
  .mapToInt(Product::getAmount)
  .sum(); // 86
```

**Collectors.summarizingInt()**

개수, 합계, 평균, 최소, 최대의 값을 일괄적으로 반환한다.

```java
IntSummaryStatistics statistics = productList.stream()
  .collect(Collectors.summarizingInt(Product::getAmount));
```

```java
IntSummaryStatistics {count=5, sum=86, min=13, average=17.200000, max=23}
```

**Collectors.groupingBy()**

특정요소들로 그룹지을수 있다.

```java
Map<Integer, List<Product>> collectorMapOfLists = productList.stream()
  .collect(Collectors.groupingBy(Product::getAmount));
```

결과는 Map 타입으로 나온다.

```java
{
  23=[Product{amount=23, name='potatoes'}, Product{amount=23, name='bread'}],
  13=[Product{amount=13, name='lemon'}, Product{amount=13, name='sugar'}],
  14=[Product{amount=14, name='orange'}]
}
```

**Collectors.partitioningBy()**

`groupingBy` 에서 함수형 인터페이스 `Function` 을 이용해서 특정값을 기준으로 스트림 내의 요소들을 묶었다면  
`partitioningBy` 는 함수형 인터페이스 `Predicate` 를 받아 처리한다.

```java
Map<Boolean, List<Product>> mapPartitioned = productList.stream()
  .collect(Collectors.partitioningBy(el -> el.getAmount() > 15));
```

함수를 통해 스트림내의 요소들을 `true` 와 `false` 두가지로 나뉜다.

```java
{
  false=[Product{amount=14, name='orange'},
        Product{amount=13, name='lemon'},
        Product{amount=13, name='sugar'}],
 true=[Product{amount=23, name='potatoes'},
       Product{amount=23, name='bread'}]
}
```

n 까지의 자연수를 소수와 비 소수로 분할

```java
private boolean isPrime(int candidate) {
  int candidateRoot = (int) Math.sqrt((double) candidate);
  return IntStream.rangeClosed(2, candidateRoot).noneMatch(i -> candidate % i == 0);
}

public Map<Boolean, List<Integer>> partitionPrimes(int n) {
  return IntStream.rangeClose(2, n).boxed().collect(Collectors.partitioningBy(candidate -> isPrime(candidate)));
}

```

**Collectors.collectingAndThen()**

특정 타입의 결과를 `collect` 한 이후에 추가적인 작업이 필요할때 사용가능하다.

다음 예제는 `Collectors.toSet` 을 이용해서 결과를 `Set` 으로 `collect` 한 후  
수정불가한 `Set` 으로 변환하는 작업을 추가로 실행하는 코드이다.

```java
Set<Product> unmodifiableSet = productList
  .stream()
  .collect(Collectors.collectingAndThen(Collectors.toSet(), Collections::unmodifiableSet));
```

**Collectors.of()**

`reduce` 메서드를 동적으로 사용하여 `collect` 하는 코드이다.

```java
Collector<Product, ?, LinkedList<Product>> toLinkedList = Collector.of(LinkedList::new, 
  LinkedList::add,
  (first, second) -> {
    first.addAll(second);
    return first;
  });
```

```java
LinkedList<Product> linkedListOfPersons = productList.stream()
  .collect(toLinkedList);
```

### Matching

조건을 만족하는 결과를 체크하여 반환합니다.

```java
List<String> names = Arrays.asList("Eric", "Elena", "Java");

boolean anyMatch = names
  .stream()
  .anyMatch(name -> name.contains("a"));

boolean allMatch = names
  .stream()
  .allMatch(name -> name.length() > 3);

boolean noneMatch = names
  .stream()
  .noneMatch(name -> name.endsWith("s"));
```

### Iterating

`foreach` 는 요소를 돌면서 실행되는 최종 작업 입니다.

```java
names.stream().forEach(System.out::println);
```

:::tip 참고자료
<https://futurecreator.github.io/2018/08/26/java-8-streams/>  
<http://iloveulhj.github.io/posts/java/java-stream-api.html>  
<https://homoefficio.github.io/2016/06/26/for-loop-%EB%A5%BC-Stream-forEach-%EB%A1%9C-%EB%B0%94%EA%BE%B8%EC%A7%80-%EB%A7%90%EC%95%84%EC%95%BC-%ED%95%A0-3%EA%B0%80%EC%A7%80-%EC%9D%B4%EC%9C%A0/>  
<https://yongho1037.tistory.com/704>
:::
