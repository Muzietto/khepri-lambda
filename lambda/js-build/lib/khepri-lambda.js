/*
 * THIS FILE IS AUTO GENERATED FROM 'kep-source\lib\khepri-lambda.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var id, apply, self_apply, constant, pair, first, second, _true, _false, cond, not, and, or, first3,
            second3, third3, succ, pred, is_zero, zero, one, two, three, four, five, six, seven, eight, nine,
            ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
            count, equals, add, add2, mult, recursive, subtract;
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
    (zero = (function(f) {
        return (function(x) {
            return x;
        });
    }));
    (succ = (function(n) {
        return (function(f) {
            return (function(x) {
                return f(n(f)(x));
            });
        });
    }));
    (is_zero = (function(n) {
        return n((function() {
            return second;
        }))(first);
    }));
    (pred = (function(n) {
        return (function(F) {
            return (function(X) {
                return n((function(g) {
                    return (function(h) {
                        return h(g(F));
                    });
                }))((function() {
                    return X;
                }))(id);
            });
        });
    }));
    (add = (function(m) {
        return (function(n) {
            return (function(f) {
                return (function(x) {
                    return m(f)(n(f)(x));
                });
            });
        });
    }));
    (subtract = (function(m) {
        return (function(n) {
            return n(pred)(m);
        });
    }));
    (mult = (function(m) {
        return (function(n) {
            return (function(f) {
                return (function(x) {
                    return m(n(f))(x);
                });
            });
        });
    }));
    (count = (function(n) {
        return n((function(x) {
            return (x + 1);
        }))(0);
    }));
    (equals = (function(a) {
        return (function(b) {
            return (a((function(x) {
                return (x + 1);
            }))(0) === b((function(x) {
                return (x + 1);
            }))(0));
        });
    }));
    (recursive = (function(f) {
        var s = (function(s0) {
            return f(s0(s0));
        });
        return f(f(s(s)));
    }));
    (one = (function(f) {
        return (function(x) {
            return f(x);
        });
    }));
    (two = (function(f) {
        return (function(x) {
            return f(one(f)(x));
        });
    }));
    (three = (function(f) {
        return (function(x) {
            return f(f(one(f)(x)));
        });
    }));
    (four = (function(f) {
        return (function(x) {
            return f(three(f)(x));
        });
    }));
    (five = (function(f) {
        return (function(x) {
            return f(f(three(f)(x)));
        });
    }));
    (six = (function(f) {
        return (function(x) {
            return f(five(f)(x));
        });
    }));
    (seven = (function(f) {
        return (function(x) {
            return f(f(five(f)(x)));
        });
    }));
    (eight = (function(f) {
        return (function(x) {
            return f(seven(f)(x));
        });
    }));
    (nine = (function(f) {
        return (function(x) {
            return f(f(seven(f)(x)));
        });
    }));
    (ten = (function(f) {
        return (function(x) {
            return f(nine(f)(x));
        });
    }));
    (eleven = (function(f) {
        return (function(x) {
            return f(f(nine(f)(x)));
        });
    }));
    (twelve = (function(f) {
        return (function(x) {
            return f(eleven(f)(x));
        });
    }));
    (thirteen = (function(f) {
        return (function(x) {
            return f(f(eleven(f)(x)));
        });
    }));
    (fourteen = (function(f) {
        return (function(x) {
            return f(thirteen(f)(x));
        });
    }));
    (fifteen = (function(f) {
        return (function(x) {
            return f(f(thirteen(f)(x)));
        });
    }));
    (sixteen = (function(f) {
        return (function(x) {
            return f(fifteen(f)(x));
        });
    }));
    (seventeen = (function(f) {
        return (function(x) {
            return f(f(fifteen(f)(x)));
        });
    }));
    (eighteen = (function(f) {
        return (function(x) {
            return f(seventeen(f)(x));
        });
    }));
    (nineteen = (function(f) {
        return (function(x) {
            return f(f(seventeen(f)(x)));
        });
    }));
    (twenty = (function(f) {
        return (function(x) {
            return f(nineteen(f)(x));
        });
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
    (exports["subtract"] = subtract);
}));