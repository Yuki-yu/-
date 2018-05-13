var template = require('art-template');
var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})
server.on('request', (req, res) => {
    var url = req.url;
    var dataObj = {
        name: "123",
        age: "222",
        xixi: "555"
    }
    if (url === '/') {
        var html = template(__dirname + '/index.html', dataObj);
        res.end(html)
    } else {
        res.end('404')
    }
})