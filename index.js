/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2013-10-31
 * @param: 
 * @todo: 
 * @changelog: 
 */
var connect = require("connect");
var http = require("http");
var proxy = require("./proxy");

var app = connect()
        .use(function(req, res, next) {
            proxy(req, res, next);
        });

http.createServer(function(req, res) {
    app(req, res);
}).listen(9090);

process.on("uncaughtException", function(err) {
    console.log(err);
});
