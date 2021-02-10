import React from 'react';
import { Fade, Bounce } from 'react-reveal';

import number1 from '../../static/1-icon.png';
import number2 from '../../static/2-icon.png';
import number3 from '../../static/3-icon.png';
import register from '../../static/gifs/register.gif';
import billFollow from '../../static/gifs/bill-follow.gif';
import voteAndComment from '../../static/gifs/vote-and-comment.gif';


const Demo = () => {
    return (
        <section id='demo' className='demo__container'>
            <div className='demo__card'>
                <div className='flex-group-1'>
                    <Bounce delay={500}>
                        <img src={number1} alt='1'></img>
                    </Bounce>
                    <Fade left delay={650} distance='50px'>
                        <div className='demo__description'>Register with your zip code and get automatically connected to your state and district representatives</div>
                    </Fade>
                </div>
                <Fade right delay={1200} distance='50px'>
                    <img className='demo__gif' src={register} alt='Register' />
                </Fade>
            </div>
            <div className='demo__card'>
                <div className='flex-group-1'>
                    <Bounce delay={500}>
                        <img src={number2} alt='2'></img>
                    </Bounce>
                    <Fade left delay={650} distance='50px'>
                        <div className='demo__description'>Follow other representatives and active bills in congress</div>
                    </Fade>
                </div>
                <Fade right delay={1200} distance='50px'>
                    <img className='demo__gif' src={billFollow} alt='Follow Bills' />
                </Fade>
            </div>
            <div className='demo__card'>
                <div className='flex-group-1'>
                    <Bounce delay={500}>
                        <img src={number3} alt='3'></img>
                    </Bounce>
                    <Fade left delay={650} distance='50px'>
                        <div className='demo__description'>Weigh in with on the people and the issues with realtime approval ratings and one-click contacts</div>
                    </Fade>
                </div>
                <Fade right delay={1200} distance='50px'>
                    <img className='demo__gif' src={voteAndComment} alt='Votes and Comments' />
                </Fade>
            </div>
        </section>
    )
}


export default Demo;