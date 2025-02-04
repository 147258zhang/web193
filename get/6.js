var http = require('http');
var urlAll = require('url');
//引入内置模块querystring 来将id=xxx解析成对象{id:xxx}
var querystring = require('querystring');
//将data数据模块引入主程序中来
var data = require('../data/data.js');
   var server = http.createServer(function(req,res){
res.setHeader('Access-Control-Allow-Origin', '*');
//先看看数据是否引进来
// console.log(data)
//看看前台给后台的资源路径或者参数是什么然后决定给什么数据,通过url地址看
// console.log(req.url);//req.url 返回了url地址端口号之后的所有内容
// console.log(urlAll.parse(req.url));//返回内容是一个对象,其中pathname是资源路径,query是参数,null是没有参数
//url内置模块有一个方法叫.parse()这个方法可以把req.url解析成一个对象,其中有一些是我们需要的如pathname,代表资源路径
var urlPathName = urlAll.parse(req.url).pathname;//query or search
if(urlPathName == '/query'){
//全部数据给回去
//为什么要用json.stringify,是因为end往前传数据只能是字符串,所有要将
res.end(JSON.stringify(data));
// res.end('hello')
}else if(urlPathName == '/search'){
    //那就只给一条数据,但是需要看参数是什么
    var urlQuery =urlAll.parse(req.url).query
    //返回内容是?后面的参数,如果没有没有参数返回null
    // console.log(urlQuery);
    if(urlQuery){
        console.log('有参数');
        //有参数的话,就是用querystring.parse解析成对象格式
        var searchJson =querystring.parse(urlQuery);
        // console.log(searchJson);
        //过滤器
        var resultData = data.filter(function(v){
            return v.id == searchJson.id
        })
        //console.log(resultData);
    }else{
        console.log('没参数');
    }
}
})
server.listen(3000,function(){
  console.log('服务器启动')
})