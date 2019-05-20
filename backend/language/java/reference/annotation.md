# Annotation

어노테이션 (`@`, Annotation) 이란 JDK 5 부터 등장한 기술로 주석이라고는 간단히 표현되었지만 어노테이션에 구현된 정보에 따라 코드의 연결 방향성이 결정된다.

비지니스 로직에는 영향을 주지 않지만 해당 타겟의 연결방법이나 소스코드의 구조를 결정짓는 중요한 기능을 할수도 있다.

어노테이션은 소스 코드에 메타 정보를 삽입하는것 이기 때문에 잘 이용하면 구독성 뿐만이 아니라 체계적인 소스코드 구성의 도움을 준다.

## 커스텀 어노테이션

어노테이션은 기본적으로 인터페이스 형태를 취하고 있으며 `interface` 앞에 `@` 표시를 해준다.
어노테이션 필드에서는 `enum` `String` 이나 기본 자료형 혹은 기본 자료형의 배열들을 사용할 수 있다.

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface CustomAnnotation {
  boolean isCheck() default true;
}
```

### `@Target`

* 어노테이션이 적용될 위치를 선택합니다.

| 유형 | 설명 |
| :-: | :-: |
| ElementType.PACKAGE | 패키지 선언 |
| ElementType.TYPE | 타입 선언 |
| ElementType.ANNOTATION_TYPE | 어노테이션 타입 선언 |
| ElementType.CONSTRUCTOR | 생성자 선언 |
| ElementType.FIELD | 멤버 변수 선언 |
| ElementType.LOCAL_VARIABLE | 지역 변수 선언 |
| ElementType.METHOD | 메서드 선언 |
| ElementType.PARAMETER | 전달인자 선언 |
| ElementType.TYPE_PARAMETER | 전달인자 타입 선언 |
| ElementType.TYPE_USE | 타입 선언 |

### `@Retention`

* 자바 컴파일러가 어노테이션을 다루는 방법을 기술하며 특정 시점까지 영향을 미치는지 결정한다.

| 유형 | 설명 |
| :-: | :-: |
| RetentionPolicy.SOURCE | 컴파일 전까지만 유효<br/>컴파일 이후에는 사라짐 |
| RetentionPolicy.CLASS | 컴파일러가 클래스를 참조할 때까지 유효. |
| RetentionPolicy.RUNTIME | 컴파일 이후에도 JVM에 의해 계속 참조가 가능. <br/>리플렉션 사용 |

### `@Documented`

* 해당 어노테이션을 Javadoc 에 포함시킵니다.

### `@Inherited`

* 어노테이션의 상속을 가능하게 합니다.

### `@Repeatable`

* JDK8 부터 지원
* 연속적으로 어노테이션 선언할 수 있게 지원해준다.

## Java 에서 제공

### `@Override`

* 선언한 메서드가 오버라이드 됨
* 상위 (부모) 클래스 (혹은 인터페이스) 에서 해당 메서드를 찾을 수 없다면 컴파일 에러를 발생시킨다.

### `@Deprecated`

* 해당 메서드가 더 이상 사용되지 않음을 표시
* 만약 사용할 경우 컴파일 경고를 발생

### `@SuppressWarnings`

* 선언한 곳의 컴파일 경고를 무시하도록 한다.

### `@SafeVarargs`

* JDK 7 부터 지원
* 제네릭 같은 가변 인자의 매개변수를 사용할 때의 경고를 무시

### `@FunctionalInterface`

* JDK 8 부터 지원
* 함수형 인터페이스를 지정
* 메서드가 존재하지 않거나, 1개 이상의 메서드 (`default` 메서드 제외) 가 존재할 경우 컴파일 오류를 발생

:::tip 참고자료
<http://www.nextree.co.kr/p5864/>  
<https://elfinlas.github.io/2017/12/14/java-annotation/>  
<https://elfinlas.github.io/2017/12/14/java-custom-anotation-01/>
:::

## Spring 에서 제공

### `@Transactional`

코드기반 트랜잭션 처리 (Programmatic Transaction) 뿐만이 아니라 **선언적 트랜잭션 (Declarative Transaction) 을 지원**

스프링에서 제공하는 트랜잭션 템플릿 클래스를 이용하거나 설정파일, 어노테이션을 이용하여 트랜잭션 범위 및 규칙을 정의할 수 있다.

:::tip 참고자료
<https://crosstheline.tistory.com/96>  
<https://snoopy81.tistory.com/335>
:::