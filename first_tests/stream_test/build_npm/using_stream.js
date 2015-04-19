"use strict";
var stream = require("./lib/stream"),
    foldl = stream["foldl"],
    reverse = stream["reverse"],
    cons = stream["cons"],
    __div = (function(x, y) {
        return (x / y);
    }),
    s = stream.from([2, 3, 4]);
console.log(foldl(__div, 120, reverse(cons(1)(s))));