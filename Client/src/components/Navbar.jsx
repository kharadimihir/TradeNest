import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-gray-200 border-[1px] py-6 px-6 md:px-20 w-full fixed top-0 left-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Zerodha Logo" className="h-6" />
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-9">
            <a href="#" className="text-gray-900 hover:text-gray-500 text-sm font-medium">Signup</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 text-sm font-medium">About</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 text-sm font-medium">Products</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 text-sm font-medium">Pricing</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 text-sm font-medium">Support</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button className="text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Margin below navbar */}
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
