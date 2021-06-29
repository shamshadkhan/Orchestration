const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    // console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort);
    // console.log("to " + req.client.localAddress + ":" + req.client.localPort);  
    res.write("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort+"\n");
    res.write("to " + req.client.localAddress + ":" + req.client.localPort+"\n");
    http.get('http://service2:5000', (resp) => {
        let data = '';
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.write(data.toString())
            res.end();
        });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    }).end();
});

server.listen(port, hostname);