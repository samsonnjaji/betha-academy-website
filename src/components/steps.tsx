import { admissionSteps } from "@/lib/content";

export function AdmissionSteps({ compact = false }: { compact?: boolean }) {
  const steps = compact ? admissionSteps.slice(0, 3) : admissionSteps;

  return (
    <ol className={`steps ${compact ? "steps--compact" : ""}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="step-card">
          <span className="step-card__number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
