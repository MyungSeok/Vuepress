# Class

## Immutable

생성후 변경 불가능한 객체로서 대표적으로 _`String`_, _`Boolean`_, _`Integer`_, _`Float`_, _`Long`_ 등등이 있다.

> HEAP 영역에서의 값이 바뀌는건 아니다.

불편클래스의 예시는 아래가 대표적이다.

### String / StringBuffer / StringBuilder 의 사용

문자열을 더하는 식에는 `string` 보다는 `stringBuffer` 나 `stringBuilder` 을 사용해야 한다.

`string` 은 새로운 값을 할당할 때마다 새로 생성되기 때문 \(클래스의 메모리 참조 주소가 바뀜\)

`stringBuffer` 나 `stringBuilder` 는 값을 메모리에 append 하는 방식으로 클래스를 별도로 생성하지 않는다.

`stringBuilder` 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.

`stringBuffer` 는 _**멀티쓰레드 환경에서 안정적**_ 이다.

## Exception

Java 에서는 기본적으로 2가지의 에러 유형이 있다.

### Checked Exception

`Checked Exception` 는 외부 환경에 의해 미리 예상 되는 오류이다.

예를 들면 `IOException` `ClassNotFoundException` 등과 같이 _**반드시 예외처리가 필요하다.**_

* IOException
* SQLException

### Unchecked Exception (Runtime Exception)

`Unchecked Exception` 는 프로그램 로직상의 문제로 일어나는 로직상의 오류로써 미리 예상할 수 없다.

대표적으로 `RuntimeException` 과 같이 프로그램 실행중에 일어나며 _**반드시 예외처리를 필요로 하지 않는다.**_

* NullPointerException
* IllegalArgumentException
* IndexOutOfBoundException
* SystemException

> 예외처리한 객체는 작업이 끝난후 모드 GC 의 대상이 된다.

||Checked Exception|Unchecked Exception|
|:--:|--|--|
|처리여부|반드시 예외처리가 필요|명시적인 처리를 강제하지 않음|
|확인시점|컴파일 단계|실행단계|
|예외 발생 시<br>트랜잭션 여부|roll-back 하지 않음|roll-back 처리|
|대표적인 예외|`Exception` 의 상속을 받는 하위 클래스 중<br>`Runtime Exception`을 제외한 모든 예외|`Runtime Exception` 의 하위 예외 클래스|

:::tip 참고자료
<http://www.nextree.co.kr/p3239/>
:::

## String

### String.format()

문자열 포맷을 제공하는 메서드

해당 부분에 맞게 원하는 포맷 형태로 변경되어 바뀌게 된다.

* %s : 스트링
* %d : 숫자
* %f : 실수

**Method Summary**

```java
public static String format (String format, Object... args) {
  /* statement */  
}
```

#### 문자형

|항목|설명|
|:--:|--|
|%s|해당 위치에 문자열을 대치한다.|
|%10s|숫자(10) 만큼 문자열 좌측(+) 에 공백을 채워 문자열 길이를 만든다|
|%-10s|숫자(10) 만큼 문자열 우측(-) 에 공백을 채워 문자열 길이를 만든다|
|%10.2s|점(.) 우측에 해당하는 숫자(2) 만큼 문자열을 자른후 점(.) 좌측 숫자(10)만큼 문자열 _**우측에 공백**_ 을 채워 문자열 길이를 만든다|
|%-10.2s|점(.) 우측에 해당하는 숫자(2) 만큼 문자열을 자른후 점(.) 좌측 숫자(10)만큼 문자열 _**좌측에 공백**_ 을 채워 문자열 길이를 만든다|

```java
String name = "one";

System.out.println(String.format("p1 : %s", name));
```

```text
p1 : one
```

#### 숫자형

|항목|설명|
|:--:|--|
|%d|해당 위치의 숫자로 대치한다.|
|%10d|숫자(10) 만큼 _**좌측(+)에 공백을 채워**_ 숫자열길이를 만든다|
|%-10d|숫자(10) 만큼 _**우측(-)에 공백을 채워**_ 숫자열길이를 만든다|
|%010d|숫자(10) 만큼 _**좌측(+)에 0을 채워**_ 숫자열길이를 만든다|
|%,d|천단위 콤마(,) 처리를 한다.|

```java
int num = 102;

System.out.println(String.format("%04d", num));
```

```text
0102
```

#### 실수형

|항목|설명|
|:--:|--|
|%f|해당 위치의 숫자로 대치한다.<br>정수일 경우에는 정수만 나오며, 실수인 경우에는 소수점 6자리까지 노출된다.|
|%12f|숫자(12)만큼 문자열 좌측(+)에 공백을 채워 소수점 이하 자리수를 포함하여 길이를 만든다.|
|%-12f|숫자(12)만큼 문자열 우측(-)에 공백을 채워 소수점 이하 자리수를 포함하여 길이를 만든다.|
|%.2f|점(.) 우측에 해당하는 숫자(2) 만큼 소수점 이하 자리를 반올림하여 길이를 만든다.|
|%010.2f|숫자(10) 만큼 좌측(+)에 0을 채우고 점(.) 우측에 해당하는 숫자만큼 소수점 이하의 숫자를 자른다.|
|%,.2f|천단위 콤마(,) 처리를 한 후 점(.) 우측에 해당하는 숫자(2)만큼 소수점 이하 자리를 반올림하여 길이를 만든다.|

#### 원하는 위치 파라메터 사용

**Syntax**

```text
% [숫자]$ [타입]
```

**Example**

```java
String.format("%2$s %1$s", "1", "2");
System.out.printf("%1$tY.%1$tm.%1$td %1$tH:%1$tM:%1$tS.%1$tL", new Date().getTime());
```

```text
2 1
2014.12.08 15:46:16.270
```

:::tip 참고자료
<https://micropai.tistory.com/48>
:::