import Hero from './components/hero'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  return (
    <div >
      <Parallax pages={2} className="w-full h-full bg-gradient-to-b from-gradient-orange to-gradient-yelow">
        <ParallaxLayer offset={0.29} speed={-0.7}>
          <div className="bg-mountains bg-cover bg-top aspect-video lg:aspect-[168/53]"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.55} speed={-0.5}>
          <div className="bg-city-3 bg-cover bg-top h-[28%] min-w-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={-0.3}>
          <div className="bg-city-2 bg-cover bg-top h-1/3 min-w-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.63} speed={-0.1}>
          <div className="bg-city-1 bg-cover bg-top h-[26.27%] min-w-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.77} speed={0}>
          <div className="bg-beach bg-bottom bg-cover lg:bg-[length:100%_100%] h-[23%]"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} style={{backgroundColor:'#ADBDE3'}}></ParallaxLayer>
      </Parallax>
      <SpeedInsights />
    </div>
  )
}

export default App
