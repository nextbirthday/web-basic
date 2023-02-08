function Product() {
  this.code;
  this.category;
  this.producename;
  this.price;
  this.availability;
}

const shirmp = new Product();
const honey = new Product();
const dolceLatte = new Product(15, '커피', '돌체라떼', 2500, 500);

const icedCoffee = {
  code: 20,
  category: '커피',
  producename: '아이스커피',
  price: 1000,
  availability: 100,
};

const snack = [shirmp, honey];
const coffee = [dolceLatte, icedCoffee];
shirmp.code = 10;
shirmp.category = '과자';
shirmp.producename = '새우깡';
shirmp.price = 1500;
shirmp.availability = 1000;

honey.code = 11;
honey.category = '과자';
honey.producename = '꿀꽈배기';
honey.price = '1300';
honey.availability = 3000;

console.log(shirmp);

console.log(coffee);

const btns = document.querySelectorAll('ul li');

snack.forEach((element, index) => {
  console.log(element);
  console.log(index);
});

coffee.forEach((item) => {
  console.log(item);
});
