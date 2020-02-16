(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{299:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jpa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jpa","aria-hidden":"true"}},[t._v("#")]),t._v(" JPA")]),t._v(" "),s("h2",{attrs:{id:"java-persistence-api-란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-persistence-api-란","aria-hidden":"true"}},[t._v("#")]),t._v(" Java Persistence API 란 ?")]),t._v(" "),s("p",[t._v("ORM 의 표준 기술로 "),s("code",[t._v("Hibernate")]),t._v(", "),s("code",[t._v("OpenJPA")]),t._v(", "),s("code",[t._v("EclipseLink")]),t._v(", "),s("code",[t._v("TopLink")]),t._v(" "),s("code",[t._v("Essentials")]),t._v("  과 같은 구현체가 있고, 이들의 대한 "),s("em",[s("strong",[t._v("표준 인터페이스")])]),t._v(" 이다.")]),t._v(" "),s("h3",{attrs:{id:"장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점","aria-hidden":"true"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("ul",[s("li",[s("em",[s("strong",[t._v("객체지향적으로 개발 및 데이터를 관리")])]),t._v(" 할 수 있기 때문에 비지니스 로직에 집중할 수 있다.")]),t._v(" "),s("li",[t._v("테이블의 생성, 변경, 관리가 쉽다.")]),t._v(" "),s("li",[t._v("빠른 개발이 가능하다.")]),t._v(" "),s("li",[t._v("DB 에 의존적이지 않다.\n"),s("ul",[s("li",[t._v("MySQL, Oracle, Sysbase, Derby, PostgreSQL 등등의 데이터 베이스 지원")]),t._v(" "),s("li",[t._v("POJO 기반의 모델의 지원")])])])]),t._v(" "),s("h3",{attrs:{id:"단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점","aria-hidden":"true"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("ul",[s("li",[t._v("객체지향을 이해하고 개발 해야 하는 만큼 러닝커브가 높다.")]),t._v(" "),s("li",[t._v("성능상의 문제가 있을수 있다.")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://blog.woniper.net/255",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.woniper.net/255"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"영속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영속성","aria-hidden":"true"}},[t._v("#")]),t._v(" 영속성")]),t._v(" "),s("p",[t._v("Entity 를 영구적으로 저장해주는 환경을 의미한다.")]),t._v(" "),s("h3",{attrs:{id:"entitymanagerfactory-와-entitymanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entitymanagerfactory-와-entitymanager","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("EntityManagerFactory")]),t._v(" 와 "),s("code",[t._v("EntityManager")])]),t._v(" "),s("ul",[s("li",[t._v("EntityManagerFactory\n"),s("ul",[s("li",[t._v("생성하는데 비용이 크다.")]),t._v(" "),s("li",[t._v("어플리케이션 전체적으로 한 번만 생성하여 공유하도록 설계되어 있다.")]),t._v(" "),s("li",[t._v("여러 스레드에서 동시에 접근해도 안전하다.")]),t._v(" "),s("li",[t._v("서로 다른 스레드의 공유 가능")])])]),t._v(" "),s("li",[t._v("EntityManager\n"),s("ul",[s("li",[t._v("생성하는데 비용이 작다.")]),t._v(" "),s("li",[t._v("여러 스레드가 동시에 접근하면 동시성 문제가 발생한다.")]),t._v(" "),s("li",[t._v("스레드간의 공유하지 않는다.")])])])]),t._v(" "),s("p",[s("code",[t._v("EntityManager")]),t._v(" 는 데이터베이스의 연결이 꼭 필요한 시점까지는 커넥션을 얻지 않습니다."),s("br"),t._v(" "),s("code",[t._v("EntityManagerFactory")]),t._v(" 와 "),s("code",[t._v("EntityManager")]),t._v(" 를 생성하는 코드는 아래와 같습니다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EntityManagerFactory")]),t._v(" entityManagerFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Persistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEntityManagerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 파라미터 : 영속성 단위 이름")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EntityManager")]),t._v(" entityManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entityManagerFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEntityManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"persistance-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistance-context","aria-hidden":"true"}},[t._v("#")]),t._v(" Persistance Context")]),t._v(" "),s("p",[t._v("영속성 컨텍스트 (Persistance Context) 는 엔티티를 영구적으로 저장하는 환경 이라는 뜻이다.")]),t._v(" "),s("p",[s("code",[t._v("EntityManager")]),t._v(" 를 이용하여 Entity를 저장하거나 조회할 때 EntityManager 는 영속성 컨텍스트에 Entity 를 보관하고 관리한다.")]),t._v(" "),s("p",[s("code",[t._v("[EntityManager 객체].persist([Entity 객체])")]),t._v(" 를 실행하면 영속성 컨텍스트가 Entity 를 관리하게 된다.")]),t._v(" "),s("p",[t._v("Persistance Context 는 눈에 보이지 않는 "),s("em",[s("strong",[t._v("논리적인 개념")])]),t._v(" 이다."),s("br"),t._v("\n또한 "),s("code",[t._v("EntityManager")]),t._v(" 를 하나 생성할 때 하나가 만들어지며, EntityManager 를 통하여 접근할 수 있고 관리할 수 있다.")]),t._v(" "),s("p",[t._v("Persistance Context 의 특징은 아래와 같다.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("영속성 컨텍스트는 Entity 를 식별자 값으로 구분합니다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Entity")]),t._v(" 에서 "),s("code",[t._v("@Id")]),t._v(" 어노테이션을 통하여 지정한 멤버 변수가 영속성 컨텍스트에 식별자 값으로 저장된다.")])])]),t._v(" "),s("li",[s("p",[t._v("JPA 는 보통 트랜잭션을 커밋 하는 순간 영속성 컨텍스트에 새로 저장된 Entity 를 데이터베이스에 반영한다.")]),t._v(" "),s("ul",[s("li",[t._v("이러한 과정을 "),s("code",[t._v("flush")]),t._v(" 라고 한다.")])])]),t._v(" "),s("li",[s("p",[t._v("1차 캐시를 사용한다.")]),t._v(" "),s("ul",[s("li",[t._v("영속성 컨텍스트 내부에 존재하는 캐시 (Map) 을 1차 캐시라고 한다.")]),t._v(" "),s("li",[t._v("영속 상태의 "),s("code",[t._v("Entity")]),t._v(" 는 모두 이곳에 저장되며 키는 "),s("code",[t._v("@Id")]),t._v(" 로 매핑한 식별자이며 값은 Entity 인스턴스이다.")]),t._v(" "),s("li",[s("code",[t._v("entityManager.find()")]),t._v(" 메서드를 호출하면 먼저 1차 캐시에서 Entity 를 찾고, 만약 찾는 Entity 가 1차 캐시에 없으면 데이터베이스에서 조회한 후 1차 캐시에 저장하고 영속 상태인 해당 객체를 반환한다.")])])]),t._v(" "),s("li",[s("p",[t._v("객체의 동일성을 보장한다.")]),t._v(" "),s("ul",[s("li",[t._v("1차 캐시에 있는 같은 Entity 를 반환하기 때문에 Entity 의 동일성을 보장한다.")])])]),t._v(" "),s("li",[s("p",[t._v("트랜잭션을 지원하는 쓰기 지연을 수행한다.")]),t._v(" "),s("ul",[s("li",[t._v("EntityManager 는 트랜잭션을 커밋 하기 직전까지 데이터베이스에 Entity를 저장하지 않고 영속성 컨텍스트의 내부 SQL 저장소에 생성 쿼리를 저장해 둔다.")]),t._v(" "),s("li",[t._v("이후 커밋을 하게 되면 저장해두었던 쿼리를 데이터베이스에 보냅니다.")])])]),t._v(" "),s("li",[s("p",[t._v("변경을 감지한다.")]),t._v(" "),s("ul",[s("li",[t._v("영속성 컨텍스트에는 이전 flush() 때의 Entity 상태를 복사해서 저장해둔 스냅샷이 존재한다.")]),t._v(" "),s("li",[t._v("JPA 는 "),s("code",[t._v("flush()")]),t._v(" 시점에 스냅샷과 Entity 를 비교해 변경된 Entity 를 찾는다.")]),t._v(" "),s("li",[t._v("만약 변경된 Entity 가 있다면 각각의 객체에 대한 수정 쿼리를 만들어 쓰기 지연 SQL 저장소에 저장한 후 한꺼번에 데이터베이스로 보내 트랜잭션을 커밋한다.")]),t._v(" "),s("li",[t._v("변경 감지는 영속성 컨텍스트가 관리하는 영속 상태의 엔티티에만 적용되며, 준영속 상태의 객체는 감지하지 못한다.")])])]),t._v(" "),s("li",[s("p",[t._v("지연 로딩을 수행한다.")]),t._v(" "),s("ul",[s("li",[t._v("실제 객체 대신 프록시 객체를 로딩해두고 해당 객체를 실제 사용할 때 영속성 컨텍스트를 통해 데이터를 불러오는 방법이다.")])])])]),t._v(" "),s("h3",{attrs:{id:"life-cycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#life-cycle","aria-hidden":"true"}},[t._v("#")]),t._v(" Life Cycle")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A097.png",alt:"Entity 생명주기"}})]),t._v(" "),s("p",[t._v("Entity 는 위와 같이 4가지 상태가 존재한다.")]),t._v(" "),s("ul",[s("li",[t._v("비영속 (new)")])]),t._v(" "),s("p",[t._v("영속성 컨텍스트와 전혀 관계가 없는 상태")]),t._v(" "),s("p",[t._v("객체 생성")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" kim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("영속 (managed)")])]),t._v(" "),s("p",[t._v("영속성 컨텍스트에 저장된 상태")]),t._v(" "),s("p",[t._v("객체 생성 후 EntityManager 를 통하여 영속성 컨텍스트에 저장")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("entityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("준영속 (detached)")])]),t._v(" "),s("p",[t._v("영속성 컨텍스트에 저장되었다가 분리된 상태")]),t._v(" "),s("p",[t._v("영속성 컨텍스트가 영속 상태였던 Entity 를 관리하지 않음 (3가지 방법)")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("entityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nentityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 영속성 컨텍스트 종료")]),t._v("\nentityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 영속성 컨텍스트 초기화")]),t._v("\n")])])]),s("p",[t._v("준영속 상태가 되면 1차 캐시부터 쓰기지연 SQL 저장소까지 해당 엔티티를 관리하기 위한 모든 정보가 제거됨")]),t._v(" "),s("blockquote",[s("p",[t._v("영속성 컨텍스트가 제공하였던 어떠한 기능들 (1차 캐시) 등을 제공하지 않는다."),s("br"),t._v("\n이미 한번 영속 상태였기 때문에 반드시 식별자 값을 가지고 있다.\n지연 로딩 시 문제가 발생한다.")])]),t._v(" "),s("ul",[s("li",[t._v("삭제 (removed)")])]),t._v(" "),s("p",[t._v("삭제된 상태")]),t._v(" "),s("p",[t._v("영속성 컨텍스트와 데이터베이서의 Entity 삭제")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("entityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"준영속-영속-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#준영속-영속-merge","aria-hidden":"true"}},[t._v("#")]),t._v(" 준영속 -> 영속 (merge)")]),t._v(" "),s("p",[t._v("준영속 상태를 영속 상태로 변경하려면 병합 (merge) 과정을 거쳐야 한다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" kim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nentityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nentityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detech")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nkim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myungseok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" mergedKim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// kim")]),t._v("\nmergedKim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// myungseok")]),t._v("\nentityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nentityManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mergedKim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("위와 같이 "),s("code",[t._v("merge()")]),t._v(" 메서드를 수행하면 이전 Entity 인 "),s("code",[t._v("kim")]),t._v(" 이 영속 상태로 변하는게 아니라 새로운 영속 상태의 Entity 를 반환한다."),s("br"),t._v("\n따라서 "),s("code",[t._v("kim")]),t._v(" 과 "),s("code",[t._v("mergedKim")]),t._v(" 은 서로 같은 객체가 아니다.")]),t._v(" "),s("p",[s("code",[t._v("kim")]),t._v(" 객체는 "),s("code",[t._v("merge()")]),t._v(" 후에도 준영속 상태로 남아있게 된다.")]),t._v(" "),s("h3",{attrs:{id:"flush"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flush","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("flush()")])]),t._v(" "),s("p",[s("code",[t._v("flush()")]),t._v(" 는 아래의 과정에 따라 영속성 컨텍스트의 변경사항을 데이터 베이스에 반영한다.")]),t._v(" "),s("ol",[s("li",[t._v("변경감지가 동작하여 영속성 컨텍스트에 있는 모든 Entity 를 스냅샷과 비교한 후 수정된 Entity 를 찾는다.")]),t._v(" "),s("li",[t._v("수정된 Entity 는 수정 쿼리를 만들어 쓰기 지연 SQL 저장소에 저장한다. (등록, 수정, 삭제)")]),t._v(" "),s("li",[t._v("쓰기 지연 SQL 저장소의 쿼리를 데이터베이스에 전송")])]),t._v(" "),s("p",[s("code",[t._v("flush()")]),t._v(" 을 호출하는 방법은 아래 3가지 이다.")]),t._v(" "),s("ul",[s("li",[t._v("직접호출\n"),s("ul",[s("li",[t._v("EntityManager 의 "),s("code",[t._v("flush()")]),t._v(" 를 직접 호출해 강제로 "),s("code",[t._v("flush()")]),t._v(" 하는 방법이다.")]),t._v(" "),s("li",[t._v("거의 사용하지 않는다.")])])]),t._v(" "),s("li",[t._v("트랜잭션 커밋시 플러시 자동 호출\n"),s("ul",[s("li",[t._v("JPA 는 트랜잭션을 커밋할 때 자동으로 "),s("code",[t._v("flush()")]),t._v(" 을 호출한다.")])])]),t._v(" "),s("li",[t._v("JPQL 쿼리 실행 시 "),s("code",[t._v("flush()")]),t._v(" 자동 호출\n"),s("ul",[s("li",[t._v("JPQL 같은 객체지향 쿼리를 호출할 때도 쿼리 실행 직전에 "),s("code",[t._v("flush()")]),t._v(" 가 자동으로 호출된다.")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://wonwoo.ml/index.php/post/997",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wonwoo.ml/index.php/post/997"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://hyeooona825.tistory.com/87",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hyeooona825.tistory.com/87"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://gmlwjd9405.github.io/2019/02/01/orm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2019/02/01/orm.html"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);