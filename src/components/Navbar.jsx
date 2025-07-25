import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    if (saved) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-teal-500 text-white dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-bold">Temitayo Osunla</h1>
      <nav className="flex items-center space-x-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a
  href="/cv.docx"
  download
  className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition"
>
  Download CV
</a>

       
      </nav>
    </header>
  );
}
