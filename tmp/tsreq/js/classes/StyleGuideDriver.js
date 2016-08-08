/// <reference path="../../typings/node/node.d.ts" />
"use strict";
var StyleGuideDriver = (function () {
    function StyleGuideDriver() {
    }
    StyleGuideDriver.prototype.contructor = function () { };
    StyleGuideDriver.prototype.parse = function (config, fileName) {
        // read the file in one line at a time
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(fileName)
        });
        lineReader.on('line', function (line) {
            console.log('Line from file: ', line);
        });
    };
    return StyleGuideDriver;
}());
exports.StyleGuideDriver = StyleGuideDriver;
