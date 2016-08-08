"use strict";
const TokenMatch_1 = require('./TokenMatch');
var StyleGuideDriverNamespace;
(function (StyleGuideDriverNamespace) {
    class StyleGuideDriver {
        parseFile(fileName) {
            let insideComment = false;
            let lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(fileName)
            });
            lineReader.on('line', function (line) {
                if (line.match(TokenMatch_1.TokenMatch.BEG_COMMENT_TOKEN)) {
                    insideComment = true;
                }
                if (insideComment) {
                    console.log('> ' + line);
                }
                if (line.match(TokenMatch_1.TokenMatch.END_COMMENT_TOKEN)) {
                    insideComment = false;
                }
            });
        }
        run(fileName) {
            this.parseFile(fileName);
        }
    }
    StyleGuideDriverNamespace.StyleGuideDriver = StyleGuideDriver;
})(StyleGuideDriverNamespace = exports.StyleGuideDriverNamespace || (exports.StyleGuideDriverNamespace = {}));
