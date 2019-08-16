# HashMap

## `putIfAbsent()`

Map 객체에 해당 키값으로 조회하여 값이 있으면 넣지 않고 없으면 넣는다.

```java
default V putIfAbsent(K key, V value) {
  V v = get(key);
  if (v == null) {
      v = put(key, value);
  }

  return v;
}
```

## `computeIfAbsent()`

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

## `computeIfPresent()`

:::tip 참고자료
<http://tech.javacafe.io/2018/12/03/HashMap/>
:::
