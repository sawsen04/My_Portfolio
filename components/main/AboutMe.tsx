"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className=" id flex flex-col items-center justify-center py-40 text-white"
    >
      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-center leading-10 text-lg text-white my-5 max-w-[600px]"
      >
        *Research engineer dedicated to the in-depth analysis of customer needs
        and the meticulous preparation of complete files for effective project
        management.
        <br />
        *My engineering studies helped me a lot to start coding cause it s all
        based on logic, that s why I can say that I have a problem-solving
        attitude. So as a Full Stack developer I am able to add on new needed
        skills and knowledge very quickly.
        <br /> *Looking to leverage experience building responsive and scalable
        web apps to solve interesting problems that delight end-users. <br />
        *Technical curiosity pushes me to develop personal projects.
      </motion.p>
    </div>
  );
};

export default AboutMe;
