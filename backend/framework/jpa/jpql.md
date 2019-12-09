# JPQL

## Java Persistence Query Language 란 ?

SQL 과 비슷한 문법을 가진 객체지향 쿼리 입니다.

## 특징

* 테이블이 아닌 객체를 검색하는 객체지향 쿼리
* SQL 을 추상화 했기 때문에 특정 벤더에 종속적이지 않음
* JPA 는 JPQL 을 분석하여 SQL 을 생성한 후 DB 에서 조회

## 기본 문법

1. 대소문자 구분
   * 엔티티와 속성은 대소문자를 구분한다.
     * 엔티티의 이름은 `User` 와 `User` 엔티티의 속성인 `email` 은 대소문자를 구분한다.
   * `SELECT`, `FROM`, `AS` 와 같은 JPQL 의 키워드는 대소문자를 구분하지 않는다.
2. 엔티티 이름
   * `SELECT c FROM` 뒤에 나오는 Category 는 엔티티 이름이다.
   * `@Entity(name="Category")` 로 설정한 이름이다.
   * 해당 속성을 생략하면 기본값으로 클래스 이름을 사용한다.
3. 별칭
   * `SELECT c FROM Category c` 에서 `c` 는 별칭이다.
   * JPQL 에서 엔티티의 별칭을 필수적으로 명시해야 한다.
   * 별칭을 명시하는 `AS` 키워드는 생략 가능하다.

:::tip 참고자료
<https://victorydntmd.tistory.com/205>
:::
