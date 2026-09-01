function n(t) {
    const n = typeof window < "u" && window;
    return !(!n || !/Chromatic/.test(n.navigator.userAgent) && !/chromatic=true/.test(n.location.href))
}
export {
    n as i
};