const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
    res.writeHead(200, { 'content-type': 'audio/mp3' });
    res.end(audio);
  })
});

server.listen(3000);