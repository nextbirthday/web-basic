const colors = ["red", "green", , "blue"];

console.log(colors);

/*     arr.forEach(callback(currentvalue[, index[, array]])[, thisArg]) */

/* 함수의 이름이 없다. 사용자 호출이 불가능하다. */
colors.forEach((color, index, colors) => {
  console.log(color);
});

/* ES6에서 파라미터가 한 개이면 괄호 생략이 가능하다. */
colors.forEach((color) => {
  console.log(color);
});

/* Arrow Function에서 실행문이 단일 행이면 braces생략이 가능하다. */
colors.forEach((color) => console.log(color));
