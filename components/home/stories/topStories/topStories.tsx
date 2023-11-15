import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../../public/heal-1.jpg";
import TopStoriesList from "./topStoriesList";

const TopStories = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-between mb-20">
      <div className="flex relative flex-col w-[100%] lg:w-[48%] text-center gap-2 rounded-md bg-primary">
        <h1 className=" absolute text-secondary -top-7 right-0 shadow-lg shadow-secondary">
          TOP FAVORITE
        </h1>
        <Image
          className="rounded-md w-[100%]"
          src={image}
          width={600}
          height={600}
          alt="test image"
        />
        <div className="flex flex-col gap-2 px-2">
          <h2 className="uppercase">This is a title</h2>
          <p className="md:text-xl mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            quaerat?
          </p>
          <Link href="/depression/12" className="read">
            Read More..
          </Link>
        </div>
      </div>
      <div className="w-[100%] lg:w-[45%] bg-primary h-auto rounded-md py-4">
        <h4 className="px-10 text-secondary">Top stories</h4>

        {/* top story list */}
        <ul className="flex flex-col gap-4 px-2 py-4">
          <TopStoriesList />
          <TopStoriesList />
          <TopStoriesList />
          <TopStoriesList />
        </ul>
      </div>
    </section>
  );
};

export default TopStories;
