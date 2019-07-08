
# Chapter 5 제네릭

## Item 26 로 타입은 사용하지 말라

제네릭 타입은 각각 일련의 매개변수화 타입 (parameterized type) 을 정의 한다.

제네릭 타입을 하나 정의하면 그에 딸린 로 타입 (row type) 도 함께 정의된다.  
이는 제네릭 타입에서 타입 매개변수를 전혀 사용하지 않는 때를 말한다.
로 타입은 타입 선언에서 제네릭 타입 정보가 전부 지워진 것처럼 동작하는데,  
제네릭이 도래하기전에 전 코드와 호환되도록 하기 위한 궁여지책이다.

제네릭에서 로 타입은 제네릭이 안겨주는 안정성과 표현력을 모두 일게 되기 때문에 사용이 지양되나  
제네릭 등장 이전에 사용했던 코드들이 제네릭을 지원하지 않기 때문에  
로 타입을 지원하게끔 마이그레이션 호환성을 위해 로 타입을 지원하고  
제네릭의 구현에는 소거 (erasure) 방식을 사용하기로 했다.

## Item 27 비검사 경고를 제거하라

제네릭 사용시 많은 컴파일러 경고를 제거해야 한다.

```java
// Runtime Error
Set<Lark> exaltation = new HashSet();

// Success
Set<Lark> exaltation = new HashSet<>();
```

JDK 7 부터 지원하는 다이아몬드 연산자 (`<>`) 를 사용하여 타입 추론을 사용하여 비검사 경고를 제거하자.

모든 비 검사 경고를 제거하면 타입 안정성이 보장되며 런 타임시에 `ClassCaseException` 이 발생할 일이 없다.

경고를 제거할 수 없지만 타입이 안전하다고 확신 한다면 `@SuppressWarnings("unchecked")` Annotation 을 사용하여 경고를 숨기자.

`@SuppressWarnings("unchecked")` Annotation 을 사용할때는 그 경고를 무시해도 안전한 근거를 주석으로 명시해줘야 한다.

## Item 28 배열보다는 리스트를 사용하라

아래 코드는 RuntimeException 을 반환한다.

```java
Object[] objAry = new Long[1];

// ArrayStoreException 을 반환
objAry[0] = "타입이 달라 넣을 수 없다.";
```

이는 배열이 공변타입이라 Long 용 저장소에 String 을 넣을수 없지만 컴파일시에는 알수 없다.

```java
// 호환되지 않는 타입
List<Object> = objList = new ArrayList<Long>();

objList.add("타입이 달라 넣을 수 없다.");
```

위 코드는 컴파일시에 오류를 검증 할 수 있다.

또한 배열은 _**실체화 (reify)**_ 된다.  
이는 _**배열은 런타임에도 자신이 담기로 한 원소의 타입을 인지하고 확인**_ 한다. 그래서 공변임에도 불구하고 런타임시에 서로 다른 타입을 삽입하였을때 `ArrayStoreException` 이 발생하는것이다.

이와 반대로 제네릭은 런타임시에는 데이터 타입이 소거가 되는 `Type Erasure` 현상이 발생된다. 원소타입을 컴파일시에만 검사하며 런타임에는 알 수 없다는 뜻이다.  
이 `Type Erasure` 는 제너릭이 지원되기 전의 레거시 코드와 제네릭 타입을 순조롭게 사용 가능하도록 하는 일종의 매커니즘으로 역활을 해준다.

**사용불가 제네릭 유형**

* 제네릭 타입 :: `new List<E>[]`
* 매개변수화 타입 :: `new List<String>[]`
* 타입 매개변수 :: `new E[]`

위 세가지 유형은 타입이 안전하지 않기 때문에 제네릭 배열을 만들 수 없다.

이는 `E` `List<E>` `List<String>` 와 같은 타입을 _**실체화 불가 타입 (non-reifiable type)**_ 이라고 하는데 _**실체화 되지 않아서 런타임시 컴파일 할때보다 정보량이 적게 가지는 타입**_ 을 말한다.  
소거 매커니즘 때문에 매개변수화 타입 가운데 실체화 될수 잇는 타입은 `List<?>` 와 `Map<?, ?>` 같은 비 한정 와일드카드 타입 뿐이다.  
배열을 비한정적 와일드카드 타입으로 만들수 있지만 유용하게 쓸 일이 거의 없다.

