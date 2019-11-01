# 커맨드

## 개요

실행될 기능을 캡슐화 함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계하는 패턴

이벤트가 발생했을때 실행될 기능이 다양하면서도 변경이 필요한 경우에 이벤트를 발생시키는 클래스를 변경하지 않고 재사용하고자 할 때 유용하다.

![Command Pattern](/img/A107.png)

실행될 기능을 캡슐화 함으로써 기능 실행의 요구하는 호출자 (Invoker) 클래스와 실제 기능을 실행하는 수신자 (Receiver) 클래스 사이의 의존성을 제거한다.

따라서 실행될 기능의 변경에도 호출자 클래스를 수정 없이 그대로 사용할 수 있도록 해준다.

역활에 따른 작업자

* Command
  * 실행될 기능에 대한 인터페이스
  * 실행될 기능을 execute 메서드로 선언함
* ConcreteCommand
  * 실제로 실행되는 기능을 구현
  * 즉, Command 라는 인터페이스를 구현함
* Invoker
  * 기능 실행을 요청하는 호출자 클래스
* Receiver
  * ConcreteCommand 에서 `execute()` 메서드를 구현할 때 필요한 클래스
  * 즉, ConcreteCommand 의 기능을 실행하기 위해 사용하는 수신자 클래스

## 예시

만능버튼 만들기를 이용하여 커맨드 패턴을 적용해본다.

버튼을 누르면 특정한 동작하게끔 한다.

**Command 클래스**

```java
public interface Command {
  public abstract void execute();
}
```

**Button 클래스**

```java
public class Button {
  private Command theCommand;
  
  public Button(Command theCommand) {
    setCommand(theCommand);
  }

  public void setCommand(Command newCommand) {
    this.theCommand = newCommand;
  }

  public void pressed() {
    theCommand.execute();
  }
}
```

**Lamp, LampOnCommand 클래스**

```java
public class Lamp {
  public void turnOn() {
    System.out.println("Lamp On");
  }
}
```

```java
public class LampOnCommand implements Command {
  private Lamp theLamp;

  public LampOnCommand(Lamp theLamp) {
    this.theLamp = theLamp;
  }

  public void execute() {
    theLamp.turnOn();
  }
}
```

**Alarm, AlarmStartCommand 클래스**

```java
public class Alarm {
  public void start() {
    System.out.println("Alarming");
  }
}
```

```java
public class AlarmStartCommand implements Command {
  private Alarm theAlarm;
  
  public AlarmStartCommand(Alarm theAlarm) {
    this.theAlarm = theAlarm;
  }

  public void execute() {
    theAlarm.start();
  }
}
```

**클라이언트 사용코드**

```java
public class Client {
  public static void main(String[] args) {
    Lamp lamp = new Lamp();
    Command lampOnCommand = new LampOnCommand(lamp);

    Alarm alarm = new Alarm();
    Command alarmStartCommand = new AlarmStartCommand(alarm);

    // 램프 켜는 Command 설정
    Button button1 = new Button(lampOnCommand);
    // 램프 켜는 기능 수행
    button1.pressed();

    // 알람 울리는 Command 설정
    Button button2 = new Button(alarmStartCommand);
    // 알람 울리는 기능 수행
    button2.pressed();
    // 다시 램프 켜는 Command 설정
    button2.setCommand(lampOnCommand);
    // 램프 켜는 기능 수행
    button2.pressed();
  }
}
```

:::tip 참고자료
<https://gmlwjd9405.github.io/2018/07/07/command-pattern.html>  
<https://www.cs.mcgill.ca/~hv/classes/CS400/01.hchen/doc/command/command.html>
:::
