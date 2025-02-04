var urlALL = require('url');
var http = require('http');
var data = require('../data/data.js')
// 引入内容模块querystring，来将id=xxx解析成对象(id,xxx)
var querystring=require('querystring');
http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  // 先看看数据是否引入进来了
  // 看看前台给后台的资源路径或者参数是什么然后决定给什么数据,通过URL地址看
  // url内容模块有一个方法叫，parse()这个方法可以把req.url解析成一个对象,其中有一些是我们需要的如pathname，代表资源路径
  var urlQuery = urlALL.parse(req.url).path;
  console.log(urlQuery);
/*
query:用于全部查询
search：单一查询
*/
  if(urlQuery == '/query'){
    res.end(JSON.stringify(data))
    // 全部数据都给返回去
    // 为啥要用json.stringify，是因为end往前传数据只能是字符串，所以要将数据转为字符串传递
  }else if(urlQuery == '/search'){
    var urlQuery=urlALL.parse(req.url).query;
    // 返回内容是？后面的参数,如果没有返回null
    console.log(urlQuery)
    if(urlQuery){
      console.log('有参数');
      // 有参数的话，就是querystring.parse解析成对象格式
      var searchJson=querystring.parse(urlQuery);
      var resultDate=data.filler(function(v){
        return v.id==searchJson.id;
      })
      console.log(resultDate)
    }
  }

 
}).listen(3000)