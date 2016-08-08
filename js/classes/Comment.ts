import {TokenMatch} from './TokenMatch';

export class Comment {
    private selector: string = "";
    private desc: string = "";
    private code: string = "";

    public toString(): string {
        return this.selector + '\n' + this.desc + '\n' + this.code + '\n';
    }

    // getters and setters

    /**
     * Sets the selector, desc, and code attributes.
     * @param  {string} comment the parsed comment block.
     */
    public setComment(comment: string) {
        let selArr: RegExpMatchArray = comment.match(TokenMatch.SELECTOR);
        if (selArr !== null) {
            this.selector = selArr[0];
            this.selector =
                this.selector.replace(TokenMatch.SELECTOR_REPLACE, '');
        }

        let descArr: RegExpMatchArray = comment.match(TokenMatch.DESC);
        if (descArr !== null) {
            this.desc = descArr[0];
            this.desc =
                this.desc.replace(TokenMatch.DESC_REPLACE, '');
        }

        let codeArr: RegExpMatchArray = comment.match(TokenMatch.CODE);
        if (codeArr !== null) {
            this.code = codeArr[0];
            this.code =
                this.code.replace(TokenMatch.CODE_REPLACE, '');
        }
    }

    public getSelector(): string {
        return this.selector;
    }
}
