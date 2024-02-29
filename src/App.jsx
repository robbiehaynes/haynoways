import { Overview, ParallaxComponent } from './components';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {

  return (
    <>
      <ParallaxComponent />
      <SpeedInsights />
    </>
  )
}

export default App
