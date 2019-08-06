# Serialize

## 직렬화란 ?

직렬화는 `Java` 시스템 내부에서 사용되는 `Object` 또는 `Data` 를 외부의 `Java` 기반 시스템에서도 사용할 수 있도록 `byte` 형태의 데이터로 변환하는 기술

이는 JVM (Java Virtual Machine) 이 메모리에 상주 (Heap 또는 Stack) 되어 있는 `Object` 데이터를 byte 형태로 변환한다.

## 역직렬화

`byte` 코드로 되어 있는 Data 를 원래대로 Object 혹은 Data 로 변환하는 기술을 말한다.

이는 다시 말해 직렬화된 데이터를 Object 로 변환해서 JVM 내부에 상주 시키는것 이다.

## 직렬화 하기

Serializable 이라는 마커 인터페이스를 상속하여 구현한다.

### 직렬화 조건

`java.io.Serializable` 인터페이스를 구현한 형태로 작업한다.

```java
public void serializable() {
  Member member = new Member("김명석", 10);

  byte[] serializable;

  String serialStr = null;

  ByteArrayOutputStream baos = new ByteArrayOutputStream();
  try (ObjectOutputStream oos = new ObjectOutputStream(baos)) {

      oos.writeObject(member);

      serializable = baos.toByteArray();

      serialStr = Base64.getEncoder().encodeToString(serializable);

      System.out.println(serialStr);

  } catch (Exception e) {
      e.printStackTrace();
  }

  byte[] seraialDecode = Base64.getDecoder().decode(serialStr);

  ByteArrayInputStream bais = new ByteArrayInputStream(seraialDecode);

  try (ObjectInputStream ois = new ObjectInputStream(bais)) {

      Object objMember = ois.readObject();

      Member om = (Member) objMember;

      System.out.println(om.toString());

  } catch (Exception e) {
      e.printStackTrace();
  }
}

static class Member implements Serializable {
  private static String name;
  private static int age;

  public Member(String name, int age) {
      this.name = name;
      this.age = age;
  }

  @Override
  public String toString() {
      return String.format("이름 : %s, 나이 : %d", name, age);
  }
}
```

:::tip 참고자료
<https://nesoy.github.io/articles/2018-04/Java-Serialize>
:::

## `transient` 키워드

`transient` 키워드를 붙이 변수는 직렬화 대상에서 제외된다.

데이터를 디스크에 저장하거나 디비에 저장할때 Http Request 를 통해 통신하는 경우 민감정보 (개인정보를 포함한 비밀번호와 같은 정보들) 을 제외하고 싶으면 `transient` 을 붙여서 사용하면 된다.

JPA 모델의 경우 `@transient` 어노테이션을 통해 DB 값과 매핑 시키지 않는다.

```java
public class User implements Serializable {
    private static final long serialVersionUID = 100000000000000001L;

    private String username;
    private transient String passWord;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
```

```java
public class UserTest {
    @Test
    public void transientField() throws IOException, ClassNotFoundException {
        final User user = new User("rrest", "1234");

        final FileOutputStream fos = new FileOutputStream("/tmp/user");
        final ObjectOutputStream oos = new ObjectOutputStream(fos);

        oos.writeObject(user);
        oos.flush();
        oos.close();
        fos.close();

        final FileInputStream fis = new FileInputStream("/tmp/user");
        final ObjectInputStream ois = new 
    }
}
```

:::tip 참고자료
<https://nakjunizm.github.io/2017/12/10/Serialization_And_Transient/>
:::
