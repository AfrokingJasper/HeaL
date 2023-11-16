import React, { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Section from "@/components/section/sections";

const PostSection = () => {
  const router = useRouter();

  const { slug } = router.query;
  console.log(slug);
  return (
    <Fragment>
      <Head>
        <title>{slug} - HeaL</title>
        <meta name="description" content="all posts tagged Love" />
      </Head>
      <Section title="Love" />
    </Fragment>
  );
};

export default PostSection;
