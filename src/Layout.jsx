// src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
