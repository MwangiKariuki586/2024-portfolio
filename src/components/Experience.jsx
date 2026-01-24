import React, { useContext } from "react";
import experience_icon from "../assets/checkmark.png";
import UserContext from "../context/UserContext";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { frontendexperience, databasesxperience, backendexperience } from "../data";
const Experience = () => {
  // const { frontendexperience, backendexperience, databasesxperience } =
  //      useContext(UserContext);
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {frontendexperience && frontendexperience?.length > 0 ? (
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend</h2>
              <div className="article-container">
                {frontendexperience?.map((frontend, id) => (
                  <article key={id}>
                    <img
                      src={experience_icon}
                      alt="Experience icon"
                      className="png-icon"
                    />
                    <div className="article__text">
                      <h5 className="experience-tech-title">{frontend.technology}</h5>
                      <p>{frontend.level_rank ? frontend.level_rank <= 1 ? `${frontend.level_rank} year` : `${frontend.level_rank} years` : ""}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="centered">
              <Skeleton width={200} height={200} borderRadius="2rem" />
            </div>
          )}
          {backendexperience && backendexperience?.length > 0 ? (
            <div className="details-container">
              <h2 className="experience-sub-title">Backend</h2>
              <div className="article-container">
                {backendexperience?.map((backend, id) => (
                  <article key={id}>
                    <img
                      src={experience_icon}
                      alt="Experience icon"
                      className="png-icon"
                    />
                    <div className="article__text">
                      <h5 className="experience-tech-title">{backend.technology}</h5>
                      <p>{backend.level_rank ? backend.level_rank <= 1 ? `${backend.level_rank} year` : `${backend.level_rank} years` : ""}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="centered">
              <Skeleton width={200} height={200} borderRadius="2rem" />
            </div>
          )}
          {databasesxperience && databasesxperience?.length > 0 ? (
            <div className="details-container">
              <h2 className="experience-sub-title">Databases</h2>
              <div className="article-container">
                {databasesxperience?.map((database, id) => (
                  <article key={id}>
                    <img
                      src={experience_icon}
                      alt="Experience icon"
                      className="png-icon"
                    />
                    <div className="article__text">
                      <h5 className="experience-tech-title">{database.technology}</h5>
                      <p>{database.level_rank ? database.level_rank <= 1 ? `${database.level_rank} year` : `${database.level_rank} years` : ""}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="centered">
              <Skeleton width={200} height={200} borderRadius="2rem" />
            </div>
          )}
        </div>
      </div>
      <MdOutlineKeyboardDoubleArrowDown
        className="icon arrow"
        onClick={() => {
          window.location.hash = "#projects";
        }}
      />
    </section>
  );
};

export default Experience;
