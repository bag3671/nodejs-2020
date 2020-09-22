function callTentTimes(callback){
  //10회 반복합니다
  for (let i = 0;i <5;i++){
    callback();
  }
}
// 변수를 선언합니다
callTentTimes(function(){
  console.log(`Function call`);
});