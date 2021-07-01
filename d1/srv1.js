const http = require('http');

const hostname = '127.0.0.1';


const port1 = 5372;
const srv1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

srv1.listen(port1, hostname, () => {
  console.log(`Server running at http://${hostname}:${port1}/`);
});