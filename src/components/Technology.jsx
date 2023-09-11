import React from 'react';
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
import { ReactComponent as Figma } from '../assets/figma.svg';
import { ReactComponent as Git } from '../assets/git.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import {SiC, SiCplusplus, SiAdobephotoshop} from 'react-icons/si'
import './__test__/test.css'
import { SiFigma } from 'react-icons/si';
const Technology = () => {
  return (
    <div className="tech">
        <h2>Technologies & Tools</h2>
      <ul>
        <li>
          <SiC style={{fontSize: '2.5rem', color: '#a4b1d3'}}/>
        </li>
        <li>
          <SiCplusplus style={{fontSize: '2.5rem', color: '#6f8fe2'}}/>
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
        <li>
          <Git />
        </li>
        <li>
          <Github />
        </li>
        <li>
          <SiAdobephotoshop style={{fontSize: '2.5rem', color: '#172633'}}/>
        </li>
        <li>
          <Figma />
        </li>
      </ul>
    </div>
  );
};

export default Technology;
