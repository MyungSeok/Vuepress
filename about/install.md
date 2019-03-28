# Installation

## Global Installation

최초 프로젝트 설정시에 전역으로 `VuePress` 설치를 위해 다음 과정을 실행한다.

```sh
# install globally
yarn global add vuepress@next

# install as a local dependency
yarn add -D vuepress@next
```

## 검색바 관련

화면 상단에 검색은 본문의 헤더 (`h1` `h2`) 만 인덱싱 되어 있으므로 전체 텍스트를 기반으로 검색을 하려면 [Algolia Search](https://vuepress.vuejs.org/default-theme-config/#algolia-search) 을 참고하도록 하자