# 퍼사드

어떤 특정 서브시템이 일련의 인터페이스에 대한 통합된 인터페이스를 제공한다.

퍼사드에서는 고수준의 인터페이스를 정의하기 때문에 서브시스템을 더 쉽게 사용할 수 있다.

![Facade Pattern - Before](/img/A105.png)

위에서 `Employee Data` 라는 리소스를 얻기 위해 `Pay Calculator` `Hour Reporter` `Employee Saver` 등과 같은 클래스를 이용하는 경우가 있다.

이때 개발자는 세가지를 인스턴스화해서 사용해야 하는데 위 세가지의 인스턴스를 접근하는 고수준의 인터페이스를 적용하여 이용하는 방식이다.

![Facade Pattern - After](/img/A104.png)

위와 같이 `Employee Facade` 인터페이스를 적용하여 좀더 유연하게 접근이 가능하다.

:::tip 참고자료
<https://jusungpark.tistory.com/23>
:::
