import {
    j as f
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as t
} from "./index.CtKCFvq0.js";
import {
    m as p
} from "./react.BJ61_sDN.js";
const R = ({
    component: e,
    animate: r,
    children: n,
    ...s
}) => {
    const o = e ? ? p.div,
        c = t.useRef(null),
        [i, a] = t.useState("auto");
    return t.useEffect(() => {
        if (!c.current) return;
        const t = new ResizeObserver(t => {
            const e = t[0].contentRect.height;
            a(e)
        });
        return t.observe(c.current), () => t.disconnect()
    }, []), f.jsx(o, { ...s,
        animate: { ...r,
            height: i,
            opacity: 0 === i ? 0 : 1
        },
        children: n(c)
    })
};
export {
    R as A
};