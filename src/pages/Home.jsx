import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as Mysql } from "../assets/mysql.svg";
import { ReactComponent as Html } from "../assets/html.svg";
import { ReactComponent as JavaScript } from "../assets/javascript.svg";
import { ReactComponent as Node } from "../assets/node.svg";
import { ReactComponent as MongoDB } from "../assets/mongo.svg";
import { ReactComponent as Tailwind } from "../assets/tailwind.svg";
import { ReactComponent as Css } from "../assets/css.svg";
import "./__test__/test.css";
const Home = () => {
  return (
    <main id="home" className="home-parent">
      <article className="home">
        <section className="grid">
          <div className="left">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Hi!! there I'm Pritam!",
                    "Web Developer ✌🏻",
                    "Web3 & AI/ML Enthusiast.",
                    "Cover Designer.",
                  ],
                  pauseFor: 3000,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>
              Hi! I'm Pritam Sarkar. A passionate Web
              Developer from Kolkata.
            </p>
            <div className="social-icons">
              <FaGithub className="icons" /> <FaDiscord className="icons" />
              <FaLinkedinIn className="icons" />
            </div>
          </div>
          <div className="right">
            <div className=" gooey"></div>
          </div>
        </section>
        <ul className="technology">
          <li className="fst-child">
            Technology <span className="or">|</span>
          </li>
          <li>
            <JavaScript />
          </li>
          <li>
            <ReactIcon />
          </li>
          <li>
            <Node />
          </li>
          <li>
            <MongoDB />
          </li>
          <li>
            <Mysql />
          </li>
          <li>
            <Tailwind />
          </li>
          <li>
            <Html />
          </li>
          <li>
            <Css />
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Home;
