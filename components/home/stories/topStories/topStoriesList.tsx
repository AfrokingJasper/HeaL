import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../../public/heal-1.jpg";
import { BiCommentDetail } from "react-icons/bi";

const TopStoriesList = () => {
  return (
    <li className="flex gap-4 md:gap-7 ">
      <span className="text-sm flex items-center justify-center w-5 h-5 bg-tertiary p-2 text-secondary font-bold rounded-full mt-2">
        1
      </span>
      <Link
        className="w-full flex gap-2 lg:gap-5 items-start justify-between pr-2 border-b"
        href="/hope/234"
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

export default TopStoriesList;
