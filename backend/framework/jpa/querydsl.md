# Query DSL

## Query DSL 이란 ?

Query DSL 은 정적 타입을 이용해서 SQL 과 같은 쿼리를 생성할 수 있도록 하는 프레임워크 입니다.

JPQL 처림 문자열로 작성하거나 Mybatis 처럼 XML 파일에 쿼리를 작성하는 대신, QueryDSL 이 제공하는 Fluent API 를 이용하여 쿼리를 생성할 수 있습니다.

즉 JPA 에서 사용했던 SQL 과 비슷하게 생긴 JQPL 조차 사용하지 않습니다. ( := 오류가 적다)

## 장점

* IDE 의 코드 자동완성 기능을 사용
* 문법적으로 잘못된 쿼리를 허용하지 않음
* 도메인 타입과 `property` 를 안전하게 참조할 수 있음
* 도메인 타입의 리펙토링을 더 잘 할 수 있음

Query DSL 은 타입에 안전한 방식으로 쿼리를 실행하기 위한 목적으로 만들어졌습니다.

즉 Query DSL 의 핵심원칙은 _**타입 안정성 (Type Safety)**_ 입니다.

이는 문자열 기반이 아닌 메서드의 호출로 쿼리가 수행되기 때문입니다.

```java
query.form().where()
```

위와 같이 메서드를 호출하여 쿼리를 수행합니다.

## 사용

기본 사용법은 아래와 같다.

```java
@Repository
public class TestRepository {

  @PersistenceContext
  private Entitymanager em;

  ...  
}
```

```java
public List<Book> findAll() {
  JPAQuery query = new JPAQuery(em);

  Book book = new Book("book");

  List<Book> bookList = query.from(book)
                              .orderBy(book.regDate.desc())
                              .list(book);

  return bookList;
}
```

:::tip 참고자료
<https://victorydntmd.tistory.com/206?category=698080>  
<http://www.querydsl.com/static/querydsl/3.4.3/reference/ko-KR/html_single/>
:::
