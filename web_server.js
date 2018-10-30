const http = require('http');
const PORT = 1234;

// a function which handles requests and sends response
const requestHandler = (request, response) => {
  const { url, method, headers } = request;
  if (url === '/') response.end('Welcome !!!');
  else if (url === '/urls')
    response.end(`www.lighthouselabs.ca \n www.google.com`);
  else {
    response.statusCode = 404;
    response.end('Path not found');
  }
};

// initiate server
const server = http.createServer(requestHandler);

// server listening on posrt 1234
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
