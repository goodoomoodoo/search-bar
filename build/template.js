"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = exports.template = function template(content, preloadedState) {
    return "\n    <!DOCTYPE html>\n    <html>\n        <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"title\" content=\"Server Side React App\">\n                <meta name=\"keywords\" content=\"HTML,CSS,JS,Reactjs,Nodejs\">\n                <meta name=\"author\" content=\"Arvin Lin\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>SEARCH</title>\n                <link rel=\"stylesheet\" href=\"style.css\">\n        </head>\n        <body>\n            <div id=\"root\">" + content + "</div>\n            <script>window.__INITIAL_STATE__=" + JSON.stringify(preloadedState) + "</script>\n            <script type=\"text/javascript\" src=\"bundle.js\"></script>\n        </body>\n    </html>\n    ";
};