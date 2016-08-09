"use strict";
const TokenMatch_1 = require('./TokenMatch');
class Comment {
    constructor() {
        this.selector = "";
        this.desc = "";
        this.code = "";
    }
    toString() {
        return this.selector + '\n' + this.desc + '\n' + this.code + '\n';
    }
    setComment(comment) {
        let selArr = comment.match(TokenMatch_1.TokenMatch.SELECTOR);
        if (selArr !== null) {
            this.selector = selArr[0];
            this.selector =
                this.selector.replace(TokenMatch_1.TokenMatch.SELECTOR_REPLACE, '');
        }
        let descArr = comment.match(TokenMatch_1.TokenMatch.DESC);
        if (descArr !== null) {
            this.desc = descArr[0];
            this.desc =
                this.desc.replace(TokenMatch_1.TokenMatch.DESC_REPLACE, '');
        }
        let codeArr = comment.match(TokenMatch_1.TokenMatch.CODE);
        if (codeArr !== null) {
            this.code = codeArr[0];
            this.code =
                this.code.replace(TokenMatch_1.TokenMatch.CODE_REPLACE, '');
            let escape = require('escape-html');
            this.code = escape(this.code);
        }
    }
    getSelector() {
        return this.selector;
    }
}
exports.Comment = Comment;
