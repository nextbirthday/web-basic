/* 함수 선언문에서도 호이스팅이 일어난다. */
/* 함수도 객체이다. 메서드 오버로딩, 오버라이딩에 대한 지원이 없다. 같은 이름의 함수를 중복 정의하는것이 불가능하다.*/
/* 함수도 파라미터로 넘길 수 있다. JAVA와 다른 부분 */

func1();
func2();
/*func3(); Cannot access 'func3' before initialization */

function func1() {
  console.log("func1 call");
}

function func2() {
  console.log("func2 call");
}

const func3 = function () {
  console.log("func3 call");
};

func3(); /* 함수 표현식에서는 호이스팅이 안일어난다. */
