import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { SliderData } from '../../components/HeroSection/SliderData';
import InfoSection from '../../components/InfoSection';
import { DataAbout } from '../../components/InfoSection/Data';
import Navbar from '../../components/Navbar';
import GlobalStyle from '../../globalStyles';

function AboutPage() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <HeroSection slides={SliderData} />
      <InfoSection {...DataAbout} />
    </>
  )
}

export default AboutPage;
