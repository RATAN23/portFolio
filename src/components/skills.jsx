import { cn } from "../lib/utils.js";
import Marquee from "./marquee.jsx";
import Stacks from "../../data/stacks.js";

const stackArray = Object.entries(Stacks).map(([name, icon]) => ({
  name,
  icon,
}));
const firstRow = stackArray.slice(0, Math.ceil(stackArray.length / 4));
const secondRow = stackArray.slice(Math.ceil(stackArray.length / 4));
const randomRow = generateRandomEntries(firstRow, secondRow, stackArray, 5);

function generateRandomEntries(firstArray, secondArray, sourceArray, count) {
  const randomEntries = [];
  const sourceLength = sourceArray.length;
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * sourceLength);
    randomIndex < firstArray.length
      ? randomEntries.push(firstArray[randomIndex])
      : [];
    randomIndex < secondArray.length
      ? randomEntries.push(secondArray[randomIndex])
      : [];
  }
  return randomEntries;
}

const Skills = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-visible rounded-lg border bg-background md:shadow-xl pt-16">
      <div className="top-[28%] absolute md:top-[30%]  lg:top-[25%]   uppercase tracking-[15px] md:tracking-[20px] lg:tracking-[20px] text-gray-400 text-2xl">
        Skills
      </div>
      <div className="flex flex-col h-1/2 w-full md:w-1/2 lg:w-1/2 items-center justify-center overflow-hidden rounded-lg [mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)] ">
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
