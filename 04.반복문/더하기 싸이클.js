const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`숫자입력> `);
rl.prompt();
rl.on(`line`, function (x) {
  let num = parseInt(x);
  let n 
  let cycle = 0
  let step = 0
  let same = true
  while (same) {
    cycle++;
    if (n < 10) {
      step = n%10;
    }
    else {
      step = n/10 + n%10;
    }
    n = n%10*10 + step%10;
    n = Number(n);  
    if(n===num){
      break;
    }
  }
  console.log(cycle);
  rl.close();
});