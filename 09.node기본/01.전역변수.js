const path = require (`path`);

console.log(__dirname);
console.log(__filename);//파일네임은 잘 안쓰고 dir을 많이 씀

//이름 표시때 이상한게 중간에 들어 있어도 알아서 정리함
let filename = path.join(__dirname, `tmp`, `textfile.tmp`);
let dirtyname = path.join(__dirname, `tmp`, `..`, `textfile.tmp`);
console.log(filename);
console.log(dirtyname);
