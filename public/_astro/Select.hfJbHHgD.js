import {
    j as p
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as o,
    R as oe,
    a as vt
} from "./index.CtKCFvq0.js";
import {
    e as Xe,
    a2 as fn,
    a3 as Q,
    a4 as ht,
    a5 as pn,
    c as Se,
    t as vn
} from "./index.BwDjtkKo.js";
import {
    c as hn,
    u as k
} from "./index.qiExTYtY.js";
import {
    u as mn,
    o as gn,
    s as Sn,
    f as yn,
    a as wn,
    b as xn,
    h as Cn,
    c as bn,
    l as En
} from "./floating-ui.react-dom.BuP5UQGh.js";
import {
    C as Pn
} from "./CaretDown.esm.BuQtJiMo.js";

function et(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}

function _(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
    }
}

function Ge(e, t = []) {
    let n = [];
    const r = () => {
        const t = n.map(e => o.createContext(e));
        return function(n) {
            const r = n ? .[e] || t;
            return o.useMemo(() => ({
                [`__scope${e}`]: { ...n,
                    [e]: r
                }
            }), [n, r])
        }
    };
    return r.scopeName = e, [function(t, r) {
        const a = o.createContext(r),
            i = n.length;
        n = [...n, r];
        const s = t => {
            const {
                scope: n,
                children: r,
                ...s
            } = t, c = n ? .[e] ? .[i] || a, l = o.useMemo(() => s, Object.values(s));
            return p.jsx(c.Provider, {
                value: l,
                children: r
            })
        };
        return s.displayName = t + "Provider", [s, function(n, s) {
            const c = s ? .[e] ? .[i] || a,
                l = o.useContext(c);
            if (l) return l;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
        }]
    }, Rn(r, ...t)]
}

function Rn(...e) {
    const t = e[0];
    if (1 === e.length) return t;
    const n = () => {
        const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return function(e) {
            const r = n.reduce((t, {
                useScope: n,
                scopeName: r
            }) => ({ ...t,
                ...n(e)[`__scope${r}`]
            }), {});
            return o.useMemo(() => ({
                [`__scope${t.scopeName}`]: r
            }), [r])
        }
    };
    return n.scopeName = t.scopeName, n
}

