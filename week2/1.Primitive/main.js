// const는 재할당이 불가능하다.

const a = 0.1;
const b = 0.2;
// console.log(a + b); /* 부동소수점의 오류가 발생한다*/
// console.log((a + b).toFixed(1));

//undefiend - 기본적으로 갖는 값 - 값이 할당되지 않은 상태

let age = undefined;

console.log(age);

/* callback 함수 */
setTimeout(function () {
  age = 10;
  console.log(age);
}, 2000); // millisecond단위

/* Reference Type
- 값이 위치하고 있는 참조 주소값만 메모리에 저장 (관련된 내장함수까지 같이 참조된다.)
- null(Object) : 명시적으로 특정 변수의 값을 비워둘 때
- const myCar; <===> const myCar = new Car()
- Array(object) [] : 연관된 값을들 그룹으로 묶어서 관리한다. 
- 객체 {} : Object Data를 Key라는 indexing을 통해 자료를 구조적으로 묶어 놓은 형태*/
