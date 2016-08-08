/// <reference path="../../typings/node/node.d.ts" />

import {StyleGuideComment} from './StyleGuideComment';
import {StyleGuideCommentEntry} from './StyleGuideCommentEntry';
import {StyleGuideMatch} from './StyleGuideMatch';
import {StyleGuideSet} from './StyleGuideSet';

export module StyleGuideDriverNamespace {

    /**
     * The main driver class of the styleguide app.
     */
    export class StyleGuideDriver {
        private styleGuideMatchArray: StyleGuideMatch[];
        private styleGuideSet: StyleGuideSet;
        private begCommentToken: string;
        private endCommentToken: string;

        /**
         * Parses the config.json file, and stores the results in the in the
         *  styleGuideMatchArray. Stores the beginning and ending comment
         *  tokens in the this.begToken and this.endToken private variables.
         * @param  {Object} config the JSON config file.
         */
        private parseConfig(config: Object) {
            for (let prop in config) {
                if (prop === 'beg_token') {
                    this.begCommentToken = config[prop];
                } else if (prop === 'end_token') {
                    this.endCommentToken = config[prop];
                } else if (prop === 'sortable') {
                    this.styleGuideSet.setSortable(config[prop]);
                } else if (prop === 'entries') {
                    let cfg = config[prop];

                    for (let prp in cfg) {
                        let styleGuideCommentEntry
                            = new StyleGuideCommentEntry();
                        styleGuideCommentEntry.setName(cfg[prop]);
                        let c = cfg[prp];

                        let styleGuideMatch = new StyleGuideMatch();
                        for (let p in c) {
                            if (p === 'beg_token') {
                                styleGuideMatch.setBegToken(c[p]);
                            } else if (p === 'end_token') {
                                styleGuideMatch.setEndToken(c[p]);
                            }
                        }
                        this.styleGuideMatchArray.push(styleGuideMatch);
                    }
                }
            }

            for (let i = 0; i < this.styleGuideMatchArray.length; i++) {
                console.log(this.styleGuideMatchArray[i].toString());
            }
        }

        /**
         * Reads the file line by line. Stores each comment match in the
         *  StyleGuideSet.
         * @param  {string} fileName the source file to be parsed.
         */
        private parseFile(fileName: string) {
            // read the file in one line at a time
            let lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(fileName)
            });

            lineReader.on('line', function(line) {
                // 1. Find opening comment token match
                console.log('> ' + line);

                if (line.match(this.begCommentToken)) {
                    console.log('found opening comment match');
                }

                if (line.match(this.endCommentToken)) {
                    console.log('found closing comment match');
                }

                // 2. Find StyleGuideCommentEntry matches
                // 3. Find closing comment token match
                // 4. Store entries in StyleGuideComment object
                // 5. Store StyleGuideComment object in StyleGuideSet
            });
        }

        contructor() {
            this.begCommentToken = "";
            this.endCommentToken = "";
        }

        /**
         * The main driver for the StyleGuideDriver class.
         * @param  {Object} config   the JSON config file.
         * @param  {string} fileName the source file to be parsed.
         */
        public run(config: Object, fileName: string) {
            this.styleGuideSet = new StyleGuideSet();
            this.styleGuideMatchArray = new Array();

            this.parseConfig(config);
            this.parseFile(fileName);
        }
    }
}
