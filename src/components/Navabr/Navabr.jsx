import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-6 shadow-md bg-white relative z-50">

      {/* LOGO */}
      <div className="text-xl font-bold text-blue-600 ml-14">
        BarakatSpace
      </div>

      {/* DESKTOP MENU */}
      <ul className="items-center hidden gap-8 text-black md:flex">
        <li className="transition hover:text-blue-600">
          <Link to="/home">Home</Link>
        </li>

        <li className="transition cursor-pointer hover:text-blue-600">
          Websites
        </li>

        <li className="transition hover:text-blue-600">
          <Link to="/about">About Us</Link>
        </li>

        <li className="transition cursor-pointer hover:text-blue-600">
          Services
        </li>

        <li className="transition cursor-pointer hover:text-blue-600">
          Contact
        </li>
      </ul>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4">

        <button onClick={toggleDarkMode}>
          <MdDarkMode className="text-2xl" />
        </button>

        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-6 md:hidden">

          <Link to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <p>Websites</p>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <p>Services</p>
          <p>Contact</p>

        </div>
      )}

    </nav>
  );
};

export default Navbar;