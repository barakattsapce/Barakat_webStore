import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="w-full h-[10vh] text-black flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold text-blue-600">BarakatSpace</div>
      <ul className="hidden md:flex gap-6 text-black">
        <li className="hover:border-b-2 border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer">Home</li>
        <li className="hover:border-b-2 border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer">Websites</li>
        <li className="hover:border-b-2 border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer">About Us</li>
        <li className="hover:border-b-2 border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer">Services</li>
        <li className="hover:border-b-2 border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center gap-4 mr-4">
        <button
          onClick={toggleDarkMode}
          className="text-xl"
          aria-label="Dark Mode"
        >
          <MdDarkMode className="mr-20 text-2xl"/>
        </button>

        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-[200px] h-full flex flex-col items-left gap-5 py-4 px-4 md:hidden bg-white shadow-md z-50">
          <p className="hover:text-blue-600 cursor-pointer">Home</p>
          <p className="hover:text-blue-600 cursor-pointer">Websites</p>
          <p className="hover:text-blue-600 cursor-pointer">About Us</p>
          <p className="hover:text-blue-600 cursor-pointer">Services</p>
          <p className="hover:text-blue-600 cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;