---
sidebar: auto
---
# Graph QL

Graph QL 은 Server API 를 구성하기 위해 **Facebook 에서 만든 Query Language** 이다.

기존에 일반적으로 사용중인 RESTful API 와 유사하지만 조금더 유연하게 운영가능하며 하나의 API 로 다양한 정보들을 필터링 해서 데이터를 제공 받을수 있는 질의어를 제공한다.

## RESTful API 와 차이점

RESTful API 와의 차이점은 대체적으로 아래 두가지로 압축된다.

* Graph QL API 는 주로 **하나의 EndPoint 만을 사용**한다.
* Graph QL API 는 요청할때 사용한 Query 문 에 따라 응답 구조가 달라진다.

이는 위 두가지 특징에 따라 아래와 같이 **장점**을 가질수 있다.

* HTTP 요청 횟수를 줄일 수 있다.
  * RESTful API 는 각각의 Resource 종류별로 요청을 해야하고, 필요한 Resource 에 따라 요청 횟수가 증가한다.
* HTTP 응답의 Size 를 줄일 수 있다.
  * RESTful 은 응답의 형태가 정해져 있고, 따라서 필요한 정보만 부분적으로 요청하는 것이 힘들다.
  * Graph QL 은 원하는 대로 정보를 요청하는 것이 가능하다.

반면 위와 같이 다양한 요청에 유연하게 반응하기 어려울때는 아래와 같은 단점도 가질수 있다.

* File 전송등 Text 만으로 하기 힘든 내용들을 처리하기 복잡하다.
* 고정된 요청과 응답만 필요할 경우에는 Query 로 인해 요청의 크기가 RESTful API 보다 더 커진다.
* 재귀적인 Query 가 불가능 하다.

> File 전송이 불가능하진 않지만 일반적인 Graph QL API 장점을 얻을수 없으며 다른 3rd Party Service 에 의존해야 하는 문제가 발생될 수도 있다.

## Graph QL vs RESTful

Graph QL 과 RESTful 의 선택기준은 쉽게 아래와 같은 기준으로 선택하면 된다.

* Graph QL
  * 서로 다른 유형의 다양한 요청들에 대해 응답할 수 있어야 할 때
  * 대부분의 요청이 CRUD 에 해당될 때
* RESTful
  * HTTP/HTTPS 에 의한 Caching 이 반드시 필요할 때
  * File 전송과 같은 단순한 Text 기반의 정보들로 처리가 힘들때
  * 요청의 구조가 단순하여 유연함이 불 필요할때

위 기준과 같이 각 사용목적에 맞게 끔 **Best Practice** 의 기준으로 선택하는것이 최선이다.

:::tip 참고자료
<https://graphql-kr.github.io/learn/>  
<https://velopert.com/2318>  
<https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/>
:::
