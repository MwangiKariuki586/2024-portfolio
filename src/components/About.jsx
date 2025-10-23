import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import experience_logo from "../assets/experience.png";
import education_logo from "../assets/education.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { about } from "../data";

const About = () => {
  // const { about } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (about) {
  //     setLoading(false);
  //   }
  // }, [about]);

  const defaultImage = {
    contentType: "image/png",
    data: "", // default empty base64 string
  };

  // if (loading) {
  //   return <div>Loading...</div>; // Display a loading message or spinner
  // }

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          {about.second_image_url && about.second_image_url.length > 0 ? (
            <img
              src={about?.second_image_url}
              alt="Profile picture"
              className="about-pic"
            />
          ) : (
            <Skeleton className="about-pic" />
          )}
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
              {about.second_image_url && about.second_image_url.length > 0 ? (
                <p>
                  {about?.years_of_experience ?? ""} years of <br />
                  Fullstack Development
                </p>
              ) : (
                <Skeleton count={3} borderRadius="2rem" />
              )}
            </div>

            <div className="details-container">
              <img
                src={education_logo}
                alt="Education icon"
                className="png-icon"
              />
              <h3>Education</h3>
              <p>
                {about?.course_studied ?? (
                  <Skeleton count={3} borderRadius="2rem" />
                )}
              </p>
              <h5>KCA Universtity</h5>
            </div>
          </div>
          <div className="text-container">
            <p>
              {about?.description ?? (
                <Skeleton height={150} borderRadius="2rem" />
              )}
            </p>
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
