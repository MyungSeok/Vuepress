# Reactive Programming with Reactor 3

## Reactor 3

Reactor 3 는 Reactive Streams 를 스팩을 기반으로 구축된 라이브러리로 JVM에서 리엑티브 프로그래밍 패러다임을 승계합니다.

이는 데이터 흐름 (data flows) 와 변환 전파에 중점을 둔 비동기프로그래밍이다.

> ### 리액티브 선언문
>
> 리액티브 시스템으로 구축된 시스템은 `유연함`, `낮은 결합도`, `확장성`을 유지해야 한다. <br/>
> 이 시스템은 장애에 대한 강한 내성을 가지고, 비록 장애가 발생하더라도 뛰어난 장애 복구성의 특징을 가지고 있습니다. <br/>
> 또한 높은 응답성을 가져 사용자에게 하여금 상호적 피드백을 제공합니다.

### 왜 리액티브 인가?

리액티브 프로그래밍은 비동기 처리 데이터 파이프라인을 구축하기 위해 선언적 코드(aka. 함수형 프로그래밍) 를 사용하는 새로운 패러다임이다.<br/>
데이터가 사용 가능하게 끔 준비가 되면 Consumer 에게 Push 되는 이벤트 처리 기반의 모델입니다. (이벤트의 비동기 시퀀스를 처리합니다.)<br/>
이것은 리소스를 보다 효율적으로 사용하기 위해 low-level 의 동시적 처리 혹은 병렬 코드를 작성하는데 큰 어려움 없이<br/>
어플리케이션의 수용 가능한 처리 범위를 증가시키는 효과를 가져옵니다.

리액티브 프로그래밍은 완전한 비동기 혹은 논 블로킹을 중심을 기반으로 JDK 에서 비동기 코드를 수행 가능하게 하며,<br/>
기존 Callback 기반의 API 설계나 Future 사용에 대한 대안으로 사용 가능하다.

### 리액티브 스트림

**Reactive Stream** 스팩은 JVM 에서 Reactive Programming 라이브러리를 표준화 하기 위한 주도적 노력이며,

더 중요하게는 서로 다른 환경에서 상호 운영 가능하도록(호환 가능) 자동하는 방식을 지정한다.

리액티브 스트림은 다음 4개의 인터페이스로 정의되어 있다.

* Subscriber
* Publisher
* Subscription
* Processor

대표적은 구현체는 다음과 같은것들이 있다.

* Reactor 3
* RxJava (Version 2~)
* Akka Streams
* Vert.x
* Ratpack

리액티브 스트림의 목표는 모든 상황에서 사용가능하게 끔 high-level 의 API 제공을 목표로 합니다.

### 상호작용

리액티브 스트림은 `Publisher` 와 데이터가 시작되고,

기본적으로는 `Subscriber` 가 `subscribe` 를 호출하는 순간

__Publisher 에서 `Subscriber` 로 데이터 전달이 시작__ 됩니다.

![Put them all together](/img/A123.png)

위 다이어그램에서 `request(n)` 은 backpressure 을 조절하는 부분입니다.

:::tip 참고자료
[Tech.io](https://tech.io/playgrounds/929/reactive-programming-with-reactor-3/Intro)<br/>
<https://www.reactive-streams.org/><br/>
[What is Reactive Programming](https://medium.com/@kevalpatel2106/what-is-reactive-programming-da37c1611382)<br/>
[Reactive Manifesto](https://www.reactivemanifesto.org/)
:::

## Flux

Flux 는 다음과 같은 연산이 추가로 정의되어 있다.

* 생성 (Generate)
* 변환 (Transform)
* 조율 (Orchestrate)

0 에서 `n` 개까지의 `<T>` 의 요소를 보낸 뒤(`onNext` 이벤트) 성공(`onComplete` 메서드) 하거나 에러를 발생 (`onError` 종료 메서드)

인스턴스 메서드인 연산자를 사용하면 비동기 시퀀스를 생성하는 비동기 처리 파이프라인을 구축할 수 있다.

![flux diagram](/img/A124.png)

### 예제

```kotlin
// TODO Return an empty Flux
Flux<String> emptyFlux() {
    return Flux.empty();
}

// TODO Return a Flux that contains 2 values "foo" and "bar" without using an array or a collection
Flux<String> fooBarFluxFromValues() {
    return Flux.just("foo", "bar");
}

// TODO Create a Flux from a List that contains 2 values "foo" and "bar"
Flux<String> fooBarFluxFromList() {
    return Flux.fromIterable(Arrays.asList("foo", "bar"));
}

// TODO Create a Flux that emits an IllegalStateException
Flux<String> errorFlux() {
    return Flux.error(new IllegalStateException());
}

// TODO Create a Flux that emits increasing values from 0 to 9 each 100ms
Flux<Long> counter() {
    return Flux.interval(Duration.ofMillis(100))
        .take(10);
}
```

:::tip 참고자료
<https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Flux.html><br/>
[Reactor 언제 어떤 Operator을 써야 할까?](https://luvstudy.tistory.com/100)
:::

## Mono

최대 1개의 요소를 반환할 수 있습니다.

![mono diagram](/img/A125.png)

### 예제

```kotlin
// TODO Return an empty Mono
Mono<String> emptyMono() {
    return Mono.empty();
}

// TODO Return a Mono that never emits any signal
Mono<String> monoWithNoSignal() {
    return Mono.never();
}

// TODO Return a Mono that contains a "foo" value
Mono<String> fooMono() {
    return Mono.just("foo");
}

// TODO Create a Mono that emits an IllegalStateException
Mono<String> errorMono() {
    return Mono.error(new IllegalStateException());
}
```

## StepVerifier

Publisher 를 구독하면서 예상값과 순서를 검증할 수 있음

`create` 메서드로 인스턴스를 생성

반드시 `verify()` 메서드를 호출해야 함

```kotlin
StepVerifier.create(T<Publisher>)
    .{ expectation... }
    .verify()
```

코드 예시

```kotlin
void expectFooBarComplete(Flux<String> flux) {
    StepVerifier.create(flux)
        .expectNext("foo")
        .expectNext("bar")
        .verifyComplete();
}

// TODO Use StepVerifier to check that the flux parameter emits "foo" and "bar" elements then a RuntimeException error.
void expectFooBarError(Flux<String> flux) {
    StepVerifier.create(flux)
        .expectNext("foo")
        .expectNext("bar")
        .verifyError(RuntimeException.class);
}

// TODO Use StepVerifier to check that the flux parameter emits a User with "swhite"username
// and another one with "jpinkman" then completes successfully.
void expectSkylerJesseComplete(Flux<User> flux) {
    StepVerifier.create(flux)
        .assertNext( u -> assertThat(u.getUsername()).isEqualTo("swhite"))
        .assertNext( u -> assertThat(u.getUsername()).isEqualTo("jpinkman"))
        .verifyComplete();
}

// TODO Expect 10 elements then complete and notice how long the test takes.
void expect10Elements(Flux<Long> flux) {
    StepVerifier.create(flux)
        .expectNextCount(10)
        .verifyComplete();
}

// TODO Expect 3600 elements at intervals of 1 second, and verify quicker than 3600s
// by manipulating virtual time thanks to StepVerifier#withVirtualTime, notice how long the test takes
void expect3600Elements(Supplier<Flux<Long>> supplier) {
    StepVerifier.withVirtualTime(supplier)
        .thenAwait(Duration.ofSeconds(3600))
        .expectNextCount(3600)
        .verifyComplete();
}
```

##