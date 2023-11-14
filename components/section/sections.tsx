import React from "react";
import image from "../../public/heal-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import SectionsList from "./sectionsList";
import SectionCaptions from "./sectionCaptions";

type SectionProps = {
  title: string;
};

const Section = (props: SectionProps) => {
  return (
    <section className="text-primary min-h-[60vh]">
      {/* heading */}
      <div className="flex flex-col md:items-center w-full text-secondary mb-20">
        <p className="mr-20 md:mr-40">ALL POSTS TAGGED:</p>
        <h2 className="ml-20">{props.title}</h2>
      </div>

      {/* top posts */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:px-5 border-b-2 border-b-primary pb-5">
        {/* top post 1 */}
        <article className="flex flex-col items-center gap-3">
          <Image src={image} alt="broken pencil" width={500} height={500} />
          <div className="flex flex-col gap-3 items-center md:w-[90%] mx-auto font-bold">
            <h2>This is a Title</h2>
            <p className="px-3 md:px-10 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, impedit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit...
            </p>

            <div className="flex gap-3">
              <p className="uppercase text-secondary font-bold">
                fortune oliseyenum
              </p>
              <div className="flex gap-3 items-center">
                <span>Nov 5</span>
                <BiCommentDetail />
              </div>
            </div>
            <Link className="read" href="/">
              Read More...
            </Link>
          </div>
        </article>

        {/* top post 2 */}
        <article className="flex flex-col items-center gap-3">
          <Image src={image} alt="broken pencil" width={500} height={500} />
          <div className="flex flex-col gap-3 items-center md:w-[90%] mx-auto font-bold">
            <h2>This is a Title</h2>
            <p className="px-3 md:px-10 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, impedit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit...
            </p>

            <div className="flex  gap-3">
              <p className="uppercase text-secondary font-bold">
                fortune oliseyenum
              </p>
              <div className="flex gap-3 items-center">
                <span>Nov 5</span>
                <BiCommentDetail />
              </div>
            </div>
            <Link className="read" href="/">
              Read More...
            </Link>
          </div>
        </article>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-20">
        {/* section lists */}
        <ul className="flex flex-col lg:w-[60%] gap-10">
          <SectionsList />
          <SectionsList />
          <SectionsList />
        </ul>

        {/* section caption */}
        <ul className="flex flex-col gap-7 lg:w-[35%]">
          <SectionCaptions />
          <SectionCaptions />
        </ul>
      </div>
    </section>
  );
};

export default Section;
