//引入内置和第三方模块
var express = require('express');
var path = require('path');
//实例化express,使用express创建服务器
var app = express();
app.listen(3000,function(){
  console.log('服务器启动');
})

//处理参数解析
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//跨域（暂时用不到）

//静态资源托管
//让view目录为根目录
app.use(express.static(path.join(__dirname,'view')));
//public静态资源
app.use('/public',express.static(path.join(__dirname+'/public')));

//路由
//首页路由
var indexRouter = require('./routers/index');
//引入公共资源
app.use('/',indexRouter)
//用户路由
var userRouter = require('./routers/user');
app.use('/user',userRouter)