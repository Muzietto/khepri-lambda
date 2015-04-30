/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\lib\khepri-lambda.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var id, apply, self_apply, constant, pair, first, second, _true, _false, cond, not, and, or, first3,
            second3, third3, succ, pred, is_zero, zero, one, two, three, four, five, six, seven, eight, nine,
            ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
            count, equals, add, add2, mult, recursive;
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
    (constant = (function(c) {
        return (function() {
            return c;
        });
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
    (succ = (function(n) {
        return (function(w) {
            return w(second)(n);
        });
    }));
    (pred = (function(n) {
        var x = zero,
            y = n(second),
            w = is_zero(n);
        return w(x)(y);
    }));
    (zero = id);
    (is_zero = (function(n) {
        return n(first);
    }));
    (count = (function(n) {
        var y, w;
        return ((n(first) === first) ? 0 : (1 + count(((y = n(second)), (w = n(first)), w(id)(y)))));
    }));
    (equals = (function(a) {
        return (function(b) {
            var y, w, y0, w0;
            return (((a(first) === first) ? 0 : (1 + count(((y = a(second)), (w = a(first)), w(id)(
                y))))) === ((b(first) === first) ? 0 : (1 + count(((y0 = b(second)), (w0 = b(
                first)), w0(id)(y0))))));
        });
    }));
    (add2 = (function(f) {
        return (function(x) {
            return (function(y) {
                var y0, w;
                return y(first)(x)(f(f)((function(w) {
                    return w(second)(x);
                }))(((y0 = y(second)), (w = y(first)), w(id)(y0))));
            });
        });
    }));
    (add = (function(x) {
        return (function(y) {
            var y0, w;
            return y(first)(x)(add2(add2)((function(w) {
                return w(second)(x);
            }))(((y0 = y(second)), (w = y(first)), w(id)(y0))));
        });
    }));
    (mult = (function(x) {
        return (function(y) {
            var y0, w;
            return y(first)(id)(add(x(mult(x(((y0 = y(second)), (w = y(first)), w(id)(y0)))))));
        });
    }));
    (one = (function(w) {
        return w(second)(id);
    }));
    (two = (function(w) {
        return w(second)(one);
    }));
    (three = (function(w) {
        return w(second)(two);
    }));
    (four = (function(w) {
        return w(second)(three);
    }));
    (five = (function(w) {
        return w(second)(four);
    }));
    (six = (function(w) {
        return w(second)(five);
    }));
    (seven = (function(w) {
        return w(second)(six);
    }));
    (eight = (function(w) {
        return w(second)(seven);
    }));
    (nine = (function(w) {
        return w(second)(eight);
    }));
    (ten = (function(w) {
        return w(second)(nine);
    }));
    (eleven = (function(w) {
        return w(second)(ten);
    }));
    (twelve = (function(w) {
        return w(second)(eleven);
    }));
    (thirteen = (function(w) {
        return w(second)(twelve);
    }));
    (fourteen = (function(w) {
        return w(second)(thirteen);
    }));
    (fifteen = (function(w) {
        return w(second)(fourteen);
    }));
    (sixteen = (function(w) {
        return w(second)(fifteen);
    }));
    (seventeen = (function(w) {
        return w(second)(sixteen);
    }));
    (eighteen = (function(w) {
        return w(second)(seventeen);
    }));
    (nineteen = (function(w) {
        return w(second)(eighteen);
    }));
    (twenty = (function(w) {
        return w(second)(nineteen);
    }));
    (exports["id"] = id);
    (exports["apply"] = apply);
    (exports["self_apply"] = self_apply);
    (exports["constant"] = constant);
    (exports["pair"] = pair);
    (exports["first"] = first);
    (exports["second"] = second);
    (exports["_true"] = _true);
    (exports["_false"] = _false);
    (exports["cond"] = cond);
    (exports["not"] = not);
    (exports["and"] = and);
    (exports["or"] = or);
    (exports["first3"] = first3);
    (exports["second3"] = second3);
    (exports["third3"] = third3);
    (exports["succ"] = succ);
    (exports["pred"] = pred);
    (exports["is_zero"] = is_zero);
    (exports["zero"] = zero);
    (exports["one"] = one);
    (exports["two"] = two);
    (exports["three"] = three);
    (exports["four"] = four);
    (exports["five"] = five);
    (exports["six"] = six);
    (exports["seven"] = seven);
    (exports["eight"] = eight);
    (exports["nine"] = nine);
    (exports["ten"] = ten);
    (exports["eleven"] = eleven);
    (exports["twelve"] = twelve);
    (exports["thirteen"] = thirteen);
    (exports["fourteen"] = fourteen);
    (exports["fifteen"] = fifteen);
    (exports["sixteen"] = sixteen);
    (exports["seventeen"] = seventeen);
    (exports["eighteen"] = eighteen);
    (exports["nineteen"] = nineteen);
    (exports["twenty"] = twenty);
    (exports["count"] = count);
    (exports["equals"] = equals);
    (exports["add"] = add);
    (exports["add2"] = add2);
    (exports["mult"] = mult);
    (exports["recursive"] = recursive);
}));