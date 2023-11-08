import Hero from "@/components/home/hero";
import React, { Fragment } from "react";
import Head from "next/head";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>HeaL</title>
      </Head>
      <Hero />
    </Fragment>
  );
};

export default HomePage;
