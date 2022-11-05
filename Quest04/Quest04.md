# Quest04

## Topics
* 객체지향 프로그래밍
  * 프로토타입 기반 객체지향 프로그래밍

> Javascript 는 Java, C++ 와 같은 클래스 기반 객체지향 프로그래밍 언어와는 달리 **프로토타입 기반 객체지향 프로그래밍 언어**이다.
>
> ES6 부터 Class 문법이 추가되었지만 문법이 추가되었다는 것이지, Javascript 가 클래스 기반으로 바뀐 것은 아니다.
> 
> ### 프로토타입
> 
> 프로토타입은 자바스크립트 등에서 사용되는 하나의 디자인 패턴이며, **객체를 복제하면서 생성** 한다는 특징을 가지고 있다.
> 
> 예를 들어, ObjectParent 라는 오브젝트 아래에 ObjectSon1 과 ObjectSon2 가 들어있다고 가정해보면, 클래스 기반 언어에서는 ObjectParent 객체를 생성할 때 ObjectSon1 과 ObjectSon2 객체를 함께 생성해야 한다. 이 경우 **객체의 생성 비용**이 높다고 할 수 있다. 같이 생성해야 하는 객체가 많아질수록 비용은 더욱 높아질 것이다.
> 
> 만약 ObjectParent 가 생성될 때 같이 생성되는 객체들이 항상 같다는 전제 조건이 있다면, 생성 비용이 높은 ObjectParent 를 한번만 생성하고, 생성된 객체를 복제함으로써 비용을 줄일 수 있을 것이다. 이러한 관점으로 접근하는 것이 프로토타입 패턴이다.
> 
> ### 자바스크립트의 프로토타입
> 
> ```
> function User () {}
> 
> const evan = new User();
> 
> console.log(11, evan);
> console.log(22, tyepof evan);
> ```
> 
> ```
> 11, User { __proto__: Object}
> 22, "object"
> ```
> 
> User 함수에 new 라는 생성자를 붙여 객체를 인스턴스화 했지만, evan 은 함수가 아닌 객체이다. 이는 evan 은 User 함수의 prototype 객체를 복제했다는 것을 의미한다. 자바스크립트의 모든 객체는 prototype 객체를 가지고 있고, 그 prototype 을 복제하면서 객체를 생성한다.
> 
> ```
> function User () {}
> 
> console.log(11, User.prototype);
> console.log(22, typeof User.prototype);
> ```
> 
> ```
> 11, { constructor: f User(), __proto__: Object }
> 22, "object"
> ```
> 
> 처음 User 함수를 선언할 때 프로토타입 객체도 함께 생성되며, `new User()` 를 ㅌ오해 새로운 객체를 만들게 되면 User 함수 자체가 아니라 User 함수가 생성될 때 함께 생성된 프로토타입 객체를 복제하게 되는 것이다.
> 
> ### constructor 프로퍼티
> 
> 단어 그대로 원래의 생성자 함수(자기 자신)을 참조하고 있다. 자신에 의해 생성된 인스턴스 객체 입장에서 원형이 무엇인지 알 수 있는 수단이 된다.
> 
> ### \_\_proto\_\_ 프로퍼티
> 
> 새롭게 생성된 객체는 원본 객체와의 연결을 가지고 있다. 이 연결을 프로토타입 링크(Prototype Link) 라고 하는데, 이 링크가 담기는 프로퍼티가 \_\_proto\_\_ 프로퍼티이다.
> 
> ### 프로토타입 체인
> 
> 프로토타입 기반으로 복사되고, 이러한 객체들의 관계를 프로토타입 체인이라고 한다.
> 
> 모든 객체는 공통적으로 Object.prototype 객체를 원본으로 가진다. 즉, 모든 객체에서 조상 prototype 을 계속 따라 올라가다 보면 Object.prototype 을 만나게 되고 Object 의 \_\_proto\_\_ 는 null 을 표시한다.

  * 자바스크립트 클래스
    * 생성자
    * 멤버 함수
    * 멤버 변수

