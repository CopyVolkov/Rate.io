import React from "react";

const GameContainer = () => {
  return (
    <span className="GameWrapper flex flex-col lg:flex-row h-screen w-screen">
      <div className="BoxOne flex-1 bg-red-500"></div>
      <div className="BoxTwo flex-1 bg-blue-500"></div>
    </span>
  );
};

export default GameContainer;
