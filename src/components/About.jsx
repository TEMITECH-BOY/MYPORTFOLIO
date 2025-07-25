import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 px-4">
      <h3 className="text-3xl text-center font-semibold mb-8">About Me</h3>
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-gray-700 dark:text-gray-300">
        <img
          src="/temipix.jpg"
          alt="Temitayo Osunla"
          className="rounded-full w-50 h-50 md:w-60 md:h-60 object-contain"
        />
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-300">
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

