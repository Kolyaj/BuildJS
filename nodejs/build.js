var fs = require('fs'),
    builder = require('./builder.js');

var fname = process.argv[2];

builder.build(fname, {}, function(err, output) {
    if (err) {
        throw err;
    }
});