import { FaGithub } from "react-icons/fa";
import { BiLinkExternal, BiCube } from "react-icons/bi";
import "./__test__/test.css";

const ProjectCard = ({ project, description, technologies, index, img }) => {
  console.log(technologies);
  return (
    <section className="project-card">
      <div className={`project-card-left ${index % 2 !== 0 && "odd-left"}`}>
        <img src={img} alt="" />
      </div>
      <div className={`project-card-right ${index % 2 !== 0 && "odd-right"}`}>
        <h3>
          {project} <BiCube />
        </h3>
        <p>{description}</p>
        <div className="tech-used">
          {technologies.map((items, index) => {
            return <span key={index}>{items}</span>;
          })}
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
