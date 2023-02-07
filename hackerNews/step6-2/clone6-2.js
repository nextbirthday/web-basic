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
}

function router() {
  const routePath = location.hash;
  /* 첫 진입일 때는 newsList를 호출 */

  if (routePath === '') {
    newsList();
  } else {
  }
}
