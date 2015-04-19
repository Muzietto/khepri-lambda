/*
 * THIS FILE IS AUTO GENERATED FROM 'original_source\using_stream.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./lib/stream"], (function(require, exports, stream) {
    "use strict";
    var __plus_lt = stream["+<"],
        foldl = stream["foldl"],
        reverse = stream["reverse"],
        __div = (function(x, y) {
            return (x / y);
        }),
        s = stream.from([2, 3, 4]);
    console.log(foldl(__div, 120, reverse(__plus_lt(1, s))));
}));