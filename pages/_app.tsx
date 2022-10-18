import "../styles/globals.css";
import styled from "styled-components";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);
  return (
    <>
      <SideBar isOpen={open} toggle={toggle}></SideBar>
      <Header toggle={toggle}></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
