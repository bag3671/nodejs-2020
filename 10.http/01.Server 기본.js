const http = require(`http`);
const view = require(`./view/01.first`);

let server = http.createServer((request, response) => {
  // console.log(request);
  let html = view.first();
  response.writeHead(200, //status code , ok
    {'Content-Type': 'text/html'});
response.end(html);
});

server.listen(3000);