/**
 * Defines regular expressions for the following tokens:
 *  1. <selector> ... </selector>
 *  2. <desc> ... </desc>
 *  3. <code> ... </code>
 */
export class TokenMatch {
    public static get BEG_COMMENT_TOKEN(): RegExp { return /\/\*/; }
    public static get END_COMMENT_TOKEN(): RegExp { return /\*\//; }

    public static get SELECTOR(): RegExp {
        return /<selector>[\s\S]*?<\/selector>/g;
    }

    public static get SELECTOR_REPLACE(): RegExp {
        return /<\/?selector>/g;
    }

    public static get DESC(): RegExp {
        return /<desc>[\s\S]*?<\/desc>/g;
    }

    public static get DESC_REPLACE(): RegExp {
        return /<\/?desc>/g;
    }

    public static get CODE(): RegExp {
        return /<code>[\s\S]*?<\/code>/g;
    }

    public static get CODE_REPLACE(): RegExp {
        return /<\/?code>/g;
    }
}
