import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { data } from "../data/data";
const Projects = () => {
  // const [projectData, setProjectData] = useState(data);
  return (
    <section id="projects" className="projects common-section-head">
      <div className="portfolio common-section-head-inner">
        <h2>Projects</h2>
        <p>Projects are the only way to upscale your skills!🤝🏻</p>
      </div>
      {data.map((items, index) => {
        return <ProjectCard key={index} {...items} index={index} />;
      })}
    </section>
  );
};

export default Projects;
