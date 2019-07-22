# Scope

## Scope

Javascript 의 스코프는 _**변수 (객체) 가 참조가능한 유효범위**_ 를 뜻하며 대표적으로 아래 두개로 구분된다.

* 렉시컬 스코프 (Lexical Scope)
* 동적 스코프 (Dynamic Scope)

_**기본적으로 Javascript 는 렉시컬 스코프 (Lexical Scope) 를 따른다.**_

### 렉시컬 스코프 (Lexical Scope)

스코프는 함수를 호출할 때가 아니라 _**선언할 때 생성**_ 된다.  
이것은 렉시컬 스코프의 특징이며 동적 스코프와 비교된다.

아래 예시에서는 선언할 때 생성되는 것을 확인할 수 있다.

```javascript
var color = 'red';

function foo() {
  var color = 'blue';
  function bar() {
    console.log(color);
  }
  return bar;
}

var baz = foo();
baz();
```

```javascript
blue
```

* ES5는 함수레벨의 **렉시컬 스코프**를 가진다.
* ES6는 **함수레벨과 블록레벨의 렉시컬 스코프**를 가진다.

### 동적 스코프 (Dynamic Scope)

함수가 어디서 호출되었는지에 따라 상위 스코프가 결정

```javascript
function foo() {
  console.log(x);
}

function bar() {
  var x = 15;
  foo();
}

var x = 10;
foo();
bar();
```

**렉시컬 스코프 가정시**

```javascript
10
10
```

**동적 스코프 가정시**

```javascript
10
15
```

:::tip 참고자료
<https://bestalign.github.io/2015/07/12/Lexical-Scope-and-Dynamic-Scope/>
:::

## Closer

외부함수의 변수에 접근할 수 있는 내부함수를 말한다.

일반적으로 스코프 체인에 표현되는데 대표적으로 3가지의 스코프 체인을 가진다.

* 자기 자신에 대한 접근 (자기 블럭)
* 외부 함수 (부모 및 상위 함수) 에 대한 접근
* 전역 변수에 대한 접근

```javascript
function celebrityID() {
    var celebrityID = 999;
    // 우리는 몇개의 내부 함수를 가진 객체를 리턴할것입니다.
    // 모든 내부함수는 외부변수에 접근할 수 있습니다.
    return {
        getID: function() {
            // 이 내부함수는 갱신된 celebrityID변수를 리턴합니다.
            // 이것은 changeThdID함수가 값을 변경한 이후에도 celebrityID의 현재값을 리턴합니다.
            return celebrityID;
        },
        setID: function(theNewID) {
            // 이 내부함수는 외부함수의 값을 언제든지 변경할 것입니다.
            celebrityID = theNewID;
        }
    }
}
var mjID = celebrityID(); // 이 시점에, celebrityID외부 함수가 리턴됩니다.
mjID.getID(); // 999
mjID.setID(567); // 외부함수의 변수를 변경합니다.
mjID.getID(); // 567; 변경된 celebrityID변수를 리턴합니다.
```

:::tip 참고자료
<http://chanlee.github.io/2013/12/10/understand-javascript-closure/>
:::

## 순환참조

이는 잘못된 클로저 사용시 _**서로가 서로를 참조하는 순환 참조 현상이 발생**_ 될 수 있다.

순환참조가 발생되면 GC (Gabege Collection) 대상에서 벗어나기 때문에 메모리 누수의 원인으로 잔여하게 된다.

:::tip 참고자료
<https://hyunseob.github.io/2016/08/30/javascript-closure/>  
<https://meetup.toast.com/posts/86>  
<https://engineering.huiseoul.com/자바스크립트는-어떻게-작동하는가-메모리-관리-4가지-흔한-메모리-누수-대처법-5b0d217d788d>  
<http://www.nextree.co.kr/p7363/>
:::
