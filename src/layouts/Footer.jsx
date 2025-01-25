import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom w-full bottom-0 z-40 bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <NavLink to="/" className="flex-shrink-0 flex items-center justify-center sm:justify-start">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className=" text-white text-xl md:text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <p className="text-sm mt-6">
              Empowering developers to find their dream jobs.
            </p>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="text-center my-4">
            <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
              <NavLink
                to="/about"
                className="text-sm hover:text-white transition"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-sm hover:text-white transition"
              >
                Contact
              </NavLink>
              <NavLink
                to="/privacy"
                className="text-sm hover:text-white transition"
              >
                Privacy Policy
              </NavLink>
            </nav>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} React Jobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
