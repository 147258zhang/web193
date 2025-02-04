var urlALL = require('url');
var http = require('http');
var data = require('../data/data.js');
//新的内置模块
var querystring = require('querystring');
http.createServer(function(req,res){
res.setHeader("Access-Control-Allow-Origin", "*");
//参数的全部,但是字符串格式的

var urlQuery = urlALL.parse(req.url).path; 
/* query 用于全部查询
   search:单一查询
   */
if(urlQuery == '/query'){
    res.end(JSON.stringify(data))
}else if(urlQuery == '/search'){

    
}
}).listen(3000)