import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <section className="container">
      <Navbar />
      <Home />
      <AboutMe />
    </section>
  );
};

export default App;
