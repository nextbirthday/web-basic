const fruits = ["🍅", "🍒", "🍓", "🍇", "🍑"];

const fruits2 = ["🍌", "🥑", "🍋"];

const fruits3 = ["🍈", ...fruits2];

console.log(fruits3);

fruits3.forEach((fruit, index) => {
  console.log(fruit);
  console.log(index);
  console.log(`${index}-${fruit}`);
});

const fruits4 = [...fruits, ...fruits2];

fruits4.forEach(function (fruit, index) {
  console.log(`${index}-${fruit}`);
});

fruits4.forEach((fruit, index) => {
  console.log(`${index}-${fruit}`);
});

const dept = {
  deptno: 30,
  dname: "개발부",
  loc: "제주",
};

const emp = {
  empno: 7566,
  ename: "SCOTT",
  sal: 2500,
};

const deptnemp = { ...dept, ...emp };

console.log(deptnemp);

const emp2 = { ...emp, empno: 7499, ename: "TIGER", sal: 3000 };

console.log(emp);
/* Overwrite가 된다. */
console.log(emp2);

let items = [
  { id: 1, name: "벤치프레스", count: 0 },
  { id: 2, name: "데드리프트", count: 0 },
  { id: 3, name: "덤벨 숄더 프레스", count: 0 },
];

let items2 = [...items];
console.log(items2);

items2 = [...items, { id: 4, name: "레그프레스", count: 0 }];
console.log(items2);

items2 = [...items, { id: 5, name: "레그익스텐션", count: 0 }];
console.log(items2);
