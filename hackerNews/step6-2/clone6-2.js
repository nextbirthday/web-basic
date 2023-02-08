const xhr = new XMLHttpRequest();
const NEWS = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT = 'https://api.hnpwa.com/v0/item/@id.json';
const container = document.querySelector('#title');
const divContent = document.createElement('div');

function getData(url) {
  xhr.open('GET', url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

function newsList() {
  const news = getData(NEWS);
  //li태그를 담을 배열 선언하기
  const getList = [];
  //li태그를 담기전에 ul 태그를 먼저담기
  getList.push('<ul>');

  for (let i = 0; i < news.length; i++) {
    const div = document.createElement('div');
    getList.push(
      `<li>
        <a href='#${news[i].id}'>
          ${news[i].title}(${news[i].comments_count})
        </a>
      </li>
      `
    );
  } // end of for
  getList.push('</ul>'); /* getList 배열에 ul태그 닫아주기 */
  /* 빈문자열을 주면 구분자 없는 하나의 합쳐진 HTML문자열을 얻는다. */
  container.innerHTML = getList.join('');
}

//뉴스 상세내용 보기

function newsDetail() {
  const id = window.location.hash.substring(1);

  const newsContent = getData(CONTENT.replace('@id',id));
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
    <a href='#'>목록으로</a>
  </div>
  `;
}




function router() {
  const routePath = location.hash;
  /* 첫 진입일 때는 newsList를 호출 */

  if (routePath === '') {
    newsList();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);
router();
