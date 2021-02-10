import React from 'react';
import { Fade } from 'react-reveal';


const Banner = ({ text }) => {
    return (
        <div id='banner' className='banner'>
            <Fade duration={1000} delay={400}>
                {text}
            </Fade>
        </div>
    )
}


export default Banner;