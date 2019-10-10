# JUnit

## Junit 5 for String Boot

### Gradle 파일에 추가

기존 다른 의존성 라이브러리와 별도로 `junit-jupiter:5.5.2` 추가

```md {9}
dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
  implementation 'org.springframework.boot:spring-boot-starter-web'
  compileOnly 'org.projectlombok:lombok'
  developmentOnly 'org.springframework.boot:spring-boot-devtools'
  annotationProcessor 'org.projectlombok:lombok'
  testImplementation 'org.springframework.boot:spring-boot-starter-test'

  testCompile 'org.junit.jupiter:junit-jupiter:5.5.2';
}
```

### Spring MockMvc 세팅

**SpringTestUpport.java**

```java
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = ShortenApplication.class)
public abstract class SpringTestSupport { }
```

**SpringMockMvcTestSupport.java**

`@AutoConfigureMockMvc` 어노테이션을 이용하여 자동으로 구성한다.

```java {5}
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

@AutoConfigureMockMvc
public class SpringMockMvcTestSupport extends SpringTestSupport{

    @Autowired
    public MockMvc mockMvc;
}
```

:::tip 참고자료
<https://effectivesquid.tistory.com/entry/Spring-Boot-starter-test-와-Junit5를-이용한-테스트>
:::

## 기본 사용법

### MVC 테스트하기

아래와 같이 `SpringMockMvcTestSupport` 을 상속받아 사용

`mockMvc` 객체에 `perform` 메서드를 이용하여 확인한다.

```java
class ShortenWebControllerTest extends SpringMockMvcTestSupport {
  /**
  * Get으로 호출하면 다음과 같이 동작
  * <pre> - HTTP 코드는 200</pre>
  * <pre> - 반환될 뷰는 index</pre>
  * @see ShortenWebController#getPage()
  * @throws Exception ResultMatcher
  */
  @Test
  @DisplayName("인덱스 페이지 요청")
  void getPage_001() throws Exception {
      mockMvc.perform(
          get("/")
      ).andExpect(
          status().isOk()
      ).andExpect(
          view().name("index")
      );
  }
}
```

`@ParameterizedTest` 어노테이션을 이용하여 입력값을 변화하여 테스트 가능하다.

```java
/**
 * 정규식을 이용하여 유효한 URL 검증함
 * @param candidate 검증할 URL 항목
 */
@ParameterizedTest
@ValueSource(strings = {
    "1",
    "http:",
    "http://",
    "httpx://www.google.com",
    "httpz://www.google.com",
    "http://com",
    "www.com",
    "google.com",
    "www.google.com"
})
@DisplayName("URL 유효성 검증")
@Description("HTTP 프로토콜 및 3차 도메인도 필수로 포함하여야 함")
void isValid(String candidate) {
    assertFalse(URLValidator.isValid(candidate));
}
```

`@MockBean` 이나 `@SpyBean` 과 같이 더미 객체 혹은 실제 생성 객체를 사용하여 테스트 하는 방법이 있으나 추후에 정리하기로 함

:::tip 참고자료
<https://engkimbs.tistory.com/768>  
<https://www.tutorialspoint.com/spring_boot/spring_boot_rest_controller_unit_test.htm>  
<https://jojoldu.tistory.com/226>
:::

## 동시성 테스트 하기

### Fork Join Pool

정확히는 **Fork Join Framework** 라고 하는 프레임워크이다. `ForkJoinPool` 은 이 프레임워크의 대표적인 클래스이며 기본적으로 스레드 풀 서비스의 일종이다.

이 `ForkJoinPool` 의 기본 개념은 큰 업무를 작은 업무 단위로 쪼개고, 각기 다른 CPU 에서 병렬로 실행한 후 결과를 취합하는 방식이다.  
마치 분할 정복 알고리즘과 흡사하면 여러 CPU 코어를 활용하여 동기화와 GC 를 피할수 있는 여러 기법이 사용되었기 때문에 Java 뿐만이 아니라 Scala 에서도 널리 사용되고 있는 병렬 처리 기법이다.

다시 정리하면 아래와 같다.

1. 큰 업무를 작은 단위로 쪼갠다.
2. 부모 스레드로부터 처리 로직을 복사하여 새로운 스레드를 생성하여 업무를 수행 (Fork) 시킨다.
3. `2` 를 반복하다 특정 스레드에서 더이상 Fork 가 일어나지 않고 업무가 완료되면 그 결과를 부모 스레드에서 Join 하여 값을 취합한다.
4. `3` 을 반복하다가 최초의 `ForkJoinPool` 을 생성한 스레드로 값을 리턴하여 작업을 완료한다.

![Fork](/img/A095.png)
![Join](/img/A096.png)

기본적으로 `ExecutorService` 구현체이다.

일반 `ExecutorService` 구현클래스와는 기본적으로 다른점은 _**Work-Stealing**_ 알고리즘이 구현되어 있다는 점이다.

이는 최대한 CPU의 Task 분배시 Idle 를 최소화 하기 위해 고려되었으며 이는 CPU 가 작업이 끝난 Idle 상태가 되면 다른 대기열의 작업을 가져와 처리하는 식의 구현을 해준다.

> 이와 관련한 ForkJoinPool 의 대표 클래스나 예제를 찾아서 확인해보자

:::tip 참고자료
<http://blog.naver.com/PostView.nhn?blogId=2feelus&logNo=220732310413>
:::

### 프로퍼티 파일 추가

`src/test/resources/junit-platform.properties` 파일 경로에 프로퍼티 파라메터 추가 (없으면 새로 생성)

```md
junit.jupiter.execution.parallel.enabled = true
junit.jupiter.execution.parallel.mode.default = concurrent
junit.jupiter.execution.parallel.mode.classes.default = concurrent
```

### 코드 작성

```java
public class 동시성_테스트 {
  public boolean getTrue() {
    return IntStream.rangeClosed(0, Integer.MAX_VALUE)
      .filter(p -> p % 2 == 0)
      .noneMatch(p -> p % 2 == 1);
  }
}
```

```java {1}
@Execution(CONCURRENT)
public class 동시성_테스트Test {

  static 동시성_테스트 t;

  @BeforeAll
  static void BeforeAll() {
    t = new 동시성_테스트();
  }

  @AfterEach
  void AfterEach() {
    System.out.println("\n");
    System.out.println("After Each");
    System.out.println("\n");
  }

  @RepeatedTest(value = 10)
  @DisplayName("테스트 케이스 1")
  void TEST_CASE_1() {
    assertTimeout(Duration.ofMillis(5000), () -> assertTrue(t.getTrue()));
  }

  @RepeatedTest(value = 10)
  @DisplayName("테스트 케이스 2")
  void TEST_CASE_2() {
    assertTimeout(Duration.ofMillis(5000), () -> assertTrue(t.getTrue()));
  }
}
```

`@BeforeAll` 로 테스트 시작전에 인스턴스 객체를 생성하고 각각의 스레드로 10번씩 반복 수행

총 5000 Millisecond 이내에 수행 목적으로 작성함

![동시성 테스트](/img/A094.png)

만약 동시성 테스트 없이 같은 스레드로 수행하려면 아래와 같이 `@Execution(SAME_THREAD)` 어노테이션으로 변경

:::tip 참고자료
<http://antkorwin.com/junit5/junit5_parallel_execution.html>
:::
