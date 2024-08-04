import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">3mkay</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Emkay</div>
        <div className="hamburger-menu">
          <div
            className={open ? "hamburger-icon open" : "hamburger-icon"}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={open ? "menu-links open " : "menu-links "}>
            <li className="blur-span" style={{ color: "#fff" }}>
              <MdClose className="close-icon" onClick={toggleMenu} />
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
