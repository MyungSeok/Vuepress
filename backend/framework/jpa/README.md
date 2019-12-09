# JPA

## Java Persistence API 란 ?

ORM 의 표준 기술로 `Hibernate`, `OpenJPA`, `EclipseLink`, `TopLink` `Essentials`  과 같은 구현체가 있고, 이들의 대한 _**표준 인터페이스**_ 이다.

### 장점

* _**객체지향적으로 개발 및 데이터를 관리**_ 할 수 있기 때문에 비지니스 로직에 집중할 수 있다.
* 테이블의 생성, 변경, 관리가 쉽다.
* 빠른 개발이 가능하다.
* DB 에 의존적이지 않다.
  * MySQL, Oracle, Sysbase, Derby, PostgreSQL 등등의 데이터 베이스 지원
  * POJO 기반의 모델의 지원

### 단점

* 객체지향을 이해하고 개발 해야 하는 만큼 러닝커브가 높다.
* 성능상의 문제가 있을수 있다.

:::tip 참고자료
<http://blog.woniper.net/255>
:::

## 영속성

Entity 를 영구적으로 저장해주는 환경을 의미한다.

### `EntityManagerFactory` 와 `EntityManager`

* EntityManagerFactory
  * 생성하는데 비용이 크다.
  * 어플리케이션 전체적으로 한 번만 생성하여 공유하도록 설계되어 있다.
  * 여러 스레드에서 동시에 접근해도 안전하다.
  * 서로 다른 스레드의 공유 가능
* Entitymanager
  * 생성하는데 비용이 작다.
  * 여러 스레드가 동시에 접근하면 동시성 문제가 발생한다.
  * 스레드간의 공유하지 않는다.

`EntityManager` 는 데이터베이스의 연결이 꼭 필요한 시점까지는 커넥션을 얻지 않습니다.  
`EntityManagerFactory` 와 `EntityManager` 를 생성하는 코드는 아래와 같습니다.

```java
EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("person"); // 파라미터 : 영속성 단위 이름
EntityManager entityManager = entityManagerFactory.createEntityManager();
```

### Persistance Context

영속성 컨텍스트 (Persistance Context) 는 엔티티를 영구적으로 저장하는 환경 이라는 뜻이다.

`EntityManager` 를 이용하여 Entity를 저장하거나 조회할 때 EntityManager 는 영속성 컨텍스트에 Entity 를 보관하고 관리한다.

`[EntityManager 객체].persist([Entity 객체])` 를 실행하면 영속성 컨텍스트가 Entity 를 관리하게 된다.

Persistance Context 는 눈에 보이지 않는 _**논리적인 개념**_ 이다.  
또한 `EntityManager` 를 하나 생성할 때 하나가 만들어지며, EntityManager 를 통하여 접근할 수 있고 관리할 수 있다.

Persistance Context 의 특징은 아래와 같다.

* 영속성 컨텍스트는 Entity 를 식별자 값으로 구분합니다.
  * `Entity` 에서 `@Id` 어노테이션을 통하여 지정한 멤버 변수가 영속성 컨텍스트에 식별자 값으로 저장된다.

* JPA 는 보통 트랜잭션을 커밋 하는 순간 영속성 컨텍스트에 새로 저장된 Entity 를 데이터베이스에 반영한다.
  * 이러한 과정을 `flush` 라고 한다.

* 1차 캐시를 사용한다.
  * 영속성 컨텍스트 내부에 존재하는 캐시 (Map) 을 1차 캐시라고 한다.
  * 영속 상태의 `Entity` 는 모두 이곳에 저장되며 키는 `@Id` 로 매핑한 식별자이며 값은 Entity 인스턴스이다.
  * `entityManager.find()` 메서드를 호출하면 먼저 1차 캐시에서 Entity 를 찾고, 만약 찾는 Entity 가 1차 캐시에 없으면 데이터베이스에서 조회한 후 1차 캐시에 저장하고 영속 상태인 해당 객체를 반환한다.

* 객체의 동일성을 보장한다.
  * 1차 캐시에 있는 같은 Entity 를 반환하기 때문에 Entity 의 동일성을 보장한다.

* 트랜잭션을 지원하는 쓰기 지연을 수행한다.
  * EntityManager 는 트랜잭션을 커밋 하기 직전까지 데이터베이스에 Entity를 저장하지 않고 영속성 컨텍스트의 내부 SQL 저장소에 생성 쿼리를 저장해 둔다.
  * 이후 커밋을 하게 되면 저장해두었던 쿼리를 데이터베이스에 보냅니다.

