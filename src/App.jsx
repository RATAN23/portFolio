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
        <Experience />

        {/* Contact me */}
        <Contact />
      </div>
     
    </>
  );
}

export default App;
