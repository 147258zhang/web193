var http = require('http');
var urlAll = require('url');
var querystring = require('querystring');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    var urlPathName = urlAll.parse(req.url).pathname;
    // console.log(urlpathName);
    if (urlPathName == '/login') {
        //变成html文件
        urlPathName = '/login.html';
        fs.readFile('./view' + urlPathName, function (err, data) {
            res.end(data)
        })
    }
    else if (urlPathName == '/adminLogin') {
        urlPathName = '/adminLogin.html';
        fs.readFile('./view' + urlPathName, function (err, data) {
            res.end(data)
        })
    }

})
server.listen(3000, function () {
    console.log('服务器启动')
})