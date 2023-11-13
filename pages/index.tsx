import React, { Fragment } from "react";
import Head from "next/head";
import Stories from "@/components/home/stories/stories";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>HeaL</title>
        <meta />
      </Head>
      {/* <Hero /> */}
      <Stories />
    </Fragment>
  );
};

export default HomePage;
