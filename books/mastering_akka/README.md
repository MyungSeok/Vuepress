# 아카를 이용한 마이크로 서비스 개발

![아카를 이용한 마이크로 서비스 개발](/img/A113.png)

## 들어가며

아카의 핵심 빌딩 블록은 비동기, 이벤트 기반, 장애 허용, 분산 시스템을 가능하도록 동시성을 지원하는 액터다.

이 책은 초기 모놀리식 아카 애플리케이션을 리팩토링 해나가면서 느슨하게 결한된 마이크로 서비스로 개선해 나간다.

## Resource

* Github : <https://github.com/PacktPublishing/Mastering-Akka>
* PDF : <https://static.packt-cdn.com/downloads/MasteringAkka_ColorImages.pdf>


## 준비하기

[SBT 설치](https://www.scala-sbt.org/download.html)

```bash
$ xcode-select --install
```

```bash
$ brew install gcc
```

```bash
$ brew install sbt
```

예제 애플리케이션 실행

inital-example-app 에서 

```bash
$ docker-build.sh
```

맥 OS X 환경에서 `httpie` 설치

```bash
$ brew install httpie
```

사용자 엔드포인트와 상호작용

```bash
$ http -v POST boot2docker:8080/api/user < user.json
```

```bash
$ http boot2docker:8080/api/user/1
```

:::tip 참고자료
<https://dev.icednut.space/2020/02/17/20200217-akka-day01-akka>
:::