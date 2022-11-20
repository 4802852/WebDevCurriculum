# Quest07.md

## Topics
* node.js

> ### Node.js
> 
> Node.js 는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다. 즉, 노드를 통해 다양한 자바스크립트 애플리케이션을 실행할 수 있으며, 서버를 실행하는데 가장 많이 사용된다.
> 
> - Node.js 는 JavaScript 를 서버에서도 사용할 수 있도록 만든 프로그램이다.
> - Node.js 는 V8 이라는 JavaScript 엔진 위에서 동작하는 자바스크립트 런타임이다.
> - Node.js 는 서버사이드 스크립트 언어가 아니다.
> - Node.js 는 웹서버와 같이 확장성 있는 네트워크 프로그램을 제작하기 위하여 만들어졌다.
> 
> JavaScript 를 사용 언어로 활용하며, Non-Blocking I/O 와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있는 것이 특징이다. 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도 소프트웨어 없이 동작하는 것이 가능하다.
> 
> JavaScript 는 스크립트 언어이고, 스크립트 언어는 특정한 프로그램 안에서만 동작하는데 JavaScript 는 그것이 웹 브라우저이다. 하지만 Node.js 를 이용하여 웹 브라우저와 무관한 애플리케이션, 더 나아가 서버도 만들 수 있다. 이전까지는 웹에 표시되는 부분은 JavaScript 로 만들고, 서버는 Java 등 다른 언어를 써서 만들었어야 했는데, Node.js 를 통해 한 언어로 웹 페이지 전체를 만들 수 있게 되었다.
> 
> ### JavaScript 런타임
> 
> 런타임이란 특정 언어로 만든 프로그램을 실행할 수 있는 환경을 뜻한다. 노드는 자바스크립트 프로그램을 컴퓨터에서 실행할 수 있게 하는 자바스크립트 실행기이다.
> 
> ### 이벤트 기반
> 
> 노드는 V8과 더불어 libuv 라는 라이브러리를 사용한다. libuv 라이브러리는 노드의 특성인 이벤트 기반, 논 블로킹 I/O 모델을 구현하고 있다.
> 
> 이벤트 기반(Event-driven)이란 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식을 의미한다. 즉, 이벤트 기반 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두고, 이를 이벤트 리스너에 콜백함수를 등록한다. 이후 이벤트가 발생하면 리스너에 등록해둔 콜백함수를 호출하며, 이벤트가 끝난 후 노드는 다음 이벤트가 발생할 때까지 대기한다.
> 
> ### 이벤트 루프
>
> 이벤트 루프(Event Loop) 는 여러 이벤트가 동시에 발생했을 때 어떤 순서로 콜백함수를 호출할지 판단해주는 장치이다. 노드는 이벤트가 종료될 때까지 이벤트 처리를 위한 작업을 반복한다.
> 
> ### 논 블로킹 I/O
> 
> 이벤트 루프를 잘 활용하면 오래 걸리는 작업을 효율적으로 처리할 수 있다. 작업에는 두 종류가 있는데 동시에 실행될 수 있는 작업과 동시에 실행될 수 없는 작업이다. 특히 파일 시스템 접근, 네트워크를 통한 요청 작업은 입력(Input)/출력(Output)의 일종이며, 이러한 작업을 할 때 노드는 비동기 방식으로 블로킹을 만들지 않게 끔(논 블로킹) 처리한다.
> 
> 비동기란 이전 작업이 완료될 때까지 대기하지 않고 동시에 작업을 수행하는 것을 뜻하며, 반대로 동기는 이전 작업이 끝나야만 다음 작업을 수행하는 것을 뜻한다.
> 
> ### 싱글 스레드
> 
> 이벤트 기반, 논 블로킹 모델과 더불어 노드를 설명하는 키워드 중 하나는 싱글 스레드이다. 노드는 싱글 스레드 기반이므로 자바스크립트 코드는 동시에 실행될 수 없다.
> 
> Node.js 는 싱글스레드, 논 블로킹 모델로 싱글 스레드가 혼자서 일을 처리하지만 들어오는 요청 순서가 아닌 논 블로킹 방식으로 이전 작업이 완료될 때까지 대기하지 않고 다음 작업을 수행한다.
> 
> ### 정리
> 
> 노드는 기본적으로 싱글 스레드, 논 블로킹 모델을 채용하므로 I/O 요청이 많이 발생하면 노드를 서버로 사용하는 것이 좋다. 하지만 CPU 부하가 큰 작업에는 적합하지 않다. 이는 코드가 하나의 스레드에서 처리되기 때문에 CPU 의 많은 연산을 요구하면 스레드 하나가 혼자 감당하기 어렵다.
> 
> 즉, 개수는 많지만 크기는 작은 데이터를 실시간으로 주고 받는데 노드가 적합하여, 네트워크, 데이터베이스, 디스크 작업과 같은 곳에 특화되어있다.

* npm

