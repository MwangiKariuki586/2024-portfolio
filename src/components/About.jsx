import { FiMapPin } from "react-icons/fi";
import { about, skillGroups } from "../data";
import { SkeletonBlock } from "./LoadingStates";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-card">
        <div className="about-card__image">
          {about.second_image_url ? (
            <img src={about.second_image_url} alt={`${about.full_name} profile`} />
          ) : (
            <SkeletonBlock className="profile-skeleton" />
          )}
        </div>

        <div className="about-card__content">
          <p className="eyebrow">About</p>
          <h2>{about.full_name}</h2>
          <p>{about.description}</p>
          <div className="location-pill">
            <FiMapPin aria-hidden="true" />
            {about.location}
          </div>
        </div>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item.technology}>{item.technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
