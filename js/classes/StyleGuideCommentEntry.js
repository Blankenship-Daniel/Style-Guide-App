"use strict";
var StyleGuideCommentEntry = (function () {
    function StyleGuideCommentEntry() {
        this.name = "";
        this.lines = new Array();
    }
    StyleGuideCommentEntry.prototype.toString = function () {
        var returnStr = "";
        for (var i = 0; i < this.lines.length; i++) {
            returnStr += this.lines[i];
        }
        return returnStr;
    };
    // getters and setters
    StyleGuideCommentEntry.prototype.getName = function () {
        return this.name;
    };
    StyleGuideCommentEntry.prototype.setName = function (name) {
        this.name = name;
    };
    StyleGuideCommentEntry.prototype.getLines = function () {
        return this.lines;
    };
    StyleGuideCommentEntry.prototype.setLines = function (lines) {
        this.lines = lines;
    };
    return StyleGuideCommentEntry;
}());
exports.StyleGuideCommentEntry = StyleGuideCommentEntry;
