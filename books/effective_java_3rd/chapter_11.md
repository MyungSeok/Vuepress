# Chapter 11 동시성

동시성 프로그래밍은 단일 스레드 프로그래밍보다 어렵다.

잘못될 수 있는 일이 늘어나고 문제를 재현하기도 어렵기 때문이다. 하지만 현재의 멀티코어 프로세스를 잘 활용하려면 반드시 익혀야 하는 기술이다.

## Item 78 공유중인 가변 데이터는 동기화해 사용하라

사용중인 스레드를 멈출때 `Thread.stop` 메서드는 사용하지 말자.

다음은 스레드를 멈추는 올바른 방법이다.

1. 자신의 `boolean` 필드를 폴링하면서 그 값이 `true` 가 되면 멈춘다.
2. 이 `boolean` 필드를 `false` 로 초기화 해놓고 다른 스레드에서 이 스레드를 멈추고자 할때 true 로 변경한다.

> `boolean` 필드를 읽고 쓰는 작업은 원자적이다.

아래 코드는 무한하게 실행되는 코드이다.

```java
public class StopThread {
  private static boolean stopRequest;

  public static void main(String[] args) throws InterruptedException {
    Thread backgroundThread = new Thread(() -> {
      int i = 0;
      while(!stopRequest)
        i++;
    });
    backgroundThread.start();

    TimeUnit.SECONDS.sleep(1);
    stopRequested = true;
  }
}
```

위 코드에서 `stopRequest` 필드의 읽기와 쓰기 작업시 동기화해 접근해야 한다.

```java {4,5,6,8,9,10,15,21}
public class StopThread {
  private static boolean stopRequest;

  private static synchronized void requestStop() {
    stopRequested = true;
  }

  private static synchronized boolean stopRequested() {
    return stopRequested;
  }

  public static void main(String[] args) throws InterruptedException {
    Thread backgroundThread = new Thread(() -> {
      int i = 0;
      while(!stopRequested())
        i++;
    });
    backgroundThread.start();

    TimeUnit.SECONDS.sleep(1);
    requestStop();
  }
}
```

읽기와 쓰기가 모두 동기화 되지 않으면 동작을 보장하지 않는다.

`volatile` 한정자는 베타적 수행과는 관계 없지만 항상 가장 최근에 기록된 값을 읽도록 보장한다.

```java {2}
public class StopThread {
  private static volatile boolean stopRequest;

  public static void main(String[] args) throws InterruptedException {
    Thread backgroundThread = new Thread(() -> {
      int i = 0;
      while (!stopRequested) i++;
    });
    backgroundThread.start();

    TimeUnit.SECONDS.sleep(1);
    stopRequested = true;
  }
}
```

:::tip InterruptedException

`InterruptedException` 는 현재 실행중인 스레이드에서 `Thread.interrupt()` 를 호출한 누군가를 의미한다.

해당 이벤트가 일어난다면 아래와 같이 최대한 빨리 종료해야 한다.

```java
try {
  Thread.sleep(10000);
} catch (InterruptedException e) {
  Thread.currentThread().interrupt();
  throw new AssertionError(e);
}
```

위 코드는 `throw` 되기 이전의 스레드 인터럽트 상태를 먼저 복원한 다음에 기본 **invariant** 가 위반되었음을 나타내는 `AssertionError` 을 `throw` 한다.

<https://riptutorial.com/ko/java/example/2116/interruptedexception의-처리>
:::

가장 좋은 방법은 가변 데이터는 단일 스레드에서만 사용하도록 하며 불변 데이터만 공유하거나 아무것도 공유해서는 안된다.

## Item 79 과도한 동기화는 피해라

과도한 동기화는 성능을 떨어뜨리고, 교착상태에 빠뜨리며 심지어 예측 불가능한 동작을 남길수도 있다.

**응답 불가 혹은 안전 실패 (Safe Failure) 을 피하려면 동기화 메서드나 동기화 블럭 안을 제어를 클라이언트에게 양도하면 안된다.**

