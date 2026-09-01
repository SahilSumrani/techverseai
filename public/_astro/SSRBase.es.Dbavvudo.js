import {
    r as e
} from "./index.CtKCFvq0.js";
const w = e.forwardRef((r, t) => {
    const {
        alt: l,
        color: o = "currentColor",
        size: i = "1em",
        weight: s = "regular",
        mirrored: w = !1,
        children: a,
        weights: n,
        ...m
    } = r;
    return e.createElement("svg", {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        fill: o,
        viewBox: "0 0 256 256",
        transform: w ? "scale(-1, 1)" : void 0,
        ...m
    }, !!l && e.createElement("title", null, l), a, n.get(s))
});
w.displayName = "SSRBase";
export {
    w
};