const http = require('http');

const hostname = '127.0.0.1';

const port0 = 4567;
const srv0 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

srv0.listen(port0, hostname, () => {
  console.log(`Server running at http://${hostname}:${port0}/`);
});
