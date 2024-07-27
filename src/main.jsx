// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Hashira from './components/Hashira.jsx';
import Home from './components/Home.jsx';
import './index.css';
import HashiraPage from './components/description/HashiraPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Hashira' element={<Hashira />} />
      <Route path='Demon' element={<Hashira />} />
      <Route path='rengoku' element={<HashiraPage/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
