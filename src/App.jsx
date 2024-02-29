import ParallaxComponent from './components/Parallax';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <ParallaxComponent />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
