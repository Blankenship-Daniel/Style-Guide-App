/**
 * Defines regular expressions for the following tokens:
 *  1. <selector> ... </selector>
 *  2. <desc> ... </desc>
 *  3. <code> ... </code>
 */
export class TokenMatch {
    public static get BEG_COMMENT_TOKEN(): RegExp { return /\/\*/; }
    public static get END_COMMENT_TOKEN(): RegExp { return /\*\//; }

    public static get SELECTOR(): RegExp { return /<selector>/; }
    public static get DESC(): RegExp { return /<desc>/; }
    public static get CODE(): RegExp { return /<code>/; }
}
