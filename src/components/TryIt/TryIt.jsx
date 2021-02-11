import React from 'react';
import { Fade } from 'react-reveal';

import Carousel from './Carousel'


const TryIt = () => {
    return (
        <section id='tryIt' className='try-it__container'>
            <Fade left delay={500}>
                {/* <img src={mockup} alt='Lisa Murkowski' /> */}
                <Carousel />
            </Fade>
            <Fade right delay={700}>
                <div className='about'>
                    <p>Getting started with The Democracy Project is easy.</p>
                    <p>Just grab your mobile device and navigate to <a>thedemocracyproject.herokuapp.com</a></p>
                    <p>From there you can use our demo login to try it out, or sign up for your own account to start browsing!</p>
                </div>
            </Fade>
        </section>
    )
}

export default TryIt;