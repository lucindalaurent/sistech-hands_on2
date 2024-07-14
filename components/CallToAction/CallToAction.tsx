// components/CallToAction.tsx
import React from 'react';

function CallToAction () {
  return (
    <div id="callAction" className="text-fusion flex flex-col items-center gap-2 mt-12 pb-16 mb-4 border-b-2 border-subtle">
      <h2 className="text-2xl font-bold pb-6">Hi, new Sis! Come and join us :)</h2>
      <h3 id="offer" className="font-sans text-lg mt-2 mb-4 pt-2">Enroll in your first course and get up to 70% cashback</h3>
      <input 
        id="button" 
        type="submit" 
        value="Register Now" 
        className="flex items-center bg-darkPurple text-invert py-3 px-25 border border-gray-400 cursor-pointer text-center rounded-md mt-4"
      />
    </div>
  );
}

export {CallToAction};
