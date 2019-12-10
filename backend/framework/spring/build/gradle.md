# Gradle

## 개요

기존 Ant / Maven 과 유사하지만 진화된 빌드 툴로써 빌드, 테스트, 배포, 개발 등의 자동화를 실행할 수 있다.

Ant 빌드는 유연성이 뛰어난 빌드 툴로서 개발자가 자유롭게 빌드단위 (target) 을 지정하고 빌드 단위간의 의존관계를 자유롭게 설정할 수 있다는 것이다.  
자유도가 높다는것은 좋은 도구이지만 제대로 쓰지 못하면 애물단지나 다름없다.

Maven 의 가장 큰 장점은 _**Convention Over Configuration**_ 의 전략에 따라 관례로 정해져 있다.

:::tip Convention Over Configuration ?

[Convention Over Configuration(CoC)](https://www.lesstif.com/pages/viewpage.action?pageId=28607056)는 설정 보다는 관례라고도 하며 소프트웨어 개발자가 정해야 하는 수많은 결정들을 줄여주고  
단순성을 확보하면서 유연함을 잃지 않게 하기 위한 설계 패러다임이다.  

프레임워크가 복잡하고 방대해 짐에 따라 복잡한 수많은 설정 파일과 세팅에 대한 부담이 늘어났고  
CoC 는 이를 해결해주기 위해 자주 사용되는 부분들은 관례를 정하여 생략하고 이를 따르지 않는 경우에만 설정을 하도록 하고 있다.  

CoC 패러다임을 적용하면 상대적으로 자유도가 떨어진다는 의견이 있지만  
팀으로 일하게 되는 특성상 표준화와 규격화가 정해지지 않는다면  
공유와 협업이 힘들어지기 때문에 이 CoC 패러다임을 적용하는 사례도 늘고 있다.
:::

## 특징

* Groovy 기반의 DSL (Domain Specific Language) 채용
* 의존성 기반 프로그래밍을 위한 언어
* 빌드의 구조화
* API 제공
* Multi Project 빌드
* 의존성 관리의 다양한 방법 제공
* Migration 의 편의성
* Build Script 는 Groovy 로 작성

:::tip 참고자료
[Gradle Guide - Slidershare](https://www.slideshare.net/sup2rior/gradle-guide-v-01-31412469)
:::

## 사용

### Gradle 설치

#### Mac

```bash
# brew gradle
```

#### Ubuntu

```bash
# 저장소 추가
$ add-apt-repository ppa:cwchien/gradle

# apt-get 업데이트
$ apt-get update

# Gradle 설치
$ apt-get install gradle
```

:::tip 참고자료
<https://zetawiki.com/wiki/우분투_Gradle_최신버전_설치>
:::

### Gradle 빌드

```bash
# gradle build
```

### Gradle Build 시에 실행가능한 jar 만들기

manifest 파일을 생성하여 등록 해야 한다.

:::tip 참고자료
<http://theeye.pe.kr/archives/2075>
:::

### Gradle Task

:::tip 참고자료
<https://kwonnam.pe.kr/wiki/gradle/task>
:::

### Gradle Dependencies

`api` (:==`compile`) 와 `implementation` 의존성 차이가 크다

@flowstart
stage1=>operation: A
stage2=>operation: B
stage3=>operation: C

stage1(right)->stage2(right)->stage3
@flowend

`api` 는 빌드후에 외부에 필요한 **의존성을 노출**하고

`implementation` 은 빌드 후에도 **외부에 의존성이 노출되지 않도록** 한다.

이는 의존성 노출이 되는 점의 차이도 있겠지만 아래와 의존도에 따른 같이 빌드 차이점도 존재한다.

`api` 는 `C` 가 수정시에 해당 라이브러리를 의존하고 있는 `B` `A` 모두 재 빌드 한다.

`implementation` 은 `C` 가 수정시에 해당 라이브러리를 직접적으로 의존하고 있는 `B` 만 재 빌드 한다.

#### Java Library plugin - 의존성 선언 설정

|설정명|Role|Consumable|Resolvable|설명|
|:-:|:-:|:-:|:-:|:-|
|api|API 의존성 선언|N|N|컴파일을 위해서 필요한 의존성을 선언한다.|
|implementation|구현화 의존성 선언|N|N|외부에 노출되지 않도록 의존성을 설정한다.|
|compileOnly|||||
|runtimeOnly|||||
|testImplementation|||||
|testCompileOnly|||||
|testRuntimeOnly|||||

:::tip 참고자료
<https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_separation>  
<https://jongmin92.github.io/2019/05/09/Gradle/gradle-api-vs-implementation/>
:::
