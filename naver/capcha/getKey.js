const express = require('express');
const app = express();
/* 네이버 서버에서 발급한 고유 아이디 값 - 회원가입이 되어있고 개발자센터에서 애플리케이션을 등록한 자 */
const client_id = 'nlaxBCvcBggfxMfFcx1q'; //개발자센터에서 발급받은 Client ID
const client_secret = 'VRQy6_8MSS'; //개발자센터에서 발급받은 Client Secret
const code = '0';
let key;
/* expressjs에서는 REST API를 지원하는 메서드를 제공하고 있다. */
/* 두 번째 파라미터는 callback function */
/* 첫 번째 파라미터 요청에 대한 응답을 받기위해 호출되는 함수이다. */
/* HTTP 프로토콜을 이용하여 서버에 요청하고 응답 처리를 위해서는 반드시 어떤 언어이든 요청객체와 응답객체를 제공받아야 한다. */
/* 그래서 express도 제공하고 있다. 
req는 요청객체의 인스턴스변수로 express로부터 객체주입을 받는다. 
- 사용자가 생성할 수 없다. 이런 경우 의존성 주입이라고 할 수 있다.
*/
app.get('/captcha/nkey', function (req, res) {
  /* 네이버 서버가 제안하는 URL주소 - 키 값을 받아와야 함(인증과정) */
  const api_url = 'https://openapi.naver.com/v1/captcha/nkey?code=' + code;
  /* 네이버가 제공하는 URL주소로 네이버 서버에 요청을 해야 하니까 */
  /* npm i -g express */
  const request = require('request'); /* 웹 애플리케이션을 위한 프레임워크 선언함 */
  /* 선언하면 프레임워크가 제공하는 API를 누릴 수 있다. 그럴 때 node.js에서는 require 함수를 사용한다. */
  /* React에서는 import가 제공된다. */
  /* <script type="module"></script> 지원하게 되면서 netflix가 server side를 node.js기반으로 바꾸는데 가능*/
  const options = {
    url: api_url,
    /* http 프로토콜을 통해 전송할 때 header body가 있는데 get은 그 중 header을 이용함 */
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
      res.end(body);
      key = body.substring(8, 24);
      console.log(key);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/captcha/nkey app listening on port 3000!');
});

/* REST API */
/* 우리가 하고싶은 작업에 따라 다른 메서드로 요청을 하는 방법을 제공 */

/* HTTP 메서드 수단으로 이용 */
/* GET - 데이터 조회 */
/* POST - 데이터 등록 및 전송 */
/* PUT - 데이터 수정 */
/* DELETE - 데이터 삭제 */
