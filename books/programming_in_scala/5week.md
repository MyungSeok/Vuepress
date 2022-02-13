# 5주차 (21 ~ 25 Chapter)

## Chapter 21 암시적 변환과 암시적 파라미터

일반적으로 다른 사람의 라이브러리를 사용하고 싶은 경우에는 보통 있는 그대로 사용해야 한다는 점이다.

이를 개선하기 위해 프로그래밍 언어들은 다양한 요소를 도입해 왔다.

* 루비 & 스몰토크 -> 패키지들이 서로 클래스를 추가할 수 있음
* C# -> 정적 메서드 (static extendsion method) 가 있어 좀 더 지역적으로 변경할 수 있음

스칼라에서는 암시적 변환이라는 해법을 제공한다.

### 21.1 암시적 변환

암시적 변환을 사용하면 한 타입을 다른 타입으로 변경하는 데 필요한 명시적인 변환의 숫자를 줄일 수 있다.

```scala
val button = new JButton
button.addActionListener(
  new ActionListener {
    def actionPerformed(event: ActionEvent) {
      println("pressed!")
    }
  }
)
```

위 코드를 스칼리 친화적으로 바꾼다.

```scala
button.addActionListener( // 타입 불일치!
  (_: ActionEvent) => println("pressed!")
)
```

위 코드는 동작되지 않는다.

`addActionListener` 가 원하는 것은 `ActionListener` 이기 때문이다.

이는 다음과 같이 암시적 변환방법을 사용하여 작성한다.

```scala {1}
implicit def function2ActionListener(f: ActionEvent => Unit) = 
  new ActionListener {
    def actionPerformed(event: ActionEvent) = f(event)
  }
```

`function2ActionListener` 가 `implicit` 로 표기해뒀기 때문에, 이를 생략해도 컴파일러가 자동으로 추가해준다.

### 21.2 암시 규칙

#### 표시 규칙: implicit로 표시한 정의만 검토 대상이다.

변수, 함수, 객체 정의에 `implicit` 표시를 달 수 있다.

```scala
implicit def intToString(x: Int) = x.toString
```

컴파일러는 암시적이라고 명시한 정의 중에서만 변환 함수를 찾는다.

#### 스코프 규칙: 삽입된 implicit 변환은 스코프 내에 단일 식별자로만 존재하거나, 변환의 결과나 원래 타입과 연관이 있어야 한다.

암시적 변환은 **단일 식별자**로만 **스코프 안에 존재**해야 한다.

컴파일러는 `someVariable.convert` 같은 형태의 변환을 삽입하지 않는다.

`x + y` 를 `someVariable.convert(x) + y` 로 확장하지 않는다.

만약 이를 위해서는 `someVariable.convert` 를 단일 식별자로 가르킬 수 있게 만들어야 한다.

단일 식별자는 한 가지 예외가 있다.

컴파일러는 원 타입이나 반환 결과 타입의 동반 객체에 있는 암시적 정의도 살펴본다.


```scala {2}
object Dollar {
  implicit def dollarToEuro(x: Dollar): Euro = ...
}

class Dollar { ... }
```

컴파일러는 `Dollar` 타입의 인스턴스를 다른 타입으로 변환할 필요가 있을 때마다 연관이 있는 변환을 찾는다.

#### 한 번에 하나만 규칙: 오직 하나의 암시적 선언만 사용한다.

컴파일러는 `x + y` 를 `convert1(convert2(x)) + y` 로 변환하지 않는다.

그렇게 하면 잘못 작성한 코드를 컴파일하는 시간이 극적으로 늘어나고 프로그래머가 작성한 코드와 그 프로그램이 실제 하는 일 사이의 차이가 커진다.

#### 명시성 우선 규칙: 코드가 그 상태 그대로 타입 검사를 통과한다면 암시를 통한 변환을 시도하지 않는다.

컴파일러는 이미 잘 작동하는 코드를 변경하진 않는다.

#### 암시적 변환 이름 붙이기

암시적 변환에는 아무 이름이나 붙일 수 있다.

이름이 문제가 되는것은 다음 두 가지 뿐이다.

* 메서드 호출 시 명시적으로 변환을 사용하고 싶은 경우
* 프로그램의 특정 지점에서 사용 가능한 암시적 변환이 어떤 것이 있는지 파악해야 하는 경우

```scala
object MyConversions {
  implicit def stringWrapper(s: String):  IndexedSeq[Char] = ...
  implicit def intToString(x: Int): String = ...
}
```

`stringWrapper` 변환을 사용하고 싶지만 `intToString` 는 막고 싶다.

```scala
import MyConversions.stringWrapper
```