실체화 불가 타입을 사용할때는 안정된 가변인수(varags) 라는 의미로 `@SafeVarargs` Annotation 을 사용하여 대체 가능하다.

**생성자에서 컬렉션을 받은 Chooser 클래스 리펙토링**

```java
public class Chooser {
  private final Object[] choiceArray;

  public Chooser(Collection choices) {
    choiceArray = choices.toArray();
  }

  public Object choose() {
    Random rnd = ThreadLocalRandom.current();
    return choiceArray[rnd.nextInt(choiceArray.length)];
  }
}
```

`choose()` 메서드를 호출 할때마다 반환된 `Object`를 원하는 타입으로 형 반환 해야 하기 때문에 타입이 다른 원소가 들어있으면 형 변환 오류가 난다  
때문에 해당 클래스를 제네릭으로 변환한다.

```java {4,5,6}
public class Chooser<T> {
  private final T[] choiceArray;

  public Chooser(Collection<T> choices) {
    choiceArray = choiceArray.toArray();
  }

  // choose 메서드는 그대로
}
```

`Object[]` 가 `T[]` 으로 변환 되지 않기 때문에 명시적으로 캐스팅 해준다.

```java {5}
public class Chooser<T> {
  private final T[] choiceArray;

  public Chooser(Collection<T> choices) {
    choiceArray = (T[]) choiceArray.toArray();
  }

  // choose 메서드는 그대로
}
```

`T[]` 가 무슨 타입인지 알 수 없으니 형 변환이 런타임에 안전함을 보장할수 없다는 경고가 뜬다.

비검사 형 변환 경고이기 때문에 배열 대신 리스트를 사용한다.

```java {5,10}
public class Chooser<T> {
  private final List<T> choiceList;

  public Chooser(Collection<T> choices) {
    choiceList = new ArrayList<>(choices);
  }

  public T choose() {
    Random rnd = ThreadLocalRandom.current();
    return choiceList.get(rnd.nextInt(choiceList.size()));
  }
}
```

코드량은 조금더 늘었고 아마도 조금더 느리지만,  
런타임에 `ClassCastException` 이 발생될 리스크가 줄었다.

:::tip 핵심 정리
배열은 **공변** 이고 **실체화** 되는 반면,  
제네릭은 **불공변** 이고 **타입 정보가 소거** 된다.

**배열은 런타임에는 타입이 안전** 하지만 **컴파일 타임에는 안전하지 않다.**  
**제네릭은 이와 반대** 여서 그 둘을 섞어 쓰기란 쉽지 않다.

둘을 섞어 쓰다 컴파일 오류나 경고를 만나면 가장 먼저 **배열을 리스트로 대체하는 방법을 적용** 해보자.
:::

## Item 29 이왕이면 제네릭 타입으로 만들라

클라이언트에서는 직접 형 변환해야 하는 타입보다 제네릭 타입이 더 안전하고 쓰기 편하다.

새로운 타입을 설계할 때는 형 변환 없이도 사용할 수 있도록 제네릭 타입으로 만들어야 할 경우가 많다.

다음은 `Stack` 클래스는 제네릭 타입으로 리펙토링 하는 과정이다.

```java
public class Stack {
  private Object[] elements;
  private int size = 0;
  private static final int DEFAULT_INITIAL_CAPACITY = 16;

  public Stack() {
    elements = new Object[DEFAULT_INITAL_CAPACITY];
  }

  public void push(Object e) {
    ensureCapacity();
    elements[size++] = e;
  }

  public Object pop() {
    if (size == 0)
      throw new EmptyStackException();
    Object result = elements[--size];

    // 사용이 끝난 참조를 해제
    elements[size] = null;

    return result;
  }

  public boolean isEmpty() {
    return size == 0;
  }

  private void ensureCapacity() {
    if (elements.length == size)
      elements = Arrays.copyOf(elements, 2 * size + 1);
  }
}
```

`Object` 를 제네릭 타입으로 변경한다.

```java {2,7,15,18}
public class Stack<E> {
  private E[] elements;
  private int size = 0;
  private static final int DEFAULT_INITAL_CAPACITY = 16;

  public Stack() {
    elements = new E(DEFAULT_INITAL_CAPACITY);
  }

  public void push(E e) {
    ensureCapacity();
    elements[size++] = e;
  }

  public E pop() {
    if (size == 0)
      throw new EmptyStackException();
    E result = elements[--size];

    // 사용이 끝난 참조 해제
    elements[size] = null;

    return result;
  }
}
```

