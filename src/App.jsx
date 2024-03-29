import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Technology from "./components/Technology";
import FreelanceWork from "./pages/FreelanceWork";

const App = () => {
  return (
    <section className="container">
      <Navbar />
      <Home />
      <Technology/>
      <AboutMe />
      <Projects />
      <FreelanceWork/>
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
