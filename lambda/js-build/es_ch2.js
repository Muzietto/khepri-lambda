/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\es_ch2.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./lib/khepri-lambda"], (function(require, exports, lambda) {
    "use strict";
    var idd, self_self, double, test2, triplet, first_of_3, second_of_3, third_of_3, id = lambda["id"],
        apply = lambda["apply"],
        self_apply = lambda["self_apply"],
        second = lambda["second"],
        pair = lambda["pair"];
    (test2 = ({}));
    (idd = id(id));
    (double = (function(x) {
        return (2 * x);
    }));
    var dodici = id(12);
    (test2._es23a = (apply(apply(id))(12) === dodici));
    (test2._es23b = (pair(double)(6)(id) === apply(double)(6)));
    (test2._es23c = (self_apply(self_apply(second))(12) === dodici));
    (triplet = (function(x) {
        return (function(y) {
            return (function(z) {
                return (function(w) {
                    return w(x)(y)(z);
                });
            });
        });
    }));
    (first_of_3 = (function(x) {
        return (function(y) {
            return (function(z) {
                return x;
            });
        });
    }));
    (second_of_3 = (function(x) {
        return (function(y) {
            return (function(z) {
                return y;
            });
        });
    }));
    (third_of_3 = (function(x) {
        return (function(y) {
            return (function(z) {
                return z;
            });
        });
    }));
    (test2._es24a = (12 === dodici));
    (test2._es24b = (12 === dodici));
    (test2._es24c = (12 === dodici));
    (exports["idd"] = idd);
    (exports["self_self"] = self_self);
    (exports["double"] = double);
    (exports["test2"] = test2);
    (exports["triplet"] = triplet);
    (exports["first_of_3"] = first_of_3);
    (exports["second_of_3"] = second_of_3);
    (exports["third_of_3"] = third_of_3);
}));