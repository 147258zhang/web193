var fs =require('fs');
// 创建一个空文件不行，必须要在文件中加入内容才可以,否则报错
fs.writeFile('77.txt','',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('创建成功')
    }
})