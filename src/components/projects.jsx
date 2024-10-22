import React from "react";
import Card from "./cards";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";


const Projects = () => {
  return (
    <div className="flex flex-col gap-2 relative min-h-screen py-16 px-4 dark:text-black justify-center items-center">
      <div className="absolute top-[7rem] sm:top-28 md:top-56 lg:top-60 xl:top-48">
      <h2 className="text-3xl uppercase tracking-[10px] md:tracking-[20px] lg:tracking-[25px] text-gray-400 text-center mb-8">
        Projects
      </h2>
      </div>

      <div className="flex items-center xl:pt-5">
        <Card   
        customPrevButton={(onClick) => (
          <button
            onClick={onClick}
            className="mr-2"
          >
          <ArrowBigLeftDash className="w-10 h-10 dark:text-gray-300"/>
          </button>
        )}
        customNextButton={(onClick) => (
          <button
           className="ml-2"
            onClick={onClick}
          >
        <ArrowBigRightDash  className="w-10 h-10 dark:text-gray-300"/>
          </button>
        )}/>
      </div>
    </div>
  );
};

export default Projects;
