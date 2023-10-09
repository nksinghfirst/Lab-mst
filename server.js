const https = require("https");

const server = https.createServer((req, res) => {
    res.end("Hello Neeraj kr. singh");
});

server.listen(8080, '127.0.0.1');