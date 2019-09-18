# View Template

||[JTwig](http://jtwig.org/)|[Velocity](http://velocity.apache.org/engine/devel/)|[JSTL](http://tomcat.apache.org/taglibs/standard/)|[Thymeleaf](https://www.thymeleaf.org/)|[Freemarker](https://freemarker.apache.org)|[Handlebars](https://handlebarsjs.com/)|[Vue](https://vuejs.org/) / [React](https://reactjs.org/)|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|랜더링 방식|서버 랜더링|서버 랜더링|서버 랜더링|서버 랜더링|서버 랜더링|클라이언트 랜더링|서버 및 클라이언트 랜더링|
|장점|PHP Twig 와 문법이 유사||대중적인 템플릿 엔진|||레퍼런스가 많음<br/>클라이언트 자원으로 사용<br/>클라이언트 디버깅 도구로 디버깅 가능|기존 프론트엔드 프레임워크의 장점을 대부분 수용|
|단점|지원이 불투명|||||서버 랜더링에 비해 상대적으로 느림<br/>지연 로딩으로 인한 화면 깜빡임 현상이 나올수 있음|별도의 프론트엔드 프레임워크 구축필요<br/>모던 브라우저에서만 지원 가능<br/>APP 형태로는 IE 지원 이슈 제기<br/>SSR 구성시에 초기구성 비용이 많이 수반됨<br/>유지관리에 대한 세분화된 정책이 필요|
|Last Release<br/>(Standard / Stable Release 기준)|5.87.0<br/>(18/04)|3.0<br/>(18/10)|1.2.x<br/>(15/02)|3.0.11<br/>(18/10)|2.3.28<br/>(18/04)|4.0.12|vue : 2.5.17<br/>react : 16.70|
|Broswer Support||||||IE 7+|App : IE 9+<br/>SSR: Full Support|

> 서버 사이드 랜더링 (SSR : Server Side Rendering) 방식은 대부분 브라우저에서 Full Support 이다.
