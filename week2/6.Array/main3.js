/* Array Copy
- 얕은 복사 (원본이 바뀐다. 동기화가 된다.)
- 깊은 복사 (복사본이 바뀐다. 비동기) */

const colors = ["red", "green", , "blue"];
const copy = [];

/* old fashioned */
// for (let i = 0; i < colors.length; i++) {
//   copy.push(colors[i]);
//   console.log(`copy[${i}]:${copy[i]}`);
// }

// console.log(copy);

/* new fashioned */

// colors.forEach(function (color) {
//   copy.push(colors);
//   console.log(`${copy}`);
// });

["red", "green", "blue"].forEach((color) => {
  copy.push(color);
});
console.log(copy);
