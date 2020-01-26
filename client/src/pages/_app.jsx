import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

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
      <div className="spacer" />
      <Footer />
      <style jsx global>{`
        * {
          font-family: Roboto;
        }
        html,
        body,
        #__next {
          margin: 0;
          min-height: 100vh;
        }
        .spacer {
          flex: 1;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default App;
