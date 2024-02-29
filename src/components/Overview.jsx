import React from "react";
import rob from '../assets/rob.png';
import robavatar from '../assets/rob-avatar.webp';

const Overview = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-start items-center w-full h-screen bg-brand-dark-blue">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="pt-20 mb-8 px-24 w-full md:w-3/5 lg:w-1/2">
            <p className="text-xs md:text-base text-white opacity-75 mb-4 font-jua uppercase tracking-wider">Let's get to know me a little...</p>
            <h2 className="text-6xl md:text-7xl text-brand-tea-green font-pacifico text-shadow">Overview.</h2>

            <p className='mt-8 text-brand-beige opacity-75 font-jua text-base lg:text-lg max-w-3xl leading-[30px]'>
            Hey! I'm Rob Haynes, an enthusiastic and dedicated Computer Science student at the University of Manchester, 
            currently on a transformative journey as an Undergraduate Software Engineer at JLR.
            <br/><br/>
            With a passion for pushing the boundaries of technology, I specialize in a diverse set of programming languages and skills. 
            From crafting elegant Python solutions to diving into the realms of AI & ML, I thrive on the challenges that come with 
            software development.
            </p>
        </div>
        <div className="w-full hidden md:flex md:w-2/5 lg:w-1/2 px-8 items-center justify-center">
            <img src={rob} alt="Robert Haynes" className="w-3/4 lg:w-1/2 h-auto rounded-full drop-shadow-md"/>
        </div>
        <div className="block md:hidden mb-8 h-4/5 aspect-square bg-contain bg-no-repeat rounded-full shadow-lg" style={{backgroundImage: `url(${robavatar})`}} ></div>
    </div>
  );
};

export default Overview;