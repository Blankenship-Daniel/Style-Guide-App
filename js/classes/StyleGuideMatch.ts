export class StyleGuideMatch {
    private begToken: string;
    private endToken: string;

    constructor() {
        this.begToken = "";
        this.endToken = "";
    }

    public toString(): string {
        let returnStr: string = "";
        returnStr += "begToken: " + this.begToken + "\n";
        returnStr += "endToken: " + this.endToken + "\n";
        return returnStr;
    }

    // getters and setters

    public getBegToken(): string {
        return this.begToken;
    }

    public setBegToken(begToken: string) {
        this.begToken = begToken;
    }

    public getEndToken(): string {
        return this.endToken;
    }

    public setEndToken(endToken: string) {
        this.endToken = endToken;
    }
}
