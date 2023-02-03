const xhRequest = new XMLHttpRequest();

const NEWS = 'https://api.hnpwa.com/v0/news/1.json';

xhRequest.open('GET', NEWS, false);
xhRequest.send();

const news = JSON.parse(xhRequest.responseText);

console.log(news);

const ul = document.createElement('ul');

for (let i = 0; i < news.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = '#';

  a.innerHTML = `${news[i].title}(${news[i].id})(${news[i].comments_count})`;
  li.appendChild(a);
  ul.appendChild(li);
}

document.querySelector('#title').appendChild(ul);
