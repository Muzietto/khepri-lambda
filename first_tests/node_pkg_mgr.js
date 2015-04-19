/*
 * THIS FILE IS AUTO GENERATED FROM 'streams.kep'
 * DO NOT EDIT
*/
"use strict";
var stream, cons, first, rest, forEach, foldl, reverse, toArray, from, __plus_lt;
(stream = (function(val, f) {
    return ({
        "first": val,
        "rest": f
    });
}));
(cons = (function(val, s) {
    var f = (function() {
        return s;
    });
    return ({
        "first": val,
        "rest": f
    });
}));
(__plus_lt = cons);
(first = (function(__o) {
    var first0 = __o["first"];
    return first0;
}));
(rest = (function(__o) {
    var rest0 = __o["rest"];
    return rest0();
}));
(forEach = (function(f, s) {
    var y;
    for (var head = s;
        (!((y = head), (null === y)));
        (head = rest(head))) f(first(head));
}));
(foldl = (function(f, z, s) {
    var r = s;
    forEach((function(x) {
        (r = f(r, x));
    }), s);
    return r;
}));
(reverse = foldl.bind(null, (function(x, y) {
    var f = (function() {
        return x;
    });
    return ({
        "first": y,
        "rest": f
    });
}), null));
(toArray = foldl.bind(null, [].concat.bind([]), []));
var fromImpl = (function(arr, i, len) {
    var val, f;
    return ((i >= len) ? null : ((val = arr[i]), (f = fromImpl.bind(null, arr, (i + 1), len)), ({
        "first": val,
        "rest": f
    })));
});
(from = (function(arr) {
    var length = arr["length"],
        val, f;
    return ((0 >= length) ? null : ((val = arr[0]), (f = fromImpl.bind(null, arr, 1, length)), ({
        "first": val,
        "rest": f
    })));
}));
(exports["stream"] = stream);
(exports["cons"] = cons);
(exports["first"] = first);
(exports["rest"] = rest);
(exports["forEach"] = forEach);
(exports["foldl"] = foldl);
(exports["reverse"] = reverse);
(exports["toArray"] = toArray);
(exports["from"] = from);
(exports["+<"] = __plus_lt);