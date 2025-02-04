验证fs异步和同步的区别
var fs =require('fs');
console.log(1);
异步
fs.readFile('./5.js',function(err,data){
    console.log(2)
})
