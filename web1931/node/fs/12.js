var fs=require('fs');
var a=new Date();
var b=a.getFullYear();
var c=a.getMonth()+1;
c<10?c='0'+c :c;
var d=a.getDate();
d<10?d='0'+d :d;
var e=b+'-'+c+'-'+d;
var hours=a.getHours();
var minutes=a.getMinutes();
minutes<10?minutes='0'+minutes :minutes;
var f='\n'+hours+':'+minutes+'运行程序';
console.log(f);
fs.mkdir(e,function(err){
    if(err){
        console.log(err);
        if(err.errno==-4075){
            console.log('目录已存在')
        }

    }else{
        console.log('创建成功')
    }
})
fs.appendFile('./'+e+'/log.txt',f,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('创建成功')
    }
})
