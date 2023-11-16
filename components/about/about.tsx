import React from "react";
import TheTeam from "./theTeam";

const About = () => {
  return (
    <section className="flex flex-col gap-5 min-h-[50vh] text-primary">
      <h2 className="text-center">About HeaL</h2>

      {/* about HeaL */}
      <div className="flex flex-col gap-5 p-5 lg:p-10 max-w-3xl shadow-lg rounded-md mx-auto md:text-lg">
        <p>
          HeaL is a haven of heartfelt expressions and soulful words. HeaL is
          more than just a blog; it's a sanctuary for the heart and mind, a
          place where emotions and thoughts intertwine to create a tapestry of
          life's experiences.
        </p>

        {/* our vision */}
        <div className="flex flex-col gap-2">
          <h4>Our Vision</h4>
          <p>
            At HeaL, we believe in the transformative power of words. Our
            mission is to inspire, uplift, and connect with you through the
            beauty of prose, poetry, and personal reflections. We embrace life
            in all its hues, celebrating the moments that bring joy, reflecting
            on those that bring sadness, and weaving stories of love and
            motivation into the fabric of our existence.
          </p>
        </div>

        {/* What We Share */}
        <div className="flex flex-col gap-2">
          <h4>What We Share</h4>
          <ul className="flex flex-col gap-2 pl-2 list-disc">
            <li>
              Motivation: Find your daily dose of inspiration as we share
              stories of resilience, strength, and the pursuit of dreams. Let
              our words be your guiding light in your journey toward
              self-improvement and personal growth.
            </li>
            <li>
              Love: Love is a universal language, and at HeaL, we explore its
              many facets. From the tender beginnings of new love to the
              enduring strength of lasting bonds, we celebrate the beauty and
              complexity of human connections.
            </li>
            <li>
              Poetry: Dive into the world of verse as our poets craft lines that
              speak to the depths of the heart. Experience the power of poetic
              expression as we unravel emotions through the magic of words.
            </li>
            <li>
              Sadness and Healing: Life isn't always a smooth ride, and we
              acknowledge the moments of sadness and introspection. Through our
              words, we hope to provide solace, understanding, and a path to
              healing for those who need it.
            </li>
          </ul>
        </div>

        {/* Join Us on the Journey */}
      </div>

      <h2 className="text-center mt-10">Meet The Team</h2>
      <TheTeam />

      <h2 className="text-center mt-10">Join Us on the Journey</h2>
      <div className="flex flex-col gap-5 p-5 rounded-md shadow-md max-w-4xl mx-auto md:text-lg">
        <p>
          HeaL is not just a blog; it's a shared journey of emotions,
          experiences, and self-discovery. We invite you to be a part of this
          enriching voyage, to explore the emotions that bind us all, and to
          find inspiration and comfort within the pages of HeaL.
        </p>
        <p>
          HeaL is not just a blog; it's a shared journey of emotions,
          experiences, and self-discovery. We invite you to be a part of this
          enriching voyage, to explore the emotions that bind us all, and to
          find inspiration and comfort within the pages of HeaL.
        </p>
        <p>
          Thank you for being here with us. Let's embark on this beautiful
          journey together.
        </p>
        <p className="flex flex-col">
          <span>With love and words,</span>
          <span>The HeaL Team</span>
        </p>
      </div>
    </section>
  );
};

export default About;
