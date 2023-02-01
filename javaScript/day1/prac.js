function Product() {
  this.code;
  this.category;
  this.producename;
  this.price;
  this.availability;
}

const shirmp = new Product();
const honey = new Product();

shirmp.code = 10;
shirmp.category = '과자';
shirmp.producename = '새우깡';
shirmp.price = 1500;
shirmp.availability = 1000;

console.log(shirmp);

const btns = document.querySelectorAll('ul li');

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', () => {
//     console.log(i);
//   });
// }

// for (let i = 0; i < btns.length; i++) {
//   ((index) => {
//     btns[i].addEventListener('click', () => {
//       console.log(i);
//     });
//   })(i);
// }

for (var i = 0; i < btns.length; i++) {
  ((index) => {
    btns[i].addEventListener('click', () => {
      console.log(i);
    });
  })(i);
}
