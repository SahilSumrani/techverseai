import {
    j as t
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as f,
    R
} from "./index.CtKCFvq0.js";
import {
    b as h,
    c as m,
    B as P
} from "./index.BwDjtkKo.js";
const E = e => {
        for (; e && e !== document.body;) {
            const {
                overflowY: t
            } = window.getComputedStyle(e);
            if ("scroll" === t || "auto" === t) return e;
            e = e.parentElement
        }
        return window
    },
    z = e => {
        let t = 0;
        return t = 2 * e / 100, t = Math.max(0, Math.min(t, 1)), t = 1 - Math.pow(1 - t, 2), t = .4 + .6 * t, t
    },
    k = ({
        activeBordersRef: e,
        progressThumbRef: t
    }) => {
        const r = t.current ? .getBoundingClientRect();
        e.current ? .forEach(e => {
            if (e && r) {
                const t = e.getBoundingClientRect();
                if (r.bottom > t.top) {
                    const s = r.bottom - t.top,
                        l = z(s);
                    e.style.setProperty("--scale", l.toString())
                } else e.style.setProperty("--scale", "0")
            }
        })
    },
    L = ({
        activeBordersRef: e,
        contentsRef: t,
        progressBarRef: r,
        callback: s
    }) => {
        const l = t.current ? .[t.current.length - 1],
            o = e.current ? .[e.current.length - 1],
            a = r.current;
        if (l && o && a) {
            const e = l.clientHeight - o.clientHeight;
            r.current ? .style.setProperty("--marginBottom", `${e}px`)
        }
        s()
    },
    S = h("grid w-full gap-x-3 gap-y-12 lg:gap-x-8 lg:gap-y-24", {
        variants: {
            withProgress: {
                true: "grid-cols-[auto_auto]",
                false: "flex flex-col"
            },
            withTitle: {
                true: "md:max-w-[50%]",
                false: "w-full md:max-w-4xl"
            }
        }
    }),
    j = h("text-foreground relative flex items-center", {
        variants: {
            labelType: {
                circle: "size-14 h-14 w-14 justify-center rounded-full font-serif text-2xl",
                tag: "justify-center rounded-full px-4 py-2 text-xs font-semibold uppercase",
                custom: "flex w-full flex-col justify-start gap-3 max-lg:items-start lg:flex-row lg:gap-8"
            }
        }
    }),
    N = h("text-foreground", {
        variants: {
            withProgress: {
                true: "col-start-2",
                false: "lg:mt-0"
            }
        }
    }),
    B = h("", {
        variants: {
            highlightColor: {
                secondary: "bg-bor-secondary shadow-bor-secondary",
                primary: "bg-bor-primary shadow-bor-primary",
                foreground: "bg-foreground"
            },
            withGlow: {
                false: "",
                true: "shadow-glow"
            }
        }
    }),
    M = e => {
        const {
            title: r,
            items: s = [],
            labelType: l = "circle",
            highlightColor: o = "foreground",
            withGlow: a = !1,
            className: n,
            contentClassName: i,
            ...c
        } = e, u = "blue" === o ? "secondary" : "green" === o ? "primary" : o, d = !!r, g = "custom" !== l, h = f.useRef([]), x = f.useRef(null), p = f.useRef(null), w = f.useRef([]);
        return f.useEffect(() => {
            if (!g) return () => {};
            const e = E(p.current),
                t = () => k({
                    activeBordersRef: h,
                    progressThumbRef: p
                });
            e.addEventListener("scroll", t);
            const r = () => L({
                activeBordersRef: h,
                contentsRef: w,
                progressBarRef: x,
                callback: t
            });
            return e.addEventListener("resize", r), r(), () => {
                e.removeEventListener("scroll", t), e.removeEventListener("resize", r)
            }
        }, [s, g]), t.jsxs("div", {
            className: m("flex w-full flex-col items-start justify-center gap-10 md:flex-row lg:gap-12 2xl:gap-24", n),
            ...c,
            children: [d && t.jsx("div", {
                className: "text-foreground w-fit md:sticky md:top-28 md:max-w-[50%]",
                children: r
            }), t.jsxs("div", {
                className: m(S({
                    withProgress: g,
                    withTitle: d
                }), i),
                children: [g && t.jsx("div", {
                    className: "bg-foreground/15 col-start-1 row-start-1 mb-(--marginBottom) flex w-0.5 items-start justify-self-center overflow-y-clip",
                    style: {
                        gridRowEnd: s.length + 1,
                        "--marginBottom": "0"
                    },
                    ref: x,
                    children: t.jsx("div", {
                        className: "sticky top-1/2 -mt-1",
                        children: t.jsx("div", {
                            className: m(B({
                                highlightColor: u,
                                withGlow: a
                            }), "absolute bottom-0 h-screen w-0.5"),
                            ref: p
                        })
                    })
                }), s.map((e, r) => "custom" === l ? t.jsxs(P, {
                    className: j({
                        labelType: l
                    }),
                    children: [e.label, t.jsx("span", {
                        ref: e => w.current[r] = e,
                        className: N({
                            withProgress: g
                        }),
                        children: e.content
                    })]
                }, `${e.content}-${r}`) : t.jsxs(R.Fragment, {
                    children: [t.jsx("span", {
                        className: "relative col-start-1 justify-self-center",
                        style: {
                            gridRowStart: r + 1
                        },
                        children: t.jsxs("div", {
                            className: j({
                                labelType: l
                            }),
                            children: [t.jsx("div", {
                                className: "bg-foreground/15 absolute inset-0 z-0 rounded-full"
                            }), g && t.jsx("div", {
                                ref: e => h.current[r] = e,
                                className: m(B({
                                    highlightColor: u,
                                    withGlow: a
                                }), "absolute inset-0 z-1 origin-top scale-(--scale) rounded-full"),
                                style: {
                                    "--scale": "0"
                                }
                            }), t.jsx("div", {
                                className: "bg-background absolute inset-0.5 z-2 rounded-full"
                            }), t.jsx("span", {
                                className: "z-3 text-nowrap",
                                children: e.label || r + 1
                            })]
                        })
                    }), t.jsx("span", {
                        ref: e => w.current[r] = e,
                        className: N({
                            withProgress: g
                        }),
                        children: e.content
                    })]
                }, `${e.content}-${r}`))]
            })]
        })
    };
export {
    M as V
};