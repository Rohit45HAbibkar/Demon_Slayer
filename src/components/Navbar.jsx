// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 h-16 bg-white border-b border-gray-300 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-9">
        <div className="flex items-center relative right-10">
          <img
            src="https://i.pinimg.com/236x/4a/17/1f/4a171f2bfd2e242c8f60da4f4a857c2f.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-2 text-lg font-bold text-gray-800">Demon Slayer</span>
        </div>
        <div className="flex space-x-4 relative left-9">
          <a
            href='/'
            className="text-gray-800 hover:bg-gray-200 hover:text-black transition duration-300 px-4 py-2 rounded-md"
          >
            Home
          </a>
          <a
            href='/hashira'
            title='Heroes'
            className="text-gray-800 hover:bg-gray-200 hover:text-orange-600 transition duration-300 px-4 py-2 rounded-md"
          >
            Hashira
          </a>
          <a
            href='/demon'
            title='Demons'
            className="text-gray-800 hover:bg-gray-200 hover:text-violet-600 transition duration-300 px-4 py-2 rounded-md"
          >
            Demon
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
