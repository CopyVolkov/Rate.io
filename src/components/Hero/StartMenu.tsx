import React, { useState } from "react";
import mario from "../../assets/mario-thinking.webp";
import GameContainer from "./GameContainer";

const StartMenu = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>

      {!isPlaying ? (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mario})`,
            backgroundBlendMode: "multiply",
          }}
          className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
        >
          <section
            className="absolute z-10 border-blue-50 rounded-3xl text-white font-medium
                     bg-transparent text-center p-4 sm:p-6 md:p-8 
                     w-[90%] sm:w-[70%] md:w-[50%] max-w-2xl"
          >
            <h2 className="text-green-600 text-8xl p-5 lg:text-9xl lg:p-10">
              RATIO <span className="text-red-600">GAME</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-2">
              Which game has better rating
            </h3>
            <p className="text-white mb-6 md:mb-6">
              Do you think you know enough about games to take the challenge?
            </p>
            <button
              onClick={() => setIsPlaying(true)}
              className="border border-green-600 rounded-3xl p-3 bg-green-600 
                       lg:cursor-pointer mb-2 lg:bg-transparent lg:border-blue-50
                       lg:hover:bg-green-600 lg:hover:border-green-600 
                       lg:transition-all lg:duration-300 lg:ease-in-out 
                       lg:active:scale-90"
            >
              Start guessing
            </button>
          </section>
        </div>
      ) : (
        <GameContainer />
      )}
    </>
  );
};

export default StartMenu;
