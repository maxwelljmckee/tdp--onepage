import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

import splashMain from '../../static/mockups/splash-main.jpg'
import rep from '../../static/mockups/lisa-murk.jpg'
import billDetail from '../../static/mockups/bill-detail.jpg'
import billIndex from '../../static/mockups/bill-index.jpg'
import dashMain from '../../static/mockups/dash-main.jpg'
import voteComment from '../../static/mockups/vote-comment.jpg'


const ImgCarousel = () => {
    const Container = styled.div`
        box-shadow: 0 0 12px 0 rgba(131, 131, 131, 0.3);
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        width: 460px;
        height: 322px;`;

    const CarouselUI = ({ children }) => <Container>{children}</Container>;
    const Carousel = makeCarousel(CarouselUI);

    return (
        <Carousel defaultWait={2300} /*wait for 1000 milliseconds*/ >
            <Slide right>
                <img src={splashMain} alt='Welcome' />
            </Slide>
            <Slide right>
                <img src={rep} alt='Representative Detail' />
            </Slide>
            <Slide right>
                <img src={billIndex} alt='Bill Index' />
            </Slide>
            <Slide right>
                <img src={voteComment} alt='Approval Ratings' />
            </Slide>
        </Carousel>
    )
}


export default ImgCarousel;