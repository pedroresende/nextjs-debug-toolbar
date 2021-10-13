import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import VercelSVG from "./vercel-svg";
import "./global.css";

const getStatus = (pageProps: any) =>
  pageProps?.statusCode >= 400 ? pageProps.statusCode : 200;

const getStatusColor = (pageProps: any) =>
  pageProps?.statusCode >= 400 ? "bg-red-600" : "bg-green-600";

const VercelDebugToolbar = ({ router, pageProps }) => {
  const [loadTime, setLoadTime] = useState<number>(0);

  useEffect(() => {
    setLoadTime(
      window?.performance?.timing?.domContentLoadedEventEnd -
        window.performance?.timing?.navigationStart
    );
  }, []);

  return (
    <footer className="bg-black text-white text-sm w-full fixed bottom-0 z-50 shadow-xl flex items-stretch">
      <div className="border-r px-6 py-3 flex items-center ">
        <VercelSVG />
        Debug Toolbar
      </div>
      <div className={`border-r px-6 py-3 ` + getStatusColor(pageProps)}>
        Status = {getStatus(pageProps)}
      </div>
      <div className="border-r px-6 py-3">Path = {router?.asPath}</div>
      <div className="border-r px-6 py-3">Pathname = {router?.pathname}</div>
      <div className="border-r px-6 py-3">Loadtime = {loadTime} ms</div>
    </footer>
  );
};

export default withRouter(VercelDebugToolbar);
