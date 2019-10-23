# Back-End

## Integer 의 바이트는 ?

* 4 Byte

## short integer 의 최하 / 최상 값은 ?

* -32,768 ~ 32,767

## unsigned Integer 는 ?

* 일반적으로 unsigned int 는 부호비트를 값 비트로 쓸수 있어서 _**2^32 -1**_ (4294967295) 값을 가진다.
* Java 에서는 unsigned int 값이 없으며 long 으로 대체하여 사용한다.

## Compiler 와 Interpreter 의 차이점

* Compiler 는 문서 전체를 다 읽어 기계어로 번역한다. (구문 -> 목적 프로그램)
* Interpreter 는 한줄한줄 행 단위로 읽어서 처리한다. (구문 -> 명령문)

## Java 에서 instanceof 연산자란 ?

* 참조 변수가 **실제로 참조하고 있는 인스턴스의 실제 타입을 알아보기 위해** instanceof 연산자를 사용

## JVM 과 Runtime Area 영역에 대해서 설명

* Java Byte Code 를 실행할 수 있는 프로세스 가상 머신이다.
* 가상머신의 특성으로 OS 에 종속적이지 않아 독립적으로 운영된다.
* 실행 순서는 다음과 같다.
  1. `Java File` 이 `Java Compiler` 에 의해 Class File 로 컴파일 된다.
  2. `Class Loader` 에 의해 데이터들이 `Runtime Area` 에 로드된다.
  3. `Runtime Area` 에서는 영역별로 기능을 분담하여 처리된다.
     * `Method Area`
       * Class, Interface, Method, Field 등의 정보가 보관된다.
       * 임포트된 클래스가 로드되는 영역이다.
       * 모든 Thread 가 공유하는 메모리 영역이다.
     * `Heap Area`
       * 어플리케이션 상에서 데이터를 저장하기 위해 동적으로 사용 및 할당되는 메모리 영역이다.
       * `Method Area` 에 로드된 클래스만 생성 가능하며 클래스 정보를 참고하여 인스턴스를 생성하는 곳이다.
       * Garbage Collection 이 일어나는 영역이다.
     * `Stack Area`
       * Method 가 호출될 때 마다 `Stack Frame` 이라는 데이터 영역이 생성하여 구성
       * Method 의 정보, 지역변수, 파라메터 정보등의 임시데이터가 저장되는 공간이다.
       * Thread 별로 각각 구성된다.
       * Method 가 호출될 때 필요로 하는 변수를 Stack 에 저장하게 되고, Method 실행이 끝나면 Stack 을 반환한다.
     * `PC Register`
       * 실행중인 각각의 Thread 는 별도의 PC Register 를 가지며, 명령이 실행되면 현재 실행중인 명령의 주소를 유지한다.
     * `Native Method Stack`
       * JNI 를 통하여 C/C++ 등의 코드를 수행하기 위한 Stack

* JVM 내에 Runtime Area 에 속하는 메모리 영역중이 하나이다.
* `Java File` 이 `Java Compiler` 에 의해 Class File 로 컴파일 되면 `Class Loader` 에 의해 로드된 데이터들이 애플리케이션을 수행작업 하며 사용되는 저장 및 참조 메모리 영역이다.

* Stack
  * 빠른접근, cpu 에 의해 관리, 지정된 크기, resize 불가
  * 스레드 별로 공유하지 않음
  * 자동 해제
* Heap
  * 전역적으로 접근 가능, 메모리 크기 제한 없음, resize 가능하나 파편화가 가능
  * 서로 다른 스레드가 접근 가능
  * 파편화 가능성
  * 수동 해제

## Quick Sort 란 무엇이고 시간복잡도는 어떻게 되는지 설명

* 일반적으로 정렬 알고리즘중에서 빠르다고 알려진 알고리즘
* 시간 복잡도
  * Best : n log n
  * Worst : n^2
  * Average : n log n
* Pivot 선택노드가 속도에 영향을 줄 수 있음

## Java 에서 `public static void main( ... )` 으로 시작할 때 `public` 과 `static` 을 붙이는 이유는 ?

