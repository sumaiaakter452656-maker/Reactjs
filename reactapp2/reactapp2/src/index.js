import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

