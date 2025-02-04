var urlALL = require('url');
var http = require('http');
//新的内置模块
var querystring = require('querystring');
http.createServer(function(req,res){
res.setHeader("Access-Control-Allow-Origin", "*");
//参数的全部,但是字符串格式的
var urlSearch = urlALL.parse(req.url).query; //name=%E9%AB%98%E6%AD%A6%E6%9D%B0
var names = querystring.parse(urlSearch);
res.end(JSON.stringify(names))
}).listen(3000)