* 변경을 감지한다.
  * 영속성 컨텍스트에는 이전 flush() 때의 Entity 상태를 복사해서 저장해둔 스냅샷이 존재한다.
  * JPA 는 `flush()` 시점에 스냅샷과 Entity 를 비교해 변경된 Entity 를 찾는다.
  * 만약 변경된 Entity 가 있다면 각각의 객체에 대한 수정 쿼리를 만들어 쓰기 지연 SQL 저장소에 저장한 후 한꺼번에 데이터베이스로 보내 트랜잭션을 커밋한다.
  * 변경 감지는 영속성 컨텍스트가 관리하는 영속 상태의 엔티티에만 적용되며, 준영속 상태의 객체는 감지하지 못한다.

* 지연 로딩을 수행한다.
  * 실제 객체 대신 프록시 객체를 로딩해두고 해당 객체를 실제 사용할 때 영속성 컨텍스트를 통해 데이터를 불러오는 방법이다.

### Life Cycle

![Entity 생명주기](/img/A097.png)

Entity 는 위와 같이 4가지 상태가 존재한다.

* 비영속 (new)

영속성 컨텍스트와 전혀 관계가 없는 상태

객체 생성

```java
Person kim = new Person("Kim");
```

* 영속 (managed)

영속성 컨텍스트에 저장된 상태

객체 생성 후 EntityManager 를 통하여 영속성 컨텍스트에 저장

```java
entityManager.persist(kim);
```

* 준영속 (detached)

영속성 컨텍스트에 저장되었다가 분리된 상태

영속성 컨텍스트가 영속 상태였던 Entity 를 관리하지 않음 (3가지 방법)

```java
entityManager.detach(kim);
entityManager.closed(); // 영속성 컨텍스트 종료
entityManager.clear(); // 영속성 컨텍스트 초기화
```

준영속 상태가 되면 1차 캐시부터 쓰기지연 SQL 저장소까지 해당 엔티티를 관리하기 위한 모든 정보가 제거됨

> 영속성 컨텍스트가 제공하였던 어떠한 기능들 (1차 캐시) 등을 제공하지 않는다.  
> 이미 한번 영속 상태였기 때문에 반드시 식별자 값을 가지고 있다.
> 지연 로딩 시 문제가 발생한다.

* 삭제 (removed)

삭제된 상태

영속성 컨텍스트와 데이터베이서의 Entity 삭제

```java
entityManager.remove(kim);
```

### 준영속 -> 영속 (merge)

준영속 상태를 영속 상태로 변경하려면 병합 (merge) 과정을 거쳐야 한다.

```java
Person kim = new Person(1, "kim");
entityManager.persist(kim);
entityManager.detech(kim);
kim.setUserName("myungseok");
Person mergedKim = entityManager.merge(kim);
```

```java
kim.getUserName();  // kim
mergedKim.getUserName();  // myungseok
entityManager.contains(kim);  // false
entityManager.contains(mergedKim);  // true
```

위와 같이 `merge()` 메서드를 수행하면 이전 Entity 인 `kim` 이 영속 상태로 변하는게 아니라 새로운 영속 상태의 Entity 를 반환한다.  
따라서 `kim` 과 `mergedKim` 은 서로 같은 객체가 아니다.

`kim` 객체는 `merge()` 후에도 준영속 상태로 남아있게 된다.

### `flush()`

`flush()` 는 아래의 과정에 따라 영속성 컨텍스트의 변경사항을 데이터 베이스에 반영한다.

1. 변경감지가 동작하여 영속성 컨텍스트에 있는 모든 Entity 를 스냅샷과 비교한 후 수정된 Entity 를 찾는다.
2. 수정된 Entity 는 수정 쿼리를 만들어 쓰기 지연 SQL 저장소에 저장한다. (등록, 수정, 삭제)
3. 쓰기 지연 SQL 저장소의 쿼리를 데이터베이스에 전송

`flush()` 을 호출하는 방법은 아래 3가지 이다.

* 직접호출
  * EntityManager 의 `flush()` 를 직접 호출해 강제로 `flush()` 하는 방법이다.
  * 거의 사용하지 않는다.
* 트랜잭션 커밋시 플러시 자동 호출
  * JPA 는 트랜잭션을 커밋할 때 자동으로 `flush()` 을 호출한다.
* JPQL 쿼리 실행 시 `flush()` 자동 호출
  * JPQL 같은 객체지향 쿼리를 호출할 때도 쿼리 실행 직전에 `flush()` 가 자동으로 호출된다.

:::tip 참고자료
<http://wonwoo.ml/index.php/post/997>  
<https://hyeooona825.tistory.com/87>  
<https://gmlwjd9405.github.io/2019/02/01/orm.html>
:::
