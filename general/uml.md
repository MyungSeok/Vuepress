# UML

## 객체사이의 관계정의

![클래스 관계 종류](/img/A078.png)

**일반화 (Generalization)**

* 일반적으로 상속 (Inheritance) 관계를 정의할 때 사용
* 부모 - 자식 관계를 나타내어 슈퍼 클래스를 서브 클래스로 구체화 (Specialize) 하는 것이다.
* 슈퍼 클래스가 추상 클래스인 경우 메서드 구현시 오버라이딩 할 필요가 있다.

```java
public class User {
  private String id;
  private String password;

  public void login() {
    /* 일반 사용자의 로그인 */
  }
}
```

```java
public class Customer extends User {
 @Override
  public void login() {
    /* Customer 의 로그인 */
  }
}
```

```java
public class Admin extends User {
  @Override
  public void login() {
    /* 관리자의 로그인 */
  }
}
```

**실체화 (Realization)**

* 인터페이스 (interface) 의 명세 혹은 정의 (spec) 만 있는 메서드를 오버라이딩하여 실제 기능으로 구현 하는것을 말한다.
* 인터페이스 (interface) 를 구현 (implementation) 하는 형태

```java
public interface CheckLogic {
  public boolean isTrue();
}
```

```java
public class DateCheckLogin implements CheckLogic {
  @Override
  public boolean isTrue() {
    return true;
  }
}
```

**의존화 (Dependency)**

* 클래스들 간의 가장 약한 관계유형
* 어떤 클래스가 특정 클래스를 참조하는 것을 말한다.

```java
public class User {
  public Schedual createSchdule() {
    return new Schedule();
  }

  public void useSchedule(Schedule schedule) {
    Schedule schedule(2019) = schedule.getScheduleByYear(2019);
  }
}
```

:::tip 참고자료
<http://www.nextree.co.kr/p6753/>
:::