위 코드 처럼 특정 암시적 변환만 임포트한다.

#### 암시가 쓰이는 부분

* 값을 컴파일러가 원하는 타입으로 변환할 때
* 어떤 선택의 수신 객체를 변환할 때
* 암시적 파라미터를 지정할 때 

### 21.3 예상 타입으로의 암시적 변환

```scala
val i: Int = 3.5
<console>:4: error: type mismatch;
  found : Double(3.5)
  required: Int
  val i: Int = 3.5
                ^
```

```scala
implicit def doubleToInt(x: Double) = x.toInt
```

이제 이 코드는 다음과 같이 바뀐다.

```scala
val i: Int = doubleToInt(3.5)
```

`scala.Predef` 는 모든 스칼라 프로그램에 암시적으로 임포트 된다.

**더 작은 수 타입**을 **더 큰 것**으로 변환하는 암시적 변환들이 들어있다.

```scala
implicit def int2double(x: Int): Double = x.toDouble  
```

### 21.4 호출 대상 객체 변환

암시적 변환을 메서드를 호출하는 대상이 되는 객체인 수신 객체에도 적용할 수 있다.

1. 수신 객체 변환을 통해 새 클래스를 기존 클래스 계층구조에 매끄럽게 통합 가능
2. 언어 안에서 도메인의 특화 언어 (DSL) 를 만드는 일을 지원

#### 새 타입과 기존 타입 통합하기

```scala
class Rational(n: Int, d: Int) {
  ...
  def + (that: Rational): Rational = ...
  def + (that: Int): Rational = ...
}
```

```scala
val oneHalf = new Rational(1, 2)

oneHalf + oneHalf

oneHalf + 1

// 에러
1 + oneHalf
```

아래와 같이 변환을 만들어 두면 수신 객체들이 나머지 처리를 해준다.

```scala
implicit def intToRational(x: Int) =  new Rational(x, 1)

1 + oneHalf
```

#### 새로운 문법 흉내내기

스칼라는 암시적 변환을 통해 새 문법을 추가한 것 처럼 흉내낼 수 있다.

```scala
Map(1 -> "one", 2 -> "two", 3 -> "three")
```

`->` 는 문법이 아닌 스칼라 프리엠블에서 지원하는 `ArrowAssoc` 클래스의 메서드이다.

```scala
package scala

object Predef {
  class ArrowAssoc[A](x: A) {
    def -> [B](y: B): Tuple2[A, B] = Tuple2(x, y)
  }
  implicit def any2ArrowAssoc[A](x: A): ArrowAssoc[A] =
    new ArrowAssoc(x)
  ...
}
```

#### 암시적 클래스

암시적 클래스는 `implicit` 키워드가 클래스 선언부 앞에 있는 클래스이다.

```scala
case class Rectangle(width: Int, Height: Int)

implicit class RectangleMaker(width: Int){
  def x(height: Int) = Rectangle(width, height)
}
```

위 코드를 추가함으로써 아래와 같이 너비 3 높이 4 의 사각형 객체를 쉽게 만들수 있다.

```scala
val myRectangle = 3 x 4
```

암시적 클래스는 케이스 클래스 일 수 없으며 암시적 클래스의 생성자에는 파라미터가 1개만 있어야 한다.

#### 21.5 암시적 파라미터

```scala
object Greeter {
  def greet(name: String)(
    // 파라미터 목록에 implicit 를 명시
    implicit prompt: PreferredPrompt,
    drink: PreferredDrink
  ) {
    println("Welcome, "+ name +". The system is ready.")
    print("But while you work, ")
    println("why not enjoy a cup of "+ drink.preference +"?")
    println(prompt.preference)
  }
}

object JoesPrefs {
  // 암시적 파라미터에 implicit 를 명시
  implicit val prompt = new PreferredPrompt("Yes, master> ")
  implicit val drink = new PreferredDrink("tea")
}
```

`implicit` 키워드는 개별적인 파라미터가 아니고 전체 파라미터 목록을 범위로 한다.

#### 암시 파라미터에 대한 스타일 규칙

암시적 파라미터 타입은 일반적이지 않는 특별한 이름을 사용한다.

```scala
def maxListPoorStyle[T](elements: List[T])(implicit orderer: (T, T) => Boolean): T
```

명시적으로 타입에 대한 어떠한 정보도 제공하지 않으며 흔한 타입이기 때문에 컴파일러에서 실수로 이상한 값의 암시적 파라미터를 넣을수 있다.

암시적 파라미터 타입은 역활을 알려 줄 수 있는 최소한 하나의 이름을 사용해야 한다.