function Pe(e) {
    const t = Tn(e),
        n = o.forwardRef((e, n) => {
            const {
                children: r,
                ...a
            } = e, i = o.Children.toArray(r), s = i.find(Nn);
            if (s) {
                const e = s.props.children,
                    r = i.map(t => t === s ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
                return p.jsx(t, { ...a,
                    ref: n,
                    children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
                })
            }
            return p.jsx(t, { ...a,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function Tn(e) {
    const t = o.forwardRef((e, t) => {
        const {
            children: n,
            ...r
        } = e;
        if (o.isValidElement(n)) {
            const e = On(n),
                a = An(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? hn(t, e) : e), o.cloneElement(n, a)
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var In = Symbol("radix.slottable");

function Nn(e) {
    return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === In
}

function An(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? o && a ? n[r] = (...e) => {
            const t = a(...e);
            return o(...e), t
        } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
            ...a
        } : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function On(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Mn(e) {
    const t = e + "CollectionProvider",
        [n, r] = Ge(t),
        [o, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = e => {
            const {
                scope: t,
                children: n
            } = e, r = oe.useRef(null), a = oe.useRef(new Map).current;
            return p.jsx(o, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n
            })
        };
    i.displayName = t;
    const s = e + "CollectionSlot",
        c = Pe(s),
        l = oe.forwardRef((e, t) => {
            const {
                scope: n,
                children: r
            } = e, o = a(s, n), i = k(t, o.collectionRef);
            return p.jsx(c, {
                ref: i,
                children: r
            })
        });
    l.displayName = s;
    const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = Pe(u),
        h = oe.forwardRef((e, t) => {
            const {
                scope: n,
                children: r,
                ...o
            } = e, i = oe.useRef(null), s = k(t, i), c = a(u, n);
            return oe.useEffect(() => (c.itemMap.set(i, {
                ref: i,
                ...o
            }), () => {
                c.itemMap.delete(i)
            })), p.jsx(f, {
                [d]: "",
                ref: s,
                children: r
            })
        });
    return h.displayName = u, [{
        Provider: i,
        Slot: l,
        ItemSlot: h
    }, function(t) {
        const n = a(e + "CollectionConsumer", t);
        return oe.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${d}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
        }, [n.collectionRef, n.itemMap])
    }, r]
}
var _n = o.createContext(void 0);

function Dn(e) {
    const t = o.useContext(_n);
    return e || t || "ltr"
}
var Ln = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    O = Ln.reduce((e, t) => {
        const n = Pe(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                const {
                    asChild: o,
                    ...a
                } = e, i = o ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), p.jsx(i, { ...a,
                    ref: r
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function kn(e, t) {
    e && Xe.flushSync(() => e.dispatchEvent(t))
}

function ae(e) {
    const t = o.useRef(e);
    return o.useEffect(() => {
        t.current = e
    }), o.useMemo(() => (...e) => t.current ? .(...e), [])
}

function jn(e, t = globalThis ? .document) {
    const n = ae(e);
    o.useEffect(() => {
        const e = e => {
            "Escape" === e.key && n(e)
        };
        return t.addEventListener("keydown", e, {
            capture: !0
        }), () => t.removeEventListener("keydown", e, {
            capture: !0
        })
    }, [n, t])
}
var tt, Bn = "DismissableLayer",
    He = "dismissableLayer.update",
    Fn = "dismissableLayer.pointerDownOutside",
    Wn = "dismissableLayer.focusOutside",
    mt = o.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    gt = o.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: a,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: c,
            ...l
        } = e, u = o.useContext(mt), [d, f] = o.useState(null), h = d ? .ownerDocument ? ? globalThis ? .document, [, m] = o.useState({}), v = k(t, e => f(e)), g = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(w), b = d ? g.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= y, E = Un(e => {
            const t = e.target,
                n = [...u.branches].some(e => e.contains(t));
            !S || n || (a ? .(e), s ? .(e), e.defaultPrevented || c ? .())
        }, h), C = $n(e => {
            const t = e.target;
            [...u.branches].some(e => e.contains(t)) || (i ? .(e), s ? .(e), e.defaultPrevented || c ? .())
        }, h);
        return jn(e => {
            b === u.layers.size - 1 && (r ? .(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
        }, h), o.useEffect(() => {
            if (d) return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (tt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), nt(), () => {
                n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = tt)
            }
        }, [d, h, n, u]), o.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), nt())
        }, [d, u]), o.useEffect(() => {
            const e = () => m({});
            return document.addEventListener(He, e), () => document.removeEventListener(He, e)
        }, []), p.jsx(O.div, { ...l,
            ref: v,
            style: {
                pointerEvents: x ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: _(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: _(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: _(e.onPointerDownCapture, E.onPointerDownCapture)
        })
    });
gt.displayName = Bn;
var Hn = "DismissableLayerBranch",
    Vn = o.forwardRef((e, t) => {
        const n = o.useContext(mt),
            r = o.useRef(null),
            a = k(t, r);
        return o.useEffect(() => {
            const e = r.current;
            if (e) return n.branches.add(e), () => {
                n.branches.delete(e)
            }
        }, [n.branches]), p.jsx(O.div, { ...e,
            ref: a
        })
    });

function Un(e, t = globalThis ? .document) {
    const n = ae(e),
        r = o.useRef(!1),
        a = o.useRef(() => {});
    return o.useEffect(() => {
        const e = e => {
                if (e.target && !r.current) {
                    let r = function() {
                        St(Fn, n, o, {
                            discrete: !0
                        })
                    };
                    const o = {
                        originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", a.current), a.current = r, t.addEventListener("click", a.current, {
                        once: !0
                    })) : r()
                } else t.removeEventListener("click", a.current);
                r.current = !1
            },
            o = window.setTimeout(() => {
                t.addEventListener("pointerdown", e)
            }, 0);
        return () => {
            window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function $n(e, t = globalThis ? .document) {
    const n = ae(e),
        r = o.useRef(!1);
    return o.useEffect(() => {
        const e = e => {
            e.target && !r.current && St(Wn, n, {
                originalEvent: e
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function nt() {
    const e = new CustomEvent(He);
    document.dispatchEvent(e)
}

function St(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? kn(o, a) : o.dispatchEvent(a)
}
Vn.displayName = Hn;
var De = 0;

function zn() {
    o.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? rt()), document.body.insertAdjacentElement("beforeend", e[1] ? ? rt()), De++, () => {
            1 === De && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), De--
        }
    }, [])
}

function rt() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Le = "focusScope.autoFocusOnMount",
    ke = "focusScope.autoFocusOnUnmount",
    ot = {
        bubbles: !1,
        cancelable: !0
    },
    Kn = "FocusScope",
    yt = o.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: a,
            onUnmountAutoFocus: i,
            ...s
        } = e, [c, l] = o.useState(null), u = ae(a), d = ae(i), f = o.useRef(null), h = k(t, e => l(e)), m = o.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        o.useEffect(() => {
            if (r) {
                let e = function(e) {
                        if (m.paused || !c) return;
                        const t = e.target;
                        c.contains(t) ? f.current = t : q(f.current, {
                            select: !0
                        })
                    },
                    t = function(e) {
                        if (m.paused || !c) return;
                        const t = e.relatedTarget;
                        null !== t && (c.contains(t) || q(f.current, {
                            select: !0
                        }))
                    },
                    n = function(e) {
                        if (document.activeElement === document.body)
                            for (const t of e) t.removedNodes.length > 0 && q(c)
                    };
                document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                const r = new MutationObserver(n);
                return c && r.observe(c, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                }
            }
        }, [r, c, m.paused]), o.useEffect(() => {
            if (c) {
                st.add(m);
                const e = document.activeElement;
                if (!c.contains(e)) {
                    const t = new CustomEvent(Le, ot);
                    c.addEventListener(Le, u), c.dispatchEvent(t), t.defaultPrevented || (Yn(Qn(wt(c)), {
                        select: !0
                    }), document.activeElement === e && q(c))
                }
                return () => {
                    c.removeEventListener(Le, u), setTimeout(() => {
                        const t = new CustomEvent(ke, ot);
                        c.addEventListener(ke, d), c.dispatchEvent(t), t.defaultPrevented || q(e ? ? document.body, {
                            select: !0
                        }), c.removeEventListener(ke, d), st.remove(m)
                    }, 0)
                }
            }
        }, [c, u, d, m]);
        const v = o.useCallback(e => {
            if (!n && !r || m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
            if (t && o) {
                const t = e.currentTarget,
                    [r, a] = Xn(t);
                r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && q(a, {
                    select: !0
                })) : (e.preventDefault(), n && q(r, {
                    select: !0
                })) : o === t && e.preventDefault()
            }
        }, [n, r, m.paused]);
        return p.jsx(O.div, {
            tabIndex: -1,
            ...s,
            ref: h,
            onKeyDown: v
        })
    });

function Yn(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (q(r, {
                select: t
            }), document.activeElement !== n) return
}

function Xn(e) {
    const t = wt(e);
    return [at(t, e), at(t.reverse(), e)]
}

function wt(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                const t = "INPUT" === e.tagName && "hidden" === e.type;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function at(e, t) {
    for (const n of e)
        if (!Gn(n, {
                upTo: t
            })) return n
}

function Gn(e, {
    upTo: t
}) {
    if ("hidden" === getComputedStyle(e).visibility) return !0;
    for (; e;) {
        if (void 0 !== t && e === t) return !1;
        if ("none" === getComputedStyle(e).display) return !0;
        e = e.parentElement
    }
    return !1
}

function Zn(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function q(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && Zn(e) && t && e.select()
    }
}
yt.displayName = Kn;
var st = qn();

function qn() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && n ? .pause(), e = it(e, t), e.unshift(t)
        },
        remove(t) {
            e = it(e, t), e[0] ? .resume()
        }
    }
}

function it(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return -1 !== r && n.splice(r, 1), n
}

function Qn(e) {
    return e.filter(e => "A" !== e.tagName)
}
var U = globalThis ? .document ? o.useLayoutEffect : () => {},
    Jn = vt[" useId ".trim().toString()] || (() => {}),
    er = 0;

function Ze(e) {
    const [t, n] = o.useState(Jn());
    return U(() => {
        n(e => e ? ? String(er++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
var tr = "Arrow",
    xt = o.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...a
        } = e;
        return p.jsx(O.svg, { ...a,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : p.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
xt.displayName = tr;
var nr = xt;

function rr(e) {
    const [t, n] = o.useState(void 0);
    return U(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
                if (!Array.isArray(t) || !t.length) return;
                const r = t[0];
                let o, a;
                if ("borderBoxSize" in r) {
                    const e = r.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                    o = t.inlineSize, a = t.blockSize
                } else o = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            });
            return t.observe(e, {
                box: "border-box"
            }), () => t.unobserve(e)
        }
        n(void 0)
    }, [e]), t
}
var qe = "Popper",
    [Ct, bt] = Ge(qe),
    [or, Et] = Ct(qe),
    Pt = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, a] = o.useState(null);
        return p.jsx(or, {
            scope: t,
            anchor: r,
            onAnchorChange: a,
            children: n
        })
    };
Pt.displayName = qe;
var Rt = "PopperAnchor",
    Tt = o.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...a
        } = e, i = Et(Rt, n), s = o.useRef(null), c = k(t, s), l = o.useRef(null);
        return o.useEffect(() => {
            const e = l.current;
            l.current = r ? .current || s.current, e !== l.current && i.onAnchorChange(l.current)
        }), r ? null : p.jsx(O.div, { ...a,
            ref: c
        })
    });
Tt.displayName = Rt;
var Qe = "PopperContent",
    [ar, sr] = Ct(Qe),
    It = o.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: a = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: c = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: v,
            ...g
        } = e, w = Et(Qe, n), [y, b] = o.useState(null), x = k(t, e => b(e)), [S, E] = o.useState(null), C = rr(S), R = C ? .width ? ? 0, P = C ? .height ? ? 0, N = r + ("center" !== i ? "-" + i : ""), j = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, _ = Array.isArray(u) ? u : [u], T = _.length > 0, A = {
            padding: j,
            boundary: _.filter(cr),
            altBoundary: T
        }, {
            refs: D,
            floatingStyles: L,
            placement: I,
            isPositioned: M,
            middlewareData: W
        } = mn({
            strategy: "fixed",
            placement: N,
            whileElementsMounted: (...e) => bn(...e, {
                animationFrame: "always" === m
            }),
            elements: {
                reference: w.anchor
            },
            middleware: [gn({
                mainAxis: a + P,
                alignmentAxis: s
            }), l && Sn({
                mainAxis: !0,
                crossAxis: !1,
                limiter: "partial" === f ? En() : void 0,
                ...A
            }), l && yn({ ...A
            }), wn({ ...A,
                apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                }) => {
                    const {
                        width: o,
                        height: a
                    } = t.reference, i = e.floating.style;
                    i.setProperty("--radix-popper-available-width", `${n}px`), i.setProperty("--radix-popper-available-height", `${r}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${a}px`)
                }
            }), S && xn({
                element: S,
                padding: c
            }), lr({
                arrowWidth: R,
                arrowHeight: P
            }), h && Cn({
                strategy: "referenceHidden",
                ...A
            })]
        }), [B, F] = Ot(I), H = ae(v);
        U(() => {
            M && H ? .()
        }, [M, H]);
        const V = W.arrow ? .x,
            K = W.arrow ? .y,
            $ = 0 !== W.arrow ? .centerOffset,
            [z, q] = o.useState();
        return U(() => {
            y && q(window.getComputedStyle(y).zIndex)
        }, [y]), p.jsx("div", {
            ref: D.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...L,
                transform: M ? L.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: z,
                "--radix-popper-transform-origin": [W.transformOrigin ? .x, W.transformOrigin ? .y].join(" "),
                ...W.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: p.jsx(ar, {
                scope: n,
                placedSide: B,
                onArrowChange: E,
                arrowX: V,
                arrowY: K,
                shouldHideArrow: $,
                children: p.jsx(O.div, {
                    "data-side": B,
                    "data-align": F,
                    ...g,
                    ref: x,
                    style: { ...g.style,
                        animation: M ? void 0 : "none"
                    }
                })
            })
        })
    });
It.displayName = Qe;
var Nt = "PopperArrow",
    ir = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    At = o.forwardRef(function(e, t) {
        const {
            __scopePopper: n,
            ...r
        } = e, o = sr(Nt, n), a = ir[o.placedSide];
        return p.jsx("span", {
            ref: o.onArrowChange,
            style: {
                position: "absolute",
                left: o.arrowX,
                top: o.arrowY,
                [a]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[o.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[o.placedSide],
                visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: p.jsx(nr, { ...r,
                ref: t,
                style: { ...r.style,
                    display: "block"
                }
            })
        })
    });

function cr(e) {
    return null !== e
}
At.displayName = Nt;
var lr = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, a = 0 !== o.arrow ? .centerOffset, i = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Ot(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[l], d = (o.arrow ? .x ? ? 0) + i / 2, f = (o.arrow ? .y ? ? 0) + s / 2;
        let p = "",
            h = "";
        return "bottom" === c ? (p = a ? u : `${d}px`, h = -s + "px") : "top" === c ? (p = a ? u : `${d}px`, h = `${r.floating.height+s}px`) : "right" === c ? (p = -s + "px", h = a ? u : `${f}px`) : "left" === c && (p = `${r.floating.width+s}px`, h = a ? u : `${f}px`), {
            data: {
                x: p,
                y: h
            }
        }
    }
});

function Ot(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var ur = Pt,
    dr = Tt,
    fr = It,
    pr = At,
    vr = "Portal",
    Mt = o.forwardRef((e, t) => {
        const {
            container: n,
            ...r
        } = e, [a, i] = o.useState(!1);
        U(() => i(!0), []);
        const s = n || a && globalThis ? .document ? .body;
        return s ? fn.createPortal(p.jsx(O.div, { ...r,
            ref: t
        }), s) : null
    });
Mt.displayName = vr;
var hr = vt[" useInsertionEffect ".trim().toString()] || U;

function ct({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [a, i, s] = mr({
        defaultProp: t,
        onChange: n
    }), c = void 0 !== e, l = c ? e : a; {
        const t = o.useRef(void 0 !== e);
        o.useEffect(() => {
            const e = t.current;
            e !== c && console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = c
        }, [c, r])
    }
    return [l, o.useCallback(t => {
        if (c) {
            const n = gr(t) ? t(e) : t;
            n !== e && s.current ? .(n)
        } else i(t)
    }, [c, e, i, s])]
}

function mr({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = o.useState(e), a = o.useRef(n), i = o.useRef(t);
    return hr(() => {
        i.current = t
    }, [t]), o.useEffect(() => {
        a.current !== n && (i.current ? .(n), a.current = n)
    }, [n, a]), [n, r, i]
}

function gr(e) {
    return "function" == typeof e
}

function Sr(e) {
    const t = o.useRef({
        value: e,
        previous: e
    });
    return o.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var _t = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    yr = "VisuallyHidden",
    wr = o.forwardRef((e, t) => p.jsx(O.span, { ...e,
        ref: t,
        style: { ..._t,
            ...e.style
        }
    }));
wr.displayName = yr;
var xr = function(e) {
        return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
    },
    le = new WeakMap,
    ye = new WeakMap,
    we = {},
    je = 0,
    Dt = function(e) {
        return e && (e.host || Dt(e.parentNode))
    },
    Cr = function(e, t) {
        return t.map(function(t) {
            if (e.contains(t)) return t;
            var n = Dt(t);
            return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(e) {
            return !!e
        })
    },
    br = function(e, t, n, r) {
        var o = Cr(t, Array.isArray(e) ? e : [e]);
        we[n] || (we[n] = new WeakMap);
        var a = we[n],
            i = [],
            s = new Set,
            c = new Set(o),
            l = function(e) {
                !e || s.has(e) || (s.add(e), l(e.parentNode))
            };
        o.forEach(l);
        var u = function(e) {
            !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                if (s.has(e)) u(e);
                else try {
                    var t = e.getAttribute(r),
                        o = null !== t && "false" !== t,
                        c = (le.get(e) || 0) + 1,
                        l = (a.get(e) || 0) + 1;
                    le.set(e, c), a.set(e, l), i.push(e), 1 === c && o && ye.set(e, !0), 1 === l && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t)
                }
            })
        };
        return u(t), s.clear(), je++,
            function() {
                i.forEach(function(e) {
                    var t = le.get(e) - 1,
                        o = a.get(e) - 1;
                    le.set(e, t), a.set(e, o), t || (ye.has(e) || e.removeAttribute(r), ye.delete(e)), o || e.removeAttribute(n)
                }), --je || (le = new WeakMap, le = new WeakMap, ye = new WeakMap, we = {})
            }
    },
    Er = function(e, t, n) {
        void 0 === n && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = xr(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), br(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    be = "right-scroll-bar-position",
    Ee = "width-before-scroll-bar",
    Pr = "with-scroll-bars-hidden",
    Rr = "--removed-body-scroll-bar-size";

function Be(e, t) {
    return "function" == typeof e ? e(t) : e && (e.current = t), e
}

function Tr(e, t) {
    var n = o.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(e) {
                    var t = n.value;
                    t !== e && (n.value = e, n.callback(e, t))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var Ir = typeof window < "u" ? o.useLayoutEffect : o.useEffect,
    lt = new WeakMap;

function Nr(e, t) {
    var n = Tr(null, function(t) {
        return e.forEach(function(e) {
            return Be(e, t)
        })
    });
    return Ir(function() {
        var t = lt.get(n);
        if (t) {
            var r = new Set(t),
                o = new Set(e),
                a = n.current;
            r.forEach(function(e) {
                o.has(e) || Be(e, null)
            }), o.forEach(function(e) {
                r.has(e) || Be(e, a)
            })
        }
        lt.set(n, e)
    }, [e]), n
}

function Ar(e) {
    return e
}

function Or(e, t) {
    void 0 === t && (t = Ar);
    var n = [],
        r = !1;
    return {
        read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(e) {
            var o = t(e, r);
            return n.push(o),
                function() {
                    n = n.filter(function(e) {
                        return e !== o
                    })
                }
        },
        assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
                var t = n;
                n = [], t.forEach(e)
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
            r = !0;
            var t = [];
            if (n.length) {
                var o = n;
                n = [], o.forEach(e), t = n
            }
            var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                },
                i = function() {
                    return Promise.resolve().then(a)
                };
            i(), n = {
                push: function(e) {
                    t.push(e), i()
                },
                filter: function(e) {
                    return t = t.filter(e), n
                }
            }
        }
    }
}

function Mr(e) {
    void 0 === e && (e = {});
    var t = Or(null);
    return t.options = Q({
        async: !0,
        ssr: !1
    }, e), t
}
var Lt = function(e) {
    var t = e.sideCar,
        n = ht(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return o.createElement(r, Q({}, n))
};

function _r(e, t) {
    return e.useMedium(t), Lt
}
Lt.isSideCarExport = !0;
var kt = Mr(),
    Fe = function() {},
    Te = o.forwardRef(function(e, t) {
        var n = o.useRef(null),
            r = o.useState({
                onScrollCapture: Fe,
                onWheelCapture: Fe,
                onTouchMoveCapture: Fe
            }),
            a = r[0],
            i = r[1],
            s = e.forwardProps,
            c = e.children,
            l = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            h = e.noRelative,
            m = e.noIsolation,
            v = e.inert,
            g = e.allowPinchZoom,
            w = e.as,
            y = void 0 === w ? "div" : w,
            b = e.gapMode,
            x = ht(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            S = p,
            E = Nr([n, t]),
            C = Q(Q({}, x), a);
        return o.createElement(o.Fragment, null, d && o.createElement(S, {
            sideCar: kt,
            removeScrollBar: u,
            shards: f,
            noRelative: h,
            noIsolation: m,
            inert: v,
            setCallbacks: i,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: b
        }), s ? o.cloneElement(o.Children.only(c), Q(Q({}, C), {
            ref: E
        })) : o.createElement(y, Q({}, C, {
            className: l,
            ref: E
        }), c))
    });
Te.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
}, Te.classNames = {
    fullWidth: Ee,
    zeroRight: be
};
var Dr = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Lr() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Dr();
    return t && e.setAttribute("nonce", t), e
}

function kr(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function jr(e) {
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}
var Br = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                0 == e && (t = Lr()) && (kr(t, n), jr(t)), e++
            },
            remove: function() {
                !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Fr = function() {
        var e = Br();
        return function(t, n) {
            o.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    jt = function() {
        var e = Fr();
        return function(t) {
            var n = t.styles,
                r = t.dynamic;
            return e(n, r), null
        }
    },
    Wr = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    We = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Hr = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
        return [We(n), We(r), We(o)]
    },
    Vr = function(e) {
        if (void 0 === e && (e = "margin"), typeof window > "u") return Wr;
        var t = Hr(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    Ur = jt(),
    fe = "data-scroll-locked",
    $r = function(e, t, n, r) {
        var o = e.left,
            a = e.top,
            i = e.right,
            s = e.gap;
        return void 0 === n && (n = "margin"), "\n  .".concat(Pr, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(fe, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(be, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Ee, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(be, " .").concat(be, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Ee, " .").concat(Ee, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(fe, "] {\n    ").concat(Rr, ": ").concat(s, "px;\n  }\n")
    },
    ut = function() {
        var e = parseInt(document.body.getAttribute(fe) || "0", 10);
        return isFinite(e) ? e : 0
    },
    zr = function() {
        o.useEffect(function() {
            return document.body.setAttribute(fe, (ut() + 1).toString()),
                function() {
                    var e = ut() - 1;
                    e <= 0 ? document.body.removeAttribute(fe) : document.body.setAttribute(fe, e.toString())
                }
        }, [])
    },
    Kr = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
        zr();
        var i = o.useMemo(function() {
            return Vr(a)
        }, [a]);
        return o.createElement(Ur, {
            styles: $r(i, !t, a, n ? "" : "!important")
        })
    },
    Ve = !1;
if (typeof window < "u") try {
    var xe = Object.defineProperty({}, "passive", {
        get: function() {
            return Ve = !0, !0
        }
    });
    window.addEventListener("test", xe, xe), window.removeEventListener("test", xe, xe)
} catch {
    Ve = !1
}
var ue = !!Ve && {
        passive: !1
    },
    Yr = function(e) {
        return "TEXTAREA" === e.tagName
    },
    Bt = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return "hidden" !== n[t] && !(n.overflowY === n.overflowX && !Yr(e) && "visible" === n[t])
    },
    Xr = function(e) {
        return Bt(e, "overflowY")
    },
    Gr = function(e) {
        return Bt(e, "overflowX")
    },
    dt = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Ft(e, r)) {
                var o = Wt(e, r);
                if (o[1] > o[2]) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    Zr = function(e) {
        return [e.scrollTop, e.scrollHeight, e.clientHeight]
    },
    qr = function(e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
    },
    Ft = function(e, t) {
        return "v" === e ? Xr(t) : Gr(t)
    },
    Wt = function(e, t) {
        return "v" === e ? Zr(t) : qr(t)
    },
    Qr = function(e, t) {
        return "h" === e && "rtl" === t ? -1 : 1
    },
    Jr = function(e, t, n, r, o) {
        var a = Qr(e, window.getComputedStyle(t).direction),
            i = a * r,
            s = n.target,
            c = t.contains(s),
            l = !1,
            u = i > 0,
            d = 0,
            f = 0;
        do {
            if (!s) break;
            var p = Wt(e, s),
                h = p[0],
                m = p[1] - p[2] - a * h;
            (h || m) && Ft(e, s) && (d += m, f += h);
            var v = s.parentNode;
            s = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v
        } while (!c && s !== document.body || c && (t.contains(s) || t === s));
        return (u && Math.abs(d) < 1 || !u && Math.abs(f) < 1) && (l = !0), l
    },
    Ce = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    ft = function(e) {
        return [e.deltaX, e.deltaY]
    },
    pt = function(e) {
        return e && "current" in e ? e.current : e
    },
    eo = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    to = function(e) {
        return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
    },
    no = 0,
    de = [];

function ro(e) {
    var t = o.useRef([]),
        n = o.useRef([0, 0]),
        r = o.useRef(),
        a = o.useState(no++)[0],
        i = o.useState(jt)[0],
        s = o.useRef(e);
    o.useEffect(function() {
        s.current = e
    }, [e]), o.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var t = pn([e.lockRef.current], (e.shards || []).map(pt), !0).filter(Boolean);
            return t.forEach(function(e) {
                    return e.classList.add("allow-interactivity-".concat(a))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(a)), t.forEach(function(e) {
                        return e.classList.remove("allow-interactivity-".concat(a))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = o.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
            var o, a = Ce(e),
                i = n.current,
                c = "deltaX" in e ? e.deltaX : i[0] - a[0],
                l = "deltaY" in e ? e.deltaY : i[1] - a[1],
                u = e.target,
                d = Math.abs(c) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var f = window.getSelection(),
                p = f && f.anchorNode;
            if (!!p && (p === u || p.contains(u))) return !1;
            var h = dt(d, u);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = dt(d, u)), !h) return !1;
            if (!r.current && "changedTouches" in e && (c || l) && (r.current = o), !o) return !0;
            var m = r.current || o;
            return Jr(m, t, e, "h" === m ? c : l)
        }, []),
        l = o.useCallback(function(e) {
            var n = e;
            if (de.length && de[de.length - 1] === i) {
                var r = "deltaY" in n ? ft(n) : Ce(n),
                    o = t.current.filter(function(e) {
                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && eo(e.delta, r)
                    })[0];
                if (o && o.should) return void(n.cancelable && n.preventDefault());
                if (!o) {
                    var a = (s.current.shards || []).map(pt).filter(Boolean).filter(function(e) {
                        return e.contains(n.target)
                    });
                    (a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault()
                }
            }
        }, []),
        u = o.useCallback(function(e, n, r, o) {
            var a = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: oo(r)
            };
            t.current.push(a), setTimeout(function() {
                t.current = t.current.filter(function(e) {
                    return e !== a
                })
            }, 1)
        }, []),
        d = o.useCallback(function(e) {
            n.current = Ce(e), r.current = void 0
        }, []),
        f = o.useCallback(function(t) {
            u(t.type, ft(t), t.target, c(t, e.lockRef.current))
        }, []),
        p = o.useCallback(function(t) {
            u(t.type, Ce(t), t.target, c(t, e.lockRef.current))
        }, []);
    o.useEffect(function() {
        return de.push(i), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p
            }), document.addEventListener("wheel", l, ue), document.addEventListener("touchmove", l, ue), document.addEventListener("touchstart", d, ue),
            function() {
                de = de.filter(function(e) {
                    return e !== i
                }), document.removeEventListener("wheel", l, ue), document.removeEventListener("touchmove", l, ue), document.removeEventListener("touchstart", d, ue)
            }
    }, []);
    var h = e.removeScrollBar,
        m = e.inert;
    return o.createElement(o.Fragment, null, m ? o.createElement(i, {
        styles: to(a)
    }) : null, h ? o.createElement(Kr, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function oo(e) {
    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const ao = _r(kt, ro);
var Ht = o.forwardRef(function(e, t) {
    return o.createElement(Te, Q({}, e, {
        ref: t,
        sideCar: ao
    }))
});
Ht.classNames = Te.classNames;
var so = [" ", "Enter", "ArrowUp", "ArrowDown"],
    io = [" ", "Enter"],
    se = "Select",
    [Ie, Ne, co] = Mn(se),
    [pe] = Ge(se, [co, bt]),
    Ae = bt(),
    [lo, J] = pe(se),
    [uo, fo] = pe(se),
    Vt = e => {
        const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: a,
            onOpenChange: i,
            value: s,
            defaultValue: c,
            onValueChange: l,
            dir: u,
            name: d,
            autoComplete: f,
            disabled: h,
            required: m,
            form: v
        } = e, g = Ae(t), [w, y] = o.useState(null), [b, x] = o.useState(null), [S, E] = o.useState(!1), C = Dn(u), [R, P] = ct({
            prop: r,
            defaultProp: a ? ? !1,
            onChange: i,
            caller: se
        }), [k, N] = ct({
            prop: s,
            defaultProp: c,
            onChange: l,
            caller: se
        }), j = o.useRef(null), _ = !w || (v || !!w.closest("form")), [T, O] = o.useState(new Set), A = Array.from(T).map(e => e.props.value).join(";");
        return p.jsx(ur, { ...g,
            children: p.jsxs(lo, {
                required: m,
                scope: t,
                trigger: w,
                onTriggerChange: y,
                valueNode: b,
                onValueNodeChange: x,
                valueNodeHasChildren: S,
                onValueNodeHasChildrenChange: E,
                contentId: Ze(),
                value: k,
                onValueChange: N,
                open: R,
                onOpenChange: P,
                dir: C,
                triggerPointerDownPosRef: j,
                disabled: h,
                children: [p.jsx(Ie.Provider, {
                    scope: t,
                    children: p.jsx(uo, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: o.useCallback(e => {
                            O(t => new Set(t).add(e))
                        }, []),
                        onNativeOptionRemove: o.useCallback(e => {
                            O(t => {
                                const n = new Set(t);
                                return n.delete(e), n
                            })
                        }, []),
                        children: n
                    })
                }), _ ? p.jsxs(cn, {
                    "aria-hidden": !0,
                    required: m,
                    tabIndex: -1,
                    name: d,
                    autoComplete: f,
                    value: k,
                    onChange: e => N(e.target.value),
                    disabled: h,
                    form: v,
                    children: [void 0 === k ? p.jsx("option", {
                        value: ""
                    }) : null, Array.from(T)]
                }, A) : null]
            })
        })
    };
Vt.displayName = se;
var Ut = "SelectTrigger",
    $t = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            disabled: r = !1,
            ...a
        } = e, i = Ae(n), s = J(Ut, n), c = s.disabled || r, l = k(t, s.onTriggerChange), u = Ne(n), d = o.useRef("touch"), [f, h, m] = un(e => {
            const t = u().filter(e => !e.disabled),
                n = t.find(e => e.value === s.value),
                r = dn(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
        }), v = e => {
            c || (s.onOpenChange(!0), m()), e && (s.triggerPointerDownPosRef.current = {
                x: Math.round(e.pageX),
                y: Math.round(e.pageY)
            })
        };
        return p.jsx(dr, {
            asChild: !0,
            ...i,
            children: p.jsx(O.button, {
                type: "button",
                role: "combobox",
                "aria-controls": s.contentId,
                "aria-expanded": s.open,
                "aria-required": s.required,
                "aria-autocomplete": "none",
                dir: s.dir,
                "data-state": s.open ? "open" : "closed",
                disabled: c,
                "data-disabled": c ? "" : void 0,
                "data-placeholder": ln(s.value) ? "" : void 0,
                ...a,
                ref: l,
                onClick: _(a.onClick, e => {
                    e.currentTarget.focus(), "mouse" !== d.current && v(e)
                }),
                onPointerDown: _(a.onPointerDown, e => {
                    d.current = e.pointerType;
                    const t = e.target;
                    t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
                }),
                onKeyDown: _(a.onKeyDown, e => {
                    const t = "" !== f.current;
                    !(e.ctrlKey || e.altKey || e.metaKey) && 1 === e.key.length && h(e.key), (!t || " " !== e.key) && so.includes(e.key) && (v(), e.preventDefault())
                })
            })
        })
    });
$t.displayName = Ut;
var zt = "SelectValue",
    Kt = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: a,
            placeholder: i = "",
            ...s
        } = e, c = J(zt, n), {
            onValueNodeHasChildrenChange: l
        } = c, u = void 0 !== a, d = k(t, c.onValueNodeChange);
        return U(() => {
            l(u)
        }, [l, u]), p.jsx(O.span, { ...s,
            ref: d,
            style: {
                pointerEvents: "none"
            },
            children: ln(c.value) ? p.jsx(p.Fragment, {
                children: i
            }) : a
        })
    });
Kt.displayName = zt;
var po = "SelectIcon",
    Yt = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            children: r,
            ...o
        } = e;
        return p.jsx(O.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: r || "▼"
        })
    });
Yt.displayName = po;
var vo = "SelectPortal",
    Xt = e => p.jsx(Mt, {
        asChild: !0,
        ...e
    });
Xt.displayName = vo;
var ie = "SelectContent",
    Gt = o.forwardRef((e, t) => {
        const n = J(ie, e.__scopeSelect),
            [r, a] = o.useState();
        if (U(() => {
                a(new DocumentFragment)
            }, []), !n.open) {
            const t = r;
            return t ? Xe.createPortal(p.jsx(Zt, {
                scope: e.__scopeSelect,
                children: p.jsx(Ie.Slot, {
                    scope: e.__scopeSelect,
                    children: p.jsx("div", {
                        children: e.children
                    })
                })
            }), t) : null
        }
        return p.jsx(qt, { ...e,
            ref: t
        })
    });
Gt.displayName = ie;
var G = 10,
    [Zt, ee] = pe(ie),
    ho = "SelectContentImpl",
    mo = Pe("SelectContent.RemoveScroll"),
    qt = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: a,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: c,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: m,
            sticky: v,
            hideWhenDetached: g,
            avoidCollisions: w,
            ...y
        } = e, b = J(ie, n), [x, S] = o.useState(null), [E, C] = o.useState(null), R = k(t, e => S(e)), [P, N] = o.useState(null), [j, T] = o.useState(null), O = Ne(n), [A, D] = o.useState(!1), L = o.useRef(!1);
        o.useEffect(() => {
            if (x) return Er(x)
        }, [x]), zn();
        const I = o.useCallback(e => {
                const [t, ...n] = O().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
                for (const n of e)
                    if (n === o || (n ? .scrollIntoView({
                            block: "nearest"
                        }), n === t && E && (E.scrollTop = 0), n === r && E && (E.scrollTop = E.scrollHeight), n ? .focus(), document.activeElement !== o)) return
            }, [O, E]),
            M = o.useCallback(() => I([P, x]), [I, P, x]);
        o.useEffect(() => {
            A && M()
        }, [A, M]);
        const {
            onOpenChange: W,
            triggerPointerDownPosRef: B
        } = b;
        o.useEffect(() => {
            if (x) {
                let e = {
                    x: 0,
                    y: 0
                };
                const t = t => {
                        e = {
                            x: Math.abs(Math.round(t.pageX) - (B.current ? .x ? ? 0)),
                            y: Math.abs(Math.round(t.pageY) - (B.current ? .y ? ? 0))
                        }
                    },
                    n = n => {
                        e.x <= 10 && e.y <= 10 ? n.preventDefault() : x.contains(n.target) || W(!1), document.removeEventListener("pointermove", t), B.current = null
                    };
                return null !== B.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                        capture: !0
                    })
                }
            }
        }, [x, W, B]), o.useEffect(() => {
            const e = () => W(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
        }, [W]);
        const [F, H] = un(e => {
            const t = O().filter(e => !e.disabled),
                n = t.find(e => e.ref.current === document.activeElement),
                r = dn(t, e, n);
            r && setTimeout(() => r.ref.current.focus())
        }), U = o.useCallback((e, t, n) => {
            const r = !L.current && !n;
            (void 0 !== b.value && b.value === t || r) && (N(e), r && (L.current = !0))
        }, [b.value]), V = o.useCallback(() => x ? .focus(), [x]), K = o.useCallback((e, t, n) => {
            const r = !L.current && !n;
            (void 0 !== b.value && b.value === t || r) && T(e)
        }, [b.value]), $ = "popper" === r ? Ue : Qt, z = $ === Ue ? {
            side: c,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: m,
            sticky: v,
            hideWhenDetached: g,
            avoidCollisions: w
        } : {};
        return p.jsx(Zt, {
            scope: n,
            content: x,
            viewport: E,
            onViewportChange: C,
            itemRefCallback: U,
            selectedItem: P,
            onItemLeave: V,
            itemTextRefCallback: K,
            focusSelectedItem: M,
            selectedItemText: j,
            position: r,
            isPositioned: A,
            searchRef: F,
            children: p.jsx(Ht, {
                as: mo,
                allowPinchZoom: !0,
                children: p.jsx(yt, {
                    asChild: !0,
                    trapped: b.open,
                    onMountAutoFocus: e => {
                        e.preventDefault()
                    },
                    onUnmountAutoFocus: _(a, e => {
                        b.trigger ? .focus({
                            preventScroll: !0
                        }), e.preventDefault()
                    }),
                    children: p.jsx(gt, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: s,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => b.onOpenChange(!1),
                        children: p.jsx($, {
                            role: "listbox",
                            id: b.contentId,
                            "data-state": b.open ? "open" : "closed",
                            dir: b.dir,
                            onContextMenu: e => e.preventDefault(),
                            ...y,
                            ...z,
                            onPlaced: () => D(!0),
                            ref: R,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...y.style
                            },
                            onKeyDown: _(y.onKeyDown, e => {
                                const t = e.ctrlKey || e.altKey || e.metaKey;
                                if ("Tab" === e.key && e.preventDefault(), !t && 1 === e.key.length && H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                    let t = O().filter(e => !e.disabled).map(e => e.ref.current);
                                    if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                        const n = e.target,
                                            r = t.indexOf(n);
                                        t = t.slice(r + 1)
                                    }
                                    setTimeout(() => I(t)), e.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
qt.displayName = ho;
var go = "SelectItemAlignedPosition",
    Qt = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onPlaced: r,
            ...a
        } = e, i = J(ie, n), s = ee(ie, n), [c, l] = o.useState(null), [u, d] = o.useState(null), f = k(t, e => d(e)), h = Ne(n), m = o.useRef(!1), v = o.useRef(!0), {
            viewport: g,
            selectedItem: w,
            selectedItemText: y,
            focusSelectedItem: b
        } = s, x = o.useCallback(() => {
            if (i.trigger && i.valueNode && c && u && g && w && y) {
                const e = i.trigger.getBoundingClientRect(),
                    t = u.getBoundingClientRect(),
                    n = i.valueNode.getBoundingClientRect(),
                    o = y.getBoundingClientRect();
                if ("rtl" !== i.dir) {
                    const r = o.left - t.left,
                        a = n.left - r,
                        i = e.left - a,
                        s = e.width + i,
                        l = Math.max(s, t.width),
                        u = window.innerWidth - G,
                        d = et(a, [G, Math.max(G, u - l)]);
                    c.style.minWidth = s + "px", c.style.left = d + "px"
                } else {
                    const r = t.right - o.right,
                        a = window.innerWidth - n.right - r,
                        i = window.innerWidth - e.right - a,
                        s = e.width + i,
                        l = Math.max(s, t.width),
                        u = window.innerWidth - G,
                        d = et(a, [G, Math.max(G, u - l)]);
                    c.style.minWidth = s + "px", c.style.right = d + "px"
                }
                const a = h(),
                    s = window.innerHeight - 2 * G,
                    l = g.scrollHeight,
                    d = window.getComputedStyle(u),
                    f = parseInt(d.borderTopWidth, 10),
                    p = parseInt(d.paddingTop, 10),
                    v = parseInt(d.borderBottomWidth, 10),
                    b = f + p + l + parseInt(d.paddingBottom, 10) + v,
                    x = Math.min(5 * w.offsetHeight, b),
                    S = window.getComputedStyle(g),
                    E = parseInt(S.paddingTop, 10),
                    C = parseInt(S.paddingBottom, 10),
                    R = e.top + e.height / 2 - G,
                    P = s - R,
                    k = w.offsetHeight / 2,
                    N = f + p + (w.offsetTop + k),
                    j = b - N;
                if (N <= R) {
                    const e = a.length > 0 && w === a[a.length - 1].ref.current;
                    c.style.bottom = "0px";
                    const t = u.clientHeight - g.offsetTop - g.offsetHeight,
                        n = N + Math.max(P, k + (e ? C : 0) + t + v);
                    c.style.height = n + "px"
                } else {
                    const e = a.length > 0 && w === a[0].ref.current;
                    c.style.top = "0px";
                    const t = Math.max(R, f + g.offsetTop + (e ? E : 0) + k) + j;
                    c.style.height = t + "px", g.scrollTop = N - R + g.offsetTop
                }
                c.style.margin = `${G}px 0`, c.style.minHeight = x + "px", c.style.maxHeight = s + "px", r ? .(), requestAnimationFrame(() => m.current = !0)
            }
        }, [h, i.trigger, i.valueNode, c, u, g, w, y, i.dir, r]);
        U(() => x(), [x]);
        const [S, E] = o.useState();
        U(() => {
            u && E(window.getComputedStyle(u).zIndex)
        }, [u]);
        const C = o.useCallback(e => {
            e && !0 === v.current && (x(), b ? .(), v.current = !1)
        }, [x, b]);
        return p.jsx(yo, {
            scope: n,
            contentWrapper: c,
            shouldExpandOnScrollRef: m,
            onScrollButtonChange: C,
            children: p.jsx("div", {
                ref: l,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: S
                },
                children: p.jsx(O.div, { ...a,
                    ref: f,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...a.style
                    }
                })
            })
        })
    });
Qt.displayName = go;
var So = "SelectPopperPosition",
    Ue = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = G,
            ...a
        } = e, i = Ae(n);
        return p.jsx(fr, { ...i,
            ...a,
            ref: t,
            align: r,
            collisionPadding: o,
            style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Ue.displayName = So;
var [yo, Je] = pe(ie, {}), $e = "SelectViewport", Jt = o.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: r,
        ...a
    } = e, i = ee($e, n), s = Je($e, n), c = k(t, i.onViewportChange), l = o.useRef(0);
    return p.jsxs(p.Fragment, {
        children: [p.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), p.jsx(Ie.Slot, {
            scope: n,
            children: p.jsx(O.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...a,
                ref: c,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style
                },
                onScroll: _(a.onScroll, e => {
                    const t = e.currentTarget,
                        {
                            contentWrapper: n,
                            shouldExpandOnScrollRef: r
                        } = s;
                    if (r ? .current && n) {
                        const e = Math.abs(l.current - t.scrollTop);
                        if (e > 0) {
                            const r = window.innerHeight - 2 * G,
                                o = parseFloat(n.style.minHeight),
                                a = parseFloat(n.style.height),
                                i = Math.max(o, a);
                            if (i < r) {
                                const o = i + e,
                                    a = Math.min(r, o),
                                    s = o - a;
                                n.style.height = a + "px", "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = t.scrollTop
                })
            })
        })]
    })
});
Jt.displayName = $e;
var en = "SelectGroup",
    [wo, xo] = pe(en),
    Co = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e, o = Ze();
        return p.jsx(wo, {
            scope: n,
            id: o,
            children: p.jsx(O.div, {
                role: "group",
                "aria-labelledby": o,
                ...r,
                ref: t
            })
        })
    });
Co.displayName = en;
var tn = "SelectLabel",
    bo = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e, o = xo(tn, n);
        return p.jsx(O.div, {
            id: o.id,
            ...r,
            ref: t
        })
    });
