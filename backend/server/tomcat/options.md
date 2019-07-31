# Options

Tomcat 시작 옵션들이 있는데 이에 대한 내용이다.

## `startup.sh`

최종적으로는 `catalina.sh` 스크립트를 호출하지만 시작시 사용가능한 쉘 환경변수들이 나온다.

## `catalina.sh`

* `CATALINA_HOME`
  * Catalina 가 빌드된 디렉토리
  * 여기서 빌드된 디렉토리는 설치한 홈 디렉토리를 말하기도 한다.

* `CATALINA_BASE`
  * Catalina 설치에 동적 영역을 해결하기 위한 기본 디렉토리
  * Multi Instance 설치할 때 이 공간이 사용된다.
  * 별도로 지정하지 않으면 `CATALINA_HOME` 이 사용된다.

* `CATALINA_OUT`
  * `stdout` `stderr` 를 어디로 보낼것인지에 대한 전체 경로를 지정
  * 기본값은 `$CATALINA_BASE/logs/catalina.out` 이 된다.

* `CATALINA_TMPDIR`
  * JVM (Java Virtual Machine) 이 사용할 임시디렉토리 (java.io.tmpdir) 위치를 지정한다.
  * 기본값은 `$CATALINA_BASE/temp` 이 된다.

* `CATALINA_OPTS`
  * `start` `run` `debug` 명령이 실행될 때 사용되는 Java 런타임 옵션이다.
  * JAVA_OPTS 에 포함되는 옵션이 아닌것이 여기에 포함된다.
  * TOMCAT 자체적으로만 사용되는 내부 옵션만 포함되며 중지 프로세스 혹은 버전 명령등으로 사용해서는 안된다.

```sh
## 기동시에만 사용 ##
CATALINA_OPTS=" ${CATALINA_OPTS} -Xms2048m -Xmx2048m -XX:MaxPermSize=256m"
CATALINA_OPTS=" ${CATALINA_OPTS} -verbose:gc"
CATALINA_OPTS=" ${CATALINA_OPTS} -Xloggc:${CATALINA_BASE}/logs/gc_`date "+%Y%m%d%H"`.log"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+UseParallelGC"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+UseParallelOldGC"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+UseAdaptiveSizePolicy"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+PrintGCDetails"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+PrintGCTimeStamps"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+DisableExplicitGC"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:+HeapDumpOnOutOfMemoryError"
CATALINA_OPTS=" ${CATALINA_OPTS} -XX:HeapDumpPath=${CATALINA_BASE}/logs"
CATALINA_OPTS=" ${CATALINA_OPTS} -Djava.security.egd=file:/dev/./urandom"
```

* `JAVA_HOME`
  * JDK 가 설치된 위치
  * debug 인자와 실행할 때 필요하다.

* `JRE_HOME`
  * JRE 를 설치한 위치
  * 기본값은 `JAVA_HOME` 이며 별도 지정이 가능하다.

* `JAVA_OPTS`
  * 명령이 실행될때 사용되는 Java 런타임 옵션
  * `CATALINA_OPTS` 모든 옵션이 아닌것이 여기에 포함된다.
  * Tomcat 에 의해서만 사용되어지며 중지 프로세스 혹은 버전 명령에도 사용된다.
  * 대부분의 옵션들은 `CATALINA_OPTS` 에 있어야 한다.

```sh
## 시작/중지에 모두 사용 ##
JAVA_OPTS=" ${JAVA_OPTS} -server"
JAVA_OPTS=" ${JAVA_OPTS} -DjvmRoute=${JVM_ROUTE}"
JAVA_OPTS=" ${JAVA_OPTS} -Dport.http=${HTTP_PORT}"
JAVA_OPTS=" ${JAVA_OPTS} -Dport.https=${HTTPS_PORT}"
JAVA_OPTS=" ${JAVA_OPTS} -Dport.ajp=${AJP_PORT}"
JAVA_OPTS=" ${JAVA_OPTS} -Dport.shutdown=${SHUTDOWN_PORT}"
```

* `CATALINA_PID`
  * catalina 시작 Java 프로세스의 PID 를 가지고 있는 파일 경로를 의미한다.

* `LOGGING_CONFIG`
  * Tomcat 로깅 설정 파일을 재정의한다.

```sh
LOGGING_CONFIG="-Djava.util.logging.config.file=$CATALINA_BASE/config/logging/properties"
```

* `LOGGING_MANAGER`
  * Tomcat 로깅 매니저 설정을 재정의 한다.

```sh
LOGGING_MANAGER="-Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager";
```

:::tip 참고자료
<http://linux.systemv.pe.kr/tomcat-시작-스크립트-옵션들/>
:::
