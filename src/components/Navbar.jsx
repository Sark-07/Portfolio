import React, { useState } from "react";
import {FaPiedPiperAlt} from 'react-icons/fa'
import { Cross as Hamburger } from "hamburger-react";
// import brand from "../assets/vite.svg";

const Navbar = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <>
      <nav
        className="nav-desk
      "
      >
        <div className="brand">
          {/* <img src={brand} alt="" /> */}
          <FaPiedPiperAlt/>

          {/* <h4> */}
          <a href="https://portfolio-sark-07.vercel.app/">Prime</a>
          {/* </h4> */}
        </div>
        <ul className="nav-elements">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#freelance-work">Freelance Work</a>
          </li>
        </ul>
        <div className="contact nav-elements">
          <a href="#contact">Contact</a>
        </div>
        <div className="bars" style={{ color: "whitesmoke" }}>
          <Hamburger
            toggled={rotate}
            toggle={setRotate}
            rounded
            easing="ease-in-out"
            duration={0.2}
            direction="right"
            size={30}
          />
        </div>
      </nav>
      <nav className={`${rotate && "mobile-nav-slide"} mobile-nav`}>
        <ul className="mobile-nav-elements">
          <li
            onClick={() => {
              setRotate(false);
            }}
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => {
              setRotate(false);
            }}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => {
              setRotate(false);
            }}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={() => {
              setRotate(false);
            }}
          >
            <a href="#freelance-work">Freelance Work</a>
          </li>
          <li
            onClick={() => {
              setRotate(false);
            }}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
