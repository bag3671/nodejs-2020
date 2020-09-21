let date = new Date();
console.log(date)
/* console.log(today.toLocaleString());
console.log(today.toISOString());
 */

 /* var moment = require('moment'); 
require('moment-timezone'); 
moment.tz.setDefault("Asia/Seoul"); 
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 
console.log(date);
 */

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(`지금은 ${date.getHours()}시 ${date.getMinutes()}분 `)
if (date.getHours() < 12){
  console.log(`오전입니다`);
}

if (12 <= date.getHours() ){
  console.log(`오후입니다`);
}
