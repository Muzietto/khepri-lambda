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
    var _count = (function(n) {
        return ((is_zero(n) === _true) ? 0 : (1 + _count(pred(n))));
    });
    (test3.trying_count = (((is_zero(one) === _true) ? 0 : (1 + _count(pred(one)))) === (1 + ((is_zero(zero) ===
        _true) ? 0 : (1 + _count(pred(zero)))))));
    var a = one(succ(zero));
    (test3.trying_equals = (function(b) {
        return (((is_zero(a) === _true) ? 0 : (1 + _count(pred(a)))) === ((is_zero(b) === _true) ? 0 :
            (1 + _count(pred(b)))));
    }));
    (test3.trying_not_equals = (!(((is_zero(one) === _true) ? 0 : (1 + _count(pred(one)))) === ((is_zero(ten) ===
        _true) ? 0 : (1 + _count(pred(ten)))))));
    var a0 = succ(succ(zero));
    (test3.succ_succ_zero_is_two = (((is_zero(a0) === _true) ? 0 : (1 + _count(pred(a0)))) === ((is_zero(two) ===
        _true) ? 0 : (1 + _count(pred(two))))));
    var a1 = pred(one);
    (test3.pred_one_is_zero = (((is_zero(a1) === _true) ? 0 : (1 + _count(pred(a1)))) === ((is_zero(zero) ===
        _true) ? 0 : (1 + _count(pred(zero))))));
    var a2 = pred(zero);
    (test3.pred_zero_is_zero = (((is_zero(a2) === _true) ? 0 : (1 + _count(pred(a2)))) === ((is_zero(zero) ===
        _true) ? 0 : (1 + _count(pred(zero))))));
    var a3;
    (test3.pred_one_is_not_two = (!((a3 = pred(one)), (((is_zero(a3) === _true) ? 0 : (1 + _count(pred(a3)))) ===
        ((is_zero(two) === _true) ? 0 : (1 + _count(pred(two))))))));
    var a4 = pred(pred(three));
    (test3.pred_pred_three_is_one = (((is_zero(a4) === _true) ? 0 : (1 + _count(pred(a4)))) === ((is_zero(one) ===
        _true) ? 0 : (1 + _count(pred(one))))));
    var a5 = one(pred(pred(three)));
    (test3.one_is_pred_pred_three = (function(b) {
        return (((is_zero(a5) === _true) ? 0 : (1 + _count(pred(a5)))) === ((is_zero(b) === _true) ? 0 :
            (1 + _count(pred(b)))));
    }));
    (test3.is_zero_zero_is_true = (is_zero(zero) === _true));
    (test3.is_zero_ten_is_false = (is_zero(ten) === _false));
    (test3.es31_implies_false_false_is_true = (_false(_true)(not(_false)) === _true));
    (test3.es31_implies_false_true_is_true = (_true(_true)(not(_false)) === _true));
    (test3.es31_implies_true_false_is_false = (_false(_true)(not(_true)) === _false));
    (test3.es31_implies_true_true_is_true = (_true(_true)(not(_true)) === _true));
    (test3.es33a_false_false = (and(not(_false))(not(_false)) === not(or(_false)(_false))));
    (test3.es33a_true_false = (and(not(_true))(not(_false)) === not(or(_true)(_false))));
    (test3.es33a_false_true = (and(not(_false))(not(_true)) === not(or(_false)(_true))));
    (test3.es33a_true_true = (and(not(_true))(not(_true)) === not(or(_true)(_true))));
    var x, y;
    (test3.es33b_false_false = (_false(_true)(not(_false)) === ((x = not(_false)), (y = not(_false)), y(_true)(
        not(x)))));
    var x0, y0;
    (test3.es33b_true_false = (_false(_true)(not(_true)) === ((x0 = not(_false)), (y0 = not(_true)), y0(_true)(
        not(x0)))));
    var x1, y1;
    (test3.es33b_false_true = (_true(_true)(not(_false)) === ((x1 = not(_true)), (y1 = not(_false)), y1(_true)(
        not(x1)))));
    var x2, y2;
    (test3.es33b_true_true = (_true(_true)(not(_true)) === ((x2 = not(_true)), (y2 = not(_true)), y2(_true)(not(
        x2)))));
    (exports["test3"] = test3);
}));