### 21.6 맥락 바운드

```scala
def maxListOrdering[T](elements: List[T])(implicit ordering: Ordering[T]): T =
  elements match {
    case List() =>
      throw new IllegalArgumentException("empty list!")
    case List(x) => x
    case x :: rest =>
      // ordering 을 암시적으로 사용
      val maxRest = maxListOrdering(rest)
      // 명시적으로 ordering 을 사용
      if (ordering.gt(x, maxRest)) x
      else maxRest
  }
```

암시적 변환을 없애는 방법은 표준 라이브러리에 있는 아래 메서드를 사용하면 해당 객체를 호출하여 즉시 돌려준다.

```scala
def implicitly[T](implicit t: T) = t
```

맥락 바운드 (context bound) 는 타입의 정의를 변경하지 않고도 그것을 동작 가능하게 지원한다.

```scala
def maxListOrdering[T: Ordering](elements: List[T]): T =
  elements match {
    case List() =>
      throw new IllegalArgumentException("empty list!")
    case List(x) => x
    case x :: rest =>
      val maxRest = maxListOrdering(rest)
      if (implicitly[Ordering[T]].gt(x, maxRest)) x
      else maxRest
  }
```

### 21.7 여러 변환을 사용하는 경우

스칼라는 절대적으로 **더 구체적** 이라면 컴파일러는 더 구체적인것을 선택 한다.

* 전자의 인자 타입이 후자의 서브타입이다.
* 두 변환 모두 메서드인데, 전자를 둘러싼 클래스가 후자를 둘러싼 클래스를 확장한다.

```scala
val cba = "abc".reverse
```

1. `"abc"` 는 컬렉션으로 변환 
2. `reverse` 는 컬렉션을 반환
3. `cba` 는 컬렉션을 반환

```scala
// false
"abc" == "abc".reverse.reverse
```

### 21.8 암시 디버깅

컴파일러가 찾지 못하는 경우 변환을 명시적으로 써본다.

오류의 원인 추적이 쉽다.

```scala
val chars: List[Char] = "xyz"


val chars: List[Char] = wrapString("xyz")

```

`scala -Xprint:typer` 를 사용하며 내부에서 타입 검사 이후 소스코드를 출력하게 한다.

### 21.9 결론

스칼라에서 암시는 강력하며, 코드를 압축해주는 기능이다.

암시를 너무 자주 사용하면 코드를 이해하기 어려워질 수 있다.

## Chapter 22 리스트 구현

스칼라에서 가장 널리 사용되는 구조화된 데이터 타입이다.

### 21.1 List 클래스 개괄

![스칼라 리스트의 클래스 계층구조](/img/A121.png)

#### Nil 객체

Nil 객체는 빈 리스트를 정의한다.

Nil 객체는 List[Noting] 을 상속한다.

#### :: 클래스

```scala
final case class ::[T](hd: T, tl: List[T]) extends List[T] {
  def head = hd
  def tail = tl
  override def isEmpty: Boolean = false
}
```

#### 추가 메서드

```scala
def length: Int = 
  if (isEnpty) 0 else 1 + tail.length
```

```scala
def drop(n: Int): List[A] = 
  if (isEmpty) Nil
    else if (n <= 0) this
    else tail.drop(n - 1)
```

```scala
def map[B](f: A => B): List[B] = 
  if (isEmpty) Nil
    else f(head) :: tail.map(f) 
```

#### 리스트 구성

리스트 구성 메서드인 `::` 와 `:::` 는 각각이 콜론(:) 으로 끝나기 때문에 오른쪽 피연산자에 바인딩 된다.

`x :: xs` 가 `x.::(xs)` 가 아니고 `xs.::(x)` 호출과 같다.

`::` 메서드는 원솟값을 받아서 새 리스트를 만들어 내야 한다.

```scala
abstract class Fruit
class Apple extends Fruit
class Orange extends Fruit
```

```scala
scala> val apples = new Apple :: Nil
apples: List[Apple] = List(Apple@585fa9)

scala> val fruits = new Orange :: apples
fruits: List[Fruit] = List(Orange@cd6798, Apple@585fa9)
```

리스트의 정의가 공변적이기 때문에 메서드 파라미터를 반공변으로 함으로써 더 유연하고 안정적으로 사용 가능하게 만들어 준다.

```scala
def ::[U >: T](x: U): List[U] = new scala.::(x, this)
```

![스칼라의 리스트 구조](/img/A122.png)

### 22.2 ListBuffer 클래스

리스트에 대한 전형적인 접근 패턴은 재귀적이다.

`:::` 처리는 첫 인자의 길이에 비례하는 시간을 갖기 때문에 비효율적이다.

