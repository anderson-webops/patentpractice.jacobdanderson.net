import { useEffect, useRef } from "react";

export const QUICK_TOUR_STEPS = Object.freeze([
  Object.freeze({
    title: "Begin with the disclosure",
    body:
      "Read the technical problem, disclosed improvement, supported alternatives, and commercial objective before deciding what belongs in the independent claim.",
    detail:
      "The selected mode controls how much guidance and prior-art information is visible.",
  }),
  Object.freeze({
    title: "Draft from the center workspace",
    body:
      "Review introduced terms, disclosure support, and mechanical findings before submission.",
    detail:
      "Ghost prompts teach claim structure only.",
  }),
  Object.freeze({
    title: "Commit before seeing the result",
    body:
      "Submission locks a snapshot of your claims.",
    detail:
      "You receive one bounded amendment or argument round after the simulated Office Action.",
  }),
  Object.freeze({
    title: "Predict, then debrief",
    body:
      "Map the fictional competitor to your amended claim before revealing the result.",
  }),
]);

export function GuidedTourStep({ step = 0 }) {
  const safeStep = Math.min(Math.max(Number(step) || 0, 0), QUICK_TOUR_STEPS.length - 1);
  const record = QUICK_TOUR_STEPS[safeStep];
  const headingRef = useRef(null);

  useEffect(() => {
    const focusHeading = () => headingRef.current?.focus({ preventScroll: true });
    const frame = typeof globalThis.requestAnimationFrame === "function"
      ? globalThis.requestAnimationFrame(focusHeading)
      : globalThis.setTimeout(focusHeading, 0);
    return () => {
      if (typeof globalThis.cancelAnimationFrame === "function") {
        globalThis.cancelAnimationFrame(frame);
      } else {
        globalThis.clearTimeout(frame);
      }
    };
  }, [safeStep]);

  return (
    <section className="guided-tour-step" aria-labelledby="guided-tour-step-title">
      <p className="tour-progress" aria-live="polite">
        Step {safeStep + 1} of {QUICK_TOUR_STEPS.length}
      </p>
      <h3 id="guided-tour-step-title" ref={headingRef} tabIndex={-1}>
        {record.title}
      </h3>
      <p>{record.body}</p>
      {record.detail ? <p>{record.detail}</p> : null}
    </section>
  );
}
