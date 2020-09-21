const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`점수입력> `);
rl.prompt();
rl.on(`line`, function (x) {
  let score = parseInt(x);

  let grade;
  switch (parseInt(score / 10)) {
    case 10:
    case 9:
      grade = 'A'
      break;
    case 9:
      grade = 'B'
      break;
    case 9:
      grade = 'C'
      break;
    case 9:
      grade = 'D'
      break;
    default:
      grade = 'F'
      break;
  }
  console.log(`등급은 ${grade} 점수는 ${score}`)
});
