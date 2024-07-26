// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = ()=>{
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full p-4 bg-white border-b border-gray-300 shadow-md z-50`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://i.pinimg.com/236x/4a/17/1f/4a171f2bfd2e242c8f60da4f4a857c2f.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="ml-2 text-lg font-bold">Demon Slayer</span>
          </div>
          <div className="flex space-x-4">
            <NavLink 
              to="/"
              className={({ isActive }) => isActive ? 'text-gray-900' : 'text-gray-700'}
            >
              Home
            </NavLink>
            <NavLink 
              to="/Hashira"
              className={({ isActive }) => isActive ? 'text-gray-900' : 'text-gray-700'}
            >
              Hashira
            </NavLink>
            <NavLink 
              to="/Demon"
              className={({ isActive }) => isActive ? 'text-gray-900' : 'text-gray-700'}
            >
              Demon
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
