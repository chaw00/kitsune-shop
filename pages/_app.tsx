import "../styles/globals.css";
import styled from "styled-components";
import Head from "next/head";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
