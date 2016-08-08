"use strict";
const StyleGuideCommentEntry_1 = require('./StyleGuideCommentEntry');
const StyleGuideMatch_1 = require('./StyleGuideMatch');
const StyleGuideSet_1 = require('./StyleGuideSet');
var StyleGuideDriverNamespace;
(function (StyleGuideDriverNamespace) {
    class StyleGuideDriver {
        parseConfig(config) {
            for (let prop in config) {
                if (prop === 'beg_token') {
                    this.begCommentToken = config[prop];
                }
                else if (prop === 'end_token') {
                    this.endCommentToken = config[prop];
                }
                else if (prop === 'sortable') {
                    this.styleGuideSet.setSortable(config[prop]);
                }
                else if (prop === 'entries') {
                    let cfg = config[prop];
                    for (let prp in cfg) {
                        let styleGuideCommentEntry = new StyleGuideCommentEntry_1.StyleGuideCommentEntry();
                        styleGuideCommentEntry.setName(cfg[prop]);
                        let c = cfg[prp];
                        let styleGuideMatch = new StyleGuideMatch_1.StyleGuideMatch();
                        for (let p in c) {
                            if (p === 'beg_token') {
                                styleGuideMatch.setBegToken(c[p]);
                            }
                            else if (p === 'end_token') {
                                styleGuideMatch.setEndToken(c[p]);
                            }
                        }
                        this.styleGuideMatchArray.push(styleGuideMatch);
                    }
                }
            }
            for (let i = 0; i < this.styleGuideMatchArray.length; i++) {
                console.log(this.styleGuideMatchArray[i].toString());
            }
        }
        parseFile(fileName) {
            let lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(fileName)
            });
            lineReader.on('line', function (line) {
                console.log('> ' + line);
                if (line.match(this.begCommentToken)) {
                    console.log('found opening comment match');
                }
                if (line.match(this.endCommentToken)) {
                    console.log('found closing comment match');
                }
            });
        }
        contructor() {
            this.begCommentToken = "";
            this.endCommentToken = "";
        }
        run(config, fileName) {
            this.styleGuideSet = new StyleGuideSet_1.StyleGuideSet();
            this.styleGuideMatchArray = new Array();
            this.parseConfig(config);
            this.parseFile(fileName);
        }
    }
    StyleGuideDriverNamespace.StyleGuideDriver = StyleGuideDriver;
})(StyleGuideDriverNamespace = exports.StyleGuideDriverNamespace || (exports.StyleGuideDriverNamespace = {}));
