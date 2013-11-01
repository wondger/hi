/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2013-11-01
 * @param: 
 * @todo: 
 * @changelog: 
 */
var http = require("http");
var https = require("https");
var url = require("url");

var moment = require("moment");

module.exports = exports = function(req, res, next) {
    var options = url.parse(req.url);
    var proxy = http.request({
            hostname: options.hostname,
            port: options.port || 80,
            path: options.path,
            method: req.method,
            headers: req.headers
        }, function(rs) {
            res.writeHead(rs.statusCode, rs.headers);
            rs.on("data", function(chunk) {
                res.write(chunk);
            });
            rs.on("end", function() {
                res.end();
                console.log("[" + req.method + "][" + rs.statusCode + "][" + moment().format("HH:mm:SS") + "] " + req.url);
            });
        });

    if (req.method === "POST") {
        req.on('data', function (data) {
            proxy.write(data);
        });
    }

    proxy.end();
};
