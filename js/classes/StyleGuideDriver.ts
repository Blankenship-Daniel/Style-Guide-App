/// <reference path="../../typings/node/node.d.ts" />

import {TokenMatch} from './TokenMatch';

export module StyleGuideDriverNamespace {

    /**
     * The main driver class of the styleguide app.
     */
    export class StyleGuideDriver {

        /**
         * Reads the file line by line.
         * @param  {string} fileName the source file to be parsed.
         */
        private parseFile(fileName: string) {
            let insideComment = false;

            // read the file in one line at a time
            let lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(fileName)
            });

            lineReader.on('line', function(line) {

                if (line.match(TokenMatch.BEG_COMMENT_TOKEN)) {
                    insideComment = true;
                }

                if (insideComment) {
                    console.log('> ' + line);
                }

                if (line.match(TokenMatch.END_COMMENT_TOKEN)) {
                    insideComment = false;
                }
            });
        }

        /**
         * The main driver for the StyleGuideDriver class.
         * @param  {string} fileName the source file to be parsed.
         */
        public run(fileName: string) {

            this.parseFile(fileName);
        }
    }
}
