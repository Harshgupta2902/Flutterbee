(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1341], {
    8957: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dx: function() {
                return H
            },
            VY: function() {
                return U
            },
            aV: function() {
                return $
            },
            dk: function() {
                return G
            },
            fC: function() {
                return X
            },
            h_: function() {
                return q
            },
            x8: function() {
                return J
            },
            xz: function() {
                return j
            }
        });
        var r = n(3728)
          , o = n(5526)
          , l = n(5674)
          , a = n(3440)
          , u = n(6301)
          , i = n(366)
          , c = n(3477)
          , s = n(8919)
          , d = n(2939)
          , f = n(9859)
          , p = n(3619)
          , v = n(8737)
          , m = n(1505)
          , h = n(7285)
          , g = n(6530)
          , E = n(4444);
        let b = "Dialog"
          , [w,y] = (0,
        u.b)(b)
          , [C,R] = w(b)
          , D = e=>{
            let {__scopeDialog: t, children: n, open: r, defaultOpen: l, onOpenChange: a, modal: u=!0} = e
              , s = (0,
            o.useRef)(null)
              , d = (0,
            o.useRef)(null)
              , [f=!1,p] = (0,
            c.T)({
                prop: r,
                defaultProp: l,
                onChange: a
            });
            return (0,
            o.createElement)(C, {
                scope: t,
                triggerRef: s,
                contentRef: d,
                contentId: (0,
                i.M)(),
                titleId: (0,
                i.M)(),
                descriptionId: (0,
                i.M)(),
                open: f,
                onOpenChange: p,
                onOpenToggle: (0,
                o.useCallback)(()=>p(e=>!e), [p]),
                modal: u
            }, n)
        }
          , k = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...u} = e
              , i = R("DialogTrigger", n)
              , c = (0,
            a.e)(t, i.triggerRef);
            return (0,
            o.createElement)(v.WV.button, (0,
            r.Z)({
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": i.open,
                "aria-controls": i.contentId,
                "data-state": V(i.open)
            }, u, {
                ref: c,
                onClick: (0,
                l.M)(e.onClick, i.onOpenToggle)
            }))
        }
        )
          , S = "DialogPortal"
          , [_,O] = w(S, {
            forceMount: void 0
        })
          , F = e=>{
            let {__scopeDialog: t, forceMount: n, children: r, container: l} = e
              , a = R(S, t);
            return (0,
            o.createElement)(_, {
                scope: t,
                forceMount: n
            }, o.Children.map(r, e=>(0,
            o.createElement)(p.z, {
                present: n || a.open
            }, (0,
            o.createElement)(f.h, {
                asChild: !0,
                container: l
            }, e))))
        }
          , P = "DialogOverlay"
          , M = (0,
        o.forwardRef)((e,t)=>{
            let n = O(P, e.__scopeDialog)
              , {forceMount: l=n.forceMount, ...a} = e
              , u = R(P, e.__scopeDialog);
            return u.modal ? (0,
            o.createElement)(p.z, {
                present: l || u.open
            }, (0,
            o.createElement)(I, (0,
            r.Z)({}, a, {
                ref: t
            }))) : null
        }
        )
          , I = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...l} = e
              , a = R(P, n);
            return (0,
            o.createElement)(h.Z, {
                as: E.g7,
                allowPinchZoom: !0,
                shards: [a.contentRef]
            }, (0,
            o.createElement)(v.WV.div, (0,
            r.Z)({
                "data-state": V(a.open)
            }, l, {
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...l.style
                }
            })))
        }
        )
          , L = "DialogContent"
          , A = (0,
        o.forwardRef)((e,t)=>{
            let n = O(L, e.__scopeDialog)
              , {forceMount: l=n.forceMount, ...a} = e
              , u = R(L, e.__scopeDialog);
            return (0,
            o.createElement)(p.z, {
                present: l || u.open
            }, u.modal ? (0,
            o.createElement)(x, (0,
            r.Z)({}, a, {
                ref: t
            })) : (0,
            o.createElement)(T, (0,
            r.Z)({}, a, {
                ref: t
            })))
        }
        )
          , x = (0,
        o.forwardRef)((e,t)=>{
            let n = R(L, e.__scopeDialog)
              , u = (0,
            o.useRef)(null)
              , i = (0,
            a.e)(t, n.contentRef, u);
            return (0,
            o.useEffect)(()=>{
                let e = u.current;
                if (e)
                    return (0,
                    g.Ry)(e)
            }
            , []),
            (0,
            o.createElement)(Z, (0,
            r.Z)({}, e, {
                ref: i,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0,
                l.M)(e.onCloseAutoFocus, e=>{
                    var t;
                    e.preventDefault(),
                    null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                }
                ),
                onPointerDownOutside: (0,
                l.M)(e.onPointerDownOutside, e=>{
                    let t = e.detail.originalEvent
                      , n = 0 === t.button && !0 === t.ctrlKey
                      , r = 2 === t.button || n;
                    r && e.preventDefault()
                }
                ),
                onFocusOutside: (0,
                l.M)(e.onFocusOutside, e=>e.preventDefault())
            }))
        }
        )
          , T = (0,
        o.forwardRef)((e,t)=>{
            let n = R(L, e.__scopeDialog)
              , l = (0,
            o.useRef)(!1);
            return (0,
            o.createElement)(Z, (0,
            r.Z)({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: t=>{
                    var r, o;
                    null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                    t.defaultPrevented || (l.current || null === (o = n.triggerRef.current) || void 0 === o || o.focus(),
                    t.preventDefault()),
                    l.current = !1
                }
                ,
                onInteractOutside: t=>{
                    var r, o;
                    null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t),
                    t.defaultPrevented || (l.current = !0);
                    let a = t.target
                      , u = null === (o = n.triggerRef.current) || void 0 === o ? void 0 : o.contains(a);
                    u && t.preventDefault()
                }
            }))
        }
        )
          , Z = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: i, ...c} = e
              , f = R(L, n)
              , p = (0,
            o.useRef)(null)
              , v = (0,
            a.e)(t, p);
            return (0,
            m.EW)(),
            (0,
            o.createElement)(o.Fragment, null, (0,
            o.createElement)(d.M, {
                asChild: !0,
                loop: !0,
                trapped: l,
                onMountAutoFocus: u,
                onUnmountAutoFocus: i
            }, (0,
            o.createElement)(s.XB, (0,
            r.Z)({
                role: "dialog",
                id: f.contentId,
                "aria-describedby": f.descriptionId,
                "aria-labelledby": f.titleId,
                "data-state": V(f.open)
            }, c, {
                ref: v,
                onDismiss: ()=>f.onOpenChange(!1)
            }))), !1)
        }
        )
          , W = "DialogTitle"
          , N = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...l} = e
              , a = R(W, n);
            return (0,
            o.createElement)(v.WV.h2, (0,
            r.Z)({
                id: a.titleId
            }, l, {
                ref: t
            }))
        }
        )
          , K = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...l} = e
              , a = R("DialogDescription", n);
            return (0,
            o.createElement)(v.WV.p, (0,
            r.Z)({
                id: a.descriptionId
            }, l, {
                ref: t
            }))
        }
        )
          , z = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...a} = e
              , u = R("DialogClose", n);
            return (0,
            o.createElement)(v.WV.button, (0,
            r.Z)({
                type: "button"
            }, a, {
                ref: t,
                onClick: (0,
                l.M)(e.onClick, ()=>u.onOpenChange(!1))
            }))
        }
        );
        function V(e) {
            return e ? "open" : "closed"
        }
        let[B,Y] = (0,
        u.k)("DialogTitleWarning", {
            contentName: L,
            titleName: W,
            docsSlug: "dialog"
        })
          , X = D
          , j = k
          , q = F
          , $ = M
          , U = A
          , H = N
          , G = K
          , J = z
    },
    4322: function(e) {
        var t = /[\\\/\-_+.# \t"@\[\(\{&]/
          , n = /[\\\/\-_+.# \t"@\[\(\{&]/g;
        e.exports = function(e, r) {
            return function e(r, o, l, a, u, i) {
                if (i === o.length)
                    return u === r.length ? 1 : .99;
                for (var c, s, d, f = a.charAt(i), p = l.indexOf(f, u), v = 0; p >= 0; )
                    (c = e(r, o, l, a, p + 1, i + 1)) > v && (p === u ? c *= 1 : t.test(r.charAt(p - 1)) ? (c *= .9,
                    (d = r.slice(u, p - 1).match(n)) && u > 0 && (c *= Math.pow(.999, d.length))) : t.test(r.slice(u, p - 1)) ? (c *= 0,
                    u > 0 && (c *= Math.pow(.999, p - u))) : (c *= .3,
                    u > 0 && (c *= Math.pow(.999, p - u))),
                    r.charAt(p) !== o.charAt(i) && (c *= .9999)),
                    c < .1 && l.charAt(p - 1) === a.charAt(i + 1) && l.charAt(p - 1) !== a.charAt(i) && .1 * (s = e(r, o, l, a, p + 1, i + 2)) > c && (c = .1 * s),
                    c > v && (v = c),
                    p = l.indexOf(f, p + 1);
                return v
            }(e, r, e.toLowerCase(), r.toLowerCase(), 0, 0)
        }
    },
    3632: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1014);
        let o = (0,
        r.Z)("Search", [["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }], ["line", {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }]])
    },
    2179: function(e, t, n) {
        e.exports = n(7449)
    },
    2266: function(e, t, n) {
        e.exports = n(5703)
    },
    37: function(e, t, n) {
        "use strict";
        let r, o;
        n.d(t, {
            mY: function() {
                return eU
            }
        });
        var l = n(3728)
          , a = n(5526)
          , u = n(5674)
          , i = n(3440)
          , c = n(6301)
          , s = n(366)
          , d = n(3477)
          , f = n(2591);
        let p = (0,
        a.forwardRef)((e,t)=>{
            let {children: n, ...r} = e
              , o = a.Children.toArray(n)
              , u = o.find(h);
            if (u) {
                let e = u.props.children
                  , n = o.map(t=>t !== u ? t : a.Children.count(e) > 1 ? a.Children.only(null) : (0,
                a.isValidElement)(e) ? e.props.children : null);
                return (0,
                a.createElement)(v, (0,
                l.Z)({}, r, {
                    ref: t
                }), (0,
                a.isValidElement)(e) ? (0,
                a.cloneElement)(e, void 0, n) : null)
            }
            return (0,
            a.createElement)(v, (0,
            l.Z)({}, r, {
                ref: t
            }), n)
        }
        );
        p.displayName = "Slot";
        let v = (0,
        a.forwardRef)((e,t)=>{
            let {children: n, ...r} = e;
            return (0,
            a.isValidElement)(n) ? (0,
            a.cloneElement)(n, {
                ...function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , l = t[r]
                          , a = /^on[A-Z]/.test(r);
                        a ? n[r] = (...e)=>{
                            null == l || l(...e),
                            null == o || o(...e)
                        }
                        : "style" === r ? n[r] = {
                            ...o,
                            ...l
                        } : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(r, n.props),
                ref: (0,
                i.F)(t, n.ref)
            }) : a.Children.count(n) > 1 ? a.Children.only(null) : null
        }
        );
        v.displayName = "SlotClone";
        let m = ({children: e})=>(0,
        a.createElement)(a.Fragment, null, e);
        function h(e) {
            return (0,
            a.isValidElement)(e) && e.type === m
        }
        let g = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e,t)=>{
            let n = (0,
            a.forwardRef)((e,n)=>{
                let {asChild: r, ...o} = e
                  , u = r ? p : t;
                return (0,
                a.useEffect)(()=>{
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                a.createElement)(u, (0,
                l.Z)({}, o, {
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
        var E = n(797);
        let b = "dismissableLayer.update"
          , w = (0,
        a.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , y = (0,
        a.forwardRef)((e,t)=>{
            let {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: o, onPointerDownOutside: c, onFocusOutside: s, onInteractOutside: d, onDismiss: f, ...p} = e
              , v = (0,
            a.useContext)(w)
              , [m,h] = (0,
            a.useState)(null)
              , [,y] = (0,
            a.useState)({})
              , D = (0,
            i.e)(t, e=>h(e))
              , k = Array.from(v.layers)
              , [S] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1)
              , _ = k.indexOf(S)
              , O = m ? k.indexOf(m) : -1
              , F = v.layersWithOutsidePointerEventsDisabled.size > 0
              , P = O >= _
              , M = function(e) {
                let t = (0,
                E.W)(e)
                  , n = (0,
                a.useRef)(!1)
                  , r = (0,
                a.useRef)(()=>{}
                );
                return (0,
                a.useEffect)(()=>{
                    let e = e=>{
                        if (e.target && !n.current) {
                            let n = {
                                originalEvent: e
                            };
                            function o() {
                                R("dismissableLayer.pointerDownOutside", t, n, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (document.removeEventListener("click", r.current),
                            r.current = o,
                            document.addEventListener("click", r.current, {
                                once: !0
                            })) : o()
                        }
                        n.current = !1
                    }
                      , o = window.setTimeout(()=>{
                        document.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return ()=>{
                        window.clearTimeout(o),
                        document.removeEventListener("pointerdown", e),
                        document.removeEventListener("click", r.current)
                    }
                }
                , [t]),
                {
                    onPointerDownCapture: ()=>n.current = !0
                }
            }(e=>{
                let t = e.target
                  , n = [...v.branches].some(e=>e.contains(t));
                !P || n || (null == c || c(e),
                null == d || d(e),
                e.defaultPrevented || null == f || f())
            }
            )
              , I = function(e) {
                let t = (0,
                E.W)(e)
                  , n = (0,
                a.useRef)(!1);
                return (0,
                a.useEffect)(()=>{
                    let e = e=>{
                        e.target && !n.current && R("dismissableLayer.focusOutside", t, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return document.addEventListener("focusin", e),
                    ()=>document.removeEventListener("focusin", e)
                }
                , [t]),
                {
                    onFocusCapture: ()=>n.current = !0,
                    onBlurCapture: ()=>n.current = !1
                }
            }(e=>{
                let t = e.target
                  , n = [...v.branches].some(e=>e.contains(t));
                n || (null == s || s(e),
                null == d || d(e),
                e.defaultPrevented || null == f || f())
            }
            );
            return !function(e) {
                let t = (0,
                E.W)(e);
                (0,
                a.useEffect)(()=>{
                    let e = e=>{
                        "Escape" === e.key && t(e)
                    }
                    ;
                    return document.addEventListener("keydown", e),
                    ()=>document.removeEventListener("keydown", e)
                }
                , [t])
            }(e=>{
                let t = O === v.layers.size - 1;
                t && (null == o || o(e),
                !e.defaultPrevented && f && (e.preventDefault(),
                f()))
            }
            ),
            (0,
            a.useEffect)(()=>{
                if (m)
                    return n && (0 === v.layersWithOutsidePointerEventsDisabled.size && (r = document.body.style.pointerEvents,
                    document.body.style.pointerEvents = "none"),
                    v.layersWithOutsidePointerEventsDisabled.add(m)),
                    v.layers.add(m),
                    C(),
                    ()=>{
                        n && 1 === v.layersWithOutsidePointerEventsDisabled.size && (document.body.style.pointerEvents = r)
                    }
            }
            , [m, n, v]),
            (0,
            a.useEffect)(()=>()=>{
                m && (v.layers.delete(m),
                v.layersWithOutsidePointerEventsDisabled.delete(m),
                C())
            }
            , [m, v]),
            (0,
            a.useEffect)(()=>{
                let e = ()=>y({});
                return document.addEventListener(b, e),
                ()=>document.removeEventListener(b, e)
            }
            , []),
            (0,
            a.createElement)(g.div, (0,
            l.Z)({}, p, {
                ref: D,
                style: {
                    pointerEvents: F ? P ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                u.M)(e.onFocusCapture, I.onFocusCapture),
                onBlurCapture: (0,
                u.M)(e.onBlurCapture, I.onBlurCapture),
                onPointerDownCapture: (0,
                u.M)(e.onPointerDownCapture, M.onPointerDownCapture)
            }))
        }
        );
        function C() {
            let e = new CustomEvent(b);
            document.dispatchEvent(e)
        }
        function R(e, t, n, {discrete: r}) {
            let o = n.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            (t && o.addEventListener(e, t, {
                once: !0
            }),
            r) ? o && (0,
            f.flushSync)(()=>o.dispatchEvent(l)) : o.dispatchEvent(l)
        }
        let D = "focusScope.autoFocusOnMount"
          , k = "focusScope.autoFocusOnUnmount"
          , S = {
            bubbles: !1,
            cancelable: !0
        }
          , _ = (0,
        a.forwardRef)((e,t)=>{
            let {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: u, ...c} = e
              , [s,d] = (0,
            a.useState)(null)
              , f = (0,
            E.W)(o)
              , p = (0,
            E.W)(u)
              , v = (0,
            a.useRef)(null)
              , m = (0,
            i.e)(t, e=>d(e))
              , h = (0,
            a.useRef)({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            (0,
            a.useEffect)(()=>{
                if (r) {
                    function e(e) {
                        if (h.paused || !s)
                            return;
                        let t = e.target;
                        s.contains(t) ? v.current = t : P(v.current, {
                            select: !0
                        })
                    }
                    function t(e) {
                        h.paused || !s || s.contains(e.relatedTarget) || P(v.current, {
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
            , [r, s, h.paused]),
            (0,
            a.useEffect)(()=>{
                if (s) {
                    M.add(h);
                    let e = document.activeElement
                      , t = s.contains(e);
                    if (!t) {
                        let t = new CustomEvent(D,S);
                        s.addEventListener(D, f),
                        s.dispatchEvent(t),
                        t.defaultPrevented || (function(e, {select: t=!1}={}) {
                            let n = document.activeElement;
                            for (let r of e)
                                if (P(r, {
                                    select: t
                                }),
                                document.activeElement !== n)
                                    return
                        }(O(s).filter(e=>"A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && P(s))
                    }
                    return ()=>{
                        s.removeEventListener(D, f),
                        setTimeout(()=>{
                            let t = new CustomEvent(k,S);
                            s.addEventListener(k, p),
                            s.dispatchEvent(t),
                            t.defaultPrevented || P(null != e ? e : document.body, {
                                select: !0
                            }),
                            s.removeEventListener(k, p),
                            M.remove(h)
                        }
                        , 0)
                    }
                }
            }
            , [s, f, p, h]);
            let b = (0,
            a.useCallback)(e=>{
                if (!n && !r || h.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [r,l] = function(e) {
                        let t = O(e)
                          , n = F(t, e)
                          , r = F(t.reverse(), e);
                        return [n, r]
                    }(t);
                    r && l ? e.shiftKey || o !== l ? e.shiftKey && o === r && (e.preventDefault(),
                    n && P(l, {
                        select: !0
                    })) : (e.preventDefault(),
                    n && P(r, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [n, r, h.paused]);
            return (0,
            a.createElement)(g.div, (0,
            l.Z)({
                tabIndex: -1
            }, c, {
                ref: m,
                onKeyDown: b
            }))
        }
        );
        function O(e) {
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
        function F(e, t) {
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
        function P(e, {select: t=!1}={}) {
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e)instanceof HTMLInputElement && "select"in n && t && e.select()
            }
        }
        let M = (o = [],
        {
            add(e) {
                let t = o[0];
                e !== t && (null == t || t.pause()),
                (o = I(o, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (o = I(o, e))[0]) || void 0 === t || t.resume()
            }
        });
        function I(e, t) {
            let n = [...e]
              , r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1),
            n
        }
        let L = (0,
        a.forwardRef)((e,t)=>{
            var n;
            let {container: r=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...o} = e;
            return r ? f.createPortal((0,
            a.createElement)(g.div, (0,
            l.Z)({}, o, {
                ref: t
            })), r) : null
        }
        );
        var A = n(3619)
          , x = n(1505)
          , T = n(2214)
          , Z = n(5489)
          , W = n(7329)
          , N = (0,
        n(9443)._)()
          , K = function() {}
          , z = a.forwardRef(function(e, t) {
            var n = a.useRef(null)
              , r = a.useState({
                onScrollCapture: K,
                onWheelCapture: K,
                onTouchMoveCapture: K
            })
              , o = r[0]
              , l = r[1]
              , u = e.forwardProps
              , i = e.children
              , c = e.className
              , s = e.removeScrollBar
              , d = e.enabled
              , f = e.shards
              , p = e.sideCar
              , v = e.noIsolation
              , m = e.inert
              , h = e.allowPinchZoom
              , g = e.as
              , E = (0,
            T._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"])
              , b = (0,
            W.q)([n, t])
              , w = (0,
            T.pi)((0,
            T.pi)({}, E), o);
            return a.createElement(a.Fragment, null, d && a.createElement(p, {
                sideCar: N,
                removeScrollBar: s,
                shards: f,
                noIsolation: v,
                inert: m,
                setCallbacks: l,
                allowPinchZoom: !!h,
                lockRef: n
            }), u ? a.cloneElement(a.Children.only(i), (0,
            T.pi)((0,
            T.pi)({}, w), {
                ref: b
            })) : a.createElement(void 0 === g ? "div" : g, (0,
            T.pi)({}, w, {
                className: c,
                ref: b
            }), i))
        });
        z.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        z.classNames = {
            fullWidth: Z.zi,
            zeroRight: Z.pF
        };
        var V = n(432)
          , B = n(3640)
          , Y = n(921)
          , X = !1;
        if ("undefined" != typeof window)
            try {
                var j = Object.defineProperty({}, "passive", {
                    get: function() {
                        return X = !0,
                        !0
                    }
                });
                window.addEventListener("test", j, j),
                window.removeEventListener("test", j, j)
            } catch (e) {
                X = !1
            }
        var q = !!X && {
            passive: !1
        }
          , $ = function(e) {
            var t = window.getComputedStyle(e);
            return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
        }
          , U = function(e) {
            var t = window.getComputedStyle(e);
            return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
        }
          , H = function(e, t) {
            var n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                G(e, n)) {
                    var r = J(e, n);
                    if (r[1] > r[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== document.body);
            return !1
        }
          , G = function(e, t) {
            return "v" === e ? $(t) : U(t)
        }
          , J = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , Q = function(e, t, n, r, o) {
            var l, a = (l = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === l ? -1 : 1), u = a * r, i = n.target, c = t.contains(i), s = !1, d = u > 0, f = 0, p = 0;
            do {
                var v = J(e, i)
                  , m = v[0]
                  , h = v[1] - v[2] - a * m;
                (m || h) && G(e, i) && (f += h,
                p += m),
                i = i.parentNode
            } while (!c && i !== document.body || c && (t.contains(i) || t === i));
            return d && (o && 0 === f || !o && u > f) ? s = !0 : !d && (o && 0 === p || !o && -u > p) && (s = !0),
            s
        }
          , ee = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , et = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , en = function(e) {
            return e && "current"in e ? e.current : e
        }
          , er = 0
          , eo = []
          , el = (0,
        V.L)(N, function(e) {
            var t = a.useRef([])
              , n = a.useRef([0, 0])
              , r = a.useRef()
              , o = a.useState(er++)[0]
              , l = a.useState(function() {
                return (0,
                Y.Ws)()
            })[0]
              , u = a.useRef(e);
            a.useEffect(function() {
                u.current = e
            }, [e]),
            a.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (0,
                    T.ev)([e.lockRef.current], (e.shards || []).map(en), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var i = a.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length)
                    return !u.current.allowPinchZoom;
                var o, l = ee(e), a = n.current, i = "deltaX"in e ? e.deltaX : a[0] - l[0], c = "deltaY"in e ? e.deltaY : a[1] - l[1], s = e.target, d = Math.abs(i) > Math.abs(c) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === s.type)
                    return !1;
                var f = H(d, s);
                if (!f)
                    return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v",
                f = H(d, s)),
                !f)
                    return !1;
                if (!r.current && "changedTouches"in e && (i || c) && (r.current = o),
                !o)
                    return !0;
                var p = r.current || o;
                return Q(p, t, e, "h" === p ? i : c, !0)
            }, [])
              , c = a.useCallback(function(e) {
                if (eo.length && eo[eo.length - 1] === l) {
                    var n = "deltaY"in e ? et(e) : ee(e)
                      , r = t.current.filter(function(t) {
                        var r;
                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (u.current.shards || []).map(en).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? i(e, o[0]) : !u.current.noIsolation) && e.preventDefault()
                    }
                }
            }, [])
              , s = a.useCallback(function(e, n, r, o) {
                var l = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o
                };
                t.current.push(l),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== l
                    })
                }, 1)
            }, [])
              , d = a.useCallback(function(e) {
                n.current = ee(e),
                r.current = void 0
            }, [])
              , f = a.useCallback(function(t) {
                s(t.type, et(t), t.target, i(t, e.lockRef.current))
            }, [])
              , p = a.useCallback(function(t) {
                s(t.type, ee(t), t.target, i(t, e.lockRef.current))
            }, []);
            a.useEffect(function() {
                return eo.push(l),
                e.setCallbacks({
                    onScrollCapture: f,
                    onWheelCapture: f,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", c, q),
                document.addEventListener("touchmove", c, q),
                document.addEventListener("touchstart", d, q),
                function() {
                    eo = eo.filter(function(e) {
                        return e !== l
                    }),
                    document.removeEventListener("wheel", c, q),
                    document.removeEventListener("touchmove", c, q),
                    document.removeEventListener("touchstart", d, q)
                }
            }, []);
            var v = e.removeScrollBar
              , m = e.inert;
            return a.createElement(a.Fragment, null, m ? a.createElement(l, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, v ? a.createElement(B.jp, {
                gapMode: "margin"
            }) : null)
        })
          , ea = a.forwardRef(function(e, t) {
            return a.createElement(z, (0,
            T.pi)({}, e, {
                ref: t,
                sideCar: el
            }))
        });
        ea.classNames = z.classNames;
        var eu = n(6530);
        let ei = "Dialog"
          , [ec,es] = (0,
        c.b)(ei)
          , [ed,ef] = ec(ei)
          , ep = e=>{
            let {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: l, modal: u=!0} = e
              , i = (0,
            a.useRef)(null)
              , c = (0,
            a.useRef)(null)
              , [f=!1,p] = (0,
            d.T)({
                prop: r,
                defaultProp: o,
                onChange: l
            });
            return (0,
            a.createElement)(ed, {
                scope: t,
                triggerRef: i,
                contentRef: c,
                contentId: (0,
                s.M)(),
                titleId: (0,
                s.M)(),
                descriptionId: (0,
                s.M)(),
                open: f,
                onOpenChange: p,
                onOpenToggle: (0,
                a.useCallback)(()=>p(e=>!e), [p]),
                modal: u
            }, n)
        }
          , ev = "DialogPortal"
          , [em,eh] = ec(ev, {
            forceMount: void 0
        })
          , eg = e=>{
            let {__scopeDialog: t, forceMount: n, children: r, container: o} = e
              , l = ef(ev, t);
            return (0,
            a.createElement)(em, {
                scope: t,
                forceMount: n
            }, a.Children.map(r, e=>(0,
            a.createElement)(A.z, {
                present: n || l.open
            }, (0,
            a.createElement)(L, {
                asChild: !0,
                container: o
            }, e))))
        }
          , eE = "DialogOverlay"
          , eb = (0,
        a.forwardRef)((e,t)=>{
            let n = eh(eE, e.__scopeDialog)
              , {forceMount: r=n.forceMount, ...o} = e
              , u = ef(eE, e.__scopeDialog);
            return u.modal ? (0,
            a.createElement)(A.z, {
                present: r || u.open
            }, (0,
            a.createElement)(ew, (0,
            l.Z)({}, o, {
                ref: t
            }))) : null
        }
        )
          , ew = (0,
        a.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...r} = e
              , o = ef(eE, n);
            return (0,
            a.createElement)(ea, {
                as: p,
                allowPinchZoom: !0,
                shards: [o.contentRef]
            }, (0,
            a.createElement)(g.div, (0,
            l.Z)({
                "data-state": eS(o.open)
            }, r, {
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })))
        }
        )
          , ey = "DialogContent"
          , eC = (0,
        a.forwardRef)((e,t)=>{
            let n = eh(ey, e.__scopeDialog)
              , {forceMount: r=n.forceMount, ...o} = e
              , u = ef(ey, e.__scopeDialog);
            return (0,
            a.createElement)(A.z, {
                present: r || u.open
            }, u.modal ? (0,
            a.createElement)(eR, (0,
            l.Z)({}, o, {
                ref: t
            })) : (0,
            a.createElement)(eD, (0,
            l.Z)({}, o, {
                ref: t
            })))
        }
        )
          , eR = (0,
        a.forwardRef)((e,t)=>{
            let n = ef(ey, e.__scopeDialog)
              , r = (0,
            a.useRef)(null)
              , o = (0,
            i.e)(t, n.contentRef, r);
            return (0,
            a.useEffect)(()=>{
                let e = r.current;
                if (e)
                    return (0,
                    eu.Ry)(e)
            }
            , []),
            (0,
            a.createElement)(ek, (0,
            l.Z)({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0,
                u.M)(e.onCloseAutoFocus, e=>{
                    var t;
                    e.preventDefault(),
                    null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                }
                ),
                onPointerDownOutside: (0,
                u.M)(e.onPointerDownOutside, e=>{
                    let t = e.detail.originalEvent
                      , n = 0 === t.button && !0 === t.ctrlKey
                      , r = 2 === t.button || n;
                    r && e.preventDefault()
                }
                ),
                onFocusOutside: (0,
                u.M)(e.onFocusOutside, e=>e.preventDefault())
            }))
        }
        )
          , eD = (0,
        a.forwardRef)((e,t)=>{
            let n = ef(ey, e.__scopeDialog)
              , r = (0,
            a.useRef)(!1);
            return (0,
            a.createElement)(ek, (0,
            l.Z)({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: t=>{
                    var o, l;
                    null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                    t.defaultPrevented || (r.current || null === (l = n.triggerRef.current) || void 0 === l || l.focus(),
                    t.preventDefault()),
                    r.current = !1
                }
                ,
                onInteractOutside: t=>{
                    var o, l;
                    null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t),
                    t.defaultPrevented || (r.current = !0);
                    let a = t.target
                      , u = null === (l = n.triggerRef.current) || void 0 === l ? void 0 : l.contains(a);
                    u && t.preventDefault()
                }
            }))
        }
        )
          , ek = (0,
        a.forwardRef)((e,t)=>{
            let {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: u, ...c} = e
              , s = ef(ey, n)
              , d = (0,
            a.useRef)(null)
              , f = (0,
            i.e)(t, d);
            return (0,
            x.EW)(),
            (0,
            a.createElement)(a.Fragment, null, (0,
            a.createElement)(_, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: u
            }, (0,
            a.createElement)(y, (0,
            l.Z)({
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": eS(s.open)
            }, c, {
                ref: f,
                onDismiss: ()=>s.onOpenChange(!1)
            }))), !1)
        }
        );
        function eS(e) {
            return e ? "open" : "closed"
        }
        let[e_,eO] = (0,
        c.k)("DialogTitleWarning", {
            contentName: ey,
            titleName: "DialogTitle",
            docsSlug: "dialog"
        });
        var eF = n(4322)
          , eP = '[cmdk-group=""]'
          , eM = '[cmdk-group-items=""]'
          , eI = '[cmdk-item=""]'
          , eL = `${eI}:not([aria-disabled="true"])`
          , eA = "cmdk-item-select"
          , ex = "data-value"
          , eT = (e,t)=>eF(e, t)
          , eZ = a.createContext(void 0)
          , eW = ()=>a.useContext(eZ)
          , eN = a.createContext(void 0)
          , eK = ()=>a.useContext(eN)
          , ez = a.createContext(void 0)
          , eV = a.forwardRef((e,t)=>{
            let n = a.useRef(null)
              , r = eJ(()=>({
                search: "",
                value: "",
                filtered: {
                    count: 0,
                    items: new Map,
                    groups: new Set
                }
            }))
              , o = eJ(()=>new Set)
              , l = eJ(()=>new Map)
              , u = eJ(()=>new Map)
              , i = eJ(()=>new Set)
              , c = eH(e)
              , {label: s, children: d, value: f, onValueChange: p, filter: v, shouldFilter: m, ...h} = e
              , g = a.useId()
              , E = a.useId()
              , b = a.useId()
              , w = e9();
            eG(()=>{
                if (void 0 !== f) {
                    let e = f.trim().toLowerCase();
                    r.current.value = e,
                    w(6, _),
                    y.emit()
                }
            }
            , [f]);
            let y = a.useMemo(()=>({
                subscribe: e=>(i.current.add(e),
                ()=>i.current.delete(e)),
                snapshot: ()=>r.current,
                setState: (e,t,n)=>{
                    var o, l, a;
                    if (!Object.is(r.current[e], t)) {
                        if (r.current[e] = t,
                        "search" === e)
                            S(),
                            D(),
                            w(1, k);
                        else if ("value" === e) {
                            if ((null == (o = c.current) ? void 0 : o.value) !== void 0) {
                                null == (a = (l = c.current).onValueChange) || a.call(l, t);
                                return
                            }
                            n || w(5, _)
                        }
                        y.emit()
                    }
                }
                ,
                emit: ()=>{
                    i.current.forEach(e=>e())
                }
            }), [])
              , C = a.useMemo(()=>({
                value: (e,t)=>{
                    t !== u.current.get(e) && (u.current.set(e, t),
                    r.current.filtered.items.set(e, R(t)),
                    w(2, ()=>{
                        D(),
                        y.emit()
                    }
                    ))
                }
                ,
                item: (e,t)=>(o.current.add(e),
                t && (l.current.has(t) ? l.current.get(t).add(e) : l.current.set(t, new Set([e]))),
                w(3, ()=>{
                    S(),
                    D(),
                    r.current.value || k(),
                    y.emit()
                }
                ),
                ()=>{
                    u.current.delete(e),
                    o.current.delete(e),
                    r.current.filtered.items.delete(e),
                    w(4, ()=>{
                        S(),
                        k(),
                        y.emit()
                    }
                    )
                }
                ),
                group: e=>(l.current.has(e) || l.current.set(e, new Set),
                ()=>{
                    u.current.delete(e),
                    l.current.delete(e)
                }
                ),
                filter: ()=>c.current.shouldFilter,
                label: s || e["aria-label"],
                listId: g,
                inputId: b,
                labelId: E
            }), []);
            function R(e) {
                var t;
                let n = (null == (t = c.current) ? void 0 : t.filter) ?? eT;
                return e ? n(e, r.current.search) : 0
            }
            function D() {
                if (!n.current || !r.current.search || !1 === c.current.shouldFilter)
                    return;
                let e = r.current.filtered.items
                  , t = [];
                r.current.filtered.groups.forEach(n=>{
                    let r = l.current.get(n)
                      , o = 0;
                    r.forEach(t=>{
                        o = Math.max(e.get(t), o)
                    }
                    ),
                    t.push([n, o])
                }
                );
                let o = n.current.querySelector('[cmdk-list-sizer=""]');
                F().sort((t,n)=>{
                    let r = t.getAttribute(ex)
                      , o = n.getAttribute(ex);
                    return (e.get(o) ?? 0) - (e.get(r) ?? 0)
                }
                ).forEach(e=>{
                    let t = e.closest(eM);
                    t ? t.appendChild(e.parentElement === t ? e : e.closest(`${eM} > *`)) : o.appendChild(e.parentElement === o ? e : e.closest(`${eM} > *`))
                }
                ),
                t.sort((e,t)=>t[1] - e[1]).forEach(e=>{
                    let t = n.current.querySelector(`${eP}[${ex}="${e[0]}"]`);
                    null == t || t.parentElement.appendChild(t)
                }
                )
            }
            function k() {
                let e = F().find(e=>!e.ariaDisabled)
                  , t = null == e ? void 0 : e.getAttribute(ex);
                y.setState("value", t || void 0)
            }
            function S() {
                if (!r.current.search || !1 === c.current.shouldFilter) {
                    r.current.filtered.count = o.current.size;
                    return
                }
                r.current.filtered.groups = new Set;
                let e = 0;
                for (let t of o.current) {
                    let n = R(u.current.get(t));
                    r.current.filtered.items.set(t, n),
                    n > 0 && e++
                }
                for (let[e,t] of l.current)
                    for (let n of t)
                        if (r.current.filtered.items.get(n) > 0) {
                            r.current.filtered.groups.add(e);
                            break
                        }
                r.current.filtered.count = e
            }
            function _() {
                var e, t, n;
                let r = O();
                r && ((null == (e = r.parentElement) ? void 0 : e.firstChild) === r && (null == (n = null == (t = r.closest(eP)) ? void 0 : t.querySelector('[cmdk-group-heading=""]')) || n.scrollIntoView({
                    block: "nearest"
                })),
                r.scrollIntoView({
                    block: "nearest"
                }))
            }
            function O() {
                return n.current.querySelector(`${eI}[aria-selected="true"]`)
            }
            function F() {
                return Array.from(n.current.querySelectorAll(eL))
            }
            function P(e) {
                let t = F()[e];
                t && y.setState("value", t.getAttribute(ex))
            }
            function M(e) {
                var t;
                let n = O()
                  , r = F()
                  , o = r.findIndex(e=>e === n)
                  , l = r[o + e];
                null != (t = c.current) && t.loop && (l = o + e < 0 ? r[r.length - 1] : o + e === r.length ? r[0] : r[o + e]),
                l && y.setState("value", l.getAttribute(ex))
            }
            function I(e) {
                let t = O(), n = null == t ? void 0 : t.closest(eP), r;
                for (; n && !r; )
                    r = null == (n = e > 0 ? function(e, t) {
                        let n = e.nextElementSibling;
                        for (; n; ) {
                            if (n.matches(t))
                                return n;
                            n = n.nextElementSibling
                        }
                    }(n, eP) : function(e, t) {
                        let n = e.previousElementSibling;
                        for (; n; ) {
                            if (n.matches(t))
                                return n;
                            n = n.previousElementSibling
                        }
                    }(n, eP)) ? void 0 : n.querySelector(eL);
                r ? y.setState("value", r.getAttribute(ex)) : M(e)
            }
            let L = ()=>P(F().length - 1)
              , A = e=>{
                e.preventDefault(),
                e.metaKey ? L() : e.altKey ? I(1) : M(1)
            }
              , x = e=>{
                e.preventDefault(),
                e.metaKey ? P(0) : e.altKey ? I(-1) : M(-1)
            }
            ;
            return a.createElement("div", {
                ref: eQ([n, t]),
                ...h,
                "cmdk-root": "",
                onKeyDown: e=>{
                    var t;
                    if (null == (t = h.onKeyDown) || t.call(h, e),
                    !e.defaultPrevented)
                        switch (e.key) {
                        case "n":
                        case "j":
                            e.ctrlKey && A(e);
                            break;
                        case "ArrowDown":
                            A(e);
                            break;
                        case "p":
                        case "k":
                            e.ctrlKey && x(e);
                            break;
                        case "ArrowUp":
                            x(e);
                            break;
                        case "Home":
                            e.preventDefault(),
                            P(0);
                            break;
                        case "End":
                            e.preventDefault(),
                            L();
                            break;
                        case "Enter":
                            {
                                e.preventDefault();
                                let t = O();
                                if (t) {
                                    let e = new Event(eA);
                                    t.dispatchEvent(e)
                                }
                            }
                        }
                }
            }, a.createElement("label", {
                "cmdk-label": "",
                htmlFor: C.inputId,
                id: C.labelId,
                style: e2
            }, s), a.createElement(eN.Provider, {
                value: y
            }, a.createElement(eZ.Provider, {
                value: C
            }, d)))
        }
        )
          , eB = a.forwardRef((e,t)=>{
            let n = a.useId()
              , r = a.useRef(null)
              , o = a.useContext(ez)
              , l = eW()
              , u = eH(e);
            eG(()=>l.item(n, o), []);
            let i = e1(n, r, [e.value, e.children, r])
              , c = eK()
              , s = e0(e=>e.value && e.value === i.current)
              , d = e0(e=>!1 === l.filter() || !e.search || e.filtered.items.get(n) > 0);
            function f() {
                var e, t;
                null == (t = (e = u.current).onSelect) || t.call(e, i.current)
            }
            if (a.useEffect(()=>{
                let t = r.current;
                if (!(!t || e.disabled))
                    return t.addEventListener(eA, f),
                    ()=>t.removeEventListener(eA, f)
            }
            , [d, e.onSelect, e.disabled]),
            !d)
                return null;
            let {disabled: p, value: v, onSelect: m, ...h} = e;
            return a.createElement("div", {
                ref: eQ([r, t]),
                ...h,
                "cmdk-item": "",
                role: "option",
                "aria-disabled": p || void 0,
                "aria-selected": s || void 0,
                "data-selected": s || void 0,
                onPointerMove: p ? void 0 : function() {
                    c.setState("value", i.current, !0)
                }
                ,
                onClick: p ? void 0 : f
            }, e.children)
        }
        )
          , eY = a.forwardRef((e,t)=>{
            let {heading: n, children: r, ...o} = e
              , l = a.useId()
              , u = a.useRef(null)
              , i = a.useRef(null)
              , c = a.useId()
              , s = eW()
              , d = e0(e=>!1 === s.filter() || !e.search || e.filtered.groups.has(l));
            eG(()=>s.group(l), []),
            e1(l, u, [e.value, e.heading, i]);
            let f = a.createElement(ez.Provider, {
                value: l
            }, r);
            return a.createElement("div", {
                ref: eQ([u, t]),
                ...o,
                "cmdk-group": "",
                role: "presentation",
                hidden: !d || void 0
            }, n && a.createElement("div", {
                ref: i,
                "cmdk-group-heading": "",
                "aria-hidden": !0,
                id: c
            }, n), a.createElement("div", {
                "cmdk-group-items": "",
                role: "group",
                "aria-labelledby": n ? c : void 0
            }, f))
        }
        )
          , eX = a.forwardRef((e,t)=>{
            let {alwaysRender: n, ...r} = e
              , o = a.useRef(null)
              , l = e0(e=>!e.search);
            return n || l ? a.createElement("div", {
                ref: eQ([o, t]),
                ...r,
                "cmdk-separator": "",
                role: "separator"
            }) : null
        }
        )
          , ej = a.forwardRef((e,t)=>{
            let {onValueChange: n, ...r} = e
              , o = null != e.value
              , l = eK()
              , u = e0(e=>e.search)
              , i = eW();
            return a.useEffect(()=>{
                null != e.value && l.setState("search", e.value)
            }
            , [e.value]),
            a.createElement("input", {
                ref: t,
                ...r,
                "cmdk-input": "",
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: !1,
                "aria-autocomplete": "list",
                role: "combobox",
                "aria-expanded": !0,
                "aria-controls": i.listId,
                "aria-labelledby": i.labelId,
                id: i.inputId,
                type: "text",
                value: o ? e.value : u,
                onChange: e=>{
                    o || l.setState("search", e.target.value),
                    null == n || n(e.target.value)
                }
            })
        }
        )
          , eq = a.forwardRef((e,t)=>{
            let {children: n, ...r} = e
              , o = a.useRef(null)
              , l = a.useRef(null)
              , u = eW();
            return a.useEffect(()=>{
                if (l.current && o.current) {
                    let e = l.current, t = o.current, n, r = new ResizeObserver(()=>{
                        n = requestAnimationFrame(()=>{
                            let n = e.getBoundingClientRect().height;
                            t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px")
                        }
                        )
                    }
                    );
                    return r.observe(e),
                    ()=>{
                        cancelAnimationFrame(n),
                        r.unobserve(e)
                    }
                }
            }
            , []),
            a.createElement("div", {
                ref: eQ([o, t]),
                ...r,
                "cmdk-list": "",
                role: "listbox",
                "aria-label": "Suggestions",
                id: u.listId,
                "aria-labelledby": u.inputId
            }, a.createElement("div", {
                ref: l,
                "cmdk-list-sizer": ""
            }, n))
        }
        )
          , e$ = a.forwardRef((e,t)=>{
            let {open: n, onOpenChange: r, container: o, ...l} = e;
            return a.createElement(ep, {
                open: n,
                onOpenChange: r
            }, a.createElement(eg, {
                container: o
            }, a.createElement(eb, {
                "cmdk-overlay": ""
            }), a.createElement(eC, {
                "aria-label": e.label,
                "cmdk-dialog": ""
            }, a.createElement(eV, {
                ref: t,
                ...l
            }))))
        }
        )
          , eU = Object.assign(eV, {
            List: eq,
            Item: eB,
            Input: ej,
            Group: eY,
            Separator: eX,
            Dialog: e$,
            Empty: a.forwardRef((e,t)=>{
                let n = a.useRef(!0)
                  , r = e0(e=>0 === e.filtered.count);
                return a.useEffect(()=>{
                    n.current = !1
                }
                , []),
                n.current || !r ? null : a.createElement("div", {
                    ref: t,
                    ...e,
                    "cmdk-empty": "",
                    role: "presentation"
                })
            }
            ),
            Loading: a.forwardRef((e,t)=>{
                let {progress: n, children: r, ...o} = e;
                return a.createElement("div", {
                    ref: t,
                    ...o,
                    "cmdk-loading": "",
                    role: "progressbar",
                    "aria-valuenow": n,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-label": "Loading..."
                }, a.createElement("div", {
                    "aria-hidden": !0
                }, r))
            }
            )
        });
        function eH(e) {
            let t = a.useRef(e);
            return eG(()=>{
                t.current = e
            }
            ),
            t
        }
        var eG = typeof window > "u" ? a.useEffect : a.useLayoutEffect;
        function eJ(e) {
            let t = a.useRef();
            return void 0 === t.current && (t.current = e()),
            t
        }
        function eQ(e) {
            return t=>{
                e.forEach(e=>{
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                }
                )
            }
        }
        function e0(e) {
            let t = eK()
              , n = ()=>e(t.snapshot());
            return a.useSyncExternalStore(t.subscribe, n, n)
        }
        function e1(e, t, n) {
            let r = a.useRef()
              , o = eW();
            return eG(()=>{
                var l;
                let a = (()=>{
                    var e;
                    for (let t of n) {
                        if ("string" == typeof t)
                            return t.trim().toLowerCase();
                        if ("object" == typeof t && "current"in t && t.current)
                            return null == (e = t.current.textContent) ? void 0 : e.trim().toLowerCase()
                    }
                }
                )();
                o.value(e, a),
                null == (l = t.current) || l.setAttribute(ex, a),
                r.current = a
            }
            ),
            r
        }
        var e9 = ()=>{
            let[e,t] = a.useState()
              , n = eJ(()=>new Map);
            return eG(()=>{
                n.current.forEach(e=>e()),
                n.current = new Map
            }
            , [e]),
            (e,r)=>{
                n.current.set(e, r),
                t({})
            }
        }
          , e2 = {
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0"
        }
    }
}]);