> 클래스는 객체지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다.
> 
> 클래스는 다음과 같은 기본 문법을 사용해 만든다.
>
> ```
> class MyClass {
>   constructor() { ... }
>   method1() { ... }
>   method2() { ... }
> }
> ```
> 
> `new MyClass()`를 호출하면 내부에서 정의한 메서드가 들어 있는 객체가 생성된다. 생성자 메서드 `constructor()`는 `new`에 의해 자동으로 호출된다.
> 
> ### 자바스크립트의 클래스
> 
> 자바스크립트에서 클래스는 함수의 한 종류이다.
> 
> `new MyClass()`를 호출하면 `MyClass`라는 이름의 함수를 만들고, 함수의 본문은 생성자 메서드 constructor 에서 가져오고, `mothod1` 같은 메서드를 MyClass.prototype 에 저장한다.
>
> Class 는 함수의 한 종류라고 했지만, Class 키워드로 사용하는 문법이 일반 함수와 다른 점이 몇가지가 있다.
> 
> class 로 만든 함수엔 특수 내부 프로퍼티인 `[[IsClassConstructor]]: true` 가 붙는다. 이 프로퍼티는 여러 곳에서 사용되는데, 클래스 생성자를 `new` 와 함께 사용하지 않을때 에러를 발생시키는 것, 클래스 생성자를 문자열로 형변환할 때 class.. 로 시작하는 문자열이 되는 것 등에 쓰인다.
> 
> 클래스에 정의된 메서드는 열거할 수 없다(non-enumerable). 클래스의 prototype 프로퍼티에 추가된 메서드의 `enumerable` 플래그는 false 이다.
> 
> 그리고 클래스는 항상 엄격 모드로 실행된다는 점이 다르다.
> 
> #### getter, setter, computed method name
> 
> ```
> class User {
>   constructor(name) {
>     this.name = name;  
>   }
>
>   get name() {
>     return this._name;
>   }
>
>   set name(value) {
>     if (value.length < 4) {
>       alert("이름이 너무 짧습니다.");
>       return;
>     }
>     this._name = value;
>   }
> }
> 
> let user = new User("보라");
> alert(user.name);  // 보라
> 
> user = new User("");  // 이름이 너무 짧습니다.
> ```
> 
> ```
> class User {
>   ['say' + 'Hi']() {
>     alert("Hello")
>   }
> }
> 
> new User().sayHi();
> ```
> 
> #### 클래스 필드
> 
> 클래스 필드라는 문법을 이용하면 어떤 종류의 프로퍼티도 클래스에 추가할 수 있다.
> 
> 클래스를 정의할 때 `<프로퍼티 이름> = <값>` 을 써주면 간단히 클래스 필드를 만들 수 있다.

  * 정보의 은폐

> ### 캡슐화(encapsulation)
> 
> 캡슐화는 객체지향 프로그래밍의 대표적인 특징 중 하나로 **정보 은닉**의 개념을 포함한다. 자바스크립트에서는 자바와 같이 private, public 과 같은 키워드를 제공하지는 않지만 다른 방법으로 구현이 가능하다.
> 
> ```
> var Developer = function(arg) {
>   var lang = arg ? arg : '';
>  
>   return {
>     getLang : function() {
>       return lang;
>     },
>     setLang : function(arg) {
>       lang = arg;
>     }
>   }
> };
> 
> var john = new Developer('javascript');
> 
> console.log(john.getLang());  // javascript
>
> john.setLang('java');
> 
> console.log(john.getLang());  // java
> ```
> 
> 위 코드의 Developer 생성자 함수에서 `this` 가 아닌 `var lang = arg ? arg : '';` 으로 선언하면 자바스크립트는 함수형 스코프를 따르기 때문에 private 해진다.
> 
> 그리고 `getLang()` 과 `setLang()` 이라는 함수는 **클로저**이기 때문에 외부에서는 `lang` 이라는 변수의 값에 접근할 수 있는 인터페이스가 된다.
> 
> 위와 같이 `getLang()` 과 `setLang()` 과 같은 public 메서드를 인터페이스로 제공하고 `lang` 과 같은 private 한 변수에 인터페이스를 통해서만 접근하도록 하는 것이 **모듈 패턴**이다.
> 
> ```
> var Developer = function(obj) {
>   var developerInfo = obj;
> 
>   return {
>     getDeveloperInfo : function() {
>       return devleoperInfo;
>     }
>   };
> };
> 
> var developer = new Developer({ name: 'John', lang: 'javascript' });
> 
> var John = developer.getDeveloperInfo();
> // {name: 'John', lang: 'javascript' }
> 
> John.lang = 'jave'  // 직접 변경
>
> var John = developer.getDeveloperInfo();
> // {name: 'John', lang: 'java' }
> ```
> 
> **일반 변수가 아닌 객체나 배열을 멤버 변수로 가지고 이를 그대로 반환할 경우, 외부에서 이 멤버를 변경할 수있다.** 객체나 배열을 반환하는 경우에는 얕은 복사로 private 멤버의 참조값을 반환하게 되어 참조값을 통해 수정이 가능해지는 것이다. 따라서 반환할 객체나 배열의 정보를 담은 새로운 객체를 만들어 깊은 복사(deep copy)를 거친 후 반환해야 한다.

  * 다형성

> ### 다형성(polymorphism)
> 
> 다형성이란 하나의 객체가 여러가지 타입을 가질 수 있는 것을 의미한다.










* 코드의 재사용

## Checklist
* 객체지향 프로그래밍은 무엇일까요?
  * `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
  * 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
  * 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
  * OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
* 자바스크립트의 클래스는 어떻게 정의할까요?
  * 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
  * 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
