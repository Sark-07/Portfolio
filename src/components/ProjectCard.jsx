import { FaGithub } from "react-icons/fa";
import { BiLinkExternal, BiCube } from "react-icons/bi";
import "./__test__/test.css";
import { useRef } from "react";

const ProjectCard = ({
  project,
  description,
  technologies,
  index,
  img,
  repo,
  translateY,
}) => {
  const im = useRef();
  return (
    <section className="project-card">
      <div className={`project-card-left ${index % 2 !== 0 && "odd-left"}`}>
        <img
          ref={im}
          src={img}
          alt=""
          onMouseOver={() =>
            (im.current.style.transform = `translateY(${translateY}%)`)
          }
          onMouseOut={() => (im.current.style.transform = "translateY(0)")}
        />
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
            <a href={repo}>
              <p className="source-code">Source</p>
            </a>

            <FaGithub className="card-icon" />
          </span>
          {/* <span>
            <p>Live Demo</p>
            <BiLinkExternal className="card-icon" />
          </span> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
