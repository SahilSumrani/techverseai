import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
var canonicalHost = "www.techverseai.in";
function canonicalRedirect(req, res, next) {
    var host = String(req.headers.host || "").split(":")[0].toLowerCase();
    var protocol = String(req.headers["x-forwarded-proto"] || "http").split(",")[0].trim();
    var nonCanonicalHost = host === "techverseai.in" || host === "techverseai.tech" || host === "www.techverseai.tech";
    if (nonCanonicalHost || (host === canonicalHost && protocol !== "https")) {
        res.statusCode = 301;
        res.setHeader("Location", "https://".concat(canonicalHost).concat(req.url || "/"));
        res.end();
        return;
    }
    var requestUrl = req.url || "/";
    var path = requestUrl.split("?")[0];
    if (["/prebuilt", "/customized", "/contact", "/terms", "/about-us", "/privacy", "/refund", "/website-development-company-delhi", "/website-development-cost-delhi", "/mobile-app-development-company-delhi", "/shopify-development-company-delhi", "/flutter-app-development-company-india", "/ai-chatbot-development-company-india", "/saas-development-company-india", "/app-development-cost-india"].includes(path)) {
        req.url = "".concat(path, "/").concat(requestUrl.slice(path.length));
    }
    next();
}
export default defineConfig({
    base: "/",
    server: { allowedHosts: [".techverseai.in", ".techverseai.tech"] },
    preview: { allowedHosts: [".techverseai.in", ".techverseai.tech"] },
    plugins: [
        react(),
        {
            name: "canonical-domain-preview-redirect",
            configureServer: function (server) { server.middlewares.use(canonicalRedirect); },
            configurePreviewServer: function (server) { server.middlewares.use(canonicalRedirect); },
        },
        {
            name: "non-render-blocking-css",
            transformIndexHtml: function (html) {
                return html.replace(/<link rel="stylesheet" (.*?)href="(.*?\.css)"(.*?)>/g, '<link rel="preload" href="$2" as="style" $1$3 onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$2" $1$3></noscript>');
            },
        },
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
