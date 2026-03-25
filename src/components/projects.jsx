import React from "react";
import Card from "./cards";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-16 px-4">
      {/* Title */}
      <div className="flex justify-center items-center pt-8 pb-3">
        <h2 className="text-3xl uppercase tracking-[10px] md:tracking-[20px] lg:tracking-[25px] text-gray-400 dark:text-gray-400 text-center">
          Projects
        </h2>
      </div>

      {/* Card area */}
      <div className="flex pt-3 justify-center items-center w-full">
        <div className="flex flex-row items-center justify-center w-full max-w-5xl mx-auto">
          <Card
            customPrevButton={(onClick) => (
              <button
                onClick={onClick}
                className="flex-shrink-0 mr-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous project"
              >
                <ArrowBigLeftDash className="w-10 h-10 text-gray-400 dark:text-gray-300" />
              </button>
            )}
            customNextButton={(onClick) => (
              <button
                onClick={onClick}
                className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Next project"
              >
                <ArrowBigRightDash className="w-10 h-10 text-gray-400 dark:text-gray-300" />
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;