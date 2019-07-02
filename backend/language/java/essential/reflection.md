# Reflection

Spring Framework 의 Bean Factory 에서 어플리케이션 실행한 후 객체가 호출될 때 인스턴스를 생성하는 과정에서 동적으로 인스턴스를 생성하게 되는데 그 과정에서 Reflection 이 사용된다.

Reflection 은 자바 프로그램내의 내부를 검사하고 속성을 수정할 수 있도록 한다.

## 클래스 메서드 출력

특정 클래스에 있는 메서드 리스트를 정보를 출력하는 코드는 다음과 같다.

```java
 public void reflection() throws Exception {
    Class clazz = Class.forName("com.wemakeprice.epes.utils.PropertyUtilsTest");

    Method[] methods = clazz.getDeclaredMethods();

    for (int i = 0 ; i < methods.length; ++i) {
        System.out.println(methods[i]);
    }
}
```

:::tip 참고자료
<https://gyrfalcon.tistory.com/entry/Java-Reflection>
:::
