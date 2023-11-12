import React from "react";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
import image from "../../../../public/heal-1.jpg";

const TopPosts = () => {
  return (
    <section className=" text-[var(--primary-color)]">
      {/* top popular */}
      <div className="flex relative flex-col w-[100%] lg:w-[48%] gap-5 rounded-md">
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 bg-gray-800 rounded-full"></span>
          <h4 className="text-[var(--secondary-color)]">Top Popular</h4>
        </div>

        <div className="px-2 py-2">
          <Link
            className="w-full flex gap-2 lg:gap-5 items-start justify-between pr-2 border-b border-b-[var(--primary-color)]"
            href="/"
          >
            <Image
              className="h-20 w-20"
              src={image}
              width={100}
              height={100}
              alt="test image"
            />
            <div className="flex flex-col  gap-1 mb-2">
              <h4 className="text-[0.9rem] md:text-xl -mt-2 hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <div className="flex flex-col gap-1">
                <p className="uppercase text-[var(--secondary-color)] font-bold">
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
      </div>
    </section>
  );
};

export default TopPosts;
