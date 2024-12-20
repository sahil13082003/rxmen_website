"use client"; // Mark this as a client component

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle hamburger menu

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-4 px-6 flex items-center justify-between sticky top-0 z-50 bg-white">
      {/* Leftmost Section: Three lines (Hamburger menu) */}
      <div className="md:hidden flex items-center">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-white mb-2"></div>
          <div className="w-6 h-0.5 bg-white mb-2"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>

      {/* Middle Section: Logo */}
      <div className="flex-1 text-center">
        <img
          src="/Images/logo-blue.webp" // Update with your logo path
          alt="Logo"
          className="w-32 mx-auto"
        />
      </div>

      {/* Right Section: WhatsApp Icon with "Let's Talk" */}
      <div className="hidden md:flex items-center space-x-2 text-white">
        <button className="bg-white-500 text-black py-2 px-4 rounded">
          Let's Talk
        </button>
      </div>

      {/* Mobile Menu - This will only display on mobile */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-blue-800 p-4 transition-transform ${
          menuOpen ? "transform translate-y-0" : "transform translate-y-[-100%]"
        }`}
      >
        {/* Add your mobile menu options here */}
        <ul className="space-y-4">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
