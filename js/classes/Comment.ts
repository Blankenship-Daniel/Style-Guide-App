export class Comment {
    private comment: string;
    private selector: string;
    private desc: string;
    private code: string;

    constructor() {
        this.comment = "";
        this.selector = "";
        this.desc = "";
        this.code = "";
    }

    public setComment(comment: string) {
        this.comment = comment;
    }

    public getSelector(): string {
        return this.selector;
    }

    public getDesc(): string {
        return this.desc;
    }

    public getCode(): string {
        return this.code;
    }
}
