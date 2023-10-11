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
              <p>React Developer</p>
            </div>
            <p>
            Hello there! My name is Pritam and I come from Kolkata, India. I have completed my Bachelor's degree from Vivekananda College and I am currently pursuing my MCA from Calcutta University. As a technology enthusiast, I enjoy exploring new technologies and I specialize in web development and design using MERN stack. I have experience with React JS, Node JS, Express JS, Tailwind CSS, HTML, MongoDB, SQL, Adobe Photoshop, and Figma. Additionally, I am also a cover designer and have had the opportunity to work with a few authors.

            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
