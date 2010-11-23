var fs = require('fs'),
    sys = require('sys'),
    builder = require('./builder.js');

if (process.argv.length < 3) {
    sys.puts('Usage: node build.js fname.js');
}

var context = {};
for (var i = 3; i < process.argv.length; i++) {
    if (process.argv[i].indexOf('-') == 0) {
        context[process.argv[i].substr(1)] = true;
    }
}

builder.build(process.argv[2], context, function(err, output) {
    if (err) {
        throw err;
    }

    sys.puts(output);
});