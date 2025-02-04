/**
 * 安装express框架
 * 先创建一个package.json文件 npm init -y
 * 
 */
var express = require('express');
// console.log(express)
//实例化或者用express创建一个web服务器
var app = express();
//监听端口
app.listen(3000,function(){ 
  console.log('服务器启动')
})
//通过get方法 url地址           响应
app.get('/home', function (req, res) {
  res.send('<h1>aaaaa</h1>')
})

//返回一个文件
console.log(__dirname)//可以拿到当前目录的绝对路径
app.get('/index',function(req,res){
  //返回一个文件不能写相对路径，要写绝对路径
  res.sendFile(__dirname+'/1.html')
})

//如果你需要跳转页面
app.get('/baidu',function(req,res){
  res.redirect('https://www.baidu.com')
})

