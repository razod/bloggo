"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var dotenv = require("dotenv");
var db = require("quick.db");
var showdown = require("showdown");
var timestamp_1 = require("./timestamp");
var author_1 = require("./author");
dotenv.config();
var router = express.Router();
exports.router = router;
router.post('/publish', function (req, res) {
    var body = req.body;
    var match = false;
    if (body.password === process.env.PASSWORD)
        match = true;
    if (match) {
        if (db.get('posts') == null || db.get('posts') == undefined)
            db.set('posts', []);
        var id = db.get('posts').length++;
        var conv = new showdown.Converter();
        var html = conv.makeHtml(body.content);
        db.push('posts', {
            title: body.title,
            markdown: body.content,
            html: html,
            timestamp: timestamp_1.generateTimestamp(),
            id: id
        });
        res.redirect("/posts/" + id);
    }
    else {
        res.render('/../views/publish', {
            title: body.title,
            markdown: body.content
        });
    }
});
router.get('/publish', function (req, res) {
    res.render(__dirname + '/../views/publish');
});
router.get('/posts/:id', function (req, res) {
    var all = db.get('posts');
    var post = all.find(function (obj) {
        if (obj.id === Number(req.params.id))
            return obj;
    });
    var author = author_1.getAuthorInfo();
    if (post) {
        res.render(__dirname + '/../views/post', {
            title: post.title,
            timestamp: post.timestamp,
            html: post.html,
            content: post.html,
            author: author
        });
    }
    else {
        res.render(__dirname + '/../views/error', {
            error_type: '404',
            error_message: 'We couldn\'t find that blog post!'
        });
    }
});
router.get('/api/author', function (req, res) {
    var author = author_1.getAuthorInfo();
    res.json({
        error: undefined,
        data: author
    });
});
router.get('/api/posts', function (req, res) {
    res.json({
        error: undefined,
        data: db.all()
    });
});
