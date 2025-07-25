import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-teal-500 to-teal-400 text-white">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Frontend Developer
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        React & Tailwind Enthusiast crafting responsive web experiences
      </p>
      <a
        href="#contact"
        className="bg-white text-teal-500 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
      >
        Hire Me
      </a>
    </section>
  );
}

