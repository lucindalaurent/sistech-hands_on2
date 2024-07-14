// components/CallToAction.tsx
import React from 'react';

function CallToAction () {
  return (
    <div id="callAction" className="text-purple-800 flex flex-col items-center gap-1.5 mt-12 pb-16 mb-12 border-b-2 border-subtle">
      <h2 className="text-2xl font-bold">Hi, new Sis! Come and join us :)</h2>
      <h3 id="offer" className="font-sans text-lg mt-2">Enroll in your first course and get up to 70% cashback</h3>
      <input 
        id="button" 
        type="submit" 
        value="Register Now" 
        className="flex items-center bg-[#72127F] text-invert py-3 px-24 border border-gray-400 cursor-pointer text-center rounded-md mt-4"
      />
    </div>
  );
}

export {CallToAction};
