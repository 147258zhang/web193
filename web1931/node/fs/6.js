//删除目录
var fs = require('fs');

fs.rmdir('王凯威',function(err){

    if(err){
        console.log(err)
    }else{
        console.log('成功删除');
    }
})








