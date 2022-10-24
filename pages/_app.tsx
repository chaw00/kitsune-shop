import "../styles/globals.css";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import { useEffect, useRef } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import "../styles/swiper.css";
import client from "../services/apollo-client";
import { SOCIAL } from "../lib/api";

function MyApp({ Component, pageProps, socialMedia }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);
  return (
    <>
      <SideBar isOpen={open} toggle={toggle}></SideBar>
      <Header toggle={toggle}></Header>
      <Component {...pageProps} />
      <Footer socialMedia={socialMedia}></Footer>
    </>
  );
}
MyApp.getInitialProps = async (ctx) => {
  const social = await client.query({
    query: SOCIAL,
  });
  return {
    socialMedia:
      social.data.footerLinksCollection.items[0].footerLinksCollection.items,
  };
};

export default MyApp;
