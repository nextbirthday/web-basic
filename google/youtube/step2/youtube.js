const ajax = new XMLHttpRequest();

// let content = '';

const videoList = [];

const key = 'AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g';
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open('GET', MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;

console.log(items);
console.log(items.length);

videoList.push(`<ul class="videos">`);

for (let i = 0; i < items.length; i++) {
  videoList.push(`<li class="container">`);
  videoList.push(`<div class="video">`);
  videoList.push(`<img class="thumbnail" src="${items[i].snippet.thumbnails.medium.url}"/>`);
  videoList.push(`<div>`);
  videoList.push(`<p class="channelTitle">${items[i].snippet.channelTitle} </p>`);
  videoList.push(`<p class="title">${items[i].snippet.title} </p>`);
  videoList.push(`<p class="title">${items[i].id} </p>`);
  videoList.push(`</div>`);
  videoList.push(`</div>`);
  videoList.push(`</li>`);
}
videoList.push(`</ul>`);

document.querySelector('#root').innerHTML = videoList.join('');
