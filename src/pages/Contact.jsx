import React from "react";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Mobile } from "../assets/mobile.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="title">
        <h2>Contact</h2>
        <p>Oh com'on just ping me up 🤙🏻</p>
      </div>
      <div className="contact-info">
        <div className="common phone">
          <Mobile />
          <div className="inner">
            <h3>Phone</h3>
            <p>8777721852</p>
          </div>
        </div>
        <div className="common mail">
          <Gmail />
          <div className="inner">
            <h3>Gmail</h3>
            <p>sarkarwork7@gmail.com</p>
          </div>
        </div>
        <div className="common address">
          <Location />
          <div className="inner">
            <h3>Location</h3>
            <p>Behala, Kolkata</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
