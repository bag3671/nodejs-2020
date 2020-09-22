//string length
let hello = `안녕하세요`;
console.log(hello.length);

// string 내에서 문자열을 찾을 때
console.log(hello.indexOf(`하`));
console.log(hello.indexOf(`한`));

console.log(hello.search(`하`));

// 문자열의 일부분을 추출
let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13);    //시작 인덱스, 끝 인덱스
console.log(res);
console.log(str.slice(-4));

console.log(str.substr(7,6));   //시작 인덱스, 갯수

// 문자열 대체
let newStr = str.replace(/,/g,`;`)
console.log(newStr);

//공백제거
str = "       Hello World!        ";
console.log(str.trim());

//문자 추출
console.log(hello.charAt(0));

// 문자열을 Array로 변환
let txt = "a,b,c,d,e";
console.log(txt.split(`,`));
console.log(txt.split(``));
console.log(txt.split(` `));