# Type Erasure

제네릭은 타입 소거자 (Type Erasure) 에 의해 자신의 타입 요소 정보를 삭제한다.

이는 _**Java SE 5 이전 제네릭이 사용되지 않는 코드의 호환성을 보장하기 위해여 지원되는 마이그레이션 기능**_ 중의 하나이다.

때문에 아래와 같이 실 타입 매개변수 형태의 선언을 컴파일 과정에서 다음과 같이 변경한다.

**Before**

```java
List<String> list = new ArrayList<>();
```

**After**

```java
ArrayList list = new ArrayList();
```

타입 파라메터는 물론이고 슈퍼클래스위 타입 파라메터 및 _**해당 클래스의 정의된 모든 타입 파라메터가 지워진다.**_
