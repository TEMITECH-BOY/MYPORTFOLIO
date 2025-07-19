import React, { useState } from "react";
import { Sun, Moon, Github, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-teal-500 text-white">
      <h1 className="text-xl font-bold">Temitayo Osunla</h1>
      <div className="flex items-center space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
