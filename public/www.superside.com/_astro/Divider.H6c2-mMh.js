import {
    j as s
} from "./jsx-runtime.u17CrQMm.js";
import {
    S as l,
    T as x,
    c as o
} from "./index.BwDjtkKo.js";
import "./index.CtKCFvq0.js";
const f = e => {
    const {
        title: i,
        info: t,
        detail: r,
        description: n,
        className: a,
        ...c
    } = e;
    return s.jsxs("div", {
        className: o("flex flex-col gap-3", a),
        ...c,
        children: ["string" == typeof i ? s.jsx(l, {
            children: i
        }) : i, s.jsx("hr", {}), t || r ? s.jsxs("div", {
            className: "flex w-full justify-between",
            children: ["string" == typeof t ? s.jsx(l, {
                size: "xs",
                children: t
            }) : t, r ? s.jsx("div", {
                className: "ml-auto",
                children: "string" == typeof r ? s.jsx(l, {
                    size: "xs",
                    children: r
                }) : r
            }) : null]
        }) : null, "string" == typeof n ? s.jsx(x, {
            className: "max-w-[724px]",
            children: n
        }) : n]
    })
};
export {
    f as D
};