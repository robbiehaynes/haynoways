import Hero from './components/hero'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import mountains from './assets/parallax/mountains.png';
import citythree from './assets/parallax/city-3.png';
import citytwo from './assets/parallax/city-2.png';
import cityone from './assets/parallax/city-1.png';
import promenade from './assets/parallax/promenade.png';
import ocean from './assets/parallax/beach-ocean.png';

function App() {

  return (
    <div >
      <Parallax pages={2} className="w-full h-full bg-gradient-to-b from-gradient-orange to-gradient-yelow">
        <ParallaxLayer offset={0.22} speed={-0.7}>
          <img src={mountains} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.45} speed={-0.5}>
          <img src={citythree} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.41} speed={-0.3}>
          <img src={citytwo} className="w-full"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.54} speed={-0.1}>
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
