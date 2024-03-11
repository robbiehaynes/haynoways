import ParallaxComponent from './components/Parallax';
import Experience from './components/Experience';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <ParallaxComponent />
      <Experience />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
