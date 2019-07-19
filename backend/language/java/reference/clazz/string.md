# String

## String.format()

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

**문자형**

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

```md
p1 : one
```

**숫자형**

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

```md
0102
```

**실수형**

|항목|설명|
|:--:|--|
|%f|해당 위치의 숫자로 대치한다.<br>정수일 경우에는 정수만 나오며, 실수인 경우에는 소수점 6자리까지 노출된다.|
|%12f|숫자(12)만큼 문자열 좌측(+)에 공백을 채워 소수점 이하 자리수를 포함하여 길이를 만든다.|
|%-12f|숫자(12)만큼 문자열 우측(-)에 공백을 채워 소수점 이하 자리수를 포함하여 길이를 만든다.|
|%.2f|점(.) 우측에 해당하는 숫자(2) 만큼 소수점 이하 자리를 반올림하여 길이를 만든다.|
|%010.2f|숫자(10) 만큼 좌측(+)에 0을 채우고 점(.) 우측에 해당하는 숫자만큼 소수점 이하의 숫자를 자른다.|
|%,.2f|천단위 콤마(,) 처리를 한 후 점(.) 우측에 해당하는 숫자(2)만큼 소수점 이하 자리를 반올림하여 길이를 만든다.|

**원하는 위치 파라메터 사용**

**Syntax**

```md
% [숫자]$ [타입]
```

**Example**

```java
String.format("%2$s %1$s", "1", "2");
System.out.printf("%1$tY.%1$tm.%1$td %1$tH:%1$tM:%1$tS.%1$tL", new Date().getTime());
```

```md
2 1
2014.12.08 15:46:16.270
```

:::tip 참고자료
<https://micropai.tistory.com/48>
:::

## replace vs replaceAll

`replace` 과 `replaceAll` 의 차이점은 `replace` 인자를 문자열 값으로 받고 `replaceAll` 은 인자를 정규식으로 받는다.

**정규식**

`replaceAll` 함수로 특수문자를 사용시에 문자로 인식하는 방법

**`[]` 로 사용되는 것들**

* `*` => `[*]`
* `+` => `[+]`
* `$` => `[$]`
* `!` => `[!]`

등이 대표적이며 `!` `#` `%` `&` `@` `:` `;` `-` `.` `<` `>` `,` `~` `'` 백쿼터 ('), 등이 있다.

**`\` 로 사용되는 것들**

* `(` => `\\(`
* `)` => `\\)`
* `{` => `\\{`
* `}` => `\\}`
* `^` => `\\^`
* `[` => `\\[`
* `]` => `\\]`

:::tip 특수문자 사용
`%` 사용하려면 `%%` 두번 입력
:::

## StringJoiner

문자열을 손쉽게 붙일수 있다.

```java
String first = "관우";
String second = "장비";
String third = "조운";
String fourth = "황충";
String fifth = "마초";
```

**String `+` Operator**

```java
String 오호대장군 = first + "-" + "second" + "-" + third + "-" + fourth + "-" + fifth;
System.out.println(오호대장군);
```

**StringBuffer / StringBuilder**

```java
StringBuffer sb = new StringBuffer();
sb.append(first);
sb.append("-");
sb.append(second);
sb.append("-");
sb.append(third);
sb.append("-");
sb.append(fourth);
sb.append("-");
sb.append(fifth);
sb.append("-");

String 오호대장군 = sb.toString();
System.out.println(오호대장군);
```

**StringJoiner**

```java
StringJoiner sj = new StringJoiner("-");

sj.add(first);
sj.add(second);
sj.add(third);
sj.add(fourth);
sj.add(fifth);

String 오호대장군 = sj.toString();
System.out.println(오호대장군);
```

**StringJoiner 로 `prefix` 와 `suffix` 사용하기**

```java
StringJoiner sj = new StringJoiner("-", "[", "]");

sj.add(first);
sj.add(second);
sj.add(third);
sj.add(fourth);
sj.add(fifth);

String 오호대장군 = sj.toString();
System.out.println(오호대장군);
```

```md
[관우-장비-조운-황충-마초]
```

**`stream` 사용하기**

```java
List<String> 장군들 = Arrays.asList(first, second, third, fourth, fifth);

String 오호대장군 = 장군들.stream().collect(Collectors.joining("-", "[", "]"));
System.out.println(오호대장군);
```

:::tip 참고자료
<https://futurecreator.github.io/2018/06/02/java-string-joiner/>
:::