import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import VercelSVG from "./vercel-svg";
import "./global.css";
var getStatus = function (pageProps) {
    return (pageProps === null || pageProps === void 0 ? void 0 : pageProps.statusCode) >= 400 ? pageProps.statusCode : 200;
};
var getStatusColor = function (pageProps) {
    return (pageProps === null || pageProps === void 0 ? void 0 : pageProps.statusCode) >= 400 ? "bg-red-600" : "bg-green-600";
};
var VercelDebugToolbar = function (_a) {
    var router = _a.router, pageProps = _a.pageProps;
    var _b = useState(0), loadTime = _b[0], setLoadTime = _b[1];
    useEffect(function () {
        var _a, _b, _c, _d;
        setLoadTime(((_b = (_a = window === null || window === void 0 ? void 0 : window.performance) === null || _a === void 0 ? void 0 : _a.timing) === null || _b === void 0 ? void 0 : _b.domContentLoadedEventEnd) -
            ((_d = (_c = window.performance) === null || _c === void 0 ? void 0 : _c.timing) === null || _d === void 0 ? void 0 : _d.navigationStart));
    }, []);
    return (React.createElement("footer", { className: "bg-black text-white text-sm w-full fixed bottom-0 z-50 shadow-xl flex items-stretch" },
        React.createElement("div", { className: "border-r px-6 py-3 flex items-center " },
            React.createElement(VercelSVG, null),
            "Debug Toolbar"),
        React.createElement("div", { className: "border-r px-6 py-3 " + getStatusColor(pageProps) },
            "Status = ",
            getStatus(pageProps)),
        React.createElement("div", { className: "border-r px-6 py-3" },
            "Path = ", router === null || router === void 0 ? void 0 :
            router.asPath),
        React.createElement("div", { className: "border-r px-6 py-3" },
            "Pathname = ", router === null || router === void 0 ? void 0 :
            router.pathname),
        React.createElement("div", { className: "border-r px-6 py-3" },
            "Loadtime = ",
            loadTime,
            " ms")));
};
export default withRouter(VercelDebugToolbar);
