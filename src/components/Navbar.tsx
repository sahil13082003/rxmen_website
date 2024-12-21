"use client"; // Mark this as a client component
import Image from 'next/image';

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-4 px-6 flex items-center justify-between sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <div
          className="cursor-pointer flex flex-col justify-between items-center w-8 h-8 relative"
          onClick={toggleMenu}
        >
          {/* Top Bar */}
          <div
            className={`absolute w-8 h-1 bg-blue-600 transition-transform duration-300 transform ${
              menuOpen ? "rotate-45 top-1/2 translate-y-[-50%]" : "top-0"
            }`}
          ></div>

          {/* Middle Bar */}
          <div
            className={`absolute w-8 h-1 bg-blue-600 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100 top-1/2 -translate-y-1/2"
            }`}
          ></div>

          {/* Bottom Bar */}
          <div
            className={`absolute w-8 h-1 bg-blue-600 transition-transform duration-300 transform ${
              menuOpen ? "-rotate-45 top-1/2 translate-y-[-50%]" : "bottom-0"
            }`}
          ></div>
        </div>
      </div>

      <div className="flex-1 text-center">
        {/* Update logo to use next/image */}
        <Image
          src="/Images/logo-blue.webp" // Update with your logo path
          alt="Logo"
          width={128} // Adjust dimensions
          height={32}
          className="w-32 mx-auto"
        />
      </div>

      <div className="hidden md:flex items-center space-x-2 text-white">
        <button className="bg-white-500 text-black py-2 px-4 rounded">
          Let&apos;s Talk
        </button>
      </div>

      {/* Mobile Menu - This will only display on mobile */}
      <div
        className={`absolute top-14 left-0 w-72 bg-white p-4 transition-transform ease-in-out duration-500 ${
          menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="space-y-4">
          {/* Link Items */}
          <li className="text-black cursor-pointer">
            <a href="http://localhost:3000/sexologist-near-me">Sexologist Near Me</a>
          </li>
          <li className="text-black cursor-pointer">
            <a href="http://localhost:3000/sex-therapy-in-bangalore">
              Sex Therapy in Bangalore
            </a>
          </li>
          <li className="text-black cursor-pointer">
            <a href="http://localhost:3000/sexologist-in-pune">Sexologist in Pune</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
