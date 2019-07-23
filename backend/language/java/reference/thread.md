# Thread

## Process 와 Thread

프로세스와 스레드는 서로 밀접한 관계에 있으나 서로 다른 개체이다.

* Process
  * OS 로부터 시스템 자원을 할당받는 작업의 단위
  * _**CPU 시간이나 메모리 등의 시스템 자원이 할당되는 독립적인 개체**_
  * 각 프로세스는 별도의 주소 공간에서 실행 되며, _**한 프로세스는 다른 프로세스의 변수나 자료구조에 접근할 수 없음**_
  * 같은 메모리를 읽고 쓰는 프로세스는 생성 가능
  * 프로세스간의 통신은 Pipe, Socket, File 등으로 통신한다.
* Thread
  * _**프로세스가 할당받은 자원**_ 을 이용하는 실행 혹은 흐름의 단위
  * 프로세스와 같은 공간의 Stack 공간을 사용하며 여러 Thread 는 그 상태의 일부를 공유한다.

> _**Multi Thread**_ 환경의 작업시에는 Therad 간의 자원 공유의 _**동기화 문제**_ 에 신경을 써야 한다.

![프로세스의 스레드](/img/A079.png)

:::tip 참고자료
<https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html>
:::

## Thread 구조

@TODO

### Thread 생명주기

@TODO

### Thread 생성방법

아래와 같이 크게 3가지 방법이 있다.

* `Thread` 클래스를 확장 한다.
* `Runnable` 인터페이스를 구현
* Thread Pool 을 생성하기 위해, 어플리케이션에서 `Executor` 프레임워크를 사용한다.

> 'Runnable' 인터페이스는 상속 객체를 필요로 하지 않기 때문에 인터페이스로 적절하다.

이러한 방법들은 대부분 멀티스레드를 만들어 작업을 수행하는 과정으로 멀티스레드 영역에서 자세한 방법들을 소개한다.

### Thread 상태

* `NEW` : Thread 가 실행 준비가 되었습니다.
* `RUNNABLE` : JVM (Java Virtual Machine) 이 Thread 코드를 수행중입니다.
* `BLOCKED` : Thread 가 차단되어 있는 상태 입니다.
* `WAITING` : Thread 다른 Thread 의 작업이 수행되기를 기다립니다.
* `TIMED_WAITING` : Thread 가 다른 Thread 의 지정된 대기시간의 특정 작업을 수행하기까지 기다립니다.
* `TERMIATED` : Thread 의 실행을 완료했습니다.

## Multi Thread

Java 에서는 Multi Thread 환경을 만들어 사용하는 방법은 대표적으로 3가지 방법을 많이 사용한다.

### Thread Class 를 상속받아 사용

Thread Class 를 서브클래싱(subclassing) 하고 `run` Method 를 `Override` 한다.

#### 구현 순서

1. Thread Class 를 상속 받아 내가 시킬 일을 해줄 Class 를 하나 만든다.
2. 위에서 만든 Class 에 `run` Method 안에 시킬 일을 정의해 준다.
3. 메인 Thread 에서 위에서 만는 Class 의 `start` Method 를 호출한다.

> 반드시 `start` 메소드로 실행을 해야 한다.  
> `run` 메소드를 실행하면 메인 Thread 에서 돌아가므로 의미가 없다.

```java
static class AddThread extends Thread {
  @Override
  public void run() {
    int sum = 0;

    for (int i = 1; i < 11; ++i) {
      sum += i;

      System.out.printf("Add Sum is %d\r\n", sum);
    }
  }
}
```

```java
AddThread at = new AddThread();
at.start();
```

### Runnable 인터페이스를 구현하여 사용

`Runnable` 인터페이스를 구현하고 `Runnable` 객체를 Thread 생성자로 전달한다.

#### 구현순서

1. 우선 `Runnable` Interface 를 구현할 Class 를 하나 생성한다.
2. 위에서 만든 Class 의 `run` Method 에 시킬 일을 정의한다.
3. 해당 Class 를 생성하고 Thread 를 생성할 때 인자로 넣어서 생성한다.
4. 메인 Thread에서 위에서 만든 Class 의 `start` Method 를 호출한다.

```java
static class AddThreadRunnable implements Runnable {
  @Override
  public void run() {
    int sum = 0;

    for (int i = 1; i < 11; ++i) {
      sum += i;

      System.out.printf("Add Sum is Runnable %d\r\n", sum);
    }
  }
}
```

```java
Runnable ar = new AddThreadRunnable();
Thread atr = new Thread(ar);

atr.start();
```

