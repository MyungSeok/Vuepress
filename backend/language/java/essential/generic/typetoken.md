# Type Token <Badge text="Generic"/>

타입의 안정성을 확보하기 위하여 클래스의 식별 토큰으로 사용하는 기법을 말한다.

즉 특정 클래스 정보를 넘겨서 안정성을 노리는 기법을 _**TypeToken**_ 이라고 한다.

**타입토큰을 사용하는 `TypeSaftyMap`**

```java
static class TypeSaftyMap {
  Map <Class<?>, Object> map = new HashMap<>();

  <T> void put(Class<T> clazz, T value) {
    map.put(clazz, value);
  }

  <T> get(Class<T> clazz) {
    return clazz.cast(map.get(clazz));
  }
}
```

이 코드는 각 메서드 `T` 를 기반으로 하는 Class 를 식별하는 제네릭이며 동시에 clazz 를 토큰으로 사용하고 있다.

이를 활요하는 코드는 다음과 같다.

```java
TypeSaftyMap map = new TypeSaftyMap();

map.put(String.class, "String");
map.put(Integer.class, 3);
map.put(List.class, Arrays.asList(1, 2, 3));

System.out.println(String.class);
System.out.println(Integer.class);
System.out.println(List.class);
```

## Type Erasure

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

타입 파라메터는 물론이고 슈퍼클래스위 타입 파라메터 및 _**해당 클래스의 정의된 모든 타입 파라메터가 지워진다.**_

제네릭에서 사용하는 Type Variable 을 제거하고 기반타입 (모든 객체의 기반타입인 `Object`) 을 삽입한다.

_**J2SE 5 이전 제네릭이 사용되지 않는 코드의 호환성을 보장하기 위해여 지원되는 마이그레이션 기능**_ 중의 하나이다.

이는 제네릭 출현 이전 하위 호환성 (Java SE 1.4 이하) 을 위해서 _**Byte Code**_ 로 전환하는 과정에서 제네릭 타입을 제거한다.

위 코드를 예시로 아래와 같이 작성해보자

```java
map.put(List.class, Arrays.asList(1, 2, 3));
map.put(List.class, Arrays.asList("1", "2", "3"));
```

위 코드에서는 문제점은 동일한 클래스에 다른 값을 넣으면 덮어 씌여진다.  
또한 값에 들어가는 두개의 객체는 서로 다른 제네릭 값이기 때문에 다른 타입이다.

엄밀히 말하면 `List.class` 가 아닌 `List<Integer>.class` `List<String>.class` 이다.  
이 두개를 동일하게 아래와 같이 대입하면 에러이다.

```java
map.put(List<Integer>.class, Arrays.asList(1, 2, 3));
map.put(List<String>.class, Arrays.asList("1", "2", "3"));
```

