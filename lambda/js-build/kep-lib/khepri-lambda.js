/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\kep-lib\khepri-lambda.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var id, apply, id2, self_apply, first, second, pair;
    (id = (function(x) {
        return x;
    }));
    (apply = (function(x) {
        return (function(y) {
            return x(y);
        });
    }));
    (id2 = (function(x) {
        return x;
    }));
    (self_apply = (function(s) {
        return s(s);
    }));
    (first = (function(x) {
        return (function(y) {
            return x;
        });
    }));
    (second = (function(x) {
        return (function(y) {
            return y;
        });
    }));
    (pair = (function(x) {
        return (function(y) {
            return (function(w) {
                return w(x)(y);
            });
        });
    }));
    (exports["id"] = id);
    (exports["apply"] = apply);
    (exports["id2"] = id2);
    (exports["self_apply"] = self_apply);
    (exports["first"] = first);
    (exports["second"] = second);
    (exports["pair"] = pair);
}));