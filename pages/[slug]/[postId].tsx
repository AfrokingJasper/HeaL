import React, { Fragment } from "react";
import Head from "next/head";
import PostDetails from "../../components/post/post";

const PostDetailsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          similique.
        </title>
        <meta
          name="description"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          similique."
        />
      </Head>
      <PostDetails />
    </Fragment>
  );
};

export default PostDetailsPage;
