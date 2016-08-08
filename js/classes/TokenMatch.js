"use strict";
class TokenMatch {
    static get BEG_COMMENT_TOKEN() { return /\/\*/; }
    static get END_COMMENT_TOKEN() { return /\*\//; }
    static get SELECTOR() { return /<selector>/; }
    static get DESC() { return /<desc>/; }
    static get CODE() { return /<code>/; }
}
exports.TokenMatch = TokenMatch;
