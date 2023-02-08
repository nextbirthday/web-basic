console.log(text);
text = 'hello';
var text;
console.log(text);

/* 호이스팅(Hoisting)
: 블럭 안에서 선언된 지역변수가 코드 블럭 밖으로 끌어 올려지면서 강제로 전역변수화 되는 현상
*/

console.log(num);

num = 10;
var num;
console.log(num);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const divContent = document.createElement('div');
const ul = document.createElement('ul');

for (var num = 0; num < array.length; num++) {
  const li = document.createElement('li');

  li.innerHTML = `<h3>${array[num]}</h3>`;

  ul.appendChild(li);
}

divContent.appendChild(ul);

document.write(divContent);

const btns = document.querySelectorAll('ul li');

/* 즉시실행 함수 */
/* 괄호가 2개 들어감
첫 번째 - 함수의 선언부
두 번째 - 함수 호출하는 괄호 
익명함수 형태인데 호출이 되는 이유는 두 번째 괄호가 있기 때문에 가능하다. 
함수가 자기 자신을 정의하자마자 바로 자신을 호출하는 것 */

for (var j = 0; j < btns.length; j++) {
  ((index) => {
    btns[j].addEventListener('click', () => {
      console.log(index);
    });
  })(j);
}

//    btns[j].addEventListener('click', () => {
//     console.log(j); /* 0,1,2(X) or 3,3,3 (O) */
//     /* for문 안에서만 유지가 되어야 하는데 for문 밖에서도 유지가된다. */
//   });
