// if (true) {
//   console.log(this);
// }

for (let i = 0; i < 5; i++) {
  // console.log(this);
}

setTimeout(() => {
  console.log("2초");
}, 2000);

/*  */
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");

b1.addEventListener(
  "click",
  function (e) {
    console.log(this); //button
  }.bind("tomato")
);

b1.addEventListener("click", (e) => {
  console.log(this.document.getElementsByClassName("kkk")[0].outerText); //window 객체
});

b2.addEventListener(
  "click",
  function (e) {
    console.log(this); //button
  }.bind("tomato")
);

b2.addEventListener("click", (e) => {
  console.log(this); //window 객체
});

b3.addEventListener("click", (e) => {
  console.log(this); //window 객체
});
