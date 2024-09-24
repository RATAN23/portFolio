import "./App.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Header from "./components/header";
import { Analytics } from "@vercel/analytics/react";
import { DarkModeProvider } from "./context/darkMode";

function App() {
  return (
    <>

      <Analytics />
      <DarkModeProvider>
        <div className="h-screen ">
          <Navbar />
          {/* Header Section */}
          <Header />

          {/* About me Section */}
          <section className="snap-start">
            <AboutMe />
          </section>

          {/* Skills section */}
          <Skills />

          {/* Experience */}
          <section className="snap-center">
            <Experience />
          </section>

          {/* Contact me */}
          <Contact />
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
