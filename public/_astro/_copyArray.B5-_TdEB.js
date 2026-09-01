function i(r, n) {
    var t = -1,
        a = r.length;
    for (n || (n = Array(a)); ++t < a;) n[t] = r[t];
    return n
}
export {
    i as c
};