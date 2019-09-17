# HashMap

## `putIfAbsent()`

Map 객체에 Key 에 해당하는 값이 없으면 값을 넣는다.

```java
default V putIfAbsent(K key, V value) {
  V v = get(key);
  if (v == null) {
      v = put(key, value);
  }

  return v;
}
```

> 값이 없는 상태에서 `putIfAbsent` 를 사용하면 `null` 을 반환한다.

## `computeIfAbsent()`

Map 객체에 Key 에 해당하는 값이 없으면 **매핑 함수를 호출**한다.

`putIfAbsent()` 와 유사하지만 함수 인터페이스를 통한 결과값을 삽입한다.

```java
default V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction) {
  Objects.requireNonNull(mappingFunction);
  V v;
  
  if ((v = get(key)) == null) {
    V newValue;
    if ((newValue = mappingFunction.apply(key)) != null) {
      put(key, newValue);
      return newValue;
    }
  }

  return v;
}
```

## `compute()`

Map 객체에 Key 에 해당하는 값의 존재우무와 상관없이 매핑 함수를 호출한다.

## `computeIfPresent()`

Map 객체에 Key 에 해당하는 값이 있으면 매핑 함수를 호출한다.

## `getOfDefault`

Map 객체에 값이 없으면 지정한 default 값 (2번째 인자) 을 가져온다.

```java
productPriceMap.getOrDefault("Fish", 29.4);
```

:::tip 참고자료
<http://tech.javacafe.io/2018/12/03/HashMap/>
:::
