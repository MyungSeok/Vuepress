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

제네릭에서 사용하는 Type Variable 을 제거하고 기반타입 (모든 객체의 기반타입인 `Object`) 을 삽입한다.

하위 호환성 (Java SE 1.4 이하) 을 위해서 Byte Code 로 전환하는 과정에서 제네릭 타입을 제거한다.

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

추가 자세한 설명은 [Type Erasure](/backend/language/java/essential/generic/type_erasure) 에서 확인 가능하다.

## Super Type Token

제네릭클래스를 상속받은 클래스에 리플렉션은 이용하여 부모 클래스의 정보를 얻어올수 있는데 이 정보에는 제네릭 정보가 그대로 들어있다.

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
    // type 을 기준으로 식별 (type은 class 이므로 Class 레벨만 식별됨)
    return type.hashCode();
  }

  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass().getSuperclass() != obj.getClass().getSuperclass()) return false;
    TypeReference<?> that = (TypeReference<?>) obj;

    // 두 객체의 type 을 비교
    return type.equals(that.type);
  }
}
```

**제네릭 익명 인스턴스 확인**

```java
TypeSaftyMap map = new TypeSaftyMap();
map.put(new TypeReference<Integer>(){}, 3);
map.put(new TypeReference<String>(){}, "ABC");

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
:::
