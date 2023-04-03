import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <div className="portfolio">
        <h2>Portfolio</h2>
        <p>Projects is the only way to upscale your skills!🤝🏻</p>
      </div>
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default Projects;
