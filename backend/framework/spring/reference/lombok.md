# lombok

## Annotation

|Annotation|Description|
|:-:|:-:|
|@NonNull|Null 값이 될 수 없다는 것을 명시합니다.<br/>NPE(Null Pointer Exception)에 대한 대비책이 될 수 있습니다.|
|@Cleanup|자동으로 `close()` 메서드를 호출합니다.|
|@Getter/@Setter|코드가 컴파일될 때 `getter()` / `setter()` 메서드를 생성합니다.|
|@ToString|`toString()` 메서드를 생성합니다. `@ToString(exclude={"제외할 값"})` 처럼 원하지 않는 속성은 제외할 수 있습니다.|
|@EqualsAndHashCode|해당 객체의 `equals()` 와 `hashCode()` 메서드를 생성합니다.|
|@NoArgsConstructor|파라미터를 받지 않는 생성자를 만들어냅니다.|
|@RequiredArgsConstructor|지정된 속성들에 대해서 생성자를 만들어냅니다.|
|@AllArgsConstructor|모든 속성에 대해서 생성자를 만들어냅니다.|
|@Data|위 5가지 어노테이션을 합친 어노테이션입니다.|
|@Value|불변 클래스를 생성할 때 사용합니다.|
|@Builder|빌더 패턴을 사용할 수 있도록 코드를 생성합니다.|
|@SneakyThrows|예외 발생시 Throwable 타입으로 반환합니다.|
|@Syncronized|메서드에서 동기화를 설정합니다.|
|@Getter(lazy=true)|동기화를 이용해서 최초 한번만 `getter()`를 호출합니다.|

## `@Data`

해당 어노테이션은 다음을 포함한다.

* `@ToString`
* `@EqualsAndHashCode`
* `@Getter`
* `@Setter`
* `@RequiredArgsConstructors`

lombok 사용시 `@Data` 어노테이션을 사용하면 자동으로 `Setter` 를 포함한   
다른 기능들도 자동으로 지원하게 된다.

:::warning
* 무분별하게 Setter 메서드를 사용시 객체의 일관성을 유지하기 어렵다.
* 이는 객체에 `setter()` 메서드가 있을 경우 언제든 객체에 접근하여 상태 혹은 값을 바꿀수 있기 때문이다.
:::

:::tip 참고자료
<https://cheese10yun.github.io/lombok>
:::

## `@EqualsAndHashCode`

기본적으로 `equals()` `hashCode()` 메서드를 생성해준다.

`static` 이나 `transient` 가 아닌 모든 필드가 대상이 된다.

:::tip transient 키워드

Serialize 과정에서 제외하고 싶은 경우 사용한다.

* 패스워드와 같은 보안 정보가 직렬화 (Serialize) 과정에서 제외하고 싶은 경우 사용된다.
* 다양한 이유로 데이터를 전송 하고 싶지 않을때 선언한다.
:::

명시적으로 제외가 필요한 경우 `exclude` 나 `of` 옵션을 사용하도록 한다.

* `exclude` : 제외
* `of` : 포함

기본적으로 `getter`가 있으면 해당 메서드가 호출된다.  
이를 사용하지 않고 직접 호출하려면 `doNotUseGetter = true` 를 사용하라

`callSuper = "true"` 를 사용시에는 주의해야 한다.

* super class 가 없을때 사용하면 compile error
* super class 도 lombok 을 사용하면 문제가 없지만 그렇지 않다면 예상치 못한 에러가 발생될 수도 있다.

:::tip 참고자료
<https://m.blog.naver.com/PostView.nhn?blogId=youreme&logNo=110180500932&proxyReferer=&proxyReferer=https%3A%2F%2Fwww.google.com%2F>
:::
