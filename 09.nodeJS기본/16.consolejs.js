//시간측정을 시작합니다.
console.log(`alpha`);

let output = 1;
for(let i = 1; i <=10;i++){
  output *=1;
}
/* let sum = 0;
for (let i =1;i<=1e6; i++){
  sum += i;
} */
console.log(`Result:`, output);

console.timeEnd(`alpha`);