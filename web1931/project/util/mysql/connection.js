var mysql = require('mysql');
var key = require('./key');

//准备创建增删改查四个方法
//现阶段只创建查询方法

//查询
var queryFn = function (sql,callback) {
  // console.log('2:'+sql)
  //创建连接
  var connection = mysql.createConnection(key);
  //连接数据库
  connection.connect();
  //使用query方法根据sql对数据库进行操作，在函数中处理数据，函数两个参数一个是错误，一个是数据本身
  connection.query(sql, function (err, data) {
    if (err) {
      //如果查询出错，把错误反出去
      return err;
    }
    // 结束连接
    connection.end()
    //看看数据回没回来
    console.log('2:' + data)
    //运用回调函数解决异步问题
    //等待aaaa的结果，等待之前要把参数传给他
    //处理今天是否请女朋友吃饭（给她送了口红）
    callback(data)
  })
}

module.exports = queryFn;