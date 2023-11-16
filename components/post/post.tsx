import React, { useState } from "react";
import Image from "next/image";
import image from "../../public/heal-1.jpg";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useRouter } from "next/router";
import Link from "next/link";
import PostComment from "./postComment";
import CommentForm from "./commentForm";

const PostDetails = () => {
  const [showComp, setShowComp] = useState("comments");
  const router = useRouter();
  const { slug, postId } = router.query;

  const poem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum
  recusandae esse deleniti ut, nam voluptatibus? Illo et doloremque

  tempore voluptatem rem ipsa placeat, ad harum eveniet officiis
  perferendis saepe optio dolorem iure omnis vero consequatur debitis

  eos eius quidem animi exercitationem. A modi facilis ea ut.
  Doloremque, perspiciatis blanditiis.
  
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum
  recusandae esse deleniti ut, nam voluptatibus? Illo et doloremque

  tempore voluptatem rem ipsa placeat, ad harum eveniet officiis
  perferendis saepe optio dolorem iure omnis vero consequatur debitis

  eos eius quidem animi exercitationem. A modi facilis ea ut.
  Doloremque, perspiciatis blanditiis.
  
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum
  recusandae esse deleniti ut, nam voluptatibus? Illo et doloremque

  tempore voluptatem rem ipsa placeat, ad harum eveniet officiis
  perferendis saepe optio dolorem iure omnis vero consequatur debitis

  eos eius quidem animi exercitationem. A modi facilis ea ut.
  Doloremque, perspiciatis blanditiis.`;

  // console.log(slug, postId);

  return (
    <section className="flex flex-col text-primary min-h-[60vh] lg:px-20">
      <p className="uppercase font-bold text-secondary mb-3">{slug}</p>

      <article className="flex flex-col gap-4">
        {/* content title */}
        <h2>This is a title</h2>
        <div className="flex items-center lg:items-stretch flex-col-reverse lg:flex-row gap-3">
          {/* content-image */}
          <Image src={image} alt="broken pencil" width={500} height={500} />
          <div className="flex flex-col gap-2 justify-between lg:px-5">
            <p className="text-xl md:text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              similique.
            </p>

            <div className="flex flex-col gap-2">
              <p>
                Lorem <strong className="text-secondary">ipsum dolor</strong>{" "}
                sit, amet consectetur adipisicing elit. Molestiae, repellat?
              </p>
              <span>Nov 12 2013</span>
              <div className="flex items-center gap-3 text-secondary text-xl">
                <a
                  href=""
                  className=" bg-gray-300 bg-opacity-50 rounded-md p-2"
                >
                  <FaTwitter />
                </a>
                <a
                  href=""
                  className=" bg-gray-300 bg-opacity-50 rounded-md p-2"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  className="inline-block bg-gray-300 bg-opacity-50 rounded-md p-2"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* main content */}
        <p className="whitespace-pre-line self-center mt-5 p-5 md:p-10 lg:p-20 rounded-md shadow-lg">
          {poem}
        </p>
      </article>

      {/* show comment button */}
      <div className="flex gap-5 self-center">
        <button onClick={() => setShowComp("comments")} className="mt-10 read">
          Show comment
        </button>
        <button
          onClick={() => setShowComp("comment-form")}
          className="mt-10 read"
        >
          Add comment
        </button>
      </div>
      {showComp === "comment-form" && <CommentForm />}
      {showComp === "comments" && <PostComment />}
    </section>
  );
};

export default PostDetails;
