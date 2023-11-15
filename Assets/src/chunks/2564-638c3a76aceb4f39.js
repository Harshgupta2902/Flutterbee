"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2564], {
    6340: function(e, t, r) {
        r.r(t),
        r.d(t, {
            CommandMenu: function() {
                return I
            }
        });
        var n = r(3360)
          , a = r(5526)
          , i = r(2266)
          , s = r(4699);
        let l = [{
            title: "Avatar",
            img: "/files/application/avatars.png",
            href: "avatars"
        }, {
            title: "Banner",
            img: "/files/application/banners.png",
            href: "banners"
        }, {
            title: "Breadcrumb",
            img: "/files/application/breadcrumbs.png",
            href: "breadcrumbs"
        }, {
            title: "Button",
            img: "/files/application/buttons.png",
            href: "buttons"
        }, {
            title: "Card",
            img: "/files/application/cards.png",
            href: "cards"
        }, {
            title: "Input",
            img: "/files/application/input.png",
            href: "inputs"
        }, {
            title: "Navbar",
            img: "/files/application/navbars.png",
            href: "navbars"
        }, {
            title: "Pagination",
            img: "/files/application/pagination.png",
            href: "pagination"
        }, {
            title: "Sidebar",
            img: "/files/application/sidebars.png",
            href: "sidebars"
        }, {
            title: "Sign In",
            img: "/files/application/signin.png",
            href: "signin"
        }, {
            title: "Sign Up",
            img: "/files/application/signup.png",
            href: "signup"
        }, {
            title: "Tables",
            img: "/files/application/table.png",
            href: "tables"
        }]
          , o = [{
            title: "CTA",
            img: "/files/marketing/cta.png",
            href: "cta"
        }, {
            title: "Error",
            img: "/files/marketing/error.png",
            href: "error"
        }, {
            title: "FAQs",
            img: "/files/marketing/faq.png",
            href: "faq"
        }, {
            title: "Feature",
            img: "/files/marketing/features.png",
            href: "feature"
        }, {
            title: "Footer",
            img: "/files/marketing/footer.png",
            href: "footer"
        }, {
            title: "Hero",
            img: "/files/marketing/hero.png",
            href: "hero"
        }, {
            title: "Newsletter",
            img: "/files/marketing/newsletter.png",
            href: "newsletter"
        }, {
            title: "Pricing",
            img: "/files/marketing/pricing.png",
            href: "pricing"
        }, {
            title: "Team",
            img: "/files/marketing/teams.png",
            href: "team"
        }, {
            title: "Testimonial",
            img: "/files/marketing/testimonials.png",
            href: "testimonial"
        }]
          , d = [{
            title: "Cart",
            img: "/files/ecommerce/cart.png",
            href: "cart"
        }, {
            title: "Checkout",
            img: "/files/ecommerce/checkout.png",
            href: "checkout"
        }, {
            title: "Product Overview",
            img: "/files/ecommerce/overview.png",
            href: "overview"
        }, {
            title: "Filters",
            img: "/files/ecommerce/filter.png",
            href: "filter"
        }, {
            title: "Orders",
            img: "/files/ecommerce/order.png",
            href: "order"
        }, {
            title: "Products",
            img: "/files/ecommerce/product.png",
            href: "product"
        }]
          , c = [{
            title: "About Us Pages",
            img: "/files/pages/about-us.png",
            href: "about"
        }, {
            title: "Blog Pages",
            img: "/files/pages/blog-page.png",
            href: "blog"
        }, {
            title: "Contact Us Pages",
            img: "/files/pages/contact-us.png",
            href: "contact"
        }, {
            title: "Error Pages",
            img: "/files/pages/error-page.png",
            href: "error"
        }, {
            title: "Landing Pages",
            img: "/files/pages/landing-page.png",
            href: "landing"
        }, {
            title: "Pricing Pages",
            img: "/files/pages/pricing-page.png",
            href: "pricing"
        }];
        var m = r(7148)
          , p = r(3930)
          , f = r(37)
          , g = r(3632)
          , u = r(8957)
          , h = r(8636);
        let x = u.fC;
        u.xz;
        let b = e=>{
            let {className: t, children: r, ...a} = e;
            return (0,
            n.jsx)(u.h_, {
                className: (0,
                m.cn)(t),
                ...a,
                children: (0,
                n.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-start justify-center sm:items-center",
                    children: r
                })
            })
        }
        ;
        b.displayName = u.h_.displayName;
        let v = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(u.aV, {
                ref: t,
                className: (0,
                m.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", r),
                ...a
            })
        }
        );
        v.displayName = u.aV.displayName;
        let w = a.forwardRef((e,t)=>{
            let {className: r, children: a, ...i} = e;
            return (0,
            n.jsxs)(b, {
                children: [(0,
                n.jsx)(v, {}), (0,
                n.jsxs)(u.VY, {
                    ref: t,
                    className: (0,
                    m.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0", r),
                    ...i,
                    children: [a, (0,
                    n.jsxs)(u.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [(0,
                        n.jsx)(h.Z, {
                            className: "h-4 w-4"
                        }), (0,
                        n.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })]
            })
        }
        );
        w.displayName = u.VY.displayName;
        let N = e=>{
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                m.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                ...r
            })
        }
        ;
        N.displayName = "DialogHeader";
        let j = e=>{
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                m.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                ...r
            })
        }
        ;
        j.displayName = "DialogFooter";
        let y = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(u.Dx, {
                ref: t,
                className: (0,
                m.cn)("text-lg font-semibold leading-none tracking-tight", r),
                ...a
            })
        }
        );
        y.displayName = u.Dx.displayName;
        let k = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(u.dk, {
                ref: t,
                className: (0,
                m.cn)("text-sm text-muted-foreground", r),
                ...a
            })
        }
        );
        k.displayName = u.dk.displayName;
        let C = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(f.mY, {
                ref: t,
                className: (0,
                m.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", r),
                ...a
            })
        }
        );
        C.displayName = f.mY.displayName;
        let Z = e=>{
            let {children: t, ...r} = e;
            return (0,
            n.jsx)(x, {
                ...r,
                children: (0,
                n.jsx)(w, {
                    className: "overflow-hidden p-0 shadow-2xl",
                    children: (0,
                    n.jsx)(C, {
                        className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                        children: t
                    })
                })
            })
        }
          , _ = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsxs)("div", {
                className: "flex items-center border-b px-3",
                "cmdk-input-wrapper": "",
                children: [(0,
                n.jsx)(g.Z, {
                    className: "mr-2 h-4 w-4 shrink-0 opacity-50"
                }), (0,
                n.jsx)(f.mY.Input, {
                    ref: t,
                    className: (0,
                    m.cn)("placeholder:text-foreground-muted flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50", r),
                    ...a
                })]
            })
        }
        );
        _.displayName = f.mY.Input.displayName;
        let z = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(f.mY.List, {
                ref: t,
                className: (0,
                m.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", r),
                ...a
            })
        }
        );
        z.displayName = f.mY.List.displayName;
        let P = a.forwardRef((e,t)=>(0,
        n.jsx)(f.mY.Empty, {
            ref: t,
            className: "py-6 text-center text-sm",
            ...e
        }));
        P.displayName = f.mY.Empty.displayName;
        let Y = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(f.mY.Group, {
                ref: t,
                className: (0,
                m.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", r),
                ...a
            })
        }
        );
        Y.displayName = f.mY.Group.displayName;
        let R = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(f.mY.Separator, {
                ref: t,
                className: (0,
                m.cn)("-mx-1 h-px bg-border", r),
                ...a
            })
        }
        );
        R.displayName = f.mY.Separator.displayName;
        let S = a.forwardRef((e,t)=>{
            let {className: r, ...a} = e;
            return (0,
            n.jsx)(f.mY.Item, {
                ref: t,
                className: (0,
                m.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                ...a
            })
        }
        );
        S.displayName = f.mY.Item.displayName;
        let E = e=>{
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("span", {
                className: (0,
                m.cn)("ml-auto text-xs tracking-widest text-muted-foreground", t),
                ...r
            })
        }
        ;
        function I(e) {
            let {...t} = e
              , r = (0,
            i.useRouter)()
              , [f,g] = a.useState(!1);
            a.useEffect(()=>{
                let e = e=>{
                    "k" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(),
                    g(e=>!e))
                }
                ;
                return document.addEventListener("keydown", e),
                ()=>document.removeEventListener("keydown", e)
            }
            , []);
            let u = a.useCallback(e=>{
                g(!1),
                e()
            }
            , []);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(p.z, {
                    variant: "outline",
                    className: (0,
                    m.cn)("relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"),
                    onClick: ()=>g(!0),
                    ...t,
                    children: [(0,
                    n.jsx)("span", {
                        className: "hidden lg:inline-flex",
                        children: "Search Components..."
                    }), (0,
                    n.jsx)("span", {
                        className: "inline-flex lg:hidden",
                        children: "Search..."
                    }), (0,
                    n.jsxs)("kbd", {
                        className: "pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-xs",
                            children: "⌘"
                        }), "K"]
                    })]
                }), (0,
                n.jsxs)(Z, {
                    open: f,
                    onOpenChange: g,
                    children: [(0,
                    n.jsx)(_, {
                        placeholder: "Type a command or search..."
                    }), (0,
                    n.jsxs)(z, {
                        children: [(0,
                        n.jsx)(P, {
                            children: "No results found."
                        }), (0,
                        n.jsx)(Y, {
                            heading: "Application UI Components",
                            children: l.map(e=>(0,
                            n.jsxs)(S, {
                                onSelect: ()=>{
                                    u(()=>r.push("/components/".concat(e.href)))
                                }
                                ,
                                children: [(0,
                                n.jsx)(s.Z, {
                                    className: "mr-2 h-4 w-4"
                                }), e.title]
                            }, e.href))
                        }), (0,
                        n.jsx)(R, {}), (0,
                        n.jsx)(Y, {
                            heading: "Marketing Components",
                            children: o.map(e=>(0,
                            n.jsxs)(S, {
                                onSelect: ()=>{
                                    u(()=>r.push("/components/".concat(e.href)))
                                }
                                ,
                                children: [(0,
                                n.jsx)(s.Z, {
                                    className: "mr-2 h-4 w-4"
                                }), e.title]
                            }, e.href))
                        }), (0,
                        n.jsx)(R, {}), (0,
                        n.jsx)(Y, {
                            heading: "Ecommerce Components",
                            children: d.map(e=>(0,
                            n.jsxs)(S, {
                                onSelect: ()=>{
                                    u(()=>r.push("/components/".concat(e.href)))
                                }
                                ,
                                children: [(0,
                                n.jsx)(s.Z, {
                                    className: "mr-2 h-4 w-4"
                                }), e.title]
                            }, e.href))
                        }), (0,
                        n.jsx)(R, {}), (0,
                        n.jsx)(Y, {
                            heading: "Page Examples",
                            children: c.map(e=>(0,
                            n.jsxs)(S, {
                                onSelect: ()=>{
                                    u(()=>r.push("/pages/".concat(e.href)))
                                }
                                ,
                                children: [(0,
                                n.jsx)(s.Z, {
                                    className: "mr-2 h-4 w-4"
                                }), e.title]
                            }, e.href))
                        })]
                    })]
                })]
            })
        }
        E.displayName = "CommandShortcut"
    },
    3397: function(e, t, r) {
        r.d(t, {
            P: function() {
                return M
            }
        });
        var n = r(3360)
          , a = r(8636)
          , i = r(7366)
          , s = r(4366)
          , l = r(2351)
          , o = r(6432)
          , d = r(942)
          , c = r(4761)
          , m = r(1681)
          , p = r(4699)
          , f = r(7505)
          , g = r(6155)
          , u = r(6686)
          , h = r(7306)
          , x = r(7066)
          , b = r(113)
          , v = r(7626)
          , w = r(8374)
          , N = r(4902)
          , j = r(6524)
          , y = r(7582)
          , k = r(2008)
          , C = r(3919)
          , Z = r(5950)
          , _ = r(2130)
          , z = r(374)
          , P = r(2469)
          , Y = r(6795)
          , R = r(748)
          , S = r(9162)
          , E = r(3046)
          , I = r(8427);
        let M = {
            logo: e=>{
                let {...t} = e;
                return (0,
                n.jsx)("svg", {
                    width: "50",
                    height: "56",
                    viewBox: "0 0 50 56",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...t,
                    children: (0,
                    n.jsx)("path", {
                        d: "M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",
                        fill: "black"
                    })
                })
            }
            ,
            close: a.Z,
            menu: i.Z,
            spinner: s.Z,
            chevronLeft: l.Z,
            chevronRight: o.Z,
            chevronDown: d.Z,
            trash: c.Z,
            post: m.Z,
            page: p.Z,
            media: f.Z,
            settings: g.Z,
            billing: u.Z,
            ellipsis: h.Z,
            add: x.Z,
            warning: b.Z,
            user: v.Z,
            arrowRight: w.Z,
            help: N.Z,
            pizza: j.Z,
            sun: y.Z,
            moon: k.Z,
            laptop: C.Z,
            customisable: Z.Z,
            responsive: _.Z,
            integrations: z.Z,
            copy: P.Z,
            update: Y.Z,
            free: R.Z,
            eye: S.Z,
            gitHub: e=>{
                let {...t} = e;
                return (0,
                n.jsx)("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "github",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 496 512",
                    ...t,
                    children: (0,
                    n.jsx)("path", {
                        fill: "currentColor",
                        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    })
                })
            }
            ,
            twitter: E.Z,
            check: I.Z
        }
    },
    837: function(e, t, r) {
        r.r(t),
        r.d(t, {
            MainNav: function() {
                return m
            }
        });
        var n = r(3360)
          , a = r(5526)
          , i = r(2179)
          , s = r.n(i)
          , l = r(7148)
          , o = r(3397);
        let d = {
            name: "DevUI",
            description: "An tailwind css component library.",
            url: "https://devui.io",
            ogImage: ""
        };
        function c(e) {
            let {items: t, children: r} = e;
            return a.useLayoutEffect(()=>{
                let e = window.getComputedStyle(document.body).overflow;
                return document.body.style.overflow = "hidden",
                ()=>document.body.style.overflow = e
            }
            , []),
            (0,
            n.jsx)("div", {
                className: (0,
                l.cn)("animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden"),
                children: (0,
                n.jsxs)("div", {
                    className: "text-popover-foreground relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md",
                    children: [(0,
                    n.jsxs)(s(), {
                        href: "/",
                        className: "flex items-center space-x-2",
                        children: [(0,
                        n.jsx)(o.P.logo, {
                            className: "h-8 w-8"
                        }), (0,
                        n.jsx)("span", {
                            className: "font-bold",
                            children: d.name
                        })]
                    }), (0,
                    n.jsx)("nav", {
                        className: "grid grid-flow-row auto-rows-max text-sm",
                        children: t.map((e,t)=>(0,
                        n.jsx)(s(), {
                            href: e.disabled ? "#" : e.href,
                            className: (0,
                            l.cn)("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline", e.disabled && "cursor-not-allowed opacity-60"),
                            children: e.title
                        }, t))
                    }), r]
                })
            })
        }
        function m(e) {
            let {items: t, children: r} = e
              , [i,m] = a.useState(!1);
            return (0,
            n.jsxs)("div", {
                className: "flex gap-6 md:gap-10",
                children: [(0,
                n.jsxs)(s(), {
                    href: "/",
                    className: "hidden items-center space-x-2 md:flex",
                    children: [(0,
                    n.jsx)(o.P.logo, {
                        className: "h-8 w-8"
                    }), (0,
                    n.jsx)("span", {
                        className: "hidden font-heading text-xl font-extrabold sm:inline-block",
                        children: d.name
                    })]
                }), (null == t ? void 0 : t.length) ? (0,
                n.jsx)("nav", {
                    className: "hidden gap-6 md:flex",
                    children: null == t ? void 0 : t.map((e,t)=>(0,
                    n.jsx)(s(), {
                        href: e.disabled ? "#" : e.href,
                        className: (0,
                        l.cn)("flex items-center text-lg font-semibold transition-colors sm:text-sm", e.disabled && "cursor-not-allowed opacity-80"),
                        children: e.title
                    }, t))
                }) : null, (0,
                n.jsxs)("button", {
                    className: "flex items-center space-x-2 md:hidden",
                    onClick: ()=>m(!i),
                    children: [i ? (0,
                    n.jsx)(o.P.close, {}) : (0,
                    n.jsx)(o.P.menu, {}), (0,
                    n.jsx)("span", {
                        className: "font-heading text-xl font-extrabold sm:inline-block",
                        children: "DevUI"
                    })]
                }), i && t && (0,
                n.jsx)(c, {
                    items: t,
                    children: r
                })]
            })
        }
    },
    3930: function(e, t, r) {
        r.d(t, {
            z: function() {
                return o
            }
        });
        var n = r(3360)
          , a = r(5526)
          , i = r(1089)
          , s = r(7148);
        let l = (0,
        i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "underline-offset-4 hover:underline text-primary"
                },
                size: {
                    default: "h-10 py-2 px-4",
                    sm: "h-9 px-3 rounded-md",
                    lg: "h-11 px-8 rounded-md"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , o = a.forwardRef((e,t)=>{
            let {className: r, variant: a, size: i, ...o} = e;
            return (0,
            n.jsx)("button", {
                className: (0,
                s.cn)(l({
                    variant: a,
                    size: i,
                    className: r
                })),
                ref: t,
                ...o
            })
        }
        );
        o.displayName = "Button"
    },
    7148: function(e, t, r) {
        r.d(t, {
            W: function() {
                return d
            },
            cn: function() {
                return c
            }
        });
        var n = r(9754)
          , a = r(8359)
          , i = r(9244)
          , s = r.n(i)
          , l = r(3559)
          , o = r.n(l);
        let d = e=>{
            let t = s().format(e, {
                parser: "babel",
                plugins: [o()],
                semi: !1,
                printWidth: 80
            });
            return t.slice(1)
        }
        ;
        function c() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            a.m)((0,
            n.W)(t))
        }
    }
}]);
