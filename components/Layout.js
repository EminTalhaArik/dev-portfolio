import Head from "next/head";
import React from "react";

import Header from "./Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Portfolio"></meta>
        <meta property="og:description" content={description}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-primary-light antialiased font-montserrat relative z-10 px-3 overflow-hidden dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
