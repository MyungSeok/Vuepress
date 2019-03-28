# Syntax

## 문자열 꾸미기 (Text Decorator)

### 강조 (Bold)

**Input**

```md
**테스트 강조** 효과를 지정할 수 있다.
```

**Output**

**테스트 강조** 효과를 지정할 수 있다.

### 기울임 (italic)

**Input**

```md
_테스트 기울임_ 효과를 지정할 수 있다.
```

**Output**

_테스트 기울임_ 효과를 지정할 수 있다.

## 링크 연결 (Link)

**Input**

```md
[www.naver.com](http://www.naver.com)
```

**Output**

[www.naver.com](http://www.naver.com)

## 표 (Table)

**Input**

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**Output**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 코드 블럭 (Code blocks)

### 기본형

**Input**

````
```js
const foo;
```
````

**Output**

```js
const foo;
```

### 강조형

**Input**

````
```js{2}
const a;
const b;
const c;
```
````

**Output**

```js{2}
const a;
const b;
const c;
```

### 커스텀 블럭 (Tip/Warning/Danger)

**Input**

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::