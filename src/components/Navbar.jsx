import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
 
  const [menuOpen, setMenuOpen] = useState(false);

  

 

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-teal-500 dark:bg-gray-900 text-white dark:text-gray-100 shadow-md">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Temitayo Osunla</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="/cv.docx"
            download
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Download CV
          </a>
         
        </nav>

        {/* Mobile: hamburger & toggle */}
        <div className="md:hidden flex items-center space-x-2">
          
          <button onClick={toggleMenu} className="p-2 rounded hover:bg-teal-600">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-teal-600 dark:bg-gray-800 flex flex-col space-y-2 px-4 pb-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="/cv.docx"
            download
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded transition"
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
