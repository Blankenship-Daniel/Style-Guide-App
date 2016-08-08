/// <reference path="../../typings/node/node.d.ts" />

import {TokenMatch} from './TokenMatch';
import {Comment} from './Comment';

export module StyleGuideDriverNamespace {

    /**
     * The main driver class of the styleguide app.
     */
    export class StyleGuideDriver {

        /**
         * Reads the file line by line. Parses out each comment and returns a
         *  JSON object containing each unique comment.
         * @param  {string}   fileName the source file to be parsed.
         * @param  {function} sorts the commentSet object by key.
         * @param  {function} allows parent function to access async JSON data.
         * @return {Object}   the sorted commentSet object.
         */
        private parseFile(fileName: string, sortObject: any, readJson: any) {
            let insideComment: boolean = false;
            let commentString: string = "";
            let commentSet: Object = {};
            let comment: Comment;

            let lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(fileName)
            });

            // read the file in one line at a time
            lineReader.on('line', function(line) {

                // if the given line matches /* create a new comment object
                //  and read each line until the end of comment (*/)
                if (line.match(TokenMatch.BEG_COMMENT_TOKEN)) {
                    comment = new Comment();
                    insideComment = true;
                }

                // store each line from the comment in the commentString
                if (insideComment) {
                    commentString += line + '\n';
                }

                // once the end of comment (*/) is reached, set the contents
                //  of the comment object.
                if (line.match(TokenMatch.END_COMMENT_TOKEN)) {
                    comment.setComment(commentString);

                    // store each comment in a commentSet object. This object
                    //  aims to only store unique comments. So, only comments
                    //  with unique keys will be stored in the commentSet
                    //  object
                    if (!(comment.getSelector() in commentSet) &&
                        comment.getSelector() != '') {
                        commentSet[comment.getSelector()] = comment;
                    }

                    commentString = "";
                    insideComment = false;
                }
            });

            lineReader.on('close', function() {
                readJson(sortObject(commentSet));
            });
        }

        /**
         * Sorts a given object by key.
         * @param  {Object} o the object to be sorted.
         * @return {Object}   the sorted object.
         */
        private sortObject(o: Object): Object {
            let sorted: Object = {};
            let a: string[] = new Array();

            for (let key in o) {
                if (o.hasOwnProperty(key)) {
                    a.push(key);
                }
            }

            a.sort();

            for (let i: number = 0; i < a.length; i++) {
                sorted[a[i]] = o[a[i]];
            }
            return sorted;
        }

        /**
         * The main driver for the StyleGuideDriver class.
         * @param  {string}   fileName the source file to be parsed.
         * @param  {function} retrieves JSON from the parseFile function.
         */
        public run(fileName: string, readJson: any) {
            this.parseFile(fileName, this.sortObject, readJson);
        }
    }
}
