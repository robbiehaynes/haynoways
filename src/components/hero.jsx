import React, { useState } from 'react';
import portrait from '../assets/rob.png';
import avater from '../assets/rob-avatar.png';

export default function Hero() {
  const [inputValue, setInputValue] = useState('');

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Your logic here
      window.alert(`You entered: ${inputValue}`);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-screen h-screen bg-brand-gunmetal">
      <div className="w-1/2 items-center justify-center flex flex-col space-y-8">
        <div className="w-1/2 mb-4 flex lg:hidden justify-center">
          <img className="w-full rounded-full -rotate-12 shadow-lg" src={avater} alt="Robert Haynes" />
        </div>
        <div class="text-7xl text-center text-brand-coral font-bold font-pacifico [text-wrap:balance] bg-clip-text">the <span class="text-brand-coral inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul class="block animate-text-slide sm:text-center md:text-left leading-tight [&_li]:block">
                <li>Ambitious</li>
                <li>Fun</li>
                <li>Awesome</li>
                <li>Driven</li>
                <li>Clever</li>
                <li aria-hidden="true">Ambitious</li>
            </ul>
        </span><br/>Developer</div>
        <h4 className="text-2xl text-brand-coral opacity-65 font-jua">My actual name is Rob<br/>I'm a full-stack developer.</h4>
        <input
          className="w-full lg:w-1/2 px-4 py-4 border bg-neutral-700 border-gray-300 font-jua text-brand-vista-blue rounded-2xl"
          type="text"
          placeholder="What do you want to know about Rob?"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      <div className="w-1/2 hidden lg:flex justify-start ">
        <img className="w-1/2 h-3/5 rounded-full -rotate-12 shadow-md" src={portrait} alt="Robert Haynes" />
      </div>
    </div>
  );
}
