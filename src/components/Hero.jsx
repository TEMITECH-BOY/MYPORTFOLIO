import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-teal-500 to-teal-400 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Frontend Developer
      </h2>
      <p className="text-lg md:text-xl mb-6">React & Tailwind Enthusiast</p>
      <a
        href="#contact"
        className="bg-white text-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Hire Me
      </a>
    </section>
  );
}
