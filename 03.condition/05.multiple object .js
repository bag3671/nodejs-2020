// 사용자가 입력한 글을 받는 방법
const readline = require(`readline`);
const rl = readline.createInterface({
  input: Process.stdin,
  output: Process.stdout
});

rl.setPrompt(`정수 ,로 구분해서 여러개 입력> `);
rl.prompt();

rl.on(`line`, function(buf) {
  // 입력을 받아 처리하는 로직
  let bufArray = buf.split(`,`);
  console.log(`bufArray`);

  for (let item of bufArray){
    let input = parseInt(item);

    if (input % 3 === 0){
      console.log(`${input}은/는 3의 배수 입니다.`);
      } else {
      console.log(`${input}은/는 3의 배수가 아닙니다.`);
      }
  } 

  
  // // 끝날 때 반드시 처리해야 함
  rl.close();
});


