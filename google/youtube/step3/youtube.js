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

// const search = (query) => {
//   const ajax = new XMLHttpRequest();
//   const videoList = [];
//   const key = 'AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g';
//   const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

//   ajax.open('GET', SEARCH_URL, false);
//   ajax.send();

//   const most = JSON.parse(ajax.response);
//   const items = most.items;

//   videoList.push(`<ul class="videos">`);

//   for (let i = 0; i < items.length; i++) {
//     videoList.push(`<li class="container">`);
//     videoList.push(`<div class="video">`);
//     videoList.push(
//       `<img class="thumbnail" src="${items[i].snippet.thumbnails.medium.url}"/>`
//     );
//     videoList.push(`<div>`);
//     videoList.push(
//       `<p class="channelTitle">${items[i].snippet.channelTitle} </p>`
//     );
//     videoList.push(`<p class="title">${items[i].snippet.title} </p>`);
//     videoList.push(`</div>`);
//     videoList.push(`</div>`);
//     videoList.push(`</li>`);
//   }
//   videoList.push(`</ul>`);

//   document.querySelector('#root').innerHTML = videoList.join('');
// }; //end of search



const search = (query) => {
  console.log('사용자가 입력한 bts 받음:' + query);
  
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;
  const searched = getRequest(SEARCH_URL);
  const searchItem = searched.items;

  const searchList = [];

  searchList.push(`<ul class="videos">`);

  for (let i = 0; i < searchItem.length; i++) {
    searchList.push(`<li class="container">`);
    searchList.push(`<div class="video">`);
    searchList.push(
      `<img class="thumbnail" src="${searchItem[i].snippet.thumbnails.medium.url}"/>`
    );
    searchList.push(`<div>`);
    searchList.push(
      `<p class="channelTitle">${searchItem[i].snippet.channelTitle} </p>`
    );
    searchList.push(`<p class="title">${searchItem[i].snippet.title} </p>`);
    searchList.push(`</div>`);
    searchList.push(`</div>`);
    searchList.push(`</li>`);
  }
  searchList.push(`</ul>`);

  document.querySelector('#root').innerHTML = searchList.join('');
};
