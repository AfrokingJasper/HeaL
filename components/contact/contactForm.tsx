import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
// import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_vrw02w9",
  //       "template_y18zmnf",
  //       form.current,
  //       "ZdCVY39F4HA6NW290"
  //     )
  //     .then(
  //       (result) => {
  //         alert("message sucesfully sent");
  //       },
  //       (error) => {
  //         alert("An error occurred! Please try again");
  //       }
  //     );
  //   e.target.reset();
  // };
  return (
    <section className=" flex flex-col gap-5 text-primary">
      <div className="text-center">
        <h5>Get in Touch</h5>
        <h2>Contact Us</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between bg-gray-200 bg-opacity-40 p-5 rounded-md">
        <div className="flex flex-col gap-5 lg:w-[40%] p-5 shadow-md">
          <article className="flex flex-col items-center gap-1">
            <AiOutlineMail className="text-secondary text-lg font-bold" />
            <h4>Email</h4>
            <h5>fortuneoliseyenum12@gmail.com</h5>
            <a
              className="read"
              href="mailto:fortuneoliseyenum12@gmail.com"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="flex flex-col items-center gap-1">
            <AiFillTwitterSquare className="text-secondary text-lg font-bold" />
            <h4>Twitter</h4>
            <h5>fortune oliseyenum</h5>
            <a
              className="read"
              href="https://twitter.com/TheLightHouseT5"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="flex flex-col items-center gap-1">
            <BsWhatsapp className="text-secondary text-lg font-bold" />
            <h4>Whatsapp</h4>
            <h5>+2349060955362</h5>
            <a
              className="read"
              href="https://api.whatsapp.com/send?phone=2349060955362"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5 lg:w-[50%] md:text-lg shadow-md p-5">
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="email">
              Your Email
            </label>
            <input
              className="p-2 rounded-md"
              type="email"
              id="email"
              placeholder="Please enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="message">
              Your Email
            </label>
            <textarea
              className="p-2 rounded-md"
              id="message"
              cols={5}
              rows={6}
            />
          </div>

          <button className="read mt-auto">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
