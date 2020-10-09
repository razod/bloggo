"use strict";
exports.__esModule = true;
exports.hexToRgb = exports.colors = void 0;
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
exports.hexToRgb = hexToRgb;
function colors(color) {
    var rgb = hexToRgb(color);
    // let color_full = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
    var color_light = "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.3)";
    return "\n  <style>\n    h1 {\n      color: " + color + "\n    }\n    .post h2 {\n      color: " + color + ";\n      opacity:0.8;\n      transition: opacity 0.2s ease;\n    }\n    .post h2:hover {\n      opacity:1;\n    }\n\n    /* svg.body path, svg.body{\n      fill: " + color_light + "!important;\n    } */\n\n    img.author_pfp {\n      border: 10px solid " + color_light + ";\n      transition: border 0.2s ease-in;\n      cursor: pointer;\n    }\n\n    img.author_pfp:hover {\n      border: 10px solid rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.5)\n    }\n\n    .author_info {\n      background: rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.1)\n    }\n\n    .author_info p {\n      color: rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.57)\n    }\n\n    h1.sep::after {\n      content:' ';\n      display:block;\n      border:5px solid rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.8);\n      border-radius:4px;\n      -webkit-border-radius:4px;\n      -moz-border-radius:4px;\n      box-shadow:inset 0 1px 1px rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.57);\n      -webkit-box-shadow:inset 0 1px 1px rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.57);\n      -moz-box-shadow:inset 0 1px 1px rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.57);\n      width:5vw;\n      margin:1% auto;\n    }\n\n    h1.sep {\n      color: rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.8);\n      font-size:400%;\n      font-weight:800;\n    }\n  </style>\n  ";
}
exports.colors = colors;
