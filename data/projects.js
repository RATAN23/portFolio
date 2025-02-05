import StackIcon from "tech-stack-icons";
import React from "react";
import coreSync from "/src/assets/coreSync.jpg";
import stockup from "/src/assets/stockup.jpeg";
import portfolio from "/src/assets/portfolio.png"

const style = { width: "30px", height: "22px" };

export const project = [
  {
    name: "StockUp",
    progress: "Building",
    description:
      "Stock Up is an inventory management system, built with NextJS and NodeJS for seamless inventory tracking",
    stack: {
      NextJS: React.createElement(StackIcon, { name: "nextjs2", style }),
      TypeScript: React.createElement(StackIcon, { name: "typescript", style }),
      NodeJS: React.createElement(StackIcon, { name: "nodejs", style }),
      AWS: React.createElement(StackIcon, { name: "aws", style }),
      HTML: React.createElement(StackIcon, { name: "html5", style }),
      TailwindCSS: React.createElement(StackIcon, {
        name: "tailwindcss",
        style,
      }),
    },
    image: stockup,
    github: "https://github.com/RATAN23/Stockit",
    link: "https://main.d2v63p0dorebav.amplifyapp.com/",
  },
  {
    name: "CoreSync",
    progress: "Building",
    description:
      "CoreSync is a powerful project management and development tool, built with ReactJS for seamless task tracking. Inspired by platforms like Kanban and JIRA, it offers efficient workflow management for teams.",
    stack: {
      JavaScript: React.createElement(StackIcon, { name: "js", style }),
      ReactJs: React.createElement(StackIcon, { name: "reactjs", style }),
      HTML: React.createElement(StackIcon, { name: "html5", style }),
      TailwindCSS: React.createElement(StackIcon, {
        name: "tailwindcss",
        style,
      }),
    },
    image: coreSync,
    github: "https://github.com/RATAN23/coreSync",
    link: "",
  },
  {
    name: "Portfolio",
    progress: "Live",
    description:
      "ReactJs was used to create the portfolio website. TailwindCSS and Framer motion were used to style the website",
    stack: {
      ReactJS: React.createElement(StackIcon, { name: "reactjs", style }),
      JavaScript: React.createElement(StackIcon, { name: "js", style }),
      HTML: React.createElement(StackIcon, { name: "html5", style }),
      TailwindCSS: React.createElement(StackIcon, {
        name: "tailwindcss",
        style,
      }),
      Framer: React.createElement(StackIcon, { name: "framer", style }),
      MaterialUI :  React.createElement(StackIcon, { name: "materialui", style })
    },
    image: portfolio,
    github: "https://github.com/RATAN23/portFolio",
    link: "https://ratanghasti.in",
  },
];

// <StackIcon name="aws" /><StackIcon name="framer" />
