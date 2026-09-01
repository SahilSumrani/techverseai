import {
    t as o
} from "./toNumber.D20f_QGL.js";
var i = 1 / 0,
    f = 17976931348623157e292;

function I(r) {
    return r ? (r = o(r)) === i || r === -i ? (r < 0 ? -1 : 1) * f : r == r ? r : 0 : 0 === r ? r : 0
}

function N(r) {
    var t = I(r),
        o = t % 1;
    return t == t ? o ? t - o : t : 0
}
export {
    N as t
};