아래와 같은 `E` 는 실체화 불가 타입으로 배열을 만들수 없어 아래와 같은 에러를 뱉는다.

```java {2}
Stack.java:8: generic array creation
  elements = new E[DEFAULT_INITIAL_CAPACITY];
```

이 경고는 비검사 형변환이 프로그램의 안정성을 해칠수 있다는 의미이므로 스스로 확인해야 한다.

* 배열의 `elements` 는 `private` 필드에 저장된다.
* Client 로 반환되거나 다른 메서드에 전달되는 일이 전혀 없다.
* `push()` 메서드를 통해 배열에 저장되는 원소의 타입은 항상 E 다.

항상 위 3가지 조건을 만족하므로 이 코드의 비검사 형변환은 안전하다.  

아래와 같이 제네릭 배열 생성을 금지하는 제약을 우회하는 방법으로  
`Object` 배열을 생성한 다음 제네릭 배열로 형변환 하는 방법이 있다.  
하지만 이는 _**오류대신 경고**_ 를 내보낸다.

아래 코드와 같이 생성자 메서드를 `@SuppressWarnings("unchecked")` 애너테이션으로 해당 경고를 숨긴다.  
배열 `elements` 은 `push(E)` 로 넘어온 인스턴스 `E` 만 담는다.

```java
@SuppressWarnings("unchecked")
public Stack() {
  elements = (E[]) new Object[DEFAULT_INITAL_CAPACITY];
}
```

위 코드는 타입의 안정성을 보장하지만 이 배열의 런타입은 `E[]` 가 아닌 `Object[]` 이다.

아래와 같이 배열 객체 `elements` 형변환 할 수 없다는 에러가 뜬다.

```java
Stack.java:19: incompatible types found: Object, required: E
  E result = elements[--size];
```

배열이 반환한 원소를 `E` 로 형변환 하면 오류대신 경고가 뜬다.

```java
Stack.java:19: warning: [unchecked] unchecked cast found: Object, required: E
  E result = (E) elements[--size];
```

위 코드에서의 경고 `E` 는 실체화 불가 타입이므로 런타임에 이루어지는 형변환이 안전한지 증명할 방법이 없다.  
하지만 `push()` 메서드에서는 `E` 타입만 허용하므로 위 형변환은 안전하다.

형변환이 안전하다 생각이 들면 비검사 경고를 숨긴다.

```java
public E pop() {
  if (size == 0)
    throw new EmptyStackException();

  @SuppressWarnings("unchecked")
  E result = (E) elements[--size];

  // 사용이 끝난 참조를 해제
  elements[size] = null;
  return result;
}
```

