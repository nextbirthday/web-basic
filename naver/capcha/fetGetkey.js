const myHeaders = new Headers();
myHeaders.append('X-Naver-Client-Id', 'nlaxBCvcBggfxMfFcx1q');
myHeaders.append('X-Naver-Client-Secret', 'VRQy6_8MSS');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

fetch('https://openapi.naver.com/v1/captcha/nkey?', requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const temp = JSON.stringify(result);
    console.log(temp);
    console.log(result.key);
  })
  .catch((error) => console.log('error', error));
