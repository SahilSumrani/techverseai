import {
    C as ge,
    b as $e
} from "./constants.B1nA__9a.js";
var pe = class extends Error {
        constructor(e, t) {
            super(e, t), this.name = "ConsentifyConfigError"
        }
    },
    Ne = "consentify";

function K(e, t, n) {
    let i = `${e}=${t}; Path=${n.path}; Max-Age=${n.maxAgeSec}; SameSite=${n.sameSite}`;
    return n.domain && (i += `; Domain=${n.domain}`), n.secure && (i += "; Secure"), i
}

function oe(e, t) {
    let n = t ? ? (typeof document < "u" ? document.cookie : "");
    if (!n) return null;
    let i = e + "=",
        o = 0;
    for (; o < n.length;) {
        for (; o < n.length && (" " === n[o] || "\t" === n[o]);) o++;
        if (n.startsWith(i, o)) {
            let e = o + i.length,
                t = n.indexOf(";", e);
            return -1 === t ? n.slice(e) : n.slice(e, t)
        }
        let e = n.indexOf(";", o);
        if (-1 === e) break;
        o = e + 1
    }
    return null
}

function je(e, t, n) {
    typeof document > "u" || (document.cookie = K(e, t, n))
}
var b, P = "[consentify] ",
    m = (e, ...t) => console.warn(P + e, ...t),
    re = (e, ...t) => console.error(P + e, ...t),
    L = e => encodeURIComponent(JSON.stringify(e)),
    ie = e => {
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch {
            return null
        }
    },
    se = () => (new Date).toISOString(),
    w = () => typeof window < "u" && typeof document < "u",
    v = () => {
        if (void 0 !== b) return b;
        try {
            b = w() && !!window.localStorage
        } catch {
            b = !1
        }
        return b
    },
    Ke = e => Array.from(new Uint8Array(e), e => e.toString(16).padStart(2, "0")).join("");

