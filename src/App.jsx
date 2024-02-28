import Hero from './components/hero'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import mountains from './assets/parallax/mountains.png';
import city1 from './assets/parallax/city-1.png';
import city2 from './assets/parallax/city-2.png';
import city3 from './assets/parallax/city-3.png';
import beach from './assets/parallax/beach-and-promenade.png';

function App() {

  return (
    <div >
      <Parallax pages={2} className="w-full h-full bg-gradient-to-b from-gradient-orange to-gradient-yelow">
        <ParallaxLayer offset={0.29} speed={-0.7}>
          <div style={{backgroundImage: `url(${mountains})`}} className="bg-cover bg-top aspect-video lg:aspect-[168/53]"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.55} speed={-0.5}>
          <div style={{backgroundImage: `url(${city3})`}} className="bg-cover bg-top h-[28%] min-w-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={-0.3}>
          <div style={{backgroundImage: `url(${city2})`}} className="bg-cover bg-top h-1/3 min-w-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.63} speed={-0.1}>
          <div style={{backgroundImage: `url(${city1})`}} className="bg-cover bg-top h-[26.27%] min-w-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.77} speed={0}>
          <div style={{backgroundImage: `url(${beach})`}} className="bg-bottom bg-cover lg:bg-[length:100%_100%] h-[23%]"></div>
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
