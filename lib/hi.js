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

var app = connect();

process.on("uncaughtException", function(err) {
    console.log(err);
});

module.exports = exports = function(options) {
    app.use(function(req, res, next) {
            proxy(req, res, next);
        });

    http.createServer(function(req, res) {
        app(req, res);
    }).listen(options.port || 9090);

    console.log("hi running on port: " + (options.port || 9090));
}
