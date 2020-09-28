const fs = require(`fs`);
/* fs.readdir(`tmp`, function (e, files) {
  for (let file of files) {
    let filename = `tmp/` + file
    let stat = fs.statSync(filename);
    console.log(file, `\t`, stat.size, `byte`);
  }
});
 */
//파일 삭제하기
/* fs.unlink(`tmp/tmp.txt`, error => {
  if (error) {
    console.log(error)
  }
}); */

//파일이름 변경하기
fs.rename(`tmp/sync.txt`, `tmp/tmp.txt`, e=> {
  if (e)
    console.log(e);
});