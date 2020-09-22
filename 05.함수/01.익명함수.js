// 익명 함수
let fn = function () {
  console.log(`익명함수를 변수 fn이 참조`);
}

fn();
console.log(fn);

function funcName() {
  console.log(`익명함수를 변수 fn이 참조`);
}
funcName();
console.log(funcName);

//화살표 함수

let arrowFun = () => {
  console.log(`화살표 함수`);
}
arrowFun();
console.log(arrowFun);

let power1 = x => {
  return x*x;
}
let power2 = x => x*x 
console.log(power2(10), power1(10));
