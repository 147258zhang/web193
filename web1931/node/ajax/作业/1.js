var http = require('http');
var urlAll = require('url');
var querystring = require('querystring');
var  fs= require('fs');
var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var pathname =urlAll.parse(req.url).pathname;
  console.log(req.url);
  if(pathname=='/home'){
    fs.readFile('./1.html','utf8',function(err,data){
      res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
      res.end(data);
    })
  }
  if (pathname === '/css') {
    fs.readFile('./1.css','utf8',function(err,data){
      res.writeHead(200,{'Content-Type':'text/css;charset=utf8'});
      res.end(data);
    });
  }
  if (pathname === '/js') {
    res.writeHead(200,{'Content-Type':'text/javascript;charset=utf8'});
    res.end('console.log(11111111111111)')
  }

})
server.listen(3000, function () {
  console.log('服务器启动')
})