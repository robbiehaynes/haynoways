import React from 'react';

export default function Hero() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">

      <div className="w-1/2 items-center justify-end flex flex-col space-y-8" id="left">
        <h1 className="text-4xl font-bold">the Silly<br/>Developer</h1>
        <h4 className="text-2xl">My actual name is Rob<br/>I am a full-stack developer.</h4>
        <input className="w-1/2 px-4 py-2 border border-gray-300 rounded-md" type="text" placeholder="What do you want to know about Rob?" />
      </div>
      <div className="w-1/2 flex justify-start">
        <img className="w-1/2 h-3/5 rounded-full -rotate-12" src="/src/assets/rob.png" alt="Robert Haynes" />
      </div>
    </div>
  );
}