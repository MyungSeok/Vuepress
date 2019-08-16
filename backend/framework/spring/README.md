# Spring

스프링 프레임워크란 자바의 객체지향 관점의 셀계를 프레임워크의 형태로 구현해 놓은 것이며

그 구현 과정에서 SOLID 와 같은 객체 지향 설계의 원칙들을 기반으로 한다.

스프링 프레임워크의 전반적인 이야기를 다루도록 한다.

:::tip 참고자료
<https://spring.io/projects>
:::

## 아티팩트 (Artifact)

아티팩트는 소프트웨어 개발 프로젝트를 진행하면서 생성하는 다양한 _**산출물**_ 을 의미한다.

통상적으로는 _**라이브러리와 동일한 의미로 해석**_ 되며 `.jar`, `.war`, `.ear` 등의 확장자를 갖게된다.

### 아티팩트 저장소 (Artifact Repository)

아티팩트 저장소는 아티팩트와 메타데이터를 저장하고 관리하는 저장소를 의미한다.

저장소는 계층구조로 접근 가능하며 이 계층적 구조를 GAV (Group, Artifact, Version) 구조라고 하며 메이븐 (Maven) 에서 의존성을 찾을 때 참고하는 구조이기도 한다.

넥서스 (Nexus) 가 이 저장소에 사용되는 대표적인 제품이다.

:::tip 참고자료
<https://www.lesstif.com/pages/viewpage.action?pageId=18219542>
:::

## `@Autowired` vs `@Qualifier` 의 차이

`@Autowired` 는 자동 주입 기능으로 스프링이 알아서 의존 객체를 찾아서 명시해준다.  
즉 자동 주입기능을 사용하면 별도의 설정이 없어도 의존 Bean 객체를 찾아서 주입해준다.

하지만 같은 타입의 빈이 두개 이상 존재할 경우에는 컨테이너 초기화 하는 과정에서 에러가 발생하기 때문에 주입할 객체를 특정 지어줘야 한다.  
이때 `@Qualifier` 를 사용해 줘야 한다.

## `VO` vs `DTO` vs `DAO` 의 차이

**VO (Value Object)**

* `read only` 속성을 갖는다.
* 대체로 불변 특성을 가지며 `equals()` 로 비교할때 모든 값을 비교해야 한다.
* 간단한 독립체 혹은 객체 (Entity) 를 의미한다.

**DTO (Data Transfer Object : 데이터 전송 객체)**

* `VO` 와 `DTO` 를 동일 개념 상에 놓는 경우 대부분이다.
* 네트워크 통신 (서버-서버, 클라이언트-서버) 을 할 때 주로 사용되는 데이터 객체이다.

**`DAO`**

* 데이터 접근을 목적으로 하는 객체
* 여러 사용자가 `DAO` 의 인터페이스를 사용하여 필요한 자료에 접근 하도록 하는 것이 개념이다.
* DB 에 대한 `insert` `update` `delete` `select` 를 처리한다.
* 단일 책임의 원칙 개념의 성격을 가지며 대부분의 데이터베이스에 적용이 가능하다.

## PreparedStatement 와 Statement 차이

가장 큰 차이점은 캐시 (Cache) 사용여부이다.

**Statement 실행 순서**

1. Query Statement 분석
2. Compile
3. Excute

Statement 를 사용하게 되면 매번 Query 를 수행할 때마다 1 ~ 3 단계를 수행하게 되고 PreparedStatement 는 처음 한번만 세 단계를 수행하고 나머지는 캐시에 담아 재사용을 한다.

**Statement**

```java
String sqlStr = "SELECT name, memo FROM TABLE WHERE num = " + num;
Statement stmt = conn.createStatement();
ResultSet result = stmt.executeQuery(sqlStr);
```

**Preparedstatement**

```java
String sqlStr = "SELECT name, memo FROM TABLE WHERE num = ?";
PreparedStatement stmt = conn.prepareStatement(sqlStr);
pstmt.setInt(1, num);
ResultSet result = pstmt.exceuteQuery();
```

동일한 Query 를 반복적으로 사용할 때는 _**PreparedStatement**_ 가 DB 에 훨씬 적은 부담을 주며 성능도 우수하다.

만약 _**Dynamic SQL 을 사용할 경우**_ 매번 조건절이 틀려지게 됨으로 Statement 가 낫다. (캐싱의 장점을 잃어버림)

:::tip 참고자료
<https://devbox.tistory.com/entry/Comporison>
:::

## `ajax` 에서 넘긴 `JSON.stringify` 파라메터 `@RequestBody` 로 받기

```javascript
$.ajax({
  method: 'post',
  url: '/api/encrypt',
  data: JSON.stringify(data),
  contentType:'application/json; charset=utf-8',
  success: function (data) {
    if (data && data.url) {
      var returnUrl = (location.protocol + '//' + location.host + '/' + data.url);

      $('.alert-success > p > span').html($('#encryptUrl').val());

      $('.alert-success > p > a').html(returnUrl);
      $('.alert-success > p > a').attr('href', returnUrl);
    }

    callback();
  },
  error: function (e) {
    console.error(e);
    callback();
  }
});
```

```java
@ResponseBody
@PostMapping(value = { "/encrypt" })
public Object getEncrypt(@RequestBody Shorten shorten) {
    return new HashMap<String, String>() {{
        put("url",ShortenCrypto.set(shorten.getUrl()));
    }};
}
```

:::tip 참고자료
<https://zorba91.tistory.com/16>
:::
