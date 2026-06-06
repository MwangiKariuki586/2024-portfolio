import { useState } from "react";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { about, contactLinks } from "../data";
import { CometLoader, SkeletonBlock } from "./LoadingStates";

const linkIcons = {
  Email: FiMail,
  Resume: FiDownload,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
};

const linkLabels = {
  Email: "Email Me",
  Resume: "Download Resume",
};

const Contact = () => {
  const [resumeLoading, setResumeLoading] = useState(false);

  const handleClick = (event, link) => {
    if (link.label !== "Resume") return;

    event.preventDefault();
    setResumeLoading(true);
    window.open(link.href, "_blank", "noreferrer");
    window.setTimeout(() => setResumeLoading(false), 600);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <div className="contact-card__image">
          {about.full_name ? (
            <img src="/about_me/emkay-passport.png" alt={`${about.full_name} portrait`} />
          ) : (
            <SkeletonBlock className="profile-skeleton" />
          )}
        </div>

        <div className="contact-card__content">
          <h2>
            Let&apos;s build something <span>useful.</span>
          </h2>
          <p>
            I&apos;m open to full-stack roles, freelance projects, and collaborations around practical
            digital systems.
          </p>

          <div className="contact-actions">
            {contactLinks.map((link) => {
              const Icon = linkIcons[link.label];
              const displayLabel = linkLabels[link.label] || link.label;

              return (
                <a
                  className={`contact-action contact-action--${link.label.toLowerCase()}`}
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") || link.label === "Resume" ? "_blank" : undefined}
                  rel={link.href.startsWith("http") || link.label === "Resume" ? "noreferrer" : undefined}
                  onClick={(event) => handleClick(event, link)}
                >
                  {link.label === "Resume" && resumeLoading ? (
                    <CometLoader label="Opening resume" />
                  ) : (
                    Icon && <Icon aria-hidden="true" />
                  )}
                  {displayLabel}
                </a>
              );
            })}
          </div>
        </div>

        <div className="location-panel">
          <div className="location-panel__heading">
            <FiMapPin aria-hidden="true" />
            <span>{about.location}</span>
          </div>
          <p>Available for remote and on-site opportunities.</p>
        </div>
        <img className="contact-card__city" src="/nairobi.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Contact;
