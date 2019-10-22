# Gradle

## Gradle 설치

### Mac

```bash
# brew gradle
```

### Ubuntu

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

## Gradle 빌드

```bash
# gradle build
```

## Gradle Build 시에 실행가능한 jar 만들기

manifest 파일을 생성하여 등록 해야 한다.

:::tip 참고자료
<http://theeye.pe.kr/archives/2075>
:::

## Gradle Task

:::tip 참고자료
<https://kwonnam.pe.kr/wiki/gradle/task>
:::

## Gradle Dependencies

`api` (:==`compile`) 와 `implementation` 의존성 차이가 크다

@flowstart
stage1=>operation: A
stage2=>operation: B
stage3=>operation: C

stage1(right)->stage2(right)->stage3
@flowend

`api` 는 빌드후에 외부에 필요한 의존성을 노출하고

`implementation` 은 빌드 후에도 외부에 의존성이 노출되지 않도록 한다.

### Java Library plugin - 의존성 선언 설정

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
:::
