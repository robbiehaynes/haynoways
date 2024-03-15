import Hero from './hero/Hero';
import Overview from './hero/Overview';
import Experience from './Experience';
import Tech from './Tech';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import mountains from '../assets/parallax/mountains.webp';
import city1 from '../assets/parallax/city-1.webp';
import city2 from '../assets/parallax/city-2.webp';
import city3 from '../assets/parallax/city-3.webp';
import beach from '../assets/parallax/beach-and-promenade.webp';

const ParallaxComponent = () => {
    return (
        <div className="w-screen h-screen">
            <Parallax pages={4} className="w-screen h-screen overflow-hidden scroll-smooth relative place-items-center bg-coral">
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
                <ParallaxLayer offset={1} speed={0}>
                    <Overview />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0}>
                    <Tech />
                </ParallaxLayer>
                <ParallaxLayer offset={2.25} speed={0}>
                    <Experience />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ParallaxComponent;