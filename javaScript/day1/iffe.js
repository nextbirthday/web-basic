const { jar } = require('request');

const iffe = function () {
  console.log('const iffe');
};

iffe();

((number) => {
  let num = 0;
  console.log(number);
})(10);

((index) => {
  let index = 0;
  console.log(index);
  console.log('익명함수 호출');
})(500);
