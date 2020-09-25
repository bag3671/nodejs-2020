const fs = require('fs');
let folder = `./tmp`;
fs.readdir(folder, "utf-8", function(error, filelist){
  console.log(filelist);
});