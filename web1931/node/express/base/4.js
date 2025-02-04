var express=require('express');
var bodyParser = require('body-parser');
var app=express();
app.listen(3000,function(){
    console.log('服务器启动')
});
app.get('/login',function(req,res){
    res.sendFile(__dirname+'/5.html')
})
app.get('/name',function(req,res){
    res.send();
})
// 中间插件 -body-parser
var txt=bodyParser.urlencoded({extended:true})
app.post('/uselogin',txt,function(req,res){
    console.log(req.body);
    res.send('ok')
})
