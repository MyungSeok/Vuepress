
# Chapter 3 모든 객체의 공동 메서드

`Object` 는 객체를 만들 수 있는 구체 클래스지만 기본적으로는 상속해서 사용하도록 설계되었다.

`Object` 에서 `final` 이 아닌 메서드 (`equals` `hashCode` `toString` `clone` `finalize`) 는 모두 재정의 (overriding)를 염두에 두고 설계된 것이라 재정의시 반드시 지켜야 하는 일반 규약이 명시되어있다.

이번장에서는 이러한 성격이 지닌 메서드들을 다룬다.

## Item 10 'equals' 는 일반 규약을 지켜 재정의하라

`equals` 메서드는 재정의하기 쉬워 보이지만 곳곳에 함정이 도사리고 있어서 자칫하면 끔찍한 결과를 초래한다.

다음 상황일경우에는 재정의하지 않는것이 최선이다.

* 각 인스턴스가 본질적으로 고유하다.
* 인스턴스의 논리적 동치성 (logical equality) 을 검사할 일이 없다.
* 상위 클래스에서 재정의한 `equals` 가 하위 클래스에도 딱 들어맞는다.
* 클래스가 `private` 이거나 `package-private` 이고 `equals` 메서드를 호출할 일이 없다.

이러한 경우에는 다음과 같이 `equals` 를 제한한다.

```java
@Override
public boolean equals(Object o) {
  throw new AssertionError();
}
```

`equals` 를 재정의해야 할 때는 객체 식별성 (object identity : 두 객체가 물리적으로 같은가) 이 아니라 논리적 동치성을 확인해야 할 때 상위 클래스의 `equals` 가 논리적 동치성을 비교하도록 재정의되지 않았을때 이다.

대부분의 값 클래스 (`Integer` `String` 과 같이 값을 표현하는 클래스) 들이 이 케이스에 해당된다.

굳이 `equals` 의 재정의가 필요하면 다음 규약을 지켜야 한다

**Object 명세에 적힌 `equals` 메서드 규약**

* 반사성 (reflexivity)
* 대칭성 (symmetry)
* 추이성 (transitivity)
* 일관성 (consistency)
* `null` 아님

위의 규약은 반드시 지켜야 하며 이를 아래 단계대로 구현한다.

**`equals` 메서드 구현방법**

1. `==` 연산자를 사용해 입력이 자기 자신의 참조인지 확인한다.
2. `instanceof` 연산자로 입력이 올바른 타입인지 확인한다.
3. 입력을 올바른 타입으로 형변환한다.
4. 입력 객체와 자기 자신의 대응되는 **핵심** 필드들이 모두 일치하는지 하나씩 검사한다.

> `equals` 메서드는 꼭 필요한 경우에만 재정의 해주도록 한다.

## Items 11 `equals` 를 재정의하려거든 `hashCode` 도 재정의하라

`equals` 에서 재정의한 클래스 모두에서 `hashCode` 도 재정의해야 한다.

`equals` 에서는 물리적으로 다른 두 객체를 논리적으로는 같다고 할 수 있지만 Object 의 기본 hashCode 메서드는 이 둘이 전혀 다르다고 판단하여 규약과 달리 서로 다른 값을 반환한다.

마치 아래의 예가 서로 다른 값을 반환하는거 처럼 말이다.

```java
Map<PhoneNumber, String> map = new HashMap<>();
map.put(new PhoneNumber(707, 867, 5309), "제니");

map.get(new PhoneNumber(707, 867, 5309));   // null 을 반환
```

이 문제는 `PhoneNumber` 에 적절한 해시코드를 삽입해주면 해결하다 (일시적)
다만 사용자가 임의의 해시코드 발급 가능한 코드 작성은 어려운 것으로 동치인 인스턴스에 대해서 같은 해시코드를 반환할지 고민해보자

**전형적인 `hashCode` 메서드**

```java
@Override
public int hashCode() {
  int result = Short.hashCode(areaCode);
  result = 31 * result + Short.hashCode(prefix);
  result = 31 * result + Short.hashCode(lineNum);
  return result;
}
```

위 코드에서 곱하는 숫자를 **31** 으로 정하는 기준은 **31** 이 **홀수 (odd)** 이면서 **소수 (prime)** 이기 때문이다.  
2를 곱하는것은 시프트 연산과 같은 결과를 내기 때문이다.

해시 충돌이 우려된다면 구아바 (Guava) 의 `com.google.com.hash.Hashing` 을 참고하도록 하자.

혹은 `AutoValue` 프레임워크를 사용하면 `hashCode` 뿐만이 아닌 `equals` 도 자동으로 만들어준다.

## Items 12 `toString` 을 항상 재정의하라

Object 의 기본 toString 메서드가 우리가 작성한 클래스에 적합한 문자열을 반환하는 경우는 거의 없다.

`toString` 메서드는 `PhoneNumber@abbd` 처럼 `클래스_이름@16진수_해시코드` 를 반환할 뿐이다.

