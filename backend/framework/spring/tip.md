# Tips

## Request Body 의 내용을 재사용 하고 싶을경우

POST 방식으로 전달되는 `application/json` 타입의 데이터를 Servlet 의 Filter 나 Spring 의 Interceptor 에서 모종의 처리를 하기 위해서는 HttpServletRequest 의 InputStream 을 읽어들여야 하는 경우가 있다.

만약 HttpServletRequest 에서 `InputStream` 을 한번 읽으면 다시는 읽을 수 없기 때문에 `RequestWrapper` 객체를 만들어 InputStream 을 임시로 저장하는 형태로 사용해야 한다.

![Spring MVC Request Life Cycle](/img/A108.png)

이 방식은 Filter 를 이용하는 방식으로 비슷한 방식의 동작인 Interceptor 와는 차이점이 있다.

> [Filter 와 Interceptor 의 차이점](https://supawer0728.github.io/2018/04/04/spring-filter-interceptor/)

아래는 실제로 적용했던 방법이다.

```java
@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
        FilterRegistrationBean bean = new FilterRegistrationBean();

        bean.setFilter(requestFilter());
        // 필터 등록
        bean.addUrlPatterns(("/*"));

        return bean;
    }
    @Bean(name = "requestFilter")
    public Filter requestFilter() {
        return new RequestFilter();
    }
}
```

```java
@Component
public class RequestFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException { }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        RequestWrapper wrapper = new RequestWrapper(req);
        chain.doFilter(wrapper, response);
    }

    @Override
    public void destroy() { }
}
```

```java
public class RequestWrapper extends HttpServletRequestWrapper {
    private byte[] bytes;

    public RequestWrapper(HttpServletRequest request) throws IOException {
        super(request);
        // InputStream 을 byte 코드로 만듬
        bytes = IOUtils.getBytes(super.getInputStream());
    }

    public ServletInputStream getInputStream() {
        final ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
        return new ServletInputStreamImpl(bis);
    }
}
```

:::tip 참고자료
<https://singun.github.io/2017/02/04/logging-requestbody/>  
<https://taetaetae.github.io/2019/06/30/controller-common-logging/>  
<https://meetup.toast.com/posts/44>
:::
