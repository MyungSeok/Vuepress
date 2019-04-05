# Collection

## 자바 콜렉션 프레임워크 (JCF) 란 ?

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

![자바 콜렉션](/img/A051.png)

:::tip 참고자료
<http://withwani.tistory.com/150>  
<https://www.toolsqa.com/java/data-structure/>
:::

## List

순서가 있는 `Collectaion` (삽입된 순서)  
Data 를 중복해서 포함할 수 있다.

* Linked List
* Stack
  * 후입선출 (LIFO : Last-In First-Out) 구조로 되어 있다.
* ArrayList
  * 동기화를 보장하지 않는다.
  * 배열의 동적 메모리 증가 기능을 구현한 클래스
* Vector  
  * 자동으로 동기화를 보장해 준다.
  * ArrayList 의 동기화가 보장되도록 최적화한 클래스
  * JDK 5.0 이후부터 Auto Boxing / UnBoxing 기능을 지원
* Tree Set
  * 정렬 기능을 지원 (데이터들이 자동으로 오름차순으로 정렬)

:::tip AutoBoxing
기본 데이터 타입을 Wrapper 클래스형의 객체로 자동 변환해주는 기능
:::

### Array & ArrayList 의 차이점

||Array|ArrayList|
|--|--|--|
|Resize 여부|고정크기|가변크기|

### ArrayList 와 LinkedList 의 차이점

||ArrayList|LinkedList|
|--|--|--|
|데이터 구조|인덱스 기반|이전과 다음 요소를 가르키는 포인터 기반|

## Set

집합적인 개념의 Collection  
순서의 의미가 없다.  
Data 를 중복해서 포함할 수 없다.

* Hash Set
  * Hash 기법을 사용하지만 Set 인터페이스를 구현하고 있다.
* Sorted Set
  * 정렬 기능을 지원함

## Map

`Key` 와 `Value` 의 형태로 데이터를 관리한다.

### HashMap

HashMap 은 Map 인터페이스 계열의 대표적인 클래스이며 `get`, `put` 등의 메서드를 사용하여 데이터를 관리한다.

HashMap 계열은 각각의 특징에 따라 아래와 같인 차이점으로 나뉜다.

* HashMap
  * 동기화 보장이 안된다. (Thread-not-safe)
  * Key & Value 에 Null 허용
* Hashtable
  * 동기화 보장이 된다. (Thread-safe : 멀티스레드 환경에서 안정적)
  * Key & Value 에 Null 허용 불가
* TreeMap
  * 정렬 기능을 지원함

### Hashtable & ConcurrentHashMap

`HashMap` 을 thread-safe 하도록 만든 클래스가 ConcurrentHashMap 이며, key & value 에 null 을 허용하지 않는다.  
둘 다 동기화 보장을 하는 특징이 있지만 구조적으로 작은 차이가 있다.

* Hashtable
  * `synchronized` 키워드를 Method 전체에 Lock 을 적용한다.  
  * 상대적으로 안정하지만 확장성이 떨어진다.
  * Hashtable 을 참조하는 Thread 의 갯수가 많아질수록 Lock 을 획득하기 위한 시간비용이 많이 들어 성능이 급격히 낮아진다.
* ConcurrentHashMap
  * 내부적으로 여러개의 세그먼트를 두고 각 세그먼트마다 별도의 락을 가지고 있다.
  * 동시에 데이터를 삽입, 참조 하더라도 그 데이터가 다른 세그먼트에 위치하면 서로 Lock 을 얻기 위해 경쟁하지 않는다.
  * 이러한 방식을 _**Lock Striping**_ 이라고 한다.
  * Key & Value 에 Null 허용 불가

:::tip 참고자료
<http://egloos.zum.com/Agbird/v/4849046>
:::

### HashMap 의 동작 과정

Java 에서의 HashMap 은 Key & Value 를 쌍으로 저장한다.  
이는 Hash 함수를 필요로 hashCode 를 통하여 값을 저장하고 불러내는 과정을 거친다.

HashMap 과 HashTable 은 Map 인터페이스를 구현하고 있기 때문에 HashMap 과 HashTable 의 제공하고 있는 기능은 거의 같다.  
다만 HashMap 은 _**보조해시함수 (Additional Hash Function)**_ 를 사용하고 있기 때문에 보조 해시함수를 사용하고 있지 않는 HashTable 에 비하여 해시 충돌 (Hash Colision) 이 덜 발생하고 있어 상대적으로 성능상의 이점을 보인다.

#### 보조 해시 함수

저장하려는 두 개가 같은 인덱스로 해싱 (hashing : hash 함수를 통해 계산됨을 의미) 하게 되면 같은곳에 저장할 수 없게 된다.  
때문에 해싱된 인덱스에 이미 다른 값들이 들어있다면 데이터를 저장할 다른 위치를 찾은뒤에야 저장할 수 있다.

해시 충돌을 회피하는 방법들은 다음과 같다.

* 개방 주소법 (Open Address)
  * 해시충돌이 발생하면 다른 버킷 (데이터 주소 공간) 을 찾아 자료를 삽입하는 방식
  * 비어있는 버킷을 탐색하거나 혹은 2차 해시함수를 이용하여 새로운 주소를 할당한다.
* 분리 연결법 (Seperate Chaining)
  * Java HashMap 에서 사용중인 대표적인 방식
  * ??????????

이 외에도 _**해시 버킷의 동적 확장**_ 등과 같은 방법도 있다.

:::tip 참고자료
<https://asfirstalways.tistory.com/332>  
<https://d2.naver.com/helloworld/831311>
:::