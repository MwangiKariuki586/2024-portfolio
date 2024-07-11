import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { staticfiles } from "../vaiables";
import experience_logo from "../assets/experience.png";
import education_logo from "../assets/education.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const About = () => {
  const { about } = useContext(UserContext);
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={`${staticfiles}${about.second_image}`}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experience_logo}
                alt="Experience icon"
                className="png-icon"
              />
              <h3>Experience</h3>
              <p>
                {about.years_of_experience} years <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img
                src={education_logo}
                alt="Education icon"
                className="png-icon"
              />
              <h3>Education</h3>
              <p>{about.course_studied}</p>
            </div>
          </div>
          <div className="text-container">
            <p>{about.description}</p>
          </div>
        </div>
      </div>
      <MdOutlineKeyboardDoubleArrowDown
        className="icon arrow"
        onClick={() => {
          window.location.hash = "#experience";
        }}
      />
    </section>
  );
};

export default About;
