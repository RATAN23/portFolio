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

  const current = project[currentIndex];

  return (
    <div className="flex items-center justify-center gap-2">
      {customPrevButton instanceof Function ? (
        customPrevButton(goToPrev)
      ) : (
        <button onClick={goToPrev}>Prev</button>
      )}

      {/* Fixed-size card — never grows beyond this box */}
      <div className="flex flex-col border-2 border-gray-200 rounded-xl bg-[#e1e2e1] w-[300px] h-[450px] md:w-[420px] md:h-[450px] overflow-hidden flex-shrink-0">

        {/* Image — fixed height */}
        <div className="h-[180px] md:h-[220px] w-full flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-t-xl"
            src={current.image}
            alt={current.name}
          />
        </div>

        {/* Content — scrollable if it ever overflows */}
        <div className="flex flex-col gap-2 p-5 overflow-y-auto flex-2">

          {/* Name + GitHub link on same row */}
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-xl md:text-2xl dark:text-gray-700">{current.name}</h4>
            <a
              className="font-medium text-sm underline flex items-center gap-1 flex-shrink-0 dark:text-gray-700"
              href={current.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 32 32"
              >
                <path d="M18 5v2h5.56L11.28 19.28l1.44 1.44L25 8.44V14h2V5h-9zM5 9v18h18V14l-2 2v9H7V11h9l2-2H5z" />
              </svg>
            </a>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-700">
            {current.description}
          </p>

          {/* Stack */}
          <div className="flex items-start gap-2 mt-auto pt-2 border-t border-gray-300">
            <span className="font-medium text-sm flex-shrink-0 pt-1 dark:text-gray-700">Stack:</span>
            <div className="flex flex-wrap gap-1">
              {Object.entries(current.stack).map(([key, value]) => (
                <div key={key} className="rounded px-1 py-1" title={key}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {customNextButton instanceof Function ? (
        customNextButton(goToNext)
      ) : (
        <button onClick={goToNext}>Next</button>
      )}
    </div>
  );
};

export default Card;