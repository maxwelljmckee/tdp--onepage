import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-scroll';

import logo from '../../static/main_logo.png';


const Hero = () => {
  return (
    <section id='hero' className='hero__container'>
      <div className='hero__flex'>
        <Fade duration={2000} delay={500} top distance='50px'>
          <img src={logo} alt='main logo' />
        </Fade>
        <Zoom top cascade delay={800}>
          <div className='hero__text'>
            <div>Imagine</div>
            <div>Political Action</div>
            <div>Made Easy.</div>
          </div>
        </Zoom>
        <Fade duration={1000} delay={2200}>
          <div className='learn-more-btn' >
            <Link to='mission' smooth duration={1000}>
              Learn More
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  )
}


export default Hero;