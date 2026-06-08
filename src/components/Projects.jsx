import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiFileText,
  FiMapPin,
  FiServer,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { featuredProject, projects } from "../data";
import { FeaturedBuildSkeleton, ProjectCardSkeleton } from "./LoadingStates";

const projectIcons = [FiFileText, FiServer, FiMapPin];

const Projects = () => {
  const selectedProjects = projects
    .filter((project) => project.homepage && project.type === "selected-system")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  return (
    <section id="work" className="section work-section">
      {featuredProject ? (
        <article className="featured-card">
          <div className="featured-card__content">
            <p className="eyebrow">
              {featuredProject.eyebrow || "Featured build"}
            </p>
            <h2>{featuredProject.title || featuredProject.project_name}</h2>
            <p>{featuredProject.description}</p>

            <ul className="feature-list">
              {featuredProject.highlights.map((highlight) => (
                <li key={highlight}>
                  <FiCheckCircle aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="featured-card__visual">
            <img
              src={
                featuredProject.featured_build_image || featuredProject.image
              }
              alt={`${featuredProject.title || featuredProject.project_name} product preview`}
            />
            <div className="quote-card">
              <span>&ldquo;</span>
              <p>
                Nganya Transit was built to solve a real daily problem for
                thousands of commuters in Nairobi.
              </p>
              <strong>A product built with purpose.</strong>
            </div>
          </div>

          <div className="card-actions">
            <Link
              className="inline-link featured-card__action featured-card__action--primary"
              to="/work"
            >
              View Case Study <FiArrowRight aria-hidden="true" />
            </Link>
            <a
              className="inline-link featured-card__action featured-card__action--secondary"
              href={featuredProject.liveDemoUrl || featuredProject.demo_link}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </article>
      ) : (
        <FeaturedBuildSkeleton />
      )}

      <div className="systems-card">
        <div className="systems-card__header">
          <p className="eyebrow">Selected systems</p>
          <Link className="systems-card__link" to="/work">
            View all <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="project-grid" aria-label="Selected systems">
          {selectedProjects.length > 0
            ? selectedProjects.map((project, index) => {
                const Icon = projectIcons[index] || FiFileText;
                const title = project.title || project.project_name;
                const liveDemoUrl = project.liveDemoUrl || project.demo_link;

                return (
                  <a
                    className="project-card"
                    key={project.id || title}
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${title}`}
                  >
                    <div className="project-card__main">
                      <div className="project-card__icon">
                        <Icon aria-hidden="true" />
                      </div>
                      <div className="project-card__body">
                        <h3>{title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </div>
                    <div className="project-card__meta">
                      <div className="tag-row project-card__tags">
                        {project.tech.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <span className="project-card__arrow" aria-hidden="true">
                        <FiArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                );
              })
            : [0, 1, 2].map((item) => <ProjectCardSkeleton key={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
