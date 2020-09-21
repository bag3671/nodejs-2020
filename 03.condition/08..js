const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`점수입력> `);
rl.prompt();

rl.on(`line`, function (x) {
  let input = parseInt(x);

  if (input >= 90) {
    console.log(`A입니다`);
  } else if (input >= 80) {
    console.log(`B입니다`);
  }else if (input >= 70) {
    console.log(`C입니다`);
  }else if (input >= 60) {
    console.log(`D입니다`);
  }else {
    console.log(`F입니다`);
  }
  rl.close();
});
rl.on(`line`, function (x) {
  let input = parseInt(x);

  if (input >= 90) {
    Grade = 'A';
  } else if (input >= 80) {
    Grade = 'B';
  }else if (input >= 70) {
    Grade = 'C';
  }else if (input >= 60) {
    Grade = 'D';
  }else {
    Grade = 'F';
  }
  console.log(`등급은 ${Grade}입니다`)
  rl.close();
});
