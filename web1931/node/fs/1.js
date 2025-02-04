//fs模块，这个模块是内容模块
//引入fs模块
var fs=require('fs');
//fs.stat(),查看文件的情况，有则返回文件的信息，没有呢返回underfined
fs.stat('../simple/1.js',function(err,data){
    if(err){
        console.log(err)
    }else {
        // 文件信息情况
        console.log(data)
        // 判断是不是文件,isfile(),返回值是不是文件
        console.log(data.isFile());
        // 判断是不是目录
        console.log(data.isDirectory())
        // 其他在data中找需要的
    }
})
