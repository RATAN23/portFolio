import { cn } from "../lib/utils.js";
import Marquee from "./marquee.jsx";
import Stacks from "../../data/stacks.js";
import { useEffect, useState } from "react";

const stackArray = Object.entries(Stacks).map(([name, icon]) => ({
  name,
  icon,
}));
const firstRow = stackArray.slice(0, Math.ceil(stackArray.length / 4));
const secondRow = stackArray.slice(Math.ceil(stackArray.length / 4));
// const thirdRow = stackArray.
const randomRow = generateRandomEntries(stackArray, 5);

function generateRandomEntries(sourceArray, count) {
  const randomEntries = [];
  const sourceLength = sourceArray.length;
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * sourceLength);
    randomEntries.push(sourceArray[randomIndex]);
  }
  return randomEntries;
}

const Skills = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl pt-16">
      <div className="top-[40px] md:absolute md:top-[20%] lg:absolute   uppercase tracking-[5px] md:tracking-[20px] lg:tracking-[20px] text-gray-400 text-2xl">
        Skills
      </div>
      <div className="flex flex-col h-1/2 w-full md:w-1/2 lg:w-1/2 items-center justify-center overflow-hidden rounded-lg">
        <Marquee reverse pauseOnHover gap="3rem">
          {firstRow.map((stack, index) => (
            <div key={index} className="flex flex-row">
              {stack.icon}
              <span>{stack.name}</span>
            </div>
          ))}
        </Marquee>

        <Marquee pauseOnHover gap="3rem">
          {secondRow.map((stack, index) => (
            <div key={index} className="flex flex-row">
              {stack.icon}
              <span>{stack.name}</span>
            </div>
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover gap="3rem">
          {randomRow.map((stack, index) => (
            <div key={index} className="flex flex-row">
              {stack.icon}
              <span>{stack.name}</span>
            </div>
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default Skills;
