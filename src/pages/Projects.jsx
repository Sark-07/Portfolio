import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { data } from "../data/data";
const Projects = () => {
  const [projectData, setProjectData] = useState(data);
  return (
    <section className="projects">
      <div className="portfolio">
        <h2>Projects</h2>
        <p>Projects is the only way to upscale your skills!🤝🏻</p>
      </div>
      {projectData.map((items, index) => {
        return <ProjectCard key={index} {...items} index={index} />;
      })}
    </section>
  );
};

export default Projects;
