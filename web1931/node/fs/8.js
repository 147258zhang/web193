var fs =require('fs');

fs.appendFile('777.txt','\n原来在这',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('追加成功')
    }
})