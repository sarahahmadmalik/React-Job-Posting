import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isMobile, isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white flex items-center space-x-3 hover:bg-gray-900 hover:text-white rounded-md px-4 py-2 transition duration-300 ease-in-out"
      : "text-white flex items-center space-x-3 hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 transition duration-300 ease-in-out";

  const iconOnlyClass =
    "flex items-center justify-center p-2 hover:bg-indigo-700 rounded-md relative group transition duration-300 ease-in-out";

  // Common Links for Both Sidebars
  const renderLinks = () => (
    <>
      <NavLink to="/" className={linkClass}>
        <FaHome className="h-5 w-5" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/jobs" className={linkClass}>
        <FaBriefcase className="h-5 w-5" />
        <span>Jobs</span>
      </NavLink>
      <NavLink to="/about-us" className={linkClass}>
        <FaInfoCircle className="h-5 w-5" />
        <span>About Us</span>
      </NavLink>
      <NavLink to="/contact-us" className={linkClass}>
        <FaEnvelope className="h-5 w-5" />
        <span>Contact Us</span>
      </NavLink>
    </>
  );

  return (
    <div>
      {/* Desktop/Tablet Sidebar */}
      {!isMobile && (
        <aside className="sticky top-0 min-h-screen bg-indigo-800 md:w-[200px] lg:w-[250px] z-40">
          <div className="flex flex-col h-full gap-y-6 p-4 ">
            {renderLinks()}
          </div>
        </aside>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          <aside
            className={`fixed top-[60px] py-6 left-0 min-h-screen bg-indigo-800 z-40 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } w-[250px]`}
          >
            <div className="flex flex-col gap-y-6 h-full p-4">
              {renderLinks()}
            </div>
          </aside>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={() => toggleSidebar(false)}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;
