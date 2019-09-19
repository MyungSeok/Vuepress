# JSTL

## <c:if>

### equals (==)

**`null` 체크**

```java
<c:if test="${null eq value}">
```

**숫자 체크**

```java
<c:if test="${0 eq value}">
```

**문자 체크**

```java
<c:if test="${'0' eq value}">
```

### empty

**`List`, `Map` 객체값 체크**

```java
<c:if test="${empty obj}">
```

**`List`, `Map` 객체값이 비어있지 않는 경우**

```java
<c:if test="${not empty obj}">
```

### not equals (!=)

**`null` 체크**

```java
<c:if test="${null ne value}">
```

**숫자 체크**

```java
<c:if test="${0 ne value}">
```

**문자 체크**

```java
<c:if test="${'0' ne value}">
```
