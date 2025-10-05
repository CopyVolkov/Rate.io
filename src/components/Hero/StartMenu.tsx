import React from "react";

const StartMenu = () => {
  return (
    <div className="absolute z-1 left-1/2 top-1/2 translate-x-[-50%] translate-y-[30%] border-2 border-blue-50 rounded-3xl text-white font-medium bg-transparent p-8">
      <h2 className="text-3xl font-bold mb-4">Ratio game</h2>
      <h3 className="text-xl font-semibold mb-2">
        Which game has better rating
      </h3>
      <p className="text-white mb-12">
        Do you think you know enough about games to take the challenge?
      </p>
      <a className=" border border-blue-50  rounded-3xl p-3">Start guessing</a>
    </div>
  );
};

export default StartMenu;
