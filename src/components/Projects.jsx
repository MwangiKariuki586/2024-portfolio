import React, { useContext } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import UserContext from "../context/UserContext";
import { staticfiles } from "../vaiables";
import Skeleton from "react-loading-skeleton";
import { projects } from "../data";
const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        {projects && projects.length > 0 ? (
          <div className="about-containers">
            {projects.map((project, id) => (
              <div key={id} className="details-container color-container">
                <div className="article-container">
                  <img
                    src={project.project_image}
                    alt={project.project_name}
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  {project.project_name}
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open(project.github_link, "_blank")}
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open(project.demo_link, "_blank")}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="project-skeletons">
            <Skeleton className="skeleton-size" borderRadius="2rem" />
            <Skeleton className="skeleton-size" borderRadius="2rem" />
            <Skeleton className="skeleton-size" borderRadius="2rem" />
          </div>
        )}
      </div>
      <MdOutlineKeyboardDoubleArrowDown
        className="icon arrow"
        onClick={() => {
          window.location.hash = "#contact";
        }}
      />
    </section>
  );
};

export default Projects;
