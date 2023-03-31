import React from "react";
import brand from "../assets/vite.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="brand">
          <img src={brand} alt="" />
          <h4>Vite</h4>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="contact">
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
