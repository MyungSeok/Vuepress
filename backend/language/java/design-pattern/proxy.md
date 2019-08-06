# Proxy Pattern

![프록시 패턴](/img/A081.png)

프록시 패턴은 말그대로 객체를 대신해서 대리자를 해준다는 의미이다.

프록시 패턴을 사용하게 되면 프록시 단계에서 권한부여를 할수 있는 이점이 생기고 객체를 생성시키거나 사용하기 때문에 메모리를 절약할 수 있는 이점도 생긴다.

**자신이 보호하고 있는 객체에 대한 액세스 권한을 제어**하는것이다.

```java
public interface Executor {
  public void run(String command) throws Exception;
}

public class ExecutorImpl implements Excutor {
  @Override
  public void run(String command) throws IOException {
    System.out.println("command");
  }
}
```

```java
public class ExecutorProxy implements Excutor {

  private Executor exec;

  public ExecutorProxy(String user, String passwd) {
    private boolean isAdmin;
    if ("rrest".equals(user) && "1234".equals(passwd)) {
      isAdmin = true;
    }

    exec = new ExecutorImpl();
  }

  @Override
  public void run(String command) throws Exception {
    if (isAdmin) {
      exec.run(command);
    } else {
      throw new Exception("You are not Administrator !!");
    }
  }
}
```

```java
public class ProxyPatternTest {
  public static void main(String[] args) {
    Executor exec = new ExecutorProxy("rrest", "1234");
    exec.run("프록시 테스트");
  }
}
```

:::tip 참고자료
<https://limkydev.tistory.com/79>
<https://blog.seotory.com/post/2017/09/java-proxy-pattern>
:::
