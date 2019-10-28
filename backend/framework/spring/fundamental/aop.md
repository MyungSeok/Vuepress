# AOP (Aspect Oriented Programming : 관점 지향 프로그래밍)

_**어플리케이션 전체에 사용되는 기능을 재사용 하도록 지원**_ 하도록 도와주는 것이다.  
여기서의 관점은 기존의 자바를 개발햇던 _**핵심 모듈의 대한 관점**_ 에서 _**부가기능의 관점**_ 으로 바꾸어 프로그래밍 하는 것이다.

이는 어플리케이션의 개발을 위해 비지니스 로직과 인프라 로직이 있는데 이 둘의 차이점은 다음과 같다.

* 비지니스 로직 : 데이터의 상태값을 조작하는 로직
* 인프라 로직 : 권한 체크, 트랜젝션, 로깅 등 비지니스 로직의 실행을 위한 기반 로직

_**AOP 는 이 인프라 로직의 중복성을 제거하는것에 목표**_ 를 두고 있다.

이를 통하여 _**관심의 분리 \(Seperation of Concerns\) 를 통하여 핵심 관심 사항에 집중**_ 하는것이다.

기능을 핵심 비지니스 로직과 공통 모듈로 분리하고, 핵심 로직에 영향을 미치지 않고 사이사이에 공통 모듈을 효과적으로 잘 끼워 넣도록 코드밖에서 설정된다는 것이 핵심이다.

프로그램 파악이 힘들기 때문에 AOP 의 사용이 많을 경우에는 유지보수의 관리적인 측면이 어려움이 많다.

![AOP 횡단분리](/img/A009.png)

## 특징

### 장점

* 중복되는 코드 제거
* 효율적인 유지보수
* 높은 생산성
* 재활용성 극대화
* 유연한 변화 수용

### 단점

* AOP 가 많으면 관리가 어렵다.

## 주요개념

* Aspect
  * 여러 객체에 공통으로 적용되는 횡단 관심 모듈을 정의
* Joinpoint
  * Advice 를 적용 가능한 지점으로 Method 를 호출
  * 필드 값 변경이 해당
  * Spring 에서는 Method 호출만 지원
* Interceptor
  * Interceptor Chain 방식의 AOP 툴에서 사용되는 용어로서 주로 한개의 호출 Method 를 가지는 Advice
* Advice
  * 언제, 어떤 공통 관심 기능을 핵심 관심 모듈에 적용할 지를 정의
* Weaving
  * Advice 를 핵심 관심 모듈에 적용하는 것을 정의
* Pointcut
  * 횡단 관심 모듈이 적용될 메소드를 선정하는 방법으로 스프링에서는 정규 표현식이나 Aspect J 문법을 통해 정의

### `Advice` 의 종류

* Before
  * 대상 객체의 Method 호출 전 실행
* After Returning
  * 대상 객체가 `Exception` 없이 정상적으로 실행된 후 실행
* After Throwing
  * 대상 객체의 `Exception` 과 상관없이 실행
  * `finally` 의 기능과 비슷함
* Around
  * 대상 객체의 메서드 호출 전, 후 또는 `Exception` 발생 시점에 실행

## 적용

### Weaving 방식

Advice 를 Weaving 하는 방식에는 세가지 방식이 존재한다.

1. 컴파일시에 `Weaving` 하기
2. 클래스 로딩 시에 `Weaving` 하기
3. 런타임시에 `Weaving` 하기

### Spring AOP 란?

![Spring AOP](/img/A106.png)

스프링은 자체적으로 프록시 기반의 AOP 를 지원하고 있다.

스프링 AOP 는 메서드 호출 `JoinPoint` 만 지원한다.

스프링은 3가지 방식의 AOP 를 지원한다.

1. XML 스키마 기반의 POJO 클래스를 이용한 AOP구현
2. AspectJ 에서 정의한 `@Aspect` 어노테이션 기반의 AOP 구현
3. 스프링 API 를 이용한 AOP 구현

