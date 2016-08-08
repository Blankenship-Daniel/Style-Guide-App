"use strict";
class StyleGuideMatch {
    constructor() {
        this.begToken = "";
        this.endToken = "";
    }
    toString() {
        let returnStr = "";
        returnStr += "begToken: " + this.begToken + "\n";
        returnStr += "endToken: " + this.endToken + "\n";
        return returnStr;
    }
    getBegToken() {
        return this.begToken;
    }
    setBegToken(begToken) {
        this.begToken = begToken;
    }
    getEndToken() {
        return this.endToken;
    }
    setEndToken(endToken) {
        this.endToken = endToken;
    }
}
exports.StyleGuideMatch = StyleGuideMatch;
