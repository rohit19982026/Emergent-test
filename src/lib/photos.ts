// Media slots for the site. Each key is a fixed slot; when a real asset
// arrives, put its file in /public/photos/ and set the src here — the
// layout doesn't change, the Photo component handles the treatment.
// `null` renders the designed placeholder instead.
export type PhotoSlot = {
  src: string | null;
  alt: string;
  /** "video" renders an autoplaying muted loop; default is image. */
  type?: "image" | "video";
  /**
   * "duotone" (default) pushes the asset through the grayscale+blue brand
   * filter — right for photographs. "raw" shows it untouched — right for
   * generated 3D art already rendered in the brand palette.
   */
  treatment?: "duotone" | "raw";
  /** Caption tag shown on the placeholder while no asset exists. */
  placeholderLabel: string;
};

export const photos: Record<"hero" | "about" | "contact", PhotoSlot> = {
  hero: {
    src: "/photos/hero-loop.mp4",
    alt: "Looping 3D render of the Vertex star monolith with orbiting stars and a play button",
    type: "video",
    treatment: "raw",
    placeholderLabel: "Showreel coming soon",
  },
  about: {
    src: null,
    alt: "Behind the scenes at Vertex Studio",
    placeholderLabel: "Studio",
  },
  contact: {
    src: null,
    alt: "Vertex Studio workspace",
    placeholderLabel: "Workspace",
  },
};
