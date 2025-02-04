var fs=require('fs');
var time=new Date();
//年月日时分秒
var yMdhms = time.toLocaleString();
//年月日
var yMd = time.toLocaleDateString();
// 把2020/9/25通过正则变为2020-9-25
var nymd=ymd.replace(/\//g,'-');
// 查看是不是这个目录
fs.stat(nymd,function(err,data){
    if(err){
        console.log('可以创建');
        fs.mkdir(`./${nymd}`,function(err){
            if(err){
                console.log()
            }else{
                
            }
        })
    }else{
        console.log('已创建')
    }
})
console.log(err)
fs.stat()