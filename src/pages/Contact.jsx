import React, { useEffect, useState } from "react";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Mobile } from "../assets/mobile.svg";

const Contact = () => {
  const [copied, setCopied] = useState({ bool: false, val: "" });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied({ bool: false, val: "" });
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);
  return (
    <section id="contact" className="contact-section">
      <div className="title common-section-head-inner">
        <h2>Contact</h2>
        <p>Oh com'on just ping me up 🤙🏻</p>
      </div>
      <div className="contact-info">
        <div
          className="common phone"
          onClick={() => {
            navigator.clipboard.writeText(8777721852);
            setCopied({ bool: true, val: "Phone" });
          }}
        >
          <Mobile />
          <div className="inner">
            <h3>
              Phone
              <span
                className={
                  copied.bool === true && copied.val === "Phone"
                    ? "copied"
                    : "not-copied"
                }
              >
                &nbsp; Copied
              </span>
            </h3>
            <p>8777721852</p>
          </div>
        </div>

        <div
          className="common address"
          onClick={() => {
            navigator.clipboard.writeText("Behala, Kolkata");
            setCopied({ bool: true, val: "Location" });
          }}
        >
          <Location />
          <div className="inner">
            <h3>
              Location
              <span
                className={
                  copied.bool && copied.val === "Location"
                    ? "copied"
                    : "not-copied"
                }
              >
                &nbsp; Copied
              </span>
            </h3>
            <p>Behala, Kolkata</p>
          </div>
        </div>
        <div
          className="common mail"
          onClick={() => {
            navigator.clipboard.writeText("pritamsarkar.ps07@gmail.com");
            setCopied({ bool: true, val: "Gmail" });
          }}
        >
          <Gmail />
          <a
            style={{ color: "inherit" }}
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pritamsarkar.ps07@gmail.com"
          >
            <div className="inner">
              <h3>
                Gmail
                {/* <span
                className={
                  copied.bool && copied.val === "Gmail"
                    ? "copied"
                    : "not-copied"
                }
              >
                &nbsp; Copied
              </span> */}
              </h3>
              <p>pritamsarkar.ps07@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
