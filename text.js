var http = require("http");

var server = http.createServer();

server.on("request", (req, res) => {
    console.log('9999');
});

server.listen(3001, () => {
    console.log("http://127.0.0.1:3001");
});