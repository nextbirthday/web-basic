const { jar } = require("request");

const iffe = function(){
console.log("const iffe");
};

iffe();

((number) => {
let num =0;
console.log(number);
})(10)