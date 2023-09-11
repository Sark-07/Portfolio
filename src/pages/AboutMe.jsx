import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <main className="about-grid">
        <div className="about-left">
          <img
            src="https://ideogram.ai/api/images/direct/IAjEAYy8SMimAx311puKAQ"
            alt="About Image"
          />
        </div>
        <div className="about-right">
          <div className="about-right-inner">
            <h2>About me</h2>
            <div className="name-desg">
              <h2>Pritam Sarkar</h2>
              <p>Web Developer</p>
            </div>
            <p>
              Hi, I am Pritam from Kolkata, India. I have completed my bachelors
              from Vivekananda college and right now I'm pursuing MCA from
              Calcutta University. I am a technology enthusiast and love to
              explore new technologies. I am a web developer and designer and I
              mostly work in Javascript. I know React js, node js, express js,
              tailwind css, html, mongodb, sql, Adobe photoshop, figma. Apart
              from this I am a cover designer and I have worked for a few authors.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
