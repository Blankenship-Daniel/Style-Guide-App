var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var sgDriver = require('./js/classes/StyleGuideDriver.js');


app.get('/', function(request, response) {
    var sg = new sgDriver.StyleGuideDriverNamespace.StyleGuideDriver();
    sg.run('_brand_common.scss', function(json) {
        fs.writeFile('sass.json', JSON.stringify(json), function(error) {
            if (error) {
                return console.log(err);
            }

            console.log('The file was saved!');
        });
    });

    response.sendFile(path.join(__dirname + '/styleguide.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
