"use client";

export function BackToTop() {
  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
    >
      Back to top ↑
    </button>
  );
}
