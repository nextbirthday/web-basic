const xhRequest = new XMLHttpRequest();

const NEWS = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT = 'https://api.hnpwa.com/v0/item/@id.json';

const divcontent = document.createElement('div');

function getRequest(url) {
  xhRequest.open('GET', url, false);
  xhRequest.send();

  return JSON.parse(xhRequest.responseText);
}

const news = getRequest(NEWS);


