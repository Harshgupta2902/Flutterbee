(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[218], {
    3559: function(e, t, s) {
        var r, i, a, n, o, h, l, p, c, u, d, m, f, y, x, g, P, b, T, A, E, S, w, v, C, N, I, k, L, M, O, D, F, B, j, R, U, _, z, H, V, $, q, K, W, J, X, G, Y, Q, Z, ee, et, es, er, ei, ea, en, eo, eh, el, ep, ec, eu, ed, em, ef, ey, ex, eg, eP, eb, eT, eA, eE, eS, ew, ev, eC, eN, eI, ek, eL;
        e.exports = (i = (r = (e,t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t),
        t.exports))((e,t)=>{
            var r = function(e) {
                return e && e.Math == Math && e
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof s.g && s.g) || function() {
                return this
            }() || Function("return this")()
        }
        ),
        a = r((e,t)=>{
            t.exports = function(e) {
                try {
                    return !!e()
                } catch {
                    return !0
                }
            }
        }
        ),
        n = r((e,t)=>{
            var s = a();
            t.exports = !s(function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            })
        }
        ),
        o = r((e,t)=>{
            var s = a();
            t.exports = !s(function() {
                var e = (function() {}
                ).bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            })
        }
        ),
        h = r((e,t)=>{
            var s = o()
              , r = Function.prototype.call;
            t.exports = s ? r.bind(r) : function() {
                return r.apply(r, arguments)
            }
        }
        ),
        l = r(e=>{
            var t = {}.propertyIsEnumerable
              , s = Object.getOwnPropertyDescriptor
              , r = s && !t.call({
                1: 2
            }, 1);
            e.f = r ? function(e) {
                var t = s(this, e);
                return !!t && t.enumerable
            }
            : t
        }
        ),
        p = r((e,t)=>{
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
        c = r((e,t)=>{
            var s = o()
              , r = Function.prototype
              , i = r.call
              , a = s && r.bind.bind(i, i);
            t.exports = s ? a : function(e) {
                return function() {
                    return i.apply(e, arguments)
                }
            }
        }
        ),
        u = r((e,t)=>{
            var s = c()
              , r = s({}.toString)
              , i = s("".slice);
            t.exports = function(e) {
                return i(r(e), 8, -1)
            }
        }
        ),
        d = r((e,t)=>{
            var s = c()
              , r = a()
              , i = u()
              , n = Object
              , o = s("".split);
            t.exports = r(function() {
                return !n("z").propertyIsEnumerable(0)
            }) ? function(e) {
                return "String" == i(e) ? o(e, "") : n(e)
            }
            : n
        }
        ),
        m = r((e,t)=>{
            t.exports = function(e) {
                return null == e
            }
        }
        ),
        f = r((e,t)=>{
            var s = m()
              , r = TypeError;
            t.exports = function(e) {
                if (s(e))
                    throw r("Can't call method on " + e);
                return e
            }
        }
        ),
        y = r((e,t)=>{
            var s = d()
              , r = f();
            t.exports = function(e) {
                return s(r(e))
            }
        }
        ),
        x = r((e,t)=>{
            var s = "object" == typeof document && document.all;
            t.exports = {
                all: s,
                IS_HTMLDDA: typeof s > "u" && void 0 !== s
            }
        }
        ),
        g = r((e,t)=>{
            var s = x()
              , r = s.all;
            t.exports = s.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === r
            }
            : function(e) {
                return "function" == typeof e
            }
        }
        ),
        P = r((e,t)=>{
            var s = g()
              , r = x()
              , i = r.all;
            t.exports = r.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : s(e) || e === i
            }
            : function(e) {
                return "object" == typeof e ? null !== e : s(e)
            }
        }
        ),
        b = r((e,t)=>{
            var s = i()
              , r = g();
            t.exports = function(e, t) {
                var i;
                return arguments.length < 2 ? r(i = s[e]) ? i : void 0 : s[e] && s[e][t]
            }
        }
        ),
        T = r((e,t)=>{
            var s = c();
            t.exports = s({}.isPrototypeOf)
        }
        ),
        A = r((e,t)=>{
            var s = b();
            t.exports = s("navigator", "userAgent") || ""
        }
        ),
        E = r((e,t)=>{
            var s, r, a = i(), n = A(), o = a.process, h = a.Deno, l = o && o.versions || h && h.version, p = l && l.v8;
            p && (r = (s = p.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])),
            !r && n && (!(s = n.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = n.match(/Chrome\/(\d+)/)) && (r = +s[1]),
            t.exports = r
        }
        ),
        S = r((e,t)=>{
            var s = E()
              , r = a();
            t.exports = !!Object.getOwnPropertySymbols && !r(function() {
                var e = Symbol();
                return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && s && s < 41
            })
        }
        ),
        w = r((e,t)=>{
            var s = S();
            t.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
        ),
        v = r((e,t)=>{
            var s = b()
              , r = g()
              , i = T()
              , a = w()
              , n = Object;
            t.exports = a ? function(e) {
                return "symbol" == typeof e
            }
            : function(e) {
                var t = s("Symbol");
                return r(t) && i(t.prototype, n(e))
            }
        }
        ),
        C = r((e,t)=>{
            var s = String;
            t.exports = function(e) {
                try {
                    return s(e)
                } catch {
                    return "Object"
                }
            }
        }
        ),
        N = r((e,t)=>{
            var s = g()
              , r = C()
              , i = TypeError;
            t.exports = function(e) {
                if (s(e))
                    return e;
                throw i(r(e) + " is not a function")
            }
        }
        ),
        I = r((e,t)=>{
            var s = N()
              , r = m();
            t.exports = function(e, t) {
                var i = e[t];
                return r(i) ? void 0 : s(i)
            }
        }
        ),
        k = r((e,t)=>{
            var s = h()
              , r = g()
              , i = P()
              , a = TypeError;
            t.exports = function(e, t) {
                var n, o;
                if ("string" === t && r(n = e.toString) && !i(o = s(n, e)) || r(n = e.valueOf) && !i(o = s(n, e)) || "string" !== t && r(n = e.toString) && !i(o = s(n, e)))
                    return o;
                throw a("Can't convert object to primitive value")
            }
        }
        ),
        L = r((e,t)=>{
            t.exports = !1
        }
        ),
        M = r((e,t)=>{
            var s = i()
              , r = Object.defineProperty;
            t.exports = function(e, t) {
                try {
                    r(s, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch {
                    s[e] = t
                }
                return t
            }
        }
        ),
        O = r((e,t)=>{
            var s = i()
              , r = M()
              , a = "__core-js_shared__"
              , n = s[a] || r(a, {});
            t.exports = n
        }
        ),
        D = r((e,t)=>{
            var s = L()
              , r = O();
            (t.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            }
            )("versions", []).push({
                version: "3.26.1",
                mode: s ? "pure" : "global",
                copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ),
        F = r((e,t)=>{
            var s = f()
              , r = Object;
            t.exports = function(e) {
                return r(s(e))
            }
        }
        ),
        B = r((e,t)=>{
            var s = c()
              , r = F()
              , i = s({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(e, t) {
                return i(r(e), t)
            }
        }
        ),
        j = r((e,t)=>{
            var s = c()
              , r = 0
              , i = Math.random()
              , a = s(1..toString);
            t.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++r + i, 36)
            }
        }
        ),
        R = r((e,t)=>{
            var s = i()
              , r = D()
              , a = B()
              , n = j()
              , o = S()
              , h = w()
              , l = r("wks")
              , p = s.Symbol
              , c = p && p.for
              , u = h ? p : p && p.withoutSetter || n;
            t.exports = function(e) {
                if (!a(l, e) || !(o || "string" == typeof l[e])) {
                    var t = "Symbol." + e;
                    o && a(p, e) ? l[e] = p[e] : h && c ? l[e] = c(t) : l[e] = u(t)
                }
                return l[e]
            }
        }
        ),
        U = r((e,t)=>{
            var s = h()
              , r = P()
              , i = v()
              , a = I()
              , n = k()
              , o = R()
              , l = TypeError
              , p = o("toPrimitive");
            t.exports = function(e, t) {
                if (!r(e) || i(e))
                    return e;
                var o, h = a(e, p);
                if (h) {
                    if (void 0 === t && (t = "default"),
                    !r(o = s(h, e, t)) || i(o))
                        return o;
                    throw l("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"),
                n(e, t)
            }
        }
        ),
        _ = r((e,t)=>{
            var s = U()
              , r = v();
            t.exports = function(e) {
                var t = s(e, "string");
                return r(t) ? t : t + ""
            }
        }
        ),
        z = r((e,t)=>{
            var s = i()
              , r = P()
              , a = s.document
              , n = r(a) && r(a.createElement);
            t.exports = function(e) {
                return n ? a.createElement(e) : {}
            }
        }
        ),
        H = r((e,t)=>{
            var s = n()
              , r = a()
              , i = z();
            t.exports = !s && !r(function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        ),
        V = r(e=>{
            var t = n()
              , s = h()
              , r = l()
              , i = p()
              , a = y()
              , o = _()
              , c = B()
              , u = H()
              , d = Object.getOwnPropertyDescriptor;
            e.f = t ? d : function(e, t) {
                if (e = a(e),
                t = o(t),
                u)
                    try {
                        return d(e, t)
                    } catch {}
                if (c(e, t))
                    return i(!s(r.f, e, t), e[t])
            }
        }
        ),
        $ = r((e,t)=>{
            var s = n()
              , r = a();
            t.exports = s && r(function() {
                return 42 != Object.defineProperty(function() {}, "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            })
        }
        ),
        q = r((e,t)=>{
            var s = P()
              , r = String
              , i = TypeError;
            t.exports = function(e) {
                if (s(e))
                    return e;
                throw i(r(e) + " is not an object")
            }
        }
        ),
        K = r(e=>{
            var t = n()
              , s = H()
              , r = $()
              , i = q()
              , a = _()
              , o = TypeError
              , h = Object.defineProperty
              , l = Object.getOwnPropertyDescriptor
              , p = "enumerable"
              , c = "configurable"
              , u = "writable";
            e.f = t ? r ? function(e, t, s) {
                if (i(e),
                t = a(t),
                i(s),
                "function" == typeof e && "prototype" === t && "value"in s && u in s && !s[u]) {
                    var r = l(e, t);
                    r && r[u] && (e[t] = s.value,
                    s = {
                        configurable: c in s ? s[c] : r[c],
                        enumerable: p in s ? s[p] : r[p],
                        writable: !1
                    })
                }
                return h(e, t, s)
            }
            : h : function(e, t, r) {
                if (i(e),
                t = a(t),
                i(r),
                s)
                    try {
                        return h(e, t, r)
                    } catch {}
                if ("get"in r || "set"in r)
                    throw o("Accessors not supported");
                return "value"in r && (e[t] = r.value),
                e
            }
        }
        ),
        W = r((e,t)=>{
            var s = n()
              , r = K()
              , i = p();
            t.exports = s ? function(e, t, s) {
                return r.f(e, t, i(1, s))
            }
            : function(e, t, s) {
                return e[t] = s,
                e
            }
        }
        ),
        J = r((e,t)=>{
            var s = n()
              , r = B()
              , i = Function.prototype
              , a = s && Object.getOwnPropertyDescriptor
              , o = r(i, "name")
              , h = o && (!s || s && a(i, "name").configurable);
            t.exports = {
                EXISTS: o,
                PROPER: o && "something" === (function() {}
                ).name,
                CONFIGURABLE: h
            }
        }
        ),
        X = r((e,t)=>{
            var s = c()
              , r = g()
              , i = O()
              , a = s(Function.toString);
            r(i.inspectSource) || (i.inspectSource = function(e) {
                return a(e)
            }
            ),
            t.exports = i.inspectSource
        }
        ),
        G = r((e,t)=>{
            var s = i()
              , r = g()
              , a = s.WeakMap;
            t.exports = r(a) && /native code/.test(String(a))
        }
        ),
        Y = r((e,t)=>{
            var s = D()
              , r = j()
              , i = s("keys");
            t.exports = function(e) {
                return i[e] || (i[e] = r(e))
            }
        }
        ),
        Q = r((e,t)=>{
            t.exports = {}
        }
        ),
        Z = r((e,t)=>{
            var s, r, a, n, o, h = G(), l = i(), p = P(), c = W(), u = B(), d = O(), m = Y(), f = Q(), y = "Object already initialized", x = l.TypeError, g = l.WeakMap;
            h || d.state ? ((s = d.state || (d.state = new g)).get = s.get,
            s.has = s.has,
            s.set = s.set,
            a = function(e, t) {
                if (s.has(e))
                    throw x(y);
                return t.facade = e,
                s.set(e, t),
                t
            }
            ,
            n = function(e) {
                return s.get(e) || {}
            }
            ,
            o = function(e) {
                return s.has(e)
            }
            ) : (f[r = m("state")] = !0,
            a = function(e, t) {
                if (u(e, r))
                    throw x(y);
                return t.facade = e,
                c(e, r, t),
                t
            }
            ,
            n = function(e) {
                return u(e, r) ? e[r] : {}
            }
            ,
            o = function(e) {
                return u(e, r)
            }
            ),
            t.exports = {
                set: a,
                get: n,
                has: o,
                enforce: function(e) {
                    return o(e) ? n(e) : a(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var s;
                        if (!p(t) || (s = n(t)).type !== e)
                            throw x("Incompatible receiver, " + e + " required");
                        return s
                    }
                }
            }
        }
        ),
        ee = r((e,t)=>{
            var s = a()
              , r = g()
              , i = B()
              , o = n()
              , h = J().CONFIGURABLE
              , l = X()
              , p = Z()
              , c = p.enforce
              , u = p.get
              , d = Object.defineProperty
              , m = o && !s(function() {
                return 8 !== d(function() {}, "length", {
                    value: 8
                }).length
            })
              , f = String(String).split("String")
              , y = t.exports = function(e, t, s) {
                "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                s && s.getter && (t = "get " + t),
                s && s.setter && (t = "set " + t),
                (!i(e, "name") || h && e.name !== t) && (o ? d(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t),
                m && s && i(s, "arity") && e.length !== s.arity && d(e, "length", {
                    value: s.arity
                });
                try {
                    s && i(s, "constructor") && s.constructor ? o && d(e, "prototype", {
                        writable: !1
                    }) : e.prototype && (e.prototype = void 0)
                } catch {}
                var r = c(e);
                return i(r, "source") || (r.source = f.join("string" == typeof t ? t : "")),
                e
            }
            ;
            Function.prototype.toString = y(function() {
                return r(this) && u(this).source || l(this)
            }, "toString")
        }
        ),
        et = r((e,t)=>{
            var s = g()
              , r = K()
              , i = ee()
              , a = M();
            t.exports = function(e, t, n, o) {
                o || (o = {});
                var h = o.enumerable
                  , l = void 0 !== o.name ? o.name : t;
                if (s(n) && i(n, l, o),
                o.global)
                    h ? e[t] = n : a(t, n);
                else {
                    try {
                        o.unsafe ? e[t] && (h = !0) : delete e[t]
                    } catch {}
                    h ? e[t] = n : r.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !o.nonConfigurable,
                        writable: !o.nonWritable
                    })
                }
                return e
            }
        }
        ),
        es = r((e,t)=>{
            var s = Math.ceil
              , r = Math.floor;
            t.exports = Math.trunc || function(e) {
                var t = +e;
                return (t > 0 ? r : s)(t)
            }
        }
        ),
        er = r((e,t)=>{
            var s = es();
            t.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : s(t)
            }
        }
        ),
        ei = r((e,t)=>{
            var s = er()
              , r = Math.max
              , i = Math.min;
            t.exports = function(e, t) {
                var a = s(e);
                return a < 0 ? r(a + t, 0) : i(a, t)
            }
        }
        ),
        ea = r((e,t)=>{
            var s = er()
              , r = Math.min;
            t.exports = function(e) {
                return e > 0 ? r(s(e), 9007199254740991) : 0
            }
        }
        ),
        en = r((e,t)=>{
            var s = ea();
            t.exports = function(e) {
                return s(e.length)
            }
        }
        ),
        eo = r((e,t)=>{
            var s = y()
              , r = ei()
              , i = en()
              , a = function(e) {
                return function(t, a, n) {
                    var o, h = s(t), l = i(h), p = r(n, l);
                    if (e && a != a) {
                        for (; l > p; )
                            if ((o = h[p++]) != o)
                                return !0
                    } else
                        for (; l > p; p++)
                            if ((e || p in h) && h[p] === a)
                                return e || p || 0;
                    return !e && -1
                }
            };
            t.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        }
        ),
        eh = r((e,t)=>{
            var s = c()
              , r = B()
              , i = y()
              , a = eo().indexOf
              , n = Q()
              , o = s([].push);
            t.exports = function(e, t) {
                var s, h = i(e), l = 0, p = [];
                for (s in h)
                    !r(n, s) && r(h, s) && o(p, s);
                for (; t.length > l; )
                    r(h, s = t[l++]) && (~a(p, s) || o(p, s));
                return p
            }
        }
        ),
        el = r((e,t)=>{
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ),
        ep = r(e=>{
            var t = eh()
              , s = el().concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(e) {
                return t(e, s)
            }
        }
        ),
        ec = r(e=>{
            e.f = Object.getOwnPropertySymbols
        }
        ),
        eu = r((e,t)=>{
            var s = b()
              , r = c()
              , i = ep()
              , a = ec()
              , n = q()
              , o = r([].concat);
            t.exports = s("Reflect", "ownKeys") || function(e) {
                var t = i.f(n(e))
                  , s = a.f;
                return s ? o(t, s(e)) : t
            }
        }
        ),
        ed = r((e,t)=>{
            var s = B()
              , r = eu()
              , i = V()
              , a = K();
            t.exports = function(e, t, n) {
                for (var o = r(t), h = a.f, l = i.f, p = 0; p < o.length; p++) {
                    var c = o[p];
                    s(e, c) || n && s(n, c) || h(e, c, l(t, c))
                }
            }
        }
        ),
        em = r((e,t)=>{
            var s = a()
              , r = g()
              , i = /#|\.prototype\./
              , n = function(e, t) {
                var i = h[o(e)];
                return i == p || i != l && (r(t) ? s(t) : !!t)
            }
              , o = n.normalize = function(e) {
                return String(e).replace(i, ".").toLowerCase()
            }
              , h = n.data = {}
              , l = n.NATIVE = "N"
              , p = n.POLYFILL = "P";
            t.exports = n
        }
        ),
        ef = r((e,t)=>{
            var s = i()
              , r = V().f
              , a = W()
              , n = et()
              , o = M()
              , h = ed()
              , l = em();
            t.exports = function(e, t) {
                var i, p, c, u, d, m = e.target, f = e.global, y = e.stat;
                if (i = f ? s : y ? s[m] || o(m, {}) : (s[m] || {}).prototype)
                    for (p in t) {
                        if (u = t[p],
                        c = e.dontCallGetSet ? (d = r(i, p)) && d.value : i[p],
                        !l(f ? p : m + (y ? "." : "#") + p, e.forced) && void 0 !== c) {
                            if (typeof u == typeof c)
                                continue;
                            h(u, c)
                        }
                        (e.sham || c && c.sham) && a(u, "sham", !0),
                        n(i, p, u, e)
                    }
            }
        }
        ),
        ey = r(()=>{
            var e = ef()
              , t = i();
            e({
                global: !0,
                forced: t.globalThis !== t
            }, {
                globalThis: t
            })
        }
        ),
        ex = r(()=>{
            ey()
        }
        ),
        eg = r((e,t)=>{
            var s = ee()
              , r = K();
            t.exports = function(e, t, i) {
                return i.get && s(i.get, t, {
                    getter: !0
                }),
                i.set && s(i.set, t, {
                    setter: !0
                }),
                r.f(e, t, i)
            }
        }
        ),
        eP = r((e,t)=>{
            var s = q();
            t.exports = function() {
                var e = s(this)
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
        eb = r(()=>{
            var e = i()
              , t = n()
              , s = eg()
              , r = eP()
              , o = a()
              , h = e.RegExp
              , l = h.prototype;
            t && o(function() {
                var e = !0;
                try {
                    h(".", "d")
                } catch {
                    e = !1
                }
                var t = {}
                  , s = ""
                  , r = e ? "dgimsy" : "gimsy"
                  , i = function(e, r) {
                    Object.defineProperty(t, e, {
                        get: function() {
                            return s += r,
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
                for (var n in e && (a.hasIndices = "d"),
                a)
                    i(n, a[n]);
                return Object.getOwnPropertyDescriptor(l, "flags").get.call(t) !== r || s !== r
            }) && s(l, "flags", {
                configurable: !0,
                get: r
            })
        }
        ),
        eT = r((e,t)=>{
            var s = u();
            t.exports = Array.isArray || function(e) {
                return "Array" == s(e)
            }
        }
        ),
        eA = r((e,t)=>{
            var s = TypeError;
            t.exports = function(e) {
                if (e > 9007199254740991)
                    throw s("Maximum allowed index exceeded");
                return e
            }
        }
        ),
        eE = r((e,t)=>{
            var s = u()
              , r = c();
            t.exports = function(e) {
                if ("Function" === s(e))
                    return r(e)
            }
        }
        ),
        eS = r((e,t)=>{
            var s = eE()
              , r = N()
              , i = o()
              , a = s(s.bind);
            t.exports = function(e, t) {
                return r(e),
                void 0 === t ? e : i ? a(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        }
        ),
        ew = r((e,t)=>{
            var s = eT()
              , r = en()
              , i = eA()
              , a = eS()
              , n = function(e, t, o, h, l, p, c, u) {
                for (var d, m, f = l, y = 0, x = !!c && a(c, u); y < h; )
                    y in o && (d = x ? x(o[y], y, t) : o[y],
                    p > 0 && s(d) ? (m = r(d),
                    f = n(e, t, d, m, f, p - 1) - 1) : (i(f + 1),
                    e[f] = d),
                    f++),
                    y++;
                return f
            };
            t.exports = n
        }
        ),
        ev = r((e,t)=>{
            var s = R()("toStringTag")
              , r = {};
            r[s] = "z",
            t.exports = "[object z]" === String(r)
        }
        ),
        eC = r((e,t)=>{
            var s = ev()
              , r = g()
              , i = u()
              , a = R()("toStringTag")
              , n = Object
              , o = "Arguments" == i(function() {
                return arguments
            }())
              , h = function(e, t) {
                try {
                    return e[t]
                } catch {}
            };
            t.exports = s ? i : function(e) {
                var t, s, l;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (s = h(t = n(e), a)) ? s : o ? i(t) : "Object" == (l = i(t)) && r(t.callee) ? "Arguments" : l
            }
        }
        ),
        eN = r((e,t)=>{
            var s = c()
              , r = a()
              , i = g()
              , n = eC()
              , o = b()
              , h = X()
              , l = function() {}
              , p = []
              , u = o("Reflect", "construct")
              , d = /^\s*(?:class|function)\b/
              , m = s(d.exec)
              , f = !d.exec(l)
              , y = function(e) {
                if (!i(e))
                    return !1;
                try {
                    return u(l, p, e),
                    !0
                } catch {
                    return !1
                }
            }
              , x = function(e) {
                if (!i(e))
                    return !1;
                switch (n(e)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
                }
                try {
                    return f || !!m(d, h(e))
                } catch {
                    return !0
                }
            };
            x.sham = !0,
            t.exports = !u || r(function() {
                var e;
                return y(y.call) || !y(Object) || !y(function() {
                    e = !0
                }) || e
            }) ? x : y
        }
        ),
        eI = r((e,t)=>{
            var s = eT()
              , r = eN()
              , i = P()
              , a = R()("species")
              , n = Array;
            t.exports = function(e) {
                var t;
                return s(e) && (r(t = e.constructor) && (t === n || s(t.prototype)) ? t = void 0 : i(t) && null === (t = t[a]) && (t = void 0)),
                void 0 === t ? n : t
            }
        }
        ),
        ek = r((e,t)=>{
            var s = eI();
            t.exports = function(e, t) {
                return new (s(e))(0 === t ? 0 : t)
            }
        }
        ),
        eL = r(()=>{
            var e = ef()
              , t = ew()
              , s = N()
              , r = F()
              , i = en()
              , a = ek();
            e({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var n, o = r(this), h = i(o);
                    return s(e),
                    (n = a(o, 0)).length = t(n, o, o, h, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0),
                    n
                }
            })
        }
        ),
        r((e,t)=>{
            ex(),
            eb(),
            eL();
            var s = Object.defineProperty
              , r = Object.getOwnPropertyDescriptor
              , i = Object.getOwnPropertyNames
              , a = Object.prototype.hasOwnProperty
              , n = (e,t)=>function() {
                return e && (t = (0,
                e[i(e)[0]])(e = 0)),
                t
            }
              , o = (e,t)=>function() {
                return t || (0,
                e[i(e)[0]])((t = {
                    exports: {}
                }).exports, t),
                t.exports
            }
              , h = (e,t,n,o)=>{
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let h of i(t))
                        a.call(e, h) || h === n || s(e, h, {
                            get: ()=>t[h],
                            enumerable: !(o = r(t, h)) || o.enumerable
                        });
                return e
            }
              , l = e=>h(s({}, "__esModule", {
                value: !0
            }), e)
              , p = n({
                "<define:process>"() {}
            })
              , c = o({
                "src/utils/try-combinations.js"(e, t) {
                    p(),
                    t.exports = function() {
                        let e;
                        for (var t = arguments.length, s = Array(t), r = 0; r < t; r++)
                            s[r] = arguments[r];
                        for (let[t,r] of s.entries())
                            try {
                                return {
                                    result: r()
                                }
                            } catch (s) {
                                0 === t && (e = s)
                            }
                        return {
                            error: e
                        }
                    }
                }
            })
              , u = o({
                "src/language-js/utils/get-shebang.js"(e, t) {
                    p(),
                    t.exports = function(e) {
                        if (!e.startsWith("#!"))
                            return "";
                        let t = e.indexOf(`
`);
                        return -1 === t ? e : e.slice(0, t)
                    }
                }
            })
              , d = o({
                "src/utils/text/skip-inline-comment.js"(e, t) {
                    p(),
                    t.exports = function(e, t) {
                        if (!1 === t)
                            return !1;
                        if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
                            for (let s = t + 2; s < e.length; ++s)
                                if ("*" === e.charAt(s) && "/" === e.charAt(s + 1))
                                    return s + 2
                        }
                        return t
                    }
                }
            })
              , m = o({
                "src/utils/text/skip-newline.js"(e, t) {
                    p(),
                    t.exports = function(e, t, s) {
                        let r = s && s.backwards;
                        if (!1 === t)
                            return !1;
                        let i = e.charAt(t);
                        if (r) {
                            if ("\r" === e.charAt(t - 1) && i === `
`)
                                return t - 2;
                            if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i)
                                return t - 1
                        } else {
                            if ("\r" === i && e.charAt(t + 1) === `
`)
                                return t + 2;
                            if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i)
                                return t + 1
                        }
                        return t
                    }
                }
            })
              , f = o({
                "src/utils/text/skip.js"(e, t) {
                    function s(e) {
                        return (t,s,r)=>{
                            let i = r && r.backwards;
                            if (!1 === s)
                                return !1;
                            let {length: a} = t
                              , n = s;
                            for (; n >= 0 && n < a; ) {
                                let s = t.charAt(n);
                                if (e instanceof RegExp) {
                                    if (!e.test(s))
                                        return n
                                } else if (!e.includes(s))
                                    return n;
                                i ? n-- : n++
                            }
                            return (-1 === n || n === a) && n
                        }
                    }
                    p();
                    var r = s(/\s/)
                      , i = s(" 	")
                      , a = s(",; 	")
                      , n = s(/[^\n\r]/);
                    t.exports = {
                        skipWhitespace: r,
                        skipSpaces: i,
                        skipToLineEnd: a,
                        skipEverythingButNewLine: n
                    }
                }
            })
              , y = o({
                "src/utils/text/skip-trailing-comment.js"(e, t) {
                    p();
                    var {skipEverythingButNewLine: s} = f();
                    t.exports = function(e, t) {
                        return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? s(e, t) : t)
                    }
                }
            })
              , x = o({
                "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, t) {
                    p();
                    var s = d()
                      , r = m()
                      , i = y()
                      , {skipSpaces: a} = f();
                    t.exports = function(e, t) {
                        let n = null
                          , o = t;
                        for (; o !== n; )
                            n = o,
                            o = a(e, o),
                            o = s(e, o),
                            o = i(e, o),
                            o = r(e, o);
                        return o
                    }
                }
            })
              , g = {};
            function P() {
                if (typeof O > "u") {
                    var e = new ArrayBuffer(2)
                      , t = new Uint8Array(e)
                      , s = new Uint16Array(e);
                    if (t[0] = 1,
                    t[1] = 2,
                    258 === s[0])
                        O = "BE";
                    else if (513 === s[0])
                        O = "LE";
                    else
                        throw Error("unable to figure out endianess")
                }
                return O
            }
            function b() {
                return "u" > typeof globalThis.location ? globalThis.location.hostname : ""
            }
            function T() {
                return []
            }
            function A() {
                return 0
            }
            function E() {
                return Number.MAX_VALUE
            }
            function S() {
                return Number.MAX_VALUE
            }
            function w() {
                return []
            }
            function v() {
                return "Browser"
            }
            function C() {
                return "u" > typeof globalThis.navigator ? globalThis.navigator.appVersion : ""
            }
            function N() {}
            function I() {}
            function k() {
                return "javascript"
            }
            function L() {
                return "browser"
            }
            function M() {
                return "/tmp"
            }
            ((e,t)=>{
                for (var r in t)
                    s(e, r, {
                        get: t[r],
                        enumerable: !0
                    })
            }
            )(g, {
                EOL: ()=>F,
                arch: ()=>k,
                cpus: ()=>w,
                default: ()=>B,
                endianness: ()=>P,
                freemem: ()=>E,
                getNetworkInterfaces: ()=>I,
                hostname: ()=>b,
                loadavg: ()=>T,
                networkInterfaces: ()=>N,
                platform: ()=>L,
                release: ()=>C,
                tmpDir: ()=>M,
                tmpdir: ()=>D,
                totalmem: ()=>S,
                type: ()=>v,
                uptime: ()=>A
            });
            var O, D, F, B, j = n({
                "node-modules-polyfills:os"() {
                    p(),
                    B = {
                        EOL: F = `
`,
                        tmpdir: D = M,
                        tmpDir: M,
                        networkInterfaces: N,
                        getNetworkInterfaces: I,
                        release: C,
                        type: v,
                        cpus: w,
                        totalmem: S,
                        freemem: E,
                        uptime: A,
                        loadavg: T,
                        hostname: b,
                        endianness: P
                    }
                }
            }), R = o({
                "node-modules-polyfills-commonjs:os"(e, t) {
                    p();
                    var s = (j(),
                    l(g));
                    if (s && s.default)
                        for (let e in t.exports = s.default,
                        s)
                            t.exports[e] = s[e];
                    else
                        s && (t.exports = s)
                }
            }), U = o({
                "node_modules/detect-newline/index.js"(e, t) {
                    p();
                    var s = e=>{
                        if ("string" != typeof e)
                            throw TypeError("Expected a string");
                        let t = e.match(/(?:\r?\n)/g) || [];
                        if (0 === t.length)
                            return;
                        let s = t.filter(e=>e === `\r
`).length
                          , r = t.length - s;
                        return s > r ? `\r
` : `
`
                    }
                    ;
                    t.exports = s,
                    t.exports.graceful = e=>"string" == typeof e && s(e) || `
`
                }
            }), _ = o({
                "node_modules/jest-docblock/build/index.js"(e) {
                    function t() {
                        let e = R();
                        return t = function() {
                            return e
                        }
                        ,
                        e
                    }
                    function s() {
                        var e;
                        let t = (e = U()) && e.__esModule ? e : {
                            default: e
                        };
                        return s = function() {
                            return t
                        }
                        ,
                        t
                    }
                    p(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.extract = function(e) {
                        let t = e.match(a);
                        return t ? t[0].trimLeft() : ""
                    }
                    ,
                    e.parse = function(e) {
                        return d(e).pragmas
                    }
                    ,
                    e.parseWithComments = d,
                    e.print = function(e) {
                        let {comments: r="", pragmas: i={}} = e
                          , a = (0,
                        s().default)(r) || t().EOL
                          , n = Object.keys(i)
                          , o = n.map(e=>m(e, i[e])).reduce((e,t)=>e.concat(t), []).map(e=>` * ${e}${a}`).join("");
                        if (!r) {
                            if (0 === n.length)
                                return "";
                            if (1 === n.length && !Array.isArray(i[n[0]]))
                                return `/** ${m(n[0], i[n[0]])[0]} */`
                        }
                        let h = r.split(a).map(e=>` * ${e}`).join(a) + a;
                        return "/**" + a + (r ? h : "") + (r && n.length ? " *" + a : "") + o + " */"
                    }
                    ,
                    e.strip = function(e) {
                        let t = e.match(a);
                        return t && t[0] ? e.substring(t[0].length) : e
                    }
                    ;
                    var r = /\*\/$/
                      , i = /^\/\*\*?/
                      , a = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/
                      , n = /(^|\s+)\/\/([^\r\n]*)/g
                      , o = /^(\r?\n)+/
                      , h = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g
                      , l = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g
                      , c = /(\r?\n|^) *\* ?/g
                      , u = [];
                    function d(e) {
                        let a = (0,
                        s().default)(e) || t().EOL;
                        e = e.replace(i, "").replace(r, "").replace(c, "$1");
                        let p = "";
                        for (; p !== e; )
                            p = e,
                            e = e.replace(h, `${a}$1 $2 ${a}`);
                        e = e.replace(o, "").trimRight();
                        let d = Object.create(null), m = e.replace(l, "").replace(o, "").trimRight(), f;
                        for (; f = l.exec(e); ) {
                            let e = f[2].replace(n, "");
                            "string" == typeof d[f[1]] || Array.isArray(d[f[1]]) ? d[f[1]] = u.concat(d[f[1]], e) : d[f[1]] = e
                        }
                        return {
                            comments: m,
                            pragmas: d
                        }
                    }
                    function m(e, t) {
                        return u.concat(t).map(t=>`@${e} ${t}`.trim())
                    }
                }
            }), z = o({
                "src/common/end-of-line.js"(e, t) {
                    p(),
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
                            let s;
                            switch (t) {
                            case `
`:
                                s = /\n/g;
                                break;
                            case "\r":
                                s = /\r/g;
                                break;
                            case `\r
`:
                                s = /\r\n/g;
                                break;
                            default:
                                throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`)
                            }
                            let r = e.match(s);
                            return r ? r.length : 0
                        },
                        normalizeEndOfLine: function(e) {
                            return e.replace(/\r\n?/g, `
`)
                        }
                    }
                }
            }), H = o({
                "src/language-js/pragma.js"(e, t) {
                    p();
                    var {parseWithComments: s, strip: r, extract: i, print: a} = _()
                      , {normalizeEndOfLine: n} = z()
                      , o = u();
                    function h(e) {
                        let t = o(e);
                        t && (e = e.slice(t.length + 1));
                        let {pragmas: r, comments: a} = s(i(e));
                        return {
                            shebang: t,
                            text: e,
                            pragmas: r,
                            comments: a
                        }
                    }
                    t.exports = {
                        hasPragma: function(e) {
                            let t = Object.keys(h(e).pragmas);
                            return t.includes("prettier") || t.includes("format")
                        },
                        insertPragma: function(e) {
                            let {shebang: t, text: s, pragmas: i, comments: o} = h(e)
                              , l = r(s);
                            return (t ? `${t}
` : "") + n(a({
                                pragmas: Object.assign({
                                    format: ""
                                }, i),
                                comments: o.trimStart()
                            })) + (l.startsWith(`
`) ? `
` : `

`) + l
                        }
                    }
                }
            }), V = o({
                "src/utils/is-non-empty-array.js"(e, t) {
                    p(),
                    t.exports = function(e) {
                        return Array.isArray(e) && e.length > 0
                    }
                }
            }), $ = o({
                "src/language-js/loc.js"(e, t) {
                    p();
                    var s = V();
                    function r(e) {
                        var t, i;
                        let a = e.range ? e.range[0] : e.start
                          , n = null !== (t = null === (i = e.declaration) || void 0 === i ? void 0 : i.decorators) && void 0 !== t ? t : e.decorators;
                        return s(n) ? Math.min(r(n[0]), a) : a
                    }
                    function i(e) {
                        return e.range ? e.range[1] : e.end
                    }
                    function a(e, t) {
                        let s = r(e);
                        return Number.isInteger(s) && s === r(t)
                    }
                    t.exports = {
                        locStart: r,
                        locEnd: i,
                        hasSameLocStart: a,
                        hasSameLoc: function(e, t) {
                            let s;
                            return a(e, t) && Number.isInteger(s = i(e)) && s === i(t)
                        }
                    }
                }
            }), q = o({
                "src/language-js/parse/utils/create-parser.js"(e, t) {
                    p();
                    var {hasPragma: s} = H()
                      , {locStart: r, locEnd: i} = $();
                    t.exports = function(e) {
                        return Object.assign({
                            astFormat: "estree",
                            hasPragma: s,
                            locStart: r,
                            locEnd: i
                        }, e = "function" == typeof e ? {
                            parse: e
                        } : e)
                    }
                }
            }), K = o({
                "src/common/parser-create-error.js"(e, t) {
                    p(),
                    t.exports = function(e, t) {
                        let s = SyntaxError(e + " (" + t.start.line + ":" + t.start.column + ")");
                        return s.loc = t,
                        s
                    }
                }
            }), W = o({
                "src/language-js/parse/utils/create-babel-parse-error.js"(e, t) {
                    p();
                    var s = K();
                    t.exports = function(e) {
                        let {message: t, loc: r} = e;
                        return s(t.replace(/ \(.*\)/, ""), {
                            start: {
                                line: r ? r.line : 0,
                                column: r ? r.column + 1 : 0
                            }
                        })
                    }
                }
            }), J = o({
                "src/language-js/utils/is-ts-keyword-type.js"(e, t) {
                    p(),
                    t.exports = function(e) {
                        let {type: t} = e;
                        return t.startsWith("TS") && t.endsWith("Keyword")
                    }
                }
            }), X = o({
                "src/language-js/utils/is-block-comment.js"(e, t) {
                    p();
                    var s = new Set(["Block", "CommentBlock", "MultiLine"])
                      , r = e=>s.has(null == e ? void 0 : e.type);
                    t.exports = r
                }
            }), G = o({
                "src/language-js/utils/is-type-cast-comment.js"(e, t) {
                    p();
                    var s = X();
                    t.exports = function(e) {
                        return s(e) && "*" === e.value[0] && /@(?:type|satisfies)\b/.test(e.value)
                    }
                }
            }), Y = o({
                "src/utils/get-last.js"(e, t) {
                    p();
                    var s = e=>e[e.length - 1];
                    t.exports = s
                }
            }), Q = o({
                "src/language-js/parse/postprocess/visit-node.js"(e, t) {
                    p(),
                    t.exports = function e(t, s) {
                        if (Array.isArray(t)) {
                            for (let r = 0; r < t.length; r++)
                                t[r] = e(t[r], s);
                            return t
                        }
                        if (t && "object" == typeof t && "string" == typeof t.type) {
                            let r = Object.keys(t);
                            for (let i = 0; i < r.length; i++)
                                t[r[i]] = e(t[r[i]], s);
                            return s(t) || t
                        }
                        return t
                    }
                }
            }), Z = o({
                "src/language-js/parse/postprocess/throw-syntax-error.js"(e, t) {
                    p();
                    var s = K();
                    t.exports = function(e, t) {
                        let {start: r, end: i} = e.loc;
                        throw s(t, {
                            start: {
                                line: r.line,
                                column: r.column + 1
                            },
                            end: {
                                line: i.line,
                                column: i.column + 1
                            }
                        })
                    }
                }
            }), ee = o({
                "src/language-js/parse/postprocess/index.js"(e, t) {
                    p();
                    var {locStart: s, locEnd: r} = $()
                      , i = J()
                      , a = G()
                      , n = Y()
                      , o = Q()
                      , h = Z();
                    function l(e) {
                        return "LogicalExpression" === e.type && "LogicalExpression" === e.right.type && e.operator === e.right.operator
                    }
                    t.exports = function(e, t) {
                        if ("typescript" !== t.parser && "flow" !== t.parser && "acorn" !== t.parser && "espree" !== t.parser && "meriyah" !== t.parser) {
                            let t = new Set;
                            e = o(e, e=>{
                                e.leadingComments && e.leadingComments.some(a) && t.add(s(e))
                            }
                            ),
                            e = o(e, e=>{
                                if ("ParenthesizedExpression" === e.type) {
                                    let {expression: r} = e;
                                    if ("TypeCastExpression" === r.type)
                                        return r.range = e.range,
                                        r;
                                    let i = s(e);
                                    if (!t.has(i))
                                        return r.extra = Object.assign(Object.assign({}, r.extra), {}, {
                                            parenthesized: !0
                                        }),
                                        r
                                }
                            }
                            )
                        }
                        return e = o(e, e=>{
                            switch (e.type) {
                            case "ChainExpression":
                                return function e(t) {
                                    switch (t.type) {
                                    case "CallExpression":
                                        t.type = "OptionalCallExpression",
                                        t.callee = e(t.callee);
                                        break;
                                    case "MemberExpression":
                                        t.type = "OptionalMemberExpression",
                                        t.object = e(t.object);
                                        break;
                                    case "TSNonNullExpression":
                                        t.expression = e(t.expression)
                                    }
                                    return t
                                }(e.expression);
                            case "LogicalExpression":
                                if (l(e))
                                    return function e(t) {
                                        return l(t) ? e({
                                            type: "LogicalExpression",
                                            operator: t.operator,
                                            left: e({
                                                type: "LogicalExpression",
                                                operator: t.operator,
                                                left: t.left,
                                                right: t.right.left,
                                                range: [s(t.left), r(t.right.left)]
                                            }),
                                            right: t.right.right,
                                            range: [s(t), r(t)]
                                        }) : t
                                    }(e);
                                break;
                            case "VariableDeclaration":
                                {
                                    var a;
                                    let i = n(e.declarations);
                                    i && i.init && (a = e,
                                    ";" !== t.originalText[r(i)] && (a.range = [s(a), r(i)]));
                                    break
                                }
                            case "TSParenthesizedType":
                                return i(e.typeAnnotation) || "TSThisType" === e.typeAnnotation.type || (e.typeAnnotation.range = [s(e), r(e)]),
                                e.typeAnnotation;
                            case "TSTypeParameter":
                                if ("string" == typeof e.name) {
                                    let t = s(e);
                                    e.name = {
                                        type: "Identifier",
                                        name: e.name,
                                        range: [t, t + e.name.length]
                                    }
                                }
                                break;
                            case "ObjectExpression":
                                if ("typescript" === t.parser) {
                                    let t = e.properties.find(e=>"Property" === e.type && "TSEmptyBodyFunctionExpression" === e.value.type);
                                    t && h(t.value, "Unexpected token.")
                                }
                                break;
                            case "SequenceExpression":
                                {
                                    let t = n(e.expressions);
                                    e.range = [s(e), Math.min(r(t), r(e))];
                                    break
                                }
                            case "TopicReference":
                                t.__isUsingHackPipeline = !0;
                                break;
                            case "ExportAllDeclaration":
                                {
                                    let {exported: i} = e;
                                    if ("meriyah" === t.parser && i && "Identifier" === i.type) {
                                        let a = t.originalText.slice(s(i), r(i));
                                        (a.startsWith('"') || a.startsWith("'")) && (e.exported = Object.assign(Object.assign({}, e.exported), {}, {
                                            type: "Literal",
                                            value: e.exported.name,
                                            raw: a
                                        }))
                                    }
                                    break
                                }
                            case "PropertyDefinition":
                                if ("meriyah" === t.parser && e.static && !e.computed && !e.key) {
                                    let t = "static"
                                      , r = s(e);
                                    Object.assign(e, {
                                        static: !1,
                                        key: {
                                            type: "Identifier",
                                            name: t,
                                            range: [r, r + t.length]
                                        }
                                    })
                                }
                            }
                        }
                        )
                    }
                }
            }), et = o({
                "node_modules/@babel/parser/lib/index.js"(e) {
                    p(),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = {
                        sourceType: "script",
                        sourceFilename: void 0,
                        startColumn: 0,
                        startLine: 1,
                        allowAwaitOutsideFunction: !1,
                        allowReturnOutsideFunction: !1,
                        allowNewTargetOutsideFunction: !1,
                        allowImportExportEverywhere: !1,
                        allowSuperOutsideMethod: !1,
                        allowUndeclaredExports: !1,
                        plugins: [],
                        strictMode: null,
                        ranges: !1,
                        tokens: !1,
                        createParenthesizedExpressions: !1,
                        errorRecovery: !1,
                        attachComment: !0,
                        annexB: !0
                    }
                      , s = class {
                        constructor(e, t) {
                            this.token = void 0,
                            this.preserveSpace = void 0,
                            this.token = e,
                            this.preserveSpace = !!t
                        }
                    }
                      , r = {
                        brace: new s("{"),
                        j_oTag: new s("<tag"),
                        j_cTag: new s("</tag"),
                        j_expr: new s("<tag>...</tag>",!0)
                    };
                    r.template = new s("`",!0);
                    var i = class {
                        constructor(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.label = void 0,
                            this.keyword = void 0,
                            this.beforeExpr = void 0,
                            this.startsExpr = void 0,
                            this.rightAssociative = void 0,
                            this.isLoop = void 0,
                            this.isAssign = void 0,
                            this.prefix = void 0,
                            this.postfix = void 0,
                            this.binop = void 0,
                            this.label = e,
                            this.keyword = t.keyword,
                            this.beforeExpr = !!t.beforeExpr,
                            this.startsExpr = !!t.startsExpr,
                            this.rightAssociative = !!t.rightAssociative,
                            this.isLoop = !!t.isLoop,
                            this.isAssign = !!t.isAssign,
                            this.prefix = !!t.prefix,
                            this.postfix = !!t.postfix,
                            this.binop = null != t.binop ? t.binop : null,
                            this.updateContext = null
                        }
                    }
                      , a = new Map;
                    function n(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.keyword = e;
                        let s = y(e, t);
                        return a.set(e, s),
                        s
                    }
                    function o(e, t) {
                        return y(e, {
                            beforeExpr: !0,
                            binop: t
                        })
                    }
                    var h = -1
                      , l = []
                      , c = []
                      , u = []
                      , d = []
                      , m = []
                      , f = [];
                    function y(e) {
                        var t, s, r, a;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return ++h,
                        c.push(e),
                        u.push(null != (t = n.binop) ? t : -1),
                        d.push(null != (s = n.beforeExpr) && s),
                        m.push(null != (r = n.startsExpr) && r),
                        f.push(null != (a = n.prefix) && a),
                        l.push(new i(e,n)),
                        h
                    }
                    function x(e) {
                        var t, s, r, n;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return ++h,
                        a.set(e, h),
                        c.push(e),
                        u.push(null != (t = o.binop) ? t : -1),
                        d.push(null != (s = o.beforeExpr) && s),
                        m.push(null != (r = o.startsExpr) && r),
                        f.push(null != (n = o.prefix) && n),
                        l.push(new i("name",o)),
                        h
                    }
                    var g = {
                        bracketL: y("[", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        bracketHashL: y("#[", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        bracketBarL: y("[|", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        bracketR: y("]"),
                        bracketBarR: y("|]"),
                        braceL: y("{", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        braceBarL: y("{|", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        braceHashL: y("#{", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        braceR: y("}"),
                        braceBarR: y("|}"),
                        parenL: y("(", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        parenR: y(")"),
                        comma: y(",", {
                            beforeExpr: !0
                        }),
                        semi: y(";", {
                            beforeExpr: !0
                        }),
                        colon: y(":", {
                            beforeExpr: !0
                        }),
                        doubleColon: y("::", {
                            beforeExpr: !0
                        }),
                        dot: y("."),
                        question: y("?", {
                            beforeExpr: !0
                        }),
                        questionDot: y("?."),
                        arrow: y("=>", {
                            beforeExpr: !0
                        }),
                        template: y("template"),
                        ellipsis: y("...", {
                            beforeExpr: !0
                        }),
                        backQuote: y("`", {
                            startsExpr: !0
                        }),
                        dollarBraceL: y("${", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        templateTail: y("...`", {
                            startsExpr: !0
                        }),
                        templateNonTail: y("...${", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        at: y("@"),
                        hash: y("#", {
                            startsExpr: !0
                        }),
                        interpreterDirective: y("#!..."),
                        eq: y("=", {
                            beforeExpr: !0,
                            isAssign: !0
                        }),
                        assign: y("_=", {
                            beforeExpr: !0,
                            isAssign: !0
                        }),
                        slashAssign: y("_=", {
                            beforeExpr: !0,
                            isAssign: !0
                        }),
                        xorAssign: y("_=", {
                            beforeExpr: !0,
                            isAssign: !0
                        }),
                        moduloAssign: y("_=", {
                            beforeExpr: !0,
                            isAssign: !0
                        }),
                        incDec: y("++/--", {
                            prefix: !0,
                            postfix: !0,
                            startsExpr: !0
                        }),
                        bang: y("!", {
                            beforeExpr: !0,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        tilde: y("~", {
                            beforeExpr: !0,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        doubleCaret: y("^^", {
                            startsExpr: !0
                        }),
                        doubleAt: y("@@", {
                            startsExpr: !0
                        }),
                        pipeline: o("|>", 0),
                        nullishCoalescing: o("??", 1),
                        logicalOR: o("||", 1),
                        logicalAND: o("&&", 2),
                        bitwiseOR: o("|", 3),
                        bitwiseXOR: o("^", 4),
                        bitwiseAND: o("&", 5),
                        equality: o("==/!=/===/!==", 6),
                        lt: o("</>/<=/>=", 7),
                        gt: o("</>/<=/>=", 7),
                        relational: o("</>/<=/>=", 7),
                        bitShift: o("<</>>/>>>", 8),
                        bitShiftL: o("<</>>/>>>", 8),
                        bitShiftR: o("<</>>/>>>", 8),
                        plusMin: y("+/-", {
                            beforeExpr: !0,
                            binop: 9,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        modulo: y("%", {
                            binop: 10,
                            startsExpr: !0
                        }),
                        star: y("*", {
                            binop: 10
                        }),
                        slash: o("/", 10),
                        exponent: y("**", {
                            beforeExpr: !0,
                            binop: 11,
                            rightAssociative: !0
                        }),
                        _in: n("in", {
                            beforeExpr: !0,
                            binop: 7
                        }),
                        _instanceof: n("instanceof", {
                            beforeExpr: !0,
                            binop: 7
                        }),
                        _break: n("break"),
                        _case: n("case", {
                            beforeExpr: !0
                        }),
                        _catch: n("catch"),
                        _continue: n("continue"),
                        _debugger: n("debugger"),
                        _default: n("default", {
                            beforeExpr: !0
                        }),
                        _else: n("else", {
                            beforeExpr: !0
                        }),
                        _finally: n("finally"),
                        _function: n("function", {
                            startsExpr: !0
                        }),
                        _if: n("if"),
                        _return: n("return", {
                            beforeExpr: !0
                        }),
                        _switch: n("switch"),
                        _throw: n("throw", {
                            beforeExpr: !0,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        _try: n("try"),
                        _var: n("var"),
                        _const: n("const"),
                        _with: n("with"),
                        _new: n("new", {
                            beforeExpr: !0,
                            startsExpr: !0
                        }),
                        _this: n("this", {
                            startsExpr: !0
                        }),
                        _super: n("super", {
                            startsExpr: !0
                        }),
                        _class: n("class", {
                            startsExpr: !0
                        }),
                        _extends: n("extends", {
                            beforeExpr: !0
                        }),
                        _export: n("export"),
                        _import: n("import", {
                            startsExpr: !0
                        }),
                        _null: n("null", {
                            startsExpr: !0
                        }),
                        _true: n("true", {
                            startsExpr: !0
                        }),
                        _false: n("false", {
                            startsExpr: !0
                        }),
                        _typeof: n("typeof", {
                            beforeExpr: !0,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        _void: n("void", {
                            beforeExpr: !0,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        _delete: n("delete", {
                            beforeExpr: !0,
                            prefix: !0,
                            startsExpr: !0
                        }),
                        _do: n("do", {
                            isLoop: !0,
                            beforeExpr: !0
                        }),
                        _for: n("for", {
                            isLoop: !0
                        }),
                        _while: n("while", {
                            isLoop: !0
                        }),
                        _as: x("as", {
                            startsExpr: !0
                        }),
                        _assert: x("assert", {
                            startsExpr: !0
                        }),
                        _async: x("async", {
                            startsExpr: !0
                        }),
                        _await: x("await", {
                            startsExpr: !0
                        }),
                        _from: x("from", {
                            startsExpr: !0
                        }),
                        _get: x("get", {
                            startsExpr: !0
                        }),
                        _let: x("let", {
                            startsExpr: !0
                        }),
                        _meta: x("meta", {
                            startsExpr: !0
                        }),
                        _of: x("of", {
                            startsExpr: !0
                        }),
                        _sent: x("sent", {
                            startsExpr: !0
                        }),
                        _set: x("set", {
                            startsExpr: !0
                        }),
                        _static: x("static", {
                            startsExpr: !0
                        }),
                        _using: x("using", {
                            startsExpr: !0
                        }),
                        _yield: x("yield", {
                            startsExpr: !0
                        }),
                        _asserts: x("asserts", {
                            startsExpr: !0
                        }),
                        _checks: x("checks", {
                            startsExpr: !0
                        }),
                        _exports: x("exports", {
                            startsExpr: !0
                        }),
                        _global: x("global", {
                            startsExpr: !0
                        }),
                        _implements: x("implements", {
                            startsExpr: !0
                        }),
                        _intrinsic: x("intrinsic", {
                            startsExpr: !0
                        }),
                        _infer: x("infer", {
                            startsExpr: !0
                        }),
                        _is: x("is", {
                            startsExpr: !0
                        }),
                        _mixins: x("mixins", {
                            startsExpr: !0
                        }),
                        _proto: x("proto", {
                            startsExpr: !0
                        }),
                        _require: x("require", {
                            startsExpr: !0
                        }),
                        _satisfies: x("satisfies", {
                            startsExpr: !0
                        }),
                        _keyof: x("keyof", {
                            startsExpr: !0
                        }),
                        _readonly: x("readonly", {
                            startsExpr: !0
                        }),
                        _unique: x("unique", {
                            startsExpr: !0
                        }),
                        _abstract: x("abstract", {
                            startsExpr: !0
                        }),
                        _declare: x("declare", {
                            startsExpr: !0
                        }),
                        _enum: x("enum", {
                            startsExpr: !0
                        }),
                        _module: x("module", {
                            startsExpr: !0
                        }),
                        _namespace: x("namespace", {
                            startsExpr: !0
                        }),
                        _interface: x("interface", {
                            startsExpr: !0
                        }),
                        _type: x("type", {
                            startsExpr: !0
                        }),
                        _opaque: x("opaque", {
                            startsExpr: !0
                        }),
                        name: y("name", {
                            startsExpr: !0
                        }),
                        string: y("string", {
                            startsExpr: !0
                        }),
                        num: y("num", {
                            startsExpr: !0
                        }),
                        bigint: y("bigint", {
                            startsExpr: !0
                        }),
                        decimal: y("decimal", {
                            startsExpr: !0
                        }),
                        regexp: y("regexp", {
                            startsExpr: !0
                        }),
                        privateName: y("#name", {
                            startsExpr: !0
                        }),
                        eof: y("eof"),
                        jsxName: y("jsxName"),
                        jsxText: y("jsxText", {
                            beforeExpr: !0
                        }),
                        jsxTagStart: y("jsxTagStart", {
                            startsExpr: !0
                        }),
                        jsxTagEnd: y("jsxTagEnd"),
                        placeholder: y("%%", {
                            startsExpr: !0
                        })
                    };
                    function P(e) {
                        return e >= 93 && e <= 130
                    }
                    function b(e) {
                        return e >= 58 && e <= 130
                    }
                    function T(e) {
                        return e >= 58 && e <= 134
                    }
                    function A(e) {
                        return e >= 127 && e <= 129
                    }
                    function E(e) {
                        return e >= 58 && e <= 92
                    }
                    function S(e) {
                        return e >= 24 && e <= 25
                    }
                    function w(e, t) {
                        if (null == e)
                            return {};
                        var s, r, i = {}, a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                            s = a[r],
                            t.indexOf(s) >= 0 || (i[s] = e[s]);
                        return i
                    }
                    l[8].updateContext = e=>{
                        e.pop()
                    }
                    ,
                    l[5].updateContext = l[7].updateContext = l[23].updateContext = e=>{
                        e.push(r.brace)
                    }
                    ,
                    l[22].updateContext = e=>{
                        e[e.length - 1] === r.template ? e.pop() : e.push(r.template)
                    }
                    ,
                    l[140].updateContext = e=>{
                        e.push(r.j_expr, r.j_oTag)
                    }
                    ;
                    var v = class {
                        constructor(e, t, s) {
                            this.line = void 0,
                            this.column = void 0,
                            this.index = void 0,
                            this.line = e,
                            this.column = t,
                            this.index = s
                        }
                    }
                      , C = class {
                        constructor(e, t) {
                            this.start = void 0,
                            this.end = void 0,
                            this.filename = void 0,
                            this.identifierName = void 0,
                            this.start = e,
                            this.end = t
                        }
                    }
                    ;
                    function N(e, t) {
                        let {line: s, column: r, index: i} = e;
                        return new v(s,r + t,i + t)
                    }
                    var I = {
                        SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
                        SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
                    }
                      , k = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length - 1;
                        return {
                            get() {
                                return e.reduce((e,t)=>e[t], this)
                            },
                            set(s) {
                                e.reduce((e,r,i)=>i === t ? e[r] = s : e[r], this)
                            }
                        }
                    }
                      , L = (e,t,s)=>Object.keys(s).map(e=>[e, s[e]]).filter(e=>{
                        let[,t] = e;
                        return !!t
                    }
                    ).map(e=>{
                        let[t,s] = e;
                        return [t, "function" == typeof s ? {
                            value: s,
                            enumerable: !1
                        } : "string" == typeof s.reflect ? Object.assign({}, s, k(s.reflect.split("."))) : s]
                    }
                    ).reduce((e,t)=>{
                        let[s,r] = t;
                        return Object.defineProperty(e, s, Object.assign({
                            configurable: !0
                        }, r))
                    }
                    , Object.assign(new e, t))
                      , M = {
                        ImportMetaOutsideModule: {
                            message: "import.meta may appear only with 'sourceType: \"module\"'",
                            code: I.SourceTypeModuleError
                        },
                        ImportOutsideModule: {
                            message: "'import' and 'export' may appear only with 'sourceType: \"module\"'",
                            code: I.SourceTypeModuleError
                        }
                    }
                      , O = {
                        ArrayPattern: "array destructuring pattern",
                        AssignmentExpression: "assignment expression",
                        AssignmentPattern: "assignment expression",
                        ArrowFunctionExpression: "arrow function expression",
                        ConditionalExpression: "conditional expression",
                        CatchClause: "catch clause",
                        ForOfStatement: "for-of statement",
                        ForInStatement: "for-in statement",
                        ForStatement: "for-loop",
                        FormalParameters: "function parameter list",
                        Identifier: "identifier",
                        ImportSpecifier: "import specifier",
                        ImportDefaultSpecifier: "import default specifier",
                        ImportNamespaceSpecifier: "import namespace specifier",
                        ObjectPattern: "object destructuring pattern",
                        ParenthesizedExpression: "parenthesized expression",
                        RestElement: "rest element",
                        UpdateExpression: {
                            true: "prefix operation",
                            false: "postfix operation"
                        },
                        VariableDeclarator: "variable declaration",
                        YieldExpression: "yield expression"
                    }
                      , D = e=>{
                        let {type: t, prefix: s} = e;
                        return "UpdateExpression" === t ? O.UpdateExpression[String(s)] : O[t]
                    }
                      , F = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"])
                      , B = ["toMessage"]
                      , j = ["message"];
                    function R(e, t) {
                        if (Array.isArray(e))
                            return t=>R(t, e[0]);
                        let s = {};
                        for (let r of Object.keys(e)) {
                            let i = e[r]
                              , a = "string" == typeof i ? {
                                message: ()=>i
                            } : "function" == typeof i ? {
                                message: i
                            } : i
                              , {message: n} = a
                              , o = w(a, j)
                              , h = "string" == typeof n ? ()=>n : n;
                            s[r] = function(e) {
                                let {toMessage: t} = e
                                  , s = w(e, B);
                                return function e(r) {
                                    let {loc: i, details: a} = r;
                                    return L(SyntaxError, Object.assign({}, s, {
                                        loc: i
                                    }), {
                                        clone() {
                                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                              , s = t.loc || {};
                                            return e({
                                                loc: new v("line"in s ? s.line : this.loc.line,"column"in s ? s.column : this.loc.column,"index"in s ? s.index : this.loc.index),
                                                details: Object.assign({}, this.details, t.details)
                                            })
                                        },
                                        details: {
                                            value: a,
                                            enumerable: !1
                                        },
                                        message: {
                                            get() {
                                                return `${t(this.details)} (${this.loc.line}:${this.loc.column})`
                                            },
                                            set(e) {
                                                Object.defineProperty(this, "message", {
                                                    value: e
                                                })
                                            }
                                        },
                                        pos: {
                                            reflect: "loc.index",
                                            enumerable: !0
                                        },
                                        missingPlugin: "missingPlugin"in a && {
                                            reflect: "details.missingPlugin",
                                            enumerable: !0
                                        }
                                    })
                                }
                            }(Object.assign({
                                code: I.SyntaxError,
                                reasonCode: r,
                                toMessage: h
                            }, t ? {
                                syntaxPlugin: t
                            } : {}, o))
                        }
                        return s
                    }
                    var U = Object.assign({}, R(M), R({
                        AccessorIsGenerator: e=>{
                            let {kind: t} = e;
                            return `A ${t}ter cannot be a generator.`
                        }
                        ,
                        ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
                        AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
                        AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
                        AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
                        AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
                        AwaitInUsingBinding: "'await' is not allowed to be used as a name in 'using' declarations.",
                        AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
                        AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
                        BadGetterArity: "A 'get' accessor must not have any formal parameters.",
                        BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
                        BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
                        ConstructorClassField: "Classes may not have a field named 'constructor'.",
                        ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
                        ConstructorIsAccessor: "Class constructor may not be an accessor.",
                        ConstructorIsAsync: "Constructor can't be an async function.",
                        ConstructorIsGenerator: "Constructor can't be a generator.",
                        DeclarationMissingInitializer: e=>{
                            let {kind: t} = e;
                            return `Missing initializer in ${t} declaration.`
                        }
                        ,
                        DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
                        DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
                        DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
                        DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
                        DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
                        DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
                        DecoratorStaticBlock: "Decorators can't be used with a static block.",
                        DeletePrivateField: "Deleting a private field is not allowed.",
                        DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
                        DuplicateConstructor: "Duplicate constructor in the same class.",
                        DuplicateDefaultExport: "Only one default export allowed per module.",
                        DuplicateExport: e=>{
                            let {exportName: t} = e;
                            return `\`${t}\` has already been exported. Exported identifiers must be unique.`
                        }
                        ,
                        DuplicateProto: "Redefinition of __proto__ property.",
                        DuplicateRegExpFlags: "Duplicate regular expression flag.",
                        ElementAfterRest: "Rest element must be last element.",
                        EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
                        ExportBindingIsString: e=>{
                            let {localName: t, exportName: s} = e;
                            return `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${t}' as '${s}' } from 'some-module'\`?`
                        }
                        ,
                        ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
                        ForInOfLoopInitializer: e=>{
                            let {type: t} = e;
                            return `'${"ForInStatement" === t ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`
                        }
                        ,
                        ForInUsing: "For-in loop may not start with 'using' declaration.",
                        ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
                        ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
                        GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
                        IllegalBreakContinue: e=>{
                            let {type: t} = e;
                            return `Unsyntactic ${"BreakStatement" === t ? "break" : "continue"}.`
                        }
                        ,
                        IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
                        IllegalReturn: "'return' outside of function.",
                        ImportBindingIsString: e=>{
                            let {importName: t} = e;
                            return `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${t}" as foo }\`?`
                        }
                        ,
                        ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
                        ImportCallArity: e=>{
                            let {maxArgumentCount: t} = e;
                            return `\`import()\` requires exactly ${1 === t ? "one argument" : "one or two arguments"}.`
                        }
                        ,
                        ImportCallNotNewExpression: "Cannot use new with import(...).",
                        ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
                        ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
                        ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
                        ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
                        IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
                        InvalidBigIntLiteral: "Invalid BigIntLiteral.",
                        InvalidCodePoint: "Code point out of bounds.",
                        InvalidCoverInitializedName: "Invalid shorthand property initializer.",
                        InvalidDecimal: "Invalid decimal.",
                        InvalidDigit: e=>{
                            let {radix: t} = e;
                            return `Expected number in radix ${t}.`
                        }
                        ,
                        InvalidEscapeSequence: "Bad character escape sequence.",
                        InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
                        InvalidEscapedReservedWord: e=>{
                            let {reservedWord: t} = e;
                            return `Escape sequence in keyword ${t}.`
                        }
                        ,
                        InvalidIdentifier: e=>{
                            let {identifierName: t} = e;
                            return `Invalid identifier ${t}.`
                        }
                        ,
                        InvalidLhs: e=>{
                            let {ancestor: t} = e;
                            return `Invalid left-hand side in ${D(t)}.`
                        }
                        ,
                        InvalidLhsBinding: e=>{
                            let {ancestor: t} = e;
                            return `Binding invalid left-hand side in ${D(t)}.`
                        }
                        ,
                        InvalidNumber: "Invalid number.",
                        InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
                        InvalidOrUnexpectedToken: e=>{
                            let {unexpected: t} = e;
                            return `Unexpected character '${t}'.`
                        }
                        ,
                        InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
                        InvalidPrivateFieldResolution: e=>{
                            let {identifierName: t} = e;
                            return `Private name #${t} is not defined.`
                        }
                        ,
                        InvalidPropertyBindingPattern: "Binding member expression.",
                        InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
                        InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
                        LabelRedeclaration: e=>{
                            let {labelName: t} = e;
                            return `Label '${t}' is already declared.`
                        }
                        ,
                        LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
                        LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
                        MalformedRegExpFlags: "Invalid regular expression flag.",
                        MissingClassName: "A class name is required.",
                        MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
                        MissingSemicolon: "Missing semicolon.",
                        MissingPlugin: e=>{
                            let {missingPlugin: t} = e;
                            return `This experimental syntax requires enabling the parser plugin: ${t.map(e=>JSON.stringify(e)).join(", ")}.`
                        }
                        ,
                        MissingOneOfPlugins: e=>{
                            let {missingPlugin: t} = e;
                            return `This experimental syntax requires enabling one of the following parser plugin(s): ${t.map(e=>JSON.stringify(e)).join(", ")}.`
                        }
                        ,
                        MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
                        MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
                        ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
                        ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
                        ModuleAttributesWithDuplicateKeys: e=>{
                            let {key: t} = e;
                            return `Duplicate key "${t}" is not allowed in module attributes.`
                        }
                        ,
                        ModuleExportNameHasLoneSurrogate: e=>{
                            let {surrogateCharCode: t} = e;
                            return `An export name cannot include a lone surrogate, found '\\u ${t.toString(16)}'.`
                        }
                        ,
                        ModuleExportUndefined: e=>{
                            let {localName: t} = e;
                            return `Export '${t}' is not defined.`
                        }
                        ,
                        MultipleDefaultsInSwitch: "Multiple default clauses.",
                        NewlineAfterThrow: "Illegal newline after throw.",
                        NoCatchOrFinally: "Missing catch or finally clause.",
                        NumberIdentifier: "Identifier directly after number.",
                        NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
                        ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
                        OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
                        OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
                        OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
                        ParamDupe: "Argument name clash.",
                        PatternHasAccessor: "Object pattern can't contain getter or setter.",
                        PatternHasMethod: "Object pattern can't contain methods.",
                        PrivateInExpectedIn: e=>{
                            let {identifierName: t} = e;
                            return `Private names are only allowed in property accesses (\`obj.#${t}\`) or in \`in\` expressions (\`#${t} in obj\`).`
                        }
                        ,
                        PrivateNameRedeclaration: e=>{
                            let {identifierName: t} = e;
                            return `Duplicate private name #${t}.`
                        }
                        ,
                        RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                        RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                        RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
                        RecordNoProto: "'__proto__' is not allowed in Record expressions.",
                        RestTrailingComma: "Unexpected trailing comma after rest element.",
                        SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
                        SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
                        StaticPrototype: "Classes may not have static property named prototype.",
                        SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
                        SuperPrivateField: "Private fields can't be accessed on super.",
                        TrailingDecorator: "Decorators must be attached to a class element.",
                        TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                        TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                        TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
                        UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
                        UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
                        UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
                        UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
                        UnexpectedKeyword: e=>{
                            let {keyword: t} = e;
                            return `Unexpected keyword '${t}'.`
                        }
                        ,
                        UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
                        UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
                        UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
                        UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
                        UnexpectedPrivateField: "Unexpected private name.",
                        UnexpectedReservedWord: e=>{
                            let {reservedWord: t} = e;
                            return `Unexpected reserved word '${t}'.`
                        }
                        ,
                        UnexpectedSuper: "'super' is only allowed in object methods and classes.",
                        UnexpectedToken: e=>{
                            let {expected: t, unexpected: s} = e;
                            return `Unexpected token ${s ? ` '${s}'.` : ""}${t ? `, expected "${t}"` : ""}`
                        }
                        ,
                        UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
                        UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.",
                        UnsupportedBind: "Binding should be performed on object property.",
                        UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
                        UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
                        UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
                        UnsupportedMetaProperty: e=>{
                            let {target: t, onlyValidPropertyName: s} = e;
                            return `The only valid meta property for ${t} is ${t}.${s}.`
                        }
                        ,
                        UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
                        UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
                        UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
                        UnterminatedComment: "Unterminated comment.",
                        UnterminatedRegExp: "Unterminated regular expression.",
                        UnterminatedString: "Unterminated string constant.",
                        UnterminatedTemplate: "Unterminated template.",
                        UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
                        VarRedeclaration: e=>{
                            let {identifierName: t} = e;
                            return `Identifier '${t}' has already been declared.`
                        }
                        ,
                        YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
                        YieldInParameter: "Yield expression is not allowed in formal parameters.",
                        ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
                    }), R({
                        StrictDelete: "Deleting local variable in strict mode.",
                        StrictEvalArguments: e=>{
                            let {referenceName: t} = e;
                            return `Assigning to '${t}' in strict mode.`
                        }
                        ,
                        StrictEvalArgumentsBinding: e=>{
                            let {bindingName: t} = e;
                            return `Binding '${t}' in strict mode.`
                        }
                        ,
                        StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
                        StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
                        StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
                        StrictWith: "'with' in strict mode."
                    }), R`pipelineOperator`({
                        PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
                        PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
                        PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
                        PipeTopicUnconfiguredToken: e=>{
                            let {token: t} = e;
                            return `Invalid topic token ${t}. In order to use ${t} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${t}" }.`
                        }
                        ,
                        PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
                        PipeUnparenthesizedBody: e=>{
                            let {type: t} = e;
                            return `Hack-style pipe body cannot be an unparenthesized ${D({
                                type: t
                            })}; please wrap it in parentheses.`
                        }
                        ,
                        PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
                        PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
                        PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
                        PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
                        PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
                        PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
                    }))
                      , {defineProperty: _} = Object
                      , z = (e,t)=>_(e, t, {
                        enumerable: !1,
                        value: e[t]
                    });
                    function H(e) {
                        return e.loc.start && z(e.loc.start, "index"),
                        e.loc.end && z(e.loc.end, "index"),
                        e
                    }
                    var V = e=>class extends e {
                        parse() {
                            let e = H(super.parse());
                            return this.options.tokens && (e.tokens = e.tokens.map(H)),
                            e
                        }
                        parseRegExpLiteral(e) {
                            let {pattern: t, flags: s} = e
                              , r = null;
                            try {
                                r = new RegExp(t,s)
                            } catch {}
                            let i = this.estreeParseLiteral(r);
                            return i.regex = {
                                pattern: t,
                                flags: s
                            },
                            i
                        }
                        parseBigIntLiteral(e) {
                            let t;
                            try {
                                t = BigInt(e)
                            } catch {
                                t = null
                            }
                            let s = this.estreeParseLiteral(t);
                            return s.bigint = String(s.value || e),
                            s
                        }
                        parseDecimalLiteral(e) {
                            let t = this.estreeParseLiteral(null);
                            return t.decimal = String(t.value || e),
                            t
                        }
                        estreeParseLiteral(e) {
                            return this.parseLiteral(e, "Literal")
                        }
                        parseStringLiteral(e) {
                            return this.estreeParseLiteral(e)
                        }
                        parseNumericLiteral(e) {
                            return this.estreeParseLiteral(e)
                        }
                        parseNullLiteral() {
                            return this.estreeParseLiteral(null)
                        }
                        parseBooleanLiteral(e) {
                            return this.estreeParseLiteral(e)
                        }
                        directiveToStmt(e) {
                            let t = e.value;
                            delete e.value,
                            t.type = "Literal",
                            t.raw = t.extra.raw,
                            t.value = t.extra.expressionValue;
                            let s = e;
                            return s.type = "ExpressionStatement",
                            s.expression = t,
                            s.directive = t.extra.rawValue,
                            delete t.extra,
                            s
                        }
                        initFunction(e, t) {
                            super.initFunction(e, t),
                            e.expression = !1
                        }
                        checkDeclaration(e) {
                            null != e && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e)
                        }
                        getObjectOrClassMethodParams(e) {
                            return e.value.params
                        }
                        isValidDirective(e) {
                            var t;
                            return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" == typeof e.expression.value && !(null != (t = e.expression.extra) && t.parenthesized)
                        }
                        parseBlockBody(e, t, s, r, i) {
                            super.parseBlockBody(e, t, s, r, i);
                            let a = e.directives.map(e=>this.directiveToStmt(e));
                            e.body = a.concat(e.body),
                            delete e.directives
                        }
                        pushClassMethod(e, t, s, r, i, a) {
                            this.parseMethod(t, s, r, i, a, "ClassMethod", !0),
                            t.typeParameters && (t.value.typeParameters = t.typeParameters,
                            delete t.typeParameters),
                            e.body.push(t)
                        }
                        parsePrivateName() {
                            let e = super.parsePrivateName();
                            return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e
                        }
                        convertPrivateNameToPrivateIdentifier(e) {
                            let t = super.getPrivateNameSV(e);
                            return delete e.id,
                            e.name = t,
                            e.type = "PrivateIdentifier",
                            e
                        }
                        isPrivateName(e) {
                            return this.getPluginOption("estree", "classFeatures") ? "PrivateIdentifier" === e.type : super.isPrivateName(e)
                        }
                        getPrivateNameSV(e) {
                            return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e)
                        }
                        parseLiteral(e, t) {
                            let s = super.parseLiteral(e, t);
                            return s.raw = s.extra.raw,
                            delete s.extra,
                            s
                        }
                        parseFunctionBody(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            super.parseFunctionBody(e, t, s),
                            e.expression = "BlockStatement" !== e.body.type
                        }
                        parseMethod(e, t, s, r, i, a) {
                            let n = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]
                              , o = this.startNode();
                            return o.kind = e.kind,
                            (o = super.parseMethod(o, t, s, r, i, a, n)).type = "FunctionExpression",
                            delete o.kind,
                            e.value = o,
                            "ClassPrivateMethod" === a && (e.computed = !1),
                            this.finishNode(e, "MethodDefinition")
                        }
                        parseClassProperty() {
                            let e = super.parseClassProperty(...arguments);
                            return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"),
                            e
                        }
                        parseClassPrivateProperty() {
                            let e = super.parseClassPrivateProperty(...arguments);
                            return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition",
                            e.computed = !1),
                            e
                        }
                        parseObjectMethod(e, t, s, r, i) {
                            let a = super.parseObjectMethod(e, t, s, r, i);
                            return a && (a.type = "Property",
                            "method" === a.kind && (a.kind = "init"),
                            a.shorthand = !1),
                            a
                        }
                        parseObjectProperty(e, t, s, r) {
                            let i = super.parseObjectProperty(e, t, s, r);
                            return i && (i.kind = "init",
                            i.type = "Property"),
                            i
                        }
                        isValidLVal(e, t, s) {
                            return "Property" === e ? "value" : super.isValidLVal(e, t, s)
                        }
                        isAssignable(e, t) {
                            return null != e && this.isObjectProperty(e) ? this.isAssignable(e.value, t) : super.isAssignable(e, t)
                        }
                        toAssignable(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (null != e && this.isObjectProperty(e)) {
                                let {key: s, value: r} = e;
                                this.isPrivateName(s) && this.classScope.usePrivateName(this.getPrivateNameSV(s), s.loc.start),
                                this.toAssignable(r, t)
                            } else
                                super.toAssignable(e, t)
                        }
                        toAssignableObjectExpressionProp(e, t, s) {
                            "get" === e.kind || "set" === e.kind ? this.raise(U.PatternHasAccessor, {
                                at: e.key
                            }) : e.method ? this.raise(U.PatternHasMethod, {
                                at: e.key
                            }) : super.toAssignableObjectExpressionProp(e, t, s)
                        }
                        finishCallExpression(e, t) {
                            let s = super.finishCallExpression(e, t);
                            if ("Import" === s.callee.type) {
                                if (s.type = "ImportExpression",
                                s.source = s.arguments[0],
                                this.hasPlugin("importAssertions")) {
                                    var r;
                                    s.attributes = null != (r = s.arguments[1]) ? r : null
                                }
                                delete s.arguments,
                                delete s.callee
                            }
                            return s
                        }
                        toReferencedArguments(e) {
                            "ImportExpression" !== e.type && super.toReferencedArguments(e)
                        }
                        parseExport(e, t) {
                            let s = this.state.lastTokStartLoc
                              , r = super.parseExport(e, t);
                            switch (r.type) {
                            case "ExportAllDeclaration":
                                r.exported = null;
                                break;
                            case "ExportNamedDeclaration":
                                1 === r.specifiers.length && "ExportNamespaceSpecifier" === r.specifiers[0].type && (r.type = "ExportAllDeclaration",
                                r.exported = r.specifiers[0].exported,
                                delete r.specifiers);
                            case "ExportDefaultDeclaration":
                                {
                                    var i;
                                    let {declaration: e} = r;
                                    (null == e ? void 0 : e.type) === "ClassDeclaration" && (null == (i = e.decorators) ? void 0 : i.length) > 0 && e.start === r.start && this.resetStartLocation(r, s)
                                }
                            }
                            return r
                        }
                        parseSubscript(e, t, s, r) {
                            let i = super.parseSubscript(e, t, s, r);
                            if (r.optionalChainMember) {
                                if (("OptionalMemberExpression" === i.type || "OptionalCallExpression" === i.type) && (i.type = i.type.substring(8)),
                                r.stop) {
                                    let e = this.startNodeAtNode(i);
                                    return e.expression = i,
                                    this.finishNode(e, "ChainExpression")
                                }
                            } else
                                ("MemberExpression" === i.type || "CallExpression" === i.type) && (i.optional = !1);
                            return i
                        }
                        hasPropertyAsPrivateName(e) {
                            return "ChainExpression" === e.type && (e = e.expression),
                            super.hasPropertyAsPrivateName(e)
                        }
                        isObjectProperty(e) {
                            return "Property" === e.type && "init" === e.kind && !e.method
                        }
                        isObjectMethod(e) {
                            return e.method || "get" === e.kind || "set" === e.kind
                        }
                        finishNodeAt(e, t, s) {
                            return H(super.finishNodeAt(e, t, s))
                        }
                        resetStartLocation(e, t) {
                            super.resetStartLocation(e, t),
                            H(e)
                        }
                        resetEndLocation(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEndLoc;
                            super.resetEndLocation(e, t),
                            H(e)
                        }
                    }
                      , $ = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
                      , q = "‌‍\xb7̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿"
                      , K = RegExp("[" + $ + "]")
                      , W = RegExp("[" + $ + q + "]");
                    $ = q = null;
                    var J = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191]
                      , X = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
                    function G(e, t) {
                        let s = 65536;
                        for (let r = 0, i = t.length; r < i && !((s += t[r]) > e); r += 2)
                            if ((s += t[r + 1]) >= e)
                                return !0;
                        return !1
                    }
                    function Y(e) {
                        return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && K.test(String.fromCharCode(e)) : G(e, J)))
                    }
                    function Q(e) {
                        return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && W.test(String.fromCharCode(e)) : G(e, J) || G(e, X))))
                    }
                    var Z = {
                        keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
                        strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
                        strictBind: ["eval", "arguments"]
                    }
                      , ee = new Set(Z.keyword)
                      , et = new Set(Z.strict)
                      , es = new Set(Z.strictBind);
                    function er(e, t) {
                        return t && "await" === e || "enum" === e
                    }
                    function ei(e, t) {
                        return er(e, t) || et.has(e)
                    }
                    function ea(e, t) {
                        return ei(e, t) || es.has(e)
                    }
                    var en = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"])
                      , eo = class {
                        constructor(e) {
                            this.var = new Set,
                            this.lexical = new Set,
                            this.functions = new Set,
                            this.flags = e
                        }
                    }
                      , eh = class {
                        constructor(e, t) {
                            this.parser = void 0,
                            this.scopeStack = [],
                            this.inModule = void 0,
                            this.undefinedExports = new Map,
                            this.parser = e,
                            this.inModule = t
                        }
                        get inTopLevel() {
                            return (1 & this.currentScope().flags) > 0
                        }
                        get inFunction() {
                            return (2 & this.currentVarScopeFlags()) > 0
                        }
                        get allowSuper() {
                            return (16 & this.currentThisScopeFlags()) > 0
                        }
                        get allowDirectSuper() {
                            return (32 & this.currentThisScopeFlags()) > 0
                        }
                        get inClass() {
                            return (64 & this.currentThisScopeFlags()) > 0
                        }
                        get inClassAndNotInNonArrowFunction() {
                            let e = this.currentThisScopeFlags();
                            return (64 & e) > 0 && (2 & e) == 0
                        }
                        get inStaticBlock() {
                            for (let e = this.scopeStack.length - 1; ; e--) {
                                let {flags: t} = this.scopeStack[e];
                                if (128 & t)
                                    return !0;
                                if (451 & t)
                                    return !1
                            }
                        }
                        get inNonArrowFunction() {
                            return (2 & this.currentThisScopeFlags()) > 0
                        }
                        get treatFunctionsAsVar() {
                            return this.treatFunctionsAsVarInScope(this.currentScope())
                        }
                        createScope(e) {
                            return new eo(e)
                        }
                        enter(e) {
                            this.scopeStack.push(this.createScope(e))
                        }
                        exit() {
                            return this.scopeStack.pop().flags
                        }
                        treatFunctionsAsVarInScope(e) {
                            return !!(130 & e.flags || !this.parser.inModule && 1 & e.flags)
                        }
                        declareName(e, t, s) {
                            let r = this.currentScope();
                            if (8 & t || 16 & t)
                                this.checkRedeclarationInScope(r, e, t, s),
                                16 & t ? r.functions.add(e) : r.lexical.add(e),
                                8 & t && this.maybeExportDefined(r, e);
                            else if (4 & t)
                                for (let i = this.scopeStack.length - 1; i >= 0 && (r = this.scopeStack[i],
                                this.checkRedeclarationInScope(r, e, t, s),
                                r.var.add(e),
                                this.maybeExportDefined(r, e),
                                !(387 & r.flags)); --i)
                                    ;
                            this.parser.inModule && 1 & r.flags && this.undefinedExports.delete(e)
                        }
                        maybeExportDefined(e, t) {
                            this.parser.inModule && 1 & e.flags && this.undefinedExports.delete(t)
                        }
                        checkRedeclarationInScope(e, t, s, r) {
                            this.isRedeclaredInScope(e, t, s) && this.parser.raise(U.VarRedeclaration, {
                                at: r,
                                identifierName: t
                            })
                        }
                        isRedeclaredInScope(e, t, s) {
                            return !!(1 & s) && (8 & s ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t) : 16 & s ? e.lexical.has(t) || !this.treatFunctionsAsVarInScope(e) && e.var.has(t) : e.lexical.has(t) && !(8 & e.flags && e.lexical.values().next().value === t) || !this.treatFunctionsAsVarInScope(e) && e.functions.has(t))
                        }
                        checkLocalExport(e) {
                            let {name: t} = e
                              , s = this.scopeStack[0];
                            s.lexical.has(t) || s.var.has(t) || s.functions.has(t) || this.undefinedExports.set(t, e.loc.start)
                        }
                        currentScope() {
                            return this.scopeStack[this.scopeStack.length - 1]
                        }
                        currentVarScopeFlags() {
                            for (let e = this.scopeStack.length - 1; ; e--) {
                                let {flags: t} = this.scopeStack[e];
                                if (387 & t)
                                    return t
                            }
                        }
                        currentThisScopeFlags() {
                            for (let e = this.scopeStack.length - 1; ; e--) {
                                let {flags: t} = this.scopeStack[e];
                                if (451 & t && !(4 & t))
                                    return t
                            }
                        }
                    }
                      , el = class extends eo {
                        constructor() {
                            super(...arguments),
                            this.declareFunctions = new Set
                        }
                    }
                      , ep = class extends eh {
                        createScope(e) {
                            return new el(e)
                        }
                        declareName(e, t, s) {
                            let r = this.currentScope();
                            if (2048 & t) {
                                this.checkRedeclarationInScope(r, e, t, s),
                                this.maybeExportDefined(r, e),
                                r.declareFunctions.add(e);
                                return
                            }
                            super.declareName(e, t, s)
                        }
                        isRedeclaredInScope(e, t, s) {
                            return !!super.isRedeclaredInScope(e, t, s) || !!(2048 & s) && !e.declareFunctions.has(t) && (e.lexical.has(t) || e.functions.has(t))
                        }
                        checkLocalExport(e) {
                            this.scopeStack[0].declareFunctions.has(e.name) || super.checkLocalExport(e)
                        }
                    }
                      , ec = class {
                        constructor() {
                            this.sawUnambiguousESM = !1,
                            this.ambiguousScriptDifferentAst = !1
                        }
                        hasPlugin(e) {
                            if ("string" == typeof e)
                                return this.plugins.has(e);
                            {
                                let[t,s] = e;
                                if (!this.hasPlugin(t))
                                    return !1;
                                let r = this.plugins.get(t);
                                for (let e of Object.keys(s))
                                    if ((null == r ? void 0 : r[e]) !== s[e])
                                        return !1;
                                return !0
                            }
                        }
                        getPluginOption(e, t) {
                            var s;
                            return null == (s = this.plugins.get(e)) ? void 0 : s[t]
                        }
                    }
                    ;
                    function eu(e, t) {
                        void 0 === e.trailingComments ? e.trailingComments = t : e.trailingComments.unshift(...t)
                    }
                    function ed(e, t) {
                        void 0 === e.innerComments ? e.innerComments = t : e.innerComments.unshift(...t)
                    }
                    function em(e, t, s) {
                        let r = null
                          , i = t.length;
                        for (; null === r && i > 0; )
                            r = t[--i];
                        null === r || r.start > s.start ? ed(e, s.comments) : eu(r, s.comments)
                    }
                    var ef = class extends ec {
                        addComment(e) {
                            this.filename && (e.loc.filename = this.filename),
                            this.state.comments.push(e)
                        }
                        processComment(e) {
                            let {commentStack: t} = this.state
                              , s = t.length;
                            if (0 === s)
                                return;
                            let r = s - 1
                              , i = t[r];
                            i.start === e.end && (i.leadingNode = e,
                            r--);
                            let {start: a} = e;
                            for (; r >= 0; r--) {
                                let s = t[r]
                                  , i = s.end;
                                if (i > a)
                                    s.containingNode = e,
                                    this.finalizeComment(s),
                                    t.splice(r, 1);
                                else {
                                    i === a && (s.trailingNode = e);
                                    break
                                }
                            }
                        }
                        finalizeComment(e) {
                            let {comments: t} = e;
                            if (null !== e.leadingNode || null !== e.trailingNode) {
                                var s;
                                null !== e.leadingNode && eu(e.leadingNode, t),
                                null !== e.trailingNode && (void 0 === (s = e.trailingNode).leadingComments ? s.leadingComments = t : s.leadingComments.unshift(...t))
                            } else {
                                let {containingNode: s, start: r} = e;
                                if (44 === this.input.charCodeAt(r - 1))
                                    switch (s.type) {
                                    case "ObjectExpression":
                                    case "ObjectPattern":
                                    case "RecordExpression":
                                        em(s, s.properties, e);
                                        break;
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        em(s, s.arguments, e);
                                        break;
                                    case "FunctionDeclaration":
                                    case "FunctionExpression":
                                    case "ArrowFunctionExpression":
                                    case "ObjectMethod":
                                    case "ClassMethod":
                                    case "ClassPrivateMethod":
                                        em(s, s.params, e);
                                        break;
                                    case "ArrayExpression":
                                    case "ArrayPattern":
                                    case "TupleExpression":
                                        em(s, s.elements, e);
                                        break;
                                    case "ExportNamedDeclaration":
                                    case "ImportDeclaration":
                                        em(s, s.specifiers, e);
                                        break;
                                    default:
                                        ed(s, t)
                                    }
                                else
                                    ed(s, t)
                            }
                        }
                        finalizeRemainingComments() {
                            let {commentStack: e} = this.state;
                            for (let t = e.length - 1; t >= 0; t--)
                                this.finalizeComment(e[t]);
                            this.state.commentStack = []
                        }
                        resetPreviousNodeTrailingComments(e) {
                            let {commentStack: t} = this.state
                              , {length: s} = t;
                            if (0 === s)
                                return;
                            let r = t[s - 1];
                            r.leadingNode === e && (r.leadingNode = null)
                        }
                        takeSurroundingComments(e, t, s) {
                            let {commentStack: r} = this.state
                              , i = r.length;
                            if (0 === i)
                                return;
                            let a = i - 1;
                            for (; a >= 0; a--) {
                                let i = r[a]
                                  , n = i.end;
                                if (i.start === s)
                                    i.leadingNode = e;
                                else if (n === t)
                                    i.trailingNode = e;
                                else if (n < t)
                                    break
                            }
                        }
                    }
                      , ey = /\r\n?|[\n\u2028\u2029]/
                      , ex = RegExp(ey.source, "g");
                    function eg(e) {
                        switch (e) {
                        case 10:
                        case 13:
                        case 8232:
                        case 8233:
                            return !0;
                        default:
                            return !1
                        }
                    }
                    var eP = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g
                      , eb = RegExp("(?=(" + /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y")
                      , eT = class {
                        constructor() {
                            this.strict = void 0,
                            this.curLine = void 0,
                            this.lineStart = void 0,
                            this.startLoc = void 0,
                            this.endLoc = void 0,
                            this.errors = [],
                            this.potentialArrowAt = -1,
                            this.noArrowAt = [],
                            this.noArrowParamsConversionAt = [],
                            this.maybeInArrowParameters = !1,
                            this.inType = !1,
                            this.noAnonFunctionType = !1,
                            this.hasFlowComment = !1,
                            this.isAmbientContext = !1,
                            this.inAbstractClass = !1,
                            this.inDisallowConditionalTypesContext = !1,
                            this.topicContext = {
                                maxNumOfResolvableTopics: 0,
                                maxTopicIndex: null
                            },
                            this.soloAwait = !1,
                            this.inFSharpPipelineDirectBody = !1,
                            this.labels = [],
                            this.comments = [],
                            this.commentStack = [],
                            this.pos = 0,
                            this.type = 137,
                            this.value = null,
                            this.start = 0,
                            this.end = 0,
                            this.lastTokEndLoc = null,
                            this.lastTokStartLoc = null,
                            this.lastTokStart = 0,
                            this.context = [r.brace],
                            this.canStartJSXElement = !0,
                            this.containsEsc = !1,
                            this.firstInvalidTemplateEscapePos = null,
                            this.strictErrors = new Map,
                            this.tokensLength = 0
                        }
                        init(e) {
                            let {strictMode: t, sourceType: s, startLine: r, startColumn: i} = e;
                            this.strict = !1 !== t && (!0 === t || "module" === s),
                            this.curLine = r,
                            this.lineStart = -i,
                            this.startLoc = this.endLoc = new v(r,i,0)
                        }
                        curPosition() {
                            return new v(this.curLine,this.pos - this.lineStart,this.pos)
                        }
                        clone(e) {
                            let t = new eT
                              , s = Object.keys(this);
                            for (let r = 0, i = s.length; r < i; r++) {
                                let i = s[r]
                                  , a = this[i];
                                !e && Array.isArray(a) && (a = a.slice()),
                                t[i] = a
                            }
                            return t
                        }
                    }
                      , eA = {
                        decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
                        hex: new Set([46, 88, 95, 120])
                    }
                      , eE = {
                        bin: e=>48 === e || 49 === e,
                        oct: e=>e >= 48 && e <= 55,
                        dec: e=>e >= 48 && e <= 57,
                        hex: e=>e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
                    };
                    function eS(e, t, s, r, i, a) {
                        let n = s
                          , o = r
                          , h = i
                          , l = ""
                          , p = null
                          , c = s
                          , {length: u} = t;
                        for (; ; ) {
                            var d;
                            if (s >= u) {
                                a.unterminated(n, o, h),
                                l += t.slice(c, s);
                                break
                            }
                            let m = t.charCodeAt(s);
                            if (d = s,
                            "template" === e ? 96 === m || 36 === m && 123 === t.charCodeAt(d + 1) : m === ("double" === e ? 34 : 39)) {
                                l += t.slice(c, s);
                                break
                            }
                            if (92 === m) {
                                l += t.slice(c, s);
                                let n = function(e, t, s, r, i, a) {
                                    let n = !i;
                                    t++;
                                    let o = e=>({
                                        pos: t,
                                        ch: e,
                                        lineStart: s,
                                        curLine: r
                                    })
                                      , h = e.charCodeAt(t++);
                                    switch (h) {
                                    case 110:
                                        return o(`
`);
                                    case 114:
                                        return o("\r");
                                    case 120:
                                        {
                                            let i;
                                            return {code: i, pos: t} = ew(e, t, s, r, 2, !1, n, a),
                                            o(null === i ? null : String.fromCharCode(i))
                                        }
                                    case 117:
                                        {
                                            let i;
                                            return {code: i, pos: t} = eC(e, t, s, r, n, a),
                                            o(null === i ? null : String.fromCodePoint(i))
                                        }
                                    case 116:
                                        return o("	");
                                    case 98:
                                        return o("\b");
                                    case 118:
                                        return o("\v");
                                    case 102:
                                        return o("\f");
                                    case 13:
                                        10 === e.charCodeAt(t) && ++t;
                                    case 10:
                                        s = t,
                                        ++r;
                                    case 8232:
                                    case 8233:
                                        return o("");
                                    case 56:
                                    case 57:
                                        if (i)
                                            return o(null);
                                        a.strictNumericEscape(t - 1, s, r);
                                    default:
                                        if (h >= 48 && h <= 55) {
                                            let n = t - 1
                                              , h = e.slice(n, t + 2).match(/^[0-7]+/)[0]
                                              , l = parseInt(h, 8);
                                            l > 255 && (l = parseInt(h = h.slice(0, -1), 8)),
                                            t += h.length - 1;
                                            let p = e.charCodeAt(t);
                                            if ("0" !== h || 56 === p || 57 === p) {
                                                if (i)
                                                    return o(null);
                                                a.strictNumericEscape(n, s, r)
                                            }
                                            return o(String.fromCharCode(l))
                                        }
                                        return o(String.fromCharCode(h))
                                    }
                                }(t, s, r, i, "template" === e, a);
                                null !== n.ch || p ? l += n.ch : p = {
                                    pos: s,
                                    lineStart: r,
                                    curLine: i
                                },
                                ({pos: s, lineStart: r, curLine: i} = n),
                                c = s
                            } else
                                8232 === m || 8233 === m ? (++s,
                                ++i,
                                r = s) : 10 === m || 13 === m ? "template" === e ? (l += t.slice(c, s) + `
`,
                                ++s,
                                13 === m && 10 === t.charCodeAt(s) && ++s,
                                ++i,
                                c = r = s) : a.unterminated(n, o, h) : ++s
                        }
                        return {
                            pos: s,
                            str: l,
                            firstInvalidLoc: p,
                            lineStart: r,
                            curLine: i,
                            containsInvalid: !!p
                        }
                    }
                    function ew(e, t, s, r, i, a, n, o) {
                        let h = t, l;
                        return {n: l, pos: t} = ev(e, t, s, r, 16, i, a, !1, o, !n),
                        null === l && (n ? o.invalidEscapeSequence(h, s, r) : t = h - 1),
                        {
                            code: l,
                            pos: t
                        }
                    }
                    function ev(e, t, s, r, i, a, n, o, h, l) {
                        let p = t
                          , c = 16 === i ? eA.hex : eA.decBinOct
                          , u = 16 === i ? eE.hex : 10 === i ? eE.dec : 8 === i ? eE.oct : eE.bin
                          , d = !1
                          , m = 0;
                        for (let p = 0, f = null == a ? 1 / 0 : a; p < f; ++p) {
                            let a = e.charCodeAt(t), p;
                            if (95 === a && "bail" !== o) {
                                let i = e.charCodeAt(t - 1)
                                  , a = e.charCodeAt(t + 1);
                                if (o) {
                                    if (Number.isNaN(a) || !u(a) || c.has(i) || c.has(a)) {
                                        if (l)
                                            return {
                                                n: null,
                                                pos: t
                                            };
                                        h.unexpectedNumericSeparator(t, s, r)
                                    }
                                } else {
                                    if (l)
                                        return {
                                            n: null,
                                            pos: t
                                        };
                                    h.numericSeparatorInEscapeSequence(t, s, r)
                                }
                                ++t;
                                continue
                            }
                            if ((p = a >= 97 ? a - 97 + 10 : a >= 65 ? a - 65 + 10 : a >= 48 && a <= 57 ? a - 48 : 1 / 0) >= i) {
                                if (p <= 9 && l)
                                    return {
                                        n: null,
                                        pos: t
                                    };
                                if (p <= 9 && h.invalidDigit(t, s, r, i))
                                    p = 0;
                                else if (n)
                                    p = 0,
                                    d = !0;
                                else
                                    break
                            }
                            ++t,
                            m = m * i + p
                        }
                        return t === p || null != a && t - p !== a || d ? {
                            n: null,
                            pos: t
                        } : {
                            n: m,
                            pos: t
                        }
                    }
                    function eC(e, t, s, r, i, a) {
                        let n;
                        if (123 === e.charCodeAt(t)) {
                            if (++t,
                            {code: n, pos: t} = ew(e, t, s, r, e.indexOf("}", t) - t, !0, i, a),
                            ++t,
                            null !== n && n > 1114111) {
                                if (!i)
                                    return {
                                        code: null,
                                        pos: t
                                    };
                                a.invalidCodePoint(t, s, r)
                            }
                        } else
                            ({code: n, pos: t} = ew(e, t, s, r, 4, !1, i, a));
                        return {
                            code: n,
                            pos: t
                        }
                    }
                    var eN = ["at"]
                      , eI = ["at"];
                    function ek(e, t, s) {
                        return new v(s,e - t,e)
                    }
                    var eL = new Set([103, 109, 115, 105, 121, 117, 100, 118])
                      , eM = class {
                        constructor(e) {
                            this.type = e.type,
                            this.value = e.value,
                            this.start = e.start,
                            this.end = e.end,
                            this.loc = new C(e.startLoc,e.endLoc)
                        }
                    }
                      , eO = class extends ef {
                        constructor(e, t) {
                            super(),
                            this.isLookahead = void 0,
                            this.tokens = [],
                            this.errorHandlers_readInt = {
                                invalidDigit: (e,t,s,r)=>!!this.options.errorRecovery && (this.raise(U.InvalidDigit, {
                                    at: ek(e, t, s),
                                    radix: r
                                }),
                                !0),
                                numericSeparatorInEscapeSequence: this.errorBuilder(U.NumericSeparatorInEscapeSequence),
                                unexpectedNumericSeparator: this.errorBuilder(U.UnexpectedNumericSeparator)
                            },
                            this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
                                invalidEscapeSequence: this.errorBuilder(U.InvalidEscapeSequence),
                                invalidCodePoint: this.errorBuilder(U.InvalidCodePoint)
                            }),
                            this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
                                strictNumericEscape: (e,t,s)=>{
                                    this.recordStrictModeErrors(U.StrictNumericEscape, {
                                        at: ek(e, t, s)
                                    })
                                }
                                ,
                                unterminated: (e,t,s)=>{
                                    throw this.raise(U.UnterminatedString, {
                                        at: ek(e - 1, t, s)
                                    })
                                }
                            }),
                            this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
                                strictNumericEscape: this.errorBuilder(U.StrictNumericEscape),
                                unterminated: (e,t,s)=>{
                                    throw this.raise(U.UnterminatedTemplate, {
                                        at: ek(e, t, s)
                                    })
                                }
                            }),
                            this.state = new eT,
                            this.state.init(e),
                            this.input = t,
                            this.length = t.length,
                            this.isLookahead = !1
                        }
                        pushToken(e) {
                            this.tokens.length = this.state.tokensLength,
                            this.tokens.push(e),
                            ++this.state.tokensLength
                        }
                        next() {
                            this.checkKeywordEscapes(),
                            this.options.tokens && this.pushToken(new eM(this.state)),
                            this.state.lastTokStart = this.state.start,
                            this.state.lastTokEndLoc = this.state.endLoc,
                            this.state.lastTokStartLoc = this.state.startLoc,
                            this.nextToken()
                        }
                        eat(e) {
                            return !!this.match(e) && (this.next(),
                            !0)
                        }
                        match(e) {
                            return this.state.type === e
                        }
                        createLookaheadState(e) {
                            return {
                                pos: e.pos,
                                value: null,
                                type: e.type,
                                start: e.start,
                                end: e.end,
                                context: [this.curContext()],
                                inType: e.inType,
                                startLoc: e.startLoc,
                                lastTokEndLoc: e.lastTokEndLoc,
                                curLine: e.curLine,
                                lineStart: e.lineStart,
                                curPosition: e.curPosition
                            }
                        }
                        lookahead() {
                            let e = this.state;
                            this.state = this.createLookaheadState(e),
                            this.isLookahead = !0,
                            this.nextToken(),
                            this.isLookahead = !1;
                            let t = this.state;
                            return this.state = e,
                            t
                        }
                        nextTokenStart() {
                            return this.nextTokenStartSince(this.state.pos)
                        }
                        nextTokenStartSince(e) {
                            return eP.lastIndex = e,
                            eP.test(this.input) ? eP.lastIndex : e
                        }
                        lookaheadCharCode() {
                            return this.input.charCodeAt(this.nextTokenStart())
                        }
                        codePointAtPos(e) {
                            let t = this.input.charCodeAt(e);
                            if ((64512 & t) == 55296 && ++e < this.input.length) {
                                let s = this.input.charCodeAt(e);
                                (64512 & s) == 56320 && (t = 65536 + ((1023 & t) << 10) + (1023 & s))
                            }
                            return t
                        }
                        setStrict(e) {
                            this.state.strict = e,
                            e && (this.state.strictErrors.forEach(e=>{
                                let[t,s] = e;
                                return this.raise(t, {
                                    at: s
                                })
                            }
                            ),
                            this.state.strictErrors.clear())
                        }
                        curContext() {
                            return this.state.context[this.state.context.length - 1]
                        }
                        nextToken() {
                            if (this.skipSpace(),
                            this.state.start = this.state.pos,
                            this.isLookahead || (this.state.startLoc = this.state.curPosition()),
                            this.state.pos >= this.length) {
                                this.finishToken(137);
                                return
                            }
                            this.getTokenFromCode(this.codePointAtPos(this.state.pos))
                        }
                        skipBlockComment(e) {
                            let t;
                            this.isLookahead || (t = this.state.curPosition());
                            let s = this.state.pos
                              , r = this.input.indexOf(e, s + 2);
                            if (-1 === r)
                                throw this.raise(U.UnterminatedComment, {
                                    at: this.state.curPosition()
                                });
                            for (this.state.pos = r + e.length,
                            ex.lastIndex = s + 2; ex.test(this.input) && ex.lastIndex <= r; )
                                ++this.state.curLine,
                                this.state.lineStart = ex.lastIndex;
                            if (this.isLookahead)
                                return;
                            let i = {
                                type: "CommentBlock",
                                value: this.input.slice(s + 2, r),
                                start: s,
                                end: r + e.length,
                                loc: new C(t,this.state.curPosition())
                            };
                            return this.options.tokens && this.pushToken(i),
                            i
                        }
                        skipLineComment(e) {
                            let t = this.state.pos, s;
                            this.isLookahead || (s = this.state.curPosition());
                            let r = this.input.charCodeAt(this.state.pos += e);
                            if (this.state.pos < this.length)
                                for (; !eg(r) && ++this.state.pos < this.length; )
                                    r = this.input.charCodeAt(this.state.pos);
                            if (this.isLookahead)
                                return;
                            let i = this.state.pos
                              , a = {
                                type: "CommentLine",
                                value: this.input.slice(t + e, i),
                                start: t,
                                end: i,
                                loc: new C(s,this.state.curPosition())
                            };
                            return this.options.tokens && this.pushToken(a),
                            a
                        }
                        skipSpace() {
                            let e = this.state.pos
                              , t = [];
                            e: for (; this.state.pos < this.length; ) {
                                let s = this.input.charCodeAt(this.state.pos);
                                switch (s) {
                                case 32:
                                case 160:
                                case 9:
                                    ++this.state.pos;
                                    break;
                                case 13:
                                    10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos;
                                case 10:
                                case 8232:
                                case 8233:
                                    ++this.state.pos,
                                    ++this.state.curLine,
                                    this.state.lineStart = this.state.pos;
                                    break;
                                case 47:
                                    switch (this.input.charCodeAt(this.state.pos + 1)) {
                                    case 42:
                                        {
                                            let e = this.skipBlockComment("*/");
                                            void 0 !== e && (this.addComment(e),
                                            this.options.attachComment && t.push(e));
                                            break
                                        }
                                    case 47:
                                        {
                                            let e = this.skipLineComment(2);
                                            void 0 !== e && (this.addComment(e),
                                            this.options.attachComment && t.push(e));
                                            break
                                        }
                                    default:
                                        break e
                                    }
                                    break;
                                default:
                                    if (function(e) {
                                        switch (e) {
                                        case 9:
                                        case 11:
                                        case 12:
                                        case 32:
                                        case 160:
                                        case 5760:
                                        case 8192:
                                        case 8193:
                                        case 8194:
                                        case 8195:
                                        case 8196:
                                        case 8197:
                                        case 8198:
                                        case 8199:
                                        case 8200:
                                        case 8201:
                                        case 8202:
                                        case 8239:
                                        case 8287:
                                        case 12288:
                                        case 65279:
                                            return !0;
                                        default:
                                            return !1
                                        }
                                    }(s))
                                        ++this.state.pos;
                                    else if (45 === s && !this.inModule && this.options.annexB) {
                                        let s = this.state.pos;
                                        if (45 === this.input.charCodeAt(s + 1) && 62 === this.input.charCodeAt(s + 2) && (0 === e || this.state.lineStart > e)) {
                                            let e = this.skipLineComment(3);
                                            void 0 !== e && (this.addComment(e),
                                            this.options.attachComment && t.push(e))
                                        } else
                                            break e
                                    } else if (60 === s && !this.inModule && this.options.annexB) {
                                        let e = this.state.pos;
                                        if (33 === this.input.charCodeAt(e + 1) && 45 === this.input.charCodeAt(e + 2) && 45 === this.input.charCodeAt(e + 3)) {
                                            let e = this.skipLineComment(4);
                                            void 0 !== e && (this.addComment(e),
                                            this.options.attachComment && t.push(e))
                                        } else
                                            break e
                                    } else
                                        break e
                                }
                            }
                            if (t.length > 0) {
                                let s = this.state.pos;
                                this.state.commentStack.push({
                                    start: e,
                                    end: s,
                                    comments: t,
                                    leadingNode: null,
                                    trailingNode: null,
                                    containingNode: null
                                })
                            }
                        }
                        finishToken(e, t) {
                            this.state.end = this.state.pos,
                            this.state.endLoc = this.state.curPosition();
                            let s = this.state.type;
                            this.state.type = e,
                            this.state.value = t,
                            this.isLookahead || this.updateContext(s)
                        }
                        replaceToken(e) {
                            this.state.type = e,
                            this.updateContext()
                        }
                        readToken_numberSign() {
                            if (0 === this.state.pos && this.readToken_interpreter())
                                return;
                            let e = this.state.pos + 1
                              , t = this.codePointAtPos(e);
                            if (t >= 48 && t <= 57)
                                throw this.raise(U.UnexpectedDigitAfterHash, {
                                    at: this.state.curPosition()
                                });
                            if (123 === t || 91 === t && this.hasPlugin("recordAndTuple")) {
                                if (this.expectPlugin("recordAndTuple"),
                                "bar" === this.getPluginOption("recordAndTuple", "syntaxType"))
                                    throw this.raise(123 === t ? U.RecordExpressionHashIncorrectStartSyntaxType : U.TupleExpressionHashIncorrectStartSyntaxType, {
                                        at: this.state.curPosition()
                                    });
                                this.state.pos += 2,
                                123 === t ? this.finishToken(7) : this.finishToken(1)
                            } else
                                Y(t) ? (++this.state.pos,
                                this.finishToken(136, this.readWord1(t))) : 92 === t ? (++this.state.pos,
                                this.finishToken(136, this.readWord1())) : this.finishOp(27, 1)
                        }
                        readToken_dot() {
                            let e = this.input.charCodeAt(this.state.pos + 1);
                            if (e >= 48 && e <= 57) {
                                this.readNumber(!0);
                                return
                            }
                            46 === e && 46 === this.input.charCodeAt(this.state.pos + 2) ? (this.state.pos += 3,
                            this.finishToken(21)) : (++this.state.pos,
                            this.finishToken(16))
                        }
                        readToken_slash() {
                            61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(31, 2) : this.finishOp(56, 1)
                        }
                        readToken_interpreter() {
                            if (0 !== this.state.pos || this.length < 2)
                                return !1;
                            let e = this.input.charCodeAt(this.state.pos + 1);
                            if (33 !== e)
                                return !1;
                            let t = this.state.pos;
                            for (this.state.pos += 1; !eg(e) && ++this.state.pos < this.length; )
                                e = this.input.charCodeAt(this.state.pos);
                            let s = this.input.slice(t + 2, this.state.pos);
                            return this.finishToken(28, s),
                            !0
                        }
                        readToken_mult_modulo(e) {
                            let t = 42 === e ? 55 : 54
                              , s = 1
                              , r = this.input.charCodeAt(this.state.pos + 1);
                            42 === e && 42 === r && (s++,
                            r = this.input.charCodeAt(this.state.pos + 2),
                            t = 57),
                            61 !== r || this.state.inType || (s++,
                            t = 37 === e ? 33 : 30),
                            this.finishOp(t, s)
                        }
                        readToken_pipe_amp(e) {
                            let t = this.input.charCodeAt(this.state.pos + 1);
                            if (t === e) {
                                61 === this.input.charCodeAt(this.state.pos + 2) ? this.finishOp(30, 3) : this.finishOp(124 === e ? 41 : 42, 2);
                                return
                            }
                            if (124 === e) {
                                if (62 === t) {
                                    this.finishOp(39, 2);
                                    return
                                }
                                if (this.hasPlugin("recordAndTuple") && 125 === t) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType"))
                                        throw this.raise(U.RecordExpressionBarIncorrectEndSyntaxType, {
                                            at: this.state.curPosition()
                                        });
                                    this.state.pos += 2,
                                    this.finishToken(9);
                                    return
                                }
                                if (this.hasPlugin("recordAndTuple") && 93 === t) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType"))
                                        throw this.raise(U.TupleExpressionBarIncorrectEndSyntaxType, {
                                            at: this.state.curPosition()
                                        });
                                    this.state.pos += 2,
                                    this.finishToken(4);
                                    return
                                }
                            }
                            if (61 === t) {
                                this.finishOp(30, 2);
                                return
                            }
                            this.finishOp(124 === e ? 43 : 45, 1)
                        }
                        readToken_caret() {
                            let e = this.input.charCodeAt(this.state.pos + 1);
                            61 !== e || this.state.inType ? 94 === e && this.hasPlugin(["pipelineOperator", {
                                proposal: "hack",
                                topicToken: "^^"
                            }]) ? (this.finishOp(37, 2),
                            94 === this.input.codePointAt(this.state.pos) && this.unexpected()) : this.finishOp(44, 1) : this.finishOp(32, 2)
                        }
                        readToken_atSign() {
                            64 === this.input.charCodeAt(this.state.pos + 1) && this.hasPlugin(["pipelineOperator", {
                                proposal: "hack",
                                topicToken: "@@"
                            }]) ? this.finishOp(38, 2) : this.finishOp(26, 1)
                        }
                        readToken_plus_min(e) {
                            let t = this.input.charCodeAt(this.state.pos + 1);
                            if (t === e) {
                                this.finishOp(34, 2);
                                return
                            }
                            61 === t ? this.finishOp(30, 2) : this.finishOp(53, 1)
                        }
                        readToken_lt() {
                            let {pos: e} = this.state
                              , t = this.input.charCodeAt(e + 1);
                            if (60 === t) {
                                if (61 === this.input.charCodeAt(e + 2)) {
                                    this.finishOp(30, 3);
                                    return
                                }
                                this.finishOp(51, 2);
                                return
                            }
                            if (61 === t) {
                                this.finishOp(49, 2);
                                return
                            }
                            this.finishOp(47, 1)
                        }
                        readToken_gt() {
                            let {pos: e} = this.state
                              , t = this.input.charCodeAt(e + 1);
                            if (62 === t) {
                                let t = 62 === this.input.charCodeAt(e + 2) ? 3 : 2;
                                if (61 === this.input.charCodeAt(e + t)) {
                                    this.finishOp(30, t + 1);
                                    return
                                }
                                this.finishOp(52, t);
                                return
                            }
                            if (61 === t) {
                                this.finishOp(49, 2);
                                return
                            }
                            this.finishOp(48, 1)
                        }
                        readToken_eq_excl(e) {
                            let t = this.input.charCodeAt(this.state.pos + 1);
                            if (61 === t) {
                                this.finishOp(46, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2);
                                return
                            }
                            if (61 === e && 62 === t) {
                                this.state.pos += 2,
                                this.finishToken(19);
                                return
                            }
                            this.finishOp(61 === e ? 29 : 35, 1)
                        }
                        readToken_question() {
                            let e = this.input.charCodeAt(this.state.pos + 1)
                              , t = this.input.charCodeAt(this.state.pos + 2);
                            63 === e ? 61 === t ? this.finishOp(30, 3) : this.finishOp(40, 2) : 46 !== e || t >= 48 && t <= 57 ? (++this.state.pos,
                            this.finishToken(17)) : (this.state.pos += 2,
                            this.finishToken(18))
                        }
                        getTokenFromCode(e) {
                            switch (e) {
                            case 46:
                                this.readToken_dot();
                                return;
                            case 40:
                                ++this.state.pos,
                                this.finishToken(10);
                                return;
                            case 41:
                                ++this.state.pos,
                                this.finishToken(11);
                                return;
                            case 59:
                                ++this.state.pos,
                                this.finishToken(13);
                                return;
                            case 44:
                                ++this.state.pos,
                                this.finishToken(12);
                                return;
                            case 91:
                                if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType"))
                                        throw this.raise(U.TupleExpressionBarIncorrectStartSyntaxType, {
                                            at: this.state.curPosition()
                                        });
                                    this.state.pos += 2,
                                    this.finishToken(2)
                                } else
                                    ++this.state.pos,
                                    this.finishToken(0);
                                return;
                            case 93:
                                ++this.state.pos,
                                this.finishToken(3);
                                return;
                            case 123:
                                if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType"))
                                        throw this.raise(U.RecordExpressionBarIncorrectStartSyntaxType, {
                                            at: this.state.curPosition()
                                        });
                                    this.state.pos += 2,
                                    this.finishToken(6)
                                } else
                                    ++this.state.pos,
                                    this.finishToken(5);
                                return;
                            case 125:
                                ++this.state.pos,
                                this.finishToken(8);
                                return;
                            case 58:
                                this.hasPlugin("functionBind") && 58 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(15, 2) : (++this.state.pos,
                                this.finishToken(14));
                                return;
                            case 63:
                                this.readToken_question();
                                return;
                            case 96:
                                this.readTemplateToken();
                                return;
                            case 48:
                                {
                                    let e = this.input.charCodeAt(this.state.pos + 1);
                                    if (120 === e || 88 === e) {
                                        this.readRadixNumber(16);
                                        return
                                    }
                                    if (111 === e || 79 === e) {
                                        this.readRadixNumber(8);
                                        return
                                    }
                                    if (98 === e || 66 === e) {
                                        this.readRadixNumber(2);
                                        return
                                    }
                                }
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                this.readNumber(!1);
                                return;
                            case 34:
                            case 39:
                                this.readString(e);
                                return;
                            case 47:
                                this.readToken_slash();
                                return;
                            case 37:
                            case 42:
                                this.readToken_mult_modulo(e);
                                return;
                            case 124:
                            case 38:
                                this.readToken_pipe_amp(e);
                                return;
                            case 94:
                                this.readToken_caret();
                                return;
                            case 43:
                            case 45:
                                this.readToken_plus_min(e);
                                return;
                            case 60:
                                this.readToken_lt();
                                return;
                            case 62:
                                this.readToken_gt();
                                return;
                            case 61:
                            case 33:
                                this.readToken_eq_excl(e);
                                return;
                            case 126:
                                this.finishOp(36, 1);
                                return;
                            case 64:
                                this.readToken_atSign();
                                return;
                            case 35:
                                this.readToken_numberSign();
                                return;
                            case 92:
                                this.readWord();
                                return;
                            default:
                                if (Y(e)) {
                                    this.readWord(e);
                                    return
                                }
                            }
                            throw this.raise(U.InvalidOrUnexpectedToken, {
                                at: this.state.curPosition(),
                                unexpected: String.fromCodePoint(e)
                            })
                        }
                        finishOp(e, t) {
                            let s = this.input.slice(this.state.pos, this.state.pos + t);
                            this.state.pos += t,
                            this.finishToken(e, s)
                        }
                        readRegexp() {
                            let e = this.state.startLoc, t = this.state.start + 1, s, r, {pos: i} = this.state;
                            for (; ; ++i) {
                                if (i >= this.length)
                                    throw this.raise(U.UnterminatedRegExp, {
                                        at: N(e, 1)
                                    });
                                let t = this.input.charCodeAt(i);
                                if (eg(t))
                                    throw this.raise(U.UnterminatedRegExp, {
                                        at: N(e, 1)
                                    });
                                if (s)
                                    s = !1;
                                else {
                                    if (91 === t)
                                        r = !0;
                                    else if (93 === t && r)
                                        r = !1;
                                    else if (47 === t && !r)
                                        break;
                                    s = 92 === t
                                }
                            }
                            let a = this.input.slice(t, i);
                            ++i;
                            let n = ""
                              , o = ()=>N(e, i + 2 - t);
                            for (; i < this.length; ) {
                                let e = this.codePointAtPos(i)
                                  , t = String.fromCharCode(e);
                                if (eL.has(e))
                                    118 === e ? (this.expectPlugin("regexpUnicodeSets", o()),
                                    n.includes("u") && this.raise(U.IncompatibleRegExpUVFlags, {
                                        at: o()
                                    })) : 117 === e && n.includes("v") && this.raise(U.IncompatibleRegExpUVFlags, {
                                        at: o()
                                    }),
                                    n.includes(t) && this.raise(U.DuplicateRegExpFlags, {
                                        at: o()
                                    });
                                else if (Q(e) || 92 === e)
                                    this.raise(U.MalformedRegExpFlags, {
                                        at: o()
                                    });
                                else
                                    break;
                                ++i,
                                n += t
                            }
                            this.state.pos = i,
                            this.finishToken(135, {
                                pattern: a,
                                flags: n
                            })
                        }
                        readInt(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]
                              , {n: i, pos: a} = ev(this.input, this.state.pos, this.state.lineStart, this.state.curLine, e, t, s, r, this.errorHandlers_readInt, !1);
                            return this.state.pos = a,
                            i
                        }
                        readRadixNumber(e) {
                            let t = this.state.curPosition()
                              , s = !1;
                            this.state.pos += 2;
                            let r = this.readInt(e);
                            null == r && this.raise(U.InvalidDigit, {
                                at: N(t, 2),
                                radix: e
                            });
                            let i = this.input.charCodeAt(this.state.pos);
                            if (110 === i)
                                ++this.state.pos,
                                s = !0;
                            else if (109 === i)
                                throw this.raise(U.InvalidDecimal, {
                                    at: t
                                });
                            if (Y(this.codePointAtPos(this.state.pos)))
                                throw this.raise(U.NumberIdentifier, {
                                    at: this.state.curPosition()
                                });
                            if (s) {
                                let e = this.input.slice(t.index, this.state.pos).replace(/[_n]/g, "");
                                this.finishToken(133, e);
                                return
                            }
                            this.finishToken(132, r)
                        }
                        readNumber(e) {
                            let t = this.state.pos
                              , s = this.state.curPosition()
                              , r = !1
                              , i = !1
                              , a = !1
                              , n = !1
                              , o = !1;
                            e || null !== this.readInt(10) || this.raise(U.InvalidNumber, {
                                at: this.state.curPosition()
                            });
                            let h = this.state.pos - t >= 2 && 48 === this.input.charCodeAt(t);
                            if (h) {
                                let e = this.input.slice(t, this.state.pos);
                                if (this.recordStrictModeErrors(U.StrictOctalLiteral, {
                                    at: s
                                }),
                                !this.state.strict) {
                                    let t = e.indexOf("_");
                                    t > 0 && this.raise(U.ZeroDigitNumericSeparator, {
                                        at: N(s, t)
                                    })
                                }
                                o = h && !/[89]/.test(e)
                            }
                            let l = this.input.charCodeAt(this.state.pos);
                            if (46 !== l || o || (++this.state.pos,
                            this.readInt(10),
                            r = !0,
                            l = this.input.charCodeAt(this.state.pos)),
                            69 !== l && 101 !== l || o || ((43 === (l = this.input.charCodeAt(++this.state.pos)) || 45 === l) && ++this.state.pos,
                            null === this.readInt(10) && this.raise(U.InvalidOrMissingExponent, {
                                at: s
                            }),
                            r = !0,
                            n = !0,
                            l = this.input.charCodeAt(this.state.pos)),
                            110 === l && ((r || h) && this.raise(U.InvalidBigIntLiteral, {
                                at: s
                            }),
                            ++this.state.pos,
                            i = !0),
                            109 === l && (this.expectPlugin("decimal", this.state.curPosition()),
                            (n || h) && this.raise(U.InvalidDecimal, {
                                at: s
                            }),
                            ++this.state.pos,
                            a = !0),
                            Y(this.codePointAtPos(this.state.pos)))
                                throw this.raise(U.NumberIdentifier, {
                                    at: this.state.curPosition()
                                });
                            let p = this.input.slice(t, this.state.pos).replace(/[_mn]/g, "");
                            if (i) {
                                this.finishToken(133, p);
                                return
                            }
                            if (a) {
                                this.finishToken(134, p);
                                return
                            }
                            let c = o ? parseInt(p, 8) : parseFloat(p);
                            this.finishToken(132, c)
                        }
                        readCodePoint(e) {
                            let {code: t, pos: s} = eC(this.input, this.state.pos, this.state.lineStart, this.state.curLine, e, this.errorHandlers_readCodePoint);
                            return this.state.pos = s,
                            t
                        }
                        readString(e) {
                            let {str: t, pos: s, curLine: r, lineStart: i} = eS(34 === e ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
                            this.state.pos = s + 1,
                            this.state.lineStart = i,
                            this.state.curLine = r,
                            this.finishToken(131, t)
                        }
                        readTemplateContinuation() {
                            this.match(8) || this.unexpected(null, 8),
                            this.state.pos--,
                            this.readTemplateToken()
                        }
                        readTemplateToken() {
                            let e = this.input[this.state.pos]
                              , {str: t, firstInvalidLoc: s, pos: r, curLine: i, lineStart: a} = eS("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
                            this.state.pos = r + 1,
                            this.state.lineStart = a,
                            this.state.curLine = i,
                            s && (this.state.firstInvalidTemplateEscapePos = new v(s.curLine,s.pos - s.lineStart,s.pos)),
                            96 === this.input.codePointAt(r) ? this.finishToken(24, s ? null : e + t + "`") : (this.state.pos++,
                            this.finishToken(25, s ? null : e + t + "${"))
                        }
                        recordStrictModeErrors(e, t) {
                            let {at: s} = t
                              , r = s.index;
                            this.state.strict && !this.state.strictErrors.has(r) ? this.raise(e, {
                                at: s
                            }) : this.state.strictErrors.set(r, [e, s])
                        }
                        readWord1(e) {
                            this.state.containsEsc = !1;
                            let t = ""
                              , s = this.state.pos
                              , r = this.state.pos;
                            for (void 0 !== e && (this.state.pos += e <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
                                let e = this.codePointAtPos(this.state.pos);
                                if (Q(e))
                                    this.state.pos += e <= 65535 ? 1 : 2;
                                else if (92 === e) {
                                    this.state.containsEsc = !0,
                                    t += this.input.slice(r, this.state.pos);
                                    let e = this.state.curPosition()
                                      , i = this.state.pos === s ? Y : Q;
                                    if (117 !== this.input.charCodeAt(++this.state.pos)) {
                                        this.raise(U.MissingUnicodeEscape, {
                                            at: this.state.curPosition()
                                        }),
                                        r = this.state.pos - 1;
                                        continue
                                    }
                                    ++this.state.pos;
                                    let a = this.readCodePoint(!0);
                                    null !== a && (i(a) || this.raise(U.EscapedCharNotAnIdentifier, {
                                        at: e
                                    }),
                                    t += String.fromCodePoint(a)),
                                    r = this.state.pos
                                } else
                                    break
                            }
                            return t + this.input.slice(r, this.state.pos)
                        }
                        readWord(e) {
                            let t = this.readWord1(e)
                              , s = a.get(t);
                            void 0 !== s ? this.finishToken(s, c[s]) : this.finishToken(130, t)
                        }
                        checkKeywordEscapes() {
                            let {type: e} = this.state;
                            E(e) && this.state.containsEsc && this.raise(U.InvalidEscapedReservedWord, {
                                at: this.state.startLoc,
                                reservedWord: c[e]
                            })
                        }
                        raise(e, t) {
                            let {at: s} = t
                              , r = w(t, eN)
                              , i = e({
                                loc: s instanceof v ? s : s.loc.start,
                                details: r
                            });
                            if (!this.options.errorRecovery)
                                throw i;
                            return this.isLookahead || this.state.errors.push(i),
                            i
                        }
                        raiseOverwrite(e, t) {
                            let {at: s} = t
                              , r = w(t, eI)
                              , i = s instanceof v ? s : s.loc.start
                              , a = i.index
                              , n = this.state.errors;
                            for (let t = n.length - 1; t >= 0; t--) {
                                let s = n[t];
                                if (s.loc.index === a)
                                    return n[t] = e({
                                        loc: i,
                                        details: r
                                    });
                                if (s.loc.index < a)
                                    break
                            }
                            return this.raise(e, t)
                        }
                        updateContext(e) {}
                        unexpected(e, t) {
                            throw this.raise(U.UnexpectedToken, {
                                expected: t ? c[t] : null,
                                at: null != e ? e : this.state.startLoc
                            })
                        }
                        expectPlugin(e, t) {
                            if (this.hasPlugin(e))
                                return !0;
                            throw this.raise(U.MissingPlugin, {
                                at: null != t ? t : this.state.startLoc,
                                missingPlugin: [e]
                            })
                        }
                        expectOnePlugin(e) {
                            if (!e.some(e=>this.hasPlugin(e)))
                                throw this.raise(U.MissingOneOfPlugins, {
                                    at: this.state.startLoc,
                                    missingPlugin: e
                                })
                        }
                        errorBuilder(e) {
                            return (t,s,r)=>{
                                this.raise(e, {
                                    at: ek(t, s, r)
                                })
                            }
                        }
                    }
                      , eD = class {
                        constructor() {
                            this.privateNames = new Set,
                            this.loneAccessors = new Map,
                            this.undefinedPrivateNames = new Map
                        }
                    }
                      , eF = class {
                        constructor(e) {
                            this.parser = void 0,
                            this.stack = [],
                            this.undefinedPrivateNames = new Map,
                            this.parser = e
                        }
                        current() {
                            return this.stack[this.stack.length - 1]
                        }
                        enter() {
                            this.stack.push(new eD)
                        }
                        exit() {
                            let e = this.stack.pop()
                              , t = this.current();
                            for (let[s,r] of Array.from(e.undefinedPrivateNames))
                                t ? t.undefinedPrivateNames.has(s) || t.undefinedPrivateNames.set(s, r) : this.parser.raise(U.InvalidPrivateFieldResolution, {
                                    at: r,
                                    identifierName: s
                                })
                        }
                        declarePrivateName(e, t, s) {
                            let {privateNames: r, loneAccessors: i, undefinedPrivateNames: a} = this.current()
                              , n = r.has(e);
                            if (3 & t) {
                                let s = n && i.get(e);
                                s ? (n = (3 & s) == (3 & t) || (4 & s) != (4 & t)) || i.delete(e) : n || i.set(e, t)
                            }
                            n && this.parser.raise(U.PrivateNameRedeclaration, {
                                at: s,
                                identifierName: e
                            }),
                            r.add(e),
                            a.delete(e)
                        }
                        usePrivateName(e, t) {
                            let s;
                            for (s of this.stack)
                                if (s.privateNames.has(e))
                                    return;
                            s ? s.undefinedPrivateNames.set(e, t) : this.parser.raise(U.InvalidPrivateFieldResolution, {
                                at: t,
                                identifierName: e
                            })
                        }
                    }
                      , eB = class {
                        constructor() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.type = void 0,
                            this.type = e
                        }
                        canBeArrowParameterDeclaration() {
                            return 2 === this.type || 1 === this.type
                        }
                        isCertainlyParameterDeclaration() {
                            return 3 === this.type
                        }
                    }
                      , ej = class extends eB {
                        constructor(e) {
                            super(e),
                            this.declarationErrors = new Map
                        }
                        recordDeclarationError(e, t) {
                            let {at: s} = t
                              , r = s.index;
                            this.declarationErrors.set(r, [e, s])
                        }
                        clearDeclarationError(e) {
                            this.declarationErrors.delete(e)
                        }
                        iterateErrors(e) {
                            this.declarationErrors.forEach(e)
                        }
                    }
                      , eR = class {
                        constructor(e) {
                            this.parser = void 0,
                            this.stack = [new eB],
                            this.parser = e
                        }
                        enter(e) {
                            this.stack.push(e)
                        }
                        exit() {
                            this.stack.pop()
                        }
                        recordParameterInitializerError(e, t) {
                            let {at: s} = t
                              , r = {
                                at: s.loc.start
                            }
                              , {stack: i} = this
                              , a = i.length - 1
                              , n = i[a];
                            for (; !n.isCertainlyParameterDeclaration(); ) {
                                if (!n.canBeArrowParameterDeclaration())
                                    return;
                                n.recordDeclarationError(e, r),
                                n = i[--a]
                            }
                            this.parser.raise(e, r)
                        }
                        recordArrowParameterBindingError(e, t) {
                            let {at: s} = t
                              , {stack: r} = this
                              , i = r[r.length - 1]
                              , a = {
                                at: s.loc.start
                            };
                            if (i.isCertainlyParameterDeclaration())
                                this.parser.raise(e, a);
                            else {
                                if (!i.canBeArrowParameterDeclaration())
                                    return;
                                i.recordDeclarationError(e, a)
                            }
                        }
                        recordAsyncArrowParametersError(e) {
                            let {at: t} = e
                              , {stack: s} = this
                              , r = s.length - 1
                              , i = s[r];
                            for (; i.canBeArrowParameterDeclaration(); )
                                2 === i.type && i.recordDeclarationError(U.AwaitBindingIdentifier, {
                                    at: t
                                }),
                                i = s[--r]
                        }
                        validateAsPattern() {
                            let {stack: e} = this
                              , t = e[e.length - 1];
                            t.canBeArrowParameterDeclaration() && t.iterateErrors(t=>{
                                let[s,r] = t;
                                this.parser.raise(s, {
                                    at: r
                                });
                                let i = e.length - 2
                                  , a = e[i];
                                for (; a.canBeArrowParameterDeclaration(); )
                                    a.clearDeclarationError(r.index),
                                    a = e[--i]
                            }
                            )
                        }
                    }
                      , eU = class {
                        constructor() {
                            this.stacks = []
                        }
                        enter(e) {
                            this.stacks.push(e)
                        }
                        exit() {
                            this.stacks.pop()
                        }
                        currentFlags() {
                            return this.stacks[this.stacks.length - 1]
                        }
                        get hasAwait() {
                            return (2 & this.currentFlags()) > 0
                        }
                        get hasYield() {
                            return (1 & this.currentFlags()) > 0
                        }
                        get hasReturn() {
                            return (4 & this.currentFlags()) > 0
                        }
                        get hasIn() {
                            return (8 & this.currentFlags()) > 0
                        }
                    }
                    ;
                    function e_(e, t) {
                        return (e ? 2 : 0) | (t ? 1 : 0)
                    }
                    var ez = class extends eO {
                        addExtra(e, t, s) {
                            let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                            if (!e)
                                return;
                            let i = e.extra = e.extra || {};
                            r ? i[t] = s : Object.defineProperty(i, t, {
                                enumerable: r,
                                value: s
                            })
                        }
                        isContextual(e) {
                            return this.state.type === e && !this.state.containsEsc
                        }
                        isUnparsedContextual(e, t) {
                            let s = e + t.length;
                            if (this.input.slice(e, s) === t) {
                                let e = this.input.charCodeAt(s);
                                return !(Q(e) || (64512 & e) == 55296)
                            }
                            return !1
                        }
                        isLookaheadContextual(e) {
                            let t = this.nextTokenStart();
                            return this.isUnparsedContextual(t, e)
                        }
                        eatContextual(e) {
                            return !!this.isContextual(e) && (this.next(),
                            !0)
                        }
                        expectContextual(e, t) {
                            if (!this.eatContextual(e)) {
                                if (null != t)
                                    throw this.raise(t, {
                                        at: this.state.startLoc
                                    });
                                this.unexpected(null, e)
                            }
                        }
                        canInsertSemicolon() {
                            return this.match(137) || this.match(8) || this.hasPrecedingLineBreak()
                        }
                        hasPrecedingLineBreak() {
                            return ey.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start))
                        }
                        hasFollowingLineBreak() {
                            return eb.lastIndex = this.state.end,
                            eb.test(this.input)
                        }
                        isLineTerminator() {
                            return this.eat(13) || this.canInsertSemicolon()
                        }
                        semicolon() {
                            (!(arguments.length > 0) || void 0 === arguments[0] || arguments[0] ? this.isLineTerminator() : this.eat(13)) || this.raise(U.MissingSemicolon, {
                                at: this.state.lastTokEndLoc
                            })
                        }
                        expect(e, t) {
                            this.eat(e) || this.unexpected(t, e)
                        }
                        tryParse(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.clone()
                              , s = {
                                node: null
                            };
                            try {
                                let r = e(function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                    throw s.node = e,
                                    s
                                });
                                if (this.state.errors.length > t.errors.length) {
                                    let e = this.state;
                                    return this.state = t,
                                    this.state.tokensLength = e.tokensLength,
                                    {
                                        node: r,
                                        error: e.errors[t.errors.length],
                                        thrown: !1,
                                        aborted: !1,
                                        failState: e
                                    }
                                }
                                return {
                                    node: r,
                                    error: null,
                                    thrown: !1,
                                    aborted: !1,
                                    failState: null
                                }
                            } catch (r) {
                                let e = this.state;
                                if (this.state = t,
                                r instanceof SyntaxError)
                                    return {
                                        node: null,
                                        error: r,
                                        thrown: !0,
                                        aborted: !1,
                                        failState: e
                                    };
                                if (r === s)
                                    return {
                                        node: s.node,
                                        error: null,
                                        thrown: !1,
                                        aborted: !0,
                                        failState: e
                                    };
                                throw r
                            }
                        }
                        checkExpressionErrors(e, t) {
                            if (!e)
                                return !1;
                            let {shorthandAssignLoc: s, doubleProtoLoc: r, privateKeyLoc: i, optionalParametersLoc: a} = e;
                            if (!t)
                                return !!s || !!r || !!a || !!i;
                            null != s && this.raise(U.InvalidCoverInitializedName, {
                                at: s
                            }),
                            null != r && this.raise(U.DuplicateProto, {
                                at: r
                            }),
                            null != i && this.raise(U.UnexpectedPrivateField, {
                                at: i
                            }),
                            null != a && this.unexpected(a)
                        }
                        isLiteralPropertyName() {
                            return T(this.state.type)
                        }
                        isPrivateName(e) {
                            return "PrivateName" === e.type
                        }
                        getPrivateNameSV(e) {
                            return e.id.name
                        }
                        hasPropertyAsPrivateName(e) {
                            return ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) && this.isPrivateName(e.property)
                        }
                        isObjectProperty(e) {
                            return "ObjectProperty" === e.type
                        }
                        isObjectMethod(e) {
                            return "ObjectMethod" === e.type
                        }
                        initializeScopes() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "module" === this.options.sourceType
                              , t = this.state.labels;
                            this.state.labels = [];
                            let s = this.exportedIdentifiers;
                            this.exportedIdentifiers = new Set;
                            let r = this.inModule;
                            this.inModule = e;
                            let i = this.scope
                              , a = this.getScopeHandler();
                            this.scope = new a(this,e);
                            let n = this.prodParam;
                            this.prodParam = new eU;
                            let o = this.classScope;
                            this.classScope = new eF(this);
                            let h = this.expressionScope;
                            return this.expressionScope = new eR(this),
                            ()=>{
                                this.state.labels = t,
                                this.exportedIdentifiers = s,
                                this.inModule = r,
                                this.scope = i,
                                this.prodParam = n,
                                this.classScope = o,
                                this.expressionScope = h
                            }
                        }
                        enterInitialScopes() {
                            let e = 0;
                            this.inModule && (e |= 2),
                            this.scope.enter(1),
                            this.prodParam.enter(e)
                        }
                        checkDestructuringPrivate(e) {
                            let {privateKeyLoc: t} = e;
                            null !== t && this.expectPlugin("destructuringPrivate", t)
                        }
                    }
                      , eH = class {
                        constructor() {
                            this.shorthandAssignLoc = null,
                            this.doubleProtoLoc = null,
                            this.privateKeyLoc = null,
                            this.optionalParametersLoc = null
                        }
                    }
                      , eV = class {
                        constructor(e, t, s) {
                            this.type = "",
                            this.start = t,
                            this.end = 0,
                            this.loc = new C(s),
                            null != e && e.options.ranges && (this.range = [t, 0]),
                            null != e && e.filename && (this.loc.filename = e.filename)
                        }
                    }
                      , e$ = eV.prototype;
                    function eq(e) {
                        let {type: t, start: s, end: r, loc: i, range: a, extra: n, name: o} = e
                          , h = Object.create(e$);
                        return h.type = t,
                        h.start = s,
                        h.end = r,
                        h.loc = i,
                        h.range = a,
                        h.extra = n,
                        h.name = o,
                        "Placeholder" === t && (h.expectedNode = e.expectedNode),
                        h
                    }
                    e$.__clone = function() {
                        let e = new eV(void 0,this.start,this.loc.start)
                          , t = Object.keys(this);
                        for (let s = 0, r = t.length; s < r; s++) {
                            let r = t[s];
                            "leadingComments" !== r && "trailingComments" !== r && "innerComments" !== r && (e[r] = this[r])
                        }
                        return e
                    }
                    ;
                    var eK = class extends ez {
                        startNode() {
                            return new eV(this,this.state.start,this.state.startLoc)
                        }
                        startNodeAt(e) {
                            return new eV(this,e.index,e)
                        }
                        startNodeAtNode(e) {
                            return this.startNodeAt(e.loc.start)
                        }
                        finishNode(e, t) {
                            return this.finishNodeAt(e, t, this.state.lastTokEndLoc)
                        }
                        finishNodeAt(e, t, s) {
                            return e.type = t,
                            e.end = s.index,
                            e.loc.end = s,
                            this.options.ranges && (e.range[1] = s.index),
                            this.options.attachComment && this.processComment(e),
                            e
                        }
                        resetStartLocation(e, t) {
                            e.start = t.index,
                            e.loc.start = t,
                            this.options.ranges && (e.range[0] = t.index)
                        }
                        resetEndLocation(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEndLoc;
                            e.end = t.index,
                            e.loc.end = t,
                            this.options.ranges && (e.range[1] = t.index)
                        }
                        resetStartLocationFromNode(e, t) {
                            this.resetStartLocation(e, t.loc.start)
                        }
                    }
                      , eW = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"])
                      , eJ = R`flow`({
                        AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
                        AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
                        AssignReservedType: e=>{
                            let {reservedType: t} = e;
                            return `Cannot overwrite reserved type ${t}.`
                        }
                        ,
                        DeclareClassElement: "The `declare` modifier can only appear on class fields.",
                        DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
                        DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
                        EnumBooleanMemberNotInitialized: e=>{
                            let {memberName: t, enumName: s} = e;
                            return `Boolean enum members need to be initialized. Use either \`${t} = true,\` or \`${t} = false,\` in enum \`${s}\`.`
                        }
                        ,
                        EnumDuplicateMemberName: e=>{
                            let {memberName: t, enumName: s} = e;
                            return `Enum member names need to be unique, but the name \`${t}\` has already been used before in enum \`${s}\`.`
                        }
                        ,
                        EnumInconsistentMemberValues: e=>{
                            let {enumName: t} = e;
                            return `Enum \`${t}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`
                        }
                        ,
                        EnumInvalidExplicitType: e=>{
                            let {invalidEnumType: t, enumName: s} = e;
                            return `Enum type \`${t}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${s}\`.`
                        }
                        ,
                        EnumInvalidExplicitTypeUnknownSupplied: e=>{
                            let {enumName: t} = e;
                            return `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`
                        }
                        ,
                        EnumInvalidMemberInitializerPrimaryType: e=>{
                            let {enumName: t, memberName: s, explicitType: r} = e;
                            return `Enum \`${t}\` has type \`${r}\`, so the initializer of \`${s}\` needs to be a ${r} literal.`
                        }
                        ,
                        EnumInvalidMemberInitializerSymbolType: e=>{
                            let {enumName: t, memberName: s} = e;
                            return `Symbol enum members cannot be initialized. Use \`${s},\` in enum \`${t}\`.`
                        }
                        ,
                        EnumInvalidMemberInitializerUnknownType: e=>{
                            let {enumName: t, memberName: s} = e;
                            return `The enum member initializer for \`${s}\` needs to be a literal (either a boolean, number, or string) in enum \`${t}\`.`
                        }
                        ,
                        EnumInvalidMemberName: e=>{
                            let {enumName: t, memberName: s, suggestion: r} = e;
                            return `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${s}\`, consider using \`${r}\`, in enum \`${t}\`.`
                        }
                        ,
                        EnumNumberMemberNotInitialized: e=>{
                            let {enumName: t, memberName: s} = e;
                            return `Number enum members need to be initialized, e.g. \`${s} = 1\` in enum \`${t}\`.`
                        }
                        ,
                        EnumStringMemberInconsistentlyInitailized: e=>{
                            let {enumName: t} = e;
                            return `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${t}\`.`
                        }
                        ,
                        GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
                        ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
                        ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
                        InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
                        InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
                        InexactVariance: "Explicit inexact syntax cannot have variance.",
                        InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
                        MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
                        NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
                        NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
                        PatternIsOptional: Object.assign({
                            message: "A binding pattern parameter cannot be optional in an implementation signature."
                        }, {
                            reasonCode: "OptionalBindingPattern"
                        }),
                        SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
                        SpreadVariance: "Spread properties cannot have variance.",
                        ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
                        ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
                        ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
                        ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
                        ThisParamNoDefault: "The `this` parameter may not have a default value.",
                        TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
                        TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
                        UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
                        UnexpectedReservedType: e=>{
                            let {reservedType: t} = e;
                            return `Unexpected reserved type ${t}.`
                        }
                        ,
                        UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
                        UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
                        UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
                        UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
                        UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
                        UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
                        UnsupportedDeclareExportKind: e=>{
                            let {unsupportedExportKind: t, suggestion: s} = e;
                            return `\`declare export ${t}\` is not supported. Use \`${s}\` instead.`
                        }
                        ,
                        UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
                        UnterminatedFlowComment: "Unterminated flow-comment."
                    });
                    function eX(e) {
                        return "type" === e.importKind || "typeof" === e.importKind
                    }
                    function eG(e) {
                        return b(e) && 97 !== e
                    }
                    var eY = {
                        const: "declare export var",
                        let: "declare export var",
                        type: "export type",
                        interface: "export interface"
                    }
                      , eQ = /\*?\s*@((?:no)?flow)\b/
                      , eZ = e=>class extends e {
                        constructor() {
                            super(...arguments),
                            this.flowPragma = void 0
                        }
                        getScopeHandler() {
                            return ep
                        }
                        shouldParseTypes() {
                            return this.getPluginOption("flow", "all") || "flow" === this.flowPragma
                        }
                        shouldParseEnums() {
                            return !!this.getPluginOption("flow", "enums")
                        }
                        finishToken(e, t) {
                            131 !== e && 13 !== e && 28 !== e && void 0 === this.flowPragma && (this.flowPragma = null),
                            super.finishToken(e, t)
                        }
                        addComment(e) {
                            if (void 0 === this.flowPragma) {
                                let t = eQ.exec(e.value);
                                if (t) {
                                    if ("flow" === t[1])
                                        this.flowPragma = "flow";
                                    else if ("noflow" === t[1])
                                        this.flowPragma = "noflow";
                                    else
                                        throw Error("Unexpected flow pragma")
                                }
                            }
                            super.addComment(e)
                        }
                        flowParseTypeInitialiser(e) {
                            let t = this.state.inType;
                            this.state.inType = !0,
                            this.expect(e || 14);
                            let s = this.flowParseType();
                            return this.state.inType = t,
                            s
                        }
                        flowParsePredicate() {
                            let e = this.startNode()
                              , t = this.state.startLoc;
                            return this.next(),
                            this.expectContextual(108),
                            this.state.lastTokStart > t.index + 1 && this.raise(eJ.UnexpectedSpaceBetweenModuloChecks, {
                                at: t
                            }),
                            this.eat(10) ? (e.value = super.parseExpression(),
                            this.expect(11),
                            this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate")
                        }
                        flowParseTypeAndPredicateInitialiser() {
                            let e = this.state.inType;
                            this.state.inType = !0,
                            this.expect(14);
                            let t = null
                              , s = null;
                            return this.match(54) ? (this.state.inType = e,
                            s = this.flowParsePredicate()) : (t = this.flowParseType(),
                            this.state.inType = e,
                            this.match(54) && (s = this.flowParsePredicate())),
                            [t, s]
                        }
                        flowParseDeclareClass(e) {
                            return this.next(),
                            this.flowParseInterfaceish(e, !0),
                            this.finishNode(e, "DeclareClass")
                        }
                        flowParseDeclareFunction(e) {
                            this.next();
                            let t = e.id = this.parseIdentifier()
                              , s = this.startNode()
                              , r = this.startNode();
                            this.match(47) ? s.typeParameters = this.flowParseTypeParameterDeclaration() : s.typeParameters = null,
                            this.expect(10);
                            let i = this.flowParseFunctionTypeParams();
                            return s.params = i.params,
                            s.rest = i.rest,
                            s.this = i._this,
                            this.expect(11),
                            [s.returnType,e.predicate] = this.flowParseTypeAndPredicateInitialiser(),
                            r.typeAnnotation = this.finishNode(s, "FunctionTypeAnnotation"),
                            t.typeAnnotation = this.finishNode(r, "TypeAnnotation"),
                            this.resetEndLocation(t),
                            this.semicolon(),
                            this.scope.declareName(e.id.name, 2048, e.id.loc.start),
                            this.finishNode(e, "DeclareFunction")
                        }
                        flowParseDeclare(e, t) {
                            return this.match(80) ? this.flowParseDeclareClass(e) : this.match(68) ? this.flowParseDeclareFunction(e) : this.match(74) ? this.flowParseDeclareVariable(e) : this.eatContextual(125) ? this.match(16) ? this.flowParseDeclareModuleExports(e) : (t && this.raise(eJ.NestedDeclareModule, {
                                at: this.state.lastTokStartLoc
                            }),
                            this.flowParseDeclareModule(e)) : this.isContextual(128) ? this.flowParseDeclareTypeAlias(e) : this.isContextual(129) ? this.flowParseDeclareOpaqueType(e) : this.isContextual(127) ? this.flowParseDeclareInterface(e) : this.match(82) ? this.flowParseDeclareExportDeclaration(e, t) : void this.unexpected()
                        }
                        flowParseDeclareVariable(e) {
                            return this.next(),
                            e.id = this.flowParseTypeAnnotatableIdentifier(!0),
                            this.scope.declareName(e.id.name, 5, e.id.loc.start),
                            this.semicolon(),
                            this.finishNode(e, "DeclareVariable")
                        }
                        flowParseDeclareModule(e) {
                            this.scope.enter(0),
                            this.match(131) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
                            let t = e.body = this.startNode()
                              , s = t.body = [];
                            for (this.expect(5); !this.match(8); ) {
                                let e = this.startNode();
                                this.match(83) ? (this.next(),
                                this.isContextual(128) || this.match(87) || this.raise(eJ.InvalidNonTypeImportInDeclareModule, {
                                    at: this.state.lastTokStartLoc
                                }),
                                super.parseImport(e)) : (this.expectContextual(123, eJ.UnsupportedStatementInDeclareModule),
                                e = this.flowParseDeclare(e, !0)),
                                s.push(e)
                            }
                            this.scope.exit(),
                            this.expect(8),
                            this.finishNode(t, "BlockStatement");
                            let r = null
                              , i = !1;
                            return s.forEach(e=>{
                                "DeclareExportAllDeclaration" !== e.type && ("DeclareExportDeclaration" !== e.type || e.declaration && ("TypeAlias" === e.declaration.type || "InterfaceDeclaration" === e.declaration.type)) ? "DeclareModuleExports" === e.type && (i && this.raise(eJ.DuplicateDeclareModuleExports, {
                                    at: e
                                }),
                                "ES" === r && this.raise(eJ.AmbiguousDeclareModuleKind, {
                                    at: e
                                }),
                                r = "CommonJS",
                                i = !0) : ("CommonJS" === r && this.raise(eJ.AmbiguousDeclareModuleKind, {
                                    at: e
                                }),
                                r = "ES")
                            }
                            ),
                            e.kind = r || "CommonJS",
                            this.finishNode(e, "DeclareModule")
                        }
                        flowParseDeclareExportDeclaration(e, t) {
                            if (this.expect(82),
                            this.eat(65))
                                return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(),
                                this.semicolon()),
                                e.default = !0,
                                this.finishNode(e, "DeclareExportDeclaration");
                            if (this.match(75) || this.isLet() || (this.isContextual(128) || this.isContextual(127)) && !t) {
                                let e = this.state.value;
                                throw this.raise(eJ.UnsupportedDeclareExportKind, {
                                    at: this.state.startLoc,
                                    unsupportedExportKind: e,
                                    suggestion: eY[e]
                                })
                            }
                            return this.match(74) || this.match(68) || this.match(80) || this.isContextual(129) ? (e.declaration = this.flowParseDeclare(this.startNode()),
                            e.default = !1,
                            this.finishNode(e, "DeclareExportDeclaration")) : this.match(55) || this.match(5) || this.isContextual(127) || this.isContextual(128) || this.isContextual(129) ? ("ExportNamedDeclaration" === (e = this.parseExport(e, null)).type && (e.type = "ExportDeclaration",
                            e.default = !1,
                            delete e.exportKind),
                            e.type = "Declare" + e.type,
                            e) : void this.unexpected()
                        }
                        flowParseDeclareModuleExports(e) {
                            return this.next(),
                            this.expectContextual(109),
                            e.typeAnnotation = this.flowParseTypeAnnotation(),
                            this.semicolon(),
                            this.finishNode(e, "DeclareModuleExports")
                        }
                        flowParseDeclareTypeAlias(e) {
                            this.next();
                            let t = this.flowParseTypeAlias(e);
                            return t.type = "DeclareTypeAlias",
                            t
                        }
                        flowParseDeclareOpaqueType(e) {
                            this.next();
                            let t = this.flowParseOpaqueType(e, !0);
                            return t.type = "DeclareOpaqueType",
                            t
                        }
                        flowParseDeclareInterface(e) {
                            return this.next(),
                            this.flowParseInterfaceish(e, !1),
                            this.finishNode(e, "DeclareInterface")
                        }
                        flowParseInterfaceish(e, t) {
                            if (e.id = this.flowParseRestrictedIdentifier(!t, !0),
                            this.scope.declareName(e.id.name, t ? 17 : 8201, e.id.loc.start),
                            this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null,
                            e.extends = [],
                            e.implements = [],
                            e.mixins = [],
                            this.eat(81))
                                do
                                    e.extends.push(this.flowParseInterfaceExtends());
                                while (!t && this.eat(12));
                            if (t) {
                                if (this.eatContextual(115))
                                    do
                                        e.mixins.push(this.flowParseInterfaceExtends());
                                    while (this.eat(12));
                                if (this.eatContextual(111))
                                    do
                                        e.implements.push(this.flowParseInterfaceExtends());
                                    while (this.eat(12))
                            }
                            e.body = this.flowParseObjectType({
                                allowStatic: t,
                                allowExact: !1,
                                allowSpread: !1,
                                allowProto: t,
                                allowInexact: !1
                            })
                        }
                        flowParseInterfaceExtends() {
                            let e = this.startNode();
                            return e.id = this.flowParseQualifiedTypeIdentifier(),
                            this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null,
                            this.finishNode(e, "InterfaceExtends")
                        }
                        flowParseInterface(e) {
                            return this.flowParseInterfaceish(e, !1),
                            this.finishNode(e, "InterfaceDeclaration")
                        }
                        checkNotUnderscore(e) {
                            "_" === e && this.raise(eJ.UnexpectedReservedUnderscore, {
                                at: this.state.startLoc
                            })
                        }
                        checkReservedType(e, t, s) {
                            eW.has(e) && this.raise(s ? eJ.AssignReservedType : eJ.UnexpectedReservedType, {
                                at: t,
                                reservedType: e
                            })
                        }
                        flowParseRestrictedIdentifier(e, t) {
                            return this.checkReservedType(this.state.value, this.state.startLoc, t),
                            this.parseIdentifier(e)
                        }
                        flowParseTypeAlias(e) {
                            return e.id = this.flowParseRestrictedIdentifier(!1, !0),
                            this.scope.declareName(e.id.name, 8201, e.id.loc.start),
                            this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null,
                            e.right = this.flowParseTypeInitialiser(29),
                            this.semicolon(),
                            this.finishNode(e, "TypeAlias")
                        }
                        flowParseOpaqueType(e, t) {
                            return this.expectContextual(128),
                            e.id = this.flowParseRestrictedIdentifier(!0, !0),
                            this.scope.declareName(e.id.name, 8201, e.id.loc.start),
                            this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null,
                            e.supertype = null,
                            this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)),
                            e.impltype = null,
                            t || (e.impltype = this.flowParseTypeInitialiser(29)),
                            this.semicolon(),
                            this.finishNode(e, "OpaqueType")
                        }
                        flowParseTypeParameter() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                              , t = this.state.startLoc
                              , s = this.startNode()
                              , r = this.flowParseVariance()
                              , i = this.flowParseTypeAnnotatableIdentifier();
                            return s.name = i.name,
                            s.variance = r,
                            s.bound = i.typeAnnotation,
                            this.match(29) ? (this.eat(29),
                            s.default = this.flowParseType()) : e && this.raise(eJ.MissingTypeParamDefault, {
                                at: t
                            }),
                            this.finishNode(s, "TypeParameter")
                        }
                        flowParseTypeParameterDeclaration() {
                            let e = this.state.inType
                              , t = this.startNode();
                            t.params = [],
                            this.state.inType = !0,
                            this.match(47) || this.match(140) ? this.next() : this.unexpected();
                            let s = !1;
                            do {
                                let e = this.flowParseTypeParameter(s);
                                t.params.push(e),
                                e.default && (s = !0),
                                this.match(48) || this.expect(12)
                            } while (!this.match(48));
                            return this.expect(48),
                            this.state.inType = e,
                            this.finishNode(t, "TypeParameterDeclaration")
                        }
                        flowParseTypeParameterInstantiation() {
                            let e = this.startNode()
                              , t = this.state.inType;
                            e.params = [],
                            this.state.inType = !0,
                            this.expect(47);
                            let s = this.state.noAnonFunctionType;
                            for (this.state.noAnonFunctionType = !1; !this.match(48); )
                                e.params.push(this.flowParseType()),
                                this.match(48) || this.expect(12);
                            return this.state.noAnonFunctionType = s,
                            this.expect(48),
                            this.state.inType = t,
                            this.finishNode(e, "TypeParameterInstantiation")
                        }
                        flowParseTypeParameterInstantiationCallOrNew() {
                            let e = this.startNode()
                              , t = this.state.inType;
                            for (e.params = [],
                            this.state.inType = !0,
                            this.expect(47); !this.match(48); )
                                e.params.push(this.flowParseTypeOrImplicitInstantiation()),
                                this.match(48) || this.expect(12);
                            return this.expect(48),
                            this.state.inType = t,
                            this.finishNode(e, "TypeParameterInstantiation")
                        }
                        flowParseInterfaceType() {
                            let e = this.startNode();
                            if (this.expectContextual(127),
                            e.extends = [],
                            this.eat(81))
                                do
                                    e.extends.push(this.flowParseInterfaceExtends());
                                while (this.eat(12));
                            return e.body = this.flowParseObjectType({
                                allowStatic: !1,
                                allowExact: !1,
                                allowSpread: !1,
                                allowProto: !1,
                                allowInexact: !1
                            }),
                            this.finishNode(e, "InterfaceTypeAnnotation")
                        }
                        flowParseObjectPropertyKey() {
                            return this.match(132) || this.match(131) ? super.parseExprAtom() : this.parseIdentifier(!0)
                        }
                        flowParseObjectTypeIndexer(e, t, s) {
                            return e.static = t,
                            14 === this.lookahead().type ? (e.id = this.flowParseObjectPropertyKey(),
                            e.key = this.flowParseTypeInitialiser()) : (e.id = null,
                            e.key = this.flowParseType()),
                            this.expect(3),
                            e.value = this.flowParseTypeInitialiser(),
                            e.variance = s,
                            this.finishNode(e, "ObjectTypeIndexer")
                        }
                        flowParseObjectTypeInternalSlot(e, t) {
                            return e.static = t,
                            e.id = this.flowParseObjectPropertyKey(),
                            this.expect(3),
                            this.expect(3),
                            this.match(47) || this.match(10) ? (e.method = !0,
                            e.optional = !1,
                            e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1,
                            this.eat(17) && (e.optional = !0),
                            e.value = this.flowParseTypeInitialiser()),
                            this.finishNode(e, "ObjectTypeInternalSlot")
                        }
                        flowParseObjectTypeMethodish(e) {
                            for (e.params = [],
                            e.rest = null,
                            e.typeParameters = null,
                            e.this = null,
                            this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                            this.expect(10),
                            this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0),
                            e.this.name = null,
                            this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
                                e.params.push(this.flowParseFunctionTypeParam(!1)),
                                this.match(11) || this.expect(12);
                            return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)),
                            this.expect(11),
                            e.returnType = this.flowParseTypeInitialiser(),
                            this.finishNode(e, "FunctionTypeAnnotation")
                        }
                        flowParseObjectTypeCallProperty(e, t) {
                            let s = this.startNode();
                            return e.static = t,
                            e.value = this.flowParseObjectTypeMethodish(s),
                            this.finishNode(e, "ObjectTypeCallProperty")
                        }
                        flowParseObjectType(e) {
                            let {allowStatic: t, allowExact: s, allowSpread: r, allowProto: i, allowInexact: a} = e
                              , n = this.state.inType;
                            this.state.inType = !0;
                            let o = this.startNode();
                            o.callProperties = [],
                            o.properties = [],
                            o.indexers = [],
                            o.internalSlots = [];
                            let h, l, p = !1;
                            for (s && this.match(6) ? (this.expect(6),
                            h = 9,
                            l = !0) : (this.expect(5),
                            h = 8,
                            l = !1),
                            o.exact = l; !this.match(h); ) {
                                let e = !1
                                  , s = null
                                  , n = null
                                  , h = this.startNode();
                                if (i && this.isContextual(116)) {
                                    let e = this.lookahead();
                                    14 !== e.type && 17 !== e.type && (this.next(),
                                    s = this.state.startLoc,
                                    t = !1)
                                }
                                if (t && this.isContextual(104)) {
                                    let t = this.lookahead();
                                    14 !== t.type && 17 !== t.type && (this.next(),
                                    e = !0)
                                }
                                let c = this.flowParseVariance();
                                if (this.eat(0))
                                    null != s && this.unexpected(s),
                                    this.eat(0) ? (c && this.unexpected(c.loc.start),
                                    o.internalSlots.push(this.flowParseObjectTypeInternalSlot(h, e))) : o.indexers.push(this.flowParseObjectTypeIndexer(h, e, c));
                                else if (this.match(10) || this.match(47))
                                    null != s && this.unexpected(s),
                                    c && this.unexpected(c.loc.start),
                                    o.callProperties.push(this.flowParseObjectTypeCallProperty(h, e));
                                else {
                                    let t = "init";
                                    (this.isContextual(98) || this.isContextual(103)) && T(this.lookahead().type) && (t = this.state.value,
                                    this.next());
                                    let i = this.flowParseObjectTypeProperty(h, e, s, c, t, r, null != a ? a : !l);
                                    null === i ? (p = !0,
                                    n = this.state.lastTokStartLoc) : o.properties.push(i)
                                }
                                this.flowObjectTypeSemicolon(),
                                !n || this.match(8) || this.match(9) || this.raise(eJ.UnexpectedExplicitInexactInObject, {
                                    at: n
                                })
                            }
                            this.expect(h),
                            r && (o.inexact = p);
                            let c = this.finishNode(o, "ObjectTypeAnnotation");
                            return this.state.inType = n,
                            c
                        }
                        flowParseObjectTypeProperty(e, t, s, r, i, a, n) {
                            if (this.eat(21))
                                return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (a ? n || this.raise(eJ.InexactInsideExact, {
                                    at: this.state.lastTokStartLoc
                                }) : this.raise(eJ.InexactInsideNonObject, {
                                    at: this.state.lastTokStartLoc
                                }),
                                r && this.raise(eJ.InexactVariance, {
                                    at: r
                                }),
                                null) : (a || this.raise(eJ.UnexpectedSpreadType, {
                                    at: this.state.lastTokStartLoc
                                }),
                                null != s && this.unexpected(s),
                                r && this.raise(eJ.SpreadVariance, {
                                    at: r
                                }),
                                e.argument = this.flowParseType(),
                                this.finishNode(e, "ObjectTypeSpreadProperty"));
                            {
                                e.key = this.flowParseObjectPropertyKey(),
                                e.static = t,
                                e.proto = null != s,
                                e.kind = i;
                                let n = !1;
                                return this.match(47) || this.match(10) ? (e.method = !0,
                                null != s && this.unexpected(s),
                                r && this.unexpected(r.loc.start),
                                e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)),
                                ("get" === i || "set" === i) && this.flowCheckGetterSetterParams(e),
                                !a && "constructor" === e.key.name && e.value.this && this.raise(eJ.ThisParamBannedInConstructor, {
                                    at: e.value.this
                                })) : ("init" !== i && this.unexpected(),
                                e.method = !1,
                                this.eat(17) && (n = !0),
                                e.value = this.flowParseTypeInitialiser(),
                                e.variance = r),
                                e.optional = n,
                                this.finishNode(e, "ObjectTypeProperty")
                            }
                        }
                        flowCheckGetterSetterParams(e) {
                            let t = "get" === e.kind ? 0 : 1
                              , s = e.value.params.length + (e.value.rest ? 1 : 0);
                            e.value.this && this.raise("get" === e.kind ? eJ.GetterMayNotHaveThisParam : eJ.SetterMayNotHaveThisParam, {
                                at: e.value.this
                            }),
                            s !== t && this.raise("get" === e.kind ? U.BadGetterArity : U.BadSetterArity, {
                                at: e
                            }),
                            "set" === e.kind && e.value.rest && this.raise(U.BadSetterRestParameter, {
                                at: e
                            })
                        }
                        flowObjectTypeSemicolon() {
                            this.eat(13) || this.eat(12) || this.match(8) || this.match(9) || this.unexpected()
                        }
                        flowParseQualifiedTypeIdentifier(e, t) {
                            null != e || (e = this.state.startLoc);
                            let s = t || this.flowParseRestrictedIdentifier(!0);
                            for (; this.eat(16); ) {
                                let t = this.startNodeAt(e);
                                t.qualification = s,
                                t.id = this.flowParseRestrictedIdentifier(!0),
                                s = this.finishNode(t, "QualifiedTypeIdentifier")
                            }
                            return s
                        }
                        flowParseGenericType(e, t) {
                            let s = this.startNodeAt(e);
                            return s.typeParameters = null,
                            s.id = this.flowParseQualifiedTypeIdentifier(e, t),
                            this.match(47) && (s.typeParameters = this.flowParseTypeParameterInstantiation()),
                            this.finishNode(s, "GenericTypeAnnotation")
                        }
                        flowParseTypeofType() {
                            let e = this.startNode();
                            return this.expect(87),
                            e.argument = this.flowParsePrimaryType(),
                            this.finishNode(e, "TypeofTypeAnnotation")
                        }
                        flowParseTupleType() {
                            let e = this.startNode();
                            for (e.types = [],
                            this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()),
                            !this.match(3)); )
                                this.expect(12);
                            return this.expect(3),
                            this.finishNode(e, "TupleTypeAnnotation")
                        }
                        flowParseFunctionTypeParam(e) {
                            let t = null
                              , s = !1
                              , r = null
                              , i = this.startNode()
                              , a = this.lookahead()
                              , n = 78 === this.state.type;
                            return 14 === a.type || 17 === a.type ? (n && !e && this.raise(eJ.ThisParamMustBeFirst, {
                                at: i
                            }),
                            t = this.parseIdentifier(n),
                            this.eat(17) && (s = !0,
                            n && this.raise(eJ.ThisParamMayNotBeOptional, {
                                at: i
                            })),
                            r = this.flowParseTypeInitialiser()) : r = this.flowParseType(),
                            i.name = t,
                            i.optional = s,
                            i.typeAnnotation = r,
                            this.finishNode(i, "FunctionTypeParam")
                        }
                        reinterpretTypeAsFunctionTypeParam(e) {
                            let t = this.startNodeAt(e.loc.start);
                            return t.name = null,
                            t.optional = !1,
                            t.typeAnnotation = e,
                            this.finishNode(t, "FunctionTypeParam")
                        }
                        flowParseFunctionTypeParams() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                              , t = null
                              , s = null;
                            for (this.match(78) && ((s = this.flowParseFunctionTypeParam(!0)).name = null,
                            this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
                                e.push(this.flowParseFunctionTypeParam(!1)),
                                this.match(11) || this.expect(12);
                            return this.eat(21) && (t = this.flowParseFunctionTypeParam(!1)),
                            {
                                params: e,
                                rest: t,
                                _this: s
                            }
                        }
                        flowIdentToTypeAnnotation(e, t, s) {
                            switch (s.name) {
                            case "any":
                                return this.finishNode(t, "AnyTypeAnnotation");
                            case "bool":
                            case "boolean":
                                return this.finishNode(t, "BooleanTypeAnnotation");
                            case "mixed":
                                return this.finishNode(t, "MixedTypeAnnotation");
                            case "empty":
                                return this.finishNode(t, "EmptyTypeAnnotation");
                            case "number":
                                return this.finishNode(t, "NumberTypeAnnotation");
                            case "string":
                                return this.finishNode(t, "StringTypeAnnotation");
                            case "symbol":
                                return this.finishNode(t, "SymbolTypeAnnotation");
                            default:
                                return this.checkNotUnderscore(s.name),
                                this.flowParseGenericType(e, s)
                            }
                        }
                        flowParsePrimaryType() {
                            let e = this.state.startLoc, t = this.startNode(), s, r, i = !1, a = this.state.noAnonFunctionType;
                            switch (this.state.type) {
                            case 5:
                                return this.flowParseObjectType({
                                    allowStatic: !1,
                                    allowExact: !1,
                                    allowSpread: !0,
                                    allowProto: !1,
                                    allowInexact: !0
                                });
                            case 6:
                                return this.flowParseObjectType({
                                    allowStatic: !1,
                                    allowExact: !0,
                                    allowSpread: !0,
                                    allowProto: !1,
                                    allowInexact: !1
                                });
                            case 0:
                                return this.state.noAnonFunctionType = !1,
                                r = this.flowParseTupleType(),
                                this.state.noAnonFunctionType = a,
                                r;
                            case 47:
                                return t.typeParameters = this.flowParseTypeParameterDeclaration(),
                                this.expect(10),
                                s = this.flowParseFunctionTypeParams(),
                                t.params = s.params,
                                t.rest = s.rest,
                                t.this = s._this,
                                this.expect(11),
                                this.expect(19),
                                t.returnType = this.flowParseType(),
                                this.finishNode(t, "FunctionTypeAnnotation");
                            case 10:
                                if (this.next(),
                                !this.match(11) && !this.match(21)) {
                                    if (P(this.state.type) || this.match(78)) {
                                        let e = this.lookahead().type;
                                        i = 17 !== e && 14 !== e
                                    } else
                                        i = !0
                                }
                                if (i) {
                                    if (this.state.noAnonFunctionType = !1,
                                    r = this.flowParseType(),
                                    this.state.noAnonFunctionType = a,
                                    this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && 19 === this.lookahead().type))
                                        return this.expect(11),
                                        r;
                                    this.eat(12)
                                }
                                return s = r ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : this.flowParseFunctionTypeParams(),
                                t.params = s.params,
                                t.rest = s.rest,
                                t.this = s._this,
                                this.expect(11),
                                this.expect(19),
                                t.returnType = this.flowParseType(),
                                t.typeParameters = null,
                                this.finishNode(t, "FunctionTypeAnnotation");
                            case 131:
                                return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
                            case 85:
                            case 86:
                                return t.value = this.match(85),
                                this.next(),
                                this.finishNode(t, "BooleanLiteralTypeAnnotation");
                            case 53:
                                if ("-" === this.state.value) {
                                    if (this.next(),
                                    this.match(132))
                                        return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", t);
                                    if (this.match(133))
                                        return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", t);
                                    throw this.raise(eJ.UnexpectedSubtractionOperand, {
                                        at: this.state.startLoc
                                    })
                                }
                                this.unexpected();
                                return;
                            case 132:
                                return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
                            case 133:
                                return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
                            case 88:
                                return this.next(),
                                this.finishNode(t, "VoidTypeAnnotation");
                            case 84:
                                return this.next(),
                                this.finishNode(t, "NullLiteralTypeAnnotation");
                            case 78:
                                return this.next(),
                                this.finishNode(t, "ThisTypeAnnotation");
                            case 55:
                                return this.next(),
                                this.finishNode(t, "ExistsTypeAnnotation");
                            case 87:
                                return this.flowParseTypeofType();
                            default:
                                if (E(this.state.type)) {
                                    let e = c[this.state.type];
                                    return this.next(),
                                    super.createIdentifier(t, e)
                                }
                                if (P(this.state.type))
                                    return this.isContextual(127) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, t, this.parseIdentifier())
                            }
                            this.unexpected()
                        }
                        flowParsePostfixType() {
                            let e = this.state.startLoc
                              , t = this.flowParsePrimaryType()
                              , s = !1;
                            for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
                                let r = this.startNodeAt(e)
                                  , i = this.eat(18);
                                s = s || i,
                                this.expect(0),
                                !i && this.match(3) ? (r.elementType = t,
                                this.next(),
                                t = this.finishNode(r, "ArrayTypeAnnotation")) : (r.objectType = t,
                                r.indexType = this.flowParseType(),
                                this.expect(3),
                                s ? (r.optional = i,
                                t = this.finishNode(r, "OptionalIndexedAccessType")) : t = this.finishNode(r, "IndexedAccessType"))
                            }
                            return t
                        }
                        flowParsePrefixType() {
                            let e = this.startNode();
                            return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(),
                            this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType()
                        }
                        flowParseAnonFunctionWithoutParens() {
                            let e = this.flowParsePrefixType();
                            if (!this.state.noAnonFunctionType && this.eat(19)) {
                                let t = this.startNodeAt(e.loc.start);
                                return t.params = [this.reinterpretTypeAsFunctionTypeParam(e)],
                                t.rest = null,
                                t.this = null,
                                t.returnType = this.flowParseType(),
                                t.typeParameters = null,
                                this.finishNode(t, "FunctionTypeAnnotation")
                            }
                            return e
                        }
                        flowParseIntersectionType() {
                            let e = this.startNode();
                            this.eat(45);
                            let t = this.flowParseAnonFunctionWithoutParens();
                            for (e.types = [t]; this.eat(45); )
                                e.types.push(this.flowParseAnonFunctionWithoutParens());
                            return 1 === e.types.length ? t : this.finishNode(e, "IntersectionTypeAnnotation")
                        }
                        flowParseUnionType() {
                            let e = this.startNode();
                            this.eat(43);
                            let t = this.flowParseIntersectionType();
                            for (e.types = [t]; this.eat(43); )
                                e.types.push(this.flowParseIntersectionType());
                            return 1 === e.types.length ? t : this.finishNode(e, "UnionTypeAnnotation")
                        }
                        flowParseType() {
                            let e = this.state.inType;
                            this.state.inType = !0;
                            let t = this.flowParseUnionType();
                            return this.state.inType = e,
                            t
                        }
                        flowParseTypeOrImplicitInstantiation() {
                            if (130 !== this.state.type || "_" !== this.state.value)
                                return this.flowParseType();
                            {
                                let e = this.state.startLoc
                                  , t = this.parseIdentifier();
                                return this.flowParseGenericType(e, t)
                            }
                        }
                        flowParseTypeAnnotation() {
                            let e = this.startNode();
                            return e.typeAnnotation = this.flowParseTypeInitialiser(),
                            this.finishNode(e, "TypeAnnotation")
                        }
                        flowParseTypeAnnotatableIdentifier(e) {
                            let t = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
                            return this.match(14) && (t.typeAnnotation = this.flowParseTypeAnnotation(),
                            this.resetEndLocation(t)),
                            t
                        }
                        typeCastToParameter(e) {
                            return e.expression.typeAnnotation = e.typeAnnotation,
                            this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
                            e.expression
                        }
                        flowParseVariance() {
                            let e = null;
                            return this.match(53) ? (e = this.startNode(),
                            "+" === this.state.value ? e.kind = "plus" : e.kind = "minus",
                            this.next(),
                            this.finishNode(e, "Variance")) : e
                        }
                        parseFunctionBody(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (t) {
                                this.forwardNoArrowParamsConversionAt(e, ()=>super.parseFunctionBody(e, !0, s));
                                return
                            }
                            super.parseFunctionBody(e, !1, s)
                        }
                        parseFunctionBodyAndFinish(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (this.match(14)) {
                                let t = this.startNode();
                                [t.typeAnnotation,e.predicate] = this.flowParseTypeAndPredicateInitialiser(),
                                e.returnType = t.typeAnnotation ? this.finishNode(t, "TypeAnnotation") : null
                            }
                            return super.parseFunctionBodyAndFinish(e, t, s)
                        }
                        parseStatementLike(e) {
                            if (this.state.strict && this.isContextual(127)) {
                                if (b(this.lookahead().type)) {
                                    let e = this.startNode();
                                    return this.next(),
                                    this.flowParseInterface(e)
                                }
                            } else if (this.shouldParseEnums() && this.isContextual(124)) {
                                let e = this.startNode();
                                return this.next(),
                                this.flowParseEnumDeclaration(e)
                            }
                            let t = super.parseStatementLike(e);
                            return void 0 !== this.flowPragma || this.isValidDirective(t) || (this.flowPragma = null),
                            t
                        }
                        parseExpressionStatement(e, t, s) {
                            if ("Identifier" === t.type) {
                                if ("declare" === t.name) {
                                    if (this.match(80) || P(this.state.type) || this.match(68) || this.match(74) || this.match(82))
                                        return this.flowParseDeclare(e)
                                } else if (P(this.state.type)) {
                                    if ("interface" === t.name)
                                        return this.flowParseInterface(e);
                                    if ("type" === t.name)
                                        return this.flowParseTypeAlias(e);
                                    if ("opaque" === t.name)
                                        return this.flowParseOpaqueType(e, !1)
                                }
                            }
                            return super.parseExpressionStatement(e, t, s)
                        }
                        shouldParseExportDeclaration() {
                            let {type: e} = this.state;
                            return A(e) || this.shouldParseEnums() && 124 === e ? !this.state.containsEsc : super.shouldParseExportDeclaration()
                        }
                        isExportDefaultSpecifier() {
                            let {type: e} = this.state;
                            return A(e) || this.shouldParseEnums() && 124 === e ? this.state.containsEsc : super.isExportDefaultSpecifier()
                        }
                        parseExportDefaultExpression() {
                            if (this.shouldParseEnums() && this.isContextual(124)) {
                                let e = this.startNode();
                                return this.next(),
                                this.flowParseEnumDeclaration(e)
                            }
                            return super.parseExportDefaultExpression()
                        }
                        parseConditional(e, t, s) {
                            if (!this.match(17))
                                return e;
                            if (this.state.maybeInArrowParameters) {
                                let t = this.lookaheadCharCode();
                                if (44 === t || 61 === t || 58 === t || 41 === t)
                                    return this.setOptionalParametersError(s),
                                    e
                            }
                            this.expect(17);
                            let r = this.state.clone()
                              , i = this.state.noArrowAt
                              , a = this.startNodeAt(t)
                              , {consequent: n, failed: o} = this.tryParseConditionalConsequent()
                              , [h,l] = this.getArrowLikeExpressions(n);
                            if (o || l.length > 0) {
                                let e = [...i];
                                if (l.length > 0) {
                                    this.state = r,
                                    this.state.noArrowAt = e;
                                    for (let t = 0; t < l.length; t++)
                                        e.push(l[t].start);
                                    ({consequent: n, failed: o} = this.tryParseConditionalConsequent()),
                                    [h,l] = this.getArrowLikeExpressions(n)
                                }
                                o && h.length > 1 && this.raise(eJ.AmbiguousConditionalArrow, {
                                    at: r.startLoc
                                }),
                                o && 1 === h.length && (this.state = r,
                                e.push(h[0].start),
                                this.state.noArrowAt = e,
                                {consequent: n, failed: o} = this.tryParseConditionalConsequent())
                            }
                            return this.getArrowLikeExpressions(n, !0),
                            this.state.noArrowAt = i,
                            this.expect(14),
                            a.test = e,
                            a.consequent = n,
                            a.alternate = this.forwardNoArrowParamsConversionAt(a, ()=>this.parseMaybeAssign(void 0, void 0)),
                            this.finishNode(a, "ConditionalExpression")
                        }
                        tryParseConditionalConsequent() {
                            this.state.noArrowParamsConversionAt.push(this.state.start);
                            let e = this.parseMaybeAssignAllowIn()
                              , t = !this.match(14);
                            return this.state.noArrowParamsConversionAt.pop(),
                            {
                                consequent: e,
                                failed: t
                            }
                        }
                        getArrowLikeExpressions(e, t) {
                            let s = [e]
                              , r = [];
                            for (; 0 !== s.length; ) {
                                let e = s.pop();
                                "ArrowFunctionExpression" === e.type ? (e.typeParameters || !e.returnType ? this.finishArrowValidation(e) : r.push(e),
                                s.push(e.body)) : "ConditionalExpression" === e.type && (s.push(e.consequent),
                                s.push(e.alternate))
                            }
                            return t ? (r.forEach(e=>this.finishArrowValidation(e)),
                            [r, []]) : function(e, t) {
                                let s = []
                                  , r = [];
                                for (let i = 0; i < e.length; i++)
                                    (t(e[i], i, e) ? s : r).push(e[i]);
                                return [s, r]
                            }(r, e=>e.params.every(e=>this.isAssignable(e, !0)))
                        }
                        finishArrowValidation(e) {
                            var t;
                            this.toAssignableList(e.params, null == (t = e.extra) ? void 0 : t.trailingCommaLoc, !1),
                            this.scope.enter(6),
                            super.checkParams(e, !1, !0),
                            this.scope.exit()
                        }
                        forwardNoArrowParamsConversionAt(e, t) {
                            let s;
                            return -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? (this.state.noArrowParamsConversionAt.push(this.state.start),
                            s = t(),
                            this.state.noArrowParamsConversionAt.pop()) : s = t(),
                            s
                        }
                        parseParenItem(e, t) {
                            if (e = super.parseParenItem(e, t),
                            this.eat(17) && (e.optional = !0,
                            this.resetEndLocation(e)),
                            this.match(14)) {
                                let s = this.startNodeAt(t);
                                return s.expression = e,
                                s.typeAnnotation = this.flowParseTypeAnnotation(),
                                this.finishNode(s, "TypeCastExpression")
                            }
                            return e
                        }
                        assertModuleNodeAllowed(e) {
                            "ImportDeclaration" === e.type && ("type" === e.importKind || "typeof" === e.importKind) || "ExportNamedDeclaration" === e.type && "type" === e.exportKind || "ExportAllDeclaration" === e.type && "type" === e.exportKind || super.assertModuleNodeAllowed(e)
                        }
                        parseExport(e, t) {
                            let s = super.parseExport(e, t);
                            return ("ExportNamedDeclaration" === s.type || "ExportAllDeclaration" === s.type) && (s.exportKind = s.exportKind || "value"),
                            s
                        }
                        parseExportDeclaration(e) {
                            if (this.isContextual(128)) {
                                e.exportKind = "type";
                                let t = this.startNode();
                                return this.next(),
                                this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0),
                                super.parseExportFrom(e),
                                null) : this.flowParseTypeAlias(t)
                            }
                            if (this.isContextual(129)) {
                                e.exportKind = "type";
                                let t = this.startNode();
                                return this.next(),
                                this.flowParseOpaqueType(t, !1)
                            }
                            if (this.isContextual(127)) {
                                e.exportKind = "type";
                                let t = this.startNode();
                                return this.next(),
                                this.flowParseInterface(t)
                            }
                            {
                                if (!(this.shouldParseEnums() && this.isContextual(124)))
                                    return super.parseExportDeclaration(e);
                                e.exportKind = "value";
                                let t = this.startNode();
                                return this.next(),
                                this.flowParseEnumDeclaration(t)
                            }
                        }
                        eatExportStar(e) {
                            return !!super.eatExportStar(e) || !!this.isContextual(128) && 55 === this.lookahead().type && (e.exportKind = "type",
                            this.next(),
                            this.next(),
                            !0)
                        }
                        maybeParseExportNamespaceSpecifier(e) {
                            let {startLoc: t} = this.state
                              , s = super.maybeParseExportNamespaceSpecifier(e);
                            return s && "type" === e.exportKind && this.unexpected(t),
                            s
                        }
                        parseClassId(e, t, s) {
                            super.parseClassId(e, t, s),
                            this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration())
                        }
                        parseClassMember(e, t, s) {
                            let {startLoc: r} = this.state;
                            if (this.isContextual(123)) {
                                if (super.parseClassMemberFromModifier(e, t))
                                    return;
                                t.declare = !0
                            }
                            super.parseClassMember(e, t, s),
                            t.declare && ("ClassProperty" !== t.type && "ClassPrivateProperty" !== t.type && "PropertyDefinition" !== t.type ? this.raise(eJ.DeclareClassElement, {
                                at: r
                            }) : t.value && this.raise(eJ.DeclareClassFieldInitializer, {
                                at: t.value
                            }))
                        }
                        isIterator(e) {
                            return "iterator" === e || "asyncIterator" === e
                        }
                        readIterator() {
                            let e = super.readWord1()
                              , t = "@@" + e;
                            this.isIterator(e) && this.state.inType || this.raise(U.InvalidIdentifier, {
                                at: this.state.curPosition(),
                                identifierName: t
                            }),
                            this.finishToken(130, t)
                        }
                        getTokenFromCode(e) {
                            var t;
                            let s = this.input.charCodeAt(this.state.pos + 1);
                            123 === e && 124 === s ? this.finishOp(6, 2) : this.state.inType && (62 === e || 60 === e) ? this.finishOp(62 === e ? 48 : 47, 1) : this.state.inType && 63 === e ? 46 === s ? this.finishOp(18, 2) : this.finishOp(17, 1) : (t = this.input.charCodeAt(this.state.pos + 2),
                            64 === e && 64 === s && Y(t)) ? (this.state.pos += 2,
                            this.readIterator()) : super.getTokenFromCode(e)
                        }
                        isAssignable(e, t) {
                            return "TypeCastExpression" === e.type ? this.isAssignable(e.expression, t) : super.isAssignable(e, t)
                        }
                        toAssignable(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            t || "AssignmentExpression" !== e.type || "TypeCastExpression" !== e.left.type || (e.left = this.typeCastToParameter(e.left)),
                            super.toAssignable(e, t)
                        }
                        toAssignableList(e, t, s) {
                            for (let t = 0; t < e.length; t++) {
                                let s = e[t];
                                (null == s ? void 0 : s.type) === "TypeCastExpression" && (e[t] = this.typeCastToParameter(s))
                            }
                            super.toAssignableList(e, t, s)
                        }
                        toReferencedList(e, t) {
                            for (let r = 0; r < e.length; r++) {
                                var s;
                                let i = e[r];
                                i && "TypeCastExpression" === i.type && !(null != (s = i.extra) && s.parenthesized) && (e.length > 1 || !t) && this.raise(eJ.TypeCastInPattern, {
                                    at: i.typeAnnotation
                                })
                            }
                            return e
                        }
                        parseArrayLike(e, t, s, r) {
                            let i = super.parseArrayLike(e, t, s, r);
                            return t && !this.state.maybeInArrowParameters && this.toReferencedList(i.elements),
                            i
                        }
                        isValidLVal(e, t, s) {
                            return "TypeCastExpression" === e || super.isValidLVal(e, t, s)
                        }
                        parseClassProperty(e) {
                            return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()),
                            super.parseClassProperty(e)
                        }
                        parseClassPrivateProperty(e) {
                            return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()),
                            super.parseClassPrivateProperty(e)
                        }
                        isClassMethod() {
                            return this.match(47) || super.isClassMethod()
                        }
                        isClassProperty() {
                            return this.match(14) || super.isClassProperty()
                        }
                        isNonstaticConstructor(e) {
                            return !this.match(14) && super.isNonstaticConstructor(e)
                        }
                        pushClassMethod(e, t, s, r, i, a) {
                            if (t.variance && this.unexpected(t.variance.loc.start),
                            delete t.variance,
                            this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()),
                            super.pushClassMethod(e, t, s, r, i, a),
                            t.params && i) {
                                let e = t.params;
                                e.length > 0 && this.isThisParam(e[0]) && this.raise(eJ.ThisParamBannedInConstructor, {
                                    at: t
                                })
                            } else if ("MethodDefinition" === t.type && i && t.value.params) {
                                let e = t.value.params;
                                e.length > 0 && this.isThisParam(e[0]) && this.raise(eJ.ThisParamBannedInConstructor, {
                                    at: t
                                })
                            }
                        }
                        pushClassPrivateMethod(e, t, s, r) {
                            t.variance && this.unexpected(t.variance.loc.start),
                            delete t.variance,
                            this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()),
                            super.pushClassPrivateMethod(e, t, s, r)
                        }
                        parseClassSuper(e) {
                            if (super.parseClassSuper(e),
                            e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()),
                            this.isContextual(111)) {
                                this.next();
                                let t = e.implements = [];
                                do {
                                    let e = this.startNode();
                                    e.id = this.flowParseRestrictedIdentifier(!0),
                                    this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null,
                                    t.push(this.finishNode(e, "ClassImplements"))
                                } while (this.eat(12))
                            }
                        }
                        checkGetterSetterParams(e) {
                            super.checkGetterSetterParams(e);
                            let t = this.getObjectOrClassMethodParams(e);
                            if (t.length > 0) {
                                let s = t[0];
                                this.isThisParam(s) && "get" === e.kind ? this.raise(eJ.GetterMayNotHaveThisParam, {
                                    at: s
                                }) : this.isThisParam(s) && this.raise(eJ.SetterMayNotHaveThisParam, {
                                    at: s
                                })
                            }
                        }
                        parsePropertyNamePrefixOperator(e) {
                            e.variance = this.flowParseVariance()
                        }
                        parseObjPropValue(e, t, s, r, i, a, n) {
                            let o;
                            e.variance && this.unexpected(e.variance.loc.start),
                            delete e.variance,
                            this.match(47) && !a && (o = this.flowParseTypeParameterDeclaration(),
                            this.match(10) || this.unexpected());
                            let h = super.parseObjPropValue(e, t, s, r, i, a, n);
                            return o && ((h.value || h).typeParameters = o),
                            h
                        }
                        parseAssignableListItemTypes(e) {
                            return this.eat(17) && ("Identifier" !== e.type && this.raise(eJ.PatternIsOptional, {
                                at: e
                            }),
                            this.isThisParam(e) && this.raise(eJ.ThisParamMayNotBeOptional, {
                                at: e
                            }),
                            e.optional = !0),
                            this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(eJ.ThisParamAnnotationRequired, {
                                at: e
                            }),
                            this.match(29) && this.isThisParam(e) && this.raise(eJ.ThisParamNoDefault, {
                                at: e
                            }),
                            this.resetEndLocation(e),
                            e
                        }
                        parseMaybeDefault(e, t) {
                            let s = super.parseMaybeDefault(e, t);
                            return "AssignmentPattern" === s.type && s.typeAnnotation && s.right.start < s.typeAnnotation.start && this.raise(eJ.TypeBeforeInitializer, {
                                at: s.typeAnnotation
                            }),
                            s
                        }
                        shouldParseDefaultImport(e) {
                            return eX(e) ? eG(this.state.type) : super.shouldParseDefaultImport(e)
                        }
                        checkImportReflection(e) {
                            super.checkImportReflection(e),
                            e.module && "value" !== e.importKind && this.raise(eJ.ImportReflectionHasImportType, {
                                at: e.specifiers[0].loc.start
                            })
                        }
                        parseImportSpecifierLocal(e, t, s) {
                            t.local = eX(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(),
                            e.specifiers.push(this.finishImportSpecifier(t, s))
                        }
                        maybeParseDefaultImportSpecifier(e) {
                            e.importKind = "value";
                            let t = null;
                            if (this.match(87) ? t = "typeof" : this.isContextual(128) && (t = "type"),
                            t) {
                                let s = this.lookahead()
                                  , {type: r} = s;
                                "type" === t && 55 === r && this.unexpected(null, s.type),
                                (eG(r) || 5 === r || 55 === r) && (this.next(),
                                e.importKind = t)
                            }
                            return super.maybeParseDefaultImportSpecifier(e)
                        }
                        parseImportSpecifier(e, t, s, r, i) {
                            let a = e.imported
                              , n = null;
                            "Identifier" === a.type && ("type" === a.name ? n = "type" : "typeof" === a.name && (n = "typeof"));
                            let o = !1;
                            if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
                                let t = this.parseIdentifier(!0);
                                null === n || b(this.state.type) ? (e.imported = a,
                                e.importKind = null,
                                e.local = this.parseIdentifier()) : (e.imported = t,
                                e.importKind = n,
                                e.local = eq(t))
                            } else {
                                if (null !== n && b(this.state.type))
                                    e.imported = this.parseIdentifier(!0),
                                    e.importKind = n;
                                else {
                                    if (t)
                                        throw this.raise(U.ImportBindingIsString, {
                                            at: e,
                                            importName: a.value
                                        });
                                    e.imported = a,
                                    e.importKind = null
                                }
                                this.eatContextual(93) ? e.local = this.parseIdentifier() : (o = !0,
                                e.local = eq(e.imported))
                            }
                            let h = eX(e);
                            return s && h && this.raise(eJ.ImportTypeShorthandOnlyInPureImport, {
                                at: e
                            }),
                            (s || h) && this.checkReservedType(e.local.name, e.local.loc.start, !0),
                            !o || s || h || this.checkReservedWord(e.local.name, e.loc.start, !0, !0),
                            this.finishImportSpecifier(e, "ImportSpecifier")
                        }
                        parseBindingAtom() {
                            return 78 === this.state.type ? this.parseIdentifier(!0) : super.parseBindingAtom()
                        }
                        parseFunctionParams(e, t) {
                            let s = e.kind;
                            "get" !== s && "set" !== s && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                            super.parseFunctionParams(e, t)
                        }
                        parseVarId(e, t) {
                            super.parseVarId(e, t),
                            this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(),
                            this.resetEndLocation(e.id))
                        }
                        parseAsyncArrowFromCallExpression(e, t) {
                            if (this.match(14)) {
                                let t = this.state.noAnonFunctionType;
                                this.state.noAnonFunctionType = !0,
                                e.returnType = this.flowParseTypeAnnotation(),
                                this.state.noAnonFunctionType = t
                            }
                            return super.parseAsyncArrowFromCallExpression(e, t)
                        }
                        shouldParseAsyncArrow() {
                            return this.match(14) || super.shouldParseAsyncArrow()
                        }
                        parseMaybeAssign(e, t) {
                            var s, i, a;
                            let n = null, o;
                            if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                                if (n = this.state.clone(),
                                !(o = this.tryParse(()=>super.parseMaybeAssign(e, t), n)).error)
                                    return o.node;
                                let {context: s} = this.state
                                  , i = s[s.length - 1];
                                (i === r.j_oTag || i === r.j_expr) && s.pop()
                            }
                            if (null != (s = o) && s.error || this.match(47)) {
                                n = n || this.state.clone();
                                let s, r = this.tryParse(r=>{
                                    var i;
                                    s = this.flowParseTypeParameterDeclaration();
                                    let a = this.forwardNoArrowParamsConversionAt(s, ()=>{
                                        let r = super.parseMaybeAssign(e, t);
                                        return this.resetStartLocationFromNode(r, s),
                                        r
                                    }
                                    );
                                    null != (i = a.extra) && i.parenthesized && r();
                                    let n = this.maybeUnwrapTypeCastExpression(a);
                                    return "ArrowFunctionExpression" !== n.type && r(),
                                    n.typeParameters = s,
                                    this.resetStartLocationFromNode(n, s),
                                    a
                                }
                                , n), h = null;
                                if (r.node && "ArrowFunctionExpression" === this.maybeUnwrapTypeCastExpression(r.node).type) {
                                    if (!r.error && !r.aborted)
                                        return r.node.async && this.raise(eJ.UnexpectedTypeParameterBeforeAsyncArrowFunction, {
                                            at: s
                                        }),
                                        r.node;
                                    h = r.node
                                }
                                if (null != (i = o) && i.node)
                                    return this.state = o.failState,
                                    o.node;
                                if (h)
                                    return this.state = r.failState,
                                    h;
                                throw null != (a = o) && a.thrown ? o.error : r.thrown ? r.error : this.raise(eJ.UnexpectedTokenAfterTypeParameter, {
                                    at: s
                                })
                            }
                            return super.parseMaybeAssign(e, t)
                        }
                        parseArrow(e) {
                            if (this.match(14)) {
                                let t = this.tryParse(()=>{
                                    let t = this.state.noAnonFunctionType;
                                    this.state.noAnonFunctionType = !0;
                                    let s = this.startNode();
                                    return [s.typeAnnotation,e.predicate] = this.flowParseTypeAndPredicateInitialiser(),
                                    this.state.noAnonFunctionType = t,
                                    this.canInsertSemicolon() && this.unexpected(),
                                    this.match(19) || this.unexpected(),
                                    s
                                }
                                );
                                if (t.thrown)
                                    return null;
                                t.error && (this.state = t.failState),
                                e.returnType = t.node.typeAnnotation ? this.finishNode(t.node, "TypeAnnotation") : null
                            }
                            return super.parseArrow(e)
                        }
                        shouldParseArrow(e) {
                            return this.match(14) || super.shouldParseArrow(e)
                        }
                        setArrowFunctionParameters(e, t) {
                            -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? e.params = t : super.setArrowFunctionParameters(e, t)
                        }
                        checkParams(e, t, s) {
                            let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                            if (!(s && -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start))) {
                                for (let t = 0; t < e.params.length; t++)
                                    this.isThisParam(e.params[t]) && t > 0 && this.raise(eJ.ThisParamMustBeFirst, {
                                        at: e.params[t]
                                    });
                                super.checkParams(e, t, s, r)
                            }
                        }
                        parseParenAndDistinguishExpression(e) {
                            return super.parseParenAndDistinguishExpression(e && -1 === this.state.noArrowAt.indexOf(this.state.start))
                        }
                        parseSubscripts(e, t, s) {
                            if ("Identifier" === e.type && "async" === e.name && -1 !== this.state.noArrowAt.indexOf(t.index)) {
                                this.next();
                                let s = this.startNodeAt(t);
                                s.callee = e,
                                s.arguments = super.parseCallExpressionArguments(11, !1),
                                e = this.finishNode(s, "CallExpression")
                            } else if ("Identifier" === e.type && "async" === e.name && this.match(47)) {
                                let r = this.state.clone()
                                  , i = this.tryParse(e=>this.parseAsyncArrowWithTypeParameters(t) || e(), r);
                                if (!i.error && !i.aborted)
                                    return i.node;
                                let a = this.tryParse(()=>super.parseSubscripts(e, t, s), r);
                                if (a.node && !a.error)
                                    return a.node;
                                if (i.node)
                                    return this.state = i.failState,
                                    i.node;
                                if (a.node)
                                    return this.state = a.failState,
                                    a.node;
                                throw i.error || a.error
                            }
                            return super.parseSubscripts(e, t, s)
                        }
                        parseSubscript(e, t, s, r) {
                            if (this.match(18) && this.isLookaheadToken_lt()) {
                                if (r.optionalChainMember = !0,
                                s)
                                    return r.stop = !0,
                                    e;
                                this.next();
                                let i = this.startNodeAt(t);
                                return i.callee = e,
                                i.typeArguments = this.flowParseTypeParameterInstantiation(),
                                this.expect(10),
                                i.arguments = this.parseCallExpressionArguments(11, !1),
                                i.optional = !0,
                                this.finishCallExpression(i, !0)
                            }
                            if (!s && this.shouldParseTypes() && this.match(47)) {
                                let s = this.startNodeAt(t);
                                s.callee = e;
                                let i = this.tryParse(()=>(s.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(),
                                this.expect(10),
                                s.arguments = super.parseCallExpressionArguments(11, !1),
                                r.optionalChainMember && (s.optional = !1),
                                this.finishCallExpression(s, r.optionalChainMember)));
                                if (i.node)
                                    return i.error && (this.state = i.failState),
                                    i.node
                            }
                            return super.parseSubscript(e, t, s, r)
                        }
                        parseNewCallee(e) {
                            super.parseNewCallee(e);
                            let t = null;
                            this.shouldParseTypes() && this.match(47) && (t = this.tryParse(()=>this.flowParseTypeParameterInstantiationCallOrNew()).node),
                            e.typeArguments = t
                        }
                        parseAsyncArrowWithTypeParameters(e) {
                            let t = this.startNodeAt(e);
                            if (this.parseFunctionParams(t, !1),
                            this.parseArrow(t))
                                return super.parseArrowExpression(t, void 0, !0)
                        }
                        readToken_mult_modulo(e) {
                            let t = this.input.charCodeAt(this.state.pos + 1);
                            if (42 === e && 47 === t && this.state.hasFlowComment) {
                                this.state.hasFlowComment = !1,
                                this.state.pos += 2,
                                this.nextToken();
                                return
                            }
                            super.readToken_mult_modulo(e)
                        }
                        readToken_pipe_amp(e) {
                            let t = this.input.charCodeAt(this.state.pos + 1);
                            if (124 === e && 125 === t) {
                                this.finishOp(9, 2);
                                return
                            }
                            super.readToken_pipe_amp(e)
                        }
                        parseTopLevel(e, t) {
                            let s = super.parseTopLevel(e, t);
                            return this.state.hasFlowComment && this.raise(eJ.UnterminatedFlowComment, {
                                at: this.state.curPosition()
                            }),
                            s
                        }
                        skipBlockComment() {
                            if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
                                if (this.state.hasFlowComment)
                                    throw this.raise(eJ.NestedFlowComment, {
                                        at: this.state.startLoc
                                    });
                                this.hasFlowCommentCompletion();
                                let e = this.skipFlowComment();
                                e && (this.state.pos += e,
                                this.state.hasFlowComment = !0);
                                return
                            }
                            return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/")
                        }
                        skipFlowComment() {
                            let {pos: e} = this.state
                              , t = 2;
                            for (; [32, 9].includes(this.input.charCodeAt(e + t)); )
                                t++;
                            let s = this.input.charCodeAt(t + e)
                              , r = this.input.charCodeAt(t + e + 1);
                            return 58 === s && 58 === r ? t + 2 : "flow-include" === this.input.slice(t + e, t + e + 12) ? t + 12 : 58 === s && 58 !== r && t
                        }
                        hasFlowCommentCompletion() {
                            if (-1 === this.input.indexOf("*/", this.state.pos))
                                throw this.raise(U.UnterminatedComment, {
                                    at: this.state.curPosition()
                                })
                        }
                        flowEnumErrorBooleanMemberNotInitialized(e, t) {
                            let {enumName: s, memberName: r} = t;
                            this.raise(eJ.EnumBooleanMemberNotInitialized, {
                                at: e,
                                memberName: r,
                                enumName: s
                            })
                        }
                        flowEnumErrorInvalidMemberInitializer(e, t) {
                            return this.raise(t.explicitType ? "symbol" === t.explicitType ? eJ.EnumInvalidMemberInitializerSymbolType : eJ.EnumInvalidMemberInitializerPrimaryType : eJ.EnumInvalidMemberInitializerUnknownType, Object.assign({
                                at: e
                            }, t))
                        }
                        flowEnumErrorNumberMemberNotInitialized(e, t) {
                            let {enumName: s, memberName: r} = t;
                            this.raise(eJ.EnumNumberMemberNotInitialized, {
                                at: e,
                                enumName: s,
                                memberName: r
                            })
                        }
                        flowEnumErrorStringMemberInconsistentlyInitailized(e, t) {
                            let {enumName: s} = t;
                            this.raise(eJ.EnumStringMemberInconsistentlyInitailized, {
                                at: e,
                                enumName: s
                            })
                        }
                        flowEnumMemberInit() {
                            let e = this.state.startLoc
                              , t = ()=>this.match(12) || this.match(8);
                            switch (this.state.type) {
                            case 132:
                                {
                                    let s = this.parseNumericLiteral(this.state.value);
                                    return t() ? {
                                        type: "number",
                                        loc: s.loc.start,
                                        value: s
                                    } : {
                                        type: "invalid",
                                        loc: e
                                    }
                                }
                            case 131:
                                {
                                    let s = this.parseStringLiteral(this.state.value);
                                    return t() ? {
                                        type: "string",
                                        loc: s.loc.start,
                                        value: s
                                    } : {
                                        type: "invalid",
                                        loc: e
                                    }
                                }
                            case 85:
                            case 86:
                                {
                                    let s = this.parseBooleanLiteral(this.match(85));
                                    return t() ? {
                                        type: "boolean",
                                        loc: s.loc.start,
                                        value: s
                                    } : {
                                        type: "invalid",
                                        loc: e
                                    }
                                }
                            default:
                                return {
                                    type: "invalid",
                                    loc: e
                                }
                            }
                        }
                        flowEnumMemberRaw() {
                            let e = this.state.startLoc;
                            return {
                                id: this.parseIdentifier(!0),
                                init: this.eat(29) ? this.flowEnumMemberInit() : {
                                    type: "none",
                                    loc: e
                                }
                            }
                        }
                        flowEnumCheckExplicitTypeMismatch(e, t, s) {
                            let {explicitType: r} = t;
                            null !== r && r !== s && this.flowEnumErrorInvalidMemberInitializer(e, t)
                        }
                        flowEnumMembers(e) {
                            let {enumName: t, explicitType: s} = e
                              , r = new Set
                              , i = {
                                booleanMembers: [],
                                numberMembers: [],
                                stringMembers: [],
                                defaultedMembers: []
                            }
                              , a = !1;
                            for (; !this.match(8); ) {
                                if (this.eat(21)) {
                                    a = !0;
                                    break
                                }
                                let e = this.startNode()
                                  , {id: n, init: o} = this.flowEnumMemberRaw()
                                  , h = n.name;
                                if ("" === h)
                                    continue;
                                /^[a-z]/.test(h) && this.raise(eJ.EnumInvalidMemberName, {
                                    at: n,
                                    memberName: h,
                                    suggestion: h[0].toUpperCase() + h.slice(1),
                                    enumName: t
                                }),
                                r.has(h) && this.raise(eJ.EnumDuplicateMemberName, {
                                    at: n,
                                    memberName: h,
                                    enumName: t
                                }),
                                r.add(h);
                                let l = {
                                    enumName: t,
                                    explicitType: s,
                                    memberName: h
                                };
                                switch (e.id = n,
                                o.type) {
                                case "boolean":
                                    this.flowEnumCheckExplicitTypeMismatch(o.loc, l, "boolean"),
                                    e.init = o.value,
                                    i.booleanMembers.push(this.finishNode(e, "EnumBooleanMember"));
                                    break;
                                case "number":
                                    this.flowEnumCheckExplicitTypeMismatch(o.loc, l, "number"),
                                    e.init = o.value,
                                    i.numberMembers.push(this.finishNode(e, "EnumNumberMember"));
                                    break;
                                case "string":
                                    this.flowEnumCheckExplicitTypeMismatch(o.loc, l, "string"),
                                    e.init = o.value,
                                    i.stringMembers.push(this.finishNode(e, "EnumStringMember"));
                                    break;
                                case "invalid":
                                    throw this.flowEnumErrorInvalidMemberInitializer(o.loc, l);
                                case "none":
                                    switch (s) {
                                    case "boolean":
                                        this.flowEnumErrorBooleanMemberNotInitialized(o.loc, l);
                                        break;
                                    case "number":
                                        this.flowEnumErrorNumberMemberNotInitialized(o.loc, l);
                                        break;
                                    default:
                                        i.defaultedMembers.push(this.finishNode(e, "EnumDefaultedMember"))
                                    }
                                }
                                this.match(8) || this.expect(12)
                            }
                            return {
                                members: i,
                                hasUnknownMembers: a
                            }
                        }
                        flowEnumStringMembers(e, t, s) {
                            let {enumName: r} = s;
                            if (0 === e.length)
                                return t;
                            if (0 === t.length)
                                return e;
                            if (t.length > e.length) {
                                for (let t of e)
                                    this.flowEnumErrorStringMemberInconsistentlyInitailized(t, {
                                        enumName: r
                                    });
                                return t
                            }
                            for (let e of t)
                                this.flowEnumErrorStringMemberInconsistentlyInitailized(e, {
                                    enumName: r
                                });
                            return e
                        }
                        flowEnumParseExplicitType(e) {
                            let {enumName: t} = e;
                            if (!this.eatContextual(101))
                                return null;
                            if (!P(this.state.type))
                                throw this.raise(eJ.EnumInvalidExplicitTypeUnknownSupplied, {
                                    at: this.state.startLoc,
                                    enumName: t
                                });
                            let {value: s} = this.state;
                            return this.next(),
                            "boolean" !== s && "number" !== s && "string" !== s && "symbol" !== s && this.raise(eJ.EnumInvalidExplicitType, {
                                at: this.state.startLoc,
                                enumName: t,
                                invalidEnumType: s
                            }),
                            s
                        }
                        flowEnumBody(e, t) {
                            let s = t.name
                              , r = t.loc.start
                              , i = this.flowEnumParseExplicitType({
                                enumName: s
                            });
                            this.expect(5);
                            let {members: a, hasUnknownMembers: n} = this.flowEnumMembers({
                                enumName: s,
                                explicitType: i
                            });
                            switch (e.hasUnknownMembers = n,
                            i) {
                            case "boolean":
                                return e.explicitType = !0,
                                e.members = a.booleanMembers,
                                this.expect(8),
                                this.finishNode(e, "EnumBooleanBody");
                            case "number":
                                return e.explicitType = !0,
                                e.members = a.numberMembers,
                                this.expect(8),
                                this.finishNode(e, "EnumNumberBody");
                            case "string":
                                return e.explicitType = !0,
                                e.members = this.flowEnumStringMembers(a.stringMembers, a.defaultedMembers, {
                                    enumName: s
                                }),
                                this.expect(8),
                                this.finishNode(e, "EnumStringBody");
                            case "symbol":
                                return e.members = a.defaultedMembers,
                                this.expect(8),
                                this.finishNode(e, "EnumSymbolBody");
                            default:
                                {
                                    let t = ()=>(e.members = [],
                                    this.expect(8),
                                    this.finishNode(e, "EnumStringBody"));
                                    e.explicitType = !1;
                                    let i = a.booleanMembers.length
                                      , n = a.numberMembers.length
                                      , o = a.stringMembers.length
                                      , h = a.defaultedMembers.length;
                                    if (!i && !n && !o && !h)
                                        return t();
                                    if (!i && !n)
                                        return e.members = this.flowEnumStringMembers(a.stringMembers, a.defaultedMembers, {
                                            enumName: s
                                        }),
                                        this.expect(8),
                                        this.finishNode(e, "EnumStringBody");
                                    if (n || o || !(i >= h)) {
                                        if (i || o || !(n >= h))
                                            return this.raise(eJ.EnumInconsistentMemberValues, {
                                                at: r,
                                                enumName: s
                                            }),
                                            t();
                                        for (let e of a.defaultedMembers)
                                            this.flowEnumErrorNumberMemberNotInitialized(e.loc.start, {
                                                enumName: s,
                                                memberName: e.id.name
                                            });
                                        return e.members = a.numberMembers,
                                        this.expect(8),
                                        this.finishNode(e, "EnumNumberBody")
                                    }
                                    for (let e of a.defaultedMembers)
                                        this.flowEnumErrorBooleanMemberNotInitialized(e.loc.start, {
                                            enumName: s,
                                            memberName: e.id.name
                                        });
                                    return e.members = a.booleanMembers,
                                    this.expect(8),
                                    this.finishNode(e, "EnumBooleanBody")
                                }
                            }
                        }
                        flowParseEnumDeclaration(e) {
                            let t = this.parseIdentifier();
                            return e.id = t,
                            e.body = this.flowEnumBody(this.startNode(), t),
                            this.finishNode(e, "EnumDeclaration")
                        }
                        isLookaheadToken_lt() {
                            let e = this.nextTokenStart();
                            if (60 === this.input.charCodeAt(e)) {
                                let t = this.input.charCodeAt(e + 1);
                                return 60 !== t && 61 !== t
                            }
                            return !1
                        }
                        maybeUnwrapTypeCastExpression(e) {
                            return "TypeCastExpression" === e.type ? e.expression : e
                        }
                    }
                      , e1 = {
                        __proto__: null,
                        quot: '"',
                        amp: "&",
                        apos: "'",
                        lt: "<",
                        gt: ">",
                        nbsp: "\xa0",
                        iexcl: "\xa1",
                        cent: "\xa2",
                        pound: "\xa3",
                        curren: "\xa4",
                        yen: "\xa5",
                        brvbar: "\xa6",
                        sect: "\xa7",
                        uml: "\xa8",
                        copy: "\xa9",
                        ordf: "\xaa",
                        laquo: "\xab",
                        not: "\xac",
                        shy: "\xad",
                        reg: "\xae",
                        macr: "\xaf",
                        deg: "\xb0",
                        plusmn: "\xb1",
                        sup2: "\xb2",
                        sup3: "\xb3",
                        acute: "\xb4",
                        micro: "\xb5",
                        para: "\xb6",
                        middot: "\xb7",
                        cedil: "\xb8",
                        sup1: "\xb9",
                        ordm: "\xba",
                        raquo: "\xbb",
                        frac14: "\xbc",
                        frac12: "\xbd",
                        frac34: "\xbe",
                        iquest: "\xbf",
                        Agrave: "\xc0",
                        Aacute: "\xc1",
                        Acirc: "\xc2",
                        Atilde: "\xc3",
                        Auml: "\xc4",
                        Aring: "\xc5",
                        AElig: "\xc6",
                        Ccedil: "\xc7",
                        Egrave: "\xc8",
                        Eacute: "\xc9",
                        Ecirc: "\xca",
                        Euml: "\xcb",
                        Igrave: "\xcc",
                        Iacute: "\xcd",
                        Icirc: "\xce",
                        Iuml: "\xcf",
                        ETH: "\xd0",
                        Ntilde: "\xd1",
                        Ograve: "\xd2",
                        Oacute: "\xd3",
                        Ocirc: "\xd4",
                        Otilde: "\xd5",
                        Ouml: "\xd6",
                        times: "\xd7",
                        Oslash: "\xd8",
                        Ugrave: "\xd9",
                        Uacute: "\xda",
                        Ucirc: "\xdb",
                        Uuml: "\xdc",
                        Yacute: "\xdd",
                        THORN: "\xde",
                        szlig: "\xdf",
                        agrave: "\xe0",
                        aacute: "\xe1",
                        acirc: "\xe2",
                        atilde: "\xe3",
                        auml: "\xe4",
                        aring: "\xe5",
                        aelig: "\xe6",
                        ccedil: "\xe7",
                        egrave: "\xe8",
                        eacute: "\xe9",
                        ecirc: "\xea",
                        euml: "\xeb",
                        igrave: "\xec",
                        iacute: "\xed",
                        icirc: "\xee",
                        iuml: "\xef",
                        eth: "\xf0",
                        ntilde: "\xf1",
                        ograve: "\xf2",
                        oacute: "\xf3",
                        ocirc: "\xf4",
                        otilde: "\xf5",
                        ouml: "\xf6",
                        divide: "\xf7",
                        oslash: "\xf8",
                        ugrave: "\xf9",
                        uacute: "\xfa",
                        ucirc: "\xfb",
                        uuml: "\xfc",
                        yacute: "\xfd",
                        thorn: "\xfe",
                        yuml: "\xff",
                        OElig: "Œ",
                        oelig: "œ",
                        Scaron: "Š",
                        scaron: "š",
                        Yuml: "Ÿ",
                        fnof: "ƒ",
                        circ: "ˆ",
                        tilde: "˜",
                        Alpha: "Α",
                        Beta: "Β",
                        Gamma: "Γ",
                        Delta: "Δ",
                        Epsilon: "Ε",
                        Zeta: "Ζ",
                        Eta: "Η",
                        Theta: "Θ",
                        Iota: "Ι",
                        Kappa: "Κ",
                        Lambda: "Λ",
                        Mu: "Μ",
                        Nu: "Ν",
                        Xi: "Ξ",
                        Omicron: "Ο",
                        Pi: "Π",
                        Rho: "Ρ",
                        Sigma: "Σ",
                        Tau: "Τ",
                        Upsilon: "Υ",
                        Phi: "Φ",
                        Chi: "Χ",
                        Psi: "Ψ",
                        Omega: "Ω",
                        alpha: "α",
                        beta: "β",
                        gamma: "γ",
                        delta: "δ",
                        epsilon: "ε",
                        zeta: "ζ",
                        eta: "η",
                        theta: "θ",
                        iota: "ι",
                        kappa: "κ",
                        lambda: "λ",
                        mu: "μ",
                        nu: "ν",
                        xi: "ξ",
                        omicron: "ο",
                        pi: "π",
                        rho: "ρ",
                        sigmaf: "ς",
                        sigma: "σ",
                        tau: "τ",
                        upsilon: "υ",
                        phi: "φ",
                        chi: "χ",
                        psi: "ψ",
                        omega: "ω",
                        thetasym: "ϑ",
                        upsih: "ϒ",
                        piv: "ϖ",
                        ensp: " ",
                        emsp: " ",
                        thinsp: " ",
                        zwnj: "‌",
                        zwj: "‍",
                        lrm: "‎",
                        rlm: "‏",
                        ndash: "–",
                        mdash: "—",
                        lsquo: "‘",
                        rsquo: "’",
                        sbquo: "‚",
                        ldquo: "“",
                        rdquo: "”",
                        bdquo: "„",
                        dagger: "†",
                        Dagger: "‡",
                        bull: "•",
                        hellip: "…",
                        permil: "‰",
                        prime: "′",
                        Prime: "″",
                        lsaquo: "‹",
                        rsaquo: "›",
                        oline: "‾",
                        frasl: "⁄",
                        euro: "€",
                        image: "ℑ",
                        weierp: "℘",
                        real: "ℜ",
                        trade: "™",
                        alefsym: "ℵ",
                        larr: "←",
                        uarr: "↑",
                        rarr: "→",
                        darr: "↓",
                        harr: "↔",
                        crarr: "↵",
                        lArr: "⇐",
                        uArr: "⇑",
                        rArr: "⇒",
                        dArr: "⇓",
                        hArr: "⇔",
                        forall: "∀",
                        part: "∂",
                        exist: "∃",
                        empty: "∅",
                        nabla: "∇",
                        isin: "∈",
                        notin: "∉",
                        ni: "∋",
                        prod: "∏",
                        sum: "∑",
                        minus: "−",
                        lowast: "∗",
                        radic: "√",
                        prop: "∝",
                        infin: "∞",
                        ang: "∠",
                        and: "∧",
                        or: "∨",
                        cap: "∩",
                        cup: "∪",
                        int: "∫",
                        there4: "∴",
                        sim: "∼",
                        cong: "≅",
                        asymp: "≈",
                        ne: "≠",
                        equiv: "≡",
                        le: "≤",
                        ge: "≥",
                        sub: "⊂",
                        sup: "⊃",
                        nsub: "⊄",
                        sube: "⊆",
                        supe: "⊇",
                        oplus: "⊕",
                        otimes: "⊗",
                        perp: "⊥",
                        sdot: "⋅",
                        lceil: "⌈",
                        rceil: "⌉",
                        lfloor: "⌊",
                        rfloor: "⌋",
                        lang: "〈",
                        rang: "〉",
                        loz: "◊",
                        spades: "♠",
                        clubs: "♣",
                        hearts: "♥",
                        diams: "♦"
                    }
                      , e0 = R`jsx`({
                        AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
                        MissingClosingTagElement: e=>{
                            let {openingTagName: t} = e;
                            return `Expected corresponding JSX closing tag for <${t}>.`
                        }
                        ,
                        MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
                        UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
                        UnexpectedToken: e=>{
                            let {unexpected: t, HTMLEntity: s} = e;
                            return `Unexpected token \`${t}\`. Did you mean \`${s}\` or \`{'${t}'}\`?`
                        }
                        ,
                        UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
                        UnterminatedJsxContent: "Unterminated JSX contents.",
                        UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
                    });
                    function e2(e) {
                        return !!e && ("JSXOpeningFragment" === e.type || "JSXClosingFragment" === e.type)
                    }
                    function e3(e) {
                        if ("JSXIdentifier" === e.type)
                            return e.name;
                        if ("JSXNamespacedName" === e.type)
                            return e.namespace.name + ":" + e.name.name;
                        if ("JSXMemberExpression" === e.type)
                            return e3(e.object) + "." + e3(e.property);
                        throw Error("Node had unexpected type: " + e.type)
                    }
                    var e4 = e=>class extends e {
                        jsxReadToken() {
                            let e = ""
                              , t = this.state.pos;
                            for (; ; ) {
                                if (this.state.pos >= this.length)
                                    throw this.raise(e0.UnterminatedJsxContent, {
                                        at: this.state.startLoc
                                    });
                                let s = this.input.charCodeAt(this.state.pos);
                                switch (s) {
                                case 60:
                                case 123:
                                    if (this.state.pos === this.state.start) {
                                        60 === s && this.state.canStartJSXElement ? (++this.state.pos,
                                        this.finishToken(140)) : super.getTokenFromCode(s);
                                        return
                                    }
                                    e += this.input.slice(t, this.state.pos),
                                    this.finishToken(139, e);
                                    return;
                                case 38:
                                    e += this.input.slice(t, this.state.pos) + this.jsxReadEntity(),
                                    t = this.state.pos;
                                    break;
                                default:
                                    eg(s) ? (e += this.input.slice(t, this.state.pos) + this.jsxReadNewLine(!0),
                                    t = this.state.pos) : ++this.state.pos
                                }
                            }
                        }
                        jsxReadNewLine(e) {
                            let t = this.input.charCodeAt(this.state.pos), s;
                            return ++this.state.pos,
                            13 === t && 10 === this.input.charCodeAt(this.state.pos) ? (++this.state.pos,
                            s = e ? `
` : `\r
`) : s = String.fromCharCode(t),
                            ++this.state.curLine,
                            this.state.lineStart = this.state.pos,
                            s
                        }
                        jsxReadString(e) {
                            let t = ""
                              , s = ++this.state.pos;
                            for (; ; ) {
                                if (this.state.pos >= this.length)
                                    throw this.raise(U.UnterminatedString, {
                                        at: this.state.startLoc
                                    });
                                let r = this.input.charCodeAt(this.state.pos);
                                if (r === e)
                                    break;
                                38 === r ? (t += this.input.slice(s, this.state.pos) + this.jsxReadEntity(),
                                s = this.state.pos) : eg(r) ? (t += this.input.slice(s, this.state.pos) + this.jsxReadNewLine(!1),
                                s = this.state.pos) : ++this.state.pos
                            }
                            t += this.input.slice(s, this.state.pos++),
                            this.finishToken(131, t)
                        }
                        jsxReadEntity() {
                            let e = ++this.state.pos;
                            if (35 === this.codePointAtPos(this.state.pos)) {
                                ++this.state.pos;
                                let e = 10;
                                120 === this.codePointAtPos(this.state.pos) && (e = 16,
                                ++this.state.pos);
                                let t = this.readInt(e, void 0, !1, "bail");
                                if (null !== t && 59 === this.codePointAtPos(this.state.pos))
                                    return ++this.state.pos,
                                    String.fromCodePoint(t)
                            } else {
                                let t = 0
                                  , s = !1;
                                for (; t++ < 10 && this.state.pos < this.length && !(s = 59 == this.codePointAtPos(this.state.pos)); )
                                    ++this.state.pos;
                                if (s) {
                                    let t = e1[this.input.slice(e, this.state.pos)];
                                    if (++this.state.pos,
                                    t)
                                        return t
                                }
                            }
                            return this.state.pos = e,
                            "&"
                        }
                        jsxReadWord() {
                            let e, t = this.state.pos;
                            do
                                e = this.input.charCodeAt(++this.state.pos);
                            while (Q(e) || 45 === e);
                            this.finishToken(138, this.input.slice(t, this.state.pos))
                        }
                        jsxParseIdentifier() {
                            let e = this.startNode();
                            return this.match(138) ? e.name = this.state.value : E(this.state.type) ? e.name = c[this.state.type] : this.unexpected(),
                            this.next(),
                            this.finishNode(e, "JSXIdentifier")
                        }
                        jsxParseNamespacedName() {
                            let e = this.state.startLoc
                              , t = this.jsxParseIdentifier();
                            if (!this.eat(14))
                                return t;
                            let s = this.startNodeAt(e);
                            return s.namespace = t,
                            s.name = this.jsxParseIdentifier(),
                            this.finishNode(s, "JSXNamespacedName")
                        }
                        jsxParseElementName() {
                            let e = this.state.startLoc
                              , t = this.jsxParseNamespacedName();
                            if ("JSXNamespacedName" === t.type)
                                return t;
                            for (; this.eat(16); ) {
                                let s = this.startNodeAt(e);
                                s.object = t,
                                s.property = this.jsxParseIdentifier(),
                                t = this.finishNode(s, "JSXMemberExpression")
                            }
                            return t
                        }
                        jsxParseAttributeValue() {
                            let e;
                            switch (this.state.type) {
                            case 5:
                                return e = this.startNode(),
                                this.setContext(r.brace),
                                this.next(),
                                "JSXEmptyExpression" === (e = this.jsxParseExpressionContainer(e, r.j_oTag)).expression.type && this.raise(e0.AttributeIsEmpty, {
                                    at: e
                                }),
                                e;
                            case 140:
                            case 131:
                                return this.parseExprAtom();
                            default:
                                throw this.raise(e0.UnsupportedJsxValue, {
                                    at: this.state.startLoc
                                })
                            }
                        }
                        jsxParseEmptyExpression() {
                            let e = this.startNodeAt(this.state.lastTokEndLoc);
                            return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc)
                        }
                        jsxParseSpreadChild(e) {
                            return this.next(),
                            e.expression = this.parseExpression(),
                            this.setContext(r.j_expr),
                            this.state.canStartJSXElement = !0,
                            this.expect(8),
                            this.finishNode(e, "JSXSpreadChild")
                        }
                        jsxParseExpressionContainer(e, t) {
                            if (this.match(8))
                                e.expression = this.jsxParseEmptyExpression();
                            else {
                                let t = this.parseExpression();
                                e.expression = t
                            }
                            return this.setContext(t),
                            this.state.canStartJSXElement = !0,
                            this.expect(8),
                            this.finishNode(e, "JSXExpressionContainer")
                        }
                        jsxParseAttribute() {
                            let e = this.startNode();
                            return this.match(5) ? (this.setContext(r.brace),
                            this.next(),
                            this.expect(21),
                            e.argument = this.parseMaybeAssignAllowIn(),
                            this.setContext(r.j_oTag),
                            this.state.canStartJSXElement = !0,
                            this.expect(8),
                            this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(),
                            e.value = this.eat(29) ? this.jsxParseAttributeValue() : null,
                            this.finishNode(e, "JSXAttribute"))
                        }
                        jsxParseOpeningElementAt(e) {
                            let t = this.startNodeAt(e);
                            return this.eat(141) ? this.finishNode(t, "JSXOpeningFragment") : (t.name = this.jsxParseElementName(),
                            this.jsxParseOpeningElementAfterName(t))
                        }
                        jsxParseOpeningElementAfterName(e) {
                            let t = [];
                            for (; !this.match(56) && !this.match(141); )
                                t.push(this.jsxParseAttribute());
                            return e.attributes = t,
                            e.selfClosing = this.eat(56),
                            this.expect(141),
                            this.finishNode(e, "JSXOpeningElement")
                        }
                        jsxParseClosingElementAt(e) {
                            let t = this.startNodeAt(e);
                            return this.eat(141) ? this.finishNode(t, "JSXClosingFragment") : (t.name = this.jsxParseElementName(),
                            this.expect(141),
                            this.finishNode(t, "JSXClosingElement"))
                        }
                        jsxParseElementAt(e) {
                            let t = this.startNodeAt(e)
                              , s = []
                              , i = this.jsxParseOpeningElementAt(e)
                              , a = null;
                            if (!i.selfClosing) {
                                e: for (; ; )
                                    switch (this.state.type) {
                                    case 140:
                                        if (e = this.state.startLoc,
                                        this.next(),
                                        this.eat(56)) {
                                            a = this.jsxParseClosingElementAt(e);
                                            break e
                                        }
                                        s.push(this.jsxParseElementAt(e));
                                        break;
                                    case 139:
                                        s.push(this.parseExprAtom());
                                        break;
                                    case 5:
                                        {
                                            let e = this.startNode();
                                            this.setContext(r.brace),
                                            this.next(),
                                            this.match(21) ? s.push(this.jsxParseSpreadChild(e)) : s.push(this.jsxParseExpressionContainer(e, r.j_expr));
                                            break
                                        }
                                    default:
                                        this.unexpected()
                                    }
                                e2(i) && !e2(a) && null !== a ? this.raise(e0.MissingClosingTagFragment, {
                                    at: a
                                }) : !e2(i) && e2(a) ? this.raise(e0.MissingClosingTagElement, {
                                    at: a,
                                    openingTagName: e3(i.name)
                                }) : e2(i) || e2(a) || e3(a.name) === e3(i.name) || this.raise(e0.MissingClosingTagElement, {
                                    at: a,
                                    openingTagName: e3(i.name)
                                })
                            }
                            if (e2(i) ? (t.openingFragment = i,
                            t.closingFragment = a) : (t.openingElement = i,
                            t.closingElement = a),
                            t.children = s,
                            this.match(47))
                                throw this.raise(e0.UnwrappedAdjacentJSXElements, {
                                    at: this.state.startLoc
                                });
                            return e2(i) ? this.finishNode(t, "JSXFragment") : this.finishNode(t, "JSXElement")
                        }
                        jsxParseElement() {
                            let e = this.state.startLoc;
                            return this.next(),
                            this.jsxParseElementAt(e)
                        }
                        setContext(e) {
                            let {context: t} = this.state;
                            t[t.length - 1] = e
                        }
                        parseExprAtom(e) {
                            return this.match(139) ? this.parseLiteral(this.state.value, "JSXText") : this.match(140) ? this.jsxParseElement() : this.match(47) && 33 !== this.input.charCodeAt(this.state.pos) ? (this.replaceToken(140),
                            this.jsxParseElement()) : super.parseExprAtom(e)
                        }
                        skipSpace() {
                            this.curContext().preserveSpace || super.skipSpace()
                        }
                        getTokenFromCode(e) {
                            let t = this.curContext();
                            if (t === r.j_expr) {
                                this.jsxReadToken();
                                return
                            }
                            if (t === r.j_oTag || t === r.j_cTag) {
                                if (Y(e)) {
                                    this.jsxReadWord();
                                    return
                                }
                                if (62 === e) {
                                    ++this.state.pos,
                                    this.finishToken(141);
                                    return
                                }
                                if ((34 === e || 39 === e) && t === r.j_oTag) {
                                    this.jsxReadString(e);
                                    return
                                }
                            }
                            if (60 === e && this.state.canStartJSXElement && 33 !== this.input.charCodeAt(this.state.pos + 1)) {
                                ++this.state.pos,
                                this.finishToken(140);
                                return
                            }
                            super.getTokenFromCode(e)
                        }
                        updateContext(e) {
                            let {context: t, type: s} = this.state;
                            if (56 === s && 140 === e)
                                t.splice(-2, 2, r.j_cTag),
                                this.state.canStartJSXElement = !1;
                            else if (140 === s)
                                t.push(r.j_oTag);
                            else if (141 === s) {
                                let s = t[t.length - 1];
                                s === r.j_oTag && 56 === e || s === r.j_cTag ? (t.pop(),
                                this.state.canStartJSXElement = t[t.length - 1] === r.j_expr) : (this.setContext(r.j_expr),
                                this.state.canStartJSXElement = !0)
                            } else
                                this.state.canStartJSXElement = d[s]
                        }
                    }
                      , e8 = class extends eo {
                        constructor() {
                            super(...arguments),
                            this.types = new Set,
                            this.enums = new Set,
                            this.constEnums = new Set,
                            this.classes = new Set,
                            this.exportOnlyBindings = new Set
                        }
                    }
                      , e5 = class extends eh {
                        constructor() {
                            super(...arguments),
                            this.importsStack = []
                        }
                        createScope(e) {
                            return this.importsStack.push(new Set),
                            new e8(e)
                        }
                        enter(e) {
                            256 == e && this.importsStack.push(new Set),
                            super.enter(e)
                        }
                        exit() {
                            let e = super.exit();
                            return 256 == e && this.importsStack.pop(),
                            e
                        }
                        hasImport(e, t) {
                            let s = this.importsStack.length;
                            if (this.importsStack[s - 1].has(e))
                                return !0;
                            if (!t && s > 1) {
                                for (let t = 0; t < s - 1; t++)
                                    if (this.importsStack[t].has(e))
                                        return !0
                            }
                            return !1
                        }
                        declareName(e, t, s) {
                            if (4096 & t) {
                                this.hasImport(e, !0) && this.parser.raise(U.VarRedeclaration, {
                                    at: s,
                                    identifierName: e
                                }),
                                this.importsStack[this.importsStack.length - 1].add(e);
                                return
                            }
                            let r = this.currentScope();
                            if (1024 & t) {
                                this.maybeExportDefined(r, e),
                                r.exportOnlyBindings.add(e);
                                return
                            }
                            super.declareName(e, t, s),
                            2 & t && (1 & t || (this.checkRedeclarationInScope(r, e, t, s),
                            this.maybeExportDefined(r, e)),
                            r.types.add(e)),
                            256 & t && r.enums.add(e),
                            512 & t && r.constEnums.add(e),
                            128 & t && r.classes.add(e)
                        }
                        isRedeclaredInScope(e, t, s) {
                            return e.enums.has(t) ? !(256 & s) || !!(512 & s) !== e.constEnums.has(t) : 128 & s && e.classes.has(t) ? !!e.lexical.has(t) && !!(1 & s) : !!(2 & s && e.types.has(t)) || super.isRedeclaredInScope(e, t, s)
                        }
                        checkLocalExport(e) {
                            let {name: t} = e;
                            if (this.hasImport(t))
                                return;
                            let s = this.scopeStack.length;
                            for (let e = s - 1; e >= 0; e--) {
                                let s = this.scopeStack[e];
                                if (s.types.has(t) || s.exportOnlyBindings.has(t))
                                    return
                            }
                            super.checkLocalExport(e)
                        }
                    }
                      , e6 = (e,t)=>Object.hasOwnProperty.call(e, t) && e[t]
                      , e7 = e=>"ParenthesizedExpression" === e.type ? e7(e.expression) : e
                      , e9 = class extends eK {
                        toAssignable(e) {
                            var t, s, r;
                            let i, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            switch (("ParenthesizedExpression" === e.type || null != (t = e.extra) && t.parenthesized) && (i = e7(e),
                            a ? "Identifier" === i.type ? this.expressionScope.recordArrowParameterBindingError(U.InvalidParenthesizedAssignment, {
                                at: e
                            }) : "MemberExpression" !== i.type && this.raise(U.InvalidParenthesizedAssignment, {
                                at: e
                            }) : this.raise(U.InvalidParenthesizedAssignment, {
                                at: e
                            })),
                            e.type) {
                            case "Identifier":
                            case "ObjectPattern":
                            case "ArrayPattern":
                            case "AssignmentPattern":
                            case "RestElement":
                                break;
                            case "ObjectExpression":
                                e.type = "ObjectPattern";
                                for (let t = 0, s = e.properties.length, i = s - 1; t < s; t++) {
                                    let s = e.properties[t]
                                      , n = t === i;
                                    this.toAssignableObjectExpressionProp(s, n, a),
                                    n && "RestElement" === s.type && null != (r = e.extra) && r.trailingCommaLoc && this.raise(U.RestTrailingComma, {
                                        at: e.extra.trailingCommaLoc
                                    })
                                }
                                break;
                            case "ObjectProperty":
                                {
                                    let {key: t, value: s} = e;
                                    this.isPrivateName(t) && this.classScope.usePrivateName(this.getPrivateNameSV(t), t.loc.start),
                                    this.toAssignable(s, a);
                                    break
                                }
                            case "SpreadElement":
                                throw Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
                            case "ArrayExpression":
                                e.type = "ArrayPattern",
                                this.toAssignableList(e.elements, null == (s = e.extra) ? void 0 : s.trailingCommaLoc, a);
                                break;
                            case "AssignmentExpression":
                                "=" !== e.operator && this.raise(U.MissingEqInAssignment, {
                                    at: e.left.loc.end
                                }),
                                e.type = "AssignmentPattern",
                                delete e.operator,
                                this.toAssignable(e.left, a);
                                break;
                            case "ParenthesizedExpression":
                                this.toAssignable(i, a)
                            }
                        }
                        toAssignableObjectExpressionProp(e, t, s) {
                            if ("ObjectMethod" === e.type)
                                this.raise("get" === e.kind || "set" === e.kind ? U.PatternHasAccessor : U.PatternHasMethod, {
                                    at: e.key
                                });
                            else if ("SpreadElement" === e.type) {
                                e.type = "RestElement";
                                let r = e.argument;
                                this.checkToRestConversion(r, !1),
                                this.toAssignable(r, s),
                                t || this.raise(U.RestTrailingComma, {
                                    at: e
                                })
                            } else
                                this.toAssignable(e, s)
                        }
                        toAssignableList(e, t, s) {
                            let r = e.length - 1;
                            for (let i = 0; i <= r; i++) {
                                let a = e[i];
                                if (a) {
                                    if ("SpreadElement" === a.type) {
                                        a.type = "RestElement";
                                        let e = a.argument;
                                        this.checkToRestConversion(e, !0),
                                        this.toAssignable(e, s)
                                    } else
                                        this.toAssignable(a, s);
                                    "RestElement" === a.type && (i < r ? this.raise(U.RestTrailingComma, {
                                        at: a
                                    }) : t && this.raise(U.RestTrailingComma, {
                                        at: t
                                    }))
                                }
                            }
                        }
                        isAssignable(e, t) {
                            switch (e.type) {
                            case "Identifier":
                            case "ObjectPattern":
                            case "ArrayPattern":
                            case "AssignmentPattern":
                            case "RestElement":
                                return !0;
                            case "ObjectExpression":
                                {
                                    let t = e.properties.length - 1;
                                    return e.properties.every((e,s)=>"ObjectMethod" !== e.type && (s === t || "SpreadElement" !== e.type) && this.isAssignable(e))
                                }
                            case "ObjectProperty":
                                return this.isAssignable(e.value);
                            case "SpreadElement":
                                return this.isAssignable(e.argument);
                            case "ArrayExpression":
                                return e.elements.every(e=>null === e || this.isAssignable(e));
                            case "AssignmentExpression":
                                return "=" === e.operator;
                            case "ParenthesizedExpression":
                                return this.isAssignable(e.expression);
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                                return !t;
                            default:
                                return !1
                            }
                        }
                        toReferencedList(e, t) {
                            return e
                        }
                        toReferencedListDeep(e, t) {
                            for (let s of (this.toReferencedList(e, t),
                            e))
                                (null == s ? void 0 : s.type) === "ArrayExpression" && this.toReferencedListDeep(s.elements)
                        }
                        parseSpread(e) {
                            let t = this.startNode();
                            return this.next(),
                            t.argument = this.parseMaybeAssignAllowIn(e, void 0),
                            this.finishNode(t, "SpreadElement")
                        }
                        parseRestBinding() {
                            let e = this.startNode();
                            return this.next(),
                            e.argument = this.parseBindingAtom(),
                            this.finishNode(e, "RestElement")
                        }
                        parseBindingAtom() {
                            switch (this.state.type) {
                            case 0:
                                {
                                    let e = this.startNode();
                                    return this.next(),
                                    e.elements = this.parseBindingList(3, 93, 1),
                                    this.finishNode(e, "ArrayPattern")
                                }
                            case 5:
                                return this.parseObjectLike(8, !0)
                            }
                            return this.parseIdentifier()
                        }
                        parseBindingList(e, t, s) {
                            let r = 1 & s
                              , i = []
                              , a = !0;
                            for (; !this.eat(e); )
                                if (a ? a = !1 : this.expect(12),
                                r && this.match(12))
                                    i.push(null);
                                else {
                                    if (this.eat(e))
                                        break;
                                    if (this.match(21)) {
                                        if (i.push(this.parseAssignableListItemTypes(this.parseRestBinding(), s)),
                                        !this.checkCommaAfterRest(t)) {
                                            this.expect(e);
                                            break
                                        }
                                    } else {
                                        let e = [];
                                        for (this.match(26) && this.hasPlugin("decorators") && this.raise(U.UnsupportedParameterDecorator, {
                                            at: this.state.startLoc
                                        }); this.match(26); )
                                            e.push(this.parseDecorator());
                                        i.push(this.parseAssignableListItem(s, e))
                                    }
                                }
                            return i
                        }
                        parseBindingRestProperty(e) {
                            return this.next(),
                            e.argument = this.parseIdentifier(),
                            this.checkCommaAfterRest(125),
                            this.finishNode(e, "RestElement")
                        }
                        parseBindingProperty() {
                            let e = this.startNode()
                              , {type: t, startLoc: s} = this.state;
                            return 21 === t ? this.parseBindingRestProperty(e) : (136 === t ? (this.expectPlugin("destructuringPrivate", s),
                            this.classScope.usePrivateName(this.state.value, s),
                            e.key = this.parsePrivateName()) : this.parsePropertyName(e),
                            e.method = !1,
                            this.parseObjPropValue(e, s, !1, !1, !0, !1))
                        }
                        parseAssignableListItem(e, t) {
                            let s = this.parseMaybeDefault();
                            this.parseAssignableListItemTypes(s, e);
                            let r = this.parseMaybeDefault(s.loc.start, s);
                            return t.length && (s.decorators = t),
                            r
                        }
                        parseAssignableListItemTypes(e, t) {
                            return e
                        }
                        parseMaybeDefault(e, t) {
                            var s;
                            if (null != e || (e = this.state.startLoc),
                            t = null != (s = t) ? s : this.parseBindingAtom(),
                            !this.eat(29))
                                return t;
                            let r = this.startNodeAt(e);
                            return r.left = t,
                            r.right = this.parseMaybeAssignAllowIn(),
                            this.finishNode(r, "AssignmentPattern")
                        }
                        isValidLVal(e, t, s) {
                            return e6({
                                AssignmentPattern: "left",
                                RestElement: "argument",
                                ObjectProperty: "value",
                                ParenthesizedExpression: "expression",
                                ArrayPattern: "elements",
                                ObjectPattern: "properties"
                            }, e)
                        }
                        checkLVal(e, t) {
                            var s;
                            let {in: r, binding: i=64, checkClashes: a=!1, strictModeChanged: n=!1, hasParenthesizedAncestor: o=!1} = t
                              , h = e.type;
                            if (this.isObjectMethod(e))
                                return;
                            if ("MemberExpression" === h) {
                                64 !== i && this.raise(U.InvalidPropertyBindingPattern, {
                                    at: e
                                });
                                return
                            }
                            if ("Identifier" === h) {
                                this.checkIdentifier(e, i, n);
                                let {name: t} = e;
                                a && (a.has(t) ? this.raise(U.ParamDupe, {
                                    at: e
                                }) : a.add(t));
                                return
                            }
                            let l = this.isValidLVal(h, !(o || null != (s = e.extra) && s.parenthesized) && "AssignmentExpression" === r.type, i);
                            if (!0 === l)
                                return;
                            if (!1 === l) {
                                let t = 64 === i ? U.InvalidLhs : U.InvalidLhsBinding;
                                this.raise(t, {
                                    at: e,
                                    ancestor: r
                                });
                                return
                            }
                            let[p,c] = Array.isArray(l) ? l : [l, "ParenthesizedExpression" === h]
                              , u = "ArrayPattern" === h || "ObjectPattern" === h || "ParenthesizedExpression" === h ? {
                                type: h
                            } : r;
                            for (let t of [].concat(e[p]))
                                t && this.checkLVal(t, {
                                    in: u,
                                    binding: i,
                                    checkClashes: a,
                                    strictModeChanged: n,
                                    hasParenthesizedAncestor: c
                                })
                        }
                        checkIdentifier(e, t) {
                            var s;
                            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            this.state.strict && (r ? ea(e.name, this.inModule) : (s = e.name,
                            es.has(s))) && (64 === t ? this.raise(U.StrictEvalArguments, {
                                at: e,
                                referenceName: e.name
                            }) : this.raise(U.StrictEvalArgumentsBinding, {
                                at: e,
                                bindingName: e.name
                            })),
                            8192 & t && "let" === e.name && this.raise(U.LetInLexicalBinding, {
                                at: e
                            }),
                            64 & t || this.declareNameFromIdentifier(e, t)
                        }
                        declareNameFromIdentifier(e, t) {
                            this.scope.declareName(e.name, t, e.loc.start)
                        }
                        checkToRestConversion(e, t) {
                            switch (e.type) {
                            case "ParenthesizedExpression":
                                this.checkToRestConversion(e.expression, t);
                                break;
                            case "Identifier":
                            case "MemberExpression":
                                break;
                            case "ArrayExpression":
                            case "ObjectExpression":
                                if (t)
                                    break;
                            default:
                                this.raise(U.InvalidRestAssignmentPattern, {
                                    at: e
                                })
                            }
                        }
                        checkCommaAfterRest(e) {
                            return !!this.match(12) && (this.raise(this.lookaheadCharCode() === e ? U.RestTrailingComma : U.ElementAfterRest, {
                                at: this.state.startLoc
                            }),
                            !0)
                        }
                    }
                      , te = (e,t)=>Object.hasOwnProperty.call(e, t) && e[t];
                    function tt(e) {
                        if (!e)
                            throw Error("Assert fail")
                    }
                    var ts = R`typescript`({
                        AbstractMethodHasImplementation: e=>{
                            let {methodName: t} = e;
                            return `Method '${t}' cannot have an implementation because it is marked abstract.`
                        }
                        ,
                        AbstractPropertyHasInitializer: e=>{
                            let {propertyName: t} = e;
                            return `Property '${t}' cannot have an initializer because it is marked abstract.`
                        }
                        ,
                        AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
                        AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
                        AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
                        ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
                        ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
                        ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
                        ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
                        DeclareAccessor: e=>{
                            let {kind: t} = e;
                            return `'declare' is not allowed in ${t}ters.`
                        }
                        ,
                        DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
                        DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
                        DuplicateAccessibilityModifier: e=>{
                            let {modifier: t} = e;
                            return "Accessibility modifier already seen."
                        }
                        ,
                        DuplicateModifier: e=>{
                            let {modifier: t} = e;
                            return `Duplicate modifier: '${t}'.`
                        }
                        ,
                        EmptyHeritageClauseType: e=>{
                            let {token: t} = e;
                            return `'${t}' list cannot be empty.`
                        }
                        ,
                        EmptyTypeArguments: "Type argument list cannot be empty.",
                        EmptyTypeParameters: "Type parameter list cannot be empty.",
                        ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
                        ImportAliasHasImportType: "An import alias can not use 'import type'.",
                        ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
                        IncompatibleModifiers: e=>{
                            let {modifiers: t} = e;
                            return `'${t[0]}' modifier cannot be used with '${t[1]}' modifier.`
                        }
                        ,
                        IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
                        IndexSignatureHasAccessibility: e=>{
                            let {modifier: t} = e;
                            return `Index signatures cannot have an accessibility modifier ('${t}').`
                        }
                        ,
                        IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
                        IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
                        IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
                        InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
                        InvalidModifierOnTypeMember: e=>{
                            let {modifier: t} = e;
                            return `'${t}' modifier cannot appear on a type member.`
                        }
                        ,
                        InvalidModifierOnTypeParameter: e=>{
                            let {modifier: t} = e;
                            return `'${t}' modifier cannot appear on a type parameter.`
                        }
                        ,
                        InvalidModifierOnTypeParameterPositions: e=>{
                            let {modifier: t} = e;
                            return `'${t}' modifier can only appear on a type parameter of a class, interface or type alias.`
                        }
                        ,
                        InvalidModifiersOrder: e=>{
                            let {orderedModifiers: t} = e;
                            return `'${t[0]}' modifier must precede '${t[1]}' modifier.`
                        }
                        ,
                        InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
                        InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
                        MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
                        MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
                        NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
                        NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
                        OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
                        OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
                        PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
                        PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
                        PrivateElementHasAccessibility: e=>{
                            let {modifier: t} = e;
                            return `Private elements cannot have an accessibility modifier ('${t}').`
                        }
                        ,
                        ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
                        ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
                        ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
                        SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
                        SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
                        SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
                        SingleTypeParameterWithoutTrailingComma: e=>{
                            let {typeParameterName: t} = e;
                            return `Single type parameter ${t} should have a trailing comma. Example usage: <${t},>.`
                        }
                        ,
                        StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
                        TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
                        TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
                        TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
                        TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
                        TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
                        UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
                        UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
                        UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
                        UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
                        UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
                        UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
                        UnsupportedSignatureParameterKind: e=>{
                            let {type: t} = e;
                            return `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${t}.`
                        }
                    });
                    function tr(e) {
                        return "private" === e || "public" === e || "protected" === e
                    }
                    var ti = e=>class extends e {
                        constructor() {
                            super(...arguments),
                            this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
                                allowedModifiers: ["in", "out"],
                                disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
                                errorTemplate: ts.InvalidModifierOnTypeParameter
                            }),
                            this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
                                allowedModifiers: ["const"],
                                disallowedModifiers: ["in", "out"],
                                errorTemplate: ts.InvalidModifierOnTypeParameterPositions
                            }),
                            this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
                                allowedModifiers: ["in", "out", "const"],
                                disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
                                errorTemplate: ts.InvalidModifierOnTypeParameter
                            })
                        }
                        getScopeHandler() {
                            return e5
                        }
                        tsIsIdentifier() {
                            return P(this.state.type)
                        }
                        tsTokenCanFollowModifier() {
                            return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(136) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak()
                        }
                        tsNextTokenCanFollowModifier() {
                            return this.next(),
                            this.tsTokenCanFollowModifier()
                        }
                        tsParseModifier(e, t) {
                            if (!P(this.state.type) && 58 !== this.state.type && 75 !== this.state.type)
                                return;
                            let s = this.state.value;
                            if (-1 !== e.indexOf(s)) {
                                if (t && this.tsIsStartOfStaticBlocks())
                                    return;
                                if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
                                    return s
                            }
                        }
                        tsParseModifiers(e, t) {
                            let {allowedModifiers: s, disallowedModifiers: r, stopOnStartOfClassStaticBlock: i, errorTemplate: a=ts.InvalidModifierOnTypeMember} = e
                              , n = (e,s,r,i)=>{
                                s === r && t[i] && this.raise(ts.InvalidModifiersOrder, {
                                    at: e,
                                    orderedModifiers: [r, i]
                                })
                            }
                              , o = (e,s,r,i)=>{
                                (t[r] && s === i || t[i] && s === r) && this.raise(ts.IncompatibleModifiers, {
                                    at: e,
                                    modifiers: [r, i]
                                })
                            }
                            ;
                            for (; ; ) {
                                let {startLoc: e} = this.state
                                  , h = this.tsParseModifier(s.concat(null != r ? r : []), i);
                                if (!h)
                                    break;
                                tr(h) ? t.accessibility ? this.raise(ts.DuplicateAccessibilityModifier, {
                                    at: e,
                                    modifier: h
                                }) : (n(e, h, h, "override"),
                                n(e, h, h, "static"),
                                n(e, h, h, "readonly"),
                                t.accessibility = h) : "in" === h || "out" === h ? (t[h] && this.raise(ts.DuplicateModifier, {
                                    at: e,
                                    modifier: h
                                }),
                                t[h] = !0,
                                n(e, h, "in", "out")) : (Object.hasOwnProperty.call(t, h) ? this.raise(ts.DuplicateModifier, {
                                    at: e,
                                    modifier: h
                                }) : (n(e, h, "static", "readonly"),
                                n(e, h, "static", "override"),
                                n(e, h, "override", "readonly"),
                                n(e, h, "abstract", "override"),
                                o(e, h, "declare", "override"),
                                o(e, h, "static", "abstract")),
                                t[h] = !0),
                                null != r && r.includes(h) && this.raise(a, {
                                    at: e,
                                    modifier: h
                                })
                            }
                        }
                        tsIsListTerminator(e) {
                            switch (e) {
                            case "EnumMembers":
                            case "TypeMembers":
                                return this.match(8);
                            case "HeritageClauseElement":
                                return this.match(5);
                            case "TupleElementTypes":
                                return this.match(3);
                            case "TypeParametersOrArguments":
                                return this.match(48)
                            }
                        }
                        tsParseList(e, t) {
                            let s = [];
                            for (; !this.tsIsListTerminator(e); )
                                s.push(t());
                            return s
                        }
                        tsParseDelimitedList(e, t, s) {
                            return function(e) {
                                if (null == e)
                                    throw Error(`Unexpected ${e} value.`);
                                return e
                            }(this.tsParseDelimitedListWorker(e, t, !0, s))
                        }
                        tsParseDelimitedListWorker(e, t, s, r) {
                            let i = []
                              , a = -1;
                            for (; !this.tsIsListTerminator(e); ) {
                                a = -1;
                                let r = t();
                                if (null == r)
                                    return;
                                if (i.push(r),
                                this.eat(12)) {
                                    a = this.state.lastTokStart;
                                    continue
                                }
                                if (this.tsIsListTerminator(e))
                                    break;
                                s && this.expect(12);
                                return
                            }
                            return r && (r.value = a),
                            i
                        }
                        tsParseBracketedList(e, t, s, r, i) {
                            r || (s ? this.expect(0) : this.expect(47));
                            let a = this.tsParseDelimitedList(e, t, i);
                            return s ? this.expect(3) : this.expect(48),
                            a
                        }
                        tsParseImportType() {
                            let e = this.startNode();
                            return this.expect(83),
                            this.expect(10),
                            this.match(131) || this.raise(ts.UnsupportedImportTypeArgument, {
                                at: this.state.startLoc
                            }),
                            e.argument = super.parseExprAtom(),
                            this.expect(11),
                            this.eat(16) && (e.qualifier = this.tsParseEntityName()),
                            this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
                            this.finishNode(e, "TSImportType")
                        }
                        tsParseEntityName() {
                            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                              , t = this.parseIdentifier(e);
                            for (; this.eat(16); ) {
                                let s = this.startNodeAtNode(t);
                                s.left = t,
                                s.right = this.parseIdentifier(e),
                                t = this.finishNode(s, "TSQualifiedName")
                            }
                            return t
                        }
                        tsParseTypeReference() {
                            let e = this.startNode();
                            return e.typeName = this.tsParseEntityName(),
                            !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
                            this.finishNode(e, "TSTypeReference")
                        }
                        tsParseThisTypePredicate(e) {
                            this.next();
                            let t = this.startNodeAtNode(e);
                            return t.parameterName = e,
                            t.typeAnnotation = this.tsParseTypeAnnotation(!1),
                            t.asserts = !1,
                            this.finishNode(t, "TSTypePredicate")
                        }
                        tsParseThisTypeNode() {
                            let e = this.startNode();
                            return this.next(),
                            this.finishNode(e, "TSThisType")
                        }
                        tsParseTypeQuery() {
                            let e = this.startNode();
                            return this.expect(87),
                            this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(),
                            !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
                            this.finishNode(e, "TSTypeQuery")
                        }
                        tsParseTypeParameter(e) {
                            let t = this.startNode();
                            return e(t),
                            t.name = this.tsParseTypeParameterName(),
                            t.constraint = this.tsEatThenParseType(81),
                            t.default = this.tsEatThenParseType(29),
                            this.finishNode(t, "TSTypeParameter")
                        }
                        tsTryParseTypeParameters(e) {
                            if (this.match(47))
                                return this.tsParseTypeParameters(e)
                        }
                        tsParseTypeParameters(e) {
                            let t = this.startNode();
                            this.match(47) || this.match(140) ? this.next() : this.unexpected();
                            let s = {
                                value: -1
                            };
                            return t.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, s),
                            0 === t.params.length && this.raise(ts.EmptyTypeParameters, {
                                at: t
                            }),
                            -1 !== s.value && this.addExtra(t, "trailingComma", s.value),
                            this.finishNode(t, "TSTypeParameterDeclaration")
                        }
                        tsFillSignature(e, t) {
                            let s = "typeAnnotation";
                            t.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier),
                            this.expect(10),
                            t.parameters = this.tsParseBindingListForSignature(),
                            19 === e ? t[s] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (t[s] = this.tsParseTypeOrTypePredicateAnnotation(e))
                        }
                        tsParseBindingListForSignature() {
                            return super.parseBindingList(11, 41, 2).map(e=>("Identifier" !== e.type && "RestElement" !== e.type && "ObjectPattern" !== e.type && "ArrayPattern" !== e.type && this.raise(ts.UnsupportedSignatureParameterKind, {
                                at: e,
                                type: e.type
                            }),
                            e))
                        }
                        tsParseTypeMemberSemicolon() {
                            this.eat(12) || this.isLineTerminator() || this.expect(13)
                        }
                        tsParseSignatureMember(e, t) {
                            return this.tsFillSignature(14, t),
                            this.tsParseTypeMemberSemicolon(),
                            this.finishNode(t, e)
                        }
                        tsIsUnambiguouslyIndexSignature() {
                            return this.next(),
                            !!P(this.state.type) && (this.next(),
                            this.match(14))
                        }
                        tsTryParseIndexSignature(e) {
                            if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
                                return;
                            this.expect(0);
                            let t = this.parseIdentifier();
                            t.typeAnnotation = this.tsParseTypeAnnotation(),
                            this.resetEndLocation(t),
                            this.expect(3),
                            e.parameters = [t];
                            let s = this.tsTryParseTypeAnnotation();
                            return s && (e.typeAnnotation = s),
                            this.tsParseTypeMemberSemicolon(),
                            this.finishNode(e, "TSIndexSignature")
                        }
                        tsParsePropertyOrMethodSignature(e, t) {
                            if (this.eat(17) && (e.optional = !0),
                            this.match(10) || this.match(47)) {
                                t && this.raise(ts.ReadonlyForMethodSignature, {
                                    at: e
                                });
                                let s = e;
                                s.kind && this.match(47) && this.raise(ts.AccesorCannotHaveTypeParameters, {
                                    at: this.state.curPosition()
                                }),
                                this.tsFillSignature(14, s),
                                this.tsParseTypeMemberSemicolon();
                                let r = "parameters"
                                  , i = "typeAnnotation";
                                if ("get" === s.kind)
                                    s[r].length > 0 && (this.raise(U.BadGetterArity, {
                                        at: this.state.curPosition()
                                    }),
                                    this.isThisParam(s[r][0]) && this.raise(ts.AccesorCannotDeclareThisParameter, {
                                        at: this.state.curPosition()
                                    }));
                                else if ("set" === s.kind) {
                                    if (1 !== s[r].length)
                                        this.raise(U.BadSetterArity, {
                                            at: this.state.curPosition()
                                        });
                                    else {
                                        let e = s[r][0];
                                        this.isThisParam(e) && this.raise(ts.AccesorCannotDeclareThisParameter, {
                                            at: this.state.curPosition()
                                        }),
                                        "Identifier" === e.type && e.optional && this.raise(ts.SetAccesorCannotHaveOptionalParameter, {
                                            at: this.state.curPosition()
                                        }),
                                        "RestElement" === e.type && this.raise(ts.SetAccesorCannotHaveRestParameter, {
                                            at: this.state.curPosition()
                                        })
                                    }
                                    s[i] && this.raise(ts.SetAccesorCannotHaveReturnType, {
                                        at: s[i]
                                    })
                                } else
                                    s.kind = "method";
                                return this.finishNode(s, "TSMethodSignature")
                            }
                            {
                                let s = e;
                                t && (s.readonly = !0);
                                let r = this.tsTryParseTypeAnnotation();
                                return r && (s.typeAnnotation = r),
                                this.tsParseTypeMemberSemicolon(),
                                this.finishNode(s, "TSPropertySignature")
                            }
                        }
                        tsParseTypeMember() {
                            let e = this.startNode();
                            if (this.match(10) || this.match(47))
                                return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
                            if (this.match(77)) {
                                let t = this.startNode();
                                return this.next(),
                                this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(t, "new"),
                                this.tsParsePropertyOrMethodSignature(e, !1))
                            }
                            return this.tsParseModifiers({
                                allowedModifiers: ["readonly"],
                                disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
                            }, e),
                            this.tsTryParseIndexSignature(e) || (super.parsePropertyName(e),
                            !e.computed && "Identifier" === e.key.type && ("get" === e.key.name || "set" === e.key.name) && this.tsTokenCanFollowModifier() && (e.kind = e.key.name,
                            super.parsePropertyName(e)),
                            this.tsParsePropertyOrMethodSignature(e, !!e.readonly))
                        }
                        tsParseTypeLiteral() {
                            let e = this.startNode();
                            return e.members = this.tsParseObjectTypeMembers(),
                            this.finishNode(e, "TSTypeLiteral")
                        }
                        tsParseObjectTypeMembers() {
                            this.expect(5);
                            let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
                            return this.expect(8),
                            e
                        }
                        tsIsStartOfMappedType() {
                            return this.next(),
                            this.eat(53) ? this.isContextual(120) : (this.isContextual(120) && this.next(),
                            !!(this.match(0) && (this.next(),
                            this.tsIsIdentifier())) && (this.next(),
                            this.match(58)))
                        }
                        tsParseMappedTypeParameter() {
                            let e = this.startNode();
                            return e.name = this.tsParseTypeParameterName(),
                            e.constraint = this.tsExpectThenParseType(58),
                            this.finishNode(e, "TSTypeParameter")
                        }
                        tsParseMappedType() {
                            let e = this.startNode();
                            return this.expect(5),
                            this.match(53) ? (e.readonly = this.state.value,
                            this.next(),
                            this.expectContextual(120)) : this.eatContextual(120) && (e.readonly = !0),
                            this.expect(0),
                            e.typeParameter = this.tsParseMappedTypeParameter(),
                            e.nameType = this.eatContextual(93) ? this.tsParseType() : null,
                            this.expect(3),
                            this.match(53) ? (e.optional = this.state.value,
                            this.next(),
                            this.expect(17)) : this.eat(17) && (e.optional = !0),
                            e.typeAnnotation = this.tsTryParseType(),
                            this.semicolon(),
                            this.expect(8),
                            this.finishNode(e, "TSMappedType")
                        }
                        tsParseTupleType() {
                            let e = this.startNode();
                            e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
                            let t = !1
                              , s = null;
                            return e.elementTypes.forEach(e=>{
                                let {type: r} = e;
                                t && "TSRestType" !== r && "TSOptionalType" !== r && !("TSNamedTupleMember" === r && e.optional) && this.raise(ts.OptionalTypeBeforeRequired, {
                                    at: e
                                }),
                                t || (t = "TSNamedTupleMember" === r && e.optional || "TSOptionalType" === r);
                                let i = r;
                                "TSRestType" === r && (i = (e = e.typeAnnotation).type);
                                let a = "TSNamedTupleMember" === i;
                                null != s || (s = a),
                                s !== a && this.raise(ts.MixedLabeledAndUnlabeledElements, {
                                    at: e
                                })
                            }
                            ),
                            this.finishNode(e, "TSTupleType")
                        }
                        tsParseTupleElementType() {
                            let {startLoc: e} = this.state, t = this.eat(21), s, r, i, a, n = b(this.state.type) ? this.lookaheadCharCode() : null;
                            if (58 === n)
                                s = !0,
                                i = !1,
                                r = this.parseIdentifier(!0),
                                this.expect(14),
                                a = this.tsParseType();
                            else if (63 === n) {
                                i = !0;
                                let e = this.state.startLoc
                                  , t = this.state.value
                                  , n = this.tsParseNonArrayType();
                                58 === this.lookaheadCharCode() ? (s = !0,
                                r = this.createIdentifier(this.startNodeAt(e), t),
                                this.expect(17),
                                this.expect(14),
                                a = this.tsParseType()) : (s = !1,
                                a = n,
                                this.expect(17))
                            } else
                                a = this.tsParseType(),
                                i = this.eat(17),
                                s = this.eat(14);
                            if (s) {
                                let e;
                                r ? ((e = this.startNodeAtNode(r)).optional = i,
                                e.label = r,
                                e.elementType = a,
                                this.eat(17) && (e.optional = !0,
                                this.raise(ts.TupleOptionalAfterType, {
                                    at: this.state.lastTokStartLoc
                                }))) : ((e = this.startNodeAtNode(a)).optional = i,
                                this.raise(ts.InvalidTupleMemberLabel, {
                                    at: a
                                }),
                                e.label = a,
                                e.elementType = this.tsParseType()),
                                a = this.finishNode(e, "TSNamedTupleMember")
                            } else if (i) {
                                let e = this.startNodeAtNode(a);
                                e.typeAnnotation = a,
                                a = this.finishNode(e, "TSOptionalType")
                            }
                            if (t) {
                                let t = this.startNodeAt(e);
                                t.typeAnnotation = a,
                                a = this.finishNode(t, "TSRestType")
                            }
                            return a
                        }
                        tsParseParenthesizedType() {
                            let e = this.startNode();
                            return this.expect(10),
                            e.typeAnnotation = this.tsParseType(),
                            this.expect(11),
                            this.finishNode(e, "TSParenthesizedType")
                        }
                        tsParseFunctionOrConstructorType(e, t) {
                            let s = this.startNode();
                            return "TSConstructorType" === e && (s.abstract = !!t,
                            t && this.next(),
                            this.next()),
                            this.tsInAllowConditionalTypesContext(()=>this.tsFillSignature(19, s)),
                            this.finishNode(s, e)
                        }
                        tsParseLiteralTypeNode() {
                            let e = this.startNode();
                            return e.literal = (()=>{
                                switch (this.state.type) {
                                case 132:
                                case 133:
                                case 131:
                                case 85:
                                case 86:
                                    return super.parseExprAtom();
                                default:
                                    this.unexpected()
                                }
                            }
                            )(),
                            this.finishNode(e, "TSLiteralType")
                        }
                        tsParseTemplateLiteralType() {
                            let e = this.startNode();
                            return e.literal = super.parseTemplate(!1),
                            this.finishNode(e, "TSLiteralType")
                        }
                        parseTemplateSubstitution() {
                            return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution()
                        }
                        tsParseThisTypeOrThisTypePredicate() {
                            let e = this.tsParseThisTypeNode();
                            return this.isContextual(114) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e
                        }
                        tsParseNonArrayType() {
                            switch (this.state.type) {
                            case 131:
                            case 132:
                            case 133:
                            case 85:
                            case 86:
                                return this.tsParseLiteralTypeNode();
                            case 53:
                                if ("-" === this.state.value) {
                                    let e = this.startNode()
                                      , t = this.lookahead();
                                    return 132 !== t.type && 133 !== t.type && this.unexpected(),
                                    e.literal = this.parseMaybeUnary(),
                                    this.finishNode(e, "TSLiteralType")
                                }
                                break;
                            case 78:
                                return this.tsParseThisTypeOrThisTypePredicate();
                            case 87:
                                return this.tsParseTypeQuery();
                            case 83:
                                return this.tsParseImportType();
                            case 5:
                                return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
                            case 0:
                                return this.tsParseTupleType();
                            case 10:
                                return this.tsParseParenthesizedType();
                            case 25:
                            case 24:
                                return this.tsParseTemplateLiteralType();
                            default:
                                {
                                    let {type: e} = this.state;
                                    if (P(e) || 88 === e || 84 === e) {
                                        let t = 88 === e ? "TSVoidKeyword" : 84 === e ? "TSNullKeyword" : function(e) {
                                            switch (e) {
                                            case "any":
                                                return "TSAnyKeyword";
                                            case "boolean":
                                                return "TSBooleanKeyword";
                                            case "bigint":
                                                return "TSBigIntKeyword";
                                            case "never":
                                                return "TSNeverKeyword";
                                            case "number":
                                                return "TSNumberKeyword";
                                            case "object":
                                                return "TSObjectKeyword";
                                            case "string":
                                                return "TSStringKeyword";
                                            case "symbol":
                                                return "TSSymbolKeyword";
                                            case "undefined":
                                                return "TSUndefinedKeyword";
                                            case "unknown":
                                                return "TSUnknownKeyword";
                                            default:
                                                return
                                            }
                                        }(this.state.value);
                                        if (void 0 !== t && 46 !== this.lookaheadCharCode()) {
                                            let e = this.startNode();
                                            return this.next(),
                                            this.finishNode(e, t)
                                        }
                                        return this.tsParseTypeReference()
                                    }
                                }
                            }
                            this.unexpected()
                        }
                        tsParseArrayTypeOrHigher() {
                            let e = this.tsParseNonArrayType();
                            for (; !this.hasPrecedingLineBreak() && this.eat(0); )
                                if (this.match(3)) {
                                    let t = this.startNodeAtNode(e);
                                    t.elementType = e,
                                    this.expect(3),
                                    e = this.finishNode(t, "TSArrayType")
                                } else {
                                    let t = this.startNodeAtNode(e);
                                    t.objectType = e,
                                    t.indexType = this.tsParseType(),
                                    this.expect(3),
                                    e = this.finishNode(t, "TSIndexedAccessType")
                                }
                            return e
                        }
                        tsParseTypeOperator() {
                            let e = this.startNode()
                              , t = this.state.value;
                            return this.next(),
                            e.operator = t,
                            e.typeAnnotation = this.tsParseTypeOperatorOrHigher(),
                            "readonly" === t && this.tsCheckTypeAnnotationForReadOnly(e),
                            this.finishNode(e, "TSTypeOperator")
                        }
                        tsCheckTypeAnnotationForReadOnly(e) {
                            switch (e.typeAnnotation.type) {
                            case "TSTupleType":
                            case "TSArrayType":
                                return;
                            default:
                                this.raise(ts.UnexpectedReadonly, {
                                    at: e
                                })
                            }
                        }
                        tsParseInferType() {
                            let e = this.startNode();
                            this.expectContextual(113);
                            let t = this.startNode();
                            return t.name = this.tsParseTypeParameterName(),
                            t.constraint = this.tsTryParse(()=>this.tsParseConstraintForInferType()),
                            e.typeParameter = this.finishNode(t, "TSTypeParameter"),
                            this.finishNode(e, "TSInferType")
                        }
                        tsParseConstraintForInferType() {
                            if (this.eat(81)) {
                                let e = this.tsInDisallowConditionalTypesContext(()=>this.tsParseType());
                                if (this.state.inDisallowConditionalTypesContext || !this.match(17))
                                    return e
                            }
                        }
                        tsParseTypeOperatorOrHigher() {
                            var e;
                            return (e = this.state.type) >= 119 && e <= 121 && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(113) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(()=>this.tsParseArrayTypeOrHigher())
                        }
                        tsParseUnionOrIntersectionType(e, t, s) {
                            let r = this.startNode()
                              , i = this.eat(s)
                              , a = [];
                            do
                                a.push(t());
                            while (this.eat(s));
                            return 1 !== a.length || i ? (r.types = a,
                            this.finishNode(r, e)) : a[0]
                        }
                        tsParseIntersectionTypeOrHigher() {
                            return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45)
                        }
                        tsParseUnionTypeOrHigher() {
                            return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43)
                        }
                        tsIsStartOfFunctionType() {
                            return !!this.match(47) || this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))
                        }
                        tsSkipParameterStart() {
                            if (P(this.state.type) || this.match(78))
                                return this.next(),
                                !0;
                            if (this.match(5)) {
                                let {errors: e} = this.state
                                  , t = e.length;
                                try {
                                    return this.parseObjectLike(8, !0),
                                    e.length === t
                                } catch {
                                    return !1
                                }
                            }
                            if (this.match(0)) {
                                this.next();
                                let {errors: e} = this.state
                                  , t = e.length;
                                try {
                                    return super.parseBindingList(3, 93, 1),
                                    e.length === t
                                } catch {}
                            }
                            return !1
                        }
                        tsIsUnambiguouslyStartOfFunctionType() {
                            return this.next(),
                            !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(),
                            this.match(19))))
                        }
                        tsParseTypeOrTypePredicateAnnotation(e) {
                            return this.tsInType(()=>{
                                let t = this.startNode();
                                this.expect(e);
                                let s = this.startNode()
                                  , r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
                                if (r && this.match(78)) {
                                    let e = this.tsParseThisTypeOrThisTypePredicate();
                                    return "TSThisType" === e.type ? (s.parameterName = e,
                                    s.asserts = !0,
                                    s.typeAnnotation = null,
                                    e = this.finishNode(s, "TSTypePredicate")) : (this.resetStartLocationFromNode(e, s),
                                    e.asserts = !0),
                                    t.typeAnnotation = e,
                                    this.finishNode(t, "TSTypeAnnotation")
                                }
                                let i = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
                                if (!i)
                                    return r ? (s.parameterName = this.parseIdentifier(),
                                    s.asserts = r,
                                    s.typeAnnotation = null,
                                    t.typeAnnotation = this.finishNode(s, "TSTypePredicate"),
                                    this.finishNode(t, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, t);
                                let a = this.tsParseTypeAnnotation(!1);
                                return s.parameterName = i,
                                s.typeAnnotation = a,
                                s.asserts = r,
                                t.typeAnnotation = this.finishNode(s, "TSTypePredicate"),
                                this.finishNode(t, "TSTypeAnnotation")
                            }
                            )
                        }
                        tsTryParseTypeOrTypePredicateAnnotation() {
                            return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0
                        }
                        tsTryParseTypeAnnotation() {
                            return this.match(14) ? this.tsParseTypeAnnotation() : void 0
                        }
                        tsTryParseType() {
                            return this.tsEatThenParseType(14)
                        }
                        tsParseTypePredicatePrefix() {
                            let e = this.parseIdentifier();
                            if (this.isContextual(114) && !this.hasPrecedingLineBreak())
                                return this.next(),
                                e
                        }
                        tsParseTypePredicateAsserts() {
                            if (107 !== this.state.type)
                                return !1;
                            let e = this.state.containsEsc;
                            return this.next(),
                            !!(P(this.state.type) || this.match(78)) && (e && this.raise(U.InvalidEscapedReservedWord, {
                                at: this.state.lastTokStartLoc,
                                reservedWord: "asserts"
                            }),
                            !0)
                        }
                        tsParseTypeAnnotation() {
                            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.startNode();
                            return this.tsInType(()=>{
                                e && this.expect(14),
                                t.typeAnnotation = this.tsParseType()
                            }
                            ),
                            this.finishNode(t, "TSTypeAnnotation")
                        }
                        tsParseType() {
                            tt(this.state.inType);
                            let e = this.tsParseNonConditionalType();
                            if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
                                return e;
                            let t = this.startNodeAtNode(e);
                            return t.checkType = e,
                            t.extendsType = this.tsInDisallowConditionalTypesContext(()=>this.tsParseNonConditionalType()),
                            this.expect(17),
                            t.trueType = this.tsInAllowConditionalTypesContext(()=>this.tsParseType()),
                            this.expect(14),
                            t.falseType = this.tsInAllowConditionalTypesContext(()=>this.tsParseType()),
                            this.finishNode(t, "TSConditionalType")
                        }
                        isAbstractConstructorSignature() {
                            return this.isContextual(122) && 77 === this.lookahead().type
                        }
                        tsParseNonConditionalType() {
                            return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher()
                        }
                        tsParseTypeAssertion() {
                            this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(ts.ReservedTypeAssertion, {
                                at: this.state.startLoc
                            });
                            let e = this.startNode();
                            return e.typeAnnotation = this.tsInType(()=>(this.next(),
                            this.match(75) ? this.tsParseTypeReference() : this.tsParseType())),
                            this.expect(48),
                            e.expression = this.parseMaybeUnary(),
                            this.finishNode(e, "TSTypeAssertion")
                        }
                        tsParseHeritageClause(e) {
                            let t = this.state.startLoc
                              , s = this.tsParseDelimitedList("HeritageClauseElement", ()=>{
                                let e = this.startNode();
                                return e.expression = this.tsParseEntityName(),
                                this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
                                this.finishNode(e, "TSExpressionWithTypeArguments")
                            }
                            );
                            return s.length || this.raise(ts.EmptyHeritageClauseType, {
                                at: t,
                                token: e
                            }),
                            s
                        }
                        tsParseInterfaceDeclaration(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.hasFollowingLineBreak())
                                return null;
                            this.expectContextual(127),
                            t.declare && (e.declare = !0),
                            P(this.state.type) ? (e.id = this.parseIdentifier(),
                            this.checkIdentifier(e.id, 130)) : (e.id = null,
                            this.raise(ts.MissingInterfaceName, {
                                at: this.state.startLoc
                            })),
                            e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers),
                            this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
                            let s = this.startNode();
                            return s.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)),
                            e.body = this.finishNode(s, "TSInterfaceBody"),
                            this.finishNode(e, "TSInterfaceDeclaration")
                        }
                        tsParseTypeAliasDeclaration(e) {
                            return e.id = this.parseIdentifier(),
                            this.checkIdentifier(e.id, 2),
                            e.typeAnnotation = this.tsInType(()=>{
                                if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers),
                                this.expect(29),
                                this.isContextual(112) && 16 !== this.lookahead().type) {
                                    let e = this.startNode();
                                    return this.next(),
                                    this.finishNode(e, "TSIntrinsicKeyword")
                                }
                                return this.tsParseType()
                            }
                            ),
                            this.semicolon(),
                            this.finishNode(e, "TSTypeAliasDeclaration")
                        }
                        tsInNoContext(e) {
                            let t = this.state.context;
                            this.state.context = [t[0]];
                            try {
                                return e()
                            } finally {
                                this.state.context = t
                            }
                        }
                        tsInType(e) {
                            let t = this.state.inType;
                            this.state.inType = !0;
                            try {
                                return e()
                            } finally {
                                this.state.inType = t
                            }
                        }
                        tsInDisallowConditionalTypesContext(e) {
                            let t = this.state.inDisallowConditionalTypesContext;
                            this.state.inDisallowConditionalTypesContext = !0;
                            try {
                                return e()
                            } finally {
                                this.state.inDisallowConditionalTypesContext = t
                            }
                        }
                        tsInAllowConditionalTypesContext(e) {
                            let t = this.state.inDisallowConditionalTypesContext;
                            this.state.inDisallowConditionalTypesContext = !1;
                            try {
                                return e()
                            } finally {
                                this.state.inDisallowConditionalTypesContext = t
                            }
                        }
                        tsEatThenParseType(e) {
                            return this.match(e) ? this.tsNextThenParseType() : void 0
                        }
                        tsExpectThenParseType(e) {
                            return this.tsDoThenParseType(()=>this.expect(e))
                        }
                        tsNextThenParseType() {
                            return this.tsDoThenParseType(()=>this.next())
                        }
                        tsDoThenParseType(e) {
                            return this.tsInType(()=>(e(),
                            this.tsParseType()))
                        }
                        tsParseEnumMember() {
                            let e = this.startNode();
                            return e.id = this.match(131) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0),
                            this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()),
                            this.finishNode(e, "TSEnumMember")
                        }
                        tsParseEnumDeclaration(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return t.const && (e.const = !0),
                            t.declare && (e.declare = !0),
                            this.expectContextual(124),
                            e.id = this.parseIdentifier(),
                            this.checkIdentifier(e.id, e.const ? 8971 : 8459),
                            this.expect(5),
                            e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)),
                            this.expect(8),
                            this.finishNode(e, "TSEnumDeclaration")
                        }
                        tsParseModuleBlock() {
                            let e = this.startNode();
                            return this.scope.enter(0),
                            this.expect(5),
                            super.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8),
                            this.scope.exit(),
                            this.finishNode(e, "TSModuleBlock")
                        }
                        tsParseModuleOrNamespaceDeclaration(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.id = this.parseIdentifier(),
                            t || this.checkIdentifier(e.id, 1024),
                            this.eat(16)) {
                                let t = this.startNode();
                                this.tsParseModuleOrNamespaceDeclaration(t, !0),
                                e.body = t
                            } else
                                this.scope.enter(256),
                                this.prodParam.enter(0),
                                e.body = this.tsParseModuleBlock(),
                                this.prodParam.exit(),
                                this.scope.exit();
                            return this.finishNode(e, "TSModuleDeclaration")
                        }
                        tsParseAmbientExternalModuleDeclaration(e) {
                            return this.isContextual(110) ? (e.global = !0,
                            e.id = this.parseIdentifier()) : this.match(131) ? e.id = super.parseStringLiteral(this.state.value) : this.unexpected(),
                            this.match(5) ? (this.scope.enter(256),
                            this.prodParam.enter(0),
                            e.body = this.tsParseModuleBlock(),
                            this.prodParam.exit(),
                            this.scope.exit()) : this.semicolon(),
                            this.finishNode(e, "TSModuleDeclaration")
                        }
                        tsParseImportEqualsDeclaration(e, t) {
                            e.isExport = t || !1,
                            e.id = this.parseIdentifier(),
                            this.checkIdentifier(e.id, 4096),
                            this.expect(29);
                            let s = this.tsParseModuleReference();
                            return "type" === e.importKind && "TSExternalModuleReference" !== s.type && this.raise(ts.ImportAliasHasImportType, {
                                at: s
                            }),
                            e.moduleReference = s,
                            this.semicolon(),
                            this.finishNode(e, "TSImportEqualsDeclaration")
                        }
                        tsIsExternalModuleReference() {
                            return this.isContextual(117) && 40 === this.lookaheadCharCode()
                        }
                        tsParseModuleReference() {
                            return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1)
                        }
                        tsParseExternalModuleReference() {
                            let e = this.startNode();
                            return this.expectContextual(117),
                            this.expect(10),
                            this.match(131) || this.unexpected(),
                            e.expression = super.parseExprAtom(),
                            this.expect(11),
                            this.finishNode(e, "TSExternalModuleReference")
                        }
                        tsLookAhead(e) {
                            let t = this.state.clone()
                              , s = e();
                            return this.state = t,
                            s
                        }
                        tsTryParseAndCatch(e) {
                            let t = this.tryParse(t=>e() || t());
                            if (!(t.aborted || !t.node))
                                return t.error && (this.state = t.failState),
                                t.node
                        }
                        tsTryParse(e) {
                            let t = this.state.clone()
                              , s = e();
                            if (void 0 !== s && !1 !== s)
                                return s;
                            this.state = t
                        }
                        tsTryParseDeclare(e) {
                            if (this.isLineTerminator())
                                return;
                            let t = this.state.type, s;
                            return this.isContextual(99) && (t = 74,
                            s = "let"),
                            this.tsInAmbientContext(()=>{
                                if (68 === t)
                                    return e.declare = !0,
                                    super.parseFunctionStatement(e, !1, !1);
                                if (80 === t)
                                    return e.declare = !0,
                                    this.parseClass(e, !0, !1);
                                if (124 === t)
                                    return this.tsParseEnumDeclaration(e, {
                                        declare: !0
                                    });
                                if (110 === t)
                                    return this.tsParseAmbientExternalModuleDeclaration(e);
                                if (75 === t || 74 === t)
                                    return this.match(75) && this.isLookaheadContextual("enum") ? (this.expect(75),
                                    this.tsParseEnumDeclaration(e, {
                                        const: !0,
                                        declare: !0
                                    })) : (e.declare = !0,
                                    this.parseVarStatement(e, s || this.state.value, !0));
                                if (127 === t) {
                                    let t = this.tsParseInterfaceDeclaration(e, {
                                        declare: !0
                                    });
                                    if (t)
                                        return t
                                }
                                if (P(t))
                                    return this.tsParseDeclaration(e, this.state.value, !0, null)
                            }
                            )
                        }
                        tsTryParseExportDeclaration() {
                            return this.tsParseDeclaration(this.startNode(), this.state.value, !0, null)
                        }
                        tsParseExpressionStatement(e, t, s) {
                            switch (t.name) {
                            case "declare":
                                {
                                    let t = this.tsTryParseDeclare(e);
                                    if (t)
                                        return t.declare = !0,
                                        t;
                                    break
                                }
                            case "global":
                                if (this.match(5)) {
                                    this.scope.enter(256),
                                    this.prodParam.enter(0);
                                    let s = e;
                                    return s.global = !0,
                                    s.id = t,
                                    s.body = this.tsParseModuleBlock(),
                                    this.scope.exit(),
                                    this.prodParam.exit(),
                                    this.finishNode(s, "TSModuleDeclaration")
                                }
                                break;
                            default:
                                return this.tsParseDeclaration(e, t.name, !1, s)
                            }
                        }
                        tsParseDeclaration(e, t, s, r) {
                            switch (t) {
                            case "abstract":
                                if (this.tsCheckLineTerminator(s) && (this.match(80) || P(this.state.type)))
                                    return this.tsParseAbstractDeclaration(e, r);
                                break;
                            case "module":
                                if (this.tsCheckLineTerminator(s)) {
                                    if (this.match(131))
                                        return this.tsParseAmbientExternalModuleDeclaration(e);
                                    if (P(this.state.type))
                                        return this.tsParseModuleOrNamespaceDeclaration(e)
                                }
                                break;
                            case "namespace":
                                if (this.tsCheckLineTerminator(s) && P(this.state.type))
                                    return this.tsParseModuleOrNamespaceDeclaration(e);
                                break;
                            case "type":
                                if (this.tsCheckLineTerminator(s) && P(this.state.type))
                                    return this.tsParseTypeAliasDeclaration(e)
                            }
                        }
                        tsCheckLineTerminator(e) {
                            return e ? !this.hasFollowingLineBreak() && (this.next(),
                            !0) : !this.isLineTerminator()
                        }
                        tsTryParseGenericAsyncArrowFunction(e) {
                            if (!this.match(47))
                                return;
                            let t = this.state.maybeInArrowParameters;
                            this.state.maybeInArrowParameters = !0;
                            let s = this.tsTryParseAndCatch(()=>{
                                let t = this.startNodeAt(e);
                                return t.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier),
                                super.parseFunctionParams(t),
                                t.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(),
                                this.expect(19),
                                t
                            }
                            );
                            if (this.state.maybeInArrowParameters = t,
                            s)
                                return super.parseArrowExpression(s, null, !0)
                        }
                        tsParseTypeArgumentsInExpression() {
                            if (47 === this.reScan_lt())
                                return this.tsParseTypeArguments()
                        }
                        tsParseTypeArguments() {
                            let e = this.startNode();
                            return e.params = this.tsInType(()=>this.tsInNoContext(()=>(this.expect(47),
                            this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))),
                            0 === e.params.length && this.raise(ts.EmptyTypeArguments, {
                                at: e
                            }),
                            this.expect(48),
                            this.finishNode(e, "TSTypeParameterInstantiation")
                        }
                        tsIsDeclarationStart() {
                            var e;
                            return (e = this.state.type) >= 122 && e <= 128
                        }
                        isExportDefaultSpecifier() {
                            return !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier()
                        }
                        parseAssignableListItem(e, t) {
                            let s = this.state.startLoc
                              , r = {};
                            this.tsParseModifiers({
                                allowedModifiers: ["public", "private", "protected", "override", "readonly"]
                            }, r);
                            let i = r.accessibility
                              , a = r.override
                              , n = r.readonly;
                            !(4 & e) && (i || n || a) && this.raise(ts.UnexpectedParameterModifier, {
                                at: s
                            });
                            let o = this.parseMaybeDefault();
                            this.parseAssignableListItemTypes(o, e);
                            let h = this.parseMaybeDefault(o.loc.start, o);
                            if (i || n || a) {
                                let e = this.startNodeAt(s);
                                return t.length && (e.decorators = t),
                                i && (e.accessibility = i),
                                n && (e.readonly = n),
                                a && (e.override = a),
                                "Identifier" !== h.type && "AssignmentPattern" !== h.type && this.raise(ts.UnsupportedParameterPropertyKind, {
                                    at: e
                                }),
                                e.parameter = h,
                                this.finishNode(e, "TSParameterProperty")
                            }
                            return t.length && (o.decorators = t),
                            h
                        }
                        isSimpleParameter(e) {
                            return "TSParameterProperty" === e.type && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e)
                        }
                        tsDisallowOptionalPattern(e) {
                            for (let t of e.params)
                                "Identifier" !== t.type && t.optional && !this.state.isAmbientContext && this.raise(ts.PatternIsOptional, {
                                    at: t
                                })
                        }
                        setArrowFunctionParameters(e, t, s) {
                            super.setArrowFunctionParameters(e, t, s),
                            this.tsDisallowOptionalPattern(e)
                        }
                        parseFunctionBodyAndFinish(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
                            let r = "FunctionDeclaration" === t ? "TSDeclareFunction" : "ClassMethod" === t || "ClassPrivateMethod" === t ? "TSDeclareMethod" : void 0;
                            return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : "TSDeclareFunction" === r && this.state.isAmbientContext && (this.raise(ts.DeclareFunctionHasImplementation, {
                                at: e
                            }),
                            e.declare) ? super.parseFunctionBodyAndFinish(e, r, s) : (this.tsDisallowOptionalPattern(e),
                            super.parseFunctionBodyAndFinish(e, t, s))
                        }
                        registerFunctionStatementId(e) {
                            !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e)
                        }
                        tsCheckForInvalidTypeCasts(e) {
                            e.forEach(e=>{
                                (null == e ? void 0 : e.type) === "TSTypeCastExpression" && this.raise(ts.UnexpectedTypeAnnotation, {
                                    at: e.typeAnnotation
                                })
                            }
                            )
                        }
                        toReferencedList(e, t) {
                            return this.tsCheckForInvalidTypeCasts(e),
                            e
                        }
                        parseArrayLike(e, t, s, r) {
                            let i = super.parseArrayLike(e, t, s, r);
                            return "ArrayExpression" === i.type && this.tsCheckForInvalidTypeCasts(i.elements),
                            i
                        }
                        parseSubscript(e, t, s, r) {
                            if (!this.hasPrecedingLineBreak() && this.match(35)) {
                                this.state.canStartJSXElement = !1,
                                this.next();
                                let s = this.startNodeAt(t);
                                return s.expression = e,
                                this.finishNode(s, "TSNonNullExpression")
                            }
                            let i = !1;
                            if (this.match(18) && 60 === this.lookaheadCharCode()) {
                                if (s)
                                    return r.stop = !0,
                                    e;
                                r.optionalChainMember = i = !0,
                                this.next()
                            }
                            if (this.match(47) || this.match(51)) {
                                let a, n = this.tsTryParseAndCatch(()=>{
                                    if (!s && this.atPossibleAsyncArrow(e)) {
                                        let e = this.tsTryParseGenericAsyncArrowFunction(t);
                                        if (e)
                                            return e
                                    }
                                    let n = this.tsParseTypeArgumentsInExpression();
                                    if (!n)
                                        return;
                                    if (i && !this.match(10)) {
                                        a = this.state.curPosition();
                                        return
                                    }
                                    if (S(this.state.type)) {
                                        let s = super.parseTaggedTemplateExpression(e, t, r);
                                        return s.typeParameters = n,
                                        s
                                    }
                                    if (!s && this.eat(10)) {
                                        let s = this.startNodeAt(t);
                                        return s.callee = e,
                                        s.arguments = this.parseCallExpressionArguments(11, !1),
                                        this.tsCheckForInvalidTypeCasts(s.arguments),
                                        s.typeParameters = n,
                                        r.optionalChainMember && (s.optional = i),
                                        this.finishCallExpression(s, r.optionalChainMember)
                                    }
                                    let o = this.state.type;
                                    if (48 === o || 52 === o || 10 !== o && m[o] && !this.hasPrecedingLineBreak())
                                        return;
                                    let h = this.startNodeAt(t);
                                    return h.expression = e,
                                    h.typeParameters = n,
                                    this.finishNode(h, "TSInstantiationExpression")
                                }
                                );
                                if (a && this.unexpected(a, 10),
                                n)
                                    return "TSInstantiationExpression" === n.type && (this.match(16) || this.match(18) && 40 !== this.lookaheadCharCode()) && this.raise(ts.InvalidPropertyAccessAfterInstantiationExpression, {
                                        at: this.state.startLoc
                                    }),
                                    n
                            }
                            return super.parseSubscript(e, t, s, r)
                        }
                        parseNewCallee(e) {
                            var t;
                            super.parseNewCallee(e);
                            let {callee: s} = e;
                            "TSInstantiationExpression" !== s.type || null != (t = s.extra) && t.parenthesized || (e.typeParameters = s.typeParameters,
                            e.callee = s.expression)
                        }
                        parseExprOp(e, t, s) {
                            let r;
                            if (u[58] > s && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(118)))) {
                                let i = this.startNodeAt(t);
                                return i.expression = e,
                                i.typeAnnotation = this.tsInType(()=>(this.next(),
                                this.match(75) ? (r && this.raise(U.UnexpectedKeyword, {
                                    at: this.state.startLoc,
                                    keyword: "const"
                                }),
                                this.tsParseTypeReference()) : this.tsParseType())),
                                this.finishNode(i, r ? "TSSatisfiesExpression" : "TSAsExpression"),
                                this.reScan_lt_gt(),
                                this.parseExprOp(i, t, s)
                            }
                            return super.parseExprOp(e, t, s)
                        }
                        checkReservedWord(e, t, s, r) {
                            this.state.isAmbientContext || super.checkReservedWord(e, t, s, r)
                        }
                        checkImportReflection(e) {
                            super.checkImportReflection(e),
                            e.module && "value" !== e.importKind && this.raise(ts.ImportReflectionHasImportType, {
                                at: e.specifiers[0].loc.start
                            })
                        }
                        checkDuplicateExports() {}
                        parseImport(e) {
                            if (e.importKind = "value",
                            P(this.state.type) || this.match(55) || this.match(5)) {
                                let t = this.lookahead();
                                if (this.isContextual(128) && 12 !== t.type && 97 !== t.type && 29 !== t.type && (e.importKind = "type",
                                this.next(),
                                t = this.lookahead()),
                                P(this.state.type) && 29 === t.type)
                                    return this.tsParseImportEqualsDeclaration(e)
                            }
                            let t = super.parseImport(e);
                            return "type" === t.importKind && t.specifiers.length > 1 && "ImportDefaultSpecifier" === t.specifiers[0].type && this.raise(ts.TypeImportCannotSpecifyDefaultAndNamed, {
                                at: t
                            }),
                            t
                        }
                        parseExport(e, t) {
                            if (this.match(83))
                                return this.next(),
                                this.isContextual(128) && 61 !== this.lookaheadCharCode() ? (e.importKind = "type",
                                this.next()) : e.importKind = "value",
                                this.tsParseImportEqualsDeclaration(e, !0);
                            if (this.eat(29)) {
                                let t = e;
                                return t.expression = super.parseExpression(),
                                this.semicolon(),
                                this.finishNode(t, "TSExportAssignment")
                            }
                            if (this.eatContextual(93)) {
                                let t = e;
                                return this.expectContextual(126),
                                t.id = this.parseIdentifier(),
                                this.semicolon(),
                                this.finishNode(t, "TSNamespaceExportDeclaration")
                            }
                            if (e.exportKind = "value",
                            this.isContextual(128)) {
                                let t = this.lookaheadCharCode();
                                (123 === t || 42 === t) && (this.next(),
                                e.exportKind = "type")
                            }
                            return super.parseExport(e, t)
                        }
                        isAbstractClass() {
                            return this.isContextual(122) && 80 === this.lookahead().type
                        }
                        parseExportDefaultExpression() {
                            if (this.isAbstractClass()) {
                                let e = this.startNode();
                                return this.next(),
                                e.abstract = !0,
                                this.parseClass(e, !0, !0)
                            }
                            if (this.match(127)) {
                                let e = this.tsParseInterfaceDeclaration(this.startNode());
                                if (e)
                                    return e
                            }
                            return super.parseExportDefaultExpression()
                        }
                        parseVarStatement(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , {isAmbientContext: r} = this.state
                              , i = super.parseVarStatement(e, t, s || r);
                            if (!r)
                                return i;
                            for (let {id: e, init: s} of i.declarations)
                                s && ("const" !== t || e.typeAnnotation ? this.raise(ts.InitializerNotAllowedInAmbientContext, {
                                    at: s
                                }) : function(e, t) {
                                    var s;
                                    let {type: r} = e;
                                    if (null != (s = e.extra) && s.parenthesized)
                                        return !1;
                                    if (t) {
                                        if ("Literal" === r) {
                                            let {value: t} = e;
                                            if ("string" == typeof t || "boolean" == typeof t)
                                                return !0
                                        }
                                    } else if ("StringLiteral" === r || "BooleanLiteral" === r)
                                        return !0;
                                    return !!(ta(e, t) || function(e, t) {
                                        if ("UnaryExpression" === e.type) {
                                            let {operator: s, argument: r} = e;
                                            if ("-" === s && ta(r, t))
                                                return !0
                                        }
                                        return !1
                                    }(e, t) || "TemplateLiteral" === r && 0 === e.expressions.length || function(e) {
                                        if ("MemberExpression" !== e.type)
                                            return !1;
                                        let {computed: t, property: s} = e;
                                        return (!t || "StringLiteral" === s.type || "TemplateLiteral" === s.type && !(s.expressions.length > 0)) && function e(t) {
                                            return "Identifier" === t.type || "MemberExpression" === t.type && !t.computed && e(t.object)
                                        }(e.object)
                                    }(e))
                                }(s, this.hasPlugin("estree")) || this.raise(ts.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, {
                                    at: s
                                }));
                            return i
                        }
                        parseStatementContent(e, t) {
                            if (this.match(75) && this.isLookaheadContextual("enum")) {
                                let e = this.startNode();
                                return this.expect(75),
                                this.tsParseEnumDeclaration(e, {
                                    const: !0
                                })
                            }
                            if (this.isContextual(124))
                                return this.tsParseEnumDeclaration(this.startNode());
                            if (this.isContextual(127)) {
                                let e = this.tsParseInterfaceDeclaration(this.startNode());
                                if (e)
                                    return e
                            }
                            return super.parseStatementContent(e, t)
                        }
                        parseAccessModifier() {
                            return this.tsParseModifier(["public", "protected", "private"])
                        }
                        tsHasSomeModifiers(e, t) {
                            return t.some(t=>tr(t) ? e.accessibility === t : !!e[t])
                        }
                        tsIsStartOfStaticBlocks() {
                            return this.isContextual(104) && 123 === this.lookaheadCharCode()
                        }
                        parseClassMember(e, t, s) {
                            let r = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
                            this.tsParseModifiers({
                                allowedModifiers: r,
                                disallowedModifiers: ["in", "out"],
                                stopOnStartOfClassStaticBlock: !0,
                                errorTemplate: ts.InvalidModifierOnTypeParameterPositions
                            }, t);
                            let i = ()=>{
                                this.tsIsStartOfStaticBlocks() ? (this.next(),
                                this.next(),
                                this.tsHasSomeModifiers(t, r) && this.raise(ts.StaticBlockCannotHaveModifier, {
                                    at: this.state.curPosition()
                                }),
                                super.parseClassStaticBlock(e, t)) : this.parseClassMemberWithIsStatic(e, t, s, !!t.static)
                            }
                            ;
                            t.declare ? this.tsInAmbientContext(i) : i()
                        }
                        parseClassMemberWithIsStatic(e, t, s, r) {
                            let i = this.tsTryParseIndexSignature(t);
                            if (i) {
                                e.body.push(i),
                                t.abstract && this.raise(ts.IndexSignatureHasAbstract, {
                                    at: t
                                }),
                                t.accessibility && this.raise(ts.IndexSignatureHasAccessibility, {
                                    at: t,
                                    modifier: t.accessibility
                                }),
                                t.declare && this.raise(ts.IndexSignatureHasDeclare, {
                                    at: t
                                }),
                                t.override && this.raise(ts.IndexSignatureHasOverride, {
                                    at: t
                                });
                                return
                            }
                            !this.state.inAbstractClass && t.abstract && this.raise(ts.NonAbstractClassHasAbstractMethod, {
                                at: t
                            }),
                            t.override && (s.hadSuperClass || this.raise(ts.OverrideNotInSubClass, {
                                at: t
                            })),
                            super.parseClassMemberWithIsStatic(e, t, s, r)
                        }
                        parsePostMemberNameModifiers(e) {
                            this.eat(17) && (e.optional = !0),
                            e.readonly && this.match(10) && this.raise(ts.ClassMethodHasReadonly, {
                                at: e
                            }),
                            e.declare && this.match(10) && this.raise(ts.ClassMethodHasDeclare, {
                                at: e
                            })
                        }
                        parseExpressionStatement(e, t, s) {
                            return ("Identifier" === t.type ? this.tsParseExpressionStatement(e, t, s) : void 0) || super.parseExpressionStatement(e, t, s)
                        }
                        shouldParseExportDeclaration() {
                            return !!this.tsIsDeclarationStart() || super.shouldParseExportDeclaration()
                        }
                        parseConditional(e, t, s) {
                            if (!this.state.maybeInArrowParameters || !this.match(17))
                                return super.parseConditional(e, t, s);
                            let r = this.tryParse(()=>super.parseConditional(e, t));
                            return r.node ? (r.error && (this.state = r.failState),
                            r.node) : (r.error && super.setOptionalParametersError(s, r.error),
                            e)
                        }
                        parseParenItem(e, t) {
                            if (e = super.parseParenItem(e, t),
                            this.eat(17) && (e.optional = !0,
                            this.resetEndLocation(e)),
                            this.match(14)) {
                                let s = this.startNodeAt(t);
                                return s.expression = e,
                                s.typeAnnotation = this.tsParseTypeAnnotation(),
                                this.finishNode(s, "TSTypeCastExpression")
                            }
                            return e
                        }
                        parseExportDeclaration(e) {
                            if (!this.state.isAmbientContext && this.isContextual(123))
                                return this.tsInAmbientContext(()=>this.parseExportDeclaration(e));
                            let t = this.state.startLoc
                              , s = this.eatContextual(123);
                            if (s && (this.isContextual(123) || !this.shouldParseExportDeclaration()))
                                throw this.raise(ts.ExpectedAmbientAfterExportDeclare, {
                                    at: this.state.startLoc
                                });
                            let r = P(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
                            return r ? (("TSInterfaceDeclaration" === r.type || "TSTypeAliasDeclaration" === r.type || s) && (e.exportKind = "type"),
                            s && (this.resetStartLocation(r, t),
                            r.declare = !0),
                            r) : null
                        }
                        parseClassId(e, t, s, r) {
                            if ((!t || s) && this.isContextual(111))
                                return;
                            super.parseClassId(e, t, s, e.declare ? 1024 : 8331);
                            let i = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
                            i && (e.typeParameters = i)
                        }
                        parseClassPropertyAnnotation(e) {
                            e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0));
                            let t = this.tsTryParseTypeAnnotation();
                            t && (e.typeAnnotation = t)
                        }
                        parseClassProperty(e) {
                            if (this.parseClassPropertyAnnotation(e),
                            this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(ts.DeclareClassFieldHasInitializer, {
                                at: this.state.startLoc
                            }),
                            e.abstract && this.match(29)) {
                                let {key: t} = e;
                                this.raise(ts.AbstractPropertyHasInitializer, {
                                    at: this.state.startLoc,
                                    propertyName: "Identifier" !== t.type || e.computed ? `[${this.input.slice(t.start, t.end)}]` : t.name
                                })
                            }
                            return super.parseClassProperty(e)
                        }
                        parseClassPrivateProperty(e) {
                            return e.abstract && this.raise(ts.PrivateElementHasAbstract, {
                                at: e
                            }),
                            e.accessibility && this.raise(ts.PrivateElementHasAccessibility, {
                                at: e,
                                modifier: e.accessibility
                            }),
                            this.parseClassPropertyAnnotation(e),
                            super.parseClassPrivateProperty(e)
                        }
                        parseClassAccessorProperty(e) {
                            return this.parseClassPropertyAnnotation(e),
                            e.optional && this.raise(ts.AccessorCannotBeOptional, {
                                at: e
                            }),
                            super.parseClassAccessorProperty(e)
                        }
                        pushClassMethod(e, t, s, r, i, a) {
                            let n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                            n && i && this.raise(ts.ConstructorHasTypeParameters, {
                                at: n
                            });
                            let {declare: o=!1, kind: h} = t;
                            o && ("get" === h || "set" === h) && this.raise(ts.DeclareAccessor, {
                                at: t,
                                kind: h
                            }),
                            n && (t.typeParameters = n),
                            super.pushClassMethod(e, t, s, r, i, a)
                        }
                        pushClassPrivateMethod(e, t, s, r) {
                            let i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                            i && (t.typeParameters = i),
                            super.pushClassPrivateMethod(e, t, s, r)
                        }
                        declareClassPrivateMethodInScope(e, t) {
                            "TSDeclareMethod" === e.type || ("MethodDefinition" !== e.type || e.value.body) && super.declareClassPrivateMethodInScope(e, t)
                        }
                        parseClassSuper(e) {
                            super.parseClassSuper(e),
                            e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()),
                            this.eatContextual(111) && (e.implements = this.tsParseHeritageClause("implements"))
                        }
                        parseObjPropValue(e, t, s, r, i, a, n) {
                            let o = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                            return o && (e.typeParameters = o),
                            super.parseObjPropValue(e, t, s, r, i, a, n)
                        }
                        parseFunctionParams(e, t) {
                            let s = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                            s && (e.typeParameters = s),
                            super.parseFunctionParams(e, t)
                        }
                        parseVarId(e, t) {
                            super.parseVarId(e, t),
                            "Identifier" === e.id.type && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0);
                            let s = this.tsTryParseTypeAnnotation();
                            s && (e.id.typeAnnotation = s,
                            this.resetEndLocation(e.id))
                        }
                        parseAsyncArrowFromCallExpression(e, t) {
                            return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()),
                            super.parseAsyncArrowFromCallExpression(e, t)
                        }
                        parseMaybeAssign(e, t) {
                            var s, i, a, n, o, h, l;
                            let p, c, u;
                            if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                                if (p = this.state.clone(),
                                !(c = this.tryParse(()=>super.parseMaybeAssign(e, t), p)).error)
                                    return c.node;
                                let {context: s} = this.state
                                  , i = s[s.length - 1];
                                (i === r.j_oTag || i === r.j_expr) && s.pop()
                            }
                            if (!(null != (s = c) && s.error) && !this.match(47))
                                return super.parseMaybeAssign(e, t);
                            p && p !== this.state || (p = this.state.clone());
                            let d, m = this.tryParse(s=>{
                                var r, i;
                                d = this.tsParseTypeParameters(this.tsParseConstModifier);
                                let a = super.parseMaybeAssign(e, t);
                                return ("ArrowFunctionExpression" !== a.type || null != (r = a.extra) && r.parenthesized) && s(),
                                (null == (i = d) ? void 0 : i.params.length) !== 0 && this.resetStartLocationFromNode(a, d),
                                a.typeParameters = d,
                                a
                            }
                            , p);
                            if (!m.error && !m.aborted)
                                return d && this.reportReservedArrowTypeParam(d),
                                m.node;
                            if (!c && (tt(!this.hasPlugin("jsx")),
                            !(u = this.tryParse(()=>super.parseMaybeAssign(e, t), p)).error))
                                return u.node;
                            if (null != (i = c) && i.node)
                                return this.state = c.failState,
                                c.node;
                            if (m.node)
                                return this.state = m.failState,
                                d && this.reportReservedArrowTypeParam(d),
                                m.node;
                            if (null != (a = u) && a.node)
                                return this.state = u.failState,
                                u.node;
                            throw null != (n = c) && n.thrown ? c.error : m.thrown ? m.error : null != (o = u) && o.thrown ? u.error : (null == (h = c) ? void 0 : h.error) || m.error || (null == (l = u) ? void 0 : l.error)
                        }
                        reportReservedArrowTypeParam(e) {
                            var t;
                            1 === e.params.length && !e.params[0].constraint && !(null != (t = e.extra) && t.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(ts.ReservedArrowTypeParam, {
                                at: e
                            })
                        }
                        parseMaybeUnary(e, t) {
                            return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, t)
                        }
                        parseArrow(e) {
                            if (this.match(14)) {
                                let t = this.tryParse(e=>{
                                    let t = this.tsParseTypeOrTypePredicateAnnotation(14);
                                    return (this.canInsertSemicolon() || !this.match(19)) && e(),
                                    t
                                }
                                );
                                if (t.aborted)
                                    return;
                                t.thrown || (t.error && (this.state = t.failState),
                                e.returnType = t.node)
                            }
                            return super.parseArrow(e)
                        }
                        parseAssignableListItemTypes(e, t) {
                            if (!(2 & t))
                                return e;
                            this.eat(17) && (e.optional = !0);
                            let s = this.tsTryParseTypeAnnotation();
                            return s && (e.typeAnnotation = s),
                            this.resetEndLocation(e),
                            e
                        }
                        isAssignable(e, t) {
                            switch (e.type) {
                            case "TSTypeCastExpression":
                                return this.isAssignable(e.expression, t);
                            case "TSParameterProperty":
                                return !0;
                            default:
                                return super.isAssignable(e, t)
                            }
                        }
                        toAssignable(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            switch (e.type) {
                            case "ParenthesizedExpression":
                                this.toAssignableParenthesizedExpression(e, t);
                                break;
                            case "TSAsExpression":
                            case "TSSatisfiesExpression":
                            case "TSNonNullExpression":
                            case "TSTypeAssertion":
                                t ? this.expressionScope.recordArrowParameterBindingError(ts.UnexpectedTypeCastInParameter, {
                                    at: e
                                }) : this.raise(ts.UnexpectedTypeCastInParameter, {
                                    at: e
                                }),
                                this.toAssignable(e.expression, t);
                                break;
                            case "AssignmentExpression":
                                t || "TSTypeCastExpression" !== e.left.type || (e.left = this.typeCastToParameter(e.left));
                            default:
                                super.toAssignable(e, t)
                            }
                        }
                        toAssignableParenthesizedExpression(e, t) {
                            switch (e.expression.type) {
                            case "TSAsExpression":
                            case "TSSatisfiesExpression":
                            case "TSNonNullExpression":
                            case "TSTypeAssertion":
                            case "ParenthesizedExpression":
                                this.toAssignable(e.expression, t);
                                break;
                            default:
                                super.toAssignable(e, t)
                            }
                        }
                        checkToRestConversion(e, t) {
                            switch (e.type) {
                            case "TSAsExpression":
                            case "TSSatisfiesExpression":
                            case "TSTypeAssertion":
                            case "TSNonNullExpression":
                                this.checkToRestConversion(e.expression, !1);
                                break;
                            default:
                                super.checkToRestConversion(e, t)
                            }
                        }
                        isValidLVal(e, t, s) {
                            return te({
                                TSTypeCastExpression: !0,
                                TSParameterProperty: "parameter",
                                TSNonNullExpression: "expression",
                                TSAsExpression: (64 !== s || !t) && ["expression", !0],
                                TSSatisfiesExpression: (64 !== s || !t) && ["expression", !0],
                                TSTypeAssertion: (64 !== s || !t) && ["expression", !0]
                            }, e) || super.isValidLVal(e, t, s)
                        }
                        parseBindingAtom() {
                            return 78 === this.state.type ? this.parseIdentifier(!0) : super.parseBindingAtom()
                        }
                        parseMaybeDecoratorArguments(e) {
                            if (this.match(47) || this.match(51)) {
                                let t = this.tsParseTypeArgumentsInExpression();
                                if (this.match(10)) {
                                    let s = super.parseMaybeDecoratorArguments(e);
                                    return s.typeParameters = t,
                                    s
                                }
                                this.unexpected(null, 10)
                            }
                            return super.parseMaybeDecoratorArguments(e)
                        }
                        checkCommaAfterRest(e) {
                            return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(),
                            !1) : super.checkCommaAfterRest(e)
                        }
                        isClassMethod() {
                            return this.match(47) || super.isClassMethod()
                        }
                        isClassProperty() {
                            return this.match(35) || this.match(14) || super.isClassProperty()
                        }
                        parseMaybeDefault(e, t) {
                            let s = super.parseMaybeDefault(e, t);
                            return "AssignmentPattern" === s.type && s.typeAnnotation && s.right.start < s.typeAnnotation.start && this.raise(ts.TypeAnnotationAfterAssign, {
                                at: s.typeAnnotation
                            }),
                            s
                        }
                        getTokenFromCode(e) {
                            if (this.state.inType) {
                                if (62 === e) {
                                    this.finishOp(48, 1);
                                    return
                                }
                                if (60 === e) {
                                    this.finishOp(47, 1);
                                    return
                                }
                            }
                            super.getTokenFromCode(e)
                        }
                        reScan_lt_gt() {
                            let {type: e} = this.state;
                            47 === e ? (this.state.pos -= 1,
                            this.readToken_lt()) : 48 === e && (this.state.pos -= 1,
                            this.readToken_gt())
                        }
                        reScan_lt() {
                            let {type: e} = this.state;
                            return 51 === e ? (this.state.pos -= 2,
                            this.finishOp(47, 1),
                            47) : e
                        }
                        toAssignableList(e, t, s) {
                            for (let t = 0; t < e.length; t++) {
                                let s = e[t];
                                (null == s ? void 0 : s.type) === "TSTypeCastExpression" && (e[t] = this.typeCastToParameter(s))
                            }
                            super.toAssignableList(e, t, s)
                        }
                        typeCastToParameter(e) {
                            return e.expression.typeAnnotation = e.typeAnnotation,
                            this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
                            e.expression
                        }
                        shouldParseArrow(e) {
                            return this.match(14) ? e.every(e=>this.isAssignable(e, !0)) : super.shouldParseArrow(e)
                        }
                        shouldParseAsyncArrow() {
                            return this.match(14) || super.shouldParseAsyncArrow()
                        }
                        canHaveLeadingDecorator() {
                            return super.canHaveLeadingDecorator() || this.isAbstractClass()
                        }
                        jsxParseOpeningElementAfterName(e) {
                            if (this.match(47) || this.match(51)) {
                                let t = this.tsTryParseAndCatch(()=>this.tsParseTypeArgumentsInExpression());
                                t && (e.typeParameters = t)
                            }
                            return super.jsxParseOpeningElementAfterName(e)
                        }
                        getGetterSetterExpectedParamCount(e) {
                            let t = super.getGetterSetterExpectedParamCount(e)
                              , s = this.getObjectOrClassMethodParams(e)[0];
                            return s && this.isThisParam(s) ? t + 1 : t
                        }
                        parseCatchClauseParam() {
                            let e = super.parseCatchClauseParam()
                              , t = this.tsTryParseTypeAnnotation();
                            return t && (e.typeAnnotation = t,
                            this.resetEndLocation(e)),
                            e
                        }
                        tsInAmbientContext(e) {
                            let t = this.state.isAmbientContext;
                            this.state.isAmbientContext = !0;
                            try {
                                return e()
                            } finally {
                                this.state.isAmbientContext = t
                            }
                        }
                        parseClass(e, t, s) {
                            let r = this.state.inAbstractClass;
                            this.state.inAbstractClass = !!e.abstract;
                            try {
                                return super.parseClass(e, t, s)
                            } finally {
                                this.state.inAbstractClass = r
                            }
                        }
                        tsParseAbstractDeclaration(e, t) {
                            if (this.match(80))
                                return e.abstract = !0,
                                this.maybeTakeDecorators(t, this.parseClass(e, !0, !1));
                            if (this.isContextual(127)) {
                                if (!this.hasFollowingLineBreak())
                                    return e.abstract = !0,
                                    this.raise(ts.NonClassMethodPropertyHasAbstractModifer, {
                                        at: e
                                    }),
                                    this.tsParseInterfaceDeclaration(e)
                            } else
                                this.unexpected(null, 80)
                        }
                        parseMethod(e, t, s, r, i, a, n) {
                            let o = super.parseMethod(e, t, s, r, i, a, n);
                            if (o.abstract && (this.hasPlugin("estree") ? !!o.value.body : !!o.body)) {
                                let {key: e} = o;
                                this.raise(ts.AbstractMethodHasImplementation, {
                                    at: o,
                                    methodName: "Identifier" !== e.type || o.computed ? `[${this.input.slice(e.start, e.end)}]` : e.name
                                })
                            }
                            return o
                        }
                        tsParseTypeParameterName() {
                            return this.parseIdentifier().name
                        }
                        shouldParseAsAmbientContext() {
                            return !!this.getPluginOption("typescript", "dts")
                        }
                        parse() {
                            return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0),
                            super.parse()
                        }
                        getExpression() {
                            return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0),
                            super.getExpression()
                        }
                        parseExportSpecifier(e, t, s, r) {
                            return !t && r ? (this.parseTypeOnlyImportExportSpecifier(e, !1, s),
                            this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value",
                            super.parseExportSpecifier(e, t, s, r))
                        }
                        parseImportSpecifier(e, t, s, r, i) {
                            return !t && r ? (this.parseTypeOnlyImportExportSpecifier(e, !0, s),
                            this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value",
                            super.parseImportSpecifier(e, t, s, r, s ? 4098 : 4096))
                        }
                        parseTypeOnlyImportExportSpecifier(e, t, s) {
                            let r = t ? "imported" : "local", i = t ? "local" : "exported", a = e[r], n, o = !1, h = !0, l = a.loc.start;
                            if (this.isContextual(93)) {
                                let e = this.parseIdentifier();
                                if (this.isContextual(93)) {
                                    let s = this.parseIdentifier();
                                    b(this.state.type) ? (o = !0,
                                    a = e,
                                    n = t ? this.parseIdentifier() : this.parseModuleExportName(),
                                    h = !1) : (n = s,
                                    h = !1)
                                } else
                                    b(this.state.type) ? (h = !1,
                                    n = t ? this.parseIdentifier() : this.parseModuleExportName()) : (o = !0,
                                    a = e)
                            } else
                                b(this.state.type) && (o = !0,
                                t ? (a = this.parseIdentifier(!0),
                                this.isContextual(93) || this.checkReservedWord(a.name, a.loc.start, !0, !0)) : a = this.parseModuleExportName());
                            o && s && this.raise(t ? ts.TypeModifierIsUsedInTypeImports : ts.TypeModifierIsUsedInTypeExports, {
                                at: l
                            }),
                            e[r] = a,
                            e[i] = n,
                            e[t ? "importKind" : "exportKind"] = o ? "type" : "value",
                            h && this.eatContextual(93) && (e[i] = t ? this.parseIdentifier() : this.parseModuleExportName()),
                            e[i] || (e[i] = eq(e[r])),
                            t && this.checkIdentifier(e[i], o ? 4098 : 4096)
                        }
                    }
                    ;
                    function ta(e, t) {
                        return t ? "Literal" === e.type && ("number" == typeof e.value || "bigint"in e) : "NumericLiteral" === e.type || "BigIntLiteral" === e.type
                    }
                    var tn = R`placeholders`({
                        ClassNameIsRequired: "A class name is required.",
                        UnexpectedSpace: "Unexpected space in placeholder."
                    });
                    function to(e, t) {
                        let[s,r] = "string" == typeof t ? [t, {}] : t
                          , i = Object.keys(r)
                          , a = 0 === i.length;
                        return e.some(e=>{
                            if ("string" == typeof e)
                                return a && e === s;
                            {
                                let[t,a] = e;
                                if (t !== s)
                                    return !1;
                                for (let e of i)
                                    if (a[e] !== r[e])
                                        return !1;
                                return !0
                            }
                        }
                        )
                    }
                    function th(e, t, s) {
                        let r = e.find(e=>Array.isArray(e) ? e[0] === t : e === t);
                        return r && Array.isArray(r) && r.length > 1 ? r[1][s] : null
                    }
                    var tl = ["minimal", "fsharp", "hack", "smart"]
                      , tp = ["^^", "@@", "^", "%", "#"]
                      , tc = ["hash", "bar"]
                      , tu = {
                        estree: V,
                        jsx: e4,
                        flow: eZ,
                        typescript: ti,
                        v8intrinsic: e=>class extends e {
                            parseV8Intrinsic() {
                                if (this.match(54)) {
                                    let e = this.state.startLoc
                                      , t = this.startNode();
                                    if (this.next(),
                                    P(this.state.type)) {
                                        let e = this.parseIdentifierName()
                                          , s = this.createIdentifier(t, e);
                                        if (s.type = "V8IntrinsicIdentifier",
                                        this.match(10))
                                            return s
                                    }
                                    this.unexpected(e)
                                }
                            }
                            parseExprAtom(e) {
                                return this.parseV8Intrinsic() || super.parseExprAtom(e)
                            }
                        }
                        ,
                        placeholders: e=>class extends e {
                            parsePlaceholder(e) {
                                if (this.match(142)) {
                                    let t = this.startNode();
                                    return this.next(),
                                    this.assertNoSpace(),
                                    t.name = super.parseIdentifier(!0),
                                    this.assertNoSpace(),
                                    this.expect(142),
                                    this.finishPlaceholder(t, e)
                                }
                            }
                            finishPlaceholder(e, t) {
                                let s = !!(e.expectedNode && "Placeholder" === e.type);
                                return e.expectedNode = t,
                                s ? e : this.finishNode(e, "Placeholder")
                            }
                            getTokenFromCode(e) {
                                37 === e && 37 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(142, 2) : super.getTokenFromCode(e)
                            }
                            parseExprAtom(e) {
                                return this.parsePlaceholder("Expression") || super.parseExprAtom(e)
                            }
                            parseIdentifier(e) {
                                return this.parsePlaceholder("Identifier") || super.parseIdentifier(e)
                            }
                            checkReservedWord(e, t, s, r) {
                                void 0 !== e && super.checkReservedWord(e, t, s, r)
                            }
                            parseBindingAtom() {
                                return this.parsePlaceholder("Pattern") || super.parseBindingAtom()
                            }
                            isValidLVal(e, t, s) {
                                return "Placeholder" === e || super.isValidLVal(e, t, s)
                            }
                            toAssignable(e, t) {
                                e && "Placeholder" === e.type && "Expression" === e.expectedNode ? e.expectedNode = "Pattern" : super.toAssignable(e, t)
                            }
                            chStartsBindingIdentifier(e, t) {
                                return !!(super.chStartsBindingIdentifier(e, t) || 142 === this.lookahead().type)
                            }
                            verifyBreakContinue(e, t) {
                                e.label && "Placeholder" === e.label.type || super.verifyBreakContinue(e, t)
                            }
                            parseExpressionStatement(e, t) {
                                if ("Placeholder" !== t.type || t.extra && t.extra.parenthesized)
                                    return super.parseExpressionStatement(e, t);
                                if (this.match(14)) {
                                    let s = e;
                                    return s.label = this.finishPlaceholder(t, "Identifier"),
                                    this.next(),
                                    s.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(),
                                    this.finishNode(s, "LabeledStatement")
                                }
                                return this.semicolon(),
                                e.name = t.name,
                                this.finishPlaceholder(e, "Statement")
                            }
                            parseBlock(e, t, s) {
                                return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, t, s)
                            }
                            parseFunctionId(e) {
                                return this.parsePlaceholder("Identifier") || super.parseFunctionId(e)
                            }
                            parseClass(e, t, s) {
                                let r = t ? "ClassDeclaration" : "ClassExpression";
                                this.next();
                                let i = this.state.strict
                                  , a = this.parsePlaceholder("Identifier");
                                if (a) {
                                    if (this.match(81) || this.match(142) || this.match(5))
                                        e.id = a;
                                    else {
                                        if (s || !t)
                                            return e.id = null,
                                            e.body = this.finishPlaceholder(a, "ClassBody"),
                                            this.finishNode(e, r);
                                        throw this.raise(tn.ClassNameIsRequired, {
                                            at: this.state.startLoc
                                        })
                                    }
                                } else
                                    this.parseClassId(e, t, s);
                                return super.parseClassSuper(e),
                                e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, i),
                                this.finishNode(e, r)
                            }
                            parseExport(e, t) {
                                let s = this.parsePlaceholder("Identifier");
                                if (!s)
                                    return super.parseExport(e, t);
                                if (!this.isContextual(97) && !this.match(12))
                                    return e.specifiers = [],
                                    e.source = null,
                                    e.declaration = this.finishPlaceholder(s, "Declaration"),
                                    this.finishNode(e, "ExportNamedDeclaration");
                                this.expectPlugin("exportDefaultFrom");
                                let r = this.startNode();
                                return r.exported = s,
                                e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")],
                                super.parseExport(e, t)
                            }
                            isExportDefaultSpecifier() {
                                if (this.match(65)) {
                                    let e = this.nextTokenStart();
                                    if (this.isUnparsedContextual(e, "from") && this.input.startsWith(c[142], this.nextTokenStartSince(e + 4)))
                                        return !0
                                }
                                return super.isExportDefaultSpecifier()
                            }
                            maybeParseExportDefaultSpecifier(e) {
                                return !!e.specifiers && e.specifiers.length > 0 || super.maybeParseExportDefaultSpecifier(e)
                            }
                            checkExport(e) {
                                let {specifiers: t} = e;
                                null != t && t.length && (e.specifiers = t.filter(e=>"Placeholder" === e.exported.type)),
                                super.checkExport(e),
                                e.specifiers = t
                            }
                            parseImport(e) {
                                let t = this.parsePlaceholder("Identifier");
                                if (!t)
                                    return super.parseImport(e);
                                if (e.specifiers = [],
                                !this.isContextual(97) && !this.match(12))
                                    return e.source = this.finishPlaceholder(t, "StringLiteral"),
                                    this.semicolon(),
                                    this.finishNode(e, "ImportDeclaration");
                                let s = this.startNodeAtNode(t);
                                return s.local = t,
                                e.specifiers.push(this.finishNode(s, "ImportDefaultSpecifier")),
                                this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)),
                                this.expectContextual(97),
                                e.source = this.parseImportSource(),
                                this.semicolon(),
                                this.finishNode(e, "ImportDeclaration")
                            }
                            parseImportSource() {
                                return this.parsePlaceholder("StringLiteral") || super.parseImportSource()
                            }
                            assertNoSpace() {
                                this.state.start > this.state.lastTokEndLoc.index && this.raise(tn.UnexpectedSpace, {
                                    at: this.state.lastTokEndLoc
                                })
                            }
                        }
                    }
                      , td = Object.keys(tu)
                      , tm = class extends e9 {
                        checkProto(e, t, s, r) {
                            if ("SpreadElement" === e.type || this.isObjectMethod(e) || e.computed || e.shorthand)
                                return;
                            let i = e.key;
                            if (("Identifier" === i.type ? i.name : i.value) === "__proto__") {
                                if (t) {
                                    this.raise(U.RecordNoProto, {
                                        at: i
                                    });
                                    return
                                }
                                s.used && (r ? null === r.doubleProtoLoc && (r.doubleProtoLoc = i.loc.start) : this.raise(U.DuplicateProto, {
                                    at: i
                                })),
                                s.used = !0
                            }
                        }
                        shouldExitDescending(e, t) {
                            return "ArrowFunctionExpression" === e.type && e.start === t
                        }
                        getExpression() {
                            this.enterInitialScopes(),
                            this.nextToken();
                            let e = this.parseExpression();
                            return this.match(137) || this.unexpected(),
                            this.finalizeRemainingComments(),
                            e.comments = this.state.comments,
                            e.errors = this.state.errors,
                            this.options.tokens && (e.tokens = this.tokens),
                            e
                        }
                        parseExpression(e, t) {
                            return e ? this.disallowInAnd(()=>this.parseExpressionBase(t)) : this.allowInAnd(()=>this.parseExpressionBase(t))
                        }
                        parseExpressionBase(e) {
                            let t = this.state.startLoc
                              , s = this.parseMaybeAssign(e);
                            if (this.match(12)) {
                                let r = this.startNodeAt(t);
                                for (r.expressions = [s]; this.eat(12); )
                                    r.expressions.push(this.parseMaybeAssign(e));
                                return this.toReferencedList(r.expressions),
                                this.finishNode(r, "SequenceExpression")
                            }
                            return s
                        }
                        parseMaybeAssignDisallowIn(e, t) {
                            return this.disallowInAnd(()=>this.parseMaybeAssign(e, t))
                        }
                        parseMaybeAssignAllowIn(e, t) {
                            return this.allowInAnd(()=>this.parseMaybeAssign(e, t))
                        }
                        setOptionalParametersError(e, t) {
                            var s;
                            e.optionalParametersLoc = null != (s = null == t ? void 0 : t.loc) ? s : this.state.startLoc
                        }
                        parseMaybeAssign(e, t) {
                            var s;
                            let r, i = this.state.startLoc;
                            if (this.isContextual(106) && this.prodParam.hasYield) {
                                let e = this.parseYield();
                                return t && (e = t.call(this, e, i)),
                                e
                            }
                            e ? r = !1 : (e = new eH,
                            r = !0);
                            let {type: a} = this.state;
                            (10 === a || P(a)) && (this.state.potentialArrowAt = this.state.start);
                            let n = this.parseMaybeConditional(e);
                            if (t && (n = t.call(this, n, i)),
                            (s = this.state.type) >= 29 && s <= 33) {
                                let t = this.startNodeAt(i)
                                  , s = this.state.value;
                                if (t.operator = s,
                                this.match(29)) {
                                    this.toAssignable(n, !0),
                                    t.left = n;
                                    let s = i.index;
                                    null != e.doubleProtoLoc && e.doubleProtoLoc.index >= s && (e.doubleProtoLoc = null),
                                    null != e.shorthandAssignLoc && e.shorthandAssignLoc.index >= s && (e.shorthandAssignLoc = null),
                                    null != e.privateKeyLoc && e.privateKeyLoc.index >= s && (this.checkDestructuringPrivate(e),
                                    e.privateKeyLoc = null)
                                } else
                                    t.left = n;
                                return this.next(),
                                t.right = this.parseMaybeAssign(),
                                this.checkLVal(n, {
                                    in: this.finishNode(t, "AssignmentExpression")
                                }),
                                t
                            }
                            return r && this.checkExpressionErrors(e, !0),
                            n
                        }
                        parseMaybeConditional(e) {
                            let t = this.state.startLoc
                              , s = this.state.potentialArrowAt
                              , r = this.parseExprOps(e);
                            return this.shouldExitDescending(r, s) ? r : this.parseConditional(r, t, e)
                        }
                        parseConditional(e, t, s) {
                            if (this.eat(17)) {
                                let s = this.startNodeAt(t);
                                return s.test = e,
                                s.consequent = this.parseMaybeAssignAllowIn(),
                                this.expect(14),
                                s.alternate = this.parseMaybeAssign(),
                                this.finishNode(s, "ConditionalExpression")
                            }
                            return e
                        }
                        parseMaybeUnaryOrPrivate(e) {
                            return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(e)
                        }
                        parseExprOps(e) {
                            let t = this.state.startLoc
                              , s = this.state.potentialArrowAt
                              , r = this.parseMaybeUnaryOrPrivate(e);
                            return this.shouldExitDescending(r, s) ? r : this.parseExprOp(r, t, -1)
                        }
                        parseExprOp(e, t, s) {
                            if (this.isPrivateName(e)) {
                                let t = this.getPrivateNameSV(e);
                                !(s >= u[58]) && this.prodParam.hasIn && this.match(58) || this.raise(U.PrivateInExpectedIn, {
                                    at: e,
                                    identifierName: t
                                }),
                                this.classScope.usePrivateName(t, e.loc.start)
                            }
                            let r = this.state.type;
                            if (r >= 39 && r <= 59 && (this.prodParam.hasIn || !this.match(58))) {
                                let i = u[r];
                                if (i > s) {
                                    if (39 === r) {
                                        if (this.expectPlugin("pipelineOperator"),
                                        this.state.inFSharpPipelineDirectBody)
                                            return e;
                                        this.checkPipelineAtInfixOperator(e, t)
                                    }
                                    let a = this.startNodeAt(t);
                                    a.left = e,
                                    a.operator = this.state.value;
                                    let n = 41 === r || 42 === r
                                      , o = 40 === r;
                                    if (o && (i = u[42]),
                                    this.next(),
                                    39 === r && this.hasPlugin(["pipelineOperator", {
                                        proposal: "minimal"
                                    }]) && 96 === this.state.type && this.prodParam.hasAwait)
                                        throw this.raise(U.UnexpectedAwaitAfterPipelineBody, {
                                            at: this.state.startLoc
                                        });
                                    a.right = this.parseExprOpRightExpr(r, i);
                                    let h = this.finishNode(a, n || o ? "LogicalExpression" : "BinaryExpression")
                                      , l = this.state.type;
                                    if (o && (41 === l || 42 === l) || n && 40 === l)
                                        throw this.raise(U.MixingCoalesceWithLogical, {
                                            at: this.state.startLoc
                                        });
                                    return this.parseExprOp(h, t, s)
                                }
                            }
                            return e
                        }
                        parseExprOpRightExpr(e, t) {
                            let s = this.state.startLoc;
                            if (39 === e)
                                switch (this.getPluginOption("pipelineOperator", "proposal")) {
                                case "hack":
                                    return this.withTopicBindingContext(()=>this.parseHackPipeBody());
                                case "smart":
                                    return this.withTopicBindingContext(()=>{
                                        if (this.prodParam.hasYield && this.isContextual(106))
                                            throw this.raise(U.PipeBodyIsTighter, {
                                                at: this.state.startLoc
                                            });
                                        return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(e, t), s)
                                    }
                                    );
                                case "fsharp":
                                    return this.withSoloAwaitPermittingContext(()=>this.parseFSharpPipelineBody(t))
                                }
                            return this.parseExprOpBaseRightExpr(e, t)
                        }
                        parseExprOpBaseRightExpr(e, t) {
                            let s = this.state.startLoc;
                            return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, 57 === e ? t - 1 : t)
                        }
                        parseHackPipeBody() {
                            var e;
                            let {startLoc: t} = this.state
                              , s = this.parseMaybeAssign();
                            return F.has(s.type) && !(null != (e = s.extra) && e.parenthesized) && this.raise(U.PipeUnparenthesizedBody, {
                                at: t,
                                type: s.type
                            }),
                            this.topicReferenceWasUsedInCurrentContext() || this.raise(U.PipeTopicUnused, {
                                at: t
                            }),
                            s
                        }
                        checkExponentialAfterUnary(e) {
                            this.match(57) && this.raise(U.UnexpectedTokenUnaryExponentiation, {
                                at: e.argument
                            })
                        }
                        parseMaybeUnary(e, t) {
                            let s = this.state.startLoc
                              , r = this.isContextual(96);
                            if (r && this.isAwaitAllowed()) {
                                this.next();
                                let e = this.parseAwait(s);
                                return t || this.checkExponentialAfterUnary(e),
                                e
                            }
                            let i = this.match(34)
                              , a = this.startNode();
                            if (f[this.state.type]) {
                                a.operator = this.state.value,
                                a.prefix = !0,
                                this.match(72) && this.expectPlugin("throwExpressions");
                                let s = this.match(89);
                                if (this.next(),
                                a.argument = this.parseMaybeUnary(null, !0),
                                this.checkExpressionErrors(e, !0),
                                this.state.strict && s) {
                                    let e = a.argument;
                                    "Identifier" === e.type ? this.raise(U.StrictDelete, {
                                        at: a
                                    }) : this.hasPropertyAsPrivateName(e) && this.raise(U.DeletePrivateField, {
                                        at: a
                                    })
                                }
                                if (!i)
                                    return t || this.checkExponentialAfterUnary(a),
                                    this.finishNode(a, "UnaryExpression")
                            }
                            let n = this.parseUpdate(a, i, e);
                            if (r) {
                                let {type: e} = this.state;
                                if ((this.hasPlugin("v8intrinsic") ? m[e] : m[e] && !this.match(54)) && !this.isAmbiguousAwait())
                                    return this.raiseOverwrite(U.AwaitNotInAsyncContext, {
                                        at: s
                                    }),
                                    this.parseAwait(s)
                            }
                            return n
                        }
                        parseUpdate(e, t, s) {
                            if (t)
                                return this.checkLVal(e.argument, {
                                    in: this.finishNode(e, "UpdateExpression")
                                }),
                                e;
                            let r = this.state.startLoc
                              , i = this.parseExprSubscripts(s);
                            if (this.checkExpressionErrors(s, !1))
                                return i;
                            for (; 34 === this.state.type && !this.canInsertSemicolon(); ) {
                                let e = this.startNodeAt(r);
                                e.operator = this.state.value,
                                e.prefix = !1,
                                e.argument = i,
                                this.next(),
                                this.checkLVal(i, {
                                    in: i = this.finishNode(e, "UpdateExpression")
                                })
                            }
                            return i
                        }
                        parseExprSubscripts(e) {
                            let t = this.state.startLoc
                              , s = this.state.potentialArrowAt
                              , r = this.parseExprAtom(e);
                            return this.shouldExitDescending(r, s) ? r : this.parseSubscripts(r, t)
                        }
                        parseSubscripts(e, t, s) {
                            let r = {
                                optionalChainMember: !1,
                                maybeAsyncArrow: this.atPossibleAsyncArrow(e),
                                stop: !1
                            };
                            do
                                e = this.parseSubscript(e, t, s, r),
                                r.maybeAsyncArrow = !1;
                            while (!r.stop);
                            return e
                        }
                        parseSubscript(e, t, s, r) {
                            let {type: i} = this.state;
                            if (!s && 15 === i)
                                return this.parseBind(e, t, s, r);
                            if (S(i))
                                return this.parseTaggedTemplateExpression(e, t, r);
                            let a = !1;
                            if (18 === i) {
                                if (s && (this.raise(U.OptionalChainingNoNew, {
                                    at: this.state.startLoc
                                }),
                                40 === this.lookaheadCharCode()))
                                    return r.stop = !0,
                                    e;
                                r.optionalChainMember = a = !0,
                                this.next()
                            }
                            if (!s && this.match(10))
                                return this.parseCoverCallAndAsyncArrowHead(e, t, r, a);
                            {
                                let s = this.eat(0);
                                return s || a || this.eat(16) ? this.parseMember(e, t, r, s, a) : (r.stop = !0,
                                e)
                            }
                        }
                        parseMember(e, t, s, r, i) {
                            let a = this.startNodeAt(t);
                            return a.object = e,
                            a.computed = r,
                            r ? (a.property = this.parseExpression(),
                            this.expect(3)) : this.match(136) ? ("Super" === e.type && this.raise(U.SuperPrivateField, {
                                at: t
                            }),
                            this.classScope.usePrivateName(this.state.value, this.state.startLoc),
                            a.property = this.parsePrivateName()) : a.property = this.parseIdentifier(!0),
                            s.optionalChainMember ? (a.optional = i,
                            this.finishNode(a, "OptionalMemberExpression")) : this.finishNode(a, "MemberExpression")
                        }
                        parseBind(e, t, s, r) {
                            let i = this.startNodeAt(t);
                            return i.object = e,
                            this.next(),
                            i.callee = this.parseNoCallExpr(),
                            r.stop = !0,
                            this.parseSubscripts(this.finishNode(i, "BindExpression"), t, s)
                        }
                        parseCoverCallAndAsyncArrowHead(e, t, s, r) {
                            let i = this.state.maybeInArrowParameters
                              , a = null;
                            this.state.maybeInArrowParameters = !0,
                            this.next();
                            let n = this.startNodeAt(t);
                            n.callee = e;
                            let {maybeAsyncArrow: o, optionalChainMember: h} = s;
                            o && (this.expressionScope.enter(new ej(2)),
                            a = new eH),
                            h && (n.optional = r),
                            r ? n.arguments = this.parseCallExpressionArguments(11) : n.arguments = this.parseCallExpressionArguments(11, "Import" === e.type, "Super" !== e.type, n, a);
                            let l = this.finishCallExpression(n, h);
                            return o && this.shouldParseAsyncArrow() && !r ? (s.stop = !0,
                            this.checkDestructuringPrivate(a),
                            this.expressionScope.validateAsPattern(),
                            this.expressionScope.exit(),
                            l = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t), l)) : (o && (this.checkExpressionErrors(a, !0),
                            this.expressionScope.exit()),
                            this.toReferencedArguments(l)),
                            this.state.maybeInArrowParameters = i,
                            l
                        }
                        toReferencedArguments(e, t) {
                            this.toReferencedListDeep(e.arguments, t)
                        }
                        parseTaggedTemplateExpression(e, t, s) {
                            let r = this.startNodeAt(t);
                            return r.tag = e,
                            r.quasi = this.parseTemplate(!0),
                            s.optionalChainMember && this.raise(U.OptionalChainingNoTemplate, {
                                at: t
                            }),
                            this.finishNode(r, "TaggedTemplateExpression")
                        }
                        atPossibleAsyncArrow(e) {
                            return "Identifier" === e.type && "async" === e.name && this.state.lastTokEndLoc.index === e.end && !this.canInsertSemicolon() && e.end - e.start == 5 && e.start === this.state.potentialArrowAt
                        }
                        finishCallExpression(e, t) {
                            if ("Import" === e.callee.type) {
                                if (2 === e.arguments.length && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")),
                                0 === e.arguments.length || e.arguments.length > 2)
                                    this.raise(U.ImportCallArity, {
                                        at: e,
                                        maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1
                                    });
                                else
                                    for (let t of e.arguments)
                                        "SpreadElement" === t.type && this.raise(U.ImportCallSpreadArgument, {
                                            at: t
                                        })
                            }
                            return this.finishNode(e, t ? "OptionalCallExpression" : "CallExpression")
                        }
                        parseCallExpressionArguments(e, t, s, r, i) {
                            let a = []
                              , n = !0
                              , o = this.state.inFSharpPipelineDirectBody;
                            for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e); ) {
                                if (n)
                                    n = !1;
                                else if (this.expect(12),
                                this.match(e)) {
                                    !t || this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") || this.raise(U.ImportCallArgumentTrailingComma, {
                                        at: this.state.lastTokStartLoc
                                    }),
                                    r && this.addTrailingCommaExtraToNode(r),
                                    this.next();
                                    break
                                }
                                a.push(this.parseExprListItem(!1, i, s))
                            }
                            return this.state.inFSharpPipelineDirectBody = o,
                            a
                        }
                        shouldParseAsyncArrow() {
                            return this.match(19) && !this.canInsertSemicolon()
                        }
                        parseAsyncArrowFromCallExpression(e, t) {
                            var s;
                            return this.resetPreviousNodeTrailingComments(t),
                            this.expect(19),
                            this.parseArrowExpression(e, t.arguments, !0, null == (s = t.extra) ? void 0 : s.trailingCommaLoc),
                            t.innerComments && ed(e, t.innerComments),
                            t.callee.trailingComments && ed(e, t.callee.trailingComments),
                            e
                        }
                        parseNoCallExpr() {
                            let e = this.state.startLoc;
                            return this.parseSubscripts(this.parseExprAtom(), e, !0)
                        }
                        parseExprAtom(e) {
                            let t, s = null, {type: r} = this.state;
                            switch (r) {
                            case 79:
                                return this.parseSuper();
                            case 83:
                                return t = this.startNode(),
                                this.next(),
                                this.match(16) ? this.parseImportMetaProperty(t) : (this.match(10) || this.raise(U.UnsupportedImport, {
                                    at: this.state.lastTokStartLoc
                                }),
                                this.finishNode(t, "Import"));
                            case 78:
                                return t = this.startNode(),
                                this.next(),
                                this.finishNode(t, "ThisExpression");
                            case 90:
                                return this.parseDo(this.startNode(), !1);
                            case 56:
                            case 31:
                                return this.readRegexp(),
                                this.parseRegExpLiteral(this.state.value);
                            case 132:
                                return this.parseNumericLiteral(this.state.value);
                            case 133:
                                return this.parseBigIntLiteral(this.state.value);
                            case 134:
                                return this.parseDecimalLiteral(this.state.value);
                            case 131:
                                return this.parseStringLiteral(this.state.value);
                            case 84:
                                return this.parseNullLiteral();
                            case 85:
                                return this.parseBooleanLiteral(!0);
                            case 86:
                                return this.parseBooleanLiteral(!1);
                            case 10:
                                {
                                    let e = this.state.potentialArrowAt === this.state.start;
                                    return this.parseParenAndDistinguishExpression(e)
                                }
                            case 2:
                            case 1:
                                return this.parseArrayLike(2 === this.state.type ? 4 : 3, !1, !0);
                            case 0:
                                return this.parseArrayLike(3, !0, !1, e);
                            case 6:
                            case 7:
                                return this.parseObjectLike(6 === this.state.type ? 9 : 8, !1, !0);
                            case 5:
                                return this.parseObjectLike(8, !1, !1, e);
                            case 68:
                                return this.parseFunctionOrFunctionSent();
                            case 26:
                                s = this.parseDecorators();
                            case 80:
                                return this.parseClass(this.maybeTakeDecorators(s, this.startNode()), !1);
                            case 77:
                                return this.parseNewOrNewTarget();
                            case 25:
                            case 24:
                                return this.parseTemplate(!1);
                            case 15:
                                {
                                    t = this.startNode(),
                                    this.next(),
                                    t.object = null;
                                    let e = t.callee = this.parseNoCallExpr();
                                    if ("MemberExpression" === e.type)
                                        return this.finishNode(t, "BindExpression");
                                    throw this.raise(U.UnsupportedBind, {
                                        at: e
                                    })
                                }
                            case 136:
                                return this.raise(U.PrivateInExpectedIn, {
                                    at: this.state.startLoc,
                                    identifierName: this.state.value
                                }),
                                this.parsePrivateName();
                            case 33:
                                return this.parseTopicReferenceThenEqualsSign(54, "%");
                            case 32:
                                return this.parseTopicReferenceThenEqualsSign(44, "^");
                            case 37:
                            case 38:
                                return this.parseTopicReference("hack");
                            case 44:
                            case 54:
                            case 27:
                                {
                                    let e = this.getPluginOption("pipelineOperator", "proposal");
                                    if (e)
                                        return this.parseTopicReference(e);
                                    this.unexpected();
                                    break
                                }
                            case 47:
                                {
                                    let e = this.input.codePointAt(this.nextTokenStart());
                                    Y(e) || 62 === e ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
                                    break
                                }
                            default:
                                if (P(r)) {
                                    if (this.isContextual(125) && 123 === this.lookaheadCharCode() && !this.hasFollowingLineBreak())
                                        return this.parseModuleExpression();
                                    let e = this.state.potentialArrowAt === this.state.start
                                      , t = this.state.containsEsc
                                      , s = this.parseIdentifier();
                                    if (!t && "async" === s.name && !this.canInsertSemicolon()) {
                                        let {type: e} = this.state;
                                        if (68 === e)
                                            return this.resetPreviousNodeTrailingComments(s),
                                            this.next(),
                                            this.parseAsyncFunctionExpression(this.startNodeAtNode(s));
                                        if (P(e))
                                            return 61 === this.lookaheadCharCode() ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(s)) : s;
                                        if (90 === e)
                                            return this.resetPreviousNodeTrailingComments(s),
                                            this.parseDo(this.startNodeAtNode(s), !0)
                                    }
                                    return e && this.match(19) && !this.canInsertSemicolon() ? (this.next(),
                                    this.parseArrowExpression(this.startNodeAtNode(s), [s], !1)) : s
                                }
                                this.unexpected()
                            }
                        }
                        parseTopicReferenceThenEqualsSign(e, t) {
                            let s = this.getPluginOption("pipelineOperator", "proposal");
                            if (s)
                                return this.state.type = e,
                                this.state.value = t,
                                this.state.pos--,
                                this.state.end--,
                                this.state.endLoc = N(this.state.endLoc, -1),
                                this.parseTopicReference(s);
                            this.unexpected()
                        }
                        parseTopicReference(e) {
                            let t = this.startNode()
                              , s = this.state.startLoc
                              , r = this.state.type;
                            return this.next(),
                            this.finishTopicReference(t, s, e, r)
                        }
                        finishTopicReference(e, t, s, r) {
                            if (this.testTopicReferenceConfiguration(s, t, r))
                                return this.topicReferenceIsAllowedInCurrentContext() || this.raise("smart" === s ? U.PrimaryTopicNotAllowed : U.PipeTopicUnbound, {
                                    at: t
                                }),
                                this.registerTopicReference(),
                                this.finishNode(e, "smart" === s ? "PipelinePrimaryTopicReference" : "TopicReference");
                            throw this.raise(U.PipeTopicUnconfiguredToken, {
                                at: t,
                                token: c[r]
                            })
                        }
                        testTopicReferenceConfiguration(e, t, s) {
                            switch (e) {
                            case "hack":
                                return this.hasPlugin(["pipelineOperator", {
                                    topicToken: c[s]
                                }]);
                            case "smart":
                                return 27 === s;
                            default:
                                throw this.raise(U.PipeTopicRequiresHackPipes, {
                                    at: t
                                })
                            }
                        }
                        parseAsyncArrowUnaryFunction(e) {
                            this.prodParam.enter(e_(!0, this.prodParam.hasYield));
                            let t = [this.parseIdentifier()];
                            return this.prodParam.exit(),
                            this.hasPrecedingLineBreak() && this.raise(U.LineTerminatorBeforeArrow, {
                                at: this.state.curPosition()
                            }),
                            this.expect(19),
                            this.parseArrowExpression(e, t, !0)
                        }
                        parseDo(e, t) {
                            this.expectPlugin("doExpressions"),
                            t && this.expectPlugin("asyncDoExpressions"),
                            e.async = t,
                            this.next();
                            let s = this.state.labels;
                            return this.state.labels = [],
                            t ? (this.prodParam.enter(2),
                            e.body = this.parseBlock(),
                            this.prodParam.exit()) : e.body = this.parseBlock(),
                            this.state.labels = s,
                            this.finishNode(e, "DoExpression")
                        }
                        parseSuper() {
                            let e = this.startNode();
                            return this.next(),
                            !this.match(10) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod ? this.scope.allowSuper || this.options.allowSuperOutsideMethod || this.raise(U.UnexpectedSuper, {
                                at: e
                            }) : this.raise(U.SuperNotAllowed, {
                                at: e
                            }),
                            this.match(10) || this.match(0) || this.match(16) || this.raise(U.UnsupportedSuper, {
                                at: e
                            }),
                            this.finishNode(e, "Super")
                        }
                        parsePrivateName() {
                            let e = this.startNode()
                              , t = this.startNodeAt(N(this.state.startLoc, 1))
                              , s = this.state.value;
                            return this.next(),
                            e.id = this.createIdentifier(t, s),
                            this.finishNode(e, "PrivateName")
                        }
                        parseFunctionOrFunctionSent() {
                            let e = this.startNode();
                            if (this.next(),
                            this.prodParam.hasYield && this.match(16)) {
                                let t = this.createIdentifier(this.startNodeAtNode(e), "function");
                                return this.next(),
                                this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(),
                                this.parseMetaProperty(e, t, "sent")
                            }
                            return this.parseFunction(e)
                        }
                        parseMetaProperty(e, t, s) {
                            e.meta = t;
                            let r = this.state.containsEsc;
                            return e.property = this.parseIdentifier(!0),
                            (e.property.name !== s || r) && this.raise(U.UnsupportedMetaProperty, {
                                at: e.property,
                                target: t.name,
                                onlyValidPropertyName: s
                            }),
                            this.finishNode(e, "MetaProperty")
                        }
                        parseImportMetaProperty(e) {
                            let t = this.createIdentifier(this.startNodeAtNode(e), "import");
                            return this.next(),
                            this.isContextual(100) && (this.inModule || this.raise(U.ImportMetaOutsideModule, {
                                at: t
                            }),
                            this.sawUnambiguousESM = !0),
                            this.parseMetaProperty(e, t, "meta")
                        }
                        parseLiteralAtNode(e, t, s) {
                            return this.addExtra(s, "rawValue", e),
                            this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)),
                            s.value = e,
                            this.next(),
                            this.finishNode(s, t)
                        }
                        parseLiteral(e, t) {
                            let s = this.startNode();
                            return this.parseLiteralAtNode(e, t, s)
                        }
                        parseStringLiteral(e) {
                            return this.parseLiteral(e, "StringLiteral")
                        }
                        parseNumericLiteral(e) {
                            return this.parseLiteral(e, "NumericLiteral")
                        }
                        parseBigIntLiteral(e) {
                            return this.parseLiteral(e, "BigIntLiteral")
                        }
                        parseDecimalLiteral(e) {
                            return this.parseLiteral(e, "DecimalLiteral")
                        }
                        parseRegExpLiteral(e) {
                            let t = this.parseLiteral(e.value, "RegExpLiteral");
                            return t.pattern = e.pattern,
                            t.flags = e.flags,
                            t
                        }
                        parseBooleanLiteral(e) {
                            let t = this.startNode();
                            return t.value = e,
                            this.next(),
                            this.finishNode(t, "BooleanLiteral")
                        }
                        parseNullLiteral() {
                            let e = this.startNode();
                            return this.next(),
                            this.finishNode(e, "NullLiteral")
                        }
                        parseParenAndDistinguishExpression(e) {
                            let t = this.state.startLoc, s;
                            this.next(),
                            this.expressionScope.enter(new ej(1));
                            let r = this.state.maybeInArrowParameters
                              , i = this.state.inFSharpPipelineDirectBody;
                            this.state.maybeInArrowParameters = !0,
                            this.state.inFSharpPipelineDirectBody = !1;
                            let a = this.state.startLoc, n = [], o = new eH, h = !0, l, p;
                            for (; !this.match(11); ) {
                                if (h)
                                    h = !1;
                                else if (this.expect(12, null === o.optionalParametersLoc ? null : o.optionalParametersLoc),
                                this.match(11)) {
                                    p = this.state.startLoc;
                                    break
                                }
                                if (this.match(21)) {
                                    let e = this.state.startLoc;
                                    if (l = this.state.startLoc,
                                    n.push(this.parseParenItem(this.parseRestBinding(), e)),
                                    !this.checkCommaAfterRest(41))
                                        break
                                } else
                                    n.push(this.parseMaybeAssignAllowIn(o, this.parseParenItem))
                            }
                            let c = this.state.lastTokEndLoc;
                            this.expect(11),
                            this.state.maybeInArrowParameters = r,
                            this.state.inFSharpPipelineDirectBody = i;
                            let u = this.startNodeAt(t);
                            return e && this.shouldParseArrow(n) && (u = this.parseArrow(u)) ? (this.checkDestructuringPrivate(o),
                            this.expressionScope.validateAsPattern(),
                            this.expressionScope.exit(),
                            this.parseArrowExpression(u, n, !1),
                            u) : (this.expressionScope.exit(),
                            n.length || this.unexpected(this.state.lastTokStartLoc),
                            p && this.unexpected(p),
                            l && this.unexpected(l),
                            this.checkExpressionErrors(o, !0),
                            this.toReferencedListDeep(n, !0),
                            n.length > 1 ? ((s = this.startNodeAt(a)).expressions = n,
                            this.finishNode(s, "SequenceExpression"),
                            this.resetEndLocation(s, c)) : s = n[0],
                            this.wrapParenthesis(t, s))
                        }
                        wrapParenthesis(e, t) {
                            if (!this.options.createParenthesizedExpressions)
                                return this.addExtra(t, "parenthesized", !0),
                                this.addExtra(t, "parenStart", e.index),
                                this.takeSurroundingComments(t, e.index, this.state.lastTokEndLoc.index),
                                t;
                            let s = this.startNodeAt(e);
                            return s.expression = t,
                            this.finishNode(s, "ParenthesizedExpression")
                        }
                        shouldParseArrow(e) {
                            return !this.canInsertSemicolon()
                        }
                        parseArrow(e) {
                            if (this.eat(19))
                                return e
                        }
                        parseParenItem(e, t) {
                            return e
                        }
                        parseNewOrNewTarget() {
                            let e = this.startNode();
                            if (this.next(),
                            this.match(16)) {
                                let t = this.createIdentifier(this.startNodeAtNode(e), "new");
                                this.next();
                                let s = this.parseMetaProperty(e, t, "target");
                                return this.scope.inNonArrowFunction || this.scope.inClass || this.options.allowNewTargetOutsideFunction || this.raise(U.UnexpectedNewTarget, {
                                    at: s
                                }),
                                s
                            }
                            return this.parseNew(e)
                        }
                        parseNew(e) {
                            if (this.parseNewCallee(e),
                            this.eat(10)) {
                                let t = this.parseExprList(11);
                                this.toReferencedList(t),
                                e.arguments = t
                            } else
                                e.arguments = [];
                            return this.finishNode(e, "NewExpression")
                        }
                        parseNewCallee(e) {
                            e.callee = this.parseNoCallExpr(),
                            "Import" === e.callee.type && this.raise(U.ImportCallNotNewExpression, {
                                at: e.callee
                            })
                        }
                        parseTemplateElement(e) {
                            let {start: t, startLoc: s, end: r, value: i} = this.state
                              , a = this.startNodeAt(N(s, 1));
                            null === i && (e || this.raise(U.InvalidEscapeSequenceTemplate, {
                                at: N(this.state.firstInvalidTemplateEscapePos, 1)
                            }));
                            let n = this.match(24)
                              , o = n ? -1 : -2;
                            a.value = {
                                raw: this.input.slice(t + 1, r + o).replace(/\r\n?/g, `
`),
                                cooked: null === i ? null : i.slice(1, o)
                            },
                            a.tail = n,
                            this.next();
                            let h = this.finishNode(a, "TemplateElement");
                            return this.resetEndLocation(h, N(this.state.lastTokEndLoc, o)),
                            h
                        }
                        parseTemplate(e) {
                            let t = this.startNode();
                            t.expressions = [];
                            let s = this.parseTemplateElement(e);
                            for (t.quasis = [s]; !s.tail; )
                                t.expressions.push(this.parseTemplateSubstitution()),
                                this.readTemplateContinuation(),
                                t.quasis.push(s = this.parseTemplateElement(e));
                            return this.finishNode(t, "TemplateLiteral")
                        }
                        parseTemplateSubstitution() {
                            return this.parseExpression()
                        }
                        parseObjectLike(e, t, s, r) {
                            s && this.expectPlugin("recordAndTuple");
                            let i = this.state.inFSharpPipelineDirectBody;
                            this.state.inFSharpPipelineDirectBody = !1;
                            let a = Object.create(null)
                              , n = !0
                              , o = this.startNode();
                            for (o.properties = [],
                            this.next(); !this.match(e); ) {
                                let i;
                                if (n)
                                    n = !1;
                                else if (this.expect(12),
                                this.match(e)) {
                                    this.addTrailingCommaExtraToNode(o);
                                    break
                                }
                                t ? i = this.parseBindingProperty() : (i = this.parsePropertyDefinition(r),
                                this.checkProto(i, s, a, r)),
                                s && !this.isObjectProperty(i) && "SpreadElement" !== i.type && this.raise(U.InvalidRecordProperty, {
                                    at: i
                                }),
                                i.shorthand && this.addExtra(i, "shorthand", !0),
                                o.properties.push(i)
                            }
                            this.next(),
                            this.state.inFSharpPipelineDirectBody = i;
                            let h = "ObjectExpression";
                            return t ? h = "ObjectPattern" : s && (h = "RecordExpression"),
                            this.finishNode(o, h)
                        }
                        addTrailingCommaExtraToNode(e) {
                            this.addExtra(e, "trailingComma", this.state.lastTokStart),
                            this.addExtra(e, "trailingCommaLoc", this.state.lastTokStartLoc, !1)
                        }
                        maybeAsyncOrAccessorProp(e) {
                            return !e.computed && "Identifier" === e.key.type && (this.isLiteralPropertyName() || this.match(0) || this.match(55))
                        }
                        parsePropertyDefinition(e) {
                            let t = [];
                            if (this.match(26))
                                for (this.hasPlugin("decorators") && this.raise(U.UnsupportedPropertyDecorator, {
                                    at: this.state.startLoc
                                }); this.match(26); )
                                    t.push(this.parseDecorator());
                            let s = this.startNode(), r = !1, i = !1, a;
                            if (this.match(21))
                                return t.length && this.unexpected(),
                                this.parseSpread();
                            t.length && (s.decorators = t,
                            t = []),
                            s.method = !1,
                            e && (a = this.state.startLoc);
                            let n = this.eat(55);
                            this.parsePropertyNamePrefixOperator(s);
                            let o = this.state.containsEsc
                              , h = this.parsePropertyName(s, e);
                            if (!n && !o && this.maybeAsyncOrAccessorProp(s)) {
                                let e = h.name;
                                "async" !== e || this.hasPrecedingLineBreak() || (r = !0,
                                this.resetPreviousNodeTrailingComments(h),
                                n = this.eat(55),
                                this.parsePropertyName(s)),
                                ("get" === e || "set" === e) && (i = !0,
                                this.resetPreviousNodeTrailingComments(h),
                                s.kind = e,
                                this.match(55) && (n = !0,
                                this.raise(U.AccessorIsGenerator, {
                                    at: this.state.curPosition(),
                                    kind: e
                                }),
                                this.next()),
                                this.parsePropertyName(s))
                            }
                            return this.parseObjPropValue(s, a, n, r, !1, i, e)
                        }
                        getGetterSetterExpectedParamCount(e) {
                            return "get" === e.kind ? 0 : 1
                        }
                        getObjectOrClassMethodParams(e) {
                            return e.params
                        }
                        checkGetterSetterParams(e) {
                            var t;
                            let s = this.getGetterSetterExpectedParamCount(e)
                              , r = this.getObjectOrClassMethodParams(e);
                            r.length !== s && this.raise("get" === e.kind ? U.BadGetterArity : U.BadSetterArity, {
                                at: e
                            }),
                            "set" === e.kind && (null == (t = r[r.length - 1]) ? void 0 : t.type) === "RestElement" && this.raise(U.BadSetterRestParameter, {
                                at: e
                            })
                        }
                        parseObjectMethod(e, t, s, r, i) {
                            if (i) {
                                let s = this.parseMethod(e, t, !1, !1, !1, "ObjectMethod");
                                return this.checkGetterSetterParams(s),
                                s
                            }
                            if (s || t || this.match(10))
                                return r && this.unexpected(),
                                e.kind = "method",
                                e.method = !0,
                                this.parseMethod(e, t, s, !1, !1, "ObjectMethod")
                        }
                        parseObjectProperty(e, t, s, r) {
                            if (e.shorthand = !1,
                            this.eat(14))
                                return e.value = s ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(r),
                                this.finishNode(e, "ObjectProperty");
                            if (!e.computed && "Identifier" === e.key.type) {
                                if (this.checkReservedWord(e.key.name, e.key.loc.start, !0, !1),
                                s)
                                    e.value = this.parseMaybeDefault(t, eq(e.key));
                                else if (this.match(29)) {
                                    let s = this.state.startLoc;
                                    null != r ? null === r.shorthandAssignLoc && (r.shorthandAssignLoc = s) : this.raise(U.InvalidCoverInitializedName, {
                                        at: s
                                    }),
                                    e.value = this.parseMaybeDefault(t, eq(e.key))
                                } else
                                    e.value = eq(e.key);
                                return e.shorthand = !0,
                                this.finishNode(e, "ObjectProperty")
                            }
                        }
                        parseObjPropValue(e, t, s, r, i, a, n) {
                            let o = this.parseObjectMethod(e, s, r, i, a) || this.parseObjectProperty(e, t, i, n);
                            return o || this.unexpected(),
                            o
                        }
                        parsePropertyName(e, t) {
                            if (this.eat(0))
                                e.computed = !0,
                                e.key = this.parseMaybeAssignAllowIn(),
                                this.expect(3);
                            else {
                                let {type: s, value: r} = this.state, i;
                                if (b(s))
                                    i = this.parseIdentifier(!0);
                                else
                                    switch (s) {
                                    case 132:
                                        i = this.parseNumericLiteral(r);
                                        break;
                                    case 131:
                                        i = this.parseStringLiteral(r);
                                        break;
                                    case 133:
                                        i = this.parseBigIntLiteral(r);
                                        break;
                                    case 134:
                                        i = this.parseDecimalLiteral(r);
                                        break;
                                    case 136:
                                        {
                                            let e = this.state.startLoc;
                                            null != t ? null === t.privateKeyLoc && (t.privateKeyLoc = e) : this.raise(U.UnexpectedPrivateField, {
                                                at: e
                                            }),
                                            i = this.parsePrivateName();
                                            break
                                        }
                                    default:
                                        this.unexpected()
                                    }
                                e.key = i,
                                136 !== s && (e.computed = !1)
                            }
                            return e.key
                        }
                        initFunction(e, t) {
                            e.id = null,
                            e.generator = !1,
                            e.async = t
                        }
                        parseMethod(e, t, s, r, i, a) {
                            let n = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                            this.initFunction(e, s),
                            e.generator = t,
                            this.scope.enter(18 | (n ? 64 : 0) | (i ? 32 : 0)),
                            this.prodParam.enter(e_(s, e.generator)),
                            this.parseFunctionParams(e, r);
                            let o = this.parseFunctionBodyAndFinish(e, a, !0);
                            return this.prodParam.exit(),
                            this.scope.exit(),
                            o
                        }
                        parseArrayLike(e, t, s, r) {
                            s && this.expectPlugin("recordAndTuple");
                            let i = this.state.inFSharpPipelineDirectBody;
                            this.state.inFSharpPipelineDirectBody = !1;
                            let a = this.startNode();
                            return this.next(),
                            a.elements = this.parseExprList(e, !s, r, a),
                            this.state.inFSharpPipelineDirectBody = i,
                            this.finishNode(a, s ? "TupleExpression" : "ArrayExpression")
                        }
                        parseArrowExpression(e, t, s, r) {
                            this.scope.enter(6);
                            let i = e_(s, !1);
                            !this.match(5) && this.prodParam.hasIn && (i |= 8),
                            this.prodParam.enter(i),
                            this.initFunction(e, s);
                            let a = this.state.maybeInArrowParameters;
                            return t && (this.state.maybeInArrowParameters = !0,
                            this.setArrowFunctionParameters(e, t, r)),
                            this.state.maybeInArrowParameters = !1,
                            this.parseFunctionBody(e, !0),
                            this.prodParam.exit(),
                            this.scope.exit(),
                            this.state.maybeInArrowParameters = a,
                            this.finishNode(e, "ArrowFunctionExpression")
                        }
                        setArrowFunctionParameters(e, t, s) {
                            this.toAssignableList(t, s, !1),
                            e.params = t
                        }
                        parseFunctionBodyAndFinish(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return this.parseFunctionBody(e, !1, s),
                            this.finishNode(e, t)
                        }
                        parseFunctionBody(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , r = t && !this.match(5);
                            if (this.expressionScope.enter(new eB),
                            r)
                                e.body = this.parseMaybeAssign(),
                                this.checkParams(e, !1, t, !1);
                            else {
                                let r = this.state.strict
                                  , i = this.state.labels;
                                this.state.labels = [],
                                this.prodParam.enter(4 | this.prodParam.currentFlags()),
                                e.body = this.parseBlock(!0, !1, i=>{
                                    let a = !this.isSimpleParamList(e.params);
                                    i && a && this.raise(U.IllegalLanguageModeDirective, {
                                        at: ("method" === e.kind || "constructor" === e.kind) && e.key ? e.key.loc.end : e
                                    });
                                    let n = !r && this.state.strict;
                                    this.checkParams(e, !this.state.strict && !t && !s && !a, t, n),
                                    this.state.strict && e.id && this.checkIdentifier(e.id, 65, n)
                                }
                                ),
                                this.prodParam.exit(),
                                this.state.labels = i
                            }
                            this.expressionScope.exit()
                        }
                        isSimpleParameter(e) {
                            return "Identifier" === e.type
                        }
                        isSimpleParamList(e) {
                            for (let t = 0, s = e.length; t < s; t++)
                                if (!this.isSimpleParameter(e[t]))
                                    return !1;
                            return !0
                        }
                        checkParams(e, t, s) {
                            let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]
                              , i = !t && new Set
                              , a = {
                                type: "FormalParameters"
                            };
                            for (let t of e.params)
                                this.checkLVal(t, {
                                    in: a,
                                    binding: 5,
                                    checkClashes: i,
                                    strictModeChanged: r
                                })
                        }
                        parseExprList(e, t, s, r) {
                            let i = []
                              , a = !0;
                            for (; !this.eat(e); ) {
                                if (a)
                                    a = !1;
                                else if (this.expect(12),
                                this.match(e)) {
                                    r && this.addTrailingCommaExtraToNode(r),
                                    this.next();
                                    break
                                }
                                i.push(this.parseExprListItem(t, s))
                            }
                            return i
                        }
                        parseExprListItem(e, t, s) {
                            let r;
                            if (this.match(12))
                                e || this.raise(U.UnexpectedToken, {
                                    at: this.state.curPosition(),
                                    unexpected: ","
                                }),
                                r = null;
                            else if (this.match(21)) {
                                let e = this.state.startLoc;
                                r = this.parseParenItem(this.parseSpread(t), e)
                            } else if (this.match(17)) {
                                this.expectPlugin("partialApplication"),
                                s || this.raise(U.UnexpectedArgumentPlaceholder, {
                                    at: this.state.startLoc
                                });
                                let e = this.startNode();
                                this.next(),
                                r = this.finishNode(e, "ArgumentPlaceholder")
                            } else
                                r = this.parseMaybeAssignAllowIn(t, this.parseParenItem);
                            return r
                        }
                        parseIdentifier(e) {
                            let t = this.startNode()
                              , s = this.parseIdentifierName(e);
                            return this.createIdentifier(t, s)
                        }
                        createIdentifier(e, t) {
                            return e.name = t,
                            e.loc.identifierName = t,
                            this.finishNode(e, "Identifier")
                        }
                        parseIdentifierName(e) {
                            let t, {startLoc: s, type: r} = this.state;
                            b(r) ? t = this.state.value : this.unexpected();
                            let i = r <= 92;
                            return e ? i && this.replaceToken(130) : this.checkReservedWord(t, s, i, !1),
                            this.next(),
                            t
                        }
                        checkReservedWord(e, t, s, r) {
                            if (!(e.length > 10) && en.has(e)) {
                                if (s && ee.has(e)) {
                                    this.raise(U.UnexpectedKeyword, {
                                        at: t,
                                        keyword: e
                                    });
                                    return
                                }
                                if ((this.state.strict ? r ? ea : ei : er)(e, this.inModule)) {
                                    this.raise(U.UnexpectedReservedWord, {
                                        at: t,
                                        reservedWord: e
                                    });
                                    return
                                }
                                if ("yield" === e) {
                                    if (this.prodParam.hasYield) {
                                        this.raise(U.YieldBindingIdentifier, {
                                            at: t
                                        });
                                        return
                                    }
                                } else if ("await" === e) {
                                    if (this.prodParam.hasAwait) {
                                        this.raise(U.AwaitBindingIdentifier, {
                                            at: t
                                        });
                                        return
                                    }
                                    if (this.scope.inStaticBlock) {
                                        this.raise(U.AwaitBindingIdentifierInStaticBlock, {
                                            at: t
                                        });
                                        return
                                    }
                                    this.expressionScope.recordAsyncArrowParametersError({
                                        at: t
                                    })
                                } else if ("arguments" === e && this.scope.inClassAndNotInNonArrowFunction) {
                                    this.raise(U.ArgumentsInClass, {
                                        at: t
                                    });
                                    return
                                }
                            }
                        }
                        isAwaitAllowed() {
                            return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction)
                        }
                        parseAwait(e) {
                            let t = this.startNodeAt(e);
                            return this.expressionScope.recordParameterInitializerError(U.AwaitExpressionFormalParameter, {
                                at: t
                            }),
                            this.eat(55) && this.raise(U.ObsoleteAwaitStar, {
                                at: t
                            }),
                            this.scope.inFunction || this.options.allowAwaitOutsideFunction || (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0),
                            this.state.soloAwait || (t.argument = this.parseMaybeUnary(null, !0)),
                            this.finishNode(t, "AwaitExpression")
                        }
                        isAmbiguousAwait() {
                            if (this.hasPrecedingLineBreak())
                                return !0;
                            let {type: e} = this.state;
                            return 53 === e || 10 === e || 0 === e || S(e) || 101 === e && !this.state.containsEsc || 135 === e || 56 === e || this.hasPlugin("v8intrinsic") && 54 === e
                        }
                        parseYield() {
                            let e = this.startNode();
                            this.expressionScope.recordParameterInitializerError(U.YieldInParameter, {
                                at: e
                            }),
                            this.next();
                            let t = !1
                              , s = null;
                            if (!this.hasPrecedingLineBreak())
                                switch (t = this.eat(55),
                                this.state.type) {
                                case 13:
                                case 137:
                                case 8:
                                case 11:
                                case 3:
                                case 9:
                                case 14:
                                case 12:
                                    if (!t)
                                        break;
                                default:
                                    s = this.parseMaybeAssign()
                                }
                            return e.delegate = t,
                            e.argument = s,
                            this.finishNode(e, "YieldExpression")
                        }
                        checkPipelineAtInfixOperator(e, t) {
                            this.hasPlugin(["pipelineOperator", {
                                proposal: "smart"
                            }]) && "SequenceExpression" === e.type && this.raise(U.PipelineHeadSequenceExpression, {
                                at: t
                            })
                        }
                        parseSmartPipelineBodyInStyle(e, t) {
                            if (this.isSimpleReference(e)) {
                                let s = this.startNodeAt(t);
                                return s.callee = e,
                                this.finishNode(s, "PipelineBareFunction")
                            }
                            {
                                let s = this.startNodeAt(t);
                                return this.checkSmartPipeTopicBodyEarlyErrors(t),
                                s.expression = e,
                                this.finishNode(s, "PipelineTopicExpression")
                            }
                        }
                        isSimpleReference(e) {
                            switch (e.type) {
                            case "MemberExpression":
                                return !e.computed && this.isSimpleReference(e.object);
                            case "Identifier":
                                return !0;
                            default:
                                return !1
                            }
                        }
                        checkSmartPipeTopicBodyEarlyErrors(e) {
                            if (this.match(19))
                                throw this.raise(U.PipelineBodyNoArrow, {
                                    at: this.state.startLoc
                                });
                            this.topicReferenceWasUsedInCurrentContext() || this.raise(U.PipelineTopicUnused, {
                                at: e
                            })
                        }
                        withTopicBindingContext(e) {
                            let t = this.state.topicContext;
                            this.state.topicContext = {
                                maxNumOfResolvableTopics: 1,
                                maxTopicIndex: null
                            };
                            try {
                                return e()
                            } finally {
                                this.state.topicContext = t
                            }
                        }
                        withSmartMixTopicForbiddingContext(e) {
                            if (!this.hasPlugin(["pipelineOperator", {
                                proposal: "smart"
                            }]))
                                return e();
                            {
                                let t = this.state.topicContext;
                                this.state.topicContext = {
                                    maxNumOfResolvableTopics: 0,
                                    maxTopicIndex: null
                                };
                                try {
                                    return e()
                                } finally {
                                    this.state.topicContext = t
                                }
                            }
                        }
                        withSoloAwaitPermittingContext(e) {
                            let t = this.state.soloAwait;
                            this.state.soloAwait = !0;
                            try {
                                return e()
                            } finally {
                                this.state.soloAwait = t
                            }
                        }
                        allowInAnd(e) {
                            let t = this.prodParam.currentFlags();
                            return 8 & ~t && (this.prodParam.enter(8 | t),
                            this.prodParam.exit()),
                            e()
                        }
                        disallowInAnd(e) {
                            let t = this.prodParam.currentFlags();
                            return 8 & t && (this.prodParam.enter(-9 & t),
                            this.prodParam.exit()),
                            e()
                        }
                        registerTopicReference() {
                            this.state.topicContext.maxTopicIndex = 0
                        }
                        topicReferenceIsAllowedInCurrentContext() {
                            return this.state.topicContext.maxNumOfResolvableTopics >= 1
                        }
                        topicReferenceWasUsedInCurrentContext() {
                            return null != this.state.topicContext.maxTopicIndex && this.state.topicContext.maxTopicIndex >= 0
                        }
                        parseFSharpPipelineBody(e) {
                            let t = this.state.startLoc;
                            this.state.potentialArrowAt = this.state.start;
                            let s = this.state.inFSharpPipelineDirectBody;
                            this.state.inFSharpPipelineDirectBody = !0;
                            let r = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, e);
                            return this.state.inFSharpPipelineDirectBody = s,
                            r
                        }
                        parseModuleExpression() {
                            this.expectPlugin("moduleBlocks");
                            let e = this.startNode();
                            this.next(),
                            this.match(5) || this.unexpected(null, 5);
                            let t = this.startNodeAt(this.state.endLoc);
                            this.next();
                            let s = this.initializeScopes(!0);
                            this.enterInitialScopes();
                            try {
                                e.body = this.parseProgram(t, 8, "module")
                            } finally {
                                s()
                            }
                            return this.finishNode(e, "ModuleExpression")
                        }
                        parsePropertyNamePrefixOperator(e) {}
                    }
                      , tf = {
                        kind: "loop"
                    }
                      , ty = {
                        kind: "switch"
                    }
                      , tx = /[\uD800-\uDFFF]/u
                      , tg = /in(?:stanceof)?/y
                      , tP = class extends tm {
                        parseTopLevel(e, t) {
                            return e.program = this.parseProgram(t),
                            e.comments = this.state.comments,
                            this.options.tokens && (e.tokens = function(e, t) {
                                for (let s = 0; s < e.length; s++) {
                                    let r = e[s]
                                      , {type: i} = r;
                                    if ("number" == typeof i) {
                                        if (136 === i) {
                                            let {loc: t, start: i, value: a, end: n} = r
                                              , o = i + 1
                                              , h = N(t.start, 1);
                                            e.splice(s, 1, new eM({
                                                type: l[27],
                                                value: "#",
                                                start: i,
                                                end: o,
                                                startLoc: t.start,
                                                endLoc: h
                                            }), new eM({
                                                type: l[130],
                                                value: a,
                                                start: o,
                                                end: n,
                                                startLoc: h,
                                                endLoc: t.end
                                            })),
                                            s++;
                                            continue
                                        }
                                        if (S(i)) {
                                            let a, n, o, h, {loc: p, start: c, value: u, end: d} = r, m = c + 1, f = N(p.start, 1), y;
                                            y = new eM(96 === t.charCodeAt(c) ? {
                                                type: l[22],
                                                value: "`",
                                                start: c,
                                                end: m,
                                                startLoc: p.start,
                                                endLoc: f
                                            } : {
                                                type: l[8],
                                                value: "}",
                                                start: c,
                                                end: m,
                                                startLoc: p.start,
                                                endLoc: f
                                            }),
                                            24 === i ? (n = d - 1,
                                            o = N(p.end, -1),
                                            a = null === u ? null : u.slice(1, -1),
                                            h = new eM({
                                                type: l[22],
                                                value: "`",
                                                start: n,
                                                end: d,
                                                startLoc: o,
                                                endLoc: p.end
                                            })) : (n = d - 2,
                                            o = N(p.end, -2),
                                            a = null === u ? null : u.slice(1, -2),
                                            h = new eM({
                                                type: l[23],
                                                value: "${",
                                                start: n,
                                                end: d,
                                                startLoc: o,
                                                endLoc: p.end
                                            })),
                                            e.splice(s, 1, y, new eM({
                                                type: l[20],
                                                value: a,
                                                start: m,
                                                end: n,
                                                startLoc: f,
                                                endLoc: o
                                            }), h),
                                            s += 2;
                                            continue
                                        }
                                        r.type = l[i]
                                    }
                                }
                                return e
                            }(this.tokens, this.input)),
                            this.finishNode(e, "File")
                        }
                        parseProgram(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 137
                              , s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.options.sourceType;
                            if (e.sourceType = s,
                            e.interpreter = this.parseInterpreterDirective(),
                            this.parseBlockBody(e, !0, !0, t),
                            this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
                                for (let[e,t] of Array.from(this.scope.undefinedExports))
                                    this.raise(U.ModuleExportUndefined, {
                                        at: t,
                                        localName: e
                                    });
                            return 137 === t ? this.finishNode(e, "Program") : this.finishNodeAt(e, "Program", N(this.state.startLoc, -1))
                        }
                        stmtToDirective(e) {
                            let t = e;
                            t.type = "Directive",
                            t.value = t.expression,
                            delete t.expression;
                            let s = t.value
                              , r = s.value
                              , i = this.input.slice(s.start, s.end)
                              , a = s.value = i.slice(1, -1);
                            return this.addExtra(s, "raw", i),
                            this.addExtra(s, "rawValue", a),
                            this.addExtra(s, "expressionValue", r),
                            s.type = "DirectiveLiteral",
                            t
                        }
                        parseInterpreterDirective() {
                            if (!this.match(28))
                                return null;
                            let e = this.startNode();
                            return e.value = this.state.value,
                            this.next(),
                            this.finishNode(e, "InterpreterDirective")
                        }
                        isLet() {
                            return !!this.isContextual(99) && this.hasFollowingBindingAtom()
                        }
                        chStartsBindingIdentifier(e, t) {
                            if (!Y(e))
                                return 92 === e;
                            if (tg.lastIndex = t,
                            tg.test(this.input)) {
                                let e = this.codePointAtPos(tg.lastIndex);
                                if (!Q(e) && 92 !== e)
                                    return !1
                            }
                            return !0
                        }
                        chStartsBindingPattern(e) {
                            return 91 === e || 123 === e
                        }
                        hasFollowingBindingAtom() {
                            let e = this.nextTokenStart()
                              , t = this.codePointAtPos(e);
                            return this.chStartsBindingPattern(t) || this.chStartsBindingIdentifier(t, e)
                        }
                        hasFollowingBindingIdentifier() {
                            let e = this.nextTokenStart()
                              , t = this.codePointAtPos(e);
                            return this.chStartsBindingIdentifier(t, e)
                        }
                        startsUsingForOf() {
                            let e = this.lookahead();
                            return (101 !== e.type || !!e.containsEsc) && (this.expectPlugin("explicitResourceManagement"),
                            !0)
                        }
                        parseModuleItem() {
                            return this.parseStatementLike(15)
                        }
                        parseStatementListItem() {
                            return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8))
                        }
                        parseStatementOrSloppyAnnexBFunctionDeclaration() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                              , t = 0;
                            return this.options.annexB && !this.state.strict && (t |= 4,
                            e && (t |= 8)),
                            this.parseStatementLike(t)
                        }
                        parseStatement() {
                            return this.parseStatementLike(0)
                        }
                        parseStatementLike(e) {
                            let t = null;
                            return this.match(26) && (t = this.parseDecorators(!0)),
                            this.parseStatementContent(e, t)
                        }
                        parseStatementContent(e, t) {
                            let s = this.state.type
                              , r = this.startNode()
                              , i = !!(2 & e)
                              , a = !!(4 & e);
                            switch (s) {
                            case 60:
                                return this.parseBreakContinueStatement(r, !0);
                            case 63:
                                return this.parseBreakContinueStatement(r, !1);
                            case 64:
                                return this.parseDebuggerStatement(r);
                            case 90:
                                return this.parseDoWhileStatement(r);
                            case 91:
                                return this.parseForStatement(r);
                            case 68:
                                if (46 === this.lookaheadCharCode())
                                    break;
                                return a || this.raise(this.state.strict ? U.StrictFunction : this.options.annexB ? U.SloppyFunctionAnnexB : U.SloppyFunction, {
                                    at: this.state.startLoc
                                }),
                                this.parseFunctionStatement(r, !1, !i && a);
                            case 80:
                                return i || this.unexpected(),
                                this.parseClass(this.maybeTakeDecorators(t, r), !0);
                            case 69:
                                return this.parseIfStatement(r);
                            case 70:
                                return this.parseReturnStatement(r);
                            case 71:
                                return this.parseSwitchStatement(r);
                            case 72:
                                return this.parseThrowStatement(r);
                            case 73:
                                return this.parseTryStatement(r);
                            case 105:
                                if (this.hasFollowingLineBreak() || this.state.containsEsc || !this.hasFollowingBindingIdentifier())
                                    break;
                                return this.expectPlugin("explicitResourceManagement"),
                                !this.scope.inModule && this.scope.inTopLevel ? this.raise(U.UnexpectedUsingDeclaration, {
                                    at: this.state.startLoc
                                }) : i || this.raise(U.UnexpectedLexicalDeclaration, {
                                    at: this.state.startLoc
                                }),
                                this.parseVarStatement(r, "using");
                            case 99:
                                {
                                    if (this.state.containsEsc)
                                        break;
                                    let e = this.nextTokenStart()
                                      , t = this.codePointAtPos(e);
                                    if (91 !== t && (!i && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(t, e) && 123 !== t))
                                        break
                                }
                            case 75:
                                i || this.raise(U.UnexpectedLexicalDeclaration, {
                                    at: this.state.startLoc
                                });
                            case 74:
                                {
                                    let e = this.state.value;
                                    return this.parseVarStatement(r, e)
                                }
                            case 92:
                                return this.parseWhileStatement(r);
                            case 76:
                                return this.parseWithStatement(r);
                            case 5:
                                return this.parseBlock();
                            case 13:
                                return this.parseEmptyStatement(r);
                            case 83:
                                {
                                    let e = this.lookaheadCharCode();
                                    if (40 === e || 46 === e)
                                        break
                                }
                            case 82:
                                {
                                    let i;
                                    return this.options.allowImportExportEverywhere || 1 & e || this.raise(U.UnexpectedImportExport, {
                                        at: this.state.startLoc
                                    }),
                                    this.next(),
                                    83 === s ? "ImportDeclaration" !== (i = this.parseImport(r)).type || i.importKind && "value" !== i.importKind || (this.sawUnambiguousESM = !0) : ("ExportNamedDeclaration" !== (i = this.parseExport(r, t)).type || i.exportKind && "value" !== i.exportKind) && ("ExportAllDeclaration" !== i.type || i.exportKind && "value" !== i.exportKind) && "ExportDefaultDeclaration" !== i.type || (this.sawUnambiguousESM = !0),
                                    this.assertModuleNodeAllowed(i),
                                    i
                                }
                            default:
                                if (this.isAsyncFunction())
                                    return i || this.raise(U.AsyncFunctionInSingleStatementContext, {
                                        at: this.state.startLoc
                                    }),
                                    this.next(),
                                    this.parseFunctionStatement(r, !0, !i && a)
                            }
                            let n = this.state.value
                              , o = this.parseExpression();
                            return P(s) && "Identifier" === o.type && this.eat(14) ? this.parseLabeledStatement(r, n, o, e) : this.parseExpressionStatement(r, o, t)
                        }
                        assertModuleNodeAllowed(e) {
                            this.options.allowImportExportEverywhere || this.inModule || this.raise(U.ImportOutsideModule, {
                                at: e
                            })
                        }
                        decoratorsEnabledBeforeExport() {
                            return !!this.hasPlugin("decorators-legacy") || this.hasPlugin("decorators") && !1 !== this.getPluginOption("decorators", "decoratorsBeforeExport")
                        }
                        maybeTakeDecorators(e, t, s) {
                            return e && (t.decorators && t.decorators.length > 0 ? ("boolean" != typeof this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(U.DecoratorsBeforeAfterExport, {
                                at: t.decorators[0]
                            }),
                            t.decorators.unshift(...e)) : t.decorators = e,
                            this.resetStartLocationFromNode(t, e[0]),
                            s && this.resetStartLocationFromNode(s, t)),
                            t
                        }
                        canHaveLeadingDecorator() {
                            return this.match(80)
                        }
                        parseDecorators(e) {
                            let t = [];
                            do
                                t.push(this.parseDecorator());
                            while (this.match(26));
                            if (this.match(82))
                                e || this.unexpected(),
                                this.decoratorsEnabledBeforeExport() || this.raise(U.DecoratorExportClass, {
                                    at: this.state.startLoc
                                });
                            else if (!this.canHaveLeadingDecorator())
                                throw this.raise(U.UnexpectedLeadingDecorator, {
                                    at: this.state.startLoc
                                });
                            return t
                        }
                        parseDecorator() {
                            this.expectOnePlugin(["decorators", "decorators-legacy"]);
                            let e = this.startNode();
                            if (this.next(),
                            this.hasPlugin("decorators")) {
                                let t = this.state.startLoc, s;
                                if (this.match(10)) {
                                    let t = this.state.startLoc;
                                    this.next(),
                                    s = this.parseExpression(),
                                    this.expect(11),
                                    s = this.wrapParenthesis(t, s);
                                    let r = this.state.startLoc;
                                    e.expression = this.parseMaybeDecoratorArguments(s),
                                    !1 === this.getPluginOption("decorators", "allowCallParenthesized") && e.expression !== s && this.raise(U.DecoratorArgumentsOutsideParentheses, {
                                        at: r
                                    })
                                } else {
                                    for (s = this.parseIdentifier(!1); this.eat(16); ) {
                                        let e = this.startNodeAt(t);
                                        e.object = s,
                                        this.match(136) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc),
                                        e.property = this.parsePrivateName()) : e.property = this.parseIdentifier(!0),
                                        e.computed = !1,
                                        s = this.finishNode(e, "MemberExpression")
                                    }
                                    e.expression = this.parseMaybeDecoratorArguments(s)
                                }
                            } else
                                e.expression = this.parseExprSubscripts();
                            return this.finishNode(e, "Decorator")
                        }
                        parseMaybeDecoratorArguments(e) {
                            if (this.eat(10)) {
                                let t = this.startNodeAtNode(e);
                                return t.callee = e,
                                t.arguments = this.parseCallExpressionArguments(11, !1),
                                this.toReferencedList(t.arguments),
                                this.finishNode(t, "CallExpression")
                            }
                            return e
                        }
                        parseBreakContinueStatement(e, t) {
                            return this.next(),
                            this.isLineTerminator() ? e.label = null : (e.label = this.parseIdentifier(),
                            this.semicolon()),
                            this.verifyBreakContinue(e, t),
                            this.finishNode(e, t ? "BreakStatement" : "ContinueStatement")
                        }
                        verifyBreakContinue(e, t) {
                            let s;
                            for (s = 0; s < this.state.labels.length; ++s) {
                                let r = this.state.labels[s];
                                if ((null == e.label || r.name === e.label.name) && (null != r.kind && (t || "loop" === r.kind) || e.label && t))
                                    break
                            }
                            s === this.state.labels.length && this.raise(U.IllegalBreakContinue, {
                                at: e,
                                type: t ? "BreakStatement" : "ContinueStatement"
                            })
                        }
                        parseDebuggerStatement(e) {
                            return this.next(),
                            this.semicolon(),
                            this.finishNode(e, "DebuggerStatement")
                        }
                        parseHeaderExpression() {
                            this.expect(10);
                            let e = this.parseExpression();
                            return this.expect(11),
                            e
                        }
                        parseDoWhileStatement(e) {
                            return this.next(),
                            this.state.labels.push(tf),
                            e.body = this.withSmartMixTopicForbiddingContext(()=>this.parseStatement()),
                            this.state.labels.pop(),
                            this.expect(92),
                            e.test = this.parseHeaderExpression(),
                            this.eat(13),
                            this.finishNode(e, "DoWhileStatement")
                        }
                        parseForStatement(e) {
                            this.next(),
                            this.state.labels.push(tf);
                            let t = null;
                            if (this.isAwaitAllowed() && this.eatContextual(96) && (t = this.state.lastTokStartLoc),
                            this.scope.enter(0),
                            this.expect(10),
                            this.match(13))
                                return null !== t && this.unexpected(t),
                                this.parseFor(e, null);
                            let s = this.isContextual(99)
                              , r = this.isContextual(105) && !this.hasFollowingLineBreak()
                              , i = s && this.hasFollowingBindingAtom() || r && this.hasFollowingBindingIdentifier() && this.startsUsingForOf();
                            if (this.match(74) || this.match(75) || i) {
                                let s = this.startNode()
                                  , i = this.state.value;
                                this.next(),
                                this.parseVar(s, !0, i);
                                let a = this.finishNode(s, "VariableDeclaration")
                                  , n = this.match(58);
                                return n && r && this.raise(U.ForInUsing, {
                                    at: a
                                }),
                                (n || this.isContextual(101)) && 1 === a.declarations.length ? this.parseForIn(e, a, t) : (null !== t && this.unexpected(t),
                                this.parseFor(e, a))
                            }
                            let a = this.isContextual(95)
                              , n = new eH
                              , o = this.parseExpression(!0, n)
                              , h = this.isContextual(101);
                            return (h && (s && this.raise(U.ForOfLet, {
                                at: o
                            }),
                            null === t && a && "Identifier" === o.type && this.raise(U.ForOfAsync, {
                                at: o
                            })),
                            h || this.match(58)) ? (this.checkDestructuringPrivate(n),
                            this.toAssignable(o, !0),
                            this.checkLVal(o, {
                                in: {
                                    type: h ? "ForOfStatement" : "ForInStatement"
                                }
                            }),
                            this.parseForIn(e, o, t)) : (this.checkExpressionErrors(n, !0),
                            null !== t && this.unexpected(t),
                            this.parseFor(e, o))
                        }
                        parseFunctionStatement(e, t, s) {
                            return this.next(),
                            this.parseFunction(e, 1 | (s ? 2 : 0) | (t ? 8 : 0))
                        }
                        parseIfStatement(e) {
                            return this.next(),
                            e.test = this.parseHeaderExpression(),
                            e.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(),
                            e.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null,
                            this.finishNode(e, "IfStatement")
                        }
                        parseReturnStatement(e) {
                            return this.prodParam.hasReturn || this.options.allowReturnOutsideFunction || this.raise(U.IllegalReturn, {
                                at: this.state.startLoc
                            }),
                            this.next(),
                            this.isLineTerminator() ? e.argument = null : (e.argument = this.parseExpression(),
                            this.semicolon()),
                            this.finishNode(e, "ReturnStatement")
                        }
                        parseSwitchStatement(e) {
                            let t, s;
                            this.next(),
                            e.discriminant = this.parseHeaderExpression();
                            let r = e.cases = [];
                            for (this.expect(5),
                            this.state.labels.push(ty),
                            this.scope.enter(0); !this.match(8); )
                                if (this.match(61) || this.match(65)) {
                                    let e = this.match(61);
                                    t && this.finishNode(t, "SwitchCase"),
                                    r.push(t = this.startNode()),
                                    t.consequent = [],
                                    this.next(),
                                    e ? t.test = this.parseExpression() : (s && this.raise(U.MultipleDefaultsInSwitch, {
                                        at: this.state.lastTokStartLoc
                                    }),
                                    s = !0,
                                    t.test = null),
                                    this.expect(14)
                                } else
                                    t ? t.consequent.push(this.parseStatementListItem()) : this.unexpected();
                            return this.scope.exit(),
                            t && this.finishNode(t, "SwitchCase"),
                            this.next(),
                            this.state.labels.pop(),
                            this.finishNode(e, "SwitchStatement")
                        }
                        parseThrowStatement(e) {
                            return this.next(),
                            this.hasPrecedingLineBreak() && this.raise(U.NewlineAfterThrow, {
                                at: this.state.lastTokEndLoc
                            }),
                            e.argument = this.parseExpression(),
                            this.semicolon(),
                            this.finishNode(e, "ThrowStatement")
                        }
                        parseCatchClauseParam() {
                            let e = this.parseBindingAtom();
                            return this.scope.enter(this.options.annexB && "Identifier" === e.type ? 8 : 0),
                            this.checkLVal(e, {
                                in: {
                                    type: "CatchClause"
                                },
                                binding: 9
                            }),
                            e
                        }
                        parseTryStatement(e) {
                            if (this.next(),
                            e.block = this.parseBlock(),
                            e.handler = null,
                            this.match(62)) {
                                let t = this.startNode();
                                this.next(),
                                this.match(10) ? (this.expect(10),
                                t.param = this.parseCatchClauseParam(),
                                this.expect(11)) : (t.param = null,
                                this.scope.enter(0)),
                                t.body = this.withSmartMixTopicForbiddingContext(()=>this.parseBlock(!1, !1)),
                                this.scope.exit(),
                                e.handler = this.finishNode(t, "CatchClause")
                            }
                            return e.finalizer = this.eat(67) ? this.parseBlock() : null,
                            e.handler || e.finalizer || this.raise(U.NoCatchOrFinally, {
                                at: e
                            }),
                            this.finishNode(e, "TryStatement")
                        }
                        parseVarStatement(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return this.next(),
                            this.parseVar(e, !1, t, s),
                            this.semicolon(),
                            this.finishNode(e, "VariableDeclaration")
                        }
                        parseWhileStatement(e) {
                            return this.next(),
                            e.test = this.parseHeaderExpression(),
                            this.state.labels.push(tf),
                            e.body = this.withSmartMixTopicForbiddingContext(()=>this.parseStatement()),
                            this.state.labels.pop(),
                            this.finishNode(e, "WhileStatement")
                        }
                        parseWithStatement(e) {
                            return this.state.strict && this.raise(U.StrictWith, {
                                at: this.state.startLoc
                            }),
                            this.next(),
                            e.object = this.parseHeaderExpression(),
                            e.body = this.withSmartMixTopicForbiddingContext(()=>this.parseStatement()),
                            this.finishNode(e, "WithStatement")
                        }
                        parseEmptyStatement(e) {
                            return this.next(),
                            this.finishNode(e, "EmptyStatement")
                        }
                        parseLabeledStatement(e, t, s, r) {
                            var i;
                            for (let e of this.state.labels)
                                e.name === t && this.raise(U.LabelRedeclaration, {
                                    at: s,
                                    labelName: t
                                });
                            let a = (i = this.state.type) >= 90 && i <= 92 ? "loop" : this.match(71) ? "switch" : null;
                            for (let t = this.state.labels.length - 1; t >= 0; t--) {
                                let s = this.state.labels[t];
                                if (s.statementStart === e.start)
                                    s.statementStart = this.state.start,
                                    s.kind = a;
                                else
                                    break
                            }
                            return this.state.labels.push({
                                name: t,
                                kind: a,
                                statementStart: this.state.start
                            }),
                            e.body = 8 & r ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(),
                            this.state.labels.pop(),
                            e.label = s,
                            this.finishNode(e, "LabeledStatement")
                        }
                        parseExpressionStatement(e, t, s) {
                            return e.expression = t,
                            this.semicolon(),
                            this.finishNode(e, "ExpressionStatement")
                        }
                        parseBlock() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                              , t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1]
                              , s = arguments.length > 2 ? arguments[2] : void 0
                              , r = this.startNode();
                            return e && this.state.strictErrors.clear(),
                            this.expect(5),
                            t && this.scope.enter(0),
                            this.parseBlockBody(r, e, !1, 8, s),
                            t && this.scope.exit(),
                            this.finishNode(r, "BlockStatement")
                        }
                        isValidDirective(e) {
                            return "ExpressionStatement" === e.type && "StringLiteral" === e.expression.type && !e.expression.extra.parenthesized
                        }
                        parseBlockBody(e, t, s, r, i) {
                            let a = e.body = []
                              , n = e.directives = [];
                            this.parseBlockOrModuleBlockBody(a, t ? n : void 0, s, r, i)
                        }
                        parseBlockOrModuleBlockBody(e, t, s, r, i) {
                            let a = this.state.strict
                              , n = !1
                              , o = !1;
                            for (; !this.match(r); ) {
                                let r = s ? this.parseModuleItem() : this.parseStatementListItem();
                                if (t && !o) {
                                    if (this.isValidDirective(r)) {
                                        let e = this.stmtToDirective(r);
                                        t.push(e),
                                        n || "use strict" !== e.value.value || (n = !0,
                                        this.setStrict(!0));
                                        continue
                                    }
                                    o = !0,
                                    this.state.strictErrors.clear()
                                }
                                e.push(r)
                            }
                            i && i.call(this, n),
                            a || this.setStrict(!1),
                            this.next()
                        }
                        parseFor(e, t) {
                            return e.init = t,
                            this.semicolon(!1),
                            e.test = this.match(13) ? null : this.parseExpression(),
                            this.semicolon(!1),
                            e.update = this.match(11) ? null : this.parseExpression(),
                            this.expect(11),
                            e.body = this.withSmartMixTopicForbiddingContext(()=>this.parseStatement()),
                            this.scope.exit(),
                            this.state.labels.pop(),
                            this.finishNode(e, "ForStatement")
                        }
                        parseForIn(e, t, s) {
                            let r = this.match(58);
                            return this.next(),
                            r ? null !== s && this.unexpected(s) : e.await = null !== s,
                            "VariableDeclaration" !== t.type || null == t.declarations[0].init || r && this.options.annexB && !this.state.strict && "var" === t.kind && "Identifier" === t.declarations[0].id.type || this.raise(U.ForInOfLoopInitializer, {
                                at: t,
                                type: r ? "ForInStatement" : "ForOfStatement"
                            }),
                            "AssignmentPattern" === t.type && this.raise(U.InvalidLhs, {
                                at: t,
                                ancestor: {
                                    type: "ForStatement"
                                }
                            }),
                            e.left = t,
                            e.right = r ? this.parseExpression() : this.parseMaybeAssignAllowIn(),
                            this.expect(11),
                            e.body = this.withSmartMixTopicForbiddingContext(()=>this.parseStatement()),
                            this.scope.exit(),
                            this.state.labels.pop(),
                            this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
                        }
                        parseVar(e, t, s) {
                            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                              , i = e.declarations = [];
                            for (e.kind = s; ; ) {
                                let e = this.startNode();
                                if (this.parseVarId(e, s),
                                e.init = this.eat(29) ? t ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null,
                                null !== e.init || r || ("Identifier" === e.id.type || t && (this.match(58) || this.isContextual(101)) ? "const" !== s || this.match(58) || this.isContextual(101) || this.raise(U.DeclarationMissingInitializer, {
                                    at: this.state.lastTokEndLoc,
                                    kind: "const"
                                }) : this.raise(U.DeclarationMissingInitializer, {
                                    at: this.state.lastTokEndLoc,
                                    kind: "destructuring"
                                })),
                                i.push(this.finishNode(e, "VariableDeclarator")),
                                !this.eat(12))
                                    break
                            }
                            return e
                        }
                        parseVarId(e, t) {
                            "using" === t && !this.inModule && this.match(96) && this.raise(U.AwaitInUsingBinding, {
                                at: this.state.startLoc
                            });
                            let s = this.parseBindingAtom();
                            this.checkLVal(s, {
                                in: {
                                    type: "VariableDeclarator"
                                },
                                binding: "var" === t ? 5 : 8201
                            }),
                            e.id = s
                        }
                        parseAsyncFunctionExpression(e) {
                            return this.parseFunction(e, 8)
                        }
                        parseFunction(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                              , s = 2 & t
                              , r = !!(1 & t)
                              , i = !!(8 & t);
                            this.initFunction(e, i),
                            this.match(55) && (s && this.raise(U.GeneratorInSingleStatementContext, {
                                at: this.state.startLoc
                            }),
                            this.next(),
                            e.generator = !0),
                            r && (e.id = this.parseFunctionId(r && !(4 & t)));
                            let a = this.state.maybeInArrowParameters;
                            return this.state.maybeInArrowParameters = !1,
                            this.scope.enter(2),
                            this.prodParam.enter(e_(i, e.generator)),
                            r || (e.id = this.parseFunctionId()),
                            this.parseFunctionParams(e, !1),
                            this.withSmartMixTopicForbiddingContext(()=>{
                                this.parseFunctionBodyAndFinish(e, r ? "FunctionDeclaration" : "FunctionExpression")
                            }
                            ),
                            this.prodParam.exit(),
                            this.scope.exit(),
                            r && !s && this.registerFunctionStatementId(e),
                            this.state.maybeInArrowParameters = a,
                            e
                        }
                        parseFunctionId(e) {
                            return e || P(this.state.type) ? this.parseIdentifier() : null
                        }
                        parseFunctionParams(e, t) {
                            this.expect(10),
                            this.expressionScope.enter(new eB(3)),
                            e.params = this.parseBindingList(11, 41, 2 | (t ? 4 : 0)),
                            this.expressionScope.exit()
                        }
                        registerFunctionStatementId(e) {
                            e.id && this.scope.declareName(e.id.name, !this.options.annexB || this.state.strict || e.generator || e.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, e.id.loc.start)
                        }
                        parseClass(e, t, s) {
                            this.next();
                            let r = this.state.strict;
                            return this.state.strict = !0,
                            this.parseClassId(e, t, s),
                            this.parseClassSuper(e),
                            e.body = this.parseClassBody(!!e.superClass, r),
                            this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
                        }
                        isClassProperty() {
                            return this.match(29) || this.match(13) || this.match(8)
                        }
                        isClassMethod() {
                            return this.match(10)
                        }
                        isNonstaticConstructor(e) {
                            return !e.computed && !e.static && ("constructor" === e.key.name || "constructor" === e.key.value)
                        }
                        parseClassBody(e, t) {
                            this.classScope.enter();
                            let s = {
                                hadConstructor: !1,
                                hadSuperClass: e
                            }
                              , r = []
                              , i = this.startNode();
                            if (i.body = [],
                            this.expect(5),
                            this.withSmartMixTopicForbiddingContext(()=>{
                                for (; !this.match(8); ) {
                                    if (this.eat(13)) {
                                        if (r.length > 0)
                                            throw this.raise(U.DecoratorSemicolon, {
                                                at: this.state.lastTokEndLoc
                                            });
                                        continue
                                    }
                                    if (this.match(26)) {
                                        r.push(this.parseDecorator());
                                        continue
                                    }
                                    let e = this.startNode();
                                    r.length && (e.decorators = r,
                                    this.resetStartLocationFromNode(e, r[0]),
                                    r = []),
                                    this.parseClassMember(i, e, s),
                                    "constructor" === e.kind && e.decorators && e.decorators.length > 0 && this.raise(U.DecoratorConstructor, {
                                        at: e
                                    })
                                }
                            }
                            ),
                            this.state.strict = t,
                            this.next(),
                            r.length)
                                throw this.raise(U.TrailingDecorator, {
                                    at: this.state.startLoc
                                });
                            return this.classScope.exit(),
                            this.finishNode(i, "ClassBody")
                        }
                        parseClassMemberFromModifier(e, t) {
                            let s = this.parseIdentifier(!0);
                            if (this.isClassMethod()) {
                                let r = t;
                                return r.kind = "method",
                                r.computed = !1,
                                r.key = s,
                                r.static = !1,
                                this.pushClassMethod(e, r, !1, !1, !1, !1),
                                !0
                            }
                            if (this.isClassProperty()) {
                                let r = t;
                                return r.computed = !1,
                                r.key = s,
                                r.static = !1,
                                e.body.push(this.parseClassProperty(r)),
                                !0
                            }
                            return this.resetPreviousNodeTrailingComments(s),
                            !1
                        }
                        parseClassMember(e, t, s) {
                            let r = this.isContextual(104);
                            if (r) {
                                if (this.parseClassMemberFromModifier(e, t))
                                    return;
                                if (this.eat(5)) {
                                    this.parseClassStaticBlock(e, t);
                                    return
                                }
                            }
                            this.parseClassMemberWithIsStatic(e, t, s, r)
                        }
                        parseClassMemberWithIsStatic(e, t, s, r) {
                            let i = t
                              , a = i;
                            if (t.static = r,
                            this.parsePropertyNamePrefixOperator(t),
                            this.eat(55)) {
                                a.kind = "method";
                                let s = this.match(136);
                                if (this.parseClassElementName(a),
                                s) {
                                    this.pushClassPrivateMethod(e, t, !0, !1);
                                    return
                                }
                                this.isNonstaticConstructor(i) && this.raise(U.ConstructorIsGenerator, {
                                    at: i.key
                                }),
                                this.pushClassMethod(e, i, !0, !1, !1, !1);
                                return
                            }
                            let n = P(this.state.type) && !this.state.containsEsc
                              , o = this.match(136)
                              , h = this.parseClassElementName(t)
                              , l = this.state.startLoc;
                            if (this.parsePostMemberNameModifiers(i),
                            this.isClassMethod()) {
                                if (a.kind = "method",
                                o) {
                                    this.pushClassPrivateMethod(e, t, !1, !1);
                                    return
                                }
                                let r = this.isNonstaticConstructor(i)
                                  , n = !1;
                                r && (i.kind = "constructor",
                                s.hadConstructor && !this.hasPlugin("typescript") && this.raise(U.DuplicateConstructor, {
                                    at: h
                                }),
                                r && this.hasPlugin("typescript") && t.override && this.raise(U.OverrideOnConstructor, {
                                    at: h
                                }),
                                s.hadConstructor = !0,
                                n = s.hadSuperClass),
                                this.pushClassMethod(e, i, !1, !1, r, n)
                            } else if (this.isClassProperty())
                                o ? this.pushClassPrivateProperty(e, t) : this.pushClassProperty(e, t);
                            else if (n && "async" === h.name && !this.isLineTerminator()) {
                                this.resetPreviousNodeTrailingComments(h);
                                let s = this.eat(55);
                                i.optional && this.unexpected(l),
                                a.kind = "method";
                                let r = this.match(136);
                                this.parseClassElementName(a),
                                this.parsePostMemberNameModifiers(i),
                                r ? this.pushClassPrivateMethod(e, t, s, !0) : (this.isNonstaticConstructor(i) && this.raise(U.ConstructorIsAsync, {
                                    at: i.key
                                }),
                                this.pushClassMethod(e, i, s, !0, !1, !1))
                            } else if (n && ("get" === h.name || "set" === h.name) && !(this.match(55) && this.isLineTerminator())) {
                                this.resetPreviousNodeTrailingComments(h),
                                a.kind = h.name;
                                let s = this.match(136);
                                this.parseClassElementName(i),
                                s ? this.pushClassPrivateMethod(e, t, !1, !1) : (this.isNonstaticConstructor(i) && this.raise(U.ConstructorIsAccessor, {
                                    at: i.key
                                }),
                                this.pushClassMethod(e, i, !1, !1, !1, !1)),
                                this.checkGetterSetterParams(i)
                            } else if (n && "accessor" === h.name && !this.isLineTerminator()) {
                                this.expectPlugin("decoratorAutoAccessors"),
                                this.resetPreviousNodeTrailingComments(h);
                                let s = this.match(136);
                                this.parseClassElementName(t),
                                this.pushClassAccessorProperty(e, t, s)
                            } else
                                this.isLineTerminator() ? o ? this.pushClassPrivateProperty(e, t) : this.pushClassProperty(e, t) : this.unexpected()
                        }
                        parseClassElementName(e) {
                            let {type: t, value: s} = this.state;
                            if ((130 === t || 131 === t) && e.static && "prototype" === s && this.raise(U.StaticPrototype, {
                                at: this.state.startLoc
                            }),
                            136 === t) {
                                "constructor" === s && this.raise(U.ConstructorClassPrivateField, {
                                    at: this.state.startLoc
                                });
                                let t = this.parsePrivateName();
                                return e.key = t,
                                t
                            }
                            return this.parsePropertyName(e)
                        }
                        parseClassStaticBlock(e, t) {
                            var s;
                            this.scope.enter(208);
                            let r = this.state.labels;
                            this.state.labels = [],
                            this.prodParam.enter(0);
                            let i = t.body = [];
                            this.parseBlockOrModuleBlockBody(i, void 0, !1, 8),
                            this.prodParam.exit(),
                            this.scope.exit(),
                            this.state.labels = r,
                            e.body.push(this.finishNode(t, "StaticBlock")),
                            null != (s = t.decorators) && s.length && this.raise(U.DecoratorStaticBlock, {
                                at: t
                            })
                        }
                        pushClassProperty(e, t) {
                            t.computed || "constructor" !== t.key.name && "constructor" !== t.key.value || this.raise(U.ConstructorClassField, {
                                at: t.key
                            }),
                            e.body.push(this.parseClassProperty(t))
                        }
                        pushClassPrivateProperty(e, t) {
                            let s = this.parseClassPrivateProperty(t);
                            e.body.push(s),
                            this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.loc.start)
                        }
                        pushClassAccessorProperty(e, t, s) {
                            if (!s && !t.computed) {
                                let e = t.key;
                                ("constructor" === e.name || "constructor" === e.value) && this.raise(U.ConstructorClassField, {
                                    at: e
                                })
                            }
                            let r = this.parseClassAccessorProperty(t);
                            e.body.push(r),
                            s && this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), 0, r.key.loc.start)
                        }
                        pushClassMethod(e, t, s, r, i, a) {
                            e.body.push(this.parseMethod(t, s, r, i, a, "ClassMethod", !0))
                        }
                        pushClassPrivateMethod(e, t, s, r) {
                            let i = this.parseMethod(t, s, r, !1, !1, "ClassPrivateMethod", !0);
                            e.body.push(i);
                            let a = "get" === i.kind ? i.static ? 6 : 2 : "set" === i.kind ? i.static ? 5 : 1 : 0;
                            this.declareClassPrivateMethodInScope(i, a)
                        }
                        declareClassPrivateMethodInScope(e, t) {
                            this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), t, e.key.loc.start)
                        }
                        parsePostMemberNameModifiers(e) {}
                        parseClassPrivateProperty(e) {
                            return this.parseInitializer(e),
                            this.semicolon(),
                            this.finishNode(e, "ClassPrivateProperty")
                        }
                        parseClassProperty(e) {
                            return this.parseInitializer(e),
                            this.semicolon(),
                            this.finishNode(e, "ClassProperty")
                        }
                        parseClassAccessorProperty(e) {
                            return this.parseInitializer(e),
                            this.semicolon(),
                            this.finishNode(e, "ClassAccessorProperty")
                        }
                        parseInitializer(e) {
                            this.scope.enter(80),
                            this.expressionScope.enter(new eB),
                            this.prodParam.enter(0),
                            e.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null,
                            this.expressionScope.exit(),
                            this.prodParam.exit(),
                            this.scope.exit()
                        }
                        parseClassId(e, t, s) {
                            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8331;
                            if (P(this.state.type))
                                e.id = this.parseIdentifier(),
                                t && this.declareNameFromIdentifier(e.id, r);
                            else if (s || !t)
                                e.id = null;
                            else
                                throw this.raise(U.MissingClassName, {
                                    at: this.state.startLoc
                                })
                        }
                        parseClassSuper(e) {
                            e.superClass = this.eat(81) ? this.parseExprSubscripts() : null
                        }
                        parseExport(e, t) {
                            let s, r = this.maybeParseExportDefaultSpecifier(e), i = !r || this.eat(12), a = i && this.eatExportStar(e), n = a && this.maybeParseExportNamespaceSpecifier(e), o = i && (!n || this.eat(12)), h = r || a;
                            if (a && !n) {
                                if (r && this.unexpected(),
                                t)
                                    throw this.raise(U.UnsupportedDecoratorExport, {
                                        at: e
                                    });
                                return this.parseExportFrom(e, !0),
                                this.finishNode(e, "ExportAllDeclaration")
                            }
                            let l = this.maybeParseExportNamedSpecifiers(e);
                            if (r && i && !a && !l && this.unexpected(null, 5),
                            n && o && this.unexpected(null, 97),
                            h || l) {
                                if (s = !1,
                                t)
                                    throw this.raise(U.UnsupportedDecoratorExport, {
                                        at: e
                                    });
                                this.parseExportFrom(e, h)
                            } else
                                s = this.maybeParseExportDeclaration(e);
                            if (h || l || s) {
                                var p;
                                if (this.checkExport(e, !0, !1, !!e.source),
                                (null == (p = e.declaration) ? void 0 : p.type) === "ClassDeclaration")
                                    this.maybeTakeDecorators(t, e.declaration, e);
                                else if (t)
                                    throw this.raise(U.UnsupportedDecoratorExport, {
                                        at: e
                                    });
                                return this.finishNode(e, "ExportNamedDeclaration")
                            }
                            if (this.eat(65)) {
                                let s = e
                                  , r = this.parseExportDefaultExpression();
                                if (s.declaration = r,
                                "ClassDeclaration" === r.type)
                                    this.maybeTakeDecorators(t, r, s);
                                else if (t)
                                    throw this.raise(U.UnsupportedDecoratorExport, {
                                        at: e
                                    });
                                return this.checkExport(s, !0, !0),
                                this.finishNode(s, "ExportDefaultDeclaration")
                            }
                            this.unexpected(null, 5)
                        }
                        eatExportStar(e) {
                            return this.eat(55)
                        }
                        maybeParseExportDefaultSpecifier(e) {
                            if (this.isExportDefaultSpecifier()) {
                                this.expectPlugin("exportDefaultFrom");
                                let t = this.startNode();
                                return t.exported = this.parseIdentifier(!0),
                                e.specifiers = [this.finishNode(t, "ExportDefaultSpecifier")],
                                !0
                            }
                            return !1
                        }
                        maybeParseExportNamespaceSpecifier(e) {
                            if (this.isContextual(93)) {
                                e.specifiers || (e.specifiers = []);
                                let t = this.startNodeAt(this.state.lastTokStartLoc);
                                return this.next(),
                                t.exported = this.parseModuleExportName(),
                                e.specifiers.push(this.finishNode(t, "ExportNamespaceSpecifier")),
                                !0
                            }
                            return !1
                        }
                        maybeParseExportNamedSpecifiers(e) {
                            if (this.match(5)) {
                                e.specifiers || (e.specifiers = []);
                                let t = "type" === e.exportKind;
                                return e.specifiers.push(...this.parseExportSpecifiers(t)),
                                e.source = null,
                                e.declaration = null,
                                this.hasPlugin("importAssertions") && (e.assertions = []),
                                !0
                            }
                            return !1
                        }
                        maybeParseExportDeclaration(e) {
                            return !!this.shouldParseExportDeclaration() && (e.specifiers = [],
                            e.source = null,
                            this.hasPlugin("importAssertions") && (e.assertions = []),
                            e.declaration = this.parseExportDeclaration(e),
                            !0)
                        }
                        isAsyncFunction() {
                            if (!this.isContextual(95))
                                return !1;
                            let e = this.nextTokenStart();
                            return !ey.test(this.input.slice(this.state.pos, e)) && this.isUnparsedContextual(e, "function")
                        }
                        parseExportDefaultExpression() {
                            let e = this.startNode();
                            if (this.match(68))
                                return this.next(),
                                this.parseFunction(e, 5);
                            if (this.isAsyncFunction())
                                return this.next(),
                                this.next(),
                                this.parseFunction(e, 13);
                            if (this.match(80))
                                return this.parseClass(e, !0, !0);
                            if (this.match(26))
                                return this.hasPlugin("decorators") && !0 === this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(U.DecoratorBeforeExport, {
                                    at: this.state.startLoc
                                }),
                                this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
                            if (this.match(75) || this.match(74) || this.isLet())
                                throw this.raise(U.UnsupportedDefaultExport, {
                                    at: this.state.startLoc
                                });
                            let t = this.parseMaybeAssignAllowIn();
                            return this.semicolon(),
                            t
                        }
                        parseExportDeclaration(e) {
                            return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem()
                        }
                        isExportDefaultSpecifier() {
                            let {type: e} = this.state;
                            if (P(e)) {
                                if (95 === e && !this.state.containsEsc || 99 === e)
                                    return !1;
                                if ((128 === e || 127 === e) && !this.state.containsEsc) {
                                    let {type: e} = this.lookahead();
                                    if (P(e) && 97 !== e || 5 === e)
                                        return this.expectOnePlugin(["flow", "typescript"]),
                                        !1
                                }
                            } else if (!this.match(65))
                                return !1;
                            let t = this.nextTokenStart()
                              , s = this.isUnparsedContextual(t, "from");
                            if (44 === this.input.charCodeAt(t) || P(this.state.type) && s)
                                return !0;
                            if (this.match(65) && s) {
                                let e = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
                                return 34 === e || 39 === e
                            }
                            return !1
                        }
                        parseExportFrom(e, t) {
                            if (this.eatContextual(97)) {
                                e.source = this.parseImportSource(),
                                this.checkExport(e);
                                let t = this.maybeParseImportAssertions();
                                t && (e.assertions = t,
                                this.checkJSONModuleImport(e))
                            } else
                                t && this.unexpected();
                            this.semicolon()
                        }
                        shouldParseExportDeclaration() {
                            let {type: e} = this.state;
                            return 26 === e && (this.expectOnePlugin(["decorators", "decorators-legacy"]),
                            this.hasPlugin("decorators")) ? (!0 === this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(U.DecoratorBeforeExport, {
                                at: this.state.startLoc
                            }),
                            !0) : 74 === e || 75 === e || 68 === e || 80 === e || this.isLet() || this.isAsyncFunction()
                        }
                        checkExport(e, t, s, r) {
                            if (t) {
                                if (s) {
                                    if (this.checkDuplicateExports(e, "default"),
                                    this.hasPlugin("exportDefaultFrom")) {
                                        var i;
                                        let t = e.declaration;
                                        "Identifier" !== t.type || "from" !== t.name || t.end - t.start != 4 || null != (i = t.extra) && i.parenthesized || this.raise(U.ExportDefaultFromAsIdentifier, {
                                            at: t
                                        })
                                    }
                                } else if (e.specifiers && e.specifiers.length)
                                    for (let t of e.specifiers) {
                                        let {exported: e} = t
                                          , s = "Identifier" === e.type ? e.name : e.value;
                                        if (this.checkDuplicateExports(t, s),
                                        !r && t.local) {
                                            let {local: e} = t;
                                            "Identifier" !== e.type ? this.raise(U.ExportBindingIsString, {
                                                at: t,
                                                localName: e.value,
                                                exportName: s
                                            }) : (this.checkReservedWord(e.name, e.loc.start, !0, !1),
                                            this.scope.checkLocalExport(e))
                                        }
                                    }
                                else if (e.declaration) {
                                    if ("FunctionDeclaration" === e.declaration.type || "ClassDeclaration" === e.declaration.type) {
                                        let t = e.declaration.id;
                                        if (!t)
                                            throw Error("Assertion failure");
                                        this.checkDuplicateExports(e, t.name)
                                    } else if ("VariableDeclaration" === e.declaration.type)
                                        for (let t of e.declaration.declarations)
                                            this.checkDeclaration(t.id)
                                }
                            }
                        }
                        checkDeclaration(e) {
                            if ("Identifier" === e.type)
                                this.checkDuplicateExports(e, e.name);
                            else if ("ObjectPattern" === e.type)
                                for (let t of e.properties)
                                    this.checkDeclaration(t);
                            else if ("ArrayPattern" === e.type)
                                for (let t of e.elements)
                                    t && this.checkDeclaration(t);
                            else
                                "ObjectProperty" === e.type ? this.checkDeclaration(e.value) : "RestElement" === e.type ? this.checkDeclaration(e.argument) : "AssignmentPattern" === e.type && this.checkDeclaration(e.left)
                        }
                        checkDuplicateExports(e, t) {
                            this.exportedIdentifiers.has(t) && ("default" === t ? this.raise(U.DuplicateDefaultExport, {
                                at: e
                            }) : this.raise(U.DuplicateExport, {
                                at: e,
                                exportName: t
                            })),
                            this.exportedIdentifiers.add(t)
                        }
                        parseExportSpecifiers(e) {
                            let t = []
                              , s = !0;
                            for (this.expect(5); !this.eat(8); ) {
                                if (s)
                                    s = !1;
                                else if (this.expect(12),
                                this.eat(8))
                                    break;
                                let r = this.isContextual(128)
                                  , i = this.match(131)
                                  , a = this.startNode();
                                a.local = this.parseModuleExportName(),
                                t.push(this.parseExportSpecifier(a, i, e, r))
                            }
                            return t
                        }
                        parseExportSpecifier(e, t, s, r) {
                            return this.eatContextual(93) ? e.exported = this.parseModuleExportName() : t ? e.exported = function(e) {
                                let {type: t, start: s, end: r, loc: i, range: a, extra: n} = e;
                                if ("Placeholder" === t)
                                    return eq(e);
                                let o = Object.create(e$);
                                return o.type = t,
                                o.start = s,
                                o.end = r,
                                o.loc = i,
                                o.range = a,
                                void 0 !== e.raw ? o.raw = e.raw : o.extra = n,
                                o.value = e.value,
                                o
                            }(e.local) : e.exported || (e.exported = eq(e.local)),
                            this.finishNode(e, "ExportSpecifier")
                        }
                        parseModuleExportName() {
                            if (this.match(131)) {
                                let e = this.parseStringLiteral(this.state.value)
                                  , t = e.value.match(tx);
                                return t && this.raise(U.ModuleExportNameHasLoneSurrogate, {
                                    at: e,
                                    surrogateCharCode: t[0].charCodeAt(0)
                                }),
                                e
                            }
                            return this.parseIdentifier(!0)
                        }
                        isJSONModuleImport(e) {
                            return null != e.assertions && e.assertions.some(e=>{
                                let {key: t, value: s} = e;
                                return "json" === s.value && ("Identifier" === t.type ? "type" === t.name : "type" === t.value)
                            }
                            )
                        }
                        checkImportReflection(e) {
                            if (e.module) {
                                var t;
                                (1 !== e.specifiers.length || "ImportDefaultSpecifier" !== e.specifiers[0].type) && this.raise(U.ImportReflectionNotBinding, {
                                    at: e.specifiers[0].loc.start
                                }),
                                (null == (t = e.assertions) ? void 0 : t.length) > 0 && this.raise(U.ImportReflectionHasAssertion, {
                                    at: e.specifiers[0].loc.start
                                })
                            }
                        }
                        checkJSONModuleImport(e) {
                            if (this.isJSONModuleImport(e) && "ExportAllDeclaration" !== e.type) {
                                let {specifiers: t} = e;
                                if (null != t) {
                                    let e = t.find(e=>{
                                        let t;
                                        if ("ExportSpecifier" === e.type ? t = e.local : "ImportSpecifier" === e.type && (t = e.imported),
                                        void 0 !== t)
                                            return "Identifier" === t.type ? "default" !== t.name : "default" !== t.value
                                    }
                                    );
                                    void 0 !== e && this.raise(U.ImportJSONBindingNotDefault, {
                                        at: e.loc.start
                                    })
                                }
                            }
                        }
                        parseMaybeImportReflection(e) {
                            let t = !1;
                            if (this.isContextual(125)) {
                                let e = this.lookahead()
                                  , s = e.type;
                                P(s) ? (97 !== s || 102 === this.input.charCodeAt(this.nextTokenStartSince(e.end))) && (t = !0) : 12 !== s && (t = !0)
                            }
                            t ? (this.expectPlugin("importReflection"),
                            this.next(),
                            e.module = !0) : this.hasPlugin("importReflection") && (e.module = !1)
                        }
                        parseImport(e) {
                            if (e.specifiers = [],
                            !this.match(131)) {
                                this.parseMaybeImportReflection(e);
                                let t = !this.maybeParseDefaultImportSpecifier(e) || this.eat(12)
                                  , s = t && this.maybeParseStarImportSpecifier(e);
                                t && !s && this.parseNamedImportSpecifiers(e),
                                this.expectContextual(97)
                            }
                            e.source = this.parseImportSource();
                            let t = this.maybeParseImportAssertions();
                            if (t)
                                e.assertions = t;
                            else {
                                let t = this.maybeParseModuleAttributes();
                                t && (e.attributes = t)
                            }
                            return this.checkImportReflection(e),
                            this.checkJSONModuleImport(e),
                            this.semicolon(),
                            this.finishNode(e, "ImportDeclaration")
                        }
                        parseImportSource() {
                            return this.match(131) || this.unexpected(),
                            this.parseExprAtom()
                        }
                        shouldParseDefaultImport(e) {
                            return P(this.state.type)
                        }
                        parseImportSpecifierLocal(e, t, s) {
                            t.local = this.parseIdentifier(),
                            e.specifiers.push(this.finishImportSpecifier(t, s))
                        }
                        finishImportSpecifier(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8201;
                            return this.checkLVal(e.local, {
                                in: {
                                    type: t
                                },
                                binding: s
                            }),
                            this.finishNode(e, t)
                        }
                        parseAssertEntries() {
                            let e = []
                              , t = new Set;
                            do {
                                if (this.match(8))
                                    break;
                                let s = this.startNode()
                                  , r = this.state.value;
                                if (t.has(r) && this.raise(U.ModuleAttributesWithDuplicateKeys, {
                                    at: this.state.startLoc,
                                    key: r
                                }),
                                t.add(r),
                                this.match(131) ? s.key = this.parseStringLiteral(r) : s.key = this.parseIdentifier(!0),
                                this.expect(14),
                                !this.match(131))
                                    throw this.raise(U.ModuleAttributeInvalidValue, {
                                        at: this.state.startLoc
                                    });
                                s.value = this.parseStringLiteral(this.state.value),
                                e.push(this.finishNode(s, "ImportAttribute"))
                            } while (this.eat(12));
                            return e
                        }
                        maybeParseModuleAttributes() {
                            if (!this.match(76) || this.hasPrecedingLineBreak())
                                return this.hasPlugin("moduleAttributes") ? [] : null;
                            this.expectPlugin("moduleAttributes"),
                            this.next();
                            let e = []
                              , t = new Set;
                            do {
                                let s = this.startNode();
                                if (s.key = this.parseIdentifier(!0),
                                "type" !== s.key.name && this.raise(U.ModuleAttributeDifferentFromType, {
                                    at: s.key
                                }),
                                t.has(s.key.name) && this.raise(U.ModuleAttributesWithDuplicateKeys, {
                                    at: s.key,
                                    key: s.key.name
                                }),
                                t.add(s.key.name),
                                this.expect(14),
                                !this.match(131))
                                    throw this.raise(U.ModuleAttributeInvalidValue, {
                                        at: this.state.startLoc
                                    });
                                s.value = this.parseStringLiteral(this.state.value),
                                this.finishNode(s, "ImportAttribute"),
                                e.push(s)
                            } while (this.eat(12));
                            return e
                        }
                        maybeParseImportAssertions() {
                            if (!this.isContextual(94) || this.hasPrecedingLineBreak())
                                return this.hasPlugin("importAssertions") ? [] : null;
                            this.expectPlugin("importAssertions"),
                            this.next(),
                            this.eat(5);
                            let e = this.parseAssertEntries();
                            return this.eat(8),
                            e
                        }
                        maybeParseDefaultImportSpecifier(e) {
                            return !!this.shouldParseDefaultImport(e) && (this.parseImportSpecifierLocal(e, this.startNode(), "ImportDefaultSpecifier"),
                            !0)
                        }
                        maybeParseStarImportSpecifier(e) {
                            if (this.match(55)) {
                                let t = this.startNode();
                                return this.next(),
                                this.expectContextual(93),
                                this.parseImportSpecifierLocal(e, t, "ImportNamespaceSpecifier"),
                                !0
                            }
                            return !1
                        }
                        parseNamedImportSpecifiers(e) {
                            let t = !0;
                            for (this.expect(5); !this.eat(8); ) {
                                if (t)
                                    t = !1;
                                else {
                                    if (this.eat(14))
                                        throw this.raise(U.DestructureNamedImport, {
                                            at: this.state.startLoc
                                        });
                                    if (this.expect(12),
                                    this.eat(8))
                                        break
                                }
                                let s = this.startNode()
                                  , r = this.match(131)
                                  , i = this.isContextual(128);
                                s.imported = this.parseModuleExportName();
                                let a = this.parseImportSpecifier(s, r, "type" === e.importKind || "typeof" === e.importKind, i, void 0);
                                e.specifiers.push(a)
                            }
                        }
                        parseImportSpecifier(e, t, s, r, i) {
                            if (this.eatContextual(93))
                                e.local = this.parseIdentifier();
                            else {
                                let {imported: s} = e;
                                if (t)
                                    throw this.raise(U.ImportBindingIsString, {
                                        at: e,
                                        importName: s.value
                                    });
                                this.checkReservedWord(s.name, e.loc.start, !0, !0),
                                e.local || (e.local = eq(s))
                            }
                            return this.finishImportSpecifier(e, "ImportSpecifier", i)
                        }
                        isThisParam(e) {
                            return "Identifier" === e.type && "this" === e.name
                        }
                    }
                      , tb = class extends tP {
                        constructor(e, s) {
                            super(e = function(e) {
                                if (e && null != e.annexB && !1 !== e.annexB)
                                    throw Error("The `annexB` option can only be set to `false`.");
                                let s = {};
                                for (let r of Object.keys(t))
                                    s[r] = e && null != e[r] ? e[r] : t[r];
                                return s
                            }(e), s),
                            this.options = e,
                            this.initializeScopes(),
                            this.plugins = function(e) {
                                let t = new Map;
                                for (let s of e) {
                                    let[e,r] = Array.isArray(s) ? s : [s, {}];
                                    t.has(e) || t.set(e, r || {})
                                }
                                return t
                            }(this.options.plugins),
                            this.filename = e.sourceFilename
                        }
                        getScopeHandler() {
                            return eh
                        }
                        parse() {
                            this.enterInitialScopes();
                            let e = this.startNode()
                              , t = this.startNode();
                            return this.nextToken(),
                            e.errors = null,
                            this.parseTopLevel(e, t),
                            e.errors = this.state.errors,
                            e
                        }
                    }
                      , tT = function(e) {
                        let t = {};
                        for (let s of Object.keys(e))
                            t[s] = l[e[s]];
                        return t
                    }(g);
                    function tA(e, t) {
                        let s = tb;
                        return null != e && e.plugins && (function(e) {
                            if (to(e, "decorators")) {
                                if (to(e, "decorators-legacy"))
                                    throw Error("Cannot use the decorators and decorators-legacy plugin together");
                                let t = th(e, "decorators", "decoratorsBeforeExport");
                                if (null != t && "boolean" != typeof t)
                                    throw Error("'decoratorsBeforeExport' must be a boolean, if specified.");
                                let s = th(e, "decorators", "allowCallParenthesized");
                                if (null != s && "boolean" != typeof s)
                                    throw Error("'allowCallParenthesized' must be a boolean.")
                            }
                            if (to(e, "flow") && to(e, "typescript"))
                                throw Error("Cannot combine flow and typescript plugins.");
                            if (to(e, "placeholders") && to(e, "v8intrinsic"))
                                throw Error("Cannot combine placeholders and v8intrinsic plugins.");
                            if (to(e, "pipelineOperator")) {
                                let t = th(e, "pipelineOperator", "proposal");
                                if (!tl.includes(t))
                                    throw Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${tl.map(e=>`"${e}"`).join(", ")}.`);
                                let s = to(e, ["recordAndTuple", {
                                    syntaxType: "hash"
                                }]);
                                if ("hack" === t) {
                                    if (to(e, "placeholders"))
                                        throw Error("Cannot combine placeholders plugin and Hack-style pipes.");
                                    if (to(e, "v8intrinsic"))
                                        throw Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
                                    let t = th(e, "pipelineOperator", "topicToken");
                                    if (!tp.includes(t))
                                        throw Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${tp.map(e=>`"${e}"`).join(", ")}.`);
                                    if ("#" === t && s)
                                        throw Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.')
                                } else if ("smart" === t && s)
                                    throw Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.')
                            }
                            if (to(e, "moduleAttributes")) {
                                if (to(e, "importAssertions"))
                                    throw Error("Cannot combine importAssertions and moduleAttributes plugins.");
                                if ("may-2020" !== th(e, "moduleAttributes", "version"))
                                    throw Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.")
                            }
                            if (to(e, "recordAndTuple") && null != th(e, "recordAndTuple", "syntaxType") && !tc.includes(th(e, "recordAndTuple", "syntaxType")))
                                throw Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + tc.map(e=>`'${e}'`).join(", "));
                            if (to(e, "asyncDoExpressions") && !to(e, "doExpressions")) {
                                let e = Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
                                throw e.missingPlugins = "doExpressions",
                                e
                            }
                        }(e.plugins),
                        s = function(e) {
                            let t = td.filter(t=>to(e, t))
                              , s = t.join("/")
                              , r = tE[s];
                            if (!r) {
                                for (let e of (r = tb,
                                t))
                                    r = tu[e](r);
                                tE[s] = r
                            }
                            return r
                        }(e.plugins)),
                        new s(e,t)
                    }
                    var tE = {};
                    e.parse = function(e, t) {
                        var s;
                        if ((null == (s = t) ? void 0 : s.sourceType) !== "unambiguous")
                            return tA(t, e).parse();
                        t = Object.assign({}, t);
                        try {
                            t.sourceType = "module";
                            let s = tA(t, e)
                              , r = s.parse();
                            if (s.sawUnambiguousESM)
                                return r;
                            if (s.ambiguousScriptDifferentAst)
                                try {
                                    return t.sourceType = "script",
                                    tA(t, e).parse()
                                } catch {}
                            else
                                r.program.sourceType = "script";
                            return r
                        } catch (s) {
                            try {
                                return t.sourceType = "script",
                                tA(t, e).parse()
                            } catch {}
                            throw s
                        }
                    }
                    ,
                    e.parseExpression = function(e, t) {
                        let s = tA(t, e);
                        return s.options.strictMode && (s.state.strict = !0),
                        s.getExpression()
                    }
                    ,
                    e.tokTypes = tT
                }
            }), es = o({
                "src/language-js/parse/json.js"(e, t) {
                    p();
                    var s = V()
                      , r = K()
                      , i = q()
                      , a = W();
                    function n() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , {allowComments: t=!0} = e;
                        return function(e) {
                            let {parseExpression: r} = et(), i;
                            try {
                                i = r(e, {
                                    tokens: !0,
                                    ranges: !0
                                })
                            } catch (e) {
                                throw a(e)
                            }
                            if (!t && s(i.comments))
                                throw o(i.comments[0], "Comment");
                            return function e(t) {
                                switch (t.type) {
                                case "ArrayExpression":
                                    for (let s of t.elements)
                                        null !== s && e(s);
                                    return;
                                case "ObjectExpression":
                                    for (let s of t.properties)
                                        e(s);
                                    return;
                                case "ObjectProperty":
                                    if (t.computed)
                                        throw o(t.key, "Computed key");
                                    if (t.shorthand)
                                        throw o(t.key, "Shorthand property");
                                    "Identifier" !== t.key.type && e(t.key),
                                    e(t.value);
                                    return;
                                case "UnaryExpression":
                                    {
                                        let {operator: e, argument: s} = t;
                                        if ("+" !== e && "-" !== e)
                                            throw o(t, `Operator '${t.operator}'`);
                                        if ("NumericLiteral" === s.type || "Identifier" === s.type && ("Infinity" === s.name || "NaN" === s.name))
                                            return;
                                        throw o(s, `Operator '${e}' before '${s.type}'`)
                                    }
                                case "Identifier":
                                    if ("Infinity" !== t.name && "NaN" !== t.name && "undefined" !== t.name)
                                        throw o(t, `Identifier '${t.name}'`);
                                    return;
                                case "TemplateLiteral":
                                    if (s(t.expressions))
                                        throw o(t.expressions[0], "'TemplateLiteral' with expression");
                                    for (let s of t.quasis)
                                        e(s);
                                    return;
                                case "NullLiteral":
                                case "BooleanLiteral":
                                case "NumericLiteral":
                                case "StringLiteral":
                                case "TemplateElement":
                                    return;
                                default:
                                    throw o(t, `'${t.type}'`)
                                }
                            }(i),
                            i
                        }
                    }
                    function o(e, t) {
                        let[s,i] = [e.loc.start, e.loc.end].map(e=>{
                            let {line: t, column: s} = e;
                            return {
                                line: t,
                                column: s + 1
                            }
                        }
                        );
                        return r(`${t} is not allowed in JSON.`, {
                            start: s,
                            end: i
                        })
                    }
                    var h = n()
                      , l = {
                        json: i({
                            parse: h,
                            hasPragma: ()=>!0
                        }),
                        json5: i(h),
                        "json-stringify": i({
                            parse: n({
                                allowComments: !1
                            }),
                            astFormat: "estree-json"
                        })
                    };
                    t.exports = l
                }
            });
            p();
            var er = c()
              , ei = u()
              , ea = x()
              , en = q()
              , eo = W()
              , eh = ee()
              , el = es()
              , ep = {
                sourceType: "module",
                allowImportExportEverywhere: !0,
                allowReturnOutsideFunction: !0,
                allowSuperOutsideMethod: !0,
                allowUndeclaredExports: !0,
                errorRecovery: !0,
                createParenthesizedExpressions: !0,
                plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", {
                    decoratorsBeforeExport: !1
                }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors"],
                tokens: !0,
                ranges: !0
            }
              , ec = ["recordAndTuple", {
                syntaxType: "hash"
            }]
              , eu = "v8intrinsic"
              , ed = [["pipelineOperator", {
                proposal: "hack",
                topicToken: "%"
            }], ["pipelineOperator", {
                proposal: "minimal"
            }], ["pipelineOperator", {
                proposal: "fsharp"
            }]]
              , em = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep;
                return Object.assign(Object.assign({}, t), {}, {
                    plugins: [...t.plugins, ...e]
                })
            }
              , ef = /@(?:no)?flow\b/;
            function ey(e) {
                for (var t = arguments.length, s = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    s[r - 1] = arguments[r];
                return function(t, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (("babel" === i.parser || "__babel_estree" === i.parser) && function(e, t) {
                        if (t.filepath && t.filepath.endsWith(".js.flow"))
                            return !0;
                        let s = ei(e);
                        s && (e = e.slice(s.length));
                        let r = ea(e, 0);
                        return !1 !== r && (e = e.slice(0, r)),
                        ef.test(e)
                    }(t, i))
                        return i.parser = "babel-flow",
                        eP(t, r, i);
                    let a = s;
                    "script" === i.__babelSourceType && (a = a.map(e=>Object.assign(Object.assign({}, e), {}, {
                        sourceType: "script"
                    }))),
                    /#[[{]/.test(t) && (a = a.map(e=>em([ec], e)));
                    let n = /%[A-Z]/.test(t);
                    t.includes("|>") ? a = (n ? [...ed, eu] : ed).flatMap(e=>a.map(t=>em([e], t))) : n && (a = a.map(e=>em([eu], e)));
                    let {result: o, error: h} = er(...a.map(s=>()=>(function(e, t, s) {
                        let r = (0,
                        et()[e])(t, s)
                          , i = r.errors.find(e=>!ew.has(e.reasonCode));
                        if (i)
                            throw i;
                        return r
                    }
                    )(e, t, s)));
                    if (!o)
                        throw eo(h);
                    return i.originalText = t,
                    eh(o, i)
                }
            }
            var eg = ey("parse", em(["jsx", "flow"]))
              , eP = ey("parse", em(["jsx", ["flow", {
                all: !0,
                enums: !0
            }]]))
              , eT = ey("parse", em(["jsx", "typescript"]), em(["typescript"]))
              , eA = ey("parse", em(["jsx", "flow", "estree"]))
              , eE = ey("parseExpression", em(["jsx"]))
              , eS = ey("parseExpression", em(["typescript"]))
              , ew = new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"])
              , ev = en(eg)
              , eC = en(eT)
              , eN = en(eE)
              , eI = en(eS);
            t.exports = {
                parsers: Object.assign(Object.assign({
                    babel: ev,
                    "babel-flow": en(eP),
                    "babel-ts": eC
                }, el), {}, {
                    __js_expression: eN,
                    __vue_expression: eN,
                    __vue_ts_expression: eI,
                    __vue_event_binding: ev,
                    __vue_ts_event_binding: eC,
                    __babel_estree: en(eA)
                })
            }
        }
        )())
    }
}]);
