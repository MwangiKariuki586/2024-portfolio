import { FiBarChart2, FiCode, FiGitBranch, FiUserCheck } from "react-icons/fi";
import { processSteps } from "../data";
import { ProcessSkeleton } from "./LoadingStates";

const icons = [FiUserCheck, FiGitBranch, FiCode, FiBarChart2];

const Experience = () => {
  return (
    <section id="process" className="section process-section">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">How I build</p>
        
      </div>

      {processSteps.length > 0 ? (
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = icons[index] || FiUserCheck;

            return (
              <article className="process-card" key={step.number}>
                <span className="process-card__number">{step.number}</span>
                <div className="process-card__body">
                  <Icon aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <ProcessSkeleton />
      )}
    </section>
  );
};

export default Experience;
