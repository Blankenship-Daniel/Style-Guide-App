"use strict";
var StyleGuideSet = (function () {
    function StyleGuideSet() {
        this.styles = new Array();
        this.sortableEntry = "";
    }
    StyleGuideSet.prototype.contains = function (style) {
        return false;
    };
    /**
     * Adds a StyleGuideComment object onto the styles array.
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
    // getters and setters
    StyleGuideSet.prototype.setSortable = function (sortableEntry) {
        this.sortableEntry = sortableEntry;
    };
    StyleGuideSet.prototype.getSortable = function () {
        return this.sortableEntry;
    };
    return StyleGuideSet;
}());
exports.StyleGuideSet = StyleGuideSet;
