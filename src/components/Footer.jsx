import React from "react";
import { FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="copyright">
        <p>
          copyright <sup> &#xa9; </sup>
          {new Date().getFullYear()} | All rights reserved{" "}
        </p>
      </div>
      <div className="social-icons">
        <FaFacebook className="footer-icons" />
        <FaGithub className="footer-icons" />
        <FaDiscord className="footer-icons" />
      </div>
    </section>
  );
};

export default Footer;
