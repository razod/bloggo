"use strict";
exports.__esModule = true;
exports.getHostInfo = void 0;
var fs = require("fs");
function getHostInfo() {
    var raw = fs.readFileSync(__dirname + '/../settings.json');
    var data = JSON.parse(raw);
    return data.host;
}
exports.getHostInfo = getHostInfo;
