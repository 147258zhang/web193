var fs = require('fs');
//读取文件是需要加入读取的格式否则是一个buffer
fs.readFile('777.txt','utf8',function(err,data){
    if(err){
        console.log(err)
    }else(
        console.log(data)
    )
})