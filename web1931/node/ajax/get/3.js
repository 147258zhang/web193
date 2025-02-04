// 内置模块
var urlALL = require('url');
var http = require('http');
var querystring=require('querystring');
// 引入数据
var data = require('../data/data.js')
res.setHeader('Access-Control-Allow-Origin', '*')
res.writeHead(200,{'Content-Type','text'});
// 使用post方式传递参数接收时需要一个复杂的过程
// 相当于监听了数据来后台的过程
var str='';
req.on('data',function(data){
    console.log(data)
    str+=data;
})
console.log(str);
// post方式传递数据之后，node中需要使用另一种on什么的方法在进行返回作业
// 监听完成后需要返回的数据
req.on('end',function(){
    var dataJson=querystring.parse(str);
    console.log(dataJson)
    var rData=dat.filler(function(v){
        return v.id==dataJson.id
    })
    res.end(JSON.stringify(rdata))
})
Server.listen(3000,function(){
    console.log('服务器启动')
})

