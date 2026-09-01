import {
    j as e
} from "./jsx-runtime.u17CrQMm.js";
import {
    V as i
} from "./index.BwDjtkKo.js";
const l = o => {
    const {
        label: r,
        href: n,
        onClick: s
    } = o, t = n ? "a" : "button";
    return e.jsx(t, {
        href: n || void 0,
        onClick: s || void 0,
        className: "before:content-empty cursor-none before:absolute before:inset-0 [&_*]:cursor-none",
        children: e.jsx(i, {
            children: r
        })
    })
};
export {
    l as H
};