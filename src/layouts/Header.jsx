import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = ({ isMobile, toggleSidebar }) => {
  return (
    <header className="fixed w-full z-50 bg-indigo-500 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              React Jobs
            </span>
          </NavLink>
          {isMobile && (
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleSidebar}
            >
              <FaBars className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
