import React from 'react';
import './App.css';
import Home from './components/home/Home';
import AboutPage from './components/home/About_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/home/Header';
import ContactPage from './components/contact/ContactPage';
import ServicesPage from './components/services/ServicesPage';
import Testinomial from './components/Testinomial/Testinomial';

function App() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path ='/AboutPage' element = {<AboutPage/>}/>
          <Route path="/service" element={<ServicesPage/>}/>
          Testinomial
          
          <Route path="/testinomial" element={<Testinomial/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
  
    </Router>
  );
}

export default App;
