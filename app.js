
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World from myownproject!');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));