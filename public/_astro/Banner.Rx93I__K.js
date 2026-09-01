import {
    j as r
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as n
} from "./index.CtKCFvq0.js";
import {
    m as j
} from "./react.BJ61_sDN.js";
import {
    j as S
} from "./js.cookie.CbilILek.js";
import {
    T as R,
    c as h,
    B as z,
    a as C
} from "./index.BwDjtkKo.js";
import {
    s as M
} from "./getSanityFileUrl.qZZEuEbn.js";
import {
    u as T
} from "./use-reduced-motion.BTvKrXPX.js";
import {
    X as D
} from "./X.esm.ClQ3KrmU.js";
const L = e => {
        const {
            throttleMs: t = 100,
            initialPosition: i = 0
        } = {}, [r, o] = n.useState(i), s = n.useCallback(() => {
            let e = !1;
            e || (window.requestAnimationFrame(() => {
                o(window.scrollY), e = !1
            }), e = !0)
        }, []);
        return n.useEffect(() => {
            o(window.scrollY);
            const e = ((e, t) => {
                let n = !1;
                return i => {
                    n || (e(i), n = !0, setTimeout(() => {
                        n = !1
                    }, t))
                }
            })(s, t);
            return window.addEventListener("scroll", e, {
                passive: !0
            }), () => {
                window.removeEventListener("scroll", e)
            }
        }, [s, t]), {
            scrollPosition: r,
            isScrolled: r > 0,
            scrollDirection: r > i ? "down" : "up",
            scrollPercentage: Math.round(r / (document.documentElement.scrollHeight - window.innerHeight) * 100)
        }
    },
    P = () => {
        const [e, t] = n.useState(0), [i, r] = n.useState(0);
        return n.useEffect(() => {
            if (typeof window < "u") {
                r(document.body.offsetHeight);
                const e = () => {
                    t(window.innerHeight)
                };
                return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
            }
        }, []), {
            windowHeight: e,
            bodyHeight: i
        }
    },
    _ = 1,
    W = 4.5,
    V = [0, .12, .88, 1],
    Y = e => {
        const {
            content: t,
            isActive: i
        } = e, o = n.useRef(null), s = n.useRef(null), [a, l] = n.useState(0), c = T();
        if (n.useLayoutEffect(() => {
                const e = o.current,
                    t = s.current;
                if (!e || !t) return;
                const n = () => {
                    l(Math.max(0, t.scrollWidth - e.clientWidth))
                };
                n();
                const i = new ResizeObserver(n);
                return i.observe(e), i.observe(t), () => i.disconnect()
            }, [t]), !t) return null;
        const d = i && a > 0 && !c;
        return r.jsx("div", {
            ref: o,
            className: h("mr-7 lg:hidden", c ? "overflow-visible" : "-ml-3 overflow-hidden", d && "gradient-mask-horizontal-86"),
            children: r.jsx(j.span, {
                ref: s,
                animate: {
                    x: d ? [0, 0, -a, -a] : 0
                },
                className: h("block", c ? "whitespace-normal" : "w-max pr-5 pl-3 whitespace-nowrap"),
                transition: d ? {
                    delay: 1,
                    duration: W,
                    ease: "linear",
                    repeat: 1 / 0,
                    repeatType: "reverse",
                    times: V
                } : {
                    duration: 0
                },
                children: r.jsx(R, {
                    size: "sm",
                    className: "font-medium",
                    children: t
                })
            })
        })
    },
    F = j.create(z),
    B = "floating-banner-",
    Z = e => {
        const {
            floatingBanner: t,
            className: i,
            children: o,
            controlled: s = !1,
            hideCloseButton: a,
            clickableLink: l,
            isVisible: c,
            onVisibilityChange: d
        } = e, {
            _id: u,
            colorMood: m,
            displaySettings: g,
            layout: f = "boxed"
        } = t, [b, p] = n.useState(() => "true" === S.get(B + u)), {
            scrollPosition: w
        } = L(), {
            windowHeight: v,
            bodyHeight: x
        } = P(), {
            cookieExpirationDays: j = 2,
            bottomOffsetHeight: k = 200
        } = g, y = "boxed" === f, E = !(!t.clickableArea || !l ? .href), N = n.useMemo(() => w + v < x - k, [w, v, x, k]), H = (s ? c : !b) && N && !b, R = n.useCallback(() => {
            s && d ? .(!1), p(!0), S.set(B + u, "true", {
                expires: j
            })
        }, [s, d, u, j]), T = t ? .background ? `url(${M(t.background).auto("format").width(1280).url()})` : void 0;
        return r.jsx(F, {
            mood: y ? void 0 : m,
            className: h(i, "fixed left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-center", y && "lg:pb-8"),
            variants: {
                hidden: {
                    bottom: "-100%",
                    opacity: 0
                },
                visible: {
                    bottom: "0%",
                    opacity: 1
                }
            },
            exit: "hidden",
            initial: "hidden",
            animate: H ? "visible" : "hidden",
            inert: !H,
            style: {
                backgroundImage: y ? void 0 : T,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            },
            children: r.jsxs(z, {
                mood: y ? m : void 0,
                className: h("lg:max-w-container relative w-full flex-col items-stretch gap-2 p-3 lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:px-8", "lg:max-h-[80px]", y && "lg:w-fit lg:gap-16 lg:rounded"),
                style: {
                    backgroundImage: y ? T : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                },
                children: ["cta" !== t.type ? r.jsx(Y, {
                    content: t.content,
                    isActive: !!H
                }) : null, r.jsx("div", {
                    className: "w-full lg:flex-1",
                    children: o
                }), E ? r.jsx("a", {
                    href: l ? .href,
                    target: l ? .target,
                    rel: l ? .rel,
                    "aria-label": t.content || "Open",
                    className: "absolute inset-0 z-0"
                }) : null, a ? null : r.jsx(C, {
                    "aria-label": "Close banner",
                    className: h("absolute top-1 right-1 lg:static", E && "z-10 lg:relative"),
                    size: "base",
                    variant: "iconGhost",
                    icon: r.jsx(D, {
                        className: "size-3 lg:size-4"
                    }),
                    onClick: R
                })]
            })
        })
    };
export {
    Z as B, P as a, L as u
};