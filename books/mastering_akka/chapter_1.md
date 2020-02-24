# 1장 효과적인 반응형 애플리케이션 구축

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