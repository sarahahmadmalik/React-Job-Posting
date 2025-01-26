import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './styles/Sidebar.css';

const Sidebar = ({ isMobile, isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    isActive 
      ? "sidebar-link sidebar-link-active" 
      : "sidebar-link";

  const renderLinks = () => (
    <>
      <NavLink to="/" className={linkClass}>
        <FaHome className="sidebar-link-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/jobs" className={linkClass}>
        <FaBriefcase className="sidebar-link-icon" />
        <span>Jobs</span>
      </NavLink>
      <NavLink to="/about-us" className={linkClass}>
        <FaInfoCircle className="sidebar-link-icon" />
        <span>About Us</span>
      </NavLink>
      <NavLink to="/contact-us" className={linkClass}>
        <FaEnvelope className="sidebar-link-icon" />
        <span>Contact Us</span>
      </NavLink>
    </>
  );

  return (
    <div>
      {/* Desktop/Tablet Sidebar */}
      {!isMobile && (
        <aside className="sidebar-desktop">
          <div className="sidebar-content">
            {renderLinks()}
          </div>
        </aside>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          <aside 
            className={`sidebar-mobile ${isOpen ? 'sidebar-mobile-open' : ''}`}
          >
            <div className="sidebar-mobile-content">
              {renderLinks()}
            </div>
          </aside>
          {isOpen && (
            <div
              className="sidebar-mobile-overlay"
              onClick={() => toggleSidebar(false)}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;