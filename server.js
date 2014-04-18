'use strict';

var express   = require('express'),
    _ = require('underscore'),
    path    = require('path'),
    app       = express();

app.use(express.static(path.join(__dirname, 'app')));
app.listen(3000);
console.log('Listening on port 3000');