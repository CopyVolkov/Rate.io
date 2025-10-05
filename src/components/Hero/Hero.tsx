import React from "react";
import mario from "../../assets/mario-thinking.webp";
import StartMenu from "./StartMenu";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center bg-blue-200"
      style={{ backgroundImage: `url(${mario})` }}
    >
      <StartMenu />
      <div className="absolute inset-0 bg-black/60 z-0"> </div>
    </section>
  );
};

export default Hero;