이와 같이 타입 소거에 의해 런타임 시점에 타입안정성이 보장되지 않기 때문에 [Super Type Token](?#super-type-token) 이 출현하였다.

:::tip 타입 구체화 (Type Reification)
Java 와는 다르게 _**C#**_ 에서는 제네릭 사용시 타입소거가 아닌 타입 구체화 방식을 통해 제네릭을 구현했다.
이는 컴파일시 _**Byte Code**_ 변환시에도 타입이 소거가 되지 않고 실 타입정보를 _**Byte Code**_ 안에 보존하는것인데

이로 인해 _**C#**_ 은 제네릭 출현 이전의 하위호환성을 포기하는 방식을 채택한 것이다.
:::

:::danger
Bounded Type 제약 조건은 타입 소거에 포함되지 않는다.
:::

## Super Type Token

일반적으로 제네릭 타입은 컴파일 시점 (Byte Code 로 변환) 에 _**Type Erasure**_ 에 의해 타입 정보가 소거되는데

부모 클래스 (Super Class) 를 제네릭 타입을 통해 상속이 되면 컴파일 (Byte Code 로 변환) 해도 제네릭 정보 (실 타입 인자) 가 보존되어 런타임 시에 [Reflection](/backend/language/java/essential/reflection) 을 이용하여 타입 정보를 얻어올 수 있다.

```java
// 제네릭 부모 클래스
class Parent<T> {
  T value;
}

// 정적으로 정의된 부모를 상속하는 서브 클래스
class Child extends Parent<String> {
  ...
}
```

**리플렉션을 이용한 부모의 제네릭 타입 구하기**

```java
Child child = new Child();

// 부모의 제네릭 클래스 정보를 얻음
Type type = child.getClass().getGenericSuperclass();

// 타입으로부터 파라메터 타입을 다시 얻음
ParameterizedType paramType = (ParameterizedType) type;

// 파라메터 타입의 인자를 확인하면 그 안에 제네릭 타입이 들어있음
System.out.println(paramType.getActualTypeArguments()[0]);  // String
```

위를 활용하여 추상화한 `TypeReference` 클래스를 작성한다.

**TypeReference Class**

```java
abstract class TypeReference<T> {
  Type type;

  public TypeReference() {
    Type parentType = getClass.getGenericSuperclass();
    this.type = ((ParameterizedType) parentType).getActualTypeArguments()[0];
  }
}
```

작성된 `TypeReference` 클래스를 이용하여 `TypeSaftyMap` 을 개선한다.

**개선된 `TypeSaftyMap` Class**

```java
class TypeSaftyMap {
  Map<TypeReference<?>, Object> map = new HashMap<>();

  <T> void put(TypeReference<T> tRef, T value) {
    map.put(tRef, value);
  }

  <T> get(TypeReference<T> tRef) {
    return ((Class<T>) tRef.type).cast(map.get(tRef));
  }
}
```

위 코드는 `TypeReference` 클래스가 인스턴스 형으로 `get` 메서드에 삽입되어 참조형값 토큰으로 되어 버렸다.

이를 보안하려면 TypeReference 클래스가 해시맵에서 인스턴스형으로 식별되지 않고 타입으로 식별 되도록 `hashCode` 와 `equals` 를 재정의 해줘야 한다.

**hashCode 와 equals 를 재정의한 `TypeReference`**

```java
abstract class TypeReference<T> {
  Type type;

  public TypeReference() {
      Type parentType = getClass().getGenericSuperclass();

      if (parentType instanceof ParameterizedType) {
          this.type = ((ParameterizedType) parentType).getActualTypeArguments()[0];
      } else throw new RuntimeException();
  }

  public int hashCode() {
      return type.hashCode();
  }

  public boolean equals(Object obj) {
      if (this == obj) return true;
      if (obj == null || getClass().getSuperclass() != obj.getClass().getSuperclass()) return false;

      TypeReference<?> that = (TypeReference<?>) obj;

      return type.equals(that.type);
  }

  public String toString() {
      return type.getTypeName();
  }
}
```

**제네릭 익명 인스턴스 확인**

```java
TypeSaftyMap map = new TypeSaftyMap();
map.put(new TypeReference<Integer>(){}, 3);
map.put(new TypeReference<String>(){}, "ABC");

// java.lang.Integer
System.out.println(new TypeReference<Integer>(){});

// java.lang.String
System.out.println(new TypeReference<String>(){});

// 3
System.out.println(map.get(new TypeReference<Integer>(){}));
// ABC
System.out.println(map.get(new TypeReference<String>(){}));

//에러발생
System.out.println(map.get(new TypeReference<List<Integer>>(){}));
//에러발생
System.out.println(map.get(new TypeReference<List<String>>(){}));

```

**서브 제네릭 익명클래스 변경**

```java
class TypeSaftyMap {
  Map<TypeReference<?>, Object> map = new HashMap<>();

  <T> void put(TypeReference<T> typeRef, T value) {
    map.put(typeRef, value);
  }

  <T> get(TypeReference<T> typeRef) {
    // 일반 클래스
    if (typeRef.type instanceof Class<?>) {
      return ((Class<T>) typeRef).cast(map.get(typeRef));
    } else {
      return ((Class<T>) ((ParameterizedType) typeRef.type).getRawType()).case(map.get(typeRef));
    }
  }
}
```

> 익명 클래스를 사용하는 이유는 _**제네릭 타입 파라메터를 전달하기 위한 용도**_ 이다.

**서브 제네릭 클래스 확인**

```java
TypeSaftyMap map = new TypeSaftyMap();
map.put(new TypeReference<List<Integer>>(){}, Array.asList(1,2,3));
map.put(new TypeReference<List<String>>(){}, Array.asList("a","b","c"));

//[1,2,3]
System.out.println(map.get(new TypeReference<List<Integer>>(){}));
//["a","b","c"]
System.out.println(map.get(new TypeReference<List<String>>(){}));

```

:::tip 참고자료
<https://www.bsidesoft.com/?p=2903>  
<https://multifrontgarden.tistory.com/135>
:::
