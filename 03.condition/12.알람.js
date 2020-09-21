const { min } = require("moment");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`시:분 입력> `);
rl.prompt();

rl.on('line', function (buf) {
  let time = buf.split(':');
  let hour = parseInt(time[0]);
  let minute = parseInt(time[1]);
  
  if(minute < 45){
    minute += 15 ;  
    hour -= 1;
    if(hour === -1){
      hour = 23;
    }
  }else{
    minute -= 45;
  };
  
  console.log(`알람시각은 ${hour}시 ${minute > 9 ? minute : '0'+minute}분 입니다.`);



  rl.close();
});