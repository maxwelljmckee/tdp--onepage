import React, { useState, useEffect } from 'react';
import { Fade, Rubberband, Zoom, Bounce } from 'react-reveal';

import Loader from './components/Loader/Loader';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';

function App() {
  const [hide, setHide] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setHide(false);
    //   setShowLoader(true);
    //   setTimeout(() => {
    //     setShowLoader(false);
    //     setTimeout(() => {
    //       setShowContent(true);
    //     }, 1000)
    //   }, 2500)
    // }, 500)

    // RESET SHOWCONTENT TO INITIALIZE TO FALSE WHEN THIS IS COMMENTED BACK IN
  }, [])

  return (
    <>
      <div className={`hidden` && hide}>
        <Fade duration={1000} delay={500} when={showLoader} collapse>
          <Loader />
        </Fade>
      </div>
      { showContent &&
        <>
          <Hero />
          <Mission />
        </>
      }
    </>
  )
}

export default App;