* 동기화 영역 안에는 재정의 할 수있는 메서드는 호출하면 안된다.
* 클라이언트가 넘겨준 함수 객체를 호출해서도 안된다.

외부의 메서드는 어떠한 일을 할 수 있는지 보장하기 어려워 예외, 교착상태, 데이터의 훼손을 야기시킬수도 있다.

때문에 **동기화 영역에서는 가능한 일을 적게 하는것이다.**

가변 클래스를 작성하려거든 다음 두가지의 방법이 있다.

* 동기화를 전혀 하지 말고 그 클래스를 동시에 사용하는 클래스가 외부에서 알아서 동기화 하게 만들자
* 동기화를 내부에서 수행해 Thread Safe 한 클래스로 만들자

`StringBuffer` 인스턴스는 단일 스레드 임에도 불구하고 내부적으로 동기화를 수행한다  
때문에 `StringBuilder` 를 통하여 동기화를 제거하였다. (`StringBuffer` - 동기화 = `StringBuilder`)

`java.util.Random` 도 이와 동일한 이유로 `java.util.concurrent.ThreadLocalRandom` 으로 대체 되었다.

## Item 80 스레드보다는 실행자, 태스크, 스트림을 애용하라.

`java.util.concurrent` 의 패키지는 실행자 프레임워크 (Executor Framework) 라고하는 인터페이스 기반의 유연한 태스크 실행 기능을 담고 있다.

```java
// 실행자 생성
ExecutorService exec = Executors.newSingleThreadExecutor();

// 실행자에 태스크를 넘김
exec.execute(runnable);

// 실행자 종료
exec.shutdown();
```

대부분의 동시성 프로그래밍을 이용시 `java.util.concurrent` 패키지 내에서 도움을 받을수 있다.

## Item 81 wait와 notify보다는 동시성 유틸리티를 애용하라.

`java.util.concurrent` 의 고수준 유틸리티는 세가지 범주로 나눌수 있다.

* 실행자 프레임워크 (Executor Framework)
* 동시성 컬렉션 (Concurrent Collection)
* 동기화 장치 (Synchronizer)

동시성 컬렉션은 `List` `Queue` `Map` 과 같은 표준 컬렉션 인터페이스에 동시성을 가미해 구현해 놓은 고성능 컬렉션이다.

**높은 동시성에 도달하기 위해 동기화를 각각 내부에서 수행**한다.

따라서 **동시성 컬렉션에서 동시성을 무시력화하는것은 불가능하며, 외부에서 락을 추가로 사용하면 오히려 속도가 느려진다.**

Java SE 8 에서는 인터페이스에 디폴트 메서드가 추가되었는데 `Map` 의 `pushIfAbsent(key, value)` 가 대표적인 예인다.

`pushIfAbsent(key, value)` 는 주어진 키에 매핑된 값이 아직 없을때만 집어 넣는다.  
기존 값이 있엇다면 그 값을 반환하고 없었다면 `null` 을 반환한다.

아래 코드는 `ConcurrentMap` 으로 구현한 동시성 정규화 맵이다.

```java
private static final ConcurrentMap<String, String> map = new ConcurrentHashMap<>();

public static String intern(String str) {
  String previousValue = map.putIfAbsent(str, str);
  return previousValue == null ? str : previousValue;
}
```

위 코드에서 `ConcurrentHashMap` 의 `get()` 검색 기능이 최적화 되어 있으므로 먼저 get 을 호출하여 `putIfAbsent` 을 호출하면 더 빠르다.

```java {2}
public static String intern(String str) {
  String result = map.get(str);
  if (result == null) {
    result = map.putIfAbsent(str, str);
    if (result == null)
      result = str;
  }
  return result;
}
```

동기화한 컬럭센 맵보다 동시성 컬렉션이 성능적으로 더 우수하다.  
즉 `Collections.synchronizedMap` 보다 `ConcurrentHashMap` 을 사용하는것이 훨씬 좋다.
