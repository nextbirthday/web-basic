let colors = [
  "red",
  "green",
  "blue",
]; /* 리터럴을 이용한 배열의 선언 및 초기화 */

/* callback - 함수를 호출할 때 파라미터로 함수가 들어가는 형태 */
/* arr.forEach(callback(currentvalue[, index[, array]])[, thisArg]) */

colors.forEach(function (color, index, items) {
  console.log(color);
  console.log(index);
  console.log(items);
});

/* React수업 - Data가 변하면 변하는 것만 렌더링 처리한다. */
colors.forEach((color, index) => {
  console.log(color);
  console.log(index);
});

colors.forEach((color) => {
  console.log(color);
});

colors.map(function (color, index, items) {
  console.log(color);
  console.log(index);
  console.log(items);
});
