// 양의 정수 N을 입력으로 받아 1부터 N까지 제곱의 합과

//     합의 제곱을 구하시오.
//1부터 N까지 정수의 제곱합과 합의 제곱구하기

// 입출력부분
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`숫자입력> `);
rl.prompt();
rl.on(`line`, function (x) {
  let n = parseInt(x);
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    sum2 += i;
  }
  for (let i = 1; i <= n; i++) {
    sum1 += (i * i);
  }
  console.log(`1에서 ${n}까지의 제곱의 합: ${sum1}`);
  console.log(`1에서 ${n}까지의 합의 제곱: ${(sum2 * sum2)}`);
  rl.close();

});

