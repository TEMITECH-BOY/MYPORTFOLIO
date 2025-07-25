import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 px-4">
      <h3 className="text-3xl text-center font-semibold mb-4">About Me</h3>
      <div className=" flex flex-row item-center align-center justify-around gap-8 text-gray-700 dark:text-gray-300 mb-6">
        <img
          src="/temipix.jpg"
          alt="Temitayo Osunla"
          className="rounded-full w-70 h-70 mx-auto mb-4"
        />

        <div className=" w-full h-70  flex flex-col ">
          <p className="text-gray-600 dark:text-gray-300 mt-26">
            Hi, I'm Temitayo — a frontend developer passionate about building
            responsive, user-friendly web applications. My toolkit includes
            React, JavaScript, Tailwind CSS, Bootstrap, and HTML5. I love
            transforming ideas into beautiful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
