/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\es_ch4.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./lib/khepri-lambda"], (function(require, exports, lambda) {
    "use strict";
    var test4, one = lambda["one"],
        two = lambda["two"],
        three = lambda["three"],
        five = lambda["five"],
        ten = lambda["ten"],
        equals = lambda["equals"],
        add = lambda["add"],
        mult = lambda["mult"],
        subtract = lambda["subtract"];
    (test4 = ({}));
    (test4.add_one_two_is_three = equals(add(one)(two))(three));
    (test4.subtract_five_two_is_three = equals(subtract(five)(two))(three));
    (test4.mult_two__five_is_ten = equals(mult(two)(five))(ten));
    (exports["test4"] = test4);
}));