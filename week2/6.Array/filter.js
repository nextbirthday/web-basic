/* filter */

/*  */

function Counter() {
  this.sum = 0;
  this.conut = 0;
}

/* prototype 이용하면 나도 자바스크립트처럼 사용자 정의 객체를 선언한 뒤 사용자 정의 함수를 정의할 수 있다. */
/* React, vue.js, next.js */
/* + typescript - 바닐라스크립트기반 위에 얹혀진 언어 - 객체지향 - 캡슐화, 상속, 다형성 */
/* 자바스크립트에서도 사용자 정의 객체를 만들 수 있다. -> function */
/* 사용자 정의 함수를 정의할 때는 prototype을 사용한다. */
/* prototype을 사용하여 함수를 정의한다는 것은 사용자 정의 API를 만드는 것이다. */
Counter.prototype.add = function (array) {
  array.forEach(function (item) {
    this.sum += item;
    console.log(this.sum);
    ++this.conut;
    console.log(this.conut);
  }, this);
};

const obj = new Counter();
obj.add([3, 5, 15]);

console.log(obj.sum);

/* 자바스크립트에서는 함수를 만들 때도 function */
/* 객체를 선언할 때도 function, 객체가 정의하는 함수를 만들 때는 prototype */
/* 바닐라스크립트에서는 전역변수 선언 없이도 생성자에서 초기화가 가능하다. */
/* API(객체와 함수 그리고 변수)를 만들 수 있는 개발자가 되어야한다. */
/* 우리가 정의한 객체 Counter는 표준이 아니다. */
function Sonata() {
  this.wheelnum;
  this.speed;
  this.carname;
}

Sonata.prototype.stop = function (wheelnum) {
  console.log("stop call");
};

const myCar = new Sonata();
myCar.stop(4);
