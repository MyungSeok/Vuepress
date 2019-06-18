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

````markdown
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

````markdown
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

```markdown
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

## 차트 (Flow Chart)

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

[Flow Chart](https://flowchart.vuepress.ulivz.com) 관련 매뉴얼을 참조

## 뱃지 (Badge)

```markdown
<Badge text="tip"/>
<Badge text="tip" type="tip"/>                  // default
<Badge text="warn" type="warn"/>
<Badge text="error" type="error"/>
<Badge text="tip" type="tip" vertical="top"/>   // default
<Badge text="tip" type="tip" vertical="middle"/>
```

<Badge text="tip"/>
<Badge text="tip" type="tip"/>
<Badge text="warn" type="warn"/>
<Badge text="error" type="error"/>
<Badge text="tip" type="tip" vertical="top"/>
<Badge text="tip" type="tip" vertical="middle"/>

:::tip 참고자료
<https://62che.com/blog/vuepress/마크다운-예제.html#그룹핑>  
<https://vuepress.vuejs.org/guide/using-vue.html>
:::
