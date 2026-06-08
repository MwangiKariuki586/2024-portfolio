import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiBox,
  FiCode,
  FiGithub,
  FiUsers,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { about, projects } from "../data";

const pageSize = 9;

const getProjectTitle = (project) => project.title || project.project_name;
const getProjectImage = (project) => project.image || project.project_image;
const getLiveDemoUrl = (project) => project.liveDemoUrl || project.demo_link;
const getGithubUrl = (project) => project.githubUrl || project.github_link;
const filters = ["All Projects", "Web Applications", "Mobile Applications"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [page, setPage] = useState(1);

  const visibleProjects = useMemo(() => {
    return [...projects]
      .filter((project) => {
        if (activeFilter === "All Projects") return true;
        return project.platform === activeFilter;
      })
      .sort((a, b) => a.priority - b.priority);
  }, [activeFilter]);

  const pageCount = Math.max(1, Math.ceil(visibleProjects.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pagedProjects = visibleProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const firstVisible =
    visibleProjects.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const lastVisible = Math.min(currentPage * pageSize, visibleProjects.length);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setPage(1);
  };

  return (
    <div>
      <Navbar />
      <main className="work-page">
        <section
          className="work-archive-hero"
          aria-labelledby="work-page-title"
        >
          <div className="work-archive-hero__copy">
            <p className="eyebrow eyebrow--dot">My work</p>
            <h1 id="work-page-title">
              Solutions that drive <span>real-world Impact.</span>
            </h1>
            <p>
              A collection of products I&apos;ve designed and built to solve
              practical problems, automate processes, and improve everyday
              operations.
            </p>
          </div>

          <div className="work-metrics" aria-label="Work summary">
            <div className="work-metric">
              <FiBox aria-hidden="true" />
              <div>
                <strong>{projects.length}+</strong>
                <span>Projects shipped</span>
              </div>
            </div>
            <div className="work-metric">
              <FiCode aria-hidden="true" />
              <div>
                <strong>{about.years_of_experience}+</strong>
                <span>Years building</span>
              </div>
            </div>
            <div className="work-metric">
              <FiUsers aria-hidden="true" />
              <div>
                <strong>Real</strong>
                <span>Users. Real impact.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="work-board" aria-label="Project archive">
          <div className="work-toolbar">
            <div
              className="filter-row filter-row--tabs"
              aria-label="Project filters"
            >
              {filters.map((filter) => (
                <button
                  className={`filter-chip ${activeFilter === filter ? "filter-chip--active" : ""}`}
                  type="button"
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <label className="filter-select">
              <span className="sr-only">Filter projects</span>
              <select
                value={activeFilter}
                onChange={(event) => handleFilterChange(event.target.value)}
              >
                {filters.map((filter) => (
                  <option value={filter} key={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="archive-grid" aria-live="polite">
            {pagedProjects.map((project) => {
              const title = getProjectTitle(project);
              const image = getProjectImage(project);
              const liveDemoUrl = getLiveDemoUrl(project);
              const githubUrl = getGithubUrl(project);

              return (
                <article className="archive-card" key={project.id || title}>
                  <div className="archive-card__image">
                    <img src={image} alt={`${title} project preview`} />
                    {project.featured && <span>Featured</span>}
                  </div>

                  <div className="archive-card__body">
                    <h2>{title}</h2>
                    <p>{project.description}</p>
                  </div>

                  <div className="tag-row archive-card__tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="archive-card__actions">
                    <div className="archive-card__links">
                      {liveDemoUrl && (
                        <a
                          className="inline-link"
                          href={liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo <FiArrowUpRight aria-hidden="true" />
                        </a>
                      )}
                    </div>
                    {githubUrl && (
                      <a
                        className="archive-card__github"
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub aria-hidden="true" />
                        <span className="sr-only">Open {title} on GitHub</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}

            {pagedProjects.length === 0 && (
              <div className="archive-empty">
                <h2>No projects found.</h2>
                <p>Try a different search term or filter.</p>
              </div>
            )}
          </div>

          <div className="archive-pagination" aria-label="Project pagination">
            <div className="pagination-controls">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setPage((value) => value - 1)}
              >
                <FiArrowLeft aria-hidden="true" />
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (item) => (
                  <button
                    className={
                      currentPage === item ? "pagination-button--active" : ""
                    }
                    type="button"
                    key={item}
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </button>
                ),
              )}
              <button
                type="button"
                disabled={currentPage === pageCount}
                onClick={() => setPage((value) => value + 1)}
              >
                <FiArrowRight aria-hidden="true" />
              </button>
            </div>
            <p>
              Showing {firstVisible}-{lastVisible} of {visibleProjects.length}{" "}
              projects
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
