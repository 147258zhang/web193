var express=require('express');
console.log(express);
var app=express();
app.listen(3000,function(){
    console.log('服务器启动')
});
app.get('/index',function(req,res){
    res.sendFile(__dirname+'/3.html')
})
app.get('/jingling1',function(req,res){
    res.sendFile(__dirname+'./4.html')
});
app.get('/jingling2',function(req,res){
    res.redirect(__dirname+'/5.html')
});
app.get('/jingling3',function(req,res){
    res.sendFile(__dirname+'/6.html')
});