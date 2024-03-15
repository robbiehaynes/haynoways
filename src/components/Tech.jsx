import React from "react";

import { logos } from "../constants";

const Tech = () => {
    return (
        <main className="relative h-1/4 flex flex-col justify-center bg-coral overflow-hidden">
            <h2 className="text-3xl text-gunmetal font-jua uppercase text-center mb-8">My Tech Stack</h2>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {logos.map((logo, index) => (
                        <li key={`logo-${index}`}>
                            <img src={logo.src} alt={logo.alt}/>
                        </li>
                    ))}
                </ul> 
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <li key={`logo-${index}`}>
                            <img src={logo.src} alt={logo.alt}/>
                        </li>
                    ))}
                </ul>   
            </div>
        </main>
    )
}

export default Tech;