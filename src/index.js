import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import 'Route' and 'Routes' from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home.tsx';
import ThingsToDo from './pages/things-to-do';
import History from './pages/history';
import WhatIs from './pages/what-is';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use 'element' to define components */}
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/what-is" element={<WhatIs />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
