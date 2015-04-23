/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\lib\khepri-lambda.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var id, apply, self_apply, pair, first, second, _true, _false, cond, not, and, or;
    (id = (function(x) {
        return x;
    }));
    (apply = (function(x) {
        return (function(y) {
            return x(y);
        });
    }));
    (self_apply = (function(s) {
        return s(s);
    }));
    (pair = (function(x) {
        return (function(y) {
            return (function(w) {
                return w(x)(y);
            });
        });
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
    (_true = first);
    (_false = second);
    (cond = pair);
    (not = (function(x) {
        return x(second)(first);
    }));
    (and = (function(x) {
        return (function(y) {
            return x(y)(second);
        });
    }));
    (or = (function(x) {
        return (function(y) {
            return x(first)(y);
        });
    }));
    (exports["id"] = id);
    (exports["apply"] = apply);
    (exports["self_apply"] = self_apply);
    (exports["pair"] = pair);
    (exports["first"] = first);
    (exports["second"] = second);
    (exports["_true"] = _true);
    (exports["_false"] = _false);
    (exports["cond"] = cond);
    (exports["not"] = not);
    (exports["and"] = and);
    (exports["or"] = or);
}));