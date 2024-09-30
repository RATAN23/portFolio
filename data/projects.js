import StackIcon from "tech-stack-icons";
import React from "react";
import coreSync from '/src/assets/coreSync.jpg';
const style = { width: "30px", height: "22px" };

export const project = [
    {
        name : "CoreSync",
        github : "",
        progress : "Building",
        description : "CoreSync is a powerful project management and development tool, built with ReactJS for seamless task tracking. Inspired by platforms like Kanban and JIRA, it offers efficient workflow management for teams.",
        stack : {
            JavaScript: React.createElement(StackIcon, { name: "js", style }),
            ReactJs: React.createElement(StackIcon, { name: "reactjs", style }),
            HTML: React.createElement(StackIcon, { name: "html5", style }),
            TailwindCSS: React.createElement(StackIcon, { name: "tailwindcss", style }),
        },
        image : coreSync,
        github : "https://github.com/RATAN23/kanBan"
    }
]