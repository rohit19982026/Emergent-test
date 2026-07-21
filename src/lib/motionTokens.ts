// Shared easing/duration system consumed by GSAP, Framer Motion, and CSS
// so every interaction in the site pulls from one source instead of ad hoc values.

export const easing = {
  // Confident "expo-out" curve used for nearly all interactions.
  css: "cubic-bezier(0.16, 1, 0.3, 1)",
  gsap: "expo.out",
  framer: [0.16, 1, 0.3, 1] as const,
};

// Snappier scale than the old editorial theme — this design language is
// punchy, so reveals land fast and hard rather than drifting in.
export const duration = {
  micro: 0.2,
  base: 0.35,
  reveal: 0.5,
  slow: 0.7,
};

export const stagger = {
  tight: 0.03,
  base: 0.06,
  loose: 0.1,
};
