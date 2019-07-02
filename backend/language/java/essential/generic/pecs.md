# PECS <Badge text="Generic"/>

_**Producer Extends & Consumer Super**_ 의 약자로  
뭔가를 생산하는 일을 하면 상속을 받고 뭔가를 소비하는 일을 하면 상속을 해주는 것이다.

가령 제네릭의 매개변수화 타입 (Parameterized Types) 는 무공변 (invariant) 한 특성이 있다.

서로 다른 타입 `Type1` `Type2` 가 있다고 가정 해봤을 때 `List<Type1>` 은 `List<Type2>` 의 상위 타입 (Supertype) 도 하위 타입 (Subtype) 도 아니다.

## 생산자 관점

```java
public void doSomething(List<? extends MyClass> list) {
  for (MyClass e : list) { // Ok
    System.out.println(e);
  }
}

public void doSomething(List<? extends MyClass> list) {
  list.add(new MyClass()); // Compile Error
}
```

## 소비자 관점

```java
public void doSomething(List<? super MyClass> list) {
  list.add(new MyClass()); // Ok
}

public void doSomething(List<? super MyClass> list) {
  for (MyClass e : list) { // Compile Error
    System.out.println(e);
  }
}
```

:::tip 참고자료
<https://starblood.tistory.com/entry/Java-PECS-producerextends-consumersuper-에-관하여>
<https://medium.com/@joongwon/java-java의-generics-604b562530b3>
:::
