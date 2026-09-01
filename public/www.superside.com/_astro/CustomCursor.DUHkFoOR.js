import {
    j as a
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as i
} from "./index.CtKCFvq0.js";
import {
    e as c
} from "./index.BwDjtkKo.js";
import {
    f as l,
    m as p
} from "./react.BJ61_sDN.js";
import {
    u as f
} from "./use-spring.DXQtKWIb.js";
const m = {
        stiffness: 1500,
        damping: 100
    },
    d = e => {
        const t = f(0, m),
            s = f(0, m);
        return i.useEffect(() => {
            if (!e.current) return;
            const i = ({
                clientX: i,
                clientY: r
            }) => {
                const n = e.current;
                l.read(() => {
                    t.set(i - n.offsetLeft - n.offsetWidth / 2), s.set(r - n.offsetTop - n.offsetHeight / 2)
                })
            };
            return window.addEventListener("mousemove", i), () => window.removeEventListener("mousemove", i)
        }, []), {
            x: t,
            y: s
        }
    },
    g = e => {
        const {
            isVisible: t,
            children: s
        } = e, [r, n] = i.useState(!1);
        return i.useEffect(() => {
            n(!0)
        }, []), r ? c.createPortal(a.jsx(x, {
            isVisible: t,
            children: s
        }), document.body) : null
    },
    x = e => {
        const {
            isVisible: t,
            children: s
        } = e, r = i.useRef(null), {
            x: n,
            y: o
        } = d(r);
        return a.jsx(p.div, {
            ref: r,
            className: "pointer-events-none fixed top-0 left-0 z-5 h-fit!",
            style: {
                x: n,
                y: o
            },
            initial: {
                opacity: 0
            },
            animate: t ? {
                opacity: 1
            } : "initial",
            children: s
        })
    };
export {
    g as C
};