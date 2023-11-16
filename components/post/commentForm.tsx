import React from "react";

const CommentForm = () => {
  return (
    <form className="flex flex-col gap-4 mt-10 self-center p-3 py-10 rounded-md shadow-lg w-full lg:w-[50%] md:min-w-[50vw]">
      <p className="text-center text-lg font-bold">Add a Comment</p>

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Your name</label>
        <input
          className="border-2 p-2 rounded-md"
          type="text"
          id="name"
          placeholder="please input your name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="comment">Your Comment</label>
        <textarea
          className="p-2"
          name="comment"
          cols={10}
          rows={6}
          placeholder="please add a comment"
        />
        {/* <input className="border-2 p-2 rounded-md" type="text" id="comment" /> */}
      </div>

      <button className="read">Post</button>
    </form>
  );
};

export default CommentForm;
