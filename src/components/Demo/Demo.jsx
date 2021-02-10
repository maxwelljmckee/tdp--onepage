import React from 'react';
import { Bounce } from 'react-reveal';

import number1 from '../../static/1-icon.png';
import number2 from '../../static/2-icon.png';
import number3 from '../../static/3-icon.png';


const Demo = () => {
    return (
        <section id='demo' className='demo__container'>
            <div className='demo__card'>
                <Bounce delay={500}>
                    <img src={number1} alt='1'></img>
                </Bounce>
            </div>
            <div className='demo__card'>
                <Bounce delay={600}>
                    <img src={number2} alt='2'></img>
                </Bounce>
            </div>
            <div className='demo__card'>
                <Bounce delay={700}>
                    <img src={number3} alt='3'></img>
                </Bounce>
            </div>
        </section>
    )
}


export default Demo;