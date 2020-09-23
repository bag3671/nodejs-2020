let date = new Date();

console.log(date.toDateString());
// 현재 날짜에서 100일 더하기
date.setDate(date.getDate()+100);
console.log(date.toDateString());

console.log(date.getFullYear());
date = new Date()
console.log(date.getFullYear());