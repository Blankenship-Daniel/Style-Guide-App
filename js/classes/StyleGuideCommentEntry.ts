export class StyleGuideCommentEntry {
    private name: string;
    private lines: string[];

    constructor() {
        this.name = "";
        this.lines = new Array();
    }

    public toString() {
        let returnStr = "";
        for (let i = 0; i < this.lines.length; i++) {
            returnStr += this.lines[i];
        }
        return returnStr;
    }

    // getters and setters

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getLines(): string[] {
        return this.lines;
    }

    public setLines(lines: string[]) {
        this.lines = lines;
    }
}
