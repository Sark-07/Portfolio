import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <section className="container">
      <Navbar />
      <Home />
      <AboutMe />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
