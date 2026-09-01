import {
    j as s
} from "./jsx-runtime.u17CrQMm.js";
import {
    m as g
} from "./react.BJ61_sDN.js";
import {
    p as I,
    c as b,
    q as j,
    R as E,
    l as w
} from "./index.BwDjtkKo.js";
import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    H as k
} from "./HiddenButton.BOrEy_ZK.js";
import {
    _ as c
} from "./preload-helper.CVfkMyKi.js";
const C = ({
        variant: t = "primary",
        size: e = "lg",
        className: a,
        icon: i,
        label: r,
        children: n,
        clickArea: o,
        href: l,
        smooth: c,
        isHiddenButton: d = !1,
        ...h
    }) => {
        const u = s => {
            if (l.startsWith("#") && c) {
                s.preventDefault();
                const t = l.slice(1),
                    e = document.getElementById(t);
                e && e.scrollIntoView({
                    behavior: "smooth"
                })
            }
        };
        return d ? s.jsx(k, {
            label: r || "Get started",
            href: l,
            onClick: u
        }) : s.jsx(g.a, {
            className: b(j({
                variant: t,
                size: e,
                clickArea: o
            }), a),
            href: l,
            onClick: u,
            initial: "initial",
            whileHover: "hover",
            ...h,
            children: s.jsx(I, {
                variant: t,
                icon: i,
                children: n || r
            })
        })
    },
    y = (s, t, e) => {
        const a = s[t];
        return a ? "function" == typeof a ? a() : Promise.resolve(a) : new Promise((s, a) => {
            ("function" == typeof queueMicrotask ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== e ? ". Note that variables only represent file names one level deep." : ""))))
        })
    },
    _ = ({
        width: t,
        height: e
    }) => s.jsx("span", {
        className: "block",
        style: {
            width: t,
            height: e
        }
    }),
    A = async s => {
        if (!w[s]) return console.warn(`Illustration variant not found ${s}`), null;
        try {
            return (await y(Object.assign({
                "./assets/brush.svg": () => c(() =>
                    import ("./brush.HWqb86mJ.js"), []),
                "./assets/click.svg": () => c(() =>
                    import ("./click.Brzx_Y-s.js"), []),
                "./assets/clock.svg": () => c(() =>
                    import ("./clock.CTbEJkhF.js"), []),
                "./assets/hands_touching.svg": () => c(() =>
                    import ("./hands_touching.DsYlJ35G.js"), []),
                "./assets/hands_up.svg": () => c(() =>
                    import ("./hands_up.HuNRX6fT.js"), []),
                "./assets/searching_astronaut.svg": () => c(() =>
                    import ("./searching_astronaut.CkNr6CAC.js"), [])
            }), `./assets/${s}.svg`, 3)).default
        } catch (t) {
            return console.warn(`Failed to load illustration: ${s}`, t), null
        }
    },
    N = t => {
        const {
            variant: e,
            width: a,
            height: i = a,
            ...r
        } = t;
        if (!e) return console.warn("No illustration variant provided"), null;
        const n = d.useMemo(() => d.lazy(() => A(e).then(t => ({
            default: () => t ? s.jsx(E, {
                src: t ? .src ? ? t,
                loading: () => s.jsx(_, {
                    width: a,
                    height: i
                }),
                beforeInjection: s => {
                    a && (s.setAttribute("viewBox", "0 0 398 398"), s.setAttribute("width", `${a}`), s.setAttribute("height", `${i}`)), s.classList.add("animate-fadeIn")
                },
                ...r
            }) : null
        }))), [e, a, i]);
        return s.jsx(d.Suspense, {
            fallback: s.jsx(_, {
                width: a,
                height: i
            }),
            children: s.jsx(n, {})
        })
    },
    B = t => {
        const {
            mark: e = {},
            children: a
        } = t, {
            words: i = [],
            speed: r = 3
        } = e, n = [a, ...i].filter(Boolean), o = n.length * r;
        return s.jsxs(s.Fragment, {
            children: [s.jsx("span", {
                className: "relative inline-block h-10 w-full md:h-12 lg:h-15",
                "data-testid": "animated-text-wrapper",
                children: n.map((t, e) => s.jsx("span", {
                    className: "animate-slide-up-loop absolute inset-0 w-full opacity-0",
                    style: {
                        "--slide-up-duration": o + "s",
                        "--slide-up-delay": e * r + "s"
                    },
                    "data-testid": "animated-text-word",
                    children: t
                }, `${t}-${e}`))
            }), s.jsx("br", {})]
        })
    };
export {
    B as A, N as I, C as L
};