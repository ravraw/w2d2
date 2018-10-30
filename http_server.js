const https = require('https');

const server = https.createServer();

server.on('request', (request, response) => {
  console.log('request recieved');
});

server.listen(1234, () => {
  console.log('Server listening on 1234 ...');
});
