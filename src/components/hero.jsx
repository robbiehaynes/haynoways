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
    <>
      <div className="h-screen flex items-center justify-center flex-col space-y-14">
        <div className="text-7xl text-center text-shadow text-brand-coral font-bold font-pacifico [text-wrap:balance] bg-clip-text">the <span className="text-brand-coral inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide sm:text-center md:text-left leading-tight [&_li]:block">
                <li>Ambitious</li>
                <li>Fun</li>
                <li>Awesome</li>
                <li>Driven</li>
                <li>Clever</li>
                <li aria-hidden="true">Ambitious</li>
            </ul>
        </span><br/>Developer</div>
        <h4 className="text-2xl text-shadow-sm text-slate-50 font-jua">My actual name is Rob<br/>I'm a full-stack developer.</h4>
        <input
          className="w-full lg:w-1/2 px-4 py-4 border bg-brand-coral border-gray-300 font-jua text-white placeholder-white rounded-2xl"
          type="text"
          placeholder="What do you want to know about Rob?"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </>
  );
}
