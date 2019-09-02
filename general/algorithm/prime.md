# Sieve of Eratosthenes

에라토스테네스의 체 (Sieve of Eratosthenes) 라는 알고리즘은 소스를 구하는 알고리즘의 일종이다.

![에라토스테네스](/img/A084.gif)

소수가 아닌 수를 거르는 방법으로  `2` 부터 `N-1` 까지의 수중에서 2의 배수를 모두 체에 거르는 식으로 동작된다.

* `2` 의 배수를 체크한다.
* `3` 의 배수를 체크한다.
* `4` 는 2의 배수에서 체크했으니 소수가 아니다.
* `5` 의 배수를 체크한다.
* 이런식으로 체크하여 **체크가 되지 않는 수들이 소수**이다.

아래는 특정 숫자의 소수의 갯수를 구하는 함수이다.

```java
/**
  * 에라토노스의 체
  * @param n
  * @return
  */
public static int solution(int n) {
  boolean[] b = new boolean[n + 1];
  int answer = 0;

  for (int i = 2; i <= n; ++i) {
    if (b[i] == false) {
      answer++;
      for (int j = i; j <= n; j += i) {
        b[j] = true;
      }
    }
  }

  return answer;
}
```

:::tip 참고자료
<https://marobiana.tistory.com/91>  
<https://m.blog.naver.com/ddo009/220707562118>
:::
