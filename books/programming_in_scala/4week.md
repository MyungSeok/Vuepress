# 4주차 (16 ~ 20 Chapter)

## Chapter 16 리스트

스칼라 프로그램에서 가장 많이 사용하는 데이터 구조는 아마 리스트이다.

리스트를 사용하는데 중요한 설계 원칙을 알아보자.

### 16.1 리스트 리터럴

```scala
val fruit = List("apples", "oranges", "pears")
val nums = List(1, 2, 3, 4)
val diag3 = List(
  List(1, 0, 1),
  List(0, 1, 0),
  List(1, 0, 1)
)
val empty = List()
```

리스트는 배열과 비슷하지만 다음 두가지 차이점이 있다.

1. 리스트는 변경이 불가능하다.
2. 리스트는 재귀적 (Linked List) 이고 배열은 평면적이다.

### 16.2 리스트 타입

리스트는 모두 동종 (homogeneous) 원소로 이루어 진다.

리스트 타입은 [공변](/backend/language/java/essential/generic/bounded_type_parameters.html#covariant-contravariant)적 특성을 따른다. (`S` 가 `T` 의 서브타입이면 `List[S]` 도 `List[T]` 의 서브타입이다.)

`Nothing` 은 모든 타입의 서브 타입이기 때문에 다음과 같은 코드도 만족한다.

```scala
val xs: List[String] = List()
```

### 16.3 리스트 생성

모든 리스트는 빌딩 블록인 `Nil` 과 `::` (콘즈: cons) 두 가지로 만들수 있다.

```scala
List("apples", "oranges", "pears")

val fruit = "apples" :: ("oranges" :: ( "pears" :: Nil ))
```

### 16.4 리스트 기본 연산

리스트의 모든 연산은 다음 세가지를 가지고 표현할 수 있다.

* head : 어떤 리스트의 첫번째 원소를 반환한다.
* tail : 어떤 리스트의 첫번째 원소를 제외한 나머지 원소로 이루어진 리스트
* isEmpty : 리스트가 비어있다면 `true` 를 반환한다.

head 와 tail 은 리스트가 비어있지 않는 경우에서만 가능하다.

### 16.5 리스트 패턴

다음은 삽입 정렬의 패턴매치를 이용한 코드이다.

```scala
def isort(xs: List[Int]): List[Int] = xs match {
    case List() => List()
    case x :: xs1 => insert(x, isort(xs1))
}

def insert(x: Int, xs: List[Int]): List[Int] = xs match {
    case List() => List(x)
    case y :: ys => if (x <= y) x :: xs 
                    else y :: insert(x, ys)
}
```

### 16.6 List 클래스의 1차 메서드

어떤 메서드가 함수를 인자로 받지 않는다면, 그 메서드를 1차 메서드 (first-order method) 라고 부른다.

#### 두 리스트 연결하기

```scala
List(1, 2) ::: List(3, 4, 5)
// List(1, 2, 3, 4, 5)

List(1, 2, 3) ::: List
// List(1, 2, 3, 4)
```

#### 분할 정복 원칙

연결 (`:::`) 은 `List` 클래스 안에 구현되어 있는 메서드이다.

하지만 리스트에 패턴 매치를 사용해 `:::` 를 직접 구현할 수도 있다.

```scala
def append[T](xs: List[T], ys: List[T]): List[T]
```

```scala
def append[T](xs: List[T], ys: List[T]): List[T] =
  xs match {
    case List() => ys
    case x :: xs1 => x :: append(xs1, ys)
}
```

#### 리스트 길이 구하기: length

`length` 메서드는 리스트의 길이를 계산한다.

```scala
List(1, 2, 3).length
// 3
```

배열과 강리 리스트의 `length` 는 비교적 비싼 연산이다.

리스트의 끝을 찾기 위해 전체 리스트를 순회해야 하기 때문이다.

때문에 `xs.isEmpty` 의 검사를 `xs.length == 0` 으로 바꾼 방식은 좋은 방식이 아니다<br/>
두 검사의 결과는 같지만 모든 리스트를 순회해야 한다는 점에서 `xs.length == 0` 은 느리다.

#### 리스트의 양 끝에 접근하기

* head : 첫번째 원소를 반환
* tail : 첫번째 원소를 제외한 모든 원소를 포함한 리스트를 반환
* init : 마지막 원소를 제외한 모든 원소를 포함한 리스트를 반환
* last : 마지막 원소 반환

```scala
val abcde = List('a', 'b', 'c', 'd', 'e')

abcde.head
// List(a)

abcde.tail
// List(b, c, d, e)

abcde.init
// List(a, b, c, d)

abcde.last
// List(e)
```

이 둘은 쌍대성 (거울연산) 이다.

#### 리스트 뒤집기: reverse

```scala
abcde.reverse
// List(e, d, c, b, a)
```

`reverse` 는 값을 변경한다기 보다는 **새로운 리스트를 생성**한다.

reverse, init, last 연산은 다음 법칙을 만족한다.

1. reverse 는 자기자신의 역이다.
  * xs.reverse.reverse 는 xs 와 같다.
2. 원소의 방향이 뒤집혔다는 점을 제외하면 reverse 는 init 을 tail 로 바꾸고 last 를 head 로 바꾼다.
  * xs.reverse.init 는 xs.tail.reverse 와 같다.
  * xs.reverse.tail 은 xs.init.reverse 와 같다.
  * xs.reverse.head 는 xs.last 와 같다.
  * xs.reverse.last 는 xs.head 와 같다.

`:::` 을 이용하여 reverse 를 구현할 수 있다.

```scala
def rev[T](xs: List[T]): List[T] = xs match {
  case List() => xs
  case x :: xs1 => rev(xs1) ::: List(x)
}
```

이 `rev` 메서드는 만족스러운 성능을 내지 못한다. (시간복잡도는 On^2)

#### 접두사와 접미사: drop, take, splitAt

* drop: 첫번째에서 n 번째 원소를 제외한 xs 리스트를 반환
* take: 첫번째에서 n 번째 원소를 반환
* splitAt: 주어진 인덱스에서 리스트를 분할해서 두 리스트를 반환

```scala
val abcde = List('a', 'b', 'c', 'd', 'e')

abcde drop 2
// List(c, d, e)

abcde take 2
// List(a, b)

abcde splitAt 2
// (List(a, b), List(c, d, e))
```

#### 원소 선택하기: apply, indices

```scala
abcde apply 2
// c

abcde(2)
// c
```

임의의 원소를 선택하는 `apply` 는 인덱스 n 의 값에 비례해서 시간이 걸린다.

`indices` 는 유효한 인덱스를 반환한다.

```scala
abcde.indices

// Range(0, 1, 2, 3, 4)
```

kotlin 에서 `for loop` 사용할때와 유사

#### 리스트의 리스트를 한 리스트로 반듯하게 만들기: flatten

`flatten` 메서드는 리스트의 리스트를 인자로 받아 하나의 리스트로 반듯하게 펼친다.

```scala
List(List(1, 2), List(3), List(), List(4, 5)).flatten
// List(1, 2, 3, 4, 5)
```

이 메서드는 리스트의 모든 원소가 리스트일때만 적용 가능하다.

#### 두 리스트를 순서싸으로 묶기: zip, unzip

`zip` 연산은 두 리스트를 이자로 받아 순서쌍의 리스트로 만든다.

```scala
val zipped = abcde zip List(1, 2, 3, 4)  
// List((a,1), (b,2), (c,3), (d, 4))
```

리스트의 길이가 다르면 길이가 긴쪽의 남는 원소가 버려진다.

`unzip` 은 당연히 반대이다.

```scala
zipped.unzip
// (List(a, b, c),List(1, 2, 3))
```

`zipWithIndex` 는 원소와 그 인덱스를 순서쌍으로 묶는다.

```scala
abcde.zipWithIndex
// List((a,0), (b,1), (c,2), (d,3), (e,4))
```

#### 리스트 출력하기: toString, mkString

`toString` 은 리스트의 표준 문자열을 반환한다.

```scala
abcde.toString()
// List(a, b, c, d, e)
```

`mkString` 은 `xs mkString (pre, sep, post)` 으로 사용하며

`pre + xs(0) + sep + ... + sep + xs + post` 으로 구성된다.

#### 리스트 변환하기: iterator, toArray, copyToArray

`iterator` 는 원소를 순회하도록 도와준다.

```scala
val it = abcde.iterator
// it: Iterator[Char] = <iterator>

it.next
// a
 
it.next
// b
```

`copyToArray` 는 리스트의 원소를 어떤 배열의 특정 지점으로 부터 연속적으로 복사한다.

```scala
val arr2 = new Array[Int](10)
// Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

List(1, 2, 3) copyToArray (arr2, 3)
// Array(0, 0, 0, 1, 2, 3, 0, 0, 0, 0)
```

#### 예제: 병합정렬

> 예제코드 참고

### 16.7 List 클래스의 고차 메서드

#### 리스트 매핑: map, flatmap, foreach

`xs map f` 연산은 `List[T]` 타입인 `xs` 와 `T => U` 타입인 `f` 함수를 받는다.

```scala
List(1, 2, 3) map (_ + 1)
// List(2, 3, 4)

val words = List("the", "quick", "brown", "fox")
words map (_.length)
// List(3, 5, 5, 3)
```

`flatmap` 연산자는 `map` 과 유사하지만 모든 리스트를 연결한 단일 리스트로 반환한다.

```scala
words map (_.toList)
// List(List(t, h, e), List(q, u, i,c, k), List(b, r, o, w, n), List(f, o, x))
 
words flatMap (_.toList)
// List(t, h, e, q, u, i, c, k, b, r, o, w, n, f, o, x)
```

`foreach` 는 오른쪽 피연산자로 프로시져를 받는다.

```scala
var sum = 0
List(1, 2, 3, 4, 5) foreach (sum += _)
// sum = 15
```

`foreach` 결과는 `Unit` 이다.

#### 리스트 걸러내기: filter, partition, find, takeWhile, dropWhile, span

* filter: `T => Boolean` 타입의 술어를 받아 조건을 만족하는 원소를 반환
* find: `T => Boolean` 를 만족하는 첫번째 원소만 반환
* takeWhile: `T => Boolean` 를 만족하는 가장 긴 접두사를 반환
* dropWhile: `T => Boolean` 를 만족하는 가장 긴 접두사를 제거

```scala
List(1, 2, 3, -4, 5) takeWhile (_ > 0)
// List(1, 2, 3)
 
List(1, 2, 3, -4, 5) dropWhile (_ > 0)
// List(-4,5)
```

#### 리스트 전체에 대한 술어: forall, exists

* `xs forall p`: 리스트의 모든 원소가 만족할 때 `true` 반환
* `xs exists p`: 리스트의 원소중에 술어 (`p`) 를 하나라도 만족하면 `true` 를 반환

#### 리스트 폴드: foldLeft 와 foldRight

`sum(List(a, b, c))` 는 `0 + a + b + c` 와 같다.

```scala
def sum(xs: List[Int]): Int = xs.foldLeft(0)(_ + _)
```

왼쪽 폴드 (foldLeft) 연산은 `xs.foldLeft(z)(op)` 에 대해 시작값 `z`, 폴드할 대상 `xs` 에 대해 이항 연산인 `op` 를 적용한다.

```scala
words.foldLeft("")(_ + " " + _)
// " the quick brown fox"
```

위와 같이 맨 앞에 공백을 제거하기 위해 다음과 같이 변형한 형태를 사용한다.

```scala
words.tail.foldLeft("")(_ + " " + _)
// the quick brown fox
```

왼쪽 폴드와 반대되는 메서드가 오른쪽 폴드 (foldRight) 이다

#### 예: 폴드를 사용해 리스트 뒤집기

> 예제 참고

#### 리스트 정렬: sortWith

```scala
List(1, -3, 4, 2, 6) sortWith (_ < _)
// List(-3, 1, 2, 4, 6)

word sortWith (_.length > _.length)
// List(quick, brown, the, fox)
```

### 16.8 List 객체의 메서드

#### 원소로부터 리스트 만들기

```scala
List.apply(1, 2, 3)
// List(1, 2, 3)
```

#### 수의 범위를 리스트로 만들기: List.range

`List.range(form, unitl)` 이며 `unitl` 은 범위에 들어가지 않는다.

```scala
List.range(1, 5)
// List(1, 2, 3, 4)
```

세번째 파라미터로 다음과 같이 증가치를 갖는 `range` 버전도 있다.

```scala
List.range(1, 9, 2)  
// List(1, 3, 5, 7)    
 
List.range(9, 1, -3)  
// List(9, 6, 3)
```

#### 균일한 리스트 만들기: List.fill

생성할 리스트의 길이를 받은 다음 반복할 원소를 받는다.

```scala
List.fill(5)('a')
// List(a, a, a, a, a)
```

fill 에 인자를 2개보다 많이 전달하면 다차원 리스트를 생성한다.

```scala
List.fill(2, 3)('b')
List(List(b, b, b), List(b, b))
```

#### 함수 도표화: List.tabulate

제공된 함수로 계산된 리스트를 생성한다.

```scala
List.tabulate(5)(n => n * n)
List(0, 1, 4, 9, 16)
```

#### 여러 리스트 연결하기

```scala
List.concat(List('a', 'b'), List('c'))
// List(a, b, c)

List.concat(List(), List('b'), List('c'))
// List(b, c)
```

### 16.9 여러 리스트를 함께 처리하기

`zip` 은 앞에서 봐왔듯이 순서쌍 연산을 한다.

하지만 `zip` 이 호출된 직후 중간 리스트를 임의로 만들어내기 때문에 생성비용이 들어간다.

때문에 `lazyzip` 을 제공한다.

```scala
(List(10, 20) lazyZip List(3, 4, 5)).map(_ * _)
// List(30, 80)
```

하지만 이름에서 알 수 있듯이 컬렉션을 바로 돌려주지 않는다.

`exists` 와 `forall` 도 지연 연산에 해당하는 버전이 있다.

### 16.10 스칼라의 타입 추론 알고리즘 이해

```scala
msort((x: Char, y: Char) => x > y)(abcde)
// List(e, d, c, b, a)
```

```scala
abcde sortWith (_ > _)
// List(e, d, c, b, a)
```

위 두 코드는 같은 동작을 수행한다.

하지만 다음의 경우에는 에러가 발생한다.

```scala
msort(_ > _)(abcde)
```

스칼라에서는 타입 추론이 흐름기반으로 동작한다.

메서드 적용인 `m(args)` 에서 타입 추론 로직은 메서드 `m` 타입이 있는지 먼저 검사한다.

만약 `m` 타입이 있다면 메서드에 적용할 인자의 예상 타입을 추론한다.

타입추론이 첫 인자인 `(_ > _)`을 검토할때 함수 인자의 정확한 타입을 알 수 없어 실패한다.

```scala
msort[Char](_ > _)(abcde)
```

> 어쨋든 타입 인자나 타입 표기를 명시해줘라

### 16.11 결론

리스트를 다루는 많은 방법들을 살펴보았다.

## Chapter 17 컬랙션

가장 일반적으로 사용하는 컬렉션 타입과 연산을 살펴본다.

### 17.1 시퀀스

시퀀스 (sequence) 타입은 순서가 정해진 데이터 그룹을 가지고 작업할 수 있게 해준다.

#### 리스트

리스트는 앞부분에 빠르게 원소를 추가하거나 삭제할 수 있다.

리스트를 순차적으로 따라가야 하기 때문에 임의의 위치에 접근할 때는 빠르지 않다.

불변성을 유지하기 때문에 효율적이고 알고리즘을 개발할 때 도움이 된다.

#### 배열

임의의 있는 원소에 효율적으로 접근하게 해준다.

#### 리스트 버퍼

리스트의 앞쪽에 대해서는 빠른 접근을 제공하지만, 끝쪽에서는 그렇지 않다.

때문에 리스트의 끝부분에 원소를 추가하면서 리스트를 생성할 필요가 있다면 리스트 앞에 원소를 차례로 추가해 뒤집힌 리스트를 만들고 그런 다음 `reverse` 를 호출해 원하는 순서의 리스트를 얻어야 한다.

```scala
import scala.collection.mutable.ListBuffer 

val buf = new ListBuffer[Int]

buf += 1
// ListBuffer(1)

buf += 2
// ListBuffer(1, 2)

3 +=: buf                                   
// ListBuffer(3, 1, 2) 
```

#### 배열 버퍼

끝 부분과 시작 부분에 원소를 추가하거나 삭제할 수 있다는 점만 제외하면 배열과 같다.

구현을 감싸주는 층 때문에 속도가 다소 느리다해도, 배열 버퍼에 모든 배열 연산을 사용할 수 있다.

```scala
val buf = new ArrayBuffer[Int]()

buf += 12 
// ArrayBuffer(12) 

buf += 15 
// ArrayBuffer(12, 15)
```

위와 같이 `+=` 메서드를 사용하여 ArrayBuffer 끝에 원소를 추가할 수 있다.

#### 문자열(StringOps를 통해서)

`Predef` 에 `String` 을 `StringOps` 로 바꾸는 암시적 변환이 있기 때문에 시퀀스 처럼 문자열을 다룰수 있다.

```scala
def hasUpperCase(s: String) = s.exists(_.isUpper) 

hasUpperCase("Robert Frost") 
// true
```

문자열 안에 대문자가 있으면 true 를 반환한다.

### 17.2 집합과 맵

`Set` 이나 `Map` 의 기본값은 변경 불가능한 객체이다.

만약 변경 가능한 객체를 만들고 싶으면 명시적으로 임포트 해야 한다.

```scala
import scala.collection.mutable
```

#### 집합의 사용

집합의 특징은 특정 객체는 최대 하나만 들어가도록 보장한다는 점이다.

> **416p 표 17.1 일반적인 집합연산** 표 참조

#### 맵의 사용

어떤 값과 집합의 각 원소 사이에 연관 관계를 만든다.

> **419p 표 17.2 일반적인 맵 연산** 표 참조

#### 디폴트 집합과 맵

`scala.collection.mutable.Set()` 팩토리 메서드는 내부적으로 해시 테이블을 사용하는 `scala.collection.mutable.HashSet` 을 반환한다.

`scala.collection.mutable.Map()` 팩토리 메서드는 마찬가지로 `scala.collection.mutable.HashMap` 을 반환한다.

`scala.collection.mutable.Set()` 팩토리 메서드는 팩토리에 얼마나 많은 원소를 전달하느냐에 따라 달라진다.<br/>
이는 성능을 극대화 하기 위해 특정 크기의 집함만을 담당하는 특별한 클래스를 사용한다.

|원소 개수|구현
|:-:|:-:|
|0|`scala.collection.immutable.EmptySet`|
|1|`scala.collection.immutable.Set1`|
|2|`scala.collection.immutable.Set2`|
|3|`scala.collection.immutable.Set3`|
|4|`scala.collection.immutable.Set4`|
|5 이상|`scala.collection.immutable.HashSet`|

마찬가지로 `scala.collection.immutable.Map()` 팩토리 메서드도 원소가 5개보다 적은 맵에 대해서는 성능을 최대화 하기 위해 크기별로 특화된 클래스를 사용한다.

|원소 개수|구현
|:-:|:-:|
|0|`scala.collection.immutable.EmptyMap`|
|1|`scala.collection.immutable.Map1`|
|2|`scala.collection.immutable.Map2`|
|3|`scala.collection.immutable.Map3`|
|4|`scala.collection.immutable.Map4`|
|5 이상|`scala.collection.immutable.HashMap`|

#### 정렬된 집합과 맵

정해진 순서대로 원소를 반환하는 이터레이터를 제공하는 맵이나 집합을 사용할 때는 `SortedSet` 이나 `SortedMap` 트레이트를 사용한다.

이 두 트레이트의 구현은 `TreeSet` 과 `TreeMap` 클래스이다.

### 17.3 변경 가능 컬렉션과 변경 불가능 컬렉션

변경 가능한 컬렉션과 변경 불가능한 컬렉션의 선택이 어려우면 변경 불가능한 컬렉션을 우선시 하라

변경 불가능한 컬렉션은 프로그램을 추론하기 더 쉬우며, 저장할 원소의 수가 적을 경우 더 작게 저장할 수 있다.

### 17.4 컬렉션 초기화

컬렉션을 초기화하고 생성하는 일반적인 방법은 초기 원소를 컬렉션 동반 객체의 팩토리 메서드에 넘기는 것이다.

대부분의 경우에는 스칼라 컴파일러가 동반 객체의 팩토리 메서드에 전달한 원소로부터 컬렉션 원소 타입을 추론할 수 있다.

특별한 상황에서는 어떤 컬렉션을 다른 컬렉션으로 전환해야 하는 경우가 있는데 이럴때는 `to` 메서드를 사용하여 다른 컬렉션으로 초기화 하자

```scala
val colors = List("blue", "yellow", "red", "green")

val treeSet = color to TreeSet
// TreeSet(blue, green, red, yellow)
```

#### 배열이나 리스트로 바꾸기

다른 컬렉션을 가지고 새로운 리스트를 초기화 하려면 `toList` 를 호출하자

```scala
treeSet.toList
// List(blue, green, red, yellow)
```

만약 배열을 원한다면 `toArray` 을 호출하자

```scala
treeSet.toArray
// Array(blue, green, red, yellow)
```

#### 변경 가능한 집합(맵)과 변경 불가능한 집합(맵) 사이의 변환

변경 가능한 집합이나 맵을 변경 불가능한 객체로 바꾸거나 혹은 그 반대일 경우 `to` 메서드를 사용할 수 있다.

```scala
import scala.collection.mutable 

treeSet 
// TreeSet(blue, green, red, yellow) 

val mutaSet = treeSet to mutable.Set
//Set(yellow, blue, red, green) 

val immutaSet = mutaSet to Set
//Set(yellow, blue, red, green) 
```

### 17.5 튜플

튜플 (tuple) 은 정해진 개수의 원소를 한데 묶는다.

다음은 정수, 문자열, Console 타입의 원소가 있는 튜플의 한 예이다.

```scala
(1, "Hello", Console)
```

튜플은 각기 다른 타입의 객체를 결합할 수 있기 때문에, Iterable을 상속하지 않는다.

튜플을 사용하는 가장 일반적인 경우에는 메서드에서 여러 값을 반환하는 것이다.

다음은 가장 긴 단어를 찾고 그 단어의 인덱스를 반환하는 메서드이다.

```scala
def longestWord(words: Array[String]): (String, Int) = {
  var word = words(0)
  var idx = 0
  for (i <- 1 until words.length)
    if (words(i).length > word.length) {
      word = words(i)
      idx = i
    }
  (word, idx)
}
```

```scala
val longset = longestWord("The quick brown fox".split(" "))
// (quick, 1)
```

```scala
longest._1
// quick

longest._2
// 1
```

```scala
val (word, idx) = longest
// word = quick, idx = 1
```

위에서 괄호를 생략하면 다른 결과가 나온다.

```scala
val word, idx = longest
// word = (quick, 1)
// idx = (quick, 1)
```

튜플은 너무나 사용하기 쉽기 때문에 'A 하나와 B 하나' 수준을 넘지 않는 데이터를 묶을때 유용하다.

결합에 어떤 의미가 있거나 결합 메서드를 추가하기를 원한다면 클래스를 생성하는 편이 더 좋다.

### 17.6 결론

스칼라 컬렉션을 더 효과적으로 사용할 수 있다.

## Chapter 18 변경 가능한 객체

변경 가능한 객체가 무엇인지 설명하고, 그런 객체를 표현하도록 스칼라가 제공하는 문법적 요소를 설명한다.

### 18.1 무엇이 객체를 변경 가능하게 하는가

순수 함수형 객체의 필드에 접근하거나 메서드를 호출하면 항상 동일한 결과가 나온다.

```scala
class BankAccount {
  private var bal: Int = 0

  def balance: Int = bal

  def deposit(amount: Int) = {
    require(amount > 0)
    bal += amount
  }

  def withdraw(amount: Int): Boolean = 
    if (amount > bal)
      false
    else {
      bal -= amount
      true
    }
}
```

```scala {8}
val account new BankAccount

account deposit 100

account withdraw 80
// true

account withdraw 88
// false
```

위의 예에서 마지막 두 `withDraw` 는 다른 결과를 반환한다.

첫번째는 계좌에 충분한 잔고가 있기 때문에 `true` 를 반환하지만 두 번째는 동일한 연산을 호출했으나 잔고가 부족하여 `false` 를 반환한다.

만약 어떤 클래스가 변경 가능한 상태를 가진 다른 객체에게 메서드 호출을 위임하기 때문에 `var` 를 상속하거나 정의하지 않고도 변경가능한 상태를 가질 수 있다.

```scala
class Keyed {
  def computeKey: Int = ... // 비용이 많이 드는 연산
  ...
}
```

`computeKey` 가 어떤 `var` 를 읽고 쓰지 않는다면, 캐시를 추가함으로써 `Keyed` 를 더 효율적으로 만들 수 있다.

```scala
class MemoKeyed extends Keyed {
  private var keyCache: Option[Int] = None

  override def computeKey: Int = {
    if (!keyCache.isDefined)
      keyCache = Some(super.computeKey)
    keyCache.get
  }
}
```

`Keyed` 대신 `MemoKeyed` 를 사용해 속도를 더 올릴 수 있다.

`computeKey` 의 결과를 두번째로 요청 받으면, `computeKey` 를 한번 더 계산하는 대신 `keyCache` 필드에 저장해둔 값을 반환하기 때문이다.

### 18.2 재할당 가능한 변수와 프로퍼티

스칼라에서는 어떤 객체의 멤버 중 비공개가 아닌 모든 `var` 멤버에 `Getter` 와 `Setter` 메서드를 자동으로 정의해 준다.

`Getter` 와 `Setter` 의 이름은 자바의 관례와는 다르다

`var x` 의 `Getter` 는 `x` 이고 Setter 는 `x_=` 이다.

다음은 공개 `var` 가 게터와 세터 메서드로 어떻게 확장되는지 보여주는 예

```scala
class Time {
  private[this] var h = 12
  private[this] var m = 0

  def hour: Int = h
  def hour_= (x: Int) = { h = x }

  def minute: Int = m
  def minute_= (x: Int) = { m = x }
}
```

다음은 `var` 를 `Getter` 와 `Setter` 로 확장하는 경우 직접 정의할 수 있다는 점을 보여준다.

만약 특정 값의 허용범위를 제한할 경우 `require` 문을 사용한다.

```scala {7,13}
class Time {
  private[this] var h = 12
  private[this] var m = 0

  def hour: Int = h
  def hour_= (x: Int) = { 
    require(0 <= x && x < 24)
    h = x 
  }

  def minute: Int = m
  def minute_= (x: Int) = { 
    require(0 <= x && x < 60)
    m = x 
  }
}
```

프로퍼티는 여러 목적으로 사용할 수 있는데 위의 예에서는 `require` 를 사용하여 불변 조건 (invariant) 를 적용하였다.

이를 사용하면 허용하면 안되는 값을 변수에 할당하는것을 막을수 있는데 어떤 변수에 모든 접근을 로그로 남길수도 있고, 변수에 이벤트를 접목해서 어떤 변수를 변경할 때마다 구독 (subscribe) 를 요청한 다른 객체들에게 통지하게 만들 수 있다.

다음과 같이 필드 초기화에 `= _` 를 사용하면 필드에 제로 (zero) 를 할당한다.

제로는 필드 타입에 따라 다르다.

* 숫자 타입 : 0
* 논리 타입 : false
* 참조 타입 : null

```scala
val celsius: Float = _
```

만약 다음과 같이 초기화 하지 않으면 추상 변수를 선언해 버린다.

```scala
val celsius: Float
```

### 18.3 사례 연구: 이산 이벤트 시뮬레이션

> 책 예제 코드 및 설명 참고

### 18.4 디지털 회로를 위한 언어

> 책 예제 코드 및 설명 참고

### 18.5 시뮬레이션 API

> 책 예제 코드 및 설명 참고

### 18.6 회로 시뮬레이션

> 책 예제 코드 및 설명 참고

### 18.7 결론

함수형 접근 방식과 명령형 접근 방식을 조합하여 문제를 해결할 수 있도록 유도하자.

## Chapter 19 타입 파라미터화

타입 파라미타화를 사용하면 제네릭 클래스와 트레이트를 쓸 수 있다.

집합은 제네릭이며 타입 파라미터를 받기 때문에 타입이 `Set[T]` 이다. (특정 집합의 인스턴스는 `Set[String]`, `Set[Int]` 이다.)

제네릭 타입의 파라미터를 쓰지 않아도 되는 자바와 달리, 스칼라에서는 반드시 타입 파라미터를 명시해야 한다.

타입 변성은 파라미터 타입 간의 상속관계를 지정해야 하는데 예를 들면 `Set[String]`이 `Set[AnyRef]` 하위 집합인지 변성에 의해 결정된다.

### 19.1 함수형 큐

* head: 큐의 첫 원소를 반환한다.
* tail: 큐의 첫 원소를 제외한 나머지를 반환한다.
* enqueue: 인자로 주어진 원소를 큐의 맨뒤에 추가한 새로운 큐를 반환한다.

```scala
class SlowAppendQueue[T](elems: List[T]) {
  def head = elems.head
  def tail = new SlowAppendQueue(elems.tail)
  def enqueue(x: T) = new SlowAppendQueue(elems ::: List(x))
}
```

`enqueue` 연산은 큐에 들어있는 원소의 개수에 비례한다.

상수 시간 추가를 바란다면 아래와 같이 리스트의 원소를 뒤집을 수도 있다.

```scala
class SlowHeadQueue[T](smele: List[T]) {
  def head = smele.last
  def tail = new SlowHeadQueue(smele.init)
  def enqueue(x: T) = new SlowHeadQueue(x :: smele)
}
```

`enqueue` 는 상수 시간이지만 `head`, `tail` 은 그렇지 않다. 이들은 원소 개수에 비례하는 시간을 소비한다.

원소를 추가하기 위해서는 `::` 연산자를 사용해 `trailing` 리스트에 넣으면 되며 이는 상수 시간이 걸린다.

위 두가지 방법을 혼용하여 다음과 같이 구현한다.

```scala
class Queue[T](
  private val leading: List[T],
  private val trailing: List[T]
) {
  private def mirror = if (leading.isEmpty)
    new Queue(trailing.reverse, Nil)
  else 
    this

  def head = mirror.leading.head

  def tail = {
    val q = mirror
    new Queue(q.leading.tail, q.trailing)
  }

  def enqueue(x: T) = 
    new Queue(leading, x :: trailing)
}
```

* `mirror` 연산은 큐의 원소 개수에 비례하는 시간이 걸림
* `head` 를 많이 호출하면 매번 `head` 를 실행할 때 마다 비싼 비용을 들여 리스트를 정리하기 위해 `mirror` 를 호출

### 19.2 정보 은닉

클라이언트에게 내부 구조를 감추는 방법

#### 비공개 생성자와 팩토리 메서드

클래스 파라미터 목록 바로 앞에 private 수식자를 붙여 주 생성자를 감출 수 있다.

```scala
class Queue[T] private (
  private val leading: List[T],
  private val trailing: List[T]
)
```

이 생성자는 오직 클래스 자신과 동반 객체에 대해서만 접근 가능하다.

이는 클라이언트가주 생성자를 더이상 호출할 수 없기 때문에 보조 생성자를 추가해줘야 한다.

```scala
def this() = this(Nil, Nil)
```

위 보조 생성자는 빈 큐를 만든다.

아래와 같이 보조 확장자가 큐를 초기화할 원소를 받게 만들수 있다.

```scala
def this(elem: T*) = this(elems.toList, Nil)
```

> `T*` 는 반복 파라미터 이다. (8.8 절)

다른 방법은 보조 생성자 처럼 초기 원소의 목록으로부터 큐를 만드는 팩토리 메서드를 추가하는 것이다.

```scala
object Queue {
  def apply[T](xs: T*) = new Queue[T](xs.toList, Nil)
}
```

`xs` 의 원소를 큐로 만든다.

```scala
Queue(1, 2, 3)

// or

Queue.apply(1, 2, 3)
```

#### 대안: 비공개 클래스

클래스 자체를 감추가 클래스에 대한 공개 인터페이스만을 제공하는 트레이트를 외부로 노출한다.

```scala
trait Queue[T] {   
  def head: T 
  def tail: Queue[T] 
  def enqueue(x: T): Queue[T] 
} 

object Queue { 
  def apply[T](xs: T*): Queue[T] =  
    new QueueImpl[T](xs.toList, Nil) 

  private class QueueImpl[T](
    private val leading: List[T], 
    private val trailing: List[T] 
  ) extends Queue[T] { 
    def mirror =  
      if (leading.isEmpty) 
        new QueueImpl(trailing.reverse, Nil) 
      else  
        this 

    def head: T = mirror.leading.head 

    def tail: QueueImpl[T] = { 
      val q = mirror 
      new QueueImpl(q.leading.tail, q.trailing) 
    } 

    def enqueue(x: T) =  
      new QueueImpl(leading, x :: trailing) 
  } 
}
```

위와 같이 구현 클래스인 `QueueImpl` 클래스 전체를 감춘다.

### 19.3 변성 표기

위에 정의한 `Queue` 는 트레이트이며 타입이 아니다.

`Queue` 가 타입이 아닌 이유는 타입 파라미터를 받기 때문이다.

때문에 `Queue` 라는 타입의 변수를 만들수 없다.

```scala
def doesNotCompile(q: Queue) = {}
//                    ^
//  error: class Queue takes type parameters
```

대신 `Queue` 트레이트는 `Queue[String]`, `Queue[Int]`, `Queue[AnyRef]` 처럼 파라미터화된 타입을 지정하도록 허용한다.

따라서 `Queue` 는 타입 생성자라고도 할 수 있다.

스칼라에서 제네릭 타입은 기본적으로 무공변 (non-variant) 이다.

어떤 타입 파라미터의 공변, 반공변, 무공변 여부를 파라미터의 변성 (variance) 라고 한다.

`+`, `-` 기호는 변성 표기 (variance annotation) 라고 부른다.

```scala
val c1 = new Cell[String]("abc") 
val c2: Cell[Any] = c1 
c2.set(1)
val s: String = c1.get 
```

위 코드는 컴파일 오류를 발생 시킨다.

```scala
Cell.scala:7: error: covariant type T occurs in 
contravariant position in type T of value x 
   def set(x: T) = current = x 
              ^
```

#### 변성과 배열

```scala {4}
String[] a1 = { "abc" }; 
Object[] a2 = a1; 
a2[0] = new Integer(17);
String s = a1[0];
```

자바는 실행 시점에 타입의 정보를 저장한다. 이는 안전하지 않는 방법이나 설계당시 배열을 제네릭하게 다룰 간단한 방법이 필요했기 때문이다.

```scala
val a1 = Array("abc") 
val a2: Array[Any] = a1
```

스칼라는 배열을 무공변으로 다루기 때문에 위와 같이 `Array[String]` 을 `Array[Any]` 로 대체할 수 없다.

### 19.4 변성 표기 검사

* 스칼라 컴파일러는 클래스나 트레이트 본문의 모든 위치를 **긍정적**, **부정적**, **중립적**으로 구분한다.
* `+` 로 표시한 타입 파라미터는 긍정적인 위치에서만 사용 가능
* `-` 로 표시한 파라미터는 부정적 위치에서만 사용 가능
* 아무 변성 표기가 없는 타입 파라미터는 아무 곳에서나 사용 가능
* 가장 바깥 스코프부터 내부 스코프로 긍정적/부정적/중립적인지 구분한다.

### 19.5 하위 바운드

`Queue[T]` 정의에서 `T` 를 공변적으로 만들 수 없다.

`T` 는 `enqueue` 메소드의 파라미터 타입인데 그 위치는 부정적이기 때문이다 (?)

`enqueue` 를 다형성 (즉 enqueue에 타입 파라미터를 지정) 으로 더 일반화하고, 타입 파라미터에 하위 바운드 (lower bound) 를 사용하는 것 이다.

```scala
class Queue[+T](
  private val leading: List[T], 
  private val trailing: List[T] 
) { 
  def enqueue[U >: T](x: U) =  
    new Queue[U](leading, x :: trailing) // ... 
}
```

위 코드에서는 `enqueue` 에 타입 파라미터 `U` 를 추가하면서 `U >: T` 를 사용하여 `T` 를 `U` 의 하위 바운드로 지정하였다. (`U` 는 `T` 의 슈퍼타입)

따라서 메서드의 반환값으로 `Queue[T]` 에서 `Queue[U]` 로 바뀐다.

위 코드는 변성 표기와 하위 바운드가 함께 잘 작동할 수 있음을 보여준다.

이들은 타입 위주 설계 (type-driven design) 의 좋은 예이다.

스칼라가 자바의 와일드카드 (wildcard) 에서 볼 수 있는 사용 위치 변성 (use-site variance) 보다 선언 위치 변성 (declaration-site variance) 를 선호하는 주된 이유이다.

### 19.6 반공변성

```scala
trait OutputChannel[-T] { 
  def write(x: T) 
}
```

`U` 타입의 값이 필요한 모든 경우를 `T` 타입의 값으로 대치할 수 있다면 `T` 타입을 `U` 타입의 서브타입으로 가정해도 안전하다는 것이다. (리스코프 치환원칙)

한 타입 안에서 공변성과 반공변성이 함께 섞여있는 경우도 있다.

```scala
trait Function1[-S, +T] { 
  def apply(x: S): T 
}
```

`Function1` 트레이트는 인자 타입 S 에 대해서는 반공변이고, 결과 타입 T 에 대해서는 공변이다.

인자는 함수가 요구하는것이고 결과는 함수가 제공하는것이기 때문이다.

> [PECS](/backend/language/java/essential/generic/pecs) 와 유사해 보인다.

![함수 타입 파라미터의 공변셩과 반공변성](/img/A120.png)

### 19.7 객체의 비공개 데이터

```scala
  class Queue[+T] private ( 
    private[this] var leading: List[T],
    private[this] var trailing: List[T]
  ) {  
  private def mirror() =  
    if (leading.isEmpty) { 
      while (!trailing.isEmpty) { 
        leading = trailing.head :: leading
        trailing = trailing.tail
      } 
    } 

  def head: T = {  
    mirror() 
    leading.head  
  } 

  def tail: Queue[T] = {  
    mirror() 
    new Queue(leading.tail, trailing)  
  } 

  def enqueue[U >: T](x: U) =  
    new Queue[U](leading, x :: trailing) 
}
```

### 19.8 상위 바운드

`T <: Ordered[T]` 라는 문법을 사용하여 타입 파라미터 T 의 상위 바운드가 Order[T] 라는 사실을 명시할 수 있다.

```scala {1}
def orderedMergeSort[T <: Ordered[T]](xs: List[T]): List[T] = { 
  def merge(xs: List[T], ys: List[T]): List[T] = 
    (xs, ys) match { 
      case (Nil, _) => ys 
      case (_, Nil) => xs 
      case (x :: xs1, y :: ys1) => 
        if (x < y) x :: merge(xs1, ys) 
        else y :: merge(xs, ys1) 
    } 
  val n = xs.length / 2 
  if (n == 0) xs 
  else { 
    val (ys, zs) = xs splitAt n 
    merge(orderedMergeSort(ys), orderedMergeSort(zs)) 
  } 
}
```

### 19.9 결론

정보 은닉을 위한 여러 기법을 살펴보았다. (비공개 생성자, 팩토리 메섣, 객체 비공개 멤버)

또한 타입 변성을 지정하는 법, 변성 표기를 위한 기법들도 살펴보았다.

## Chapter 20 추상 멤버
