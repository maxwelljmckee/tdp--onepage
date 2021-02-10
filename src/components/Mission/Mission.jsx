import React from 'react';
import { Fade, Bounce } from 'react-reveal';
import { Link } from 'react-scroll';

import Header from '../Header/Header';
import MissionCard from './MissionCard';
import missionData from './missionData';


const Mission = () => {
  return (
    <section id='mission' className='mission__container'>
      <Header title='about' light />
      <div className='grid'>
            <div className='mission__icon grid-left grid-left-1'>
              <Bounce delay={500}>
                <img src='https://crystaltechnologies.com/wp-content/uploads/2015/10/our-mission-icon.png' alt='mountains' />
              </Bounce>
            </div>
            <div className='mission__icon grid-left grid-left-2'>
              <Bounce delay={600}>
                <img src='https://motivatewellness.com/wp-content/uploads/2016/12/roadblock.png' alt='roadblock' />
              </Bounce>
            </div>
            <div className='mission__icon grid-left grid-left-3'>
              <Bounce delay={700}>
                <img src='https://www.probonoinst.org/wpps/wp-content/uploads/vote-button-circle-shape-clipart-016.jpg' alt='roadblock' />
              </Bounce>
            </div>
            <div className='mission__icon grid-left grid-left-4'>
              <Bounce delay={800}>
                <img src='https://pbs.twimg.com/profile_images/1219756472151601153/iKrwqrSJ_400x400.jpg' alt='roadblock' />
              </Bounce>
            </div>

            { missionData.map(mission => {
              return (
                <div className='grid-right'>
                  <Fade right delay={mission.id * 100 + 700}>
                    
                    <MissionCard title={mission.title} text={mission.text} 
                      id={mission.id} />
                  </Fade>
                </div>
              )
            })}
      </div>
      <div className='down-arrow'>
        <Link to='banner' smooth duration={1000}>
          <i className="fas fa-arrow-circle-down"></i>
        </Link>
      </div>
    </section>
  )
}


export default Mission;