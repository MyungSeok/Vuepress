# ResolvableType <Badge text="4.0+"/>

Spring 4.0 이상에서 지원하며 Java 의 복잡한 리플렉션을 통한 Type 접근을 손쉽게 사용하도록 래핑한 클래스이다.

```java
class TypeReference<T> {
  Type type;
  public TypeReference() {
    Type sType = getClass().getGenericSuperclass();

    if (sType instanceof ParameterizedType) {
      this.type = ((ParameterizedType) sType).getActualTypeArguments()[0];
    } else throw new RuntimeException();
  }
}

public static void main(String[] args) throws Exception {
  // ResolvableType rt = ResolvableType.forClass(TypeReference.class);
  ResolvableType rt = ResolvableType.forInstance(new TypeReference<List<String>>() {});

  // java.util.List<java.lang.String>
  System.out.println(rt.getSuperType().getGeneric(0).getType());

  // com.wemakeprice.epes.utils.PropertyUtilsTest.com.wemakeprice.epes.utils.PropertyUtilsTest$TypeReference<java.util.List<java.lang.String>>
  System.out.println(rt.getSuperType().getNested(0).getType());

  // com.wemakeprice.epes.utils.PropertyUtilsTest.com.wemakeprice.epes.utils.PropertyUtilsTest$TypeReference<java.util.List<java.lang.String>>
  System.out.println(rt.getSuperType().getNested(1).getType());

  // java.util.List<java.lang.String>
  System.out.println(rt.getSuperType().getNested(2).getType());

  // false
  System.out.println(rt.getSuperType().hasUnresolvableGenerics());
  
  // true
  System.out.println(ResolvableType.forInstance(new ArrayList<String>()).hasUnresolvableGenerics());
}
```

:::tip 참고자료
<https://www.bsidesoft.com/?p=2992>  
<https://soohyeon317.tistory.com/entry/토비의-봄-TV-25회-수퍼-타입-토큰2-스프링-ResolvableType>
:::
