var http = require('http');
var urlAll = require('url');
var querystring = require('querystring');
var data = require('../data/data.js');
var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var urlPathName = urlAll.parse(req.url).query;
  console.log( urlPathName);
  var searchJson = querystring.parse(urlPathName);
  console.log(searchJson);
  var resultData = data.filter(function (v) {
    return v.name == searchJson.name;
  });
  console.log(resultData)
  res.end(JSON.stringify(resultData));。
})
server.listen(3000, function () {
  console.log('服务器启动')
})