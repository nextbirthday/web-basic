/* 객체(Object) */
/* Data를 property라는 인덱싱을 통해 구조적으로 묶어놓은 형태 */
let car = {
  name: "2023년형 소나타",
  wheelnum: 4,
  speed: 0,
  color: "red",
};

console.log(car);
car.color = "black";
console.log(
  `내 차동차는${car.name}이고 바퀴수는${car["wheelnum"]}이고 색상은${car.color}입니다.`
);
