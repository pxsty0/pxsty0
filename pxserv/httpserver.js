var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  console.log("request geldi")
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);
const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 8080 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url)

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();
