import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import Home from './home';
import FAQ from './faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/faq" element={<FAQ />} /> 
      </Routes>
    </Router>
  );
}

export default App;