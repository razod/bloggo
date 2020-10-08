"use strict";
exports.__esModule = true;
var express = require("express");
var recents_1 = require("./recents");
var api_1 = require("./api");
var host_1 = require("./host");
var author_1 = require("./author");
var color_1 = require("./color");
var app = express();
app.use('/public', express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));
app.use(api_1.router);
app.set('view engine', 'hbs');
app.get('/', function (req, res) {
    res.render(__dirname + '/../views/index', { recents: recents_1.renderRecents(), author: author_1.getAuthorInfo(), colors: color_1.colors(host_1.getHostInfo().primary_color), color: color_1.colors(host_1.getHostInfo().primary_color) });
});
app.listen(host_1.getHostInfo().port, function (e) {
    if (e)
        throw e;
    console.log('Your blog is running!');
});
