import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import 'Route' and 'Routes' from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use 'element' to define components */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
