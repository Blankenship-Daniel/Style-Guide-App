"use strict";
var StyleGuideEntry = (function () {
    function StyleGuideEntry() {
        this.name = "";
        this.lines = new Array();
    }
    StyleGuideEntry.prototype.getName = function () {
        return this.name;
    };
    StyleGuideEntry.prototype.setName = function (name) {
        this.name = name;
    };
    StyleGuideEntry.prototype.getLines = function () {
        return this.lines;
    };
    StyleGuideEntry.prototype.setLines = function (lines) {
        this.lines = lines;
    };
    StyleGuideEntry.prototype.toString = function () {
        var returnStr = "";
        for (var i = 0; i < this.lines.length; i++) {
            returnStr += this.lines[i];
        }
        return returnStr;
    };
    return StyleGuideEntry;
}());
exports.StyleGuideEntry = StyleGuideEntry;
