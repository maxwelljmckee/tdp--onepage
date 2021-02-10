import React from 'react';
import { Fade, Bounce } from 'react-reveal';

import Header from '../Header/Header';
import MissionCard from './MissionCard';
import missionData from './missionData';


const Mission = () => {
  return (
    <section id='mission' className='mission__container'>
      <Header title='mission' light />
      <div className='grid'>
        <Bounce cascade delay={600} duration={1200}>
          <div className='grid-left'>
            <div className='mission__icon grid-left-1'>
              <img src='https://crystaltechnologies.com/wp-content/uploads/2015/10/our-mission-icon.png' alt='mountains' />
            </div>
            <div className='mission__icon grid-left-2'>
              <img src='https://motivatewellness.com/wp-content/uploads/2016/12/roadblock.png' alt='roadblock' />
            </div>
            <div className='mission__icon grid-left-3'>
              <img src='https://www.probonoinst.org/wpps/wp-content/uploads/vote-button-circle-shape-clipart-016.jpg' alt='roadblock' />
            </div>
            <div className='mission__icon grid-left-4'>
              <img src='https://pbs.twimg.com/profile_images/1219756472151601153/iKrwqrSJ_400x400.jpg' alt='roadblock' />
            </div>
          </div>
        </Bounce>
        <Fade right delay={1000} duration={2000} cascade>
          <div>
            { missionData.map(mission => {
              return <MissionCard title={mission.title} text={mission.text} id={mission.id} />
            })}
          </div>
        </Fade>
      </div>
    </section>
  )
}


export default Mission;