import {
    a as m,
    u as l
} from "./atom.DydmvXa7.js";
import {
    j as n
} from "./js.cookie.CbilILek.js";

function u() {
    return {
        track(e, t) {
            window.dataLayer ? .push(Object.assign({
                event: e
            }, t))
        }
    }
}

function d() {
    return {
        track(e, t) {
            window.analytics ? window.analytics.track(e, t) : console.warn("Segment not loaded or window.analytics undefined")
        },
        identify(e, t) {
            window.analytics ? window.analytics.identify(e, t) : console.warn("Segment not loaded or window.analytics undefined")
        }
    }
}
const i = [],
    E = {
        track(e, t) {
            i.forEach(n => n.track(e, t))
        },
        identify(e, t) {
            i.forEach(n => n.identify ? .(e, t))
        }
    };
i.push(u()), i.push(d());
const f = m(E);

function R() {
    return l(f)
}
const g = {
        INTERNAL_PROGRESSIVE: "internal_progressive",
        INTERNAL_INLINE: "internal_inline",
        TYPEFORM_EMBED: "typeform_embed"
    },
    I = {
        FORM_SUBMISSION: "form.submitted",
        FORM_SUBMISSION_FAILURE: "form_submission.failed",
        CALL_REQUEST_START: "call_request.initiated",
        CALL_REQUEST_SCHEDULER_SHOWN: "call_request.scheduler_shown",
        CALL_REQUEST_FAILURE: "call_request.failed",
        CALL_REQUEST_CLOSED: "call_request.closed",
        CALL_REQUEST_SUBMISSION: "call_request.submitted",
        TYPEFORM_VIEWED: "typeform.viewed",
        TYPEFORM_STARTED: "typeform.started",
        TYPEFORM_QUESTION_CHANGED: "typeform.question_changed",
        TYPEFORM_SUBMITTED: "typeform.submitted"
    },
    p = {
        hubspotutk: n.get("hubspotutk"),
        ga_client_id: n.get("_ga"),
        ajs_anonymous_id: n.get("ajs_anonymous_id"),
        ajs_user_id: n.get("ajs_user_id")
    },
    w = e => {
        const {
            creativeName: t,
            creativeSlot: n,
            promotionName: i,
            promotionType: a,
            ecommerceItems: o
        } = e || {};
        return {
            creative_name: t,
            creative_slot: n,
            promotion_name: i,
            promotion_type: a,
            items: o ? .map(({
                itemName: e,
                itemIndex: t
            }) => ({
                item_name: e,
                index: t
            }))
        }
    },
    A = (e, t, i, a) => {
        const {
            form: o,
            form_type: r,
            item: s
        } = i || {}, _ = {
            event_id: e,
            user: { ...p
            },
            fbp: n.get("_fbp"),
            fbc: n.get("_fbc"),
            form_id: t,
            page_path: a
        };
        return o || r || s ? { ..._,
            ...i,
            item: s ? ? "empty"
        } : { ..._,
            form: "call_request",
            form_type: "call_request",
            item: "default"
        }
    };
export {
    g as F, I as T, p as a, A as b, w as g, R as u
};