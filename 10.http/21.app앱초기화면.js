const http = require('http');
const fs = require('fs');
const url = require('url');
const view = require('./view/index');

let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  let query = url.parse(req.url, true).query;
  console.log(query, query.id);
  switch (query.id) {
    case 'CSS': 
          
      break;
    case 'HTML': 
          
      break;
    case 'JAVA': 
          
      break;
    
    default:
      break;
  }
  switch (pathname) {
    case '/':
      fs.readdir(`data`, (error, filelist) => {
        let list = ``;
        for (let file of filelist) {
          let filename = file.substring(0, file.length-4)
          list += `<li><a href = "/?id = ${filename}">${filename}</a></li>`
        }
        let html = view.index(list);
        res.end(html);
      })

      break;

    default:
      res.writeHead(404, { 'content-type': 'text/html' })
      break;
  }

}).listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
