function myFunc(theObject) {
  theObject.make = 'Toyota';
}

const mycar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};

// `x`의 값은 "Honda"입니다.
const x = mycar.make;
console.log(x);
console.log(mycar);

// `make` 속성은 함수에 의해 `Toyota`로 변경됩니다.
myFunc(mycar);

console.log(mycar);
// `y`의 값은 "Toyota"입니다.
const y = mycar.make;

console.log(y);

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(5));

function map(fn, arr) {
  const result = new Array(arr.length);
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i]);
  }
  return result;
}

function fn(x) {
  return x * x;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7];

map(fn, arr);
