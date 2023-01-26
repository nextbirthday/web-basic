function func1() {
  console.log("func1 call");
}

func1();

function func2(func1) {
  console.log("func2 call");
  func2(func1);
}
