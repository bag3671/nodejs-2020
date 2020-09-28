const http = require(`http`);
// const view = require(`./view/01.first`);


let server = http.createServer((request, response) => {
  console.log(request.headers.Cookie);
  let Cookie = request.headers.Cookie;
  response.writeHead(200, //status code , ok
    {
      'Content-Type': 'text/html',
      'set-Cookie': ['breakfast= tost', 'dinner = chicken']
    });
  response.end(`<h1>${Cookie}</h1>`);
});

server.listen(3000, ()=>{
  console.log(`Server running at http://localhost:3000`);
});