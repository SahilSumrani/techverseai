import {
    j as n
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as b
} from "./index.CtKCFvq0.js";
import {
    c as g
} from "./index.BwDjtkKo.js";
const v = ({
        color: t,
        size: e,
        ...o
    }) => n.jsx("svg", {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        color: t,
        width: e,
        height: e,
        ...o,
        children: n.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.0322 6.07636C19.8072 6.2838 20.4162 6.89279 20.6236 7.66773C20.9985 9.07092 21 12.0003 21 12.0003C21 12.0003 21 14.9297 20.6236 16.3329C20.4162 17.1078 19.8072 17.7168 19.0322 17.9242C17.6291 18.3006 12 18.3006 12 18.3006C12 18.3006 6.37092 18.3006 4.96773 17.9242C4.19279 17.7168 3.5838 17.1078 3.37636 16.3329C3 14.9297 3 12.0003 3 12.0003C3 12.0003 3 9.07092 3.37636 7.66773C3.5838 6.89279 4.19279 6.2838 4.96773 6.07636C6.37092 5.7 12 5.7 12 5.7C12 5.7 17.6291 5.7 19.0322 6.07636ZM14.8746 12.0005L10.1983 14.7002V9.30082L14.8746 12.0005Z"
        })
    }),
    c = t => {
        if (void 0 !== t) return "number" == typeof t ? `${t}px` : t
    },
    C = t => "top" === t || "right" === t || "bottom" === t || "left" === t,
    d = t => "topLeft" === t || "topRight" === t || "bottomLeft" === t || "bottomRight" === t,
    w = t => {
        const {
            anchor: e,
            thickness: o = 64,
            boxSize: r = 64,
            stretch: i = !0,
            className: s,
            style: h,
            onUnmount: a,
            ...l
        } = t, p = c(o), f = c(r), m = (() => {
            switch (e) {
                case "topLeft":
                    return {
                        top: 0,
                        left: 0
                    };
                case "topRight":
                    return {
                        top: 0,
                        right: 0
                    };
                case "bottomLeft":
                    return {
                        bottom: 0,
                        left: 0
                    };
                case "bottomRight":
                    return {
                        bottom: 0,
                        right: 0
                    };
                case "left":
                    return i ? {
                        top: 0,
                        bottom: 0,
                        left: 0
                    } : {
                        top: 0,
                        left: 0
                    };
                case "right":
                    return i ? {
                        top: 0,
                        bottom: 0,
                        right: 0
                    } : {
                        top: 0,
                        right: 0
                    };
                case "top":
                    return i ? {
                        left: 0,
                        right: 0,
                        top: 0
                    } : {
                        top: 0,
                        left: 0
                    };
                case "bottom":
                    return i ? {
                        left: 0,
                        right: 0,
                        bottom: 0
                    } : {
                        bottom: 0,
                        left: 0
                    };
                case "center":
                    return {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }
            }
        })(), u = C(e) ? "left" === e || "right" === e ? {
            width: p,
            height: i ? void 0 : f
        } : {
            height: p,
            width: i ? void 0 : f
        } : d(e) || "center" === e ? {
            width: f,
            height: f
        } : {};
        return b.useEffect(() => () => a ? .(), []), n.jsx("button", { ...l,
            type: "button",
            className: g("pointer-events-auto absolute z-3 appearance-none border-0 bg-transparent p-0", s),
            style: { ...m,
                ...u,
                ...h
            }
        })
    };
export {
    w as I, v as Y
};