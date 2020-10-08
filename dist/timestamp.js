"use strict";
exports.__esModule = true;
exports.generateTimestamp = exports.parseMonth = exports.parseDay = void 0;
function parseMonth(month) {
    var possible = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return possible[month];
}
exports.parseMonth = parseMonth;
function parseDay(day) {
    var possible = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return possible[day];
}
exports.parseDay = parseDay;
function generateTimestamp() {
    var date = new Date();
    var year = date.getFullYear();
    var month = parseMonth(date.getMonth());
    var day = parseDay(date.getDay());
    var dayInMonth = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return day + ", " + month + " " + dayInMonth + " " + year + " at " + hours + ":" + minutes;
}
exports.generateTimestamp = generateTimestamp;
