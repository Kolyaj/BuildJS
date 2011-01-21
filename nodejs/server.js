var path = require('path'),
    fs = require('fs'),
    sys = require('sys');

var builder = require('./builder');

require('http').createServer(function(req, res) {
    var pathname = require('url').parse(req.url).pathname;
    path.exists(pathname, function(exists) {
        if (exists) {
            builder.build(pathname, {debug: true}, function(err, output) {
                if (err) {
                    sys.puts('Error: ' + err.message);
                    res.writeHead(500);
                    res.write('alert("Error: ' + err.message + '");');
                    res.end();
                } else {
                    sys.puts('File ' + pathname + ' completed');
                    res.writeHead(200, {
                        'content-type': 'text/javascript; charset=UTF-8'
                    });
                    res.write(output);
                    res.end();
                }
            })
        } else {
            sys.puts('File ' + pathname + ' not found');
            res.writeHead(404);
            res.write('alert("File ' + pathname + ' not found");');
            res.end();
        }
    })
}).listen(9595);