(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8813], {
    9244: function(e, t, r) {
        var n, u, i, a, s, o, l, p, c, d, D, f, m, g, y, h, E, C, F, A, v, x, b, S, T, B, N, w, k, j, P, I, O, L, _, M, $, R, V, W, q, J, U, H, G, X, z, K, Q, Y, Z, ee, et, er, en, eu, ei, ea, es, eo, el, ep, ec, ed, eD, ef, em, eg, ey, eh, eE, eC, eF, eA, ev, ex, eb, eS, eT, eB, eN, ew, ek, ej, eP, eI, eO, eL, e_, eM, e$, eR, eV, eW;
        e.exports = (a = (i = (e,t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t),
        t.exports))((e,t)=>{
            var n = function(e) {
                return e && e.Math == Math && e
            };
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
                return this
            }() || Function("return this")()
        }
        ),
        s = i((e,t)=>{
            t.exports = function(e) {
                try {
                    return !!e()
                } catch {
                    return !0
                }
            }
        }
        ),
        o = i((e,t)=>{
            var r = s();
            t.exports = !r(function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            })
        }
        ),
        l = i((e,t)=>{
            var r = s();
            t.exports = !r(function() {
                var e = (function() {}
                ).bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            })
        }
        ),
        p = i((e,t)=>{
            var r = l()
              , n = Function.prototype.call;
            t.exports = r ? n.bind(n) : function() {
                return n.apply(n, arguments)
            }
        }
        ),
        c = i(e=>{
            var t = {}.propertyIsEnumerable
              , r = Object.getOwnPropertyDescriptor
              , n = r && !t.call({
                1: 2
            }, 1);
            e.f = n ? function(e) {
                var t = r(this, e);
                return !!t && t.enumerable
            }
            : t
        }
        ),
        d = i((e,t)=>{
            t.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }
        ),
        D = i((e,t)=>{
            var r = l()
              , n = Function.prototype
              , u = n.call
              , i = r && n.bind.bind(u, u);
            t.exports = r ? i : function(e) {
                return function() {
                    return u.apply(e, arguments)
                }
            }
        }
        ),
        f = i((e,t)=>{
            var r = D()
              , n = r({}.toString)
              , u = r("".slice);
            t.exports = function(e) {
                return u(n(e), 8, -1)
            }
        }
        ),
        m = i((e,t)=>{
            var r = D()
              , n = s()
              , u = f()
              , i = Object
              , a = r("".split);
            t.exports = n(function() {
                return !i("z").propertyIsEnumerable(0)
            }) ? function(e) {
                return "String" == u(e) ? a(e, "") : i(e)
            }
            : i
        }
        ),
        g = i((e,t)=>{
            t.exports = function(e) {
                return null == e
            }
        }
        ),
        y = i((e,t)=>{
            var r = g()
              , n = TypeError;
            t.exports = function(e) {
                if (r(e))
                    throw n("Can't call method on " + e);
                return e
            }
        }
        ),
        h = i((e,t)=>{
            var r = m()
              , n = y();
            t.exports = function(e) {
                return r(n(e))
            }
        }
        ),
        E = i((e,t)=>{
            var r = "object" == typeof document && document.all;
            t.exports = {
                all: r,
                IS_HTMLDDA: typeof r > "u" && void 0 !== r
            }
        }
        ),
        C = i((e,t)=>{
            var r = E()
              , n = r.all;
            t.exports = r.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === n
            }
            : function(e) {
                return "function" == typeof e
            }
        }
        ),
        F = i((e,t)=>{
            var r = C()
              , n = E()
              , u = n.all;
            t.exports = n.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : r(e) || e === u
            }
            : function(e) {
                return "object" == typeof e ? null !== e : r(e)
            }
        }
        ),
        A = i((e,t)=>{
            var r = a()
              , n = C();
            t.exports = function(e, t) {
                var u;
                return arguments.length < 2 ? n(u = r[e]) ? u : void 0 : r[e] && r[e][t]
            }
        }
        ),
        v = i((e,t)=>{
            var r = D();
            t.exports = r({}.isPrototypeOf)
        }
        ),
        x = i((e,t)=>{
            var r = A();
            t.exports = r("navigator", "userAgent") || ""
        }
        ),
        b = i((e,t)=>{
            var r, n, u = a(), i = x(), s = u.process, o = u.Deno, l = s && s.versions || o && o.version, p = l && l.v8;
            p && (n = (r = p.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !n && i && (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/)) && (n = +r[1]),
            t.exports = n
        }
        ),
        S = i((e,t)=>{
            var r = b()
              , n = s();
            t.exports = !!Object.getOwnPropertySymbols && !n(function() {
                var e = Symbol();
                return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
            })
        }
        ),
        T = i((e,t)=>{
            var r = S();
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
        ),
        B = i((e,t)=>{
            var r = A()
              , n = C()
              , u = v()
              , i = T()
              , a = Object;
            t.exports = i ? function(e) {
                return "symbol" == typeof e
            }
            : function(e) {
                var t = r("Symbol");
                return n(t) && u(t.prototype, a(e))
            }
        }
        ),
        N = i((e,t)=>{
            var r = String;
            t.exports = function(e) {
                try {
                    return r(e)
                } catch {
                    return "Object"
                }
            }
        }
        ),
        w = i((e,t)=>{
            var r = C()
              , n = N()
              , u = TypeError;
            t.exports = function(e) {
                if (r(e))
                    return e;
                throw u(n(e) + " is not a function")
            }
        }
        ),
        k = i((e,t)=>{
            var r = w()
              , n = g();
            t.exports = function(e, t) {
                var u = e[t];
                return n(u) ? void 0 : r(u)
            }
        }
        ),
        j = i((e,t)=>{
            var r = p()
              , n = C()
              , u = F()
              , i = TypeError;
            t.exports = function(e, t) {
                var a, s;
                if ("string" === t && n(a = e.toString) && !u(s = r(a, e)) || n(a = e.valueOf) && !u(s = r(a, e)) || "string" !== t && n(a = e.toString) && !u(s = r(a, e)))
                    return s;
                throw i("Can't convert object to primitive value")
            }
        }
        ),
        P = i((e,t)=>{
            t.exports = !1
        }
        ),
        I = i((e,t)=>{
            var r = a()
              , n = Object.defineProperty;
            t.exports = function(e, t) {
                try {
                    n(r, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch {
                    r[e] = t
                }
                return t
            }
        }
        ),
        O = i((e,t)=>{
            var r = a()
              , n = I()
              , u = "__core-js_shared__"
              , i = r[u] || n(u, {});
            t.exports = i
        }
        ),
        L = i((e,t)=>{
            var r = P()
              , n = O();
            (t.exports = function(e, t) {
                return n[e] || (n[e] = void 0 !== t ? t : {})
            }
            )("versions", []).push({
                version: "3.26.1",
                mode: r ? "pure" : "global",
                copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ),
        _ = i((e,t)=>{
            var r = y()
              , n = Object;
            t.exports = function(e) {
                return n(r(e))
            }
        }
        ),
        M = i((e,t)=>{
            var r = D()
              , n = _()
              , u = r({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(e, t) {
                return u(n(e), t)
            }
        }
        ),
        $ = i((e,t)=>{
            var r = D()
              , n = 0
              , u = Math.random()
              , i = r(1..toString);
            t.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++n + u, 36)
            }
        }
        ),
        R = i((e,t)=>{
            var r = a()
              , n = L()
              , u = M()
              , i = $()
              , s = S()
              , o = T()
              , l = n("wks")
              , p = r.Symbol
              , c = p && p.for
              , d = o ? p : p && p.withoutSetter || i;
            t.exports = function(e) {
                if (!u(l, e) || !(s || "string" == typeof l[e])) {
                    var t = "Symbol." + e;
                    s && u(p, e) ? l[e] = p[e] : o && c ? l[e] = c(t) : l[e] = d(t)
                }
                return l[e]
            }
        }
        ),
        V = i((e,t)=>{
            var r = p()
              , n = F()
              , u = B()
              , i = k()
              , a = j()
              , s = R()
              , o = TypeError
              , l = s("toPrimitive");
            t.exports = function(e, t) {
                if (!n(e) || u(e))
                    return e;
                var s, p = i(e, l);
                if (p) {
                    if (void 0 === t && (t = "default"),
                    !n(s = r(p, e, t)) || u(s))
                        return s;
                    throw o("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"),
                a(e, t)
            }
        }
        ),
        W = i((e,t)=>{
            var r = V()
              , n = B();
            t.exports = function(e) {
                var t = r(e, "string");
                return n(t) ? t : t + ""
            }
        }
        ),
        q = i((e,t)=>{
            var r = a()
              , n = F()
              , u = r.document
              , i = n(u) && n(u.createElement);
            t.exports = function(e) {
                return i ? u.createElement(e) : {}
            }
        }
        ),
        J = i((e,t)=>{
            var r = o()
              , n = s()
              , u = q();
            t.exports = !r && !n(function() {
                return 7 != Object.defineProperty(u("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        ),
        U = i(e=>{
            var t = o()
              , r = p()
              , n = c()
              , u = d()
              , i = h()
              , a = W()
              , s = M()
              , l = J()
              , D = Object.getOwnPropertyDescriptor;
            e.f = t ? D : function(e, t) {
                if (e = i(e),
                t = a(t),
                l)
                    try {
                        return D(e, t)
                    } catch {}
                if (s(e, t))
                    return u(!r(n.f, e, t), e[t])
            }
        }
        ),
        H = i((e,t)=>{
            var r = o()
              , n = s();
            t.exports = r && n(function() {
                return 42 != Object.defineProperty(function() {}, "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            })
        }
        ),
        G = i((e,t)=>{
            var r = F()
              , n = String
              , u = TypeError;
            t.exports = function(e) {
                if (r(e))
                    return e;
                throw u(n(e) + " is not an object")
            }
        }
        ),
        X = i(e=>{
            var t = o()
              , r = J()
              , n = H()
              , u = G()
              , i = W()
              , a = TypeError
              , s = Object.defineProperty
              , l = Object.getOwnPropertyDescriptor
              , p = "enumerable"
              , c = "configurable"
              , d = "writable";
            e.f = t ? n ? function(e, t, r) {
                if (u(e),
                t = i(t),
                u(r),
                "function" == typeof e && "prototype" === t && "value"in r && d in r && !r[d]) {
                    var n = l(e, t);
                    n && n[d] && (e[t] = r.value,
                    r = {
                        configurable: c in r ? r[c] : n[c],
                        enumerable: p in r ? r[p] : n[p],
                        writable: !1
                    })
                }
                return s(e, t, r)
            }
            : s : function(e, t, n) {
                if (u(e),
                t = i(t),
                u(n),
                r)
                    try {
                        return s(e, t, n)
                    } catch {}
                if ("get"in n || "set"in n)
                    throw a("Accessors not supported");
                return "value"in n && (e[t] = n.value),
                e
            }
        }
        ),
        z = i((e,t)=>{
            var r = o()
              , n = X()
              , u = d();
            t.exports = r ? function(e, t, r) {
                return n.f(e, t, u(1, r))
            }
            : function(e, t, r) {
                return e[t] = r,
                e
            }
        }
        ),
        K = i((e,t)=>{
            var r = o()
              , n = M()
              , u = Function.prototype
              , i = r && Object.getOwnPropertyDescriptor
              , a = n(u, "name")
              , s = a && (!r || r && i(u, "name").configurable);
            t.exports = {
                EXISTS: a,
                PROPER: a && "something" === (function() {}
                ).name,
                CONFIGURABLE: s
            }
        }
        ),
        Q = i((e,t)=>{
            var r = D()
              , n = C()
              , u = O()
              , i = r(Function.toString);
            n(u.inspectSource) || (u.inspectSource = function(e) {
                return i(e)
            }
            ),
            t.exports = u.inspectSource
        }
        ),
        Y = i((e,t)=>{
            var r = a()
              , n = C()
              , u = r.WeakMap;
            t.exports = n(u) && /native code/.test(String(u))
        }
        ),
        Z = i((e,t)=>{
            var r = L()
              , n = $()
              , u = r("keys");
            t.exports = function(e) {
                return u[e] || (u[e] = n(e))
            }
        }
        ),
        ee = i((e,t)=>{
            t.exports = {}
        }
        ),
        et = i((e,t)=>{
            var r, n, u, i, s, o = Y(), l = a(), p = F(), c = z(), d = M(), D = O(), f = Z(), m = ee(), g = "Object already initialized", y = l.TypeError, h = l.WeakMap;
            o || D.state ? ((r = D.state || (D.state = new h)).get = r.get,
            r.has = r.has,
            r.set = r.set,
            u = function(e, t) {
                if (r.has(e))
                    throw y(g);
                return t.facade = e,
                r.set(e, t),
                t
            }
            ,
            i = function(e) {
                return r.get(e) || {}
            }
            ,
            s = function(e) {
                return r.has(e)
            }
            ) : (m[n = f("state")] = !0,
            u = function(e, t) {
                if (d(e, n))
                    throw y(g);
                return t.facade = e,
                c(e, n, t),
                t
            }
            ,
            i = function(e) {
                return d(e, n) ? e[n] : {}
            }
            ,
            s = function(e) {
                return d(e, n)
            }
            ),
            t.exports = {
                set: u,
                get: i,
                has: s,
                enforce: function(e) {
                    return s(e) ? i(e) : u(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var r;
                        if (!p(t) || (r = i(t)).type !== e)
                            throw y("Incompatible receiver, " + e + " required");
                        return r
                    }
                }
            }
        }
        ),
        er = i((e,t)=>{
            var r = s()
              , n = C()
              , u = M()
              , i = o()
              , a = K().CONFIGURABLE
              , l = Q()
              , p = et()
              , c = p.enforce
              , d = p.get
              , D = Object.defineProperty
              , f = i && !r(function() {
                return 8 !== D(function() {}, "length", {
                    value: 8
                }).length
            })
              , m = String(String).split("String")
              , g = t.exports = function(e, t, r) {
                "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                r && r.getter && (t = "get " + t),
                r && r.setter && (t = "set " + t),
                (!u(e, "name") || a && e.name !== t) && (i ? D(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t),
                f && r && u(r, "arity") && e.length !== r.arity && D(e, "length", {
                    value: r.arity
                });
                try {
                    r && u(r, "constructor") && r.constructor ? i && D(e, "prototype", {
                        writable: !1
                    }) : e.prototype && (e.prototype = void 0)
                } catch {}
                var n = c(e);
                return u(n, "source") || (n.source = m.join("string" == typeof t ? t : "")),
                e
            }
            ;
            Function.prototype.toString = g(function() {
                return n(this) && d(this).source || l(this)
            }, "toString")
        }
        ),
        en = i((e,t)=>{
            var r = C()
              , n = X()
              , u = er()
              , i = I();
            t.exports = function(e, t, a, s) {
                s || (s = {});
                var o = s.enumerable
                  , l = void 0 !== s.name ? s.name : t;
                if (r(a) && u(a, l, s),
                s.global)
                    o ? e[t] = a : i(t, a);
                else {
                    try {
                        s.unsafe ? e[t] && (o = !0) : delete e[t]
                    } catch {}
                    o ? e[t] = a : n.f(e, t, {
                        value: a,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        }
        ),
        eu = i((e,t)=>{
            var r = Math.ceil
              , n = Math.floor;
            t.exports = Math.trunc || function(e) {
                var t = +e;
                return (t > 0 ? n : r)(t)
            }
        }
        ),
        ei = i((e,t)=>{
            var r = eu();
            t.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : r(t)
            }
        }
        ),
        ea = i((e,t)=>{
            var r = ei()
              , n = Math.max
              , u = Math.min;
            t.exports = function(e, t) {
                var i = r(e);
                return i < 0 ? n(i + t, 0) : u(i, t)
            }
        }
        ),
        es = i((e,t)=>{
            var r = ei()
              , n = Math.min;
            t.exports = function(e) {
                return e > 0 ? n(r(e), 9007199254740991) : 0
            }
        }
        ),
        eo = i((e,t)=>{
            var r = es();
            t.exports = function(e) {
                return r(e.length)
            }
        }
        ),
        el = i((e,t)=>{
            var r = h()
              , n = ea()
              , u = eo()
              , i = function(e) {
                return function(t, i, a) {
                    var s, o = r(t), l = u(o), p = n(a, l);
                    if (e && i != i) {
                        for (; l > p; )
                            if ((s = o[p++]) != s)
                                return !0
                    } else
                        for (; l > p; p++)
                            if ((e || p in o) && o[p] === i)
                                return e || p || 0;
                    return !e && -1
                }
            };
            t.exports = {
                includes: i(!0),
                indexOf: i(!1)
            }
        }
        ),
        ep = i((e,t)=>{
            var r = D()
              , n = M()
              , u = h()
              , i = el().indexOf
              , a = ee()
              , s = r([].push);
            t.exports = function(e, t) {
                var r, o = u(e), l = 0, p = [];
                for (r in o)
                    !n(a, r) && n(o, r) && s(p, r);
                for (; t.length > l; )
                    n(o, r = t[l++]) && (~i(p, r) || s(p, r));
                return p
            }
        }
        ),
        ec = i((e,t)=>{
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ),
        ed = i(e=>{
            var t = ep()
              , r = ec().concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(e) {
                return t(e, r)
            }
        }
        ),
        eD = i(e=>{
            e.f = Object.getOwnPropertySymbols
        }
        ),
        ef = i((e,t)=>{
            var r = A()
              , n = D()
              , u = ed()
              , i = eD()
              , a = G()
              , s = n([].concat);
            t.exports = r("Reflect", "ownKeys") || function(e) {
                var t = u.f(a(e))
                  , r = i.f;
                return r ? s(t, r(e)) : t
            }
        }
        ),
        em = i((e,t)=>{
            var r = M()
              , n = ef()
              , u = U()
              , i = X();
            t.exports = function(e, t, a) {
                for (var s = n(t), o = i.f, l = u.f, p = 0; p < s.length; p++) {
                    var c = s[p];
                    r(e, c) || a && r(a, c) || o(e, c, l(t, c))
                }
            }
        }
        ),
        eg = i((e,t)=>{
            var r = s()
              , n = C()
              , u = /#|\.prototype\./
              , i = function(e, t) {
                var u = o[a(e)];
                return u == p || u != l && (n(t) ? r(t) : !!t)
            }
              , a = i.normalize = function(e) {
                return String(e).replace(u, ".").toLowerCase()
            }
              , o = i.data = {}
              , l = i.NATIVE = "N"
              , p = i.POLYFILL = "P";
            t.exports = i
        }
        ),
        ey = i((e,t)=>{
            var r = a()
              , n = U().f
              , u = z()
              , i = en()
              , s = I()
              , o = em()
              , l = eg();
            t.exports = function(e, t) {
                var a, p, c, d, D, f = e.target, m = e.global, g = e.stat;
                if (a = m ? r : g ? r[f] || s(f, {}) : (r[f] || {}).prototype)
                    for (p in t) {
                        if (d = t[p],
                        c = e.dontCallGetSet ? (D = n(a, p)) && D.value : a[p],
                        !l(m ? p : f + (g ? "." : "#") + p, e.forced) && void 0 !== c) {
                            if (typeof d == typeof c)
                                continue;
                            o(d, c)
                        }
                        (e.sham || c && c.sham) && u(d, "sham", !0),
                        i(a, p, d, e)
                    }
            }
        }
        ),
        eh = i((e,t)=>{
            var r = f();
            t.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        }
        ),
        eE = i((e,t)=>{
            var r = TypeError;
            t.exports = function(e) {
                if (e > 9007199254740991)
                    throw r("Maximum allowed index exceeded");
                return e
            }
        }
        ),
        eC = i((e,t)=>{
            var r = f()
              , n = D();
            t.exports = function(e) {
                if ("Function" === r(e))
                    return n(e)
            }
        }
        ),
        eF = i((e,t)=>{
            var r = eC()
              , n = w()
              , u = l()
              , i = r(r.bind);
            t.exports = function(e, t) {
                return n(e),
                void 0 === t ? e : u ? i(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        }
        ),
        eA = i((e,t)=>{
            var r = eh()
              , n = eo()
              , u = eE()
              , i = eF()
              , a = function(e, t, s, o, l, p, c, d) {
                for (var D, f, m = l, g = 0, y = !!c && i(c, d); g < o; )
                    g in s && (D = y ? y(s[g], g, t) : s[g],
                    p > 0 && r(D) ? (f = n(D),
                    m = a(e, t, D, f, m, p - 1) - 1) : (u(m + 1),
                    e[m] = D),
                    m++),
                    g++;
                return m
            };
            t.exports = a
        }
        ),
        ev = i((e,t)=>{
            var r = R()("toStringTag")
              , n = {};
            n[r] = "z",
            t.exports = "[object z]" === String(n)
        }
        ),
        ex = i((e,t)=>{
            var r = ev()
              , n = C()
              , u = f()
              , i = R()("toStringTag")
              , a = Object
              , s = "Arguments" == u(function() {
                return arguments
            }())
              , o = function(e, t) {
                try {
                    return e[t]
                } catch {}
            };
            t.exports = r ? u : function(e) {
                var t, r, l;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = o(t = a(e), i)) ? r : s ? u(t) : "Object" == (l = u(t)) && n(t.callee) ? "Arguments" : l
            }
        }
        ),
        eb = i((e,t)=>{
            var r = D()
              , n = s()
              , u = C()
              , i = ex()
              , a = A()
              , o = Q()
              , l = function() {}
              , p = []
              , c = a("Reflect", "construct")
              , d = /^\s*(?:class|function)\b/
              , f = r(d.exec)
              , m = !d.exec(l)
              , g = function(e) {
                if (!u(e))
                    return !1;
                try {
                    return c(l, p, e),
                    !0
                } catch {
                    return !1
                }
            }
              , y = function(e) {
                if (!u(e))
                    return !1;
                switch (i(e)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
                }
                try {
                    return m || !!f(d, o(e))
                } catch {
                    return !0
                }
            };
            y.sham = !0,
            t.exports = !c || n(function() {
                var e;
                return g(g.call) || !g(Object) || !g(function() {
                    e = !0
                }) || e
            }) ? y : g
        }
        ),
        eS = i((e,t)=>{
            var r = eh()
              , n = eb()
              , u = F()
              , i = R()("species")
              , a = Array;
            t.exports = function(e) {
                var t;
                return r(e) && (n(t = e.constructor) && (t === a || r(t.prototype)) ? t = void 0 : u(t) && null === (t = t[i]) && (t = void 0)),
                void 0 === t ? a : t
            }
        }
        ),
        eT = i((e,t)=>{
            var r = eS();
            t.exports = function(e, t) {
                return new (r(e))(0 === t ? 0 : t)
            }
        }
        ),
        eB = i(()=>{
            var e = ey()
              , t = eA()
              , r = w()
              , n = _()
              , u = eo()
              , i = eT();
            e({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var a, s = n(this), o = u(s);
                    return r(e),
                    (a = i(s, 0)).length = t(a, s, s, o, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0),
                    a
                }
            })
        }
        ),
        eN = i((e,t)=>{
            t.exports = {}
        }
        ),
        ew = i((e,t)=>{
            var r = R()
              , n = eN()
              , u = r("iterator")
              , i = Array.prototype;
            t.exports = function(e) {
                return void 0 !== e && (n.Array === e || i[u] === e)
            }
        }
        ),
        ek = i((e,t)=>{
            var r = ex()
              , n = k()
              , u = g()
              , i = eN()
              , a = R()("iterator");
            t.exports = function(e) {
                if (!u(e))
                    return n(e, a) || n(e, "@@iterator") || i[r(e)]
            }
        }
        ),
        ej = i((e,t)=>{
            var r = p()
              , n = w()
              , u = G()
              , i = N()
              , a = ek()
              , s = TypeError;
            t.exports = function(e, t) {
                var o = arguments.length < 2 ? a(e) : t;
                if (n(o))
                    return u(r(o, e));
                throw s(i(e) + " is not iterable")
            }
        }
        ),
        eP = i((e,t)=>{
            var r = p()
              , n = G()
              , u = k();
            t.exports = function(e, t, i) {
                var a, s;
                n(e);
                try {
                    if (!(a = u(e, "return"))) {
                        if ("throw" === t)
                            throw i;
                        return i
                    }
                    a = r(a, e)
                } catch (e) {
                    s = !0,
                    a = e
                }
                if ("throw" === t)
                    throw i;
                if (s)
                    throw a;
                return n(a),
                i
            }
        }
        ),
        eI = i((e,t)=>{
            var r = eF()
              , n = p()
              , u = G()
              , i = N()
              , a = ew()
              , s = eo()
              , o = v()
              , l = ej()
              , c = ek()
              , d = eP()
              , D = TypeError
              , f = function(e, t) {
                this.stopped = e,
                this.result = t
            }
              , m = f.prototype;
            t.exports = function(e, t, p) {
                var g, y, h, E, C, F, A, v = p && p.that, x = !!(p && p.AS_ENTRIES), b = !!(p && p.IS_RECORD), S = !!(p && p.IS_ITERATOR), T = !!(p && p.INTERRUPTED), B = r(t, v), N = function(e) {
                    return g && d(g, "normal", e),
                    new f(!0,e)
                }, w = function(e) {
                    return x ? (u(e),
                    T ? B(e[0], e[1], N) : B(e[0], e[1])) : T ? B(e, N) : B(e)
                };
                if (b)
                    g = e.iterator;
                else if (S)
                    g = e;
                else {
                    if (!(y = c(e)))
                        throw D(i(e) + " is not iterable");
                    if (a(y)) {
                        for (h = 0,
                        E = s(e); E > h; h++)
                            if ((C = w(e[h])) && o(m, C))
                                return C;
                        return new f(!1)
                    }
                    g = l(e, y)
                }
                for (F = b ? e.next : g.next; !(A = n(F, g)).done; ) {
                    try {
                        C = w(A.value)
                    } catch (e) {
                        d(g, "throw", e)
                    }
                    if ("object" == typeof C && C && o(m, C))
                        return C
                }
                return new f(!1)
            }
        }
        ),
        eO = i((e,t)=>{
            var r = W()
              , n = X()
              , u = d();
            t.exports = function(e, t, i) {
                var a = r(t);
                a in e ? n.f(e, a, u(0, i)) : e[a] = i
            }
        }
        ),
        eL = i(()=>{
            var e = ey()
              , t = eI()
              , r = eO();
            e({
                target: "Object",
                stat: !0
            }, {
                fromEntries: function(e) {
                    var n = {};
                    return t(e, function(e, t) {
                        r(n, e, t)
                    }, {
                        AS_ENTRIES: !0
                    }),
                    n
                }
            })
        }
        ),
        e_ = i((e,t)=>{
            var r = er()
              , n = X();
            t.exports = function(e, t, u) {
                return u.get && r(u.get, t, {
                    getter: !0
                }),
                u.set && r(u.set, t, {
                    setter: !0
                }),
                n.f(e, t, u)
            }
        }
        ),
        eM = i((e,t)=>{
            var r = G();
            t.exports = function() {
                var e = r(this)
                  , t = "";
                return e.hasIndices && (t += "d"),
                e.global && (t += "g"),
                e.ignoreCase && (t += "i"),
                e.multiline && (t += "m"),
                e.dotAll && (t += "s"),
                e.unicode && (t += "u"),
                e.unicodeSets && (t += "v"),
                e.sticky && (t += "y"),
                t
            }
        }
        ),
        e$ = i(()=>{
            var e = a()
              , t = o()
              , r = e_()
              , n = eM()
              , u = s()
              , i = e.RegExp
              , l = i.prototype;
            t && u(function() {
                var e = !0;
                try {
                    i(".", "d")
                } catch {
                    e = !1
                }
                var t = {}
                  , r = ""
                  , n = e ? "dgimsy" : "gimsy"
                  , u = function(e, n) {
                    Object.defineProperty(t, e, {
                        get: function() {
                            return r += n,
                            !0
                        }
                    })
                }
                  , a = {
                    dotAll: "s",
                    global: "g",
                    ignoreCase: "i",
                    multiline: "m",
                    sticky: "y"
                };
                for (var s in e && (a.hasIndices = "d"),
                a)
                    u(s, a[s]);
                return Object.getOwnPropertyDescriptor(l, "flags").get.call(t) !== n || r !== n
            }) && r(l, "flags", {
                configurable: !0,
                get: n
            })
        }
        ),
        eR = i(()=>{
            var e = ey()
              , t = a();
            e({
                global: !0,
                forced: t.globalThis !== t
            }, {
                globalThis: t
            })
        }
        ),
        eV = i(()=>{
            eR()
        }
        ),
        eW = i(()=>{
            var e = ey()
              , t = eA()
              , r = _()
              , n = eo()
              , u = ei()
              , i = eT();
            e({
                target: "Array",
                proto: !0
            }, {
                flat: function() {
                    var e = arguments.length ? arguments[0] : void 0
                      , a = r(this)
                      , s = n(a)
                      , o = i(a, 0);
                    return o.length = t(o, a, a, s, 0, void 0 === e ? 1 : u(e)),
                    o
                }
            })
        }
        ),
        i((r,i)=>{
            var a = ["cliName", "cliCategory", "cliDescription"]
              , s = ["_"]
              , o = ["languageId"];
            function l(e, t) {
                if (null == e)
                    return {};
                var r, n, u = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, u = {}, i = Object.keys(e);
                    for (n = 0; n < i.length; n++)
                        r = i[n],
                        t.indexOf(r) >= 0 || (u[r] = e[r]);
                    return u
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        r = i[n],
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                }
                return u
            }
            eB(),
            eL(),
            e$(),
            eV(),
            eW();
            var p, c = Object.create, d = Object.defineProperty, D = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, m = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty, y = (e,t)=>function() {
                return e && (t = (0,
                e[f(e)[0]])(e = 0)),
                t
            }
            , h = (e,t)=>function() {
                return t || (0,
                e[f(e)[0]])((t = {
                    exports: {}
                }).exports, t),
                t.exports
            }
            , E = (e,t)=>{
                for (var r in t)
                    d(e, r, {
                        get: t[r],
                        enumerable: !0
                    })
            }
            , C = (e,t,r,n)=>{
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let u of f(t))
                        g.call(e, u) || u === r || d(e, u, {
                            get: ()=>t[u],
                            enumerable: !(n = D(t, u)) || n.enumerable
                        });
                return e
            }
            , F = (e,t,r)=>(r = null != e ? c(m(e)) : {},
            C(!t && e && e.__esModule ? r : d(r, "default", {
                value: e,
                enumerable: !0
            }), e)), A = e=>C(d({}, "__esModule", {
                value: !0
            }), e), v = y({
                "<define:process>"() {
                    p = {
                        env: {},
                        argv: []
                    }
                }
            }), x = h({
                "package.json"(e, t) {
                    t.exports = {
                        version: "2.8.8"
                    }
                }
            }), b = h({
                "node_modules/diff/lib/diff/base.js"(e) {
                    function t() {}
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.default = t,
                    t.prototype = {
                        diff: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                              , n = r.callback;
                            "function" == typeof r && (n = r,
                            r = {}),
                            this.options = r;
                            var u = this;
                            function i(e) {
                                return n ? (setTimeout(function() {
                                    n(void 0, e)
                                }, 0),
                                !0) : e
                            }
                            e = this.castInput(e),
                            t = this.castInput(t),
                            e = this.removeEmpty(this.tokenize(e));
                            var a = (t = this.removeEmpty(this.tokenize(t))).length
                              , s = e.length
                              , o = 1
                              , l = a + s
                              , p = [{
                                newPos: -1,
                                components: []
                            }]
                              , c = this.extractCommon(p[0], t, e, 0);
                            if (p[0].newPos + 1 >= a && c + 1 >= s)
                                return i([{
                                    value: this.join(t),
                                    count: t.length
                                }]);
                            function d() {
                                for (var r = -1 * o; r <= o; r += 2) {
                                    var n = void 0
                                      , l = p[r - 1]
                                      , c = p[r + 1]
                                      , d = (c ? c.newPos : 0) - r;
                                    l && (p[r - 1] = void 0);
                                    var D = l && l.newPos + 1 < a
                                      , f = c && 0 <= d && d < s;
                                    if (!D && !f) {
                                        p[r] = void 0;
                                        continue
                                    }
                                    if (!D || f && l.newPos < c.newPos ? (n = {
                                        newPos: c.newPos,
                                        components: c.components.slice(0)
                                    },
                                    u.pushComponent(n.components, void 0, !0)) : (n = l,
                                    n.newPos++,
                                    u.pushComponent(n.components, !0, void 0)),
                                    d = u.extractCommon(n, t, e, r),
                                    n.newPos + 1 >= a && d + 1 >= s)
                                        return i(function(e, t, r, n, u) {
                                            for (var i = 0, a = t.length, s = 0, o = 0; i < a; i++) {
                                                var l = t[i];
                                                if (l.removed) {
                                                    if (l.value = e.join(n.slice(o, o + l.count)),
                                                    o += l.count,
                                                    i && t[i - 1].added) {
                                                        var p = t[i - 1];
                                                        t[i - 1] = t[i],
                                                        t[i] = p
                                                    }
                                                } else {
                                                    if (!l.added && u) {
                                                        var c = r.slice(s, s + l.count);
                                                        c = c.map(function(e, t) {
                                                            var r = n[o + t];
                                                            return r.length > e.length ? r : e
                                                        }),
                                                        l.value = e.join(c)
                                                    } else
                                                        l.value = e.join(r.slice(s, s + l.count));
                                                    s += l.count,
                                                    l.added || (o += l.count)
                                                }
                                            }
                                            var d = t[a - 1];
                                            return a > 1 && "string" == typeof d.value && (d.added || d.removed) && e.equals("", d.value) && (t[a - 2].value += d.value,
                                            t.pop()),
                                            t
                                        }(u, n.components, t, e, u.useLongestToken));
                                    p[r] = n
                                }
                                o++
                            }
                            if (n)
                                !function e() {
                                    setTimeout(function() {
                                        if (o > l)
                                            return n();
                                        d() || e()
                                    }, 0)
                                }();
                            else
                                for (; o <= l; ) {
                                    var D = d();
                                    if (D)
                                        return D
                                }
                        },
                        pushComponent: function(e, t, r) {
                            var n = e[e.length - 1];
                            n && n.added === t && n.removed === r ? e[e.length - 1] = {
                                count: n.count + 1,
                                added: t,
                                removed: r
                            } : e.push({
                                count: 1,
                                added: t,
                                removed: r
                            })
                        },
                        extractCommon: function(e, t, r, n) {
                            for (var u = t.length, i = r.length, a = e.newPos, s = a - n, o = 0; a + 1 < u && s + 1 < i && this.equals(t[a + 1], r[s + 1]); )
                                a++,
                                s++,
                                o++;
                            return o && e.components.push({
                                count: o
                            }),
                            e.newPos = a,
                            s
                        },
                        equals: function(e, t) {
                            return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase()
                        },
                        removeEmpty: function(e) {
                            for (var t = [], r = 0; r < e.length; r++)
                                e[r] && t.push(e[r]);
                            return t
                        },
                        castInput: function(e) {
                            return e
                        },
                        tokenize: function(e) {
                            return e.split("")
                        },
                        join: function(e) {
                            return e.join("")
                        }
                    }
                }
            }), S = h({
                "node_modules/diff/lib/diff/array.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.diffArrays = function(e, t, n) {
                        return r.diff(e, t, n)
                    }
                    ,
                    e.arrayDiff = void 0;
                    var t, r = new ((t = b()) && t.__esModule ? t : {
                        default: t
                    }).default;
                    e.arrayDiff = r,
                    r.tokenize = function(e) {
                        return e.slice()
                    }
                    ,
                    r.join = r.removeEmpty = function(e) {
                        return e
                    }
                }
            }), T = h({
                "src/document/doc-builders.js"(e, t) {
                    function r(e) {
                        return {
                            type: "concat",
                            parts: e
                        }
                    }
                    function n(e) {
                        return {
                            type: "indent",
                            contents: e
                        }
                    }
                    function u(e, t) {
                        return {
                            type: "align",
                            contents: t,
                            n: e
                        }
                    }
                    function i(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return {
                            type: "group",
                            id: t.id,
                            contents: e,
                            break: !!t.shouldBreak,
                            expandedStates: t.expandedStates
                        }
                    }
                    v();
                    var a = {
                        type: "break-parent"
                    }
                      , s = {
                        type: "line",
                        hard: !0
                    }
                      , o = {
                        type: "line",
                        hard: !0,
                        literal: !0
                    }
                      , l = r([s, a])
                      , p = r([o, a])
                      , c = {
                        type: "cursor",
                        placeholder: Symbol("cursor")
                    };
                    t.exports = {
                        concat: r,
                        join: function(e, t) {
                            let n = [];
                            for (let r = 0; r < t.length; r++)
                                0 !== r && n.push(e),
                                n.push(t[r]);
                            return r(n)
                        },
                        line: {
                            type: "line"
                        },
                        softline: {
                            type: "line",
                            soft: !0
                        },
                        hardline: l,
                        literalline: p,
                        group: i,
                        conditionalGroup: function(e, t) {
                            return i(e[0], Object.assign(Object.assign({}, t), {}, {
                                expandedStates: e
                            }))
                        },
                        fill: function(e) {
                            return {
                                type: "fill",
                                parts: e
                            }
                        },
                        lineSuffix: function(e) {
                            return {
                                type: "line-suffix",
                                contents: e
                            }
                        },
                        lineSuffixBoundary: {
                            type: "line-suffix-boundary"
                        },
                        cursor: c,
                        breakParent: a,
                        ifBreak: function(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return {
                                type: "if-break",
                                breakContents: e,
                                flatContents: t,
                                groupId: r.groupId
                            }
                        },
                        trim: {
                            type: "trim"
                        },
                        indent: n,
                        indentIfBreak: function(e, t) {
                            return {
                                type: "indent-if-break",
                                contents: e,
                                groupId: t.groupId,
                                negate: t.negate
                            }
                        },
                        align: u,
                        addAlignmentToDoc: function(e, t, r) {
                            let i = e;
                            if (t > 0) {
                                for (let e = 0; e < Math.floor(t / r); ++e)
                                    i = n(i);
                                i = u(t % r, i),
                                i = u(Number.NEGATIVE_INFINITY, i)
                            }
                            return i
                        },
                        markAsRoot: function(e) {
                            return u({
                                type: "root"
                            }, e)
                        },
                        dedentToRoot: function(e) {
                            return u(Number.NEGATIVE_INFINITY, e)
                        },
                        dedent: function(e) {
                            return u(-1, e)
                        },
                        hardlineWithoutBreakParent: s,
                        literallineWithoutBreakParent: o,
                        label: function(e, t) {
                            return {
                                type: "label",
                                label: e,
                                contents: t
                            }
                        }
                    }
                }
            }), B = h({
                "src/common/end-of-line.js"(e, t) {
                    v(),
                    t.exports = {
                        guessEndOfLine: function(e) {
                            let t = e.indexOf("\r");
                            return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf"
                        },
                        convertEndOfLineToChars: function(e) {
                            switch (e) {
                            case "cr":
                                return "\r";
                            case "crlf":
                                return `\r
`;
                            default:
                                return `
`
                            }
                        },
                        countEndOfLineChars: function(e, t) {
                            let r;
                            switch (t) {
                            case `
`:
                                r = /\n/g;
                                break;
                            case "\r":
                                r = /\r/g;
                                break;
                            case `\r
`:
                                r = /\r\n/g;
                                break;
                            default:
                                throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`)
                            }
                            let n = e.match(r);
                            return n ? n.length : 0
                        },
                        normalizeEndOfLine: function(e) {
                            return e.replace(/\r\n?/g, `
`)
                        }
                    }
                }
            }), N = h({
                "src/utils/get-last.js"(e, t) {
                    v();
                    var r = e=>e[e.length - 1];
                    t.exports = r
                }
            }), w = y({
                "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
                    v()
                }
            }), k = y({
                "node_modules/strip-ansi/index.js"() {
                    v(),
                    w()
                }
            }), j = y({
                "node_modules/is-fullwidth-code-point/index.js"() {
                    v()
                }
            }), P = h({
                "node_modules/emoji-regex/index.js"(e, t) {
                    v(),
                    t.exports = function() {
                        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
                    }
                }
            }), I = {};
            function O(e) {
                if ("string" != typeof e || 0 === e.length || 0 === (e = function(e) {
                    if ("string" != typeof e)
                        throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);
                    return e.replace(function() {
                        let {onlyFirst: e=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return RegExp("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", e ? void 0 : "g")
                    }(), "")
                }(e)).length)
                    return 0;
                e = e.replace((0,
                L.default)(), "  ");
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e.codePointAt(r);
                    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (n > 65535 && r++,
                    t += Number.isInteger(n) && n >= 4352 && (n <= 4447 || 9001 === n || 9002 === n || 11904 <= n && n <= 12871 && 12351 !== n || 12880 <= n && n <= 19903 || 19968 <= n && n <= 42182 || 43360 <= n && n <= 43388 || 44032 <= n && n <= 55203 || 63744 <= n && n <= 64255 || 65040 <= n && n <= 65049 || 65072 <= n && n <= 65131 || 65281 <= n && n <= 65376 || 65504 <= n && n <= 65510 || 110592 <= n && n <= 110593 || 127488 <= n && n <= 127569 || 131072 <= n && n <= 262141) ? 2 : 1)
                }
                return t
            }
            E(I, {
                default: ()=>O
            });
            var L, _ = y({
                "node_modules/string-width/index.js"() {
                    v(),
                    k(),
                    j(),
                    L = F(P())
                }
            }), M = h({
                "src/utils/get-string-width.js"(e, t) {
                    v();
                    var r = (_(),
                    A(I)).default
                      , n = /[^\x20-\x7F]/;
                    t.exports = function(e) {
                        return e ? n.test(e) ? r(e) : e.length : 0
                    }
                }
            }), $ = h({
                "src/document/doc-utils.js"(e, t) {
                    v();
                    var r = N()
                      , {literalline: n, join: u} = T()
                      , i = e=>Array.isArray(e) || e && "concat" === e.type
                      , a = e=>{
                        if (Array.isArray(e))
                            return e;
                        if ("concat" !== e.type && "fill" !== e.type)
                            throw Error("Expect doc type to be `concat` or `fill`.");
                        return e.parts
                    }
                      , s = {};
                    function o(e, t, r, n) {
                        let u = [e];
                        for (; u.length > 0; ) {
                            let e = u.pop();
                            if (e === s) {
                                r(u.pop());
                                continue
                            }
                            if (r && u.push(e, s),
                            !t || !1 !== t(e)) {
                                if (i(e) || "fill" === e.type) {
                                    let t = a(e);
                                    for (let e = t.length, r = e - 1; r >= 0; --r)
                                        u.push(t[r])
                                } else if ("if-break" === e.type)
                                    e.flatContents && u.push(e.flatContents),
                                    e.breakContents && u.push(e.breakContents);
                                else if ("group" === e.type && e.expandedStates) {
                                    if (n)
                                        for (let t = e.expandedStates.length, r = t - 1; r >= 0; --r)
                                            u.push(e.expandedStates[r]);
                                    else
                                        u.push(e.contents)
                                } else
                                    e.contents && u.push(e.contents)
                            }
                        }
                    }
                    function l(e, t) {
                        let r = new Map;
                        return function e(n) {
                            if (r.has(n))
                                return r.get(n);
                            let u = function(r) {
                                if (Array.isArray(r))
                                    return t(r.map(e));
                                if ("concat" === r.type || "fill" === r.type) {
                                    let n = r.parts.map(e);
                                    return t(Object.assign(Object.assign({}, r), {}, {
                                        parts: n
                                    }))
                                }
                                if ("if-break" === r.type) {
                                    let n = r.breakContents && e(r.breakContents)
                                      , u = r.flatContents && e(r.flatContents);
                                    return t(Object.assign(Object.assign({}, r), {}, {
                                        breakContents: n,
                                        flatContents: u
                                    }))
                                }
                                if ("group" === r.type && r.expandedStates) {
                                    let n = r.expandedStates.map(e)
                                      , u = n[0];
                                    return t(Object.assign(Object.assign({}, r), {}, {
                                        contents: u,
                                        expandedStates: n
                                    }))
                                }
                                if (r.contents) {
                                    let n = e(r.contents);
                                    return t(Object.assign(Object.assign({}, r), {}, {
                                        contents: n
                                    }))
                                }
                                return t(r)
                            }(n);
                            return r.set(n, u),
                            u
                        }(e)
                    }
                    function p(e, t, r) {
                        let n = r
                          , u = !1;
                        return o(e, function(e) {
                            let r = t(e);
                            if (void 0 !== r && (u = !0,
                            n = r),
                            u)
                                return !1
                        }),
                        n
                    }
                    function c(e) {
                        if ("group" === e.type && e.break || "line" === e.type && e.hard || "break-parent" === e.type)
                            return !0
                    }
                    function d(e) {
                        if (e.length > 0) {
                            let t = r(e);
                            t.expandedStates || t.break || (t.break = "propagated")
                        }
                        return null
                    }
                    function D(e) {
                        return "line" !== e.type || e.hard ? "if-break" === e.type ? e.flatContents || "" : e : e.soft ? "" : " "
                    }
                    var f = (e,t)=>e && "line" === e.type && e.hard && t && "break-parent" === t.type;
                    function m(e) {
                        return l(e, e=>(function(e) {
                            switch (e.type) {
                            case "fill":
                                if (e.parts.every(e=>"" === e))
                                    return "";
                                break;
                            case "group":
                                if (!e.contents && !e.id && !e.break && !e.expandedStates)
                                    return "";
                                if ("group" === e.contents.type && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
                                    return e.contents;
                                break;
                            case "align":
                            case "indent":
                            case "indent-if-break":
                            case "line-suffix":
                                if (!e.contents)
                                    return "";
                                break;
                            case "if-break":
                                if (!e.flatContents && !e.breakContents)
                                    return ""
                            }
                            if (!i(e))
                                return e;
                            let t = [];
                            for (let n of a(e)) {
                                if (!n)
                                    continue;
                                let[e,...u] = i(n) ? a(n) : [n];
                                "string" == typeof e && "string" == typeof r(t) ? t[t.length - 1] += e : t.push(e),
                                t.push(...u)
                            }
                            return 0 === t.length ? "" : 1 === t.length ? t[0] : Array.isArray(e) ? t : Object.assign(Object.assign({}, e), {}, {
                                parts: t
                            })
                        }
                        )(e))
                    }
                    function g(e) {
                        let t = []
                          , n = e.filter(Boolean);
                        for (; n.length > 0; ) {
                            let e = n.shift();
                            if (e) {
                                if (i(e)) {
                                    n.unshift(...a(e));
                                    continue
                                }
                                if (t.length > 0 && "string" == typeof r(t) && "string" == typeof e) {
                                    t[t.length - 1] += e;
                                    continue
                                }
                                t.push(e)
                            }
                        }
                        return t
                    }
                    function y(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                        return u(t, e.split(`
`)).parts
                    }
                    function h(e) {
                        if ("line" === e.type)
                            return !0
                    }
                    t.exports = {
                        isConcat: i,
                        getDocParts: a,
                        willBreak: function(e) {
                            return p(e, c, !1)
                        },
                        traverseDoc: o,
                        findInDoc: p,
                        mapDoc: l,
                        propagateBreaks: function(e) {
                            let t = new Set
                              , r = [];
                            o(e, function(e) {
                                if ("break-parent" === e.type && d(r),
                                "group" === e.type) {
                                    if (r.push(e),
                                    t.has(e))
                                        return !1;
                                    t.add(e)
                                }
                            }, function(e) {
                                "group" === e.type && r.pop().break && d(r)
                            }, !0)
                        },
                        removeLines: function(e) {
                            return l(e, D)
                        },
                        stripTrailingHardline: function(e) {
                            return function e(t) {
                                if (!t)
                                    return t;
                                if (i(t) || "fill" === t.type) {
                                    let n = a(t);
                                    for (; n.length > 1 && f(...n.slice(-2)); )
                                        n.length -= 2;
                                    if (n.length > 0) {
                                        let t = e(r(n));
                                        n[n.length - 1] = t
                                    }
                                    return Array.isArray(t) ? n : Object.assign(Object.assign({}, t), {}, {
                                        parts: n
                                    })
                                }
                                switch (t.type) {
                                case "align":
                                case "indent":
                                case "indent-if-break":
                                case "group":
                                case "line-suffix":
                                case "label":
                                    {
                                        let r = e(t.contents);
                                        return Object.assign(Object.assign({}, t), {}, {
                                            contents: r
                                        })
                                    }
                                case "if-break":
                                    {
                                        let r = e(t.breakContents)
                                          , n = e(t.flatContents);
                                        return Object.assign(Object.assign({}, t), {}, {
                                            breakContents: r,
                                            flatContents: n
                                        })
                                    }
                                }
                                return t
                            }(m(e))
                        },
                        normalizeParts: g,
                        normalizeDoc: function(e) {
                            return l(e, e=>Array.isArray(e) ? g(e) : e.parts ? Object.assign(Object.assign({}, e), {}, {
                                parts: g(e.parts)
                            }) : e)
                        },
                        cleanDoc: m,
                        replaceTextEndOfLine: y,
                        replaceEndOfLine: function(e) {
                            return l(e, e=>"string" == typeof e && e.includes(`
`) ? y(e) : e)
                        },
                        canBreak: function(e) {
                            return p(e, h, !1)
                        }
                    }
                }
            }), R = h({
                "src/document/doc-printer.js"(e, t) {
                    v();
                    var r, {convertEndOfLineToChars: n} = B(), u = N(), i = M(), {fill: a, cursor: s, indent: o} = T(), {isConcat: l, getDocParts: p} = $();
                    function c() {
                        return {
                            value: "",
                            length: 0,
                            queue: []
                        }
                    }
                    function d(e, t, r) {
                        let n = "dedent" === t.type ? e.queue.slice(0, -1) : [...e.queue, t]
                          , u = ""
                          , i = 0
                          , a = 0
                          , s = 0;
                        for (let e of n)
                            switch (e.type) {
                            case "indent":
                                p(),
                                r.useTabs ? o(1) : l(r.tabWidth);
                                break;
                            case "stringAlign":
                                p(),
                                u += e.n,
                                i += e.n.length;
                                break;
                            case "numberAlign":
                                a += 1,
                                s += e.n;
                                break;
                            default:
                                throw Error(`Unexpected type '${e.type}'`)
                            }
                        return c(),
                        Object.assign(Object.assign({}, e), {}, {
                            value: u,
                            length: i,
                            queue: n
                        });
                        function o(e) {
                            u += "	".repeat(e),
                            i += r.tabWidth * e
                        }
                        function l(e) {
                            u += " ".repeat(e),
                            i += e
                        }
                        function p() {
                            r.useTabs ? (a > 0 && o(a),
                            a = 0,
                            s = 0) : c()
                        }
                        function c() {
                            s > 0 && l(s),
                            a = 0,
                            s = 0
                        }
                    }
                    function D(e) {
                        if (0 === e.length)
                            return 0;
                        let t = 0;
                        for (; e.length > 0 && "string" == typeof u(e) && /^[\t ]*$/.test(u(e)); )
                            t += e.pop().length;
                        if (e.length > 0 && "string" == typeof u(e)) {
                            let r = u(e).replace(/[\t ]*$/, "");
                            t += u(e).length - r.length,
                            e[e.length - 1] = r
                        }
                        return t
                    }
                    function f(e, t, n, a, s) {
                        let o = t.length
                          , c = [e]
                          , d = [];
                        for (; n >= 0; ) {
                            if (0 === c.length) {
                                if (0 === o)
                                    return !0;
                                c.push(t[--o]);
                                continue
                            }
                            let {mode: e, doc: f} = c.pop();
                            if ("string" == typeof f)
                                d.push(f),
                                n -= i(f);
                            else if (l(f) || "fill" === f.type) {
                                let t = p(f);
                                for (let r = t.length - 1; r >= 0; r--)
                                    c.push({
                                        mode: e,
                                        doc: t[r]
                                    })
                            } else
                                switch (f.type) {
                                case "indent":
                                case "align":
                                case "indent-if-break":
                                case "label":
                                    c.push({
                                        mode: e,
                                        doc: f.contents
                                    });
                                    break;
                                case "trim":
                                    n += D(d);
                                    break;
                                case "group":
                                    {
                                        if (s && f.break)
                                            return !1;
                                        let t = f.break ? 1 : e
                                          , r = f.expandedStates && 1 === t ? u(f.expandedStates) : f.contents;
                                        c.push({
                                            mode: t,
                                            doc: r
                                        });
                                        break
                                    }
                                case "if-break":
                                    {
                                        let t = (f.groupId ? r[f.groupId] || 2 : e) === 1 ? f.breakContents : f.flatContents;
                                        t && c.push({
                                            mode: e,
                                            doc: t
                                        });
                                        break
                                    }
                                case "line":
                                    if (1 === e || f.hard)
                                        return !0;
                                    f.soft || (d.push(" "),
                                    n--);
                                    break;
                                case "line-suffix":
                                    a = !0;
                                    break;
                                case "line-suffix-boundary":
                                    if (a)
                                        return !1
                                }
                        }
                        return !1
                    }
                    t.exports = {
                        printDocToString: function(e, t) {
                            r = {};
                            let m = t.printWidth
                              , g = n(t.endOfLine)
                              , y = 0
                              , h = [{
                                ind: c(),
                                mode: 1,
                                doc: e
                            }]
                              , E = []
                              , C = !1
                              , F = [];
                            for (; h.length > 0; ) {
                                let {ind: e, mode: n, doc: v} = h.pop();
                                if ("string" == typeof v) {
                                    let e = g !== `
` ? v.replace(/\n/g, g) : v;
                                    E.push(e),
                                    y += i(e)
                                } else if (l(v)) {
                                    let t = p(v);
                                    for (let r = t.length - 1; r >= 0; r--)
                                        h.push({
                                            ind: e,
                                            mode: n,
                                            doc: t[r]
                                        })
                                } else
                                    switch (v.type) {
                                    case "cursor":
                                        E.push(s.placeholder);
                                        break;
                                    case "indent":
                                        h.push({
                                            ind: d(e, {
                                                type: "indent"
                                            }, t),
                                            mode: n,
                                            doc: v.contents
                                        });
                                        break;
                                    case "align":
                                        var A;
                                        h.push({
                                            ind: (A = v.n) === Number.NEGATIVE_INFINITY ? e.root || c() : A < 0 ? d(e, {
                                                type: "dedent"
                                            }, t) : A ? "root" === A.type ? Object.assign(Object.assign({}, e), {}, {
                                                root: e
                                            }) : d(e, {
                                                type: "string" == typeof A ? "stringAlign" : "numberAlign",
                                                n: A
                                            }, t) : e,
                                            mode: n,
                                            doc: v.contents
                                        });
                                        break;
                                    case "trim":
                                        y -= D(E);
                                        break;
                                    case "group":
                                        switch (n) {
                                        case 2:
                                            if (!C) {
                                                h.push({
                                                    ind: e,
                                                    mode: v.break ? 1 : 2,
                                                    doc: v.contents
                                                });
                                                break
                                            }
                                        case 1:
                                            {
                                                C = !1;
                                                let t = {
                                                    ind: e,
                                                    mode: 2,
                                                    doc: v.contents
                                                }
                                                  , r = m - y
                                                  , n = F.length > 0;
                                                if (!v.break && f(t, h, r, n))
                                                    h.push(t);
                                                else if (v.expandedStates) {
                                                    let t = u(v.expandedStates);
                                                    if (v.break)
                                                        h.push({
                                                            ind: e,
                                                            mode: 1,
                                                            doc: t
                                                        });
                                                    else
                                                        for (let u = 1; u < v.expandedStates.length + 1; u++)
                                                            if (u >= v.expandedStates.length) {
                                                                h.push({
                                                                    ind: e,
                                                                    mode: 1,
                                                                    doc: t
                                                                });
                                                                break
                                                            } else {
                                                                let t = {
                                                                    ind: e,
                                                                    mode: 2,
                                                                    doc: v.expandedStates[u]
                                                                };
                                                                if (f(t, h, r, n)) {
                                                                    h.push(t);
                                                                    break
                                                                }
                                                            }
                                                } else
                                                    h.push({
                                                        ind: e,
                                                        mode: 1,
                                                        doc: v.contents
                                                    })
                                            }
                                        }
                                        v.id && (r[v.id] = u(h).mode);
                                        break;
                                    case "fill":
                                        {
                                            let t = m - y
                                              , {parts: r} = v;
                                            if (0 === r.length)
                                                break;
                                            let[u,i] = r
                                              , s = {
                                                ind: e,
                                                mode: 2,
                                                doc: u
                                            }
                                              , o = {
                                                ind: e,
                                                mode: 1,
                                                doc: u
                                            }
                                              , l = f(s, [], t, F.length > 0, !0);
                                            if (1 === r.length) {
                                                l ? h.push(s) : h.push(o);
                                                break
                                            }
                                            let p = {
                                                ind: e,
                                                mode: 2,
                                                doc: i
                                            }
                                              , c = {
                                                ind: e,
                                                mode: 1,
                                                doc: i
                                            };
                                            if (2 === r.length) {
                                                l ? h.push(p, s) : h.push(c, o);
                                                break
                                            }
                                            r.splice(0, 2);
                                            let d = {
                                                ind: e,
                                                mode: n,
                                                doc: a(r)
                                            };
                                            f({
                                                ind: e,
                                                mode: 2,
                                                doc: [u, i, r[0]]
                                            }, [], t, F.length > 0, !0) ? h.push(d, p, s) : l ? h.push(d, c, s) : h.push(d, c, o);
                                            break
                                        }
                                    case "if-break":
                                    case "indent-if-break":
                                        {
                                            let t = v.groupId ? r[v.groupId] : n;
                                            if (1 === t) {
                                                let t = "if-break" === v.type ? v.breakContents : v.negate ? v.contents : o(v.contents);
                                                t && h.push({
                                                    ind: e,
                                                    mode: n,
                                                    doc: t
                                                })
                                            }
                                            if (2 === t) {
                                                let t = "if-break" === v.type ? v.flatContents : v.negate ? o(v.contents) : v.contents;
                                                t && h.push({
                                                    ind: e,
                                                    mode: n,
                                                    doc: t
                                                })
                                            }
                                            break
                                        }
                                    case "line-suffix":
                                        F.push({
                                            ind: e,
                                            mode: n,
                                            doc: v.contents
                                        });
                                        break;
                                    case "line-suffix-boundary":
                                        F.length > 0 && h.push({
                                            ind: e,
                                            mode: n,
                                            doc: {
                                                type: "line",
                                                hard: !0
                                            }
                                        });
                                        break;
                                    case "line":
                                        switch (n) {
                                        case 2:
                                            if (v.hard)
                                                C = !0;
                                            else {
                                                v.soft || (E.push(" "),
                                                y += 1);
                                                break
                                            }
                                        case 1:
                                            if (F.length > 0) {
                                                h.push({
                                                    ind: e,
                                                    mode: n,
                                                    doc: v
                                                }, ...F.reverse()),
                                                F.length = 0;
                                                break
                                            }
                                            v.literal ? e.root ? (E.push(g, e.root.value),
                                            y = e.root.length) : (E.push(g),
                                            y = 0) : (y -= D(E),
                                            E.push(g + e.value),
                                            y = e.length)
                                        }
                                        break;
                                    case "label":
                                        h.push({
                                            ind: e,
                                            mode: n,
                                            doc: v.contents
                                        })
                                    }
                                0 === h.length && F.length > 0 && (h.push(...F.reverse()),
                                F.length = 0)
                            }
                            let v = E.indexOf(s.placeholder);
                            if (-1 !== v) {
                                let e = E.indexOf(s.placeholder, v + 1)
                                  , t = E.slice(0, v).join("")
                                  , r = E.slice(v + 1, e).join("");
                                return {
                                    formatted: t + r + E.slice(e + 1).join(""),
                                    cursorNodeStart: t.length,
                                    cursorNodeText: r
                                }
                            }
                            return {
                                formatted: E.join("")
                            }
                        }
                    }
                }
            }), V = h({
                "src/document/doc-debug.js"(e, t) {
                    v();
                    var {isConcat: r, getDocParts: n} = $();
                    t.exports = {
                        printDocToDebug: function(e) {
                            let t = Object.create(null)
                              , u = new Set;
                            return function e(t, u, a) {
                                if ("string" == typeof t)
                                    return JSON.stringify(t);
                                if (r(t)) {
                                    let r = n(t).map(e).filter(Boolean);
                                    return 1 === r.length ? r[0] : `[${r.join(", ")}]`
                                }
                                if ("line" === t.type) {
                                    let e = Array.isArray(a) && a[u + 1] && "break-parent" === a[u + 1].type;
                                    return t.literal ? e ? "literalline" : "literallineWithoutBreakParent" : t.hard ? e ? "hardline" : "hardlineWithoutBreakParent" : t.soft ? "softline" : "line"
                                }
                                if ("break-parent" === t.type)
                                    return Array.isArray(a) && a[u - 1] && "line" === a[u - 1].type && a[u - 1].hard ? void 0 : "breakParent";
                                if ("trim" === t.type)
                                    return "trim";
                                if ("indent" === t.type)
                                    return "indent(" + e(t.contents) + ")";
                                if ("align" === t.type)
                                    return t.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + e(t.contents) + ")" : t.n < 0 ? "dedent(" + e(t.contents) + ")" : "root" === t.n.type ? "markAsRoot(" + e(t.contents) + ")" : "align(" + JSON.stringify(t.n) + ", " + e(t.contents) + ")";
                                if ("if-break" === t.type)
                                    return "ifBreak(" + e(t.breakContents) + (t.flatContents ? ", " + e(t.flatContents) : "") + (t.groupId ? (t.flatContents ? "" : ', ""') + `, { groupId: ${i(t.groupId)} }` : "") + ")";
                                if ("indent-if-break" === t.type) {
                                    let r = [];
                                    return t.negate && r.push("negate: true"),
                                    t.groupId && r.push(`groupId: ${i(t.groupId)}`),
                                    `indentIfBreak(${e(t.contents)}${r.length > 0 ? `, { ${r.join(", ")} }` : ""})`
                                }
                                if ("group" === t.type) {
                                    let r = [];
                                    t.break && "propagated" !== t.break && r.push("shouldBreak: true"),
                                    t.id && r.push(`id: ${i(t.id)}`);
                                    let n = r.length > 0 ? `, { ${r.join(", ")} }` : "";
                                    return t.expandedStates ? `conditionalGroup([${t.expandedStates.map(t=>e(t)).join(",")}]${n})` : `group(${e(t.contents)}${n})`
                                }
                                if ("fill" === t.type)
                                    return `fill([${t.parts.map(t=>e(t)).join(", ")}])`;
                                if ("line-suffix" === t.type)
                                    return "lineSuffix(" + e(t.contents) + ")";
                                if ("line-suffix-boundary" === t.type)
                                    return "lineSuffixBoundary";
                                if ("label" === t.type)
                                    return `label(${JSON.stringify(t.label)}, ${e(t.contents)})`;
                                throw Error("Unknown doc type " + t.type)
                            }(function e(t) {
                                if (!t)
                                    return "";
                                if (r(t)) {
                                    let u = [];
                                    for (let i of n(t))
                                        if (r(i))
                                            u.push(...e(i).parts);
                                        else {
                                            let t = e(i);
                                            "" !== t && u.push(t)
                                        }
                                    return {
                                        type: "concat",
                                        parts: u
                                    }
                                }
                                return "if-break" === t.type ? Object.assign(Object.assign({}, t), {}, {
                                    breakContents: e(t.breakContents),
                                    flatContents: e(t.flatContents)
                                }) : "group" === t.type ? Object.assign(Object.assign({}, t), {}, {
                                    contents: e(t.contents),
                                    expandedStates: t.expandedStates && t.expandedStates.map(e)
                                }) : "fill" === t.type ? {
                                    type: "fill",
                                    parts: t.parts.map(e)
                                } : t.contents ? Object.assign(Object.assign({}, t), {}, {
                                    contents: e(t.contents)
                                }) : t
                            }(e));
                            function i(e) {
                                if ("symbol" != typeof e)
                                    return JSON.stringify(String(e));
                                if (e in t)
                                    return t[e];
                                let r = String(e).slice(7, -1) || "symbol";
                                for (let n = 0; ; n++) {
                                    let i = r + (n > 0 ? ` #${n}` : "");
                                    if (!u.has(i))
                                        return u.add(i),
                                        t[e] = `Symbol.for(${JSON.stringify(i)})`
                                }
                            }
                        }
                    }
                }
            }), W = h({
                "src/document/index.js"(e, t) {
                    v(),
                    t.exports = {
                        builders: T(),
                        printer: R(),
                        utils: $(),
                        debug: V()
                    }
                }
            }), q = {};
            function J(e) {
                if ("string" != typeof e)
                    throw TypeError("Expected a string");
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }
            E(q, {
                default: ()=>J
            });
            var U = y({
                "node_modules/escape-string-regexp/index.js"() {
                    v()
                }
            })
              , H = h({
                "node_modules/semver/internal/debug.js"(e, t) {
                    v();
                    var r = "object" == typeof p && p.env && p.env.NODE_DEBUG && /\bsemver\b/i.test(p.env.NODE_DEBUG) ? function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                            t[r] = arguments[r];
                        return console.error("SEMVER", ...t)
                    }
                    : ()=>{}
                    ;
                    t.exports = r
                }
            })
              , G = h({
                "node_modules/semver/internal/constants.js"(e, t) {
                    v();
                    var r = Number.MAX_SAFE_INTEGER || 9007199254740991;
                    t.exports = {
                        SEMVER_SPEC_VERSION: "2.0.0",
                        MAX_LENGTH: 256,
                        MAX_SAFE_INTEGER: r,
                        MAX_SAFE_COMPONENT_LENGTH: 16
                    }
                }
            })
              , X = h({
                "node_modules/semver/internal/re.js"(e, t) {
                    v();
                    var {MAX_SAFE_COMPONENT_LENGTH: r} = G()
                      , n = H()
                      , u = (e = t.exports = {}).re = []
                      , i = e.src = []
                      , a = e.t = {}
                      , s = 0
                      , o = (e,t,r)=>{
                        let o = s++;
                        n(e, o, t),
                        a[e] = o,
                        i[o] = t,
                        u[o] = new RegExp(t,r ? "g" : void 0)
                    }
                    ;
                    o("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
                    o("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
                    o("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
                    o("MAINVERSION", `(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),
                    o("MAINVERSIONLOOSE", `(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),
                    o("PRERELEASEIDENTIFIER", `(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),
                    o("PRERELEASEIDENTIFIERLOOSE", `(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),
                    o("PRERELEASE", `(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),
                    o("PRERELEASELOOSE", `(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),
                    o("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
                    o("BUILD", `(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),
                    o("FULLPLAIN", `v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),
                    o("FULL", `^${i[a.FULLPLAIN]}$`),
                    o("LOOSEPLAIN", `[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),
                    o("LOOSE", `^${i[a.LOOSEPLAIN]}$`),
                    o("GTLT", "((?:<|>)?=?)"),
                    o("XRANGEIDENTIFIERLOOSE", `${i[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
                    o("XRANGEIDENTIFIER", `${i[a.NUMERICIDENTIFIER]}|x|X|\\*`),
                    o("XRANGEPLAIN", `[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),
                    o("XRANGEPLAINLOOSE", `[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),
                    o("XRANGE", `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),
                    o("XRANGELOOSE", `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),
                    o("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),
                    o("COERCERTL", i[a.COERCE], !0),
                    o("LONETILDE", "(?:~>?)"),
                    o("TILDETRIM", `(\\s*)${i[a.LONETILDE]}\\s+`, !0),
                    e.tildeTrimReplace = "$1~",
                    o("TILDE", `^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),
                    o("TILDELOOSE", `^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),
                    o("LONECARET", "(?:\\^)"),
                    o("CARETTRIM", `(\\s*)${i[a.LONECARET]}\\s+`, !0),
                    e.caretTrimReplace = "$1^",
                    o("CARET", `^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),
                    o("CARETLOOSE", `^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),
                    o("COMPARATORLOOSE", `^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),
                    o("COMPARATOR", `^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),
                    o("COMPARATORTRIM", `(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`, !0),
                    e.comparatorTrimReplace = "$1$2$3",
                    o("HYPHENRANGE", `^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),
                    o("HYPHENRANGELOOSE", `^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),
                    o("STAR", "(<|>)?=?\\s*\\*"),
                    o("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
                    o("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
                }
            })
              , z = h({
                "node_modules/semver/internal/parse-options.js"(e, t) {
                    v();
                    var r = ["includePrerelease", "loose", "rtl"]
                      , n = e=>e ? "object" != typeof e ? {
                        loose: !0
                    } : r.filter(t=>e[t]).reduce((e,t)=>(e[t] = !0,
                    e), {}) : {};
                    t.exports = n
                }
            })
              , K = h({
                "node_modules/semver/internal/identifiers.js"(e, t) {
                    v();
                    var r = /^[0-9]+$/
                      , n = (e,t)=>{
                        let n = r.test(e)
                          , u = r.test(t);
                        return n && u && (e = +e,
                        t = +t),
                        e === t ? 0 : n && !u ? -1 : u && !n ? 1 : e < t ? -1 : 1
                    }
                      , u = (e,t)=>n(t, e);
                    t.exports = {
                        compareIdentifiers: n,
                        rcompareIdentifiers: u
                    }
                }
            })
              , Q = h({
                "node_modules/semver/classes/semver.js"(e, t) {
                    v();
                    var r = H()
                      , {MAX_LENGTH: n, MAX_SAFE_INTEGER: u} = G()
                      , {re: i, t: a} = X()
                      , s = z()
                      , {compareIdentifiers: o} = K()
                      , l = class {
                        constructor(e, t) {
                            if (t = s(t),
                            e instanceof l) {
                                if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease)
                                    return e;
                                e = e.version
                            } else if ("string" != typeof e)
                                throw TypeError(`Invalid Version: ${e}`);
                            if (e.length > n)
                                throw TypeError(`version is longer than ${n} characters`);
                            r("SemVer", e, t),
                            this.options = t,
                            this.loose = !!t.loose,
                            this.includePrerelease = !!t.includePrerelease;
                            let o = e.trim().match(t.loose ? i[a.LOOSE] : i[a.FULL]);
                            if (!o)
                                throw TypeError(`Invalid Version: ${e}`);
                            if (this.raw = e,
                            this.major = +o[1],
                            this.minor = +o[2],
                            this.patch = +o[3],
                            this.major > u || this.major < 0)
                                throw TypeError("Invalid major version");
                            if (this.minor > u || this.minor < 0)
                                throw TypeError("Invalid minor version");
                            if (this.patch > u || this.patch < 0)
                                throw TypeError("Invalid patch version");
                            o[4] ? this.prerelease = o[4].split(".").map(e=>{
                                if (/^[0-9]+$/.test(e)) {
                                    let t = +e;
                                    if (t >= 0 && t < u)
                                        return t
                                }
                                return e
                            }
                            ) : this.prerelease = [],
                            this.build = o[5] ? o[5].split(".") : [],
                            this.format()
                        }
                        format() {
                            return this.version = `${this.major}.${this.minor}.${this.patch}`,
                            this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                            this.version
                        }
                        toString() {
                            return this.version
                        }
                        compare(e) {
                            if (r("SemVer.compare", this.version, this.options, e),
                            !(e instanceof l)) {
                                if ("string" == typeof e && e === this.version)
                                    return 0;
                                e = new l(e,this.options)
                            }
                            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                        }
                        compareMain(e) {
                            return e instanceof l || (e = new l(e,this.options)),
                            o(this.major, e.major) || o(this.minor, e.minor) || o(this.patch, e.patch)
                        }
                        comparePre(e) {
                            if (e instanceof l || (e = new l(e,this.options)),
                            this.prerelease.length && !e.prerelease.length)
                                return -1;
                            if (!this.prerelease.length && e.prerelease.length)
                                return 1;
                            if (!this.prerelease.length && !e.prerelease.length)
                                return 0;
                            let t = 0;
                            do {
                                let n = this.prerelease[t]
                                  , u = e.prerelease[t];
                                if (r("prerelease compare", t, n, u),
                                void 0 === n && void 0 === u)
                                    return 0;
                                if (void 0 === u)
                                    return 1;
                                if (void 0 === n)
                                    return -1;
                                if (n === u)
                                    continue;
                                return o(n, u)
                            } while (++t)
                        }
                        compareBuild(e) {
                            e instanceof l || (e = new l(e,this.options));
                            let t = 0;
                            do {
                                let n = this.build[t]
                                  , u = e.build[t];
                                if (r("prerelease compare", t, n, u),
                                void 0 === n && void 0 === u)
                                    return 0;
                                if (void 0 === u)
                                    return 1;
                                if (void 0 === n)
                                    return -1;
                                if (n === u)
                                    continue;
                                return o(n, u)
                            } while (++t)
                        }
                        inc(e, t) {
                            switch (e) {
                            case "premajor":
                                this.prerelease.length = 0,
                                this.patch = 0,
                                this.minor = 0,
                                this.major++,
                                this.inc("pre", t);
                                break;
                            case "preminor":
                                this.prerelease.length = 0,
                                this.patch = 0,
                                this.minor++,
                                this.inc("pre", t);
                                break;
                            case "prepatch":
                                this.prerelease.length = 0,
                                this.inc("patch", t),
                                this.inc("pre", t);
                                break;
                            case "prerelease":
                                0 === this.prerelease.length && this.inc("patch", t),
                                this.inc("pre", t);
                                break;
                            case "major":
                                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                                this.minor = 0,
                                this.patch = 0,
                                this.prerelease = [];
                                break;
                            case "minor":
                                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                                this.patch = 0,
                                this.prerelease = [];
                                break;
                            case "patch":
                                0 === this.prerelease.length && this.patch++,
                                this.prerelease = [];
                                break;
                            case "pre":
                                if (0 === this.prerelease.length)
                                    this.prerelease = [0];
                                else {
                                    let e = this.prerelease.length;
                                    for (; --e >= 0; )
                                        "number" == typeof this.prerelease[e] && (this.prerelease[e]++,
                                        e = -2);
                                    -1 === e && this.prerelease.push(0)
                                }
                                t && (0 === o(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                                break;
                            default:
                                throw Error(`invalid increment argument: ${e}`)
                            }
                            return this.format(),
                            this.raw = this.version,
                            this
                        }
                    }
                    ;
                    t.exports = l
                }
            })
              , Y = h({
                "node_modules/semver/functions/compare.js"(e, t) {
                    v();
                    var r = Q()
                      , n = (e,t,n)=>new r(e,n).compare(new r(t,n));
                    t.exports = n
                }
            })
              , Z = h({
                "node_modules/semver/functions/lt.js"(e, t) {
                    v();
                    var r = Y()
                      , n = (e,t,n)=>0 > r(e, t, n);
                    t.exports = n
                }
            })
              , ee = h({
                "node_modules/semver/functions/gte.js"(e, t) {
                    v();
                    var r = Y()
                      , n = (e,t,n)=>r(e, t, n) >= 0;
                    t.exports = n
                }
            })
              , et = h({
                "src/utils/arrayify.js"(e, t) {
                    v(),
                    t.exports = (e,t)=>Object.entries(e).map(e=>{
                        let[r,n] = e;
                        return Object.assign({
                            [t]: r
                        }, n)
                    }
                    )
                }
            })
              , er = h({
                "node_modules/outdent/lib/index.js"(e, t) {
                    function r() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t]
                    }
                    function n() {
                        return "u" > typeof WeakMap ? new WeakMap : {
                            add: r,
                            delete: r,
                            get: r,
                            set: r,
                            has: function(e) {
                                return !1
                            }
                        }
                    }
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.outdent = void 0;
                    var u = Object.prototype.hasOwnProperty
                      , i = function(e, t) {
                        return u.call(e, t)
                    };
                    function a(e, t) {
                        for (var r in t)
                            i(t, r) && (e[r] = t[r]);
                        return e
                    }
                    var s = /^[ \t]*(?:\r\n|\r|\n)/
                      , o = /(?:\r\n|\r|\n)[ \t]*$/
                      , l = /^(?:[\r\n]|$)/
                      , p = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/
                      , c = /^[ \t]*[\r\n][ \t\r\n]*$/;
                    function d(e, t, r) {
                        var n = 0
                          , u = e[0].match(p);
                        u && (n = u[1].length);
                        var i = RegExp("(\\r\\n|\\r|\\n).{0," + n + "}", "g");
                        t && (e = e.slice(1));
                        var a = r.newline
                          , l = r.trimLeadingNewline
                          , c = r.trimTrailingNewline
                          , d = "string" == typeof a
                          , D = e.length;
                        return e.map(function(e, t) {
                            return e = e.replace(i, "$1"),
                            0 === t && l && (e = e.replace(s, "")),
                            t === D - 1 && c && (e = e.replace(o, "")),
                            d && (e = e.replace(/\r\n|\n|\r/g, function(e) {
                                return a
                            })),
                            e
                        })
                    }
                    var D = function e(t) {
                        var r = n()
                          , u = n();
                        return a(function n(s) {
                            for (var o = [], p = 1; p < arguments.length; p++)
                                o[p - 1] = arguments[p];
                            if (!(i(s, "raw") && i(s, "length")))
                                return e(a(a({}, t), s || {}));
                            var f = (o[0] === n || o[0] === D) && c.test(s[0]) && l.test(s[1])
                              , m = f ? u : r
                              , g = m.get(s);
                            return (g || (g = d(s, f, t),
                            m.set(s, g)),
                            0 === o.length) ? g[0] : function(e, t) {
                                for (var r = "", n = 0, u = e.length; n < u; n++)
                                    r += e[n],
                                    n < u - 1 && (r += t[n]);
                                return r
                            }(g, f ? o.slice(1) : o)
                        }, {
                            string: function(e) {
                                return d([e], !1, t)[0]
                            }
                        })
                    }({
                        trimLeadingNewline: !0,
                        trimTrailingNewline: !0
                    });
                    if (e.outdent = D,
                    e.default = D,
                    "u" > typeof t)
                        try {
                            t.exports = D,
                            Object.defineProperty(D, "__esModule", {
                                value: !0
                            }),
                            D.default = D,
                            D.outdent = D
                        } catch {}
                }
            })
              , en = h({
                "src/main/core-options.js"(e, t) {
                    v();
                    var {outdent: r} = er()
                      , n = "Config"
                      , u = "Editor"
                      , i = "Other"
                      , a = "Global"
                      , s = "Special"
                      , o = {
                        cursorOffset: {
                            since: "1.4.0",
                            category: s,
                            type: "int",
                            default: -1,
                            range: {
                                start: -1,
                                end: Number.POSITIVE_INFINITY,
                                step: 1
                            },
                            description: r`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `,
                            cliCategory: u
                        },
                        endOfLine: {
                            since: "1.15.0",
                            category: a,
                            type: "choice",
                            default: [{
                                since: "1.15.0",
                                value: "auto"
                            }, {
                                since: "2.0.0",
                                value: "lf"
                            }],
                            description: "Which end of line characters to apply.",
                            choices: [{
                                value: "lf",
                                description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
                            }, {
                                value: "crlf",
                                description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
                            }, {
                                value: "cr",
                                description: "Carriage Return character only (\\r), used very rarely"
                            }, {
                                value: "auto",
                                description: r`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `
                            }]
                        },
                        filepath: {
                            since: "1.4.0",
                            category: s,
                            type: "path",
                            description: "Specify the input filepath. This will be used to do parser inference.",
                            cliName: "stdin-filepath",
                            cliCategory: i,
                            cliDescription: "Path to the file to pretend that stdin comes from."
                        },
                        insertPragma: {
                            since: "1.8.0",
                            category: s,
                            type: "boolean",
                            default: !1,
                            description: "Insert @format pragma into file's first docblock comment.",
                            cliCategory: i
                        },
                        parser: {
                            since: "0.0.10",
                            category: a,
                            type: "choice",
                            default: [{
                                since: "0.0.10",
                                value: "babylon"
                            }, {
                                since: "1.13.0",
                                value: void 0
                            }],
                            description: "Which parser to use.",
                            exception: e=>"string" == typeof e || "function" == typeof e,
                            choices: [{
                                value: "flow",
                                description: "Flow"
                            }, {
                                value: "babel",
                                since: "1.16.0",
                                description: "JavaScript"
                            }, {
                                value: "babel-flow",
                                since: "1.16.0",
                                description: "Flow"
                            }, {
                                value: "babel-ts",
                                since: "2.0.0",
                                description: "TypeScript"
                            }, {
                                value: "typescript",
                                since: "1.4.0",
                                description: "TypeScript"
                            }, {
                                value: "acorn",
                                since: "2.6.0",
                                description: "JavaScript"
                            }, {
                                value: "espree",
                                since: "2.2.0",
                                description: "JavaScript"
                            }, {
                                value: "meriyah",
                                since: "2.2.0",
                                description: "JavaScript"
                            }, {
                                value: "css",
                                since: "1.7.1",
                                description: "CSS"
                            }, {
                                value: "less",
                                since: "1.7.1",
                                description: "Less"
                            }, {
                                value: "scss",
                                since: "1.7.1",
                                description: "SCSS"
                            }, {
                                value: "json",
                                since: "1.5.0",
                                description: "JSON"
                            }, {
                                value: "json5",
                                since: "1.13.0",
                                description: "JSON5"
                            }, {
                                value: "json-stringify",
                                since: "1.13.0",
                                description: "JSON.stringify"
                            }, {
                                value: "graphql",
                                since: "1.5.0",
                                description: "GraphQL"
                            }, {
                                value: "markdown",
                                since: "1.8.0",
                                description: "Markdown"
                            }, {
                                value: "mdx",
                                since: "1.15.0",
                                description: "MDX"
                            }, {
                                value: "vue",
                                since: "1.10.0",
                                description: "Vue"
                            }, {
                                value: "yaml",
                                since: "1.14.0",
                                description: "YAML"
                            }, {
                                value: "glimmer",
                                since: "2.3.0",
                                description: "Ember / Handlebars"
                            }, {
                                value: "html",
                                since: "1.15.0",
                                description: "HTML"
                            }, {
                                value: "angular",
                                since: "1.15.0",
                                description: "Angular"
                            }, {
                                value: "lwc",
                                since: "1.17.0",
                                description: "Lightning Web Components"
                            }]
                        },
                        plugins: {
                            since: "1.10.0",
                            type: "path",
                            array: !0,
                            default: [{
                                value: []
                            }],
                            category: a,
                            description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
                            exception: e=>"string" == typeof e || "object" == typeof e,
                            cliName: "plugin",
                            cliCategory: n
                        },
                        pluginSearchDirs: {
                            since: "1.13.0",
                            type: "path",
                            array: !0,
                            default: [{
                                value: []
                            }],
                            category: a,
                            description: r`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `,
                            exception: e=>"string" == typeof e || "object" == typeof e,
                            cliName: "plugin-search-dir",
                            cliCategory: n
                        },
                        printWidth: {
                            since: "0.0.0",
                            category: a,
                            type: "int",
                            default: 80,
                            description: "The line length where Prettier will try wrap.",
                            range: {
                                start: 0,
                                end: Number.POSITIVE_INFINITY,
                                step: 1
                            }
                        },
                        rangeEnd: {
                            since: "1.4.0",
                            category: s,
                            type: "int",
                            default: Number.POSITIVE_INFINITY,
                            range: {
                                start: 0,
                                end: Number.POSITIVE_INFINITY,
                                step: 1
                            },
                            description: r`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `,
                            cliCategory: u
                        },
                        rangeStart: {
                            since: "1.4.0",
                            category: s,
                            type: "int",
                            default: 0,
                            range: {
                                start: 0,
                                end: Number.POSITIVE_INFINITY,
                                step: 1
                            },
                            description: r`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `,
                            cliCategory: u
                        },
                        requirePragma: {
                            since: "1.7.0",
                            category: s,
                            type: "boolean",
                            default: !1,
                            description: r`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `,
                            cliCategory: i
                        },
                        tabWidth: {
                            type: "int",
                            category: a,
                            default: 2,
                            description: "Number of spaces per indentation level.",
                            range: {
                                start: 0,
                                end: Number.POSITIVE_INFINITY,
                                step: 1
                            }
                        },
                        useTabs: {
                            since: "1.0.0",
                            category: a,
                            type: "boolean",
                            default: !1,
                            description: "Indent with tabs instead of spaces."
                        },
                        embeddedLanguageFormatting: {
                            since: "2.1.0",
                            category: a,
                            type: "choice",
                            default: [{
                                since: "2.1.0",
                                value: "auto"
                            }],
                            description: "Control how Prettier formats quoted code embedded in the file.",
                            choices: [{
                                value: "auto",
                                description: "Format embedded code if Prettier can automatically identify it."
                            }, {
                                value: "off",
                                description: "Never automatically format embedded code."
                            }]
                        }
                    };
                    t.exports = {
                        CATEGORY_CONFIG: n,
                        CATEGORY_EDITOR: u,
                        CATEGORY_FORMAT: "Format",
                        CATEGORY_OTHER: i,
                        CATEGORY_OUTPUT: "Output",
                        CATEGORY_GLOBAL: a,
                        CATEGORY_SPECIAL: s,
                        options: o
                    }
                }
            })
              , eu = h({
                "src/main/support.js"(e, t) {
                    v();
                    var r = {
                        compare: Y(),
                        lt: Z(),
                        gte: ee()
                    }
                      , n = et()
                      , u = x().version
                      , i = en().options;
                    t.exports = {
                        getSupportInfo: function() {
                            let {plugins: e=[], showUnreleased: t=!1, showDeprecated: s=!1, showInternal: o=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                              , p = u.split("-", 1)[0]
                              , c = e.flatMap(e=>e.languages || []).filter(D)
                              , d = n(Object.assign({}, ...e.map(e=>{
                                let {options: t} = e;
                                return t
                            }
                            ), i), "name").filter(e=>D(e) && f(e)).sort((e,t)=>e.name === t.name ? 0 : e.name < t.name ? -1 : 1).map(function(e) {
                                if (o)
                                    return e;
                                let {cliName: t, cliCategory: r, cliDescription: n} = e;
                                return l(e, a)
                            }).map(t=>{
                                Array.isArray((t = Object.assign({}, t)).default) && (t.default = 1 === t.default.length ? t.default[0].value : t.default.filter(D).sort((e,t)=>r.compare(t.since, e.since))[0].value),
                                Array.isArray(t.choices) && (t.choices = t.choices.filter(e=>D(e) && f(e)),
                                "parser" === t.name && function(e, t, r) {
                                    let n = new Set(e.choices.map(e=>e.value));
                                    for (let u of t)
                                        if (u.parsers) {
                                            for (let t of u.parsers)
                                                if (!n.has(t)) {
                                                    n.add(t);
                                                    let i = r.find(e=>e.parsers && e.parsers[t])
                                                      , a = u.name;
                                                    i && i.name && (a += ` (plugin: ${i.name})`),
                                                    e.choices.push({
                                                        value: t,
                                                        description: a
                                                    })
                                                }
                                        }
                                }(t, c, e));
                                let n = Object.fromEntries(e.filter(e=>e.defaultOptions && void 0 !== e.defaultOptions[t.name]).map(e=>[e.name, e.defaultOptions[t.name]]));
                                return Object.assign(Object.assign({}, t), {}, {
                                    pluginDefaults: n
                                })
                            }
                            );
                            return {
                                languages: c,
                                options: d
                            };
                            function D(e) {
                                return t || !("since"in e) || e.since && r.gte(p, e.since)
                            }
                            function f(e) {
                                return s || !("deprecated"in e) || e.deprecated && r.lt(p, e.deprecated)
                            }
                        }
                    }
                }
            })
              , ei = h({
                "src/utils/is-non-empty-array.js"(e, t) {
                    v(),
                    t.exports = function(e) {
                        return Array.isArray(e) && e.length > 0
                    }
                }
            })
              , ea = h({
                "src/utils/text/skip.js"(e, t) {
                    function r(e) {
                        return (t,r,n)=>{
                            let u = n && n.backwards;
                            if (!1 === r)
                                return !1;
                            let {length: i} = t
                              , a = r;
                            for (; a >= 0 && a < i; ) {
                                let r = t.charAt(a);
                                if (e instanceof RegExp) {
                                    if (!e.test(r))
                                        return a
                                } else if (!e.includes(r))
                                    return a;
                                u ? a-- : a++
                            }
                            return (-1 === a || a === i) && a
                        }
                    }
                    v();
                    var n = r(/\s/)
                      , u = r(" 	")
                      , i = r(",; 	")
                      , a = r(/[^\n\r]/);
                    t.exports = {
                        skipWhitespace: n,
                        skipSpaces: u,
                        skipToLineEnd: i,
                        skipEverythingButNewLine: a
                    }
                }
            })
              , es = h({
                "src/utils/text/skip-inline-comment.js"(e, t) {
                    v(),
                    t.exports = function(e, t) {
                        if (!1 === t)
                            return !1;
                        if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
                            for (let r = t + 2; r < e.length; ++r)
                                if ("*" === e.charAt(r) && "/" === e.charAt(r + 1))
                                    return r + 2
                        }
                        return t
                    }
                }
            })
              , eo = h({
                "src/utils/text/skip-trailing-comment.js"(e, t) {
                    v();
                    var {skipEverythingButNewLine: r} = ea();
                    t.exports = function(e, t) {
                        return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? r(e, t) : t)
                    }
                }
            })
              , el = h({
                "src/utils/text/skip-newline.js"(e, t) {
                    v(),
                    t.exports = function(e, t, r) {
                        let n = r && r.backwards;
                        if (!1 === t)
                            return !1;
                        let u = e.charAt(t);
                        if (n) {
                            if ("\r" === e.charAt(t - 1) && u === `
`)
                                return t - 2;
                            if (u === `
` || "\r" === u || "\u2028" === u || "\u2029" === u)
                                return t - 1
                        } else {
                            if ("\r" === u && e.charAt(t + 1) === `
`)
                                return t + 2;
                            if (u === `
` || "\r" === u || "\u2028" === u || "\u2029" === u)
                                return t + 1
                        }
                        return t
                    }
                }
            })
              , ep = h({
                "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, t) {
                    v();
                    var r = es()
                      , n = el()
                      , u = eo()
                      , {skipSpaces: i} = ea();
                    t.exports = function(e, t) {
                        let a = null
                          , s = t;
                        for (; s !== a; )
                            a = s,
                            s = i(e, s),
                            s = r(e, s),
                            s = u(e, s),
                            s = n(e, s);
                        return s
                    }
                }
            })
              , ec = h({
                "src/common/util.js"(e, t) {
                    v();
                    var {default: r} = (U(),
                    A(q))
                      , n = N()
                      , {getSupportInfo: u} = eu()
                      , i = ei()
                      , a = M()
                      , {skipWhitespace: s, skipSpaces: o, skipToLineEnd: l, skipEverythingButNewLine: p} = ea()
                      , c = es()
                      , d = eo()
                      , D = el()
                      , f = ep()
                      , m = e=>e[e.length - 2];
                    function g(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , n = o(e, r.backwards ? t - 1 : t, r)
                          , u = D(e, n, r);
                        return n !== u
                    }
                    function y(e, t) {
                        let r = null
                          , n = t;
                        for (; n !== r; )
                            r = n,
                            n = l(e, n),
                            n = c(e, n),
                            n = o(e, n);
                        return n = d(e, n),
                        !1 !== (n = D(e, n)) && g(e, n)
                    }
                    function h(e, t, r) {
                        return f(e, r(t))
                    }
                    function E(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                          , n = 0;
                        for (let u = r; u < e.length; ++u)
                            "	" === e[u] ? n = n + t - n % t : n++;
                        return n
                    }
                    function C(e, t) {
                        let r = {
                            quote: '"',
                            regex: /"/g,
                            escaped: "&quot;"
                        }
                          , n = {
                            quote: "'",
                            regex: /'/g,
                            escaped: "&apos;"
                        }
                          , u = "'" === t ? n : r
                          , i = u === n ? r : n
                          , a = u;
                        return (e.includes(u.quote) || e.includes(i.quote)) && (a = (e.match(u.regex) || []).length > (e.match(i.regex) || []).length ? i : u),
                        a
                    }
                    function F(e, t, r) {
                        let n = '"' === t ? "'" : '"'
                          , u = e.replace(/\\(.)|(["'])/gs, (e,u,i)=>u === n ? u : i === t ? "\\" + i : i || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(u) ? u : "\\" + u));
                        return t + u + t
                    }
                    function x(e, t) {
                        let r, n;
                        (e.comments || (e.comments = [])).push(t),
                        t.printed = !1,
                        t.nodeDescription = (r = e.type || e.kind || "(unknown type)",
                        (n = String(e.name || e.id && ("object" == typeof e.id ? e.id.name : e.id) || e.key && ("object" == typeof e.key ? e.key.name : e.key) || e.value && ("object" == typeof e.value ? "" : String(e.value)) || e.operator || "")).length > 20 && (n = n.slice(0, 19) + "…"),
                        r + (n ? " " + n : ""))
                    }
                    t.exports = {
                        inferParserByLanguage: function(e, t) {
                            let {languages: r} = u({
                                plugins: t.plugins
                            })
                              , n = r.find(t=>{
                                let {name: r} = t;
                                return r.toLowerCase() === e
                            }
                            ) || r.find(t=>{
                                let {aliases: r} = t;
                                return Array.isArray(r) && r.includes(e)
                            }
                            ) || r.find(t=>{
                                let {extensions: r} = t;
                                return Array.isArray(r) && r.includes(`.${e}`)
                            }
                            );
                            return n && n.parsers[0]
                        },
                        getStringWidth: a,
                        getMaxContinuousCount: function(e, t) {
                            let n = e.match(RegExp(`(${r(t)})+`, "g"));
                            return null === n ? 0 : n.reduce((e,r)=>Math.max(e, r.length / t.length), 0)
                        },
                        getMinNotPresentContinuousCount: function(e, t) {
                            let n = e.match(RegExp(`(${r(t)})+`, "g"));
                            if (null === n)
                                return 0;
                            let u = new Map
                              , i = 0;
                            for (let e of n) {
                                let r = e.length / t.length;
                                u.set(r, !0),
                                r > i && (i = r)
                            }
                            for (let e = 1; e < i; e++)
                                if (!u.get(e))
                                    return e;
                            return i + 1
                        },
                        getPenultimate: m,
                        getLast: n,
                        getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f,
                        getNextNonSpaceNonCommentCharacterIndex: h,
                        getNextNonSpaceNonCommentCharacter: function(e, t, r) {
                            return e.charAt(h(e, t, r))
                        },
                        skip: function(e) {
                            return (t,r,n)=>{
                                let u = n && n.backwards;
                                if (!1 === r)
                                    return !1;
                                let {length: i} = t
                                  , a = r;
                                for (; a >= 0 && a < i; ) {
                                    let r = t.charAt(a);
                                    if (e instanceof RegExp) {
                                        if (!e.test(r))
                                            return a
                                    } else if (!e.includes(r))
                                        return a;
                                    u ? a-- : a++
                                }
                                return (-1 === a || a === i) && a
                            }
                        },
                        skipWhitespace: s,
                        skipSpaces: o,
                        skipToLineEnd: l,
                        skipEverythingButNewLine: p,
                        skipInlineComment: c,
                        skipTrailingComment: d,
                        skipNewline: D,
                        isNextLineEmptyAfterIndex: y,
                        isNextLineEmpty: function(e, t, r) {
                            return y(e, r(t))
                        },
                        isPreviousLineEmpty: function(e, t, r) {
                            let n = r(t) - 1;
                            n = o(e, n, {
                                backwards: !0
                            }),
                            n = D(e, n, {
                                backwards: !0
                            }),
                            n = o(e, n, {
                                backwards: !0
                            });
                            let u = D(e, n, {
                                backwards: !0
                            });
                            return n !== u
                        },
                        hasNewline: g,
                        hasNewlineInRange: function(e, t, r) {
                            for (let n = t; n < r; ++n)
                                if (e.charAt(n) === `
`)
                                    return !0;
                            return !1
                        },
                        hasSpaces: function(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return o(e, r.backwards ? t - 1 : t, r) !== t
                        },
                        getAlignmentSize: E,
                        getIndentSize: function(e, t) {
                            let r = e.lastIndexOf(`
`);
                            return -1 === r ? 0 : E(e.slice(r + 1).match(/^[\t ]*/)[0], t)
                        },
                        getPreferredQuote: C,
                        printString: function(e, t) {
                            let r = e.slice(1, -1)
                              , n = "json" !== t.parser && ("json5" !== t.parser || "preserve" !== t.quoteProps || t.singleQuote) ? t.__isInHtmlAttribute ? "'" : C(r, t.singleQuote ? "'" : '"').quote : '"';
                            return F(r, n, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.__embeddedInHtml))
                        },
                        printNumber: function(e) {
                            return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "")
                        },
                        makeString: F,
                        addLeadingComment: function(e, t) {
                            t.leading = !0,
                            t.trailing = !1,
                            x(e, t)
                        },
                        addDanglingComment: function(e, t, r) {
                            t.leading = !1,
                            t.trailing = !1,
                            r && (t.marker = r),
                            x(e, t)
                        },
                        addTrailingComment: function(e, t) {
                            t.leading = !1,
                            t.trailing = !0,
                            x(e, t)
                        },
                        isFrontMatterNode: function(e) {
                            return e && "front-matter" === e.type
                        },
                        isNonEmptyArray: i,
                        createGroupIdMapper: function(e) {
                            let t = new WeakMap;
                            return function(r) {
                                return t.has(r) || t.set(r, Symbol(e)),
                                t.get(r)
                            }
                        }
                    }
                }
            })
              , ed = {};
            function eD(e, t) {
                for (var r = 0, n = e.length - 1; n >= 0; n--) {
                    var u = e[n];
                    "." === u ? e.splice(n, 1) : ".." === u ? (e.splice(n, 1),
                    r++) : r && (e.splice(n, 1),
                    r--)
                }
                if (t)
                    for (; r--; r)
                        e.unshift("..");
                return e
            }
            function ef() {
                for (var e = "", t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
                    var n = r >= 0 ? arguments[r] : "/";
                    if ("string" != typeof n)
                        throw TypeError("Arguments to path.resolve must be strings");
                    n && (e = n + "/" + e,
                    t = "/" === n.charAt(0))
                }
                return e = eD(eA(e.split("/"), function(e) {
                    return !!e
                }), !t).join("/"),
                (t ? "/" : "") + e || "."
            }
            function em(e) {
                var t = eg(e)
                  , r = "/" === eN(e, -1);
                return (e = eD(eA(e.split("/"), function(e) {
                    return !!e
                }), !t).join("/")) || t || (e = "."),
                e && r && (e += "/"),
                (t ? "/" : "") + e
            }
            function eg(e) {
                return "/" === e.charAt(0)
            }
            function ey() {
                var e = Array.prototype.slice.call(arguments, 0);
                return em(eA(e, function(e, t) {
                    if ("string" != typeof e)
                        throw TypeError("Arguments to path.join must be strings");
                    return e
                }).join("/"))
            }
            function eh(e, t) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++)
                        ;
                    for (var r = e.length - 1; r >= 0 && "" === e[r]; r--)
                        ;
                    return t > r ? [] : e.slice(t, r - t + 1)
                }
                e = ef(e).substr(1),
                t = ef(t).substr(1);
                for (var n = r(e.split("/")), u = r(t.split("/")), i = Math.min(n.length, u.length), a = i, s = 0; s < i; s++)
                    if (n[s] !== u[s]) {
                        a = s;
                        break
                    }
                for (var o = [], s = a; s < n.length; s++)
                    o.push("..");
                return (o = o.concat(u.slice(a))).join("/")
            }
            function eE(e) {
                var t = ex(e)
                  , r = t[0]
                  , n = t[1];
                return r || n ? (n && (n = n.substr(0, n.length - 1)),
                r + n) : "."
            }
            function eC(e, t) {
                var r = ex(e)[2];
                return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)),
                r
            }
            function eF(e) {
                return ex(e)[3]
            }
            function eA(e, t) {
                if (e.filter)
                    return e.filter(t);
                for (var r = [], n = 0; n < e.length; n++)
                    t(e[n], n, e) && r.push(e[n]);
                return r
            }
            E(ed, {
                basename: ()=>eC,
                default: ()=>eT,
                delimiter: ()=>eS,
                dirname: ()=>eE,
                extname: ()=>eF,
                isAbsolute: ()=>eg,
                join: ()=>ey,
                normalize: ()=>em,
                relative: ()=>eh,
                resolve: ()=>ef,
                sep: ()=>eb
            });
            var ev, ex, eb, eS, eT, eN, ew = y({
                "node-modules-polyfills:path"() {
                    v(),
                    ev = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    ex = function(e) {
                        return ev.exec(e).slice(1)
                    }
                    ,
                    eT = {
                        extname: eF,
                        basename: eC,
                        dirname: eE,
                        sep: eb = "/",
                        delimiter: eS = ":",
                        relative: eh,
                        join: ey,
                        isAbsolute: eg,
                        normalize: em,
                        resolve: ef
                    },
                    eN = function(e, t, r) {
                        return e.substr(t, r)
                    }
                }
            }), ek = h({
                "node-modules-polyfills-commonjs:path"(e, t) {
                    v();
                    var r = (ew(),
                    A(ed));
                    if (r && r.default)
                        for (let e in t.exports = r.default,
                        r)
                            t.exports[e] = r[e];
                    else
                        r && (t.exports = r)
                }
            }), ej = h({
                "src/common/errors.js"(e, t) {
                    v(),
                    t.exports = {
                        ConfigError: class extends Error {
                        }
                        ,
                        DebugError: class extends Error {
                        }
                        ,
                        UndefinedParserError: class extends Error {
                        }
                        ,
                        ArgExpansionBailout: class extends Error {
                        }
                    }
                }
            }), eP = {};
            function eI(e, t) {
                function r() {
                    this.constructor = e
                }
                e7(e, t),
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                new r)
            }
            function eO(e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var u = 0, n = Object.getOwnPropertySymbols(e); u < n.length; u++)
                        0 > t.indexOf(n[u]) && Object.prototype.propertyIsEnumerable.call(e, n[u]) && (r[n[u]] = e[n[u]]);
                return r
            }
            function e_(e, t, r, n) {
                var u, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (u = e[s]) && (a = (i < 3 ? u(a) : i > 3 ? u(t, r, a) : u(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a),
                a
            }
            function eM(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }
            function eR(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
            function eq(e, t, r, n) {
                return new (r || (r = Promise))(function(u, i) {
                    function a(e) {
                        try {
                            o(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            o(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function o(e) {
                        var t;
                        e.done ? u(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                            e(t)
                        }
                        )).then(a, s)
                    }
                    o((n = n.apply(e, t || [])).next())
                }
                )
            }
            function eJ(e, t) {
                var r, n, u, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0])
                            throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (r)
                                throw TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (r = 1,
                                    n && (u = 2 & i[0] ? n.return : i[0] ? n.throw || ((u = n.return) && u.call(n),
                                    0) : n.next) && !(u = u.call(n, i[1])).done)
                                        return u;
                                    switch (n = 0,
                                    u && (i = [2 & i[0], u.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        u = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        n = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = (u = a.trys).length > 0 && u[u.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!u || i[1] > u[0] && i[1] < u[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < u[1]) {
                                            a.label = u[1],
                                            u = i;
                                            break
                                        }
                                        if (u && a.label < u[2]) {
                                            a.label = u[2],
                                            a.ops.push(i);
                                            break
                                        }
                                        u[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e],
                                    n = 0
                                } finally {
                                    r = u = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
            function eU(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            function eH(e, t) {
                for (var r in e)
                    "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }
            function eG(e) {
                var t = "function" == typeof Symbol && Symbol.iterator
                  , r = t && e[t]
                  , n = 0;
                if (r)
                    return r.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && n >= e.length && (e = void 0),
                            {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            function eX(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r)
                    return e;
                var n, u, i = r.call(e), a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                        a.push(n.value)
                } catch (e) {
                    u = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (u)
                            throw u.error
                    }
                }
                return a
            }
            function ez() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(eX(arguments[t]));
                return e
            }
            function eK() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                    e += arguments[t].length;
                for (var n = Array(e), u = 0, t = 0; t < r; t++)
                    for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
                    u++)
                        n[u] = i[a];
                return n
            }
            function eQ(e) {
                return this instanceof eQ ? (this.v = e,
                this) : new eQ(e)
            }
            function eY(e, t, r) {
                if (!Symbol.asyncIterator)
                    throw TypeError("Symbol.asyncIterator is not defined.");
                var n, u = r.apply(e, t || []), i = [];
                return n = {},
                a("next"),
                a("throw"),
                a("return"),
                n[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                n;
                function a(e) {
                    u[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            i.push([e, t, r, n]) > 1 || s(e, t)
                        }
                        )
                    }
                    )
                }
                function s(e, t) {
                    try {
                        var r;
                        (r = u[e](t)).value instanceof eQ ? Promise.resolve(r.value.v).then(o, l) : p(i[0][2], r)
                    } catch (e) {
                        p(i[0][3], e)
                    }
                }
                function o(e) {
                    s("next", e)
                }
                function l(e) {
                    s("throw", e)
                }
                function p(e, t) {
                    e(t),
                    i.shift(),
                    i.length && s(i[0][0], i[0][1])
                }
            }
            function eZ(e) {
                var t, r;
                return t = {},
                n("next"),
                n("throw", function(e) {
                    throw e
                }),
                n("return"),
                t[Symbol.iterator] = function() {
                    return this
                }
                ,
                t;
                function n(n, u) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: eQ(e[n](t)),
                            done: "return" === n
                        } : u ? u(t) : t
                    }
                    : u
                }
            }
            function e0(e) {
                if (!Symbol.asyncIterator)
                    throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = eG(e),
                t = {},
                n("next"),
                n("throw"),
                n("return"),
                t[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, u) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }
                            )(n, u, (t = e[r](t)).done, t.value)
                        }
                        )
                    }
                }
            }
            function e1(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
            function e2(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e,
                t
            }
            function e3(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function e8(e, t) {
                if (!t.has(e))
                    throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }
            function e6(e, t, r) {
                if (!t.has(e))
                    throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r),
                r
            }
            E(eP, {
                __assign: ()=>e9,
                __asyncDelegator: ()=>eZ,
                __asyncGenerator: ()=>eY,
                __asyncValues: ()=>e0,
                __await: ()=>eQ,
                __awaiter: ()=>eq,
                __classPrivateFieldGet: ()=>e8,
                __classPrivateFieldSet: ()=>e6,
                __createBinding: ()=>eU,
                __decorate: ()=>e_,
                __exportStar: ()=>eH,
                __extends: ()=>eI,
                __generator: ()=>eJ,
                __importDefault: ()=>e3,
                __importStar: ()=>e2,
                __makeTemplateObject: ()=>e1,
                __metadata: ()=>eR,
                __param: ()=>eM,
                __read: ()=>eX,
                __rest: ()=>eO,
                __spread: ()=>ez,
                __spreadArrays: ()=>eK,
                __values: ()=>eG
            });
            var e7, e9, e5 = y({
                "node_modules/tslib/tslib.es6.js"() {
                    v(),
                    e7 = function(e, t) {
                        return (e7 = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var r in t)
                                t.hasOwnProperty(r) && (e[r] = t[r])
                        }
                        )(e, t)
                    }
                    ,
                    e9 = function() {
                        return (e9 = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var u in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
                            return e
                        }
                        ).apply(this, arguments)
                    }
                }
            }), e4 = h({
                "node_modules/vnopts/lib/descriptors/api.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.apiDescriptor = {
                        key: e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
                        value(t) {
                            if (null === t || "object" != typeof t)
                                return JSON.stringify(t);
                            if (Array.isArray(t))
                                return `[${t.map(t=>e.apiDescriptor.value(t)).join(", ")}]`;
                            let r = Object.keys(t);
                            return 0 === r.length ? "{}" : `{ ${r.map(r=>`${e.apiDescriptor.key(r)}: ${e.apiDescriptor.value(t[r])}`).join(", ")} }`
                        },
                        pair: t=>{
                            let {key: r, value: n} = t;
                            return e.apiDescriptor.value({
                                [r]: n
                            })
                        }
                    }
                }
            }), te = h({
                "node_modules/vnopts/lib/descriptors/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    (e5(),
                    A(eP)).__exportStar(e4(), e)
                }
            }), tt = h({
                "scripts/build/shims/chalk.cjs"(e, t) {
                    v();
                    var r = e=>e;
                    r.grey = r,
                    r.red = r,
                    r.bold = r,
                    r.yellow = r,
                    r.blue = r,
                    r.default = r,
                    t.exports = r
                }
            }), tr = h({
                "node_modules/vnopts/lib/handlers/deprecated/common.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tt();
                    e.commonDeprecatedHandler = (e,r,n)=>{
                        let {descriptor: u} = n
                          , i = [`${t.default.yellow("string" == typeof e ? u.key(e) : u.pair(e))} is deprecated`];
                        return r && i.push(`we now treat it as ${t.default.blue("string" == typeof r ? u.key(r) : u.pair(r))}`),
                        i.join("; ") + "."
                    }
                }
            }), tn = h({
                "node_modules/vnopts/lib/handlers/deprecated/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    (e5(),
                    A(eP)).__exportStar(tr(), e)
                }
            }), tu = h({
                "node_modules/vnopts/lib/handlers/invalid/common.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tt();
                    e.commonInvalidHandler = (e,r,n)=>`Invalid ${t.default.red(n.descriptor.key(e))} value. Expected ${t.default.blue(n.schemas[e].expected(n))}, but received ${t.default.red(n.descriptor.value(r))}.`
                }
            }), ti = h({
                "node_modules/vnopts/lib/handlers/invalid/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    (e5(),
                    A(eP)).__exportStar(tu(), e)
                }
            }), ta = h({
                "node_modules/vnopts/node_modules/leven/index.js"(e, t) {
                    v();
                    var r = []
                      , n = [];
                    t.exports = function(e, t) {
                        if (e === t)
                            return 0;
                        var u = e;
                        e.length > t.length && (e = t,
                        t = u);
                        var i = e.length
                          , a = t.length;
                        if (0 === i)
                            return a;
                        if (0 === a)
                            return i;
                        for (; i > 0 && e.charCodeAt(~-i) === t.charCodeAt(~-a); )
                            i--,
                            a--;
                        if (0 === i)
                            return a;
                        for (var s = 0; s < i && e.charCodeAt(s) === t.charCodeAt(s); )
                            s++;
                        if (i -= s,
                        a -= s,
                        0 === i)
                            return a;
                        for (var o, l, p, c, d = 0, D = 0; d < i; )
                            n[s + d] = e.charCodeAt(s + d),
                            r[d] = ++d;
                        for (; D < a; )
                            for (o = t.charCodeAt(s + D),
                            p = D++,
                            l = D,
                            d = 0; d < i; d++)
                                c = o === n[s + d] ? p : p + 1,
                                p = r[d],
                                l = r[d] = p > l ? c > l ? l + 1 : c : c > p ? p + 1 : c;
                        return l
                    }
                }
            }), ts = h({
                "node_modules/vnopts/lib/handlers/unknown/leven.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tt()
                      , r = ta();
                    e.levenUnknownHandler = (e,n,u)=>{
                        let {descriptor: i, logger: a, schemas: s} = u
                          , o = [`Ignored unknown option ${t.default.yellow(i.pair({
                            key: e,
                            value: n
                        }))}.`]
                          , l = Object.keys(s).sort().find(t=>3 > r(e, t));
                        l && o.push(`Did you mean ${t.default.blue(i.key(l))}?`),
                        a.warn(o.join(" "))
                    }
                }
            }), to = h({
                "node_modules/vnopts/lib/handlers/unknown/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    (e5(),
                    A(eP)).__exportStar(ts(), e)
                }
            }), tl = h({
                "node_modules/vnopts/lib/handlers/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = (e5(),
                    A(eP));
                    t.__exportStar(tn(), e),
                    t.__exportStar(ti(), e),
                    t.__exportStar(to(), e)
                }
            }), tp = h({
                "node_modules/vnopts/lib/schema.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
                    function r(e, r) {
                        let u = new e(r)
                          , i = Object.create(u);
                        for (let e of t)
                            e in r && (i[e] = function(e, t, r) {
                                return "function" == typeof e ? function() {
                                    for (var n = arguments.length, u = Array(n), i = 0; i < n; i++)
                                        u[i] = arguments[i];
                                    return e(...u.slice(0, r - 1), t, ...u.slice(r - 1))
                                }
                                : ()=>e
                            }(r[e], u, n.prototype[e].length));
                        return i
                    }
                    e.createSchema = r;
                    var n = class {
                        constructor(e) {
                            this.name = e.name
                        }
                        static create(e) {
                            return r(this, e)
                        }
                        default(e) {}
                        expected(e) {
                            return "nothing"
                        }
                        validate(e, t) {
                            return !1
                        }
                        deprecated(e, t) {
                            return !1
                        }
                        forward(e, t) {}
                        redirect(e, t) {}
                        overlap(e, t, r) {
                            return e
                        }
                        preprocess(e, t) {
                            return e
                        }
                        postprocess(e, t) {
                            return e
                        }
                    }
                    ;
                    e.Schema = n
                }
            }), tc = h({
                "node_modules/vnopts/lib/schemas/alias.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tp()
                      , r = class extends t.Schema {
                        constructor(e) {
                            super(e),
                            this._sourceName = e.sourceName
                        }
                        expected(e) {
                            return e.schemas[this._sourceName].expected(e)
                        }
                        validate(e, t) {
                            return t.schemas[this._sourceName].validate(e, t)
                        }
                        redirect(e, t) {
                            return this._sourceName
                        }
                    }
                    ;
                    e.AliasSchema = r
                }
            }), td = h({
                "node_modules/vnopts/lib/schemas/any.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tp()
                      , r = class extends t.Schema {
                        expected() {
                            return "anything"
                        }
                        validate() {
                            return !0
                        }
                    }
                    ;
                    e.AnySchema = r
                }
            }), tD = h({
                "node_modules/vnopts/lib/schemas/array.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = (e5(),
                    A(eP))
                      , r = tp()
                      , n = class extends r.Schema {
                        constructor(e) {
                            var {valueSchema: r, name: n=r.name} = e;
                            super(Object.assign({}, t.__rest(e, ["valueSchema", "name"]), {
                                name: n
                            })),
                            this._valueSchema = r
                        }
                        expected(e) {
                            return `an array of ${this._valueSchema.expected(e)}`
                        }
                        validate(e, t) {
                            if (!Array.isArray(e))
                                return !1;
                            let r = [];
                            for (let n of e) {
                                let e = t.normalizeValidateResult(this._valueSchema.validate(n, t), n);
                                !0 !== e && r.push(e.value)
                            }
                            return 0 === r.length || {
                                value: r
                            }
                        }
                        deprecated(e, t) {
                            let r = [];
                            for (let n of e) {
                                let e = t.normalizeDeprecatedResult(this._valueSchema.deprecated(n, t), n);
                                !1 !== e && r.push(...e.map(e=>{
                                    let {value: t} = e;
                                    return {
                                        value: [t]
                                    }
                                }
                                ))
                            }
                            return r
                        }
                        forward(e, t) {
                            let r = [];
                            for (let n of e) {
                                let e = t.normalizeForwardResult(this._valueSchema.forward(n, t), n);
                                r.push(...e.map(u))
                            }
                            return r
                        }
                        redirect(e, t) {
                            let r = []
                              , n = [];
                            for (let i of e) {
                                let e = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
                                "remain"in e && r.push(e.remain),
                                n.push(...e.redirect.map(u))
                            }
                            return 0 === r.length ? {
                                redirect: n
                            } : {
                                redirect: n,
                                remain: r
                            }
                        }
                        overlap(e, t) {
                            return e.concat(t)
                        }
                    }
                    ;
                    function u(e) {
                        let {from: t, to: r} = e;
                        return {
                            from: [t],
                            to: r
                        }
                    }
                    e.ArraySchema = n
                }
            }), tf = h({
                "node_modules/vnopts/lib/schemas/boolean.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tp()
                      , r = class extends t.Schema {
                        expected() {
                            return "true or false"
                        }
                        validate(e) {
                            return "boolean" == typeof e
                        }
                    }
                    ;
                    e.BooleanSchema = r
                }
            }), tm = h({
                "node_modules/vnopts/lib/utils.js"(e) {
                    function t(e, t) {
                        return "string" == typeof e || "key"in e ? {
                            from: t,
                            to: e
                        } : "from"in e ? {
                            from: e.from,
                            to: e.to
                        } : {
                            from: t,
                            to: e.to
                        }
                    }
                    function r(e, r) {
                        return void 0 === e ? [] : Array.isArray(e) ? e.map(e=>t(e, r)) : [t(e, r)]
                    }
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.recordFromArray = function(e, t) {
                        let r = Object.create(null);
                        for (let n of e) {
                            let e = n[t];
                            if (r[e])
                                throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
                            r[e] = n
                        }
                        return r
                    }
                    ,
                    e.mapFromArray = function(e, t) {
                        let r = new Map;
                        for (let n of e) {
                            let e = n[t];
                            if (r.has(e))
                                throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
                            r.set(e, n)
                        }
                        return r
                    }
                    ,
                    e.createAutoChecklist = function() {
                        let e = Object.create(null);
                        return t=>{
                            let r = JSON.stringify(t);
                            return !!e[r] || (e[r] = !0,
                            !1)
                        }
                    }
                    ,
                    e.partition = function(e, t) {
                        let r = []
                          , n = [];
                        for (let u of e)
                            t(u) ? r.push(u) : n.push(u);
                        return [r, n]
                    }
                    ,
                    e.isInt = function(e) {
                        return e === Math.floor(e)
                    }
                    ,
                    e.comparePrimitive = function(e, t) {
                        if (e === t)
                            return 0;
                        let r = typeof e
                          , n = typeof t
                          , u = ["undefined", "object", "boolean", "number", "string"];
                        return r !== n ? u.indexOf(r) - u.indexOf(n) : "string" !== r ? Number(e) - Number(t) : e.localeCompare(t)
                    }
                    ,
                    e.normalizeDefaultResult = function(e) {
                        return void 0 === e ? {} : e
                    }
                    ,
                    e.normalizeValidateResult = function(e, t) {
                        return !0 === e || (!1 === e ? {
                            value: t
                        } : e)
                    }
                    ,
                    e.normalizeDeprecatedResult = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return !1 !== e && (!0 === e ? !!r || [{
                            value: t
                        }] : "value"in e ? [e] : 0 !== e.length && e)
                    }
                    ,
                    e.normalizeTransferResult = t,
                    e.normalizeForwardResult = r,
                    e.normalizeRedirectResult = function(e, t) {
                        let n = r("object" == typeof e && "redirect"in e ? e.redirect : e, t);
                        return 0 === n.length ? {
                            remain: t,
                            redirect: n
                        } : "object" == typeof e && "remain"in e ? {
                            remain: e.remain,
                            redirect: n
                        } : {
                            redirect: n
                        }
                    }
                }
            }), tg = h({
                "node_modules/vnopts/lib/schemas/choice.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tp()
                      , r = tm()
                      , n = class extends t.Schema {
                        constructor(e) {
                            super(e),
                            this._choices = r.mapFromArray(e.choices.map(e=>e && "object" == typeof e ? e : {
                                value: e
                            }), "value")
                        }
                        expected(e) {
                            let {descriptor: t} = e
                              , n = Array.from(this._choices.keys()).map(e=>this._choices.get(e)).filter(e=>!e.deprecated).map(e=>e.value).sort(r.comparePrimitive).map(t.value)
                              , u = n.slice(0, -2)
                              , i = n.slice(-2);
                            return u.concat(i.join(" or ")).join(", ")
                        }
                        validate(e) {
                            return this._choices.has(e)
                        }
                        deprecated(e) {
                            let t = this._choices.get(e);
                            return !!t && !!t.deprecated && {
                                value: e
                            }
                        }
                        forward(e) {
                            let t = this._choices.get(e);
                            return t ? t.forward : void 0
                        }
                        redirect(e) {
                            let t = this._choices.get(e);
                            return t ? t.redirect : void 0
                        }
                    }
                    ;
                    e.ChoiceSchema = n
                }
            }), ty = h({
                "node_modules/vnopts/lib/schemas/number.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tp()
                      , r = class extends t.Schema {
                        expected() {
                            return "a number"
                        }
                        validate(e, t) {
                            return "number" == typeof e
                        }
                    }
                    ;
                    e.NumberSchema = r
                }
            }), th = h({
                "node_modules/vnopts/lib/schemas/integer.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tm()
                      , r = ty()
                      , n = class extends r.NumberSchema {
                        expected() {
                            return "an integer"
                        }
                        validate(e, r) {
                            return !0 === r.normalizeValidateResult(super.validate(e, r), e) && t.isInt(e)
                        }
                    }
                    ;
                    e.IntegerSchema = n
                }
            }), tE = h({
                "node_modules/vnopts/lib/schemas/string.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tp()
                      , r = class extends t.Schema {
                        expected() {
                            return "a string"
                        }
                        validate(e) {
                            return "string" == typeof e
                        }
                    }
                    ;
                    e.StringSchema = r
                }
            }), tC = h({
                "node_modules/vnopts/lib/schemas/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = (e5(),
                    A(eP));
                    t.__exportStar(tc(), e),
                    t.__exportStar(td(), e),
                    t.__exportStar(tD(), e),
                    t.__exportStar(tf(), e),
                    t.__exportStar(tg(), e),
                    t.__exportStar(th(), e),
                    t.__exportStar(ty(), e),
                    t.__exportStar(tE(), e)
                }
            }), tF = h({
                "node_modules/vnopts/lib/defaults.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = e4()
                      , r = tr()
                      , n = ti()
                      , u = ts();
                    e.defaultDescriptor = t.apiDescriptor,
                    e.defaultUnknownHandler = u.levenUnknownHandler,
                    e.defaultInvalidHandler = n.commonInvalidHandler,
                    e.defaultDeprecatedHandler = r.commonDeprecatedHandler
                }
            }), tA = h({
                "node_modules/vnopts/lib/normalize.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = tF()
                      , r = tm();
                    e.normalize = (e,t,r)=>new n(t,r).normalize(e);
                    var n = class {
                        constructor(e, n) {
                            let {logger: u=console, descriptor: i=t.defaultDescriptor, unknown: a=t.defaultUnknownHandler, invalid: s=t.defaultInvalidHandler, deprecated: o=t.defaultDeprecatedHandler} = n || {};
                            this._utils = {
                                descriptor: i,
                                logger: u || {
                                    warn: ()=>{}
                                },
                                schemas: r.recordFromArray(e, "name"),
                                normalizeDefaultResult: r.normalizeDefaultResult,
                                normalizeDeprecatedResult: r.normalizeDeprecatedResult,
                                normalizeForwardResult: r.normalizeForwardResult,
                                normalizeRedirectResult: r.normalizeRedirectResult,
                                normalizeValidateResult: r.normalizeValidateResult
                            },
                            this._unknownHandler = a,
                            this._invalidHandler = s,
                            this._deprecatedHandler = o,
                            this.cleanHistory()
                        }
                        cleanHistory() {
                            this._hasDeprecationWarned = r.createAutoChecklist()
                        }
                        normalize(e) {
                            let t = {}
                              , n = [e]
                              , u = ()=>{
                                for (; 0 !== n.length; ) {
                                    let e = n.shift()
                                      , r = this._applyNormalization(e, t);
                                    n.push(...r)
                                }
                            }
                            ;
                            for (let e of (u(),
                            Object.keys(this._utils.schemas))) {
                                let u = this._utils.schemas[e];
                                if (!(e in t)) {
                                    let t = r.normalizeDefaultResult(u.default(this._utils));
                                    "value"in t && n.push({
                                        [e]: t.value
                                    })
                                }
                            }
                            for (let e of (u(),
                            Object.keys(this._utils.schemas))) {
                                let r = this._utils.schemas[e];
                                e in t && (t[e] = r.postprocess(t[e], this._utils))
                            }
                            return t
                        }
                        _applyNormalization(e, t) {
                            let n = []
                              , [u,i] = r.partition(Object.keys(e), e=>e in this._utils.schemas);
                            for (let i of u) {
                                let u = this._utils.schemas[i]
                                  , a = u.preprocess(e[i], this._utils)
                                  , s = r.normalizeValidateResult(u.validate(a, this._utils), a);
                                if (!0 !== s) {
                                    let {value: e} = s
                                      , t = this._invalidHandler(i, e, this._utils);
                                    throw "string" == typeof t ? Error(t) : t
                                }
                                let o = e=>{
                                    let {from: t, to: r} = e;
                                    n.push("string" == typeof r ? {
                                        [r]: t
                                    } : {
                                        [r.key]: r.value
                                    })
                                }
                                  , l = e=>{
                                    let {value: t, redirectTo: n} = e
                                      , s = r.normalizeDeprecatedResult(u.deprecated(t, this._utils), a, !0);
                                    if (!1 !== s) {
                                        if (!0 === s)
                                            this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, n, this._utils));
                                        else
                                            for (let {value: e} of s) {
                                                let t = {
                                                    key: i,
                                                    value: e
                                                };
                                                if (!this._hasDeprecationWarned(t)) {
                                                    let r = "string" == typeof n ? {
                                                        key: n,
                                                        value: e
                                                    } : n;
                                                    this._utils.logger.warn(this._deprecatedHandler(t, r, this._utils))
                                                }
                                            }
                                    }
                                }
                                ;
                                r.normalizeForwardResult(u.forward(a, this._utils), a).forEach(o);
                                let p = r.normalizeRedirectResult(u.redirect(a, this._utils), a);
                                if (p.redirect.forEach(o),
                                "remain"in p) {
                                    let e = p.remain;
                                    t[i] = i in t ? u.overlap(t[i], e, this._utils) : e,
                                    l({
                                        value: e
                                    })
                                }
                                for (let {from: e, to: t} of p.redirect)
                                    l({
                                        value: e,
                                        redirectTo: t
                                    })
                            }
                            for (let r of i) {
                                let u = e[r]
                                  , i = this._unknownHandler(r, u, this._utils);
                                if (i)
                                    for (let e of Object.keys(i)) {
                                        let r = {
                                            [e]: i[e]
                                        };
                                        e in this._utils.schemas ? n.push(r) : Object.assign(t, r)
                                    }
                            }
                            return n
                        }
                    }
                    ;
                    e.Normalizer = n
                }
            }), tv = h({
                "node_modules/vnopts/lib/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = (e5(),
                    A(eP));
                    t.__exportStar(te(), e),
                    t.__exportStar(tl(), e),
                    t.__exportStar(tC(), e),
                    t.__exportStar(tA(), e),
                    t.__exportStar(tp(), e)
                }
            }), tx = h({
                "src/main/options-normalizer.js"(e, t) {
                    v();
                    var r, n = tv(), u = N(), i = {
                        key: e=>1 === e.length ? `-${e}` : `--${e}`,
                        value: e=>n.apiDescriptor.value(e),
                        pair: e=>{
                            let {key: t, value: r} = e;
                            return !1 === r ? `--no-${t}` : !0 === r ? i.key(t) : "" === r ? `${i.key(t)} without an argument` : `${i.key(t)}=${r}`
                        }
                    }, a = e=>{
                        let {colorsModule: t, levenshteinDistance: r} = e;
                        return class extends n.ChoiceSchema {
                            constructor(e) {
                                let {name: t, flags: r} = e;
                                super({
                                    name: t,
                                    choices: r
                                }),
                                this._flags = [...r].sort()
                            }
                            preprocess(e, n) {
                                if ("string" == typeof e && e.length > 0 && !this._flags.includes(e)) {
                                    let u = this._flags.find(t=>3 > r(t, e));
                                    if (u)
                                        return n.logger.warn(`Unknown flag ${t.yellow(n.descriptor.value(e))}, did you mean ${t.blue(n.descriptor.value(u))}?`),
                                        u
                                }
                                return e
                            }
                            expected() {
                                return "a flag"
                            }
                        }
                    }
                    ;
                    function o(e, t) {
                        let {logger: o=!1, isCLI: p=!1, passThrough: c=!1, colorsModule: d=null, levenshteinDistance: D=null} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , f = c ? Array.isArray(c) ? (e,t)=>c.includes(e) ? {
                            [e]: t
                        } : void 0 : (e,t)=>({
                            [e]: t
                        }) : (e,t,r)=>{
                            let u = r.schemas
                              , {_: i} = u
                              , a = l(u, s);
                            return n.levenUnknownHandler(e, t, Object.assign(Object.assign({}, r), {}, {
                                schemas: a
                            }))
                        }
                          , m = p ? i : n.apiDescriptor
                          , g = function(e, t) {
                            let {isCLI: r, colorsModule: i, levenshteinDistance: s} = t
                              , o = [];
                            for (let t of (r && o.push(n.AnySchema.create({
                                name: "_"
                            })),
                            e))
                                o.push(function(e, t) {
                                    let {isCLI: r, optionInfos: i, colorsModule: s, levenshteinDistance: o} = t
                                      , {name: l} = e;
                                    if ("plugin-search-dir" === l || "pluginSearchDirs" === l)
                                        return n.AnySchema.create({
                                            name: l,
                                            preprocess: e=>(!1 === e || (e = Array.isArray(e) ? e : [e]),
                                            e),
                                            validate: e=>!1 === e || e.every(e=>"string" == typeof e),
                                            expected: ()=>"false or paths to plugin search dir"
                                        });
                                    let p = {
                                        name: l
                                    }, c, d = {};
                                    switch (e.type) {
                                    case "int":
                                        c = n.IntegerSchema,
                                        r && (p.preprocess = Number);
                                        break;
                                    case "string":
                                    case "path":
                                        c = n.StringSchema;
                                        break;
                                    case "choice":
                                        c = n.ChoiceSchema,
                                        p.choices = e.choices.map(t=>"object" == typeof t && t.redirect ? Object.assign(Object.assign({}, t), {}, {
                                            redirect: {
                                                to: {
                                                    key: e.name,
                                                    value: t.redirect
                                                }
                                            }
                                        }) : t);
                                        break;
                                    case "boolean":
                                        c = n.BooleanSchema;
                                        break;
                                    case "flag":
                                        c = a({
                                            colorsModule: s,
                                            levenshteinDistance: o
                                        }),
                                        p.flags = i.flatMap(e=>[e.alias, e.description && e.name, e.oppositeDescription && `no-${e.name}`].filter(Boolean));
                                        break;
                                    default:
                                        throw Error(`Unexpected type ${e.type}`)
                                    }
                                    if (e.exception ? p.validate = (t,r,n)=>e.exception(t) || r.validate(t, n) : p.validate = (e,t,r)=>void 0 === e || t.validate(e, r),
                                    e.redirect && (d.redirect = t=>t ? {
                                        to: {
                                            key: e.redirect.option,
                                            value: e.redirect.value
                                        }
                                    } : void 0),
                                    e.deprecated && (d.deprecated = !0),
                                    r && !e.array) {
                                        let e = p.preprocess || (e=>e);
                                        p.preprocess = (t,r,n)=>r.preprocess(e(Array.isArray(t) ? u(t) : t), n)
                                    }
                                    return e.array ? n.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, r ? {
                                        preprocess: e=>Array.isArray(e) ? e : [e]
                                    } : {}), d), {}, {
                                        valueSchema: c.create(p)
                                    })) : c.create(Object.assign(Object.assign({}, p), d))
                                }(t, {
                                    isCLI: r,
                                    optionInfos: e,
                                    colorsModule: i,
                                    levenshteinDistance: s
                                })),
                                t.alias && r && o.push(n.AliasSchema.create({
                                    name: t.alias,
                                    sourceName: t.name
                                }));
                            return o
                        }(t, {
                            isCLI: p,
                            colorsModule: d,
                            levenshteinDistance: D
                        })
                          , y = new n.Normalizer(g,{
                            logger: o,
                            unknown: f,
                            descriptor: m
                        })
                          , h = !1 !== o;
                        h && r && (y._hasDeprecationWarned = r);
                        let E = y.normalize(e);
                        return h && (r = y._hasDeprecationWarned),
                        p && !1 === E["plugin-search"] && (E["plugin-search-dir"] = !1),
                        E
                    }
                    t.exports = {
                        normalizeApiOptions: function(e, t, r) {
                            return o(e, t, r)
                        },
                        normalizeCliOptions: function(e, t, r) {
                            return o(e, t, Object.assign({
                                isCLI: !0
                            }, r))
                        }
                    }
                }
            }), tb = h({
                "src/language-js/loc.js"(e, t) {
                    v();
                    var r = ei();
                    function n(e) {
                        var t, u;
                        let i = e.range ? e.range[0] : e.start
                          , a = null !== (t = null === (u = e.declaration) || void 0 === u ? void 0 : u.decorators) && void 0 !== t ? t : e.decorators;
                        return r(a) ? Math.min(n(a[0]), i) : i
                    }
                    function u(e) {
                        return e.range ? e.range[1] : e.end
                    }
                    function i(e, t) {
                        let r = n(e);
                        return Number.isInteger(r) && r === n(t)
                    }
                    t.exports = {
                        locStart: n,
                        locEnd: u,
                        hasSameLocStart: i,
                        hasSameLoc: function(e, t) {
                            let r;
                            return i(e, t) && Number.isInteger(r = u(e)) && r === u(t)
                        }
                    }
                }
            }), tS = h({
                "src/main/load-parser.js"(e, t) {
                    v(),
                    t.exports = ()=>{}
                }
            }), tT = h({
                "scripts/build/shims/babel-highlight.cjs"(e, t) {
                    v();
                    var r = tt();
                    t.exports = {
                        shouldHighlight: ()=>!1,
                        getChalk: ()=>r
                    }
                }
            }), tB = h({
                "node_modules/@babel/code-frame/lib/index.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.codeFrameColumns = u,
                    e.default = function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (!r) {
                            r = !0;
                            let e = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
                            p.emitWarning ? p.emitWarning(e, "DeprecationWarning") : (Error(e).name = "DeprecationWarning",
                            console.warn(Error(e)))
                        }
                        return u(e, {
                            start: {
                                column: n = Math.max(n, 0),
                                line: t
                            }
                        }, i)
                    }
                    ;
                    var t = tT()
                      , r = !1
                      , n = /\r\n|[\n\r\u2028\u2029]/;
                    function u(e, r) {
                        let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , i = (u.highlightCode || u.forceColor) && (0,
                        t.shouldHighlight)(u)
                          , a = (0,
                        t.getChalk)(u)
                          , s = {
                            gutter: a.grey,
                            marker: a.red.bold,
                            message: a.red.bold
                        }
                          , o = (e,t)=>i ? e(t) : t
                          , {start: l, end: p, markerLines: c} = function(e, t, r) {
                            let n = Object.assign({
                                column: 0,
                                line: -1
                            }, e.start)
                              , u = Object.assign({}, n, e.end)
                              , {linesAbove: i=2, linesBelow: a=3} = r || {}
                              , s = n.line
                              , o = n.column
                              , l = u.line
                              , p = u.column
                              , c = Math.max(s - (i + 1), 0)
                              , d = Math.min(t.length, l + a);
                            -1 === s && (c = 0),
                            -1 === l && (d = t.length);
                            let D = l - s
                              , f = {};
                            if (D)
                                for (let e = 0; e <= D; e++) {
                                    let r = e + s;
                                    if (o) {
                                        if (0 === e) {
                                            let e = t[r - 1].length;
                                            f[r] = [o, e - o + 1]
                                        } else if (e === D)
                                            f[r] = [0, p];
                                        else {
                                            let n = t[r - e].length;
                                            f[r] = [0, n]
                                        }
                                    } else
                                        f[r] = !0
                                }
                            else
                                o === p ? o ? f[s] = [o, 0] : f[s] = !0 : f[s] = [o, p - o];
                            return {
                                start: c,
                                end: d,
                                markerLines: f
                            }
                        }(r, e.split(n), u)
                          , d = r.start && "number" == typeof r.start.column
                          , D = String(p).length
                          , f = (i ? (0,
                        t.default)(e, u) : e).split(n, p).slice(l, p).map((e,t)=>{
                            let r = l + 1 + t
                              , n = ` ${` ${r}`.slice(-D)} |`
                              , i = c[r]
                              , a = !c[r + 1];
                            if (!i)
                                return ` ${o(s.gutter, n)}${e.length > 0 ? ` ${e}` : ""}`;
                            {
                                let t = "";
                                if (Array.isArray(i)) {
                                    let r = e.slice(0, Math.max(i[0] - 1, 0)).replace(/[^\t]/g, " ")
                                      , l = i[1] || 1;
                                    t = [`
 `, o(s.gutter, n.replace(/\d/g, " ")), " ", r, o(s.marker, "^").repeat(l)].join(""),
                                    a && u.message && (t += " " + o(s.message, u.message))
                                }
                                return [o(s.marker, ">"), o(s.gutter, n), e.length > 0 ? ` ${e}` : "", t].join("")
                            }
                        }
                        ).join(`
`);
                        return u.message && !d && (f = `${" ".repeat(D + 1)}${u.message}
${f}`),
                        i ? a.reset(f) : f
                    }
                }
            }), tN = h({
                "src/main/parser.js"(e, t) {
                    v();
                    var {ConfigError: r} = ej()
                      , n = tb()
                      , {locStart: u, locEnd: i} = (tS(),
                    n)
                      , a = Object.getOwnPropertyNames
                      , s = Object.getOwnPropertyDescriptor;
                    function o(e) {
                        let t = {};
                        for (let r of e.plugins)
                            if (r.parsers)
                                for (let e of a(r.parsers))
                                    Object.defineProperty(t, e, s(r.parsers, e));
                        return t
                    }
                    function l(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(e);
                        if ("function" == typeof e.parser)
                            return {
                                parse: e.parser,
                                astFormat: "estree",
                                locStart: u,
                                locEnd: i
                            };
                        if ("string" == typeof e.parser) {
                            if (Object.prototype.hasOwnProperty.call(t, e.parser))
                                return t[e.parser];
                            throw new r(`Couldn't resolve parser "${e.parser}". Parsers must be explicitly added to the standalone bundle.`)
                        }
                    }
                    t.exports = {
                        parse: function(e, t) {
                            let r = o(t)
                              , n = Object.defineProperties({}, Object.fromEntries(Object.keys(r).map(e=>[e, {
                                enumerable: !0,
                                get: ()=>r[e].parse
                            }])))
                              , u = l(t, r);
                            try {
                                return u.preprocess && (e = u.preprocess(e, t)),
                                {
                                    text: e,
                                    ast: u.parse(e, n, t)
                                }
                            } catch (r) {
                                let {loc: t} = r;
                                if (t) {
                                    let {codeFrameColumns: n} = tB();
                                    throw r.codeFrame = n(e, t, {
                                        highlightCode: !0
                                    }),
                                    r.message += `
` + r.codeFrame,
                                    r
                                }
                                throw r
                            }
                        },
                        resolveParser: l
                    }
                }
            }), tw = h({
                "src/main/options.js"(e, t) {
                    v();
                    var r = ek()
                      , {UndefinedParserError: n} = ej()
                      , {getSupportInfo: u} = eu()
                      , i = tx()
                      , {resolveParser: a} = tN()
                      , s = {
                        astFormat: "estree",
                        printer: {},
                        originalText: void 0,
                        locStart: null,
                        locEnd: null
                    };
                    function o(e, t) {
                        let n = r.basename(e).toLowerCase()
                          , i = u({
                            plugins: t
                        }).languages.filter(e=>null !== e.since).find(e=>e.extensions && e.extensions.some(e=>n.endsWith(e)) || e.filenames && e.filenames.some(e=>e.toLowerCase() === n));
                        return i && i.parsers[0]
                    }
                    t.exports = {
                        normalize: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                              , r = Object.assign({}, e)
                              , l = u({
                                plugins: e.plugins,
                                showUnreleased: !0,
                                showDeprecated: !0
                            }).options
                              , p = Object.assign(Object.assign({}, s), Object.fromEntries(l.filter(e=>void 0 !== e.default).map(e=>[e.name, e.default])));
                            if (!r.parser) {
                                if (r.filepath) {
                                    if (r.parser = o(r.filepath, r.plugins),
                                    !r.parser)
                                        throw new n(`No parser could be inferred for file: ${r.filepath}`)
                                } else
                                    (t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."),
                                    r.parser = "babel"
                            }
                            let c = a(i.normalizeApiOptions(r, [l.find(e=>"parser" === e.name)], {
                                passThrough: !0,
                                logger: !1
                            }));
                            r.astFormat = c.astFormat,
                            r.locEnd = c.locEnd,
                            r.locStart = c.locStart;
                            let d = function(e) {
                                let {astFormat: t} = e;
                                if (!t)
                                    throw Error("getPlugin() requires astFormat to be set");
                                let r = e.plugins.find(e=>e.printers && e.printers[t]);
                                if (!r)
                                    throw Error(`Couldn't find plugin for AST format "${t}"`);
                                return r
                            }(r);
                            r.printer = d.printers[r.astFormat];
                            let D = Object.fromEntries(l.filter(e=>e.pluginDefaults && void 0 !== e.pluginDefaults[d.name]).map(e=>[e.name, e.pluginDefaults[d.name]]));
                            for (let[e,t] of Object.entries(Object.assign(Object.assign({}, p), D)))
                                (null === r[e] || void 0 === r[e]) && (r[e] = t);
                            return "json" === r.parser && (r.trailingComma = "none"),
                            i.normalizeApiOptions(r, l, Object.assign({
                                passThrough: Object.keys(s)
                            }, t))
                        },
                        hiddenDefaults: s,
                        inferParser: o
                    }
                }
            }), tk = h({
                "src/main/massage-ast.js"(e, t) {
                    v(),
                    t.exports = function e(t, r, n) {
                        if (Array.isArray(t))
                            return t.map(t=>e(t, r, n)).filter(Boolean);
                        if (!t || "object" != typeof t)
                            return t;
                        let u = r.printer.massageAstNode, i;
                        i = u && u.ignoredProperties ? u.ignoredProperties : new Set;
                        let a = {};
                        for (let[n,u] of Object.entries(t))
                            i.has(n) || "function" == typeof u || (a[n] = e(u, r, t));
                        if (u) {
                            let e = u(t, a, n);
                            if (null === e)
                                return;
                            if (e)
                                return e
                        }
                        return a
                    }
                }
            }), tj = h({
                "scripts/build/shims/assert.cjs"(e, t) {
                    v();
                    var r = ()=>{}
                    ;
                    r.ok = r,
                    r.strictEqual = r,
                    t.exports = r
                }
            }), tP = h({
                "src/main/comments.js"(e, t) {
                    v();
                    var r = tj()
                      , {builders: {line: n, hardline: u, breakParent: i, indent: a, lineSuffix: s, join: o, cursor: l}} = W()
                      , {hasNewline: p, skipNewline: c, skipSpaces: d, isPreviousLineEmpty: D, addLeadingComment: f, addDanglingComment: m, addTrailingComment: g} = ec()
                      , y = new WeakMap;
                    function h(e, t, r) {
                        if (!e)
                            return;
                        let {printer: n, locStart: u, locEnd: i} = t;
                        if (r) {
                            if (n.canAttachComment && n.canAttachComment(e)) {
                                let t;
                                for (t = r.length - 1; t >= 0 && !(u(r[t]) <= u(e) && i(r[t]) <= i(e)); --t)
                                    ;
                                r.splice(t + 1, 0, e);
                                return
                            }
                        } else if (y.has(e))
                            return y.get(e);
                        let a = n.getCommentChildNodes && n.getCommentChildNodes(e, t) || "object" == typeof e && Object.entries(e).filter(e=>{
                            let[t] = e;
                            return "enclosingNode" !== t && "precedingNode" !== t && "followingNode" !== t && "tokens" !== t && "comments" !== t && "parent" !== t
                        }
                        ).map(e=>{
                            let[,t] = e;
                            return t
                        }
                        );
                        if (a) {
                            for (let n of (r || (r = [],
                            y.set(e, r)),
                            a))
                                h(n, t, r);
                            return r
                        }
                    }
                    var E = ()=>!1
                      , C = e=>!/[\S\n\u2028\u2029]/.test(e);
                    function F(e, t, n) {
                        let u = e.length;
                        if (0 === u)
                            return;
                        let {precedingNode: i, followingNode: a, enclosingNode: s} = e[0], o = n.printer.getGapRegex && n.printer.getGapRegex(s) || /^[\s(]*$/, l = n.locStart(a), p;
                        for (p = u; p > 0; --p) {
                            let {comment: u, precedingNode: s, followingNode: c} = e[p - 1];
                            r.strictEqual(s, i),
                            r.strictEqual(c, a);
                            let d = t.slice(n.locEnd(u), l);
                            if (o.test(d))
                                l = n.locStart(u);
                            else
                                break
                        }
                        for (let[t,{comment: r}] of e.entries())
                            t < p ? g(i, r) : f(a, r);
                        for (let e of [i, a])
                            e.comments && e.comments.length > 1 && e.comments.sort((e,t)=>n.locStart(e) - n.locStart(t));
                        e.length = 0
                    }
                    function A(e, t) {
                        return e.getValue().printed = !0,
                        t.printer.printComment(e, t)
                    }
                    function x(e, t, r) {
                        let n = r.locStart(t) - 1;
                        for (let t = 1; t < e.length; ++t)
                            if (n < r.locStart(e[t]))
                                return t - 1;
                        return 0
                    }
                    function b(e, t, r) {
                        let a = e.getValue();
                        if (!a)
                            return {};
                        let o = a.comments || [];
                        r && (o = o.filter(e=>!r.has(e)));
                        let f = a === t.cursorNode;
                        if (0 === o.length) {
                            let e = f ? l : "";
                            return {
                                leading: e,
                                trailing: e
                            }
                        }
                        let m = []
                          , g = [];
                        return e.each(()=>{
                            let a = e.getValue();
                            if (r && r.has(a))
                                return;
                            let {leading: o, trailing: l} = a;
                            o ? m.push(function(e, t) {
                                let r = e.getValue()
                                  , i = [A(e, t)]
                                  , {printer: a, originalText: s, locStart: o, locEnd: l} = t;
                                if (a.isBlockComment && a.isBlockComment(r)) {
                                    let e = p(s, l(r)) ? p(s, o(r), {
                                        backwards: !0
                                    }) ? u : n : " ";
                                    i.push(e)
                                } else
                                    i.push(u);
                                let D = c(s, d(s, l(r)));
                                return !1 !== D && p(s, D) && i.push(u),
                                i
                            }(e, t)) : l && g.push(function(e, t) {
                                let r = e.getValue()
                                  , n = A(e, t)
                                  , {printer: a, originalText: o, locStart: l} = t
                                  , c = a.isBlockComment && a.isBlockComment(r);
                                if (p(o, l(r), {
                                    backwards: !0
                                }))
                                    return s([u, D(o, r, l) ? u : "", n]);
                                let d = [" ", n];
                                return c || (d = [s(d), i]),
                                d
                            }(e, t))
                        }
                        , "comments"),
                        f && (m.unshift(l),
                        g.push(l)),
                        {
                            leading: m,
                            trailing: g
                        }
                    }
                    t.exports = {
                        attach: function(e, t, r, n) {
                            if (!Array.isArray(e))
                                return;
                            let u = []
                              , {locStart: i, locEnd: a, printer: {handleComments: s={}}} = n
                              , {avoidAstMutation: o, ownLine: l=E, endOfLine: c=E, remaining: d=E} = s
                              , D = e.map((u,i)=>Object.assign(Object.assign({}, function e(t, r, n, u) {
                                let {locStart: i, locEnd: a} = n, s = i(r), o = a(r), l = h(t, n), p, c, d = 0, D = l.length;
                                for (; d < D; ) {
                                    let t = d + D >> 1
                                      , u = l[t]
                                      , f = i(u)
                                      , m = a(u);
                                    if (f <= s && o <= m)
                                        return e(u, r, n, u);
                                    if (m <= s) {
                                        p = u,
                                        d = t + 1;
                                        continue
                                    }
                                    if (o <= f) {
                                        c = u,
                                        D = t;
                                        continue
                                    }
                                    throw Error("Comment location overlaps with node location")
                                }
                                if (u && "TemplateLiteral" === u.type) {
                                    let {quasis: e} = u
                                      , t = x(e, r, n);
                                    p && x(e, p, n) !== t && (p = null),
                                    c && x(e, c, n) !== t && (c = null)
                                }
                                return {
                                    enclosingNode: u,
                                    precedingNode: p,
                                    followingNode: c
                                }
                            }(t, u, n)), {}, {
                                comment: u,
                                text: r,
                                options: n,
                                ast: t,
                                isLastComment: e.length - 1 === i
                            }));
                            for (let[e,t] of D.entries()) {
                                let r, {comment: n, precedingNode: s, enclosingNode: y, followingNode: h, text: E, options: A, ast: v, isLastComment: x} = t;
                                if ("json" === A.parser || "json5" === A.parser || "__js_expression" === A.parser || "__vue_expression" === A.parser || "__vue_ts_expression" === A.parser) {
                                    if (i(n) - i(v) <= 0) {
                                        f(v, n);
                                        continue
                                    }
                                    if (a(n) - a(v) >= 0) {
                                        g(v, n);
                                        continue
                                    }
                                }
                                if (o ? r = [t] : (n.enclosingNode = y,
                                n.precedingNode = s,
                                n.followingNode = h,
                                r = [n, E, A, v, x]),
                                function(e, t, r, n) {
                                    let {comment: u, precedingNode: i} = r[n]
                                      , {locStart: a, locEnd: s} = t
                                      , o = a(u);
                                    if (i)
                                        for (let t = n - 1; t >= 0; t--) {
                                            let {comment: n, precedingNode: u} = r[t];
                                            if (u !== i || !C(e.slice(s(n), o)))
                                                break;
                                            o = a(n)
                                        }
                                    return p(e, o, {
                                        backwards: !0
                                    })
                                }(E, A, D, e))
                                    n.placement = "ownLine",
                                    l(...r) || (h ? f(h, n) : s ? g(s, n) : m(y || v, n));
                                else if (function(e, t, r, n) {
                                    let {comment: u, followingNode: i} = r[n]
                                      , {locStart: a, locEnd: s} = t
                                      , o = s(u);
                                    if (i)
                                        for (let t = n + 1; t < r.length; t++) {
                                            let {comment: n, followingNode: u} = r[t];
                                            if (u !== i || !C(e.slice(o, a(n))))
                                                break;
                                            o = s(n)
                                        }
                                    return p(e, o)
                                }(E, A, D, e))
                                    n.placement = "endOfLine",
                                    c(...r) || (s ? g(s, n) : h ? f(h, n) : m(y || v, n));
                                else if (n.placement = "remaining",
                                !d(...r)) {
                                    if (s && h) {
                                        let e = u.length;
                                        e > 0 && u[e - 1].followingNode !== h && F(u, E, A),
                                        u.push(t)
                                    } else
                                        s ? g(s, n) : h ? f(h, n) : m(y || v, n)
                                }
                            }
                            if (F(u, r, n),
                            !o)
                                for (let t of e)
                                    delete t.precedingNode,
                                    delete t.enclosingNode,
                                    delete t.followingNode
                        },
                        printComments: function(e, t, r, n) {
                            let {leading: u, trailing: i} = b(e, r, n);
                            return u || i ? [u, t, i] : t
                        },
                        printCommentsSeparately: b,
                        printDanglingComments: function(e, t, r, n) {
                            let i = []
                              , s = e.getValue();
                            return s && s.comments && (e.each(()=>{
                                let r = e.getValue();
                                !r.leading && !r.trailing && (!n || n(r)) && i.push(A(e, t))
                            }
                            , "comments"),
                            0 !== i.length) ? r ? o(u, i) : a([u, o(u, i)]) : ""
                        },
                        getSortedChildNodes: h,
                        ensureAllCommentsPrinted: function(e) {
                            if (e)
                                for (let t of e) {
                                    if (!t.printed)
                                        throw Error('Comment "' + t.value.trim() + '" was not printed. Please report this error!');
                                    delete t.printed
                                }
                        }
                    }
                }
            }), tI = h({
                "src/common/ast-path.js"(e, t) {
                    v();
                    var r = N();
                    function n(e, t) {
                        let r = u(e.stack, t);
                        return -1 === r ? null : e.stack[r]
                    }
                    function u(e, t) {
                        for (let r = e.length - 1; r >= 0; r -= 2) {
                            let n = e[r];
                            if (n && !Array.isArray(n) && --t < 0)
                                return r
                        }
                        return -1
                    }
                    var i = class {
                        constructor(e) {
                            this.stack = [e]
                        }
                        getName() {
                            let {stack: e} = this
                              , {length: t} = e;
                            return t > 1 ? e[t - 2] : null
                        }
                        getValue() {
                            return r(this.stack)
                        }
                        getNode() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            return n(this, e)
                        }
                        getParentNode() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            return n(this, e + 1)
                        }
                        call(e) {
                            let {stack: t} = this
                              , {length: n} = t
                              , u = r(t);
                            for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                                a[s - 1] = arguments[s];
                            for (let e of a)
                                u = u[e],
                                t.push(e, u);
                            let o = e(this);
                            return t.length = n,
                            o
                        }
                        callParent(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                              , r = u(this.stack, t + 1)
                              , n = this.stack.splice(r + 1)
                              , i = e(this);
                            return this.stack.push(...n),
                            i
                        }
                        each(e) {
                            let {stack: t} = this
                              , {length: n} = t
                              , u = r(t);
                            for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                                a[s - 1] = arguments[s];
                            for (let e of a)
                                u = u[e],
                                t.push(e, u);
                            for (let r = 0; r < u.length; ++r)
                                t.push(r, u[r]),
                                e(this, r, u),
                                t.length -= 2;
                            t.length = n
                        }
                        map(e) {
                            let t = [];
                            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
                                n[u - 1] = arguments[u];
                            return this.each((r,n,u)=>{
                                t[n] = e(r, n, u)
                            }
                            , ...n),
                            t
                        }
                        try(e) {
                            let {stack: t} = this
                              , r = [...t];
                            try {
                                return e()
                            } finally {
                                t.length = 0,
                                t.push(...r)
                            }
                        }
                        match() {
                            let e = this.stack.length - 1
                              , t = null
                              , r = this.stack[e--];
                            for (var n = arguments.length, u = Array(n), i = 0; i < n; i++)
                                u[i] = arguments[i];
                            for (let n of u) {
                                if (void 0 === r)
                                    return !1;
                                let u = null;
                                if ("number" == typeof t && (u = t,
                                t = this.stack[e--],
                                r = this.stack[e--]),
                                n && !n(r, t, u))
                                    return !1;
                                t = this.stack[e--],
                                r = this.stack[e--]
                            }
                            return !0
                        }
                        findAncestor(e) {
                            let t = this.stack.length - 1
                              , r = null
                              , n = this.stack[t--];
                            for (; n; ) {
                                let u = null;
                                if ("number" == typeof r && (u = r,
                                r = this.stack[t--],
                                n = this.stack[t--]),
                                null !== r && e(n, r, u))
                                    return n;
                                r = this.stack[t--],
                                n = this.stack[t--]
                            }
                        }
                    }
                    ;
                    t.exports = i
                }
            }), tO = h({
                "src/main/multiparser.js"(e, t) {
                    v();
                    var {utils: {stripTrailingHardline: r}} = W()
                      , {normalize: n} = tw()
                      , u = tP();
                    t.exports = {
                        printSubtree: function(e, t, i, a) {
                            if (i.printer.embed && "auto" === i.embeddedLanguageFormatting)
                                return i.printer.embed(e, t, (e,t,s)=>(function(e, t, i, a) {
                                    let {stripTrailingHardline: s=!1} = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
                                      , o = n(Object.assign(Object.assign(Object.assign({}, i), t), {}, {
                                        parentParser: i.parser,
                                        originalText: e
                                    }), {
                                        passThrough: !0
                                    })
                                      , l = tN().parse(e, o)
                                      , {ast: p} = l;
                                    e = l.text;
                                    let c = p.comments;
                                    delete p.comments,
                                    u.attach(c, p, e, o),
                                    o[Symbol.for("comments")] = c || [],
                                    o[Symbol.for("tokens")] = p.tokens || [];
                                    let d = a(p, o);
                                    return u.ensureAllCommentsPrinted(c),
                                    s ? "string" == typeof d ? d.replace(/(?:\r?\n)*$/, "") : r(d) : d
                                }
                                )(e, t, i, a, s), i)
                        }
                    }
                }
            }), tL = h({
                "src/main/ast-to-doc.js"(e, t) {
                    v();
                    var r = tI()
                      , {builders: {hardline: n, addAlignmentToDoc: u}, utils: {propagateBreaks: i}} = W()
                      , {printComments: a} = tP()
                      , s = tO();
                    t.exports = function e(t, o) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                          , {printer: p} = o;
                        p.preprocess && (t = p.preprocess(t, o));
                        let c = new Map
                          , d = new r(t)
                          , D = f();
                        return l > 0 && (D = u([n, D], l, o.tabWidth)),
                        i(D),
                        D;
                        function f(e, t) {
                            return void 0 === e || e === d ? m(t) : Array.isArray(e) ? d.call(()=>m(t), ...e) : d.call(()=>m(t), e)
                        }
                        function m(t) {
                            let r = d.getValue()
                              , n = r && "object" == typeof r && void 0 === t;
                            if (n && c.has(r))
                                return c.get(r);
                            let u = function(t, r, n, u) {
                                let i = t.getValue(), {printer: o} = r, l, p;
                                if (o.hasPrettierIgnore && o.hasPrettierIgnore(t))
                                    ({doc: l, printedComments: p} = function(e, t) {
                                        let {originalText: r, [Symbol.for("comments")]: n, locStart: u, locEnd: i} = t
                                          , a = u(e)
                                          , s = i(e)
                                          , o = new Set;
                                        for (let e of n)
                                            u(e) >= a && i(e) <= s && (e.printed = !0,
                                            o.add(e));
                                        return {
                                            doc: r.slice(a, s),
                                            printedComments: o
                                        }
                                    }(i, r));
                                else {
                                    if (i)
                                        try {
                                            l = s.printSubtree(t, n, r, e)
                                        } catch (e) {
                                            if (globalThis.PRETTIER_DEBUG)
                                                throw e
                                        }
                                    l || (l = o.print(t, r, n, u))
                                }
                                return o.willPrintOwnComments && o.willPrintOwnComments(t, r) || (l = a(t, l, r, p)),
                                l
                            }(d, o, f, t);
                            return n && c.set(r, u),
                            u
                        }
                    }
                }
            }), t_ = h({
                "src/main/range-util.js"(e, t) {
                    v();
                    var r = tj()
                      , n = tP()
                      , u = e=>{
                        let {parser: t} = e;
                        return "json" === t || "json5" === t || "json-stringify" === t
                    }
                    ;
                    function i(e) {
                        let t = e.length - 1;
                        for (; ; ) {
                            let r = e[t];
                            if (r && ("Program" === r.type || "File" === r.type))
                                t--;
                            else
                                break
                        }
                        return e.slice(0, t + 1)
                    }
                    function a(e, t, r, u) {
                        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : []
                          , s = arguments.length > 5 ? arguments[5] : void 0
                          , {locStart: o, locEnd: l} = r
                          , p = o(e)
                          , c = l(e);
                        if (!(t > c || t < p || "rangeEnd" === s && t === p || "rangeStart" === s && t === c)) {
                            for (let o of n.getSortedChildNodes(e, r)) {
                                let n = a(o, t, r, u, [e, ...i], s);
                                if (n)
                                    return n
                            }
                            if (!u || u(e, i[0]))
                                return {
                                    node: e,
                                    parentNodes: i
                                }
                        }
                    }
                    var s = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"])
                      , o = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
                    function l(e, t, r) {
                        if (!t)
                            return !1;
                        switch (e.parser) {
                        case "flow":
                        case "babel":
                        case "babel-flow":
                        case "babel-ts":
                        case "typescript":
                        case "acorn":
                        case "espree":
                        case "meriyah":
                        case "__babel_estree":
                            var n;
                            return n = t.type,
                            "DeclareExportDeclaration" !== (r && r.type) && "TypeParameterDeclaration" !== n && ("Directive" === n || "TypeAlias" === n || "TSExportAssignment" === n || n.startsWith("Declare") || n.startsWith("TSDeclare") || n.endsWith("Statement") || n.endsWith("Declaration"));
                        case "json":
                        case "json5":
                        case "json-stringify":
                            return s.has(t.type);
                        case "graphql":
                            return o.has(t.kind);
                        case "vue":
                            return "root" !== t.tag
                        }
                        return !1
                    }
                    t.exports = {
                        calculateRange: function(e, t, n) {
                            let o, p, {rangeStart: c, rangeEnd: d, locStart: D, locEnd: f} = t;
                            r.ok(d > c);
                            let m = e.slice(c, d).search(/\S/)
                              , g = -1 === m;
                            if (!g)
                                for (c += m; d > c && !/\S/.test(e[d - 1]); --d)
                                    ;
                            let y = a(n, c, t, (e,r)=>l(t, e, r), [], "rangeStart")
                              , h = g ? y : a(n, d, t, e=>l(t, e), [], "rangeEnd");
                            if (!y || !h)
                                return {
                                    rangeStart: 0,
                                    rangeEnd: 0
                                };
                            if (u(t)) {
                                let e, t;
                                let r = (e = [y.node, ...y.parentNodes],
                                t = new Set([h.node, ...h.parentNodes]),
                                e.find(e=>s.has(e.type) && t.has(e)));
                                o = r,
                                p = r
                            } else
                                ({startNode: o, endNode: p} = function(e, t, r) {
                                    let {locStart: n, locEnd: u} = r
                                      , a = e.node
                                      , s = t.node;
                                    if (a === s)
                                        return {
                                            startNode: a,
                                            endNode: s
                                        };
                                    let o = n(e.node);
                                    for (let e of i(t.parentNodes))
                                        if (n(e) >= o)
                                            s = e;
                                        else
                                            break;
                                    let l = u(t.node);
                                    for (let t of i(e.parentNodes)) {
                                        if (u(t) <= l)
                                            a = t;
                                        else
                                            break;
                                        if (a === s)
                                            break
                                    }
                                    return {
                                        startNode: a,
                                        endNode: s
                                    }
                                }(y, h, t));
                            return {
                                rangeStart: Math.min(D(o), D(p)),
                                rangeEnd: Math.max(f(o), f(p))
                            }
                        },
                        findNodeAtOffset: a
                    }
                }
            }), tM = h({
                "src/main/core.js"(e, t) {
                    v();
                    var {diffArrays: r} = S()
                      , {printer: {printDocToString: n}, debug: {printDocToDebug: u}} = W()
                      , {getAlignmentSize: i} = ec()
                      , {guessEndOfLine: a, convertEndOfLineToChars: s, countEndOfLineChars: o, normalizeEndOfLine: l} = B()
                      , p = tw().normalize
                      , c = tk()
                      , d = tP()
                      , D = tN()
                      , f = tL()
                      , m = t_()
                      , g = Symbol("cursor");
                    function y(e, t, r) {
                        let n = t.comments;
                        return n && (delete t.comments,
                        d.attach(n, t, e, r)),
                        r[Symbol.for("comments")] = n || [],
                        r[Symbol.for("tokens")] = t.tokens || [],
                        r.originalText = e,
                        n
                    }
                    function h(e, t) {
                        let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (!e || 0 === e.trim().length)
                            return {
                                formatted: "",
                                cursorOffset: -1,
                                comments: []
                            };
                        let {ast: i, text: a} = D.parse(e, t);
                        if (t.cursorOffset >= 0) {
                            let e = m.findNodeAtOffset(i, t.cursorOffset, t);
                            e && e.node && (t.cursorNode = e.node)
                        }
                        let o = y(a, i, t)
                          , l = f(i, t, u)
                          , p = n(l, t);
                        if (d.ensureAllCommentsPrinted(o),
                        u > 0) {
                            let e = p.formatted.trim();
                            void 0 !== p.cursorNodeStart && (p.cursorNodeStart -= p.formatted.indexOf(e)),
                            p.formatted = e + s(t.endOfLine)
                        }
                        if (t.cursorOffset >= 0) {
                            let e, n, u, i, s;
                            if (t.cursorNode && p.cursorNodeText ? (e = t.locStart(t.cursorNode),
                            n = a.slice(e, t.locEnd(t.cursorNode)),
                            u = t.cursorOffset - e,
                            i = p.cursorNodeStart,
                            s = p.cursorNodeText) : (e = 0,
                            n = a,
                            u = t.cursorOffset,
                            i = 0,
                            s = p.formatted),
                            n === s)
                                return {
                                    formatted: p.formatted,
                                    cursorOffset: i + u,
                                    comments: o
                                };
                            let l = [...n];
                            l.splice(u, 0, g);
                            let c = r(l, [...s])
                              , d = i;
                            for (let e of c)
                                if (e.removed) {
                                    if (e.value.includes(g))
                                        break
                                } else
                                    d += e.count;
                            return {
                                formatted: p.formatted,
                                cursorOffset: d,
                                comments: o
                            }
                        }
                        return {
                            formatted: p.formatted,
                            cursorOffset: -1,
                            comments: o
                        }
                    }
                    function E(e, t, r) {
                        return "number" != typeof t || Number.isNaN(t) || t < 0 || t > e.length ? r : t
                    }
                    function C(e, t) {
                        let {cursorOffset: r, rangeStart: n, rangeEnd: u} = t;
                        return r = E(e, r, -1),
                        n = E(e, n, 0),
                        u = E(e, u, e.length),
                        Object.assign(Object.assign({}, t), {}, {
                            cursorOffset: r,
                            rangeStart: n,
                            rangeEnd: u
                        })
                    }
                    function F(e, t) {
                        let {cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i} = C(e, t)
                          , s = "\uFEFF" === e.charAt(0);
                        if (s && (e = e.slice(1),
                        r--,
                        n--,
                        u--),
                        "auto" === i && (i = a(e)),
                        e.includes("\r")) {
                            let t = t=>o(e.slice(0, Math.max(t, 0)), `\r
`);
                            r -= t(r),
                            n -= t(n),
                            u -= t(u),
                            e = l(e)
                        }
                        return {
                            hasBOM: s,
                            text: e,
                            options: C(e, Object.assign(Object.assign({}, t), {}, {
                                cursorOffset: r,
                                rangeStart: n,
                                rangeEnd: u,
                                endOfLine: i
                            }))
                        }
                    }
                    function A(e, t) {
                        let r = D.resolveParser(t);
                        return !r.hasPragma || r.hasPragma(e)
                    }
                    function x(e, t) {
                        let r, {hasBOM: n, text: u, options: a} = F(e, p(t));
                        return a.rangeStart >= a.rangeEnd && "" !== u || a.requirePragma && !A(u, a) ? {
                            formatted: e,
                            cursorOffset: t.cursorOffset,
                            comments: []
                        } : (a.rangeStart > 0 || a.rangeEnd < u.length ? r = function(e, t) {
                            let {ast: r, text: n} = D.parse(e, t)
                              , {rangeStart: u, rangeEnd: a} = m.calculateRange(n, t, r)
                              , l = n.slice(u, a)
                              , p = Math.min(u, n.lastIndexOf(`
`, u) + 1)
                              , c = i(n.slice(p, u).match(/^\s*/)[0], t.tabWidth)
                              , d = h(l, Object.assign(Object.assign({}, t), {}, {
                                rangeStart: 0,
                                rangeEnd: Number.POSITIVE_INFINITY,
                                cursorOffset: t.cursorOffset > u && t.cursorOffset <= a ? t.cursorOffset - u : -1,
                                endOfLine: "lf"
                            }), c)
                              , f = d.formatted.trimEnd()
                              , {cursorOffset: g} = t;
                            g > a ? g += f.length - l.length : d.cursorOffset >= 0 && (g = d.cursorOffset + u);
                            let y = n.slice(0, u) + f + n.slice(a);
                            if ("lf" !== t.endOfLine) {
                                let e = s(t.endOfLine);
                                g >= 0 && e === `\r
` && (g += o(y.slice(0, g), `
`)),
                                y = y.replace(/\n/g, e)
                            }
                            return {
                                formatted: y,
                                cursorOffset: g,
                                comments: d.comments
                            }
                        }(u, a) : (!a.requirePragma && a.insertPragma && a.printer.insertPragma && !A(u, a) && (u = a.printer.insertPragma(u)),
                        r = h(u, a)),
                        n && (r.formatted = "\uFEFF" + r.formatted,
                        r.cursorOffset >= 0 && r.cursorOffset++),
                        r)
                    }
                    t.exports = {
                        formatWithCursor: x,
                        parse(e, t, r) {
                            let {text: n, options: u} = F(e, p(t))
                              , i = D.parse(n, u);
                            return r && (i.ast = c(i.ast, u)),
                            i
                        },
                        formatAST(e, t) {
                            t = p(t);
                            let r = f(e, t);
                            return n(r, t)
                        },
                        formatDoc: (e,t)=>x(u(e), Object.assign(Object.assign({}, t), {}, {
                            parser: "__js_expression"
                        })).formatted,
                        printToDoc(e, t) {
                            t = p(t);
                            let {ast: r, text: n} = D.parse(e, t);
                            return y(n, r, t),
                            f(r, t)
                        },
                        printDocToString: (e,t)=>n(e, p(t))
                    }
                }
            }), t$ = h({
                "src/common/util-shared.js"(e, t) {
                    v();
                    var {getMaxContinuousCount: r, getStringWidth: n, getAlignmentSize: u, getIndentSize: i, skip: a, skipWhitespace: s, skipSpaces: o, skipNewline: l, skipToLineEnd: p, skipEverythingButNewLine: c, skipInlineComment: d, skipTrailingComment: D, hasNewline: f, hasNewlineInRange: m, hasSpaces: g, isNextLineEmpty: y, isNextLineEmptyAfterIndex: h, isPreviousLineEmpty: E, getNextNonSpaceNonCommentCharacterIndex: C, makeString: F, addLeadingComment: A, addDanglingComment: x, addTrailingComment: b} = ec();
                    t.exports = {
                        getMaxContinuousCount: r,
                        getStringWidth: n,
                        getAlignmentSize: u,
                        getIndentSize: i,
                        skip: a,
                        skipWhitespace: s,
                        skipSpaces: o,
                        skipNewline: l,
                        skipToLineEnd: p,
                        skipEverythingButNewLine: c,
                        skipInlineComment: d,
                        skipTrailingComment: D,
                        hasNewline: f,
                        hasNewlineInRange: m,
                        hasSpaces: g,
                        isNextLineEmpty: y,
                        isNextLineEmptyAfterIndex: h,
                        isPreviousLineEmpty: E,
                        getNextNonSpaceNonCommentCharacterIndex: C,
                        makeString: F,
                        addLeadingComment: A,
                        addDanglingComment: x,
                        addTrailingComment: b
                    }
                }
            }), tR = h({
                "src/utils/create-language.js"(e, t) {
                    v(),
                    t.exports = function(e, t) {
                        let {languageId: r} = e;
                        return Object.assign(Object.assign({
                            linguistLanguageId: r
                        }, l(e, o)), t(e))
                    }
                }
            }), tV = h({
                "node_modules/esutils/lib/ast.js"(e, t) {
                    v(),
                    function() {
                        function e(e) {
                            if (null == e)
                                return !1;
                            switch (e.type) {
                            case "BlockStatement":
                            case "BreakStatement":
                            case "ContinueStatement":
                            case "DebuggerStatement":
                            case "DoWhileStatement":
                            case "EmptyStatement":
                            case "ExpressionStatement":
                            case "ForInStatement":
                            case "ForStatement":
                            case "IfStatement":
                            case "LabeledStatement":
                            case "ReturnStatement":
                            case "SwitchStatement":
                            case "ThrowStatement":
                            case "TryStatement":
                            case "VariableDeclaration":
                            case "WhileStatement":
                            case "WithStatement":
                                return !0
                            }
                            return !1
                        }
                        function r(e) {
                            switch (e.type) {
                            case "IfStatement":
                                return null != e.alternate ? e.alternate : e.consequent;
                            case "LabeledStatement":
                            case "ForStatement":
                            case "ForInStatement":
                            case "WhileStatement":
                            case "WithStatement":
                                return e.body
                            }
                            return null
                        }
                        t.exports = {
                            isExpression: function(e) {
                                if (null == e)
                                    return !1;
                                switch (e.type) {
                                case "ArrayExpression":
                                case "AssignmentExpression":
                                case "BinaryExpression":
                                case "CallExpression":
                                case "ConditionalExpression":
                                case "FunctionExpression":
                                case "Identifier":
                                case "Literal":
                                case "LogicalExpression":
                                case "MemberExpression":
                                case "NewExpression":
                                case "ObjectExpression":
                                case "SequenceExpression":
                                case "ThisExpression":
                                case "UnaryExpression":
                                case "UpdateExpression":
                                    return !0
                                }
                                return !1
                            },
                            isStatement: e,
                            isIterationStatement: function(e) {
                                if (null == e)
                                    return !1;
                                switch (e.type) {
                                case "DoWhileStatement":
                                case "ForInStatement":
                                case "ForStatement":
                                case "WhileStatement":
                                    return !0
                                }
                                return !1
                            },
                            isSourceElement: function(t) {
                                return e(t) || null != t && "FunctionDeclaration" === t.type
                            },
                            isProblematicIfStatement: function(e) {
                                var t;
                                if ("IfStatement" !== e.type || null == e.alternate)
                                    return !1;
                                t = e.consequent;
                                do {
                                    if ("IfStatement" === t.type && null == t.alternate)
                                        return !0;
                                    t = r(t)
                                } while (t);
                                return !1
                            },
                            trailingStatement: r
                        }
                    }()
                }
            }), tW = h({
                "node_modules/esutils/lib/code.js"(e, t) {
                    v(),
                    function() {
                        var e, r, n, u, i, a;
                        function s(e) {
                            return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320)
                        }
                        for (r = {
                            NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                            NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
                        },
                        e = {
                            NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                            NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
                        },
                        n = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
                        u = Array(128),
                        a = 0; a < 128; ++a)
                            u[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || 36 === a || 95 === a;
                        for (i = Array(128),
                        a = 0; a < 128; ++a)
                            i[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || 36 === a || 95 === a;
                        t.exports = {
                            isDecimalDigit: function(e) {
                                return 48 <= e && e <= 57
                            },
                            isHexDigit: function(e) {
                                return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70
                            },
                            isOctalDigit: function(e) {
                                return e >= 48 && e <= 55
                            },
                            isWhiteSpace: function(e) {
                                return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && n.indexOf(e) >= 0
                            },
                            isLineTerminator: function(e) {
                                return 10 === e || 13 === e || 8232 === e || 8233 === e
                            },
                            isIdentifierStartES5: function(e) {
                                return e < 128 ? u[e] : r.NonAsciiIdentifierStart.test(s(e))
                            },
                            isIdentifierPartES5: function(e) {
                                return e < 128 ? i[e] : r.NonAsciiIdentifierPart.test(s(e))
                            },
                            isIdentifierStartES6: function(t) {
                                return t < 128 ? u[t] : e.NonAsciiIdentifierStart.test(s(t))
                            },
                            isIdentifierPartES6: function(t) {
                                return t < 128 ? i[t] : e.NonAsciiIdentifierPart.test(s(t))
                            }
                        }
                    }()
                }
            }), tq = h({
                "node_modules/esutils/lib/keyword.js"(e, t) {
                    v(),
                    function() {
                        var e = tW();
                        function r(e, t) {
                            return (!!t || "yield" !== e) && n(e, t)
                        }
                        function n(e, t) {
                            if (t && function(e) {
                                switch (e) {
                                case "implements":
                                case "interface":
                                case "package":
                                case "private":
                                case "protected":
                                case "public":
                                case "static":
                                case "let":
                                    return !0;
                                default:
                                    return !1
                                }
                            }(e))
                                return !0;
                            switch (e.length) {
                            case 2:
                                return "if" === e || "in" === e || "do" === e;
                            case 3:
                                return "var" === e || "for" === e || "new" === e || "try" === e;
                            case 4:
                                return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                            case 5:
                                return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                            case 6:
                                return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                            case 7:
                                return "default" === e || "finally" === e || "extends" === e;
                            case 8:
                                return "function" === e || "continue" === e || "debugger" === e;
                            case 10:
                                return "instanceof" === e;
                            default:
                                return !1
                            }
                        }
                        function u(e, t) {
                            return "null" === e || "true" === e || "false" === e || r(e, t)
                        }
                        function i(e, t) {
                            return "null" === e || "true" === e || "false" === e || n(e, t)
                        }
                        function a(t) {
                            var r, n, u;
                            if (0 === t.length || (u = t.charCodeAt(0),
                            !e.isIdentifierStartES5(u)))
                                return !1;
                            for (r = 1,
                            n = t.length; r < n; ++r)
                                if (u = t.charCodeAt(r),
                                !e.isIdentifierPartES5(u))
                                    return !1;
                            return !0
                        }
                        function s(t) {
                            var r, n, u, i, a;
                            if (0 === t.length)
                                return !1;
                            for (a = e.isIdentifierStartES6,
                            r = 0,
                            n = t.length; r < n; ++r) {
                                if (55296 <= (u = t.charCodeAt(r)) && u <= 56319) {
                                    if (++r >= n || !(56320 <= (i = t.charCodeAt(r)) && i <= 57343))
                                        return !1;
                                    u = (u - 55296) * 1024 + (i - 56320) + 65536
                                }
                                if (!a(u))
                                    return !1;
                                a = e.isIdentifierPartES6
                            }
                            return !0
                        }
                        t.exports = {
                            isKeywordES5: r,
                            isKeywordES6: n,
                            isReservedWordES5: u,
                            isReservedWordES6: i,
                            isRestrictedWord: function(e) {
                                return "eval" === e || "arguments" === e
                            },
                            isIdentifierNameES5: a,
                            isIdentifierNameES6: s,
                            isIdentifierES5: function(e, t) {
                                return a(e) && !u(e, t)
                            },
                            isIdentifierES6: function(e, t) {
                                return s(e) && !i(e, t)
                            }
                        }
                    }()
                }
            }), tJ = h({
                "node_modules/esutils/lib/utils.js"(e) {
                    v(),
                    e.ast = tV(),
                    e.code = tW(),
                    e.keyword = tq()
                }
            }), tU = h({
                "src/language-js/utils/is-block-comment.js"(e, t) {
                    v();
                    var r = new Set(["Block", "CommentBlock", "MultiLine"])
                      , n = e=>r.has(null == e ? void 0 : e.type);
                    t.exports = n
                }
            }), tH = h({
                "src/language-js/utils/is-node-matches.js"(e, t) {
                    v(),
                    t.exports = function(e, t) {
                        return t.some(t=>(function(e, t) {
                            let r = t.split(".");
                            for (let t = r.length - 1; t >= 0; t--) {
                                let n = r[t];
                                if (0 === t)
                                    return "Identifier" === e.type && e.name === n;
                                if ("MemberExpression" !== e.type || e.optional || e.computed || "Identifier" !== e.property.type || e.property.name !== n)
                                    return !1;
                                e = e.object
                            }
                        }
                        )(e, t))
                    }
                }
            }), tG = h({
                "src/language-js/utils/index.js"(e, t) {
                    v();
                    var r = tJ().keyword.isIdentifierNameES5
                      , {getLast: n, hasNewline: u, skipWhitespace: i, isNonEmptyArray: a, isNextLineEmptyAfterIndex: s, getStringWidth: o} = ec()
                      , {locStart: l, locEnd: p, hasSameLocStart: c} = tb()
                      , d = tU()
                      , D = tH()
                      , f = "(?:(?=.)\\s)"
                      , m = RegExp(`^${f}*:`)
                      , g = RegExp(`^${f}*::`);
                    function y(e) {
                        return e = new Set(e),
                        t=>e.has(null == t ? void 0 : t.type)
                    }
                    var h = y(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"])
                      , E = y(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"])
                      , C = y(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
                    function F(e) {
                        return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value
                    }
                    function A(e) {
                        return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value
                    }
                    var x = y(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"])
                      , b = y(["FunctionExpression", "ArrowFunctionExpression"]);
                    function S(e) {
                        return P(e) && "Identifier" === e.callee.type && ["async", "inject", "fakeAsync", "waitForAsync"].includes(e.callee.name)
                    }
                    var T = y(["JSXElement", "JSXFragment"]);
                    function B(e) {
                        return "get" === e.kind || "set" === e.kind
                    }
                    function N(e) {
                        return B(e) || c(e, e.value)
                    }
                    var w = y(["BinaryExpression", "LogicalExpression", "NGPipeExpression"])
                      , k = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"])
                      , j = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"]
                      , P = y(["CallExpression", "OptionalCallExpression"])
                      , I = y(["MemberExpression", "OptionalMemberExpression"]);
                    function O(e) {
                        return /^(?:\d+|\d+\.\d+)$/.test(e)
                    }
                    function L(e) {
                        return e.quasis.some(e=>e.value.raw.includes(`
`))
                    }
                    function _(e) {
                        var t, r;
                        return null !== (t = null === (r = e.extra) || void 0 === r ? void 0 : r.raw) && void 0 !== t ? t : e.raw
                    }
                    var M = {
                        "==": !0,
                        "!=": !0,
                        "===": !0,
                        "!==": !0
                    }
                      , $ = {
                        "*": !0,
                        "/": !0,
                        "%": !0
                    }
                      , R = {
                        ">>": !0,
                        ">>>": !0,
                        "<<": !0
                    }
                      , V = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((e,t)=>e.map(e=>[e, t])));
                    function W(e) {
                        return V.get(e)
                    }
                    var q = new WeakMap;
                    function J(e) {
                        if (q.has(e))
                            return q.get(e);
                        let t = [];
                        return e.this && t.push(e.this),
                        Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params),
                        e.rest && t.push(e.rest),
                        q.set(e, t),
                        t
                    }
                    var U = new WeakMap;
                    function H(e) {
                        if (U.has(e))
                            return U.get(e);
                        let t = e.arguments;
                        return "ImportExpression" === e.type && (t = [e.source],
                        e.attributes && t.push(e.attributes)),
                        U.set(e, t),
                        t
                    }
                    function G(e) {
                        return "prettier-ignore" === e.value.trim() && !e.unignore
                    }
                    function X(e) {
                        return e && (e.prettierIgnore || Q(e, z.PrettierIgnore))
                    }
                    var z = {
                        Leading: 2,
                        Trailing: 4,
                        Dangling: 8,
                        Block: 16,
                        Line: 32,
                        PrettierIgnore: 64,
                        First: 128,
                        Last: 256
                    }
                      , K = (e,t)=>{
                        if ("function" == typeof e && (t = e,
                        e = 0),
                        e || t)
                            return (r,n,u)=>!(e & z.Leading && !r.leading || e & z.Trailing && !r.trailing || e & z.Dangling && (r.leading || r.trailing) || e & z.Block && !d(r) || e & z.Line && !h(r) || e & z.First && 0 !== n || e & z.Last && n !== u.length - 1 || e & z.PrettierIgnore && !G(r) || t && !t(r))
                    }
                    ;
                    function Q(e, t, r) {
                        if (!a(null == e ? void 0 : e.comments))
                            return !1;
                        let n = K(t, r);
                        return !n || e.comments.some(n)
                    }
                    function Y(e, t, r) {
                        if (!Array.isArray(null == e ? void 0 : e.comments))
                            return [];
                        let n = K(t, r);
                        return n ? e.comments.filter(n) : e.comments
                    }
                    var Z = (e,t)=>{
                        let {originalText: r} = t;
                        return s(r, p(e))
                    }
                    ;
                    function ee(e) {
                        return P(e) || "NewExpression" === e.type || "ImportExpression" === e.type
                    }
                    var et = Symbol("ifWithoutBlockAndSameLineComment");
                    function er(e) {
                        return "TSAsExpression" === e.type || "TSSatisfiesExpression" === e.type
                    }
                    t.exports = {
                        getFunctionParameters: J,
                        iterateFunctionParametersPath: function(e, t) {
                            let r = e.getValue()
                              , n = 0
                              , u = e=>t(e, n++);
                            r.this && e.call(u, "this"),
                            Array.isArray(r.parameters) ? e.each(u, "parameters") : Array.isArray(r.params) && e.each(u, "params"),
                            r.rest && e.call(u, "rest")
                        },
                        getCallArguments: H,
                        iterateCallArgumentsPath: function(e, t) {
                            let r = e.getValue();
                            "ImportExpression" === r.type ? (e.call(e=>t(e, 0), "source"),
                            r.attributes && e.call(e=>t(e, 1), "attributes")) : e.each(t, "arguments")
                        },
                        hasRestParameter: function(e) {
                            var t;
                            return !!e.rest || (null === (t = n(J(e))) || void 0 === t ? void 0 : t.type) === "RestElement"
                        },
                        getLeftSide: function(e) {
                            var t, r, n, u, i, a;
                            return e.expressions ? e.expressions[0] : null !== (t = null !== (r = null !== (n = null !== (u = null !== (i = null !== (a = e.left) && void 0 !== a ? a : e.test) && void 0 !== i ? i : e.callee) && void 0 !== u ? u : e.object) && void 0 !== n ? n : e.tag) && void 0 !== r ? r : e.argument) && void 0 !== t ? t : e.expression
                        },
                        getLeftSidePathName: function(e, t) {
                            if (t.expressions)
                                return ["expressions", 0];
                            if (t.left)
                                return ["left"];
                            if (t.test)
                                return ["test"];
                            if (t.object)
                                return ["object"];
                            if (t.callee)
                                return ["callee"];
                            if (t.tag)
                                return ["tag"];
                            if (t.argument)
                                return ["argument"];
                            if (t.expression)
                                return ["expression"];
                            throw Error("Unexpected node has no left side.")
                        },
                        getParentExportDeclaration: function(e) {
                            let t = e.getParentNode();
                            return "declaration" === e.getName() && E(t) ? t : null
                        },
                        getTypeScriptMappedTypeModifier: function(e, t) {
                            return "+" === e || "-" === e ? e + t : t
                        },
                        hasFlowAnnotationComment: function(e) {
                            let t = null == e ? void 0 : e[0];
                            return d(t) && g.test(t.value)
                        },
                        hasFlowShorthandAnnotationComment: function(e) {
                            var t, r;
                            return (null === (t = e.extra) || void 0 === t ? void 0 : t.parenthesized) && d(null === (r = e.trailingComments) || void 0 === r ? void 0 : r[0]) && m.test(e.trailingComments[0].value)
                        },
                        hasLeadingOwnLineComment: function(e, t) {
                            return T(t) ? X(t) : Q(t, z.Leading, t=>u(e, p(t)))
                        },
                        hasNakedLeftSide: function(e) {
                            return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || P(e) || I(e) || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || er(e) || "TSNonNullExpression" === e.type
                        },
                        hasNode: function e(t, r) {
                            if (!t || "object" != typeof t)
                                return !1;
                            if (Array.isArray(t))
                                return t.some(t=>e(t, r));
                            let n = r(t);
                            return "boolean" == typeof n ? n : Object.values(t).some(t=>e(t, r))
                        },
                        hasIgnoreComment: function(e) {
                            return X(e.getValue())
                        },
                        hasNodeIgnoreComment: X,
                        identity: function(e) {
                            return e
                        },
                        isBinaryish: w,
                        isCallLikeExpression: ee,
                        isEnabledHackPipeline: function(e) {
                            return !!e.__isUsingHackPipeline
                        },
                        isLineComment: h,
                        isPrettierIgnoreComment: G,
                        isCallExpression: P,
                        isMemberExpression: I,
                        isExportDeclaration: E,
                        isFlowAnnotationComment: function(e, t) {
                            let r = l(t)
                              , n = i(e, p(t));
                            return !1 !== n && "/*" === e.slice(r, r + 2) && "*/" === e.slice(n, n + 2)
                        },
                        isFunctionCompositionArgs: function(e) {
                            if (e.length <= 1)
                                return !1;
                            let t = 0;
                            for (let r of e)
                                if (b(r)) {
                                    if ((t += 1) > 1)
                                        return !0
                                } else if (P(r)) {
                                    for (let e of r.arguments)
                                        if (b(e))
                                            return !0
                                }
                            return !1
                        },
                        isFunctionNotation: N,
                        isFunctionOrArrowExpression: b,
                        isGetterOrSetter: B,
                        isJestEachTemplateLiteral: function(e, t) {
                            let r = /^[fx]?(?:describe|it|test)$/;
                            return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && r.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && r.test(t.tag.object.object.name))
                        },
                        isJsxNode: T,
                        isLiteral: C,
                        isLongCurriedCallExpression: function(e) {
                            let t = e.getValue()
                              , r = e.getParentNode();
                            return P(t) && P(r) && r.callee === t && t.arguments.length > r.arguments.length && r.arguments.length > 0
                        },
                        isSimpleCallArgument: function e(t, r) {
                            if (r >= 2)
                                return !1;
                            let n = t=>e(t, r + 1)
                              , u = "Literal" === t.type && "regex"in t && t.regex.pattern || "RegExpLiteral" === t.type && t.pattern;
                            return !(u && o(u) > 5) && ("Literal" === t.type || "BigIntLiteral" === t.type || "DecimalLiteral" === t.type || "BooleanLiteral" === t.type || "NullLiteral" === t.type || "NumericLiteral" === t.type || "RegExpLiteral" === t.type || "StringLiteral" === t.type || "Identifier" === t.type || "ThisExpression" === t.type || "Super" === t.type || "PrivateName" === t.type || "PrivateIdentifier" === t.type || "ArgumentPlaceholder" === t.type || "Import" === t.type || ("TemplateLiteral" === t.type ? t.quasis.every(e=>!e.value.raw.includes(`
`)) && t.expressions.every(n) : "ObjectExpression" === t.type ? t.properties.every(e=>!e.computed && (e.shorthand || e.value && n(e.value))) : "ArrayExpression" === t.type ? t.elements.every(e=>null === e || n(e)) : ee(t) ? ("ImportExpression" === t.type || e(t.callee, r)) && H(t).every(n) : I(t) ? e(t.object, r) && e(t.property, r) : "UnaryExpression" === t.type && ({
                                "!": !0,
                                "-": !0,
                                "+": !0,
                                "~": !0
                            })[t.operator] ? e(t.argument, r) : "UpdateExpression" === t.type && ({
                                "++": !0,
                                "--": !0
                            })[t.operator] ? e(t.argument, r) : "TSNonNullExpression" === t.type && e(t.expression, r)))
                        },
                        isMemberish: function(e) {
                            return I(e) || "BindExpression" === e.type && !!e.object
                        },
                        isNumericLiteral: F,
                        isSignedNumericLiteral: function(e) {
                            return "UnaryExpression" === e.type && ("+" === e.operator || "-" === e.operator) && F(e.argument)
                        },
                        isObjectProperty: function(e) {
                            return e && ("ObjectProperty" === e.type || "Property" === e.type && !e.method && "init" === e.kind)
                        },
                        isObjectType: x,
                        isObjectTypePropertyAFunction: function(e) {
                            return ("ObjectTypeProperty" === e.type || "ObjectTypeInternalSlot" === e.type) && "FunctionTypeAnnotation" === e.value.type && !e.static && !N(e)
                        },
                        isSimpleType: function(e) {
                            return !!e && !!(("GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type) && !e.typeParameters || k.has(e.type))
                        },
                        isSimpleNumber: O,
                        isSimpleTemplateLiteral: function(e) {
                            let t = "expressions";
                            "TSTemplateLiteralType" === e.type && (t = "types");
                            let r = e[t];
                            return 0 !== r.length && r.every(e=>{
                                if (Q(e))
                                    return !1;
                                if ("Identifier" === e.type || "ThisExpression" === e.type)
                                    return !0;
                                if (I(e)) {
                                    let t = e;
                                    for (; I(t); )
                                        if ("Identifier" !== t.property.type && "Literal" !== t.property.type && "StringLiteral" !== t.property.type && "NumericLiteral" !== t.property.type || Q(t = t.object))
                                            return !1;
                                    return "Identifier" === t.type || "ThisExpression" === t.type
                                }
                                return !1
                            }
                            )
                        },
                        isStringLiteral: A,
                        isStringPropSafeToUnquote: function(e, t) {
                            return "json" !== t.parser && A(e.key) && _(e.key).slice(1, -1) === e.key.value && (r(e.key.value) && !("babel-ts" === t.parser && "ClassProperty" === e.type || "typescript" === t.parser && "PropertyDefinition" === e.type) || O(e.key.value) && String(Number(e.key.value)) === e.key.value && ("babel" === t.parser || "acorn" === t.parser || "espree" === t.parser || "meriyah" === t.parser || "__babel_estree" === t.parser))
                        },
                        isTemplateOnItsOwnLine: function(e, t) {
                            return ("TemplateLiteral" === e.type && L(e) || "TaggedTemplateExpression" === e.type && L(e.quasi)) && !u(t, l(e), {
                                backwards: !0
                            })
                        },
                        isTestCall: function e(t, r) {
                            var n;
                            if ("CallExpression" !== t.type)
                                return !1;
                            if (1 === t.arguments.length) {
                                if (S(t) && r && e(r))
                                    return b(t.arguments[0]);
                                if ("Identifier" === t.callee.type && /^(?:before|after)(?:Each|All)$/.test(t.callee.name) && 1 === t.arguments.length)
                                    return S(t.arguments[0])
                            } else if ((2 === t.arguments.length || 3 === t.arguments.length) && ("TemplateLiteral" === t.arguments[0].type || A(t.arguments[0])) && D(t.callee, j))
                                return (!t.arguments[2] || !!F(t.arguments[2])) && ((2 === t.arguments.length ? b(t.arguments[1]) : ("FunctionExpression" === (n = t.arguments[1]).type || "ArrowFunctionExpression" === n.type && "BlockStatement" === n.body.type) && J(t.arguments[1]).length <= 1) || S(t.arguments[1]));
                            return !1
                        },
                        isTheOnlyJsxElementInMarkdown: function(e, t) {
                            if ("markdown" !== e.parentParser && "mdx" !== e.parentParser)
                                return !1;
                            let r = t.getNode();
                            if (!r.expression || !T(r.expression))
                                return !1;
                            let n = t.getParentNode();
                            return "Program" === n.type && 1 === n.body.length
                        },
                        isTSXFile: function(e) {
                            return e.filepath && /\.tsx$/i.test(e.filepath)
                        },
                        isTypeAnnotationAFunction: function(e) {
                            return ("TypeAnnotation" === e.type || "TSTypeAnnotation" === e.type) && "FunctionTypeAnnotation" === e.typeAnnotation.type && !e.static && !c(e, e.typeAnnotation)
                        },
                        isNextLineEmpty: Z,
                        needsHardlineAfterDanglingComment: function(e) {
                            if (!Q(e))
                                return !1;
                            let t = n(Y(e, z.Dangling));
                            return t && !d(t)
                        },
                        rawText: _,
                        shouldPrintComma: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "es5";
                            return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t)
                        },
                        isBitwiseOperator: function(e) {
                            return !!R[e] || "|" === e || "^" === e || "&" === e
                        },
                        shouldFlatten: function(e, t) {
                            return !(W(t) !== W(e) || "**" === e || M[e] && M[t] || "%" === t && $[e] || "%" === e && $[t] || t !== e && $[t] && $[e] || R[e] && R[t])
                        },
                        startsWithNoLookaheadToken: function e(t, r) {
                            switch (t.type) {
                            case "BinaryExpression":
                            case "LogicalExpression":
                            case "AssignmentExpression":
                            case "NGPipeExpression":
                                return e(t.left, r);
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return e(t.object, r);
                            case "TaggedTemplateExpression":
                                return "FunctionExpression" !== t.tag.type && e(t.tag, r);
                            case "CallExpression":
                            case "OptionalCallExpression":
                                return "FunctionExpression" !== t.callee.type && e(t.callee, r);
                            case "ConditionalExpression":
                                return e(t.test, r);
                            case "UpdateExpression":
                                return !t.prefix && e(t.argument, r);
                            case "BindExpression":
                                return t.object && e(t.object, r);
                            case "SequenceExpression":
                                return e(t.expressions[0], r);
                            case "TSSatisfiesExpression":
                            case "TSAsExpression":
                            case "TSNonNullExpression":
                                return e(t.expression, r);
                            default:
                                return r(t)
                            }
                        },
                        getPrecedence: W,
                        hasComment: Q,
                        getComments: Y,
                        CommentCheckFlags: z,
                        markerForIfWithoutBlockAndSameLineComment: et,
                        isTSTypeExpression: er
                    }
                }
            }), tX = h({
                "src/language-js/print/template-literal.js"(e, t) {
                    v();
                    var r = N()
                      , {getStringWidth: n, getIndentSize: u} = ec()
                      , {builders: {join: i, hardline: a, softline: s, group: o, indent: l, align: p, lineSuffixBoundary: c, addAlignmentToDoc: d}, printer: {printDocToString: D}, utils: {mapDoc: f}} = W()
                      , {isBinaryish: m, isJestEachTemplateLiteral: g, isSimpleTemplateLiteral: y, hasComment: h, isMemberExpression: E, isTSTypeExpression: C} = tG();
                    function F(e) {
                        return e.replace(/([\\`]|\${)/g, "\\$1")
                    }
                    t.exports = {
                        printTemplateLiteral: function(e, t, f) {
                            let F = e.getValue();
                            if ("TemplateLiteral" === F.type && g(F, e.getParentNode())) {
                                let u = function(e, t, u) {
                                    let s = e.getNode()
                                      , o = s.quasis[0].value.raw.trim().split(/\s*\|\s*/);
                                    if (o.length > 1 || o.some(e=>e.length > 0)) {
                                        t.__inJestEach = !0;
                                        let p = e.map(u, "expressions");
                                        t.__inJestEach = !1;
                                        let d = []
                                          , f = p.map(e=>"${" + D(e, Object.assign(Object.assign({}, t), {}, {
                                            printWidth: Number.POSITIVE_INFINITY,
                                            endOfLine: "lf"
                                        })).formatted + "}")
                                          , m = [{
                                            hasLineBreak: !1,
                                            cells: []
                                        }];
                                        for (let e = 1; e < s.quasis.length; e++) {
                                            let t = r(m)
                                              , n = f[e - 1];
                                            t.cells.push(n),
                                            n.includes(`
`) && (t.hasLineBreak = !0),
                                            s.quasis[e].value.raw.includes(`
`) && m.push({
                                                hasLineBreak: !1,
                                                cells: []
                                            })
                                        }
                                        let g = Array.from({
                                            length: Math.max(o.length, ...m.map(e=>e.cells.length))
                                        }).fill(0)
                                          , y = [{
                                            cells: o
                                        }, ...m.filter(e=>e.cells.length > 0)];
                                        for (let {cells: e} of y.filter(e=>!e.hasLineBreak))
                                            for (let[t,r] of e.entries())
                                                g[t] = Math.max(g[t], n(r));
                                        return d.push(c, "`", l([a, i(a, y.map(e=>i(" | ", e.cells.map((t,r)=>e.hasLineBreak ? t : t + " ".repeat(g[r] - n(t))))))]), a, "`"),
                                        d
                                    }
                                }(e, f, t);
                                if (u)
                                    return u
                            }
                            let A = "expressions";
                            "TSTemplateLiteralType" === F.type && (A = "types");
                            let v = []
                              , x = e.map(t, A)
                              , b = y(F);
                            return b && (x = x.map(e=>D(e, Object.assign(Object.assign({}, f), {}, {
                                printWidth: Number.POSITIVE_INFINITY
                            })).formatted)),
                            v.push(c, "`"),
                            e.each(e=>{
                                let r = e.getName();
                                if (v.push(t()),
                                r < x.length) {
                                    let {tabWidth: t} = f
                                      , n = e.getValue()
                                      , i = u(n.value.raw, t)
                                      , a = x[r];
                                    if (!b) {
                                        let e = F[A][r];
                                        (h(e) || E(e) || "ConditionalExpression" === e.type || "SequenceExpression" === e.type || C(e) || m(e)) && (a = [l([s, a]), s])
                                    }
                                    let D = 0 === i && n.value.raw.endsWith(`
`) ? p(Number.NEGATIVE_INFINITY, a) : d(a, i, t);
                                    v.push(o(["${", D, c, "}"]))
                                }
                            }
                            , "quasis"),
                            v.push("`"),
                            v
                        },
                        printTemplateExpressions: function(e, t) {
                            return e.map(e=>{
                                let r, n;
                                return r = e.getValue(),
                                n = t(),
                                h(r) && (n = o([l([s, n]), s])),
                                ["${", n, c, "}"]
                            }
                            , "expressions")
                        },
                        escapeTemplateCharacters: function(e, t) {
                            return f(e, e=>"string" == typeof e ? t ? e.replace(/(\\*)`/g, "$1$1\\`") : F(e) : e)
                        },
                        uncookTemplateElementValue: F
                    }
                }
            }), tz = h({
                "src/language-js/embed/markdown.js"(e, t) {
                    v();
                    var {builders: {indent: r, softline: n, literalline: u, dedentToRoot: i}} = W()
                      , {escapeTemplateCharacters: a} = tX();
                    t.exports = function(e, t, s) {
                        let o;
                        let l = e.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (e,t)=>"\\".repeat(t.length / 2) + "`")
                          , p = null === (o = l.match(/^([^\S\n]*)\S/m)) ? "" : o[1]
                          , c = "" !== p;
                        c && (l = l.replace(RegExp(`^${p}`, "gm"), ""));
                        let d = a(s(l, {
                            parser: "markdown",
                            __inJsTemplate: !0
                        }, {
                            stripTrailingHardline: !0
                        }), !0);
                        return ["`", c ? r([n, d]) : [u, i(d)], n, "`"]
                    }
                }
            }), tK = h({
                "src/language-js/embed/css.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r} = ec()
                      , {builders: {indent: n, hardline: u, softline: i}, utils: {mapDoc: a, replaceEndOfLine: s, cleanDoc: o}} = W()
                      , {printTemplateExpressions: l} = tX();
                    t.exports = function(e, t, p) {
                        let c = e.getValue()
                          , d = c.quasis.map(e=>e.value.raw)
                          , D = 0;
                        return function(e, t, l) {
                            if (1 === t.quasis.length && !t.quasis[0].value.raw.trim())
                                return "``";
                            let p = function(e, t) {
                                if (!r(t))
                                    return e;
                                let n = 0
                                  , u = a(o(e), e=>"string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).map((e,r)=>r % 2 == 0 ? s(e) : (n++,
                                t[e])) : e);
                                return t.length === n ? u : null
                            }(e, l);
                            if (!p)
                                throw Error("Couldn't insert all the expressions");
                            return ["`", n([u, p]), i, "`"]
                        }(p(d.reduce((e,t,r)=>0 === r ? t : e + "@prettier-placeholder-" + D++ + "-id" + t, ""), {
                            parser: "scss"
                        }, {
                            stripTrailingHardline: !0
                        }), c, l(e, t))
                    }
                }
            }), tQ = h({
                "src/language-js/embed/graphql.js"(e, t) {
                    v();
                    var {builders: {indent: r, join: n, hardline: u}} = W()
                      , {escapeTemplateCharacters: i, printTemplateExpressions: a} = tX();
                    t.exports = function(e, t, s) {
                        let o = e.getValue()
                          , l = o.quasis.length;
                        if (1 === l && "" === o.quasis[0].value.raw.trim())
                            return "``";
                        let p = a(e, t)
                          , c = [];
                        for (let e = 0; e < l; e++) {
                            let t = o.quasis[e]
                              , r = 0 === e
                              , a = e === l - 1
                              , d = t.value.cooked
                              , D = d.split(`
`)
                              , f = D.length
                              , m = p[e]
                              , g = f > 2 && "" === D[0].trim() && "" === D[1].trim()
                              , y = f > 2 && "" === D[f - 1].trim() && "" === D[f - 2].trim()
                              , h = D.every(e=>/^\s*(?:#[^\n\r]*)?$/.test(e));
                            if (!a && /#[^\n\r]*$/.test(D[f - 1]))
                                return null;
                            let E = null;
                            (E = h ? function(e) {
                                let t = []
                                  , r = !1
                                  , i = e.map(e=>e.trim());
                                for (let[e,n] of i.entries())
                                    "" !== n && ("" === i[e - 1] && r ? t.push([u, n]) : t.push(n),
                                    r = !0);
                                return 0 === t.length ? null : n(u, t)
                            }(D) : s(d, {
                                parser: "graphql"
                            }, {
                                stripTrailingHardline: !0
                            })) ? (E = i(E, !1),
                            !r && g && c.push(""),
                            c.push(E),
                            !a && y && c.push("")) : r || a || !g || c.push(""),
                            m && c.push(m)
                        }
                        return ["`", r([u, n(u, c)]), u, "`"]
                    }
                }
            }), tY = h({
                "src/language-js/embed/html.js"(e, t) {
                    v();
                    var {builders: {indent: r, line: n, hardline: u, group: i}, utils: {mapDoc: a}} = W()
                      , {printTemplateExpressions: s, uncookTemplateElementValue: o} = tX()
                      , l = 0;
                    t.exports = function(e, t, p, c, d) {
                        let {parser: D} = d
                          , f = e.getValue()
                          , m = l;
                        l = l + 1 >>> 0;
                        let g = e=>`PRETTIER_HTML_PLACEHOLDER_ ${e}_ ${m}_IN_JS`
                          , y = f.quasis.map((e,t,r)=>t === r.length - 1 ? e.value.cooked : e.value.cooked + g(t)).join("")
                          , h = s(e, t);
                        if (0 === h.length && 0 === y.trim().length)
                            return "``";
                        let E = RegExp(g("(\\d+)"), "g")
                          , C = 0
                          , F = a(p(y, {
                            parser: D,
                            __onHtmlRoot(e) {
                                C = e.children.length
                            }
                        }, {
                            stripTrailingHardline: !0
                        }), e=>{
                            if ("string" != typeof e)
                                return e;
                            let t = []
                              , r = e.split(E);
                            for (let e = 0; e < r.length; e++) {
                                let n = r[e];
                                if (e % 2 == 0) {
                                    n && (n = o(n),
                                    c.__embeddedInHtml && (n = n.replace(/<\/(script)\b/gi, "<\\/$1")),
                                    t.push(n));
                                    continue
                                }
                                let u = Number(n);
                                t.push(h[u])
                            }
                            return t
                        }
                        )
                          , A = /^\s/.test(y) ? " " : ""
                          , v = /\s$/.test(y) ? " " : ""
                          , x = "ignore" === c.htmlWhitespaceSensitivity ? u : A && v ? n : null;
                        return i(x ? ["`", r([x, i(F)]), x, "`"] : ["`", A, C > 1 ? r(i(F)) : i(F), v, "`"])
                    }
                }
            }), tZ = h({
                "src/language-js/embed.js"(e, t) {
                    v();
                    var {hasComment: r, CommentCheckFlags: n, isObjectProperty: u} = tG()
                      , i = tz()
                      , a = tK()
                      , s = tQ()
                      , o = tY()
                      , l = [(e,t)=>"ObjectExpression" === e.type && "properties" === t, (e,t)=>"CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t, (e,t)=>"Decorator" === e.type && "expression" === t];
                    function p(e) {
                        return "Identifier" === e.type && "styled" === e.name
                    }
                    function c(e) {
                        return /^[A-Z]/.test(e.object.name) && "extend" === e.property.name
                    }
                    function d(e, t) {
                        return r(e, n.Block | n.Leading, e=>{
                            let {value: r} = e;
                            return r === ` ${t} `
                        }
                        )
                    }
                    t.exports = function(e, t, r, n) {
                        let D, f, m, g, y, h, E, C, F, A = e.getValue();
                        if ("TemplateLiteral" !== A.type || function(e) {
                            let {quasis: t} = e;
                            return t.some(e=>{
                                let {value: {cooked: t}} = e;
                                return null === t
                            }
                            )
                        }(A))
                            return;
                        let v = (D = e.getValue(),
                        f = e.getParentNode(),
                        (m = e.getParentNode(1)) && D.quasis && "JSXExpressionContainer" === f.type && "JSXElement" === m.type && "style" === m.openingElement.name.name && m.openingElement.attributes.some(e=>"jsx" === e.name.name) || f && "TaggedTemplateExpression" === f.type && "Identifier" === f.tag.type && "css" === f.tag.name || f && "TaggedTemplateExpression" === f.type && "MemberExpression" === f.tag.type && "css" === f.tag.object.name && ("global" === f.tag.property.name || "resolve" === f.tag.property.name) || function(e) {
                            let t = e.getParentNode();
                            if (!t || "TaggedTemplateExpression" !== t.type)
                                return !1;
                            let r = "ParenthesizedExpression" === t.tag.type ? t.tag.expression : t.tag;
                            switch (r.type) {
                            case "MemberExpression":
                                return p(r.object) || c(r);
                            case "CallExpression":
                                return p(r.callee) || "MemberExpression" === r.callee.type && ("MemberExpression" === r.callee.object.type && (p(r.callee.object.object) || c(r.callee.object)) || "CallExpression" === r.callee.object.type && p(r.callee.object.callee));
                            case "Identifier":
                                return "css" === r.name;
                            default:
                                return !1
                            }
                        }(e) || (g = e.getParentNode(),
                        (y = e.getParentNode(1)) && "JSXExpressionContainer" === g.type && "JSXAttribute" === y.type && "JSXIdentifier" === y.name.type && "css" === y.name.name) || e.match(e=>"TemplateLiteral" === e.type, (e,t)=>"ArrayExpression" === e.type && "elements" === t, (e,t)=>u(e) && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t, ...l)) ? "css" : (h = e.getValue(),
                        E = e.getParentNode(),
                        d(h, "GraphQL") || E && ("TaggedTemplateExpression" === E.type && ("MemberExpression" === E.tag.type && "graphql" === E.tag.object.name && "experimental" === E.tag.property.name || "Identifier" === E.tag.type && ("gql" === E.tag.name || "graphql" === E.tag.name)) || "CallExpression" === E.type && "Identifier" === E.callee.type && "graphql" === E.callee.name)) ? "graphql" : d(e.getValue(), "HTML") || e.match(e=>"TemplateLiteral" === e.type, (e,t)=>"TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t) ? "html" : e.match(e=>"TemplateLiteral" === e.type, (e,t)=>u(e) && "Identifier" === e.key.type && "template" === e.key.name && "value" === t, ...l) ? "angular" : (C = e.getValue(),
                        (F = e.getParentNode()) && "TaggedTemplateExpression" === F.type && 1 === C.quasis.length && "Identifier" === F.tag.type && ("md" === F.tag.name || "markdown" === F.tag.name)) ? "markdown" : void 0;
                        if (v) {
                            if ("markdown" === v)
                                return i(e, t, r);
                            if ("css" === v)
                                return a(e, t, r);
                            if ("graphql" === v)
                                return s(e, t, r);
                            if ("html" === v || "angular" === v)
                                return o(e, t, r, n, {
                                    parser: v
                                })
                        }
                    }
                }
            }), t0 = h({
                "src/language-js/clean.js"(e, t) {
                    v();
                    var r = tU()
                      , n = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"])
                      , u = e=>{
                        for (let t of e.quasis)
                            delete t.value
                    }
                    ;
                    function i(e, t, n) {
                        if ("Program" === e.type && delete t.sourceType,
                        ("BigIntLiteral" === e.type || "BigIntLiteralTypeAnnotation" === e.type) && t.value && (t.value = t.value.toLowerCase()),
                        ("BigIntLiteral" === e.type || "Literal" === e.type) && t.bigint && (t.bigint = t.bigint.toLowerCase()),
                        "DecimalLiteral" === e.type && (t.value = Number(t.value)),
                        "Literal" === e.type && t.decimal && (t.decimal = Number(t.decimal)),
                        "EmptyStatement" === e.type || "JSXText" === e.type || "JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value)
                            return null;
                        if (("Property" === e.type || "ObjectProperty" === e.type || "MethodDefinition" === e.type || "ClassProperty" === e.type || "ClassMethod" === e.type || "PropertyDefinition" === e.type || "TSDeclareMethod" === e.type || "TSPropertySignature" === e.type || "ObjectTypeProperty" === e.type) && "object" == typeof e.key && e.key && ("Literal" === e.key.type || "NumericLiteral" === e.key.type || "StringLiteral" === e.key.type || "Identifier" === e.key.type) && delete t.key,
                        "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(e=>"jsx" === e.name.name))
                            for (let {type: e, expression: r} of t.children)
                                "JSXExpressionContainer" === e && "TemplateLiteral" === r.type && u(r);
                        "JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && u(t.value.expression),
                        "JSXAttribute" === e.type && e.value && "Literal" === e.value.type && /["']|&quot;|&apos;/.test(e.value.value) && (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"'));
                        let i = e.expression || e.callee;
                        if ("Decorator" === e.type && "CallExpression" === i.type && "Component" === i.callee.name && 1 === i.arguments.length) {
                            let r = e.expression.arguments[0].properties;
                            for (let[e,n] of t.expression.arguments[0].properties.entries())
                                switch (r[e].key.name) {
                                case "styles":
                                    "ArrayExpression" === n.value.type && u(n.value.elements[0]);
                                    break;
                                case "template":
                                    "TemplateLiteral" === n.value.type && u(n.value)
                                }
                        }
                        if ("TaggedTemplateExpression" === e.type && ("MemberExpression" === e.tag.type || "Identifier" === e.tag.type && ("gql" === e.tag.name || "graphql" === e.tag.name || "css" === e.tag.name || "md" === e.tag.name || "markdown" === e.tag.name || "html" === e.tag.name) || "CallExpression" === e.tag.type) && u(t.quasi),
                        "TemplateLiteral" === e.type) {
                            var a;
                            ((null === (a = e.leadingComments) || void 0 === a ? void 0 : a.some(e=>r(e) && ["GraphQL", "HTML"].some(t=>e.value === ` ${t} `))) || "CallExpression" === n.type && "graphql" === n.callee.name || !e.leadingComments) && u(t)
                        }
                        if ("InterpreterDirective" === e.type && (t.value = t.value.trimEnd()),
                        ("TSIntersectionType" === e.type || "TSUnionType" === e.type) && 1 === e.types.length)
                            return t.types[0]
                    }
                    i.ignoredProperties = n,
                    t.exports = i
                }
            }), t1 = {};
            function t2() {
                if (typeof ra > "u") {
                    var e = new ArrayBuffer(2)
                      , t = new Uint8Array(e)
                      , r = new Uint16Array(e);
                    if (t[0] = 1,
                    t[1] = 2,
                    258 === r[0])
                        ra = "BE";
                    else if (513 === r[0])
                        ra = "LE";
                    else
                        throw Error("unable to figure out endianess")
                }
                return ra
            }
            function t3() {
                return "u" > typeof globalThis.location ? globalThis.location.hostname : ""
            }
            function t8() {
                return []
            }
            function t6() {
                return 0
            }
            function t7() {
                return Number.MAX_VALUE
            }
            function t9() {
                return Number.MAX_VALUE
            }
            function t5() {
                return []
            }
            function t4() {
                return "Browser"
            }
            function re() {
                return "u" > typeof globalThis.navigator ? globalThis.navigator.appVersion : ""
            }
            function rt() {}
            function rr() {}
            function rn() {
                return "javascript"
            }
            function ru() {
                return "browser"
            }
            function ri() {
                return "/tmp"
            }
            E(t1, {
                EOL: ()=>ro,
                arch: ()=>rn,
                cpus: ()=>t5,
                default: ()=>rl,
                endianness: ()=>t2,
                freemem: ()=>t7,
                getNetworkInterfaces: ()=>rr,
                hostname: ()=>t3,
                loadavg: ()=>t8,
                networkInterfaces: ()=>rt,
                platform: ()=>ru,
                release: ()=>re,
                tmpDir: ()=>ri,
                tmpdir: ()=>rs,
                totalmem: ()=>t9,
                type: ()=>t4,
                uptime: ()=>t6
            });
            var ra, rs, ro, rl, rp = y({
                "node-modules-polyfills:os"() {
                    v(),
                    rl = {
                        EOL: ro = `
`,
                        tmpdir: rs = ri,
                        tmpDir: ri,
                        networkInterfaces: rt,
                        getNetworkInterfaces: rr,
                        release: re,
                        type: t4,
                        cpus: t5,
                        totalmem: t9,
                        freemem: t7,
                        uptime: t6,
                        loadavg: t8,
                        hostname: t3,
                        endianness: t2
                    }
                }
            }), rc = h({
                "node-modules-polyfills-commonjs:os"(e, t) {
                    v();
                    var r = (rp(),
                    A(t1));
                    if (r && r.default)
                        for (let e in t.exports = r.default,
                        r)
                            t.exports[e] = r[e];
                    else
                        r && (t.exports = r)
                }
            }), rd = h({
                "node_modules/detect-newline/index.js"(e, t) {
                    v();
                    var r = e=>{
                        if ("string" != typeof e)
                            throw TypeError("Expected a string");
                        let t = e.match(/(?:\r?\n)/g) || [];
                        if (0 === t.length)
                            return;
                        let r = t.filter(e=>e === `\r
`).length
                          , n = t.length - r;
                        return r > n ? `\r
` : `
`
                    }
                    ;
                    t.exports = r,
                    t.exports.graceful = e=>"string" == typeof e && r(e) || `
`
                }
            }), rD = h({
                "node_modules/jest-docblock/build/index.js"(e) {
                    function t() {
                        let e = rc();
                        return t = function() {
                            return e
                        }
                        ,
                        e
                    }
                    function r() {
                        var e;
                        let t = (e = rd()) && e.__esModule ? e : {
                            default: e
                        };
                        return r = function() {
                            return t
                        }
                        ,
                        t
                    }
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.extract = function(e) {
                        let t = e.match(i);
                        return t ? t[0].trimLeft() : ""
                    }
                    ,
                    e.parse = function(e) {
                        return d(e).pragmas
                    }
                    ,
                    e.parseWithComments = d,
                    e.print = function(e) {
                        let {comments: n="", pragmas: u={}} = e
                          , i = (0,
                        r().default)(n) || t().EOL
                          , a = Object.keys(u)
                          , s = a.map(e=>D(e, u[e])).reduce((e,t)=>e.concat(t), []).map(e=>` * ${e}${i}`).join("");
                        if (!n) {
                            if (0 === a.length)
                                return "";
                            if (1 === a.length && !Array.isArray(u[a[0]]))
                                return `/** ${D(a[0], u[a[0]])[0]} */`
                        }
                        let o = n.split(i).map(e=>` * ${e}`).join(i) + i;
                        return "/**" + i + (n ? o : "") + (n && a.length ? " *" + i : "") + s + " */"
                    }
                    ,
                    e.strip = function(e) {
                        let t = e.match(i);
                        return t && t[0] ? e.substring(t[0].length) : e
                    }
                    ;
                    var n = /\*\/$/
                      , u = /^\/\*\*?/
                      , i = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/
                      , a = /(^|\s+)\/\/([^\r\n]*)/g
                      , s = /^(\r?\n)+/
                      , o = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g
                      , l = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g
                      , p = /(\r?\n|^) *\* ?/g
                      , c = [];
                    function d(e) {
                        let i = (0,
                        r().default)(e) || t().EOL;
                        e = e.replace(u, "").replace(n, "").replace(p, "$1");
                        let d = "";
                        for (; d !== e; )
                            d = e,
                            e = e.replace(o, `${i}$1 $2 ${i}`);
                        e = e.replace(s, "").trimRight();
                        let D = Object.create(null), f = e.replace(l, "").replace(s, "").trimRight(), m;
                        for (; m = l.exec(e); ) {
                            let e = m[2].replace(a, "");
                            "string" == typeof D[m[1]] || Array.isArray(D[m[1]]) ? D[m[1]] = c.concat(D[m[1]], e) : D[m[1]] = e
                        }
                        return {
                            comments: f,
                            pragmas: D
                        }
                    }
                    function D(e, t) {
                        return c.concat(t).map(t=>`@${e} ${t}`.trim())
                    }
                }
            }), rf = h({
                "src/language-js/utils/get-shebang.js"(e, t) {
                    v(),
                    t.exports = function(e) {
                        if (!e.startsWith("#!"))
                            return "";
                        let t = e.indexOf(`
`);
                        return -1 === t ? e : e.slice(0, t)
                    }
                }
            }), rm = h({
                "src/language-js/pragma.js"(e, t) {
                    v();
                    var {parseWithComments: r, strip: n, extract: u, print: i} = rD()
                      , {normalizeEndOfLine: a} = B()
                      , s = rf();
                    function o(e) {
                        let t = s(e);
                        t && (e = e.slice(t.length + 1));
                        let {pragmas: n, comments: i} = r(u(e));
                        return {
                            shebang: t,
                            text: e,
                            pragmas: n,
                            comments: i
                        }
                    }
                    t.exports = {
                        hasPragma: function(e) {
                            let t = Object.keys(o(e).pragmas);
                            return t.includes("prettier") || t.includes("format")
                        },
                        insertPragma: function(e) {
                            let {shebang: t, text: r, pragmas: u, comments: s} = o(e)
                              , l = n(r);
                            return (t ? `${t}
` : "") + a(i({
                                pragmas: Object.assign({
                                    format: ""
                                }, u),
                                comments: s.trimStart()
                            })) + (l.startsWith(`
`) ? `
` : `

`) + l
                        }
                    }
                }
            }), rg = h({
                "src/language-js/utils/is-type-cast-comment.js"(e, t) {
                    v();
                    var r = tU();
                    t.exports = function(e) {
                        return r(e) && "*" === e.value[0] && /@(?:type|satisfies)\b/.test(e.value)
                    }
                }
            }), ry = h({
                "src/language-js/comments.js"(e, t) {
                    v();
                    var {getLast: r, hasNewline: n, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: u, getNextNonSpaceNonCommentCharacter: i, hasNewlineInRange: a, addLeadingComment: s, addTrailingComment: o, addDanglingComment: l, getNextNonSpaceNonCommentCharacterIndex: p, isNonEmptyArray: c} = ec()
                      , {getFunctionParameters: d, isPrettierIgnoreComment: D, isJsxNode: f, hasFlowShorthandAnnotationComment: m, hasFlowAnnotationComment: g, hasIgnoreComment: y, isCallLikeExpression: h, getCallArguments: E, isCallExpression: C, isMemberExpression: F, isObjectProperty: A, isLineComment: x, getComments: b, CommentCheckFlags: S, markerForIfWithoutBlockAndSameLineComment: T} = tG()
                      , {locStart: B, locEnd: N} = tb()
                      , w = tU()
                      , k = rg();
                    function j(e, t) {
                        let r = (e.body || e.properties).find(e=>{
                            let {type: t} = e;
                            return "EmptyStatement" !== t
                        }
                        );
                        r ? s(r, t) : l(e, t)
                    }
                    function P(e, t) {
                        "BlockStatement" === e.type ? j(e, t) : s(e, t)
                    }
                    function I(e) {
                        let {comment: t, followingNode: r} = e;
                        return !!(r && k(t)) && (s(r, t),
                        !0)
                    }
                    function O(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, followingNode: u, text: a} = e;
                        if ((null == n ? void 0 : n.type) !== "IfStatement" || !u)
                            return !1;
                        if (")" === i(a, t, N))
                            return o(r, t),
                            !0;
                        if (r === n.consequent && u === n.alternate) {
                            if ("BlockStatement" === r.type)
                                o(r, t);
                            else {
                                let e = "SingleLine" === t.type || t.loc.start.line === t.loc.end.line
                                  , u = t.loc.start.line === r.loc.start.line;
                                e && u ? l(r, t, T) : l(n, t)
                            }
                            return !0
                        }
                        return "BlockStatement" === u.type ? (j(u, t),
                        !0) : "IfStatement" === u.type ? (P(u.consequent, t),
                        !0) : n.consequent === u && (s(u, t),
                        !0)
                    }
                    function L(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, followingNode: u, text: a} = e;
                        return (null == n ? void 0 : n.type) === "WhileStatement" && !!u && (")" === i(a, t, N) ? (o(r, t),
                        !0) : "BlockStatement" === u.type ? (j(u, t),
                        !0) : n.body === u && (s(u, t),
                        !0))
                    }
                    function _(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, followingNode: u} = e;
                        return ((null == n ? void 0 : n.type) === "TryStatement" || (null == n ? void 0 : n.type) === "CatchClause") && !!u && ("CatchClause" === n.type && r ? (o(r, t),
                        !0) : "BlockStatement" === u.type ? (j(u, t),
                        !0) : "TryStatement" === u.type ? (P(u.finalizer, t),
                        !0) : "CatchClause" === u.type && (P(u.body, t),
                        !0))
                    }
                    function M(e) {
                        let {comment: t, enclosingNode: r, followingNode: n} = e;
                        return !!F(r) && (null == n ? void 0 : n.type) === "Identifier" && (s(r, t),
                        !0)
                    }
                    function $(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, followingNode: u, text: i} = e
                          , o = r && !a(i, N(r), B(t));
                        return (!r || !o) && ((null == n ? void 0 : n.type) === "ConditionalExpression" || (null == n ? void 0 : n.type) === "TSConditionalType") && !!u && (s(u, t),
                        !0)
                    }
                    function R(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n} = e;
                        return !!A(n) && !!n.shorthand && n.key === r && "AssignmentPattern" === n.value.type && (o(n.value.left, t),
                        !0)
                    }
                    var V = new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
                    function W(e) {
                        let {comment: t, precedingNode: n, enclosingNode: u, followingNode: i} = e;
                        if (V.has(null == u ? void 0 : u.type)) {
                            if (c(u.decorators) && !(i && "Decorator" === i.type))
                                return o(r(u.decorators), t),
                                !0;
                            if (u.body && i === u.body)
                                return j(u.body, t),
                                !0;
                            if (i) {
                                if (u.superClass && i === u.superClass && n && (n === u.id || n === u.typeParameters))
                                    return o(n, t),
                                    !0;
                                for (let e of ["implements", "extends", "mixins"])
                                    if (u[e] && i === u[e][0])
                                        return n && (n === u.id || n === u.typeParameters || n === u.superClass) ? o(n, t) : l(u, t, e),
                                        !0
                            }
                        }
                        return !1
                    }
                    var q = new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
                    function J(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, text: u} = e;
                        return !!(n && r && "(" === i(u, t, N) && ("Property" === n.type || "TSDeclareMethod" === n.type || "TSAbstractMethodDefinition" === n.type) && "Identifier" === r.type && n.key === r && ":" !== i(u, r, N) || (null == r ? void 0 : r.type) === "Decorator" && q.has(null == n ? void 0 : n.type)) && (o(r, t),
                        !0)
                    }
                    var U = new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
                    function H(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, text: u} = e;
                        return "(" === i(u, t, N) && !!(r && U.has(null == n ? void 0 : n.type)) && (o(r, t),
                        !0)
                    }
                    function G(e) {
                        let {comment: t, enclosingNode: r, text: n} = e;
                        if ((null == r ? void 0 : r.type) !== "ArrowFunctionExpression")
                            return !1;
                        let u = p(n, t, N);
                        return !1 !== u && "=>" === n.slice(u, u + 2) && (l(r, t),
                        !0)
                    }
                    function X(e) {
                        let {comment: t, enclosingNode: r, text: n} = e;
                        return ")" === i(n, t, N) && (r && (eD(r) && 0 === d(r).length || h(r) && 0 === E(r).length) ? (l(r, t),
                        !0) : ((null == r ? void 0 : r.type) === "MethodDefinition" || (null == r ? void 0 : r.type) === "TSAbstractMethodDefinition") && 0 === d(r.value).length && (l(r.value, t),
                        !0))
                    }
                    function z(e) {
                        let {comment: t, precedingNode: n, enclosingNode: a, followingNode: s, text: l} = e;
                        if ((null == n ? void 0 : n.type) === "FunctionTypeParam" && (null == a ? void 0 : a.type) === "FunctionTypeAnnotation" && (null == s ? void 0 : s.type) !== "FunctionTypeParam" || ((null == n ? void 0 : n.type) === "Identifier" || (null == n ? void 0 : n.type) === "AssignmentPattern") && a && eD(a) && ")" === i(l, t, N))
                            return o(n, t),
                            !0;
                        if ((null == a ? void 0 : a.type) === "FunctionDeclaration" && (null == s ? void 0 : s.type) === "BlockStatement") {
                            let e = (()=>{
                                let e = d(a);
                                if (e.length > 0)
                                    return u(l, N(r(e)));
                                let t = u(l, N(a.id));
                                return !1 !== t && u(l, t + 1)
                            }
                            )();
                            if (B(t) > e)
                                return j(s, t),
                                !0
                        }
                        return !1
                    }
                    function K(e) {
                        let {comment: t, enclosingNode: r} = e;
                        return (null == r ? void 0 : r.type) === "LabeledStatement" && (s(r, t),
                        !0)
                    }
                    function Q(e) {
                        let {comment: t, enclosingNode: r} = e;
                        return ((null == r ? void 0 : r.type) === "ContinueStatement" || (null == r ? void 0 : r.type) === "BreakStatement") && !r.label && (o(r, t),
                        !0)
                    }
                    function Y(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n} = e;
                        return !!C(n) && !!r && n.callee === r && n.arguments.length > 0 && (s(n.arguments[0], t),
                        !0)
                    }
                    function Z(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, followingNode: u} = e;
                        return (null == n ? void 0 : n.type) === "UnionTypeAnnotation" || (null == n ? void 0 : n.type) === "TSUnionType" ? (D(t) && (u.prettierIgnore = !0,
                        t.unignore = !0),
                        !!r && (o(r, t),
                        !0)) : (((null == u ? void 0 : u.type) === "UnionTypeAnnotation" || (null == u ? void 0 : u.type) === "TSUnionType") && D(t) && (u.types[0].prettierIgnore = !0,
                        t.unignore = !0),
                        !1)
                    }
                    function ee(e) {
                        let {comment: t, enclosingNode: r} = e;
                        return !!A(r) && (s(r, t),
                        !0)
                    }
                    function et(e) {
                        let {comment: t, enclosingNode: r, followingNode: n, ast: u, isLastComment: i} = e;
                        return u && u.body && 0 === u.body.length ? (i ? l(u, t) : s(u, t),
                        !0) : (null == r ? void 0 : r.type) !== "Program" || (null == r ? void 0 : r.body.length) !== 0 || c(r.directives) ? (null == n ? void 0 : n.type) === "Program" && (null == n ? void 0 : n.body.length) === 0 && (null == r ? void 0 : r.type) === "ModuleExpression" && (l(n, t),
                        !0) : (i ? l(r, t) : s(r, t),
                        !0)
                    }
                    function er(e) {
                        let {comment: t, enclosingNode: r} = e;
                        return ((null == r ? void 0 : r.type) === "ForInStatement" || (null == r ? void 0 : r.type) === "ForOfStatement") && (s(r, t),
                        !0)
                    }
                    function en(e) {
                        let {comment: t, precedingNode: r, enclosingNode: u, text: i} = e;
                        if ((null == u ? void 0 : u.type) === "ImportSpecifier" || (null == u ? void 0 : u.type) === "ExportSpecifier")
                            return s(u, t),
                            !0;
                        let a = (null == r ? void 0 : r.type) === "ImportSpecifier" && (null == u ? void 0 : u.type) === "ImportDeclaration"
                          , l = (null == r ? void 0 : r.type) === "ExportSpecifier" && (null == u ? void 0 : u.type) === "ExportNamedDeclaration";
                        return !!((a || l) && n(i, N(t))) && (o(r, t),
                        !0)
                    }
                    function eu(e) {
                        let {comment: t, enclosingNode: r} = e;
                        return (null == r ? void 0 : r.type) === "AssignmentPattern" && (s(r, t),
                        !0)
                    }
                    var ei = new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"])
                      , ea = new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
                    function es(e) {
                        let {comment: t, enclosingNode: r, followingNode: n} = e;
                        return !!(ei.has(null == r ? void 0 : r.type) && n && (ea.has(n.type) || w(t))) && (s(n, t),
                        !0)
                    }
                    function eo(e) {
                        let {comment: t, enclosingNode: r, followingNode: n, text: u} = e;
                        return !n && ((null == r ? void 0 : r.type) === "TSMethodSignature" || (null == r ? void 0 : r.type) === "TSDeclareFunction" || (null == r ? void 0 : r.type) === "TSAbstractMethodDefinition") && ";" === i(u, t, N) && (o(r, t),
                        !0)
                    }
                    function el(e) {
                        let {comment: t, enclosingNode: r, followingNode: n} = e;
                        if (D(t) && (null == r ? void 0 : r.type) === "TSMappedType" && (null == n ? void 0 : n.type) === "TSTypeParameter" && n.constraint)
                            return r.prettierIgnore = !0,
                            t.unignore = !0,
                            !0
                    }
                    function ep(e) {
                        let {comment: t, precedingNode: r, enclosingNode: n, followingNode: u} = e;
                        return (null == n ? void 0 : n.type) === "TSMappedType" && ((null == u ? void 0 : u.type) === "TSTypeParameter" && u.name ? (s(u.name, t),
                        !0) : (null == r ? void 0 : r.type) === "TSTypeParameter" && !!r.constraint && (o(r.constraint, t),
                        !0))
                    }
                    function ed(e) {
                        let {comment: t, enclosingNode: r, followingNode: n} = e;
                        return !!r && "SwitchCase" === r.type && !r.test && !!n && n === r.consequent[0] && ("BlockStatement" === n.type && x(t) ? j(n, t) : l(r, t),
                        !0)
                    }
                    function eD(e) {
                        return "ArrowFunctionExpression" === e.type || "FunctionExpression" === e.type || "FunctionDeclaration" === e.type || "ObjectMethod" === e.type || "ClassMethod" === e.type || "TSDeclareFunction" === e.type || "TSCallSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSMethodSignature" === e.type || "TSConstructorType" === e.type || "TSFunctionType" === e.type || "TSDeclareMethod" === e.type
                    }
                    t.exports = {
                        handleOwnLineComment: function(e) {
                            return [el, z, M, O, L, _, W, er, Z, et, en, eu, J, K, Q].some(t=>t(e))
                        },
                        handleEndOfLineComment: function(e) {
                            return [I, z, $, en, O, L, _, W, K, Y, ee, et, es, Q, ed].some(t=>t(e))
                        },
                        handleRemainingComment: function(e) {
                            return [el, O, L, R, X, J, et, G, H, ep, Q, eo].some(t=>t(e))
                        },
                        getCommentChildNodes: function(e, t) {
                            if (("typescript" === t.parser || "flow" === t.parser || "acorn" === t.parser || "espree" === t.parser || "meriyah" === t.parser || "__babel_estree" === t.parser) && "MethodDefinition" === e.type && e.value && "FunctionExpression" === e.value.type && 0 === d(e.value).length && !e.value.returnType && !c(e.value.typeParameters) && e.value.body)
                                return [...e.decorators || [], e.key, e.value.body]
                        },
                        willPrintOwnComments: function(e) {
                            let t = e.getValue()
                              , r = e.getParentNode();
                            return (t && (f(t) || m(t) || C(r) && (g(b(t, S.Leading)) || g(b(t, S.Trailing)))) || r && ("JSXSpreadAttribute" === r.type || "JSXSpreadChild" === r.type || "UnionTypeAnnotation" === r.type || "TSUnionType" === r.type || ("ClassDeclaration" === r.type || "ClassExpression" === r.type) && r.superClass === t)) && (!y(e) || "UnionTypeAnnotation" === r.type || "TSUnionType" === r.type)
                        }
                    }
                }
            }), rh = h({
                "src/language-js/needs-parens.js"(e, t) {
                    v();
                    var r = N()
                      , n = ei()
                      , {getFunctionParameters: u, getLeftSidePathName: i, hasFlowShorthandAnnotationComment: a, hasNakedLeftSide: s, hasNode: o, isBitwiseOperator: l, startsWithNoLookaheadToken: p, shouldFlatten: c, getPrecedence: d, isCallExpression: D, isMemberExpression: f, isObjectProperty: m, isTSTypeExpression: g} = tG();
                    t.exports = function e(t, y) {
                        var h, E;
                        let C = t.getParentNode();
                        if (!C)
                            return !1;
                        let F = t.getName()
                          , A = t.getNode();
                        if (y.__isInHtmlInterpolation && !y.bracketSpacing && "ObjectExpression" === A.type && function e(t) {
                            let n = t.getValue()
                              , u = t.getParentNode()
                              , i = t.getName();
                            switch (u.type) {
                            case "NGPipeExpression":
                                if ("number" == typeof i && u.arguments[i] === n && u.arguments.length - 1 === i)
                                    return t.callParent(e);
                                break;
                            case "ObjectProperty":
                                if ("value" === i)
                                    return r(t.getParentNode(1).properties) === u;
                                break;
                            case "BinaryExpression":
                            case "LogicalExpression":
                                if ("right" === i)
                                    return t.callParent(e);
                                break;
                            case "ConditionalExpression":
                                if ("alternate" === i)
                                    return t.callParent(e);
                                break;
                            case "UnaryExpression":
                                if (u.prefix)
                                    return t.callParent(e)
                            }
                            return !1
                        }(t))
                            return !0;
                        if ("BlockStatement" === A.type || "BreakStatement" === A.type || "ClassBody" === A.type || "ClassDeclaration" === A.type || "ClassMethod" === A.type || "ClassProperty" === A.type || "PropertyDefinition" === A.type || "ClassPrivateProperty" === A.type || "ContinueStatement" === A.type || "DebuggerStatement" === A.type || "DeclareClass" === A.type || "DeclareExportAllDeclaration" === A.type || "DeclareExportDeclaration" === A.type || "DeclareFunction" === A.type || "DeclareInterface" === A.type || "DeclareModule" === A.type || "DeclareModuleExports" === A.type || "DeclareVariable" === A.type || "DoWhileStatement" === A.type || "EnumDeclaration" === A.type || "ExportAllDeclaration" === A.type || "ExportDefaultDeclaration" === A.type || "ExportNamedDeclaration" === A.type || "ExpressionStatement" === A.type || "ForInStatement" === A.type || "ForOfStatement" === A.type || "ForStatement" === A.type || "FunctionDeclaration" === A.type || "IfStatement" === A.type || "ImportDeclaration" === A.type || "InterfaceDeclaration" === A.type || "LabeledStatement" === A.type || "MethodDefinition" === A.type || "ReturnStatement" === A.type || "SwitchStatement" === A.type || "ThrowStatement" === A.type || "TryStatement" === A.type || "TSDeclareFunction" === A.type || "TSEnumDeclaration" === A.type || "TSImportEqualsDeclaration" === A.type || "TSInterfaceDeclaration" === A.type || "TSModuleDeclaration" === A.type || "TSNamespaceExportDeclaration" === A.type || "TypeAlias" === A.type || "VariableDeclaration" === A.type || "WhileStatement" === A.type || "WithStatement" === A.type)
                            return !1;
                        if ("flow" !== y.parser && a(t.getValue()))
                            return !0;
                        if ("Identifier" === A.type) {
                            if (A.extra && A.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(A.name) || "left" === F && ("async" === A.name && !C.await || "let" === A.name) && "ForOfStatement" === C.type)
                                return !0;
                            if ("let" === A.name) {
                                let e = null === (h = t.findAncestor(e=>"ForOfStatement" === e.type)) || void 0 === h ? void 0 : h.left;
                                if (e && p(e, e=>e === A))
                                    return !0
                            }
                            if ("object" === F && "let" === A.name && "MemberExpression" === C.type && C.computed && !C.optional) {
                                let e = t.findAncestor(e=>"ExpressionStatement" === e.type || "ForStatement" === e.type || "ForInStatement" === e.type)
                                  , r = e ? "ExpressionStatement" === e.type ? e.expression : "ForStatement" === e.type ? e.init : e.left : void 0;
                                if (r && p(r, e=>e === A))
                                    return !0
                            }
                            return !1
                        }
                        if ("ObjectExpression" === A.type || "FunctionExpression" === A.type || "ClassExpression" === A.type || "DoExpression" === A.type) {
                            let e = null === (E = t.findAncestor(e=>"ExpressionStatement" === e.type)) || void 0 === E ? void 0 : E.expression;
                            if (e && p(e, e=>e === A))
                                return !0
                        }
                        switch (C.type) {
                        case "ParenthesizedExpression":
                            return !1;
                        case "ClassDeclaration":
                        case "ClassExpression":
                            if ("superClass" === F && ("ArrowFunctionExpression" === A.type || "AssignmentExpression" === A.type || "AwaitExpression" === A.type || "BinaryExpression" === A.type || "ConditionalExpression" === A.type || "LogicalExpression" === A.type || "NewExpression" === A.type || "ObjectExpression" === A.type || "SequenceExpression" === A.type || "TaggedTemplateExpression" === A.type || "UnaryExpression" === A.type || "UpdateExpression" === A.type || "YieldExpression" === A.type || "TSNonNullExpression" === A.type))
                                return !0;
                            break;
                        case "ExportDefaultDeclaration":
                            return function t(r, n) {
                                let u = r.getValue()
                                  , a = r.getParentNode();
                                return "FunctionExpression" === u.type || "ClassExpression" === u.type ? "ExportDefaultDeclaration" === a.type || !e(r, n) : !(!s(u) || "ExportDefaultDeclaration" !== a.type && e(r, n)) && r.call(e=>t(e, n), ...i(r, u))
                            }(t, y) || "SequenceExpression" === A.type;
                        case "Decorator":
                            if ("expression" === F) {
                                if (f(A) && A.computed)
                                    return !0;
                                let e = !1
                                  , t = !1
                                  , r = A;
                                for (; r; )
                                    switch (r.type) {
                                    case "MemberExpression":
                                        t = !0,
                                        r = r.object;
                                        break;
                                    case "CallExpression":
                                        if (t || e)
                                            return "typescript" !== y.parser;
                                        e = !0,
                                        r = r.callee;
                                        break;
                                    case "Identifier":
                                        return !1;
                                    case "TaggedTemplateExpression":
                                        return "typescript" !== y.parser;
                                    default:
                                        return !0
                                    }
                                return !0
                            }
                            break;
                        case "ArrowFunctionExpression":
                            if ("body" === F && "SequenceExpression" !== A.type && p(A, e=>"ObjectExpression" === e.type))
                                return !0
                        }
                        switch (A.type) {
                        case "UpdateExpression":
                            if ("UnaryExpression" === C.type)
                                return A.prefix && ("++" === A.operator && "+" === C.operator || "--" === A.operator && "-" === C.operator);
                        case "UnaryExpression":
                            switch (C.type) {
                            case "UnaryExpression":
                                return A.operator === C.operator && ("+" === A.operator || "-" === A.operator);
                            case "BindExpression":
                            case "TaggedTemplateExpression":
                            case "TSNonNullExpression":
                                return !0;
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return "object" === F;
                            case "NewExpression":
                            case "CallExpression":
                            case "OptionalCallExpression":
                                return "callee" === F;
                            case "BinaryExpression":
                                return "left" === F && "**" === C.operator;
                            default:
                                return !1
                            }
                        case "BinaryExpression":
                            if ("UpdateExpression" === C.type || "in" === A.operator && function(e) {
                                let t = 0
                                  , r = e.getValue();
                                for (; r; ) {
                                    let n = e.getParentNode(t++);
                                    if (n && "ForStatement" === n.type && n.init === r)
                                        return !0;
                                    r = n
                                }
                                return !1
                            }(t))
                                return !0;
                            if ("|>" === A.operator && A.extra && A.extra.parenthesized) {
                                let e = t.getParentNode(1);
                                if ("BinaryExpression" === e.type && "|>" === e.operator)
                                    return !0
                            }
                        case "TSTypeAssertion":
                        case "TSAsExpression":
                        case "TSSatisfiesExpression":
                        case "LogicalExpression":
                            switch (C.type) {
                            case "TSSatisfiesExpression":
                            case "TSAsExpression":
                                return !g(A);
                            case "ConditionalExpression":
                                return g(A);
                            case "CallExpression":
                            case "NewExpression":
                            case "OptionalCallExpression":
                                return "callee" === F;
                            case "ClassExpression":
                            case "ClassDeclaration":
                                return "superClass" === F;
                            case "TSTypeAssertion":
                            case "TaggedTemplateExpression":
                            case "UnaryExpression":
                            case "JSXSpreadAttribute":
                            case "SpreadElement":
                            case "SpreadProperty":
                            case "BindExpression":
                            case "AwaitExpression":
                            case "TSNonNullExpression":
                            case "UpdateExpression":
                                return !0;
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return "object" === F;
                            case "AssignmentExpression":
                            case "AssignmentPattern":
                                return "left" === F && ("TSTypeAssertion" === A.type || g(A));
                            case "LogicalExpression":
                                if ("LogicalExpression" === A.type)
                                    return C.operator !== A.operator;
                            case "BinaryExpression":
                                {
                                    let {operator: e, type: t} = A;
                                    if (!e && "TSTypeAssertion" !== t)
                                        return !0;
                                    let r = d(e)
                                      , n = C.operator
                                      , u = d(n);
                                    return u > r || "right" === F && u === r || u === r && !c(n, e) || (u < r && "%" === e ? "+" === n || "-" === n : !!l(n))
                                }
                            default:
                                return !1
                            }
                        case "SequenceExpression":
                            switch (C.type) {
                            case "ReturnStatement":
                            case "ForStatement":
                                return !1;
                            case "ExpressionStatement":
                                return "expression" !== F;
                            case "ArrowFunctionExpression":
                                return "body" !== F;
                            default:
                                return !0
                            }
                        case "YieldExpression":
                            if ("UnaryExpression" === C.type || "AwaitExpression" === C.type || g(C) || "TSNonNullExpression" === C.type)
                                return !0;
                        case "AwaitExpression":
                            switch (C.type) {
                            case "TaggedTemplateExpression":
                            case "UnaryExpression":
                            case "LogicalExpression":
                            case "SpreadElement":
                            case "SpreadProperty":
                            case "TSAsExpression":
                            case "TSSatisfiesExpression":
                            case "TSNonNullExpression":
                            case "BindExpression":
                                return !0;
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return "object" === F;
                            case "NewExpression":
                            case "CallExpression":
                            case "OptionalCallExpression":
                                return "callee" === F;
                            case "ConditionalExpression":
                                return "test" === F;
                            case "BinaryExpression":
                                return !(!A.argument && "|>" === C.operator);
                            default:
                                return !1
                            }
                        case "TSConditionalType":
                        case "TSFunctionType":
                        case "TSConstructorType":
                            if ("extendsType" === F && "TSConditionalType" === C.type) {
                                if ("TSConditionalType" === A.type)
                                    return !0;
                                let {typeAnnotation: e} = A.returnType || A.typeAnnotation;
                                if ("TSTypePredicate" === e.type && e.typeAnnotation && (e = e.typeAnnotation.typeAnnotation),
                                "TSInferType" === e.type && e.typeParameter.constraint)
                                    return !0
                            }
                            if ("checkType" === F && "TSConditionalType" === C.type)
                                return !0;
                        case "TSUnionType":
                        case "TSIntersectionType":
                            if (("TSUnionType" === C.type || "TSIntersectionType" === C.type) && C.types.length > 1 && (!A.types || A.types.length > 1))
                                return !0;
                        case "TSInferType":
                            if ("TSInferType" === A.type && "TSRestType" === C.type)
                                break;
                        case "TSTypeOperator":
                            return "TSArrayType" === C.type || "TSOptionalType" === C.type || "TSRestType" === C.type || "objectType" === F && "TSIndexedAccessType" === C.type || "TSTypeOperator" === C.type || "TSTypeAnnotation" === C.type && t.getParentNode(1).type.startsWith("TSJSDoc");
                        case "TSTypeQuery":
                            return "objectType" === F && "TSIndexedAccessType" === C.type || "elementType" === F && "TSArrayType" === C.type;
                        case "TypeofTypeAnnotation":
                            return "objectType" === F && ("IndexedAccessType" === C.type || "OptionalIndexedAccessType" === C.type) || "elementType" === F && "ArrayTypeAnnotation" === C.type;
                        case "ArrayTypeAnnotation":
                            return "NullableTypeAnnotation" === C.type;
                        case "IntersectionTypeAnnotation":
                        case "UnionTypeAnnotation":
                            return "ArrayTypeAnnotation" === C.type || "NullableTypeAnnotation" === C.type || "IntersectionTypeAnnotation" === C.type || "UnionTypeAnnotation" === C.type || "objectType" === F && ("IndexedAccessType" === C.type || "OptionalIndexedAccessType" === C.type);
                        case "NullableTypeAnnotation":
                            return "ArrayTypeAnnotation" === C.type || "objectType" === F && ("IndexedAccessType" === C.type || "OptionalIndexedAccessType" === C.type);
                        case "FunctionTypeAnnotation":
                            {
                                let e = "NullableTypeAnnotation" === C.type ? t.getParentNode(1) : C;
                                return "UnionTypeAnnotation" === e.type || "IntersectionTypeAnnotation" === e.type || "ArrayTypeAnnotation" === e.type || "objectType" === F && ("IndexedAccessType" === e.type || "OptionalIndexedAccessType" === e.type) || "NullableTypeAnnotation" === e.type || "FunctionTypeParam" === C.type && null === C.name && u(A).some(e=>e.typeAnnotation && "NullableTypeAnnotation" === e.typeAnnotation.type)
                            }
                        case "OptionalIndexedAccessType":
                            return "objectType" === F && "IndexedAccessType" === C.type;
                        case "StringLiteral":
                        case "NumericLiteral":
                        case "Literal":
                            if ("string" == typeof A.value && "ExpressionStatement" === C.type && !C.directive) {
                                let e = t.getParentNode(1);
                                return "Program" === e.type || "BlockStatement" === e.type
                            }
                            return "object" === F && "MemberExpression" === C.type && "number" == typeof A.value;
                        case "AssignmentExpression":
                            {
                                let e = t.getParentNode(1);
                                return "body" === F && "ArrowFunctionExpression" === C.type || ("key" !== F || "ClassProperty" !== C.type && "PropertyDefinition" !== C.type || !C.computed) && ("init" !== F && "update" !== F || "ForStatement" !== C.type) && ("ExpressionStatement" === C.type ? "ObjectPattern" === A.left.type : !("key" === F && "TSPropertySignature" === C.type || "AssignmentExpression" === C.type || "SequenceExpression" === C.type && e && "ForStatement" === e.type && (e.init === C || e.update === C) || "value" === F && "Property" === C.type && e && "ObjectPattern" === e.type && e.properties.includes(C) || "NGChainedExpression" === C.type))
                            }
                        case "ConditionalExpression":
                            switch (C.type) {
                            case "TaggedTemplateExpression":
                            case "UnaryExpression":
                            case "SpreadElement":
                            case "SpreadProperty":
                            case "BinaryExpression":
                            case "LogicalExpression":
                            case "NGPipeExpression":
                            case "ExportDefaultDeclaration":
                            case "AwaitExpression":
                            case "JSXSpreadAttribute":
                            case "TSTypeAssertion":
                            case "TypeCastExpression":
                            case "TSAsExpression":
                            case "TSSatisfiesExpression":
                            case "TSNonNullExpression":
                                return !0;
                            case "NewExpression":
                            case "CallExpression":
                            case "OptionalCallExpression":
                                return "callee" === F;
                            case "ConditionalExpression":
                                return "test" === F;
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return "object" === F;
                            default:
                                return !1
                            }
                        case "FunctionExpression":
                            switch (C.type) {
                            case "NewExpression":
                            case "CallExpression":
                            case "OptionalCallExpression":
                                return "callee" === F;
                            case "TaggedTemplateExpression":
                                return !0;
                            default:
                                return !1
                            }
                        case "ArrowFunctionExpression":
                            switch (C.type) {
                            case "BinaryExpression":
                                return "|>" !== C.operator || A.extra && A.extra.parenthesized;
                            case "NewExpression":
                            case "CallExpression":
                            case "OptionalCallExpression":
                                return "callee" === F;
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return "object" === F;
                            case "TSAsExpression":
                            case "TSSatisfiesExpression":
                            case "TSNonNullExpression":
                            case "BindExpression":
                            case "TaggedTemplateExpression":
                            case "UnaryExpression":
                            case "LogicalExpression":
                            case "AwaitExpression":
                            case "TSTypeAssertion":
                                return !0;
                            case "ConditionalExpression":
                                return "test" === F;
                            default:
                                return !1
                            }
                        case "ClassExpression":
                            if (n(A.decorators))
                                return !0;
                            if ("NewExpression" === C.type)
                                return "callee" === F;
                            break;
                        case "OptionalMemberExpression":
                        case "OptionalCallExpression":
                            {
                                let e = t.getParentNode(1);
                                if ("object" === F && "MemberExpression" === C.type || "callee" === F && ("CallExpression" === C.type || "NewExpression" === C.type) || "TSNonNullExpression" === C.type && "MemberExpression" === e.type && e.object === C)
                                    return !0
                            }
                        case "CallExpression":
                        case "MemberExpression":
                        case "TaggedTemplateExpression":
                        case "TSNonNullExpression":
                            if ("callee" === F && ("BindExpression" === C.type || "NewExpression" === C.type)) {
                                let e = A;
                                for (; e; )
                                    switch (e.type) {
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        return !0;
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                    case "BindExpression":
                                        e = e.object;
                                        break;
                                    case "TaggedTemplateExpression":
                                        e = e.tag;
                                        break;
                                    case "TSNonNullExpression":
                                        e = e.expression;
                                        break;
                                    default:
                                        return !1
                                    }
                            }
                            break;
                        case "BindExpression":
                            return "callee" === F && ("BindExpression" === C.type || "NewExpression" === C.type) || "object" === F && f(C);
                        case "NGPipeExpression":
                            return !("NGRoot" === C.type || "NGMicrosyntaxExpression" === C.type || "ObjectProperty" === C.type && !(A.extra && A.extra.parenthesized) || "ArrayExpression" === C.type || D(C) && C.arguments[F] === A || "right" === F && "NGPipeExpression" === C.type || "property" === F && "MemberExpression" === C.type || "AssignmentExpression" === C.type);
                        case "JSXFragment":
                        case "JSXElement":
                            return "callee" === F || "left" === F && "BinaryExpression" === C.type && "<" === C.operator || "ArrayExpression" !== C.type && "ArrowFunctionExpression" !== C.type && "AssignmentExpression" !== C.type && "AssignmentPattern" !== C.type && "BinaryExpression" !== C.type && "NewExpression" !== C.type && "ConditionalExpression" !== C.type && "ExpressionStatement" !== C.type && "JsExpressionRoot" !== C.type && "JSXAttribute" !== C.type && "JSXElement" !== C.type && "JSXExpressionContainer" !== C.type && "JSXFragment" !== C.type && "LogicalExpression" !== C.type && !D(C) && !m(C) && "ReturnStatement" !== C.type && "ThrowStatement" !== C.type && "TypeCastExpression" !== C.type && "VariableDeclarator" !== C.type && "YieldExpression" !== C.type;
                        case "TypeAnnotation":
                            return "returnType" === F && "ArrowFunctionExpression" === C.type && o(A, e=>"ObjectTypeAnnotation" === e.type && o(e, e=>"FunctionTypeAnnotation" === e.type || void 0) || void 0)
                        }
                        return !1
                    }
                }
            }), rE = h({
                "src/language-js/print-preprocess.js"(e, t) {
                    v(),
                    t.exports = function(e, t) {
                        switch (t.parser) {
                        case "json":
                        case "json5":
                        case "json-stringify":
                        case "__js_expression":
                        case "__vue_expression":
                        case "__vue_ts_expression":
                            return Object.assign(Object.assign({}, e), {}, {
                                type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot",
                                node: e,
                                comments: [],
                                rootMarker: t.rootMarker
                            });
                        default:
                            return e
                        }
                    }
                }
            }), rC = h({
                "src/language-js/print/html-binding.js"(e, t) {
                    v();
                    var {builders: {join: r, line: n, group: u, softline: i, indent: a}} = W();
                    t.exports = {
                        isVueEventBindingExpression: function e(t) {
                            switch (t.type) {
                            case "MemberExpression":
                                switch (t.property.type) {
                                case "Identifier":
                                case "NumericLiteral":
                                case "StringLiteral":
                                    return e(t.object)
                                }
                                return !1;
                            case "Identifier":
                                return !0;
                            default:
                                return !1
                            }
                        },
                        printHtmlBinding: function(e, t, s) {
                            let o = e.getValue();
                            if (t.__onHtmlBindingRoot && null === e.getName() && t.__onHtmlBindingRoot(o, t),
                            "File" === o.type) {
                                if (t.__isVueForBindingLeft)
                                    return e.call(e=>{
                                        let t = r([",", n], e.map(s, "params"))
                                          , {params: o} = e.getValue();
                                        return 1 === o.length ? t : ["(", a([i, u(t)]), i, ")"]
                                    }
                                    , "program", "body", 0);
                                if (t.__isVueBindings)
                                    return e.call(e=>r([",", n], e.map(s, "params")), "program", "body", 0)
                            }
                        }
                    }
                }
            }), rF = h({
                "src/language-js/print/binaryish.js"(e, t) {
                    v();
                    var {printComments: r} = tP()
                      , {getLast: n} = ec()
                      , {builders: {join: u, line: i, softline: a, group: s, indent: o, align: l, indentIfBreak: p}, utils: {cleanDoc: c, getDocParts: d, isConcat: D}} = W()
                      , {hasLeadingOwnLineComment: f, isBinaryish: m, isJsxNode: g, shouldFlatten: y, hasComment: h, CommentCheckFlags: E, isCallExpression: C, isMemberExpression: F, isObjectProperty: A, isEnabledHackPipeline: x} = tG()
                      , b = 0;
                    function S(e) {
                        return "LogicalExpression" === e.type && !!("ObjectExpression" === e.right.type && e.right.properties.length > 0 || "ArrayExpression" === e.right.type && e.right.elements.length > 0 || g(e.right))
                    }
                    t.exports = {
                        printBinaryishExpression: function(e, t, v) {
                            let T = e.getValue()
                              , B = e.getParentNode()
                              , N = e.getParentNode(1)
                              , w = T !== B.body && ("IfStatement" === B.type || "WhileStatement" === B.type || "SwitchStatement" === B.type || "DoWhileStatement" === B.type)
                              , k = x(t) && "|>" === T.operator
                              , j = function e(t, n, a, p, g) {
                                let C = t.getValue();
                                if (!m(C))
                                    return [s(n())];
                                let F = [];
                                y(C.operator, C.left.operator) ? F = t.call(t=>e(t, n, a, !0, g), "left") : F.push(s(n("left")));
                                let A = S(C), v = ("|>" === C.operator || "NGPipeExpression" === C.type || "|" === C.operator && "__vue_expression" === a.parser) && !f(a.originalText, C.right), b = "NGPipeExpression" === C.type ? "|" : C.operator, T = "NGPipeExpression" === C.type && C.arguments.length > 0 ? s(o([i, ": ", u([i, ": "], t.map(n, "arguments").map(e=>l(2, s(e))))])) : "", B;
                                if (A)
                                    B = [b, " ", n("right"), T];
                                else {
                                    let r = x(a) && "|>" === b ? t.call(t=>e(t, n, a, !0, g), "right") : n("right");
                                    B = [v ? i : "", b, v ? " " : i, r, T]
                                }
                                let N = t.getParentNode()
                                  , w = h(C.left, E.Trailing | E.Line)
                                  , k = w || !(g && "LogicalExpression" === C.type) && N.type !== C.type && C.left.type !== C.type && C.right.type !== C.type;
                                if (F.push(v ? "" : " ", k ? s(B, {
                                    shouldBreak: w
                                }) : B),
                                p && h(C)) {
                                    let e = c(r(t, F, a));
                                    return D(e) || "fill" === e.type ? d(e) : [e]
                                }
                                return F
                            }(e, v, t, !1, w);
                            if (w)
                                return j;
                            if (k)
                                return s(j);
                            if (C(B) && B.callee === T || "UnaryExpression" === B.type || F(B) && !B.computed)
                                return s([o([a, ...j]), a]);
                            let P = "ReturnStatement" === B.type || "ThrowStatement" === B.type || "JSXExpressionContainer" === B.type && "JSXAttribute" === N.type || "|" !== T.operator && "JsExpressionRoot" === B.type || "NGPipeExpression" !== T.type && ("NGRoot" === B.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === B.type && "NGMicrosyntax" === N.type && 1 === N.body.length) || T === B.body && "ArrowFunctionExpression" === B.type || T !== B.body && "ForStatement" === B.type || "ConditionalExpression" === B.type && "ReturnStatement" !== N.type && "ThrowStatement" !== N.type && !C(N) || "TemplateLiteral" === B.type
                              , I = "AssignmentExpression" === B.type || "VariableDeclarator" === B.type || "ClassProperty" === B.type || "PropertyDefinition" === B.type || "TSAbstractPropertyDefinition" === B.type || "ClassPrivateProperty" === B.type || A(B)
                              , O = m(T.left) && y(T.operator, T.left.operator);
                            if (P || S(T) && !O || !S(T) && I)
                                return s(j);
                            if (0 === j.length)
                                return "";
                            let L = g(T.right)
                              , _ = j.findIndex(e=>"string" != typeof e && !Array.isArray(e) && "group" === e.type)
                              , M = j.slice(0, -1 === _ ? 1 : _ + 1)
                              , $ = j.slice(M.length, L ? -1 : void 0)
                              , R = Symbol("logicalChain-" + ++b)
                              , V = s([...M, o($)], {
                                id: R
                            });
                            return L ? s([V, p(n(j), {
                                groupId: R
                            })]) : V
                        },
                        shouldInlineLogicalExpression: S
                    }
                }
            }), rA = h({
                "src/language-js/print/angular.js"(e, t) {
                    v();
                    var {builders: {join: r, line: n, group: u}} = W()
                      , {hasNode: i, hasComment: a, getComments: s} = tG()
                      , {printBinaryishExpression: o} = rF();
                    function l(e, t, r) {
                        return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t && "NGMicrosyntaxLet" === r.body[0].type && null === r.body[0].value
                    }
                    t.exports = {
                        printAngular: function(e, t, p) {
                            let c = e.getValue();
                            if (c.type.startsWith("NG"))
                                switch (c.type) {
                                case "NGRoot":
                                    return [p("node"), a(c.node) ? " //" + s(c.node)[0].value.trimEnd() : ""];
                                case "NGPipeExpression":
                                    return o(e, t, p);
                                case "NGChainedExpression":
                                    return u(r([";", n], e.map(e=>i(e.getValue(), e=>{
                                        switch (e.type) {
                                        case void 0:
                                            return !1;
                                        case "CallExpression":
                                        case "OptionalCallExpression":
                                        case "AssignmentExpression":
                                            return !0
                                        }
                                    }
                                    ) ? p() : ["(", p(), ")"], "expressions")));
                                case "NGEmptyExpression":
                                    return "";
                                case "NGQuotedExpression":
                                    return [c.prefix, ": ", c.value.trim()];
                                case "NGMicrosyntax":
                                    return e.map((e,t)=>[0 === t ? "" : l(e.getValue(), t, c) ? " " : [";", n], p()], "body");
                                case "NGMicrosyntaxKey":
                                    return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(c.name) ? c.name : JSON.stringify(c.name);
                                case "NGMicrosyntaxExpression":
                                    return [p("expression"), null === c.alias ? "" : [" as ", p("alias")]];
                                case "NGMicrosyntaxKeyedExpression":
                                    {
                                        let t = e.getName()
                                          , r = e.getParentNode()
                                          , n = l(c, t, r) || (1 === t && ("then" === c.key.name || "else" === c.key.name) || 2 === t && "else" === c.key.name && "NGMicrosyntaxKeyedExpression" === r.body[t - 1].type && "then" === r.body[t - 1].key.name) && "NGMicrosyntaxExpression" === r.body[0].type;
                                        return [p("key"), n ? " " : ": ", p("expression")]
                                    }
                                case "NGMicrosyntaxLet":
                                    return ["let ", p("key"), null === c.value ? "" : [" = ", p("value")]];
                                case "NGMicrosyntaxAs":
                                    return [p("key"), " as ", p("alias")];
                                default:
                                    throw Error(`Unknown Angular node type: ${JSON.stringify(c.type)}.`)
                                }
                        }
                    }
                }
            }), rv = h({
                "src/language-js/print/jsx.js"(e, t) {
                    v();
                    var {printComments: r, printDanglingComments: n, printCommentsSeparately: u} = tP()
                      , {builders: {line: i, hardline: a, softline: s, group: o, indent: l, conditionalGroup: p, fill: c, ifBreak: d, lineSuffixBoundary: D, join: f}, utils: {willBreak: m}} = W()
                      , {getLast: g, getPreferredQuote: y} = ec()
                      , {isJsxNode: h, rawText: E, isCallExpression: C, isStringLiteral: F, isBinaryish: A, hasComment: x, CommentCheckFlags: b, hasNodeIgnoreComment: S} = tG()
                      , T = rh()
                      , {willPrintOwnComments: B} = ry()
                      , N = e=>"" === e || e === i || e === a || e === s;
                    function w(e, t, r, n) {
                        return e ? "" : ("JSXElement" !== r.type || r.closingElement) && (!n || "JSXElement" !== n.type || n.closingElement) ? s : 1 === t.length ? s : a
                    }
                    function k(e, t, r, n) {
                        return e ? a : 1 === t.length && ("JSXElement" !== r.type || r.closingElement) && (!n || "JSXElement" !== n.type || n.closingElement) ? s : a
                    }
                    var j = ` 
\r	`
                      , P = RegExp("([" + j + "]+)")
                      , I = RegExp("[^" + j + "]")
                      , O = e=>e.replace(RegExp("(?:^" + P.source + "|" + P.source + "$)"), "");
                    function L(e) {
                        return "JSXText" === e.type && (I.test(E(e)) || !/\n/.test(E(e)))
                    }
                    t.exports = {
                        hasJsxIgnoreComment: function(e) {
                            let t = e.getValue()
                              , r = e.getParentNode();
                            if (!r || !t || !h(t) || !h(r))
                                return !1;
                            let n = r.children.indexOf(t)
                              , u = null;
                            for (let e = n; e > 0; e--) {
                                let t = r.children[e - 1];
                                if (!("JSXText" === t.type && !L(t))) {
                                    u = t;
                                    break
                                }
                            }
                            return u && "JSXExpressionContainer" === u.type && "JSXEmptyExpression" === u.expression.type && S(u.expression)
                        },
                        printJsx: function(e, t, v) {
                            let S = e.getValue();
                            if (S.type.startsWith("JSX"))
                                switch (S.type) {
                                case "JSXAttribute":
                                    return function(e, t, r) {
                                        let n = e.getValue()
                                          , i = [];
                                        if (i.push(r("name")),
                                        n.value) {
                                            let a;
                                            if (F(n.value)) {
                                                let r = E(n.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"')
                                                  , {escaped: i, quote: s, regex: o} = y(r, t.jsxSingleQuote ? "'" : '"');
                                                r = r.replace(o, i);
                                                let {leading: l, trailing: p} = e.call(()=>u(e, t), "value");
                                                a = [l, s, r, s, p]
                                            } else
                                                a = r("value");
                                            i.push("=", a)
                                        }
                                        return i
                                    }(e, t, v);
                                case "JSXIdentifier":
                                    return String(S.name);
                                case "JSXNamespacedName":
                                    return f(":", [v("namespace"), v("name")]);
                                case "JSXMemberExpression":
                                    return f(".", [v("object"), v("property")]);
                                case "JSXSpreadAttribute":
                                case "JSXSpreadChild":
                                    let j;
                                    return j = e.getValue(),
                                    ["{", e.call(e=>{
                                        let n = ["...", v()];
                                        return x(e.getValue()) && B(e) ? [l([s, r(e, n, t)]), s] : n
                                    }
                                    , "JSXSpreadAttribute" === j.type ? "argument" : "expression"), "}"];
                                case "JSXExpressionContainer":
                                    let I, _;
                                    return I = e.getValue(),
                                    (_ = (e,t)=>"JSXEmptyExpression" === e.type || !x(e) && ("ArrayExpression" === e.type || "ObjectExpression" === e.type || "ArrowFunctionExpression" === e.type || "AwaitExpression" === e.type && (_(e.argument, e) || "JSXElement" === e.argument.type) || C(e) || "FunctionExpression" === e.type || "TemplateLiteral" === e.type || "TaggedTemplateExpression" === e.type || "DoExpression" === e.type || h(t) && ("ConditionalExpression" === e.type || A(e))))(I.expression, e.getParentNode(0)) ? o(["{", v("expression"), D, "}"]) : o(["{", l([s, v("expression")]), s, D, "}"]);
                                case "JSXFragment":
                                case "JSXElement":
                                    let M;
                                    return M = r(e, function(e, t, r) {
                                        var n;
                                        let u, D = e.getValue();
                                        if ("JSXElement" === D.type && function(e) {
                                            if (0 === e.children.length)
                                                return !0;
                                            if (e.children.length > 1)
                                                return !1;
                                            let t = e.children[0];
                                            return "JSXText" === t.type && !L(t)
                                        }(D))
                                            return [r("openingElement"), r("closingElement")];
                                        let f = r("JSXElement" === D.type ? "openingElement" : "openingFragment")
                                          , y = r("JSXElement" === D.type ? "closingElement" : "closingFragment");
                                        if (1 === D.children.length && "JSXExpressionContainer" === D.children[0].type && ("TemplateLiteral" === D.children[0].expression.type || "TaggedTemplateExpression" === D.children[0].expression.type))
                                            return [f, ...e.map(r, "children"), y];
                                        D.children = D.children.map(e=>"JSXExpressionContainer" === e.type && F(e.expression) && " " === e.expression.value && !x(e.expression) ? {
                                            type: "JSXText",
                                            value: " ",
                                            raw: " "
                                        } : e);
                                        let C = D.children.some(h)
                                          , A = D.children.filter(e=>"JSXExpressionContainer" === e.type).length > 1
                                          , v = "JSXElement" === D.type && D.openingElement.attributes.length > 1
                                          , b = m(f) || C || v || A
                                          , S = "mdx" === e.getParentNode().rootMarker
                                          , T = t.singleQuote ? "{' '}" : '{" "}'
                                          , B = S ? " " : d([T, s], " ")
                                          , j = (n = D.openingElement && D.openingElement.name && "fbt" === D.openingElement.name.name,
                                        u = [],
                                        e.each((e,t,s)=>{
                                            let o = e.getValue();
                                            if ("JSXText" === o.type) {
                                                let e = E(o);
                                                if (L(o)) {
                                                    let r, a = e.split(P);
                                                    if ("" === a[0]) {
                                                        if (u.push(""),
                                                        a.shift(),
                                                        /\n/.test(a[0])) {
                                                            let e = s[t + 1];
                                                            u.push(k(n, a[1], o, e))
                                                        } else
                                                            u.push(B);
                                                        a.shift()
                                                    }
                                                    if ("" === g(a) && (a.pop(),
                                                    r = a.pop()),
                                                    0 === a.length)
                                                        return;
                                                    for (let[e,t] of a.entries())
                                                        e % 2 == 1 ? u.push(i) : u.push(t);
                                                    if (void 0 !== r) {
                                                        if (/\n/.test(r)) {
                                                            let e = s[t + 1];
                                                            u.push(k(n, g(u), o, e))
                                                        } else
                                                            u.push(B)
                                                    } else {
                                                        let e = s[t + 1];
                                                        u.push(w(n, g(u), o, e))
                                                    }
                                                } else
                                                    /\n/.test(e) ? e.match(/\n/g).length > 1 && u.push("", a) : u.push("", B)
                                            } else {
                                                let e = r();
                                                u.push(e);
                                                let i = s[t + 1];
                                                if (i && L(i)) {
                                                    let e = O(E(i)).split(P)[0];
                                                    u.push(w(n, e, o, i))
                                                } else
                                                    u.push(a)
                                            }
                                        }
                                        , "children"),
                                        u)
                                          , I = D.children.some(e=>L(e));
                                        for (let e = j.length - 2; e >= 0; e--) {
                                            let t = "" === j[e] && "" === j[e + 1]
                                              , r = j[e] === a && "" === j[e + 1] && j[e + 2] === a
                                              , n = (j[e] === s || j[e] === a) && "" === j[e + 1] && j[e + 2] === B
                                              , u = j[e] === B && "" === j[e + 1] && (j[e + 2] === s || j[e + 2] === a)
                                              , i = j[e] === B && "" === j[e + 1] && j[e + 2] === B
                                              , o = j[e] === s && "" === j[e + 1] && j[e + 2] === a || j[e] === a && "" === j[e + 1] && j[e + 2] === s;
                                            r && I || t || n || i || o ? j.splice(e, 2) : u && j.splice(e + 1, 2)
                                        }
                                        for (; j.length > 0 && N(g(j)); )
                                            j.pop();
                                        for (; j.length > 1 && N(j[0]) && N(j[1]); )
                                            j.shift(),
                                            j.shift();
                                        let _ = [];
                                        for (let[e,t] of j.entries()) {
                                            if (t === B) {
                                                if (1 === e && "" === j[e - 1]) {
                                                    if (2 === j.length) {
                                                        _.push(T);
                                                        continue
                                                    }
                                                    _.push([T, a]);
                                                    continue
                                                }
                                                if (e === j.length - 1 || "" === j[e - 1] && j[e - 2] === a) {
                                                    _.push(T);
                                                    continue
                                                }
                                            }
                                            _.push(t),
                                            m(t) && (b = !0)
                                        }
                                        let M = I ? c(_) : o(_, {
                                            shouldBreak: !0
                                        });
                                        if (S)
                                            return M;
                                        let $ = o([f, l([a, M]), a, y]);
                                        return b ? $ : p([o([f, ...j, y]), $])
                                    }(e, t, v), t),
                                    function(e, t, r) {
                                        let n = e.getParentNode();
                                        if (!n || ({
                                            ArrayExpression: !0,
                                            JSXAttribute: !0,
                                            JSXElement: !0,
                                            JSXExpressionContainer: !0,
                                            JSXFragment: !0,
                                            ExpressionStatement: !0,
                                            CallExpression: !0,
                                            OptionalCallExpression: !0,
                                            ConditionalExpression: !0,
                                            JsExpressionRoot: !0
                                        })[n.type])
                                            return t;
                                        let u = e.match(void 0, e=>"ArrowFunctionExpression" === e.type, C, e=>"JSXExpressionContainer" === e.type)
                                          , i = T(e, r);
                                        return o([i ? "" : d("("), l([s, t]), s, i ? "" : d(")")], {
                                            shouldBreak: u
                                        })
                                    }(e, M, t);
                                case "JSXOpeningElement":
                                    return function(e, t, r) {
                                        let n, u = e.getValue(), p = u.name && x(u.name) || u.typeParameters && x(u.typeParameters);
                                        if (u.selfClosing && 0 === u.attributes.length && !p)
                                            return ["<", r("name"), r("typeParameters"), " />"];
                                        if (u.attributes && 1 === u.attributes.length && u.attributes[0].value && F(u.attributes[0].value) && !u.attributes[0].value.value.includes(`
`) && !p && !x(u.attributes[0]))
                                            return o(["<", r("name"), r("typeParameters"), " ", ...e.map(r, "attributes"), u.selfClosing ? " />" : ">"]);
                                        let c = u.attributes && u.attributes.some(e=>e.value && F(e.value) && e.value.value.includes(`
`))
                                          , d = t.singleAttributePerLine && u.attributes.length > 1 ? a : i;
                                        return o(["<", r("name"), r("typeParameters"), l(e.map(()=>[d, r()], "attributes")), ...u.selfClosing ? [i, "/>"] : (n = u.attributes.length > 0 && x(g(u.attributes), b.Trailing),
                                        0 === u.attributes.length && !p || (t.bracketSameLine || t.jsxBracketSameLine) && (!p || u.attributes.length > 0) && !n) ? [">"] : [s, ">"]], {
                                            shouldBreak: c
                                        })
                                    }(e, t, v);
                                case "JSXClosingElement":
                                    let $, R, V;
                                    return $ = e.getValue(),
                                    (R = []).push("</"),
                                    V = v("name"),
                                    x($.name, b.Leading | b.Line) ? R.push(l([a, V]), a) : x($.name, b.Leading | b.Block) ? R.push(" ", V) : R.push(V),
                                    R.push(">"),
                                    R;
                                case "JSXOpeningFragment":
                                case "JSXClosingFragment":
                                    let W, q, J, U;
                                    return q = x(W = e.getValue()),
                                    J = x(W, b.Line),
                                    [(U = "JSXOpeningFragment" === W.type) ? "<" : "</", l([J ? a : q && !U ? " " : "", n(e, t, !0)]), J ? a : "", ">"];
                                case "JSXEmptyExpression":
                                    let H;
                                    return H = x(e.getValue(), b.Line),
                                    [n(e, t, !H), H ? a : ""];
                                case "JSXText":
                                    throw Error("JSXText should be handled by JSXElement");
                                default:
                                    throw Error(`Unknown JSX node type: ${JSON.stringify(S.type)}.`)
                                }
                        }
                    }
                }
            }), rx = h({
                "src/language-js/print/misc.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r} = ec()
                      , {builders: {indent: n, join: u, line: i}} = W()
                      , {isFlowAnnotationComment: a} = tG();
                    function s(e, t, r) {
                        let n = e.getValue();
                        if (!n.typeAnnotation)
                            return "";
                        let u = e.getParentNode()
                          , i = "DeclareFunction" === u.type && u.id === n;
                        return a(t.originalText, n.typeAnnotation) ? [" /*: ", r("typeAnnotation"), " */"] : [i ? "" : ": ", r("typeAnnotation")]
                    }
                    t.exports = {
                        printOptionalToken: function(e) {
                            let t = e.getValue();
                            return t.optional && ("Identifier" !== t.type || t !== e.getParentNode().key) ? "OptionalCallExpression" === t.type || "OptionalMemberExpression" === t.type && t.computed ? "?." : "?" : ""
                        },
                        printDefiniteToken: function(e) {
                            return e.getValue().definite || e.match(void 0, (e,t)=>"id" === t && "VariableDeclarator" === e.type && e.definite) ? "!" : ""
                        },
                        printFunctionTypeParameters: function(e, t, r) {
                            let n = e.getValue();
                            return n.typeArguments ? r("typeArguments") : n.typeParameters ? r("typeParameters") : ""
                        },
                        printBindExpressionCallee: function(e, t, r) {
                            return ["::", r("callee")]
                        },
                        printTypeScriptModifiers: function(e, t, n) {
                            return r(e.getValue().modifiers) ? [u(" ", e.map(n, "modifiers")), " "] : ""
                        },
                        printTypeAnnotation: s,
                        printRestSpread: function(e, t, r) {
                            return ["...", r("argument"), s(e, t, r)]
                        },
                        adjustClause: function(e, t, r) {
                            return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || r ? [" ", t] : n([i, t])
                        },
                        printDirective: function(e, t) {
                            let r = e.slice(1, -1);
                            if (r.includes('"') || r.includes("'"))
                                return e;
                            let n = t.singleQuote ? "'" : '"';
                            return n + r + n
                        }
                    }
                }
            }), rb = h({
                "src/language-js/print/array.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {builders: {line: n, softline: u, hardline: i, group: a, indent: s, ifBreak: o, fill: l}} = W()
                      , {getLast: p, hasNewline: c} = ec()
                      , {shouldPrintComma: d, hasComment: D, CommentCheckFlags: f, isNextLineEmpty: m, isNumericLiteral: g, isSignedNumericLiteral: y} = tG()
                      , {locStart: h} = tb()
                      , {printOptionalToken: E, printTypeAnnotation: C} = rx();
                    function F(e, t) {
                        return e.elements.length > 1 && e.elements.every(e=>e && (g(e) || y(e) && !D(e.argument)) && !D(e, f.Trailing | f.Line, e=>!c(t.originalText, h(e), {
                            backwards: !0
                        })))
                    }
                    function A(e, t, r, i) {
                        let s = []
                          , o = [];
                        return e.each(e=>{
                            s.push(o, a(i())),
                            o = [",", n],
                            e.getValue() && m(e.getValue(), t) && o.push(u)
                        }
                        , r),
                        s
                    }
                    t.exports = {
                        printArray: function(e, t, c) {
                            let g = e.getValue()
                              , y = []
                              , h = "TupleExpression" === g.type ? "#[" : "[";
                            if (0 === g.elements.length)
                                D(g, f.Dangling) ? y.push(a([h, r(e, t), u, "]"])) : y.push(h, "]");
                            else {
                                let E, C = p(g.elements), v = !(C && "RestElement" === C.type), x = Symbol("array"), b = !t.__inJestEach && g.elements.length > 1 && g.elements.every((e,t,r)=>{
                                    let n = e && e.type;
                                    if ("ArrayExpression" !== n && "ObjectExpression" !== n)
                                        return !1;
                                    let u = r[t + 1];
                                    if (u && n !== u.type)
                                        return !1;
                                    let i = "ArrayExpression" === n ? "elements" : "properties";
                                    return e[i] && e[i].length > 1
                                }
                                ), S = F(g, t), T = v ? null === C ? "," : d(t) ? S ? o(",", "", {
                                    groupId: x
                                }) : o(",") : "" : "";
                                y.push(a([h, s([u, S ? (E = [],
                                e.each((e,r,u)=>{
                                    let a = r === u.length - 1;
                                    E.push([c(), a ? T : ","]),
                                    a || E.push(m(e.getValue(), t) ? [i, i] : D(u[r + 1], f.Leading | f.Line) ? i : n)
                                }
                                , "elements"),
                                l(E)) : [A(e, t, "elements", c), T], r(e, t, !0)]), u, "]"], {
                                    shouldBreak: b,
                                    id: x
                                }))
                            }
                            return y.push(E(e), C(e, t, c)),
                            y
                        },
                        printArrayItems: A,
                        isConciselyPrintedArray: F
                    }
                }
            }), rS = h({
                "src/language-js/print/call-arguments.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {getLast: n, getPenultimate: u} = ec()
                      , {getFunctionParameters: i, hasComment: a, CommentCheckFlags: s, isFunctionCompositionArgs: o, isJsxNode: l, isLongCurriedCallExpression: p, shouldPrintComma: c, getCallArguments: d, iterateCallArgumentsPath: D, isNextLineEmpty: f, isCallExpression: m, isStringLiteral: g, isObjectProperty: y, isTSTypeExpression: h} = tG()
                      , {builders: {line: E, hardline: C, softline: F, group: A, indent: x, conditionalGroup: b, ifBreak: S, breakParent: T}, utils: {willBreak: B}} = W()
                      , {ArgExpansionBailout: N} = ej()
                      , {isConciselyPrintedArray: w} = rb();
                    function k(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return "ObjectExpression" === e.type && (e.properties.length > 0 || a(e)) || "ArrayExpression" === e.type && (e.elements.length > 0 || a(e)) || "TSTypeAssertion" === e.type && k(e.expression) || h(e) && k(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type || "BlockStatement" === (t = e.body).type && (t.body.some(e=>"EmptyStatement" !== e.type) || a(t, s.Dangling))) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type && k(e.body, !0) || "ObjectExpression" === e.body.type || "ArrayExpression" === e.body.type || !r && (m(e.body) || "ConditionalExpression" === e.body.type) || l(e.body)) || "DoExpression" === e.type || "ModuleExpression" === e.type
                    }
                    t.exports = function(e, t, l) {
                        let m, h, v = e.getValue(), j = "ImportExpression" === v.type, P = d(v);
                        if (0 === P.length)
                            return ["(", r(e, t, !0), ")"];
                        if (2 === P.length && "ArrowFunctionExpression" === P[0].type && 0 === i(P[0]).length && "BlockStatement" === P[0].body.type && "ArrayExpression" === P[1].type && !P.some(e=>a(e)))
                            return ["(", l(["arguments", 0]), ", ", l(["arguments", 1]), ")"];
                        let I = !1
                          , O = !1
                          , L = P.length - 1
                          , _ = [];
                        D(e, (e,r)=>{
                            let n = e.getNode()
                              , u = [l()];
                            r === L || (f(n, t) ? (0 === r && (O = !0),
                            I = !0,
                            u.push(",", C, C)) : u.push(",", E)),
                            _.push(u)
                        }
                        );
                        let M = !(j || v.callee && "Import" === v.callee.type) && c(t, "all") ? "," : "";
                        function $() {
                            return A(["(", x([E, ..._]), M, E, ")"], {
                                shouldBreak: !0
                            })
                        }
                        if (I || "Decorator" !== e.getParentNode().type && o(P))
                            return $();
                        let R = function(e) {
                            var t;
                            if (2 !== e.length)
                                return !1;
                            let[r,n] = e;
                            return !!("ModuleExpression" === r.type && "ObjectExpression" === (t = n).type && 1 === t.properties.length && y(t.properties[0]) && "Identifier" === t.properties[0].key.type && "type" === t.properties[0].key.name && g(t.properties[0].value) && "module" === t.properties[0].value.value) || !a(r) && ("FunctionExpression" === r.type || "ArrowFunctionExpression" === r.type && "BlockStatement" === r.body.type) && "FunctionExpression" !== n.type && "ArrowFunctionExpression" !== n.type && "ConditionalExpression" !== n.type && !k(n)
                        }(P)
                          , V = (m = n(P),
                        h = u(P),
                        !a(m, s.Leading) && !a(m, s.Trailing) && k(m) && (!h || h.type !== m.type) && (2 !== P.length || "ArrowFunctionExpression" !== h.type || "ArrayExpression" !== m.type) && !(P.length > 1 && "ArrayExpression" === m.type && w(m, t)));
                        if (R || V) {
                            if (R ? _.slice(1).some(B) : _.slice(0, -1).some(B))
                                return $();
                            let t = [];
                            try {
                                e.try(()=>{
                                    D(e, (e,r)=>{
                                        R && 0 === r && (t = [[l([], {
                                            expandFirstArg: !0
                                        }), _.length > 1 ? "," : "", O ? C : E, O ? C : ""], ..._.slice(1)]),
                                        V && r === L && (t = [..._.slice(0, -1), l([], {
                                            expandLastArg: !0
                                        })])
                                    }
                                    )
                                }
                                )
                            } catch (e) {
                                if (e instanceof N)
                                    return $();
                                throw e
                            }
                            return [_.some(B) ? T : "", b([["(", ...t, ")"], R ? ["(", A(t[0], {
                                shouldBreak: !0
                            }), ...t.slice(1), ")"] : ["(", ..._.slice(0, -1), A(n(t), {
                                shouldBreak: !0
                            }), ")"], $()])]
                        }
                        let W = ["(", x([F, ..._]), S(M), F, ")"];
                        return p(e) ? W : A(W, {
                            shouldBreak: _.some(B) || I
                        })
                    }
                }
            }), rT = h({
                "src/language-js/print/member.js"(e, t) {
                    v();
                    var {builders: {softline: r, group: n, indent: u, label: i}} = W()
                      , {isNumericLiteral: a, isMemberExpression: s, isCallExpression: o} = tG()
                      , {printOptionalToken: l} = rx();
                    function p(e, t, i) {
                        let s = i("property")
                          , o = e.getValue()
                          , p = l(e);
                        return o.computed ? !o.property || a(o.property) ? [p, "[", s, "]"] : n([p, "[", u([r, s]), r, "]"]) : [p, ".", s]
                    }
                    t.exports = {
                        printMemberExpression: function(e, t, a) {
                            let l = e.getValue(), c = e.getParentNode(), d, D = 0;
                            do
                                d = e.getParentNode(D),
                                D++;
                            while (d && (s(d) || "TSNonNullExpression" === d.type));
                            let f = a("object")
                              , m = p(e, t, a)
                              , g = d && ("NewExpression" === d.type || "BindExpression" === d.type || "AssignmentExpression" === d.type && "Identifier" !== d.left.type) || l.computed || "Identifier" === l.object.type && "Identifier" === l.property.type && !s(c) || ("AssignmentExpression" === c.type || "VariableDeclarator" === c.type) && (o(l.object) && l.object.arguments.length > 0 || "TSNonNullExpression" === l.object.type && o(l.object.expression) && l.object.expression.arguments.length > 0 || "member-chain" === f.label);
                            return i("member-chain" === f.label ? "member-chain" : "member", [f, g ? m : n(u([r, m]))])
                        },
                        printMemberLookup: p
                    }
                }
            }), rB = h({
                "src/language-js/print/member-chain.js"(e, t) {
                    v();
                    var {printComments: r} = tP()
                      , {getLast: n, isNextLineEmptyAfterIndex: u, getNextNonSpaceNonCommentCharacterIndex: i} = ec()
                      , a = rh()
                      , {isCallExpression: s, isMemberExpression: o, isFunctionOrArrowExpression: l, isLongCurriedCallExpression: p, isMemberish: c, isNumericLiteral: d, isSimpleCallArgument: D, hasComment: f, CommentCheckFlags: m, isNextLineEmpty: g} = tG()
                      , {locEnd: y} = tb()
                      , {builders: {join: h, hardline: E, group: C, indent: F, conditionalGroup: A, breakParent: x, label: b}, utils: {willBreak: S}} = W()
                      , T = rS()
                      , {printMemberLookup: B} = rT()
                      , {printOptionalToken: N, printFunctionTypeParameters: w, printBindExpressionCallee: k} = rx();
                    t.exports = function(e, t, v) {
                        var j;
                        let P, I, O = e.getParentNode(), L = !O || "ExpressionStatement" === O.type, _ = [];
                        function M(e) {
                            let {originalText: r} = t
                              , n = i(r, e, y);
                            return ")" === r.charAt(n) ? !1 !== n && u(r, n + 1) : g(e, t)
                        }
                        let $ = e.getValue();
                        _.unshift({
                            node: $,
                            printed: [N(e), w(e, t, v), T(e, t, v)]
                        }),
                        $.callee && e.call(e=>(function e(n) {
                            let u = n.getValue();
                            s(u) && (c(u.callee) || s(u.callee)) ? (_.unshift({
                                node: u,
                                printed: [r(n, [N(n), w(n, t, v), T(n, t, v)], t), M(u) ? E : ""]
                            }),
                            n.call(t=>e(t), "callee")) : c(u) ? (_.unshift({
                                node: u,
                                needsParens: a(n, t),
                                printed: r(n, o(u) ? B(n, t, v) : k(n, t, v), t)
                            }),
                            n.call(t=>e(t), "object")) : "TSNonNullExpression" === u.type ? (_.unshift({
                                node: u,
                                printed: r(n, "!", t)
                            }),
                            n.call(t=>e(t), "expression")) : _.unshift({
                                node: u,
                                printed: v()
                            })
                        }
                        )(e), "callee");
                        let R = []
                          , V = [_[0]]
                          , W = 1;
                        for (; W < _.length && ("TSNonNullExpression" === _[W].node.type || s(_[W].node) || o(_[W].node) && _[W].node.computed && d(_[W].node.property)); ++W)
                            V.push(_[W]);
                        if (!s(_[0].node))
                            for (; W + 1 < _.length && c(_[W].node) && c(_[W + 1].node); ++W)
                                V.push(_[W]);
                        R.push(V),
                        V = [];
                        let q = !1;
                        for (; W < _.length; ++W) {
                            if (q && c(_[W].node)) {
                                if (_[W].node.computed && d(_[W].node.property)) {
                                    V.push(_[W]);
                                    continue
                                }
                                R.push(V),
                                V = [],
                                q = !1
                            }
                            (s(_[W].node) || "ImportExpression" === _[W].node.type) && (q = !0),
                            V.push(_[W]),
                            f(_[W].node, m.Trailing) && (R.push(V),
                            V = [],
                            q = !1)
                        }
                        function J(e) {
                            return /^[A-Z]|^[$_]+$/.test(e)
                        }
                        V.length > 0 && R.push(V);
                        let U = R.length >= 2 && !f(R[1][0].node) && function(e) {
                            let r = e[1].length > 0 && e[1][0].node.computed;
                            if (1 === e[0].length) {
                                let n = e[0][0].node;
                                return "ThisExpression" === n.type || "Identifier" === n.type && (J(n.name) || L && n.name.length <= t.tabWidth || r)
                            }
                            let u = n(e[0]).node;
                            return o(u) && "Identifier" === u.property.type && (J(u.property.name) || r)
                        }(R);
                        function H(e) {
                            let t = e.map(e=>e.printed);
                            return e.length > 0 && n(e).needsParens ? ["(", ...t, ")"] : t
                        }
                        let G = R.map(H)
                          , X = U ? 3 : 2
                          , z = R.flat()
                          , K = z.slice(1, -1).some(e=>f(e.node, m.Leading)) || z.slice(0, -1).some(e=>f(e.node, m.Trailing)) || R[X] && f(R[X][0].node, m.Leading);
                        if (R.length <= X && !K)
                            return p(e) ? G : C(G);
                        let Q = n(R[U ? 1 : 0]).node
                          , Y = !s(Q) && M(Q)
                          , Z = [H(R[0]), U ? R.slice(1, 2).map(H) : "", Y ? E : "", 0 === (j = R.slice(U ? 2 : 1)).length ? "" : F(C([E, h(E, j.map(H))]))]
                          , ee = _.map(e=>{
                            let {node: t} = e;
                            return t
                        }
                        ).filter(s);
                        return b("member-chain", K || ee.length > 2 && ee.some(e=>!e.arguments.every(e=>D(e, 0))) || G.slice(0, -1).some(S) || (P = n(n(R)).node,
                        I = n(G),
                        s(P) && S(I) && ee.slice(0, -1).some(e=>e.arguments.some(l))) ? C(Z) : [S(G) || Y ? x : "", A([G, Z])])
                    }
                }
            }), rN = h({
                "src/language-js/print/call-expression.js"(e, t) {
                    v();
                    var {builders: {join: r, group: n}} = W()
                      , u = rh()
                      , {getCallArguments: i, hasFlowAnnotationComment: a, isCallExpression: s, isMemberish: o, isStringLiteral: l, isTemplateOnItsOwnLine: p, isTestCall: c, iterateCallArgumentsPath: d} = tG()
                      , D = rB()
                      , f = rS()
                      , {printOptionalToken: m, printFunctionTypeParameters: g} = rx();
                    t.exports = {
                        printCallExpression: function(e, t, y) {
                            let h = e.getValue()
                              , E = e.getParentNode()
                              , C = "NewExpression" === h.type
                              , F = "ImportExpression" === h.type
                              , A = m(e)
                              , v = i(h);
                            if (v.length > 0 && (!F && !C && function(e, t) {
                                if ("Identifier" !== e.callee.type)
                                    return !1;
                                if ("require" === e.callee.name)
                                    return !0;
                                if ("define" === e.callee.name) {
                                    let r = i(e);
                                    return "ExpressionStatement" === t.type && (1 === r.length || 2 === r.length && "ArrayExpression" === r[0].type || 3 === r.length && l(r[0]) && "ArrayExpression" === r[1].type)
                                }
                                return !1
                            }(h, E) || 1 === v.length && p(v[0], t.originalText) || !C && c(h, E))) {
                                let n = [];
                                return d(e, ()=>{
                                    n.push(y())
                                }
                                ),
                                [C ? "new " : "", y("callee"), A, g(e, t, y), "(", r(", ", n), ")"]
                            }
                            let x = ("babel" === t.parser || "babel-flow" === t.parser) && h.callee && "Identifier" === h.callee.type && a(h.callee.trailingComments);
                            if (x && (h.callee.trailingComments[0].printed = !0),
                            !F && !C && o(h.callee) && !e.call(e=>u(e, t), "callee"))
                                return D(e, t, y);
                            let b = [C ? "new " : "", F ? "import" : y("callee"), A, x ? `/*:: ${h.callee.trailingComments[0].value.slice(2).trim()} */` : "", g(e, t, y), f(e, t, y)];
                            return F || s(h.callee) ? n(b) : b
                        }
                    }
                }
            }), rw = h({
                "src/language-js/print/assignment.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r, getStringWidth: n} = ec()
                      , {builders: {line: u, group: i, indent: a, indentIfBreak: s, lineSuffixBoundary: o}, utils: {cleanDoc: l, willBreak: p, canBreak: c}} = W()
                      , {hasLeadingOwnLineComment: d, isBinaryish: D, isStringLiteral: f, isLiteral: m, isNumericLiteral: g, isCallExpression: y, isMemberExpression: h, getCallArguments: E, rawText: C, hasComment: F, isSignedNumericLiteral: A, isObjectProperty: x} = tG()
                      , {shouldInlineLogicalExpression: b} = rF()
                      , {printCallExpression: S} = rN();
                    function T(e, t, v, T, j, P) {
                        let I = function(e, t, u, i, a) {
                            var s;
                            let o = e.getValue()
                              , v = o[a];
                            if (!v)
                                return "only-left";
                            let T = !B(v);
                            if (e.match(B, N, e=>!T || "ExpressionStatement" !== e.type && "VariableDeclaration" !== e.type))
                                return T ? "ArrowFunctionExpression" === v.type && "ArrowFunctionExpression" === v.body.type ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
                            if (!T && B(v.right) || d(t.originalText, v))
                                return "break-after-operator";
                            if ("CallExpression" === v.type && "require" === v.callee.name || "json5" === t.parser || "json" === t.parser)
                                return "never-break-after-operator";
                            if (function(e) {
                                if (N(e)) {
                                    let t = e.left || e.id;
                                    return "ObjectPattern" === t.type && t.properties.length > 2 && t.properties.some(e=>x(e) && (!e.shorthand || e.value && "AssignmentPattern" === e.value.type))
                                }
                                return !1
                            }(o) || function(e) {
                                let t = ("TSTypeAliasDeclaration" === e.type || "TypeAlias" === e.type) && e.typeParameters && e.typeParameters.params ? e.typeParameters.params : null;
                                if (r(t)) {
                                    let r = "TSTypeAliasDeclaration" === e.type ? "constraint" : "bound";
                                    if (t.length > 1 && t.some(e=>e[r] || e.default))
                                        return !0
                                }
                                return !1
                            }(o) || function(e) {
                                if ("VariableDeclarator" !== e.type)
                                    return !1;
                                let {typeAnnotation: t} = e.id;
                                if (!t || !t.typeAnnotation)
                                    return !1;
                                let n = k(t.typeAnnotation);
                                return r(n) && n.length > 1 && n.some(e=>r(k(e)) || "TSConditionalType" === e.type)
                            }(o) || w(o) && c(i))
                                return "break-lhs";
                            let j = (s = i,
                            !!x(o) && "string" == typeof (s = l(s)) && n(s) < t.tabWidth + 3);
                            return e.call(()=>(function(e, t, n, u) {
                                let i = e.getValue();
                                if (D(i) && !b(i))
                                    return !0;
                                switch (i.type) {
                                case "StringLiteralTypeAnnotation":
                                case "SequenceExpression":
                                    return !0;
                                case "ConditionalExpression":
                                    {
                                        let {test: e} = i;
                                        return D(e) && !b(e)
                                    }
                                case "ClassExpression":
                                    return r(i.decorators)
                                }
                                if (u)
                                    return !1;
                                let a = i
                                  , s = [];
                                for (; ; )
                                    if ("UnaryExpression" === a.type)
                                        a = a.argument,
                                        s.push("argument");
                                    else if ("TSNonNullExpression" === a.type)
                                        a = a.expression,
                                        s.push("expression");
                                    else
                                        break;
                                return !!(f(a) || e.call(()=>(function e(t, n, u) {
                                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                                      , a = t.getValue()
                                      , s = ()=>e(t, n, u, !0);
                                    if ("TSNonNullExpression" === a.type)
                                        return t.call(s, "expression");
                                    if (y(a)) {
                                        if ("member-chain" === S(t, n, u).label)
                                            return !1;
                                        let e = E(a);
                                        return !(!(0 === e.length || 1 === e.length && function(e, t) {
                                            let {printWidth: r} = t;
                                            if (F(e))
                                                return !1;
                                            let n = .25 * r;
                                            if ("ThisExpression" === e.type || "Identifier" === e.type && e.name.length <= n || A(e) && !F(e.argument))
                                                return !0;
                                            let u = "Literal" === e.type && "regex"in e && e.regex.pattern || "RegExpLiteral" === e.type && e.pattern;
                                            return u ? u.length <= n : f(e) ? C(e).length <= n : "TemplateLiteral" === e.type ? 0 === e.expressions.length && e.quasis[0].value.raw.length <= n && !e.quasis[0].value.raw.includes(`
`) : m(e)
                                        }(e[0], n)) || function(e, t) {
                                            let n = e.typeParameters && e.typeParameters.params || e.typeArguments && e.typeArguments.params;
                                            if (r(n)) {
                                                if (n.length > 1)
                                                    return !0;
                                                if (1 === n.length) {
                                                    let e = n[0];
                                                    if ("TSUnionType" === e.type || "UnionTypeAnnotation" === e.type || "TSIntersectionType" === e.type || "IntersectionTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "ObjectTypeAnnotation" === e.type)
                                                        return !0
                                                }
                                                if (p(t(e.typeParameters ? "typeParameters" : "typeArguments")))
                                                    return !0
                                            }
                                            return !1
                                        }(a, u)) && t.call(s, "callee")
                                    }
                                    return h(a) ? t.call(s, "object") : i && ("Identifier" === a.type || "ThisExpression" === a.type)
                                }
                                )(e, t, n), ...s))
                            }
                            )(e, t, u, j), a) ? "break-after-operator" : j || "TemplateLiteral" === v.type || "TaggedTemplateExpression" === v.type || "BooleanLiteral" === v.type || g(v) || "ClassExpression" === v.type ? "never-break-after-operator" : "fluid"
                        }(e, t, v, T, P)
                          , O = v(P, {
                            assignmentLayout: I
                        });
                        switch (I) {
                        case "break-after-operator":
                            return i([i(T), j, i(a([u, O]))]);
                        case "never-break-after-operator":
                            return i([i(T), j, " ", O]);
                        case "fluid":
                            {
                                let e = Symbol("assignment");
                                return i([i(T), j, i(a(u), {
                                    id: e
                                }), o, s(O, {
                                    groupId: e
                                })])
                            }
                        case "break-lhs":
                            return i([T, j, " ", i(O)]);
                        case "chain":
                            return [i(T), j, u, O];
                        case "chain-tail":
                            return [i(T), j, a([u, O])];
                        case "chain-tail-arrow-chain":
                            return [i(T), j, O];
                        case "only-left":
                            return T
                        }
                    }
                    function B(e) {
                        return "AssignmentExpression" === e.type
                    }
                    function N(e) {
                        return B(e) || "VariableDeclarator" === e.type
                    }
                    function w(e) {
                        return "VariableDeclarator" === e.type && e.init && "ArrowFunctionExpression" === e.init.type
                    }
                    function k(e) {
                        return ("TSTypeReference" === e.type || "GenericTypeAnnotation" === e.type) && e.typeParameters && e.typeParameters.params ? e.typeParameters.params : null
                    }
                    t.exports = {
                        printVariableDeclarator: function(e, t, r) {
                            return T(e, t, r, r("id"), " =", "init")
                        },
                        printAssignmentExpression: function(e, t, r) {
                            let n = e.getValue();
                            return T(e, t, r, r("left"), [" ", n.operator], "right")
                        },
                        printAssignment: T,
                        isArrowFunctionVariableDeclarator: w
                    }
                }
            }), rk = h({
                "src/language-js/print/function-parameters.js"(e, t) {
                    v();
                    var {getNextNonSpaceNonCommentCharacter: r} = ec()
                      , {printDanglingComments: n} = tP()
                      , {builders: {line: u, hardline: i, softline: a, group: s, indent: o, ifBreak: l}, utils: {removeLines: p, willBreak: c}} = W()
                      , {getFunctionParameters: d, iterateFunctionParametersPath: D, isSimpleType: f, isTestCall: m, isTypeAnnotationAFunction: g, isObjectType: y, isObjectTypePropertyAFunction: h, hasRestParameter: E, shouldPrintComma: C, hasComment: F, isNextLineEmpty: A} = tG()
                      , {locEnd: x} = tb()
                      , {ArgExpansionBailout: b} = ej()
                      , {printFunctionTypeParameters: S} = rx();
                    function T(e) {
                        if (!e)
                            return !1;
                        let t = d(e);
                        if (1 !== t.length)
                            return !1;
                        let[r] = t;
                        return !F(r) && ("ObjectPattern" === r.type || "ArrayPattern" === r.type || "Identifier" === r.type && r.typeAnnotation && ("TypeAnnotation" === r.typeAnnotation.type || "TSTypeAnnotation" === r.typeAnnotation.type) && y(r.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === r.type && y(r.typeAnnotation) || "AssignmentPattern" === r.type && ("ObjectPattern" === r.left.type || "ArrayPattern" === r.left.type) && ("Identifier" === r.right.type || "ObjectExpression" === r.right.type && 0 === r.right.properties.length || "ArrayExpression" === r.right.type && 0 === r.right.elements.length))
                    }
                    t.exports = {
                        printFunctionParameters: function(e, t, y, F, v) {
                            let B = e.getValue()
                              , N = d(B)
                              , w = v ? S(e, y, t) : "";
                            if (0 === N.length)
                                return [w, "(", n(e, y, !0, e=>")" === r(y.originalText, e, x)), ")"];
                            let k = e.getParentNode()
                              , j = m(k)
                              , P = T(B)
                              , I = [];
                            if (D(e, (e,r)=>{
                                let n = r === N.length - 1;
                                n && B.rest && I.push("..."),
                                I.push(t()),
                                n || (I.push(","),
                                j || P ? I.push(" ") : A(N[r], y) ? I.push(i, i) : I.push(u))
                            }
                            ),
                            F) {
                                if (c(w) || c(I))
                                    throw new b;
                                return s([p(w), "(", p(I), ")"])
                            }
                            let O = N.every(e=>!e.decorators);
                            return P && O ? [w, "(", ...I, ")"] : j ? [w, "(", ...I, ")"] : (h(k) || g(k) || "TypeAlias" === k.type || "UnionTypeAnnotation" === k.type || "TSUnionType" === k.type || "IntersectionTypeAnnotation" === k.type || "FunctionTypeAnnotation" === k.type && k.returnType === B) && 1 === N.length && null === N[0].name && B.this !== N[0] && N[0].typeAnnotation && null === B.typeParameters && f(N[0].typeAnnotation) && !B.rest ? "always" === y.arrowParens ? ["(", ...I, ")"] : I : [w, "(", o([a, ...I]), l(!E(B) && C(y, "all") ? "," : ""), a, ")"]
                        },
                        shouldHugFunctionParameters: T,
                        shouldGroupFunctionParameters: function(e, t) {
                            let r;
                            let n = (e.returnType ? (r = e.returnType).typeAnnotation && (r = r.typeAnnotation) : e.typeAnnotation && (r = e.typeAnnotation),
                            r);
                            if (!n)
                                return !1;
                            let u = e.typeParameters && e.typeParameters.params;
                            if (u) {
                                if (u.length > 1)
                                    return !1;
                                if (1 === u.length) {
                                    let e = u[0];
                                    if (e.constraint || e.default)
                                        return !1
                                }
                            }
                            return 1 === d(e).length && (y(n) || c(t))
                        }
                    }
                }
            }), rj = h({
                "src/language-js/print/type-annotation.js"(e, t) {
                    v();
                    var {printComments: r, printDanglingComments: n} = tP()
                      , {isNonEmptyArray: u} = ec()
                      , {builders: {group: i, join: a, line: s, softline: o, indent: l, align: p, ifBreak: c}} = W()
                      , d = rh()
                      , {locStart: D} = tb()
                      , {isSimpleType: f, isObjectType: m, hasLeadingOwnLineComment: g, isObjectTypePropertyAFunction: y, shouldPrintComma: h} = tG()
                      , {printAssignment: E} = rw()
                      , {printFunctionParameters: C, shouldGroupFunctionParameters: F} = rk()
                      , {printArrayItems: A} = rb();
                    function x(e) {
                        if (f(e) || m(e))
                            return !0;
                        if ("UnionTypeAnnotation" === e.type || "TSUnionType" === e.type) {
                            let t = e.types.filter(e=>"VoidTypeAnnotation" === e.type || "TSVoidKeyword" === e.type || "NullLiteralTypeAnnotation" === e.type || "TSNullKeyword" === e.type).length
                              , r = e.types.some(e=>"ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type);
                            if (e.types.length - 1 === t && r)
                                return !0
                        }
                        return !1
                    }
                    t.exports = {
                        printOpaqueType: function(e, t, r) {
                            let n = t.semi ? ";" : ""
                              , u = e.getValue()
                              , i = [];
                            return i.push("opaque type ", r("id"), r("typeParameters")),
                            u.supertype && i.push(": ", r("supertype")),
                            u.impltype && i.push(" = ", r("impltype")),
                            i.push(n),
                            i
                        },
                        printTypeAlias: function(e, t, r) {
                            let n = t.semi ? ";" : ""
                              , u = e.getValue()
                              , i = [];
                            return u.declare && i.push("declare "),
                            i.push("type ", r("id"), r("typeParameters")),
                            [E(e, t, r, i, " =", "TSTypeAliasDeclaration" === u.type ? "typeAnnotation" : "right"), n]
                        },
                        printIntersectionType: function(e, t, r) {
                            let n = e.getValue()
                              , u = e.map(r, "types")
                              , a = []
                              , o = !1;
                            for (let e = 0; e < u.length; ++e)
                                0 === e ? a.push(u[e]) : m(n.types[e - 1]) && m(n.types[e]) ? a.push([" & ", o ? l(u[e]) : u[e]]) : m(n.types[e - 1]) || m(n.types[e]) ? (e > 1 && (o = !0),
                                a.push(" & ", e > 1 ? l(u[e]) : u[e])) : a.push(l([" &", s, u[e]]));
                            return i(a)
                        },
                        printUnionType: function(e, t, n) {
                            let u = e.getValue()
                              , D = e.getParentNode()
                              , f = "TypeParameterInstantiation" !== D.type && "TSTypeParameterInstantiation" !== D.type && "GenericTypeAnnotation" !== D.type && "TSTypeReference" !== D.type && "TSTypeAssertion" !== D.type && "TupleTypeAnnotation" !== D.type && "TSTupleType" !== D.type && !("FunctionTypeParam" === D.type && !D.name && e.getParentNode(1).this !== D) && !(("TypeAlias" === D.type || "VariableDeclarator" === D.type || "TSTypeAliasDeclaration" === D.type) && g(t.originalText, u))
                              , m = x(u)
                              , y = e.map(e=>{
                                let u = n();
                                return m || (u = p(2, u)),
                                r(e, u, t)
                            }
                            , "types");
                            if (m)
                                return a(" | ", y);
                            let h = [c([f && !g(t.originalText, u) ? s : "", "| "]), a([s, "| "], y)];
                            return d(e, t) ? i([l(h), o]) : "TupleTypeAnnotation" === D.type && D.types.length > 1 || "TSTupleType" === D.type && D.elementTypes.length > 1 ? i([l([c(["(", o]), h]), o, c(")")]) : i(f ? l(h) : h)
                        },
                        printFunctionType: function(e, t, r) {
                            let n = e.getValue()
                              , u = []
                              , a = e.getParentNode(0)
                              , s = e.getParentNode(1)
                              , o = e.getParentNode(2)
                              , l = "TSFunctionType" === n.type || !(("ObjectTypeProperty" === a.type || "ObjectTypeInternalSlot" === a.type) && !a.variance && !a.optional && D(a) === D(n) || "ObjectTypeCallProperty" === a.type || o && "DeclareFunction" === o.type)
                              , p = l && ("TypeAnnotation" === a.type || "TSTypeAnnotation" === a.type)
                              , c = p && l && ("TypeAnnotation" === a.type || "TSTypeAnnotation" === a.type) && "ArrowFunctionExpression" === s.type;
                            y(a) && (l = !0,
                            p = !0),
                            c && u.push("(");
                            let d = C(e, r, t, !1, !0)
                              , f = n.returnType || n.predicate || n.typeAnnotation ? [l ? " => " : ": ", r("returnType"), r("predicate"), r("typeAnnotation")] : ""
                              , m = F(n, f);
                            return u.push(m ? i(d) : d),
                            f && u.push(f),
                            c && u.push(")"),
                            i(u)
                        },
                        printTupleType: function(e, t, r) {
                            let a = e.getValue()
                              , s = "TSTupleType" === a.type ? "elementTypes" : "types"
                              , p = u(a[s])
                              , d = p ? o : "";
                            return i(["[", l([d, A(e, t, s, r)]), c(p && h(t, "all") ? "," : ""), n(e, t, !0), d, "]"])
                        },
                        printIndexedAccessType: function(e, t, r) {
                            let n = e.getValue()
                              , u = "OptionalIndexedAccessType" === n.type && n.optional ? "?.[" : "[";
                            return [r("objectType"), u, r("indexType"), "]"]
                        },
                        shouldHugType: x,
                        printJSDocType: function(e, t, r) {
                            let n = e.getValue();
                            return [n.postfix ? "" : r, t("typeAnnotation"), n.postfix ? r : ""]
                        }
                    }
                }
            }), rP = h({
                "src/language-js/print/type-parameters.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {builders: {join: n, line: u, hardline: i, softline: a, group: s, indent: o, ifBreak: l}} = W()
                      , {isTestCall: p, hasComment: c, CommentCheckFlags: d, isTSXFile: D, shouldPrintComma: f, getFunctionParameters: m, isObjectType: g, getTypeScriptMappedTypeModifier: y} = tG()
                      , {createGroupIdMapper: h} = ec()
                      , {shouldHugType: E} = rj()
                      , {isArrowFunctionVariableDeclarator: C} = rw()
                      , F = h("typeParameters");
                    t.exports = {
                        printTypeParameter: function(e, t, r) {
                            let n = e.getValue()
                              , u = ["TSTypeParameter" === n.type && n.const ? "const " : ""]
                              , i = e.getParentNode();
                            return "TSMappedType" === i.type ? (i.readonly && u.push(y(i.readonly, "readonly"), " "),
                            u.push("[", r("name")),
                            n.constraint && u.push(" in ", r("constraint")),
                            i.nameType && u.push(" as ", e.callParent(()=>r("nameType"))),
                            u.push("]"),
                            u) : (n.variance && u.push(r("variance")),
                            n.in && u.push("in "),
                            n.out && u.push("out "),
                            u.push(r("name")),
                            n.bound && u.push(": ", r("bound")),
                            n.constraint && u.push(" extends ", r("constraint")),
                            n.default && u.push(" = ", r("default")),
                            u)
                        },
                        printTypeParameters: function(e, t, y, h) {
                            let A = e.getValue();
                            if (!A[h])
                                return "";
                            if (!Array.isArray(A[h]))
                                return y(h);
                            let v = e.getNode(2)
                              , x = v && p(v)
                              , b = e.match(e=>!(1 === e[h].length && g(e[h][0])), void 0, (e,t)=>"typeAnnotation" === t, e=>"Identifier" === e.type, C);
                            if (0 === A[h].length || !b && (x || 1 === A[h].length && ("NullableTypeAnnotation" === A[h][0].type || E(A[h][0]))))
                                return ["<", n(", ", e.map(y, h)), function(e, t) {
                                    let n = e.getValue();
                                    if (!c(n, d.Dangling))
                                        return "";
                                    let u = !c(n, d.Line)
                                      , a = r(e, t, u);
                                    return u ? a : [a, i]
                                }(e, t), ">"];
                            let S = "TSTypeParameterInstantiation" === A.type ? "" : 1 === m(A).length && D(t) && !A[h][0].constraint && "ArrowFunctionExpression" === e.getParentNode().type ? "," : f(t, "all") ? l(",") : "";
                            return s(["<", o([a, n([",", u], e.map(y, h))]), S, a, ">"], {
                                id: F(A)
                            })
                        },
                        getTypeParametersGroupId: F
                    }
                }
            }), rI = h({
                "src/language-js/print/property.js"(e, t) {
                    v();
                    var {printComments: r} = tP()
                      , {printString: n, printNumber: u} = ec()
                      , {isNumericLiteral: i, isSimpleNumber: a, isStringLiteral: s, isStringPropSafeToUnquote: o, rawText: l} = tG()
                      , {printAssignment: p} = rw()
                      , c = new WeakMap;
                    function d(e, t, p) {
                        let d = e.getNode();
                        if (d.computed)
                            return ["[", p("key"), "]"];
                        let D = e.getParentNode()
                          , {key: f} = d;
                        if ("consistent" === t.quoteProps && !c.has(D)) {
                            let e = (D.properties || D.body || D.members).some(e=>!e.computed && e.key && s(e.key) && !o(e, t));
                            c.set(D, e)
                        }
                        if (("Identifier" === f.type || i(f) && a(u(l(f))) && String(f.value) === u(l(f)) && !("typescript" === t.parser || "babel-ts" === t.parser)) && ("json" === t.parser || "consistent" === t.quoteProps && c.get(D))) {
                            let u = n(JSON.stringify("Identifier" === f.type ? f.name : f.value.toString()), t);
                            return e.call(e=>r(e, u, t), "key")
                        }
                        return o(d, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !c.get(D)) ? e.call(e=>r(e, /^\d/.test(f.value) ? u(f.value) : f.value, t), "key") : p("key")
                    }
                    t.exports = {
                        printProperty: function(e, t, r) {
                            return e.getValue().shorthand ? r("value") : p(e, t, r, d(e, t, r), ":", "value")
                        },
                        printPropertyKey: d
                    }
                }
            }), rO = h({
                "src/language-js/print/function.js"(e, t) {
                    v();
                    var r = tj()
                      , {printDanglingComments: n, printCommentsSeparately: u} = tP()
                      , i = N()
                      , {getNextNonSpaceNonCommentCharacterIndex: a} = ec()
                      , {builders: {line: s, softline: o, group: l, indent: p, ifBreak: c, hardline: d, join: D, indentIfBreak: f}, utils: {removeLines: m, willBreak: g}} = W()
                      , {ArgExpansionBailout: y} = ej()
                      , {getFunctionParameters: h, hasLeadingOwnLineComment: E, isFlowAnnotationComment: C, isJsxNode: F, isTemplateOnItsOwnLine: A, shouldPrintComma: x, startsWithNoLookaheadToken: b, isBinaryish: S, isLineComment: T, hasComment: B, getComments: w, CommentCheckFlags: k, isCallLikeExpression: j, isCallExpression: P, getCallArguments: I, hasNakedLeftSide: O, getLeftSide: L} = tG()
                      , {locEnd: _} = tb()
                      , {printFunctionParameters: M, shouldGroupFunctionParameters: $} = rk()
                      , {printPropertyKey: R} = rI()
                      , {printFunctionTypeParameters: V} = rx();
                    function q(e, t, r) {
                        let n = e.getNode()
                          , u = M(e, r, t)
                          , i = U(e, r, t)
                          , a = $(n, i)
                          , s = [V(e, t, r), l([a ? l(u) : u, i])];
                        return n.body ? s.push(" ", r("body")) : s.push(t.semi ? ";" : ""),
                        s
                    }
                    function J(e, t) {
                        if ("always" === t.arrowParens)
                            return !1;
                        if ("avoid" === t.arrowParens) {
                            var r;
                            let t;
                            return 1 === (t = h(r = e.getValue())).length && !r.typeParameters && !B(r, k.Dangling) && "Identifier" === t[0].type && !t[0].typeAnnotation && !B(t[0]) && !t[0].optional && !r.predicate && !r.returnType
                        }
                        return !1
                    }
                    function U(e, t, r) {
                        let n = e.getValue()
                          , u = t("returnType");
                        if (n.returnType && C(r.originalText, n.returnType))
                            return [" /*: ", u, " */"];
                        let i = [u];
                        return n.returnType && n.returnType.typeAnnotation && i.unshift(": "),
                        n.predicate && i.push(n.returnType ? " " : ": ", t("predicate")),
                        i
                    }
                    function H(e, t, r) {
                        let u = e.getValue()
                          , a = t.semi ? ";" : ""
                          , s = [];
                        u.argument && (function(e, t) {
                            if (E(e.originalText, t))
                                return !0;
                            if (O(t)) {
                                let r = t, n;
                                for (; n = L(r); )
                                    if (r = n,
                                    E(e.originalText, r))
                                        return !0
                            }
                            return !1
                        }(t, u.argument) ? s.push([" (", p([d, r("argument")]), d, ")"]) : S(u.argument) || "SequenceExpression" === u.argument.type ? s.push(l([c(" (", " "), p([o, r("argument")]), o, c(")")])) : s.push(" ", r("argument")));
                        let D = i(w(u))
                          , f = D && T(D);
                        return f && s.push(a),
                        B(u, k.Dangling) && s.push(" ", n(e, t, !0)),
                        f || s.push(a),
                        s
                    }
                    t.exports = {
                        printFunction: function(e, t, r, n) {
                            let u = e.getValue()
                              , i = !1;
                            if (("FunctionDeclaration" === u.type || "FunctionExpression" === u.type) && n && n.expandLastArg) {
                                let t = e.getParentNode();
                                P(t) && I(t).length > 1 && (i = !0)
                            }
                            let a = [];
                            "TSDeclareFunction" === u.type && u.declare && a.push("declare "),
                            u.async && a.push("async "),
                            u.generator ? a.push("function* ") : a.push("function "),
                            u.id && a.push(t("id"));
                            let s = M(e, t, r, i)
                              , o = U(e, t, r)
                              , p = $(u, o);
                            return a.push(V(e, r, t), l([p ? l(s) : s, o]), u.body ? " " : "", t("body")),
                            r.semi && (u.declare || !u.body) && a.push(";"),
                            a
                        },
                        printArrowFunction: function(e, t, r, i) {
                            let d = e.getValue()
                              , C = []
                              , v = []
                              , S = !1;
                            if (function s() {
                                let o = function(e, t, r, u) {
                                    let i = e.getValue()
                                      , s = [];
                                    if (i.async && s.push("async "),
                                    J(e, t))
                                        s.push(r(["params", 0]));
                                    else {
                                        let n = u && (u.expandLastArg || u.expandFirstArg)
                                          , i = U(e, r, t);
                                        if (n) {
                                            if (g(i))
                                                throw new y;
                                            i = l(m(i))
                                        }
                                        s.push(l([M(e, r, t, n, !0), i]))
                                    }
                                    let o = n(e, t, !0, e=>{
                                        let r = a(t.originalText, e, _);
                                        return !1 !== r && "=>" === t.originalText.slice(r, r + 2)
                                    }
                                    );
                                    return o && s.push(" ", o),
                                    s
                                }(e, t, r, i);
                                if (0 === C.length)
                                    C.push(o);
                                else {
                                    let {leading: r, trailing: n} = u(e, t);
                                    C.push([r, o]),
                                    v.unshift(n)
                                }
                                S = S || d.returnType && h(d).length > 0 || d.typeParameters || h(d).some(e=>"Identifier" !== e.type),
                                "ArrowFunctionExpression" !== d.body.type || i && i.expandLastArg ? v.unshift(r("body", i)) : (d = d.body,
                                e.call(s, "body"))
                            }(),
                            C.length > 1) {
                                var T, N, w;
                                let t, r, n, u, a, m;
                                return T = S,
                                N = v,
                                w = d,
                                t = e.getName(),
                                r = j(e.getParentNode()) && "callee" === t,
                                n = !!(i && i.assignmentLayout),
                                u = "BlockStatement" !== w.body.type && "ObjectExpression" !== w.body.type && "SequenceExpression" !== w.body.type,
                                a = r && u || i && "chain-tail-arrow-chain" === i.assignmentLayout,
                                m = Symbol("arrow-chain"),
                                "SequenceExpression" === w.body.type && (N = l(["(", p([o, N]), o, ")"])),
                                l([l(p([r || n ? o : "", l(D([" =>", s], C), {
                                    shouldBreak: T
                                })]), {
                                    id: m,
                                    shouldBreak: a
                                }), " =>", f(u ? p([s, N]) : [" ", N], {
                                    groupId: m
                                }), r ? c(o, "", {
                                    groupId: m
                                }) : ""])
                            }
                            if (C.push(" =>"),
                            !E(t.originalText, d.body) && ("ArrayExpression" === d.body.type || "ObjectExpression" === d.body.type || "BlockStatement" === d.body.type || F(d.body) || A(d.body, t.originalText) || "ArrowFunctionExpression" === d.body.type || "DoExpression" === d.body.type))
                                return l([...C, " ", v]);
                            if ("SequenceExpression" === d.body.type)
                                return l([...C, l([" (", p([o, v]), o, ")"])]);
                            let k = (i && i.expandLastArg || "JSXExpressionContainer" === e.getParentNode().type) && !B(d)
                              , P = i && i.expandLastArg && x(t, "all")
                              , I = "ConditionalExpression" === d.body.type && !b(d.body, e=>"ObjectExpression" === e.type);
                            return l([...C, l([p([s, I ? c("", "(") : "", v, I ? c("", ")") : ""]), k ? [c(P ? "," : ""), o] : ""])])
                        },
                        printMethod: function(e, t, n) {
                            let u = e.getNode()
                              , {kind: i} = u
                              , a = u.value || u
                              , s = [];
                            return i && "init" !== i && "method" !== i && "constructor" !== i ? (r.ok("get" === i || "set" === i),
                            s.push(i, " ")) : a.async && s.push("async "),
                            a.generator && s.push("*"),
                            s.push(R(e, t, n), u.optional || u.key.optional ? "?" : ""),
                            u === a ? s.push(q(e, t, n)) : "FunctionExpression" === a.type ? s.push(e.call(e=>q(e, t, n), "value")) : s.push(n("value")),
                            s
                        },
                        printReturnStatement: function(e, t, r) {
                            return ["return", H(e, t, r)]
                        },
                        printThrowStatement: function(e, t, r) {
                            return ["throw", H(e, t, r)]
                        },
                        printMethodInternal: q,
                        shouldPrintParamsWithoutParens: J
                    }
                }
            }), rL = h({
                "src/language-js/print/decorators.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r, hasNewline: n} = ec()
                      , {builders: {line: u, hardline: i, join: a, breakParent: s, group: o}} = W()
                      , {locStart: l, locEnd: p} = tb()
                      , {getParentExportDeclaration: c} = tG();
                    function d(e, t) {
                        return e.decorators.some(e=>n(t.originalText, p(e)))
                    }
                    function D(e) {
                        if ("ExportDefaultDeclaration" !== e.type && "ExportNamedDeclaration" !== e.type && "DeclareExportDeclaration" !== e.type)
                            return !1;
                        let t = e.declaration && e.declaration.decorators;
                        return r(t) && l(e) === l(t[0])
                    }
                    t.exports = {
                        printDecorators: function(e, t, n) {
                            let o = e.getValue()
                              , {decorators: l} = o;
                            if (!r(l) || D(e.getParentNode()))
                                return;
                            let p = "ClassExpression" === o.type || "ClassDeclaration" === o.type || d(o, t);
                            return [c(e) ? i : p ? s : "", a(u, e.map(n, "decorators")), u]
                        },
                        printClassMemberDecorators: function(e, t, r) {
                            let n = e.getValue();
                            return o([a(u, e.map(r, "decorators")), d(n, t) ? i : u])
                        },
                        printDecoratorsBeforeExport: function(e, t, r) {
                            return [a(i, e.map(r, "declaration", "decorators")), i]
                        },
                        hasDecoratorsBeforeExport: D
                    }
                }
            }), r_ = h({
                "src/language-js/print/class.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r, createGroupIdMapper: n} = ec()
                      , {printComments: u, printDanglingComments: i} = tP()
                      , {builders: {join: a, line: s, hardline: o, softline: l, group: p, indent: c, ifBreak: d}} = W()
                      , {hasComment: D, CommentCheckFlags: f} = tG()
                      , {getTypeParametersGroupId: m} = rP()
                      , {printMethod: g} = rO()
                      , {printOptionalToken: y, printTypeAnnotation: h, printDefiniteToken: E} = rx()
                      , {printPropertyKey: C} = rI()
                      , {printAssignment: F} = rw()
                      , {printClassMemberDecorators: A} = rL()
                      , x = n("heritageGroup");
                    function b(e) {
                        return e.typeParameters && !D(e.typeParameters, f.Trailing | f.Line) && !(["superClass", "extends", "mixins", "implements"].filter(t=>!!e[t]).length > 1)
                    }
                    function S(e, t, n, u) {
                        let l = e.getValue();
                        if (!r(l[u]))
                            return "";
                        let D = i(e, t, !0, e=>{
                            let {marker: t} = e;
                            return t === u
                        }
                        );
                        return [b(l) ? d(" ", s, {
                            groupId: m(l.typeParameters)
                        }) : s, D, D && o, u, p(c([s, a([",", s], e.map(n, u))]))]
                    }
                    t.exports = {
                        printClass: function(e, t, n) {
                            let i = e.getValue()
                              , a = [];
                            i.declare && a.push("declare "),
                            i.abstract && a.push("abstract "),
                            a.push("class");
                            let o = i.id && D(i.id, f.Trailing) || i.typeParameters && D(i.typeParameters, f.Trailing) || i.superClass && D(i.superClass) || r(i.extends) || r(i.mixins) || r(i.implements)
                              , m = []
                              , g = [];
                            if (i.id && m.push(" ", n("id")),
                            m.push(n("typeParameters")),
                            i.superClass) {
                                let r;
                                let i = [(r = n("superClass"),
                                "AssignmentExpression" === e.getParentNode().type ? p(d(["(", c([l, r]), l, ")"], r)) : r), n("superTypeParameters")]
                                  , a = e.call(e=>["extends ", u(e, i, t)], "superClass");
                                o ? g.push(s, p(a)) : g.push(" ", a)
                            } else
                                g.push(S(e, t, n, "extends"));
                            if (g.push(S(e, t, n, "mixins"), S(e, t, n, "implements")),
                            o) {
                                let e;
                                e = b(i) ? [...m, c(g)] : c([...m, g]),
                                a.push(p(e, {
                                    id: x(i)
                                }))
                            } else
                                a.push(...m, ...g);
                            return a.push(" ", n("body")),
                            a
                        },
                        printClassMethod: function(e, t, n) {
                            let u = e.getValue()
                              , i = [];
                            return r(u.decorators) && i.push(A(e, t, n)),
                            u.accessibility && i.push(u.accessibility + " "),
                            u.readonly && i.push("readonly "),
                            u.declare && i.push("declare "),
                            u.static && i.push("static "),
                            ("TSAbstractMethodDefinition" === u.type || u.abstract) && i.push("abstract "),
                            u.override && i.push("override "),
                            i.push(g(e, t, n)),
                            i
                        },
                        printClassProperty: function(e, t, n) {
                            let u = e.getValue()
                              , i = []
                              , a = t.semi ? ";" : "";
                            return r(u.decorators) && i.push(A(e, t, n)),
                            u.accessibility && i.push(u.accessibility + " "),
                            u.declare && i.push("declare "),
                            u.static && i.push("static "),
                            ("TSAbstractPropertyDefinition" === u.type || "TSAbstractAccessorProperty" === u.type || u.abstract) && i.push("abstract "),
                            u.override && i.push("override "),
                            u.readonly && i.push("readonly "),
                            u.variance && i.push(n("variance")),
                            ("ClassAccessorProperty" === u.type || "AccessorProperty" === u.type || "TSAbstractAccessorProperty" === u.type) && i.push("accessor "),
                            i.push(C(e, t, n), y(e), E(e), h(e, t, n)),
                            [F(e, t, n, i, " =", "value"), a]
                        },
                        printHardlineAfterHeritage: function(e) {
                            return d(o, "", {
                                groupId: x(e)
                            })
                        }
                    }
                }
            }), rM = h({
                "src/language-js/print/interface.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r} = ec()
                      , {builders: {join: n, line: u, group: i, indent: a, ifBreak: s}} = W()
                      , {hasComment: o, identity: l, CommentCheckFlags: p} = tG()
                      , {getTypeParametersGroupId: c} = rP()
                      , {printTypeScriptModifiers: d} = rx();
                    t.exports = {
                        printInterface: function(e, t, D) {
                            let f = e.getValue()
                              , m = [];
                            f.declare && m.push("declare "),
                            "TSInterfaceDeclaration" === f.type && m.push(f.abstract ? "abstract " : "", d(e, t, D)),
                            m.push("interface");
                            let g = []
                              , y = [];
                            "InterfaceTypeAnnotation" !== f.type && g.push(" ", D("id"), D("typeParameters"));
                            let h = f.typeParameters && !o(f.typeParameters, p.Trailing | p.Line);
                            return r(f.extends) && y.push(h ? s(" ", u, {
                                groupId: c(f.typeParameters)
                            }) : u, "extends ", (1 === f.extends.length ? l : a)(n([",", u], e.map(D, "extends")))),
                            f.id && o(f.id, p.Trailing) || r(f.extends) ? h ? m.push(i([...g, a(y)])) : m.push(i(a([...g, ...y]))) : m.push(...g, ...y),
                            m.push(" ", D("body")),
                            i(m)
                        }
                    }
                }
            }), r$ = h({
                "src/language-js/print/module.js"(e, t) {
                    v();
                    var {isNonEmptyArray: r} = ec()
                      , {builders: {softline: n, group: u, indent: i, join: a, line: s, ifBreak: o, hardline: l}} = W()
                      , {printDanglingComments: p} = tP()
                      , {hasComment: c, CommentCheckFlags: d, shouldPrintComma: D, needsHardlineAfterDanglingComment: f, isStringLiteral: m, rawText: g} = tG()
                      , {locStart: y, hasSameLoc: h} = tb()
                      , {hasDecoratorsBeforeExport: E, printDecoratorsBeforeExport: C} = rL();
                    function F(e, t, r) {
                        let n = e.getValue();
                        if (!n.source)
                            return "";
                        let u = [];
                        return x(n, t) || u.push(" from"),
                        u.push(" ", r("source")),
                        u
                    }
                    function A(e, t, l) {
                        let p = e.getValue();
                        if (x(p, t))
                            return "";
                        let d = [" "];
                        if (r(p.specifiers)) {
                            let r = []
                              , f = [];
                            e.each(()=>{
                                let t = e.getValue().type;
                                if ("ExportNamespaceSpecifier" === t || "ExportDefaultSpecifier" === t || "ImportNamespaceSpecifier" === t || "ImportDefaultSpecifier" === t)
                                    r.push(l());
                                else if ("ExportSpecifier" === t || "ImportSpecifier" === t)
                                    f.push(l());
                                else
                                    throw Error(`Unknown specifier type ${JSON.stringify(t)}`)
                            }
                            , "specifiers"),
                            d.push(a(", ", r)),
                            f.length > 0 && (r.length > 0 && d.push(", "),
                            f.length > 1 || r.length > 0 || p.specifiers.some(e=>c(e)) ? d.push(u(["{", i([t.bracketSpacing ? s : n, a([",", s], f)]), o(D(t) ? "," : ""), t.bracketSpacing ? s : n, "}"])) : d.push(["{", t.bracketSpacing ? " " : "", ...f, t.bracketSpacing ? " " : "", "}"]))
                        } else
                            d.push("{}");
                        return d
                    }
                    function x(e, t) {
                        let {type: n, importKind: u, source: i, specifiers: a} = e;
                        return !("ImportDeclaration" !== n || r(a)) && "type" !== u && !/{\s*}/.test(t.originalText.slice(y(e), y(i)))
                    }
                    function b(e, t, n) {
                        return r(e.getNode().assertions) ? [" assert {", t.bracketSpacing ? " " : "", a(", ", e.map(n, "assertions")), t.bracketSpacing ? " " : "", "}"] : ""
                    }
                    t.exports = {
                        printImportDeclaration: function(e, t, r) {
                            let n = e.getValue()
                              , u = t.semi ? ";" : ""
                              , i = []
                              , {importKind: a} = n;
                            return i.push("import"),
                            a && "value" !== a && i.push(" ", a),
                            i.push(A(e, t, r), F(e, t, r), b(e, t, r), u),
                            i
                        },
                        printExportDeclaration: function(e, t, r) {
                            let n = e.getValue()
                              , u = [];
                            E(n) && u.push(C(e, t, r));
                            let {type: i, exportKind: a, declaration: s} = n;
                            return u.push("export"),
                            (n.default || "ExportDefaultDeclaration" === i) && u.push(" default"),
                            c(n, d.Dangling) && (u.push(" ", p(e, t, !0)),
                            f(n) && u.push(l)),
                            s ? u.push(" ", r("declaration")) : u.push("type" === a ? " type" : "", A(e, t, r), F(e, t, r), b(e, t, r)),
                            function(e, t) {
                                if (!t.semi)
                                    return !1;
                                let {type: r, declaration: n} = e
                                  , u = e.default || "ExportDefaultDeclaration" === r;
                                if (!n)
                                    return !0;
                                let {type: i} = n;
                                return !!(u && "ClassDeclaration" !== i && "FunctionDeclaration" !== i && "TSInterfaceDeclaration" !== i && "DeclareClass" !== i && "DeclareFunction" !== i && "TSDeclareFunction" !== i && "EnumDeclaration" !== i)
                            }(n, t) && u.push(";"),
                            u
                        },
                        printExportAllDeclaration: function(e, t, r) {
                            let n = e.getValue()
                              , u = t.semi ? ";" : ""
                              , i = []
                              , {exportKind: a, exported: s} = n;
                            return i.push("export"),
                            "type" === a && i.push(" type"),
                            i.push(" *"),
                            s && i.push(" as ", r("exported")),
                            i.push(F(e, t, r), b(e, t, r), u),
                            i
                        },
                        printModuleSpecifier: function(e, t, r) {
                            let n = e.getNode()
                              , {type: u} = n
                              , i = []
                              , a = "ImportSpecifier" === u ? n.importKind : n.exportKind;
                            a && "value" !== a && i.push(a, " ");
                            let s = u.startsWith("Import")
                              , o = s ? "imported" : "local"
                              , l = s ? "local" : "exported"
                              , p = n[o]
                              , c = n[l]
                              , d = ""
                              , D = "";
                            return "ExportNamespaceSpecifier" === u || "ImportNamespaceSpecifier" === u ? d = "*" : p && (d = r(o)),
                            c && !function(e) {
                                if ("ImportSpecifier" !== e.type && "ExportSpecifier" !== e.type)
                                    return !1;
                                let {local: t, ["ImportSpecifier" === e.type ? "imported" : "exported"]: r} = e;
                                return !!(t.type === r.type && h(t, r)) && (m(t) ? t.value === r.value && g(t) === g(r) : "Identifier" === t.type && t.name === r.name)
                            }(n) && (D = r(l)),
                            i.push(d, d && D ? " as " : "", D),
                            i
                        }
                    }
                }
            }), rR = h({
                "src/language-js/print/object.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {builders: {line: n, softline: u, group: i, indent: a, ifBreak: s, hardline: o}} = W()
                      , {getLast: l, hasNewlineInRange: p, hasNewline: c, isNonEmptyArray: d} = ec()
                      , {shouldPrintComma: D, hasComment: f, getComments: m, CommentCheckFlags: g, isNextLineEmpty: y} = tG()
                      , {locStart: h, locEnd: E} = tb()
                      , {printOptionalToken: C, printTypeAnnotation: F} = rx()
                      , {shouldHugFunctionParameters: A} = rk()
                      , {shouldHugType: x} = rj()
                      , {printHardlineAfterHeritage: b} = r_();
                    t.exports = {
                        printObject: function(e, t, v) {
                            let S = t.semi ? ";" : "", T = e.getValue(), B;
                            B = "TSTypeLiteral" === T.type ? "members" : "TSInterfaceBody" === T.type ? "body" : "properties";
                            let N = "ObjectTypeAnnotation" === T.type
                              , w = [B];
                            N && w.push("indexers", "callProperties", "internalSlots");
                            let k = w.map(e=>T[e][0]).sort((e,t)=>h(e) - h(t))[0]
                              , j = e.getParentNode(0)
                              , P = N && j && ("InterfaceDeclaration" === j.type || "DeclareInterface" === j.type || "DeclareClass" === j.type) && "body" === e.getName()
                              , I = "TSInterfaceBody" === T.type || P || "ObjectPattern" === T.type && "FunctionDeclaration" !== j.type && "FunctionExpression" !== j.type && "ArrowFunctionExpression" !== j.type && "ObjectMethod" !== j.type && "ClassMethod" !== j.type && "ClassPrivateMethod" !== j.type && "AssignmentPattern" !== j.type && "CatchClause" !== j.type && T.properties.some(e=>e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type)) || "ObjectPattern" !== T.type && k && p(t.originalText, h(T), h(k))
                              , O = P ? ";" : "TSInterfaceBody" === T.type || "TSTypeLiteral" === T.type ? s(S, ";") : ","
                              , L = "RecordExpression" === T.type ? "#{" : T.exact ? "{|" : "{"
                              , _ = T.exact ? "|}" : "}"
                              , M = [];
                            for (let t of w)
                                e.each(e=>{
                                    let t = e.getValue();
                                    M.push({
                                        node: t,
                                        printed: v(),
                                        loc: h(t)
                                    })
                                }
                                , t);
                            w.length > 1 && M.sort((e,t)=>e.loc - t.loc);
                            let $ = []
                              , R = M.map(e=>{
                                let r = [...$, i(e.printed)];
                                return $ = [O, n],
                                ("TSPropertySignature" === e.node.type || "TSMethodSignature" === e.node.type || "TSConstructSignatureDeclaration" === e.node.type) && f(e.node, g.PrettierIgnore) && $.shift(),
                                y(e.node, t) && $.push(o),
                                r
                            }
                            );
                            if (T.inexact) {
                                let u;
                                if (f(T, g.Dangling)) {
                                    let i = f(T, g.Line);
                                    u = [r(e, t, !0), i || c(t.originalText, E(l(m(T)))) ? o : n, "..."]
                                } else
                                    u = ["..."];
                                R.push([...$, ...u])
                            }
                            let V = l(T[B]), W = !(T.inexact || V && "RestElement" === V.type || V && ("TSPropertySignature" === V.type || "TSCallSignatureDeclaration" === V.type || "TSMethodSignature" === V.type || "TSConstructSignatureDeclaration" === V.type) && f(V, g.PrettierIgnore)), q;
                            if (0 === R.length) {
                                if (!f(T, g.Dangling))
                                    return [L, _, F(e, t, v)];
                                q = i([L, r(e, t), u, _, C(e), F(e, t, v)])
                            } else
                                q = [P && d(T.properties) ? b(j) : "", L, a([t.bracketSpacing ? n : u, ...R]), s(W && ("," !== O || D(t)) ? O : ""), t.bracketSpacing ? n : u, _, C(e), F(e, t, v)];
                            return e.match(e=>"ObjectPattern" === e.type && !e.decorators, (e,t,r)=>A(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === r) || e.match(x, (e,t)=>"typeAnnotation" === t, (e,t)=>"typeAnnotation" === t, (e,t,r)=>A(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === r) || !I && e.match(e=>"ObjectPattern" === e.type, e=>"AssignmentExpression" === e.type || "VariableDeclarator" === e.type) ? q : i(q, {
                                shouldBreak: I
                            })
                        }
                    }
                }
            }), rV = h({
                "src/language-js/print/flow.js"(e, t) {
                    v();
                    var r = tj()
                      , {printDanglingComments: n} = tP()
                      , {printString: u, printNumber: i} = ec()
                      , {builders: {hardline: a, softline: s, group: o, indent: l}} = W()
                      , {getParentExportDeclaration: p, isFunctionNotation: c, isGetterOrSetter: d, rawText: D, shouldPrintComma: f} = tG()
                      , {locStart: m, locEnd: g} = tb()
                      , {replaceTextEndOfLine: y} = $()
                      , {printClass: h} = r_()
                      , {printOpaqueType: E, printTypeAlias: C, printIntersectionType: F, printUnionType: A, printFunctionType: x, printTupleType: b, printIndexedAccessType: S} = rj()
                      , {printInterface: T} = rM()
                      , {printTypeParameter: B, printTypeParameters: N} = rP()
                      , {printExportDeclaration: w, printExportAllDeclaration: k} = r$()
                      , {printArrayItems: j} = rb()
                      , {printObject: P} = rR()
                      , {printPropertyKey: I} = rI()
                      , {printOptionalToken: O, printTypeAnnotation: L, printRestSpread: _} = rx();
                    function M(e, t) {
                        let n = p(e);
                        return n ? (r.strictEqual(n.type, "DeclareExportDeclaration"),
                        t) : ["declare ", t]
                    }
                    t.exports = {
                        printFlow: function(e, t, p) {
                            let v = e.getValue()
                              , $ = t.semi ? ";" : ""
                              , R = [];
                            switch (v.type) {
                            case "DeclareClass":
                                return M(e, h(e, t, p));
                            case "DeclareFunction":
                                return M(e, ["function ", p("id"), v.predicate ? " " : "", p("predicate"), $]);
                            case "DeclareModule":
                                return M(e, ["module ", p("id"), " ", p("body")]);
                            case "DeclareModuleExports":
                                return M(e, ["module.exports", ": ", p("typeAnnotation"), $]);
                            case "DeclareVariable":
                                return M(e, ["var ", p("id"), $]);
                            case "DeclareOpaqueType":
                                return M(e, E(e, t, p));
                            case "DeclareInterface":
                                return M(e, T(e, t, p));
                            case "DeclareTypeAlias":
                                return M(e, C(e, t, p));
                            case "DeclareExportDeclaration":
                                return M(e, w(e, t, p));
                            case "DeclareExportAllDeclaration":
                                return M(e, k(e, t, p));
                            case "OpaqueType":
                                return E(e, t, p);
                            case "TypeAlias":
                                return C(e, t, p);
                            case "IntersectionTypeAnnotation":
                                return F(e, t, p);
                            case "UnionTypeAnnotation":
                                return A(e, t, p);
                            case "FunctionTypeAnnotation":
                                return x(e, t, p);
                            case "TupleTypeAnnotation":
                                return b(e, t, p);
                            case "GenericTypeAnnotation":
                                return [p("id"), N(e, t, p, "typeParameters")];
                            case "IndexedAccessType":
                            case "OptionalIndexedAccessType":
                                return S(e, t, p);
                            case "TypeAnnotation":
                                return p("typeAnnotation");
                            case "TypeParameter":
                                return B(e, t, p);
                            case "TypeofTypeAnnotation":
                                return ["typeof ", p("argument")];
                            case "ExistsTypeAnnotation":
                                return "*";
                            case "EmptyTypeAnnotation":
                                return "empty";
                            case "MixedTypeAnnotation":
                                return "mixed";
                            case "ArrayTypeAnnotation":
                                return [p("elementType"), "[]"];
                            case "BooleanLiteralTypeAnnotation":
                                return String(v.value);
                            case "EnumDeclaration":
                                return ["enum ", p("id"), " ", p("body")];
                            case "EnumBooleanBody":
                            case "EnumNumberBody":
                            case "EnumStringBody":
                            case "EnumSymbolBody":
                                if ("EnumSymbolBody" === v.type || v.explicitType) {
                                    let e = null;
                                    switch (v.type) {
                                    case "EnumBooleanBody":
                                        e = "boolean";
                                        break;
                                    case "EnumNumberBody":
                                        e = "number";
                                        break;
                                    case "EnumStringBody":
                                        e = "string";
                                        break;
                                    case "EnumSymbolBody":
                                        e = "symbol"
                                    }
                                    R.push("of ", e, " ")
                                }
                                if (0 !== v.members.length || v.hasUnknownMembers) {
                                    let r = v.members.length > 0 ? [a, j(e, t, "members", p), v.hasUnknownMembers || f(t) ? "," : ""] : [];
                                    R.push(o(["{", l([...r, ...v.hasUnknownMembers ? [a, "..."] : []]), n(e, t, !0), a, "}"]))
                                } else
                                    R.push(o(["{", n(e, t), s, "}"]));
                                return R;
                            case "EnumBooleanMember":
                            case "EnumNumberMember":
                            case "EnumStringMember":
                                return [p("id"), " = ", "object" == typeof v.init ? p("init") : String(v.init)];
                            case "EnumDefaultedMember":
                                return p("id");
                            case "FunctionTypeParam":
                                {
                                    let t = v.name ? p("name") : e.getParentNode().this === v ? "this" : "";
                                    return [t, O(e), t ? ": " : "", p("typeAnnotation")]
                                }
                            case "InterfaceDeclaration":
                            case "InterfaceTypeAnnotation":
                                return T(e, t, p);
                            case "ClassImplements":
                            case "InterfaceExtends":
                                return [p("id"), p("typeParameters")];
                            case "NullableTypeAnnotation":
                                return ["?", p("typeAnnotation")];
                            case "Variance":
                                {
                                    let {kind: e} = v;
                                    return r.ok("plus" === e || "minus" === e),
                                    "plus" === e ? "+" : "-"
                                }
                            case "ObjectTypeCallProperty":
                                return v.static && R.push("static "),
                                R.push(p("value")),
                                R;
                            case "ObjectTypeIndexer":
                                return [v.static ? "static " : "", v.variance ? p("variance") : "", "[", p("id"), v.id ? ": " : "", p("key"), "]: ", p("value")];
                            case "ObjectTypeProperty":
                                {
                                    let r = "";
                                    return v.proto ? r = "proto " : v.static && (r = "static "),
                                    [r, d(v) ? v.kind + " " : "", v.variance ? p("variance") : "", I(e, t, p), O(e), c(v) ? "" : ": ", p("value")]
                                }
                            case "ObjectTypeAnnotation":
                                return P(e, t, p);
                            case "ObjectTypeInternalSlot":
                                return [v.static ? "static " : "", "[[", p("id"), "]]", O(e), v.method ? "" : ": ", p("value")];
                            case "ObjectTypeSpreadProperty":
                                return _(e, t, p);
                            case "QualifiedTypeofIdentifier":
                            case "QualifiedTypeIdentifier":
                                return [p("qualification"), ".", p("id")];
                            case "StringLiteralTypeAnnotation":
                                return y(u(D(v), t));
                            case "NumberLiteralTypeAnnotation":
                                r.strictEqual(typeof v.value, "number");
                            case "BigIntLiteralTypeAnnotation":
                                return v.extra ? i(v.extra.raw) : i(v.raw);
                            case "TypeCastExpression":
                                return ["(", p("expression"), L(e, t, p), ")"];
                            case "TypeParameterDeclaration":
                            case "TypeParameterInstantiation":
                                {
                                    let r = N(e, t, p, "params");
                                    if ("flow" === t.parser) {
                                        let e = m(v)
                                          , n = g(v)
                                          , u = t.originalText.lastIndexOf("/*", e)
                                          , i = t.originalText.indexOf("*/", n);
                                        if (-1 !== u && -1 !== i) {
                                            let e = t.originalText.slice(u + 2, i).trim();
                                            if (e.startsWith("::") && !e.includes("/*") && !e.includes("*/"))
                                                return ["/*:: ", r, " */"]
                                        }
                                    }
                                    return r
                                }
                            case "InferredPredicate":
                                return "%checks";
                            case "DeclaredPredicate":
                                return ["%checks(", p("value"), ")"];
                            case "AnyTypeAnnotation":
                                return "any";
                            case "BooleanTypeAnnotation":
                                return "boolean";
                            case "BigIntTypeAnnotation":
                                return "bigint";
                            case "NullLiteralTypeAnnotation":
                                return "null";
                            case "NumberTypeAnnotation":
                                return "number";
                            case "SymbolTypeAnnotation":
                                return "symbol";
                            case "StringTypeAnnotation":
                                return "string";
                            case "VoidTypeAnnotation":
                                return "void";
                            case "ThisTypeAnnotation":
                                return "this";
                            case "Node":
                            case "Printable":
                            case "SourceLocation":
                            case "Position":
                            case "Statement":
                            case "Function":
                            case "Pattern":
                            case "Expression":
                            case "Declaration":
                            case "Specifier":
                            case "NamedSpecifier":
                            case "Comment":
                            case "MemberTypeAnnotation":
                            case "Type":
                                throw Error("unprintable type: " + JSON.stringify(v.type))
                            }
                        }
                    }
                }
            }), rW = h({
                "src/language-js/utils/is-ts-keyword-type.js"(e, t) {
                    v(),
                    t.exports = function(e) {
                        let {type: t} = e;
                        return t.startsWith("TS") && t.endsWith("Keyword")
                    }
                }
            }), rq = h({
                "src/language-js/print/ternary.js"(e, t) {
                    v();
                    var {hasNewlineInRange: r} = ec()
                      , {isJsxNode: n, getComments: u, isCallExpression: i, isMemberExpression: a, isTSTypeExpression: s} = tG()
                      , {locStart: o, locEnd: l} = tb()
                      , p = tU()
                      , {builders: {line: c, softline: d, group: D, indent: f, align: m, ifBreak: g, dedent: y, breakParent: h}} = W()
                      , E = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
                    t.exports = {
                        printTernary: function(e, t, C) {
                            var F, A;
                            let v, x, b, S, T = e.getValue(), B = "ConditionalExpression" === T.type, N = B ? "consequent" : "trueType", w = B ? "alternate" : "falseType", k = B ? ["test"] : ["checkType", "extendsType"], j = T[N], P = T[w], I = [], O = !1, L = e.getParentNode(), _ = L.type === T.type && k.some(e=>L[e] === T), M = L.type === T.type && !_, $, R, V = 0;
                            do
                                R = $ || T,
                                $ = e.getParentNode(V),
                                V++;
                            while ($ && $.type === T.type && k.every(e=>$[e] !== R));
                            let W = $ || L;
                            if (B && (n(T[k[0]]) || n(j) || n(P) || function(e) {
                                let t = [e];
                                for (let e = 0; e < t.length; e++) {
                                    let r = t[e];
                                    for (let e of ["test", "consequent", "alternate"]) {
                                        let u = r[e];
                                        if (n(u))
                                            return !0;
                                        "ConditionalExpression" === u.type && t.push(u)
                                    }
                                }
                                return !1
                            }(R))) {
                                O = !0,
                                M = !0;
                                let e = e=>[g("("), f([d, e]), d, g(")")];
                                I.push(" ? ", "NullLiteral" === j.type || "Literal" === j.type && null === j.value || "Identifier" === j.type && "undefined" === j.name ? C(N) : e(C(N)), " : ", P.type === T.type || "NullLiteral" === (F = P).type || "Literal" === F.type && null === F.value || "Identifier" === F.type && "undefined" === F.name ? C(w) : e(C(w)))
                            } else {
                                let e = [c, "? ", j.type === T.type ? g("", "(") : "", m(2, C(N)), j.type === T.type ? g("", ")") : "", c, ": ", P.type === T.type ? C(w) : m(2, C(w))];
                                I.push(L.type !== T.type || L[w] === T || _ ? e : t.useTabs ? y(f(e)) : m(Math.max(0, t.tabWidth - 2), e))
                            }
                            let q = [...k.map(e=>u(T[e])), u(j), u(P)].flat().some(e=>p(e) && r(t.originalText, o(e), l(e)))
                              , J = !O && (a(L) || "NGPipeExpression" === L.type && L.left === T) && !L.computed
                              , U = function(e) {
                                let t = e.getValue();
                                if ("ConditionalExpression" !== t.type)
                                    return !1;
                                let r, n = t;
                                for (let t = 0; !r; t++) {
                                    let u = e.getParentNode(t);
                                    if (i(u) && u.callee === n || a(u) && u.object === n || "TSNonNullExpression" === u.type && u.expression === n) {
                                        n = u;
                                        continue
                                    }
                                    "NewExpression" === u.type && u.callee === n || s(u) && u.expression === n ? (r = e.getParentNode(t + 1),
                                    n = u) : r = u
                                }
                                return n !== t && r[E.get(r.type)] === n
                            }(e)
                              , H = (A = [(x = "ConditionalExpression" === (v = e.getValue()).type,
                            b = e.getParentNode(),
                            S = x ? C("test") : [C("checkType"), " ", "extends", " ", C("extendsType")],
                            b.type === v.type && b[x ? "alternate" : "falseType"] === v ? m(2, S) : S), M ? I : f(I), B && J && !U ? d : ""],
                            L === W ? D(A, {
                                shouldBreak: q
                            }) : q ? [A, h] : A);
                            return _ || U ? D([f([d, H]), d]) : H
                        }
                    }
                }
            }), rJ = h({
                "src/language-js/print/statement.js"(e, t) {
                    v();
                    var {builders: {hardline: r}} = W()
                      , n = rh()
                      , {getLeftSidePathName: u, hasNakedLeftSide: i, isJsxNode: a, isTheOnlyJsxElementInMarkdown: s, hasComment: o, CommentCheckFlags: l, isNextLineEmpty: p} = tG()
                      , {shouldPrintParamsWithoutParens: c} = rO();
                    function d(e, t, d, f) {
                        let m = e.getValue()
                          , g = []
                          , y = "ClassBody" === m.type
                          , h = function(e) {
                            for (let t = e.length - 1; t >= 0; t--) {
                                let r = e[t];
                                if ("EmptyStatement" !== r.type)
                                    return r
                            }
                        }(m[f]);
                        return e.each((e,f,m)=>{
                            let E = e.getValue();
                            if ("EmptyStatement" === E.type)
                                return;
                            let C = d();
                            !t.semi && !y && !s(t, e) && "ExpressionStatement" === e.getNode().type && e.call(e=>(function e(t, r) {
                                let s = t.getValue();
                                switch (s.type) {
                                case "ParenthesizedExpression":
                                case "TypeCastExpression":
                                case "ArrayExpression":
                                case "ArrayPattern":
                                case "TemplateLiteral":
                                case "TemplateElement":
                                case "RegExpLiteral":
                                    return !0;
                                case "ArrowFunctionExpression":
                                    if (!c(t, r))
                                        return !0;
                                    break;
                                case "UnaryExpression":
                                    {
                                        let {prefix: e, operator: t} = s;
                                        if (e && ("+" === t || "-" === t))
                                            return !0;
                                        break
                                    }
                                case "BindExpression":
                                    if (!s.object)
                                        return !0;
                                    break;
                                case "Literal":
                                    if (s.regex)
                                        return !0;
                                    break;
                                default:
                                    if (a(s))
                                        return !0
                                }
                                return !!n(t, r) || !!i(s) && t.call(t=>e(t, r), ...u(t, s))
                            }
                            )(e, t), "expression") ? o(E, l.Leading) ? g.push(d([], {
                                needsSemi: !0
                            })) : g.push(";", C) : g.push(C),
                            !t.semi && y && D(E) && function(e, t) {
                                let {type: r, name: n} = e.key;
                                if (!e.computed && "Identifier" === r && ("static" === n || "get" === n || "set" === n || "accessor" === n) && !e.value && !e.typeAnnotation)
                                    return !0;
                                if (!t || t.static || t.accessibility)
                                    return !1;
                                if (!t.computed) {
                                    let e = t.key && t.key.name;
                                    if ("in" === e || "instanceof" === e)
                                        return !0
                                }
                                if (D(t) && t.variance && !t.static && !t.declare)
                                    return !0;
                                switch (t.type) {
                                case "ClassProperty":
                                case "PropertyDefinition":
                                case "TSAbstractPropertyDefinition":
                                    return t.computed;
                                case "MethodDefinition":
                                case "TSAbstractMethodDefinition":
                                case "ClassMethod":
                                case "ClassPrivateMethod":
                                    {
                                        if ((t.value ? t.value.async : t.async) || "get" === t.kind || "set" === t.kind)
                                            return !1;
                                        let e = t.value ? t.value.generator : t.generator;
                                        return !!(t.computed || e)
                                    }
                                case "TSIndexSignature":
                                    return !0
                                }
                                return !1
                            }(E, m[f + 1]) && g.push(";"),
                            E !== h && (g.push(r),
                            p(E, t) && g.push(r))
                        }
                        , f),
                        g
                    }
                    var D = e=>{
                        let {type: t} = e;
                        return "ClassProperty" === t || "PropertyDefinition" === t || "ClassPrivateProperty" === t || "ClassAccessorProperty" === t || "AccessorProperty" === t || "TSAbstractPropertyDefinition" === t || "TSAbstractAccessorProperty" === t
                    }
                    ;
                    t.exports = {
                        printBody: function(e, t, r) {
                            return d(e, t, r, "body")
                        },
                        printSwitchCaseConsequent: function(e, t, r) {
                            return d(e, t, r, "consequent")
                        }
                    }
                }
            }), rU = h({
                "src/language-js/print/block.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {isNonEmptyArray: n} = ec()
                      , {builders: {hardline: u, indent: i}} = W()
                      , {hasComment: a, CommentCheckFlags: s, isNextLineEmpty: o} = tG()
                      , {printHardlineAfterHeritage: l} = r_()
                      , {printBody: p} = rJ();
                    function c(e, t, i) {
                        let l = e.getValue()
                          , c = n(l.directives)
                          , d = l.body.some(e=>"EmptyStatement" !== e.type)
                          , D = a(l, s.Dangling);
                        if (!c && !d && !D)
                            return "";
                        let f = [];
                        if (c && e.each((e,r,n)=>{
                            f.push(i()),
                            (r < n.length - 1 || d || D) && (f.push(u),
                            o(e.getValue(), t) && f.push(u))
                        }
                        , "directives"),
                        d && f.push(p(e, t, i)),
                        D && f.push(r(e, t, !0)),
                        "Program" === l.type) {
                            let t = e.getParentNode();
                            t && "ModuleExpression" === t.type || f.push(u)
                        }
                        return f
                    }
                    t.exports = {
                        printBlock: function(e, t, r) {
                            let a = e.getValue()
                              , s = [];
                            if ("StaticBlock" === a.type && s.push("static "),
                            "ClassBody" === a.type && n(a.body)) {
                                let t = e.getParentNode();
                                s.push(l(t))
                            }
                            s.push("{");
                            let o = c(e, t, r);
                            if (o)
                                s.push(i([u, o]), u);
                            else {
                                let t = e.getParentNode()
                                  , r = e.getParentNode(1);
                                "ArrowFunctionExpression" !== t.type && "FunctionExpression" !== t.type && "FunctionDeclaration" !== t.type && "ObjectMethod" !== t.type && "ClassMethod" !== t.type && "ClassPrivateMethod" !== t.type && "ForStatement" !== t.type && "WhileStatement" !== t.type && "DoWhileStatement" !== t.type && "DoExpression" !== t.type && ("CatchClause" !== t.type || r.finalizer) && "TSModuleDeclaration" !== t.type && "TSDeclareFunction" !== t.type && "StaticBlock" !== a.type && "ClassBody" !== a.type && s.push(u)
                            }
                            return s.push("}"),
                            s
                        },
                        printBlockBody: c
                    }
                }
            }), rH = h({
                "src/language-js/print/typescript.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {hasNewlineInRange: n} = ec()
                      , {builders: {join: u, line: i, hardline: a, softline: s, group: o, indent: l, conditionalGroup: p, ifBreak: c}} = W()
                      , {isStringLiteral: d, getTypeScriptMappedTypeModifier: D, shouldPrintComma: f, isCallExpression: m, isMemberExpression: g} = tG()
                      , y = rW()
                      , {locStart: h, locEnd: E} = tb()
                      , {printOptionalToken: C, printTypeScriptModifiers: F} = rx()
                      , {printTernary: A} = rq()
                      , {printFunctionParameters: x, shouldGroupFunctionParameters: b} = rk()
                      , {printTemplateLiteral: S} = tX()
                      , {printArrayItems: T} = rb()
                      , {printObject: B} = rR()
                      , {printClassProperty: N, printClassMethod: w} = r_()
                      , {printTypeParameter: k, printTypeParameters: j} = rP()
                      , {printPropertyKey: P} = rI()
                      , {printFunction: I, printMethodInternal: O} = rO()
                      , {printInterface: L} = rM()
                      , {printBlock: _} = rU()
                      , {printTypeAlias: M, printIntersectionType: $, printUnionType: R, printFunctionType: V, printTupleType: q, printIndexedAccessType: J, printJSDocType: U} = rj();
                    t.exports = {
                        printTypescript: function(e, t, v) {
                            let W = e.getValue();
                            if (!W.type.startsWith("TS"))
                                return;
                            if (y(W))
                                return W.type.slice(2, -7).toLowerCase();
                            let H = t.semi ? ";" : ""
                              , G = [];
                            switch (W.type) {
                            case "TSThisType":
                                return "this";
                            case "TSTypeAssertion":
                                {
                                    let e = !("ArrayExpression" === W.expression.type || "ObjectExpression" === W.expression.type)
                                      , t = o(["<", l([s, v("typeAnnotation")]), s, ">"])
                                      , r = [c("("), l([s, v("expression")]), s, c(")")];
                                    return e ? p([[t, v("expression")], [t, o(r, {
                                        shouldBreak: !0
                                    })], [t, v("expression")]]) : o([t, v("expression")])
                                }
                            case "TSDeclareFunction":
                                return I(e, v, t);
                            case "TSExportAssignment":
                                return ["export = ", v("expression"), H];
                            case "TSModuleBlock":
                                return _(e, t, v);
                            case "TSInterfaceBody":
                            case "TSTypeLiteral":
                                return B(e, t, v);
                            case "TSTypeAliasDeclaration":
                                return M(e, t, v);
                            case "TSQualifiedName":
                                return u(".", [v("left"), v("right")]);
                            case "TSAbstractMethodDefinition":
                            case "TSDeclareMethod":
                                return w(e, t, v);
                            case "TSAbstractAccessorProperty":
                            case "TSAbstractPropertyDefinition":
                                return N(e, t, v);
                            case "TSInterfaceHeritage":
                            case "TSExpressionWithTypeArguments":
                                return G.push(v("expression")),
                                W.typeParameters && G.push(v("typeParameters")),
                                G;
                            case "TSTemplateLiteralType":
                                return S(e, v, t);
                            case "TSNamedTupleMember":
                                return [v("label"), W.optional ? "?" : "", ": ", v("elementType")];
                            case "TSRestType":
                                return ["...", v("typeAnnotation")];
                            case "TSOptionalType":
                                return [v("typeAnnotation"), "?"];
                            case "TSInterfaceDeclaration":
                                return L(e, t, v);
                            case "TSClassImplements":
                            case "TSInstantiationExpression":
                                return [v("expression"), v("typeParameters")];
                            case "TSTypeParameterDeclaration":
                            case "TSTypeParameterInstantiation":
                                return j(e, t, v, "params");
                            case "TSTypeParameter":
                                return k(e, t, v);
                            case "TSSatisfiesExpression":
                            case "TSAsExpression":
                                {
                                    let t = "TSAsExpression" === W.type ? "as" : "satisfies";
                                    G.push(v("expression"), ` ${t} `, v("typeAnnotation"));
                                    let r = e.getParentNode();
                                    return m(r) && r.callee === W || g(r) && r.object === W ? o([l([s, ...G]), s]) : G
                                }
                            case "TSArrayType":
                                return [v("elementType"), "[]"];
                            case "TSPropertySignature":
                                return W.readonly && G.push("readonly "),
                                G.push(P(e, t, v), C(e)),
                                W.typeAnnotation && G.push(": ", v("typeAnnotation")),
                                W.initializer && G.push(" = ", v("initializer")),
                                G;
                            case "TSParameterProperty":
                                return W.accessibility && G.push(W.accessibility + " "),
                                W.export && G.push("export "),
                                W.static && G.push("static "),
                                W.override && G.push("override "),
                                W.readonly && G.push("readonly "),
                                G.push(v("parameter")),
                                G;
                            case "TSTypeQuery":
                                return ["typeof ", v("exprName"), v("typeParameters")];
                            case "TSIndexSignature":
                                {
                                    let r = e.getParentNode()
                                      , n = W.parameters.length > 1 ? c(f(t) ? "," : "") : ""
                                      , i = o([l([s, u([", ", s], e.map(v, "parameters"))]), n, s]);
                                    return [W.export ? "export " : "", W.accessibility ? [W.accessibility, " "] : "", W.static ? "static " : "", W.readonly ? "readonly " : "", W.declare ? "declare " : "", "[", W.parameters ? i : "", W.typeAnnotation ? "]: " : "]", W.typeAnnotation ? v("typeAnnotation") : "", "ClassBody" === r.type ? H : ""]
                                }
                            case "TSTypePredicate":
                                return [W.asserts ? "asserts " : "", v("parameterName"), W.typeAnnotation ? [" is ", v("typeAnnotation")] : ""];
                            case "TSNonNullExpression":
                                return [v("expression"), "!"];
                            case "TSImportType":
                                return [W.isTypeOf ? "typeof " : "", "import(", v(W.parameter ? "parameter" : "argument"), ")", W.qualifier ? [".", v("qualifier")] : "", j(e, t, v, "typeParameters")];
                            case "TSLiteralType":
                                return v("literal");
                            case "TSIndexedAccessType":
                                return J(e, t, v);
                            case "TSConstructSignatureDeclaration":
                            case "TSCallSignatureDeclaration":
                            case "TSConstructorType":
                                if ("TSConstructorType" === W.type && W.abstract && G.push("abstract "),
                                "TSCallSignatureDeclaration" !== W.type && G.push("new "),
                                G.push(o(x(e, v, t, !1, !0))),
                                W.returnType || W.typeAnnotation) {
                                    let e = "TSConstructorType" === W.type;
                                    G.push(e ? " => " : ": ", v("returnType"), v("typeAnnotation"))
                                }
                                return G;
                            case "TSTypeOperator":
                                return [W.operator, " ", v("typeAnnotation")];
                            case "TSMappedType":
                                {
                                    let u = n(t.originalText, h(W), E(W));
                                    return o(["{", l([t.bracketSpacing ? i : s, v("typeParameter"), W.optional ? D(W.optional, "?") : "", W.typeAnnotation ? ": " : "", v("typeAnnotation"), c(H)]), r(e, t, !0), t.bracketSpacing ? i : s, "}"], {
                                        shouldBreak: u
                                    })
                                }
                            case "TSMethodSignature":
                                {
                                    let r = W.kind && "method" !== W.kind ? `${W.kind} ` : "";
                                    G.push(W.accessibility ? [W.accessibility, " "] : "", r, W.export ? "export " : "", W.static ? "static " : "", W.readonly ? "readonly " : "", W.abstract ? "abstract " : "", W.declare ? "declare " : "", W.computed ? "[" : "", v("key"), W.computed ? "]" : "", C(e));
                                    let n = x(e, v, t, !1, !0)
                                      , u = W.returnType ? "returnType" : "typeAnnotation"
                                      , i = W[u]
                                      , a = i ? v(u) : ""
                                      , s = b(W, a);
                                    return G.push(s ? o(n) : n),
                                    i && G.push(": ", o(a)),
                                    o(G)
                                }
                            case "TSNamespaceExportDeclaration":
                                return G.push("export as namespace ", v("id")),
                                t.semi && G.push(";"),
                                o(G);
                            case "TSEnumDeclaration":
                                return W.declare && G.push("declare "),
                                W.modifiers && G.push(F(e, t, v)),
                                W.const && G.push("const "),
                                G.push("enum ", v("id"), " "),
                                0 === W.members.length ? G.push(o(["{", r(e, t), s, "}"])) : G.push(o(["{", l([a, T(e, t, "members", v), f(t, "es5") ? "," : ""]), r(e, t, !0), a, "}"])),
                                G;
                            case "TSEnumMember":
                                return W.computed ? G.push("[", v("id"), "]") : G.push(v("id")),
                                W.initializer && G.push(" = ", v("initializer")),
                                G;
                            case "TSImportEqualsDeclaration":
                                return W.isExport && G.push("export "),
                                G.push("import "),
                                W.importKind && "value" !== W.importKind && G.push(W.importKind, " "),
                                G.push(v("id"), " = ", v("moduleReference")),
                                t.semi && G.push(";"),
                                o(G);
                            case "TSExternalModuleReference":
                                return ["require(", v("expression"), ")"];
                            case "TSModuleDeclaration":
                                {
                                    let r = e.getParentNode()
                                      , n = d(W.id)
                                      , u = "TSModuleDeclaration" === r.type
                                      , i = W.body && "TSModuleDeclaration" === W.body.type;
                                    if (u)
                                        G.push(".");
                                    else {
                                        W.declare && G.push("declare "),
                                        G.push(F(e, t, v));
                                        let r = t.originalText.slice(h(W), h(W.id));
                                        ("Identifier" !== W.id.type || "global" !== W.id.name || /namespace|module/.test(r)) && G.push(n || /(?:^|\s)module(?:\s|$)/.test(r) ? "module " : "namespace ")
                                    }
                                    return G.push(v("id")),
                                    i ? G.push(v("body")) : W.body ? G.push(" ", o(v("body"))) : G.push(H),
                                    G
                                }
                            case "TSConditionalType":
                                return A(e, t, v);
                            case "TSInferType":
                                return ["infer", " ", v("typeParameter")];
                            case "TSIntersectionType":
                                return $(e, t, v);
                            case "TSUnionType":
                                return R(e, t, v);
                            case "TSFunctionType":
                                return V(e, t, v);
                            case "TSTupleType":
                                return q(e, t, v);
                            case "TSTypeReference":
                                return [v("typeName"), j(e, t, v, "typeParameters")];
                            case "TSTypeAnnotation":
                                return v("typeAnnotation");
                            case "TSEmptyBodyFunctionExpression":
                                return O(e, t, v);
                            case "TSJSDocAllType":
                                return "*";
                            case "TSJSDocUnknownType":
                                return "?";
                            case "TSJSDocNullableType":
                                return U(e, v, "?");
                            case "TSJSDocNonNullableType":
                                return U(e, v, "!");
                            default:
                                throw Error(`Unknown TypeScript node type: ${JSON.stringify(W.type)}.`)
                            }
                        }
                    }
                }
            }), rG = h({
                "src/language-js/print/comment.js"(e, t) {
                    v();
                    var {hasNewline: r} = ec()
                      , {builders: {join: n, hardline: u}, utils: {replaceTextEndOfLine: i}} = W()
                      , {isLineComment: a} = tG()
                      , {locStart: s, locEnd: o} = tb()
                      , l = tU();
                    t.exports = {
                        printComment: function(e, t) {
                            let p = e.getValue();
                            if (a(p))
                                return t.originalText.slice(s(p), o(p)).trimEnd();
                            if (l(p)) {
                                let e;
                                if ((e = `*${p.value}*`.split(`
`)).length > 1 && e.every(e=>"*" === e.trim()[0])) {
                                    let e;
                                    let i = ["/*", n(u, (e = p.value.split(`
`)).map((t,r)=>0 === r ? t.trimEnd() : " " + (r < e.length - 1 ? t.trim() : t.trimStart()))), "*/"];
                                    return p.trailing && !r(t.originalText, s(p), {
                                        backwards: !0
                                    }) ? [u, i] : i
                                }
                                let a = o(p)
                                  , l = "*-/" === t.originalText.slice(a - 3, a);
                                return ["/*", i(p.value), l ? "*-/" : "*/"]
                            }
                            throw Error("Not a comment: " + JSON.stringify(p))
                        }
                    }
                }
            }), rX = h({
                "src/language-js/print/literal.js"(e, t) {
                    v();
                    var {printString: r, printNumber: n} = ec()
                      , {replaceTextEndOfLine: u} = $()
                      , {printDirective: i} = rx();
                    function a(e) {
                        return e.toLowerCase()
                    }
                    function s(e) {
                        let {pattern: t, flags: r} = e;
                        return `/${t}/${r = [...r].sort().join("")}`
                    }
                    t.exports = {
                        printLiteral: function(e, t) {
                            let o = e.getNode();
                            switch (o.type) {
                            case "RegExpLiteral":
                                return s(o);
                            case "BigIntLiteral":
                                return a(o.bigint || o.extra.raw);
                            case "NumericLiteral":
                                return n(o.extra.raw);
                            case "StringLiteral":
                                return u(r(o.extra.raw, t));
                            case "NullLiteral":
                                return "null";
                            case "BooleanLiteral":
                                return String(o.value);
                            case "DecimalLiteral":
                                return n(o.value) + "m";
                            case "Literal":
                                {
                                    if (o.regex)
                                        return s(o.regex);
                                    if (o.bigint)
                                        return a(o.raw);
                                    if (o.decimal)
                                        return n(o.decimal) + "m";
                                    let {value: l} = o;
                                    return "number" == typeof l ? n(o.raw) : "string" == typeof l ? !function(e) {
                                        if ("expression" !== e.getName())
                                            return;
                                        let t = e.getParentNode();
                                        return "ExpressionStatement" === t.type && t.directive
                                    }(e) ? u(r(o.raw, t)) : i(o.raw, t) : String(l)
                                }
                            }
                        }
                    }
                }
            }), rz = h({
                "src/language-js/printer-estree.js"(e, t) {
                    v();
                    var {printDanglingComments: r} = tP()
                      , {hasNewline: n} = ec()
                      , {builders: {join: u, line: i, hardline: a, softline: s, group: o, indent: l}, utils: {replaceTextEndOfLine: p}} = W()
                      , c = tZ()
                      , d = t0()
                      , {insertPragma: D} = rm()
                      , f = ry()
                      , m = rh()
                      , g = rE()
                      , {hasFlowShorthandAnnotationComment: y, hasComment: h, CommentCheckFlags: E, isTheOnlyJsxElementInMarkdown: C, isLineComment: F, isNextLineEmpty: A, needsHardlineAfterDanglingComment: x, hasIgnoreComment: b, isCallExpression: S, isMemberExpression: T, markerForIfWithoutBlockAndSameLineComment: B} = tG()
                      , {locStart: N, locEnd: w} = tb()
                      , k = tU()
                      , {printHtmlBinding: j, isVueEventBindingExpression: P} = rC()
                      , {printAngular: I} = rA()
                      , {printJsx: O, hasJsxIgnoreComment: L} = rv()
                      , {printFlow: _} = rV()
                      , {printTypescript: M} = rH()
                      , {printOptionalToken: $, printBindExpressionCallee: R, printTypeAnnotation: V, adjustClause: q, printRestSpread: J, printDefiniteToken: U, printDirective: H} = rx()
                      , {printImportDeclaration: G, printExportDeclaration: X, printExportAllDeclaration: z, printModuleSpecifier: K} = r$()
                      , {printTernary: Q} = rq()
                      , {printTemplateLiteral: Y} = tX()
                      , {printArray: Z} = rb()
                      , {printObject: ee} = rR()
                      , {printClass: et, printClassMethod: er, printClassProperty: en} = r_()
                      , {printProperty: eu} = rI()
                      , {printFunction: ei, printArrowFunction: ea, printMethod: es, printReturnStatement: eo, printThrowStatement: el} = rO()
                      , {printCallExpression: ep} = rN()
                      , {printVariableDeclarator: ed, printAssignmentExpression: eD} = rw()
                      , {printBinaryishExpression: ef} = rF()
                      , {printSwitchCaseConsequent: em} = rJ()
                      , {printMemberExpression: eg} = rT()
                      , {printBlock: ey, printBlockBody: eh} = rU()
                      , {printComment: eE} = rG()
                      , {printLiteral: eC} = rX()
                      , {printDecorators: eF} = rL();
                    t.exports = {
                        preprocess: g,
                        print: function(e, t, c, d) {
                            let D = function(e, t, c, d) {
                                let D = e.getValue()
                                  , f = t.semi ? ";" : "";
                                if (!D)
                                    return "";
                                if ("string" == typeof D)
                                    return D;
                                for (let r of [eC, j, I, O, _, M]) {
                                    let n = r(e, t, c);
                                    if ("u" > typeof n)
                                        return n
                                }
                                let m = [];
                                switch (D.type) {
                                case "JsExpressionRoot":
                                    return c("node");
                                case "JsonRoot":
                                    return [c("node"), a];
                                case "File":
                                    return D.program && D.program.interpreter && m.push(c(["program", "interpreter"])),
                                    m.push(c("program")),
                                    m;
                                case "Program":
                                    return eh(e, t, c);
                                case "EmptyStatement":
                                    return "";
                                case "ExpressionStatement":
                                    {
                                        if ("__vue_event_binding" === t.parser || "__vue_ts_event_binding" === t.parser) {
                                            let t = e.getParentNode();
                                            if ("Program" === t.type && 1 === t.body.length && t.body[0] === D)
                                                return [c("expression"), P(D.expression) ? ";" : ""]
                                        }
                                        let n = r(e, t, !0, e=>{
                                            let {marker: t} = e;
                                            return t === B
                                        }
                                        );
                                        return [c("expression"), C(t, e) ? "" : f, n ? [" ", n] : ""]
                                    }
                                case "ParenthesizedExpression":
                                    return h(D.expression) || "ObjectExpression" !== D.expression.type && "ArrayExpression" !== D.expression.type ? o(["(", l([s, c("expression")]), s, ")"]) : ["(", c("expression"), ")"];
                                case "AssignmentExpression":
                                    return eD(e, t, c);
                                case "VariableDeclarator":
                                    return ed(e, t, c);
                                case "BinaryExpression":
                                case "LogicalExpression":
                                    return ef(e, t, c);
                                case "AssignmentPattern":
                                    return [c("left"), " = ", c("right")];
                                case "OptionalMemberExpression":
                                case "MemberExpression":
                                    return eg(e, t, c);
                                case "MetaProperty":
                                    return [c("meta"), ".", c("property")];
                                case "BindExpression":
                                    return D.object && m.push(c("object")),
                                    m.push(o(l([s, R(e, t, c)]))),
                                    m;
                                case "Identifier":
                                    return [D.name, $(e), U(e), V(e, t, c)];
                                case "V8IntrinsicIdentifier":
                                    return ["%", D.name];
                                case "SpreadElement":
                                case "SpreadElementPattern":
                                case "SpreadProperty":
                                case "SpreadPropertyPattern":
                                case "RestElement":
                                    return J(e, t, c);
                                case "FunctionDeclaration":
                                case "FunctionExpression":
                                    return ei(e, c, t, d);
                                case "ArrowFunctionExpression":
                                    return ea(e, t, c, d);
                                case "YieldExpression":
                                    return m.push("yield"),
                                    D.delegate && m.push("*"),
                                    D.argument && m.push(" ", c("argument")),
                                    m;
                                case "AwaitExpression":
                                    if (m.push("await"),
                                    D.argument) {
                                        m.push(" ", c("argument"));
                                        let t = e.getParentNode();
                                        if (S(t) && t.callee === D || T(t) && t.object === D) {
                                            m = [l([s, ...m]), s];
                                            let t = e.findAncestor(e=>"AwaitExpression" === e.type || "BlockStatement" === e.type);
                                            if (!t || "AwaitExpression" !== t.type)
                                                return o(m)
                                        }
                                    }
                                    return m;
                                case "ExportDefaultDeclaration":
                                case "ExportNamedDeclaration":
                                    return X(e, t, c);
                                case "ExportAllDeclaration":
                                    return z(e, t, c);
                                case "ImportDeclaration":
                                    return G(e, t, c);
                                case "ImportSpecifier":
                                case "ExportSpecifier":
                                case "ImportNamespaceSpecifier":
                                case "ExportNamespaceSpecifier":
                                case "ImportDefaultSpecifier":
                                case "ExportDefaultSpecifier":
                                    return K(e, t, c);
                                case "ImportAttribute":
                                    return [c("key"), ": ", c("value")];
                                case "Import":
                                    return "import";
                                case "BlockStatement":
                                case "StaticBlock":
                                case "ClassBody":
                                    return ey(e, t, c);
                                case "ThrowStatement":
                                    return el(e, t, c);
                                case "ReturnStatement":
                                    return eo(e, t, c);
                                case "NewExpression":
                                case "ImportExpression":
                                case "OptionalCallExpression":
                                case "CallExpression":
                                    return ep(e, t, c);
                                case "ObjectExpression":
                                case "ObjectPattern":
                                case "RecordExpression":
                                    return ee(e, t, c);
                                case "ObjectProperty":
                                case "Property":
                                    return D.method || "get" === D.kind || "set" === D.kind ? es(e, t, c) : eu(e, t, c);
                                case "ObjectMethod":
                                    return es(e, t, c);
                                case "Decorator":
                                    return ["@", c("expression")];
                                case "ArrayExpression":
                                case "ArrayPattern":
                                case "TupleExpression":
                                    return Z(e, t, c);
                                case "SequenceExpression":
                                    {
                                        let t = e.getParentNode(0);
                                        if ("ExpressionStatement" === t.type || "ForStatement" === t.type) {
                                            let t = [];
                                            return e.each((e,r)=>{
                                                0 === r ? t.push(c()) : t.push(",", l([i, c()]))
                                            }
                                            , "expressions"),
                                            o(t)
                                        }
                                        return o(u([",", i], e.map(c, "expressions")))
                                    }
                                case "ThisExpression":
                                    return "this";
                                case "Super":
                                    return "super";
                                case "Directive":
                                    return [c("value"), f];
                                case "DirectiveLiteral":
                                    return H(D.extra.raw, t);
                                case "UnaryExpression":
                                    return m.push(D.operator),
                                    /[a-z]$/.test(D.operator) && m.push(" "),
                                    h(D.argument) ? m.push(o(["(", l([s, c("argument")]), s, ")"])) : m.push(c("argument")),
                                    m;
                                case "UpdateExpression":
                                    return m.push(c("argument"), D.operator),
                                    D.prefix && m.reverse(),
                                    m;
                                case "ConditionalExpression":
                                    return Q(e, t, c);
                                case "VariableDeclaration":
                                    {
                                        let t = e.map(c, "declarations"), r = e.getParentNode(), n = "ForStatement" === r.type || "ForInStatement" === r.type || "ForOfStatement" === r.type, u = D.declarations.some(e=>e.init), s;
                                        return 1 !== t.length || h(D.declarations[0]) ? t.length > 0 && (s = l(t[0])) : s = t[0],
                                        m = [D.declare ? "declare " : "", D.kind, s ? [" ", s] : "", l(t.slice(1).map(e=>[",", u && !n ? a : i, e]))],
                                        n && r.body !== D || m.push(f),
                                        o(m)
                                    }
                                case "WithStatement":
                                    return o(["with (", c("object"), ")", q(D.body, c("body"))]);
                                case "IfStatement":
                                    {
                                        let n = q(D.consequent, c("consequent"))
                                          , u = o(["if (", o([l([s, c("test")]), s]), ")", n]);
                                        if (m.push(u),
                                        D.alternate) {
                                            let n = h(D.consequent, E.Trailing | E.Line) || x(D)
                                              , u = "BlockStatement" === D.consequent.type && !n;
                                            m.push(u ? " " : a),
                                            h(D, E.Dangling) && m.push(r(e, t, !0), n ? a : " "),
                                            m.push("else", o(q(D.alternate, c("alternate"), "IfStatement" === D.alternate.type)))
                                        }
                                        return m
                                    }
                                case "ForStatement":
                                    {
                                        let n = q(D.body, c("body"))
                                          , u = r(e, t, !0)
                                          , a = u ? [u, s] : "";
                                        return D.init || D.test || D.update ? [a, o(["for (", o([l([s, c("init"), ";", i, c("test"), ";", i, c("update")]), s]), ")", n])] : [a, o(["for (;;)", n])]
                                    }
                                case "WhileStatement":
                                    return o(["while (", o([l([s, c("test")]), s]), ")", q(D.body, c("body"))]);
                                case "ForInStatement":
                                    return o(["for (", c("left"), " in ", c("right"), ")", q(D.body, c("body"))]);
                                case "ForOfStatement":
                                    return o(["for", D.await ? " await" : "", " (", c("left"), " of ", c("right"), ")", q(D.body, c("body"))]);
                                case "DoWhileStatement":
                                    return m = [o(["do", q(D.body, c("body"))])],
                                    "BlockStatement" === D.body.type ? m.push(" ") : m.push(a),
                                    m.push("while (", o([l([s, c("test")]), s]), ")", f),
                                    m;
                                case "DoExpression":
                                    return [D.async ? "async " : "", "do ", c("body")];
                                case "BreakStatement":
                                    return m.push("break"),
                                    D.label && m.push(" ", c("label")),
                                    m.push(f),
                                    m;
                                case "ContinueStatement":
                                    return m.push("continue"),
                                    D.label && m.push(" ", c("label")),
                                    m.push(f),
                                    m;
                                case "LabeledStatement":
                                    return "EmptyStatement" === D.body.type ? [c("label"), ":;"] : [c("label"), ": ", c("body")];
                                case "TryStatement":
                                    return ["try ", c("block"), D.handler ? [" ", c("handler")] : "", D.finalizer ? [" finally ", c("finalizer")] : ""];
                                case "CatchClause":
                                    if (D.param) {
                                        let e = h(D.param, e=>!k(e) || e.leading && n(t.originalText, w(e)) || e.trailing && n(t.originalText, N(e), {
                                            backwards: !0
                                        }))
                                          , r = c("param");
                                        return ["catch ", e ? ["(", l([s, r]), s, ") "] : ["(", r, ") "], c("body")]
                                    }
                                    return ["catch ", c("body")];
                                case "SwitchStatement":
                                    return [o(["switch (", l([s, c("discriminant")]), s, ")"]), " {", D.cases.length > 0 ? l([a, u(a, e.map((e,r,n)=>{
                                        let u = e.getValue();
                                        return [c(), r !== n.length - 1 && A(u, t) ? a : ""]
                                    }
                                    , "cases"))]) : "", a, "}"];
                                case "SwitchCase":
                                    {
                                        D.test ? m.push("case ", c("test"), ":") : m.push("default:"),
                                        h(D, E.Dangling) && m.push(" ", r(e, t, !0));
                                        let n = D.consequent.filter(e=>"EmptyStatement" !== e.type);
                                        if (n.length > 0) {
                                            let r = em(e, t, c);
                                            m.push(1 === n.length && "BlockStatement" === n[0].type ? [" ", r] : l([a, r]))
                                        }
                                        return m
                                    }
                                case "DebuggerStatement":
                                    return ["debugger", f];
                                case "ClassDeclaration":
                                case "ClassExpression":
                                    return et(e, t, c);
                                case "ClassMethod":
                                case "ClassPrivateMethod":
                                case "MethodDefinition":
                                    return er(e, t, c);
                                case "ClassProperty":
                                case "PropertyDefinition":
                                case "ClassPrivateProperty":
                                case "ClassAccessorProperty":
                                case "AccessorProperty":
                                    return en(e, t, c);
                                case "TemplateElement":
                                    return p(D.value.raw);
                                case "TemplateLiteral":
                                    return Y(e, c, t);
                                case "TaggedTemplateExpression":
                                    return [c("tag"), c("typeParameters"), c("quasi")];
                                case "PrivateIdentifier":
                                    return ["#", c("name")];
                                case "PrivateName":
                                    return ["#", c("id")];
                                case "InterpreterDirective":
                                    return m.push("#!", D.value, a),
                                    A(D, t) && m.push(a),
                                    m;
                                case "TopicReference":
                                    return "%";
                                case "ArgumentPlaceholder":
                                    return "?";
                                case "ModuleExpression":
                                    {
                                        m.push("module {");
                                        let e = c("body");
                                        return e && m.push(l([a, e]), a),
                                        m.push("}"),
                                        m
                                    }
                                default:
                                    throw Error("unknown type: " + JSON.stringify(D.type))
                                }
                            }(e, t, c, d);
                            if (!D)
                                return "";
                            let f = e.getValue()
                              , {type: g} = f;
                            if ("ClassMethod" === g || "ClassPrivateMethod" === g || "ClassProperty" === g || "ClassAccessorProperty" === g || "AccessorProperty" === g || "TSAbstractAccessorProperty" === g || "PropertyDefinition" === g || "TSAbstractPropertyDefinition" === g || "ClassPrivateProperty" === g || "MethodDefinition" === g || "TSAbstractMethodDefinition" === g || "TSDeclareMethod" === g)
                                return D;
                            let F = [D]
                              , v = eF(e, t, c)
                              , b = "ClassExpression" === f.type && v;
                            if (v && (F = [...v, D],
                            !b))
                                return o(F);
                            if (!m(e, t))
                                return d && d.needsSemi && F.unshift(";"),
                                1 === F.length && F[0] === D ? D : F;
                            if (b && (F = [l([i, ...F])]),
                            F.unshift("("),
                            d && d.needsSemi && F.unshift(";"),
                            y(f)) {
                                let[e] = f.trailingComments;
                                F.push(" /*", e.value.trimStart(), "*/"),
                                e.printed = !0
                            }
                            return b && F.push(i),
                            F.push(")"),
                            F
                        },
                        embed: c,
                        insertPragma: D,
                        massageAstNode: d,
                        hasPrettierIgnore: e=>b(e) || L(e),
                        willPrintOwnComments: f.willPrintOwnComments,
                        canAttachComment: function(e) {
                            return e.type && !k(e) && !F(e) && "EmptyStatement" !== e.type && "TemplateElement" !== e.type && "Import" !== e.type && "TSEmptyBodyFunctionExpression" !== e.type
                        },
                        printComment: eE,
                        isBlockComment: k,
                        handleComments: {
                            avoidAstMutation: !0,
                            ownLine: f.handleOwnLineComment,
                            endOfLine: f.handleEndOfLineComment,
                            remaining: f.handleRemainingComment
                        },
                        getCommentChildNodes: f.getCommentChildNodes
                    }
                }
            }), rK = h({
                "src/language-js/printer-estree-json.js"(e, t) {
                    v();
                    var {builders: {hardline: r, indent: n, join: u}} = W()
                      , i = rE();
                    function a(e) {
                        return "key" === e.getName() && "ObjectProperty" === e.getParentNode().type
                    }
                    var s = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
                    function o(e, t) {
                        let {type: r} = e;
                        if ("ObjectProperty" === r) {
                            let {key: r} = e;
                            "Identifier" === r.type ? t.key = {
                                type: "StringLiteral",
                                value: r.name
                            } : "NumericLiteral" === r.type && (t.key = {
                                type: "StringLiteral",
                                value: String(r.value)
                            });
                            return
                        }
                        if ("UnaryExpression" === r && "+" === e.operator)
                            return t.argument;
                        if ("ArrayExpression" === r) {
                            for (let[r,n] of e.elements.entries())
                                null === n && t.elements.splice(r, 0, {
                                    type: "NullLiteral"
                                });
                            return
                        }
                        if ("TemplateLiteral" === r)
                            return {
                                type: "StringLiteral",
                                value: e.quasis[0].value.cooked
                            }
                    }
                    o.ignoredProperties = s,
                    t.exports = {
                        preprocess: i,
                        print: function(e, t, i) {
                            let s = e.getValue();
                            switch (s.type) {
                            case "JsonRoot":
                                return [i("node"), r];
                            case "ArrayExpression":
                                if (0 === s.elements.length)
                                    return "[]";
                                return ["[", n([r, u([",", r], e.map(()=>null === e.getValue() ? "null" : i(), "elements"))]), r, "]"];
                            case "ObjectExpression":
                                return 0 === s.properties.length ? "{}" : ["{", n([r, u([",", r], e.map(i, "properties"))]), r, "}"];
                            case "ObjectProperty":
                                return [i("key"), ": ", i("value")];
                            case "UnaryExpression":
                                return ["+" === s.operator ? "" : s.operator, i("argument")];
                            case "NullLiteral":
                                return "null";
                            case "BooleanLiteral":
                                return s.value ? "true" : "false";
                            case "StringLiteral":
                                return JSON.stringify(s.value);
                            case "NumericLiteral":
                                return a(e) ? JSON.stringify(String(s.value)) : JSON.stringify(s.value);
                            case "Identifier":
                                return a(e) ? JSON.stringify(s.name) : s.name;
                            case "TemplateLiteral":
                                return i(["quasis", 0]);
                            case "TemplateElement":
                                return JSON.stringify(s.value.cooked);
                            default:
                                throw Error("unknown type: " + JSON.stringify(s.type))
                            }
                        },
                        massageAstNode: o
                    }
                }
            }), rQ = h({
                "src/common/common-options.js"(e, t) {
                    v();
                    var r = "Common";
                    t.exports = {
                        bracketSpacing: {
                            since: "0.0.0",
                            category: r,
                            type: "boolean",
                            default: !0,
                            description: "Print spaces between brackets.",
                            oppositeDescription: "Do not print spaces between brackets."
                        },
                        singleQuote: {
                            since: "0.0.0",
                            category: r,
                            type: "boolean",
                            default: !1,
                            description: "Use single quotes instead of double quotes."
                        },
                        proseWrap: {
                            since: "1.8.2",
                            category: r,
                            type: "choice",
                            default: [{
                                since: "1.8.2",
                                value: !0
                            }, {
                                since: "1.9.0",
                                value: "preserve"
                            }],
                            description: "How to wrap prose.",
                            choices: [{
                                since: "1.9.0",
                                value: "always",
                                description: "Wrap prose if it exceeds the print width."
                            }, {
                                since: "1.9.0",
                                value: "never",
                                description: "Do not wrap prose."
                            }, {
                                since: "1.9.0",
                                value: "preserve",
                                description: "Wrap prose as-is."
                            }]
                        },
                        bracketSameLine: {
                            since: "2.4.0",
                            category: r,
                            type: "boolean",
                            default: !1,
                            description: "Put > of opening tags on the last line instead of on a new line."
                        },
                        singleAttributePerLine: {
                            since: "2.6.0",
                            category: r,
                            type: "boolean",
                            default: !1,
                            description: "Enforce single attribute per line in HTML, Vue and JSX."
                        }
                    }
                }
            }), rY = h({
                "src/language-js/options.js"(e, t) {
                    v();
                    var r = rQ()
                      , n = "JavaScript";
                    t.exports = {
                        arrowParens: {
                            since: "1.9.0",
                            category: n,
                            type: "choice",
                            default: [{
                                since: "1.9.0",
                                value: "avoid"
                            }, {
                                since: "2.0.0",
                                value: "always"
                            }],
                            description: "Include parentheses around a sole arrow function parameter.",
                            choices: [{
                                value: "always",
                                description: "Always include parens. Example: `(x) => x`"
                            }, {
                                value: "avoid",
                                description: "Omit parens when possible. Example: `x => x`"
                            }]
                        },
                        bracketSameLine: r.bracketSameLine,
                        bracketSpacing: r.bracketSpacing,
                        jsxBracketSameLine: {
                            since: "0.17.0",
                            category: n,
                            type: "boolean",
                            description: "Put > on the last line instead of at a new line.",
                            deprecated: "2.4.0"
                        },
                        semi: {
                            since: "1.0.0",
                            category: n,
                            type: "boolean",
                            default: !0,
                            description: "Print semicolons.",
                            oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
                        },
                        singleQuote: r.singleQuote,
                        jsxSingleQuote: {
                            since: "1.15.0",
                            category: n,
                            type: "boolean",
                            default: !1,
                            description: "Use single quotes in JSX."
                        },
                        quoteProps: {
                            since: "1.17.0",
                            category: n,
                            type: "choice",
                            default: "as-needed",
                            description: "Change when properties in objects are quoted.",
                            choices: [{
                                value: "as-needed",
                                description: "Only add quotes around object properties where required."
                            }, {
                                value: "consistent",
                                description: "If at least one property in an object requires quotes, quote all properties."
                            }, {
                                value: "preserve",
                                description: "Respect the input use of quotes in object properties."
                            }]
                        },
                        trailingComma: {
                            since: "0.0.0",
                            category: n,
                            type: "choice",
                            default: [{
                                since: "0.0.0",
                                value: !1
                            }, {
                                since: "0.19.0",
                                value: "none"
                            }, {
                                since: "2.0.0",
                                value: "es5"
                            }],
                            description: "Print trailing commas wherever possible when multi-line.",
                            choices: [{
                                value: "es5",
                                description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
                            }, {
                                value: "none",
                                description: "No trailing commas."
                            }, {
                                value: "all",
                                description: "Trailing commas wherever possible (including function arguments)."
                            }]
                        },
                        singleAttributePerLine: r.singleAttributePerLine
                    }
                }
            }), rZ = h({
                "src/language-js/parse/parsers.js"() {
                    v()
                }
            }), r0 = h({
                "node_modules/linguist-languages/data/JavaScript.json"(e, t) {
                    t.exports = {
                        name: "JavaScript",
                        type: "programming",
                        tmScope: "source.js",
                        aceMode: "javascript",
                        codemirrorMode: "javascript",
                        codemirrorMimeType: "text/javascript",
                        color: "#f1e05a",
                        aliases: ["js", "node"],
                        extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"],
                        filenames: ["Jakefile"],
                        interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
                        languageId: 183
                    }
                }
            }), r1 = h({
                "node_modules/linguist-languages/data/TypeScript.json"(e, t) {
                    t.exports = {
                        name: "TypeScript",
                        type: "programming",
                        color: "#3178c6",
                        aliases: ["ts"],
                        interpreters: ["deno", "ts-node"],
                        extensions: [".ts", ".cts", ".mts"],
                        tmScope: "source.ts",
                        aceMode: "typescript",
                        codemirrorMode: "javascript",
                        codemirrorMimeType: "application/typescript",
                        languageId: 378
                    }
                }
            }), r2 = h({
                "node_modules/linguist-languages/data/TSX.json"(e, t) {
                    t.exports = {
                        name: "TSX",
                        type: "programming",
                        color: "#3178c6",
                        group: "TypeScript",
                        extensions: [".tsx"],
                        tmScope: "source.tsx",
                        aceMode: "javascript",
                        codemirrorMode: "jsx",
                        codemirrorMimeType: "text/jsx",
                        languageId: 94901924
                    }
                }
            }), r3 = h({
                "node_modules/linguist-languages/data/JSON.json"(e, t) {
                    t.exports = {
                        name: "JSON",
                        type: "data",
                        color: "#292929",
                        tmScope: "source.json",
                        aceMode: "json",
                        codemirrorMode: "javascript",
                        codemirrorMimeType: "application/json",
                        aliases: ["geojson", "jsonl", "topojson"],
                        extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
                        filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"],
                        languageId: 174
                    }
                }
            }), r8 = h({
                "node_modules/linguist-languages/data/JSON with Comments.json"(e, t) {
                    t.exports = {
                        name: "JSON with Comments",
                        type: "data",
                        color: "#292929",
                        group: "JSON",
                        tmScope: "source.js",
                        aceMode: "javascript",
                        codemirrorMode: "javascript",
                        codemirrorMimeType: "text/javascript",
                        aliases: ["jsonc"],
                        extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
                        filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"],
                        languageId: 423
                    }
                }
            }), r6 = h({
                "node_modules/linguist-languages/data/JSON5.json"(e, t) {
                    t.exports = {
                        name: "JSON5",
                        type: "data",
                        color: "#267CB9",
                        extensions: [".json5"],
                        tmScope: "source.js",
                        aceMode: "javascript",
                        codemirrorMode: "javascript",
                        codemirrorMimeType: "application/json",
                        languageId: 175
                    }
                }
            }), r7 = h({
                "src/language-js/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = rz()
                      , u = rK()
                      , i = rY()
                      , a = rZ()
                      , s = [r(r0(), e=>({
                        since: "0.0.0",
                        parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
                        vscodeLanguageIds: ["javascript", "mongo"],
                        interpreters: [...e.interpreters, "zx"],
                        extensions: [...e.extensions.filter(e=>".jsx" !== e), ".wxs"]
                    })), r(r0(), ()=>({
                        name: "Flow",
                        since: "0.0.0",
                        parsers: ["flow", "babel-flow"],
                        vscodeLanguageIds: ["javascript"],
                        aliases: [],
                        filenames: [],
                        extensions: [".js.flow"]
                    })), r(r0(), ()=>({
                        name: "JSX",
                        since: "0.0.0",
                        parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
                        vscodeLanguageIds: ["javascriptreact"],
                        aliases: void 0,
                        filenames: void 0,
                        extensions: [".jsx"],
                        group: "JavaScript",
                        interpreters: void 0,
                        tmScope: "source.js.jsx",
                        aceMode: "javascript",
                        codemirrorMode: "jsx",
                        codemirrorMimeType: "text/jsx",
                        color: void 0
                    })), r(r1(), ()=>({
                        since: "1.4.0",
                        parsers: ["typescript", "babel-ts"],
                        vscodeLanguageIds: ["typescript"]
                    })), r(r2(), ()=>({
                        since: "1.4.0",
                        parsers: ["typescript", "babel-ts"],
                        vscodeLanguageIds: ["typescriptreact"]
                    })), r(r3(), ()=>({
                        name: "JSON.stringify",
                        since: "1.13.0",
                        parsers: ["json-stringify"],
                        vscodeLanguageIds: ["json"],
                        extensions: [".importmap"],
                        filenames: ["package.json", "package-lock.json", "composer.json"]
                    })), r(r3(), e=>({
                        since: "1.5.0",
                        parsers: ["json"],
                        vscodeLanguageIds: ["json"],
                        extensions: e.extensions.filter(e=>".jsonl" !== e)
                    })), r(r8(), e=>({
                        since: "1.5.0",
                        parsers: ["json"],
                        vscodeLanguageIds: ["jsonc"],
                        filenames: [...e.filenames, ".eslintrc", ".swcrc"]
                    })), r(r6(), ()=>({
                        since: "1.13.0",
                        parsers: ["json5"],
                        vscodeLanguageIds: ["json5"]
                    }))];
                    t.exports = {
                        languages: s,
                        options: i,
                        printers: {
                            estree: n,
                            "estree-json": u
                        },
                        parsers: a
                    }
                }
            }), r9 = h({
                "src/language-css/clean.js"(e, t) {
                    v();
                    var {isFrontMatterNode: r} = ec()
                      , n = N()
                      , u = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
                    function i(e, t, u) {
                        if (r(e) && "yaml" === e.lang && delete t.value,
                        "css-comment" === e.type && "css-root" === u.type && u.nodes.length > 0 && ((u.nodes[0] === e || r(u.nodes[0]) && u.nodes[1] === e) && (delete t.text,
                        /^\*\s*@(?:format|prettier)\s*$/.test(e.text)) || "css-root" === u.type && n(u.nodes) === e))
                            return null;
                        if ("value-root" === e.type && delete t.text,
                        ("media-query" === e.type || "media-query-list" === e.type || "media-feature-expression" === e.type) && delete t.value,
                        "css-rule" === e.type && delete t.params,
                        "selector-combinator" === e.type && (t.value = t.value.replace(/\s+/g, " ")),
                        "media-feature" === e.type && (t.value = t.value.replace(/ /g, "")),
                        ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.replace().toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()),
                        "css-decl" === e.type && (t.prop = t.prop.toLowerCase()),
                        ("css-atrule" === e.type || "css-import" === e.type) && (t.name = t.name.toLowerCase()),
                        "value-number" === e.type && (t.unit = t.unit.toLowerCase()),
                        ("media-feature" === e.type || "media-keyword" === e.type || "media-type" === e.type || "media-unknown" === e.type || "media-url" === e.type || "media-value" === e.type || "selector-attribute" === e.type || "selector-string" === e.type || "selector-class" === e.type || "selector-combinator" === e.type || "value-string" === e.type) && t.value && (t.value = t.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")),
                        "selector-attribute" === e.type && (t.attribute = t.attribute.trim(),
                        t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(),
                        0 === t.namespace.length && (t.namespace = !0)),
                        t.value && (t.value = t.value.trim().replace(/^["']|["']$/g, ""),
                        delete t.quoted)),
                        ("media-value" === e.type || "media-type" === e.type || "value-number" === e.type || "selector-root-invalid" === e.type || "selector-class" === e.type || "selector-combinator" === e.type || "selector-tag" === e.type) && t.value && (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (e,t,r)=>{
                            let n = Number(t);
                            return Number.isNaN(n) ? e : n + r.toLowerCase()
                        }
                        )),
                        "selector-tag" === e.type) {
                            let r = e.value.toLowerCase();
                            ["from", "to"].includes(r) && (t.value = r)
                        }
                        if ("css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value,
                        "selector-unknown" === e.type && delete t.value,
                        "value-comma_group" === e.type) {
                            let r = e.groups.findIndex(e=>"value-number" === e.type && "..." === e.unit);
                            -1 !== r && (t.groups[r].unit = "",
                            t.groups.splice(r + 1, 0, {
                                type: "value-word",
                                value: "...",
                                isColor: !1,
                                isHex: !1
                            }))
                        }
                        if ("value-comma_group" === e.type && e.groups.some(e=>"value-atword" === e.type && e.value.endsWith("[") || "value-word" === e.type && e.value.startsWith("]")))
                            return {
                                type: "value-atword",
                                value: e.groups.map(e=>e.value).join(""),
                                group: {
                                    open: null,
                                    close: null,
                                    groups: [],
                                    type: "value-paren_group"
                                }
                            }
                    }
                    i.ignoredProperties = u,
                    t.exports = i
                }
            }), r5 = h({
                "src/utils/front-matter/print.js"(e, t) {
                    v();
                    var {builders: {hardline: r, markAsRoot: n}} = W();
                    t.exports = function(e, t) {
                        if ("yaml" === e.lang) {
                            let u = e.value.trim()
                              , i = u ? t(u, {
                                parser: "yaml"
                            }, {
                                stripTrailingHardline: !0
                            }) : "";
                            return n([e.startDelimiter, r, i, i ? r : "", e.endDelimiter])
                        }
                    }
                }
            }), r4 = h({
                "src/language-css/embed.js"(e, t) {
                    v();
                    var {builders: {hardline: r}} = W()
                      , n = r5();
                    t.exports = function(e, t, u) {
                        let i = e.getValue();
                        if ("front-matter" === i.type) {
                            let e = n(i, u);
                            return e ? [e, r] : ""
                        }
                    }
                }
            }), ne = h({
                "src/utils/front-matter/parse.js"(e, t) {
                    v();
                    var r = RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
                    t.exports = function(e) {
                        let t = e.match(r);
                        if (!t)
                            return {
                                content: e
                            };
                        let {startDelimiter: n, language: u, value: i="", endDelimiter: a} = t.groups
                          , s = u.trim() || "yaml";
                        if ("+++" === n && (s = "toml"),
                        "yaml" !== s && n !== a)
                            return {
                                content: e
                            };
                        let[o] = t;
                        return {
                            frontMatter: {
                                type: "front-matter",
                                lang: s,
                                value: i,
                                startDelimiter: n,
                                endDelimiter: a,
                                raw: o.replace(/\n$/, "")
                            },
                            content: o.replace(/[^\n]/g, " ") + e.slice(o.length)
                        }
                    }
                }
            }), nt = h({
                "src/language-css/pragma.js"(e, t) {
                    v();
                    var r = rm()
                      , n = ne();
                    t.exports = {
                        hasPragma: function(e) {
                            return r.hasPragma(n(e).content)
                        },
                        insertPragma: function(e) {
                            let {frontMatter: t, content: u} = n(e);
                            return (t ? t.raw + `

` : "") + r.insertPragma(u)
                        }
                    }
                }
            }), nr = h({
                "src/language-css/utils/index.js"(e, t) {
                    v();
                    var r = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
                    function n(e, t) {
                        let r = Array.isArray(t) ? t : [t], n = -1, u;
                        for (; u = e.getParentNode(++n); )
                            if (r.includes(u.type))
                                return n;
                        return -1
                    }
                    function u(e, t) {
                        let r = n(e, t);
                        return -1 === r ? null : e.getParentNode(r)
                    }
                    var i = new Set(["initial", "inherit", "unset", "revert"]);
                    function a(e) {
                        return "value-operator" === e.type && "*" === e.value
                    }
                    function s(e) {
                        return "value-operator" === e.type && "/" === e.value
                    }
                    function o(e) {
                        return "value-operator" === e.type && "+" === e.value
                    }
                    function l(e) {
                        return "value-operator" === e.type && "-" === e.value
                    }
                    function p(e) {
                        return "value-operator" === e.type && "%" === e.value
                    }
                    function c(e) {
                        var t, r;
                        return "value-comma_group" === e.type && (null === (t = e.groups) || void 0 === t || null === (r = t[1]) || void 0 === r ? void 0 : r.type) === "value-colon"
                    }
                    function d(e) {
                        var t;
                        return "value-paren_group" === e.type && (null === (t = e.groups) || void 0 === t ? void 0 : t[0]) && c(e.groups[0])
                    }
                    function D(e) {
                        return (null == e ? void 0 : e.type) === "value-colon"
                    }
                    t.exports = {
                        getAncestorCounter: n,
                        getAncestorNode: u,
                        getPropOfDeclNode: function(e) {
                            var t;
                            let r = u(e, "css-decl");
                            return null == r || null === (t = r.prop) || void 0 === t ? void 0 : t.toLowerCase()
                        },
                        maybeToLowerCase: function(e) {
                            return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase()
                        },
                        insideValueFunctionNode: function(e, t) {
                            var r;
                            let n = u(e, "value-func");
                            return (null == n || null === (r = n.value) || void 0 === r ? void 0 : r.toLowerCase()) === t
                        },
                        insideICSSRuleNode: function(e) {
                            var t;
                            let r = u(e, "css-rule")
                              , n = null == r || null === (t = r.raws) || void 0 === t ? void 0 : t.selector;
                            return n && (n.startsWith(":import") || n.startsWith(":export"))
                        },
                        insideAtRuleNode: function(e, t) {
                            let r = Array.isArray(t) ? t : [t]
                              , n = u(e, "css-atrule");
                            return n && r.includes(n.name.toLowerCase())
                        },
                        insideURLFunctionInImportAtRuleNode: function(e) {
                            let t = e.getValue()
                              , r = u(e, "css-atrule");
                            return (null == r ? void 0 : r.name) === "import" && "url" === t.groups[0].value && 2 === t.groups.length
                        },
                        isKeyframeAtRuleKeywords: function(e, t) {
                            let r = u(e, "css-atrule");
                            return (null == r ? void 0 : r.name) && r.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase())
                        },
                        isWideKeywords: function(e) {
                            return i.has(e.toLowerCase())
                        },
                        isLastNode: function(e, t) {
                            var r;
                            let n = null === (r = e.getParentNode()) || void 0 === r ? void 0 : r.nodes;
                            return n && n.indexOf(t) === n.length - 1
                        },
                        isSCSSControlDirectiveNode: function(e) {
                            return "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name)
                        },
                        isDetachedRulesetDeclarationNode: function(e) {
                            let {selector: t} = e;
                            return !!t && ("string" == typeof t && /^@.+:.*$/.test(t) || t.value && /^@.+:.*$/.test(t.value))
                        },
                        isRelationalOperatorNode: function(e) {
                            return "value-word" === e.type && ["<", ">", "<=", ">="].includes(e.value)
                        },
                        isEqualityOperatorNode: function(e) {
                            return "value-word" === e.type && ["==", "!="].includes(e.value)
                        },
                        isMultiplicationNode: a,
                        isDivisionNode: s,
                        isAdditionNode: o,
                        isSubtractionNode: l,
                        isModuloNode: p,
                        isMathOperatorNode: function(e) {
                            return a(e) || s(e) || o(e) || l(e) || p(e)
                        },
                        isEachKeywordNode: function(e) {
                            return "value-word" === e.type && "in" === e.value
                        },
                        isForKeywordNode: function(e) {
                            return "value-word" === e.type && ["from", "through", "end"].includes(e.value)
                        },
                        isURLFunctionNode: function(e) {
                            return "value-func" === e.type && "url" === e.value.toLowerCase()
                        },
                        isIfElseKeywordNode: function(e) {
                            return "value-word" === e.type && ["and", "or", "not"].includes(e.value)
                        },
                        hasComposesNode: function(e) {
                            var t, r;
                            return (null === (t = e.value) || void 0 === t ? void 0 : t.type) === "value-root" && (null === (r = e.value.group) || void 0 === r ? void 0 : r.type) === "value-value" && "composes" === e.prop.toLowerCase()
                        },
                        hasParensAroundNode: function(e) {
                            var t, r, n;
                            return (null === (t = e.value) || void 0 === t || null === (r = t.group) || void 0 === r || null === (n = r.group) || void 0 === n ? void 0 : n.type) === "value-paren_group" && null !== e.value.group.group.open && null !== e.value.group.group.close
                        },
                        hasEmptyRawBefore: function(e) {
                            var t;
                            return (null === (t = e.raws) || void 0 === t ? void 0 : t.before) === ""
                        },
                        isDetachedRulesetCallNode: function(e) {
                            var t;
                            return (null === (t = e.raws) || void 0 === t ? void 0 : t.params) && /^\(\s*\)$/.test(e.raws.params)
                        },
                        isTemplatePlaceholderNode: function(e) {
                            return e.name.startsWith("prettier-placeholder")
                        },
                        isTemplatePropNode: function(e) {
                            return e.prop.startsWith("@prettier-placeholder")
                        },
                        isPostcssSimpleVarNode: function(e, t) {
                            return "$$" === e.value && "value-func" === e.type && (null == t ? void 0 : t.type) === "value-word" && !t.raws.before
                        },
                        isKeyValuePairNode: c,
                        isKeyValuePairInParenGroupNode: d,
                        isKeyInValuePairNode: function(e, t) {
                            if (!c(t))
                                return !1;
                            let {groups: r} = t
                              , n = r.indexOf(e);
                            return -1 !== n && D(r[n + 1])
                        },
                        isSCSSMapItemNode: function(e) {
                            var t;
                            let r = e.getValue();
                            if (0 === r.groups.length)
                                return !1;
                            let n = e.getParentNode(1);
                            if (!d(r) && !(n && d(n)))
                                return !1;
                            let i = u(e, "css-decl");
                            return !!(null != i && null !== (t = i.prop) && void 0 !== t && t.startsWith("$") || d(n) || "value-func" === n.type)
                        },
                        isInlineValueCommentNode: function(e) {
                            return "value-comment" === e.type && e.inline
                        },
                        isHashNode: function(e) {
                            return "value-word" === e.type && "#" === e.value
                        },
                        isLeftCurlyBraceNode: function(e) {
                            return "value-word" === e.type && "{" === e.value
                        },
                        isRightCurlyBraceNode: function(e) {
                            return "value-word" === e.type && "}" === e.value
                        },
                        isWordNode: function(e) {
                            return ["value-word", "value-atword"].includes(e.type)
                        },
                        isColonNode: D,
                        isMediaAndSupportsKeywords: function(e) {
                            return e.value && ["not", "and", "or"].includes(e.value.toLowerCase())
                        },
                        isColorAdjusterFuncNode: function(e) {
                            return "value-func" === e.type && r.has(e.value.toLowerCase())
                        },
                        lastLineHasInlineComment: function(e) {
                            return /\/\//.test(e.split(/[\n\r]/).pop())
                        },
                        isAtWordPlaceholderNode: function(e) {
                            return (null == e ? void 0 : e.type) === "value-atword" && e.value.startsWith("prettier-placeholder-")
                        },
                        isConfigurationNode: function(e, t) {
                            var r, n;
                            if ((null === (r = e.open) || void 0 === r ? void 0 : r.value) !== "(" || (null === (n = e.close) || void 0 === n ? void 0 : n.value) !== ")" || e.groups.some(e=>"value-comma_group" !== e.type))
                                return !1;
                            if ("value-comma_group" === t.type) {
                                let r = t.groups.indexOf(e) - 1
                                  , n = t.groups[r];
                                if ((null == n ? void 0 : n.type) === "value-word" && "with" === n.value)
                                    return !0
                            }
                            return !1
                        },
                        isParenGroupNode: function(e) {
                            var t, r;
                            return "value-paren_group" === e.type && (null === (t = e.open) || void 0 === t ? void 0 : t.value) === "(" && (null === (r = e.close) || void 0 === r ? void 0 : r.value) === ")"
                        }
                    }
                }
            }), nn = h({
                "src/utils/line-column-to-index.js"(e, t) {
                    v(),
                    t.exports = function(e, t) {
                        let r = 0;
                        for (let n = 0; n < e.line - 1; ++n)
                            r = t.indexOf(`
`, r) + 1;
                        return r + e.column
                    }
                }
            }), nu = h({
                "src/language-css/loc.js"(e, t) {
                    v();
                    var {skipEverythingButNewLine: r} = ea()
                      , n = N()
                      , u = nn();
                    function i(e, t) {
                        return "number" == typeof e.sourceIndex ? e.sourceIndex : e.source ? u(e.source.start, t) - 1 : null
                    }
                    function a(e, t) {
                        if ("css-comment" === e.type && e.inline)
                            return r(t, e.source.startOffset);
                        let i = e.nodes && n(e.nodes);
                        return i && e.source && !e.source.end && (e = i),
                        e.source && e.source.end ? u(e.source.end, t) : null
                    }
                    t.exports = {
                        locStart: function(e) {
                            return e.source.startOffset
                        },
                        locEnd: function(e) {
                            return e.source.endOffset
                        },
                        calculateLoc: function e(t, r) {
                            for (let n in t.source && (t.source.startOffset = i(t, r),
                            t.source.endOffset = a(t, r)),
                            t) {
                                let u = t[n];
                                "source" !== n && u && "object" == typeof u && ("value-root" === u.type || "value-unknown" === u.type ? function e(t, r, n) {
                                    for (let u in t.source && (t.source.startOffset = i(t, n) + r,
                                    t.source.endOffset = a(t, n) + r),
                                    t) {
                                        let i = t[u];
                                        "source" !== u && i && "object" == typeof i && e(i, r, n)
                                    }
                                }(u, function(e) {
                                    let t = e.source.startOffset;
                                    return "string" == typeof e.prop && (t += e.prop.length),
                                    "css-atrule" === e.type && "string" == typeof e.name && (t += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length),
                                    "css-atrule" !== e.type && e.raws && "string" == typeof e.raws.between && (t += e.raws.between.length),
                                    t
                                }(t), u.text || u.value) : e(u, r))
                            }
                        },
                        replaceQuotesInInlineComments: function(e) {
                            let t = "initial", r = "initial", n, u = !1, i = [];
                            for (let a = 0; a < e.length; a++) {
                                let s = e[a];
                                switch (t) {
                                case "initial":
                                    if ("'" === s) {
                                        t = "single-quotes";
                                        continue
                                    }
                                    if ('"' === s) {
                                        t = "double-quotes";
                                        continue
                                    }
                                    if (("u" === s || "U" === s) && "url(" === e.slice(a, a + 4).toLowerCase()) {
                                        t = "url",
                                        a += 3;
                                        continue
                                    }
                                    if ("*" === s && "/" === e[a - 1]) {
                                        t = "comment-block";
                                        continue
                                    }
                                    "/" === s && "/" === e[a - 1] && (t = "comment-inline",
                                    n = a - 1);
                                    continue;
                                case "single-quotes":
                                    if ("'" === s && "\\" !== e[a - 1] && (t = r,
                                    r = "initial"),
                                    s === `
` || "\r" === s)
                                        return e;
                                    continue;
                                case "double-quotes":
                                    if ('"' === s && "\\" !== e[a - 1] && (t = r,
                                    r = "initial"),
                                    s === `
` || "\r" === s)
                                        return e;
                                    continue;
                                case "url":
                                    if (")" === s && (t = "initial"),
                                    s === `
` || "\r" === s)
                                        return e;
                                    if ("'" === s) {
                                        t = "single-quotes",
                                        r = "url";
                                        continue
                                    }
                                    '"' === s && (t = "double-quotes",
                                    r = "url");
                                    continue;
                                case "comment-block":
                                    "/" === s && "*" === e[a - 1] && (t = "initial");
                                    continue;
                                case "comment-inline":
                                    ('"' === s || "'" === s || "*" === s) && (u = !0),
                                    (s === `
` || "\r" === s) && (u && i.push([n, a]),
                                    t = "initial",
                                    u = !1);
                                    continue
                                }
                            }
                            for (let[t,r] of i)
                                e = e.slice(0, t) + e.slice(t, r).replace(/["'*]/g, " ") + e.slice(r);
                            return e
                        }
                    }
                }
            }), ni = h({
                "src/language-css/utils/is-less-parser.js"(e, t) {
                    v(),
                    t.exports = function(e) {
                        return "css" === e.parser || "less" === e.parser
                    }
                }
            }), na = h({
                "src/language-css/utils/is-scss.js"(e, t) {
                    v(),
                    t.exports = function(e, t) {
                        return "less" === e || "scss" === e ? "scss" === e : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t)
                    }
                }
            }), ns = h({
                "src/language-css/utils/css-units.evaluate.js"(e, t) {
                    t.exports = {
                        em: "em",
                        rem: "rem",
                        ex: "ex",
                        rex: "rex",
                        cap: "cap",
                        rcap: "rcap",
                        ch: "ch",
                        rch: "rch",
                        ic: "ic",
                        ric: "ric",
                        lh: "lh",
                        rlh: "rlh",
                        vw: "vw",
                        svw: "svw",
                        lvw: "lvw",
                        dvw: "dvw",
                        vh: "vh",
                        svh: "svh",
                        lvh: "lvh",
                        dvh: "dvh",
                        vi: "vi",
                        svi: "svi",
                        lvi: "lvi",
                        dvi: "dvi",
                        vb: "vb",
                        svb: "svb",
                        lvb: "lvb",
                        dvb: "dvb",
                        vmin: "vmin",
                        svmin: "svmin",
                        lvmin: "lvmin",
                        dvmin: "dvmin",
                        vmax: "vmax",
                        svmax: "svmax",
                        lvmax: "lvmax",
                        dvmax: "dvmax",
                        cm: "cm",
                        mm: "mm",
                        q: "Q",
                        in: "in",
                        pt: "pt",
                        pc: "pc",
                        px: "px",
                        deg: "deg",
                        grad: "grad",
                        rad: "rad",
                        turn: "turn",
                        s: "s",
                        ms: "ms",
                        hz: "Hz",
                        khz: "kHz",
                        dpi: "dpi",
                        dpcm: "dpcm",
                        dppx: "dppx",
                        x: "x"
                    }
                }
            }), no = h({
                "src/language-css/utils/print-unit.js"(e, t) {
                    v();
                    var r = ns();
                    t.exports = function(e) {
                        let t = e.toLowerCase();
                        return Object.prototype.hasOwnProperty.call(r, t) ? r[t] : e
                    }
                }
            }), nl = h({
                "src/language-css/printer-postcss.js"(e, t) {
                    v();
                    var r = N()
                      , {printNumber: n, printString: u, hasNewline: i, isFrontMatterNode: a, isNextLineEmpty: s, isNonEmptyArray: o} = ec()
                      , {builders: {join: l, line: p, hardline: c, softline: d, group: D, fill: f, indent: m, dedent: g, ifBreak: y, breakParent: h}, utils: {removeLines: E, getDocParts: C}} = W()
                      , F = r9()
                      , A = r4()
                      , {insertPragma: x} = nt()
                      , {getAncestorNode: b, getPropOfDeclNode: S, maybeToLowerCase: T, insideValueFunctionNode: B, insideICSSRuleNode: w, insideAtRuleNode: k, insideURLFunctionInImportAtRuleNode: j, isKeyframeAtRuleKeywords: P, isWideKeywords: I, isLastNode: O, isSCSSControlDirectiveNode: L, isDetachedRulesetDeclarationNode: _, isRelationalOperatorNode: M, isEqualityOperatorNode: $, isMultiplicationNode: R, isDivisionNode: V, isAdditionNode: q, isSubtractionNode: J, isMathOperatorNode: U, isEachKeywordNode: H, isForKeywordNode: G, isURLFunctionNode: X, isIfElseKeywordNode: z, hasComposesNode: K, hasParensAroundNode: Q, hasEmptyRawBefore: Y, isKeyValuePairNode: Z, isKeyInValuePairNode: ee, isDetachedRulesetCallNode: et, isTemplatePlaceholderNode: er, isTemplatePropNode: en, isPostcssSimpleVarNode: eu, isSCSSMapItemNode: ei, isInlineValueCommentNode: ea, isHashNode: es, isLeftCurlyBraceNode: eo, isRightCurlyBraceNode: el, isWordNode: ep, isColonNode: ed, isMediaAndSupportsKeywords: eD, isColorAdjusterFuncNode: ef, lastLineHasInlineComment: em, isAtWordPlaceholderNode: eg, isConfigurationNode: ey, isParenGroupNode: eh} = nr()
                      , {locStart: eE, locEnd: eC} = nu()
                      , eF = ni()
                      , eA = na()
                      , ev = no();
                    function ex(e, t, r) {
                        let n = [];
                        return e.each((e,u,o)=>{
                            let l = o[u - 1];
                            if (l && "css-comment" === l.type && "prettier-ignore" === l.text.trim()) {
                                let r = e.getValue();
                                n.push(t.originalText.slice(eE(r), eC(r)))
                            } else
                                n.push(r());
                            u !== o.length - 1 && (("css-comment" !== o[u + 1].type || i(t.originalText, eE(o[u + 1]), {
                                backwards: !0
                            }) || a(o[u])) && ("css-atrule" !== o[u + 1].type || "else" !== o[u + 1].name || "css-comment" === o[u].type) ? (n.push(t.__isHTMLStyleAttribute ? p : c),
                            s(t.originalText, e.getValue(), eC) && !a(o[u]) && n.push(c)) : n.push(" "))
                        }
                        , "nodes"),
                        n
                    }
                    var eb = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs
                      , eS = RegExp(eb.source + `|(${/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source})?(${/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source})(${/[A-Za-z]+/g.source})?`, "g");
                    function eT(e, t) {
                        return e.replace(eb, e=>u(e, t))
                    }
                    function eB(e) {
                        return e.replace(eS, (e,t,r,n,u)=>!r && n ? eN(n) + T(u || "") : e)
                    }
                    function eN(e) {
                        return n(e).replace(/\.0(?=$|e)/, "")
                    }
                    t.exports = {
                        print: function(e, t, n) {
                            var i, a, F;
                            let A = e.getValue();
                            if (!A)
                                return "";
                            if ("string" == typeof A)
                                return A;
                            switch (A.type) {
                            case "front-matter":
                                return [A.raw, c];
                            case "css-root":
                                {
                                    let r = ex(e, t, n)
                                      , u = A.raws.after.trim();
                                    return u.startsWith(";") && (u = u.slice(1).trim()),
                                    [r, u ? ` ${u}` : "", C(r).length > 0 ? c : ""]
                                }
                            case "css-comment":
                                {
                                    let e = A.inline || A.raws.inline
                                      , r = t.originalText.slice(eE(A), eC(A));
                                    return e ? r.trimEnd() : r
                                }
                            case "css-rule":
                                return [n("selector"), A.important ? " !important" : "", A.nodes ? [A.selector && "selector-unknown" === A.selector.type && em(A.selector.value) ? p : " ", "{", A.nodes.length > 0 ? m([c, ex(e, t, n)]) : "", c, "}", _(A) ? ";" : ""] : ";"];
                            case "css-decl":
                                {
                                    let r = e.getParentNode()
                                      , {between: u} = A.raws
                                      , i = u.trim()
                                      , a = K(A) ? E(n("value")) : n("value");
                                    return ":" !== i && em(i) && (a = m([c, g(a)])),
                                    [A.raws.before.replace(/[\s;]/g, ""), "css-atrule" === r.type && r.variable || w(e) ? A.prop : T(A.prop), i.startsWith("//") ? " " : "", i, A.extend ? "" : " ", eF(t) && A.extend && A.selector ? ["extend(", n("selector"), ")"] : "", a, A.raws.important ? A.raws.important.replace(/\s*!\s*important/i, " !important") : A.important ? " !important" : "", A.raws.scssDefault ? A.raws.scssDefault.replace(/\s*!default/i, " !default") : A.scssDefault ? " !default" : "", A.raws.scssGlobal ? A.raws.scssGlobal.replace(/\s*!global/i, " !global") : A.scssGlobal ? " !global" : "", A.nodes ? [" {", m([d, ex(e, t, n)]), d, "}"] : en(A) && !r.raws.semicolon && ";" !== t.originalText[eC(A) - 1] ? "" : t.__isHTMLStyleAttribute && O(e, A) ? y(";") : ";"]
                                }
                            case "css-atrule":
                                {
                                    let r = e.getParentNode()
                                      , u = er(A) && !r.raws.semicolon && ";" !== t.originalText[eC(A) - 1];
                                    if (eF(t)) {
                                        if (A.mixin)
                                            return [n("selector"), A.important ? " !important" : "", u ? "" : ";"];
                                        if (A.function)
                                            return [A.name, n("params"), u ? "" : ";"];
                                        if (A.variable)
                                            return ["@", A.name, ": ", A.value ? n("value") : "", A.raws.between.trim() ? A.raws.between.trim() + " " : "", A.nodes ? ["{", m([A.nodes.length > 0 ? d : "", ex(e, t, n)]), d, "}"] : "", u ? "" : ";"]
                                    }
                                    return ["@", et(A) || A.name.endsWith(":") ? A.name : T(A.name), A.params ? [et(A) ? "" : er(A) ? "" === A.raws.afterName ? "" : A.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(A.raws.afterName) ? [c, c] : /^\s*\n/.test(A.raws.afterName) ? c : " " : " ", n("params")] : "", A.selector ? m([" ", n("selector")]) : "", A.value ? D([" ", n("value"), L(A) ? Q(A) ? " " : p : ""]) : "else" === A.name ? " " : "", A.nodes ? [L(A) ? "" : A.selector && !A.selector.nodes && "string" == typeof A.selector.value && em(A.selector.value) || !A.selector && "string" == typeof A.params && em(A.params) ? p : " ", "{", m([A.nodes.length > 0 ? d : "", ex(e, t, n)]), d, "}"] : u ? "" : ";"]
                                }
                            case "media-query-list":
                                {
                                    let t = [];
                                    return e.each(e=>{
                                        let r = e.getValue();
                                        "media-query" === r.type && "" === r.value || t.push(n())
                                    }
                                    , "nodes"),
                                    D(m(l(p, t)))
                                }
                            case "media-query":
                                return [l(" ", e.map(n, "nodes")), O(e, A) ? "" : ","];
                            case "media-type":
                            case "media-value":
                                return eB(eT(A.value, t));
                            case "media-feature-expression":
                                return A.nodes ? ["(", ...e.map(n, "nodes"), ")"] : A.value;
                            case "media-feature":
                                return T(eT(A.value.replace(/ +/g, " "), t));
                            case "media-colon":
                            case "value-comma":
                                return [A.value, " "];
                            case "media-keyword":
                            case "selector-string":
                                return eT(A.value, t);
                            case "media-url":
                                return eT(A.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), t);
                            case "media-unknown":
                            case "selector-comment":
                            case "selector-nesting":
                            case "value-paren":
                            case "value-operator":
                            case "value-unicode-range":
                            case "value-unknown":
                                return A.value;
                            case "selector-root":
                                return D([k(e, "custom-selector") ? [b(e, "css-atrule").customSelector, p] : "", l([",", k(e, ["extend", "custom-selector", "nest"]) ? p : c], e.map(n, "nodes"))]);
                            case "selector-selector":
                                return D(m(e.map(n, "nodes")));
                            case "selector-tag":
                                {
                                    let t = e.getParentNode()
                                      , r = t && t.nodes.indexOf(A)
                                      , n = r && t.nodes[r - 1];
                                    return [A.namespace ? [!0 === A.namespace ? "" : A.namespace.trim(), "|"] : "", "selector-nesting" === n.type ? A.value : eB(P(e, A.value) ? A.value.toLowerCase() : A.value)]
                                }
                            case "selector-id":
                                return ["#", A.value];
                            case "selector-class":
                                return [".", eB(eT(A.value, t))];
                            case "selector-attribute":
                                let v;
                                return ["[", A.namespace ? [!0 === A.namespace ? "" : A.namespace.trim(), "|"] : "", A.attribute.trim(), null !== (i = A.operator) && void 0 !== i ? i : "", A.value ? (F = eT(A.value.trim(), t),
                                v = t.singleQuote ? "'" : '"',
                                F.includes('"') || F.includes("'") ? F : v + F + v) : "", A.insensitive ? " i" : "", "]"];
                            case "selector-combinator":
                                if ("+" === A.value || ">" === A.value || "~" === A.value || ">>>" === A.value) {
                                    let t = e.getParentNode();
                                    return ["selector-selector" === t.type && t.nodes[0] === A ? "" : p, A.value, O(e, A) ? "" : " "]
                                }
                                return [A.value.trim().startsWith("(") ? p : "", eB(eT(A.value.trim(), t)) || p];
                            case "selector-universal":
                                return [A.namespace ? [!0 === A.namespace ? "" : A.namespace.trim(), "|"] : "", A.value];
                            case "selector-pseudo":
                                return [T(A.value), o(A.nodes) ? D(["(", m([d, l([",", p], e.map(n, "nodes"))]), d, ")"]) : ""];
                            case "selector-unknown":
                                {
                                    let r = b(e, "css-rule");
                                    if (r && r.isSCSSNesterProperty)
                                        return eB(eT(T(A.value), t));
                                    let n = e.getParentNode();
                                    if (n.raws && n.raws.selector) {
                                        let e = eE(n)
                                          , r = e + n.raws.selector.length;
                                        return t.originalText.slice(e, r).trim()
                                    }
                                    let u = e.getParentNode(1);
                                    if ("value-paren_group" === n.type && u && "value-func" === u.type && "selector" === u.value) {
                                        let e = eC(n.open) + 1
                                          , r = eE(n.close)
                                          , u = t.originalText.slice(e, r).trim();
                                        return em(u) ? [h, u] : u
                                    }
                                    return A.value
                                }
                            case "value-value":
                            case "value-root":
                                return n("group");
                            case "value-comment":
                                return t.originalText.slice(eE(A), eC(A));
                            case "value-comma_group":
                                {
                                    let r = e.getParentNode()
                                      , u = e.getParentNode(1)
                                      , i = S(e)
                                      , s = i && "value-value" === r.type && ("grid" === i || i.startsWith("grid-template"))
                                      , o = b(e, "css-atrule")
                                      , l = o && L(o)
                                      , y = A.groups.some(e=>ea(e))
                                      , E = e.map(n, "groups")
                                      , C = []
                                      , F = B(e, "url")
                                      , v = !1
                                      , x = !1;
                                    for (let n = 0; n < A.groups.length; ++n) {
                                        C.push(E[n]);
                                        let i = A.groups[n - 1]
                                          , D = A.groups[n]
                                          , f = A.groups[n + 1]
                                          , m = A.groups[n + 2];
                                        if (F) {
                                            (f && q(f) || q(D)) && C.push(" ");
                                            continue
                                        }
                                        if (k(e, "forward") && "value-word" === D.type && D.value && void 0 !== i && "value-word" === i.type && "as" === i.value && "value-operator" === f.type && "*" === f.value || !f || "value-word" === D.type && D.value.endsWith("-") && eg(f))
                                            continue;
                                        if ("value-string" === D.type && D.quoted) {
                                            let e = D.value.lastIndexOf("#{")
                                              , t = D.value.lastIndexOf("}");
                                            -1 !== e && -1 !== t ? v = e > t : -1 !== e ? v = !0 : -1 !== t && (v = !1)
                                        }
                                        if (v || ed(D) || ed(f) || "value-atword" === D.type && ("" === D.value || D.value.endsWith("[")) || "value-word" === f.type && f.value.startsWith("]") || "~" === D.value || D.value && D.value.includes("\\") && f && "value-comment" !== f.type || i && i.value && i.value.indexOf("\\") === i.value.length - 1 && "value-operator" === D.type && "/" === D.value || "\\" === D.value || eu(D, f) || es(D) || eo(D) || el(f) || eo(f) && Y(f) || el(D) && Y(f) || "--" === D.value && es(f))
                                            continue;
                                        let y = U(D)
                                          , h = U(f);
                                        if ((y && es(f) || h && el(D)) && Y(f) || !i && V(D) || B(e, "calc") && (q(D) || q(f) || J(D) || J(f)) && Y(f))
                                            continue;
                                        let b = (q(D) || J(D)) && 0 === n && ("value-number" === f.type || f.isHex) && u && ef(u) && !Y(f)
                                          , S = m && "value-func" === m.type || m && ep(m) || "value-func" === D.type || ep(D)
                                          , T = "value-func" === f.type || ep(f) || i && "value-func" === i.type || i && ep(i);
                                        if (!(!(R(f) || R(D)) && !B(e, "calc") && !b && (V(f) && !S || V(D) && !T || q(f) && !S || q(D) && !T || J(f) || J(D)) && (Y(f) || y && (!i || i && U(i)))) && !(("scss" === t.parser || "less" === t.parser) && y && "-" === D.value && eh(f) && eC(D) === eE(f.open) && "(" === f.open.value)) {
                                            if (ea(D)) {
                                                if ("value-paren_group" === r.type) {
                                                    C.push(g(c));
                                                    continue
                                                }
                                                C.push(c);
                                                continue
                                            }
                                            if (l && ($(f) || M(f) || z(f) || H(D) || G(D)) || o && "namespace" === o.name.toLowerCase()) {
                                                C.push(" ");
                                                continue
                                            }
                                            if (s) {
                                                D.source && f.source && D.source.start.line !== f.source.start.line ? (C.push(c),
                                                x = !0) : C.push(" ");
                                                continue
                                            }
                                            if (h) {
                                                C.push(" ");
                                                continue
                                            }
                                            if (!(f && "..." === f.value) && !(eg(D) && eg(f) && eC(D) === eE(f))) {
                                                if (eg(D) && eh(f) && eC(D) === eE(f.open)) {
                                                    C.push(d);
                                                    continue
                                                }
                                                if ("with" === D.value && eh(f)) {
                                                    C.push(" ");
                                                    continue
                                                }
                                                null !== (a = D.value) && void 0 !== a && a.endsWith("#") && "{" === f.value && eh(f.group) || C.push(p)
                                            }
                                        }
                                    }
                                    return y && C.push(h),
                                    x && C.unshift(c),
                                    l ? D(m(C)) : j(e) ? D(f(C)) : D(m(f(C)))
                                }
                            case "value-paren_group":
                                {
                                    let u = e.getParentNode();
                                    if (u && X(u) && (1 === A.groups.length || A.groups.length > 0 && "value-comma_group" === A.groups[0].type && A.groups[0].groups.length > 0 && "value-word" === A.groups[0].groups[0].type && A.groups[0].groups[0].value.startsWith("data:")))
                                        return [A.open ? n("open") : "", l(",", e.map(n, "groups")), A.close ? n("close") : ""];
                                    if (!A.open) {
                                        let t = e.map(n, "groups")
                                          , r = [];
                                        for (let e = 0; e < t.length; e++)
                                            0 !== e && r.push([",", p]),
                                            r.push(t[e]);
                                        return D(m(f(r)))
                                    }
                                    let i = ei(e)
                                      , a = r(A.groups)
                                      , h = a && "value-comment" === a.type
                                      , E = ee(A, u)
                                      , F = ey(A, u)
                                      , v = D([A.open ? n("open") : "", m([d, l([p], e.map((e,u)=>{
                                        let i = e.getValue()
                                          , a = u === A.groups.length - 1
                                          , l = [n(), a ? "" : ","];
                                        if (Z(i) && "value-comma_group" === i.type && i.groups && "value-paren_group" !== i.groups[0].type && i.groups[2] && "value-paren_group" === i.groups[2].type) {
                                            let e = C(l[0].contents.contents);
                                            e[1] = D(e[1]),
                                            l = [D(g(l))]
                                        }
                                        if (!a && "value-comma_group" === i.type && o(i.groups)) {
                                            let e = r(i.groups);
                                            !e.source && e.close && (e = e.close),
                                            e.source && s(t.originalText, e, eC) && l.push(c)
                                        }
                                        return l
                                    }
                                    , "groups"))]), y(!h && eA(t.parser, t.originalText) && i && ("es5" === t.trailingComma || "all" === t.trailingComma) ? "," : ""), d, A.close ? n("close") : ""], {
                                        shouldBreak: F || i && !E
                                    });
                                    return F || E ? g(v) : v
                                }
                            case "value-func":
                                return [A.value, k(e, "supports") && eD(A) ? " " : "", n("group")];
                            case "value-number":
                                return [eN(A.value), ev(A.unit)];
                            case "value-word":
                                return A.isColor && A.isHex || I(A.value) ? A.value.toLowerCase() : A.value;
                            case "value-colon":
                                {
                                    let t = e.getParentNode()
                                      , n = t && t.groups.indexOf(A)
                                      , u = n && t.groups[n - 1];
                                    return [A.value, u && "string" == typeof u.value && "\\" === r(u.value) || B(e, "url") ? "" : p]
                                }
                            case "value-string":
                                return u(A.raws.quote + A.value + A.raws.quote, t);
                            case "value-atword":
                                return ["@", A.value];
                            default:
                                throw Error(`Unknown postcss type ${JSON.stringify(A.type)}`)
                            }
                        },
                        embed: A,
                        insertPragma: x,
                        massageAstNode: F
                    }
                }
            }), np = h({
                "src/language-css/options.js"(e, t) {
                    v();
                    var r = rQ();
                    t.exports = {
                        singleQuote: r.singleQuote
                    }
                }
            }), nc = h({
                "src/language-css/parsers.js"() {
                    v()
                }
            }), nd = h({
                "node_modules/linguist-languages/data/CSS.json"(e, t) {
                    t.exports = {
                        name: "CSS",
                        type: "markup",
                        tmScope: "source.css",
                        aceMode: "css",
                        codemirrorMode: "css",
                        codemirrorMimeType: "text/css",
                        color: "#563d7c",
                        extensions: [".css"],
                        languageId: 50
                    }
                }
            }), nD = h({
                "node_modules/linguist-languages/data/PostCSS.json"(e, t) {
                    t.exports = {
                        name: "PostCSS",
                        type: "markup",
                        color: "#dc3a0c",
                        tmScope: "source.postcss",
                        group: "CSS",
                        extensions: [".pcss", ".postcss"],
                        aceMode: "text",
                        languageId: 262764437
                    }
                }
            }), nf = h({
                "node_modules/linguist-languages/data/Less.json"(e, t) {
                    t.exports = {
                        name: "Less",
                        type: "markup",
                        color: "#1d365d",
                        aliases: ["less-css"],
                        extensions: [".less"],
                        tmScope: "source.css.less",
                        aceMode: "less",
                        codemirrorMode: "css",
                        codemirrorMimeType: "text/css",
                        languageId: 198
                    }
                }
            }), nm = h({
                "node_modules/linguist-languages/data/SCSS.json"(e, t) {
                    t.exports = {
                        name: "SCSS",
                        type: "markup",
                        color: "#c6538c",
                        tmScope: "source.css.scss",
                        aceMode: "scss",
                        codemirrorMode: "css",
                        codemirrorMimeType: "text/x-scss",
                        extensions: [".scss"],
                        languageId: 329
                    }
                }
            }), ng = h({
                "src/language-css/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = nl()
                      , u = np()
                      , i = nc()
                      , a = [r(nd(), e=>({
                        since: "1.4.0",
                        parsers: ["css"],
                        vscodeLanguageIds: ["css"],
                        extensions: [...e.extensions, ".wxss"]
                    })), r(nD(), ()=>({
                        since: "1.4.0",
                        parsers: ["css"],
                        vscodeLanguageIds: ["postcss"]
                    })), r(nf(), ()=>({
                        since: "1.4.0",
                        parsers: ["less"],
                        vscodeLanguageIds: ["less"]
                    })), r(nm(), ()=>({
                        since: "1.4.0",
                        parsers: ["scss"],
                        vscodeLanguageIds: ["scss"]
                    }))];
                    t.exports = {
                        languages: a,
                        options: u,
                        printers: {
                            postcss: n
                        },
                        parsers: i
                    }
                }
            }), ny = h({
                "src/language-handlebars/loc.js"(e, t) {
                    v(),
                    t.exports = {
                        locStart: function(e) {
                            return e.loc.start.offset
                        },
                        locEnd: function(e) {
                            return e.loc.end.offset
                        }
                    }
                }
            }), nh = h({
                "src/language-handlebars/clean.js"(e, t) {
                    function r(e, t) {
                        if ("TextNode" === e.type) {
                            let r = e.chars.trim();
                            if (!r)
                                return null;
                            t.chars = r.replace(/[\t\n\f\r ]+/g, " ")
                        }
                        "AttrNode" === e.type && "class" === e.name.toLowerCase() && delete t.value
                    }
                    v(),
                    r.ignoredProperties = new Set(["loc", "selfClosing"]),
                    t.exports = r
                }
            }), nE = h({
                "src/language-handlebars/html-void-elements.evaluate.js"(e, t) {
                    t.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
                }
            }), nC = h({
                "src/language-handlebars/utils.js"(e, t) {
                    v();
                    var r = N()
                      , n = nE();
                    function u(e) {
                        return e.toUpperCase() === e
                    }
                    var i = new Set(n);
                    function a(e) {
                        return s(e, ["TextNode"]) && !/\S/.test(e.chars)
                    }
                    function s(e, t) {
                        return e && t.includes(e.type)
                    }
                    function o(e, t) {
                        return s(e.getParentNode(0), t)
                    }
                    function l(e, t) {
                        var r, n, u, i;
                        let a = e.getValue()
                          , s = null !== (r = e.getParentNode(0)) && void 0 !== r ? r : {}
                          , o = null !== (n = null !== (u = null !== (i = s.children) && void 0 !== i ? i : s.body) && void 0 !== u ? u : s.parts) && void 0 !== n ? n : []
                          , l = o.indexOf(a);
                        return -1 !== l && o[l + t]
                    }
                    function p(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return l(e, -t)
                    }
                    function c(e) {
                        return l(e, 1)
                    }
                    function d(e) {
                        return s(e, ["MustacheCommentStatement"]) && "string" == typeof e.value && "prettier-ignore" === e.value.trim()
                    }
                    t.exports = {
                        getNextNode: c,
                        getPreviousNode: p,
                        hasPrettierIgnore: function(e) {
                            let t = e.getValue()
                              , r = p(e, 2);
                            return d(t) || d(r)
                        },
                        isLastNodeOfSiblings: function(e) {
                            let t = e.getValue()
                              , n = e.getParentNode(0);
                            return !!(o(e, ["ElementNode"]) && r(n.children) === t || o(e, ["Block"]) && r(n.body) === t)
                        },
                        isNextNodeOfSomeType: function(e, t) {
                            return s(c(e), t)
                        },
                        isNodeOfSomeType: s,
                        isParentOfSomeType: o,
                        isPreviousNodeOfSomeType: function(e, t) {
                            return s(p(e), t)
                        },
                        isVoid: function(e) {
                            var t;
                            return !0 === e.selfClosing || (t = e.tag,
                            i.has(t.toLowerCase()) && !u(t[0])) || s(e, ["ElementNode"]) && "string" == typeof e.tag && !e.tag.startsWith(":") && (u(e.tag[0]) || e.tag.includes(".")) && e.children.every(e=>a(e))
                        },
                        isWhitespaceNode: a
                    }
                }
            }), nF = h({
                "src/language-handlebars/printer-glimmer.js"(e, t) {
                    v();
                    var {builders: {dedent: r, fill: n, group: u, hardline: i, ifBreak: a, indent: s, join: o, line: l, softline: p}, utils: {getDocParts: c, replaceTextEndOfLine: d}} = W()
                      , {getPreferredQuote: D, isNonEmptyArray: f} = ec()
                      , {locStart: m, locEnd: g} = ny()
                      , y = nh()
                      , {getNextNode: h, getPreviousNode: E, hasPrettierIgnore: C, isLastNodeOfSiblings: F, isNextNodeOfSomeType: A, isNodeOfSomeType: x, isParentOfSomeType: b, isPreviousNodeOfSomeType: S, isVoid: T, isWhitespaceNode: B} = nC();
                    function N(e, t) {
                        return m(e) - m(t)
                    }
                    function w(e, t, r) {
                        let n = e.getValue().children.every(e=>B(e));
                        return "ignore" === t.htmlWhitespaceSensitivity && n ? "" : e.map((e,n)=>{
                            let u = r();
                            return 0 === n && "ignore" === t.htmlWhitespaceSensitivity ? [p, u] : u
                        }
                        , "children")
                    }
                    function k(e) {
                        return [!1 === e.escaped ? "{{{" : "{{", e.strip && e.strip.open ? "~" : ""]
                    }
                    function j(e) {
                        let t = !1 === e.escaped ? "}}}" : "}}";
                        return [e.strip && e.strip.close ? "~" : "", t]
                    }
                    function P(e) {
                        return [k(e), e.closeStrip.open ? "~" : "", "/"]
                    }
                    function I(e) {
                        let t = j(e);
                        return [e.closeStrip.close ? "~" : "", t]
                    }
                    function O(e) {
                        return [k(e), e.inverseStrip.open ? "~" : ""]
                    }
                    function L(e) {
                        let t = j(e);
                        return [e.inverseStrip.close ? "~" : "", t]
                    }
                    function _(e) {
                        return x(e, ["BlockStatement"]) && e.program.body.every(e=>B(e))
                    }
                    function M(e) {
                        return x(e, ["BlockStatement"]) && e.inverse
                    }
                    function $(e, t, r) {
                        if (_(e.getValue()))
                            return "";
                        let n = t("program");
                        return "ignore" === r.htmlWhitespaceSensitivity ? s([i, n]) : s(n)
                    }
                    function R(e, t, r) {
                        let n = e.getValue()
                          , u = t("inverse")
                          , a = "ignore" === r.htmlWhitespaceSensitivity ? [i, u] : u;
                        return M(n) && 1 === n.inverse.body.length && x(n.inverse.body[0], ["BlockStatement"]) && n.inverse.body[0].path.parts[0] === n.path.parts[0] ? a : M(n) ? [["ignore" === r.htmlWhitespaceSensitivity ? i : "", O(n), "else", L(n)], s(a)] : ""
                    }
                    function V(e) {
                        return c(o(l, e.split(/[\t\n\f\r ]+/)))
                    }
                    function q(e) {
                        return (e = "string" == typeof e ? e : "").split(`
`).length - 1
                    }
                    function J() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return Array.from({
                            length: Math.min(e, 2)
                        }).fill(i)
                    }
                    function U(e, t) {
                        let {quote: r, regex: n} = D(e, t);
                        return [r, e.replace(n, `\\${r}`), r]
                    }
                    function H(e, t) {
                        let r = t("path")
                          , n = G(e, t);
                        return n ? [s([r, l, n]), p] : r
                    }
                    function G(e, t) {
                        let r = e.getValue()
                          , n = [];
                        if (r.params.length > 0) {
                            let r = e.map(t, "params");
                            n.push(...r)
                        }
                        if (r.hash && r.hash.pairs.length > 0) {
                            let e = t("hash");
                            n.push(e)
                        }
                        return 0 === n.length ? "" : o(l, n)
                    }
                    function X(e) {
                        return ["as |", e.blockParams.join(" "), "|"]
                    }
                    t.exports = {
                        print: function(e, t, c) {
                            var y, v, B;
                            let M = e.getValue();
                            if (!M)
                                return "";
                            if (C(e))
                                return t.originalText.slice(m(M), g(M));
                            let W = t.singleQuote ? "'" : '"';
                            switch (M.type) {
                            case "Block":
                            case "Program":
                            case "Template":
                                return u(e.map(c, "body"));
                            case "ElementNode":
                                {
                                    let r = u(function(e, t) {
                                        let r = e.getValue()
                                          , n = ["attributes", "modifiers", "comments"].filter(e=>f(r[e]))
                                          , u = n.flatMap(e=>r[e]).sort(N);
                                        for (let r of n)
                                            e.each(e=>{
                                                let r = u.indexOf(e.getValue());
                                                u.splice(r, 1, [l, t()])
                                            }
                                            , r);
                                        return f(r.blockParams) && u.push(l, X(r)),
                                        ["<", r.tag, s(u), T(r) ? a([p, "/>"], [" />", p]) : a([p, ">"], ">")]
                                    }(e, c))
                                      , n = "ignore" === t.htmlWhitespaceSensitivity && A(e, ["ElementNode"]) ? p : "";
                                    if (T(M))
                                        return [r, n];
                                    let o = ["</", M.tag, ">"];
                                    return 0 === M.children.length ? [r, s(o), n] : "ignore" === t.htmlWhitespaceSensitivity ? [r, s(w(e, t, c)), i, s(o), n] : [r, s(u(w(e, t, c))), s(o), n]
                                }
                            case "BlockStatement":
                                {
                                    let r, n, a, d = e.getParentNode(1);
                                    return d && d.inverse && 1 === d.inverse.body.length && d.inverse.body[0] === M && d.inverse.body[0].path.parts[0] === d.path.parts[0] ? [(y = d.inverse.body[0].path.parts[0],
                                    r = e.getValue(),
                                    u([O(n = e.getParentNode(1)), ["else", " ", y], s([l, u(G(e, c)), ...f(r.program.blockParams) ? [l, X(r.program)] : []]), p, L(n)])), $(e, c, t), R(e, c, t)] : [function(e, t) {
                                        let r, n = e.getValue(), i = [], a = G(e, t);
                                        return a && i.push(u(a)),
                                        f(n.program.blockParams) && i.push(X(n.program)),
                                        u([[k(n), n.openStrip.open ? "~" : "", "#"], t("path"), i.length > 0 ? s([l, o(l, i)]) : "", p, (r = j(n),
                                        [n.openStrip.close ? "~" : "", r])])
                                    }(e, c), u([$(e, c, t), R(e, c, t), (a = e.getValue(),
                                    "ignore" === t.htmlWhitespaceSensitivity ? [_(a) ? p : i, P(a), c("path"), I(a)] : [P(a), c("path"), I(a)])])]
                                }
                            case "ElementModifierStatement":
                                return u(["{{", H(e, c), "}}"]);
                            case "MustacheStatement":
                                return u([k(M), H(e, c), j(M)]);
                            case "SubExpression":
                                let z, K;
                                return u(["(", (z = c("path"),
                                (K = G(e, c)) ? s([z, l, u(K)]) : z), p, ")"]);
                            case "AttrNode":
                                {
                                    let e = "TextNode" === M.value.type;
                                    if (e && "" === M.value.chars && m(M.value) === g(M.value))
                                        return M.name;
                                    let t = e ? D(M.value.chars, W).quote : "ConcatStatement" === M.value.type ? D(M.value.parts.filter(e=>"TextNode" === e.type).map(e=>e.chars).join(""), W).quote : ""
                                      , r = c("value");
                                    return [M.name, "=", t, "class" === M.name && t ? u(s(r)) : r, t]
                                }
                            case "ConcatStatement":
                                return e.map(c, "parts");
                            case "Hash":
                                return o(l, e.map(c, "pairs"));
                            case "HashPair":
                                return [M.key, "=", c("value")];
                            case "TextNode":
                                {
                                    let u = M.chars.replace(/{{/g, "\\{{")
                                      , i = function(e) {
                                        for (let t = 0; t < 2; t++) {
                                            let r = e.getParentNode(t);
                                            if (r && "AttrNode" === r.type)
                                                return r.name.toLowerCase()
                                        }
                                    }(e);
                                    if (i) {
                                        if ("class" === i) {
                                            let t = u.trim().split(/\s+/).join(" ")
                                              , r = !1
                                              , n = !1;
                                            return b(e, ["ConcatStatement"]) && (S(e, ["MustacheStatement"]) && /^\s/.test(u) && (r = !0),
                                            A(e, ["MustacheStatement"]) && /\s$/.test(u) && "" !== t && (n = !0)),
                                            [r ? l : "", t, n ? l : ""]
                                        }
                                        return d(u)
                                    }
                                    let a = /^[\t\n\f\r ]*$/.test(u)
                                      , s = !E(e)
                                      , o = !h(e);
                                    if ("ignore" !== t.htmlWhitespaceSensitivity) {
                                        let t = /^[\t\n\f\r ]*/
                                          , i = /[\t\n\f\r ]*$/
                                          , p = o && b(e, ["Template"])
                                          , c = s && b(e, ["Template"]);
                                        if (a) {
                                            if (c || p)
                                                return "";
                                            let t = [l]
                                              , n = q(u);
                                            return n && (t = J(n)),
                                            F(e) && (t = t.map(e=>r(e))),
                                            t
                                        }
                                        let[d] = u.match(t)
                                          , [D] = u.match(i)
                                          , f = [];
                                        if (d) {
                                            f = [l];
                                            let e = q(d);
                                            e && (f = J(e)),
                                            u = u.replace(t, "")
                                        }
                                        let m = [];
                                        if (D) {
                                            if (!p) {
                                                m = [l];
                                                let t = q(D);
                                                t && (m = J(t)),
                                                F(e) && (m = m.map(e=>r(e)))
                                            }
                                            u = u.replace(i, "")
                                        }
                                        return [...f, n(V(u)), ...m]
                                    }
                                    let p = q(u)
                                      , c = q(((v = "string" == typeof (v = u) ? v : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "")
                                      , D = q(((B = "string" == typeof (B = u) ? B : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
                                    if ((s || o) && a && b(e, ["Block", "ElementNode", "Template"]))
                                        return "";
                                    a && p ? (c = Math.min(p, 2),
                                    D = 0) : (A(e, ["BlockStatement", "ElementNode"]) && (D = Math.max(D, 1)),
                                    S(e, ["BlockStatement", "ElementNode"]) && (c = Math.max(c, 1)));
                                    let f = ""
                                      , m = "";
                                    return 0 === D && A(e, ["MustacheStatement"]) && (m = " "),
                                    0 === c && S(e, ["MustacheStatement"]) && (f = " "),
                                    s && (c = 0,
                                    f = ""),
                                    o && (D = 0,
                                    m = ""),
                                    u = u.replace(/^[\t\n\f\r ]+/g, f).replace(/[\t\n\f\r ]+$/, m),
                                    [...J(c), n(V(u)), ...J(D)]
                                }
                            case "MustacheCommentStatement":
                                {
                                    let e = m(M)
                                      , r = g(M)
                                      , n = "~" === t.originalText.charAt(e + 2)
                                      , u = "~" === t.originalText.charAt(r - 3)
                                      , i = M.value.includes("}}") ? "--" : "";
                                    return ["{{", n ? "~" : "", "!", i, M.value, i, u ? "~" : "", "}}"]
                                }
                            case "PathExpression":
                                return M.original;
                            case "BooleanLiteral":
                            case "NumberLiteral":
                                return String(M.value);
                            case "CommentStatement":
                                return ["<!--", M.value, "-->"];
                            case "StringLiteral":
                                if (function(e) {
                                    let t = 0
                                      , r = e.getParentNode(t);
                                    for (; r && x(r, ["SubExpression"]); )
                                        t++,
                                        r = e.getParentNode(t);
                                    return !!(r && x(e.getParentNode(t + 1), ["ConcatStatement"]) && x(e.getParentNode(t + 2), ["AttrNode"]))
                                }(e)) {
                                    let e = t.singleQuote ? '"' : "'";
                                    return U(M.value, e)
                                }
                                return U(M.value, W);
                            case "UndefinedLiteral":
                                return "undefined";
                            case "NullLiteral":
                                return "null";
                            default:
                                throw Error("unknown glimmer type: " + JSON.stringify(M.type))
                            }
                        },
                        massageAstNode: y
                    }
                }
            }), nA = h({
                "src/language-handlebars/parsers.js"() {
                    v()
                }
            }), nv = h({
                "node_modules/linguist-languages/data/Handlebars.json"(e, t) {
                    t.exports = {
                        name: "Handlebars",
                        type: "markup",
                        color: "#f7931e",
                        aliases: ["hbs", "htmlbars"],
                        extensions: [".handlebars", ".hbs"],
                        tmScope: "text.html.handlebars",
                        aceMode: "handlebars",
                        languageId: 155
                    }
                }
            }), nx = h({
                "src/language-handlebars/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = nF()
                      , u = nA()
                      , i = [r(nv(), ()=>({
                        since: "2.3.0",
                        parsers: ["glimmer"],
                        vscodeLanguageIds: ["handlebars"]
                    }))];
                    t.exports = {
                        languages: i,
                        printers: {
                            glimmer: n
                        },
                        parsers: u
                    }
                }
            }), nb = h({
                "src/language-graphql/pragma.js"(e, t) {
                    v(),
                    t.exports = {
                        hasPragma: function(e) {
                            return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(e)
                        },
                        insertPragma: function(e) {
                            return `# @format

` + e
                        }
                    }
                }
            }), nS = h({
                "src/language-graphql/loc.js"(e, t) {
                    v(),
                    t.exports = {
                        locStart: function(e) {
                            return "number" == typeof e.start ? e.start : e.loc && e.loc.start
                        },
                        locEnd: function(e) {
                            return "number" == typeof e.end ? e.end : e.loc && e.loc.end
                        }
                    }
                }
            }), nT = h({
                "src/language-graphql/printer-graphql.js"(e, t) {
                    v();
                    var {builders: {join: r, hardline: n, line: u, softline: i, group: a, indent: s, ifBreak: o}} = W()
                      , {isNextLineEmpty: l, isNonEmptyArray: p} = ec()
                      , {insertPragma: c} = nb()
                      , {locStart: d, locEnd: D} = nS();
                    function f(e, t, n) {
                        if (0 === n.directives.length)
                            return "";
                        let o = r(u, e.map(t, "directives"));
                        return "FragmentDefinition" === n.kind || "OperationDefinition" === n.kind ? a([u, o]) : [" ", a(s([i, o]))]
                    }
                    function m(e, t, r, u) {
                        return e.map((e,u,i)=>{
                            let a = r();
                            return u < i.length - 1 && l(t.originalText, e.getValue(), D) ? [a, n] : a
                        }
                        , u)
                    }
                    function g(e, t, r) {
                        let n = e.getNode()
                          , i = []
                          , {interfaces: a} = n
                          , s = e.map(e=>r(e), "interfaces");
                        for (let e = 0; e < a.length; e++) {
                            let r = a[e];
                            i.push(s[e]);
                            let n = a[e + 1];
                            if (n) {
                                let e = t.originalText.slice(r.loc.end, n.loc.start)
                                  , a = e.includes("#")
                                  , s = e.replace(/#.*/g, "").trim();
                                i.push("," === s ? "," : " &", a ? u : " ")
                            }
                        }
                        return i
                    }
                    function y(e, t) {
                        "StringValue" === e.kind && e.block && !e.value.includes(`
`) && (t.value = t.value.trim())
                    }
                    y.ignoredProperties = new Set(["loc", "comments"]),
                    t.exports = {
                        print: function(e, t, c) {
                            let y = e.getValue();
                            if (!y)
                                return "";
                            if ("string" == typeof y)
                                return y;
                            switch (y.kind) {
                            case "Document":
                                {
                                    let r = [];
                                    return e.each((e,u,i)=>{
                                        r.push(c()),
                                        u !== i.length - 1 && (r.push(n),
                                        l(t.originalText, e.getValue(), D) && r.push(n))
                                    }
                                    , "definitions"),
                                    [...r, n]
                                }
                            case "OperationDefinition":
                                {
                                    let n = "{" !== t.originalText[d(y)]
                                      , u = !!y.name;
                                    return [n ? y.operation : "", n && u ? [" ", c("name")] : "", n && !u && p(y.variableDefinitions) ? " " : "", p(y.variableDefinitions) ? a(["(", s([i, r([o("", ", "), i], e.map(c, "variableDefinitions"))]), i, ")"]) : "", f(e, c, y), y.selectionSet && (n || u) ? " " : "", c("selectionSet")]
                                }
                            case "FragmentDefinition":
                                return ["fragment ", c("name"), p(y.variableDefinitions) ? a(["(", s([i, r([o("", ", "), i], e.map(c, "variableDefinitions"))]), i, ")"]) : "", " on ", c("typeCondition"), f(e, c, y), " ", c("selectionSet")];
                            case "SelectionSet":
                                return ["{", s([n, r(n, m(e, t, c, "selections"))]), n, "}"];
                            case "Field":
                                return a([y.alias ? [c("alias"), ": "] : "", c("name"), y.arguments.length > 0 ? a(["(", s([i, r([o("", ", "), i], m(e, t, c, "arguments"))]), i, ")"]) : "", f(e, c, y), y.selectionSet ? " " : "", c("selectionSet")]);
                            case "Name":
                            case "IntValue":
                            case "FloatValue":
                            case "EnumValue":
                                return y.value;
                            case "StringValue":
                                if (y.block) {
                                    let e = y.value.replace(/"""/g, "\\$&").split(`
`);
                                    return 1 === e.length && (e[0] = e[0].trim()),
                                    e.every(e=>"" === e) && (e.length = 0),
                                    r(n, ['"""', ...e, '"""'])
                                }
                                return ['"', y.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
                            case "BooleanValue":
                                return y.value ? "true" : "false";
                            case "NullValue":
                                return "null";
                            case "Variable":
                                return ["$", c("name")];
                            case "ListValue":
                                return a(["[", s([i, r([o("", ", "), i], e.map(c, "values"))]), i, "]"]);
                            case "ObjectValue":
                                return a(["{", t.bracketSpacing && y.fields.length > 0 ? " " : "", s([i, r([o("", ", "), i], e.map(c, "fields"))]), i, o("", t.bracketSpacing && y.fields.length > 0 ? " " : ""), "}"]);
                            case "ObjectField":
                            case "Argument":
                                return [c("name"), ": ", c("value")];
                            case "Directive":
                                return ["@", c("name"), y.arguments.length > 0 ? a(["(", s([i, r([o("", ", "), i], m(e, t, c, "arguments"))]), i, ")"]) : ""];
                            case "NamedType":
                                return c("name");
                            case "VariableDefinition":
                                return [c("variable"), ": ", c("type"), y.defaultValue ? [" = ", c("defaultValue")] : "", f(e, c, y)];
                            case "ObjectTypeExtension":
                            case "ObjectTypeDefinition":
                                return [c("description"), y.description ? n : "", "ObjectTypeExtension" === y.kind ? "extend " : "", "type ", c("name"), y.interfaces.length > 0 ? [" implements ", ...g(e, t, c)] : "", f(e, c, y), y.fields.length > 0 ? [" {", s([n, r(n, m(e, t, c, "fields"))]), n, "}"] : ""];
                            case "FieldDefinition":
                                return [c("description"), y.description ? n : "", c("name"), y.arguments.length > 0 ? a(["(", s([i, r([o("", ", "), i], m(e, t, c, "arguments"))]), i, ")"]) : "", ": ", c("type"), f(e, c, y)];
                            case "DirectiveDefinition":
                                return [c("description"), y.description ? n : "", "directive ", "@", c("name"), y.arguments.length > 0 ? a(["(", s([i, r([o("", ", "), i], m(e, t, c, "arguments"))]), i, ")"]) : "", y.repeatable ? " repeatable" : "", " on ", r(" | ", e.map(c, "locations"))];
                            case "EnumTypeExtension":
                            case "EnumTypeDefinition":
                                return [c("description"), y.description ? n : "", "EnumTypeExtension" === y.kind ? "extend " : "", "enum ", c("name"), f(e, c, y), y.values.length > 0 ? [" {", s([n, r(n, m(e, t, c, "values"))]), n, "}"] : ""];
                            case "EnumValueDefinition":
                                return [c("description"), y.description ? n : "", c("name"), f(e, c, y)];
                            case "InputValueDefinition":
                                return [c("description"), y.description ? y.description.block ? n : u : "", c("name"), ": ", c("type"), y.defaultValue ? [" = ", c("defaultValue")] : "", f(e, c, y)];
                            case "InputObjectTypeExtension":
                            case "InputObjectTypeDefinition":
                                return [c("description"), y.description ? n : "", "InputObjectTypeExtension" === y.kind ? "extend " : "", "input ", c("name"), f(e, c, y), y.fields.length > 0 ? [" {", s([n, r(n, m(e, t, c, "fields"))]), n, "}"] : ""];
                            case "SchemaExtension":
                                return ["extend schema", f(e, c, y), ...y.operationTypes.length > 0 ? [" {", s([n, r(n, m(e, t, c, "operationTypes"))]), n, "}"] : []];
                            case "SchemaDefinition":
                                return [c("description"), y.description ? n : "", "schema", f(e, c, y), " {", y.operationTypes.length > 0 ? s([n, r(n, m(e, t, c, "operationTypes"))]) : "", n, "}"];
                            case "OperationTypeDefinition":
                                return [c("operation"), ": ", c("type")];
                            case "InterfaceTypeExtension":
                            case "InterfaceTypeDefinition":
                                return [c("description"), y.description ? n : "", "InterfaceTypeExtension" === y.kind ? "extend " : "", "interface ", c("name"), y.interfaces.length > 0 ? [" implements ", ...g(e, t, c)] : "", f(e, c, y), y.fields.length > 0 ? [" {", s([n, r(n, m(e, t, c, "fields"))]), n, "}"] : ""];
                            case "FragmentSpread":
                                return ["...", c("name"), f(e, c, y)];
                            case "InlineFragment":
                                return ["...", y.typeCondition ? [" on ", c("typeCondition")] : "", f(e, c, y), " ", c("selectionSet")];
                            case "UnionTypeExtension":
                            case "UnionTypeDefinition":
                                return a([c("description"), y.description ? n : "", a(["UnionTypeExtension" === y.kind ? "extend " : "", "union ", c("name"), f(e, c, y), y.types.length > 0 ? [" =", o("", " "), s([o([u, "  "]), r([u, "| "], e.map(c, "types"))])] : ""])]);
                            case "ScalarTypeExtension":
                            case "ScalarTypeDefinition":
                                return [c("description"), y.description ? n : "", "ScalarTypeExtension" === y.kind ? "extend " : "", "scalar ", c("name"), f(e, c, y)];
                            case "NonNullType":
                                return [c("type"), "!"];
                            case "ListType":
                                return ["[", c("type"), "]"];
                            default:
                                throw Error("unknown graphql type: " + JSON.stringify(y.kind))
                            }
                        },
                        massageAstNode: y,
                        hasPrettierIgnore: function(e) {
                            var t;
                            let r = e.getValue();
                            return null == r || null === (t = r.comments) || void 0 === t ? void 0 : t.some(e=>"prettier-ignore" === e.value.trim())
                        },
                        insertPragma: c,
                        printComment: function(e) {
                            let t = e.getValue();
                            if ("Comment" === t.kind)
                                return "#" + t.value.trimEnd();
                            throw Error("Not a comment: " + JSON.stringify(t))
                        },
                        canAttachComment: function(e) {
                            return e.kind && "Comment" !== e.kind
                        }
                    }
                }
            }), nB = h({
                "src/language-graphql/options.js"(e, t) {
                    v();
                    var r = rQ();
                    t.exports = {
                        bracketSpacing: r.bracketSpacing
                    }
                }
            }), nN = h({
                "src/language-graphql/parsers.js"() {
                    v()
                }
            }), nw = h({
                "node_modules/linguist-languages/data/GraphQL.json"(e, t) {
                    t.exports = {
                        name: "GraphQL",
                        type: "data",
                        color: "#e10098",
                        extensions: [".graphql", ".gql", ".graphqls"],
                        tmScope: "source.graphql",
                        aceMode: "text",
                        languageId: 139
                    }
                }
            }), nk = h({
                "src/language-graphql/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = nT()
                      , u = nB()
                      , i = nN()
                      , a = [r(nw(), ()=>({
                        since: "1.5.0",
                        parsers: ["graphql"],
                        vscodeLanguageIds: ["graphql"]
                    }))];
                    t.exports = {
                        languages: a,
                        options: u,
                        printers: {
                            graphql: n
                        },
                        parsers: i
                    }
                }
            }), nj = h({
                "node_modules/collapse-white-space/index.js"(e, t) {
                    v(),
                    t.exports = function(e) {
                        return String(e).replace(/\s+/g, " ")
                    }
                }
            }), nP = h({
                "src/language-markdown/loc.js"(e, t) {
                    v(),
                    t.exports = {
                        locStart: function(e) {
                            return e.position.start.offset
                        },
                        locEnd: function(e) {
                            return e.position.end.offset
                        }
                    }
                }
            }), nI = h({
                "src/language-markdown/constants.evaluate.js"(e, t) {
                    t.exports = {
                        cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67]|\ud83c[\ude00\ude50-\ude51]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d])(?:[\\ufe00-\\ufe0f]|\udb40[\udd00-\uddef])?",
                        kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",
                        punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud801[\udd6f]|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb-\udcbc\udcbe-\udcc1\udd40-\udd43\udd74-\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70-\udc71\udef7-\udef8\udfff]|\ud809[\udc70-\udc74]|\ud81a[\ude6e-\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|\ud82f[\udc9f]|\ud836[\ude87-\ude8b]|\ud83a[\udd5e-\udd5f]"
                    }
                }
            }), nO = h({
                "src/language-markdown/utils.js"(e, t) {
                    v();
                    var {getLast: r} = ec()
                      , {locStart: n, locEnd: u} = nP()
                      , {cjkPattern: i, kPattern: a, punctuationPattern: s} = nI()
                      , o = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"]
                      , l = [...o, "tableCell", "paragraph", "heading"]
                      , p = new RegExp(a)
                      , c = new RegExp(s);
                    function d(e, t) {
                        let[,r,n,u] = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
                        return {
                            numberText: r,
                            marker: n,
                            leadingSpaces: u
                        }
                    }
                    t.exports = {
                        mapAst: function(e, t) {
                            return function e(r, n, u) {
                                let i = Object.assign({}, t(r, n, u));
                                return i.children && (i.children = i.children.map((t,r)=>e(t, r, [i, ...u]))),
                                i
                            }(e, null, [])
                        },
                        splitText: function(e, t) {
                            let n = "non-cjk"
                              , u = "cj-letter"
                              , a = "cjk-punctuation"
                              , s = []
                              , o = ("preserve" === t.proseWrap ? e : e.replace(RegExp(`(${i})
(${i})`, "g"), "$1$2")).split(/([\t\n ]+)/);
                            for (let[e,t] of o.entries()) {
                                if (e % 2 == 1) {
                                    s.push({
                                        type: "whitespace",
                                        value: /\n/.test(t) ? `
` : " "
                                    });
                                    continue
                                }
                                if ((0 === e || e === o.length - 1) && "" === t)
                                    continue;
                                let d = t.split(RegExp(`(${i})`));
                                for (let[e,t] of d.entries())
                                    if (!((0 === e || e === d.length - 1) && "" === t)) {
                                        if (e % 2 == 0) {
                                            "" !== t && l({
                                                type: "word",
                                                value: t,
                                                kind: n,
                                                hasLeadingPunctuation: c.test(t[0]),
                                                hasTrailingPunctuation: c.test(r(t))
                                            });
                                            continue
                                        }
                                        l(c.test(t) ? {
                                            type: "word",
                                            value: t,
                                            kind: a,
                                            hasLeadingPunctuation: !0,
                                            hasTrailingPunctuation: !0
                                        } : {
                                            type: "word",
                                            value: t,
                                            kind: p.test(t) ? "k-letter" : u,
                                            hasLeadingPunctuation: !1,
                                            hasTrailingPunctuation: !1
                                        })
                                    }
                            }
                            return s;
                            function l(e) {
                                let t = r(s);
                                !t || "word" !== t.type || ((t.kind !== n || e.kind !== u || t.hasTrailingPunctuation) && (t.kind !== u || e.kind !== n || e.hasLeadingPunctuation) ? t.kind === n && e.kind === a || t.kind === a && e.kind === n || [t.value, e.value].some(e=>/\u3000/.test(e)) || s.push({
                                    type: "whitespace",
                                    value: ""
                                }) : s.push({
                                    type: "whitespace",
                                    value: " "
                                })),
                                s.push(e)
                            }
                        },
                        punctuationPattern: s,
                        getFencedCodeBlockValue: function(e, t) {
                            let {value: r} = e;
                            return e.position.end.offset === t.length && r.endsWith(`
`) && t.endsWith(`
`) ? r.slice(0, -1) : r
                        },
                        getOrderedListItemInfo: d,
                        hasGitDiffFriendlyOrderedList: function(e, t) {
                            if (!e.ordered || e.children.length < 2)
                                return !1;
                            let r = Number(d(e.children[0], t.originalText).numberText)
                              , n = Number(d(e.children[1], t.originalText).numberText);
                            if (0 === r && e.children.length > 2) {
                                let r = Number(d(e.children[2], t.originalText).numberText);
                                return 1 === n && 1 === r
                            }
                            return 1 === n
                        },
                        INLINE_NODE_TYPES: o,
                        INLINE_NODE_WRAPPER_TYPES: l,
                        isAutolink: function(e) {
                            if ((null == e ? void 0 : e.type) !== "link" || 1 !== e.children.length)
                                return !1;
                            let[t] = e.children;
                            return n(e) === n(t) && u(e) === u(t)
                        }
                    }
                }
            }), nL = h({
                "src/language-markdown/embed.js"(e, t) {
                    v();
                    var {inferParserByLanguage: r, getMaxContinuousCount: n} = ec()
                      , {builders: {hardline: u, markAsRoot: i}, utils: {replaceEndOfLine: a}} = W()
                      , s = r5()
                      , {getFencedCodeBlockValue: o} = nO();
                    t.exports = function(e, t, l, p) {
                        let c = e.getValue();
                        if ("code" === c.type && null !== c.lang) {
                            let e = r(c.lang, p);
                            if (e) {
                                let t = p.__inJsTemplate ? "~" : "`"
                                  , r = t.repeat(Math.max(3, n(c.value, t) + 1))
                                  , s = {
                                    parser: e
                                };
                                "tsx" === c.lang && (s.filepath = "dummy.tsx");
                                let d = l(o(c, p.originalText), s, {
                                    stripTrailingHardline: !0
                                });
                                return i([r, c.lang, c.meta ? " " + c.meta : "", u, a(d), u, r])
                            }
                        }
                        switch (c.type) {
                        case "front-matter":
                            return s(c, l);
                        case "importExport":
                            return [l(c.value, {
                                parser: "babel"
                            }, {
                                stripTrailingHardline: !0
                            }), u];
                        case "jsx":
                            return l(`<$>${c.value}</$>`, {
                                parser: "__js_expression",
                                rootMarker: "mdx"
                            }, {
                                stripTrailingHardline: !0
                            })
                        }
                        return null
                    }
                }
            }), n_ = h({
                "src/language-markdown/pragma.js"(e, t) {
                    v();
                    var r = ne()
                      , n = ["format", "prettier"];
                    function u(e) {
                        let t = `@(${n.join("|")})`
                          , r = RegExp(`<!--\\s*${t}\\s*-->|{\\s*\\/\\*\\s*${t}\\s*\\*\\/\\s*}|<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${t}[^\\S
]*($|
)[\\s\\S]*
.*-->`, "m")
                          , u = e.match(r);
                        return (null == u ? void 0 : u.index) === 0
                    }
                    t.exports = {
                        startWithPragma: u,
                        hasPragma: e=>u(r(e).content.trimStart()),
                        insertPragma: e=>{
                            let t = r(e)
                              , u = `<!-- @${n[0]} -->`;
                            return t.frontMatter ? `${t.frontMatter.raw}

${u}

${t.content}` : `${u}

${t.content}`
                        }
                    }
                }
            }), nM = h({
                "src/language-markdown/print-preprocess.js"(e, t) {
                    v();
                    var r = N()
                      , {getOrderedListItemInfo: n, mapAst: u, splitText: i} = nO()
                      , a = /^.$/su;
                    function s(e, t, n) {
                        return u(e, e=>{
                            if (!e.children)
                                return e;
                            let u = e.children.reduce((e,u)=>{
                                let i = r(e);
                                return i && t(i, u) ? e.splice(-1, 1, n(i, u)) : e.push(u),
                                e
                            }
                            , []);
                            return Object.assign(Object.assign({}, e), {}, {
                                children: u
                            })
                        }
                        )
                    }
                    t.exports = function(e, t) {
                        var r, o, l, p;
                        return l = e = function(e, t) {
                            return u(e, (e,u,i)=>{
                                if ("list" === e.type && e.children.length > 0) {
                                    for (let t = 0; t < i.length; t++) {
                                        let r = i[t];
                                        if ("list" === r.type && !r.isAligned)
                                            return e.isAligned = !1,
                                            e
                                    }
                                    e.isAligned = function(e) {
                                        if (!e.ordered)
                                            return !0;
                                        let[u,i] = e.children;
                                        if (n(u, t.originalText).leadingSpaces.length > 1)
                                            return !0;
                                        let a = r(u);
                                        return -1 !== a && (1 === e.children.length ? a % t.tabWidth == 0 : a === r(i) && (a % t.tabWidth == 0 || n(i, t.originalText).leadingSpaces.length > 1))
                                    }(e)
                                }
                                return e
                            }
                            );
                            function r(e) {
                                return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1
                            }
                        }((r = e = s(e = u(e, e=>"text" === e.type && "*" !== e.value && "_" !== e.value && a.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length ? Object.assign(Object.assign({}, e), {}, {
                            value: t.originalText.slice(e.position.start.offset, e.position.end.offset)
                        }) : e), (e,t)=>"text" === e.type && "text" === t.type, (e,t)=>({
                            type: "text",
                            value: e.value + t.value,
                            position: {
                                start: e.position.start,
                                end: t.position.end
                            }
                        })),
                        o = e = u(r, e=>"inlineCode" !== e.type || "preserve" === t.proseWrap ? e : Object.assign(Object.assign({}, e), {}, {
                            value: e.value.replace(/\s+/g, " ")
                        })),
                        e = u(o, (e,r,n)=>{
                            if ("code" === e.type) {
                                let r = /^\n?(?: {4,}|\t)/.test(t.originalText.slice(e.position.start.offset, e.position.end.offset));
                                if (e.isIndented = r,
                                r)
                                    for (let e = 0; e < n.length; e++) {
                                        let t = n[e];
                                        if (t.hasIndentedCodeblock)
                                            break;
                                        "list" === t.type && (t.hasIndentedCodeblock = !0)
                                    }
                            }
                            return e
                        }
                        )), t),
                        p = e = u(l, (e,r,n)=>{
                            let[u] = n;
                            if ("text" !== e.type)
                                return e;
                            let {value: a} = e;
                            return "paragraph" === u.type && (0 === r && (a = a.trimStart()),
                            r === u.children.length - 1 && (a = a.trimEnd())),
                            {
                                type: "sentence",
                                position: e.position,
                                children: i(a, t)
                            }
                        }
                        ),
                        e = s(e = u(p, e=>"import" !== e.type && "export" !== e.type ? e : Object.assign(Object.assign({}, e), {}, {
                            type: "importExport"
                        })), (e,t)=>"importExport" === e.type && "importExport" === t.type, (e,t)=>({
                            type: "importExport",
                            value: e.value + `

` + t.value,
                            position: {
                                start: e.position.start,
                                end: t.position.end
                            }
                        }))
                    }
                }
            }), n$ = h({
                "src/language-markdown/clean.js"(e, t) {
                    v();
                    var r = nj()
                      , {isFrontMatterNode: n} = ec()
                      , {startWithPragma: u} = n_()
                      , i = new Set(["position", "raw"]);
                    function a(e, t, i) {
                        if (("front-matter" === e.type || "code" === e.type || "yaml" === e.type || "import" === e.type || "export" === e.type || "jsx" === e.type) && delete t.value,
                        "list" === e.type && delete t.isAligned,
                        ("list" === e.type || "listItem" === e.type) && (delete t.spread,
                        delete t.loose),
                        "text" === e.type || ("inlineCode" === e.type && (t.value = e.value.replace(/[\t\n ]+/g, " ")),
                        "wikiLink" === e.type && (t.value = e.value.trim().replace(/[\t\n]+/g, " ")),
                        ("definition" === e.type || "linkReference" === e.type || "imageReference" === e.type) && (t.label = r(e.label)),
                        ("definition" === e.type || "link" === e.type || "image" === e.type) && e.title && (t.title = e.title.replace(/\\(["')])/g, "$1")),
                        i && "root" === i.type && i.children.length > 0 && (i.children[0] === e || n(i.children[0]) && i.children[1] === e) && "html" === e.type && u(e.value)))
                            return null
                    }
                    a.ignoredProperties = i,
                    t.exports = a
                }
            }), nR = h({
                "src/language-markdown/printer-markdown.js"(e, t) {
                    v();
                    var r = nj()
                      , {getLast: n, getMinNotPresentContinuousCount: u, getMaxContinuousCount: i, getStringWidth: a, isNonEmptyArray: s} = ec()
                      , {builders: {breakParent: o, join: l, line: p, literalline: c, markAsRoot: d, hardline: D, softline: f, ifBreak: m, fill: g, align: y, indent: h, group: E, hardlineWithoutBreakParent: C}, utils: {normalizeDoc: F, replaceTextEndOfLine: A}, printer: {printDocToString: x}} = W()
                      , b = nL()
                      , {insertPragma: S} = n_()
                      , {locStart: T, locEnd: B} = nP()
                      , N = nM()
                      , w = n$()
                      , {getFencedCodeBlockValue: k, hasGitDiffFriendlyOrderedList: j, splitText: P, punctuationPattern: I, INLINE_NODE_TYPES: O, INLINE_NODE_WRAPPER_TYPES: L, isAutolink: _} = nO()
                      , M = new Set(["importExport"])
                      , $ = ["heading", "tableCell", "link", "wikiLink"]
                      , R = new Set(["listItem", "definition", "footnoteDefinition"]);
                    function V(e, t, r, n) {
                        let u = e.getValue()
                          , i = null === u.checked ? "" : u.checked ? "[x] " : "[ ] ";
                        return [i, G(e, t, r, {
                            processor: (e,u)=>{
                                var a;
                                if (0 === u && "list" !== e.getValue().type)
                                    return y(" ".repeat(i.length), r());
                                let s = " ".repeat((a = t.tabWidth - n.length) < 0 ? 0 : a > 3 ? 3 : a);
                                return [s, y(s, r())]
                            }
                        })]
                    }
                    function q(e, t) {
                        return function(e, t, r) {
                            let n = -1;
                            for (let u of t.children)
                                if (u.type === e.type && r(u) ? n++ : n = -1,
                                u === e)
                                    return n
                        }(e, t, t=>t.ordered === e.ordered)
                    }
                    function J(e, t) {
                        let r = Array.isArray(t) ? t : [t], n = -1, u;
                        for (; u = e.getParentNode(++n); )
                            if (r.includes(u.type))
                                return n;
                        return -1
                    }
                    function U(e, t) {
                        let r = J(e, t);
                        return -1 === r ? null : e.getParentNode(r)
                    }
                    function H(e, t, r) {
                        if ("preserve" === r.proseWrap && t === `
`)
                            return D;
                        let n = "always" === r.proseWrap && !U(e, $);
                        return "" !== t ? n ? p : " " : n ? f : ""
                    }
                    function G(e, t, r) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, {postprocessor: u} = n, i = n.processor || (()=>r()), a = e.getValue(), s = [], o;
                        return e.each((e,r)=>{
                            let n = e.getValue()
                              , u = i(e, r);
                            if (!1 !== u) {
                                var l, p, c;
                                let e, r, i, d, f, m, g, y, h, E = {
                                    parts: s,
                                    prevNode: o,
                                    parentNode: a,
                                    options: t
                                };
                                e = 0 === E.parts.length,
                                r = O.includes(n.type),
                                i = "html" === n.type && L.includes(E.parentNode.type),
                                e || r || i || (s.push(D),
                                o && M.has(o.type) || (d = (E.prevNode && E.prevNode.type) === n.type && R.has(n.type),
                                f = "listItem" === E.parentNode.type && !E.parentNode.loose,
                                m = (null === (l = E.prevNode) || void 0 === l ? void 0 : l.type) === "listItem" && E.prevNode.loose,
                                g = "next" === z(E.prevNode),
                                y = "html" === n.type && (null === (p = E.prevNode) || void 0 === p ? void 0 : p.type) === "html" && E.prevNode.position.end.line + 1 === n.position.start.line,
                                h = "html" === n.type && "listItem" === E.parentNode.type && (null === (c = E.prevNode) || void 0 === c ? void 0 : c.type) === "paragraph" && E.prevNode.position.end.line + 1 === n.position.start.line,
                                (m || !(d || f || g || y || h) || K(n, E)) && s.push(D)),
                                K(n, E) && s.push(D)),
                                s.push(u),
                                o = n
                            }
                        }
                        , "children"),
                        u ? u(s) : s
                    }
                    function X(e) {
                        return "html" === e.type ? e.value : "paragraph" === e.type && Array.isArray(e.children) && 1 === e.children.length && "esComment" === e.children[0].type ? ["{/* ", e.children[0].value, " */}"] : void 0
                    }
                    function z(e) {
                        let t;
                        if ("html" === e.type)
                            t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
                        else {
                            let r;
                            "esComment" === e.type ? r = e : "paragraph" === e.type && 1 === e.children.length && "esComment" === e.children[0].type && (r = e.children[0]),
                            r && (t = r.value.match(/^prettier-ignore(?:-(start|end))?$/))
                        }
                        return !!t && (t[1] || "next")
                    }
                    function K(e, t) {
                        let r = t.prevNode && "list" === t.prevNode.type
                          , n = "code" === e.type && e.isIndented;
                        return r && n
                    }
                    function Q(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                          , r = [" ", ...Array.isArray(t) ? t : [t]];
                        return new RegExp(r.map(e=>`\\${e}`).join("|")).test(e) ? `<${e}>` : e
                    }
                    function Y(e, t) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (!e)
                            return "";
                        if (r)
                            return " " + Y(e, t, !1);
                        if ((e = e.replace(/\\(["')])/g, "$1")).includes('"') && e.includes("'") && !e.includes(")"))
                            return `(${e})`;
                        let n = e.split("'").length - 1
                          , u = e.split('"').length - 1
                          , i = n > u ? '"' : u > n || t.singleQuote ? "'" : '"';
                        return `${i}${e = (e = e.replace(/\\/, "\\\\")).replace(RegExp(`(${i})`, "g"), "\\$1")}${i}`
                    }
                    function Z(e) {
                        return `[${r(e.label)}]`
                    }
                    function ee(e) {
                        return `[^${e.label}]`
                    }
                    t.exports = {
                        preprocess: N,
                        print: function(e, t, r) {
                            let v, b = e.getValue();
                            if ((v = U(e, ["linkReference", "imageReference"])) && ("linkReference" !== v.type || "full" !== v.referenceType))
                                return P(t.originalText.slice(b.position.start.offset, b.position.end.offset), t).map(r=>"word" === r.type ? r.value : "" === r.value ? "" : H(e, r.value, t));
                            switch (b.type) {
                            case "front-matter":
                                return t.originalText.slice(b.position.start.offset, b.position.end.offset);
                            case "root":
                                return 0 === b.children.length ? "" : [F(function(e, t, r) {
                                    let n = []
                                      , u = null
                                      , {children: i} = e.getValue();
                                    for (let[e,t] of i.entries())
                                        switch (z(t)) {
                                        case "start":
                                            null === u && (u = {
                                                index: e,
                                                offset: t.position.end.offset
                                            });
                                            break;
                                        case "end":
                                            null !== u && (n.push({
                                                start: u,
                                                end: {
                                                    index: e,
                                                    offset: t.position.start.offset
                                                }
                                            }),
                                            u = null)
                                        }
                                    return G(e, t, r, {
                                        processor: (e,u)=>{
                                            if (n.length > 0) {
                                                let e = n[0];
                                                if (u === e.start.index)
                                                    return [X(i[e.start.index]), t.originalText.slice(e.start.offset, e.end.offset), X(i[e.end.index])];
                                                if (e.start.index < u && u < e.end.index)
                                                    return !1;
                                                if (u === e.end.index)
                                                    return n.shift(),
                                                    !1
                                            }
                                            return r()
                                        }
                                    })
                                }(e, t, r)), M.has(function(e) {
                                    let t = e;
                                    for (; s(t.children); )
                                        t = n(t.children);
                                    return t
                                }(b).type) ? "" : D];
                            case "paragraph":
                                return G(e, t, r, {
                                    postprocessor: g
                                });
                            case "sentence":
                                return G(e, t, r);
                            case "word":
                                {
                                    let t = b.value.replace(/\*/g, "\\$&").replace(RegExp(`(^|${I})(_+)|(_+)(${I}|$)`, "g"), (e,t,r,n,u)=>(r ? `${t}${r}` : `${n}${u}`).replace(/_/g, "\\_"))
                                      , r = (e,t,r)=>"sentence" === e.type && 0 === r
                                      , n = (e,t,r)=>_(e.children[r - 1]);
                                    return t !== b.value && (e.match(void 0, r, n) || e.match(void 0, r, (e,t,r)=>"emphasis" === e.type && 0 === r, n)) && (t = t.replace(/^(\\?[*_])+/, e=>e.replace(/\\/g, ""))),
                                    t
                                }
                            case "whitespace":
                                {
                                    let r = e.getParentNode()
                                      , n = r.children.indexOf(b)
                                      , u = r.children[n + 1]
                                      , i = u && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(u.value) ? "never" : t.proseWrap;
                                    return H(e, b.value, {
                                        proseWrap: i
                                    })
                                }
                            case "emphasis":
                                {
                                    let u;
                                    if (_(b.children[0]))
                                        u = t.originalText[b.position.start.offset];
                                    else {
                                        let t = e.getParentNode()
                                          , r = t.children.indexOf(b)
                                          , i = t.children[r - 1]
                                          , a = t.children[r + 1];
                                        u = i && "sentence" === i.type && i.children.length > 0 && "word" === n(i.children).type && !n(i.children).hasTrailingPunctuation || a && "sentence" === a.type && a.children.length > 0 && "word" === a.children[0].type && !a.children[0].hasLeadingPunctuation || U(e, "emphasis") ? "*" : "_"
                                    }
                                    return [u, G(e, t, r), u]
                                }
                            case "strong":
                                return ["**", G(e, t, r), "**"];
                            case "delete":
                                return ["~~", G(e, t, r), "~~"];
                            case "inlineCode":
                                {
                                    let e = u(b.value, "`")
                                      , t = "`".repeat(e || 1)
                                      , r = e && !/^\s/.test(b.value) ? " " : "";
                                    return [t, r, b.value, r, t]
                                }
                            case "wikiLink":
                                return ["[[", "preserve" === t.proseWrap ? b.value : b.value.replace(/[\t\n]+/g, " "), "]]"];
                            case "link":
                                switch (t.originalText[b.position.start.offset]) {
                                case "<":
                                    {
                                        let e = "mailto:";
                                        return ["<", b.url.startsWith(e) && t.originalText.slice(b.position.start.offset + 1, b.position.start.offset + 1 + e.length) !== e ? b.url.slice(e.length) : b.url, ">"]
                                    }
                                case "[":
                                    return ["[", G(e, t, r), "](", Q(b.url, ")"), Y(b.title, t), ")"];
                                default:
                                    return t.originalText.slice(b.position.start.offset, b.position.end.offset)
                                }
                            case "image":
                                return ["![", b.alt || "", "](", Q(b.url, ")"), Y(b.title, t), ")"];
                            case "blockquote":
                                return ["> ", y("> ", G(e, t, r))];
                            case "heading":
                                return ["#".repeat(b.depth) + " ", G(e, t, r)];
                            case "code":
                                {
                                    if (b.isIndented) {
                                        let e = " ".repeat(4);
                                        return y(e, [e, ...A(b.value, D)])
                                    }
                                    let e = t.__inJsTemplate ? "~" : "`"
                                      , r = e.repeat(Math.max(3, i(b.value, e) + 1));
                                    return [r, b.lang || "", b.meta ? " " + b.meta : "", D, ...A(k(b, t.originalText), D), D, r]
                                }
                            case "html":
                                {
                                    let t = e.getParentNode()
                                      , r = "root" === t.type && n(t.children) === b ? b.value.trimEnd() : b.value
                                      , u = /^<!--.*-->$/s.test(r);
                                    return A(r, u ? D : d(c))
                                }
                            case "list":
                                {
                                    let n = q(b, e.getParentNode())
                                      , u = j(b, t);
                                    return G(e, t, r, {
                                        processor: (e,i)=>{
                                            let a, s, o;
                                            let l = (a = b.ordered ? (0 === i ? b.start : u ? 1 : b.start + i) + (n % 2 == 0 ? ". " : ") ") : n % 2 == 0 ? "- " : "* ",
                                            b.isAligned || b.hasIndentedCodeblock ? (o = 0 == (s = a.length % t.tabWidth) ? 0 : t.tabWidth - s,
                                            a + " ".repeat(o >= 4 ? 0 : o)) : a)
                                              , p = e.getValue();
                                            return 2 === p.children.length && "html" === p.children[1].type && p.children[0].position.start.column !== p.children[1].position.start.column ? [l, V(e, t, r, l)] : [l, y(" ".repeat(l.length), V(e, t, r, l))]
                                        }
                                    })
                                }
                            case "thematicBreak":
                                {
                                    let t = J(e, "list");
                                    return -1 === t ? "---" : q(e.getParentNode(t), e.getParentNode(t + 1)) % 2 == 0 ? "***" : "---"
                                }
                            case "linkReference":
                                return ["[", G(e, t, r), "]", "full" === b.referenceType ? Z(b) : "collapsed" === b.referenceType ? "[]" : ""];
                            case "imageReference":
                                if ("full" === b.referenceType)
                                    return ["![", b.alt || "", "]", Z(b)];
                                return ["![", b.alt, "]", "collapsed" === b.referenceType ? "[]" : ""];
                            case "definition":
                                {
                                    let e = "always" === t.proseWrap ? p : " ";
                                    return E([Z(b), ":", h([e, Q(b.url), null === b.title ? "" : [e, Y(b.title, t, !1)]])])
                                }
                            case "footnote":
                                return ["[^", G(e, t, r), "]"];
                            case "footnoteReference":
                                return ee(b);
                            case "footnoteDefinition":
                                {
                                    let n = e.getParentNode().children[e.getName() + 1]
                                      , u = 1 === b.children.length && "paragraph" === b.children[0].type && ("never" === t.proseWrap || "preserve" === t.proseWrap && b.children[0].position.start.line === b.children[0].position.end.line);
                                    return [ee(b), ": ", u ? G(e, t, r) : E([y(" ".repeat(4), G(e, t, r, {
                                        processor: (e,t)=>0 === t ? E([f, r()]) : r()
                                    })), n && "footnoteDefinition" === n.type ? f : ""])]
                                }
                            case "table":
                                return function(e, t, r) {
                                    let n = e.getValue()
                                      , u = []
                                      , i = e.map(e=>e.map((e,n)=>{
                                        let i = x(r(), t).formatted
                                          , s = a(i);
                                        return u[n] = Math.max(u[n] || 3, s),
                                        {
                                            text: i,
                                            width: s
                                        }
                                    }
                                    , "children"), "children")
                                      , s = p(!1);
                                    if ("never" !== t.proseWrap)
                                        return [o, s];
                                    return [o, E(m(p(!0), s))];
                                    function p(e) {
                                        let t = [c(i[0], e), `| ${u.map((t,r)=>{
                                            let u = n.align[r];
                                            return `${"center" === u || "left" === u ? ":" : "-"}${e ? "-" : "-".repeat(t - 2)}${"center" === u || "right" === u ? ":" : "-"}`
                                        }
                                        ).join(" | ")} |`];
                                        return i.length > 1 && t.push(l(C, i.slice(1).map(t=>c(t, e)))),
                                        l(C, t)
                                    }
                                    function c(e, t) {
                                        return `| ${e.map((e,r)=>{
                                            let {text: i, width: a} = e;
                                            if (t)
                                                return i;
                                            let s = u[r] - a
                                              , o = n.align[r]
                                              , l = 0;
                                            return "right" === o ? l = s : "center" === o && (l = Math.floor(s / 2)),
                                            `${" ".repeat(l)}${i}${" ".repeat(s - l)}`
                                        }
                                        ).join(" | ")} |`
                                    }
                                }(e, t, r);
                            case "tableCell":
                                return G(e, t, r);
                            case "break":
                                return /\s/.test(t.originalText[b.position.start.offset]) ? ["  ", d(c)] : ["\\", D];
                            case "liquidNode":
                                return A(b.value, D);
                            case "importExport":
                                return [b.value, D];
                            case "esComment":
                                return ["{/* ", b.value, " */}"];
                            case "jsx":
                                return b.value;
                            case "math":
                                return ["$$", D, b.value ? [...A(b.value, D), D] : "", "$$"];
                            case "inlineMath":
                                return t.originalText.slice(T(b), B(b));
                            default:
                                throw Error(`Unknown markdown type ${JSON.stringify(b.type)}`)
                            }
                        },
                        embed: b,
                        massageAstNode: w,
                        hasPrettierIgnore: function(e) {
                            let t = Number(e.getName());
                            return 0 !== t && "next" === z(e.getParentNode().children[t - 1])
                        },
                        insertPragma: S
                    }
                }
            }), nV = h({
                "src/language-markdown/options.js"(e, t) {
                    v();
                    var r = rQ();
                    t.exports = {
                        proseWrap: r.proseWrap,
                        singleQuote: r.singleQuote
                    }
                }
            }), nW = h({
                "src/language-markdown/parsers.js"() {
                    v()
                }
            }), nq = h({
                "node_modules/linguist-languages/data/Markdown.json"(e, t) {
                    t.exports = {
                        name: "Markdown",
                        type: "prose",
                        color: "#083fa1",
                        aliases: ["pandoc"],
                        aceMode: "markdown",
                        codemirrorMode: "gfm",
                        codemirrorMimeType: "text/x-gfm",
                        wrap: !0,
                        extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"],
                        filenames: ["contents.lr"],
                        tmScope: "source.gfm",
                        languageId: 222
                    }
                }
            }), nJ = h({
                "src/language-markdown/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = nR()
                      , u = nV()
                      , i = nW()
                      , a = [r(nq(), e=>({
                        since: "1.8.0",
                        parsers: ["markdown"],
                        vscodeLanguageIds: ["markdown"],
                        filenames: [...e.filenames, "README"],
                        extensions: e.extensions.filter(e=>".mdx" !== e)
                    })), r(nq(), ()=>({
                        name: "MDX",
                        since: "1.15.0",
                        parsers: ["mdx"],
                        vscodeLanguageIds: ["mdx"],
                        filenames: [],
                        extensions: [".mdx"]
                    }))];
                    t.exports = {
                        languages: a,
                        options: u,
                        printers: {
                            mdast: n
                        },
                        parsers: i
                    }
                }
            }), nU = h({
                "src/language-html/clean.js"(e, t) {
                    v();
                    var {isFrontMatterNode: r} = ec()
                      , n = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
                    function u(e, t) {
                        if ("text" === e.type || "comment" === e.type || r(e) || "yaml" === e.type || "toml" === e.type)
                            return null;
                        "attribute" === e.type && delete t.value,
                        "docType" === e.type && delete t.value
                    }
                    u.ignoredProperties = n,
                    t.exports = u
                }
            }), nH = h({
                "src/language-html/constants.evaluate.js"(e, t) {
                    t.exports = {
                        CSS_DISPLAY_TAGS: {
                            area: "none",
                            base: "none",
                            basefont: "none",
                            datalist: "none",
                            head: "none",
                            link: "none",
                            meta: "none",
                            noembed: "none",
                            noframes: "none",
                            param: "block",
                            rp: "none",
                            script: "block",
                            source: "block",
                            style: "none",
                            template: "inline",
                            track: "block",
                            title: "none",
                            html: "block",
                            body: "block",
                            address: "block",
                            blockquote: "block",
                            center: "block",
                            div: "block",
                            figure: "block",
                            figcaption: "block",
                            footer: "block",
                            form: "block",
                            header: "block",
                            hr: "block",
                            legend: "block",
                            listing: "block",
                            main: "block",
                            p: "block",
                            plaintext: "block",
                            pre: "block",
                            xmp: "block",
                            slot: "contents",
                            ruby: "ruby",
                            rt: "ruby-text",
                            article: "block",
                            aside: "block",
                            h1: "block",
                            h2: "block",
                            h3: "block",
                            h4: "block",
                            h5: "block",
                            h6: "block",
                            hgroup: "block",
                            nav: "block",
                            section: "block",
                            dir: "block",
                            dd: "block",
                            dl: "block",
                            dt: "block",
                            ol: "block",
                            ul: "block",
                            li: "list-item",
                            table: "table",
                            caption: "table-caption",
                            colgroup: "table-column-group",
                            col: "table-column",
                            thead: "table-header-group",
                            tbody: "table-row-group",
                            tfoot: "table-footer-group",
                            tr: "table-row",
                            td: "table-cell",
                            th: "table-cell",
                            fieldset: "block",
                            button: "inline-block",
                            details: "block",
                            summary: "block",
                            dialog: "block",
                            meter: "inline-block",
                            progress: "inline-block",
                            object: "inline-block",
                            video: "inline-block",
                            audio: "inline-block",
                            select: "inline-block",
                            option: "block",
                            optgroup: "block"
                        },
                        CSS_DISPLAY_DEFAULT: "inline",
                        CSS_WHITE_SPACE_TAGS: {
                            listing: "pre",
                            plaintext: "pre",
                            pre: "pre",
                            xmp: "pre",
                            nobr: "nowrap",
                            table: "initial",
                            textarea: "pre-wrap"
                        },
                        CSS_WHITE_SPACE_DEFAULT: "normal"
                    }
                }
            }), nG = h({
                "src/language-html/utils/is-unknown-namespace.js"(e, t) {
                    v(),
                    t.exports = function(e) {
                        return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace)
                    }
                }
            }), nX = h({
                "src/language-html/utils/index.js"(e, t) {
                    v();
                    var {inferParserByLanguage: r, isFrontMatterNode: n} = ec()
                      , {builders: {line: u, hardline: i, join: a}, utils: {getDocParts: s, replaceTextEndOfLine: o}} = W()
                      , {CSS_DISPLAY_TAGS: l, CSS_DISPLAY_DEFAULT: p, CSS_WHITE_SPACE_TAGS: c, CSS_WHITE_SPACE_DEFAULT: d} = nH()
                      , D = nG()
                      , f = new Set(["	", `
`, "\f", "\r", " "])
                      , m = e=>e.replace(/^[\t\n\f\r ]+/, "")
                      , g = e=>e.replace(/[\t\n\f\r ]+$/, "")
                      , y = e=>m(g(e))
                      , h = e=>e.replace(/^[\t\f\r ]*\n/g, "")
                      , E = e=>h(g(e))
                      , C = e=>e.split(/[\t\n\f\r ]+/)
                      , F = e=>e.match(/^[\t\n\f\r ]*/)[0]
                      , A = e=>{
                        let[,t,r,n] = e.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
                        return {
                            leadingWhitespace: t,
                            trailingWhitespace: n,
                            text: r
                        }
                    }
                      , x = e=>/[\t\n\f\r ]/.test(e);
                    function b(e) {
                        return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || D(e) && ("script" === e.name || "style" === e.name))
                    }
                    function S(e) {
                        return O(e).startsWith("pre")
                    }
                    function T(e) {
                        return "element" === e.type && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay)
                    }
                    function B(e) {
                        return k(e) || "element" === e.type && "br" === e.fullName || N(e) && w(e)
                    }
                    function N(e) {
                        return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line)
                    }
                    function w(e) {
                        return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line)
                    }
                    function k(e) {
                        switch (e.type) {
                        case "ieConditionalComment":
                        case "comment":
                        case "directive":
                            return !0;
                        case "element":
                            return ["script", "select"].includes(e.name)
                        }
                        return !1
                    }
                    function j(e) {
                        let {type: t, lang: r} = e.attrMap;
                        return "module" === t || "text/javascript" === t || "text/babel" === t || "application/javascript" === t || "jsx" === r ? "babel" : "application/x-typescript" === t || "ts" === r || "tsx" === r ? "typescript" : "text/markdown" === t ? "markdown" : "text/html" === t ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) || "speculationrules" === t ? "json" : "text/x-handlebars-template" === t ? "glimmer" : void 0
                    }
                    function P(e) {
                        return "block" === e || "list-item" === e || e.startsWith("table")
                    }
                    function I(e) {
                        return O(e).startsWith("pre")
                    }
                    function O(e) {
                        return "element" === e.type && (!e.namespace || D(e)) && c[e.name] || d
                    }
                    function L(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                            let t = Number.POSITIVE_INFINITY;
                            for (let r of e.split(`
`)) {
                                if (0 === r.length)
                                    continue;
                                if (!f.has(r[0]))
                                    return 0;
                                let e = F(r).length;
                                r.length !== e && e < t && (t = e)
                            }
                            return t === Number.POSITIVE_INFINITY ? 0 : t
                        }(e);
                        return 0 === t ? e : e.split(`
`).map(e=>e.slice(t)).join(`
`)
                    }
                    var _ = new Set(["template", "style", "script"]);
                    function M(e, t) {
                        return $(e, t) && !_.has(e.fullName)
                    }
                    function $(e, t) {
                        return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase()
                    }
                    function R(e, t) {
                        return $(e, t) && (M(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang)
                    }
                    t.exports = {
                        htmlTrim: y,
                        htmlTrimPreserveIndentation: E,
                        hasHtmlWhitespace: x,
                        getLeadingAndTrailingHtmlWhitespace: A,
                        canHaveInterpolation: function(e) {
                            return e.children && !b(e)
                        },
                        countChars: function(e, t) {
                            let r = 0;
                            for (let n = 0; n < e.length; n++)
                                e[n] === t && r++;
                            return r
                        },
                        countParents: function(e, t) {
                            let r = 0;
                            for (let n = e.stack.length - 1; n >= 0; n--) {
                                let u = e.stack[n];
                                u && "object" == typeof u && !Array.isArray(u) && t(u) && r++
                            }
                            return r
                        },
                        dedentString: L,
                        forceBreakChildren: T,
                        forceBreakContent: function(e) {
                            return T(e) || "element" === e.type && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some(e=>e.children && e.children.some(e=>"text" !== e.type))) || e.firstChild && e.firstChild === e.lastChild && "text" !== e.firstChild.type && N(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || w(e.lastChild))
                        },
                        forceNextEmptyLine: function(e) {
                            return n(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line
                        },
                        getLastDescendant: function e(t) {
                            return t.lastChild ? e(t.lastChild) : t
                        },
                        getNodeCssStyleDisplay: function(e, t) {
                            if (e.prev && "comment" === e.prev.type) {
                                let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
                                if (t)
                                    return t[1]
                            }
                            let r = !1;
                            if ("element" === e.type && "svg" === e.namespace) {
                                if (!function(e, t) {
                                    let r = e;
                                    for (; r; ) {
                                        if (t(r))
                                            return !0;
                                        r = r.parent
                                    }
                                    return !1
                                }(e, e=>"svg:foreignObject" === e.fullName))
                                    return "svg" === e.name ? "inline-block" : "block";
                                r = !0
                            }
                            switch (t.htmlWhitespaceSensitivity) {
                            case "strict":
                                return "inline";
                            case "ignore":
                                return "block";
                            default:
                                return "vue" === t.parser && e.parent && "root" === e.parent.type ? "block" : "element" === e.type && (!e.namespace || r || D(e)) && l[e.name] || p
                            }
                        },
                        getNodeCssStyleWhiteSpace: O,
                        hasPrettierIgnore: function(e) {
                            var t;
                            return "attribute" !== e.type && !!e.parent && !!e.prev && "comment" === (t = e.prev).type && "prettier-ignore" === t.value.trim()
                        },
                        inferScriptParser: function(e, t) {
                            return "script" !== e.name || e.attrMap.src ? "style" === e.name ? function(e, t) {
                                let {lang: n} = e.attrMap;
                                return n && "postcss" !== n && "css" !== n ? "scss" === n ? "scss" : "less" === n ? "less" : "stylus" === n ? r("stylus", t) : void 0 : "css"
                            }(e, t) : t && R(e, t) ? j(e) || !("src"in e.attrMap) && r(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? j(e) : "babel"
                        },
                        isVueCustomBlock: M,
                        isVueNonHtmlBlock: R,
                        isVueScriptTag: function(e, t) {
                            return $(e, t) && "script" === e.name
                        },
                        isVueSlotAttribute: function(e) {
                            let t = e.fullName;
                            return "#" === t.charAt(0) || "slot-scope" === t || "v-slot" === t || t.startsWith("v-slot:")
                        },
                        isVueSfcBindingsAttribute: function(e, t) {
                            let r = e.parent;
                            if (!$(r, t))
                                return !1;
                            let n = r.fullName
                              , u = e.fullName;
                            return "script" === n && "setup" === u || "style" === n && "vars" === u
                        },
                        isVueSfcBlock: $,
                        isDanglingSpaceSensitiveNode: function(e) {
                            var t;
                            return !P(t = e.cssDisplay) && "inline-block" !== t && !b(e)
                        },
                        isIndentationSensitiveNode: S,
                        isLeadingSpaceSensitiveNode: function(e, t) {
                            var r;
                            let u = !n(e) && (("text" === e.type || "interpolation" === e.type) && !!e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type) || !!e.parent && "none" !== e.parent.cssDisplay && (!!I(e.parent) || !(!e.prev && ("root" === e.parent.type || I(e) && e.parent || b(e.parent) || M(e.parent, t) || !(!P(r = e.parent.cssDisplay) && "inline-block" !== r)) || e.prev && P(e.prev.cssDisplay))));
                            return u && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : u
                        },
                        isPreLikeNode: I,
                        isScriptLikeTag: b,
                        isTextLikeNode: function(e) {
                            return "text" === e.type || "comment" === e.type
                        },
                        isTrailingSpaceSensitiveNode: function(e, t) {
                            var r;
                            return !n(e) && (("text" === e.type || "interpolation" === e.type) && !!e.next && ("text" === e.next.type || "interpolation" === e.next.type) || !!e.parent && "none" !== e.parent.cssDisplay && (!!I(e.parent) || !(!e.next && ("root" === e.parent.type || I(e) && e.parent || b(e.parent) || M(e.parent, t) || !(!P(r = e.parent.cssDisplay) && "inline-block" !== r)) || e.next && P(e.next.cssDisplay))))
                        },
                        isWhitespaceSensitiveNode: function(e) {
                            return b(e) || "interpolation" === e.type || S(e)
                        },
                        isUnknownNamespace: D,
                        preferHardlineAsLeadingSpaces: function(e) {
                            return k(e) || e.prev && B(e.prev) || N(e) && w(e)
                        },
                        preferHardlineAsTrailingSpaces: B,
                        shouldPreserveContent: function(e, t) {
                            return !!("ieConditionalComment" === e.type && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || "ieConditionalComment" === e.type && !e.complete || I(e) && e.children.some(e=>"text" !== e.type && "interpolation" !== e.type) || R(e, t) && !b(e) && "interpolation" !== e.type)
                        },
                        unescapeQuoteEntities: function(e) {
                            return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"')
                        },
                        getTextValueParts: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.value;
                            return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? o(t) : o(L(E(t)), i) : s(a(u, C(t)))
                        }
                    }
                }
            }), nz = h({
                "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
                    function t(t) {
                        return e.$0 <= t && t <= e.$9
                    }
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.$EOF = 0,
                    e.$BSPACE = 8,
                    e.$TAB = 9,
                    e.$LF = 10,
                    e.$VTAB = 11,
                    e.$FF = 12,
                    e.$CR = 13,
                    e.$SPACE = 32,
                    e.$BANG = 33,
                    e.$DQ = 34,
                    e.$HASH = 35,
                    e.$$ = 36,
                    e.$PERCENT = 37,
                    e.$AMPERSAND = 38,
                    e.$SQ = 39,
                    e.$LPAREN = 40,
                    e.$RPAREN = 41,
                    e.$STAR = 42,
                    e.$PLUS = 43,
                    e.$COMMA = 44,
                    e.$MINUS = 45,
                    e.$PERIOD = 46,
                    e.$SLASH = 47,
                    e.$COLON = 58,
                    e.$SEMICOLON = 59,
                    e.$LT = 60,
                    e.$EQ = 61,
                    e.$GT = 62,
                    e.$QUESTION = 63,
                    e.$0 = 48,
                    e.$7 = 55,
                    e.$9 = 57,
                    e.$A = 65,
                    e.$E = 69,
                    e.$F = 70,
                    e.$X = 88,
                    e.$Z = 90,
                    e.$LBRACKET = 91,
                    e.$BACKSLASH = 92,
                    e.$RBRACKET = 93,
                    e.$CARET = 94,
                    e.$_ = 95,
                    e.$a = 97,
                    e.$b = 98,
                    e.$e = 101,
                    e.$f = 102,
                    e.$n = 110,
                    e.$r = 114,
                    e.$t = 116,
                    e.$u = 117,
                    e.$v = 118,
                    e.$x = 120,
                    e.$z = 122,
                    e.$LBRACE = 123,
                    e.$BAR = 124,
                    e.$RBRACE = 125,
                    e.$NBSP = 160,
                    e.$PIPE = 124,
                    e.$TILDA = 126,
                    e.$AT = 64,
                    e.$BT = 96,
                    e.isWhitespace = function(t) {
                        return t >= e.$TAB && t <= e.$SPACE || t == e.$NBSP
                    }
                    ,
                    e.isDigit = t,
                    e.isAsciiLetter = function(t) {
                        return t >= e.$a && t <= e.$z || t >= e.$A && t <= e.$Z
                    }
                    ,
                    e.isAsciiHexDigit = function(r) {
                        return r >= e.$a && r <= e.$f || r >= e.$A && r <= e.$F || t(r)
                    }
                    ,
                    e.isNewLine = function(t) {
                        return t === e.$LF || t === e.$CR
                    }
                    ,
                    e.isOctalDigit = function(t) {
                        return e.$0 <= t && t <= e.$7
                    }
                }
            }), nK = h({
                "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = class {
                        constructor(e, t, r) {
                            this.filePath = e,
                            this.name = t,
                            this.members = r
                        }
                        assertNoMembers() {
                            if (this.members.length)
                                throw Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`)
                        }
                    }
                    ;
                    e.StaticSymbol = t;
                    var r = class {
                        constructor() {
                            this.cache = new Map
                        }
                        get(e, r, n) {
                            let u = `"${e}".${r}${(n = n || []).length ? `.${n.join(".")}` : ""}`
                              , i = this.cache.get(u);
                            return i || (i = new t(e,r,n),
                            this.cache.set(u, i)),
                            i
                        }
                    }
                    ;
                    e.StaticSymbolCache = r
                }
            }), nQ = h({
                "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = /-+([a-z0-9])/g;
                    function r(e, t, r) {
                        let n = e.indexOf(t);
                        return -1 == n ? r : [e.slice(0, n).trim(), e.slice(n + 1).trim()]
                    }
                    function n(e, t, r) {
                        return Array.isArray(e) ? t.visitArray(e, r) : "object" == typeof e && null !== e && Object.getPrototypeOf(e) === s ? t.visitStringMap(e, r) : null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? t.visitPrimitive(e, r) : t.visitOther(e, r)
                    }
                    e.dashCaseToCamelCase = function(e) {
                        return e.replace(t, function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            return t[1].toUpperCase()
                        })
                    }
                    ,
                    e.splitAtColon = function(e, t) {
                        return r(e, ":", t)
                    }
                    ,
                    e.splitAtPeriod = function(e, t) {
                        return r(e, ".", t)
                    }
                    ,
                    e.visitValue = n,
                    e.isDefined = function(e) {
                        return null != e
                    }
                    ,
                    e.noUndefined = function(e) {
                        return void 0 === e ? null : e
                    }
                    ;
                    var u = class {
                        visitArray(e, t) {
                            return e.map(e=>n(e, this, t))
                        }
                        visitStringMap(e, t) {
                            let r = {};
                            return Object.keys(e).forEach(u=>{
                                r[u] = n(e[u], this, t)
                            }
                            ),
                            r
                        }
                        visitPrimitive(e, t) {
                            return e
                        }
                        visitOther(e, t) {
                            return e
                        }
                    }
                    ;
                    e.ValueTransformer = u,
                    e.SyncAsync = {
                        assertSync: e=>{
                            if (o(e))
                                throw Error("Illegal state: value cannot be a promise");
                            return e
                        }
                        ,
                        then: (e,t)=>o(e) ? e.then(t) : t(e),
                        all: e=>e.some(o) ? Promise.all(e) : e
                    },
                    e.error = function(e) {
                        throw Error(`Internal Error: ${e}`)
                    }
                    ,
                    e.syntaxError = function(e, t) {
                        let r = Error(e);
                        return r[i] = !0,
                        t && (r[a] = t),
                        r
                    }
                    ;
                    var i = "ngSyntaxError"
                      , a = "ngParseErrors";
                    e.isSyntaxError = function(e) {
                        return e[i]
                    }
                    ,
                    e.getParseErrors = function(e) {
                        return e[a] || []
                    }
                    ,
                    e.escapeRegExp = function(e) {
                        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
                    }
                    ;
                    var s = Object.getPrototypeOf({});
                    function o(e) {
                        return !!e && "function" == typeof e.then
                    }
                    e.utf8Encode = function(e) {
                        let t = "";
                        for (let r = 0; r < e.length; r++) {
                            let n = e.charCodeAt(r);
                            if (n >= 55296 && n <= 56319 && e.length > r + 1) {
                                let t = e.charCodeAt(r + 1);
                                t >= 56320 && t <= 57343 && (r++,
                                n = (n - 55296 << 10) + t - 56320 + 65536)
                            }
                            n <= 127 ? t += String.fromCharCode(n) : n <= 2047 ? t += String.fromCharCode(n >> 6 & 31 | 192, 63 & n | 128) : n <= 65535 ? t += String.fromCharCode(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) : n <= 2097151 && (t += String.fromCharCode(n >> 18 & 7 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128))
                        }
                        return t
                    }
                    ,
                    e.stringify = function e(t) {
                        if ("string" == typeof t)
                            return t;
                        if (t instanceof Array)
                            return "[" + t.map(e).join(", ") + "]";
                        if (null == t)
                            return "" + t;
                        if (t.overriddenName)
                            return `${t.overriddenName}`;
                        if (t.name)
                            return `${t.name}`;
                        if (!t.toString)
                            return "object";
                        let r = t.toString();
                        if (null == r)
                            return "" + r;
                        let n = r.indexOf(`
`);
                        return -1 === n ? r : r.substring(0, n)
                    }
                    ,
                    e.resolveForwardRef = function(e) {
                        return "function" == typeof e && e.hasOwnProperty("__forward_ref__") ? e() : e
                    }
                    ,
                    e.isPromise = o,
                    e.Version = class {
                        constructor(e) {
                            this.full = e;
                            let t = e.split(".");
                            this.major = t[0],
                            this.minor = t[1],
                            this.patch = t.slice(2).join(".")
                        }
                    }
                    ;
                    var l = "u" > typeof window && window
                      , p = "u" > typeof self && "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self
                      , c = "u" > typeof globalThis && globalThis;
                    e.global = c || l || p
                }
            }), nY = h({
                "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t, r, n = nK(), u = nQ(), i = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
                    function a(e) {
                        return e.replace(/\W/g, "_")
                    }
                    e.sanitizeIdentifier = a;
                    var s = 0;
                    function o(e) {
                        if (!e || !e.reference)
                            return null;
                        let t = e.reference;
                        if (t instanceof n.StaticSymbol)
                            return t.name;
                        if (t.__anonymousType)
                            return t.__anonymousType;
                        let r = u.stringify(t);
                        return r.indexOf("(") >= 0 ? (r = `anonymous_ ${s++}`,
                        t.__anonymousType = r) : r = a(r),
                        r
                    }
                    e.identifierName = o,
                    e.identifierModuleUrl = function(e) {
                        let t = e.reference;
                        return t instanceof n.StaticSymbol ? t.filePath : `./${u.stringify(t)}`
                    }
                    ,
                    e.viewClassName = function(e, t) {
                        return `View_ ${o({
                            reference: e
                        })}_ ${t}`
                    }
                    ,
                    e.rendererTypeName = function(e) {
                        return `RenderType_ ${o({
                            reference: e
                        })}`
                    }
                    ,
                    e.hostViewClassName = function(e) {
                        return `HostView_ ${o({
                            reference: e
                        })}`
                    }
                    ,
                    e.componentFactoryName = function(e) {
                        return `${o({
                            reference: e
                        })}NgFactory`
                    }
                    ,
                    (t = r = e.CompileSummaryKind || (e.CompileSummaryKind = {}))[t.Pipe = 0] = "Pipe",
                    t[t.Directive = 1] = "Directive",
                    t[t.NgModule = 2] = "NgModule",
                    t[t.Injectable = 3] = "Injectable",
                    e.tokenName = function(e) {
                        return null != e.value ? a(e.value) : o(e.identifier)
                    }
                    ,
                    e.tokenReference = function(e) {
                        return null != e.identifier ? e.identifier.reference : e.value
                    }
                    ,
                    e.CompileStylesheetMetadata = class {
                        constructor() {
                            let {moduleUrl: e, styles: t, styleUrls: r} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.moduleUrl = e || null,
                            this.styles = p(t),
                            this.styleUrls = p(r)
                        }
                    }
                    ,
                    e.CompileTemplateMetadata = class {
                        constructor(e) {
                            let {encapsulation: t, template: r, templateUrl: n, htmlAst: u, styles: i, styleUrls: a, externalStylesheets: s, animations: o, ngContentSelectors: l, interpolation: d, isInline: D, preserveWhitespaces: f} = e;
                            if (this.encapsulation = t,
                            this.template = r,
                            this.templateUrl = n,
                            this.htmlAst = u,
                            this.styles = p(i),
                            this.styleUrls = p(a),
                            this.externalStylesheets = p(s),
                            this.animations = o ? c(o) : [],
                            this.ngContentSelectors = l || [],
                            d && 2 != d.length)
                                throw Error("'interpolation' should have a start and an end symbol.");
                            this.interpolation = d,
                            this.isInline = D,
                            this.preserveWhitespaces = f
                        }
                        toSummary() {
                            return {
                                ngContentSelectors: this.ngContentSelectors,
                                encapsulation: this.encapsulation,
                                styles: this.styles,
                                animations: this.animations
                            }
                        }
                    }
                    ;
                    var l = class {
                        static create(e) {
                            let {isHost: t, type: r, isComponent: n, selector: a, exportAs: s, changeDetection: o, inputs: p, outputs: c, host: d, providers: D, viewProviders: f, queries: m, guards: g, viewQueries: y, entryComponents: h, template: E, componentViewType: C, rendererType: F, componentFactory: A} = e
                              , v = {}
                              , x = {}
                              , b = {};
                            null != d && Object.keys(d).forEach(e=>{
                                let t = d[e]
                                  , r = e.match(i);
                                null === r ? b[e] = t : null != r[1] ? x[r[1]] = t : null != r[2] && (v[r[2]] = t)
                            }
                            );
                            let S = {};
                            null != p && p.forEach(e=>{
                                let t = u.splitAtColon(e, [e, e]);
                                S[t[0]] = t[1]
                            }
                            );
                            let T = {};
                            return null != c && c.forEach(e=>{
                                let t = u.splitAtColon(e, [e, e]);
                                T[t[0]] = t[1]
                            }
                            ),
                            new l({
                                isHost: t,
                                type: r,
                                isComponent: !!n,
                                selector: a,
                                exportAs: s,
                                changeDetection: o,
                                inputs: S,
                                outputs: T,
                                hostListeners: v,
                                hostProperties: x,
                                hostAttributes: b,
                                providers: D,
                                viewProviders: f,
                                queries: m,
                                guards: g,
                                viewQueries: y,
                                entryComponents: h,
                                template: E,
                                componentViewType: C,
                                rendererType: F,
                                componentFactory: A
                            })
                        }
                        constructor(e) {
                            let {isHost: t, type: r, isComponent: n, selector: u, exportAs: i, changeDetection: a, inputs: s, outputs: o, hostListeners: l, hostProperties: c, hostAttributes: d, providers: D, viewProviders: f, queries: m, guards: g, viewQueries: y, entryComponents: h, template: E, componentViewType: C, rendererType: F, componentFactory: A} = e;
                            this.isHost = !!t,
                            this.type = r,
                            this.isComponent = n,
                            this.selector = u,
                            this.exportAs = i,
                            this.changeDetection = a,
                            this.inputs = s,
                            this.outputs = o,
                            this.hostListeners = l,
                            this.hostProperties = c,
                            this.hostAttributes = d,
                            this.providers = p(D),
                            this.viewProviders = p(f),
                            this.queries = p(m),
                            this.guards = g,
                            this.viewQueries = p(y),
                            this.entryComponents = p(h),
                            this.template = E,
                            this.componentViewType = C,
                            this.rendererType = F,
                            this.componentFactory = A
                        }
                        toSummary() {
                            return {
                                summaryKind: r.Directive,
                                type: this.type,
                                isComponent: this.isComponent,
                                selector: this.selector,
                                exportAs: this.exportAs,
                                inputs: this.inputs,
                                outputs: this.outputs,
                                hostListeners: this.hostListeners,
                                hostProperties: this.hostProperties,
                                hostAttributes: this.hostAttributes,
                                providers: this.providers,
                                viewProviders: this.viewProviders,
                                queries: this.queries,
                                guards: this.guards,
                                viewQueries: this.viewQueries,
                                entryComponents: this.entryComponents,
                                changeDetection: this.changeDetection,
                                template: this.template && this.template.toSummary(),
                                componentViewType: this.componentViewType,
                                rendererType: this.rendererType,
                                componentFactory: this.componentFactory
                            }
                        }
                    }
                    ;
                    function p(e) {
                        return e || []
                    }
                    function c(e) {
                        return e.reduce((e,t)=>{
                            let r = Array.isArray(t) ? c(t) : t;
                            return e.concat(r)
                        }
                        , [])
                    }
                    function d(e) {
                        return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///")
                    }
                    e.CompileDirectiveMetadata = l,
                    e.CompilePipeMetadata = class {
                        constructor(e) {
                            let {type: t, name: r, pure: n} = e;
                            this.type = t,
                            this.name = r,
                            this.pure = !!n
                        }
                        toSummary() {
                            return {
                                summaryKind: r.Pipe,
                                type: this.type,
                                name: this.name,
                                pure: this.pure
                            }
                        }
                    }
                    ,
                    e.CompileShallowModuleMetadata = class {
                    }
                    ,
                    e.CompileNgModuleMetadata = class {
                        constructor(e) {
                            let {type: t, providers: r, declaredDirectives: n, exportedDirectives: u, declaredPipes: i, exportedPipes: a, entryComponents: s, bootstrapComponents: o, importedModules: l, exportedModules: c, schemas: d, transitiveModule: D, id: f} = e;
                            this.type = t || null,
                            this.declaredDirectives = p(n),
                            this.exportedDirectives = p(u),
                            this.declaredPipes = p(i),
                            this.exportedPipes = p(a),
                            this.providers = p(r),
                            this.entryComponents = p(s),
                            this.bootstrapComponents = p(o),
                            this.importedModules = p(l),
                            this.exportedModules = p(c),
                            this.schemas = p(d),
                            this.id = f || null,
                            this.transitiveModule = D || null
                        }
                        toSummary() {
                            let e = this.transitiveModule;
                            return {
                                summaryKind: r.NgModule,
                                type: this.type,
                                entryComponents: e.entryComponents,
                                providers: e.providers,
                                modules: e.modules,
                                exportedDirectives: e.exportedDirectives,
                                exportedPipes: e.exportedPipes
                            }
                        }
                    }
                    ,
                    e.TransitiveCompileNgModuleMetadata = class {
                        constructor() {
                            this.directivesSet = new Set,
                            this.directives = [],
                            this.exportedDirectivesSet = new Set,
                            this.exportedDirectives = [],
                            this.pipesSet = new Set,
                            this.pipes = [],
                            this.exportedPipesSet = new Set,
                            this.exportedPipes = [],
                            this.modulesSet = new Set,
                            this.modules = [],
                            this.entryComponentsSet = new Set,
                            this.entryComponents = [],
                            this.providers = []
                        }
                        addProvider(e, t) {
                            this.providers.push({
                                provider: e,
                                module: t
                            })
                        }
                        addDirective(e) {
                            this.directivesSet.has(e.reference) || (this.directivesSet.add(e.reference),
                            this.directives.push(e))
                        }
                        addExportedDirective(e) {
                            this.exportedDirectivesSet.has(e.reference) || (this.exportedDirectivesSet.add(e.reference),
                            this.exportedDirectives.push(e))
                        }
                        addPipe(e) {
                            this.pipesSet.has(e.reference) || (this.pipesSet.add(e.reference),
                            this.pipes.push(e))
                        }
                        addExportedPipe(e) {
                            this.exportedPipesSet.has(e.reference) || (this.exportedPipesSet.add(e.reference),
                            this.exportedPipes.push(e))
                        }
                        addModule(e) {
                            this.modulesSet.has(e.reference) || (this.modulesSet.add(e.reference),
                            this.modules.push(e))
                        }
                        addEntryComponent(e) {
                            this.entryComponentsSet.has(e.componentType) || (this.entryComponentsSet.add(e.componentType),
                            this.entryComponents.push(e))
                        }
                    }
                    ,
                    e.ProviderMeta = class {
                        constructor(e, t) {
                            let {useClass: r, useValue: n, useExisting: u, useFactory: i, deps: a, multi: s} = t;
                            this.token = e,
                            this.useClass = r || null,
                            this.useValue = n,
                            this.useExisting = u,
                            this.useFactory = i || null,
                            this.dependencies = a || null,
                            this.multi = !!s
                        }
                    }
                    ,
                    e.flatten = c,
                    e.templateSourceUrl = function(e, t, r) {
                        let u;
                        return u = r.isInline ? t.type.reference instanceof n.StaticSymbol ? `${t.type.reference.filePath}.${t.type.reference.name}.html` : `${o(e)}/${o(t.type)}.html` : r.templateUrl,
                        t.type.reference instanceof n.StaticSymbol ? u : d(u)
                    }
                    ,
                    e.sharedStylesheetJitUrl = function(e, t) {
                        let r = e.moduleUrl.split(/\/\\/g);
                        return d(`css/${t}${r[r.length - 1]}.ngstyle.js`)
                    }
                    ,
                    e.ngModuleJitUrl = function(e) {
                        return d(`${o(e.type)}/module.ngfactory.js`)
                    }
                    ,
                    e.templateJitUrl = function(e, t) {
                        return d(`${o(e)}/${o(t.type)}.ngfactory.js`)
                    }
                }
            }), nZ = h({
                "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
                    v(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t, r, n = nz(), u = nY(), i = class {
                        constructor(e, t, r, n) {
                            this.file = e,
                            this.offset = t,
                            this.line = r,
                            this.col = n
                        }
                        toString() {
                            return null != this.offset ? `${this.file.url}@${this.line}:${this.col}` : this.file.url
                        }
                        moveBy(e) {
                            let t = this.file.content
                              , r = t.length
                              , u = this.offset
                              , a = this.line
                              , s = this.col;
                            for (; u > 0 && e < 0; )
                                if (u--,
                                e++,
                                t.charCodeAt(u) == n.$LF) {
                                    a--;
                                    let e = t.substr(0, u - 1).lastIndexOf(String.fromCharCode(n.$LF));
                                    s = e > 0 ? u - e : u
                                } else
                                    s--;
                            for (; u < r && e > 0; ) {
                                let r = t.charCodeAt(u);
                                u++,
                                e--,
                                r == n.$LF ? (a++,
                                s = 0) : s++
                            }
                            return new i(this.file,u,a,s)
                        }
                        getContext(e, t) {
                            let r = this.file.content
                              , n = this.offset;
                            if (null != n) {
                                n > r.length - 1 && (n = r.length - 1);
                                let u = n
                                  , i = 0
                                  , a = 0;
                                for (; i < e && n > 0 && (n--,
                                i++,
                                !(r[n] == `
` && ++a == t)); )
                                    ;
                                for (i = 0,
                                a = 0; i < e && u < r.length - 1 && (u++,
                                i++,
                                !(r[u] == `
` && ++a == t)); )
                                    ;
                                return {
                                    before: r.substring(n, this.offset),
                                    after: r.substring(this.offset, u + 1)
                                }
                            }
                            return null
                        }
                    }
                    ;
                    e.ParseLocation = i;
                    var a = class {
                        constructor(e, t) {
                            this.content = e,
                            this.url = t
                        }
                    }
                    ;
                    e.ParseSourceFile = a;
                    var s = class {
                        constructor(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this.start = e,
                            this.end = t,
                            this.details = r
                        }
                        toString() {
                            return this.start.file.content.substring(this.start.offset, this.end.offset)
                        }
                    }
                    ;
                    e.ParseSourceSpan = s,
                    e.EMPTY_PARSE_LOCATION = new i(new a("",""),0,0,0),
                    e.EMPTY_SOURCE_SPAN = new s(e.EMPTY_PARSE_LOCATION,e.EMPTY_PARSE_LOCATION),
                    (t = r = e.ParseErrorLevel || (e.ParseErrorLevel = {}))[t.WARNING = 0] = "WARNING",
                    t[t.ERROR = 1] = "ERROR",
                    e.ParseError = class {
                        constructor(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.ERROR;
                            this.span = e,
                            this.msg = t,
                            this.level = n
                        }
                        contextualMessage() {
                            let e = this.span.start.getContext(100, 3);
                            return e ? `${this.msg} ("${e.before}[${r[this.level]} ->]${e.after}")` : this.msg
                        }
                        toString() {
                            return `${this.contextualMessage()}: ${this.span.start}${this.span.details ? `, ${this.span.details}` : ""}`
                        }
                    }
                    ,
                    e.typeSourceSpan = function(e, t) {
                        let r = u.identifierModuleUrl(t)
                          , n = null != r ? `in ${e} ${u.identifierName(t)} in ${r}` : `in ${e} ${u.identifierName(t)}`
                          , o = new a("",n);
                        return new s(new i(o,-1,-1,-1),new i(o,-1,-1,-1))
                    }
                    ,
                    e.r3JitTypeSourceSpan = function(e, t, r) {
                        let n = `in ${e} ${t} in ${r}`
                          , u = new a("",n);
                        return new s(new i(u,-1,-1,-1),new i(u,-1,-1,-1))
                    }
                }
            }), n0 = h({
                "src/language-html/print-preprocess.js"(e, t) {
                    v();
                    var {ParseSourceSpan: r} = nZ()
                      , {htmlTrim: n, getLeadingAndTrailingHtmlWhitespace: u, hasHtmlWhitespace: i, canHaveInterpolation: a, getNodeCssStyleDisplay: s, isDanglingSpaceSensitiveNode: o, isIndentationSensitiveNode: l, isLeadingSpaceSensitiveNode: p, isTrailingSpaceSensitiveNode: c, isWhitespaceSensitiveNode: d, isVueScriptTag: D} = nX()
                      , f = [function(e) {
                        e.walk(e=>{
                            if ("element" === e.type && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && "text" === e.children[0].type && e.children[0].value[0] === `
`) {
                                let t = e.children[0];
                                1 === t.value.length ? e.removeChild(t) : t.value = t.value.slice(1)
                            }
                        }
                        )
                    }
                    , function(e) {
                        let t = e=>"element" === e.type && e.prev && "ieConditionalStartComment" === e.prev.type && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild && "ieConditionalEndComment" === e.firstChild.type && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
                        e.walk(e=>{
                            if (e.children)
                                for (let n = 0; n < e.children.length; n++) {
                                    let u = e.children[n];
                                    if (!t(u))
                                        continue;
                                    let i = u.prev
                                      , a = u.firstChild;
                                    e.removeChild(i),
                                    n--;
                                    let s = new r(i.sourceSpan.start,a.sourceSpan.end)
                                      , o = new r(s.start,u.sourceSpan.end);
                                    u.condition = i.condition,
                                    u.sourceSpan = o,
                                    u.startSourceSpan = s,
                                    u.removeChild(a)
                                }
                        }
                        )
                    }
                    , function(e) {
                        return function(e, t, n) {
                            e.walk(e=>{
                                if (e.children)
                                    for (let u = 0; u < e.children.length; u++) {
                                        let i = e.children[u];
                                        if ("text" !== i.type && !t(i))
                                            continue;
                                        "text" !== i.type && (i.type = "text",
                                        i.value = n(i));
                                        let a = i.prev;
                                        !a || "text" !== a.type || (a.value += i.value,
                                        a.sourceSpan = new r(a.sourceSpan.start,i.sourceSpan.end),
                                        e.removeChild(i),
                                        u--)
                                    }
                            }
                            )
                        }(e, e=>"cdata" === e.type, e=>`<![CDATA[${e.value}]]>`)
                    }
                    , function(e, t) {
                        if ("html" === t.parser)
                            return;
                        let n = /{{(.+?)}}/s;
                        e.walk(e=>{
                            if (a(e))
                                for (let t of e.children) {
                                    if ("text" !== t.type)
                                        continue;
                                    let u = t.sourceSpan.start
                                      , i = null
                                      , a = t.value.split(n);
                                    for (let n = 0; n < a.length; n++,
                                    u = i) {
                                        let s = a[n];
                                        if (n % 2 == 0) {
                                            i = u.moveBy(s.length),
                                            s.length > 0 && e.insertChildBefore(t, {
                                                type: "text",
                                                value: s,
                                                sourceSpan: new r(u,i)
                                            });
                                            continue
                                        }
                                        i = u.moveBy(s.length + 4),
                                        e.insertChildBefore(t, {
                                            type: "interpolation",
                                            sourceSpan: new r(u,i),
                                            children: 0 === s.length ? [] : [{
                                                type: "text",
                                                value: s,
                                                sourceSpan: new r(u.moveBy(2),i.moveBy(-2))
                                            }]
                                        })
                                    }
                                    e.removeChild(t)
                                }
                        }
                        )
                    }
                    , function(e) {
                        e.walk(e=>{
                            if (!e.children)
                                return;
                            if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === n(e.children[0].value).length) {
                                e.hasDanglingSpaces = e.children.length > 0,
                                e.children = [];
                                return
                            }
                            let t = d(e)
                              , i = l(e);
                            if (!t)
                                for (let t = 0; t < e.children.length; t++) {
                                    let n = e.children[t];
                                    if ("text" !== n.type)
                                        continue;
                                    let {leadingWhitespace: i, text: a, trailingWhitespace: s} = u(n.value)
                                      , o = n.prev
                                      , l = n.next;
                                    a ? (n.value = a,
                                    n.sourceSpan = new r(n.sourceSpan.start.moveBy(i.length),n.sourceSpan.end.moveBy(-s.length)),
                                    i && (o && (o.hasTrailingSpaces = !0),
                                    n.hasLeadingSpaces = !0),
                                    s && (n.hasTrailingSpaces = !0,
                                    l && (l.hasLeadingSpaces = !0))) : (e.removeChild(n),
                                    t--,
                                    (i || s) && (o && (o.hasTrailingSpaces = !0),
                                    l && (l.hasLeadingSpaces = !0)))
                                }
                            e.isWhitespaceSensitive = t,
                            e.isIndentationSensitive = i
                        }
                        )
                    }
                    , function(e, t) {
                        e.walk(e=>{
                            e.cssDisplay = s(e, t)
                        }
                        )
                    }
                    , function(e) {
                        e.walk(e=>{
                            e.isSelfClosing = !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan)
                        }
                        )
                    }
                    , function(e, t) {
                        e.walk(e=>{
                            "element" === e.type && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)))
                        }
                        )
                    }
                    , function(e, t) {
                        e.walk(e=>{
                            let {children: r} = e;
                            if (r) {
                                if (0 === r.length) {
                                    e.isDanglingSpaceSensitive = o(e);
                                    return
                                }
                                for (let e of r)
                                    e.isLeadingSpaceSensitive = p(e, t),
                                    e.isTrailingSpaceSensitive = c(e, t);
                                for (let e = 0; e < r.length; e++) {
                                    let t = r[e];
                                    t.isLeadingSpaceSensitive = (0 === e || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive,
                                    t.isTrailingSpaceSensitive = (e === r.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive
                                }
                            }
                        }
                        )
                    }
                    , function(e) {
                        let t = e=>"element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !i(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev && "text" === e.prev.type && e.next && "text" === e.next.type;
                        e.walk(e=>{
                            if (e.children)
                                for (let n = 0; n < e.children.length; n++) {
                                    let u = e.children[n];
                                    if (!t(u))
                                        continue;
                                    let i = u.prev
                                      , a = u.next;
                                    i.value += `<${u.rawName}>` + u.firstChild.value + `</${u.rawName}>` + a.value,
                                    i.sourceSpan = new r(i.sourceSpan.start,a.sourceSpan.end),
                                    i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive,
                                    i.hasTrailingSpaces = a.hasTrailingSpaces,
                                    e.removeChild(u),
                                    n--,
                                    e.removeChild(a)
                                }
                        }
                        )
                    }
                    , function(e, t) {
                        if ("vue" === t.parser) {
                            let r = e.children.find(e=>D(e, t));
                            if (!r)
                                return;
                            let {lang: n} = r.attrMap;
                            ("ts" === n || "typescript" === n) && (t.__should_parse_vue_template_with_ts = !0)
                        }
                    }
                    ];
                    t.exports = function(e, t) {
                        for (let r of f)
                            r(e, t);
                        return e
                    }
                }
            }), n1 = h({
                "src/language-html/pragma.js"(e, t) {
                    v(),
                    t.exports = {
                        hasPragma: function(e) {
                            return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e)
                        },
                        insertPragma: function(e) {
                            return `<!-- @format -->

` + e.replace(/^\s*\n/, "")
                        }
                    }
                }
            }), n2 = h({
                "src/language-html/loc.js"(e, t) {
                    v(),
                    t.exports = {
                        locStart: function(e) {
                            return e.sourceSpan.start.offset
                        },
                        locEnd: function(e) {
                            return e.sourceSpan.end.offset
                        }
                    }
                }
            }), n3 = h({
                "src/language-html/print/tag.js"(e, t) {
                    v();
                    var r = tj()
                      , {isNonEmptyArray: n} = ec()
                      , {builders: {indent: u, join: i, line: a, softline: s, hardline: o}, utils: {replaceTextEndOfLine: l}} = W()
                      , {locStart: p, locEnd: c} = n2()
                      , {isTextLikeNode: d, getLastDescendant: D, isPreLikeNode: f, hasPrettierIgnore: m, shouldPreserveContent: g, isVueSfcBlock: y} = nX();
                    function h(e, t) {
                        return e.lastChild && T(e.lastChild) ? "" : [S(e) ? A(e.lastChild, t) : "", F(e, t)]
                    }
                    function E(e, t) {
                        return (e.next ? b(e.next) : S(e.parent)) ? "" : [A(e, t), C(e, t)]
                    }
                    function C(e, t) {
                        return T(e) ? F(e.parent, t) : B(e) ? j(e.next) : ""
                    }
                    function F(e, t) {
                        if (r(!e.isSelfClosing),
                        x(e, t))
                            return "";
                        switch (e.type) {
                        case "ieConditionalComment":
                            return "<!";
                        case "element":
                            if (e.hasHtmComponentClosingTag)
                                return "<//";
                        default:
                            return `</${e.rawName}`
                        }
                    }
                    function A(e, t) {
                        if (x(e, t))
                            return "";
                        switch (e.type) {
                        case "ieConditionalComment":
                        case "ieConditionalEndComment":
                            return "[endif]-->";
                        case "ieConditionalStartComment":
                            return "]><!-->";
                        case "interpolation":
                            return "}}";
                        case "element":
                            if (e.isSelfClosing)
                                return "/>";
                        default:
                            return ">"
                        }
                    }
                    function x(e, t) {
                        return !e.isSelfClosing && !e.endSourceSpan && (m(e) || g(e.parent, t))
                    }
                    function b(e) {
                        return e.prev && "docType" !== e.prev.type && !d(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces
                    }
                    function S(e) {
                        return e.lastChild && e.lastChild.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !d(D(e.lastChild)) && !f(e)
                    }
                    function T(e) {
                        return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && d(D(e))
                    }
                    function B(e) {
                        return e.next && !d(e.next) && d(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces
                    }
                    function N(e) {
                        return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces
                    }
                    function w(e, t) {
                        return e.prev && B(e.prev) ? "" : [k(e, t), j(e)]
                    }
                    function k(e, t) {
                        return N(e) ? P(e.parent) : b(e) ? A(e.prev, t) : ""
                    }
                    function j(e) {
                        switch (e.type) {
                        case "ieConditionalComment":
                        case "ieConditionalStartComment":
                            return `<!--[if ${e.condition}`;
                        case "ieConditionalEndComment":
                            return "<!--<!";
                        case "interpolation":
                            return "{{";
                        case "docType":
                            return "<!DOCTYPE";
                        case "element":
                            if (e.condition)
                                return `<!--[if ${e.condition}]><!--><${e.rawName}`;
                        default:
                            return `<${e.rawName}`
                        }
                    }
                    function P(e) {
                        switch (r(!e.isSelfClosing),
                        e.type) {
                        case "ieConditionalComment":
                            return "]>";
                        case "element":
                            if (e.condition)
                                return "><!--<![endif]-->";
                        default:
                            return ">"
                        }
                    }
                    t.exports = {
                        printClosingTag: function(e, t) {
                            return [e.isSelfClosing ? "" : h(e, t), E(e, t)]
                        },
                        printClosingTagStart: h,
                        printClosingTagStartMarker: F,
                        printClosingTagEndMarker: A,
                        printClosingTagSuffix: C,
                        printClosingTagEnd: E,
                        needsToBorrowLastChildClosingTagEndMarker: S,
                        needsToBorrowParentClosingTagStartMarker: T,
                        needsToBorrowPrevClosingTagEndMarker: b,
                        printOpeningTag: function(e, t, r) {
                            let d = e.getValue();
                            return [w(d, t), function(e, t, r) {
                                let d, D = e.getValue();
                                if (!n(D.attrs))
                                    return D.isSelfClosing ? " " : "";
                                let f = D.prev && "comment" === D.prev.type && !!(d = D.prev.value.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s)) && (!d[1] || d[1].split(/\s+/))
                                  , m = "boolean" == typeof f ? ()=>f : Array.isArray(f) ? e=>f.includes(e.rawName) : ()=>!1
                                  , g = e.map(e=>{
                                    let n = e.getValue();
                                    return m(n) ? l(t.originalText.slice(p(n), c(n))) : r()
                                }
                                , "attrs")
                                  , h = "element" === D.type && "script" === D.fullName && 1 === D.attrs.length && "src" === D.attrs[0].fullName && 0 === D.children.length
                                  , E = t.singleAttributePerLine && D.attrs.length > 1 && !y(D, t) ? o : a
                                  , C = [u([h ? " " : a, i(E, g)])];
                                return D.firstChild && N(D.firstChild) || D.isSelfClosing && S(D.parent) || h ? C.push(D.isSelfClosing ? " " : "") : C.push(t.bracketSameLine ? D.isSelfClosing ? " " : "" : D.isSelfClosing ? a : s),
                                C
                            }(e, t, r), d.isSelfClosing ? "" : d.firstChild && N(d.firstChild) ? "" : P(d)]
                        },
                        printOpeningTagStart: w,
                        printOpeningTagPrefix: k,
                        printOpeningTagStartMarker: j,
                        printOpeningTagEndMarker: P,
                        needsToBorrowNextOpeningTagStartMarker: B,
                        needsToBorrowParentOpeningTagEndMarker: N
                    }
                }
            }), n8 = h({
                "node_modules/parse-srcset/src/parse-srcset.js"(r, i) {
                    var a;
                    v(),
                    n = [],
                    void 0 !== (u = "function" == typeof (a = function() {
                        return function(e, t) {
                            var r = t && t.logger || console;
                            function n(e) {
                                return " " === e || "	" === e || e === `
` || "\f" === e || "\r" === e
                            }
                            function u(t) {
                                var r, n = t.exec(e.substring(y));
                                if (n)
                                    return r = n[0],
                                    y += r.length,
                                    r
                            }
                            for (var i, a, s, o, l, p = e.length, c = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, D = /^[^ \t\n\r\u000c]+/, f = /[,]+$/, m = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, y = 0, h = []; ; ) {
                                if (u(d),
                                y >= p)
                                    return h;
                                i = u(D),
                                a = [],
                                "," === i.slice(-1) ? (i = i.replace(f, ""),
                                E()) : function() {
                                    for (u(c),
                                    s = "",
                                    o = "in descriptor"; ; ) {
                                        if (l = e.charAt(y),
                                        "in descriptor" === o) {
                                            if (n(l))
                                                s && (a.push(s),
                                                s = "",
                                                o = "after descriptor");
                                            else if ("," === l) {
                                                y += 1,
                                                s && a.push(s),
                                                E();
                                                return
                                            } else if ("(" === l)
                                                s += l,
                                                o = "in parens";
                                            else if ("" === l) {
                                                s && a.push(s),
                                                E();
                                                return
                                            } else
                                                s += l
                                        } else if ("in parens" === o) {
                                            if (")" === l)
                                                s += l,
                                                o = "in descriptor";
                                            else if ("" === l) {
                                                a.push(s),
                                                E();
                                                return
                                            } else
                                                s += l
                                        } else if ("after descriptor" === o && !n(l)) {
                                            if ("" === l) {
                                                E();
                                                return
                                            }
                                            o = "in descriptor",
                                            y -= 1
                                        }
                                        y += 1
                                    }
                                }()
                            }
                            function E() {
                                var t, n, u, s, o, l, p, c, d, D = !1, f = {};
                                for (s = 0; s < a.length; s++)
                                    l = (o = a[s])[o.length - 1],
                                    c = parseInt(p = o.substring(0, o.length - 1), 10),
                                    d = parseFloat(p),
                                    m.test(p) && "w" === l ? ((t || n) && (D = !0),
                                    0 === c ? D = !0 : t = c) : g.test(p) && "x" === l ? ((t || n || u) && (D = !0),
                                    d < 0 ? D = !0 : n = d) : m.test(p) && "h" === l ? ((u || n) && (D = !0),
                                    0 === c ? D = !0 : u = c) : D = !0;
                                D ? r && r.error && r.error("Invalid srcset descriptor found in '" + e + "' at '" + o + "'.") : (f.url = i,
                                t && (f.w = t),
                                n && (f.d = n),
                                u && (f.h = u),
                                h.push(f))
                            }
                        }
                    }
                    ) ? a.apply(t, n) : a) && (e.exports = u)
                }
            }), n6 = h({
                "src/language-html/syntax-attribute.js"(e, t) {
                    v();
                    var r = n8()
                      , {builders: {ifBreak: n, join: u, line: i}} = W();
                    t.exports = {
                        printImgSrcset: function(e) {
                            let t = r(e, {
                                logger: {
                                    error(e) {
                                        throw Error(e)
                                    }
                                }
                            })
                              , a = t.some(e=>{
                                let {w: t} = e;
                                return t
                            }
                            )
                              , s = t.some(e=>{
                                let {h: t} = e;
                                return t
                            }
                            );
                            if (a + s + t.some(e=>{
                                let {d: t} = e;
                                return t
                            }
                            ) > 1)
                                throw Error("Mixed descriptor in srcset is not supported");
                            let o = a ? "w" : s ? "h" : "d"
                              , l = a ? "w" : s ? "h" : "x"
                              , p = e=>Math.max(...e)
                              , c = t.map(e=>e.url)
                              , d = p(c.map(e=>e.length))
                              , D = t.map(e=>e[o]).map(e=>e ? e.toString() : "")
                              , f = D.map(e=>{
                                let t = e.indexOf(".");
                                return -1 === t ? e.length : t
                            }
                            )
                              , m = p(f);
                            return u([",", i], c.map((e,t)=>{
                                let r = [e]
                                  , u = D[t];
                                if (u) {
                                    let i = d - e.length + 1
                                      , a = m - f[t]
                                      , s = " ".repeat(i + a);
                                    r.push(n(s, " "), u + l)
                                }
                                return r
                            }
                            ))
                        },
                        printClassNames: function(e) {
                            return e.trim().split(/\s+/).join(" ")
                        }
                    }
                }
            }), n7 = h({
                "src/language-html/syntax-vue.js"(e, t) {
                    v();
                    var {builders: {group: r}} = W();
                    t.exports = {
                        isVueEventBindingExpression: function(e) {
                            let t = e.trim();
                            return /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/.test(t) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t)
                        },
                        printVueFor: function(e, t) {
                            let {left: n, operator: u, right: i} = function(e) {
                                let t = /,([^,\]}]*)(?:,([^,\]}]*))?$/
                                  , r = e.match(/(.*?)\s+(in|of)\s+(.*)/s);
                                if (!r)
                                    return;
                                let n = {};
                                if (n.for = r[3].trim(),
                                !n.for)
                                    return;
                                let u = r[1].trim().replace(/^\(|\)$/g, "")
                                  , i = u.match(t);
                                i ? (n.alias = u.replace(t, ""),
                                n.iterator1 = i[1].trim(),
                                i[2] && (n.iterator2 = i[2].trim())) : n.alias = u;
                                let a = [n.alias, n.iterator1, n.iterator2];
                                if (!a.some((e,t)=>!e && (0 === t || a.slice(t + 1).some(Boolean))))
                                    return {
                                        left: a.filter(Boolean).join(","),
                                        operator: r[2],
                                        right: n.for
                                    }
                            }(e);
                            return [r(t(`function _(${n}) {}`, {
                                parser: "babel",
                                __isVueForBindingLeft: !0
                            })), " ", u, " ", t(i, {
                                parser: "__js_expression"
                            }, {
                                stripTrailingHardline: !0
                            })]
                        },
                        printVueBindings: function(e, t) {
                            return t(`function _(${e}) {}`, {
                                parser: "babel",
                                __isVueBindings: !0
                            })
                        }
                    }
                }
            }), n9 = h({
                "src/language-html/get-node-content.js"(e, t) {
                    v();
                    var {needsToBorrowParentClosingTagStartMarker: r, printClosingTagStartMarker: n, needsToBorrowLastChildClosingTagEndMarker: u, printClosingTagEndMarker: i, needsToBorrowParentOpeningTagEndMarker: a, printOpeningTagEndMarker: s} = n3();
                    t.exports = function(e, t) {
                        let o = e.startSourceSpan.end.offset;
                        e.firstChild && a(e.firstChild) && (o -= s(e).length);
                        let l = e.endSourceSpan.start.offset;
                        return e.lastChild && r(e.lastChild) ? l += n(e, t).length : u(e) && (l -= i(e.lastChild, t).length),
                        t.originalText.slice(o, l)
                    }
                }
            }), n5 = h({
                "src/language-html/embed.js"(e, t) {
                    v();
                    var {builders: {breakParent: r, group: n, hardline: u, indent: i, line: a, fill: s, softline: o}, utils: {mapDoc: l, replaceTextEndOfLine: p}} = W()
                      , c = r5()
                      , {printClosingTag: d, printClosingTagSuffix: D, needsToBorrowPrevClosingTagEndMarker: f, printOpeningTagPrefix: m, printOpeningTag: g} = n3()
                      , {printImgSrcset: y, printClassNames: h} = n6()
                      , {printVueFor: E, printVueBindings: C, isVueEventBindingExpression: F} = n7()
                      , {isScriptLikeTag: A, isVueNonHtmlBlock: x, inferScriptParser: b, htmlTrimPreserveIndentation: S, dedentString: T, unescapeQuoteEntities: B, isVueSlotAttribute: N, isVueSfcBindingsAttribute: w, getTextValueParts: k} = nX()
                      , j = n9();
                    t.exports = function(e, t, v, P) {
                        let I = e.getValue();
                        switch (I.type) {
                        case "element":
                            if (A(I) || "interpolation" === I.type)
                                return;
                            if (!I.isSelfClosing && x(I, P)) {
                                let r = b(I, P);
                                if (!r)
                                    return;
                                let i = j(I, P)
                                  , a = /^\s*$/.test(i)
                                  , s = "";
                                return a || (a = "" === (s = v(S(i), {
                                    parser: r,
                                    __embeddedInHtml: !0
                                }, {
                                    stripTrailingHardline: !0
                                }))),
                                [m(I, P), n(g(e, P, t)), a ? "" : u, s, a ? "" : u, d(I, P), D(I, P)]
                            }
                            break;
                        case "text":
                            if (A(I.parent)) {
                                let e = b(I.parent, P);
                                if (e) {
                                    let t = "markdown" === e ? T(I.value.replace(/^[^\S\n]*\n/, "")) : I.value
                                      , n = {
                                        parser: e,
                                        __embeddedInHtml: !0
                                    };
                                    if ("html" === P.parser && "babel" === e) {
                                        let e = "script"
                                          , {attrMap: t} = I.parent;
                                        t && ("module" === t.type || "text/babel" === t.type && "module" === t["data-type"]) && (e = "module"),
                                        n.__babelSourceType = e
                                    }
                                    return [r, m(I, P), v(t, n, {
                                        stripTrailingHardline: !0
                                    }), D(I, P)]
                                }
                            } else if ("interpolation" === I.parent.type) {
                                let e = {
                                    __isInHtmlInterpolation: !0,
                                    __embeddedInHtml: !0
                                };
                                return "angular" === P.parser ? (e.parser = "__ng_interpolation",
                                e.trailingComma = "none") : "vue" === P.parser ? e.parser = P.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : e.parser = "__js_expression",
                                [i([a, v(I.value, e, {
                                    stripTrailingHardline: !0
                                })]), I.parent.next && f(I.parent.next) ? " " : a]
                            }
                            break;
                        case "attribute":
                            {
                                if (!I.value)
                                    break;
                                if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(P.originalText.slice(I.valueSpan.start.offset, I.valueSpan.end.offset)) || "lwc" === P.parser && /^{.*}$/s.test(P.originalText.slice(I.valueSpan.start.offset, I.valueSpan.end.offset)))
                                    return [I.rawName, "=", I.value];
                                let e = function(e, t, r) {
                                    let u = t=>new RegExp(t.join("|")).test(e.fullName)
                                      , l = ()=>B(e.value)
                                      , c = !1
                                      , d = (e,t)=>{
                                        let r = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;
                                        r && ("ObjectExpression" === r.type || "ArrayExpression" === r.type || "__vue_expression" === t.parser && ("TemplateLiteral" === r.type || "StringLiteral" === r.type)) && (c = !0)
                                    }
                                      , D = e=>n(e)
                                      , f = function(e) {
                                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                        return n([i([o, e]), t ? o : ""])
                                    }
                                      , m = e=>c ? D(e) : f(e)
                                      , g = (e,r)=>t(e, Object.assign({
                                        __onHtmlBindingRoot: d,
                                        __embeddedInHtml: !0
                                    }, r));
                                    if ("srcset" === e.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName))
                                        return f(y(l()));
                                    if ("class" === e.fullName && !r.parentParser) {
                                        let e = l();
                                        if (!e.includes("{{"))
                                            return h(e)
                                    }
                                    if ("style" === e.fullName && !r.parentParser) {
                                        let e = l();
                                        if (!e.includes("{{"))
                                            return f(g(e, {
                                                parser: "css",
                                                __isHTMLStyleAttribute: !0
                                            }))
                                    }
                                    if ("vue" === r.parser) {
                                        if ("v-for" === e.fullName)
                                            return E(l(), g);
                                        if (N(e) || w(e, r))
                                            return C(l(), g);
                                        if (u(["^@", "^v-on:"])) {
                                            let e = l()
                                              , t = F(e) ? "__js_expression" : r.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
                                            return m(g(e, {
                                                parser: t
                                            }))
                                        }
                                        if (u(["^:", "^v-bind:"]))
                                            return m(g(l(), {
                                                parser: "__vue_expression"
                                            }));
                                        if (u(["^v-"]))
                                            return m(g(l(), {
                                                parser: "__js_expression"
                                            }))
                                    }
                                    if ("angular" === r.parser) {
                                        let t = (e,t)=>g(e, Object.assign(Object.assign({}, t), {}, {
                                            trailingComma: "none"
                                        }));
                                        if (u(["^\\(.+\\)$", "^on-"]))
                                            return m(t(l(), {
                                                parser: "__ng_action"
                                            }));
                                        if (u(["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"]))
                                            return m(t(l(), {
                                                parser: "__ng_binding"
                                            }));
                                        if (u(["^i18n(-.+)?$"])) {
                                            let t = l().trim();
                                            return f(s(k(e, t)), !t.includes("@@"))
                                        }
                                        if (u(["^\\*"]))
                                            return m(t(l(), {
                                                parser: "__ng_directive"
                                            }));
                                        let r = /{{(.+?)}}/s
                                          , o = l();
                                        if (r.test(o)) {
                                            let e = [];
                                            for (let[u,s] of o.split(r).entries())
                                                if (u % 2 == 0)
                                                    e.push(p(s));
                                                else
                                                    try {
                                                        e.push(n(["{{", i([a, t(s, {
                                                            parser: "__ng_interpolation",
                                                            __isInHtmlInterpolation: !0
                                                        })]), a, "}}"]))
                                                    } catch {
                                                        e.push("{{", p(s), "}}")
                                                    }
                                            return n(e)
                                        }
                                    }
                                    return null
                                }(I, (e,t)=>v(e, Object.assign({
                                    __isInHtmlAttribute: !0,
                                    __embeddedInHtml: !0
                                }, t), {
                                    stripTrailingHardline: !0
                                }), P);
                                if (e)
                                    return [I.rawName, '="', n(l(e, e=>"string" == typeof e ? e.replace(/"/g, "&quot;") : e)), '"'];
                                break
                            }
                        case "front-matter":
                            return c(I, v)
                        }
                    }
                }
            }), n4 = h({
                "src/language-html/print/children.js"(e, t) {
                    v();
                    var {builders: {breakParent: r, group: n, ifBreak: u, line: i, softline: a, hardline: s}, utils: {replaceTextEndOfLine: o}} = W()
                      , {locStart: l, locEnd: p} = n2()
                      , {forceBreakChildren: c, forceNextEmptyLine: d, isTextLikeNode: D, hasPrettierIgnore: f, preferHardlineAsLeadingSpaces: m} = nX()
                      , {printOpeningTagPrefix: g, needsToBorrowNextOpeningTagStartMarker: y, printOpeningTagStartMarker: h, needsToBorrowPrevClosingTagEndMarker: E, printClosingTagEndMarker: C, printClosingTagSuffix: F, needsToBorrowParentClosingTagStartMarker: A} = n3();
                    function x(e, t, r) {
                        let n = e.getValue();
                        return f(n) ? [g(n, t), ...o(t.originalText.slice(l(n) + (n.prev && y(n.prev) ? h(n).length : 0), p(n) - (n.next && E(n.next) ? C(n, t).length : 0))), F(n, t)] : r()
                    }
                    function b(e, t) {
                        return D(e) && D(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? m(t) ? s : i : "" : m(t) ? s : a : y(e) && (f(t) || t.firstChild || t.isSelfClosing || "element" === t.type && t.attrs.length > 0) || "element" === e.type && e.isSelfClosing && E(t) ? "" : !t.isLeadingSpaceSensitive || m(t) || E(t) && e.lastChild && A(e.lastChild) && e.lastChild.lastChild && A(e.lastChild.lastChild) ? s : t.hasLeadingSpaces ? i : a
                    }
                    t.exports = {
                        printChildren: function(e, t, i) {
                            let o = e.getValue();
                            if (c(o))
                                return [r, ...e.map(e=>{
                                    let r = e.getValue()
                                      , n = r.prev ? b(r.prev, r) : "";
                                    return [n ? [n, d(r.prev) ? s : ""] : "", x(e, t, i)]
                                }
                                , "children")];
                            let l = o.children.map(()=>Symbol(""));
                            return e.map((e,r)=>{
                                let o = e.getValue();
                                if (D(o)) {
                                    if (o.prev && D(o.prev)) {
                                        let r = b(o.prev, o);
                                        if (r)
                                            return d(o.prev) ? [s, s, x(e, t, i)] : [r, x(e, t, i)]
                                    }
                                    return x(e, t, i)
                                }
                                let p = []
                                  , c = []
                                  , f = []
                                  , m = []
                                  , g = o.prev ? b(o.prev, o) : ""
                                  , y = o.next ? b(o, o.next) : "";
                                return g && (d(o.prev) ? p.push(s, s) : g === s ? p.push(s) : D(o.prev) ? c.push(g) : c.push(u("", a, {
                                    groupId: l[r - 1]
                                }))),
                                y && (d(o) ? D(o.next) && m.push(s, s) : y === s ? D(o.next) && m.push(s) : f.push(y)),
                                [...p, n([...c, n([x(e, t, i), ...f], {
                                    id: l[r]
                                })]), ...m]
                            }
                            , "children")
                        }
                    }
                }
            }), ue = h({
                "src/language-html/print/element.js"(e, t) {
                    v();
                    var {builders: {breakParent: r, dedentToRoot: n, group: u, ifBreak: i, indentIfBreak: a, indent: s, line: o, softline: l}, utils: {replaceTextEndOfLine: p}} = W()
                      , c = n9()
                      , {shouldPreserveContent: d, isScriptLikeTag: D, isVueCustomBlock: f, countParents: m, forceBreakContent: g} = nX()
                      , {printOpeningTagPrefix: y, printOpeningTag: h, printClosingTagSuffix: E, printClosingTag: C, needsToBorrowPrevClosingTagEndMarker: F, needsToBorrowLastChildClosingTagEndMarker: A} = n3()
                      , {printChildren: x} = n4();
                    t.exports = {
                        printElement: function(e, t, v) {
                            var b, S;
                            let T = e.getValue();
                            if (d(T, t))
                                return [y(T, t), u(h(e, t, v)), ...p(c(T, t)), ...C(T, t), E(T, t)];
                            let B = 1 === T.children.length && "interpolation" === T.firstChild.type && T.firstChild.isLeadingSpaceSensitive && !T.firstChild.hasLeadingSpaces && T.lastChild.isTrailingSpaceSensitive && !T.lastChild.hasTrailingSpaces
                              , N = Symbol("element-attr-group-id");
                            return S = 0 === T.children.length ? T.hasDanglingSpaces && T.isDanglingSpaceSensitive ? o : "" : [g(T) ? r : "", (b = [B ? i(l, "", {
                                groupId: N
                            }) : T.firstChild.hasLeadingSpaces && T.firstChild.isLeadingSpaceSensitive ? o : "text" === T.firstChild.type && T.isWhitespaceSensitive && T.isIndentationSensitive ? n(l) : l, x(e, t, v)],
                            B ? a(b, {
                                groupId: N
                            }) : (D(T) || f(T, t)) && "root" === T.parent.type && "vue" === t.parser && !t.vueIndentScriptAndStyle ? b : s(b)), (T.next ? F(T.next) : A(T.parent)) ? T.lastChild.hasTrailingSpaces && T.lastChild.isTrailingSpaceSensitive ? " " : "" : B ? i(l, "", {
                                groupId: N
                            }) : T.lastChild.hasTrailingSpaces && T.lastChild.isTrailingSpaceSensitive ? o : ("comment" === T.lastChild.type || "text" === T.lastChild.type && T.isWhitespaceSensitive && T.isIndentationSensitive) && RegExp(`\\n[\\t ]{${t.tabWidth * m(e, e=>e.parent && "root" !== e.parent.type)}}$`).test(T.lastChild.value) ? "" : l],
                            u([u(h(e, t, v), {
                                id: N
                            }), S, C(T, t)])
                        }
                    }
                }
            }), ut = h({
                "src/language-html/printer-html.js"(e, t) {
                    v();
                    var {builders: {fill: r, group: n, hardline: u, literalline: i}, utils: {cleanDoc: a, getDocParts: s, isConcat: o, replaceTextEndOfLine: l}} = W()
                      , p = nU()
                      , {countChars: c, unescapeQuoteEntities: d, getTextValueParts: D} = nX()
                      , f = n0()
                      , {insertPragma: m} = n1()
                      , {locStart: g, locEnd: y} = n2()
                      , h = n5()
                      , {printClosingTagSuffix: E, printClosingTagEnd: C, printOpeningTagPrefix: F, printOpeningTagStart: A} = n3()
                      , {printElement: x} = ue()
                      , {printChildren: b} = n4();
                    t.exports = {
                        preprocess: f,
                        print: function(e, t, p) {
                            let f = e.getValue();
                            switch (f.type) {
                            case "front-matter":
                                return l(f.raw);
                            case "root":
                                return t.__onHtmlRoot && t.__onHtmlRoot(f),
                                [n(b(e, t, p)), u];
                            case "element":
                            case "ieConditionalComment":
                                return x(e, t, p);
                            case "ieConditionalStartComment":
                            case "ieConditionalEndComment":
                                return [A(f), C(f)];
                            case "interpolation":
                                return [A(f, t), ...e.map(p, "children"), C(f, t)];
                            case "text":
                                {
                                    if ("interpolation" === f.parent.type) {
                                        let e = /\n[^\S\n]*$/
                                          , t = e.test(f.value);
                                        return [...l(t ? f.value.replace(e, "") : f.value), t ? u : ""]
                                    }
                                    let e = a([F(f, t), ...D(f), E(f, t)]);
                                    return o(e) || "fill" === e.type ? r(s(e)) : e
                                }
                            case "docType":
                                return [n([A(f, t), " ", f.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), C(f, t)];
                            case "comment":
                                return [F(f, t), ...l(t.originalText.slice(g(f), y(f)), i), E(f, t)];
                            case "attribute":
                                {
                                    if (null === f.value)
                                        return f.rawName;
                                    let e = d(f.value)
                                      , t = c(e, "'") < c(e, '"') ? "'" : '"';
                                    return [f.rawName, "=", t, ...l('"' === t ? e.replace(/"/g, "&quot;") : e.replace(/'/g, "&apos;")), t]
                                }
                            default:
                                throw Error(`Unexpected node type ${f.type}`)
                            }
                        },
                        insertPragma: m,
                        massageAstNode: p,
                        embed: h
                    }
                }
            }), ur = h({
                "src/language-html/options.js"(e, t) {
                    v();
                    var r = rQ()
                      , n = "HTML";
                    t.exports = {
                        bracketSameLine: r.bracketSameLine,
                        htmlWhitespaceSensitivity: {
                            since: "1.15.0",
                            category: n,
                            type: "choice",
                            default: "css",
                            description: "How to handle whitespaces in HTML.",
                            choices: [{
                                value: "css",
                                description: "Respect the default value of CSS display property."
                            }, {
                                value: "strict",
                                description: "Whitespaces are considered sensitive."
                            }, {
                                value: "ignore",
                                description: "Whitespaces are considered insensitive."
                            }]
                        },
                        singleAttributePerLine: r.singleAttributePerLine,
                        vueIndentScriptAndStyle: {
                            since: "1.19.0",
                            category: n,
                            type: "boolean",
                            default: !1,
                            description: "Indent script and style tags in Vue files."
                        }
                    }
                }
            }), un = h({
                "src/language-html/parsers.js"() {
                    v()
                }
            }), uu = h({
                "node_modules/linguist-languages/data/HTML.json"(e, t) {
                    t.exports = {
                        name: "HTML",
                        type: "markup",
                        tmScope: "text.html.basic",
                        aceMode: "html",
                        codemirrorMode: "htmlmixed",
                        codemirrorMimeType: "text/html",
                        color: "#e34c26",
                        aliases: ["xhtml"],
                        extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"],
                        languageId: 146
                    }
                }
            }), ui = h({
                "node_modules/linguist-languages/data/Vue.json"(e, t) {
                    t.exports = {
                        name: "Vue",
                        type: "markup",
                        color: "#41b883",
                        extensions: [".vue"],
                        tmScope: "text.html.vue",
                        aceMode: "html",
                        languageId: 391
                    }
                }
            }), ua = h({
                "src/language-html/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = ut()
                      , u = ur()
                      , i = un()
                      , a = [r(uu(), ()=>({
                        name: "Angular",
                        since: "1.15.0",
                        parsers: ["angular"],
                        vscodeLanguageIds: ["html"],
                        extensions: [".component.html"],
                        filenames: []
                    })), r(uu(), e=>({
                        since: "1.15.0",
                        parsers: ["html"],
                        vscodeLanguageIds: ["html"],
                        extensions: [...e.extensions, ".mjml"]
                    })), r(uu(), ()=>({
                        name: "Lightning Web Components",
                        since: "1.17.0",
                        parsers: ["lwc"],
                        vscodeLanguageIds: ["html"],
                        extensions: [],
                        filenames: []
                    })), r(ui(), ()=>({
                        since: "1.10.0",
                        parsers: ["vue"],
                        vscodeLanguageIds: ["vue"]
                    }))];
                    t.exports = {
                        languages: a,
                        printers: {
                            html: n
                        },
                        options: u,
                        parsers: i
                    }
                }
            }), us = h({
                "src/language-yaml/pragma.js"(e, t) {
                    v(),
                    t.exports = {
                        isPragma: function(e) {
                            return /^\s*@(?:prettier|format)\s*$/.test(e)
                        },
                        hasPragma: function(e) {
                            return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(e)
                        },
                        insertPragma: function(e) {
                            return `# @format

${e}`
                        }
                    }
                }
            }), uo = h({
                "src/language-yaml/loc.js"(e, t) {
                    v(),
                    t.exports = {
                        locStart: function(e) {
                            return e.position.start.offset
                        },
                        locEnd: function(e) {
                            return e.position.end.offset
                        }
                    }
                }
            }), ul = h({
                "src/language-yaml/embed.js"(e, t) {
                    v(),
                    t.exports = function(e, t, r, n) {
                        if ("root" === e.getValue().type && n.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(n.filepath))
                            return r(n.originalText, Object.assign(Object.assign({}, n), {}, {
                                parser: "json"
                            }))
                    }
                }
            }), up = h({
                "src/language-yaml/utils.js"(e, t) {
                    v();
                    var {getLast: r, isNonEmptyArray: n} = ec();
                    function u(e, t) {
                        return e && "string" == typeof e.type && (!t || t.includes(e.type))
                    }
                    function i(e) {
                        return "prettier-ignore" === e.value.trim()
                    }
                    function a(e) {
                        return n(null == e ? void 0 : e.leadingComments)
                    }
                    function s(e) {
                        return n(null == e ? void 0 : e.middleComments)
                    }
                    function o(e) {
                        return null == e ? void 0 : e.indicatorComment
                    }
                    function l(e) {
                        return null == e ? void 0 : e.trailingComment
                    }
                    function p(e) {
                        return n(null == e ? void 0 : e.endComments)
                    }
                    function c(e) {
                        let t = [], r;
                        for (let n of e.split(/( +)/))
                            " " !== n ? " " === r ? t.push(n) : t.push((t.pop() || "") + n) : void 0 === r && t.unshift(""),
                            r = n;
                        return " " === r && t.push((t.pop() || "") + " "),
                        "" === t[0] && (t.shift(),
                        t.unshift(" " + (t.shift() || ""))),
                        t
                    }
                    t.exports = {
                        getLast: r,
                        getAncestorCount: function(e, t) {
                            let r = 0
                              , n = e.stack.length - 1;
                            for (let i = 0; i < n; i++) {
                                let n = e.stack[i];
                                u(n) && t(n) && r++
                            }
                            return r
                        },
                        isNode: u,
                        isEmptyNode: function(e) {
                            return !n(e.children) && !(a(e) || s(e) || o(e) || l(e) || p(e))
                        },
                        isInlineNode: function(e) {
                            if (!e)
                                return !0;
                            switch (e.type) {
                            case "plain":
                            case "quoteDouble":
                            case "quoteSingle":
                            case "alias":
                            case "flowMapping":
                            case "flowSequence":
                                return !0;
                            default:
                                return !1
                            }
                        },
                        mapNode: function e(t, r, n) {
                            return r("children"in t ? Object.assign(Object.assign({}, t), {}, {
                                children: t.children.map(n=>e(n, r, t))
                            }) : t, n)
                        },
                        defineShortcut: function(e, t, r) {
                            Object.defineProperty(e, t, {
                                get: r,
                                enumerable: !1
                            })
                        },
                        isNextLineEmpty: function(e, t) {
                            let r = 0
                              , n = t.length;
                            for (let u = e.position.end.offset - 1; u < n; u++) {
                                let e = t[u];
                                if (e === `
` && r++,
                                1 === r && /\S/.test(e))
                                    break;
                                if (2 === r)
                                    return !0
                            }
                            return !1
                        },
                        isLastDescendantNode: function(e) {
                            switch (e.getValue().type) {
                            case "tag":
                            case "anchor":
                            case "comment":
                                return !1
                            }
                            let t = e.stack.length;
                            for (let r = 1; r < t; r++) {
                                let t = e.stack[r]
                                  , n = e.stack[r - 1];
                                if (Array.isArray(n) && "number" == typeof t && t !== n.length - 1)
                                    return !1
                            }
                            return !0
                        },
                        getBlockValueLineContents: function(e, t) {
                            let {parentIndent: n, isLastDescendant: u, options: i} = t, a = e.position.start.line === e.position.end.line ? "" : i.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], s;
                            if (null === e.indent) {
                                let e = a.match(/^(?<leadingSpace> *)[^\n\r ]/m);
                                s = e ? e.groups.leadingSpace.length : Number.POSITIVE_INFINITY
                            } else
                                s = e.indent - 1 + n;
                            let o = a.split(`
`).map(e=>e.slice(s));
                            if ("preserve" === i.proseWrap || "blockLiteral" === e.type)
                                return l(o.map(e=>0 === e.length ? [] : [e]));
                            return l(o.map(e=>0 === e.length ? [] : c(e)).reduce((e,t,n)=>0 !== n && o[n - 1].length > 0 && t.length > 0 && !/^\s/.test(t[0]) && !/^\s|\s$/.test(r(e)) ? [...e.slice(0, -1), [...r(e), ...t]] : [...e, t], []).map(e=>e.reduce((e,t)=>e.length > 0 && /\s$/.test(r(e)) ? [...e.slice(0, -1), r(e) + " " + t] : [...e, t], [])).map(e=>"never" === i.proseWrap ? [e.join(" ")] : e));
                            function l(t) {
                                if ("keep" === e.chomping)
                                    return 0 === r(t).length ? t.slice(0, -1) : t;
                                let n = 0;
                                for (let e = t.length - 1; e >= 0 && 0 === t[e].length; e--)
                                    n++;
                                return 0 === n ? t : n >= 2 && !u ? t.slice(0, -(n - 1)) : t.slice(0, -n)
                            }
                        },
                        getFlowScalarLineContents: function(e, t, n) {
                            let u = t.split(`
`).map((e,t,r)=>0 === t && t === r.length - 1 ? e : 0 !== t && t !== r.length - 1 ? e.trim() : 0 === t ? e.trimEnd() : e.trimStart());
                            return "preserve" === n.proseWrap ? u.map(e=>0 === e.length ? [] : [e]) : u.map(e=>0 === e.length ? [] : c(e)).reduce((t,n,i)=>0 !== i && u[i - 1].length > 0 && n.length > 0 && !("quoteDouble" === e && r(r(t)).endsWith("\\")) ? [...t.slice(0, -1), [...r(t), ...n]] : [...t, n], []).map(e=>"never" === n.proseWrap ? [e.join(" ")] : e)
                        },
                        getLastDescendantNode: function e(t) {
                            return n(t.children) ? e(r(t.children)) : t
                        },
                        hasPrettierIgnore: function(e) {
                            let t = e.getValue();
                            if ("documentBody" === t.type) {
                                let t = e.getParentNode();
                                return p(t.head) && i(r(t.head.endComments))
                            }
                            return a(t) && i(r(t.leadingComments))
                        },
                        hasLeadingComments: a,
                        hasMiddleComments: s,
                        hasIndicatorComment: o,
                        hasTrailingComment: l,
                        hasEndComments: p
                    }
                }
            }), uc = h({
                "src/language-yaml/print-preprocess.js"(e, t) {
                    v();
                    var {defineShortcut: r, mapNode: n} = up();
                    function u(e) {
                        switch (e.type) {
                        case "document":
                            r(e, "head", ()=>e.children[0]),
                            r(e, "body", ()=>e.children[1]);
                            break;
                        case "documentBody":
                        case "sequenceItem":
                        case "flowSequenceItem":
                        case "mappingKey":
                        case "mappingValue":
                            r(e, "content", ()=>e.children[0]);
                            break;
                        case "mappingItem":
                        case "flowMappingItem":
                            r(e, "key", ()=>e.children[0]),
                            r(e, "value", ()=>e.children[1])
                        }
                        return e
                    }
                    t.exports = function(e) {
                        return n(e, u)
                    }
                }
            }), ud = h({
                "src/language-yaml/print/misc.js"(e, t) {
                    v();
                    var {builders: {softline: r, align: n}} = W()
                      , {hasEndComments: u, isNextLineEmpty: i, isNode: a} = up()
                      , s = new WeakMap;
                    function o(e) {
                        return u(e) && !a(e, ["documentHead", "documentBody", "flowMapping", "flowSequence"])
                    }
                    t.exports = {
                        alignWithSpaces: function(e, t) {
                            return n(" ".repeat(e), t)
                        },
                        shouldPrintEndComments: o,
                        printNextEmptyLine: function(e, t) {
                            let n = e.getValue(), u = e.stack[0], a;
                            return s.has(u) ? a = s.get(u) : (a = new Set,
                            s.set(u, a)),
                            !a.has(n.position.end.line) && (a.add(n.position.end.line),
                            i(n, t) && !o(e.getParentNode())) ? r : ""
                        }
                    }
                }
            }), uD = h({
                "src/language-yaml/print/flow-mapping-sequence.js"(e, t) {
                    v();
                    var {builders: {ifBreak: r, line: n, softline: u, hardline: i, join: a}} = W()
                      , {isEmptyNode: s, getLast: o, hasEndComments: l} = up()
                      , {printNextEmptyLine: p, alignWithSpaces: c} = ud();
                    function d(e, t, d) {
                        let D, f = e.getValue(), m = "flowMapping" === f.type, g = u;
                        m && f.children.length > 0 && d.bracketSpacing && (g = n);
                        let y = o(f.children)
                          , h = y && "flowMappingItem" === y.type && s(y.key) && s(y.value);
                        return [m ? "{" : "[", c(d.tabWidth, [g, (D = e.getValue(),
                        e.map((e,r)=>[t(), r === D.children.length - 1 ? "" : [",", n, D.children[r].position.start.line !== D.children[r + 1].position.start.line ? p(e, d.originalText) : ""]], "children")), "none" === d.trailingComma ? "" : r(","), l(f) ? [i, a(i, e.map(t, "endComments"))] : ""]), h ? "" : g, m ? "}" : "]"]
                    }
                    t.exports = {
                        printFlowMapping: d,
                        printFlowSequence: d
                    }
                }
            }), uf = h({
                "src/language-yaml/print/mapping-item.js"(e, t) {
                    v();
                    var {builders: {conditionalGroup: r, group: n, hardline: u, ifBreak: i, join: a, line: s}} = W()
                      , {hasLeadingComments: o, hasMiddleComments: l, hasTrailingComment: p, hasEndComments: c, isNode: d, isEmptyNode: D, isInlineNode: f} = up()
                      , {alignWithSpaces: m} = ud();
                    function g(e, t) {
                        if (!e)
                            return !0;
                        switch (e.type) {
                        case "plain":
                        case "quoteSingle":
                        case "quoteDouble":
                            break;
                        case "alias":
                            return !0;
                        default:
                            return !1
                        }
                        if ("preserve" === t.proseWrap)
                            return e.position.start.line === e.position.end.line;
                        if (/\\$/m.test(t.originalText.slice(e.position.start.offset, e.position.end.offset)))
                            return !1;
                        switch (t.proseWrap) {
                        case "never":
                            return !e.value.includes(`
`);
                        case "always":
                            return !/[\n ]/.test(e.value);
                        default:
                            return !1
                        }
                    }
                    t.exports = function(e, t, y, h, E) {
                        let {key: C, value: F} = e
                          , A = D(C)
                          , v = D(F);
                        if (A && v)
                            return ": ";
                        let x = h("key")
                          , b = e.key.content && "alias" === e.key.content.type ? " " : "";
                        if (v)
                            return "flowMappingItem" === e.type && "flowMapping" === t.type ? x : "mappingItem" === e.type && g(C.content, E) && !p(C.content) && (!t.tag || "tag:yaml.org,2002:set" !== t.tag.value) ? [x, b, ":"] : ["? ", m(2, x)];
                        let S = h("value");
                        if (A)
                            return [": ", m(2, S)];
                        if (o(F) || !f(C.content))
                            return ["? ", m(2, x), u, a("", y.map(h, "value", "leadingComments").map(e=>[e, u])), ": ", m(2, S)];
                        if (function(e) {
                            if (!e)
                                return !0;
                            switch (e.type) {
                            case "plain":
                            case "quoteDouble":
                            case "quoteSingle":
                                return e.position.start.line === e.position.end.line;
                            case "alias":
                                return !0;
                            default:
                                return !1
                            }
                        }(C.content) && !o(C.content) && !l(C.content) && !p(C.content) && !c(C) && !o(F.content) && !l(F.content) && !c(F) && g(F.content, E))
                            return [x, b, ": ", S];
                        let T = Symbol("mappingKey")
                          , B = n([i("? "), n(m(2, x), {
                            id: T
                        })])
                          , N = [u, ": ", m(2, S)]
                          , w = [b, ":"];
                        o(F.content) || c(F) && F.content && !d(F.content, ["mapping", "sequence"]) || "mapping" === t.type && p(C.content) && f(F.content) || d(F.content, ["mapping", "sequence"]) && null === F.content.tag && null === F.content.anchor ? w.push(u) : F.content && w.push(s),
                        w.push(S);
                        let k = m(E.tabWidth, w);
                        return !g(C.content, E) || o(C.content) || l(C.content) || c(C) ? r([[B, i(N, k, {
                            groupId: T
                        })]]) : r([[x, k]])
                    }
                }
            }), um = h({
                "src/language-yaml/print/block.js"(e, t) {
                    v();
                    var {builders: {dedent: r, dedentToRoot: n, fill: u, hardline: i, join: a, line: s, literalline: o, markAsRoot: l}, utils: {getDocParts: p}} = W()
                      , {getAncestorCount: c, getBlockValueLineContents: d, hasIndicatorComment: D, isLastDescendantNode: f, isNode: m} = up()
                      , {alignWithSpaces: g} = ud();
                    t.exports = function(e, t, y) {
                        let h = e.getValue()
                          , E = c(e, e=>m(e, ["sequence", "mapping"]))
                          , C = f(e)
                          , F = ["blockFolded" === h.type ? ">" : "|"];
                        null !== h.indent && F.push(h.indent.toString()),
                        "clip" !== h.chomping && F.push("keep" === h.chomping ? "+" : "-"),
                        D(h) && F.push(" ", t("indicatorComment"));
                        let A = d(h, {
                            parentIndent: E,
                            isLastDescendant: C,
                            options: y
                        })
                          , v = [];
                        for (let[e,t] of A.entries())
                            0 === e && v.push(i),
                            v.push(u(p(a(s, t)))),
                            e !== A.length - 1 ? v.push(0 === t.length ? i : l(o)) : "keep" === h.chomping && C && v.push(n(0 === t.length ? i : o));
                        return null === h.indent ? F.push(r(g(y.tabWidth, v))) : F.push(n(g(h.indent - 1 + E, v))),
                        F
                    }
                }
            }), ug = h({
                "src/language-yaml/printer-yaml.js"(e, t) {
                    v();
                    var {builders: {breakParent: r, fill: n, group: u, hardline: i, join: a, line: s, lineSuffix: o, literalline: l}, utils: {getDocParts: p, replaceTextEndOfLine: c}} = W()
                      , {isPreviousLineEmpty: d} = ec()
                      , {insertPragma: D, isPragma: f} = us()
                      , {locStart: m} = uo()
                      , g = ul()
                      , {getFlowScalarLineContents: y, getLastDescendantNode: h, hasLeadingComments: E, hasMiddleComments: C, hasTrailingComment: F, hasEndComments: A, hasPrettierIgnore: x, isLastDescendantNode: b, isNode: S, isInlineNode: T} = up()
                      , B = uc()
                      , {alignWithSpaces: N, printNextEmptyLine: w, shouldPrintEndComments: k} = ud()
                      , {printFlowMapping: j, printFlowSequence: P} = uD()
                      , I = uf()
                      , O = um();
                    function L(e, t) {
                        return F(e) || t && (t.head.children.length > 0 || A(t.head))
                    }
                    function _(e, t, r) {
                        return a(i, y(e, t, r).map(e=>n(p(a(s, e)))))
                    }
                    t.exports = {
                        preprocess: B,
                        embed: g,
                        print: function(e, t, n) {
                            let s = e.getValue()
                              , p = [];
                            "mappingValue" !== s.type && E(s) && p.push([a(i, e.map(n, "leadingComments")), i]);
                            let {tag: D, anchor: f} = s;
                            D && p.push(n("tag")),
                            D && f && p.push(" "),
                            f && p.push(n("anchor"));
                            let g = "";
                            S(s, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !b(e) && (g = w(e, t.originalText)),
                            (D || f) && (S(s, ["sequence", "mapping"]) && !C(s) ? p.push(i) : p.push(" ")),
                            C(s) && p.push([1 === s.middleComments.length ? "" : i, a(i, e.map(n, "middleComments")), i]);
                            let y = e.getParentNode();
                            return x(e) ? p.push(c(t.originalText.slice(s.position.start.offset, s.position.end.offset).trimEnd(), l)) : p.push(u(function(e, t, r, n, u) {
                                switch (e.type) {
                                case "root":
                                    {
                                        let {children: t} = e
                                          , n = [];
                                        r.each((e,r)=>{
                                            let a = t[r]
                                              , s = t[r + 1];
                                            0 !== r && n.push(i),
                                            n.push(u()),
                                            L(a, s) ? (n.push(i, "..."),
                                            F(a) && n.push(" ", u("trailingComment"))) : s && !F(s.head) && n.push(i, "---")
                                        }
                                        , "children");
                                        let a = h(e);
                                        return S(a, ["blockLiteral", "blockFolded"]) && "keep" === a.chomping || n.push(i),
                                        n
                                    }
                                case "document":
                                    {
                                        let s = t.children[r.getName() + 1]
                                          , o = [];
                                        return "head" === (t.children[0] === e && /---(?:\s|$)/.test(n.originalText.slice(m(e), m(e) + 4)) || e.head.children.length > 0 || A(e.head) || F(e.head) ? "head" : !L(e, s) && !!s && "root") && ((e.head.children.length > 0 || e.head.endComments.length > 0) && o.push(u("head")),
                                        F(e.head) ? o.push(["---", " ", u(["head", "trailingComment"])]) : o.push("---")),
                                        (e.body.children.length > 0 || A(e.body)) && o.push(u("body")),
                                        a(i, o)
                                    }
                                case "documentHead":
                                    return a(i, [...r.map(u, "children"), ...r.map(u, "endComments")]);
                                case "documentBody":
                                    {
                                        let {children: t, endComments: n} = e
                                          , s = "";
                                        if (t.length > 0 && n.length > 0) {
                                            let t = h(e);
                                            S(t, ["blockFolded", "blockLiteral"]) ? "keep" !== t.chomping && (s = [i, i]) : s = i
                                        }
                                        return [a(i, r.map(u, "children")), s, a(i, r.map(u, "endComments"))]
                                    }
                                case "directive":
                                    return ["%", a(" ", [e.name, ...e.parameters])];
                                case "comment":
                                    return ["#", e.value];
                                case "alias":
                                    return ["*", e.value];
                                case "tag":
                                    return n.originalText.slice(e.position.start.offset, e.position.end.offset);
                                case "anchor":
                                    return ["&", e.value];
                                case "plain":
                                    return _(e.type, n.originalText.slice(e.position.start.offset, e.position.end.offset), n);
                                case "quoteDouble":
                                case "quoteSingle":
                                    {
                                        let t = n.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);
                                        if ("quoteSingle" === e.type && t.includes("\\") || "quoteDouble" === e.type && /\\[^"]/.test(t)) {
                                            let r = "quoteDouble" === e.type ? '"' : "'";
                                            return [r, _(e.type, t, n), r]
                                        }
                                        if (t.includes('"'))
                                            return ["'", _(e.type, "quoteDouble" === e.type ? t.replace(/\\"/g, '"').replace(/'/g, "'".repeat(2)) : t, n), "'"];
                                        if (t.includes("'"))
                                            return ['"', _(e.type, "quoteSingle" === e.type ? t.replace(/''/g, "'") : t, n), '"'];
                                        let r = n.singleQuote ? "'" : '"';
                                        return [r, _(e.type, t, n), r]
                                    }
                                case "blockFolded":
                                case "blockLiteral":
                                    return O(r, u, n);
                                case "mapping":
                                case "sequence":
                                    return a(i, r.map(u, "children"));
                                case "sequenceItem":
                                    return ["- ", N(2, e.content ? u("content") : "")];
                                case "mappingKey":
                                case "mappingValue":
                                    return e.content ? u("content") : "";
                                case "mappingItem":
                                case "flowMappingItem":
                                    return I(e, t, r, u, n);
                                case "flowMapping":
                                    return j(r, u, n);
                                case "flowSequence":
                                    return P(r, u, n);
                                case "flowSequenceItem":
                                    return u("content");
                                default:
                                    throw Error(`Unexpected node type ${e.type}`)
                                }
                            }(s, y, e, t, n))),
                            F(s) && !S(s, ["document", "documentHead"]) && p.push(o(["mappingValue" !== s.type || s.content ? " " : "", "mappingKey" === y.type && "mapping" === e.getParentNode(2).type && T(s) ? "" : r, n("trailingComment")])),
                            k(s) && p.push(N("sequenceItem" === s.type ? 2 : 0, [i, a(i, e.map(e=>[d(t.originalText, e.getValue(), m) ? i : "", n()], "endComments"))])),
                            p.push(g),
                            p
                        },
                        massageAstNode: function(e, t) {
                            if (S(t))
                                switch (delete t.position,
                                t.type) {
                                case "comment":
                                    if (f(t.value))
                                        return null;
                                    break;
                                case "quoteDouble":
                                case "quoteSingle":
                                    t.type = "quote"
                                }
                        },
                        insertPragma: D
                    }
                }
            }), uy = h({
                "src/language-yaml/options.js"(e, t) {
                    v();
                    var r = rQ();
                    t.exports = {
                        bracketSpacing: r.bracketSpacing,
                        singleQuote: r.singleQuote,
                        proseWrap: r.proseWrap
                    }
                }
            }), uh = h({
                "src/language-yaml/parsers.js"() {
                    v()
                }
            }), uE = h({
                "node_modules/linguist-languages/data/YAML.json"(e, t) {
                    t.exports = {
                        name: "YAML",
                        type: "data",
                        color: "#cb171e",
                        tmScope: "source.yaml",
                        aliases: ["yml"],
                        extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"],
                        filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"],
                        aceMode: "yaml",
                        codemirrorMode: "yaml",
                        codemirrorMimeType: "text/x-yaml",
                        languageId: 407
                    }
                }
            }), uC = h({
                "src/language-yaml/index.js"(e, t) {
                    v();
                    var r = tR()
                      , n = ug()
                      , u = uy()
                      , i = uh()
                      , a = [r(uE(), e=>({
                        since: "1.14.0",
                        parsers: ["yaml"],
                        vscodeLanguageIds: ["yaml", "ansible", "home-assistant"],
                        filenames: [...e.filenames.filter(e=>"yarn.lock" !== e), ".prettierrc", ".stylelintrc", ".lintstagedrc"]
                    }))];
                    t.exports = {
                        languages: a,
                        printers: {
                            yaml: n
                        },
                        options: u,
                        parsers: i
                    }
                }
            }), uF = h({
                "src/languages.js"(e, t) {
                    v(),
                    t.exports = [r7(), ng(), nx(), nk(), nJ(), ua(), uC()]
                }
            });
            v();
            var {version: uA} = x()
              , uv = tM()
              , {getSupportInfo: ux} = eu()
              , ub = t$()
              , uS = uF()
              , uT = W();
            function uB(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return function() {
                    for (var r = arguments.length, n = Array(r), u = 0; u < r; u++)
                        n[u] = arguments[u];
                    let i = n[t] || {}
                      , a = i.plugins || [];
                    return n[t] = Object.assign(Object.assign({}, i), {}, {
                        plugins: [...uS, ...Array.isArray(a) ? a : Object.values(a)]
                    }),
                    e(...n)
                }
            }
            var uN = uB(uv.formatWithCursor);
            i.exports = {
                formatWithCursor: uN,
                format: (e,t)=>uN(e, t).formatted,
                check(e, t) {
                    let {formatted: r} = uN(e, t);
                    return r === e
                },
                doc: uT,
                getSupportInfo: uB(ux, 0),
                version: uA,
                util: ub,
                __debug: {
                    parse: uB(uv.parse),
                    formatAST: uB(uv.formatAST),
                    formatDoc: uB(uv.formatDoc),
                    printToDoc: uB(uv.printToDoc),
                    printDocToString: uB(uv.printDocToString)
                }
            }
        }
        )())
    }
}]);
