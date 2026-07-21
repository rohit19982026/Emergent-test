// Photo slots for the site. Each key is a fixed slot; when a real photo
// arrives, put its file in /public/photos/ and set the src here — the
// layout doesn't change, DuotoneMedia handles the treatment. `null`
// renders the designed placeholder instead.
export type PhotoSlot = {
  src: string | null;
  alt: string;
  /** Caption tag shown on the placeholder while no photo exists. */
  placeholderLabel: string;
};

export const photos: Record<"hero" | "about" | "contact", PhotoSlot> = {
  hero: {
    src: null,
    alt: "Vertex Studio editor at work",
    placeholderLabel: "Your team photo here",
  },
  about: {
    src: null,
    alt: "Behind the scenes at Vertex Studio",
    placeholderLabel: "Studio photo",
  },
  contact: {
    src: null,
    alt: "Vertex Studio workspace",
    placeholderLabel: "Workspace",
  },
};
