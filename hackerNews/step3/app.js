const xhr = new XMLHttpRequest();

const NEWS = 'https://api.hnpwa.com/v0/news/1.json';

xhr.open('GET', NEWS, false);
xhr.send();

/* documnet는 index.html 전체를 받는 객체 이므로 js에서 사용 불가  */
/* document.write(xhr.responseText); */

/* console.log(title); */
/* 요청으로 반환되는 타입은 이미 text 문자열이므로 JSON.stringify는 사용할 필요가 없다. */
/* 이미 문자열 이니까 JSON.parse 사용해서 구조를 분해함 */
/* title.innerHTML = xhr.responseText; */

const news = JSON.parse(xhr.responseText);
console.log(news);
/* const title = document.querySelector('#title'); */

/* console.log(news[0].title); */

/* news.forEach((item) => {
  console.log(`${item.title}`);
}); */

/* let element = document.createElement(tagName[, options]); */

const ul = document.createElement('ul');

for (let i = 0; i < news.length; i++) {
  /* const ul = document.createElement('ul'); 생성한 ul 태그 안에 li 배열의 length만큼 반복 */
  /* 만들어진 li는 ul태그 하위에 붙임 - appendChild */
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = '#';
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
  /* 제목을 클릭하면 상세페이지 이동하기 위한 링크 추가 */
  li.appendChild(a);
  ul.appendChild(li);
}

/*console.log(ul); */

document.querySelector('#title').appendChild(ul);
/* title.appendChild(ul); */
