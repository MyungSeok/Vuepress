# Boxing & Unboxing (박싱 & 언방식)

Java 의 데이터는 클래스나 객체와 같은 _**참조자료형**_ 과 기본적인 _**원시타입**_ 을 가질 수 있다.  
이는 다시 말해 각각의 기초 자료형을 포장되어 있는 `Wrapper Class` 로 변환이 가능하다.

* Boxing : 값 (기초 타입) 을 참조 형식으로 변환

@flowstart
stage1=>operation: 기본 (원시) 타입
stage2=>operation: Boxing
stage3=>operation: 참조 자료형

stage1(right)->stage2(right)->stage3
@flowend

* Unboxing : 참조 형식을 값 형식으로 변환

@flowstart
stage1=>operation: 참조 자료형
stage2=>operation: Unboxing
stage3=>operation: 기본 (원시) 타입

stage1(right)->stage2(right)->stage3
@flowend

|기본형 타입|참조 자료형 (Wrapper Class)|
|--|--|
|byte|Byte|
|short|Short|
|int|Integer|
|long|Long|
|float|Float|
|double|Double|
|char|Character|
|boolean|Boolean|
|void|Void|

```java
// Boxing
Object a = 20;

// UnBoxing
int b = (int) a;
```

## Boxing 과정

@flowstart
stage1=>operation: 값 타입을 힙에 생성하기 위해 메모리를 힙 영역에 생성
stage2=>operation: 값을 힙 영역에 할당된 메모리로 복사
stage3=>operation: 참조할 변수에 할당된 메모리 주소를 할당

stage1->stage2->stage3
@flowend

## Unboxing 과정

@flowstart
stage1=>operation: Boxing 값인지 확인
stage2=>operation: Boxing 된 값이면 값유형의 변수에 복사
stage3=>operation: 박싱한 메모리와 언박싱한 메모리 2개 존재

stage1->stage2->stage3
@flowend

**문제점**

* 모든 객체가 값 형식으로 언박싱 될 수 없고, 이전에 박싱된 데이터에 한하여 언박싱이 가능하다.  
* 또한 박싱된 데이터의 타입을 따라야 한다.  
* 박싱 작업은 완전히 새로운 객체가 만들어져야 하며 이러한 작업은 할당 작업보다 _**최대 20배의 시간**_ 이 걸린다고 한다  
* 언박싱의 캐스팅 시간은 할당작업보다 _**4배이상**_ 의 시간이 걸린다고 한다.

**Example**

```java {9}
public class Sum {

    // 캐스팅 시간 4배, 박싱 작업 20배 느려짐 예제
    public static void main (String[] args) {
      // long sum = 0L;
      Long sum = 0L;

      for (long i = 0; i < Integer.MAX_VALUE; i++) {
        sum += i;
      }

      System.out.println(sum);
    }
}
```

:::tip 참고자료
<http://grayt.tistory.com/87>
:::
