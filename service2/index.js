const http = require('http');

const hostname = '0.0.0.0';
const port = 5000;

const server = http.createServer((req, res) => {
    // console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort);
    // console.log("to " + req.client.localAddress + ":" + req.client.localPort);
    res.write("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort+"\n");
    res.write("to " + req.client.localAddress + ":" + req.client.localPort);
    res.end();
});

server.listen(port, hostname);