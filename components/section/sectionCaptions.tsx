import React from "react";
import Link from "next/link";

const SectionCaptions = () => {
  return (
    <li>
      <Link className="lg:w-[35%]" href="/">
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
      </Link>
    </li>
  );
};

export default SectionCaptions;
