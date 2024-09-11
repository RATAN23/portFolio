import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutMe = () => {
  const [visible, clearText] = useState(false);
  const [text] = useTypewriter({
    words: ["Hey! I'm Ratan :)"],
    loop: 2,
    typeSpeed: 80,
    onDelete: () => {
      clearText(true);
    },
  });

  return (
    <>
      <div className="flex flex-col h-screen text-center overflow-visible md:text-left md:flex-row max-w-6xl md:px-10 justify-evenly items-center mx-auto bg-background  pt-16">
        <div className="top-[40px] md:absolute md:top-[20%] lg:absolute   uppercase tracking-[5px] md:tracking-[20px] lg:tracking-[20px] text-gray-400  text-3xl">
          About
        </div>
        <img
          className="h-40 flex-shrink-0 w-44 rounded-xl object-cover md:rounded-2xl md:w-64 md:h-96 xl:w-[350px] xl:h-[350px]"
          src="https://dfy2ssrejjejg.cloudfront.net/personalPic.jpg"
          alt="ratan's photo"
        ></img>
        <div className="h-1/2 mx-auto md:h-auto lg:h-auto w-[90%] md:w-1/2 lg:w-1/2 ">
          {!visible && (
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold px-16 text-gray-400 dark:text-white">
              <span className="font-outfit">{text}</span>
              <Cursor cursorBlinking={false} />
            </h1>
          )}
          {visible && (
            <>
              <Chip
                label="open to opportunities"
                color="primary"
                variant="outlined"
                icon={<CheckCircleIcon />}
              />
              <br />
              <br />
              <p className="text-sm font-normal md:text-lg lg:text-lg overflow-visible">
                I'm a passionate{" "}
                <span className="bg-gradient-to-r from-[#1488CC] from-10%  to-[#2B32B2] to-80% text-transparent bg-clip-text">
                  Software Developer{" "}
                </span>{" "}
                with over three years of experience at{" "}
                <span className="text-nowrap bg-gradient-to-r  from-[#1488CC] from-10%  to-[#2B32B2] to-80% text-transparent bg-clip-text">
                  SAP Labs India
                </span>
                . Crafting sophisticated answers to complicated questions drives
                me.
                <br></br>
                <br></br>
                I've also led as the Events Head for the club <br />
                <span className="text-nowrap bg-gradient-to-r from-[#1488CC] from-10%  to-[#2B32B2] to-80% text-transparent bg-clip-text">
                  Entrepreneurship-Cell UVCE
                </span>
                , collaborating with industry leaders.
                <br></br>
                <br></br>
                Outside of work, I enjoy reading books, playing badminton,
                writing poetry and watching movies while sipping{" "}
                <span className="bg-gradient-to-r from-[#1488CC] from-10%  to-[#2B32B2] to-80% text-transparent bg-clip-text">
                  a cup of chai.
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
