import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const AboutMe = () => {
  const [visible, clearText] = useState(false);
  const [text] = useTypewriter({
    words: ["Hey! I'm Ratan :)", "Let me take you through my world."],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 100,
    deleteSpeed: 100,
    onLoopDone: () => {
      clearText(true);
    },
  });

  return (
    <>
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl md:px-10 justify-evenly items-center mx-auto pt-16">
        <div className="top-[40px] md:absolute md:top-[20%] lg:absolute   uppercase tracking-[10px] md:tracking-[20px] lg:tracking-[20px] text-gray-400 text-2xl">
          About
        </div>
        <img
          className="h-40 flex-shrink-0 w-44 rounded-xl object-cover md:rounded-2xl md:w-64 md:h-96 xl:w-[350px] xl:h-[350px]"
          src="https://dfy2ssrejjejg.cloudfront.net/personalPic.jpg"
          alt="ratan's photo"
        ></img>
        <div className="h-1/2 mx-auto md:h-auto lg:h-auto w-[90%] md:w-1/2 lg:w-1/2 ">
          {!visible && (
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold px-16 text-black dark:text-gray-400">
              <span className="font-outfit">{text}</span>
              <Cursor cursorBlinking={false} />
            </h1>
          )}
          {visible && (
            <p className="">
              Hello, I am a Software Developer who <br></br> loves to code
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
