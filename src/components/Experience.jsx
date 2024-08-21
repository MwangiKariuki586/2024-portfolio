import React, { useContext } from "react";
import experience_icon from "../assets/checkmark.png";
import UserContext from "../context/UserContext";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
const Experience = () => {
  const { frontendexperience, backendexperience, databasesxperience } =
    useContext(UserContext);
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
                    <div>
                      <h3>{frontend.technology}</h3>
                      <p>{frontend.level_rank} years</p>
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
                    <div>
                      <h3>{backend.technology}</h3>
                      <p>{backend.level_rank} years</p>
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
          {databasesxperience && backendexperience?.length > 0 ? (
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
                    <div>
                      <h3>{database.technology}</h3>
                      <p>{database.level_rank} years</p>
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
