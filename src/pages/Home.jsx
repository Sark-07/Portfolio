import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaDiscord, FaLinkedinIn } from 'react-icons/fa';
import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as Mysql } from '../assets/mysql.svg';
import { ReactComponent as Html } from '../assets/html.svg';
import { ReactComponent as JavaScript } from '../assets/javascript.svg';
import { ReactComponent as Node } from '../assets/node.svg';
import { ReactComponent as MongoDB } from '../assets/mongo.svg';
import { ReactComponent as Tailwind } from '../assets/tailwind.svg';
import { ReactComponent as Css } from '../assets/css.svg';
import { ReactComponent as Python } from '../assets/python.svg';
import { ReactComponent as Java } from '../assets/java.svg';
import './__test__/test.css';
const Home = () => {
  return (
    <main id='home' className='home-parent'>
      <article className='home'>
        <section className='grid'>
          <div className='left'>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Hi!! there I'm Pritam!",
                    'Web Developer ✌🏻',
                    'Web3 & AI/ML Enthusiast.',
                    'Cover Designer.',
                  ],
                  pauseFor: 3000,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>
              Hi! I'm Pritam Sarkar. A passionate Web Developer from Kolkata.
            </p>
            <div className='social-icons'>
              <a href="https://www.github.com/sark-07">
              <FaGithub className='icons' /> 
              </a>
              <a href="https://discord.gg/VmuEuMsZ">
              <FaDiscord className='icons' />
              </a>
              <a href="https://www.linkedin.com/in/pritam-sarkar-06208a260/">
              <FaLinkedinIn className='icons' />
              </a>
            </div>
          </div>
          <div className='right'>
            <div className=' gooey'></div>
          </div>
        </section>
        {/* <ul className='technology'>
          <li className='fst-child'>
            Technology <span className='or'>|</span>
          </li>
          <li>
            <JavaScript />
          </li>
          <li>
            <Python />
          </li>
          <li>
            <Java />
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
        </ul> */}
      </article>
    </main>
  );
};

export default Home;
