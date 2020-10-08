"use strict";
exports.__esModule = true;
exports.getAuthorInfo = void 0;
var fs = require("fs");
function getAuthorInfo() {
    var raw = fs.readFileSync(__dirname + '/../settings.json');
    var data = JSON.parse(raw);
    return data.author;
}
exports.getAuthorInfo = getAuthorInfo;
