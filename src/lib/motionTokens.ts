// Shared easing/duration system consumed by GSAP, Framer Motion, and CSS
// so every interaction in the site pulls from one source instead of ad hoc values.

export const easing = {
  // Confident "expo-out" curve used for nearly all interactions.
  css: "cubic-bezier(0.16, 1, 0.3, 1)",
  gsap: "expo.out",
  framer: [0.16, 1, 0.3, 1] as const,
};

export const duration = {
  micro: 0.25,
  base: 0.4,
  reveal: 0.7,
  slow: 0.9,
};

export const stagger = {
  tight: 0.04,
  base: 0.08,
  loose: 0.12,
};