bo.displayName = tn;
var Re = "SelectItem",
    [Eo, nn] = pe(Re),
    rn = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            value: r,
            disabled: a = !1,
            textValue: i,
            ...s
        } = e, c = J(Re, n), l = ee(Re, n), u = c.value === r, [d, f] = o.useState(i ? ? ""), [h, m] = o.useState(!1), v = k(t, e => l.itemRefCallback ? .(e, r, a)), g = Ze(), w = o.useRef("touch"), y = () => {
            a || (c.onValueChange(r), c.onOpenChange(!1))
        };
        if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return p.jsx(Eo, {
            scope: n,
            value: r,
            disabled: a,
            textId: g,
            isSelected: u,
            onItemTextChange: o.useCallback(e => {
                f(t => t || (e ? .textContent ? ? "").trim())
            }, []),
            children: p.jsx(Ie.ItemSlot, {
                scope: n,
                value: r,
                disabled: a,
                textValue: d,
                children: p.jsx(O.div, {
                    role: "option",
                    "aria-labelledby": g,
                    "data-highlighted": h ? "" : void 0,
                    "aria-selected": u && h,
                    "data-state": u ? "checked" : "unchecked",
                    "aria-disabled": a || void 0,
                    "data-disabled": a ? "" : void 0,
                    tabIndex: a ? void 0 : -1,
                    ...s,
                    ref: v,
                    onFocus: _(s.onFocus, () => m(!0)),
                    onBlur: _(s.onBlur, () => m(!1)),
                    onClick: _(s.onClick, () => {
                        "mouse" !== w.current && y()
                    }),
                    onPointerUp: _(s.onPointerUp, () => {
                        "mouse" === w.current && y()
                    }),
                    onPointerDown: _(s.onPointerDown, e => {
                        w.current = e.pointerType
                    }),
                    onPointerMove: _(s.onPointerMove, e => {
                        w.current = e.pointerType, a ? l.onItemLeave ? .() : "mouse" === w.current && e.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: _(s.onPointerLeave, e => {
                        e.currentTarget === document.activeElement && l.onItemLeave ? .()
                    }),
                    onKeyDown: _(s.onKeyDown, e => {
                        "" !== l.searchRef ? .current && " " === e.key || (io.includes(e.key) && y(), " " === e.key && e.preventDefault())
                    })
                })
            })
        })
    });
