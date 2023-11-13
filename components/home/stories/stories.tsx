import React, { Fragment } from "react";
import TopStories from "./topStories/topStories";
import TopPosts from "./topPosts/topPosts";
import Footer from "../footer/footer";

const Stories = () => {
  return (
    <Fragment>
      <TopStories />
      <TopPosts />
    </Fragment>
  );
};

export default Stories;
