import React from "react";

const PostComment = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 self-center p-3 py-10  rounded-md shadow-lg min-w-[50vw]">
      <p className="text-lg font-bold text-center">Comments</p>

      {/* comments list */}
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col gap-1 rounded-md bg-gray-300 p-2 bg-opacity-20">
          <em className="text-secondary capitalize">destiny:</em>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            illo.
          </p>
        </li>
        <li className="flex flex-col gap-1 rounded-md bg-gray-300 p-2 bg-opacity-20">
          <em className="text-secondary capitalize">fortune:</em>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            illo.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PostComment;