Thread 가 할 일을 `run` Method 안에 넣으면 된다.  

Single Thread 프로그램은 `main` Method 가 반환되면 종료되고  
Multi Thread 프로그램은 `run` Method 의 실행이 끝나면 종료된다.  

### Future, Callable, Executor

Java 5 이상에서 지원하는 방식으로 Callback Pattern 으로 쉽게 사용 가능하도록 하는 접근 방법이다.

다양한 종류의 Thread 를 생성한 다음, 여러 Thread 로 부터 원하는 순서대로 값을 얻어올 수 있다.

#### 구현 순서

1. 작업 대상의 `Callable` 객체를 생성한 후 `ExecutorService` 에 등록한다.
2. 작업의 결과는 `Future` 객체가 반환 받는다.
3. `Future` 객체 사용 시 이미 결과가 준비 되어 있는 경우에는 즉시 사용하며, 그렇지 않는 경우에는 Polling Thread 는 준비가 될 때까지 Block 상태가 된다.

:::tip 참고자료
<https://post.naver.com/viewer/postView.nhn?volumeNo=7852076&memberNo=30800755>
:::

## Synchronizred

Java 에서 동기화 영역은 `synchronizred` 키워드로 표시된다.  

동기화는 객체에 대한 동기화로 이루어지는데 여러 Thread 가 한 개의 자원을 사용하고자 할 때 해당 Thread 만 제외하고 나머지 Thread 의 접근을 막는 방법이다.  
블록에 접근을 시도하는 _**다른 Thread 들은 블록 안의 Thread 가 실행을 마치고 블록을 벗어날때까지 차단 (blocked) 상태**_ 가 된다.

대표적으로 _**Log Files**_ 과 같이 서로 다른 프로세스에 접근 가능한 리소스를 대상으로 사용할때 효과적이다.

> 이러한 방식을 _**배타적 접근**_ 이라고 한다.

### 장점

* `thread-safe` 하게 사용이 가능하여 사용자의 의도대로 프로그램의 흐름 제어가 가능하다.  

### 단점

* 프로그램의 성능저하를 일으킬 수 있다.
  * Java 내부적으로 메서드나 변수에 동기화를 하기 위해 `block` & `unblock` 처리를 하게되는데 이런 처리들을 통하여 소비되는 리소스가 프로그램 전반적인 성능에 영향을 준다.

`synchronized` 키워드는 다음 네가지 유형의 블록이 쓰인다.

### Syntax

#### 인스턴스 메소드에 동기화 적용 (Instance Method)

_**특정 부분에 대해서만 동기화를 동기화를 할 필요가 있을 경우**_ 아래 메소드와 같이  
선언문에 있는 `synchronized` 키워드를 통하여 동기화를 한다.

```java
public synchronized void add(int value) {
  this.count += value;
}
```

Instance Method 의 동기화는 _**이 Method 를 가진 Instance (객체) 를 기준**_ 으로 한다.  
하나의 Class 가 동기화된 Instance Method 를 가지면, 동기화는 이 Class 의 하나의 Instance 를 기준으로 이루어지며 한 시점에 오직 하나의 Thread 만이 동기화된 Instance Method 를 실행할 수 있다.

> 하나의 Instance 하나의 Thread 이다.

#### 정적 메소드에 동기화 적용 (Static Method)

인스턴스 메소드의 사용법과 같이 선언문에 있는 `synchronized` 키워드를 통하여 동기화를 한다.

```java
public static synchronized void add(int value) {
  count += value;
}
```

Static Method 의 동기화는 _**이 Method 를 가진 Class (객체) 를 기준**_ 으로 한다.  
JVM 안에 Class 객체는 Class 당 하나만 존재할 수 있으므로, 같은 Class 에 대해서는 오직 한 Thread 에만 동기화된 Static Method 를 실행할 수 있다.

> 하나의 Class 당 하나의 Thread 이다.

#### 인스턴스 메소드 안에 동기화 적용 (Instance Method Codeblock)

동기화를 메소드 전체에 적용하는것이 아닌 메소드의 특정 부분에 적용하는것이 효율적일 때가 있다.

```java
public void add(int value) {
  synchronized(this) {
    this.count += value;
  }
}
```

#### 정적 메소드에 안에 동기화 적용 (Static Method Codeblock)

_**Instance Method Codeblock**_ 과 사용법은 동일하다.

```java
public static void add(int value) {
  synchronized(this) {
    this.count += value;
  }
}
```

:::tip 참고자료
<http://parkcheolu.tistory.com/15>
:::