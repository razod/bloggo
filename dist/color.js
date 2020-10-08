"use strict";
exports.__esModule = true;
exports.colors = void 0;
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
function colors(color) {
    var rgb = hexToRgb(color);
    // let color_full = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
    var color_light = "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.2)";
    return "\n  <style>\n    h1 {\n      color: " + color + "\n    }\n    .post h2 {\n      color: " + color + ";\n      opacity:0.8;\n      transition: opacity 0.2s ease;\n    }\n    .post h2:hover {\n      opacity:1;\n    }\n\n    svg.body path, svg.body{\n      fill: " + color_light + "!important;\n    }\n  </style>\n  ";
}
exports.colors = colors;
