const xhRequest = new XMLHttpRequest();
const key = 'AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g';

function getRequest(url) {
  xhRequest.open('GET', url, false);
  xhRequest.send();

  return JSON.parse(xhRequest.response);
}

const keyword = document.querySelector('#keyword');

keyword.addEventListener('keypress', (event) => {
  console.log('keypress가 enter인지 아닌지' + event.keyCode);

  if (event.keyCode === 13) {
    handleSearch();
  }
});

const handleSearch = () => {
  const user = document.querySelector('#keyword').value;
  console.log('사용자가 입력한 검색어 ===> ' + user);
  search(user);
};
/* video로 받아와서 구조분해해서 사용하면 안되나 ? */
/* React는 가능하다. 바닐라에서는 불가능 덩어리(item)로 받아오기 */
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  videoItem = `
  <section class='detail'>
  <iframe id="player" type="text/html" width="720" height="480"
  src="http://www.youtube.com/embed/${id}"
  frameborder="0"></iframe>
  <h3>${channelTitle}</h3>
  <h2>${title}</h2>
  <pre class='description'>
  ${description}
  </pre>
  <div>
  <a href="./youtube.html">이전페이지</a>
  &nbsp;
  <a href="javascript:search('전도연')">이전페이지2</a>
  </div>
  </section>
`;

  document.querySelector('#root').innerHTML = videoItem;
};

const search = (query) => {
  const ajax = new XMLHttpRequest();
  /* 문자열로 처리하는 경우가 훨씬 더 직관적이다. 
  배열은 덜 하다.(뚝뚝 끊어지니까...) - 동적처리 가능함
  그런데 왜?? */
  const videoList = [];
  const key = 'AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g';
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

  ajax.open('GET', SEARCH_URL, false);
  ajax.send();

  const most = JSON.parse(ajax.response);
  const items = most.items;

  let items2;

  items2 = most.items.map((item) => ({ ...item, id: item.id.videoId }));
  console.log(items2);
  console.log(items.length);

  videoList.push(`<ul class="videos">`);

  items2.map((video) => {
    /* 25번의 반복, 25개의 li */
    /* 자바스크립트에서는 파라미터로 값을 넘길 때 반드시 싱클쿼테이션, 더블쿼테이션을 붙여야 값으로 인정된다. 붙이지 않을 시 XXX is not defined이다. (변수 취급) */
    /* 비디오 제목의 경우 특수문자(괄호문제) 배제하는 정규식을 이용하기 */
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const str = video.snippet.title.replace(reg, '');
    const str2 = video.snippet.description.replace(reg, '');
    videoList.push(
      `<li class="container" onclick="videoShow('${video.id}','${str}','${str2}','${video.snippet.channelTitle}')">`
    );
    videoList.push(`<div class="video">`);
    videoList.push(
      `<img class="thumbnail" src="${video.snippet.thumbnails.medium.url}"/>`
    );
    videoList.push(`<div>`);
    videoList.push(
      `<p class="channelTitle">${video.snippet.channelTitle} </p>`
    );
    videoList.push(`<p class="title">${video.snippet.title} </p>`);
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  }); //end of map

  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join('');
  
}; //end of search
