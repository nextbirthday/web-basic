const key = 'AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g';
const request = new XMLHttpRequest();

function getData(url) {
  request.open('GET', url, false);
  request.send();

  return JSON.parse(request.response);
}

// const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${user_input}&key=${key}`;

const $keyword = document.querySelector('#keyword');

$keyword.addEventListener('keypress', (event) => {
  console.log('input tag 입력값 ===>' + event.keyCode);
});
