import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const { about } = useContext(UserContext);
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <MdOutlineMarkEmailUnread
            className="icon"
            onClick={() => {
              window.open("mailto:mwangikariuki586@gmail.com");
            }}
          />
          <p>
            <a href="mailto:mwangikariuki586@gmail.com">Email Me</a>
          </p>
        </div>
        <div className="contact-info-container">
          <FaLinkedin
            className="icon"
            onClick={() => {
              window.open(about.linkedin, "_blank");
            }}
          />
          <p>
            <a href={about.linkedin} target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
