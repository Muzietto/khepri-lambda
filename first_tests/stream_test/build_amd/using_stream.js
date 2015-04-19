/*
 * THIS FILE IS AUTO GENERATED FROM 'source\using_stream.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./lib/stream"], (function(require, exports, stream) {
    "use strict";
    var foldl = stream["foldl"],
        reverse = stream["reverse"],
        cons = stream["cons"],
        __div = (function(x, y) {
            return (x / y);
        }),
        s = stream.from([2, 3, 4]);
    console.log(foldl(__div, 120, cons(1, reverse(s))));
}));