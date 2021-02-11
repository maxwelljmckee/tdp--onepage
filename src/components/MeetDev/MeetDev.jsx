import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

import Header from '../Header/Header';


const MeetDev = () => {
    return (
        <section id='meetDev' className='meet-dev__container'>
            <Fade delay={400}>
                <Header title='Meet the Developer' light/>
            </Fade>
            <div className='flex'>
                <div className='meet-dev__flex-1'>
                    <Fade left delay={600} distance='50px'>
                        <img src='https://ca.slack-edge.com/T03GU501J-U0173CXKZGD-cdadb0380e42-512' alt='portrait' />
                    </Fade>
                </div>
                <div className='meet-dev__flex-2'>
                    <Fade right delay={800} distance='50px'>
                        <div className='name'>Hi, I'm Maxwell McKee</div>
                    </Fade>
                    <Fade right delay={1000} distance='50px'>
                        <div className='about'>
                            <p>Any time I commit myself to something, whether it be piano performance, rock climbing, or building a cool new application, I do it with 100% of my focus and determination. Life is too short to settle for less.</p>
                            <p>I am driven by passion and I love to express my creativity. Some of the creations I am most proud of are my award-winning string quartet, the school bus tiny-home that I built and lived in for 5 years, and the project previewed above.</p>
                            <p>I'm a compulsive overachiever, empathetic communicator, and perennially cheery presence. Prone to sincerity and adventure.</p>
                        </div>
                    </Fade>
                    <Fade right delay={1200} distance='50px'>
                        <div className='buttons'>
                            <a target='_blank' href='https://mmckee-dev.com/' className='button'>
                                Portfolio
                            </a>
                            <a target='_blank' href='https://docs.google.com/document/d/e/2PACX-1vTCSZxmPXuHjO77nt3JC6Y_zMOj1VU-b-e7TfhtQWE6kkfoc9thgg3bYZ6Qp18FQVDgUycc8bYCx7fy/pub' className='button'>
                                Resume
                            </a>
                        </div>
                    </Fade>
                    <Fade right delay={1400} distance='50px'>
                        <div className='socials'>
                            <a target='_blank' href='https://www.linkedin.com/in/maxwell-mckee-385599191/'>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a target='_blank' href='https://angel.co/u/maxwell-mckee'>
                                <i className="fab fa-angellist"></i>
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
            <Fade bottom delay={1600} distance='30px'>
                <div className='back-to-top'>
                    <Link to='hero' smooth duration={2000}>
                        <i class="fas fa-angle-double-up"></i>
                    </Link>
                    <Link to='hero' smooth duration={2000}>
                        <span>Back to Top</span>
                    </Link>
                </div>
            </Fade>
        </section>
    )
}


export default MeetDev;