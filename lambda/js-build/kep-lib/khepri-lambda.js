/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\kep-lib\khepri-lambda.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var id, apply, self_apply, identity2, first, second;
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
    (identity2 = (function(x) {
        return x;
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
    (exports["id"] = id);
    (exports["apply"] = apply);
    (exports["self_apply"] = self_apply);
    (exports["identity2"] = identity2);
    (exports["first"] = first);
    (exports["second"] = second);
}));