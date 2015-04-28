/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\es_ch4.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./lib/khepri-lambda"], (function(require, exports, lambda) {
    "use strict";
    var test4, one = lambda["one"],
        two = lambda["two"],
        equals = lambda["equals"],
        mult = lambda["mult"];
    (test4 = ({}));
    (test4.mult_one_two_is_two = equals(mult(one)(two))(two));
    (exports["test4"] = test4);
}));