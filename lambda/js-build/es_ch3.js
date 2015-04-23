/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\es_ch3.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./lib/khepri-lambda"], (function(require, exports, lambda) {
    "use strict";
    var test3, _true = lambda["_true"],
        _false = lambda["_false"],
        not = lambda["not"],
        and = lambda["and"],
        or = lambda["or"];
    (test3 = ({}));
    (test3.not_true = (not(_true) === _false));
    (test3.not_false = (not(_false) === _true));
    (test3.true_and_true = (and(_true)(_true) === _true));
    (test3.false_and_true = (and(_false)(_true) === _false));
    (test3.false_or_false = (or(_false)(_false) === _false));
    (test3.true_or_false = (or(_true)(_false) === _true));
    (exports["test3"] = test3);
}));