import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import Navbar from "@/components/nav";
const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-[#191b1f] sticky top-0 z-30 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Edge FX Logo"
                className="h-30 md:h-30 w-60 md:w-60 lg:w-72 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="bg-brand text-white px-5 py-2 rounded-lg font-bold shadow hover:bg-brand-light transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-brand text-white px-4 py-2 mt-2 rounded-lg font-bold text-center"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;