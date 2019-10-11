# Design Pattern 이란?

_**객체 지향 관점에서의 오브젝트의 의존관계를 다루는 방법**_ 이다.

이는 상황에 따른 요구사항의 문제를 빠르게 해결할 수 있도록 설계를 도와주며 _**런타임시에 바뀔수 있는 상속관계보다 더 동적**_ 이다.

이 Design Pattern 은 **Scope** 관점과 **Purpose** 관점에 따라 나뉘게 되며 해당 관점에 따라 더욱 세분화 된다.

!["Java Design Pattern Table"](/img/A077.png)

## 생성관련 패턴

객체 인스턴스 생성을 위한 패턴

* [팩토리 메서드 (Factory Method)](./creational/factory-method)
* [싱글톤 (Singleton)](./creational/singleton)
* 추상 팩토리
* 프로토타입
* 빌더

## 구조관련 패턴

* [어댑터 (Adapter)](./structural/adapter)
* [데코레이터 (Decorator)](./structural/decorator)
* [프록시 (Proxy)](./structural/proxy)
* 컴포지트
* 퍼사드
* 브릿지

## 행동관련 패턴

클래스와 객체들이 상호작용하는 방법 및 역활을 분담

* 인터프리터
* [템플릿 메소드(Template Method)](./behavioral/template-method)
* [전략 (Strategy)](./behavioral/strategy)
* [행동 (State)](./behavioral/state)
* [방문자 (Visitor)](./behavioral/visitor)
* 커맨드
* 역활변경
* 이터레이터
* 미디에이터
* 메멘토
* 플라이웨이트
* 옵저버

클래스와 객체들의 구성을 통해서 더 큰 구조로 확장 가능한 패턴

!["Java Design Pattern Map"](/img/A015.png)

:::tip 참고자료
<https://brunch.co.kr/@springboot/31>  
<https://victorydntmd.tistory.com/category/Design%20Pattern>
:::
