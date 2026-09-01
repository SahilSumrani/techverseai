import {
    j as a
} from "./jsx-runtime.u17CrQMm.js";
import {
    I as u
} from "./chunk-HQNRUBSI.vHl3obHC.js";
import {
    c as l
} from "./image.njRmqV4O.js";
const h = t => {
    const {
        image: r,
        layout: s = "fullWidth",
        requestWidth: o,
        requestHeight: e,
        ...i
    } = t;
    if (!r) return null;
    const m = l(r, {
        width: o,
        height: e
    });
    return m ? a.jsx(u, { ...i,
        src: m,
        layout: s
    }) : null
};
export {
    h as I
};