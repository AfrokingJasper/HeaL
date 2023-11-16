import React from "react";
import image from "../../public/heal-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";

const SectionsList = () => {
  return (
    <li className="flex flex-col lg:flex-row gap-4 md:gap-7">
      <Link
        className="w-full flex gap-2 lg:gap-5 items-start pr-2 border-b pb-3"
        href="/depression/345"
      >
        <Image
          className="h-20 md:h-40 w-20 md:w-40"
          src={image}
          width={100}
          height={100}
          alt="test image"
        />
        <div className="flex flex-col  gap-1 mb-2">
          <h4 className="text-[0.95rem] md:text-2xl -mt-2 hover:underline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <div className="flex flex-col gap-1">
            <p className="uppercase text-secondary font-bold">
              fortune oliseyenum
            </p>
            <div className="flex gap-3 items-center">
              <span>Nov 5</span>
              <BiCommentDetail />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SectionsList;
