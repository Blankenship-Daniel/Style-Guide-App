var express = require('express');
var app = express();
var path = require('path');
var sgDriver = require('./js/classes/StyleGuideDriver.js');
var sgConfig = require('./js/classes/config.json');



app.get('/', function(req, res) {
    var sg = new sgDriver.StyleGuideDriverNamespace.StyleGuideDriver();
    sg.run(sgConfig, '_brand_common.scss');

    res.sendFile(path.join(__dirname + '/styleguide.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
