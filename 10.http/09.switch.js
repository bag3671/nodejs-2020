const http = require(`http`);
const url = require(`url`);
const view = require(`./view/01.first`);
const fs = require(`fs`)

let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  switch (pathname) {
    case `/`:
      let html = view.first();
      res.end(html);
      break;
    case `/image`:
      fs.readFile('media/Elvis2.png', (error, image) => {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.end(image);
      });
      break;
    case `/audio`:
      fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
        res.writeHead(200, { 'content-type': 'audio/mp3' });
        res.end(audio);
      });
      break;
    default:
      res.writeHead(404, { 'content-type': 'text/html' })
      res.end();
      break;
  }
});
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});