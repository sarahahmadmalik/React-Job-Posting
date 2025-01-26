import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import './styles/Header.css';

const Header = ({ isMobile, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <NavLink to="/" className="header-logo-container">
            <img className="header-logo" src={logo} alt="React Jobs" />
            <span className="header-logo-text">
              React Jobs
            </span>
          </NavLink>
          {isMobile && (
            <button
              className="mobile-menu-button"
              onClick={toggleSidebar}
            >
              <FaBars className="mobile-menu-icon" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;