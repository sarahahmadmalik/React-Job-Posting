import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-indigo-700 text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2';
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className=''>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <NavLink to='/' className='flex-shrink-0 flex items-center'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </NavLink>
          </div>
          <div className='md:flex space-x-8 hidden'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Add Job
                </NavLink>
              </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='block text-white hover:text-gray-300 focus:outline-none'
            >
              {isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
            </button>
          </div>
        </div>
        {/* Fullscreen Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-indigo-700 z-50 transition-opacity ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className='flex justify-end pt-4 pr-4'>
            <button
              onClick={toggleMenu}
              className='text-white hover:text-gray-300 focus:outline-none'
            >
              <FaTimes className='h-6 w-6' />
            </button>
          </div>
          <div className='flex flex-col items-center mt-20'>
            <NavLink exact to='/' className={linkClass} activeClassName='bg-black'>
              Home
            </NavLink>
            <NavLink to='/jobs' className={linkClass} activeClassName='bg-black'>
              Jobs
            </NavLink>
            <NavLink to='/add-job' className={linkClass} activeClassName='bg-black'>
              Add Job
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
