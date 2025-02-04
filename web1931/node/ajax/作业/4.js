var http = require('http');
var urlAll = require('url');
var querystring = require('querystring');
var data = require('./3.js');
var  fs= require('fs');
var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var pathname =urlAll.parse(req.url).pathname;
  if (pathname === '/css') {
    fs.readFile('./2.css','utf8',function(err,data){
      res.writeHead(200,{'Content-Type':'text/css;charset=utf8'});
      res.end(data);
    });
  }
  res.end(JSON.stringify(data));
})
server.listen(3000, function () {
  console.log('服务器启动')
})