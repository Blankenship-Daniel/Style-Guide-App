var express = require('express');
var app = express();
var path = require('path');
var sgDriver = require('./js/classes/StyleGuideDriver.js');


app.get('/', function(req, res) {
    var sg = new sgDriver.StyleGuideDriverNamespace.StyleGuideDriver();
    sg.run('_brand_common.scss', function(json) {
        console.log(json);
    });

    res.sendFile(path.join(__dirname + '/styleguide.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
