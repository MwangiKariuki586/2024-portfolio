import React from "react";
import about_icon from "../assets/about.png";
import experience_icon from "../assets/quality.png";
import project_icon from "../assets/project-management.png";
import contact_icon from "../assets/letter.png";
const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">
                <img className="about-icon" src={about_icon} alt="" />
              </a>
            </li>
            <li>
              <a href="#experience">
                <img className="about-icon" src={experience_icon} alt="" />
              </a>
            </li>
            <li>
              <a href="#projects">
                <img className="about-icon" src={project_icon} alt="" />
              </a>
            </li>
            {/* <li>
              <a href="#contact">
                <img className="about-icon" src={contact_icon} alt="" />
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Alex Mwangi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
