# Quest03

## Topics

* 자바스크립트의 역사

> ### 자바스크립트의 탄생
>
> 1995년 당시 웹 브라우저를 지배하고 있던 넷스케이프는 정적인 HTML 을 동적으로 표현하기 위해 프로그램을 도입하기로 결정했고 그래서 자바스크립트가 탄생하게 되었다.
> 
> ### 자바스크립트의 파편화와 표준화
> 
> 자바스크립트가 탄생한 뒤 얼마되지 않아 파생버전인 JScript 가 출시되어 마이크로소프트의 IE 에 탑재되기 시작했고, 자바스크립트는 위기를 맞는다. 하지만 JScript 와 자바스크립트는 모두 표준화되지 못한 상태였고, 자사 브라우저의 시장 점유율을 위해 자사 브라우저에만 동작하는 기능을 경쟁적으로 추가하기 시작헀다. 이로 인하여 크로스브라우징 이슈가 발생했고, 모든 브라우저에서 동일하게 동작하는 표준화된 자바스크립트에 대한 필요성이 대두되었다.
> 
> 1996년 넷스케이프는 ECMA 인터네셔널에 자바스크립트의 표준화를 요청하게 되었고, 1997년 표준화된 자바스크립트 ECMAScript(ES) 가 최초로 완성되었다.
> 
> 이후 발전을 거듭하다가 2015년 ECMAScript 6 에서 let/const 키워드, 화살표 함수, 클래스, 모듈 등 범용 프로그패밍 언어로서 갖추어야 할 기능들을 대거 도입하는 큰 변화가 있었다.
> 
> ### 자바스크립트의 성장
> 
> 초창기 자바스크립트는 웹 페이지의 보조적인 기능만을 수행했고, 이 시기의 대부분의 로직은 HTML 과 CSS 를 단순히 렌더링하는 수준이었다.
> 
> 1999년, 자바스크립트를 이용하여 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 기능인 Ajax(Asynchronous JavaScript and XML) 가 XMLHttpRequest 라는 이름으로 등장한다.
>
> 이전에는 화면이 전환되면 서버로부터 새로운 HTML 을 받아 웹 페이지를 다시 렌더링 하였는데, 이는 변경이 필요 없는 부분까지 모두 새로 받아 불필요한 데이터 통신을 유발하고, 따라서 퍼포먼스 측면으로도 불리했다. 다시 로딩되면서 화면이 깜박이는 현상이 발생하는 것은 웹 애플리케이션의 한계로 받아들여졌다.
> 
> Ajax 의 등장은 이를 획기적으로 전환하였고, 필요한 부분만을 한정적으로 렌더링하는 것이 가능해졌다.
> 
> 2006년, JQuery 의 등장으로 DOM 제어가 편리해졌고 크로스 브라우징 이슈도 어느정도 해결되게 되었고, 2008년 등장한 V8 자바스크립트 엔진은 빠른 성능을 통하여 데스크톱 애플리케이션과 유사한 사용자 경험을 제공할 수 있는 웹 애플리케이션 개발 프로그래밍 언어로 자바스크립트를 정착시키게 된다.
> 
> 2009년, 브라우저에서만 동작하던 자바스크립트를 이외의 환경에서 동작시킬 수 있는 Node.js 의 등장으로 서버 사이드 애플리케이션 개발에도 사용되는 범용적인 프로그래밍 언어가 되었다.
> 
> ### Javascript 와 ECMAScript
> 
> ECMAScript 는 자바스크립트 표준 명세인 ECMA-262 를 말하며 프로그래밍 언엉의 타입, 값, 객체, 프로퍼티, 함수, 빌트인 객체 등 핵심 문법을 규정한다.
> 
> 자바스크립트는 일반적으로 프로그래밍 언어로서 기본 뼈대를 이루는 ECMAScript 와 브라우저가 별도 지원하는 클라이언트 사이드 Web API (DOM, BOM, Canvas, XMLHttpRequest, Fetch 등) 을 아우르는 개념이다.
> 
> ### 자바스크립트의 특징
> 
> 자바스크립트는 HTML, CSS 와 함께 웹을 구성하는 요소 중 하나로 웹 브라우저에서 동작하는 유일한 프로그래밍 언어이다.
> 
> 자바스크립트는 개발자가 별도의 컴파일 작업을 수행하지 않는 인터프리터 언어(Interpreter language) 이다. 대부분의 모던 자바스크립트 엔진은 인터프리터와 컴파일러의 장점을 결합하여 비교적 처리 속도가 느린 인터프리터의 단점을 해결했다.
> 
> 자바스크립트는 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어이다.

* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

