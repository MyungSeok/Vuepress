# Refactoring

## Componse Method Pattern

함수의 의도가 잘 드러나도록 동등한 수준의 작업을 하는 여러 단계로 나눈다.

이는 함수가 하나의 동작만 할 수 있게 재구성 하는것이다.

* 기능을 작게 나눈다.
* 미사용 코드 혹은 중복 코드를 제거한다.
* 코드의 의도가 잘 드러나도록 설계한다.
* 기능을 단순화 한다.
* 메서드를 동등한 수준으로 단계를 나눈다.

:::tip 참고자료
<https://arksh.tistory.com/entry/패턴을-활용한-리팩터링-Compose-Method>
:::

## 일급 컬렉션 (First Class Collection)

* 콜렉션을 포함한 클래스는 반드시 다른 멤버변수가 없어야 한다.

```java
Map<String, String> map = new HashMap<>();
map.put("1", "A");
map.put("2", "B");
map.put("3", "C");
```

위 코드를 아래와 같이 `Wrapping` 하는것이다.

```java
public class GameRanking {
  private Map<String, String> ranks;

  public GameRanking(Map<String, String> ranks) {
    this.ranks = ranks;
  }
}
```

`Collection`을 **Wrapping** 하면서 그 외 다른 멤버 변수가 없는 상태를 일급 컬렉션이라 한다.

아래 코드와 같이 바꾸면 다음과 같은 이점이 생긴다

* 비지니스에 종속적인 자료구조
* `Collection` 의 불변성을 보장
* 상태와 행위를 한 곳에서 관리
* 이름이 있는 컬렉션

:::tip 참고자료
<https://jojoldu.tistory.com/412>
:::
