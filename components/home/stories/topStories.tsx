import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/heal-1.jpg";

const TopStories = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-between mb-10">
      <div className="flex flex-col w-[100%] lg:w-[48%] shadow-xl text-center gap-2 rounded-md bg-[var(--primary-color)]">
        <Image
          className="rounded-md w-[100%]"
          src={image}
          width={600}
          height={600}
          alt="test image"
        />
        <div className="flex flex-col gap-2 px-2">
          <h2>This is a title</h2>
          <p className="md:text-xl mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            quaerat?
          </p>
        </div>
      </div>
      <div className="w-[100%] lg:w-[45%] bg-[var(--primary-color)] h-auto">
        <h4 className="px-10 text-[var(--secondary-color)]">Top stories</h4>

        {/* top story list */}
        <ul className="px-2 py-4">
          <li className="flex gap-7">
            <span>1</span>
            <Link
              className="w-full flex lg:gap-5 justify-between pr-2"
              href="/"
            >
              <div className="flex flex-col gap-3">
                <h4 className="text-lg md:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, libero.
                </h4>
                <div className="flex gap-1 md:gap-5">
                  <p className="uppercase text-[var(--secondary-color)] font-bold">
                    fortune oliseyenum
                  </p>
                  <span>Nov 5</span>
                  <span>comment</span>
                </div>
              </div>
              <Image
                className="h-24"
                src={image}
                width={100}
                height={100}
                alt="test image"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopStories;
