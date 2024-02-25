import Hero from './components/hero'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import devilsPeak from './assets/parallax/devils-peak.png';
import citythree from './assets/parallax/city-3.png';
import citytwo from './assets/parallax/city-2.png';
import cityone from './assets/parallax/city-1.png';
import promenade from './assets/parallax/promenade.png';
import ocean from './assets/parallax/beach-ocean.png';

function App() {

  return (
    <div >
      <Parallax pages={2} className="w-full h-full bg-gradient-to-b from-gradient-orange to-gradient-yelow">
        <ParallaxLayer offset={0.23} speed={-0.9} style={{
            backgroundSize: '80%',
            backgroundPosition: 'right top',
            backgroundImage: "url('../src/assets/parallax/table-mountain.png')",
          }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0.27} speed={-0.9}>
          <img src={devilsPeak} className="w-3/4"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.45} speed={-0.6}>
          <img src={citythree} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.42} speed={-0.4}>
          <img src={citytwo} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.54} speed={-0.2}>
          <img src={cityone} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0}>
          <img src={promenade} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} speed={0}>
          <img src={ocean} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} style={{backgroundColor:'#ADBDE3'}}>
        </ParallaxLayer>
      </Parallax>
      <SpeedInsights />
    </div>
  )
}

export default App
