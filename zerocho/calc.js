let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

// const onClickNumber = (number) => {
//     /* 리턴하는 함수에 어떤 동작을 할지 넣어준다. */
//   return () => {
//     if (operator) {
//       numTwo += number;
//     } else {
//       numOne += number;
//     }
//     $result.value += number;
//   };
// };

/* 이렇게도 표현할 수 있다. */
/* 고차함수 (high order function) - 함수가 함수를 리턴 */
// const onClickNumber = (number) => (event) => {
//   /* 리턴하는 함수에 어떤 동작을 할지 넣어준다. */
//   event.target.vau;
//   if (operator) {
//     numTwo += number;
//   } else {
//     numOne += number;
//   }
//   $result.value += number;
// };

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value = event.target.textContent;
  }
  if (!numTwo) {
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value = event.target.textContent;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
};

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document
  .querySelector('#minus')
  .addEventListener('click', onClickOperator('-'));
document
  .querySelector('#divide')
  .addEventListener('click', onClickOperator('/'));
document
  .querySelector('#multiply')
  .addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  }
});

document.querySelector('#clear').addEventListener('click', () => {
  let numOne = '';
  let operator = '';
  let numTwo = '';
  $result.value = '';
  $operator.value = '';
});
