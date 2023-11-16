import React from "react";
import Image from "next/image";
import image from "../../public/heal-1.jpg";

const TheTeam = () => {
  return (
    <ul className="grid grid-cols-1 gap-10 lg:gap-5 lg:grid-cols-3 md:max-w-7xl mx-auto md:text-lg p-5 rounded-md bg-gray-200 bg-opacity-25">
      <li>
        <article className="flex flex-col gap-2 items-center justify-center">
          <Image
            className="rounded-full w-60 h-60"
            src={image}
            alt="the team"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-2 ">
            <p>
              <strong>Name:</strong> Fortune Oliseyenum
            </p>
            <p>
              <strong>Role:</strong> Frontend Developer, part-time Content
              writer
            </p>

            <p>
              <strong>About:</strong> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dignissimos vel minima recusandae, nam
              laudantium nemo.
            </p>
          </div>
        </article>
      </li>
      <li>
        <article className="flex flex-col gap-2 items-center justify-center">
          <Image
            className="rounded-full w-60 h-60"
            src={image}
            alt="the team"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-2 ">
            <p>
              <strong>Name:</strong> Fortune Oliseyenum
            </p>
            <p>
              <strong>Role:</strong> Frontend Developer, part-time Content
              writer
            </p>

            <p>
              <strong>About:</strong> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dignissimos vel minima recusandae, nam
              laudantium nemo.
            </p>
          </div>
        </article>
      </li>
      <li>
        <article className="flex flex-col gap-2 items-center justify-center">
          <Image
            className="rounded-full w-60 h-60"
            src={image}
            alt="the team"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-2 ">
            <p>
              <strong>Name:</strong> Fortune Oliseyenum
            </p>
            <p>
              <strong>Role:</strong> Frontend Developer, part-time Content
              writer
            </p>

            <p>
              <strong>About:</strong> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dignissimos vel minima recusandae, nam
              laudantium nemo.
            </p>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default TheTeam;
