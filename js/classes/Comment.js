"use strict";
class Comment {
    constructor() {
        this.comment = "";
        this.selector = "";
        this.desc = "";
        this.code = "";
    }
    setComment(comment) {
        this.comment = comment;
    }
    getSelector() {
        return this.selector;
    }
    getDesc() {
        return this.desc;
    }
    getCode() {
        return this.code;
    }
}
exports.Comment = Comment;
