import React, { useState } from "react";
import { project } from "../../data/projects";

const Card = ({ customPrevButton, customNextButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center">
      {customPrevButton instanceof Function ? (
        customPrevButton(goToPrev)
      ) : (
        <button className="btn prev" onClick={goToPrev}>
          Prev
        </button>
      )}
      <div className="flex justify-between">
        {/* Show only the current project instead of mapping all */}
        <div className="flex flex-col border-2 border-gray-100 rounded-xl bg-[#e1e2e1] w-full max-w-[300px] max-h-[500px] md:max-h-[500px] md:max-w-[400px] lg:max-h-[600px] overflow-hidden">
          <div className="h-[150px] md:max-h-[300px] w-full">
            <img
              className="w-full h-full object-fill rounded-t-xl"
              src={project[currentIndex].image}
              alt={project[currentIndex].name}
            />
          </div>
          <div className="flex flex-col justify-between bg-[#e1e2e2] gap-4 p-6">
            <h4 className="font-semibold text-2xl">{project[currentIndex].name}</h4>
            <div className="flex items-center space-x-4">
              <a
                className="font-medium text-sm underline flex items-center"
                href={project[currentIndex].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                >
                  <path d="M18 5v2h5.56L11.28 19.28l1.44 1.44L25 8.44V14h2V5h-9zM5 9v18h18V14l-2 2v9H7V11h9l2-2H5z"></path>
                </svg>
              </a>
              <div className="flex items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1fd655] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1fd655]"></span>
                </span>
                {project[currentIndex].link ? (
                  <a
                    className="font-medium text-sm underline flex items-center"
                    href={project[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project[currentIndex].progress}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                    >
                      <path d="M18 5v2h5.56L11.28 19.28l1.44 1.44L25 8.44V14h2V5h-9zM5 9v18h18V14l-2 2v9H7V11h9l2-2H5z"></path>
                    </svg>
                  </a>
                ) : (
                  <span className="font-medium text-sm">
                    {project[currentIndex].progress}
                  </span>
                )}
              </div>
            </div>
            <div className="">
            <p className="text-sm leading-relaxed md:text-lg lg:text-base">
              {project[currentIndex].description}
            </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Stack:</span>
              <div className="flex flex-wrap">
                {Object.entries(project[currentIndex].stack).map(
                  ([key, value]) => (
                    <div key={key} className="rounded px-2 py-1">
                      {value}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {customNextButton instanceof Function ? (
        customNextButton(goToNext)
      ) : (
        <button className="btn next" onClick={goToNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default Card;