rn.displayName = Re;
var ge = "SelectItemText",
    on = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: r,
            style: a,
            ...i
        } = e, s = J(ge, n), c = ee(ge, n), l = nn(ge, n), u = fo(ge, n), [d, f] = o.useState(null), h = k(t, e => f(e), l.onItemTextChange, e => c.itemTextRefCallback ? .(e, l.value, l.disabled)), m = d ? .textContent, v = o.useMemo(() => p.jsx("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
        }, l.value), [l.disabled, l.value, m]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: w
        } = u;
        return U(() => (g(v), () => w(v)), [g, w, v]), p.jsxs(p.Fragment, {
            children: [p.jsx(O.span, {
                id: l.textId,
                ...i,
                ref: h
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Xe.createPortal(i.children, s.valueNode) : null]
        })
    });
on.displayName = ge;
var an = "SelectItemIndicator",
    Po = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e;
        return nn(an, n).isSelected ? p.jsx(O.span, {
            "aria-hidden": !0,
            ...r,
            ref: t
        }) : null
    });
Po.displayName = an;
var ze = "SelectScrollUpButton",
    Ro = o.forwardRef((e, t) => {
        const n = ee(ze, e.__scopeSelect),
            r = Je(ze, e.__scopeSelect),
            [a, i] = o.useState(!1),
            s = k(t, r.onScrollButtonChange);
        return U(() => {
            if (n.viewport && n.isPositioned) {
                let e = function() {
                    const e = t.scrollTop > 0;
                    i(e)
                };
                const t = n.viewport;
                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
            }
        }, [n.viewport, n.isPositioned]), a ? p.jsx(sn, { ...e,
            ref: s,
            onAutoScroll: () => {
                const {
                    viewport: e,
                    selectedItem: t
                } = n;
                e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
            }
        }) : null
    });
