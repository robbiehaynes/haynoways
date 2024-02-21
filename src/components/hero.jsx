import React, { useState } from 'react';
import portrait from '../assets/rob.png';

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
      <div className="w-1/2 items-center justify-end flex flex-col space-y-8">
        <h1 className="text-7xl text-brand-coral font-bold font-pacifico">the Silly<br/>Developer</h1>
        <h4 className="text-2xl text-brand-coral opacity-65 font-jua">My actual name is Rob<br/>I'm a full-stack developer.</h4>
        <input
          className="w-full sm:w-1/2 px-4 py-4 border bg-neutral-700 border-gray-300 font-jua text-brand-vista-blue rounded-2xl"
          type="text"
          placeholder="What do you want to know about Rob?"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      <div className="w-1/2 hidden sm:flex justify-start ">
        <img className="w-1/2 h-3/5 rounded-full -rotate-12 shadow-md" src={portrait} alt="Robert Haynes" />
      </div>
    </div>
  );
}
