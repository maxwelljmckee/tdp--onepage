import React from 'react';
import { Fade, RubberBand, Bounce } from 'react-reveal';

import logo from '../../static/main_logo.png';


const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='hero__flex'>
        <Fade duration={2000} delay={500}>
          <img src={logo} alt='main logo' />
        </Fade>
        <Bounce bottom cascade>
          <div className='hero__text'>
            <div>Imagine</div>
            <div>Political Action</div>
            <div>Made Easy</div>
          </div>
        </Bounce>
      </div>
    </div>
  )
}


export default Hero;