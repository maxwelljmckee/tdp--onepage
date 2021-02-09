import React, { useState, useEffect } from 'react';
import Fade, {Zoom} from 'react-reveal';

import Loader from './components/Loader/Loader';

function App() {
  // const [hidden, setHidden]
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(true)
    }, 500)
    setTimeout(() => {
      setShowLoader(false)
      setShowContent(true)
    }, 2500)
  }, [])

  return (
    <>
      <div className={`hidden` && !showLoader}>
        <Fade
          duration={3000}
          delay={1000}
          when={showLoader}
        >
          <Loader />
        </Fade>
      </div>
      
    </>
  )
}

export default App;
