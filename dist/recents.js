"use strict";
exports.__esModule = true;
exports.renderRecents = void 0;
var db = require("quick.db");
function renderRecents() {
    var posts = db.get('posts');
    var final = [];
    if (posts == undefined || posts == null || posts == [] || posts.length == 0)
        return [];
    else {
        for (var i = 0; i < db.all.length; i++) {
            final.push(posts[i]);
        }
    }
    return final;
}
exports.renderRecents = renderRecents;
