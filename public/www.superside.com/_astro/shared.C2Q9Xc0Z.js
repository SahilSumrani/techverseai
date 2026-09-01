function n(t) {
    const n = document.getElementById(t);
    if (n instanceof HTMLScriptElement) try {
        return JSON.parse(n.textContent || "{}")
    } catch {
        return
    }
}
export {
    n as r
};