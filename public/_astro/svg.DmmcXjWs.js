import {
    f as n
} from "./index.BwDjtkKo.js";
const g = t => {
    const e = (new n.DOMParser).parseFromString(t, "application/xml").getElementsByTagName("svg")[0];
    if (!e) throw new Error("Invalid SVG content");
    const r = e.getAttribute("width"),
        o = e.getAttribute("height");
    if (r && o) return {
        aspectRatio: parseFloat(r) / parseFloat(o),
        width: parseFloat(r),
        height: parseFloat(o)
    };
    const i = e.getAttribute("viewBox");
    if (i) {
        const [, , t, e] = i.split(" ").map(Number);
        return {
            aspectRatio: t / e,
            width: t,
            height: e
        }
    }
    throw new Error("SVG does not have width/height or viewBox attributes")
};
export {
    g as e
};