var http = require('http');
var urlAll = require('url');
var querystring = require('querystring');
var data = require('../data/data.js');
var  fs= require('fs');
// 怎么能看文件的后缀名
var path =require('path');
// path模块有一个extname方法，用于将文件最后的后缀名提取出来
var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
  var pathname =urlAll.parse(req.url).pathname;
  console.log(urlAll.parse(req.url));
  if(pathname=='/'||pathname=='/home'){
    // 创建一个后缀名的对照变量，将这个变量拼接到相应头context-type中

      fs.readFile('./2.html','utf8',function(err,data){
          
          res.end(data)
          
      })
  }else if(pathname=='/login'){
    res.end('1111')
  }else if(pathname=='/help'){
    res.end('help')
  }else{
    res.end('404')
  }
})
server.listen(3000, function () {
  console.log('服务器启动')
})