리스트 버퍼를 사용하면 원소를 축적할 수 있다.

```scala {1}
var result = List[Int]()
for (x <- xs) result = result ::: List(x + 1)
result
```

```scala {3}
import scala.collection.mutable.ListBuffer

val buf = new ListBuffer[Int]
for (x <- xs) buf += x + 1
buf.toList
```

### 22.3 실제 List 클래스

비 꼬리 재귀 구현과 같은 스택 오버플로우 문제가 생길 경우에는 실제로 구현하는 List 에서는 재귀를 회피하고 리스트 버퍼에 루프를 수행하는 방식을 선택한다.

```scala
final override def map[B](f: A => B): List[B] = {
  if (this eq Nil) Nil else {
    val h = new ::[B](f(head), Nil)
    var t: :: [B] = h
    var rest = tail
    while (rest ne Nil) {
      val nx = new ::(f(rest.head), Nil)
      t.next = nx
      rest = rest.tail
    }
    h
  }
}
```

```scala
package scala.collection.immutable
class ListBuffer[A] extends Buffer[A] {
  private var first: List[A] = Nil
  private var list0: ::[A] = null
  private var aliased: Boolean = false
  ...
}
```

ListBuffer 의 특성을 결정하는 세가지 비공개 필드를 볼 수 있다.

* first: 버퍼에 저장된 모든 요소의 리스트를 가르킨다.
* last0: 리스트의 마지막 `::` 셀을 가리킨다.
* aliased: `toList`를 사용해 버퍼를 리스트로 바꾼 적이 있는지 표시한다.

### 22.4 외부에서 볼 때는 함수형

리스트가 외부에서는 완전히 함수적이지만, 내부에서는 리스트 버퍼를 사용해 명령형으로 되어 있다.

이는 순수하지 않는 연산의 효과가 미치는 범위를 주의깊게 제한함으로써 함수적 순수성을 효율적으로 달성하려는 것이다.

```scala
val ys = 1 :: xs
val zs = 2 :: xs
```

`ys` 와 `zs` 는 꼬리를 공유한다.

효율을 위해서 필수적이며, xs 에 새로운 원소를 추가할 때마다 전체를 복사해야 한다면 훨씬 느릴것이다.

```scala
// 스칼라에서는 불가능
ys.drop(2).tail = Nil
```

부수 효과로 `ys` 와 `zs` 리스트도 줄어들 수 있다.

보통 `::` 는 분할 정복 (divide-and-conquer) 스타일의 재귀적 알고리즘에 잘 맞아 떨어진다.

리스트 버퍼는 좀 더 전통적인 루프 스타일에서 많이 사용한다.

### 22.5 결론

리스트는 스칼라에서 가장 많이 사용하는 데이터 구조중 하나이며, 세밀하고 구현되어 있다.

## Chapter 23 for 표현식 다시보기

```scala
case class Person(
  name: String,
  isMale: Boolean,
  children: Person*
)

val lara = Person("Lara", false)
val bob = Person("Bob", true)
val julie = Person("Julie", false, lara, bob)
val persons = List(lara, bob, julie)
```

모든 엄마와 자식의 쌍을 찾고 싶다.

```scala
persons 
  filter (p => !p.isMale) 
  flatMap (p => (p.children map (c => (p.name, c.name))))
```

```scala
persons 
  withFilter (p => !p.isMale) 
  flatMap (p => (p.children map (c => (p.name, c.name))))
```

```scala
for (
  p <- persons
  if !p.isMale
  c <- p.children
) yield (p.name, c.name)
```

이 식들의 결과는 완전히 같다.

스칼라 컴파일러는 두 번째 질의를 첫 번째 것으로 변환한다.

### 23.1 for 표현식

일반적인 for 표현식은 다음과 같다.

```scala
for ( seq ) yield expr
```

여기서 `seq` 는 제너레이터 (generator), 정의 (difinition), 필터 (filter) 를 나열한것이다.

```scala
for {
  p <- persons              // 제너레이터
  n = p.name                // 정의
  if (n startWith "To")     // 필터
}
```

제너레이터의 형태는 다음과 같다.

```scala
pat <- expr
```

`expr` 은 리스트를 반환한다.

정의의 형태는 다음과 같다.

```scala
pat = expr
```

`pat` 패턴을 `expr` 의 값에 바인딩한다. (`val` 정의 같은 역활을 한다.)

필터의 형태는 다음과 같다.

```scala
if expr
```

여기서 `expr` 은 Boolean 의 값이다. 필터는 `expr` 이 `false` 하는 값을 이터레이션에서 제외하도록 만든다.

