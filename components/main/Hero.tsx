import React from "react";
import HeroContent from "../sub/HeroContent";

export const Hero = () => {
  return (
    <div id="hero" className="relative md:flex flex-col md:h-full md:w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] md:w-full md:h-full object-cover"
        src="/blackhole.webm"
      ></video>
      <HeroContent />
    </div>
  );
};
