"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="md:flex flex-row items-center justify-center px-20 mt-40 md:w-full z-[20]"
    >
      <div className="h-full w-full md:flex flex-col gap-5 justify-center m-auto text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[7px] border border-[#7042F88B] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#734de3] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[15px] font-extrabold">
            Research Engineer and Full Stack JS Developer (MERN STACK)
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Motivated and proactive individual with a background of repeated
          success, implementing best practices and driven to deliver the highest
          level of service in an efficient and professional manner.
        </motion.p>
        <div className="flex justify-start gap-2 ml-6">
          <motion.a
            variants={slideInFromLeft(1)}
            className="md:flex justify-center items-center gap-3 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[260px] p-2"
          >
            <Image
              src="/email-1573-svgrepo-com.svg"
              alt=""
              key=""
              width={24}
              height={24}
            />
            sawsenayari87@gmail.com
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="flex items-center gap-3 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] p-2"
          >
            <Image
              src="/home-1-svgrepo-com.svg"
              alt=""
              key=""
              width={24}
              height={24}
            />
            Tunis, Tunisie
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="flex items-center gap-3 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[190px] p-2"
          >
            <Image
              src="/telephone-signal-svgrepo-com.svg"
              alt=""
              key=""
              width={24}
              height={24}
            />
            +216 93918035
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
