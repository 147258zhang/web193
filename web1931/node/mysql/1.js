 var mysql =require('mysql');
//  console.log(mysql)
// 准备一些内容，我想连接数据库，创建一个钥匙用于连接数据库的基本需要
var key ={
    'host': 'localhost',
    'user':'root',
    'password':'123456789',
    'database':'user'
}
// 池子,在这个池子里,放入基本需要(钥匙),然后看看能不能进入数据库
var pool=mysql.createPool(key);
console.log(pool)
// 准备连mysql              连接错误    连接成功
pool.getConnection(function(err,connect){
    
    if(err){
        console.log('连接失败');
    }else {
        // 这个时候您就可以连接mysql数据某库中的表了
        // console.log(connect)
        // 你需要一条sql语句用来操作mysql
        var sql ='select * from user;';
        connect.query(sql,function(err,data){
            console.log(data);
        })
    }
})

