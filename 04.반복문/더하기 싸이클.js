const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`숫자입력> `);
rl.prompt();
rl.on(`line`, function (x) {
  let temp = parseInt(x);
  let num = temp
  let cycle = 0
  let step = 0
  while (true) {
    cycle++;
    if (temp < 10) {
      step = temp % 10;
    }
    else {
      step = temp / 10 + temp % 10;
    }
    temp = temp % 10 * 10 + step % 10;
    temp = Number(temp);
    if (temp === num) {
      break;
    }
    if (cycle > 100) {
      break
    }
  }
  console.log(cycle);
  rl.close();
});