import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom"; // اضافه کردن Link برای روتینگ

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="w-full h-[10vh] text-black flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold text-blue-600">BarakatSpace</div>
      
      <ul className="hidden gap-6 text-black md:flex">
        <li className="transition duration-300 border-blue-600 cursor-pointer hover:border-b-2 hover:text-blue-600">
          <Link to="/home">Home</Link>
        </li>
        <li className="transition duration-300 border-blue-600 cursor-pointer hover:border-b-2 hover:text-blue-600">Websites</li>
        <li className="transition duration-300 border-blue-600 cursor-pointer hover:border-b-2 hover:text-blue-600">
          <Link to="/about">About Us</Link>
        </li>
        <li className="transition duration-300 border-blue-600 cursor-pointer hover:border-b-2 hover:text-blue-600">Services</li>
        <li className="transition duration-300 border-blue-600 cursor-pointer hover:border-b-2 hover:text-blue-600">Contact</li>
      </ul>

      <div className="flex items-center gap-4 mr-4">
        <button
          onClick={toggleDarkMode}
          className="text-xl"
          aria-label="Dark Mode"
        >
          <MdDarkMode className="text-2xl"/>
        </button>

        <button
          className="text-xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-[200px] h-full flex flex-col items-left gap-5 py-4 px-4 md:hidden bg-white shadow-md z-50">
          <Link to="/home" className="cursor-pointer hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <p className="cursor-pointer hover:text-blue-600">Websites</p>
          <Link to="/about" className="cursor-pointer hover:text-blue-600" onClick={() => setMenuOpen(false)}>About Us</Link>
          <p className="cursor-pointer hover:text-blue-600">Services</p>
          <p className="cursor-pointer hover:text-blue-600">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;