// Import the built-in 'http' module
const http = require('http');

// Create an HTTP server that responds with "Hello, Node.js!" to all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<h1>Hello, Node.js!</h1>\n');
});

// Listen on port 3000 and IP address 127.0.0.1 (localhost)
const port = 3005;
const host = '127.0.0.1';
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
