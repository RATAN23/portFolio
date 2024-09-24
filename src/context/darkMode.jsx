import { createContext, useEffect, useState } from "react";

export const darkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [isDarkMode , setDarkMode] = useState(false);

    useEffect(()=>{
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
    } , [isDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <darkModeContext.Provider value ={{isDarkMode , toggleDarkMode}}>
            {children}
        </darkModeContext.Provider>
    )
};

