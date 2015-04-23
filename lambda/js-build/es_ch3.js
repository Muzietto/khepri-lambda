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
        or = lambda["or"],
        succ = lambda["succ"],
        pred = lambda["pred"],
        is_zero = lambda["is_zero"],
        zero = lambda["zero"],
        one = lambda["one"],
        two = lambda["two"],
        three = lambda["three"],
        ten = lambda["ten"];
    (test3 = ({}));
    (test3.not_true_is_false = (not(_true) === _false));
    (test3.not_false_is_true = (not(_false) === _true));
    (test3.true_is_not_false = (_true === not(_false)));
    (test3.true_and_true_is_true = (and(_true)(_true) === _true));
    (test3.false_and_true_is_false = (and(_false)(_true) === _false));
    (test3.false_or_false_is_false = (or(_false)(_false) === _false));
    (test3.true_or_false_is_true = (or(_true)(_false) === _true));
    (test3.succ_succ_zero_is_two = (succ(succ(zero)) === two));
    (test3.pred_one_is_zero = (pred(one) === zero));
    (test3.pred_zero_is_zero = (pred(zero) === zero));
    (test3.pred_one_is_not_two = (pred(one) === not(two)));
    (test3.pred_pred_three_is_one = (pred(pred(three)) === one));
    (test3.one_is_pred_pred_three = (one === pred(pred(three))));
    (test3.is_zero_zero_is_true = (is_zero(zero) === _true));
    (test3.is_zero_ten_is_false = (is_zero(ten) === _false));
    (exports["test3"] = test3);
}));