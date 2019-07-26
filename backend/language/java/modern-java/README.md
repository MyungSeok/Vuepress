# Modern Java

## J2SE 5 에서 추가 <Badge text="04.10.4 ~ 15.4.14" />

### Generics 추가

### Auto Boxing / Unboxing 지원

### Enumeration 추가

### Varable Parameter 지원

### Static Import 추가

### Concurrentcy API 지원

### `java.util.Scanner` 추가

## J2SE 6 에서 추가 <Badge text="06.12.23 ~ 18.10.18" />

### Java 버전 표기법변경

J2SE -> Java SE 로 변경

### JDBC 4.0 지원

## Java SE 7 에서 추가 <Badge text="11.7.28 ~ 18.10.18" />

### Dynamic Language 지원

### `switch` 문에 String 사용

### try-with-resource 지원

### Diamond Operator 지원

## Java SE 8 에서 추가 <Badge text="14.3.18 ~ 18.10.16" />

### Lambda Expression

람다표현식을 사용하여 함수형 프로그래밍으로 사용이 가능하다.

### 인터페이스 `default` 메서드 지원

### Stream API

스트림 API 의 추가를 통하여 데이터의 추상화가 가능하다.

기존 JCF (Java Collection Framework) 를 접근하기 위해 `Iterator` 을 사용하여 코드를 작성하였지만 Stream 을 이용하여 데이터를 추상화하여 다룬다.

### `java.time` 패키지 추가

JDK 1.0 ~ 1.1 부터 제공된 `Date` 클래스 혹은 `Calendar` 클래스를 사용하였다.

`Java SE 8` 에서는 `Joda-Time` 을 이용한 새로운 날짜와 시간 API 를 통하여 개선된 시간 패키지 클래스 이용이 가능하다.

:::tip 참고자료
<http://tcpschool.com/java/java_intro_java8>
:::

### PermGem 영역 삭제

### Annotation Type 추가

### Nashorn

새로운 자바스크립트 프로그래밍 엔진으로 기존에 사용중인 모질라의 Rhino 엔진보다 개선된 성능 향상을 보여준다.

### 마지막 32 bit 지원

이후 버전의 32 bit 버전은 서드파티로만 지원 가능

## Java SE 9 에서 추가 <Badge text="17.9.21 ~ 18.1.16" />

### `private` 인터페이스 메서드 추가

### 이전버전의 `@Deprecate` API 의 삭제

이전 버전의 @Deprecate 가 릴리즈마다 일부 삭제 되었으며 런타임의 모듈화는 하위 호환성을 어느정도 포기하고 성능을 개선한 버전이기 때문에 하위호환성을 생각한다면 고려해봐야 한다.

### Property 인코딩 지원

`UTF-8` 인코딩이 지원된다.

## Java SE 10 에서 추가 <Badge text="18.3.20 ~ 18.7.17" />

### `var` 키워드를 통한 지역 변수 타입 추론

### 병렬 처리 가비지 컬렉션

### Stop-The-World

### Root CA

### JVM 의 Heap 영역을 시스템 메모리가 아닌 다른 종류의 메모리에도 할당할 수 있게 지원

### JIT 컴파일러 추가

### 이전버전의 `@Deprecate` API 는 완전 삭제
