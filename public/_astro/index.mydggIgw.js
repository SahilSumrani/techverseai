import {
    j as r
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    e as C,
    c as M
} from "./index.BwDjtkKo.js";
import {
    m as g
} from "./react.BJ61_sDN.js";
import {
    C as z
} from "./Container.Ce-IQkgp.js";
import {
    A as S
} from "./index.DxFyLVPS.js";
import {
    A as O
} from "./AnimateChangeInHeight.CBOpwvnb.js";
import {
    useScreenSize as H
} from "./ScreenSizeProvider.i-8ZMHs-.js";
import {
    C as P
} from "./CaretDown.esm.BuQtJiMo.js";
let m = [],
    x = 0;
const y = 4,
    R = globalThis.nanostoresGlobal || = {
        epoch: 0
    },
    k = e => {
        let t = [],
            n = {
                get: () => (n.lc || n.listen(() => {})(), n.value),
                init: e,
                lc: 0,
                listen: e => (n.lc = t.push(e), () => {
                    for (let t = x + 4; t < m.length;) m[t] === e ? m.splice(t, 4) : t += 4;
                    let i = t.indexOf(e);
                    ~i && (t.splice(i, 1), --n.lc || n.off())
                }),
                notify(e, i) {
                    R.epoch++;
                    let a = !m.length;
                    for (let a of t) m.push(a, n.value, e, i);
                    if (a) {
                        for (x = 0; x < m.length; x += 4) m[x](m[x + 1], m[x + 2], m[x + 3]);
                        m.length = 0
                    }
                },
                off() {},
                set(e) {
                    let t = n.value;
                    t !== e && (n.value = e, n.notify(t))
                },
                subscribe(e) {
                    let t = n.listen(e);
                    return e(n.value), t
                },
                value: e
            };
        return n
    };

function B(e, t, n) {
    let i = new Set(t).add(void 0);
    return e.listen((e, t, a) => {
        i.has(a) && n(e, t, a)
    })
}
const Q = (e = {}) => {
    let t = k(e);
    return t.setKey = function(e, n) {
        let i = t.value;
        typeof n > "u" && e in t.value ? (t.value = { ...t.value
        }, delete t.value[e], t.notify(i, e)) : t.value[e] !== n && (t.value = { ...t.value,
            [e]: n
        }, t.notify(i, e))
    }, t
};
let E = (e, t) => n => {
    e.current !== n && (e.current = n, t())
};

