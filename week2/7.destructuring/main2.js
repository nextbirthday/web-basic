const fruits = ['π', 'π', 'π', 'π', 'π₯'];

const [f1, f2, f3] = fruits;

console.log(fruits);
console.log(f1);
console.log(f2);
console.log(f3);

const dept = {
  deptno: 30,
  dname: 'κ°λ°λΆ',
  loc: 'μ μ£Ό',
};

const { deptno, dname, loc } = dept;

console.log(deptno, dname, loc);

const food = ['π', 'π­', 'π', 'π', 'π§'];

food[0] = 'a';
const [d1, d2, d3, d4, d5] = food;

console.log(food);
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);
