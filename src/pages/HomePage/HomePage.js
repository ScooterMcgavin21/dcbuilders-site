import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { SliderData } from '../../components/HeroSection/SliderData';
import Navbar from '../../components/Navbar';
import GlobalStyle from '../../globalStyles';

function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <HeroSection slides={SliderData} /> 
    </>
  )
}

export default HomePage;
