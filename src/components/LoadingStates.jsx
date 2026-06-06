/* eslint-disable react/prop-types */

export const CometLoader = ({ label = "Loading", size = "1rem" }) => (
  <span className="comet-loader" aria-label={label} role="status" style={{ "--loader-size": size }}>
    <span className="comet-loader__dot" />
  </span>
);

export const SkeletonBlock = ({ className = "", rounded = "" }) => (
  <div
    className={`skeleton-block ${className}`}
    aria-hidden="true"
    style={rounded ? { borderRadius: rounded } : undefined}
  />
);

export const HeroVisualSkeleton = () => (
  <div className="hero-visual-skeleton" aria-label="Loading hero showcase" role="status">
    <SkeletonBlock className="hero-visual-skeleton__image" />
    <SkeletonBlock className="hero-visual-skeleton__chip chip-a" />
    <SkeletonBlock className="hero-visual-skeleton__chip chip-b" />
  </div>
);

export const FeaturedBuildSkeleton = () => (
  <div className="featured-card featured-card--skeleton" aria-label="Loading featured build" role="status">
    <SkeletonBlock className="skeleton-line skeleton-line--short" />
    <SkeletonBlock className="skeleton-line skeleton-line--title" />
    <SkeletonBlock className="skeleton-line" />
    <SkeletonBlock className="skeleton-line" />
    <div className="featured-skeleton-grid">
      <SkeletonBlock className="skeleton-pill" />
      <SkeletonBlock className="skeleton-pill" />
      <SkeletonBlock className="skeleton-pill" />
    </div>
  </div>
);

export const ProjectCardSkeleton = () => (
  <article className="project-card project-card--skeleton" aria-label="Loading project" role="status">
    <SkeletonBlock className="project-card__image-skeleton" />
    <SkeletonBlock className="skeleton-line skeleton-line--title" />
    <SkeletonBlock className="skeleton-line" />
    <SkeletonBlock className="skeleton-line skeleton-line--short" />
  </article>
);

export const ProcessSkeleton = () => (
  <div className="process-grid" aria-label="Loading process" role="status">
    {[0, 1, 2, 3].map((item) => (
      <div className="process-card process-card--skeleton" key={item}>
        <SkeletonBlock className="skeleton-number" />
        <SkeletonBlock className="skeleton-line skeleton-line--title" />
        <SkeletonBlock className="skeleton-line" />
      </div>
    ))}
  </div>
);
