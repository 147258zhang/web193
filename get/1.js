var http = require('http');
http.createServer(function(req,res){
    console.log('有访问')
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.end('hello')
}).listen(3000)