Ro.displayName = ze;
var Ke = "SelectScrollDownButton",
    To = o.forwardRef((e, t) => {
        const n = ee(Ke, e.__scopeSelect),
            r = Je(Ke, e.__scopeSelect),
            [a, i] = o.useState(!1),
            s = k(t, r.onScrollButtonChange);
        return U(() => {
            if (n.viewport && n.isPositioned) {
                let e = function() {
                    const e = t.scrollHeight - t.clientHeight,
                        n = Math.ceil(t.scrollTop) < e;
                    i(n)
                };
                const t = n.viewport;
                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
            }
        }, [n.viewport, n.isPositioned]), a ? p.jsx(sn, { ...e,
            ref: s,
            onAutoScroll: () => {
                const {
                    viewport: e,
                    selectedItem: t
                } = n;
                e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
            }
        }) : null
    });
To.displayName = Ke;
var sn = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onAutoScroll: r,
            ...a
        } = e, i = ee("SelectScrollButton", n), s = o.useRef(null), c = Ne(n), l = o.useCallback(() => {
            null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return o.useEffect(() => () => l(), [l]), U(() => {
            c().find(e => e.ref.current === document.activeElement) ? .ref.current ? .scrollIntoView({
                block: "nearest"
            })
        }, [c]), p.jsx(O.div, {
            "aria-hidden": !0,
            ...a,
            ref: t,
            style: {
                flexShrink: 0,
                ...a.style
            },
            onPointerDown: _(a.onPointerDown, () => {
                null === s.current && (s.current = window.setInterval(r, 50))
            }),
            onPointerMove: _(a.onPointerMove, () => {
                i.onItemLeave ? .(), null === s.current && (s.current = window.setInterval(r, 50))
            }),
            onPointerLeave: _(a.onPointerLeave, () => {
                l()
            })
        })
    }),
    Io = "SelectSeparator",
    No = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e;
        return p.jsx(O.div, {
            "aria-hidden": !0,
            ...r,
            ref: t
        })
    });
