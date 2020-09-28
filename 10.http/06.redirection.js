const http = require(`http`);
const view = require(`./view/01.first`);

let server = http.createServer((request, response) => {

  response.writeHead(302, //redirection Found
    { 'location': 'http://www.hanbit.co.kr' });
 response.end();
});

server.listen(3000);