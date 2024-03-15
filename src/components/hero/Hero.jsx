import React, { useState } from 'react';

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
        <div className="text-6xl md:text-7xl text-center text-shadow text-gunmetal font-bold font-pacifico [text-wrap:balance] bg-clip-text">the <span className="inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide sm:text-center md:text-left leading-tight [&_li]:block">
                <li>Ambitious</li>
                <li>Fun</li>
                <li>Awesome</li>
                <li>Driven</li>
                <li>Clever</li>
                <li aria-hidden="true">Ambitious</li>
            </ul>
        </span><br/>Developer</div>
        <h4 className="text-xl md:text-2xl text-shadow-sm text-gunmetal font-jua">My actual name is Rob<br/>I'm a full-stack developer.</h4>
        <input
          className="w-3/4 lg:w-1/2 px-4 py-4 border bg-gunmetal border-gunmetal text-sm md:text-base font-jua text-slate-200 placeholder-slate-200 placeholder-opacity-50 rounded-2xl"
          type="text"
          placeholder="What do you want to know about Rob?"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <div className="flex items-center space-x-10">
          <a href="https://github.com/robbiehaynes" target='_blank'>
            <button
              type="button"
              className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-coral shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#2B303A" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/roberthaynesza/" target='_blank'>
            <button
              type="button"
              className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-coral shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#2B303A" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
