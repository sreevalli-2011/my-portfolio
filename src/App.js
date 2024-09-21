
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './components/style.css';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import PhotoshopWorks from './components/PhotoshopWorks';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Ionicons } from '@ionic/react';




function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
       
        <Route path="/about" element={<About />} /> 

        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photoshopworks" element={<PhotoshopWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


