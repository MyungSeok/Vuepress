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

