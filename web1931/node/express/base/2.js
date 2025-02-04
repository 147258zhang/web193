var express = require('express');
var app = express();
app.listen(3000,function(){
  console.log('服务器启动')
})

app.get('/index',function(req,res){
  //拿到get的参数直接用req.query
  console.log(req.query)
})

app.get('/list/:id',function(req,res){
  console.log(req.params)
})

app.get('/list',function(req,res){
  res.sendFile(__dirname+'/2.html')
})

app.get('/jingling',function(req,res){
  res.send('<h1>jing;ing</h1>')
})