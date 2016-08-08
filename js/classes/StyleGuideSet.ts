import {StyleGuideComment} from './StyleGuideComment';

export class StyleGuideSet {
    private styles: StyleGuideComment[];
    private sortableEntry: string;

    private contains(style: StyleGuideComment): boolean {

        return false;
    }

    constructor() {
        this.styles = new Array();
        this.sortableEntry = "";
    }

    /**
     * Adds a StyleGuideComment object onto the styles array.
     * @param  {StyleGuide} style
     */
    public add(style: StyleGuideComment) {
        this.styles.push(style);
    }

    /**
     * Sorts each styles entry according to the sortableEntry identifier.
     */
    public sort() {
        // TODO: write StyleGuideSet::sort() function
    }

    /**
     * Takes each styles entry and returns a JSON representation of the
     *  StyleGuide object.
     * @return {string} a string representation of JSON
     */
    public toJson(): string {
        // TODO: write StyleGuideSet::toJson() function
        return "";
    }

    // getters and setters

    public setSortable(sortableEntry: string) {
        this.sortableEntry = sortableEntry;
    }

    public getSortable(): string {
        return this.sortableEntry;
    }
}
