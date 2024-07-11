import "./App.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Header from "./components/header";

function App() {
  return (
    <>
      <Navbar />
      {/* Header Section */}
      <Header/>

      {/* About me Section */}
      <AboutMe/>

      {/* Skills section */}
      <Skills/>

      {/* Experience */}
      <Experience/>

      {/* Contact me */}
      <Contact/>

    </>
  );
}

export default App;