따라서 실무에서의 `toString` 은 객체가 가진 주요 정보를 반환하는게 좋다.

**전화번호부의 `toString` 예시**

```java
@Override
public String toString() {
  return String.format("%03d-%03d-%034", areaCode, prefix, lineNum);
}
```

혹은 포맷 여부와 상관없이 해당 객체에 관한 명확하고 유용한 정보를 읽기 좋은 형태로 반환해야 한다.

단, 상위 클래스에서 이미 알맞게 재정의한 경우는 예외이다.

즉 `toString` 이 반환한 값에 포함된 정보를 얻어올수 있는 API 를 제공하도록 한다.

## Item 13 `clone` 재정의는 주의해서 진행 하라

`Cloneable` 은 복제해도 되는 클래스 임을 명시하는 용도의 믹스인 인터페이스 (Mixin Interface) 이다.

:::tip Mixin Interface ?
믹스인 인터페이스에서의 믹스인 (Mixin) 이란 그 기능을 제공받는 대상 클래스에 선언하여 원본타입에 있는 기능을 구현할 수 있도록 선택적 기능을 제공하는것이다.

이는 추상 클래스보다 인터페이스를 사용할때 효과적으로 적용 가능 하다.
:::

배열은 `clone` 은 Runtime 과 Compile 타입 모두가 원본 배열과 똑같은 배열을 반환하기 때문에 `clone` 을 제대로 사용하는 유일한 예이며 권장한다.

그 외에 `Cloneable` 을 구현하는 모든 클래스는 `clone` 을 재정의 해줘야 한다.

* 접근 제어자는 `public` 로 한다.
* 반환타입은 자기 자신으로 한다.
* **복사 생성자** 와 **복사 팩터리** 방식으로 제공한다.
* 객체 내부의 **깊은 구조** 에 숨어있는 모든 가변 객체를 복사하며 그 내부의 참조 객체 모드 그 복사 객체를 가르키도록 한다.

이는 대부분의 객체 복사에서 지키기 어려운 일이며 이를 지키키 어려울시 아래와 같이 `clone` 를 제한한다.

**하위 클래스에서 Cloneable 을 지원하지 못하게 하는 `clone` 메서드**

```java
@Override
protected final Object clone() throws CloneNotSuppertedException {
  throw new CloneNotSupportedException();
}
```

## Item 14 Comparable 구현할지 고려하라

`Comparable` 인터페이스의 `compareTo` 를 알아보자.

`compareTo` 는 `Object` 메서드가 아니며 단순 동치성 비교에 순서까지 비교할 수 있으며 제네릭 하다.

그래서 `Comparable` 을 구현한 객체들의 배열은 다음처럼 손쉽게 정렬할 수 있다.

```java
Arrays.sort(arr);
```

검색, 극단값 계산, 자동정렬 되는 컬렉션 관리도 쉽게 가능하다.

다음은 명령줄 인수들을 중복을 제거하고 알파벳 순으로 출력한다.

`String` 이 `Comparable` 을 구현한 덕분이다.

**명령줄 인수들을 중복을 제거하고 알파벳 순으로 출력**

```java
public class WordList {
  public static void main(String[] args) {
    Set<String> set = new TreeSet<>();
    Collections.addAll(set, args);
    System.out.println(set);
  }
}
```

자바 플랫폼의 모든 값 클래스와 열거 타입이 `Comparable` 을 구현했다.  
알파벳, 숫자, 연대와 같이 순서가 명확한 값 클래스를 작성한다면 반드시 Comparable 인터페이스를 구현하자.

`compareTo` 메서드의 일반 규약은 다음과 같다.

* 원본 객체와 주어진 객체의 순서를 비교한다.
* 주어진 객체가 작으면 음의정수, 같으면 0, 크면 양의 정수를 반환한다.
* 비교할수 없는 타입의 객체가 주어지면 `ClassCastException` 을 반환한다.
* 필드값을 비교해야 할 때는 `<` 나 `>` 는 사용하지 말고 박싱된 기본 타입 클래스가 제공하는 compare 메서드나 `Comparator` 인터페이스가 제공하는 비교자 생성 메서드를 사용하자

**객체 참조 필드가 하나일때 비교자**

```java
public final class CaseInsensitiveString implements Comparable <CaseInsensitiveString> {
  public int compareTo (CaseInsensitiveString cis) {
    return String.CASE_INSENSITIVE_ORDER.compare(s,cis.s);
  }
  ... 나머지 코드는 생략
}
```

**기본 타입 필드가 여럿을때의 비교자**

```java
public int compareTo(PhoneNumber number) {
  int result = Short.compare(areaCode, number.areaCode);
  
  if (result == 0) {
    result = Short.compare(prefix, number.prefix);
    if (result == 0) {
      result = Short.compare(prefix, number.prefix);
    }
  }

  return result;
}
```