프록시 객체를 생성하는 방식은 대상 객체가 인터페이스를 구현하고 있는지 여부에 따라서 2가지 방식으로 나뉩니다.

* JDK Dynamic Proxy
  * 자바의 리플렉션 API 를 제공하는 `java.lang.reflect.Proxy` 를 이용하여 프록시 객체를 생성합니다.
  * 인터페이스를 기반으로 프록시 객체를 생성하기 때문에 인터페이스에 정의되지 않는 메서드에 대해서는 AOP 가 적용되지 않는 점에 유의해야 한다.
* CGLIB (Code Generation Library)
  * 대상 객체가 인터페이스를 구현하고 있지 않고 바로 클래스로 사용할 때 프록시 객체를 생성
  * 대상 클래스를 바로 상속 받아 프록시를 구현한다.
  * 클래스가 `final` 인 경우에는 프록시를 생성할 수 없다.

### Spring Boot AOP 적용

```java
package com.square.common.advice;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(0)
public class LoggerAdvice {
  
  private static final Logger logger = LoggerFactory.getLogger(LoggerAdvice.class);

  @Before("execution(* com.square..controller.*Controller.*(..))")
  public void logServiceAccessBefore(JoinPoint joinPoint) throws Throwable{
    logger.info("Logger Advice Before");
  }

  @After("execution(* com.square..controller.*Controller.*(..))")
  public void logServiceAccessAfter(JoinPoint joinPoint) throws Throwable{
    logger.info("Logger Advice After");
  }

  @AfterReturning(pointcut="execution(* com.square..controller.*Controller.*(..))", returning="str")
  public void logServiceAccessAfterReturning(JoinPoint joinPoint, Object str) throws Throwable{
    logger.info("Returning is " + str);

    logger.info("Logger Advice AfterReturning");
  }

  @Pointcut("execution(* com.square..controller.*Controller.*(..))")
  public void logServiceAccessPointcut() {}

  @Before("logServiceAccessPointcut()")
  public void logServiceAccessPointcutBefore(JoinPoint joinPoint) {
    logger.info("[Pointcut] Logger Advice Before");
  }
  
  @After("logServiceAccessPointcut()")
  public void logServiceAccessPointcutAfter(JoinPoint joinPoint) {
    logger.info("[Pointcut] Logger Advice After");
  }
  
  @AfterReturning(value="logServiceAccessPointcut()", returning="str")
  public void logServiceAccessPointcutAfterReturning(JoinPoint joinPoint, Object str) {
    logger.info("[Pointcut] Returning is " + str);

    logger.info("[Pointcut] Logger Advice AfterReturning");
  }

  @Around("execution(* com.square..controller.*Controller.*(..))")
  public Object logServiceAccessPointcutAround(ProceedingJoinPoint processedJoinPoint) throws Throwable {
    logger.info("[Pointcut] Logger Advice Around Before");

    Object obj = processedJoinPoint.proceed();

    logger.info("[Pointcut] Logger Advice Around After");

    return obj;
  }
}
```

AOP 적용 대상 페이지를 호출하면 다음과 같이 로그가 남는다.

```bash
[Pointcut] Logger Advice Around Before
Logger Advice Before
[Pointcut] Logger Advice Before
##
# 컨트롤러 로직 처리
##
[Pointcut] Logger Advice Around After
Logger Advice After
[Pointcut] Logger Advice After
Returning is index
Logger Advice AfterReturning
[Pointcut] Returning is index
[Pointcut] Logger Advice AfterReturning
```

:::tip 참고자료
<https://heowc.github.io/2018/02/07/spring-boot-aop/>  
<http://jyh1536.tistory.com/66>  
<http://addio3305.tistory.com/86>  
<https://jojoldu.tistory.com/27>  
<https://minwan1.github.io/2017/10/29/2017-10-29-Spring-AOP-Proxy/>  
<https://busy.org/@nhj12311/aop-cglib-java-aop-4>
:::
