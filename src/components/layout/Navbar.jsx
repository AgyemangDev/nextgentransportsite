"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookRide = () => {
    navigate("/booking");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#00205B] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">NextGen Transport</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#00307A]"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#00307A]"
            >
              Contact Us
            </Link>
            <Link
              to="/my-tickets"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#00307A]"
            >
              My Tickets
            </Link>
            <Link
              to="/terms"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#00307A]"
            >
              Terms & Conditions
            </Link>
            <button
              onClick={handleBookRide}
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-white text-[#00205B] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Book Ride
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#00307A] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#00205B]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#00307A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#00307A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/my-tickets"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#00307A]"
              onClick={() => setIsMenuOpen(false)}
            >
              My Tickets
            </Link>
            <Link
              to="/terms"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#00307A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
            <button
              onClick={handleBookRide}
              className="w-full mt-2 px-4 py-2 rounded-md text-base font-medium bg-white text-[#00205B] hover:bg-gray-100 focus:outline-none"
            >
              Book Ride
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-[#00307A]">
            <div className="flex items-center px-5">
              <Phone size={20} className="mr-2" />
              <span className="text-sm">Call us: +233 123 456 789</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
