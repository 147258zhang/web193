// 创建目录
var fs=require('fs');
fs.mkdir('9999',function(err){
    if(err){
        console.log(err);
        if(err.errno==-4075){
            console.log('目录已存在')
        }

    }else{
        console.log('创建成功')
    }
})