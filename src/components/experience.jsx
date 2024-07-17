import React from "react";
import { Experiences } from "../../data/experience.js";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col relative h-screen text-center overflow-visible md:text-left md:flex-row max-w-6xl md:px-10 justify-evenly items-center mx-auto pt-16">
        <div className="top-[18%] absolute md:absolute md:top-[20%] lg:top-[25%]  uppercase tracking-[10px] md:tracking-[20px] lg:tracking-[30px] text-gray-400 text-2xl">
          Experience
        </div>
        <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin">
          {Experiences.map((val, index) => {
            return (
              <article className="flex flex-col rounded-r-lg flex-shrink-0 snap-center backdrop-blur-sm font-outfit bg-[#f5f7fa] overflow-hidden md:py-14 py-10 md:mt-10 border-l-2 border-gray-300 hover:border-[#764ba2] md:max-w-3xl max-w-xs md:px-0 px-5 select-none">
                <div className="flex items-center md:pl-10">
                  <motion.img
                    initial={{ opacity: 0, x: -5 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src={val.logo}
                    className="object-cover h-12 w-12 rounded object-center xl:w-[60px] xl:h-[60px]"
                    alt=""
                    loading="lazy"
                  />
                  <div className="md:pl-4 pl-6 text-left">
                    <h4 className="md:text-xl text-lg font-medium md:font-semibold text-black ">
                      {val.title}
                    </h4>
                    <p className="font-medium text-sm md:text-base md:pt-1 text-gray-800">
                      {val.company}
                    </p>
                  </div>
                </div>

                <div className="px-0 md:px-10 text-left mt-6">
                  <p className="lowercase py-2 text-sm text-gray-800 dark:text-gray-400">
                    {val.startDate} - {val.endDate}
                  </p>

                  <ul className="list-disc space-y-4 ml-5 dark:font-light font-normal text-black md:text-base lg:text-base mt-4 text-sm">
                    <li>{val.point1}</li>
                    <li>{val.point2}</li>
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Experience;
