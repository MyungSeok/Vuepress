# TIPS

## IntelliJ IDEA

### Plugins

* [Lombok](https://plugins.jetbrains.com/plugin/6317-lombok)
  * Lombok IDE 버전 제공
* [SonarLint](https://plugins.jetbrains.com/plugin/7973-sonarlint)
  * 문법 검사
* [Key Promoter X](https://plugins.jetbrains.com/plugin/9792-key-promoter-x)
  * 단축키 제시

## VSCode

### extension package

* BreadCrumb in StatusBar
  * 선택 파일 경로 노출
* GitLens
  * 선택 행 깃 커밋 보여주기
* One Dark Pro
  * 에디터 테마
* vscode-icons
  * 에디터 아이콘
* Material Icon Theme
  * 에디터 아이콘
* [Markdown lint](https://github.com/DavidAnson/vscode-markdownlint)
  * 마크다운 문법 검사
* [Bracket Pair Colorizer](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2)
  * 코드 블럭 브라켓

### usersetting.json

```javascript
{
    "workbench.startupEditor": "welcomePage",
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressShowKeyBindingsNotice": true,
        "suppressUpdateNotice": false,
        "suppressWelcomeNotice": true
    },
    "java.home": "/Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home",
    "window.openFilesInNewWindow": "on",
    "window.zoomLevel": 0,
    "editor.tabSize": 2,
    "editor.fontFamily": "D2Coding ligature",
    "editor.fontLigatures": true,
    "editor.fontSize": 14,
    "gitlens.keymap": "alternate",
    "gitlens.historyExplorer.enabled": true,
    "workbench.colorTheme": "One Dark Pro Vivid",
    "breadcrumbs.enabled": true,
    "workbench.iconTheme": "vscode-icons",
    "material-icon-theme.folders.theme": "specific",
    "java.errors.incompleteClasspath.severity": "ignore",
    "markdownlint.config": {
        "MD001": false,
        "MD024": false,
        "MD026": false,
        "MD033": false
    }
}
```

### .eslintrc

```javascript
{
  "env": {
    "jquery": true,
    "browser": true,
    "amd": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "globals": {
    "alert": false,
    "clearTimeout": false,
    "clearInterval": false,
    "document": false,
    "exports": false,
    "module": false,
    "navigator": false,
    "require": false,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false
  },
  "rules": {
    "camelcase": ["error", {"properties": "always"}],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "comma-style": ["error", "last"],
    "comma-dangle": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "valid-jsdoc": ["warn", {"requireReturn":false}],
    "block-scoped-var": "warn",
    "curly": "error",
    "eqeqeq": "warn",
    "quotes": ["error", "single"],
    "semi": "error",
    "no-inline-comments": "warn",
    "no-debugger": "error",
    "no-console": "warn",
    "no-empty": "warn",
    "no-spaced-func": "warn",
    "no-array-constructor": "error",
    "no-undefined": "warn",
    "no-alert": "off",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-new": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": ["error", {"functions": false}],
    "space-before-blocks": "error",
    "semi-spacing": ["error", {"before": false, "after": true}],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "no-new-object": "error",
    "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
    "space-infix-ops": ["error"],
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}]
  }
}
```

## jenv 로 여러 버전의 Java 설치하기

### jenv 설치

```bash
$ brew install jenv
```

```bash
$ jenv versions
```

### jenv 로 자바 설치

```bash
$ jenv install java
```

### jenv 초기화

`~/.bash_profile` 의 스크립트에서 아래 코드를 추가하여 jenv 를 초기화시킨다.

```bash
if which jenv > /dev/null; then eval "$(jenv init -)"; fi
```

`bash_profile` 적용

```bash
$ source ~/.bash_profile
```

### jenv 버전 선택

```bash
$ jenv local {버전 선택}
```

```bash
$ jenv global {버전 선택}
```

:::tip 참고자료
<https://junho85.pe.kr/736>  
<https://jojoldu.tistory.com/329>
:::
