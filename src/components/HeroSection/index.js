
 import React, { useRef, useState } from 'react';
import { ButtonHero } from '../../globalStyles';
/**
* > <HeroSectionContainer /> top level component
* > <HeroWrapper /> contains slides
* > <HeroSlide /> top level component
* > <HeroSlider /> top level component
* > <HeroImage /> images
* > <HeroContent /> content
* > <Arrow /> left and right arrows
* > <SliderBtns /> image slider btns
* > <Prev /> top level component
* > <Next /> top level component
*/
import { Arrow, HeroContainer, HeroContent, HeroImage, HeroSlide, HeroSlider, HeroWrapper, NextArrow, PrevArrow, SliderButtons } from './HeroSectionElements';

 function HeroSection({ slides }) {
   // state and functions current image slider
   const [current, setCurrent] = useState(0);
   // look at slides and check the length
   const length = slides.length;
   const timeout = useRef(null); // check value on
 
   // // Image autoswitch
   // useEffect(() => {
   //   const nextSlide = () => {
   //     setCurrent(current => (current === length - 1 ? 0 : current + 1))
   //   };
   //   timeout.current = setTimeout(nextSlide, 3000);
 
   //   return function () {
   //     if(timeout.current) {
   //       clearTimeout(timeout.current);
   //     }
   //   };
   // }, [current, length]);
 
   const nextSlide = () => {
     if(timeout.current) {
       clearTimeout(timeout.current);
     }
     setCurrent(current === length - 1 ? 0 : current + 1);
     //console.log(current);
   };
 
   // reverse order
   const prevSlide = () => {
     if(timeout.current) {
       clearTimeout(timeout.current);
     }
     setCurrent(current === 0 ? length - 1 : current - 1);
     //console.log(current);
   };
   // if no data return null
   if(!Array.isArray(slides) || slides.length <= 0) {
     return null;
   }
 
   // const fadeAnimation = {
   //   hidden: {opacity: 0},
   //   visible: {opacity: 1, transition: {duration: 0.8}},
   //   exit: {opacity: 0}
   // }
 
   return (
     <>
     <HeroContainer>
       <HeroWrapper>
         {slides.map((slide, index) => {
           return (
             <HeroSlide key={index}>
               {index === current && (
                 <HeroSlider>
                 <HeroImage src={slide.image} alt={slide.alt} />
                 <HeroContent>
                   <h1>{slide.title}</h1>
                   <ButtonHero
                     to={slide.path}
                     primary='true'
                     css={`max-width: 160px;`}
                   >
                       {slide.label}
                       <Arrow />
                   </ButtonHero>
                 </HeroContent>
               </HeroSlider>
               )}
               
             </HeroSlide>
           )
         })}
         <SliderButtons>
           <PrevArrow onClick={prevSlide} />
           <NextArrow onClick={nextSlide} />
         </SliderButtons>
       </HeroWrapper>
     </HeroContainer>
     </>
   )
 }
 
 export default HeroSection;
