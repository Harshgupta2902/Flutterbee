"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4275], {
    5674: function(e, t, n) {
        n.d(t, {
            M: function() {
                return r
            }
        });
        function r(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (null == e || e(r),
                !1 === n || !r.defaultPrevented)
                    return null == t ? void 0 : t(r)
            }
        }
    },
    3440: function(e, t, n) {
        n.d(t, {
            F: function() {
                return o
            },
            e: function() {
                return i
            }
        });
        var r = n(5526);
        function o(...e) {
            return t=>e.forEach(e=>{
                var n;
                "function" == typeof (n = e) ? n(t) : null != n && (n.current = t)
            }
            )
        }
        function i(...e) {
            return (0,
            r.useCallback)(o(...e), e)
        }
    },
    6301: function(e, t, n) {
        n.d(t, {
            b: function() {
                return i
            },
            k: function() {
                return o
            }
        });
        var r = n(5526);
        function o(e, t) {
            let n = (0,
            r.createContext)(t);
            function o(e) {
                let {children: t, ...o} = e
                  , i = (0,
                r.useMemo)(()=>o, Object.values(o));
                return (0,
                r.createElement)(n.Provider, {
                    value: i
                }, t)
            }
            return o.displayName = e + "Provider",
            [o, function(o) {
                let i = (0,
                r.useContext)(n);
                if (i)
                    return i;
                if (void 0 !== t)
                    return t;
                throw Error(`\`${o}\` must be used within \`${e}\``)
            }
            ]
        }
        function i(e, t=[]) {
            let n = []
              , o = ()=>{
                let t = n.map(e=>(0,
                r.createContext)(e));
                return function(n) {
                    let o = (null == n ? void 0 : n[e]) || t;
                    return (0,
                    r.useMemo)(()=>({
                        [`__scope ${e}`]: {
                            ...n,
                            [e]: o
                        }
                    }), [n, o])
                }
            }
            ;
            return o.scopeName = e,
            [function(t, o) {
                let i = (0,
                r.createContext)(o)
                  , a = n.length;
                function l(t) {
                    let {scope: n, children: o, ...l} = t
                      , c = (null == n ? void 0 : n[e][a]) || i
                      , u = (0,
                    r.useMemo)(()=>l, Object.values(l));
                    return (0,
                    r.createElement)(c.Provider, {
                        value: u
                    }, o)
                }
                return n = [...n, o],
                l.displayName = t + "Provider",
                [l, function(n, l) {
                    let c = (null == l ? void 0 : l[e][a]) || i
                      , u = (0,
                    r.useContext)(c);
                    if (u)
                        return u;
                    if (void 0 !== o)
                        return o;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = ()=>{
                    let n = e.map(e=>({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = n.reduce((t,{useScope: n, scopeName: r})=>{
                            let o = n(e)
                              , i = o[`__scope ${r}`];
                            return {
                                ...t,
                                ...i
                            }
                        }
                        , {});
                        return (0,
                        r.useMemo)(()=>({
                            [`__scope ${t.scopeName}`]: o
                        }), [o])
                    }
                }
                ;
                return n.scopeName = t.scopeName,
                n
            }(o, ...t)]
        }
    },
    8919: function(e, t, n) {
        let r;
        n.d(t, {
            XB: function() {
                return f
            }
        });
        var o = n(3728)
          , i = n(5526)
          , a = n(5674)
          , l = n(8737)
          , c = n(3440)
          , u = n(797);
        let s = "dismissableLayer.update"
          , d = (0,
        i.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , f = (0,
        i.forwardRef)((e,t)=>{
            var n;
            let {disableOutsidePointerEvents: f=!1, onEscapeKeyDown: m, onPointerDownOutside: h, onFocusOutside: y, onInteractOutside: b, onDismiss: g, ...w} = e
              , x = (0,
            i.useContext)(d)
              , [k,E] = (0,
            i.useState)(null)
              , C = null !== (n = null == k ? void 0 : k.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document
              , [,M] = (0,
            i.useState)({})
              , N = (0,
            c.e)(t, e=>E(e))
              , Z = Array.from(x.layers)
              , [S] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1)
              , z = Z.indexOf(S)
              , T = k ? Z.indexOf(k) : -1
              , P = x.layersWithOutsidePointerEventsDisabled.size > 0
              , O = T >= z
              , L = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = (0,
                u.W)(e)
                  , r = (0,
                i.useRef)(!1)
                  , o = (0,
                i.useRef)(()=>{}
                );
                return (0,
                i.useEffect)(()=>{
                    let e = e=>{
                        if (e.target && !r.current) {
                            let r = {
                                originalEvent: e
                            };
                            function i() {
                                v("dismissableLayer.pointerDownOutside", n, r, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (t.removeEventListener("click", o.current),
                            o.current = i,
                            t.addEventListener("click", o.current, {
                                once: !0
                            })) : i()
                        }
                        r.current = !1
                    }
                      , i = window.setTimeout(()=>{
                        t.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return ()=>{
                        window.clearTimeout(i),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", o.current)
                    }
                }
                , [t, n]),
                {
                    onPointerDownCapture: ()=>r.current = !0
                }
            }(e=>{
                let t = e.target
                  , n = [...x.branches].some(e=>e.contains(t));
                !O || n || (null == h || h(e),
                null == b || b(e),
                e.defaultPrevented || null == g || g())
            }
            , C)
              , A = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = (0,
                u.W)(e)
                  , r = (0,
                i.useRef)(!1);
                return (0,
                i.useEffect)(()=>{
                    let e = e=>{
                        e.target && !r.current && v("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return t.addEventListener("focusin", e),
                    ()=>t.removeEventListener("focusin", e)
                }
                , [t, n]),
                {
                    onFocusCapture: ()=>r.current = !0,
                    onBlurCapture: ()=>r.current = !1
                }
            }(e=>{
                let t = e.target
                  , n = [...x.branches].some(e=>e.contains(t));
                n || (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == g || g())
            }
            , C);
            return !function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = (0,
                u.W)(e);
                (0,
                i.useEffect)(()=>{
                    let e = e=>{
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e),
                    ()=>t.removeEventListener("keydown", e)
                }
                , [n, t])
            }(e=>{
                let t = T === x.layers.size - 1;
                t && (null == m || m(e),
                !e.defaultPrevented && g && (e.preventDefault(),
                g()))
            }
            , C),
            (0,
            i.useEffect)(()=>{
                if (k)
                    return f && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = C.body.style.pointerEvents,
                    C.body.style.pointerEvents = "none"),
                    x.layersWithOutsidePointerEventsDisabled.add(k)),
                    x.layers.add(k),
                    p(),
                    ()=>{
                        f && 1 === x.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = r)
                    }
            }
            , [k, C, f, x]),
            (0,
            i.useEffect)(()=>()=>{
                k && (x.layers.delete(k),
                x.layersWithOutsidePointerEventsDisabled.delete(k),
                p())
            }
            , [k, x]),
            (0,
            i.useEffect)(()=>{
                let e = ()=>M({});
                return document.addEventListener(s, e),
                ()=>document.removeEventListener(s, e)
            }
            , []),
            (0,
            i.createElement)(l.WV.div, (0,
            o.Z)({}, w, {
                ref: N,
                style: {
                    pointerEvents: P ? O ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                a.M)(e.onFocusCapture, A.onFocusCapture),
                onBlurCapture: (0,
                a.M)(e.onBlurCapture, A.onBlurCapture),
                onPointerDownCapture: (0,
                a.M)(e.onPointerDownCapture, L.onPointerDownCapture)
            }))
        }
        );
        function p() {
            let e = new CustomEvent(s);
            document.dispatchEvent(e)
        }
        function v(e, t, n, {discrete: r}) {
            let o = n.originalEvent.target
              , i = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            t && o.addEventListener(e, t, {
                once: !0
            }),
            r ? (0,
            l.jH)(o, i) : o.dispatchEvent(i)
        }
    },
    1505: function(e, t, n) {
        n.d(t, {
            EW: function() {
                return i
            }
        });
        var r = n(5526);
        let o = 0;
        function i() {
            (0,
            r.useEffect)(()=>{
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : a()),
                document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : a()),
                o++,
                ()=>{
                    1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),
                    o--
                }
            }
            , [])
        }
        function a() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none",
            e
        }
    },
    2939: function(e, t, n) {
        let r;
        n.d(t, {
            M: function() {
                return f
            }
        });
        var o = n(3728)
          , i = n(5526)
          , a = n(3440)
          , l = n(8737)
          , c = n(797);
        let u = "focusScope.autoFocusOnMount"
          , s = "focusScope.autoFocusOnUnmount"
          , d = {
            bubbles: !1,
            cancelable: !0
        }
          , f = (0,
        i.forwardRef)((e,t)=>{
            let {loop: n=!1, trapped: r=!1, onMountAutoFocus: f, onUnmountAutoFocus: y, ...b} = e
              , [g,w] = (0,
            i.useState)(null)
              , x = (0,
            c.W)(f)
              , k = (0,
            c.W)(y)
              , E = (0,
            i.useRef)(null)
              , C = (0,
            a.e)(t, e=>w(e))
              , M = (0,
            i.useRef)({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            (0,
            i.useEffect)(()=>{
                if (r) {
                    function e(e) {
                        if (M.paused || !g)
                            return;
                        let t = e.target;
                        g.contains(t) ? E.current = t : m(E.current, {
                            select: !0
                        })
                    }
                    function t(e) {
                        M.paused || !g || g.contains(e.relatedTarget) || m(E.current, {
                            select: !0
                        })
                    }
                    return document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t),
                    ()=>{
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t)
                    }
                }
            }
            , [r, g, M.paused]),
            (0,
            i.useEffect)(()=>{
                if (g) {
                    h.add(M);
                    let e = document.activeElement
                      , t = g.contains(e);
                    if (!t) {
                        let t = new CustomEvent(u,d);
                        g.addEventListener(u, x),
                        g.dispatchEvent(t),
                        t.defaultPrevented || (function(e, {select: t=!1}={}) {
                            let n = document.activeElement;
                            for (let r of e)
                                if (m(r, {
                                    select: t
                                }),
                                document.activeElement !== n)
                                    return
                        }(p(g).filter(e=>"A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && m(g))
                    }
                    return ()=>{
                        g.removeEventListener(u, x),
                        setTimeout(()=>{
                            let t = new CustomEvent(s,d);
                            g.addEventListener(s, k),
                            g.dispatchEvent(t),
                            t.defaultPrevented || m(null != e ? e : document.body, {
                                select: !0
                            }),
                            g.removeEventListener(s, k),
                            h.remove(M)
                        }
                        , 0)
                    }
                }
            }
            , [g, x, k, M]);
            let N = (0,
            i.useCallback)(e=>{
                if (!n && !r || M.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [r,i] = function(e) {
                        let t = p(e)
                          , n = v(t, e)
                          , r = v(t.reverse(), e);
                        return [n, r]
                    }(t);
                    r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(),
                    n && m(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    n && m(r, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [n, r, M.paused]);
            return (0,
            i.createElement)(l.WV.div, (0,
            o.Z)({
                tabIndex: -1
            }, b, {
                ref: C,
                onKeyDown: N
            }))
        }
        );
        function p(e) {
            let t = []
              , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e=>{
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; n.nextNode(); )
                t.push(n.currentNode);
            return t
        }
        function v(e, t) {
            for (let n of e)
                if (!function(e, {upTo: t}) {
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === t || e !== t); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function m(e, {select: t=!1}={}) {
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e)instanceof HTMLInputElement && "select"in n && t && e.select()
            }
        }
        let h = (r = [],
        {
            add(e) {
                let t = r[0];
                e !== t && (null == t || t.pause()),
                (r = y(r, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (r = y(r, e))[0]) || void 0 === t || t.resume()
            }
        });
        function y(e, t) {
            let n = [...e]
              , r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1),
            n
        }
    },
    366: function(e, t, n) {
        n.d(t, {
            M: function() {
                return c
            }
        });
        var r, o = n(5526), i = n(493);
        let a = (r || (r = n.t(o, 2)))["useId".toString()] || (()=>void 0)
          , l = 0;
        function c(e) {
            let[t,n] = o.useState(a());
            return (0,
            i.b)(()=>{
                e || n(e=>null != e ? e : String(l++))
            }
            , [e]),
            e || (t ? `radix-${t}` : "")
        }
    },
    9859: function(e, t, n) {
        n.d(t, {
            h: function() {
                return l
            }
        });
        var r = n(3728)
          , o = n(5526)
          , i = n(2591)
          , a = n(8737);
        let l = (0,
        o.forwardRef)((e,t)=>{
            var n;
            let {container: l=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...c} = e;
            return l ? i.createPortal((0,
            o.createElement)(a.WV.div, (0,
            r.Z)({}, c, {
                ref: t
            })), l) : null
        }
        )
    },
    3619: function(e, t, n) {
        n.d(t, {
            z: function() {
                return l
            }
        });
        var r = n(5526)
          , o = n(2591)
          , i = n(3440)
          , a = n(493);
        let l = e=>{
            let {present: t, children: n} = e
              , l = function(e) {
                var t;
                let[n,i] = (0,
                r.useState)()
                  , l = (0,
                r.useRef)({})
                  , u = (0,
                r.useRef)(e)
                  , s = (0,
                r.useRef)("none")
                  , [d,f] = (t = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                (0,
                r.useReducer)((e,n)=>{
                    let r = t[e][n];
                    return null != r ? r : e
                }
                , e ? "mounted" : "unmounted"));
                return (0,
                r.useEffect)(()=>{
                    let e = c(l.current);
                    s.current = "mounted" === d ? e : "none"
                }
                , [d]),
                (0,
                a.b)(()=>{
                    let t = l.current
                      , n = u.current;
                    if (n !== e) {
                        let r = s.current
                          , o = c(t);
                        e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"),
                        u.current = e
                    }
                }
                , [e, f]),
                (0,
                a.b)(()=>{
                    if (n) {
                        let e = e=>{
                            let t = c(l.current)
                              , r = t.includes(e.animationName);
                            e.target === n && r && (0,
                            o.flushSync)(()=>f("ANIMATION_END"))
                        }
                          , t = e=>{
                            e.target === n && (s.current = c(l.current))
                        }
                        ;
                        return n.addEventListener("animationstart", t),
                        n.addEventListener("animationcancel", e),
                        n.addEventListener("animationend", e),
                        ()=>{
                            n.removeEventListener("animationstart", t),
                            n.removeEventListener("animationcancel", e),
                            n.removeEventListener("animationend", e)
                        }
                    }
                    f("ANIMATION_END")
                }
                , [n, f]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(d),
                    ref: (0,
                    r.useCallback)(e=>{
                        e && (l.current = getComputedStyle(e)),
                        i(e)
                    }
                    , [])
                }
            }(t)
              , u = "function" == typeof n ? n({
                present: l.isPresent
            }) : r.Children.only(n)
              , s = (0,
            i.e)(l.ref, u.ref);
            return "function" == typeof n || l.isPresent ? (0,
            r.cloneElement)(u, {
                ref: s
            }) : null
        }
        ;
        function c(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        l.displayName = "Presence"
    },
    8737: function(e, t, n) {
        n.d(t, {
            WV: function() {
                return l
            },
            jH: function() {
                return c
            }
        });
        var r = n(3728)
          , o = n(5526)
          , i = n(2591)
          , a = n(4444);
        let l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e,t)=>{
            let n = (0,
            o.forwardRef)((e,n)=>{
                let {asChild: i, ...l} = e
                  , c = i ? a.g7 : t;
                return (0,
                o.useEffect)(()=>{
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                o.createElement)(c, (0,
                r.Z)({}, l, {
                    ref: n
                }))
            }
            );
            return n.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: n
            }
        }
        , {});
        function c(e, t) {
            e && (0,
            i.flushSync)(()=>e.dispatchEvent(t))
        }
    },
    4444: function(e, t, n) {
        n.d(t, {
            g7: function() {
                return a
            }
        });
        var r = n(3728)
          , o = n(5526)
          , i = n(3440);
        let a = (0,
        o.forwardRef)((e,t)=>{
            let {children: n, ...i} = e
              , a = o.Children.toArray(n)
              , c = a.find(u);
            if (c) {
                let e = c.props.children
                  , n = a.map(t=>t !== c ? t : o.Children.count(e) > 1 ? o.Children.only(null) : (0,
                o.isValidElement)(e) ? e.props.children : null);
                return (0,
                o.createElement)(l, (0,
                r.Z)({}, i, {
                    ref: t
                }), (0,
                o.isValidElement)(e) ? (0,
                o.cloneElement)(e, void 0, n) : null)
            }
            return (0,
            o.createElement)(l, (0,
            r.Z)({}, i, {
                ref: t
            }), n)
        }
        );
        a.displayName = "Slot";
        let l = (0,
        o.forwardRef)((e,t)=>{
            let {children: n, ...r} = e;
            return (0,
            o.isValidElement)(n) ? (0,
            o.cloneElement)(n, {
                ...function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , i = t[r]
                          , a = /^on[A-Z]/.test(r);
                        a ? o && i ? n[r] = (...e)=>{
                            i(...e),
                            o(...e)
                        }
                        : o && (n[r] = o) : "style" === r ? n[r] = {
                            ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(r, n.props),
                ref: (0,
                i.F)(t, n.ref)
            }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
        }
        );
        l.displayName = "SlotClone";
        let c = ({children: e})=>(0,
        o.createElement)(o.Fragment, null, e);
        function u(e) {
            return (0,
            o.isValidElement)(e) && e.type === c
        }
    },
    797: function(e, t, n) {
        n.d(t, {
            W: function() {
                return o
            }
        });
        var r = n(5526);
        function o(e) {
            let t = (0,
            r.useRef)(e);
            return (0,
            r.useEffect)(()=>{
                t.current = e
            }
            ),
            (0,
            r.useMemo)(()=>(...e)=>{
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
            }
            , [])
        }
    },
    3477: function(e, t, n) {
        n.d(t, {
            T: function() {
                return i
            }
        });
        var r = n(5526)
          , o = n(797);
        function i({prop: e, defaultProp: t, onChange: n=()=>{}
        }) {
            let[i,a] = function({defaultProp: e, onChange: t}) {
                let n = (0,
                r.useState)(e)
                  , [i] = n
                  , a = (0,
                r.useRef)(i)
                  , l = (0,
                o.W)(t);
                return (0,
                r.useEffect)(()=>{
                    a.current !== i && (l(i),
                    a.current = i)
                }
                , [i, a, l]),
                n
            }({
                defaultProp: t,
                onChange: n
            })
              , l = void 0 !== e
              , c = (0,
            o.W)(n)
              , u = (0,
            r.useCallback)(t=>{
                if (l) {
                    let n = "function" == typeof t ? t(e) : t;
                    n !== e && c(n)
                } else
                    a(t)
            }
            , [l, e, a, c]);
            return [l ? e : i, u]
        }
    },
    493: function(e, t, n) {
        n.d(t, {
            b: function() {
                return o
            }
        });
        var r = n(5526);
        let o = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : ()=>{}
    },
    6530: function(e, t, n) {
        n.d(t, {
            Ry: function() {
                return u
            }
        });
        var r = new WeakMap
          , o = new WeakMap
          , i = {}
          , a = 0
          , l = function(e) {
            return e && (e.host || l(e.parentNode))
        }
          , c = function(e, t, n, c) {
            var u = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var n = l(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            i[n] || (i[n] = new WeakMap);
            var s = i[n]
              , d = []
              , f = new Set
              , p = new Set(u)
              , v = function(e) {
                !e || f.has(e) || (f.add(e),
                v(e.parentNode))
            };
            u.forEach(v);
            var m = function(e) {
                !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (f.has(e))
                        m(e);
                    else {
                        var t = e.getAttribute(c)
                          , i = null !== t && "false" !== t
                          , a = (r.get(e) || 0) + 1
                          , l = (s.get(e) || 0) + 1;
                        r.set(e, a),
                        s.set(e, l),
                        d.push(e),
                        1 === a && i && o.set(e, !0),
                        1 === l && e.setAttribute(n, "true"),
                        i || e.setAttribute(c, "true")
                    }
                })
            };
            return m(t),
            f.clear(),
            a++,
            function() {
                d.forEach(function(e) {
                    var t = r.get(e) - 1
                      , i = s.get(e) - 1;
                    r.set(e, t),
                    s.set(e, i),
                    t || (o.has(e) || e.removeAttribute(c),
                    o.delete(e)),
                    i || e.removeAttribute(n)
                }),
                --a || (r = new WeakMap,
                r = new WeakMap,
                o = new WeakMap,
                i = {})
            }
        }
          , u = function(e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e])
              , o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
            c(r, o, n, "aria-hidden")) : function() {
                return null
            }
        }
    },
    1089: function(e, t, n) {
        n.d(t, {
            j: function() {
                return i
            }
        });
        let r = e=>"boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e
          , o = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.flat(1 / 0).filter(Boolean).join(" ")
        }
          , i = (e,t)=>n=>{
            var i;
            if ((null == t ? void 0 : t.variants) == null)
                return o(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            let {variants: a, defaultVariants: l} = t
              , c = Object.keys(a).map(e=>{
                let t = null == n ? void 0 : n[e]
                  , o = null == l ? void 0 : l[e];
                if (null === t)
                    return null;
                let i = r(t) || r(o);
                return a[e][i]
            }
            )
              , u = n && Object.entries(n).reduce((e,t)=>{
                let[n,r] = t;
                return void 0 === r || (e[n] = r),
                e
            }
            , {})
              , s = null == t ? void 0 : null === (i = t.compoundVariants) || void 0 === i ? void 0 : i.reduce((e,t)=>{
                let {class: n, className: r, ...o} = t;
                return Object.entries(o).every(e=>{
                    let[t,n] = e;
                    return Array.isArray(n) ? n.includes({
                        ...l,
                        ...u
                    }[t]) : ({
                        ...l,
                        ...u
                    })[t] === n
                }
                ) ? [...e, n, r] : e
            }
            , []);
            return o(e, c, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className)
        }
    },
    9754: function(e, t, n) {
        n.d(t, {
            W: function() {
                return r
            }
        });
        function r() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++)
                                t[n] && (r = e(t[n])) && (o && (o += " "),
                                o += r);
                        else
                            for (n in t)
                                t[n] && (o && (o += " "),
                                o += n)
                    }
                    return o
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
    },
    1014: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(5526)
          , o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let i = e=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , a = (e,t)=>{
            let n = (0,
            r.forwardRef)(({color: n="currentColor", size: a=24, strokeWidth: l=2, children: c, ...u},s)=>(0,
            r.createElement)("svg", {
                ref: s,
                ...o,
                width: a,
                height: a,
                stroke: n,
                strokeWidth: l,
                className: `lucide lucide-${i(e)}`,
                ...u
            }, [...t.map(([e,t])=>(0,
            r.createElement)(e, t)), ...(Array.isArray(c) ? c : [c]) || []]));
            return n.displayName = `${e}`,
            n
        }
    },
    113: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("AlertTriangle", [["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            key: "c3ski4"
        }], ["line", {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "13",
            key: "mb7vjk"
        }], ["line", {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
            key: "kdstpg"
        }]])
    },
    7366: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("AlignCenter", [["line", {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }], ["line", {
            x1: "17",
            y1: "12",
            x2: "7",
            y2: "12",
            key: "driibe"
        }], ["line", {
            x1: "19",
            y1: "18",
            x2: "5",
            y2: "18",
            key: "1i3xdx"
        }]])
    },
    8374: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("ArrowRight", [["line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }], ["polyline", {
            points: "12 5 19 12 12 19",
            key: "sfr3i6"
        }]])
    },
    8427: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Check", [["polyline", {
            points: "20 6 9 17 4 12",
            key: "10jjfj"
        }]])
    },
    942: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("ChevronDown", [["polyline", {
            points: "6 9 12 15 18 9",
            key: "1do0m2"
        }]])
    },
    2351: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("ChevronLeft", [["polyline", {
            points: "15 18 9 12 15 6",
            key: "kvxz59"
        }]])
    },
    6432: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("ChevronRight", [["polyline", {
            points: "9 18 15 12 9 6",
            key: "1rtp27"
        }]])
    },
    5950: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("CloudCog", [["path", {
            d: "M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9",
            key: "19hoja"
        }], ["circle", {
            cx: "12",
            cy: "17",
            r: "3",
            key: "1spfwm"
        }], ["path", {
            d: "M12 13v1",
            key: "176q98"
        }], ["path", {
            d: "M12 20v1",
            key: "1wcdkc"
        }], ["path", {
            d: "M16 17h-1",
            key: "y560le"
        }], ["path", {
            d: "M9 17H8",
            key: "1lfe9z"
        }], ["path", {
            d: "m15 14-.88.88",
            key: "12ytk1"
        }], ["path", {
            d: "M9.88 19.12 9 20",
            key: "1kmb4r"
        }], ["path", {
            d: "m15 20-.88-.88",
            key: "1ipjcf"
        }], ["path", {
            d: "M9.88 14.88 9 14",
            key: "c4uok7"
        }]])
    },
    6795: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Code", [["polyline", {
            points: "16 18 22 12 16 6",
            key: "z7tu5w"
        }], ["polyline", {
            points: "8 6 2 12 8 18",
            key: "1eg1df"
        }]])
    },
    2469: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Copy", [["rect", {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            ry: "2",
            key: "1ma1o8"
        }], ["path", {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
            key: "pklvoz"
        }]])
    },
    6686: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("CreditCard", [["rect", {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            key: "qneu4z"
        }], ["line", {
            x1: "2",
            y1: "10",
            x2: "22",
            y2: "10",
            key: "1ytoly"
        }]])
    },
    9162: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Eye", [["path", {
            d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
            key: "rwhkz3"
        }], ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]])
    },
    1681: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("FileText", [["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }], ["polyline", {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }], ["line", {
            x1: "16",
            y1: "13",
            x2: "8",
            y2: "13",
            key: "7g4hpw"
        }], ["line", {
            x1: "16",
            y1: "17",
            x2: "8",
            y2: "17",
            key: "1nzzn0"
        }], ["line", {
            x1: "10",
            y1: "9",
            x2: "8",
            y2: "9",
            key: "13jkcr"
        }]])
    },
    4699: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("File", [["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }], ["polyline", {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }]])
    },
    4902: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("HelpCircle", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }], ["line", {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
            key: "kdstpg"
        }]])
    },
    7505: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Image", [["rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }], ["circle", {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }], ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }]])
    },
    3919: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Laptop", [["path", {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
            key: "tarvll"
        }]])
    },
    4366: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Loader2", [["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]])
    },
    2008: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Moon", [["path", {
            d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "1rit1i"
        }]])
    },
    7306: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("MoreVertical", [["circle", {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }], ["circle", {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }], ["circle", {
            cx: "12",
            cy: "19",
            r: "1",
            key: "lyex9k"
        }]])
    },
    6524: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Pizza", [["path", {
            d: "M15 11h.01",
            key: "rns66s"
        }], ["path", {
            d: "M11 15h.01",
            key: "k85uqc"
        }], ["path", {
            d: "M16 16h.01",
            key: "1f9h7w"
        }], ["path", {
            d: "m2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z",
            key: "1akyvp"
        }], ["path", {
            d: "M17 6c-6.29 1.47-9.43 5.13-11 11",
            key: "1dsok0"
        }]])
    },
    7066: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Plus", [["line", {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
            key: "myz83a"
        }], ["line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }]])
    },
    2130: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("ScreenShare", [["path", {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
            key: "i8wdob"
        }], ["path", {
            d: "M8 21h8",
            key: "1ev6f3"
        }], ["path", {
            d: "M12 17v4",
            key: "1riwvh"
        }], ["path", {
            d: "m17 8 5-5",
            key: "fqif7o"
        }], ["path", {
            d: "M17 3h5v5",
            key: "1o3tu8"
        }]])
    },
    6155: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Settings", [["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }], ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]])
    },
    7582: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("SunMedium", [["path", {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }], ["path", {
            d: "M12 3v1",
            key: "1asbbs"
        }], ["path", {
            d: "M12 20v1",
            key: "1wcdkc"
        }], ["path", {
            d: "M3 12h1",
            key: "lp3yf2"
        }], ["path", {
            d: "M20 12h1",
            key: "1vloll"
        }], ["path", {
            d: "m18.364 5.636-.707.707",
            key: "1hakh0"
        }], ["path", {
            d: "m6.343 17.657-.707.707",
            key: "18m9nf"
        }], ["path", {
            d: "m5.636 5.636.707.707",
            key: "1xv1c5"
        }], ["path", {
            d: "m17.657 17.657.707.707",
            key: "vl76zb"
        }]])
    },
    4761: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Trash", [["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }], ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }], ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }]])
    },
    3046: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Twitter", [["path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }]])
    },
    7626: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("User", [["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }], ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]])
    },
    748: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Wallet", [["path", {
            d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4",
            key: "st805m"
        }], ["path", {
            d: "M4 6v12c0 1.1.9 2 2 2h14v-4",
            key: "16cu1e"
        }], ["path", {
            d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z",
            key: "lwd56p"
        }]])
    },
    374: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Wrench", [["path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi"
        }]])
    },
    8636: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("X", [["line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18",
            key: "1o5bob"
        }], ["line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18",
            key: "z4dcbv"
        }]])
    },
    8101: function(e, t, n) {
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var r = n(5526)
          , o = Symbol.for("react.element")
          , i = Symbol.for("react.fragment")
          , a = Object.prototype.hasOwnProperty
          , l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , c = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function u(e, t, n) {
            var r, i = {}, u = null, s = null;
            for (r in void 0 !== n && (u = "" + n),
            void 0 !== t.key && (u = "" + t.key),
            void 0 !== t.ref && (s = t.ref),
            t)
                a.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
            if (e && e.defaultProps)
                for (r in t = e.defaultProps)
                    void 0 === i[r] && (i[r] = t[r]);
            return {
                $$typeof: o,
                type: e,
                key: u,
                ref: s,
                props: i,
                _owner: l.current
            }
        }
        t.Fragment = i,
        t.jsx = u,
        t.jsxs = u
    },
    3360: function(e, t, n) {
        e.exports = n(8101)
    },
    5489: function(e, t, n) {
        n.d(t, {
            Av: function() {
                return a
            },
            pF: function() {
                return r
            },
            xv: function() {
                return i
            },
            zi: function() {
                return o
            }
        });
        var r = "right-scroll-bar-position"
          , o = "width-before-scroll-bar"
          , i = "with-scroll-bars-hidden"
          , a = "--removed-body-scroll-bar-size"
    },
    3640: function(e, t, n) {
        n.d(t, {
            jp: function() {
                return f
            }
        });
        var r = n(5526)
          , o = n(921)
          , i = n(5489)
          , a = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , l = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , c = function(e) {
            var t = window.getComputedStyle(document.body)
              , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , r = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [l(n), l(r), l(o)]
        }
          , u = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" == typeof window)
                return a;
            var t = c(e)
              , n = document.documentElement.clientWidth
              , r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        }
          , s = (0,
        o.Ws)()
          , d = function(e, t, n, r) {
            var o = e.left
              , a = e.top
              , l = e.right
              , c = e.gap;
            return void 0 === n && (n = "margin"),
            "\n  .".concat(i.xv, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(i.pF, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(i.zi, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(i.pF, " .").concat(i.pF, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i.zi, " .").concat(i.zi, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat(i.Av, ": ").concat(c, "px;\n  }\n")
        }
          , f = function(e) {
            var t = e.noRelative
              , n = e.noImportant
              , o = e.gapMode
              , i = void 0 === o ? "margin" : o
              , a = r.useMemo(function() {
                return u(i)
            }, [i]);
            return r.createElement(s, {
                styles: d(a, !t, i, n ? "" : "!important")
            })
        }
    },
    7285: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return S
            }
        });
        var r = n(2214)
          , o = n(5526)
          , i = n(5489)
          , a = n(7329)
          , l = (0,
        n(9443)._)()
          , c = function() {}
          , u = o.forwardRef(function(e, t) {
            var n = o.useRef(null)
              , i = o.useState({
                onScrollCapture: c,
                onWheelCapture: c,
                onTouchMoveCapture: c
            })
              , u = i[0]
              , s = i[1]
              , d = e.forwardProps
              , f = e.children
              , p = e.className
              , v = e.removeScrollBar
              , m = e.enabled
              , h = e.shards
              , y = e.sideCar
              , b = e.noIsolation
              , g = e.inert
              , w = e.allowPinchZoom
              , x = e.as
              , k = (0,
            r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"])
              , E = (0,
            a.q)([n, t])
              , C = (0,
            r.pi)((0,
            r.pi)({}, k), u);
            return o.createElement(o.Fragment, null, m && o.createElement(y, {
                sideCar: l,
                removeScrollBar: v,
                shards: h,
                noIsolation: b,
                inert: g,
                setCallbacks: s,
                allowPinchZoom: !!w,
                lockRef: n
            }), d ? o.cloneElement(o.Children.only(f), (0,
            r.pi)((0,
            r.pi)({}, C), {
                ref: E
            })) : o.createElement(void 0 === x ? "div" : x, (0,
            r.pi)({}, C, {
                className: p,
                ref: E
            }), f))
        });
        u.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        u.classNames = {
            fullWidth: i.zi,
            zeroRight: i.pF
        };
        var s = n(432)
          , d = n(3640)
          , f = n(921)
          , p = !1;
        if ("undefined" != typeof window)
            try {
                var v = Object.defineProperty({}, "passive", {
                    get: function() {
                        return p = !0,
                        !0
                    }
                });
                window.addEventListener("test", v, v),
                window.removeEventListener("test", v, v)
            } catch (e) {
                p = !1
            }
        var m = !!p && {
            passive: !1
        }
          , h = function(e, t) {
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
        }
          , y = function(e, t) {
            var n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                b(e, n)) {
                    var r = g(e, n);
                    if (r[1] > r[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== document.body);
            return !1
        }
          , b = function(e, t) {
            return "v" === e ? h(t, "overflowY") : h(t, "overflowX")
        }
          , g = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , w = function(e, t, n, r, o) {
            var i, a = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), l = a * r, c = n.target, u = t.contains(c), s = !1, d = l > 0, f = 0, p = 0;
            do {
                var v = g(e, c)
                  , m = v[0]
                  , h = v[1] - v[2] - a * m;
                (m || h) && b(e, c) && (f += h,
                p += m),
                c = c.parentNode
            } while (!u && c !== document.body || u && (t.contains(c) || t === c));
            return d && (o && 0 === f || !o && l > f) ? s = !0 : !d && (o && 0 === p || !o && -l > p) && (s = !0),
            s
        }
          , x = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , k = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , E = function(e) {
            return e && "current"in e ? e.current : e
        }
          , C = 0
          , M = []
          , N = (0,
        s.L)(l, function(e) {
            var t = o.useRef([])
              , n = o.useRef([0, 0])
              , i = o.useRef()
              , a = o.useState(C++)[0]
              , l = o.useState(function() {
                return (0,
                f.Ws)()
            })[0]
              , c = o.useRef(e);
            o.useEffect(function() {
                c.current = e
            }, [e]),
            o.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(a));
                    var t = (0,
                    r.ev)([e.lockRef.current], (e.shards || []).map(E), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(a))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(a)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(a))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var u = o.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length)
                    return !c.current.allowPinchZoom;
                var r, o = x(e), a = n.current, l = "deltaX"in e ? e.deltaX : a[0] - o[0], u = "deltaY"in e ? e.deltaY : a[1] - o[1], s = e.target, d = Math.abs(l) > Math.abs(u) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === s.type)
                    return !1;
                var f = y(d, s);
                if (!f)
                    return !0;
                if (f ? r = d : (r = "v" === d ? "h" : "v",
                f = y(d, s)),
                !f)
                    return !1;
                if (!i.current && "changedTouches"in e && (l || u) && (i.current = r),
                !r)
                    return !0;
                var p = i.current || r;
                return w(p, t, e, "h" === p ? l : u, !0)
            }, [])
              , s = o.useCallback(function(e) {
                if (M.length && M[M.length - 1] === l) {
                    var n = "deltaY"in e ? k(e) : x(e)
                      , r = t.current.filter(function(t) {
                        var r;
                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (c.current.shards || []).map(E).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? u(e, o[0]) : !c.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , p = o.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , v = o.useCallback(function(e) {
                n.current = x(e),
                i.current = void 0
            }, [])
              , h = o.useCallback(function(t) {
                p(t.type, k(t), t.target, u(t, e.lockRef.current))
            }, [])
              , b = o.useCallback(function(t) {
                p(t.type, x(t), t.target, u(t, e.lockRef.current))
            }, []);
            o.useEffect(function() {
                return M.push(l),
                e.setCallbacks({
                    onScrollCapture: h,
                    onWheelCapture: h,
                    onTouchMoveCapture: b
                }),
                document.addEventListener("wheel", s, m),
                document.addEventListener("touchmove", s, m),
                document.addEventListener("touchstart", v, m),
                function() {
                    M = M.filter(function(e) {
                        return e !== l
                    }),
                    document.removeEventListener("wheel", s, m),
                    document.removeEventListener("touchmove", s, m),
                    document.removeEventListener("touchstart", v, m)
                }
            }, []);
            var g = e.removeScrollBar
              , N = e.inert;
            return o.createElement(o.Fragment, null, N ? o.createElement(l, {
                styles: "\n  .block-interactivity-".concat(a, " {pointer-events: none;}\n  .allow-interactivity-").concat(a, " {pointer-events: all;}\n")
            }) : null, g ? o.createElement(d.jp, {
                gapMode: "margin"
            }) : null)
        })
          , Z = o.forwardRef(function(e, t) {
            return o.createElement(u, (0,
            r.pi)({}, e, {
                ref: t,
                sideCar: N
            }))
        });
        Z.classNames = u.classNames;
        var S = Z
    },
    921: function(e, t, n) {
        n.d(t, {
            Ws: function() {
                return l
            }
        });
        var r, o = n(5526), i = function() {
            var e = 0
              , t = null;
            return {
                add: function(o) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = r || n.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var i, a;
                        (i = t).styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o)),
                        a = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }, a = function() {
            var e = i();
            return function(t, n) {
                o.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && n])
            }
        }, l = function() {
            var e = a();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
    },
    2214: function(e, t, n) {
        n.d(t, {
            _T: function() {
                return o
            },
            ev: function() {
                return i
            },
            pi: function() {
                return r
            }
        });
        var r = function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function o(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }
        function i(e, t, n) {
            if (n || 2 == arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                    r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
    },
    7329: function(e, t, n) {
        n.d(t, {
            q: function() {
                return o
            }
        });
        var r = n(5526);
        function o(e, t) {
            var n, o, i;
            return n = t || null,
            o = function(t) {
                return e.forEach(function(e) {
                    var n;
                    return "function" == typeof (n = e) ? n(t) : n && (n.current = t),
                    n
                })
            }
            ,
            (i = (0,
            r.useState)(function() {
                return {
                    value: n,
                    callback: o,
                    facade: {
                        get current() {
                            return i.value
                        },
                        set current(value) {
                            var e = i.value;
                            e !== value && (i.value = value,
                            i.callback(value, e))
                        }
                    }
                }
            })[0]).callback = o,
            i.facade
        }
    },
    432: function(e, t, n) {
        n.d(t, {
            L: function() {
                return a
            }
        });
        var r = n(2214)
          , o = n(5526)
          , i = function(e) {
            var t = e.sideCar
              , n = (0,
            r._T)(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var i = t.read();
            if (!i)
                throw Error("Sidecar medium not found");
            return o.createElement(i, (0,
            r.pi)({}, n))
        };
        function a(e, t) {
            return e.useMedium(t),
            i
        }
        i.isSideCarExport = !0
    },
    9443: function(e, t, n) {
        n.d(t, {
            _: function() {
                return i
            }
        });
        var r = n(2214);
        function o(e) {
            return e
        }
        function i(e) {
            void 0 === e && (e = {});
            var t, n, i, a = (void 0 === t && (t = o),
            n = [],
            i = !1,
            {
                read: function() {
                    if (i)
                        throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return n.length ? n[n.length - 1] : null
                },
                useMedium: function(e) {
                    var r = t(e, i);
                    return n.push(r),
                    function() {
                        n = n.filter(function(e) {
                            return e !== r
                        })
                    }
                },
                assignSyncMedium: function(e) {
                    for (i = !0; n.length; ) {
                        var t = n;
                        n = [],
                        t.forEach(e)
                    }
                    n = {
                        push: function(t) {
                            return e(t)
                        },
                        filter: function() {
                            return n
                        }
                    }
                },
                assignMedium: function(e) {
                    i = !0;
                    var t = [];
                    if (n.length) {
                        var r = n;
                        n = [],
                        r.forEach(e),
                        t = n
                    }
                    var o = function() {
                        var n = t;
                        t = [],
                        n.forEach(e)
                    }
                      , a = function() {
                        return Promise.resolve().then(o)
                    };
                    a(),
                    n = {
                        push: function(e) {
                            t.push(e),
                            a()
                        },
                        filter: function(e) {
                            return t = t.filter(e),
                            n
                        }
                    }
                }
            });
            return a.options = (0,
            r.pi)({
                async: !0,
                ssr: !1
            }, e),
            a
        }
    },
    3728: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
    },
    8359: function(e, t, n) {
        n.d(t, {
            m: function() {
                return L
            }
        });
        var r = /^\[(.+)\]$/;
        function o(e, t) {
            var n = e;
            return t.split("-").forEach(function(e) {
                n.nextPart.has(e) || n.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                n = n.nextPart.get(e)
            }),
            n
        }
        var i = /\s+/;
        function a() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    if ("string" == typeof t)
                        return t;
                    for (var n, r = "", o = 0; o < t.length; o++)
                        t[o] && (n = e(t[o])) && (r && (r += " "),
                        r += n);
                    return r
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
        function l(e) {
            var t = function(t) {
                return t[e] || []
            };
            return t.isThemeGetter = !0,
            t
        }
        var c = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , u = /^\d+\/\d+$/
          , s = new Set(["px", "full", "screen"])
          , d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/
          , p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
        function v(e) {
            return w(e) || s.has(e) || u.test(e) || m(e)
        }
        function m(e) {
            return Z(e, "length", S)
        }
        function h(e) {
            return Z(e, "size", z)
        }
        function y(e) {
            return Z(e, "position", z)
        }
        function b(e) {
            return Z(e, "url", T)
        }
        function g(e) {
            return Z(e, "number", w)
        }
        function w(e) {
            return !Number.isNaN(Number(e))
        }
        function x(e) {
            return e.endsWith("%") && w(e.slice(0, -1))
        }
        function k(e) {
            return P(e) || Z(e, "number", P)
        }
        function E(e) {
            return c.test(e)
        }
        function C() {
            return !0
        }
        function M(e) {
            return d.test(e)
        }
        function N(e) {
            return Z(e, "", O)
        }
        function Z(e, t, n) {
            var r = c.exec(e);
            return !!r && (r[1] ? r[1] === t : n(r[2]))
        }
        function S(e) {
            return f.test(e)
        }
        function z() {
            return !1
        }
        function T(e) {
            return e.startsWith("url(")
        }
        function P(e) {
            return Number.isInteger(Number(e))
        }
        function O(e) {
            return p.test(e)
        }
        var L = function() {
            for (var e, t, n, l = arguments.length, c = Array(l), u = 0; u < l; u++)
                c[u] = arguments[u];
            var s = function(i) {
                var a = c[0];
                return t = (e = function(e) {
                    var t, n, i, a, l, c, u, s, d, f, p;
                    return {
                        cache: function(e) {
                            if (e < 1)
                                return {
                                    get: function() {},
                                    set: function() {}
                                };
                            var t = 0
                              , n = new Map
                              , r = new Map;
                            function o(o, i) {
                                n.set(o, i),
                                ++t > e && (t = 0,
                                r = n,
                                n = new Map)
                            }
                            return {
                                get: function(e) {
                                    var t = n.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (o(e, t),
                                    t) : void 0
                                },
                                set: function(e, t) {
                                    n.has(e) ? n.set(e, t) : o(e, t)
                                }
                            }
                        }(e.cacheSize),
                        splitModifiers: (n = 1 === (t = e.separator || ":").length,
                        i = t[0],
                        a = t.length,
                        function(e) {
                            for (var r, o = [], l = 0, c = 0, u = 0; u < e.length; u++) {
                                var s = e[u];
                                if (0 === l) {
                                    if (s === i && (n || e.slice(u, u + a) === t)) {
                                        o.push(e.slice(c, u)),
                                        c = u + a;
                                        continue
                                    }
                                    if ("/" === s) {
                                        r = u;
                                        continue
                                    }
                                }
                                "[" === s ? l++ : "]" === s && l--
                            }
                            var d = 0 === o.length ? e : e.substring(c)
                              , f = d.startsWith("!")
                              , p = f ? d.substring(1) : d;
                            return {
                                modifiers: o,
                                hasImportantModifier: f,
                                baseClassName: p,
                                maybePostfixModifierPosition: r && r > c ? r - c : void 0
                            }
                        }
                        ),
                        ...(s = e.theme,
                        d = e.prefix,
                        f = {
                            nextPart: new Map,
                            validators: []
                        },
                        (p = Object.entries(e.classGroups),
                        d ? p.map(function(e) {
                            return [e[0], e[1].map(function(e) {
                                return "string" == typeof e ? d + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                    return [d + e[0], e[1]]
                                })) : e
                            })]
                        }) : p).forEach(function(e) {
                            var t = e[0];
                            (function e(t, n, r, i) {
                                t.forEach(function(t) {
                                    if ("string" == typeof t) {
                                        ("" === t ? n : o(n, t)).classGroupId = r;
                                        return
                                    }
                                    if ("function" == typeof t) {
                                        if (t.isThemeGetter) {
                                            e(t(i), n, r, i);
                                            return
                                        }
                                        n.validators.push({
                                            validator: t,
                                            classGroupId: r
                                        });
                                        return
                                    }
                                    Object.entries(t).forEach(function(t) {
                                        var a = t[0];
                                        e(t[1], o(n, a), r, i)
                                    })
                                })
                            }
                            )(e[1], f, t, s)
                        }),
                        l = e.conflictingClassGroups,
                        u = void 0 === (c = e.conflictingClassGroupModifiers) ? {} : c,
                        {
                            getClassGroupId: function(e) {
                                var t = e.split("-");
                                return "" === t[0] && 1 !== t.length && t.shift(),
                                function e(t, n) {
                                    if (0 === t.length)
                                        return n.classGroupId;
                                    var r = t[0]
                                      , o = n.nextPart.get(r)
                                      , i = o ? e(t.slice(1), o) : void 0;
                                    if (i)
                                        return i;
                                    if (0 !== n.validators.length) {
                                        var a = t.join("-");
                                        return n.validators.find(function(e) {
                                            return (0,
                                            e.validator)(a)
                                        })?.classGroupId
                                    }
                                }(t, f) || function(e) {
                                    if (r.test(e)) {
                                        var t = r.exec(e)[1]
                                          , n = t?.substring(0, t.indexOf(":"));
                                        if (n)
                                            return "arbitrary.." + n
                                    }
                                }(e)
                            },
                            getConflictingClassGroupIds: function(e, t) {
                                var n = l[e] || [];
                                return t && u[e] ? [].concat(n, u[e]) : n
                            }
                        })
                    }
                }(c.slice(1).reduce(function(e, t) {
                    return t(e)
                }, a()))).cache.get,
                n = e.cache.set,
                s = d,
                d(i)
            };
            function d(r) {
                var o, a, l, c, u, s = t(r);
                if (s)
                    return s;
                var d = (a = (o = e).splitModifiers,
                l = o.getClassGroupId,
                c = o.getConflictingClassGroupIds,
                u = new Set,
                r.trim().split(i).map(function(e) {
                    var t = a(e)
                      , n = t.modifiers
                      , r = t.hasImportantModifier
                      , o = t.baseClassName
                      , i = t.maybePostfixModifierPosition
                      , c = l(i ? o.substring(0, i) : o)
                      , u = !!i;
                    if (!c) {
                        if (!i || !(c = l(o)))
                            return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                        u = !1
                    }
                    var s = (function(e) {
                        if (e.length <= 1)
                            return e;
                        var t = []
                          , n = [];
                        return e.forEach(function(e) {
                            "[" === e[0] ? (t.push.apply(t, n.sort().concat([e])),
                            n = []) : n.push(e)
                        }),
                        t.push.apply(t, n.sort()),
                        t
                    }
                    )(n).join(":");
                    return {
                        isTailwindClass: !0,
                        modifierId: r ? s + "!" : s,
                        classGroupId: c,
                        originalClassName: e,
                        hasPostfixModifier: u
                    }
                }).reverse().filter(function(e) {
                    if (!e.isTailwindClass)
                        return !0;
                    var t = e.modifierId
                      , n = e.classGroupId
                      , r = e.hasPostfixModifier
                      , o = t + n;
                    return !u.has(o) && (u.add(o),
                    c(n, r).forEach(function(e) {
                        return u.add(t + e)
                    }),
                    !0)
                }).reverse().map(function(e) {
                    return e.originalClassName
                }).join(" "));
                return n(r, d),
                d
            }
            return function() {
                return s(a.apply(null, arguments))
            }
        }(function() {
            var e = l("colors")
              , t = l("spacing")
              , n = l("blur")
              , r = l("brightness")
              , o = l("borderColor")
              , i = l("borderRadius")
              , a = l("borderSpacing")
              , c = l("borderWidth")
              , u = l("contrast")
              , s = l("grayscale")
              , d = l("hueRotate")
              , f = l("invert")
              , p = l("gap")
              , Z = l("gradientColorStops")
              , S = l("gradientColorStopPositions")
              , z = l("inset")
              , T = l("margin")
              , P = l("opacity")
              , O = l("padding")
              , L = l("saturate")
              , A = l("scale")
              , j = l("sepia")
              , R = l("skew")
              , I = l("space")
              , W = l("translate")
              , _ = function() {
                return ["auto", "contain", "none"]
            }
              , D = function() {
                return ["auto", "hidden", "clip", "visible", "scroll"]
            }
              , F = function() {
                return ["auto", t]
            }
              , V = function() {
                return ["", v]
            }
              , $ = function() {
                return ["auto", w, E]
            }
              , B = function() {
                return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            }
              , G = function() {
                return ["solid", "dashed", "dotted", "double", "none"]
            }
              , H = function() {
                return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
            }
              , U = function() {
                return ["start", "end", "center", "between", "around", "evenly", "stretch"]
            }
              , q = function() {
                return ["", "0", E]
            }
              , K = function() {
                return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }
              , X = function() {
                return [w, g]
            }
              , Y = function() {
                return [w, E]
            };
            return {
                cacheSize: 500,
                theme: {
                    colors: [C],
                    spacing: [v],
                    blur: ["none", "", M, m],
                    brightness: X(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", M, m],
                    borderSpacing: [t],
                    borderWidth: V(),
                    contrast: X(),
                    grayscale: q(),
                    hueRotate: Y(),
                    invert: q(),
                    gap: [t],
                    gradientColorStops: [e],
                    gradientColorStopPositions: [x, m],
                    inset: F(),
                    margin: F(),
                    opacity: X(),
                    padding: [t],
                    saturate: X(),
                    scale: X(),
                    sepia: q(),
                    skew: Y(),
                    space: [t],
                    translate: [t]
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", E]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [M]
                    }],
                    "break-after": [{
                        "break-after": K()
                    }],
                    "break-before": [{
                        "break-before": K()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [].concat(B(), [E])
                    }],
                    overflow: [{
                        overflow: D()
                    }],
                    "overflow-x": [{
                        "overflow-x": D()
                    }],
                    "overflow-y": [{
                        "overflow-y": D()
                    }],
                    overscroll: [{
                        overscroll: _()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": _()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": _()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [z]
                    }],
                    "inset-x": [{
                        "inset-x": [z]
                    }],
                    "inset-y": [{
                        "inset-y": [z]
                    }],
                    start: [{
                        start: [z]
                    }],
                    end: [{
                        end: [z]
                    }],
                    top: [{
                        top: [z]
                    }],
                    right: [{
                        right: [z]
                    }],
                    bottom: [{
                        bottom: [z]
                    }],
                    left: [{
                        left: [z]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", k]
                    }],
                    basis: [{
                        basis: [t]
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", E]
                    }],
                    grow: [{
                        grow: q()
                    }],
                    shrink: [{
                        shrink: q()
                    }],
                    order: [{
                        order: ["first", "last", "none", k]
                    }],
                    "grid-cols": [{
                        "grid-cols": [C]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: [k]
                        }, E]
                    }],
                    "col-start": [{
                        "col-start": $()
                    }],
                    "col-end": [{
                        "col-end": $()
                    }],
                    "grid-rows": [{
                        "grid-rows": [C]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [k]
                        }, E]
                    }],
                    "row-start": [{
                        "row-start": $()
                    }],
                    "row-end": [{
                        "row-end": $()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", E]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", E]
                    }],
                    gap: [{
                        gap: [p]
                    }],
                    "gap-x": [{
                        "gap-x": [p]
                    }],
                    "gap-y": [{
                        "gap-y": [p]
                    }],
                    "justify-content": [{
                        justify: ["normal"].concat(U())
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal"].concat(U(), ["baseline"])
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [].concat(U(), ["baseline"])
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [O]
                    }],
                    px: [{
                        px: [O]
                    }],
                    py: [{
                        py: [O]
                    }],
                    ps: [{
                        ps: [O]
                    }],
                    pe: [{
                        pe: [O]
                    }],
                    pt: [{
                        pt: [O]
                    }],
                    pr: [{
                        pr: [O]
                    }],
                    pb: [{
                        pb: [O]
                    }],
                    pl: [{
                        pl: [O]
                    }],
                    m: [{
                        m: [T]
                    }],
                    mx: [{
                        mx: [T]
                    }],
                    my: [{
                        my: [T]
                    }],
                    ms: [{
                        ms: [T]
                    }],
                    me: [{
                        me: [T]
                    }],
                    mt: [{
                        mt: [T]
                    }],
                    mr: [{
                        mr: [T]
                    }],
                    mb: [{
                        mb: [T]
                    }],
                    ml: [{
                        ml: [T]
                    }],
                    "space-x": [{
                        "space-x": [I]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [I]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", t]
                    }],
                    "min-w": [{
                        "min-w": ["min", "max", "fit", v]
                    }],
                    "max-w": [{
                        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                            screen: [M]
                        }, M, m]
                    }],
                    h: [{
                        h: [t, "auto", "min", "max", "fit"]
                    }],
                    "min-h": [{
                        "min-h": ["min", "max", "fit", v]
                    }],
                    "max-h": [{
                        "max-h": [t, "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", M, m]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", g]
                    }],
                    "font-family": [{
                        font: [C]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", m]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", w, g]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", v]
                    }],
                    "list-image": [{
                        "list-image": ["none", E]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", E]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [P]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [P]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [].concat(G(), ["wavy"])
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", v]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", v]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    indent: [{
                        indent: [t]
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", E]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [P]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [].concat(B(), [y])
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", h]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, b]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [S]
                    }],
                    "gradient-via-pos": [{
                        via: [S]
                    }],
                    "gradient-to-pos": [{
                        to: [S]
                    }],
                    "gradient-from": [{
                        from: [Z]
                    }],
                    "gradient-via": [{
                        via: [Z]
                    }],
                    "gradient-to": [{
                        to: [Z]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [c]
                    }],
                    "border-w-x": [{
                        "border-x": [c]
                    }],
                    "border-w-y": [{
                        "border-y": [c]
                    }],
                    "border-w-s": [{
                        "border-s": [c]
                    }],
                    "border-w-e": [{
                        "border-e": [c]
                    }],
                    "border-w-t": [{
                        "border-t": [c]
                    }],
                    "border-w-r": [{
                        "border-r": [c]
                    }],
                    "border-w-b": [{
                        "border-b": [c]
                    }],
                    "border-w-l": [{
                        "border-l": [c]
                    }],
                    "border-opacity": [{
                        "border-opacity": [P]
                    }],
                    "border-style": [{
                        border: [].concat(G(), ["hidden"])
                    }],
                    "divide-x": [{
                        "divide-x": [c]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [c]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [P]
                    }],
                    "divide-style": [{
                        divide: G()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: [""].concat(G())
                    }],
                    "outline-offset": [{
                        "outline-offset": [v]
                    }],
                    "outline-w": [{
                        outline: [v]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: V()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [P]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [v]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", M, N]
                    }],
                    "shadow-color": [{
                        shadow: [C]
                    }],
                    opacity: [{
                        opacity: [P]
                    }],
                    "mix-blend": [{
                        "mix-blend": H()
                    }],
                    "bg-blend": [{
                        "bg-blend": H()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [n]
                    }],
                    brightness: [{
                        brightness: [r]
                    }],
                    contrast: [{
                        contrast: [u]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", M, E]
                    }],
                    grayscale: [{
                        grayscale: [s]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [f]
                    }],
                    saturate: [{
                        saturate: [L]
                    }],
                    sepia: [{
                        sepia: [j]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [n]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [r]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [u]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [s]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [f]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [P]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [L]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [j]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [a]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [a]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [a]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
                    }],
                    duration: [{
                        duration: Y()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", E]
                    }],
                    delay: [{
                        delay: Y()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", E]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [A]
                    }],
                    "scale-x": [{
                        "scale-x": [A]
                    }],
                    "scale-y": [{
                        "scale-y": [A]
                    }],
                    rotate: [{
                        rotate: [k, E]
                    }],
                    "translate-x": [{
                        "translate-x": [W]
                    }],
                    "translate-y": [{
                        "translate-y": [W]
                    }],
                    "skew-x": [{
                        "skew-x": [R]
                    }],
                    "skew-y": [{
                        "skew-y": [R]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: ["appearance-none"],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": [t]
                    }],
                    "scroll-mx": [{
                        "scroll-mx": [t]
                    }],
                    "scroll-my": [{
                        "scroll-my": [t]
                    }],
                    "scroll-ms": [{
                        "scroll-ms": [t]
                    }],
                    "scroll-me": [{
                        "scroll-me": [t]
                    }],
                    "scroll-mt": [{
                        "scroll-mt": [t]
                    }],
                    "scroll-mr": [{
                        "scroll-mr": [t]
                    }],
                    "scroll-mb": [{
                        "scroll-mb": [t]
                    }],
                    "scroll-ml": [{
                        "scroll-ml": [t]
                    }],
                    "scroll-p": [{
                        "scroll-p": [t]
                    }],
                    "scroll-px": [{
                        "scroll-px": [t]
                    }],
                    "scroll-py": [{
                        "scroll-py": [t]
                    }],
                    "scroll-ps": [{
                        "scroll-ps": [t]
                    }],
                    "scroll-pe": [{
                        "scroll-pe": [t]
                    }],
                    "scroll-pt": [{
                        "scroll-pt": [t]
                    }],
                    "scroll-pr": [{
                        "scroll-pr": [t]
                    }],
                    "scroll-pb": [{
                        "scroll-pb": [t]
                    }],
                    "scroll-pl": [{
                        "scroll-pl": [t]
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "pinch-zoom", "manipulation", {
                            pan: ["x", "left", "right", "y", "up", "down"]
                        }]
                    }],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", E]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [v, g]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);
    