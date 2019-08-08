# Array

배열은 연속된 속성으로 리스트와 유사한 성격을 지닌다.

하지만 배열은 리스트와 다르게 **불변 (immutable) 속성**이다.

때문에 **객체를 복사할 때 안전성을 보장**한다.

배열은 최초의 길이를 지정한 이후에는 크기 변경이 불가능하다

또한 **배열은 공변 (covariant) 타입으로 제네릭에서는 배열타입의 사용이 불가능** 하다.

## 배열의 선언

배열의 선언은 여러가지 방법이 있다.

아래 방법들이 다 동일한 배열의 선언 방법이다.

```java
String[] str = new String[](16);
```

```java
String str[] = new String[](16);
```

```java
String str[] = new String[]{"A", "B", "C"};
```

## 배열의 복사

**`System.arraycopy` 를 이용한 복사**

```java
String[] org_ary = new String[]{"A", "B", "C"};

String[] clone_ary = new String[](org_ary.length);

System.arraycopy(org_ary, 0, clone_ary, 0, org_ary.length);

Arrays.stream(clone_ary)
  .forEach(System.out::print);
```

```bash
ABC
```

**`clone()` 을 이용한 복사**

```java
String[] org_ary = new String[]{"A", "B", "C"};

String[] clone_ary = org_ary.clone();

Arrays.stream(clone_ary)
  .forEach(System.out::print);
```

```bash
ABC
```

:::tip 참고자료
<https://m.blog.naver.com/PostView.nhn?blogId=justkukaro&logNo=220685344509&proxyReferer=https%3A%2F%2Fwww.google.com%2F>
:::
