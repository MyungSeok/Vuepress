---
sidebar: auto
---

# Security

Java EE 기반의 Enterprise Software Application 을 위한 포괄적인 보안 서비스이다.

만약 스프링 시큐리티 (Spring Security) 를 사용하지 않는다면 자체적으로 세션 체크를 하고 redirect 등을 해야할 것이다.

Spring Security 는 보안을 구성하는 다음 두가지 영역이 있다.

@flowstart
stage1=>operation: Authentication (인증)
stage2=>operation: Authorization (권한)

stage1(right)->stage2
@flowend

* Principal (접근 주체)
  * 보호된 대상에 접근하는 사용자
* Authentication (인증)
  * 사용자가 애플리케이션 작업을 수행할 수 있는 Authorization (권한) 을 얻는 과정
* Authorization (권한)
  * 애플리케이션의 작업을 수행할 수 있도록 허락되어 있는 결정

일반적으로 _**로그인**_ 과 같은 과정들은 HTTP 기본인증을 통하여 진행되며 이는 _**Form 기반 로그인**_ 이 된다.

## 인증 (Authentication)

Spring Security 의 인증구조는 _**세션-쿠키**_ 방식으로 진행된다.

![Spring Security Authentication Architecture](/img/A060.png)

1. 사용자가 로그인을 시도 (Http Request)
2. 인증 필터 (Authentication Filter) 에서 User DB 를 확인함
3. User DB 에 있는 사용자라면 해당 사용자 정보를 조회하여 사용자의 세션을 생성
4. Spring Security 의 인메모리 세션저장소인 `Security Context Holder` 에 저장
5. 사용자에게 `Session ID` 와 함께 응답을 내려줌
6. 이후 요청에서는 Request Cookie 에서 `JSESSIONID` 를 추출하여 검증이 유효하면 Authentication 를 제공함

:::tip 참고자료
<https://sjh836.tistory.com/165>
:::

## 설정

### 1. 의존성 추가

```xml
<!-- Properties -->
<security.version>4.2.7.RELEASE</security.version>

<!-- Security -->
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-core</artifactId>
  <version>${security.version}</version>
</dependency>
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-web</artifactId>
  <version>${security.version}</version>
</dependency>
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-config</artifactId>
  <version>${security.version}</version>
</dependency>
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-taglibs</artifactId>
  <version>${security.version}</version>
</dependency>
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-test</artifactId>
  <version>${security.version}</version>
</dependency>
```

### 2. `web.xml` 설정

```xml
<context-param>
  <param-name>contextConfigLocation</param-name>
  <param-value> classpath:applicationContext.xml classpath:applicationContext-security.xml </param-value>
</context-param>

<!-- Spring Security -->
<listener>
  <listener-class>org.springframework.security.web.session.HttpSessionEventPublisher</listener-class>
</listener>
<filter>
  <filter-name>springSecurityFilterChain</filter-name> <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
</filter>
<filter-mapping>
  <filter-name>springSecurityFilterChain</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```

* HttpSessionEventPublisher
  * 한명의 사용자가 다른 브라우저로 동시에 로그인 하는것을 막음
* DelegatingFilterProxy
  * 모든 요청은 해당 프록시 필터를 거친다.
  * Spring Security 는 이를 통해 인증 및 인가를 수행한다.

### 3. security 설정

```xml
<security:http auto-config="true" use-expressions="true">
  <security:csrf disabled="true"/>
  <security:intercept-url pattern="/**" access="permitAll" />
  <security:form-login login-page="/login" authentication-success-handler-ref="loginSuccessHandler" authentication-failure-handler-ref="loginFailureHandler" login-processing-url="/auth" username-parameter="id" password-parameter="pw" />
  <security:logout logout-url="/logout" invalidate-session="true" logout-success-url="/login?status=logout" />
  <security:session-management invalid-session-url="/login">
    <security:concurrency-control max-sessions="1" error-if-maximum-exceeded="false" />
  </security:session-management>
</security:http>

<!-- secured method -->
<security:global-method-security secured-annotations="enabled" />

<!-- provider -->
<security:authentication-manager>
  <security:authentication-provider ref="userAuthHelper" />
</security:authentication-manager>

<bean id="loginSuccessHandler" class="com.devljh.domain.user.helper.LoginSuccessHandler">
  <property name="defaultTargetUrl" value="/main" />
  <property name="alwaysUseDefaultTargetUrl" value="true" />
</bean>

<bean id="loginFailureHandler" class="com.devljh.domain.user.helper.LoginFailureHandler">
  <property name="defaultFailureUrl" value="/login?status=fail" />
</bean>
<bean id="userAuthService" class="com.devljh.domain.user.UserAuthService" />
<bean id="passwordEncoder" class="org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder" />
<bean id="userAuthProvider" class="com.devljh.domain.user.helper.UserAuthProvider">
  <property name="userDetailsService" ref="userAuthService" />
  <property name="passwordEncoder" ref="passwordEncoder" />
</bean>
```