> `var` 는 함수 스코프(function-level scoped), `let`, `const` 는 블록 스코프(block-level scoped) 를 갖는다.
> 
> ### 블록 스코프
> 
> 블록 스코프는 중괄호로 감싸진 범위를 말한다. if, for, function 의 블록 \{\} 모두가 블록 스코프라고 할 수 있다.
> 
> ### 함수 스코프
> 
> 함수 스코프는 블록 스코프 중 함수(`function(){}`)의 범위를 갖는 스코프를 말한다.
> 
> 특이한 점이라면 자바스크립트의 전역 스코프(global scope) 는 함수 스코프와 동일하게 작동한다는 점이다. 이 특징이 다른 블록 스코프와 `var` 가 다른 현상을 보이게 만든다.
>
> ### `var` 의 특징
>
> ```
> for(var i=0; i<5; i++){
>   var temp = i;
> }
> console.log(temp);
> ```
> 
> ```
> function main(){
>   for(var i=0; i<5; i++){
>     var temp = i;
>   }
>   console.log(temp);
> }
> main();
> ```
> 
> 얼핏 보기에 아래의 코드에서 temp 는 for 문 안에서 선언되어 for 문이 종료되며 소멸하고 에러가 발생할 것 같지만 콘솔에는 4가 표시되게 된다.
> 
> 이는 `var`이 함수 스코프 안에서 유효하기 때문에 해당 함수가 종료될 때까지 유효하게 된다.
> 
> 추가적으로 `var` 는 중복 선언을 허용하며, 전역 스코프에서 선언된 `var` 변수가 for 문 등의 블록 안에서 수정도 가능하다.
> 
> ### `let` 의 특징
> 
> `var` 을 사용할 경우, 함수 스코프에서 변수들이 의도치 않게 동작할 수 있으므로 이를 방지하기 위해 여러가지 방법을 사용하다가, ES2015 에서 `let`, `const` 가 등장하면서 이러한 역할을 하게 되었다.
> 
> ### `const` 의 특징
> 
> `const` 는 `let` 의 모든 특징을 가지고 있지만 좀더 엄격하다. 선언과 동시에 할당이 이루어져야 하며, 재할당이 불가능하다는 점이다.

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
  * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
  * 자바스크립트의 표준은 어떻게 제정될까요?
* 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
* 자바스크립트의 익명 함수는 무엇인가요?
  * 자바스크립트의 Arrow function은 무엇일까요?

> ### 익명 함수
> 
> 자바스크립트의 익명 함수는 함수명 대신 변수명에 함수 코드를 저장하는 구현 방식이다.
> 
> ```
> var 변수명 = function( 매개변수 ) {
>   실행문;
> };
> ```
>
> 익명 함수에서 return 을 통해 반환이 되는 경우에는 해당 함수를 다른 명령어에 대입시킬 수 있다.
> 
> ```
> var hi = funtion( ) {
>   var string = "Hello, World!";
>   return string;
> };
>
> document.write( hi( ) );
> ```
> 
> 익명 함수는 함수 코드가 변수명에 저장된 형태이다. 따라서 변수값으로 구성된 함수 코드를 다른 변수명에 마치 변수를 대입핟듯이 이동시킬 수 있다.
> 
> 자바스크립트에서 등호 기호는 좌변과 우변의 값이 같음을 의미하는 것이 아니라 우변의 값을 좌변에 대입한다는 의미이다.
> 
> ### 익명 함수의 단점
> 
> 호이스팅(함수 선언보다 함수 호출이 윗 줄에 위치해도 실행되는 기능) 이 적용되지 않는다.
> 
> ```
> hi( );
>
> var hi = function( ) {
>   document.write("Hello, World");
> };
> ```
> 
> 위와 같이 작성할 경우 오류가 발생한다.

> ### Arrow function
>  
> Arrow function 은 ES6 부터 자바스크립트에 새롭게 등장한 함수를 만들 수 있는 문법이다.
> 
> ```
> function hi( ) {
>   ...
> }
>
> var hi = function( ) {
>   ...
> };
>
> var hi = () => {
>   ...
> }
> ```
> 
> 기존에는 위의 두가지 방법으로 함수를 만들 수 있었는데, Arrow function 은 세번째 문구와 같이 함수를 만들게 된다.
> 
> ### Arrow function 을 쓰는 이유
>
> Arrow function 은 함수의 본연의 기능을 아주 잘 표현해준다.
> 
> 함수는 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 재사용하고 싶을 때, 2. 입출력기능을 만들 때 사용하게 되는데, arrow function 을 사용하면 함수 본연의 입출력기능을 직관적으로 표현해준다.
> 
> 파라미터가 하나라면 소괄호를 생략할 수 있고, 중괄호 안에 return 한줄 뿐이라면 중괄호와 return 도 생략이 가능하다.
> 
> ```
> var double = x => { return x * 2 };
> var double = x => x * 2;
> ```
> 
> ### Arrow function 에서의 this
> 
> arrow function 은 어디서 쓰든간에 내부의 this 값을 변화시키지 않는다.
> 
> ```
> var object = {
>   f : function(){ console.log(this) }
> }
> 
> object.f()
> ```
> 
> 위와 같이 실행하면 this 는 f 함수를 가지고 있는 오브젝트인 object 를 가리키고, 이 object 가 콘솔창에 표시된다.
> 
> ```
> var object = {
>   f : () => { console.log(this) }
> }
>
> object.f()
> ```
> 
> 위와 같이 실행할 경우 콘솔에는 window 가 출력된다. this 는 함수를 만나면 값이 변하는데 arrow function 에서는 변하지 않고 밖에 있던 this 를 그대로 쓴다. 현재 오브젝트 밖에 있는 this 는 window 이므로 window 가 표시되는 것이다.
> 