No.displayName = Io;
var Ye = "SelectArrow",
    Ao = o.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...r
        } = e, o = Ae(n), a = J(Ye, n), i = ee(Ye, n);
        return a.open && "popper" === i.position ? p.jsx(pr, { ...o,
            ...r,
            ref: t
        }) : null
    });
Ao.displayName = Ye;
var Oo = "SelectBubbleInput",
    cn = o.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
    }, r) => {
        const a = o.useRef(null),
            i = k(r, a),
            s = Sr(t);
        return o.useEffect(() => {
            const e = a.current;
            if (!e) return;
            const n = window.HTMLSelectElement.prototype,
                r = Object.getOwnPropertyDescriptor(n, "value").set;
            if (s !== t && r) {
                const n = new Event("change", {
                    bubbles: !0
                });
                r.call(e, t), e.dispatchEvent(n)
            }
        }, [s, t]), p.jsx(O.select, { ...n,
            style: { ..._t,
                ...n.style
            },
            ref: i,
            defaultValue: t
        })
    });

function ln(e) {
    return "" === e || void 0 === e
}

function un(e) {
    const t = ae(e),
        n = o.useRef(""),
        r = o.useRef(0),
        a = o.useCallback(e => {
            const o = n.current + e;
            t(o),
                function e(t) {
                    n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
                }(o)
        }, [t]),
        i = o.useCallback(() => {
            n.current = "", window.clearTimeout(r.current)
        }, []);
    return o.useEffect(() => () => window.clearTimeout(r.current), []), [n, a, i]
}

