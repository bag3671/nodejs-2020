//node this.js filename option
const fs = require(`fs`);
const readline = require(`readline`);

//filename을 받는 방법
if (process.argv.length < 3) {
  console.log(`사용법: node this.js filename`);
  process.exit();
}
let filename = process.argv[2];
let option = process.argv[3];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt(`> `);
rl.prompt();
let input = ``;

rl.on(`line`, function (buf) {
  input += buf + `\n`;
  rl.prompt();
});

rl.on(`close`, function () {
  if (option.indexOf(`append`)!== -1) {
    fs.writeFile(filename, input, { flag: `a` }, e => {
      if (e)
        console.log(e);
    });
  }
  else {
    fs.writeFile(filename, input, e => {
      if (e)
        console.log(e);
      });
    }
  });