const xhRequest = new XMLHttpRequest();

const NEWS = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT = 'https://api.hnpwa.com/v0/item/@id.json';

const divcontent = document.createElement('div'); /* 제목에 대한 상세 */
const ul = document.createElement('ul');

function getRequest(url) {
  xhRequest.open('GET', url, false);
  xhRequest.send();

  return JSON.parse(xhRequest.responseText);
}

const news = getRequest(NEWS);

for (let i = 0; i < news.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = '#';
  a.innerHTML = `${news[i].title}()`;

  li.appendChild(a);
  ul.appendChild(li);
}

document.querySelector('#title').appendChild(ul);
