import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal, BiCube } from "react-icons/bi";
import "./__test__/test.css";

const ProjectCard = () => {
  return (
    <section className="project-card">
      <div className="project-card-left">
        <img
          src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="project-card-right">
        <h3>
          Discord <BiCube />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus,
          ipsam enim quidem, ipsum blanditiis doloribus, autem officia neque qui
          sed quisquam commodi odio soluta.
        </p>
        <div className="tech-used">
          <span>React</span>
          <span>Vanilla CSS</span>
        </div>
        <div className="source-code-and-demo">
          <span>
            <p>Source</p>
            <FaGithub className="card-icon" />
          </span>
          <span>
            <p>Live Demo</p>
            <BiLinkExternal className="card-icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
