import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
 import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/portfolio';
/*import Contact from './components/Contact';*/
import Footer from './components/Footer/Footer'; 
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
        <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
         {/*  <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      <Footer /> 
       </div>
    </Router>
  );
}

export default App;
