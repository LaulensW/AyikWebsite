// App.jsx
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Menu from './views/menu';
import About from './views/about';
import Contact from './views/contact';
import Privacy from './views/privacy';
import NotFound from './views/notfound'; // import the NotFound component
import './App.css';

const App = () => {
    useEffect(() => {
        if (navigator.platform.indexOf('Win') > -1) {
          document.documentElement.style.setProperty('--second-hover', '#761111');
        }
        if (/Android/.test(navigator.userAgent)) {
          document.documentElement.style.setProperty('--second-hover', '#761111');
        }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;