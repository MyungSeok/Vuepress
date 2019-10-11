# 상태

객체가 특정 상태에 따라 행위를 달리사는 상황에서

자신이 직접 상태를 체크하여 상태에 따라 행위를 호출하지 않고 _**상태를 객체화 하여 상태가 행동할 수 있도록 위임하는 패턴**_ 을 말한다.

![상태 패턴](/img/A101.png)

## 사용예

* 상황
  * 노트북 전원을 켜고 끄는 상황
* 상태
  * 노트북 켜짐 상태
  * 노트북 꺼짐 상태
* 동작
  * 전원버튼을 누름

**Laptop.class**

```java
public class Laptop {
  public static String ON = "on";
  public static String OFF = "off";

  public static String powerState = "";

  public Laptop() {
    setPowerState(Laptop.OFF);
  }

  public void setPowerState(String powerState) {
    this.powerState = powerState;
  }

  public void powerPush() {
    if ("on".equals(this.powerState)) {
      System.out.println("전원 OFF");
    } else if ("saving".equals(this.powerState)) {
      System.out.println("전원 ON");
    } else {
      System.out.println("절전 모드");
    }
  }
}
```

위 코드에서 보면 제품 구분별 (Laptop 이 아닌 TV 나 Radio 와 같은) 이 추가될때 조건들까지 수정해야되는 범위가 넓기 때문에 분기문마다 일일이 수정이 어렵다.  
따라서 상태로 관리하는것이 좋다.

전원 상태를 캡슐화한 인터페이스를 설정

```java
public interface PowerState {
  public void powerPush();
}
```

`PowerState` 인터페이스를 구현한 각 상태 클래스를 설정

```java
public class On implements PowerState {
  @Override
  public void powerPush() {
    System.out.println("전원 ON")
  }
}
```

```java
public class Off implements PowerState {
  @Override
  public void powerPush() {
    System.out.println("전원 OFF")
  }
}
```

```java
public class Saving implements PowerState {
  @Override
  public void powerPush() {
    System.out.println("절전 모드");
  }
}
```

`Laptop` 클래스를 알맞게 수정

```java
public class Laptop {
  private PowerState powerState;

  public Laptop() {
    this.powerState = new Off();
  }

  public void setPowerState(PowerState powerState) {
    this.powerState = powerState;
  }

  public void powerPush() {
    powerState.powerPush();
  }
}
```

이를 사용할 클라이언트 코드를 작성

```java {10,12,14}
public class Client {
  public static void main(String args[]) {
    Laptop laptop = new Laptop();

    On on = new On();
    Off off = new Off();
    Saving saving = new Saving();

    laptop.powerPush();
    laptop.setPowerState(on);
    laptop.powerPush();
    laptop.setPowerState(saving);
    laptop.powerPush();
    laptop.setPowerState(off);
    laptop.powerPush();
  }
}
```

:::tip 참고자료
<https://victorydntmd.tistory.com/294>
:::
