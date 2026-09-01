import {
    u
} from "./use-motion-value-event.BhTh6hGp.js";
import {
    u as a
} from "./use-transform.DAUCFMwx.js";
import {
    f as i
} from "./react.BJ61_sDN.js";

function f(t) {
    const e = a(t.getVelocity()),
        o = () => {
            const s = t.getVelocity();
            e.set(s), s && i.update(o)
        };
    return u(t, "change", () => {
        i.update(o, !1, !0)
    }), e
}
export {
    f as u
};