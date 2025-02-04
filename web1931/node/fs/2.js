// 引入fs模块
var fs=require('fs');
fs.readdir('../simple',function(err,data){
    if(err){
        console.log(err)
    }else{
        // 找到目录下的第一层所有文件和目录,把他们存到一个数组中
        console.log(data)
    }
})
