import React from "react";
import Head from "next/head";
import Header from "../components/header";

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          font-family: Roboto;
        }
        html,
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default App;