* 메인 메서드는 진입점 (Entry Point) 를 뜻하며 접근제어자가 `public` 이 되어야 함
* 함수에 static 을 붙이게 되면 instance 화 되기 전에 호출 가능하다.
* 클래스 멤버는 메모리에 로딩된 다음에 사용이 가능하다
* main 함수는 프로그램 최초에 호출되는 함수이기 때문에 객체 생성 이전에 호출할 수 있어야 한다.
* static 이 붙은 클래스나 메서드, 변수는 컴파일시 자동으로 로딩

## 관심의 분리 (Separation Of Concern) 에 대해 설명하고 예를 들어 설명

* 서비스 지향 아키텍쳐 (SOA : Service-Oriented Architecture) 의 핵심 원칙
* 관심이 같은것은 뭉치고 관심사가 다른것은 서로 떨어져 영향을 주지 않도록 설계 및 구현을 하는것

## AOP 이란 ?

* 코드의 재사용을 통해 효율을 올리기 위하여 인프라 로직 같은 공통로직과 비지니스 코드와 같은 핵심 로직을 분리하여 구성하는것
* 로직의 분리를 통하여 핵심 로직에는 영향을 미치지 않고 개발하는 방법
* 비지니스 로직과 공통모듈을 분리하여 핵심로직에 영향을 미치지 않고 사이사이에 공통모듈을 효과적으로 잘 끼워넣는 개발방법
* 공통모듈은 보안, 인증, 로깅 같은 것을 만든 후에 코드 밖에서 이 모듈을 비지니스 로직에 삽입하는것이 AOP 개발 방법이다.
* 코드 밖에서 설정된다는것이 핵심이며 프로그램 흐름을 파악하기 힘들기 때문에 AOP 사용이 많아질경우 유지보수가 어렵다.

## BDD 란 무엇이고 TDD 와 어떤 연관이 있나 ?

* Behavior Driven Development (행위 주도 개발) 의 약자이다.
* BDD 는 소프트웨어의 수행을 위한 것으로 TDD 접근법을 전환한것이다.

## `String` vs `StringBuffer` 차이점은 ?

* `String` Class 인 경우 Character 조작을 위한 것이며 단순한 상태값을 가지고 있는 불변 속성이다.
* `StringBuffer` Class 인 경우 문자열을 재구성하기 위한 것이며 수정이 가능하다.

* `StringBuilder` 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.
* `StringBuffer` 는 _**멀티쓰레드 환경에서 안정적**_ 이다.

## `CheckedException` 과 `UncheckedException` 의 차이와 용도를 설명

* Checked Exception
  * 외부상황에 의해 미리 예상 가능한 오류이다
  * 예) 디스크 오류, 네트워크 오류등 로직 상의 오류와는 무관하게 발생하는 에러.
  * IOException, ClassNotFoundException, CloneNotSupportedException등등
  * RuntimeException을 제외한 Exception을 직접 상속한 모든 예외 클래스는 Checked Exception.
* Unchecked Exception
  * 프로그램 로직 상에 문제로 인해 생기는 오류이다.
  * RuntimeException 이하 모든 하위클래스는 Unchecked exception이다.
  * 발생한 예외에 대하여 반드시 코드상에서 예외 처리를 하도록 요구하지 않는다.
  * NullPointerException의 경우 null을 참조하려는 시도는 프로그램 코드 자체가 잘못된 것.
  * 이런 예방 할 수 없는 오류 조건들은 로직 상에서 처리를 요구

## 객체 재사용이란 무엇인가 ?

* Singleton Instance 와 같이 최초에 한번 생성한 후 재사용하는 것
* ThreadPool, ConnectionPool 등 이외에도 코드내에서 객체를 재사용하는 방법이 있다.

```java
StringBuffer sb = new StringBuffer();
sb.append(“data1”);
System.out.println(sb);
sb.setLength(0);
```

:::tip 참고자료
<https://lkhlkh23.tistory.com/60?category=833712>
:::
