# Quest09

## Topics
* Cookie

> ### HTTP 쿠키
>
> HTTP 쿠키는 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각이다. 브라우저는 그 데이터 조각들을 저장해 놓았다가, 동일한 서버에 재요청 시 저장된 데이터를 함께 전송한다. 쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 때 주로 사용한다.
>
> 쿠키는 주로 세 가지 목적을 위해 사용된다.
>
> 1. 세션 관리(Session Management): 서버에 저장해야 할 로그인, 장바구니, 게임 스코어 등의 정보 관리
> 2. 개인화(Personalization): 사용자 선호, 테마 등의 세팅
> 3. 트래킹(Tracking): 사용자 행동을 기록하고 분석하는 용도
>
> 

* Session
* JWT

## Resources
* [MDN - HTTP 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
* [Cookies and Sessions](https://web.stanford.edu/~ouster/cgi-bin/cs142-fall10/lecture.php?topic=cookie)
* [JWT](https://jwt.io/)

## Checklist
* 쿠키란 무엇일까요?
  * 쿠키는 어떤 식으로 동작하나요?
  * 쿠키는 어떤 식으로 서버와 클라이언트 사이에 정보를 주고받나요?
* 웹 어플리케이션의 세션이란 무엇일까요?
  * 세션의 ID와 내용은 각각 어디에 저장되고 어떻게 서버와 교환되나요?
* JWT란 무엇인가요?
  * JWT 토큰은 어디에 저장되고 어떻게 서버와 교환되나요?
* 세션에 비해 JWT가 가지는 장점은 무엇인가요? 또 JWT에 비해 세션이 가지는 장점은 무엇인가요?

## Quest
* 이번에는 메모장 시스템에 로그인 기능을 넣고자 합니다.
  * 사용자는 딱 세 명만 존재한다고 가정하고, 아이디와 비밀번호, 사용자의 닉네임은 하드코딩해도 무방합니다.
  * 로그인했을 때 해당 사용자가 이전에 작업했던 탭들과 마지막으로 활성화된 탭 등의 상태가 로딩 되어야 합니다.
  * 세션을 이용한 버전과, JWT를 이용한 버전 두 가지를 만들어 보세요!
    * 세션을 이용할 경우 세션은 서버의 메모리나 파일에 저장하면 됩니다.

## Advanced
* Web Authentication API(WebAuthn)은 무엇인가요?