function dn(e, t, n) {
    const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
        o = n ? e.indexOf(n) : -1;
    let a = Mo(e, Math.max(o, 0));
    1 === r.length && (a = a.filter(e => e !== n));
    const i = a.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
    return i !== n ? i : void 0
}

function Mo(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
cn.displayName = Oo;
var _o = Vt,
    Do = $t,
    Lo = Kt,
    ko = Yt,
    jo = Xt,
    Bo = Gt,
    Fo = Jt,
    Wo = rn,
    Ho = on;
const Vo = e => {
        const {
            className: t,
            children: n,
            ...r
        } = e;
        return p.jsx(Do, {
            className: Se("disabled:cursor-not-allowed", t),
            ...r,
            children: p.jsxs("span", {
                className: "flex flex-row items-center justify-between gap-1",
                children: [p.jsx("span", {
                    className: "flex-1 text-left [&>span]:line-clamp-1",
                    children: n
                }), p.jsx(ko, {
                    asChild: !0,
                    children: p.jsx(Pn, {
                        className: "h-3 w-3"
                    })
                })]
            })
        })
    },
    Uo = e => {
        const {
            className: t,
            children: n,
            position: r = "popper",
            ...o
        } = e;
        return p.jsx(jo, {
            children: p.jsx(Bo, {
                className: Se("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-52 max-h-96 min-w-32 overflow-hidden", "popper" === r && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t),
                position: r,
                ...o,
                children: p.jsx(Fo, {
                    className: Se("popper" === r && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"),
                    children: n
                })
            })
        })
    },
    $o = e => {
        const {
            className: t,
            children: n,
            ...r
        } = e;
        return p.jsx(Wo, {
            className: Se("focus:bg-bor-neutral-200 bg-background focus-visible:bg-bor-neutral-200 relative flex w-full cursor-default items-center px-4 py-3 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50", "data-[state=checked]:bg-bor-tertiary-500 data-[state=checked]:hover:bg-bor-tertiary-600 text-foreground data-[state=checked]:text-background", "border-foreground/15 border-r border-l first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b", t),
            ...r,
            children: p.jsx(Ho, {
                children: n
            })
        })
    },
    qo = e => {
        const {
            variant: t = "fill",
            size: n = "md",
            value: r,
            id: o,
            placeholder: a,
            options: i = [],
            className: s,
            onChange: c,
            hasError: l = !1,
            ...u
        } = e;
        return p.jsxs(_o, {
            value: r,
            onValueChange: c,
            ...u,
            children: [p.jsx(Vo, {
                className: Se(vn({
                    variant: t,
                    size: n,
                    hasError: l,
                    hasValue: !!r
                }), s),
                id: o,
                children: p.jsx(Lo, {
                    placeholder: a
                })
            }), p.jsx(Uo, {
                sideOffset: 12,
                children: i.map(({
                    value: e,
                    label: t,
                    disabled: n
                }) => p.jsx($o, {
                    disabled: n,
                    value: e,
                    children: t
                }, e))
            })]
        })
    };
export {
    qo as S
};