> ### npm(node package manager)
> 
> npm 은 자바스크립트 패키지 매니저이다. Node.js 에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command Line Interface) 를 제공한다.

* CommonJS와 ES Modules

> ### 모듈화와 CommonJS
> 
> 모듈이란 애플리케이션을 구성하는 개별적인 요소를 말한다. 일반적으로 파일 단위로 분리되어 있으며 필요에 따라 애플리케이션은 명시적으로 모듈을 로드한다. 모듈은 개별적으로 존재하다가 로드되면서 애플리케이션의 일원이 되며, 기능별로 분리된 모듈은 개발효율성과 유지보수성을 높이는데 도움이 된다.
> 
> 자바스크립트는 웹페이지에 있어 보조적인 기능을 수행하기 위해 한정적인 용도로 만들어진 언어로 다른 언어에 비해 부족한 부분이 있으며, 그 대표적인 것이 모듈 기능이 없는 것이다. script 태그를 이용하여 외부의 스크립트 파일을 가져올 수는 있지만 파일마다 독립적인 scope 를 갖지 않고 하나의 전역 객체에 바인딩되어 전역변수가 중복되는 등의 문제가 발생한다.
> 
> 이를 해결하기 위해 제안된 것이 CommonJS 와 AMD(Asynchronous Module Definition)이다. CommonJS 방식은 AMD 에 비해 문법이 간단하며 동기 방식(synchronous loading)으로 동작한다. AMD 방식은 비교적 문법이 까다로우며 비동기 방식(asynchronous loading)으로 동작한다. AMD 방식을 지원하는 대표적인 모듈 로더는 RequireJS 이다.
> 
> Node.js 는 모듈 시스템의 사실상 표준인 CommonJS 를 채택하였고, 현재는 독자적으로 진화하였지만, 기본적으로는 CommonJS 방식을 따르고 있다.
> 
> 브라우저에서의 모듈 사용은 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 Browerify 또는 webpack 과 같은 모듈 번들러를 사용해야 한다.
> 
> ### ES Module
> 
> ES Module 이란 ES6 에 도입된 모듈 시스템으로, import, export 를 사용하여 분리된 자바스크립트 파일들끼리 서로 접근하는 것을 특징으로 한다.
> 
> import - export 의 명시적 관계로, 하나의 모듈이 제거되면 어떤 모듈이 손상되었는지 알 수 있어 의존성 파악이 용이하다. 코드를 독립적으로 작동할 수 있는 단위로 나누기가 수월하고, 이로 인하여 모듈 재사용성을 키울 수 있다. import - export 로 관계되지 않은 모듈간의 오염이 일어나지 않는다.
> 
> 브라우저에서 ES Module 은 구성, 인스턴스화, 평가의 단계를 거쳐 동작한다.
> 
> **구성**: entry 파일로부터 import 문을 찾아가며 필요한 모든 파일을 모듈 레코드로 구문 분석한다.
> 
> **인스턴스화**: export 된 값을 배치하기 위한 메모리 공간을 찾고, export 와 import 들이 이런 메모리 공간을 가리키도록 하는데, 이를 연결(linking) 이라고 한다. 이 과정은 메모리 공간을 찾고 지정할 뿐 실제 값을 채우지는 않는다.
> 
> **평가**: 코드를 실행하여 메모리를 변수의 실제 값으로 채운다.
> 
> ### CommonJS / ES Modules
> 
> **CommonJS**
>
> 파일 시스템에서 파일을 로드하며, 파일을 불러오는 동안 주 스레드를 차단한다.
> 
> 그렇기에 파일 로드 - 구문 분석 - 인스턴스화 - 평가가 각 파일마다 바로 실행된다. 그렇기에 모듈 지정자에 변수를 넣을 수 있다.
> 
> export 객체에 값을 복사해서 넣는다.
> 
> **ES Module**
> 
> entry 파일의 구문 분석 후 의존성을 확인해서 해당 파일을 찾아 다시 구문 분석을 반복한다. 파일을 불러오는 동안 주 스레드를 차단하지 않는다.
>
> 인스턴스화, 평가는 더 이상 구문 분석할 의존성이 발견되지 않으면 실행한다. 그렇기에 모듈 지정자에 변수를 넣을 수 없다.
> 
> export 는 참조를 반환하는 함수를 정의한다.
> 
> **그 결과**: export 하는 파일에서 비동기 처리로 값이 바뀐다면, CommonJS 에서는 반영이 되지 않지만 ESM 은 반영될 수 있다. 순환 참조의 경우 CommonJS 는 빈 객체를, ESM 에서는 Reference Error 를 발생시킨다.

## Resources
* [About node.js](https://nodejs.org/ko/about/)
* [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
* [npm](https://docs.npmjs.com/about-npm)
* [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
* [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
* [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist
* node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?
* npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?
* npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?
* 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?
* ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?
* node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?

## Quest
* 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  * `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  * `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
* 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced
* node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
