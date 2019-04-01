# Architecture

설계 지향적 관점에서 관련된 것을 정리한다.

## 접근 통제 (Access Control)

보안전략

### RBAC (Role Based Access Control : 역활 기반 접근 통제)

접근하려는 사용자와 자원이 어떻게 상호작용 하는지 결정하여 중앙에서 집중적으로 작용한다.

* 역할 할당 (Role Assignment)
* 역할 권한 부여 (Role Authorization)
* 권한 부여 (Permission Authorization)

### DAC (Discretionary Access Control : 임의적 접근 통제)

리소스의 소유자 혹은 그룹의 대상이 결정한 접근 정책을 통해 리소스의 접근을 허용하거나 제한하는 접근 제어방법의 일종이다.

즉 _**정보의 접근 권한을 사용자에게 전송할 수 있기 때문에 재량적으로 변경 가능**_ 하다.

### MAC (Mandatory Access Control : 강제적 접근 통제)

리소스 소유자가 파일 시스템의 리소스 개체에 대한 접근제어를 부여하거나 거부할 수 있는 능력을 제한하는 보안 전략이다.  
이는 _**시스템 관리자가 정의하고 운영체제나 보안 커널에 의해 엄격하게 적용**_ 되며 최종사용자가 변경할 수 없다.

MAC는 최고 수준의 접근 제어로서 DAC 와 대조되는 제어방법이다.

## Separation Of Concern (관심의 분리)

SOA (Service-Oriented Architecture : 서비스 지향 아키텍처) 의 핵심 원칙중의 하나로 _**관심이 다른것은 가능한 분리하여 서로 영향을 주지 않도록 하며, 관심이 같은 것은 하나의 관련 객체로 모이도록 설계나 구현**_ 을 하는 것

## 테스트 주도 개발 (TDD / BDD / DDD)

### TDD (Test Driven Development)

* 테스트 주도 개발 방법론
* 테스트 코드를 먼저 작성하고 해당 테스트 코드에 맞게 개발을 진행한다.

### BDD (Behavior Driven Development)

* 동작 지향 개발 방법론
* 소프트웨어의 품질을 향상 시키기 위해 개발자간의 협력 가능한 Agile Software Development 기법이다.
* BDD 의 목표는 TDD 를 수행하기 위한 것으로, TDD 를 수행하기 위해 BDD 를 통한 행위 자체를 변경 가능하다.

## Micro Service Architecture (MSA)

@TODO