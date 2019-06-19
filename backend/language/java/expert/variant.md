# Covariant & Contravariant <Badge text="Generic"/>

## 공변 (covariant)

_**함께(共) 변한(變)다**_ 라는 뜻으로 `a` 가 `A` 의 하위 타입이라면 `a[]` 는 `A[]` 하위 타입이 된다.

_**리스코프 치환 원칙**_ 이 적용된 사례로 자식 (파생) 클래스는 언제나 부모 (기반) 타입과 호환이 되어야 한다라는 특징이 있다. `<? extends T>`

## 반공변 (contravariant)

추상적인 방향으로 타입 변환을 허용 하는것 `<? super T>`

## 무공변 (불공변 : invariant)

오로지 자기 타입만 허용하는 것이다. `<T>`

제네릭 (매개변수화 타입 : Parameterized Types) 이 대표적이며 서로 다른 타입 `List<Type1>` 은 `List<Type2>` 의 상위타입도 하위타입도 아니다.
