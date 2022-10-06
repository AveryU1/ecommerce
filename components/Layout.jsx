import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  //children significa que estamos renderizando todos los elementos que envuelve layout en _app.js
  return (
    <div className="layout">
      <Head>
        <title>Avery Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
