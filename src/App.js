import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import { SliderData } from './components/HeroSection/SliderData';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <HeroSection slides={SliderData} />
    </Router>
  );
}

export default App;
