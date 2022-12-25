import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Particle from "./Particle";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title ? title + " - Alphfxtrading" : "Alphafxtrading"} </title>
        <meta name="description" content="Crypto Investment Website" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="//code.tidio.co/iydw0bnkbu3vmr8n30vkhmuejbhscnp6.js"
          async
        ></script>
      </Head>

      <div className="flex flex-col justify-between  z-50 relative ">
        <Nav />

        {children}

        <footer className="absolute bottom-0 right-0 left-0 top-[100%] mt-[100vp]z-50">
          <Footer></Footer>
        </footer>
      </div>
      <Particle />
    </>
  );
};

export default Layout;
