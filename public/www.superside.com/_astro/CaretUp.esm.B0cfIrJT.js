import {
    r as a,
    R as e
} from "./index.CtKCFvq0.js";
import {
    I as l,
    r as i
} from "./index.BwDjtkKo.js";
var n = new Map;
n.set("bold", function(n) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "48 160 128 80 208 160",
        fill: "none",
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
}), n.set("duotone", function(n) {
    return e.createElement(e.Fragment, null, e.createElement("polygon", {
        points: "48 160 128 80 208 160 48 160",
        opacity: "0.2"
    }), e.createElement("polygon", {
        points: "48 160 128 80 208 160 48 160",
        fill: "none",
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
}), n.set("fill", function() {
    return e.createElement(e.Fragment, null, e.createElement("path", {
        d: "M213.7,154.3l-80-80a8.1,8.1,0,0,0-11.4,0l-80,80a8.4,8.4,0,0,0-1.7,8.8A8,8,0,0,0,48,168H208a8,8,0,0,0,7.4-4.9A8.4,8.4,0,0,0,213.7,154.3Z"
    }))
}), n.set("light", function(n) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "48 160 128 80 208 160",
        fill: "none",
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
}), n.set("thin", function(n) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "48 160 128 80 208 160",
        fill: "none",
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
}), n.set("regular", function(n) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "48 160 128 80 208 160",
        fill: "none",
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var s = function(e, t) {
        return i(e, t, n)
    },
    u = a.forwardRef(function(n, t) {
        return e.createElement(l, Object.assign({
            ref: t
        }, n, {
            renderPath: s
        }))
    });
u.displayName = "CaretUp";
export {
    u as C
};