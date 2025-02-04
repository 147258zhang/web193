var fs = require('fs');
//删除文件
fs.unlink('777.txt',function(err){
    if(err){
        console.log(err)
    }
})