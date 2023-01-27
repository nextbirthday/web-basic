/* 클래스 값이면 . 붙임, 태그이름이면 안 붙임 */
const a = document.querySelector("a");
console.dir(a); /* DOM 구조를 볼 수 있다. */

a.onclick = () => {
  console.log("링크클릭");
};

a.onclick = () => {
  console.log("링크 클릭 다시");
};

a.addEventListener("click", () => {
  console.log("클릭");
});

a.addEventListener("click", () => {
  console.log("클릭 다시");
});
