// 新创建一个模块，将这个模块的作用是在这里处理文件类型最终将type返回给主程序用于拼接响应头
var fs=require('fs')
exports.getType1=function(m){
    fs.readFile('./type.json',function(err,data){
        if(err){
            // 文件不存在也要处理
            return false;
        }
        // data返回的是一个buff需要转变成字符串才能看
        var typeText=JSON.parse( data.toString());
        // m是主程序传过来的后缀名
        console.log(m);
        用主程序传来的后缀名匹配json中的属性名从而找到它对应的值,这个值
        console.log(typeText[m])
    })
}