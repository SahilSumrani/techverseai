const r = typeof window > "u";

function t(e) {
    window.location.href = e
}

function o(e) {
    const n = document.createElement("link");
    n.rel = "prefetch", n.href = e, document.head.appendChild(n)
}

function a() {
    if (r) return {
        push: () => {
            console.error("Navigation is not available on the server.")
        },
        prefetch: () => {
            console.error("Navigation is not available on the server.")
        },
        query: {},
        pathname: "fixme"
    };
    const e = new URL(window.location.href);
    return {
        push: e => {
            t(e)
        },
        prefetch: e => {
            o(e)
        },
        events: {
            on: () => {},
            off: () => {}
        },
        query: Object.fromEntries(e.searchParams),
        pathname: e.pathname
    }
}
export {
    a as u
};