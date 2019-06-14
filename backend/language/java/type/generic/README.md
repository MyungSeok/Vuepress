# Generic 이란?

하나 이상의 매개변수 타입 (Paramter Type) 을 선언하고 있는 클래스나 인터페이스를 제네릭 타입 이라 한다.

**Syntax**

```java
public <타입 파라메터> 리턴타입 메소드명 (매개변수, ...) {
  /* statement */
}
```

**타입의 이름**

아무 문자열이나 사용가능하지만 가독성을 위해 일반적으로 다음 규칙을 따른다.

|키|설명|
|:--|:--|
|E|요소(Element)|
|K|키(Key)|
|N|숫자(Number)|
|T|타입(Type)|
|V|값(Value)|
|S, U, V|두번째, 세번째, 네번째에 선언된 타입|

## Parameterized Type

매개변수화 타입 (Parameterized Type) 은 다음 두가지로 나뉘어 진다.

### Actual Type Parameter

실 타입 매개변수 (Actual Type Parameter) 는 `<>` 안에 _**실사용 타입 자체를 명시**_ 해주는 방식이다.

```java
List<String> list = new ArrayList<>();
```

### Formal Type Parameter

형식 타입 매개변수 (Formal Type Parameter) 타입 매개변수는 `<>` 안에 _**명시적 타입을 주는 방식**_ 이다.

```java
List<E> list = new ArrayList<>();
```

제네릭은 타입 소거자 (Type Erasure) 에 의해 자신의 타입 요소 정보를 삭제한다.

때문에 아래와 같이 실 타입 매개변수 형태의 선언을 컴파일 과정에서 다음과 같이 변경한다.

**Before**

```java
List<String> list = new ArrayList<>();
```

**After**

```java
ArrayList list = new ArrayList();
```

컴파일러는 컴파일 단계에서 `List Collection` 에 `String` 인스턴스만 저장되어야 한다는 것을 인지하며  
또 그것을 보장하기 때문에 `ArrayList` 로 변경하여도 Runtime 시에 동일한 동작을 보장한다.

이러한 방식을 다음 두가지로 나뉜다.

**구체화 타입 (reifiable type)**

* 자신의 타입 정보를 런타임 시에 알고 지키게 하는것
* 런타임에 구체화 하는것
  
**비 구체화 타입 (non-reifiable type)**

* 타입 소거자에 의해 컴파일 타임에 타입정보가 사라지는 것
* 런타임에 구체화 하지 않는것

## Unbounded Wildcard Type

`List<?>` 와 같은 타입을 언바운드 와일드카드 타입 (Unbounded Wildcard Type) 이라고 한다.

> Unbounded : 무한한

이 형태를 이용하는 유형은 다음과 같다.

1. `Object` 클래스에서 제공되는 기능을 사용하여 구현할 수 있는 메서드를 작성하는 경우
2. 타입 파라메터에 의존적이지 않는 일반 클래스의 메서드를 사용하는 경우 (`List.clear`, `List.size`, `Class<?>`)

## Bounded Wildcard Type

바운드 와일드 카드 타입 (Bounded Wildcard Type) 은 `Collection` 계열의 클래스들의 코드에 자주 사용되는 방식이다.

* 무공변 (Invariant)

오로지 자기 타입만 허용하는 것 `<T>`

* 공변 (Covariant)

구체적인 방향으로 타입 변환을 허용하는 것

자기 자신과 자식 객체만 허용 (리스코프 치환 법칙) `<? extends T>`

* 반공변 (Contravariant)

추상적인 방향으로의 타입 변환을 허용하는 것

자기 자신과 부모 객체만 허용 `<? super T>`

:::tip 참고자료
<https://onsil-thegreenhouse.github.io/programming/java/2018/02/17/java_tutorial_1-21/>
<https://medium.com/@joongwon/java-java의-generics-604b562530b3>
:::