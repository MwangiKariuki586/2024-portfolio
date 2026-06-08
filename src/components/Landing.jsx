import { useState } from "react";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { about } from "../data";
import { CometLoader, HeroVisualSkeleton } from "./LoadingStates";

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [resumeLoading, setResumeLoading] = useState(false);

  const handleResumeDownload = () => {
    setResumeLoading(true);
    const link = document.createElement("a");
    link.href = about.resume;
    link.download = "Alex Mwangi Fullstack Developer Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => setResumeLoading(false), 600);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{about.intro_label}</p>
        <h1>
          I build practical
          <br />
          <span className="headline-nowrap">
            software for <span className="headline-accent">real</span>
          </span>
          <br />
          <span className="headline-accent headline-nowrap">
            world <span className="headline-underline">workflows.</span>
          </span>
        </h1>
        <p className="hero-copy__text">{about.hero_copy}</p>

        <div className="hero-actions">
          <a className="button button--primary" href="#work">
            View My Work <FiArrowRight aria-hidden="true" />
          </a>
          {/* <button className="text-action" type="button" onClick={handleResumeDownload}>
            {resumeLoading ? <CometLoader label="Preparing resume" /> : null}
            Download CV <FiDownload aria-hidden="true" />
          </button> */}
        </div>

        {/* <div className="connect-row">
          <span>Let&apos;s connect</span>
          <div className="social-row" aria-label="Contact shortcuts">
            <a href={about.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FiGithub />
            </a>
            <a href={about.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin />
            </a>
            <a href={`mailto:${about.email}`} aria-label="Email Alex">
              <FiMail />
            </a>
          </div>
        </div> */}
      </div>

      <div className="hero-visual">
        {!imageLoaded && <HeroVisualSkeleton />}
        <img
          className={`hero-visual__image ${imageLoaded ? "hero-visual__image--loaded" : ""}`}
          src={about.hero_showcase_image}
          alt="Nganya Transit laptop and mobile product showcase"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </section>
  );
};

export default Landing;
