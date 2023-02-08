/* 
CSS선택자
태그선택자
<h1></h1>
h1{}
클래스 선택자
<h1 class ="title">
.title{}

아이디선택
<h1 id ="title">
    #title{} 
    */


/* window 웹혁명 2.0 효율적인 퍼포먼스
    브라우저 -> *브라우저 API*해석 -> 브라우저는 *인터프리터* 역할
    출력 -> body태그 안에
    document.write("<h1></h1>")
*/

/* JSP문법
    통신 - 프로토콜 - HTTP, HTTPS
    out.print("<h1></h1>") 
*/

/* 그 동안은 main메서드로 요청을 하다가 URL로 요청
     HTTP의 특징 중 하나는 stateless(비상태)*/

/* 브라우저는 정적(HTML,CSS,JS) 페이지를 처리해준다.
정적 페이지는 다운로드가 일어난다. 어디에? 클라이언트에
시점의 문제, 동기화 문제, 유지 문제
, 비상태 프로토콜 - 상태(데이터변화) 관리
, 클라이언트사이드 렌더링 - 출력 - 이미 결정이 되어있는 상태
, 서버사이드 렌더링 - 결정 - 계속 변하는 중 <-----> React
, 갭 - 쿠키(String - PC(Local))와 세션(캐시메모리 - Server)
, 클라이언트 사이드와 서버사이드의 동기화 문제*/

/* HTML - ID, CLASS, TAG NAME */

/* CSS - 선택자 */

/* JS - 아이디 
{} - 객체 - prototype
[] - 배열
document.getElementById("id")
document.querySelector - 배열아님 - 객체 
document.querySelectorAll - 배열(자바스크립트에서는 중요하다.)
일급객체와 일급함수

OOP(상하관계) 
AOP보완 - 공통된 관심사 분리(log, certification, commit, rollback) - 일괄처리
*/

/* HTML(화면)
CSS(색상, 위치, 일괄처리)
JS (이벤트- HTML - 감지 - 콜백함수) - *defer HTML이 먼저 렌더링 되어야 하니까 - DOM*
 */
