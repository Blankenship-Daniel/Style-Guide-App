"use strict";
class TokenMatch {
    static get BEG_COMMENT_TOKEN() { return /\/\*/; }
    static get END_COMMENT_TOKEN() { return /\*\//; }
    static get SELECTOR() {
        return /<selector>[\s\S]*?<\/selector>/g;
    }
    static get SELECTOR_REPLACE() {
        return /<\/?selector>/g;
    }
    static get DESC() {
        return /<desc>[\s\S]*?<\/desc>/g;
    }
    static get DESC_REPLACE() {
        return /<\/?desc>/g;
    }
    static get CODE() {
        return /<code>[\s\S]*?<\/code>/g;
    }
    static get CODE_REPLACE() {
        return /<\/?code>/g;
    }
}
exports.TokenMatch = TokenMatch;
