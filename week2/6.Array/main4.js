/* 배열의 내장함수 */

const colors = ["red", "green", , "blue"];

/* toString(): 배열을 문자로 변환 */

let result = colors.toString();
console.log(typeof result);

/* join(): 구분자를 활용해서 문자열로 이어붙이기 */
result = colors.join("+");
console.log(result);

/* pop(): 배열의 마지막 요소 제거(리턴값으로 잘라낸 요소 반환) */

result = colors.pop();
console.log(result);

/* push(): 배열의 끝부분에 새로운 요소 추가(리턴값으로 배열의 길이 반환) */
result = colors.push("yellow");
console.log(result);

/* shift(): 배열의 첫 부분 요소 제거(리턴값으로 잘라낸 요소 반환) */
result = colors.shift();
console.log(result);

/* unshift(): 배열의 첫 부분에 새로운 요소 추가(리턴값으로 길이 반환) */
result = colors.unshift("aqua");
console.log(result);

/* splice(삽입위치, 잘라낼 개수, 추가할 내용) - 배열에 새로운 요소를 잘라서 붙임*/
colors.splice(1, 0, "black");

/* concat(): 두 개 배열 합치기 */
const colors2 = ["cyan", "brown"];
result = colors.concat(colors2);

/* slice(): 배열 잘라내기 - 새로운 배열을 만들어서 잘라내기(React에서 CRUD처리시 사용 가능하다.) */
/* 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다. */
console.log(colors);

result = colors.slice(1);
console.log(result);

result = colors.slice(1, -1);
console.log(result);

result = colors.slice(-3);

const result2 = "Object Null";
console.log(result2.slice(8, -1));
console.log(result2);
