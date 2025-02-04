var http = require('http');
var urlAll = require('url');
var querystring = require('querystring');
var  fs= require('fs');
var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var pathname =urlAll.parse(req.url).pathname;
  if(pathname=='/css'){
      
  }else if(pathname=='/css'){

  }else if(pathname=='/js'){

  }
})
server.listen(3001, function () {
  console.log('服务器启动')
})