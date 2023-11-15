import React, { Fragment } from "react";
import Head from "next/head";
import Stories from "@/components/home/stories/stories";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to HeaL</title>
        <meta
          name="description"
          content="A Haven Of Heartfelt Expressions And Soulful Words"
        />
      </Head>
      <Stories />
    </Fragment>
  );
};

export default HomePage;
