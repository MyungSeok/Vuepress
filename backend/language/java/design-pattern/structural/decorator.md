# 데코레이터

구조적 패턴중에 하나로 객체의 결합을 통해 기능을 동적으로 유연하게 확장함

클래스나 객체를 조합해 더 큰 구조를 만드는 패턴이다.

예를 들면 서로다른 인터페이스를 지닌 2개의 객체를 묶어 단일 인터페이스로 제공하던지 하는 방식이다.

아래 예시는 기본 도로를 표시하는 기능의 클래스를 데코레이션 패턴으로 구성하는 방식이다.

```java
public class DisplayRoad {
    public void draw() {
        System.out.println("기본 도로 표시");
    }
}
```

```java
public class DisplayWithRoad extends DisplayRoad {
    public void draw() {
        super.draw();
        drawTraffic();
    }

    public void drawTraffic() {
        System.out.println("교통량 표시");
    }
}
```

```java
public class DisplayWithRoadTraffic extends DisplayWithRoad {
    public void draw() {
        super.draw();
        crossing();
    }

    public void crossing() {
        System.out.println("교차료 표시");
    }
}
```

```java
public void decorator() {
    DisplayRoad road = new DisplayRoad();
    road.draw();

    DisplayRoad roadWith = new DisplayWithRoad();
    roadWith.draw();

    DisplayRoad roadWithTraffic = new DisplayWithRoadTraffic();
    roadWithTraffic.draw();
}
```

```bash
기본 도로 표시

기본 도로 표시
교통량 표시

기본 도로 표시
교통량 표시
교차료 표시
```

:::tip 참고자료
<https://gmlwjd9405.github.io/2018/07/09/decorator-pattern.html>
:::