function w(e, {
    keys: t,
    deps: n = [e, t],
    ssr: i
} = {}) {
    let a = d.useRef();
    a.current = e.get();
    let s = d.useCallback(n => (E(a, n)(e.value), t ? .length > 0 ? B(e, t, E(a, n)) : e.listen(E(a, n))), n),
        r = () => a.current,
        o = r;
    return i && "init" in e && (o = "initial" === i ? () => e.init : i), d.useSyncExternalStore(s, r, o)
}
const N = new Map,
    j = e => {
        const t = N.get(e) || Q({
            activeMenuItemIndex: null,
            closingMenuItemIndex: null,
            direction: 0
        });
        return N.set(e, t), {
            store: t,
            setActiveMenuItemIndex: e => {
                null === e && null !== t.value.activeMenuItemIndex ? t.set({
                    activeMenuItemIndex: null,
                    closingMenuItemIndex: t.value.activeMenuItemIndex,
                    direction: 0
                }) : t.set({
                    activeMenuItemIndex: e,
                    closingMenuItemIndex: null,
                    direction: null !== e && null !== t.value.activeMenuItemIndex ? e - t.value.activeMenuItemIndex : 0
                })
            },
            finishClosing: () => {
                t.set({ ...t.value,
                    closingMenuItemIndex: null
                })
            }
        }
    },
    _ = g.create(z),
    Z = e => {
        const {
            id: t,
            className: n,
            storeId: i
        } = e, [a, s] = d.useState(!1), {
            store: o,
            setActiveMenuItemIndex: l,
            finishClosing: u
        } = j(i), {
            activeMenuItemIndex: c,
            direction: m
        } = w(o), p = d.useMemo(() => null != c, [c]);
        return d.useEffect(() => {
            s(!0)
        }, []), d.useEffect(() => {
            const e = () => {
                l(null)
            };
            return document.addEventListener("astro:before-preparation", e), window.addEventListener("pageshow", e), () => {
                document.removeEventListener("astro:before-preparation", e), window.removeEventListener("pageshow", e)
            }
        }, [l]), a ? C.createPortal(r.jsx("div", {
            className: "relative z-20",
            children: r.jsxs(S, {
                children: [r.jsx(g.div, {
                    className: M(n, "z-3"),
                    initial: {
                        y: "-100%",
                        opacity: 0
                    },
                    animate: p ? {
                        y: 0,
                        opacity: 1
                    } : {
                        y: "-100%",
                        opacity: 0
                    },
                    transition: p ? {
                        y: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: .8
                        },
                        opacity: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }
                    } : {
                        y: {
                            type: "spring",
                            stiffness: 200,
                            damping: 26,
                            mass: 1
                        },
                        opacity: {
                            type: "spring",
                            stiffness: 200,
                            damping: 26
                        }
                    },
                    onAnimationComplete: () => {
                        p || u()
                    },
                    children: r.jsx(O, {
                        mood: "light",
                        paddingTop: "none",
                        paddingBottom: "none",
                        component: _,
                        transition: {
                            type: "spring",
                            duration: 0 === m ? 0 : .35,
                            bounce: 0,
                            delay: p ? 0 : .3
                        },
                        onMouseLeave: e => {
                            const {
                                currentTarget: t,
                                relatedTarget: n
                            } = e;
                            n instanceof HTMLElement && (t.contains(n) || "true" === n.dataset.hasSubmenu) || l(null)
                        },
                        children: e => r.jsx("div", {
                            ref: e,
                            id: t
                        })
                    }, t)
                }), p ? r.jsx(g.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .2,
                        ease: "easeOut"
                    },
                    className: "bg-black-100/10 pointer-events-none fixed inset-0 z-1 h-screen w-full backdrop-blur"
                }) : null]
            })
        }), document.body) : null
    },
    $ = g.create(P),
    ee = e => {
        const {
            index: t,
            storeId: n,
            className: i,
            hasSubmenu: a,
            dropdownId: s,
            withActiveIndicator: o,
            submenuCaretClassName: l,
            children: u
        } = e, {
            isDesktop: c
        } = H(), {
            store: m,
            setActiveMenuItemIndex: p
        } = j(n), {
            activeMenuItemIndex: f
        } = w(m), v = d.useMemo(() => f === t, [f]), x = d.useCallback(() => {
            a && !c && p(v ? null : t)
        }, [a, v, c]), y = d.useCallback(() => {
            a && c && p(t)
        }, [a, c, t, p]), I = d.useCallback(e => {
            const t = document.getElementById(s);
            if (a && c) {
                const {
                    relatedTarget: n
                } = e;
                if (n instanceof HTMLElement && (n.closest("[data-has-submenu]") || t ? .contains(n))) return;
                p(null)
            }
        }, [a, c, p]);
        return r.jsx(g.span, {
            initial: "initial",
            "data-has-submenu": a,
            tabIndex: t,
            whileHover: "active",
            animate: v ? "active" : "initial",
            className: M("relative flex cursor-pointer flex-row items-center justify-between", i),
            onClick: x,
            onMouseEnter: y,
            onMouseLeave: I,
            children: r.jsxs("span", {
                className: "relative flex w-full flex-row items-center justify-between gap-2",
                children: [o ? r.jsx(g.span, {
                    variants: {
                        initial: {
                            opacity: 0,
                            x: 0
                        },
                        active: {
                            opacity: 1,
                            x: "-11px"
                        }
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    },
                    className: "bg-foreground absolute top-1/2 left-0 size-1 -translate-y-1/2 rounded-full"
                }) : null, r.jsx("span", {
                    children: u
                }), a ? r.jsx($, {
                    size: 12,
                    weight: "bold",
                    variants: {
                        initial: {
                            rotate: 0
                        },
                        active: {
                            rotate: 180
                        }
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    },
                    className: M(l)
                }) : null]
            })
        })
    },
    G = {
        initial: e => ({
            x: 0 === e ? 0 : e > 0 ? "12%" : "-12%",
            opacity: 0,
            filter: "blur(4px)",
            pointerEvents: "none"
        }),
        animate: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            pointerEvents: "auto"
        },
        exit: e => ({
            x: 0 === e ? 0 : e > 0 ? "-12%" : "12%",
            opacity: 0,
            filter: "blur(4px)",
            pointerEvents: "none"
        })
    },
    te = e => {
        const {
            index: t,
            dropdownId: n,
            storeId: i,
            renderInDropdown: a,
            children: s
        } = e, [o, l] = d.useState(!1), {
            store: u
        } = j(i), {
            activeMenuItemIndex: c,
            closingMenuItemIndex: m,
            direction: p
        } = w(u), f = t === c || t === m, v = t === c;
        if (d.useEffect(() => {
                l(!0)
            }, []), a) {
            if (o) {
                const e = document.getElementById(n);
                return e ? C.createPortal(r.jsx(S, {
                    mode: "popLayout",
                    custom: p,
                    children: f ? r.jsx(g.div, {
                        custom: p,
                        exit: "exit",
                        initial: "initial",
                        animate: "animate",
                        variants: G,
                        className: "py-12",
                        transition: {
                            x: {
                                type: "spring",
                                stiffness: 300,
                                damping: 28,
                                mass: .8
                            },
                            opacity: {
                                duration: .15,
                                ease: "easeOut"
                            },
                            filter: {
                                duration: .2,
                                ease: "easeOut"
                            }
                        },
                        children: s
                    }, `submenu-${t}`) : null
                }), e) : null
            }
            return null
        }
        return r.jsx(g.div, {
            initial: {
                height: 0,
                opacity: 0,
                pointerEvents: "none"
            },
            animate: v ? {
                height: "auto",
                opacity: 1,
                pointerEvents: "auto"
            } : "initial",
            className: M(a && "hidden", "lg:pointer-events-auto! lg:h-auto! lg:opacity-100!"),
            children: s
        })
    };
export {
    Z as NavigationMenuDropdown, ee as NavigationMenuItemWrapper, te as NavigationMenuSubmenuWrapper
};