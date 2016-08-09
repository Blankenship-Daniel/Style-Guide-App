"use strict";
const TokenMatch_1 = require('./TokenMatch');
const Comment_1 = require('./Comment');
var StyleGuideDriverNamespace;
(function(StyleGuideDriverNamespace) {
    class StyleGuideDriver {
        parseFile(fileName, sortObject, readJson) {
            let insideComment = false;
            let commentString = "";
            let commentSet = {};
            let comment;
            let lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(fileName)
            });
            lineReader.on('line', function(line) {
                if (line.match(TokenMatch_1.TokenMatch.BEG_COMMENT_TOKEN)) {
                    comment = new Comment_1.Comment();
                    insideComment = true;
                }
                if (insideComment) {
                    commentString += line;
                }
                if (line.match(TokenMatch_1.TokenMatch.END_COMMENT_TOKEN)) {
                    comment.setComment(commentString);
                    if (!(comment.getSelector() in commentSet) &&
                        comment.getSelector() != '') {
                        commentSet[comment.getSelector()] = comment;
                    }
                    commentString = "";
                    insideComment = false;
                }
            });
            lineReader.on('close', function() {
                readJson(sortObject(commentSet));
            });
        }
        sortObject(o) {
            let sorted = {};
            let a = new Array();
            for (let key in o) {
                if (o.hasOwnProperty(key)) {
                    a.push(key);
                }
            }
            a.sort();
            for (let i = 0; i < a.length; i++) {
                sorted[a[i]] = o[a[i]];
            }
            return sorted;
        }
        run(fileName, readJson) {
            this.parseFile(fileName, this.sortObject, readJson);
        }
    }
    StyleGuideDriverNamespace.StyleGuideDriver = StyleGuideDriver;
})(StyleGuideDriverNamespace = exports.StyleGuideDriverNamespace || (exports.StyleGuideDriverNamespace = {}));
