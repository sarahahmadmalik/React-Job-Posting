import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <NavLink to="/" className="footer-logo-container">
              <img className="footer-logo" src={logo} alt="React Jobs" />
              <span className="footer-logo-text">
                React Jobs
              </span>
            </NavLink>
            <p className="footer-tagline">
              Empowering developers to find their dream jobs.
            </p>
          </div>

          <div className="footer-nav">
            <nav className="footer-nav-links">
              <NavLink
                to="/about"
                className="footer-nav-link"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="footer-nav-link"
              >
                Contact
              </NavLink>
              <NavLink
                to="/privacy"
                className="footer-nav-link"
              >
                Privacy Policy
              </NavLink>
            </nav>
          </div>

          <div className="footer-right">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} React Jobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;