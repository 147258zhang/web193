// 修改目录名字
var fs=require('fs');
fs.rename('9999','高武杰',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('创建成功')
    }
})