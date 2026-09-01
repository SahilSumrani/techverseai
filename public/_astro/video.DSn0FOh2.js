import {
    b as s,
    a as r,
    g as o,
    t as a
} from "./image.njRmqV4O.js";
import {
    g as n,
    a as l
} from "./getSanityFileUrl.qZZEuEbn.js";
const i = "https://sanity-cdn.superside.com",
    p = e => {
        if (!e) return;
        const t = e.value ? .[0];
        return "file" === t._type ? n(t) || void 0 : "s3File" === t._type ? s(t.asset._ref, {
            baseUrl: i
        }) || void 0 : "s3Video" === t._type && r(t.asset._ref, {
            baseUrl: i
        }) || void 0
    },
    f = e => {
        const s = e.value ? .[0];
        return "file" === s._type ? l(s) ? ? "mp4" : "s3File" === s._type || "s3Video" === s._type ? o(s.asset) ? ? "mp4" : "mp4"
    },
    _ = e => {
        if (!e) return;
        const s = e.value ? .[0];
        return "s3Video" === s._type ? a(s) ? .aspectRatio : void 0
    };
export {
    f as a, p as b, _ as g
};