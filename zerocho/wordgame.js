// const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
// alert(number);
// const yesOrNo = confirm('맞나요?');

const $button = document.querySelector('button');

const onClick = function () {
  console.log('$button 클릭');
};

$button.addEventListener('click', onClick);

document.querySelector('input').addEventListener('input', (event) => {
  console.log('글자 입력', event.target.value);
});

const $order = document.querySelector('#order');

let word;
let newWord;

const $input = document.querySelector('.inputButton');
console.log('입력버튼');
