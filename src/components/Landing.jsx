import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Landing = () => {
  const { about } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (about) {
      setLoading(false);
    }
  }, [about]);

  const defaultImage = {
    contentType: "image/png",
    data: "", // default empty base64 string
  };

  const handleResumeDownload = (
    resumeData = "",
    resumeContentType = "application/pdf"
  ) => {
    const blob = new Blob(
      [Uint8Array.from(atob(resumeData), (c) => c.charCodeAt(0))],
      { type: resumeContentType }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  return (
    <section id="profile">
      <div className="section__pic-container">
        {about?.first_image_url && about.first_image_url.length > 0 ? (
          <img className="regalia" src={about.first_image_url} alt="" />
        ) : (
          <Skeleton className="regalia" />
        )}
      </div>
      <div className="section__text">
        <p className="section__text__p1">{about?.greetings ?? <Skeleton />}</p>
        <h1 className="title">{about?.full_name ?? <Skeleton />}</h1>
        <p className="section__text__p2">{about?.title ?? <Skeleton />}</p>
        <div className="btn-container">
          {about?.first_image_url && about.first_image_url.length > 0 ? (
            <button
              className="btn btn-color-2"
              onClick={() =>
                handleResumeDownload(
                  about?.resume?.data,
                  about?.resume?.contentType
                )
              }
            >
              Download CV
            </button>
          ) : (
            <Skeleton width="8rem" borderRadius="2rem" height="3rem" />
          )}
          {about?.first_image_url && about.first_image_url.length > 0 ? (
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.location.hash = "#contact";
              }}
            >
              Contact Info
            </button>
          ) : (
            <Skeleton width="8rem" borderRadius="2rem" height="3rem" />
          )}
        </div>
        <div id="socials-container">
          {about?.first_image_url && about.first_image_url.length > 0 ? (
            <FaLinkedin
              className="icon"
              onClick={() => {
                if (about?.linkedin) {
                  window.open(about.linkedin, "_blank");
                }
              }}
            />
          ) : (
            <Skeleton width="3rem" borderRadius="50%" height="3rem" />
          )}
          {about?.first_image_url && about.first_image_url.length > 0 ? (
            <FaGithub
              className="icon"
              onClick={() => {
                if (about?.github) {
                  window.open(about.github, "_blank");
                }
              }}
            />
          ) : (
            <Skeleton width="3rem" borderRadius="50%" height="3rem" />
          )}
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
