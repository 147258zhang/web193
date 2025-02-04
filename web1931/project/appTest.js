var express = require('express');
//npm install -d body-parser --save
var bodyParser = require('body-parser');
var app = express();
app.listen(3000,function(){
  console.log('服务器启动')
})

//在这里接收,index的所有路由汇聚成的对象
var indexRouter = require('./routers/index');
// console.log(indexRouter)

//前缀：比如用户和管理界面都有login这个路由，name如何进行区分呢？
// user/login
// admin/login

//加前缀需要用到一个use方法。这个方法的特性常用的是，引入公共资源、加载静态资源、中间件处理内容等
//它只是一个前缀，也就是说子路由里路径前面要加东西否？
app.use('/',indexRouter)

var userRouter = require('./routers/user');
app.use('/user',userRouter)

var path = require('path')
//静态资源托管
// 托管了静态资源之后，可以在http://localhost:3000中直接访问该目录下的文件
// app.use(express.static('view'));
//还有一种写法
//使用path.join方法
app.use(express.static(path.join(__dirname,'view')));
// app.use(express.static('public'));
//多个静态托管时，顺序执行，遇到名称相同时，读取相同名称之后就不再向后读取
//因此为防止结构不清导致的错误，所以增加一层资源目录。
//使用绝对路径__dirname是为了更稳妥的方式是使用静态资源文件夹的绝对路径
app.use('/public',express.static(path.join(__dirname+'/public')));

//   http://localhost:3000/js/ajax.js  
//   http://localhost:3000/index.html  --