function M(e) {
    return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map(M).join(",")}]` : `{${Object.entries(e).sort((e,t)=>e[0].localeCompare(t[0])).map(([e,t])=>JSON.stringify(e)+":"+M(t)).join(",")}}`
}

function ye(e) {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = t + ((t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24)) >>> 0;
    return ("00000000" + t.toString(16)).slice(-8)
}

function Pe(e, t) {
    return ye(M({
        categories: [...e].sort(),
        identifier: null
    }))
}

function F(e) {
    if ("object" != typeof e || null === e || "string" != typeof e.policy || "" === e.policy || "string" != typeof e.givenAt || "object" != typeof e.choices || null === e.choices || isNaN(Date.parse(e.givenAt))) return !1;
    let t = e.choices;
    for (let e in t)
        if ("boolean" != typeof t[e]) return !1;
    return !0
}
async function _e(e, t) {
    let n = new TextEncoder,
        i = await crypto.subtle.importKey("raw", n.encode(e), {
            name: "HMAC",
            hash: "SHA-256"
        }, !1, ["sign"]),
        o = await crypto.subtle.sign("HMAC", i, n.encode(t));
    return Ke(o)
}
var he = e => ({
    policy: e.policy,
    givenAt: e.givenAt,
    choices: e.choices
});

function ae(e) {
    let t = he(e);
    return { ...t,
        signature: ye(M(t))
    }
}
async function ce(e, t) {
    let n = he(e),
        i = await _e(t, M(n));
    return { ...n,
        signature: i
    }
}
var le = "consentify_visitor";

function z() {
    return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

function me() {
    try {
        let e = window.localStorage.getItem(le);
        if (e) return e;
        let t = z();
        return window.localStorage.setItem(le, t), t
    } catch {
        return z()
    }
}
async function Be(e) {
    if ("string" == typeof e) return e;
    if ("function" == typeof e) {
        let t = e();
        return "string" == typeof t ? t : await t
    }
    return v() ? me() : ""
}
var Je = "https://cdn.consentify.dev",
    Re = "https://ingest.consentify.dev",
    X = "consentify_event_buffer";

function Ue(e, t) {
    if ("decided" !== e.decision) return "customize";
    let n = e.snapshot.choices;
    return t.every(e => !0 === n[e]) ? "accept_all" : t.every(e => !n[e]) ? "reject_all" : "customize"
}

function He() {
    if (!v()) return null;
    try {
        let e = window.localStorage.getItem(X);
        return e ? JSON.parse(e) : null
    } catch {
        return null
    }
}

function Te(e) {
    if (v()) try {
        window.localStorage.setItem(X, JSON.stringify(e))
    } catch (e) {
        m("persist cloud evt:", e)
    }
}
var ue = () => {
    if (v()) try {
        window.localStorage.removeItem(X)
    } catch (e) {
        m("drop pending cloud evt:", e)
    }
};

function fe(e) {
    let t = {
        "Content-Type": "application/json"
    };
    return e.apiKey && (t["X-API-Key"] = e.apiKey), fetch(e.url, {
        method: "POST",
        headers: t,
        body: e.body,
        keepalive: !0
    }).then(e => e.ok).catch(() => !1)
}

function We(e, t) {
    if (!w()) return () => {};
    let n = `${t.ingestEndpoint.replace(/\/$/,"")}/v1/events`,
        i = e.policy.categories.filter(e => "necessary" !== e),
        o = "",
        r = He();
    r && fe(r).finally(ue);
    let a = v() ? me() : z(),
        s = e => {
            if ("decided" !== e.decision) return;
            let r = e.snapshot.policy + "|" + e.snapshot.givenAt;
            if (r === o) return;
            o = r;
            let s = JSON.stringify({
                    siteId: t.siteId,
                    action: Ue(e, i),
                    categories: e.snapshot.choices,
                    visitorHash: a,
                    policyVersion: e.snapshot.policy,
                    ...t.apiKey ? {
                        apiKey: t.apiKey
                    } : {}
                }),
                c = {
                    url: n,
                    body: s,
                    apiKey: t.apiKey
                };
            (async () => {
                await fe(c) ? ue() : Te(c)
            })()
        },
        c = e.get();
    return "decided" === c.decision && s(c), e.subscribe(() => {
        s(e.get())
    })
}
async function Le(e, t) {
    let n = t.replace(/\/$/, "");
    try {
        let t = await fetch(`${n}/config/${e}/latest.json`);
        if (!t.ok) throw new Error(`latest.json responded with ${t.status}`);
        let i = await t.json();
        if (!i || "string" != typeof i.current || !i.current) throw new Error("latest.json is missing `current` hash");
        let o = await fetch(`${n}/config/${e}/${i.current}.json`);
        if (!o.ok) throw new Error(`${i.current}.json responded with ${o.status}`);
        let r = await o.json();
        if (!r || !Array.isArray(r.categories) || "string" != typeof r.policyIdentifier) throw new Error("SiteConfig is malformed");
        return {
            categories: r.categories,
            policyIdentifier: r.policyIdentifier,
            mode: r.mode,
            consentMaxAgeDays: r.consentMaxAgeDays
        }
    } catch (t) {
        throw new pe(P + `Failed to fetch SiteConfig for "${e}"`, {
            cause: t
        })
    }
}

function Fe(e) {
    return "siteId" in e && "string" == typeof e.siteId ? Ve(e) : we(e)
}
async function Ve(e) {
    let t = e.endpoints ? .config ? ? Je,
        n = e.endpoints ? .ingest ? ? Re,
        i = await Le(e.siteId, t),
        o = we({
            policy: {
                categories: i.categories,
                identifier: i.policyIdentifier
            },
            cookie: e.cookie,
            mode: e.mode ? ? i.mode,
            consentMaxAgeDays: e.consentMaxAgeDays ? ? i.consentMaxAgeDays,
            expirationWarningDays: e.expirationWarningDays,
            storage: e.storage,
            secret: e.secret,
            adapter: e.adapter,
            visitorId: e.visitorId
        });
    return w() && We(o, {
        siteId: e.siteId,
        apiKey: e.apiKey,
        ingestEndpoint: n
    }), o
}

function we(e) {
    if (e.secret && w()) throw new pe(P + "`secret` is server-only");
    let t = e.policy.identifier ? ? Pe(e.policy.categories),
        n = e.cookie ? .name ? ? Ne,
        i = e.cookie ? .sameSite ? ? "Lax",
        o = {
            path: e.cookie ? .path ? ? "/",
            maxAgeSec: e.cookie ? .maxAgeSec ? ? 31536e3,
            sameSite: i,
            secure: "None" === i || (e.cookie ? .secure ? ? !0),
            domain: e.cookie ? .domain
        },
        r = e.storage && e.storage.length > 0 ? e.storage : ["cookie"],
        a = e.consentMaxAgeDays,
        s = e.mode ? ? "opt-in",
        c = e.expirationWarningDays ? ? 30;
    a && c >= a && m("expirationWarningDays >= consentMaxAgeDays");
    let l = e => {
            if (!a) return !1;
            let t = Date.parse(e);
            return isNaN(t) || Date.now() - t > 864e5 * a
        },
        u = new Set(["necessary", ...e.policy.categories]),
        d = t => {
            let n = {};
            for (let t of e.policy.categories) n[t] = !1;
            if (t)
                for (let e in t) u.has(e) && (n[e] = !!t[e]);
            return n.necessary = !0, n
        },
        f = t => {
            let n = {};
            for (let i of e.policy.categories) n[i] = t;
            return n
        },
        p = e.secret ? ? "",
        g = (e, t) => {
            if (!v()) return null;
            try {
                let i = window.localStorage;
                if ("r" === e) return i.getItem(n);
                "w" === e ? i.setItem(n, t) : i.removeItem(n)
            } catch (e) {
                m("localStorage failed:", e)
            }
            return null
        },
        y = e => "cookie" === e ? oe(n) : "localStorage" === e ? g("r") : null,
        h = (e, t) => {
            "cookie" === e ? je(n, t, o) : "localStorage" === e && g("w", t)
        },
        S = e => {
            "cookie" === e ? w() && (document.cookie = K(n, "", { ...o,
                maxAgeSec: 0
            })) : "localStorage" === e && g("c")
        },
        A = e => {
            let t = "cookie";
            for (let e of r)
                if ("cookie" === e || "localStorage" === e && v()) {
                    t = e;
                    break
                }
            h(t, e), "cookie" !== t && r.includes("cookie") && h("cookie", e)
        },
        b = () => {
            let e = null;
            for (let t of r)
                if (e = y(t), e) break;
            let n = e ? ie(e) : null;
            return n && F(n) && n.policy === t && !l(n.givenAt) ? n : null
        },
        k = {
            get: e => {
                let i = e ? oe(n, e) : null,
                    o = i ? ie(i) : null;
                return o && F(o) && o.policy === t && !l(o.givenAt) ? {
                    decision: "decided",
                    snapshot: o
                } : {
                    decision: "unset"
                }
            },
            set: (e, i) => {
                let r = i ? k.get(i) : {
                        decision: "unset"
                    },
                    a = "decided" === r.decision ? r.snapshot.choices : d(),
                    s = {
                        policy: t,
                        givenAt: se(),
                        choices: d({ ...a,
                            ...e
                        })
                    };
                return K(n, L(s), o)
            },
            clear: () => K(n, "", { ...o,
                maxAgeSec: 0
            })
        },
        I = new Set,
        x = {
            decision: "unset"
        },
        M = x,
        D = () => {
            let e = b();
            M = e ? {
                decision: "decided",
                snapshot: e
            } : x
        },
        $ = () => {
            I.forEach(e => {
                try {
                    e()
                } catch (e) {
                    re("Listener callback threw:", e)
                }
            })
        },
        j = new Map;

    function N(e, t) {
        let n = j.get(e);
        if (n)
            for (let e of n) try {
                e(t)
            } catch (e) {
                re("Event handler threw:", e)
            }
    }

    function C(e, t) {
        let n = j.get(e);
        return n || (n = new Set, j.set(e, n)), n.add(t), () => {
            n.delete(t)
        }
    }
    let O = "",
        E = () => {
            if (!a || "decided" !== M.decision) return;
            let {
                givenAt: e
            } = M.snapshot;
            if (e === O) return;
            let t = Date.parse(e) + 864e5 * a,
                n = (t - Date.now()) / 864e5;
            n > 0 && n <= c && (O = e, N("expiring", {
                expiresAt: t,
                daysRemaining: n,
                timestamp: Date.now()
            }))
        };
    w() && (D(), E());
    let J = null;
    w() && typeof BroadcastChannel < "u" && (J = new BroadcastChannel(`consentify:${n}`), J.onmessage = () => {
        D(), $(), E()
    });
    let U = e.adapter,
        _ = null,
        z = () => (_ || (_ = Be(e.visitorId).catch(e => (m("visitorId failed:", e), _ = null, ""))), _);

    function G(e) {
        return typeof e > "u" ? M : "necessary" === e || ("decided" === M.decision ? !!M.snapshot.choices[e] : "opt-out" === s)
    }
    U && w() && (async () => {
        try {
            let e = await z(),
                n = await U.load(e);
            if (!n || !F(n) || n.policy !== t || l(n.givenAt) || b()) return;
            let i = M;
            A(L(n)), D(), $(), N("change", {
                from: i,
                to: M,
                timestamp: Date.now()
            }), E(), J ? .postMessage(null)
        } catch (e) {
            m("adapter.load failed:", e)
        }
    })();
    let H = {
        get: G,
        set: e => {
            let n = M,
                i = b(),
                o = i ? i.choices : d(),
                r = {
                    policy: t,
                    givenAt: se(),
                    choices: d({ ...o,
                        ...e
                    })
                };
            ((e, t) => {
                let n = !(!e || JSON.stringify(e.choices) !== JSON.stringify(t.choices));
                return n || A(L(t)), !n
            })(i, r) && ((e => {
                M = {
                    decision: "decided",
                    snapshot: e
                }
            })(r), $(), N("change", {
                from: n,
                to: M,
                timestamp: Date.now()
            }), E(), J ? .postMessage(null), (e => {
                U && (async () => {
                    try {
                        let t = await z(),
                            n = p ? await ce(e, p) : ae(e);
                        await U.save({
                            visitorId: t,
                            snapshot: e,
                            proof: n
                        })
                    } catch (e) {
                        m("adapter.save failed:", e)
                    }
                })()
            })(r))
        },
        clear: () => {
            let e = "decided" === M.decision;
            for (let e of new Set([...r, "cookie"])) S(e);
            D(), O = "", e && ($(), N("clear", {
                timestamp: Date.now()
            }), J ? .postMessage(null))
        },
        subscribe: e => (I.add(e), () => I.delete(e)),
        getServerSnapshot: () => x,
        guard: (e, t, n) => {
            let i = "waiting",
                o = () => !0 === G(e),
                r = () => {
                    "waiting" === i && o() ? (t(), i = n ? "granted" : "done", "done" === i && a()) : "granted" === i && !o() && (n(), i = "done", a())
                },
                a = H.subscribe(r);
            return r(), () => {
                i = "done", a()
            }
        }
    };

    function V(e, t) {
        if ("string" == typeof t) return k.set(f(e), t);
        H.set(f(e))
    }
    let W = !1;
    return {
        policy: {
            categories: e.policy.categories,
            identifier: t
        },
        mode: s,
        server: k,
        client: H,
        get: function(e) {
            return "string" == typeof e ? k.get(e) : H.get()
        },
        isGranted: e => G(e),
        set: function(e, t) {
            if ("string" == typeof t) return k.set(e, t);
            H.set(e)
        },
        clear: function(e) {
            if ("string" == typeof e) return k.clear();
            H.clear()
        },
        acceptAll: function(e) {
            return V(!0, e)
        },
        rejectAll: function(e) {
            return V(!1, e)
        },
        getProof: function(e) {
            let t = "string" == typeof e ? k.get(e) : M;
            return "decided" !== t.decision ? p ? Promise.resolve(null) : null : (!p && !W && (W = !0, m("getProof uses FNV1a fallback; pass `secret` for HMAC-SHA256")), p ? ce(t.snapshot, p) : ae(t.snapshot))
        },
        subscribe: H.subscribe,
        getServerSnapshot: H.getServerSnapshot,
        guard: H.guard,
        on: C,
        once: function(e, t) {
            let n = C(e, e => {
                n(), t(e)
            });
            return n
        }
    }
}
const ze = 24 * $e * 60 * 60,
    Xe = e => Fe({
        policy: {
            identifier: "superside-cookie-policy-v1",
            categories: ["analytics", "advertisement"]
        },
        cookie: {
            name: e,
            maxAgeSec: ze,
            sameSite: "Lax",
            secure: !0,
            path: "/"
        },
        storage: ["cookie"]
    }),
    de = new Map,
    V = new Map,
    G = (e = ge) => {
        const t = de.get(e);
        if (t) return t;
        const n = Xe(e);
        return de.set(e, n), n
    },
    Ge = e => {
        const t = e ? ? ge,
            n = G(e).get();
        if ("decided" !== n.decision) return void V.delete(t);
        const {
            choices: i
        } = n.snapshot, o = !!i.analytics, r = !!i.advertisement, a = V.get(t);
        if (a ? .analytics === o && a.advertisement === r) return a;
        const s = {
            necessary: !0,
            analytics: o,
            advertisement: r
        };
        return V.set(t, s), s
    },
    Ye = e => ({
        necessary: !0,
        analytics: !e,
        advertisement: !e
    }),
    Ze = (e, t) => Ge(t) || Ye(e),
    qe = (e, t) => {
        G(t).set({
            analytics: e.analytics,
            advertisement: e.advertisement
        })
    },
    et = (e, t) => G(t).subscribe(e);
export {
    Ze as g, qe as p, Ge as r, et as s
};