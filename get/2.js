var http = require('http');
var arr = [1,2,3]
http.createServer(function(rep,res){
res.setHeader("Access-Control-Allow-Origin", "*");
//将数据转为字符串传入后台
res.end(JSON.stringify(arr))
}).listen(3000)