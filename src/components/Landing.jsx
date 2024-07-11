import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { staticfiles } from "../vaiables";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Landing = () => {
  const { about } = useContext(UserContext);
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          className="regalia"
          src={`${staticfiles}${about.first_image}`}
          alt="Alex Mwangi picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{about.greetings}</p>
        <h1 className="title">{about.full_name}</h1>
        <p className="section__text__p2">{about.title}</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => {
              window.open(`${staticfiles}${about.resume}`, "_blank");
            }}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => {
              window.location.hash = "#contact";
            }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <FaLinkedin
            className="icon"
            onClick={() => {
              window.open(about.linkedin, "_blank");
            }}
          />

          <FaGithub
            className="icon"
            onClick={() => {
              window.open(about.github, "_blank");
            }}
          />
        </div>
      </div>
      {/* <MdOutlineKeyboardDoubleArrowDown
        className="icon arrow"
        onClick={() => {
          window.location.hash = "#about";
        }}
      /> */}
    </section>
  );
};

export default Landing;
