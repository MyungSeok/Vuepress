# Exception

Java 에서는 기본적으로 2가지의 에러 유형이 있다.

:::tip `Error` 와 `Exception` 의 차이
Error와 Exception은 같다고 생각할 수도 있지만, 사실 큰 차이가 있다.  

에러는 메모리 부족이나 스택오버플로우와 같이 발생하면 복구할 수 없는 심각한 오류이고,  
예외는 발생하더라도 수습할 수 있는 비교적 덜 심각한 오류이다.
:::

## Checked Exception

`Checked Exception` 는 외부 환경에 의해 미리 예상 되는 오류이다.

예를 들면 `IOException` `ClassNotFoundException` 등과 같이 _**반드시 예외처리가 필요하다.**_

### IOException

### SQLException

### [AssertionError](https://docs.oracle.com/javase/7/docs/api/java/lang/AssertionError.html) <Badge text="1.4"/>

선언이 실패한것을 나타내기 위해서 발생된다.

## Unchecked Exception (Runtime Exception)

`Unchecked Exception` 는 프로그램 로직상의 문제로 일어나는 로직상의 오류로써 미리 예상할 수 없다.

대표적으로 `RuntimeException` 과 같이 프로그램 실행중에 일어나며 _**반드시 예외처리를 필요로 하지 않는다.**_

### NullPointerException

### [IllegalArgumentException](https://docs.oracle.com/javase/7/docs/api/java/lang/IllegalArgumentException.html) <Badge text="1.0"/>

부정한 인수 또는 부적절한 인수를 메서드에 겆내준것을 나타내기 위해 발생된다.

* `IllegalArgumentException ()`
  * 상세 메세지를 가지지 않는 IllegalArgumentException을 구축합니다.
* `IllegalArgumentException (String  s)`
  * 지정된 상세 메세지를 가지는 IllegalArgumentException을 구축합니다.
* `IllegalArgumentException (String  message, Throwable  cause)` <Badge text="1.5"/>
  * 지정된 상세 메세지 및 원인을 사용해 새로운 예외를 구축합니다.
* `IllegalArgumentException (Throwable  cause)` <Badge text="1.5"/>
  * 지정된 원인 및 상세 메세지를 사용해 새로운 예외를 구축합니다.

### IndexOutOfBoundException

### SystemException

> 예외처리한 객체는 작업이 끝난후 모드 GC 의 대상이 된다.

||Checked Exception|Unchecked Exception|
|:--:|--|--|
|처리여부|반드시 예외처리가 필요|명시적인 처리를 강제하지 않음|
|확인시점|컴파일 단계|실행단계|
|예외 발생 시<br>트랜잭션 여부|roll-back 하지 않음|roll-back 처리|
|대표적인 예외|`Exception` 의 상속을 받는 하위 클래스 중<br>`Runtime Exception`을 제외한 모든 예외|`Runtime Exception` 의 하위 예외 클래스|

:::tip 참고자료
<http://www.nextree.co.kr/p3239/>  
<https://jdh5202.tistory.com/103>
:::
