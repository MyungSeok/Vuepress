# Date

Java 에서 날짜/시간을 표시하는 방법으로 주로 사용되나 이는 아래의 문제점을 가지고 있다.

## 문제점

기존 자바에서 Calendar, Date 클래스는 여러 문제점을 가지고 있다

이는 [Naver D2](https://d2.naver.com/helloworld/645609) 에서도 내용을 다루고 있다.

이를 요약하자면 다음과 같다.

* 불변 객체가 아니다.
  * `set` 으로 변경 가능함
  * 이는 악의적인 코드로 사용가능 하기 때문에 직접 Date 클래스에서 사용하는것은 위험하다.
* 상수 필드의 남용
  * `calendar.add(Calendar.SECOND, 2)`
* 혼란스러운 월 지정
  * 1월을 `0`으로 표현
* 일관성 없는 요일 상수
  * 일요일이 `0` 혹은 `1` 로 사용하는 객체에 따라 다르다.
* `Date` 와 `Calendar` 객체의 역활분담
  * 년/월/일 계산은 `Date` 클래스만으로 부족
  * Calendar 객체를 생성하고 Date 객체를 생성하는 프로세스를 거치기 때문에 생성비용이 비싸다
* `java.util.Date` 의 하위 클래스 문제
  * 오픈소스 라이브러리 `joda.time` 사용을 추천

## LocalDate, LocalTime, LocalDateTime <Badge text="Java SE 1.8+"/>

이러한 문제를 사용하기 위해 Java SE 8 에서는 LocalDate, LocalTime, LocalDateTime 이라는 클래스를 만들었다.

### 사용법

```java
// 현재 날짜 정보
LocalDate currentDate = LocalTime.now();

// 년/월/일
LocalDate myDate = LocalDate.of(int year, int month, int dateOfMonth);
```

```java
// 현재 시각을 문자열로 변환
LocalDateTime.now().format(DatetimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

// 문자열을 LocalDateTime 으로 변환
LocalDateTime.parse().format("2019-12-11 10:15:30", DatetimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

```

:::tip 참고자료
<https://jeong-pro.tistory.com/163>  
<https://d2.naver.com/helloworld/645609>
:::
