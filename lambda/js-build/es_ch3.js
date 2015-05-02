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
        ten = lambda["ten"],
        twelve = lambda["twelve"],
        count = lambda["count"],
        equals = lambda["equals"];
    (test3 = ({}));
    (test3.not_true_is_false = (not(_true) === _false));
    (test3.not_false_is_true = (not(_false) === _true));
    (test3.true_is_not_false = (_true === not(_false)));
    (test3.true_and_true_is_true = (and(_true)(_true) === _true));
    (test3.false_and_true_is_false = (and(_false)(_true) === _false));
    (test3.false_or_false_is_false = (or(_false)(_false) === _false));
    (test3.true_or_false_is_true = (or(_true)(_false) === _true));
    (test3.trying_count = (count(one) === (1 + count(zero))));
    (test3.trying_equals = equals(one(succ(zero))));
    (test3.trying_not_equals = (!equals(one)(ten)));
    (test3.succ_succ_zero_is_two = equals(succ(succ(zero)))(two));
    (test3.pred_one_is_zero = equals(pred(one))(zero));
    (test3.pred_zero_is_zero = equals(pred(zero))(zero));
    (test3.pred_one_is_not_two = (!equals(pred(one))(two)));
    (test3.pred_pred_three_is_one = equals(pred(pred(three)))(one));
    (test3.one_is_pred_pred_three = equals(one(pred(pred(three)))));
    (test3.is_zero_zero_is_true = (is_zero(zero) === _true));
    (test3.is_zero_ten_is_false = (is_zero(ten) === _false));
    (test3.es31_implies_false_false_is_true = (_false(_true)(not(_false)) === _true));
    (test3.es31_implies_false_true_is_true = (_true(_true)(not(_false)) === _true));
    (test3.es31_implies_true_false_is_false = (_false(_true)(not(_true)) === _false));
    (test3.es31_implies_true_true_is_true = (_true(_true)(not(_true)) === _true));
    (test3.es3e_equiv_false_false_is_true = (_false(_false)(not(_false)) === _true));
    (test3.es3e_equiv_false_true_is_true = (_false(_true)(not(_true)) === _false));
    (test3.es3e_equiv_true_false_is_false = (_true(_false)(not(_false)) === _false));
    (test3.es3e_equiv_true_true_is_true = (_true(_true)(not(_true)) === _true));
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
    (test3.es33c_false = (not(_false) === not(not(not(_false)))));
    (test3.es33c_true = (not(_true) === not(not(not(_true)))));
    (test3.es33e_false_false = (_false(_false)(not(_false)) === and(_false(_true)(not(_false)))(_false(_true)(
        not(_false)))));
    (test3.es33e_true_false = (_true(_false)(not(_false)) === and(_false(_true)(not(_true)))(_true(_true)(not(
        _false)))));
    (test3.es33e_false_true = (_false(_true)(not(_true)) === and(_true(_true)(not(_false)))(_false(_true)(not(
        _true)))));
    (test3.es33e_true_true = (_true(_true)(not(_true)) === and(_true(_true)(not(_true)))(_true(_true)(not(_true)))));
    (test3.es33d_false_false = (_false(_true)(not(_false)) === not(and(_false(not(_false))))));
    (test3.es33d_true_false = (_false(_true)(not(_true)) === not(and(_true(not(_false))))));
    (test3.es33d_false_true = (_true(_true)(not(_false)) === not(and(_false(not(_true))))));
    (test3.es33d_true_true = (_true(_true)(not(_true)) === not(and(_true(not(_true))))));
    (test3.es34_1 = (count(succ(pred(one))) === count(pred(succ(one)))));
    (test3.es34_2 = (count(succ(pred(two))) === count(pred(succ(two)))));
    (test3.es34_3 = (count(succ(pred(three))) === count(pred(succ(three)))));
    (test3.es34_12a = (count(succ(pred(succ(pred(twelve))))) === count(pred(succ(pred(succ(twelve)))))));
    (test3.es34_12b = equals(succ(succ(pred(pred(twelve)))), pred(pred(succ(succ(twelve))))));
    (exports["test3"] = test3);
}));