### 23.2 n 여왕 문제

> 책 예제코드 및 설명 참고

### 23.3 for 식으로 질의하기

```scala
case class Book(title: String, authors: String*)
```

```scala
val books: List[Book] =
  List(
    Book(
      "Structure and Interpretation of Computer Programs",
      "Abelson, Harold", "Sussman, Gerald J."
    ),
    Book(
      "Principles of Compiler Design",
      "Aho, Alfred", "Ullman, Jeffrey"
    ),
    Book(
      "Programming in Modula-2",
      "Wirth, Niklaus"
    ),
    Book(
      "Elements of ML Programming",
      "Ullman, Jeffrey"
    ),
    Book(
      "The Java Language Specification", "Gosling, James",
      "Joy, Bill", "Steele, Guy", "Bracha, Gilad"
    )
  )
```

#### 작사의 성이 Gosling인 모든 책의 제목을 찾는다.

```scala
for (
  b <- books
  a <- b.authors
  if a startsWith "Gosling"
) yield b.title
```

#### 제목에 "Program" 이라는 문자열이 들어간 모든 책의 제목을 찾는다.

```scala
for (
  b <- books
  if (b.title indexOf "Program") >= 0
) yield b.title
```

#### 최소한 두 권 이상의 책을 쓴 작가를 모두 찾는다.

```scala
for (
  b1 <- books
  b2 <- books 
  if b1 != b2
  a1 <- b1.authors
  a2 <- b2.authors 
  if a1 == a2
) yield a1
```

### 23.4 for 표현식 반환

#### 제너레이터가 하나밖에 없는 for 표현식의 변환

```scala
for ( x <- expr1 ) yield expr2
```

위 코드는 아래와 같이 변환

```scala
expr1. map( x => expr2 )
```

#### 제터레이터로 시작하고 필터가 하나 있는 for 표현식의 변환

```scala
for (
  x <- expr1 
  if expr2
) yield expr3
```

위 코드는 아래와 같이 변환

```scala
for (x <- expr1 withFilter (x => expr2 )) yield expr3
```

for 표현식을 변환

```scala
expr1 withFilter ( x=>expr2 ) map ( x => expr3 )
```

#### 제너레이터 2개로 시작하는 for 표현식의 변환

```scala
for (x <- expr1 ; y <- expr2; seq) yield expr3
```

위 코드는 아래와 같이 변환

```scala
expr1.flatMap(x => for (y <- expr2; seq) yield expr3  
```

#### 제너레이터에 있는 패턴의 변환

```scala
for ((x1,  ..., xn) <- expr1) yield expr2
```

위 코드는 아래와 같이 변환

```scala
expr1.map { 
  case (x1, ... , xn) => expr2 
}
```

#### 정의 변환

```scala
for ( x <- expr1; y = expr2; seq) yield expr3
```

위 코드는 아래와 같이 변환

```scala
for ((x, y) <- for (x <- expr1) yield (x, expr2); seq) yield expr3
```

#### for 루프 변환

```scala
for (x <- expr1) body
```

위 코드는 아래와 같이 변환

```scala
expr1 foreach (x => body)
```

### 23.5 역방향 적용

모든 for 표현식은 `map`, `flatMap`, `filter` 고차 함수 호출로 변환할 수 있다

하지만 그 반대로도 가능하다.

```scala
object Demo {
  def map[A, B](xs: List[A], f: A => B): List[B] =
    for (x <- xs) yield f(x)

  def flatMap[A, B](xs: List[A], f: A => List[B]): List[B] =
    for (x <- xs; y <- f(x)) yield y

  def filter[A](xs: List[A], p: A => Boolean): List[A] =
    for (x <- xs if p(x)) yield x
}
```

### 23.6 for 일반화

for 표현식은의 변환은 오직 `map`, `flatMap`, `filter` 메서드에만 의존한다.

따라서 for 표기법을 다양한 데이터 타입에 적용할 수 있다.

리스트와 배열에는 `for loop` 도 사용이 가능하다.

for 표현식의 완벽한 지원을 위한 전형적인 설정

```scala
abstract class C[A] {
  def map[B](f: A => B): C[B]
  def flatMap[B](f: A => C[B]): C[B]
  def withFilter(p: A => Boolean): C[A]
  def foreach(b: A => Unit): Unit
}
```

### 23.7 결론

for 표현식의 내부를 살펴보았다.

for 표현식을 지원하도록 구현하는 방법을 살펴보았다.

## Chapter 24 컬렉션 자세히 들여다보기

> 책 참고

## Chapter 25 스칼라 컬렉션 아키텍처

