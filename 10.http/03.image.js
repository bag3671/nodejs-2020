const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  fs.readFile('media/lovemetender.png',(error, image) => {
    res.writeHead(200, {'content-type' : 'image/png'});
    res.end(image);
  })
});

server.listen(3000);