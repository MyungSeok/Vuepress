# Gson Custom Adapters

Gson 라이브러리를 이용하여 `getter`/`setter` 동작이 불가할시에 아래와 같이 어뎁터를 구성하여 사용함

```java
static class SampleDto {
  private String date;

  public String getDate() {
      return date + "[ >>> GET ]";
  }

  public void setDate(String date) {
      this.date = date + "[ <<< SET ]";
  }
}
```

```java
class SampleDtoAdapter extends TypeAdapter<SampleDto> {

  @Override
  public void write(JsonWriter out, SampleDto value) throws IOException {
      out.beginObject();
      out.name("date");
      out.value(value.getDate());
      out.endObject();
  }

  @Override
  public SampleDto read(JsonReader in) throws IOException {
      SampleDto sample = new SampleDto();
      in.beginObject();
      String fieldName = null;

      while (in.hasNext()) {
          JsonToken token = in.peek();

          if (token.equals(JsonToken.NAME)) {
              fieldName = in.nextName();
          }

          if (("d" +
                  "ate").equals(fieldName)) {
              token = in.peek();
              sample.setDate(in.nextString());
          }
      }

      in.endObject();
      return sample;
  }
}
```

```java
public Gson getCustomBuilder() {
  GsonBuilder builder = new GsonBuilder();
  builder.registerTypeAdapter(SampleDto.class, new SampleDtoAdapter());
  builder.setPrettyPrinting();

  return builder.create();
}

public static void main() {
  Object[] data = Stream
      .iterate(
          new HashMap(),
          map -> {
              map.put("date", (new Date()).toString());
              return map;
          }
      )
      .limit(2)
      .toArray();

  Gson gson = getCustomBuilder();

  String strJson = new Gson().toJson(data[0]);

  SampleDto sample = gson.fromJson(strJson, (Type) SampleDto.class);

  System.out.println(sample.getDate());

}
```

```bash
Wed Jul 03 16:10:51 KST 2019[ <<< SET ][ >>> GET ]
```

DTO 객체가 배열로 들어왓을 경우로 수정해보자

:::tip 참고자료
<https://www.tutorialspoint.com/gson/gson_custom_adapters.htm>
:::
