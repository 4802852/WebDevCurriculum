# Quest02

## Topics
* CSS의 기초 문법과 적용 방법
  * Inline, `<style>`, `<link rel="stylesheet" href="...">`

>**CSS 기본 문법**
>
>CSS 규칙은 선택자(selector) 와 선언부(declaration) 으로 나뉜다. 선언부는 속성(property) 와 속성값(value) 로 나뉜다.
>
>![css](./img/css_rule.png)
>
>**CSS 적용 방법**
>
>하나의 규칙으로 여러 HTML 요소와 HTML 문서를 제어할 수 있기 때문에 외부 CSS 파일에 규칙을 정의하는 것이 선호된다.
>
>`<link>` 태그 이용하여 외부 파일 포함하기.
>
>```
><head>
>  <link href="style.css" rel="stylesheet" type="text/css">
></head>
>```
>
>`@import` CSS 선언 이용하여 외부 파일 포함하기.
>
>```
><head>
>  <style type="text/css">
>  @import url(style.css); 
>  </style>
></head>
>```
>
>`<style>` 태그를 이용하여 CSS 선언하기.
>
>```
><head>
>  <style type="text/css">
>  .logo {color: #eeeeee;} 
>  </style>
></head>
>```
>
>태그 요소에 인라인 스타일 지정하기.
>
>```
><body>
>  <p style="height:100px; color:blue">
></body>
>```

* CSS 규칙의 우선순위

>기본적으로는 선언된 순서에 따라 적용되지만, 각종 선택자와 삽입 위치에 따라 우선순위가 달라질 수 있다.
>
>> !important > 인라인 스타일 > 아이디 선택자 > 클래스/속성/가상 선택자 > 태그 선택자 > 전체 선택자
>
>경쟁 규칙이 같은 선택자 그룹에 속해있다면 선택자의 종류와 수에 따라 우선순위가 결정된다. 즉, 높은 우선순위의 선택자를 더 많이 사용한 규칙이 이긴다.
>
>**삽입 위치 우선순위**
>
>> `<head>` 요소 안의 style 요소 > `<style>` 요소 안의 `@import` 문 > `<link>` 요소로 연결된 CSS 파일 > `<link>` 요소로 연결된 CSS 파일 안의 `@import` 문 > 최종 사용자가 연결한 CSS 파일 > 브라우저의 기본 스타일 시트
>
>**우선 순위 전략**: 우선 순위를 최대한 단순하게 유지해야 한다. 연결하는 CSS 파일 수를 최소화하고 `@import` 문을 자제하고, 선택자를 각 CSS 파일 안에서 의도한 순서대로 정렬해야 한다.

* 박스 모델과 레이아웃 요소
  * 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  * `position`, `left`, `top`, `display`
  * CSS Flexbox와 Grid

