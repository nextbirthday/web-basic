/* 같은 이름이면 브라우저가 자동으로 배열로 전환 */
const lis = document.querySelectorAll("ul li");

for (var x = 0; x < lis.length; x++) {
  ((index) => {
    lis[x].addEventListener("click", () => {
      console.log(index); //3 3 3
    });
  })(x);
} //end of for

for (let x = 0; x < lis.length; x++) {
  lis[x].addEventListener("click", () => {
    console.log(x);
  });
}
