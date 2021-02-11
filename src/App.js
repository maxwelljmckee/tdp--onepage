import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';

import Loader from './components/Loader/Loader';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import Banner from './components/Banner/Banner';
import Demo from './components/Demo/Demo';
import TryIt from './components/TryIt/TryIt';
import MeetDev from './components/MeetDev/MeetDev';

function App() {
  return (
    <>
      <Hero />
      <Mission />
      <Banner text='Getting Involved Has Never Been Easier' />
      <Demo />
      <Banner text='Ready to try it out? Visit our mobile app' />
      <TryIt />
      <MeetDev />
    </>
  )
}

export default App;
