import {
    j as o
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as i
} from "./index.CtKCFvq0.js";
import {
    u as g,
    B as j,
    c as s,
    a as k,
    e as M
} from "./index.BwDjtkKo.js";
import {
    m as f
} from "./react.BJ61_sDN.js";
import {
    A as N
} from "./index.DxFyLVPS.js";
import {
    X as V
} from "./X.esm.ClQ3KrmU.js";
const R = e => {
    const {
        inline: t,
        open: n,
        onClose: r,
        mood: a = "dark",
        className: l,
        overlayClassName: c,
        closeButtonClassName: d,
        closeButtonRef: m,
        container: u,
        children: p,
        ...y
    } = e, w = i.useSyncExternalStore(() => () => {}, () => !0, () => !1), {
        isMobile: v
    } = g(), x = i.useCallback(() => {
        r ? .()
    }, [r]);
    i.useEffect(() => (t || (document.body.style.overflow = n ? "hidden" : ""), () => {
        document.body.style.overflow = ""
    }), [t, n]), i.useEffect(() => {
        if (!n || !window.visualViewport) return;
        const e = () => {
            document.documentElement.style.setProperty("--modal-viewport-height", `${window.visualViewport?.height}px`)
        };
        return e(), window.visualViewport.addEventListener("resize", e), window.visualViewport.addEventListener("scroll", e), () => {
            window.visualViewport ? .removeEventListener("resize", e), window.visualViewport ? .removeEventListener("scroll", e), document.documentElement.style.removeProperty("--modal-viewport-height")
        }
    }, [n]), i.useEffect(() => {
        if (!n) return;
        const e = e => {
            "Escape" === e.key && x()
        };
        return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
        }
    }, [n, r]);
    const h = i.useMemo(() => o.jsx(N, {
        mode: "wait",
        children: n ? o.jsxs(j, { ...y,
            mood: a,
            className: s("z-modal fixed inset-0 flex h-full w-full flex-none flex-col items-center justify-center bg-transparent", t && "absolute"),
            children: [o.jsx(f.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0,
                    transition: {
                        delay: .3
                    }
                },
                transition: {
                    duration: .3
                },
                className: s("bg-black-100/80 absolute inset-0 -z-1 h-full w-full backdrop-blur-md", c),
                onClick: x
            }), o.jsxs(f.div, {
                role: "dialog",
                initial: v ? {
                    opacity: 1,
                    y: "100%"
                } : {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: v ? {
                    opacity: 1,
                    y: "100%"
                } : {
                    opacity: 0,
                    y: 30
                },
                transition: {
                    duration: .4,
                    ease: [.25, .1, .25, 1]
                },
                "aria-modal": "true",
                className: s("flex h-full w-full items-start justify-center self-center bg-transparent md:items-center", l),
                children: [o.jsx(k, {
                    ref: m,
                    size: "base",
                    type: "button",
                    className: s("pointer-events-auto absolute top-3 right-3 z-3 p-3 lg:top-6 lg:right-6 lg:p-4", d),
                    variant: "outline",
                    onClick: x,
                    children: o.jsx(V, {
                        weight: "bold"
                    })
                }), p]
            })]
        }) : null
    }), [n, a, p, c, x]);
    return w ? t && !u ? o.jsx(o.Fragment, {
        children: h
    }) : M.createPortal(h, u || document.body) : null
};
export {
    R as M
};