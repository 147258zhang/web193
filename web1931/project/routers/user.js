//在子路由里存放的是该模块下的所有路由

//index路由专门用于首页的展示
var express = require('express');
//因为需要解析文件路径因此需要path模块
var path = require('path');
// path.resolve 他可以自动识别第一个参数和第二参数之间的关系，从而合并成一个真实完整的绝对路径
// var a = path.resolve(__dirname,'../view/user/login')
// console.log(a)
var bodyParer = require('body-parser');

//创建路由对象
var router = express.Router();

router.get('/login',function(req,res){
  res.sendFile(path.resolve(__dirname,'../view/user/login.html'))
})
//引入查询方法
var queryFn = require('../util/mysql/connection')
//检测用户登录
router.post('/checklogin',function(req,res){
  console.log(req.body)
  //假如在这里有一个函数 ，我只需要传入sql语句，最后就能拿到结果
  var sqlStr = `select * from user_login where uname = '${req.body.uname}';`;
  // var sqlStr = `select * from user_login where uname = 'zyn';`;
  //传参
                  //女朋友在看他的态度看了态度之后再决定是否答应他的要求
  queryFn(sqlStr,function(data){
    //aaaa
    console.log('1:'+JSON.stringify(data) ) 
    console.log(data.length)
    if(data.length!=0){
      res.send(data)
    }
  })

})

router.get('/register',function(req,res){
  res.send('注册')
})



module.exports = router;