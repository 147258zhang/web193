//在子路由里存放的是该模块下的所有路由

//index路由专门用于首页的展示
var express = require('express');
var path = require('path');

//创建路由对象
var router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname,'../view/index.html'))
})

router.get('/xxxx',function(req,res){
  res.send('404')
})

module.exports = router;