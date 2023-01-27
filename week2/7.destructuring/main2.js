const fruits = ["🍅", "🍒", "🍓", "🍌", "🥑"];

const [f1, f2, f3] = fruits;

console.log(fruits);
console.log(f1);
console.log(f2);
console.log(f3);

const dept = {
  deptno: 30,
  dname: "개발부",
  loc: "제주",
};

const { deptno, dname, loc } = dept;

console.log(deptno, dname, loc);
