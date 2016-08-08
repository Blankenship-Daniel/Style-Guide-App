"use strict";
var StyleGuideSet = (function () {
    function StyleGuideSet() {
        this.styles = new Array();
    }
    /**
     * Adds a StyleGuide object onto the styles array.
     * @param  {StyleGuide} style
     */
    StyleGuideSet.prototype.add = function (style) {
        this.styles.push(style);
    };
    /**
     * Sorts each styles entry according to the sortableEntry identifier.
     */
    StyleGuideSet.prototype.sort = function () {
        // TODO: write StyleGuideSet::sort() function
    };
    /**
     * Takes each styles entry and returns a JSON representation of the
     *  StyleGuide object.
     * @return {string} a string representation of JSON
     */
    StyleGuideSet.prototype.toJson = function () {
        // TODO: write StyleGuideSet::toJson() function
        return "";
    };
    return StyleGuideSet;
}());
exports.StyleGuideSet = StyleGuideSet;