> **박스 모델(box model)**: 모든 HTML 요소는 박스 모양으로 구성되며, 이것을 박스 모델이라고 한다. 박스 모델은 HTML 요소를 패딩(padding), 테두리(border), 마진(margin), 내용(content) 로 구분한다.
> >
> **height 와 width 속성**
> >
> CSS 에서 height 와 width 속성이 가리키는 부분은 내용(content) 부분만을 대상으로 한다. height 와 width 속성으로 설정된 높이와 너비에 패딩(padding), 테두리(border), 마진(margin) 의 크기는 포함되지 않는다.
> >
> **패딩(padding)**: 패딩(padding) 속성은 내용(content) 와 테두리(border) 사이의 간격의 크기를 설정한다. background-color 속성으로 설정하는 배경색의 영향을 받는다.
> >
> **테두리(border)**: 내용(content) 와 패딩(padding) 영역을 둘러싸는 테두리 스타일이다.
> >
> > border-style: dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden
> > 
> **마진(margin)**: 테두리(border) 와 이웃하는 요소 사이의 간격이다. 패딩(padding) 영역과는 달리 background-color 속성으로 정하는 배경색의 영향을 받지 않는다. 속성 값을 auto 로 설정하면, 웹 브라우저가 수평 방향 마진 값, 즉 왼쪽과 오른쪽 마진을 자동으로 설정하게 된다. 그 결과 해당 요소는 그 부모 요소의 중앙에 위치하게 된다.
> >
> **디스플레이(display)**: 웹 페이지의 레이아웃을 결정하는 속성 중 하나이다. 대부분의 HTML 요소는 기본적으로 `block`, `inline` 중 하나의 값을 가진다.
> >
> > `block`: 언제나 새로운 라인에서 시작하며 해당 라인의 모든 너비를 차지한다. `<div>`, `<h1>`, `<p>`, `<form>` 등.
> >
> > `inline`: 새로운 라인에서 시작하지 않고, 요소의 너비도 해당 라인 전체가 아닌 해당 요소의 내용(content) 만큼 차지한다. `<span>`, `<img>` 등.
> >
> >`inline-block`: 해당 요소 자체는 인라인 요소처럼 동작하지만 해당 요소 내부에서는 블록 요소처럼 동작한다. 인라인 요소와 비슷하지만 너비아 높이를 설정할 수 있고, 블록 요소처럼 마진을 이용하여 여백을 지정할 수도 있다.
> >
> > `none`: 웹 페이지에 나타나지 않으며, 웹 페이지의 레이아웃에도 영향을 미치지 않는다.
> >
> **visiblity**: HTML 요소가 웹 페이지에 표현될지 아닐지만 결정한다. 웹 페이지에는 나타나지 않더라도 레이아웃 내에는 여전히 존재하고, 코드 내에도 존재하게 된다.
> >
> > `visible`
> >
> > `hidden`: HTML 요소를 웹 페이지에서 가린다. 웹 페이지의 레이아웃에는 존재한다.
> >
> > `collapse`: 동적인 테이블에서만 사용될 수 있으며, 테이블의 테두리를 한 줄만 보여준다.
> >
> **투명도(opacity)**: 투명도를 0\~1 사이로 조절하며, 0에 가까울 수록 투명하게 된다.
> >
> **포지션(position)**: HTML 요소가 위치를 결정하는 방식이다.
> >
> > **정적 위치(static position)  지정 방식**: 정적 위치 지정 방식은 단순히 웹 페이지의 흐름에 따라 차례대로 요소들이 위치되며, top, right, bottom, left 속성 값에 영향을 받지 않는다.
> >
> > **상대 위치(relative position) 지정 방식**: 상대 위치 지정 방식은 해당 HTML 요소의 기본 위치를 기준으로 위치를 설정하는 방식이다. 기본 위치란 정적 위치 지정 방식일 때 결정되는 위치를 의미한다.
> >
> > **고정 위치(fixed position) 지정 방식**: 뷰포트(viewport) 를 기준으로 위치를 설정하는 방식으로, 웹 페이지가 스크롤 되어도 항상 같은 곳에 위치하게 된다.
> >
> > **절대 위치(absolute position) 지정 방식**: 위치가 설정된 조상(ancestor) 요소를 기준으로 위치가 설정된다. 조상 요소를 가지지 않는다면 `<body>` 요소를 기준으로 설정된다.
> 
> > `z-index`: 겹쳐지는 요소들이 쌓이는 스택의 순서를 결정한다.
> > 
> > `overflow`: 내용의 크기가 해당 요소의 박스를 넘어갈 때 어떻게 처리할지를 결정함.
> >
> **float**: 해당 HTML 요소가 주변의 다른 요소들과 자연스럽게 어울리도록 만들어준다.

* CSS 표준의 역사
* 브라우저별 Developer tools

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
  * 세 가지 방법 각각의 장단점은 무엇일까요?
* CSS 규칙의 우선순위는 어떻게 결정될까요?
* CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
* `float` 속성은 왜 좋지 않을까요?
* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
