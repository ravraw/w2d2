const http = require('http');
const PORT = 1234;

// a function which handles requests and sends response
const requestHandler = (request, response) => {
  const { url, method, headers } = request;

  response.end(`Requested Path: ${url}\nRequest Method: ${method}\n`);
};
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.....`);
});