[Item 28](#item-28-배열보다는-리스트를-사용하라) 에서의 배열보다는 리스트를 우선하라는 상황에 따라 다르며  
제네릭 타입 안에서 리스트를 사용하는게 항상 가능하지도 더 좋은 방법이 아닐수도 있다.

자바가 리스트를 기본타입으로 제공하지 않으므로 `ArrayList` 와 같은 제네릭 타입도 결국은 기본 타입인 배열을 사용해 구현해야 하는 경우도 있다.

`HashMap` 과 같은 제네릭 타입은 성능을 높일 목적으로 배열을 사용하기도 한다.

제네릭 타입은 타입 매개변수에 어떠한 제약을 두고 있지는 않지만 기본타입은 사용할 수 없다.  
가령 `Stack<int>` `Stack<double>` 을 만드려고 하면 컴파일 오류가 난다.  
이는 자바의 근몬적인 문제이나, 박싱된 기본타입을 사용하여 우회가 가능하다.

혹은 타입 매개변수의 제약을 두어 사용하는 방법도 있다. (한정적 타입 매개변수)
예를 들면 [java.util.concurrent.DelayQueue](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/DelayQueue.html) 과 같이 `DelayQueue` 자신과 `DelayQueue` 의 원소를 사용하는 `Delayed` 클래스에서 `ClassCastException` 걱정 할 필요 없이 사용 가능하다.

## Item 30 이왕이면 제네릭 메서드로 만들라

클래스와 마찬가지로 메서드도 제네릭으로 만들수 있다.

매개변수화 타입을 받는 정적 유틸리티 메서드는 제네릭으로 대표적으로 `Collections` 의 알고리즘 메서드는 모두 제네릭 메서드이다.

```java {2,3}
public static Set union(Set s1, Set s2) {
  Set result = new HashSet(s1);
  result.addAll(s2);
  return result;
}
```

위 코드는 컴파일은 되지만 경고가 두개가 발생한다.

```java
Union.java:5: warning: [unchecked] unchecked call to HashSet(Collection<? extends E>) as a member of raw type HashSet
  Set result = new HashSet(s1);
```

```java
Union.java:6: warning: [unchecked] unchecked call to addAll(Collection<? extends E>) as a member of raw type Set
  result.addAll(s2);
```

위 경고는 메서드 타입의 안정성을 보장해야 한다.

```java {1,2}
public static <E> Set<E> union(Set<E> s1, Set<E> s2) {
  Set<E> result = new HashSet<>();
  result.addAll(s2);
  return result;
}
```

단순한 제네릭 메서드라면 위 코드정도가 적당하다.  
이 메서드는 경고 없이 컴파일 되며, 안전하고 쓰기도 쉽다.

```java
public static void main(String[] args) {
  Set<String> guys = Set.of("톰", "딕", "해리");
  Set<String> stooges = Set.of("래리", "모에", "컬리");
  Set<String> aflCio = union(guys, stooges);
  System.out.println(aflcio);
}
```

위 프로그램을 실행시켰을때의 결과는 아래와 같다.

```bash
[모에, 톰, 해리, 래리, 컬리, 딕]
```

_**항등함수**_ 란 입력값을 수정없이 그대로 반환하는 특별한 함수로  
이를 이용한 제네릭 싱글턴 방식를 만들면 아래의 예시와 같다.

```java {3}
public static UnaryOperator<Object> IDENTITY_FN = (t) -> t;

@SuppressWarning("unchecked")
public static <T> UnaryOperator<T> identityFunction() {
  return (UnaryOperator<T>) IDENTITY_FN
}
```

위 비검사 경고 애너테이션은 `T` 가 어떤 타입이든 `UnaryOperator<Object>` 는 `UnaryOperator<T>` 가 아니기 때문이다 (타입 소거)

하지만 항등 함수는 `T` 가 어떤 타입이든 입력 값을 그대로 반환하기 때문에 `UnaryOperator<T>` 를 사용해도 안전하다.

## Item 31 한정적 와일드카드를 사용해 API 유연성을 높이라

매개변수화 타입 (Parameterized Types) 은 불공변 (invariant) 이다.

와일드카드 타입을 사용하지 않은 `pushAll()` 메서드는 결함이 있다.

```java
public void pushAll(Iterable<E> src) {
  for (E e : src) {
    push(e);
  }
}
```

`Integer` 는 `Number` 의 하위타입이니 잘 동작 해야 한다. (리스코프 치환 법칙)

```java {3}
Stack<Number> numberStack = new Stack();
Iterable<Integer> integers = ...;
numberStack.pushAll(integers);
```

하지만 아래와 같이 오류 메세지가 뜬다.  
_**매개변수화 타입이 불공변이기 때문**_ 이다.

```java
StackTest.java:7: error: incompatible types: Iterable<Integer> cannot be converted to Iterable<Number>
  numberStack.pushAll(integers);
```

위 에러를 고치기 위해서 자바는 _**한정적 와일드 카드 타입이라는 특별한 매개변수화 타입을 지원**_ 한다.  
`pushAll()` 의 입력 매개변수 타입은 `E` 의 `Iterable` 이 아니라 `E` 의 하위 타입의 `Iterable` 이여야 하며 와일드 카드의 타입은 `Iterable<? extends E>` 이 되어야 한다.  

**생산자 (Producer) 에 의한 매개변수화 타입을 적용**

```java {1}
public void pushAll(Iterable<? extends E> src) {
  for (E e : src) {
    push(e);
  }
}
```

`popAll()` 메서드 또한 와일드카드의 미적용으로 인해 결함이 생긴다.

```java
Stack<Number> numberStack = new Stack<>();
Collection<Object> objects = ...;
numberStack.popAll(objects);
```

위 코드를 컴파일 하면 _**`Collection<Object>` 는 `Collction<Number>` 의 하위타입이 아니다**_ 라는 메세지와 함께 오류가 발생한다.  
이 경우에도 한정적 와일드카드 타입을 적용하여 해결한다.

`popAll()` 의 입력 매개변수 타입이 `E` 의 Collection 이 아니라 `E` 의 상위 타입의 Collection 이여야 하며 와일드 카드의 타입은 `Collection<? super E>` 가 되어야 한다.

**소비자 (Consumer) 매개변수에 와일드카드 타입을 적용**

```java {1}
public void popAll(Collection<? super E> dst) {
  while(!isEmpty())
    dst.add(pop());
}
```

:::tip PECS
위와 같은 패턴을 PECS (Producer Extends & Consumer Super) 라고 하며 매개변수를 유연성있게 와일드카드를 사용하게끔 도와준다.  
매개변수화 타입 `T` 생산 및 소비에 맞게 한정적 와일드 카드가 분리된다.
* 생산자 : `<? extends T>`
* 소비자 : `<? super T>`
:::

## Item 32 제네릭과 가변인수를 함께 쓸 때는 신중하라

실체화 불가 타입 (non-reifiable type) 은 런타임에는 컴파일 타임보다 타입관련 정보를 적게 담고 있다.

메서드를 선언할 때 실체화 불가 타입으로 `varargs` 매개변수를 선언하면 컴파일러가 경고를 보낸다.

```bash
warning: [unchecked] Possible heap pollution from
  parameterized vararg type List<String>
```

매개변수화 타입 (parameterized type) 의 변수가 다른 객체를 참조하면 힙 (heap) 오염이 발생한다는 의미로  
다른 타입의 객체를 참조하는 상황에서 컴파일러가 자동 생성한 형변환이 실패할 수 있다.

제네릭 가변인수 (varargs) 배열 매개변수에 값을 저장하는것은 안전하지 않다.  
아래 예제를 보자

```java {4,5}
static void dangerous(List<String>... stringLists) {
  List<Integer> intList = List.of(42);
  Object[] objects = stringLists;
  objects[0] = intLists;            // 힙 오염 발생
  String s = stringLists[0].get(0)  // ClassCastException - 형 변환 발생
}
```

자바에서는 위 같은 위험성을 인지하고도 대표적으로 아래와 같은 메서드를 제공한다.

* `Array.asList(T... a)`
* `Collections.addAll(Collection<? super T> c, T... elements)`
* `EnumSet.of(E first, E... rest)`

제네릭이나 혹은 매개변수화 타입의 가변인수 (varargs) 타입의 매개변수를 받는 모든 메서드에서는 `@SafeVarargs` 를 달아줘야 한다.

이는 가변인수 (varargs) 타입의 매개변수 배열에 아무것도 저장해선 안되며, 그 배열 혹은 복제본을 신뢰할 수 없는 코드에 노출하는 않는것이 원칙이다.

## Item 33 타입 안전 이종 컨테이너를 고려하라

컨테이너 대신 키를 매개변수화 시키고, 컨테이너에 값을 넣거나 뺄 때 매개변수화 한 키를 함께 제공한다.

```java
public class Favorites {
  public <T> void putFavorite(Class<T> type, T instance);
  public <T> T getFavorite(Class<T> type);
}
```

```java
public static void main(String[] args) {
  Favorites f = new Favorites();

  f.putFavorite(String.class, "Java");
  f.putFavorite(Integer.class, 0xcafebabe);
  f.putFavorite(Class.class, Favorites.class);

  String favoriteString = f.getFavorite(String.class);
  int favoriteInteger = f.getFavorite(Integer.class);
  Class<?> favoriteClass = f.getFavorite(Class.class);

  System.out.println("%s %x%n", favoriteString, favoriteInteger, favoriteClass.getName());
}
```

```bash
Java cafebabe Favorites
```

`Favorites` 인스턴스는 String 을 요청했는데 Integer 를 반환하는 일은 절대 없다.  
이는 모든 키의 타입이 각각 분리되어 있어 일반적인 백과 달리 여러가지 타입의 원소를 담을 수 있다.

따라서 _**`Favorites` 을 타입 안전 이종컨테이너**_ 라고 한다.

아래는 `Favorites` 의 구현이다.

```java
public class Favorites {
    private Map<Class<?>, Object> favorites = new HashMap<>();

    public <T> void putFavorite(Class<T> type, T instance) {
      favorites.put(Objects.requireNonNull(type), instance);
    }

    public <T> T getFavorite(Class<T> type) {
      return type.cast(favorites.get(type));
    }
}
```

:::tip 참고자료
<https://sjh836.tistory.com/171>
:::
