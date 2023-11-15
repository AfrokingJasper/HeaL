import React from "react";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
import image from "../../../../public/heal-1.jpg";
import TopStoriesList from "../topStories/topStoriesList";

const TopPosts = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-between mb-20 text-primary">
      {/* top popular */}
      <div className="flex relative flex-col w-[100%] lg:w-[48%] gap-5 rounded-md">
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 bg-primary rounded-full"></span>
          <h4 className=" text-secondary">Top Popular</h4>
        </div>

        <div className="px-2 py-2">
          <Link
            className="w-full flex gap-2 lg:gap-5 items-start justify-between pr-2 border-b border-b-primary"
            href="/love/12"
          >
            <Image
              className="h-20 w-20"
              src={image}
              width={100}
              height={100}
              alt="test image"
            />
            <div className="flex flex-col  gap-1 mb-2">
              <h4 className="text-[0.95rem] md:text-xl -mt-2 hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <div className="flex flex-col gap-1">
                <p className="uppercase  text-secondary font-bold">
                  fortune oliseyenum
                </p>
                <div className="flex gap-3 items-center">
                  <span>Nov 5</span>
                  <BiCommentDetail />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-primary rounded-full"></span>
            <h4 className=" text-secondary">Caption</h4>
          </div>

          {/* caption */}
          <p className=" md:text-lg px-3 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus rerum perspiciatis, praesentium officiis esse ipsum?
            Dolor doloremque omnis sit nihil suscipit ea quas nesciunt sapiente
            quo sequi, quod natus libero?
          </p>
        </div>
      </div>

      {/* top popular list */}
      <div className="w-[100%] lg:w-[45%] bg-primary h-auto rounded-md py-4 text-tertiary">
        <h4 className="px-10 text-secondary">Top Popular</h4>
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

export default TopPosts;
